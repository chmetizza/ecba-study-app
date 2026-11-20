"use strict";

const App = (() => {
  const STORAGE_KEYS = {
    LANGUAGE: "ecba_language",
    COMPLETED_DAYS: "ecba_completed_days",
    DAY_SCORES: "ecba_day_scores",
    LAST_DAY: "ecba_last_day"
  };

  const VIEWS = {
    plan: "plan-view",
    day: "day-view",
    exam: "exam-view",
    glossary: "glossary-view"
  };

  const TRANSLATIONS = {
    en: {
      "nav.plan": "14-Day Plan",
      "nav.exam": "Exam Simulator",
      "nav.glossary": "Glossary",
      "plan.eyebrow": "BABOK® Guide v3",
      "plan.title": "14-Day Study Plan",
      "plan.reset": "Reset Progress",
      "plan.progress": "Overall progress",
      "plan.completed": "Completed",
      "plan.started": "In progress",
      "plan.notStarted": "Not started",
      "plan.open": "Open day",
      "plan.review": "Review",
      "plan.score": "Score",
      "day.back": "Back to study plan",
      "day.theory": "Theory",
      "day.summary": "Key Takeaways",
      "day.quiz": "Daily Quiz",
      "day.quizProgress": "questions answered",
      "day.submitQuiz": "Submit quiz",
      "day.tryAgain": "Try again",
      "day.complete": "Day marked as completed",
      "day.noPass": "You need at least 70% to complete this day",
      "day.completedStatus": "Completed",
      "day.inProgressStatus": "In progress",
      "exam.eyebrow": "ECBA Practice Exam",
      "exam.title": "Exam Simulator",
      "exam.description": "Test your knowledge with a 50-question exam lasting up to 60 minutes.",
      "exam.questions": "Questions",
      "exam.minutes": "Minutes",
      "exam.passMark": "Pass mark",
      "exam.start": "Start exam",
      "exam.navigation": "Navigation",
      "exam.answered": "Answered",
      "exam.unanswered": "Unanswered",
      "exam.flagged": "Flagged",
      "exam.flagQuestion": "Flag for review",
      "exam.unflagQuestion": "Remove flag",
      "exam.previous": "Previous",
      "exam.next": "Next",
      "exam.submit": "Submit exam",
      "exam.review": "Answer Review",
      "exam.restart": "Take another exam",
      "exam.confirmSubmit": "Submit the exam now?",
      "exam.confirmReset": "Reset all study progress?",
      "exam.pass": "Pass",
      "exam.fail": "Fail",
      "exam.correct": "Correct",
      "exam.incorrect": "Incorrect",
      "exam.selectedAnswer": "Your answer",
      "exam.correctAnswer": "Correct answer",
      "exam.noAnswer": "No answer",
      "exam.breakdown": "Knowledge Area Breakdown",
      "exam.question": "Question",
      "exam.timeout": "Time has expired. Your exam was submitted automatically.",
      "exam.noQuestions": "No exam questions are currently available.",
      "glossary.eyebrow": "BABOK® Terminology",
      "glossary.title": "Terminology Glossary",
      "glossary.search": "Search glossary",
      "glossary.searchPlaceholder": "Search term or definition…",
      "glossary.letter": "Letter",
      "glossary.category": "Category",
      "glossary.all": "All",
      "glossary.allCategories": "All categories",
      "glossary.example": "Example / exam context",
      "glossary.noResults": "No glossary entries match your filters.",
      "common.yes": "Yes",
      "common.no": "No",
      "common.answer": "Answer",
      "common.english": "English",
      "common.slovene": "Slovenian"
    },
    sl: {
      "nav.plan": "14-dnevni načrt",
      "nav.exam": "Simulacija izpita",
      "nav.glossary": "Slovar",
      "plan.eyebrow": "BABOK® Guide v3",
      "plan.title": "14-dnevni učni načrt",
      "plan.reset": "Ponastavi napredek",
      "plan.progress": "Skupni napredek",
      "plan.completed": "Zaključen",
      "plan.started": "V teku",
      "plan.notStarted": "Ni začet",
      "plan.open": "Odpri dan",
      "plan.review": "Preglej",
      "plan.score": "Rezultat",
      "day.back": "Nazaj na učni načrt",
      "day.theory": "Teorija",
      "day.summary": "Ključne točke",
      "day.quiz": "Dnevni kviz",
      "day.quizProgress": "odgovorjenih vprašanj",
      "day.submitQuiz": "Oddaj kviz",
      "day.tryAgain": "Poskusi znova",
      "day.complete": "Dan je označen kot zaključen",
      "day.noPass": "Za zaključek dneva potrebuješ vsaj 70 %",
      "day.completedStatus": "Zaključen",
      "day.inProgressStatus": "V teku",
      "exam.eyebrow": "Praktični ECBA izpit",
      "exam.title": "Simulacija izpita",
      "exam.description": "Preveri svoje znanje v 50-vprašanem izpitu, ki traja največ 60 minut.",
      "exam.questions": "Vprašanj",
      "exam.minutes": "Minut",
      "exam.passMark": "Meja za opravljanje",
      "exam.start": "Začni izpit",
      "exam.navigation": "Navigacija",
      "exam.answered": "Odgovorjeno",
      "exam.unanswered": "Neodgovorjeno",
      "exam.flagged": "Označeno",
      "exam.flagQuestion": "Označi za pregled",
      "exam.unflagQuestion": "Odstrani oznako",
      "exam.previous": "Prejšnje",
      "exam.next": "Naslednje",
      "exam.submit": "Oddaj izpit",
      "exam.review": "Pregled odgovorov",
      "exam.restart": "Naredi nov izpit",
      "exam.confirmSubmit": "Ali želiš zdaj oddati izpit?",
      "exam.confirmReset": "Ali želiš ponastaviti ves učni napredek?",
      "exam.pass": "Opravljen",
      "exam.fail": "Ni opravljeno",
      "exam.correct": "Pravilno",
      "exam.incorrect": "Nepravilno",
      "exam.selectedAnswer": "Tvoj odgovor",
      "exam.correctAnswer": "Pravilen odgovor",
      "exam.noAnswer": "Ni odgovora",
      "exam.breakdown": "Razčlenitev po področjih BABOK",
      "exam.question": "Vprašanje",
      "exam.timeout": "Čas je potekel. Izpit je bil samodejno oddan.",
      "exam.noQuestions": "Izpitna vprašanja trenutno niso na voljo.",
      "glossary.eyebrow": "Terminologija BABOK®",
      "glossary.title": "Slovar pojmov",
      "glossary.search": "Išči po slovarju",
      "glossary.searchPlaceholder": "Išči izraz ali definicijo…",
      "glossary.letter": "Črka",
      "glossary.category": "Kategorija",
      "glossary.all": "Vsi",
      "glossary.allCategories": "Vse kategorije",
      "glossary.example": "Primer / izpitni kontekst",
      "glossary.noResults": "Noben slovarski vnos ne ustreza izbranim filtrirnim pogojem.",
      "common.yes": "Da",
      "common.no": "Ne",
      "common.answer": "Odgovor",
      "common.english": "Angleško",
      "common.slovene": "Slovensko"
    }
  };

  const state = {
    language: "sl",
    currentView: "plan",
    currentDay: null,
    dailyQuiz: null,
    examEngine: null,
    examSubmitted: false,
    completedDays: [],
    dayScores: {}
  };

  let examTimerStarted = false;

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getStoredJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.warn("App: reading localStorage failed.", error);
      return fallback;
    }
  }

  function setStoredJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn("App: writing localStorage failed.", error);
      return false;
    }
  }

  function removeStored(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn("App: removing localStorage failed.", error);
    }
  }

  function getText(bilingualText) {
    if (typeof bilingualText === "string") {
      return bilingualText;
    }

    if (!bilingualText || typeof bilingualText !== "object") {
      return "";
    }

    if (state.language === "bilingual") {
      const english = bilingualText.en || "";
      const slovene = bilingualText.sl || "";

      if (english && slovene) {
        return (
          `<div class="bilingual-block">` +
            `<div class="bilingual-column">` +
              `<span class="bilingual-label">${escapeHTML(t("common.english"))}</span>` +
              `<div>${english}</div>` +
            `</div>` +
            `<div class="bilingual-column">` +
              `<span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>` +
              `<div>${slovene}</div>` +
            `</div>` +
          `</div>`
        );
      }
    }

    return bilingualText[state.language] || bilingualText.en || bilingualText.sl || "";
  }

  function getPlainText(bilingualText) {
    if (typeof bilingualText === "string") {
      return bilingualText;
    }

    if (!bilingualText || typeof bilingualText !== "object") {
      return "";
    }

    if (state.language === "sl") {
      return bilingualText.sl || bilingualText.en || "";
    }

    if (state.language === "en") {
      return bilingualText.en || bilingualText.sl || "";
    }

    return `${bilingualText.en || ""} ${bilingualText.sl || ""}`.trim();
  }

  function t(key) {
    const language = state.language === "bilingual" ? "sl" : state.language;
    return (
      (TRANSLATIONS[language] && TRANSLATIONS[language][key]) ||
      (TRANSLATIONS.en && TRANSLATIONS.en[key]) ||
      key
    );
  }

  function loadState() {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (savedLanguage === "en" || savedLanguage === "sl" || savedLanguage === "bilingual") {
      state.language = savedLanguage;
    }

    const completed = getStoredJSON(STORAGE_KEYS.COMPLETED_DAYS, []);
    state.completedDays = Array.isArray(completed)
      ? completed.map(Number).filter((day) => Number.isInteger(day))
      : [];

    const scores = getStoredJSON(STORAGE_KEYS.DAY_SCORES, {});
    state.dayScores =
      scores && typeof scores === "object" && !Array.isArray(scores)
        ? scores
        : {};
  }

  function saveCompletedDays() {
    setStoredJSON(STORAGE_KEYS.COMPLETED_DAYS, state.completedDays);
  }

  function saveDayScores() {
    setStoredJSON(STORAGE_KEYS.DAY_SCORES, state.dayScores);
  }

  function isDayCompleted(day) {
    return state.completedDays.includes(Number(day));
  }

  function setDayCompleted(day, result) {
    const dayNumber = Number(day);

    if (!state.completedDays.includes(dayNumber)) {
      state.completedDays.push(dayNumber);
      state.completedDays.sort((a, b) => a - b);
      saveCompletedDays();
    }

    state.dayScores[String(dayNumber)] = result;
    saveDayScores();
  }

  function resetProgress() {
    if (!window.confirm(t("exam.confirmReset"))) {
      return;
    }

    state.completedDays = [];
    state.dayScores = {};
    state.currentDay = null;
    state.dailyQuiz = null;

    removeStored(STORAGE_KEYS.COMPLETED_DAYS);
    removeStored(STORAGE_KEYS.DAY_SCORES);
    removeStored(STORAGE_KEYS.LAST_DAY);

    if (
      window.QuizEngine &&
      typeof window.QuizEngine.clearQuizStorage === "function"
    ) {
      window.QuizEngine.clearQuizStorage();
    }

    renderPlan();
    showToast(t("plan.reset"), "success");
  }

  function showToast(message, type = "") {
    const region = document.getElementById("toast-region");
    if (!region) {
      return;
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`.trim();
    toast.textContent = message;
    region.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      element.placeholder = t(key);
    });

    document.documentElement.lang = state.language === "bilingual" ? "sl" : state.language;
  }

  function updateLanguageButtons() {
    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.language === state.language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLanguage(language) {
    if (!["en", "sl", "bilingual"].includes(language)) {
      return;
    }

    state.language = language;
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    updateLanguageButtons();
    applyTranslations();

    if (state.currentView === "plan") {
      renderPlan();
    } else if (state.currentView === "day" && state.currentDay !== null) {
      renderDay(state.currentDay, false);
    } else if (state.currentView === "glossary") {
      renderGlossary();
    } else if (state.currentView === "exam") {
      if (state.examEngine && !state.examSubmitted) {
        renderExamQuestion();
      } else if (state.examSubmitted) {
        const result =
          state.examEngine && typeof state.examEngine.getResult === "function"
            ? state.examEngine.getResult()
            : null;

        if (result) {
          renderExamResults(result);
        }
      }
    }
  }

  function showView(viewName, updateHash = true) {
    if (!VIEWS[viewName]) {
      viewName = "plan";
    }

    state.currentView = viewName;

    document.querySelectorAll(".view").forEach((view) => {
      view.classList.remove("active");
    });

    const activeView = document.getElementById(VIEWS[viewName]);
    if (activeView) {
      activeView.classList.add("active");
    }

    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.view === viewName);
    });

    if (updateHash) {
      window.location.hash = viewName === "plan" ? "plan" : viewName;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderPlan() {
    const container = document.getElementById("study-plan");
    if (!container || !window.STUDY_DATA) {
      return;
    }

    const days = Array.isArray(STUDY_DATA.days) ? STUDY_DATA.days : [];
    const completedCount = days.filter((day) =>
      isDayCompleted(day.day)
    ).length;
    const percent = days.length
      ? Math.round((completedCount / days.length) * 100)
      : 0;

    const progressLabel = document.getElementById("progress-label");
    const progressCount = document.getElementById("progress-count");
    const progressPercent = document.getElementById("progress-percent");
    const progressBar = document.getElementById("progress-bar");
    const progressTrack = progressBar
      ? progressBar.closest(".progress-track")
      : null;

    if (progressLabel) progressLabel.textContent = t("plan.progress");
    if (progressCount) {
      progressCount.textContent = `${completedCount} / ${days.length}`;
    }
    if (progressPercent) progressPercent.textContent = `${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressTrack) progressTrack.setAttribute("aria-valuenow", String(completedCount));

    container.innerHTML = days
      .map((day) => {
        const completed = isDayCompleted(day.day);
        const score = state.dayScores[String(day.day)];
        const title = getPlainText(day.title);
        const reference = escapeHTML(day.babokReference || "");

        let status = `<span class="status-badge">${escapeHTML(t("plan.notStarted"))}</span>`;
        if (completed) {
          status =
            `<span class="status-badge completed">${escapeHTML(t("plan.completed"))}</span>`;
        } else if (score) {
          status =
            `<span class="status-badge started">${escapeHTML(t("plan.started"))}</span>`;
        }

        let scoreText = "";
        if (score && typeof score.percentage === "number") {
          scoreText =
            `<span class="day-card-score">${escapeHTML(t("plan.score"))}: ${escapeHTML(score.percentage)}%</span>`;
        }

        return `
          <article class="day-card ${completed ? "completed" : ""}">
            <div class="day-card-header">
              <span class="day-number">${escapeHTML(day.day)}</span>
              ${status}
            </div>
            <h2>${escapeHTML(title)}</h2>
            <p class="day-card-reference">${reference}</p>
            <div class="day-card-footer">
              ${scoreText}
              <button class="button button-secondary day-card-button" type="button" data-open-day="${escapeHTML(day.day)}">
                ${escapeHTML(completed ? t("plan.review") : t("plan.open"))}
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function openDay(dayNumber) {
    const day = getDayByNumber(dayNumber);
    if (!day) {
      showToast("Day not found", "error");
      return;
    }

    state.currentDay = Number(dayNumber);
    localStorage.setItem(STORAGE_KEYS.LAST_DAY, String(dayNumber));
    showView("day", false);
    renderDay(state.currentDay, true);
  }

  function getDayByNumber(dayNumber) {
    if (!window.STUDY_DATA || !Array.isArray(STUDY_DATA.days)) {
      return null;
    }

    return STUDY_DATA.days.find(
      (day) => Number(day.day) === Number(dayNumber)
    ) || null;
  }

  function renderDay(dayNumber, resetQuiz) {
    const day = getDayByNumber(dayNumber);
    if (!day) {
      showView("plan");
      renderPlan();
      return;
    }

    const completed = isDayCompleted(day.day);

    const heading = document.getElementById("day-heading");
    const reference = document.getElementById("day-babok-reference");
    const status = document.getElementId("day-status");
  }

  function formatStatusError() {
    return;
  }

  function openStep(stepName) {
    const validSteps = ["theory", "summary", "quiz"];
    if (!validSteps.includes(stepName)) {
      return;
    }

    document.querySelectorAll(".step-tab").forEach((tab) => {
      const active = tab.dataset.step === stepName;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    document.querySelectorAll(".step-panel").forEach((panel) => {
      panel.classList.remove("active");
      panel.hidden = true;
    });

    const panel = document.getElementById(`${stepName}-panel`);
    if (panel) {
      panel.hidden = false;
      panel.classList.add("active");
    }

    if (stepName === "quiz") {
      renderDailyQuiz();
    }
  }

  function createDailyQuiz(day) {
    if (
      window.QuizEngine &&
      typeof window.QuizEngine.createDailyQuizEngine === "function"
    ) {
      state.dailyQuiz = window.QuizEngine.createDailyQuizEngine(day);
    } else {
      state.dailyQuiz = null;
    }
  }

  function renderDailyQuiz() {
    const container = document.getElementById("daily-quiz-container");
    if (!container) {
      return;
    }

    const day = getDayByNumber(state.currentDay);
    if (!day || !Array.isArray(day.quiz)) {
      container.innerHTML =
        `<div class="empty-state">${escapeHTML(t("glossary.noResults"))}</div>`;
      return;
    }

    if (!state.dailyQuiz) {
      createDailyQuiz(day);
    }

    if (!state.dailyQuiz) {
      container.innerHTML =
        `<div class="empty-state">${escapeHTML("Quiz engine unavailable.")}</div>`;
      return;
    }

    const questions = state.dailyQuiz.getQuestions();
    const answeredCount = state.dailyQuiz.getAnsweredCount();

    const progress = document.getElementById("daily-quiz-progress");
    if (progress) {
      progress.textContent =
        `${answeredCount} / ${questions.length} ${t("day.quizProgress")}`;
    }

    const scoreElement = document.getElementById("daily-quiz-score");
    if (scoreElement) {
      const score = state.dailyQuiz.getResult();
      scoreElement.textContent =
        score.answeredCount === undefined
          ? `${score.percentage}%`
          : `${score.correct}/${score.total}`;
    }

    container.innerHTML = questions
      .map((question, questionIndex) => {
        const selectedAnswer = state.dailyQuiz.getAnswer(questionIndex);
        const result = state.dailyQuiz.getResult();
        const showFeedback = selectedAnswer !== null;

        let questionText = getText(question.question);

        let optionsHTML = "";
        const optionValues =
          state.language === "bilingual"
            ? question.options.en
            : question.options[state.language] ||
              question.options.en ||
              [];

        const sloveneOptions =
          state.language === "bilingual"
            ? question.options.sl || []
            : null;

        for (let optionIndex = 0; optionIndex < optionValues.length; optionIndex += 1) {
          let label = optionValues[optionIndex];

          if (state.language === "bilingual" && sloveneOptions[optionIndex]) {
            label =
              `<div><span class="bilingual-label">${escapeHTML(t("common.english"))}</span>${escapeHTML(optionValues[optionIndex])}</div>` +
              `<div><span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>${escapeHTML(sloveneOptions[optionIndex])}</div>`;
          } else {
            label = escapeHTML(label);
          }

          const selected = selectedAnswer === optionIndex;
          const submitted = selectedAnswer !== null;
          let classes = "answer-option";

          if (selected) classes += " selected";
          if (submitted && optionIndex === question.correctIndex) {
            classes += " correct";
          } else if (
            submitted &&
            selected &&
            optionIndex !== question.correctIndex
          ) {
            classes += " incorrect";
          }

          optionsHTML += `
            <button
              type="button"
              class="${classes}"
              data-daily-question="${questionIndex}"
              data-daily-option="${optionIndex}"
              ${submitted ? "disabled" : ""}
            >
              <span class="answer-option-letter">${String.fromCharCode(65 + optionIndex)}</span>
              <span>${label}</span>
            </button>
          `;
        }

        let feedback = "";
        if (showFeedback) {
          const correct = selectedAnswer === question.correctIndex;
          feedback = `
            <div class="answer-feedback ${correct ? "correct" : "incorrect"}">
              <strong>${escapeHTML(correct ? t("exam.correct") : t("exam.incorrect"))}</strong>
              ${getText(question.explanation)}
            </div>
          `;
        }

        return `
          <section class="daily-question">
            ${getBilingualQuestionLabel(question.question)}
            <h3 class="question-heading">${questionText}</h3>
            <div class="answer-options">${optionsHTML}</div>
            ${feedback}
          </section>
        `;
      })
      .join("") +
      `
        <div class="daily-quiz-actions">
          <button id="submit-daily-quiz" class="button button-primary" type="button">
            ${escapeHTML(t("day.submitQuiz"))}
          </button>
        </div>
      `;

    const submitButton = document.getElementById("submit-daily-quiz");
    if (submitButton) {
      submitButton.disabled =
        answeredCount < questions.length;
    }
  }

  function getBilingualQuestionLabel(question) {
    if (
      state.language !== "bilingual" ||
      !question ||
      typeof question !== "object"
    ) {
      return "";
    }

    return "";
  }

  function answerDailyQuestion(questionIndex, optionIndex) {
    if (!state.dailyQuiz) {
      return;
    }

    state.dailyQuiz.setAnswer(questionIndex, optionIndex);
    renderDailyQuiz();
  }

  function submitDailyQuiz() {
    if (!state.dailyQuiz) {
      return;
    }

    const day = getDayByNumber(state.currentDay);
    if (!day) {
      return;
    }

    const result = state.dailyQuiz.submit();
    const completed = result.percentage >= 70;

    if (completed) {
      setDayCompleted(day.day, result);
      showToast(t("day.complete"), "success");
    } else {
      showToast(t("day.noPass"), "warning");
    }

    const scoreElement = document.getElementById("daily-quiz-score");
    if (scoreElement) {
      scoreElement.textContent =
        `${result.correct}/${result.total} · ${result.percentage}%`;
    }

    renderDailyQuiz();
  }

  function resetDailyQuiz() {
    if (state.dailyQuiz) {
      state.dailyQuiz.reset();
      renderDailyQuiz();
    }
  }

  function startExam() {
    const questionBank =
      window.STUDY_DATA && Array.isArray(STUDY_DATA.examQuestions)
        ? STUDY_DATA.examQuestions
        : [];

    if (!questionBank.length) {
      showToast(t("exam.noQuestions"), "error");
      return;
    }

    if (
      !window.QuizEngine ||
      typeof window.QuizEngine.createExamEngine !== "function"
    ) {
      showToast("Quiz engine unavailable.", "error");
      return;
    }

    state.examEngine = window.QuizEngine.createExamEngine(questionBank, {
      questionCount: 50,
      durationSeconds: 60 * 60
    });
    state.examSubmitted = false;
    examTimerStarted = false;

    const startScreen = document.getElementById("exam-start-screen");
    const activeScreen = document.getElementById("exam-active-screen");
    const resultsScreen = document.getElementById("exam-results-screen");

    if (startScreen) startScreen.hidden = true;
    if (activeScreen) activeScreen.hidden = false;
    if (resultsScreen) resultsScreen.hidden = true;

    renderExamQuestion();

    if (!examTimerStarted) {
      examTimerStarted = true;
      state.examEngine.start(updateExamTimer, handleExamTimeout);
    }
  }

  function updateExamTimer(seconds) {
    const timer = document.getElementById("exam-timer");
    if (!timer || !state.examEngine) {
      return;
    }

    timer.textContent = state.examEngine.formatTime(seconds);
    timer.classList.toggle("warning", seconds <= 300);
  }

  function handleExamTimeout() {
    state.examSubmitted = true;
    showToast(t("exam.timeout"), "warning");
  }

  function renderExamQuestion() {
    if (!state.examEngine) {
      return;
    }

    const questions = state.examEngine.getQuestions();
    const activeIndex = state.examEngine.getActiveIndex();
    const question = questions[activeIndex];

    if (!question) {
      return;
    }

    const questionNumber = document.getElementById("exam-question-number");
    const questionText = document.getElementById("exam-question-text");
    const optionsContainer = document.getElementById("exam-options");
    const previousButton = document.getElementById("previous-question");
    const nextButton = document.getElementById("next-question");
    const flagButton = document.getElementById("flag-question");

    if (questionNumber) {
      questionNumber.textContent =
        `${t("exam.question")} ${activeIndex + 1} / ${questions.length}`;
    }

    if (questionText) {
      questionText.innerHTML = getText(question.question);
    }

    if (optionsContainer) {
      const options =
        state.language === "bilingual"
          ? null
          : question.options[state.language] ||
            question.options.en ||
            [];

      const enOptions = question.options.en || [];
      const slOptions = question.options.sl || [];

      optionsContainer.innerHTML = (state.language === "bilingual"
        ? enOptions
        : options
      )
        .map((option, optionIndex) => {
          const selected = state.examEngine.getAnswer(activeIndex) === optionIndex;
          let label = "";

          if (state.language === "bilingual") {
            label =
              `<div><span class="bilingual-label">${escapeHTML(t("common.english"))}</span>${escapeHTML(enOptions[optionIndex] || "")}</div>` +
              `<div><span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>${escapeHTML(slOptions[optionIndex] || "")}</div>`;
          } else {
            label = escapeHTML(option);
          }

          return `
            <button
              type="button"
              class="answer-option ${selected ? "selected" : ""}"
              data-exam-option="${optionIndex}"
              aria-pressed="${selected ? "true" : "false"}"
            >
              <span class="answer-option-letter">${String.fromCharCode(65 + optionIndex)}</span>
              <span>${label}</span>
            </button>
          `;
        })
        .join("");
    }

    if (previousButton) {
      previousButton.disabled = activeIndex === 0;
    }

    if (nextButton) {
      nextButton.disabled = activeIndex === questions.length - 1;
    }

    if (flagButton) {
      const flagged = state.examEngine.isFlagged(activeIndex);
      flagButton.classList.toggle("active", flagged);
      flagButton.setAttribute("aria-pressed", flagged ? "true" : "false");
      const text = flagButton.querySelector("span:last-child");
      if (text) {
        text.textContent = flagged
          ? t("exam.unflagQuestion")
          : t("exam.flagQuestion");
      }
    }

    renderQuestionPalette();
  }

  function renderQuestionPalette() {
    const palette = document.getElementById("question-palette");
    if (!palette || !state.examEngine) {
      return;
    }

    const questions = state.examEngine.getQuestions();
    const activeIndex = state.examEngine.getActiveIndex();

    palette.innerHTML = questions
      .map((question, index) => {
        let classes = "palette-button";
        if (index === activeIndex) classes += " current";
        if (state.examEngine.getAnswer(index) !== null) classes += " answered";
        if (state.examEngine.isFlagged(index)) classes += " flagged";

        return `
          <button
            type="button"
            class="${classes}"
            data-palette-question="${index}"
            aria-label="${escapeHTML(t("exam.question"))} ${index + 1}"
          >
            ${index + 1}
          </button>
        `;
      })
      .join("");
  }

  function answerExamQuestion(optionIndex) {
    if (!state.examEngine) {
      return;
    }

    const activeIndex = state.examEngine.getActiveIndex();
    state.examEngine.setAnswer(activeIndex, optionIndex);
    renderExamQuestion();
  }

  function navigateExamQuestion(direction) {
    if (!state.examEngine) {
      return;
    }

    const nextIndex =
      state.examEngine.getActiveIndex() + Number(direction);
    if (state.examEngine.setActiveIndex(nextIndex)) {
      renderExamQuestion();
    }
  }

  function toggleExamFlag() {
    if (!state.examEngine) {
      return;
    }

    state.examEngine.toggleFlag(state.examEngine.getActiveIndex());
    renderExamQuestion();
  }

  function submitExam() {
    if (!state.examEngine) {
      return;
    }

    if (!window.confirm(t("exam.confirmSubmit"))) {
      return;
    }

    state.examSubmitted = true;
    const result = state.examEngine.submit();
    renderExamResults(result);
  }

  function renderExamResults(result) {
    if (!result) {
      return;
    }

    const activeScreen = document.getElementById("exam-active-screen");
    const resultsScreen = document.getElementById("exam-results-screen");
    const startScreen = document.getElementById("exam-start-screen");

    if (activeScreen) activeScreen.hidden = true;
    if (startScreen) startScreen.hidden = true;
    if (resultsScreen) resultsScreen.hidden = false;

    const summary = document.getElementById("exam-results-summary");
    if (summary) {
      summary.className =
        `exam-result-summary ${result.passed ? "pass" : "fail"}`;
      summary.innerHTML = `
        <p class="eyebrow">${escapeHTML(t("exam.title"))}</p>
        <div class="result-status">${escapeHTML(
          result.passed ? t("exam.pass") : t("exam.fail")
        )}</div>
        <div class="result-score">${escapeHTML(result.percentage)}%</div>
        <p class="result-details">
          ${escapeHTML(result.correct)} / ${escapeHTML(result.total)}
          · ${escapeHTML(result.passed ? t("exam.pass") : t("exam.fail"))}
          · ${escapeHTML(t("exam.passMark"))}: 70%
        </p>
      `;
    }

    const areasContainer = document.getElementById("exam-results-areas");
    if (areasContainer) {
      const areas = Array.isArray(result.knowledgeAreas)
        ? result.knowledgeAreas
        : [];

      areasContainer.innerHTML = `
        <article class="exam-area-card">
          <h2>${escapeHTML(t("exam.breakdown"))}</h2>
          <div class="area-breakdown">
            ${areas
              .map(
                (area) => `
                  <div class="area-row">
                    <span class="area-name">${escapeHTML(area.area)}</span>
                    <div class="area-track">
                      <div class="area-fill" style="width:${escapeHTML(area.percentage)}%"></div>
                    </div>
                    <span class="area-value">${escapeHTML(area.correct)} / ${escapeHTML(area.total)} · ${escapeHTML(area.percentage)}%</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    }

    const reviewContainer = document.getElementById("exam-review");
    if (reviewContainer) {
      const review = Array.isArray(result.review) ? result.review : [];

      reviewContainer.innerHTML = review
        .map((item, index) => {
          const question = item.question;
          const correctIndex = item.correctIndex;
          const selectedIndex = item.selectedIndex;

          const selectedOption =
            selectedIndex !== null &&
            selectedIndex !== undefined
              ? getQuestionOption(question, selectedIndex)
              : t("exam.noAnswer");

          const correctOption = getQuestionOption(question, correctIndex);

          return `
            <article class="review-item ${item.correct ? "correct" : "incorrect"}">
              <div class="review-question-header">
                <strong>${escapeHTML(t("exam.question"))} ${index + 1}: ${getText(question.question)}</strong>
                <span class="review-result ${item.correct ? "correct" : "incorrect"}">
                  ${escapeHTML(item.correct ? t("exam.correct") : t("exam.incorrect"))}
                </span>
              </div>
              <p class="review-answer">
                <strong>${escapeHTML(t("exam.selectedAnswer"))}:</strong>
                ${escapeHTML(selectedOption)}
              </p>
              <p class="review-answer">
                <strong>${escapeHTML(t("exam.correctAnswer"))}:</strong>
                ${escapeHTML(correctOption)}
              </p>
              <div class="review-explanation">${getText(question.explanation)}</div>
            </article>
          `;
        })
        .join("");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getQuestionOption(question, optionIndex) {
    if (
      !question ||
      !question.options ||
      optionIndex === null ||
      optionIndex === undefined
    ) {
      return t("exam.noAnswer");
    }

    if (state.language === "bilingual") {
      const english = question.options.en?.[optionIndex] || "";
      const slovene = question.options.sl?.[optionIndex] || "";
      return `${english} / ${slovne}`.trim();
    }

    const options =
      question.options[state.language] ||
      question.options.en ||
      [];

    return options[optionIndex] || t("exam.noAnswer");
  }

  function resetExam() {
    if (state.examEngine && typeof state.examEngine.reset === "function") {
      state.examEngine.reset();
    }

    state.examSubmitted = false;
    examTimerStarted = false;

    const startScreen = document.getElementById("exam-start-screen");
    const activeScreen = document.getElementById("exam-active-screen");
    const resultsScreen = document.getElementById("exam-results-screen");

    if (startScreen) startScreen.hidden = false;
    if (activeScreen) activeScreen.hidden = true;
    if (resultsScreen) resultsScreen.hidden = true;
  }

  function setupGlossaryFilters() {
    if (!window.STUDY_DATA || !Array.isArray(STUDY_DATA.glossary)) {
      return;
    }

    const letterFilter = document.getElementById("letter-filter");
    const categoryFilter = document.getElementById("category-filter");

    if (letterFilter) {
      const preservedValue = letterFilter.value || "all";
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

      letterFilter.innerHTML =
        `<option value="all">${escapeHTML(t("glossary.all"))}</option>` +
        letters
          .map(
            (letter) =>
              `<option value="${letter}">${letter}</option>`
          )
          .join("");

      if (letters.includes(preservedValue)) {
        letterFilter.value = preservedValue;
      } else {
        letterFilter.value = "all";
      }
    }

    if (categoryFilter) {
      const preservedValue = categoryFilter.value || "all";
      const categories = [
        ...new Set(
          STUDY_DATA.glossary
            .map((entry) => entry.category)
            .filter(Boolean)
        )
      ].sort((a, b) => a.localeCompare(b));

      categoryFilter.innerHTML =
        `<option value="all">${escapeHTML(t("glossary.allCategories"))}</option>` +
        categories
          .map(
            (category) =>
              `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`
          )
          .join("");

      if (categories.includes(preservedValue)) {
        categoryFilter.value = preservedValue;
      } else {
        categoryFilter.value = "all";
      }
    }
  }

  function renderGlossary() {
    if (!window.STUDY_DATA || !Array.isArray(STUDY_DATA.glossary)) {
      return;
    }

    setupGlossaryFilters();

    const searchInput = document.getElementById("glossary-search");
    const letterFilter = document.getElementById("letter-filter");
    const categoryFilter = document.getElementById("category-filter");
    const list = document.getElementById("glossary-list");
    const count = document.getElementById("glossary-count");

    if (!list) {
      return;
    }

    const search =
      searchInput && typeof searchInput.value === "string"
        ? searchInput.value.trim().toLowerCase()
        : "";
    const letter =
      letterFilter && letterFilter.value ? letterFilter.value : "all";
    const category =
      categoryFilter && categoryFilter.value
        ? categoryFilter.value
        : "all";

    const filtered = STUDY_DATA.glossary
      .filter((entry) => {
        const term = getPlainText(entry.term).toLowerCase();
        const definition = getPlainText(entry.definition).toLowerCase();
        const example = getPlainText(entry.example).toLowerCase();

        if (search && !`${term} ${definition} ${example}`.includes(search)) {
          return false;
        }

        if (letter !== "all") {
          const firstCharacter = term.trim().charAt(0).toUpperCase();
          if (firstCharacter !== letter) {
            return false;
          }
        }

        if (category !== "all" && entry.category !== category) {
          return false;
        }

        return true;
      })
      .sort((a, b) =>
        getPlainText(a.term).localeCompare(getPlainText(b.term), "sl")
      );

    if (count) {
      count.textContent =
        `${filtered.length} / ${STUDY_DATA.glossary.length}`;
    }

    if (!filtered.length) {
      list.innerHTML =
        `<div class="empty-state">${escapeHTML(t("glossary.noResults"))}</div>`;
      return;
    }

    list.innerHTML = filtered
      .map((entry) => {
        const term = getText(entry.term);
        const definition = getText(entry.definition);
        const example = getText(entry.example);

        return `
          <article class="glossary-entry">
            <div class="glossary-entry-header">
              <h2>${term}</h2>
              <span class="category-badge">${escapeHTML(entry.category || "")}</span>
            </div>
            <p class="glossary-definition">${definition}</p>
            ${
              example
                ? `<p class="glossary-example">
                    <strong>${escapeHTML(t("glossary.example"))}:</strong>
                    ${example}
                  </p>`
                : ""
            }
          </article>
        `;
      })
      .join("");
  }

  function setupEventListeners() {
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const view = tab.dataset.view;
        showView(view);

        if (view === "plan") {
          renderPlan();
        } else if (view === "glossary") {
          renderGlossary();
        }
      });
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.language);
      });
    });

    const resetProgressButton = document.getElementById("reset-progress");
    if (resetProgressButton) {
      resetProgressButton.addEventListener("click", resetProgress);
    }

    const studyPlan = document.getElementById("study-plan");
    if (studyPlan) {
      studyPlan.addEventListener("click", (event) => {
        const button = event.target.closest("[data-open-day]");
        if (!button) {
          return;
        }

        openDay(Number(button.dataset.openDay));
      });
    }

    const backButton = document.getElementById("back-to-plan");
    if (backButton) {
      backButton.addEventListener("click", () => {
        showView("plan");
        renderPlan();
      });
    }

    document.querySelectorAll(".step-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        openStep(tab.dataset.step);
      });
    });

    const quizContainer = document.getElementById("daily-quiz-container");
    if (quizContainer) {
      quizContainer.addEventListener("click", (event) => {
        const answerButton = event.target.closest("[data-daily-option]");
        if (answerButton) {
          answerDailyQuestion(
            Number(answerButton.dataset.dailyQuestion),
            Number(answerButton.dataset.dailyOption)
          );
          return;
        }

        const submitButton = event.target.closest("#submit-daily-quiz");
        if (submitButton) {
          submitDailyQuiz();
        }
      });
    }

    const startExamButton = document.getElementById("start-exam");
    if (startExamButton) {
      startExamButton.addEventListener("click", startExam);
    }

    const examOptions = document.getElementById("exam-options");
    if (examOptions) {
      examOptions.addEventListener("click", (event) => {
        const button = event.target.closest("[data-exam-option]");
        if (!button) {
          return;
        }

        answerExamQuestion(Number(button.dataset.examOption));
      });
    }

    const palette = document.getElementById("question-palette");
    if (palette) {
      palette.addEventListener("click", (event) => {
        const button = event.target.closest("[data-palette-question]");
        if (!button || !state.examEngine) {
          return;
        }

        const index = Number(button.dataset.paletteQuestion);
        state.examEngine.setActiveIndex(index);
        renderExamQuestion();
      });
    }

    const previousButton = document.getElementById("previous-question");
    if (previousButton) {
      previousButton.addEventListener("click", () => navigateExamQuestion(-1));
    }

    const nextButton = document.getElementById("next-question");
    if (nextButton) {
      nextButton.addEventListener("click", () => navigateExamQuestion(1));
    }

    const flagButton = document.getElementById("flag-question");
    if (flagButton) {
      flagButton.addEventListener("click", toggleExamFlag);
    }

    const submitExamButton = document.getElementById("submit-exam");
    if (submitExamButton) {
      submitExamButton.addEventListener("click", submitExam);
    }

    const restartExamButton = document.getElementById("restart-exam");
    if (restartExamButton) {
      restartExamButton.addEventListener("click", resetExam);
    }

    const glossarySearch = document.getElementById("glossary-search");
    if (glossarySearch) {
      glossarySearch.addEventListener("input", renderGlossary);
    }

    const letterFilter = document.getElementById("letter-filter");
    if (letterFilter) {
      letterFilter.addEventListener("change", renderGlossary);
    }

    const categoryFilter = document.getElementById("category-filter");
    if (categoryFilter) {
      categoryFilter.addEventListener("change", renderGlossary);
    }

    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "exam") {
        showView("exam", false);
      } else if (hash === "glossary") {
        showView("glossary", false);
        renderGlossary();
      } else if (hash === "plan" || !hash) {
        showView("plan", false);
        renderPlan();
      }
    });

    window.addEventListener("beforeunload", () => {
      if (
        state.examEngine &&
        typeof state.examEngine.stop === "function"
      ) {
        state.examEngine.stop();
      }
    });
  }

  function handleInitialRoute() {
    const hash = window.location.hash.replace("#", "");

    if (hash === "exam") {
      showView("exam", false);
    } else if (hash === "glossary") {
      showView("glossary", false);
      renderGlossary();
    } else {
      showView("plan", false);
      renderPlan();
    }
  }

  function init() {
    if (!window.STUDY_DATA) {
      console.error("STUDY_DATA ni naložen. Preveri js/data.js.");
    }

    loadState();
    updateLanguageButtons();
    applyTranslations();
    setupEventListeners();
    setupGlossaryFilters();
    handleInitialRoute();
  }

  return {
    init,
    setLanguage,
    openDay,
    openStep,
    renderPlan,
    renderGlossary,
    startExam,
    submitExam,
    resetExam,
    resetProgress
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
