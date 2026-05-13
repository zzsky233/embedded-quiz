#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Use DeepSeek to review every quiz question and generate explanations.

The script reads data/questions.js and writes data/explanations.js in the format
used by the frontend. It keeps a cache file so interrupted runs can resume.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any, Dict, List, Optional


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_QUESTIONS = ROOT / "data" / "questions.js"
DEFAULT_OUTPUT = ROOT / "data" / "explanations.js"
DEFAULT_CACHE = ROOT / "data" / "deepseek_explanations_cache.json"
DEFAULT_ENV = ROOT / ".env"
API_URL = "https://api.deepseek.com/chat/completions"


SYSTEM_PROMPT = """你是嵌入式系统课程助教，负责审查选择题答案并生成解析。
请保持批判意识：不要为了迎合题库标准答案而强行解释。
如果标准答案可能错误、题干有歧义、选项不严谨、教材口径可能不同，请在 review 中说明。
如果题目涉及十六进制、位运算、大小端、寄存器位操作、位带地址、数码管编码等，请给出 calculation。
输出必须是严格 JSON，不要包含 Markdown，不要包含 JSON 以外的文字。"""


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate quiz explanations with DeepSeek.")
    parser.add_argument("--questions", type=Path, default=DEFAULT_QUESTIONS, help="Path to data/questions.js")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="Path to write explanations.js")
    parser.add_argument("--cache", type=Path, default=DEFAULT_CACHE, help="JSON cache path")
    parser.add_argument("--env", type=Path, default=DEFAULT_ENV, help="Optional .env path")
    parser.add_argument("--model", default=os.getenv("DEEPSEEK_MODEL", "deepseek-v4-flash"))
    parser.add_argument("--base-url", default=os.getenv("DEEPSEEK_API_URL", API_URL))
    parser.add_argument("--limit", type=int, default=0, help="Only process the first N selected questions")
    parser.add_argument("--ids", default="", help="Comma-separated question ids, for example Sheet1-1,Sheet2-82")
    parser.add_argument("--sleep", type=float, default=0.4, help="Seconds to sleep between requests")
    parser.add_argument("--retries", type=int, default=3)
    parser.add_argument("--overwrite", action="store_true", help="Ignore cached results and call API again")
    parser.add_argument("--dry-run", action="store_true", help="Print request preview without calling API")
    args = parser.parse_args()

    load_env(args.env)
    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key and not args.dry_run:
        print("Missing DEEPSEEK_API_KEY. Put it in .env or set it in your shell.", file=sys.stderr)
        return 2

    questions = load_questions(args.questions)
    selected = select_questions(questions, args.ids, args.limit)
    cache = load_json(args.cache, default={})

    if args.dry_run:
        print(f"Would process {len(selected)} question(s).")
        if selected:
            print(json.dumps(build_payload(selected[0], args.model), ensure_ascii=False, indent=2))
        return 0

    for index, question in enumerate(selected, start=1):
        qid = question["id"]
        if qid in cache and not args.overwrite:
            print(f"[{index}/{len(selected)}] {qid} cached")
            continue

        print(f"[{index}/{len(selected)}] {qid} calling DeepSeek...")
        try:
            cache[qid] = call_with_retries(
                api_url=args.base_url,
                api_key=api_key or "",
                model=args.model,
                question=question,
                retries=args.retries,
            )
            save_json(args.cache, cache)
        except Exception as exc:  # noqa: BLE001 - keep batch processing resilient.
            print(f"  failed: {exc}", file=sys.stderr)
            cache[qid] = fallback_result(question, str(exc))
            save_json(args.cache, cache)

        if args.sleep > 0:
            time.sleep(args.sleep)

    explanations = build_output(questions, cache)
    write_explanations_js(args.output, explanations)
    print(f"Wrote {len(explanations)} explanations to {args.output}")
    return 0


def load_env(path: Path) -> None:
    if not path.exists():
        return

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def load_questions(path: Path) -> List[Dict[str, Any]]:
    text = path.read_text(encoding="utf-8-sig")
    match = re.search(r"window\.EMBEDDED_QUESTIONS\s*=\s*(\[.*\])\s*;?\s*$", text, re.S)
    if not match:
        raise ValueError(f"Could not parse questions from {path}")
    data = json.loads(match.group(1))
    if not isinstance(data, list):
        raise ValueError("questions.js did not contain a list")
    return data


def select_questions(questions: List[Dict[str, Any]], ids: str, limit: int) -> List[Dict[str, Any]]:
    selected = questions
    if ids.strip():
        wanted = {item.strip() for item in ids.split(",") if item.strip()}
        selected = [question for question in questions if question.get("id") in wanted]
    if limit > 0:
        selected = selected[:limit]
    return selected


def build_payload(question: Dict[str, Any], model: str) -> Dict[str, Any]:
    user_prompt = {
        "task": "判断题库标准答案是否正确，并生成网页刷题用解析。",
        "output_schema": {
            "answerStatus": "ok | review | wrong",
            "suggestedAnswer": "A | B | C | D | uncertain",
            "explanation": "简明解析，说明为什么这样选；不要空泛。",
            "calculation": "如涉及计算，写关键步骤；无计算则为空字符串。",
            "review": "如标准答案/题干/选项可疑，在这里说明；无问题则为空字符串。",
            "confidence": "high | medium | low",
        },
        "rules": [
            "answerStatus=ok 表示标准答案看起来正确。",
            "answerStatus=review 表示标准答案可能正确，但题干、选项或教材口径需要复核。",
            "answerStatus=wrong 表示标准答案很可能错误，此时 suggestedAnswer 给出更合理答案。",
            "不要强行迎合 standardAnswer。",
            "解析应面向嵌入式系统课程刷题，尽量具体。",
        ],
        "question": {
            "id": question.get("id"),
            "source": question.get("source"),
            "number": question.get("number"),
            "stem": question.get("question"),
            "options": question.get("options"),
            "standardAnswer": question.get("answer"),
        },
    }

    return {
        "model": model,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": json.dumps(user_prompt, ensure_ascii=False)},
        ],
        "response_format": {"type": "json_object"},
        "temperature": 0.1,
        "max_tokens": 1200,
        "thinking": {"type": "disabled"},
    }


def call_with_retries(
    api_url: str,
    api_key: str,
    model: str,
    question: Dict[str, Any],
    retries: int,
) -> Dict[str, Any]:
    last_error: Optional[Exception] = None
    for attempt in range(1, retries + 1):
        try:
            return call_deepseek(api_url, api_key, build_payload(question, model))
        except Exception as exc:  # noqa: BLE001 - retry network and parse issues.
            last_error = exc
            if attempt < retries:
                time.sleep(min(2**attempt, 8))
    raise RuntimeError(last_error)


def call_deepseek(api_url: str, api_key: str, payload: Dict[str, Any]) -> Dict[str, Any]:
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        api_url,
        data=data,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(request, timeout=90) as response:
            body = response.read().decode("utf-8")
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {exc.code}: {detail}") from exc

    completion = json.loads(body)
    choice = completion["choices"][0]
    finish_reason = choice.get("finish_reason")
    content = choice["message"].get("content") or ""
    if finish_reason == "length":
        raise RuntimeError("DeepSeek response was truncated; increase max_tokens")

    parsed = json.loads(content)
    return normalize_result(parsed)


def normalize_result(result: Dict[str, Any]) -> Dict[str, Any]:
    status = str(result.get("answerStatus", "review")).strip().lower()
    if status not in {"ok", "review", "wrong"}:
        status = "review"

    suggested = str(result.get("suggestedAnswer", "uncertain")).strip().upper()
    if suggested not in {"A", "B", "C", "D"}:
        suggested = "uncertain"

    confidence = str(result.get("confidence", "medium")).strip().lower()
    if confidence not in {"high", "medium", "low"}:
        confidence = "medium"

    return {
        "answerStatus": status,
        "suggestedAnswer": suggested,
        "explanation": clean_text(result.get("explanation", "")),
        "calculation": clean_text(result.get("calculation", "")),
        "review": clean_text(result.get("review", "")),
        "confidence": confidence,
    }


def fallback_result(question: Dict[str, Any], error: str) -> Dict[str, Any]:
    answer = question.get("answer", "")
    option = (question.get("options") or {}).get(answer, "")
    return {
        "answerStatus": "review",
        "suggestedAnswer": answer or "uncertain",
        "explanation": f"DeepSeek 调用失败，暂保留题库标准答案 {answer}（{option}）。",
        "calculation": "",
        "review": f"AI 解析生成失败，需要人工复核。错误信息：{error}",
        "confidence": "low",
    }


def build_output(questions: List[Dict[str, Any]], cache: Dict[str, Any]) -> Dict[str, Any]:
    output: Dict[str, Any] = {}
    for question in questions:
        qid = question["id"]
        result = cache.get(qid)
        if not result:
            result = fallback_result(question, "not processed")
        output[qid] = normalize_result(result)
    return output


def write_explanations_js(path: Path, explanations: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    content = "window.QUESTION_EXPLANATIONS = "
    content += json.dumps(explanations, ensure_ascii=False, indent=2)
    content += ";\n"
    path.write_text(content, encoding="utf-8")


def load_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def clean_text(value: Any) -> str:
    return str(value or "").strip()


if __name__ == "__main__":
    raise SystemExit(main())
