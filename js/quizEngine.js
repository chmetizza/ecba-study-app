const QuizEngine = (() => {
  "use strict";

  const STATE_KEYS = {
    DAILY_RESULTS: "ecba_daily_quiz_results",
    EXAM_HISTORY: "ecba_exam_history"
  };

  function shuffle(items) {
    const copy = Array.isArray(items) ? [...items] : [];

    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  function calculateScore(answers, questions) {
    if (!Array.isArray(answers) || !Array.isArray(questions) || !questions.length) {
      return {
        correct: 0,
        total: 0,
        percentage: 0,
        passed: false
      };
    }

    let correct = 0;

    questions.forEach((question, index) => {
      if (Number(answers[index]) === Number(question.correctIndex)) {
        correct += 1;
      }
    });

    const percentage = Math.round((correct / questions.length) * 100);

    return {
      correct,
      total: questions.length,
      percentage,
      passed: percentage >= 70
    };
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn("QuizEngine: shranjevanje podatkov ni uspelo.", error);
      return false;
    }
  }

  function loadJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.warn("QuizEngine: branje podatkov ni uspelo.", error);
      return fallback;
    }
  }

  function saveDailyResult(day, score) {
    const results = loadJSON(STATE_KEYS.DAILY_RESULTS, {});
    results[String(day)] = {
      ...score,
      completedAt: new Date().toISOString()
    };
    saveJSON(STATE_KEYS.DAILY_RESULTS, results);
  }

  function getDailyResult(day) {
    const results = loadJSON(STATE_KEYS.DAILY_RESULTS, {});
    return results[String(day)] || null;
  }

  function getDailyResults() {
    return loadJSON(STATE_KEYS.DAILY_RESULTS, {});
  }

  function saveExamResult(result) {
    const history = loadJSON(STATE_KEYS.EXAM_HISTORY, []);

    if (!Array.isArray(history)) {
      saveJSON(STATE_KEYS.EXAM_HISTORY, [result]);
      return;
    }

    history.push({
      ...result,
      completedAt: new Date().toISOString()
    });

    saveJSON(STATE_KEYS.EXAM_HISTORY, history.slice(-20));
  }

  function getExamHistory() {
    const history = loadJSON(STATE_KEYS.EXAM_HISTORY, []);
    return Array.isArray(history) ? history : [];
  }

  function clearQuizStorage() {
    localStorage.removeItem(STATE_KEYS.DAILY_RESULTS);
    localStorage.removeItem(STATE_KEYS.EXAM_HISTORY);
  }

  function createDailyQuizEngine(dayData) {
    if (!dayData || !Array.isArray(dayData.quiz)) {
      throw new TypeError("QuizEngine: podatki dnevnega kviza niso veljavni.");
    }

    const questions = dayData.quiz.map((question) => ({ ...question }));
    let activeIndex = 0;
    let answers = new Array(questions.length).fill(null);
    let submitted = false;

    function getQuestions() {
      return questions.map((question) => ({
        ...question,
        options: {
          en: [...(question.options?.en || [])],
          sl: [...(question.options?.sl || [])]
        },
        question: { ...(question.question || {}) },
        explanation: { ...(question.explanation || {}) }
      }));
    }

    function getAnswer(index) {
      return answers[index] === undefined ? null : answers[index];
    }

    function setAnswer(index, optionIndex) {
      if (submitted) {
        return false;
      }

      if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= questions.length ||
        !Number.isInteger(optionIndex) ||
        optionIndex < 0 ||
        optionIndex >= 4
      ) {
        return false;
      }

      answers[index] = optionIndex;
      return true;
    }

    function clearAnswer(index) {
      if (submitted || !Number.isInteger(index)) {
        return false;
      }

      answers[index] = null;
      return true;
    }

    function setActiveIndex(index) {
      if (!Number.isInteger(index) || index < 0 || index >= questions.length) {
        return false;
      }

      activeIndex = index;
      return true;
    }

    function getActiveIndex() {
      return activeIndex;
    }

    function getAnsweredCount() {
      return answers.filter((answer) => answer !== null).length;
    }

    function submit() {
      if (submitted) {
        return getResult();
      }

      submitted = true;
      const result = calculateScore(answers, questions);
      saveDailyResult(dayData.day, result);
      return result;
    }

    function getResult() {
      return calculateScore(answers, questions);
    }

    function reset() {
      activeIndex = 0;
      answers = new Array(questions.length).fill(null);
      submitted = false;
    }

    function getAnswers() {
      return [...answers];
    }

    return {
      day: dayData.day,
      getQuestions,
      getAnswer,
      setAnswer,
      clearAnswer,
      setActiveIndex,
      getActiveIndex,
      getAnsweredCount,
      submit,
      getResult,
      getAnswers,
      reset
    };
  }

  function createExamEngine(questionBank, options = {}) {
    const questionCount = Number.isInteger(options.questionCount)
      ? options.questionCount
      : 50;
    const durationSeconds = Number.isInteger(options.durationSeconds)
      ? options.durationSeconds
      : 60 * 60;
    const bank = Array.isArray(questionBank) ? questionBank : [];

    if (!bank.length) {
      throw new Error("QuizEngine: hranilnik izpitnih vprašanj je prazen.");
    }

    const questions = shuffle(bank).slice(0, Math.min(questionCount, bank.length));
    let answers = new Array(questions.length).fill(null);
    let flagged = new Array(questions.length).fill(false);
    let activeIndex = 0;
    let remainingSeconds = durationSeconds;
    let timerId = null;
    let startedAt = null;
    let submitted = false;
    let timedOut = false;
    let autoSubmitCallback = null;

    function getQuestions() {
      return questions.map((question) => ({
        ...question,
        options: {
          en: [...(question.options?.en || [])],
          sl: [...(question.options?.sl || [])]
        },
        question: { ...(question.question || {}) },
        explanation: { ...(question.explanation || {}) }
      }));
    }

    function setAnswer(index, optionIndex) {
      if (submitted) {
        return false;
      }

      if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= questions.length ||
        !Number.isInteger(optionIndex) ||
        optionIndex < 0 ||
        optionIndex >= 4
      ) {
        return false;
      }

      answers[index] = optionIndex;
      return true;
    }

    function getAnswer(index) {
      if (!Number.isInteger(index) || index < 0 || index >= questions.length) {
        return null;
      }

      return answers[index];
    }

    function clearAnswer(index) {
      if (submitted || !Number.isInteger(index) || index < 0 || index >= questions.length) {
        return false;
      }

      answers[index] = null;
      return true;
    }

    function setActiveIndex(index) {
      if (!Number.isInteger(index) || index < 0 || index >= questions.length) {
        return false;
      }

      activeIndex = index;
      return true;
    }

    function getActiveIndex() {
      return activeIndex;
    }

    function toggleFlag(index) {
      if (submitted || !Number.isInteger(index) || index < 0 || index >= questions.length) {
        return false;
      }

      flagged[index] = !flagged[index];
      return flagged[index];
    }

    function isFlagged(index) {
      return Boolean(flagged[index]);
    }

    function getAnsweredCount() {
      return answers.filter((answer) => answer !== null).length;
    }

    function getFlaggedCount() {
      return flagged.filter(Boolean).length;
    }

    function getRemainingSeconds() {
      return remainingSeconds;
    }

    function formatTime(seconds) {
      const safeSeconds = Math.max(0, Number(seconds) || 0);
      const hours = Math.floor(safeSeconds / 3600);
      const minutes = Math.floor((safeSeconds % 3600) / 60);
      const secs = safeSeconds % 60;

      return [hours, minutes, secs]
        .map((part) => String(part).padStart(2, "0"))
        .join(":");
    }

    function start(onTick, onAutoSubmit) {
      if (startedAt) {
        return;
      }

      startedAt = new Date();
      autoSubmitCallback =
        typeof onAutoSubmit === "function" ? onAutoSubmit : null;

      if (typeof onTick === "function") {
        onTick(remainingSeconds);
      }

      timerId = window.setInterval(() => {
        if (submitted) {
          stop();
          return;
        }

        remainingSeconds = Math.max(0, remainingSeconds - 1);

        if (typeof onTick === "function") {
          onTick(remainingSeconds);
        }

        if (remainingSeconds === 0) {
          timedOut = true;
          submit();
          if (typeof autoSubmitCallback === "function") {
            autoSubmitCallback(getResult());
          }
        }
      }, 1000);
    }

    function stop() {
      if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    function submit() {
      if (submitted) {
        return getResult();
      }

      stop();
      submitted = true;

      const result = getResult();
      saveExamResult(result);
      return result;
    }

    function calculateKnowledgeAreaBreakdown() {
      const breakdown = {};

      questions.forEach((question, index) => {
        const area =
          question.knowledgeArea ||
          question.knowledgeAreaEn ||
          "Business Analysis";
        const current = breakdown[area] || { correct: 0, total: 0 };
        current.total += 1;

        if (Number(answers[index]) === Number(question.correctIndex)) {
          current.correct += 1;
        }

        breakdown[area] = current;
      });

      return Object.entries(breakdown)
        .map(([area, values]) => ({
          area,
          correct: values.correct,
          total: values.total,
          percentage: values.total
            ? Math.round((values.correct / values.total) * 100)
            : 0
        }))
        .sort((a, b) => a.area.localeCompare(b.area));
    }

    function getReview() {
      return questions.map((question, index) => ({
        index,
        question,
        selectedIndex: answers[index],
        correctIndex: question.correctIndex,
        correct: Number(answers[index]) === Number(question.correctIndex),
        flagged: Boolean(flagged[index])
      }));
    }

    function getResult() {
      const score = calculateScore(answers, questions);
      return {
        ...score,
        passMark: 70,
        timedOut,
        answeredCount: getAnsweredCount(),
        unansweredCount: questions.length - getAnsweredCount(),
        flaggedCount: getFlaggedCount(),
        knowledgeAreas: calculateKnowledgeAreaBreakdown(),
        review: getReview(),
        durationSeconds:
          startedAt
            ? Math.max(0, durationSeconds - remainingSeconds)
            : 0
      };
    }

    function reset() {
      stop();
      activeIndex = 0;
      answers = new Array(questions.length).fill(null);
      flagged = new Array(questions.length).fill(false);
      remainingSeconds = durationSeconds;
      startedAt = null;
      submitted = false;
      timedOut = false;
      autoSubmitCallback = null;
    }

    function getAnswers() {
      return [...answers];
    }

    function getFlagged() {
      return [...flagged];
    }

    return {
      questionCount: questions.length,
      durationSeconds,
      getQuestions,
      setAnswer,
      getAnswer,
      clearAnswer,
      setActiveIndex,
      getActiveIndex,
      toggleFlag,
      isFlagged,
      getAnsweredCount,
      getFlaggedCount,
      getRemainingSeconds,
      formatTime,
      start,
      stop,
      submit,
      getResult,
      getReview,
      getKnowledgeAreaBreakdown: calculateKnowledgeAreaBreakdown,
      reset,
      getAnswers,
      getFlagged
    };
  }

  return {
    shuffle,
    calculateScore,
    saveDailyResult,
    getDailyResult,
    getDailyResults,
    saveExamResult,
    getExamHistory,
    clearQuizStorage,
    createDailyQuizEngine,
    createExamEngine
  };
})();

window.QuizEngine = QuizEngine;
