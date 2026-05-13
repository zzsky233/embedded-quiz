(function () {
  const questions = Array.isArray(window.EMBEDDED_QUESTIONS) ? window.EMBEDDED_QUESTIONS : [];
  const explanations = window.QUESTION_EXPLANATIONS || {};
  const storageKey = "embeddedQuizState:v1";
  const optionKeys = ["A", "B", "C", "D"];

  const els = {
    sourceSelect: document.querySelector("#sourceSelect"),
    modeSelect: document.querySelector("#modeSelect"),
    doneCount: document.querySelector("#doneCount"),
    accuracyRate: document.querySelector("#accuracyRate"),
    wrongCount: document.querySelector("#wrongCount"),
    favoriteCount: document.querySelector("#favoriteCount"),
    favoriteBtn: document.querySelector("#favoriteBtn"),
    showExplanationBtn: document.querySelector("#showExplanationBtn"),
    resetProgressBtn: document.querySelector("#resetProgressBtn"),
    clearWrongBtn: document.querySelector("#clearWrongBtn"),
    questionSource: document.querySelector("#questionSource"),
    progressText: document.querySelector("#progressText"),
    prevBtn: document.querySelector("#prevBtn"),
    nextBtn: document.querySelector("#nextBtn"),
    questionNumber: document.querySelector("#questionNumber"),
    answerState: document.querySelector("#answerState"),
    questionText: document.querySelector("#questionText"),
    optionsList: document.querySelector("#optionsList"),
    feedback: document.querySelector("#feedback"),
    questionNav: document.querySelector("#questionNav"),
    navCount: document.querySelector("#navCount")
  };

  const state = loadState();
  let activeQuestions = [];
  let currentIndex = 0;
  let explanationVisible = false;

  init();

  function init() {
    fillSourceOptions();
    els.sourceSelect.value = state.source;
    els.modeSelect.value = state.mode;
    bindEvents();
    refreshQuestionSet();
  }

  function fillSourceOptions() {
    const sources = [...new Set(questions.map((item) => item.source))];
    els.sourceSelect.innerHTML = [
      `<option value="all">全部题目</option>`,
      ...sources.map((source) => `<option value="${escapeHtml(source)}">${escapeHtml(source)}</option>`)
    ].join("");
  }

  function bindEvents() {
    els.sourceSelect.addEventListener("change", () => {
      state.source = els.sourceSelect.value;
      state.indexByScope[getScopeKey()] = 0;
      saveState();
      refreshQuestionSet();
    });

    els.modeSelect.addEventListener("change", () => {
      state.mode = els.modeSelect.value;
      state.indexByScope[getScopeKey()] = 0;
      saveState();
      refreshQuestionSet();
    });

    els.prevBtn.addEventListener("click", () => moveQuestion(-1));
    els.nextBtn.addEventListener("click", () => moveQuestion(1));

    els.favoriteBtn.addEventListener("click", () => {
      const question = getCurrentQuestion();
      if (!question) return;
      if (state.favorites.includes(question.id)) {
        state.favorites = state.favorites.filter((id) => id !== question.id);
      } else {
        state.favorites.push(question.id);
      }
      saveState();
      render();
    });

    els.showExplanationBtn.addEventListener("click", () => {
      explanationVisible = !explanationVisible;
      render();
    });

    els.resetProgressBtn.addEventListener("click", () => {
      const scope = getScopeKey();
      state.indexByScope[scope] = 0;
      resetAnswersForActiveQuestions();
      currentIndex = 0;
      explanationVisible = false;
      saveState();
      refreshQuestionSet();
    });

    els.clearWrongBtn.addEventListener("click", () => {
      state.wrongIds = [];
      saveState();
      refreshQuestionSet();
    });
  }

  function refreshQuestionSet() {
    activeQuestions = getFilteredQuestions();
    if (state.mode === "random") {
      activeQuestions = shuffle(activeQuestions);
    }
    currentIndex = clamp(state.indexByScope[getScopeKey()] || 0, 0, Math.max(activeQuestions.length - 1, 0));
    render();
  }

  function getFilteredQuestions() {
    let list = questions;
    if (state.source !== "all") {
      list = list.filter((item) => item.source === state.source);
    }
    if (state.mode === "wrong") {
      const wrongSet = new Set(state.wrongIds);
      list = list.filter((item) => wrongSet.has(item.id));
    }
    return list;
  }

  function moveQuestion(offset) {
    if (!activeQuestions.length) return;
    currentIndex = clamp(currentIndex + offset, 0, activeQuestions.length - 1);
    explanationVisible = false;
    state.indexByScope[getScopeKey()] = currentIndex;
    saveState();
    render();
  }

  function render() {
    renderStats();
    const question = getCurrentQuestion();

    if (!question) {
      els.questionSource.textContent = "空";
      els.progressText.textContent = "第 0 / 0 题";
      els.questionNumber.textContent = "#0";
      els.answerState.textContent = state.mode === "wrong" ? "暂无错题" : "暂无题目";
      els.questionText.textContent = state.mode === "wrong" ? "错题本现在是空的，可以先去顺序或随机模式刷几题。" : "没有可用题目。";
      els.optionsList.innerHTML = "";
      els.feedback.hidden = true;
      renderQuestionNav();
      els.favoriteBtn.disabled = true;
      els.showExplanationBtn.disabled = true;
      return;
    }

    const record = state.answers[question.id];
    const isFavorite = state.favorites.includes(question.id);
    els.favoriteBtn.disabled = false;
    els.showExplanationBtn.disabled = Boolean(record);
    els.favoriteBtn.textContent = isFavorite ? "取消收藏" : "收藏本题";
    els.showExplanationBtn.textContent = record ? "解析已显示" : (explanationVisible ? "隐藏解析" : "查看解析");
    els.questionSource.textContent = question.source;
    els.progressText.textContent = `第 ${currentIndex + 1} / ${activeQuestions.length} 题`;
    els.questionNumber.textContent = `#${question.number || currentIndex + 1}`;
    els.answerState.textContent = record ? (record.correct ? "回答正确" : "回答错误") : "请选择答案";
    els.questionText.textContent = question.question;
    els.optionsList.innerHTML = optionKeys.map((key) => renderOption(question, key, record)).join("");

    [...els.optionsList.querySelectorAll(".option-button")].forEach((button) => {
      button.addEventListener("click", () => chooseAnswer(button.dataset.key));
    });

    if (record || explanationVisible) {
      els.feedback.hidden = false;
      els.feedback.innerHTML = renderFeedback(question, record);
    } else {
      els.feedback.hidden = true;
      els.feedback.textContent = "";
    }

    els.prevBtn.disabled = currentIndex <= 0;
    els.nextBtn.disabled = currentIndex >= activeQuestions.length - 1;
    renderQuestionNav();
  }

  function renderQuestionNav() {
    if (!els.questionNav || !els.navCount) return;

    els.navCount.textContent = `${activeQuestions.length} 题`;
    if (!activeQuestions.length) {
      els.questionNav.innerHTML = `<p class="question-nav-empty">暂无题目</p>`;
      return;
    }

    els.questionNav.innerHTML = activeQuestions.map((question, index) => {
      const record = state.answers[question.id];
      const classes = ["question-jump"];
      if (index === currentIndex) classes.push("is-current");
      if (record) classes.push(record.correct ? "is-done" : "is-wrong");
      return `
        <button class="${classes.join(" ")}" type="button" data-index="${index}" title="${escapeHtml(question.question)}">
          ${question.number || index + 1}
        </button>
      `;
    }).join("");

    [...els.questionNav.querySelectorAll(".question-jump")].forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex = Number(button.dataset.index);
        explanationVisible = false;
        state.indexByScope[getScopeKey()] = currentIndex;
        saveState();
        render();
      });
    });
  }

  function renderOption(question, key, record) {
    const classes = ["option-button"];
    if (record) {
      if (key === question.answer) classes.push("is-correct");
      if (key === record.choice && key !== question.answer) classes.push("is-wrong");
    }
    return `
      <button class="${classes.join(" ")}" type="button" data-key="${key}">
        <span class="option-key">${key}</span>
        <span class="option-text">${escapeHtml(question.options[key] || "")}</span>
      </button>
    `;
  }

  function renderFeedback(question, record) {
    const detail = explanations[question.id];
    const answerLine = record
      ? (record.correct
          ? `<strong>答对了。</strong> 正确答案是 ${question.answer}。`
          : `<strong>答错了。</strong> 你选择了 ${record.choice}，正确答案是 ${question.answer}。`)
      : `<strong>解析预览。</strong> 正确答案是 ${question.answer}。`;

    if (!detail) {
      return `${answerLine}<div class="explanation-block"><h3>解析</h3><p>暂无解析。</p></div>`;
    }

    const review = detail.review
      ? `<div class="review-note"><strong>复核提示：</strong>${escapeHtml(detail.review)}</div>`
      : "";
    const explanation = detail.explanation
      ? `<div class="explanation-block"><h3>解析</h3><p>${escapeHtml(detail.explanation)}</p></div>`
      : "";
    const calculation = detail.calculation
      ? `<div class="explanation-block"><h3>计算过程</h3><p>${escapeHtml(detail.calculation)}</p></div>`
      : "";

    return `${answerLine}${review}${explanation}${calculation}`;
  }

  function chooseAnswer(choice) {
    const question = getCurrentQuestion();
    if (!question) return;

    const correct = choice === question.answer;
    state.answers[question.id] = {
      choice,
      correct,
      answeredAt: new Date().toISOString()
    };

    if (correct) {
      state.wrongIds = state.wrongIds.filter((id) => id !== question.id);
    } else if (!state.wrongIds.includes(question.id)) {
      state.wrongIds.push(question.id);
    }

    saveState();
    render();
  }

  function resetAnswersForActiveQuestions() {
    const ids = new Set(activeQuestions.map((question) => question.id));
    for (const id of ids) {
      delete state.answers[id];
    }
    state.wrongIds = state.wrongIds.filter((id) => !ids.has(id));
  }

  function renderStats() {
    const records = Object.values(state.answers);
    const done = records.length;
    const correct = records.filter((item) => item.correct).length;
    els.doneCount.textContent = done;
    els.accuracyRate.textContent = done ? `${Math.round((correct / done) * 100)}%` : "0%";
    els.wrongCount.textContent = state.wrongIds.length;
    els.favoriteCount.textContent = state.favorites.length;
  }

  function getCurrentQuestion() {
    return activeQuestions[currentIndex];
  }

  function getScopeKey() {
    return `${state.source}:${state.mode}`;
  }

  function loadState() {
    const defaults = {
      source: "all",
      mode: "order",
      indexByScope: {},
      answers: {},
      wrongIds: [],
      favorites: []
    };

    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
    } catch (error) {
      return defaults;
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
