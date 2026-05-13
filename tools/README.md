# DeepSeek 题目解析脚本

## 准备

在项目根目录新建 `.env`：

```env
DEEPSEEK_API_KEY=sk-your-api-key-here
DEEPSEEK_MODEL=deepseek-v4-flash
```

## 先试跑一题

```powershell
python tools\deepseek_review_questions.py --limit 1
```

也可以只跑指定题目：

```powershell
python tools\deepseek_review_questions.py --ids Sheet1-147,Sheet1-39
```

## 跑完整题库

```powershell
python tools\deepseek_review_questions.py
```

脚本会读取 `data/questions.js`，调用 DeepSeek 审查标准答案并生成解析，然后写入：

```text
data/explanations.js
```

中间缓存保存在：

```text
data/deepseek_explanations_cache.json
```

如果中途失败，重新执行会从缓存继续。需要强制重新生成时加：

```powershell
python tools\deepseek_review_questions.py --overwrite
```

## 输出字段

每题会生成：

- `answerStatus`: `ok` / `review` / `wrong`
- `suggestedAnswer`: AI 认为更合理的答案
- `explanation`: 解析
- `calculation`: 计算过程，没有则为空
- `review`: 题目或答案疑点
- `confidence`: `high` / `medium` / `low`
