"use strict";

const App = (() => {
  const STORAGE_KEYS = {
    LANGUAGE: "ecba_language",
    COMPLETED_DAYS: "ecba_completed_days",
    DAY_SCORES: "ecba_day_scores",
    LAST_DAY: "ecba_last_day"
  };

  const PASS_PERCENTAGE = 70;
  const EXAM_QUESTION_COUNT = 50;
  const EXAM_DURATION_SECONDS = 60 * 60;

  const state = {
    language: "sl",
    currentView: "plan",
    currentDay: null,
    dailyQuiz: null,
    dailyQuizSubmitted: false,
    examEngine: null,
    examSubmitted: false,
    completedDays: [],
    dayScores: {}
  };

  const TRANSLATIONS = {
    en: {
      "nav.plan": "Study Plan",
      "nav.exam": "Exam Simulator",
      "nav.glossary": "Glossary",
      "plan.eyebrow": "BABOK® Guide v3",
      "plan.title": "Study Plan",
      "plan.reset": "Reset Progress",
      "plan.progress": "Study progress",
      "plan.completed": "Completed",
      "plan.started": "In progress",
      "plan.notStarted": "Not started",
      "plan.open": "Open day",
      "plan.review": "Review",
      "plan.score": "Score",
      "plan.unavailable": "Study days 1 and 2 are not available in js/data.js.",
      "day.back": "Back to study plan",
      "day.theory": "Theory",
      "day.summary": "Key Takeaways",
      "day.quiz": "Daily Quiz",
      "day.quizProgress": "questions answered",
      "day.submitQuiz": "Submit quiz",
      "day.tryAgain": "Try again",
      "day.complete": "Day marked as completed",
      "day.noPass": "You need at least 70% to complete this day.",
      "day.completedStatus": "Completed",
      "day.inProgressStatus": "In progress",
      "day.notStartedStatus": "Not started",
      "day.answerAll": "Answer every question before submitting the quiz.",
      "day.quizUnavailable": "Quiz questions for this day are not available.",
      "day.engineUnavailable": "The quiz engine could not be loaded.",
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
      "exam.notEnoughQuestions": "The question bank does not contain enough questions for a 50-question exam.",
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
      "glossary.unavailable": "Glossary entries are not available.",
      "common.english": "English",
      "common.slovene": "Slovenian"
    },
    sl: {
      "nav.plan": "Učni načrt",
      "nav.exam": "Simulacija izpita",
      "nav.glossary": "Slovar",
      "plan.eyebrow": "BABOK® Guide v3",
      "plan.title": "Učni načrt",
      "plan.reset": "Ponastavi napredek",
      "plan.progress": "Učni napredek",
      "plan.completed": "Zaključen",
      "plan.started": "V teku",
      "plan.notStarted": "Ni začet",
      "plan.open": "Odpri dan",
      "plan.review": "Preglej",
      "plan.score": "Rezultat",
      "plan.unavailable": "Dneva 1 in 2 nista na voljo v datoteki js/data.js.",
      "day.back": "Nazaj na učni načrt",
      "day.theory": "Teorija",
      "day.summary": "Ključne točke",
      "day.quiz": "Dnevni kviz",
      "day.quizProgress": "odgovorjenih vprašanj",
      "day.submitQuiz": "Oddaj kviz",
      "day.tryAgain": "Poskusi znova",
      "day.complete": "Dan je označen kot zaključen",
      "day.noPass": "Za zaključek dneva potrebuješ vsaj 70 %.",
      "day.completedStatus": "Zaključen",
      "day.inProgressStatus": "V teku",
      "day.notStartedStatus": "Ni začet",
      "day.answerAll": "Pred oddajo kviza odgovori na vsa vprašanja.",
      "day.quizUnavailable": "Vprašanja za kviz tega dne niso na voljo.",
      "day.engineUnavailable": "Mehanizma za kviz ni bilo mogoče naložiti.",
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
      "exam.notEnoughQuestions": "Banka vprašanj ne vsebuje dovolj vprašanj za 50-vprašan izpit.",
      "glossary.eyebrow": "Terminologija BABOK®",
      "glossary.title": "Slovar pojmov",
      "glossary.search": "Išči po slovarju",
      "glossary.searchPlaceholder": "Išči izraz ali definicijo…",
      "glossary.letter": "Črka",
      "glossary.category": "Kategorija",
      "glossary.all": "Vsi",
      "glossary.allCategories": "Vse kategorije",
      "glossary.example": "Primer / izpitni kontekst",
      "glossary.noResults": "Noben slovarski vnos ne ustreza izbranim filtrom.",
      "glossary.unavailable": "Slovarski vnosi niso na voljo.",
      "common.english": "Angleško",
      "common.slovene": "Slovensko"
    }
  };

  function getStudyData() {
    if (typeof STUDY_DATA !== "undefined") {
      return STUDY_DATA;
    }

    return window.STUDY_DATA || null;
  }

  function t(key) {
    const language = state.language === "bilingual" ? "sl" : state.language;
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  }

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function readJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.warn(`App: could not read localStorage key "${key}".`, error);
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`App: could not write localStorage key "${key}".`, error);
      return false;
    }
  }

  function removeStorageItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn(`App: could not remove localStorage key "${key}".`, error);
    }
  }

  function localizedValue(value) {
    if (typeof value === "string") {
      return value;
    }

    if (!value || typeof value !== "object") {
      return "";
    }

    if (state.language === "en") {
      return value.en || value.sl || "";
    }

    if (state.language === "sl") {
      return value.sl || value.en || "";
    }

    return "";
  }

  function localizedPlainText(value) {
    if (typeof value === "string") {
      return value;
    }

    if (!value || typeof value !== "object") {
      return "";
    }

    if (state.language === "bilingual") {
      return `${value.en || ""} ${value.sl || ""}`.trim();
    }

    return localizedValue(value);
  }

  function localizedMarkup(value) {
    if (typeof value === "string") {
      return value;
    }

    if (!value || typeof value !== "object") {
      return "";
    }

    if (state.language === "bilingual") {
      const english = value.en || "";
      const slovene = value.sl || "";

      if (english && slovene) {
        return `
          <div class="bilingual-block">
            <div class="bilingual-column">
              <span class="bilingual-label">${escapeHTML(t("common.english"))}</span>
              <div>${english}</div>
            </div>
            <div class="bilingual-column">
              <span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>
              <div>${slovene}</div>
            </div>
          </div>
        `;
      }

      return english || slovene;
    }

    return localizedValue(value);
  }

  function localizedQuestionMarkup(value) {
    if (typeof value === "string") {
      return escapeHTML(value);
    }

    if (!value || typeof value !== "object") {
      return "";
    }

    if (state.language === "bilingual") {
      return `
        <div class="bilingual-block">
          <div class="bilingual-column">
            <span class="bilingual-label">${escapeHTML(t("common.english"))}</span>
            <div>${escapeHTML(value.en || value.sl || "")}</div>
          </div>
          <div class="bilingual-column">
            <span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>
            <div>${escapeHTML(value.sl || value.en || "")}</div>
          </div>
        </div>
      `;
    }

    return escapeHTML(localizedValue(value));
  }

  function localizedOptionsMarkup(options, optionIndex) {
    const english = Array.isArray(options?.en) ? options.en : [];
    const slovene = Array.isArray(options?.sl) ? options.sl : [];

    if (state.language === "bilingual") {
      return `
        <div class="bilingual-block">
          <div class="bilingual-column">
            <span class="bilingual-label">${escapeHTML(t("common.english"))}</span>
            <div>${escapeHTML(english[optionIndex] || slovene[optionIndex] || "")}</div>
          </div>
          <div class="bilingual-column">
            <span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>
            <div>${escapeHTML(slovene[optionIndex] || english[optionIndex] || "")}</div>
          </div>
        </div>
      `;
    }

    const preferred = state.language === "en" ? english : slovene;
    const fallback = state.language === "en" ? slovene : english;

    return escapeHTML(preferred[optionIndex] || fallback[optionIndex] || "");
  }

  function loadState() {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);

    if (["en", "sl", "bilingual"].includes(savedLanguage)) {
      state.language = savedLanguage;
    }

    const completedDays = readJSON(STORAGE_KEYS.COMPLETED_DAYS, []);
    state.completedDays = Array.isArray(completedDays)
      ? completedDays.map(Number).filter(Number.isInteger)
      : [];

    const savedScores = readJSON(STORAGE_KEYS.DAY_SCORES, {});
    state.dayScores =
      savedScores && typeof savedScores === "object" && !Array.isArray(savedScores)
        ? savedScores
        : {};
  }

  function saveDayResult(dayNumber, result) {
    const day = Number(dayNumber);

    state.dayScores[String(day)] = {
      correct: result.correct,
      total: result.total,
      percentage: result.percentage,
      passed: result.passed,
      completedAt: new Date().toISOString()
    };

    if (result.passed && !state.completedDays.includes(day)) {
      state.completedDays.push(day);
      state.completedDays.sort((a, b) => a - b);
      writeJSON(STORAGE_KEYS.COMPLETED_DAYS, state.completedDays);
    }

    writeJSON(STORAGE_KEYS.DAY_SCORES, state.dayScores);
  }

  function isDayCompleted(dayNumber) {
    return state.completedDays.includes(Number(dayNumber));
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

    window.setTimeout(() => toast.remove(), 3500);
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    document.documentElement.lang =
      state.language === "bilingual" ? "sl" : state.language;
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

    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    } catch (error) {
      console.warn("App: could not save the selected language.", error);
    }

    updateLanguageButtons();
    applyTranslations();

    if (state.currentView === "plan") {
      renderPlan();
    } else if (state.currentView === "day" && state.currentDay !== null) {
      renderDay(state.currentDay, false);
    } else if (state.currentView === "exam") {
      if (state.examSubmitted && state.examEngine) {
        renderExamResults(state.examEngine.getResult());
      } else if (state.examEngine) {
        renderExamQuestion();
      }
    } else if (state.currentView === "glossary") {
      renderGlossary();
    }
  }

  function showView(viewName, updateHash = true) {
    const validViews = ["plan", "day", "exam", "glossary"];
    const view = validViews.includes(viewName) ? viewName : "plan";

    state.currentView = view;

    document.querySelectorAll(".view").forEach((element) => {
      element.classList.remove("active");
    });

    const ids = {
      plan: "plan-view",
      day: "day-view",
      exam: "exam-view",
      glossary: "glossary-view"
    };

    document.getElementById(ids[view])?.classList.add("active");

    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.view === view);
    });

    if (updateHash) {
      const hash =
        view === "day" && state.currentDay !== null
          ? `day-${state.currentDay}`
          : view;

      if (window.location.hash !== `#${hash}`) {
        window.history.replaceState(null, "", `#${hash}`);
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getAvailableDays() {
    const data = getStudyData();

    if (!data || !Array.isArray(data.days)) {
      return [];
    }

    return data.days
      .filter((day) => Number(day.day) === 1 || Number(day.day) === 2)
      .sort((a, b) => Number(a.day) - Number(b.day));
  }

  function getDayByNumber(dayNumber) {
    return (
      getAvailableDays().find(
        (day) => Number(day.day) === Number(dayNumber)
      ) || null
    );
  }

  function renderPlan() {
    const container = document.getElementById("study-plan");

    if (!container) {
      return;
    }

    const days = getAvailableDays();
    const completedCount = days.filter((day) => isDayCompleted(day.day)).length;
    const percentage = days.length
      ? Math.round((completedCount / days.length) * 100)
      : 0;

    const progressLabel = document.getElementById("progress-label");
    const progressCount = document.getElementById("progress-count");
    const progressPercent = document.getElementById("progress-percent");
    const progressBar = document.getElementById("progress-bar");
    const progressTrack = progressBar?.closest(".progress-track");

    if (progressLabel) {
      progressLabel.textContent = t("plan.progress");
    }

    if (progressCount) {
      progressCount.textContent = `${completedCount} / ${days.length}`;
    }

    if (progressPercent) {
      progressPercent.textContent = `${percentage}%`;
    }

    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }

    if (progressTrack) {
      progressTrack.setAttribute("aria-valuemax", String(days.length));
      progressTrack.setAttribute("aria-valuenow", String(completedCount));
    }

    if (!days.length) {
      container.innerHTML = `
        <div class="empty-state">${escapeHTML(t("plan.unavailable"))}</div>
      `;
      return;
    }

    container.innerHTML = days
      .map((day) => {
        const completed = isDayCompleted(day.day);
        const score = state.dayScores[String(day.day)];
        const title = escapeHTML(localizedValue(day.title));
        const reference = escapeHTML(day.babokReference || "");
        const status = completed
          ? t("plan.completed")
          : score
            ? t("plan.started")
            : t("plan.notStarted");

        const scoreMarkup =
          score && Number.isFinite(Number(score.percentage))
            ? `<span class="day-card-score">${escapeHTML(t("plan.score"))}: ${escapeHTML(score.percentage)}%</span>`
            : "";

        return `
          <article class="day-card ${completed ? "completed" : ""}">
            <div class="day-card-header">
              <span class="day-number">${escapeHTML(day.day)}</span>
              <span class="status-badge ${completed ? "completed" : score ? "started" : ""}">
                ${escapeHTML(status)}
              </span>
            </div>
            <h2>${title}</h2>
            <p class="day-card-reference">${reference}</p>
            <div class="day-card-footer">
              ${scoreMarkup}
              <button
                class="button button-secondary day-card-button"
                type="button"
                data-open-day="${escapeHTML(day.day)}"
              >
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
      showToast(t("plan.unavailable"), "error");
      return;
    }

    state.currentDay = Number(day.day);
    state.dailyQuiz = null;
    state.dailyQuizSubmitted = false;

    try {
      localStorage.setItem(STORAGE_KEYS.LAST_DAY, String(state.currentDay));
    } catch (error) {
      console.warn("App: could not save the last visited day.", error);
    }

    showView("day");
    renderDay(state.currentDay, true);
    openStep("theory");
  }

  function renderSummary(summary) {
    const container = document.getElementById("day-summary");

    if (!container) {
      return;
    }

    if (!Array.isArray(summary) || !summary.length) {
      container.innerHTML = "";
      return;
    }

    if (state.language === "bilingual") {
      const englishItems = summary
        .map((item) => `<li>${escapeHTML(item.en || item.sl || "")}</li>`)
        .join("");

      const sloveneItems = summary
        .map((item) => `<li>${escapeHTML(item.sl || item.en || "")}</li>`)
        .join("");

      container.innerHTML = `
        <div class="bilingual-block">
          <div class="bilingual-column">
            <span class="bilingual-label">${escapeHTML(t("common.english"))}</span>
            <ul>${englishItems}</ul>
          </div>
          <div class="bilingual-column">
            <span class="bilingual-label">${escapeHTML(t("common.slovene"))}</span>
            <ul>${sloveneItems}</ul>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = summary
      .map((item) => `<li>${escapeHTML(localizedValue(item))}</li>`)
      .join("");
  }

  function renderDayStatus(dayNumber) {
    const status = document.getElementById("day-status");

    if (!status || Number(dayNumber) !== Number(state.currentDay)) {
      return;
    }

    const completed = isDayCompleted(dayNumber);
    const hasScore = Boolean(state.dayScores[String(dayNumber)]);

    status.textContent = completed
      ? t("day.completedStatus")
      : hasScore
        ? t("day.inProgressStatus")
        : t("day.notStartedStatus");

    status.classList.toggle("completed", completed);
    status.classList.toggle("started", !completed && hasScore);
  }

  function renderDay(dayNumber, resetQuiz = false) {
    const day = getDayByNumber(dayNumber);

    if (!day) {
      state.currentDay = null;
      state.dailyQuiz = null;
      state.dailyQuizSubmitted = false;
      showView("plan");
      renderPlan();
      return;
    }

    state.currentDay = Number(day.day);

    const heading = document.getElementById("day-heading");
    const reference = document.getElementById("day-babok-reference");
    const theory = document.getElementById("day-theory");

    if (heading) {
      heading.textContent = localizedValue(day.title);
    }

    if (reference) {
      reference.textContent = day.babokReference || "";
    }

    if (theory) {
      theory.innerHTML = localizedMarkup(day.theory);
    }

    renderSummary(day.summary);
    renderDayStatus(day.day);

    if (
      resetQuiz ||
      !state.dailyQuiz ||
      Number(state.dailyQuiz.day) !== Number(day.day)
    ) {
      state.dailyQuiz = createDailyQuiz(day);
      state.dailyQuizSubmitted = false;
    }

    renderDailyQuiz();
  }

  function createDailyQuiz(day) {
    if (
      !window.QuizEngine ||
      typeof window.QuizEngine.createDailyQuizEngine !== "function"
    ) {
      console.error("QuizEngine.createDailyQuizEngine is unavailable.");
      return null;
    }

    try {
      return window.QuizEngine.createDailyQuizEngine(day);
    } catch (error) {
      console.error("Could not create the daily quiz.", error);
      return null;
    }
  }

  function openStep(stepName) {
    const steps = ["theory", "summary", "quiz"];

    if (!steps.includes(stepName)) {
      return;
    }

    document.querySelectorAll(".step-tab").forEach((tab) => {
      const active = tab.dataset.step === stepName;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    steps.forEach((step) => {
      const panel = document.getElementById(`${step}-panel`);

      if (!panel) {
        return;
      }

      const active = step === stepName;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });

    if (stepName === "quiz") {
      renderDailyQuiz();
    }
  }

  function renderDailyQuiz() {
    const container = document.getElementById("daily-quiz-container");
    const progress = document.getElementById("daily-quiz-progress");
    const scoreElement = document.getElementById("daily-quiz-score");

    if (!container) {
      return;
    }

    const day = getDayByNumber(state.currentDay);

    if (!day || !Array.isArray(day.quiz) || !day.quiz.length) {
      container.innerHTML = `
        <div class="empty-state">${escapeHTML(t("day.quizUnavailable"))}</div>
      `;
      if (progress) progress.textContent = "";
      if (scoreElement) scoreElement.textContent = "";
      return;
    }

    if (!state.dailyQuiz) {
      state.dailyQuiz = createDailyQuiz(day);
    }

    if (!state.dailyQuiz) {
      container.innerHTML = `
        <div class="empty-state">${escapeHTML(t("day.engineUnavailable"))}</div>
      `;
      return;
    }

    const questions = state.dailyQuiz.getQuestions();
    const answers = questions.map((question, index) =>
      state.dailyQuiz.getAnswer(index)
    );
    const answeredCount = answers.filter((answer) => answer !== null).length;
    const result = state.dailyQuiz.getResult();

    if (progress) {
      progress.textContent =
        `${answeredCount} / ${questions.length} ${t("day.quizProgress")}`;
    }

    if (scoreElement) {
      scoreElement.textContent = state.dailyQuizSubmitted
        ? `${result.correct}/${result.total} · ${result.percentage}%`
        : "";
    }

    const questionsMarkup = questions
      .map((question, questionIndex) => {
        const selectedIndex = answers[questionIndex];
        const hasAnswered = selectedIndex !== null;

        const optionsMarkup = Array.from({ length: 4 }, (_, optionIndex) => {
          const selected = selectedIndex === optionIndex;
          const correct = optionIndex === question.correctIndex;
          let classes = "answer-option";

          if (selected) classes += " selected";
          if (hasAnswered && correct) classes += " correct";
          if (hasAnswered && selected && !correct) classes += " incorrect";

          return `
            <button
              class="${classes}"
              type="button"
              data-daily-question="${questionIndex}"
              data-daily-option="${optionIndex}"
              ${hasAnswered || state.dailyQuizSubmitted ? "disabled" : ""}
              aria-pressed="${selected ? "true" : "false"}"
            >
              <span class="answer-option-letter">${String.fromCharCode(65 + optionIndex)}</span>
              <span>${localizedOptionsMarkup(question.options, optionIndex)}</span>
            </button>
          `;
        }).join("");

        const feedback = hasAnswered
          ? `
            <div class="answer-feedback ${selectedIndex === question.correctIndex ? "correct" : "incorrect"}">
              <strong>
                ${escapeHTML(
                  selectedIndex === question.correctIndex
                    ? t("exam.correct")
                    : t("exam.incorrect")
                )}
              </strong>
              <div>${localizedMarkup(question.explanation)}</div>
            </div>
          `
          : "";

        return `
          <section class="daily-question">
            <h3 class="question-heading">
              ${escapeHTML(t("exam.question"))} ${questionIndex + 1}.
              ${localizedQuestionMarkup(question.question)}
            </h3>
            <div class="answer-options">${optionsMarkup}</div>
            ${feedback}
          </section>
        `;
      })
      .join("");

    container.innerHTML = `
      ${questionsMarkup}
      <div class="daily-quiz-actions">
        <button id="submit-daily-quiz" class="button button-primary" type="button">
          ${escapeHTML(
            state.dailyQuizSubmitted
              ? t("day.tryAgain")
              : t("day.submitQuiz")
          )}
        </button>
      </div>
    `;
  }

  function answerDailyQuestion(questionIndex, optionIndex) {
    if (!state.dailyQuiz || state.dailyQuizSubmitted) {
      return;
    }

    state.dailyQuiz.setAnswer(questionIndex, optionIndex);
    renderDailyQuiz();
  }

  function submitDailyQuiz() {
    if (!state.dailyQuiz) {
      return;
    }

    if (state.dailyQuizSubmitted) {
      state.dailyQuiz.reset();
      state.dailyQuizSubmitted = false;
      renderDailyQuiz();
      return;
    }

    const day = getDayByNumber(state.currentDay);
    const questions = state.dailyQuiz.getQuestions();

    if (!day || !questions.length) {
      return;
    }

    if (state.dailyQuiz.getAnsweredCount() !== questions.length) {
      showToast(t("day.answerAll"), "warning");
      return;
    }

    const result = state.dailyQuiz.submit();
    state.dailyQuizSubmitted = true;
    saveDayResult(day.day, result);

    showToast(
      result.passed ? t("day.complete") : t("day.noPass"),
      result.passed ? "success" : "warning"
    );

    renderDailyQuiz();
    renderDayStatus(day.day);
    renderPlan();
  }

  function resetProgress() {
    if (!window.confirm(t("exam.confirmReset"))) {
      return;
    }

    state.completedDays = [];
    state.dayScores = {};
    state.currentDay = null;
    state.dailyQuiz = null;
    state.dailyQuizSubmitted = false;

    removeStorageItem(STORAGE_KEYS.COMPLETED_DAYS);
    removeStorageItem(STORAGE_KEYS.DAY_SCORES);
    removeStorageItem(STORAGE_KEYS.LAST_DAY);

    if (
      window.QuizEngine &&
      typeof window.QuizEngine.clearQuizStorage === "function"
    ) {
      window.QuizEngine.clearQuizStorage();
    }

    renderPlan();
    showToast(t("plan.reset"), "success");
  }

  function getExamQuestionBank() {
    const data = getStudyData();
    return data && Array.isArray(data.examQuestions)
      ? data.examQuestions
      : [];
  }

  function startExam() {
    const questionBank = getExamQuestionBank();

    if (!questionBank.length) {
      showToast(t("exam.noQuestions"), "error");
      return;
    }

    if (questionBank.length < EXAM_QUESTION_COUNT) {
      showToast(t("exam.notEnoughQuestions"), "error");
      return;
    }

    if (
      !window.QuizEngine ||
      typeof window.QuizEngine.createExamEngine !== "function"
    ) {
      showToast(t("day.engineUnavailable"), "error");
      return;
    }

    try {
      state.examEngine = window.QuizEngine.createExamEngine(questionBank, {
        questionCount: EXAM_QUESTION_COUNT,
        durationSeconds: EXAM_DURATION_SECONDS
      });
    } catch (error) {
      console.error("Could not create the exam.", error);
      showToast(t("exam.noQuestions"), "error");
      return;
    }

    state.examSubmitted = false;

    const startScreen = document.getElementById("exam-start-screen");
    const activeScreen = document.getElementById("exam-active-screen");
    const resultsScreen = document.getElementById("exam-results-screen");

    if (startScreen) startScreen.hidden = true;
    if (activeScreen) activeScreen.hidden = false;
    if (resultsScreen) resultsScreen.hidden = true;

    renderExamQuestion();
    state.examEngine.start(updateExamTimer, handleExamTimeout);
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
    if (state.examSubmitted || !state.examEngine) {
      return;
    }

    state.examSubmitted = true;
    showToast(t("exam.timeout"), "warning");
    renderExamResults(state.examEngine.getResult());
  }

  function renderExamQuestion() {
    if (!state.examEngine || state.examSubmitted) {
      return;
    }

    const questions = state.examEngine.getQuestions();
    const activeIndex = state.examEngine.getActiveIndex();
    const question = questions[activeIndex];

    if (!question) {
      return;
    }

    const numberElement = document.getElementById("exam-question-number");
    const questionElement = document.getElementById("exam-question-text");
    const optionsElement = document.getElementById("exam-options");
    const previousButton = document.getElementById("previous-question");
    const nextButton = document.getElementById("next-question");
    const flagButton = document.getElementById("flag-question");

    if (numberElement) {
      numberElement.textContent =
        `${t("exam.question")} ${activeIndex + 1} / ${questions.length}`;
    }

    if (questionElement) {
      questionElement.innerHTML = localizedQuestionMarkup(question.question);
    }

    if (optionsElement) {
      optionsElement.innerHTML = Array.from({ length: 4 }, (_, optionIndex) => {
        const selected =
          state.examEngine.getAnswer(activeIndex) === optionIndex;

        return `
          <button
            type="button"
            class="answer-option ${selected ? "selected" : ""}"
            data-exam-option="${optionIndex}"
            aria-pressed="${selected ? "true" : "false"}"
          >
            <span class="answer-option-letter">${String.fromCharCode(65 + optionIndex)}</span>
            <span>${localizedOptionsMarkup(question.options, optionIndex)}</span>
          </button>
        `;
      }).join("");
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

      const label = flagButton.querySelector("span:last-child");
      if (label) {
        label.textContent = flagged
          ? t("exam.unflagQuestion")
          : t("exam.flagQuestion");
      }
    }

    renderQuestionPalette();
    updateExamTimer(state.examEngine.getRemainingSeconds());
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
            aria-current="${index === activeIndex ? "true" : "false"}"
          >
            ${index + 1}
          </button>
        `;
      })
      .join("");
  }

  function answerExamQuestion(optionIndex) {
    if (!state.examEngine || state.examSubmitted) {
      return;
    }

    state.examEngine.setAnswer(
      state.examEngine.getActiveIndex(),
      optionIndex
    );
    renderExamQuestion();
  }

  function navigateExamQuestion(direction) {
    if (!state.examEngine || state.examSubmitted) {
      return;
    }

    const nextIndex =
      state.examEngine.getActiveIndex() + Number(direction);

    if (state.examEngine.setActiveIndex(nextIndex)) {
      renderExamQuestion();
    }
  }

  function goToExamQuestion(index) {
    if (!state.examEngine || state.examSubmitted) {
      return;
    }

    if (state.examEngine.setActiveIndex(Number(index))) {
      renderExamQuestion();
    }
  }

  function toggleExamFlag() {
    if (!state.examEngine || state.examSubmitted) {
      return;
    }

    state.examEngine.toggleFlag(state.examEngine.getActiveIndex());
    renderExamQuestion();
  }

  function submitExam(askForConfirmation = true) {
    if (!state.examEngine || state.examSubmitted) {
      return;
    }

    if (askForConfirmation && !window.confirm(t("exam.confirmSubmit"))) {
      return;
    }

    state.examSubmitted = true;
    renderExamResults(state.examEngine.submit());
  }

  function getQuestionOptionText(question, optionIndex) {
    if (
      !question ||
      !question.options ||
      optionIndex === null ||
      optionIndex === undefined
    ) {
      return t("exam.noAnswer");
    }

    const english = question.options.en?.[optionIndex] || "";
    const slovene = question.options.sl?.[optionIndex] || "";

    if (state.language === "bilingual") {
      return `${english} / ${slovene}`.trim();
    }

    if (state.language === "en") {
      return english || slovene || t("exam.noAnswer");
    }

    return slovene || english || t("exam.noAnswer");
  }

  function renderKnowledgeAreaBreakdown(areas) {
    const container = document.getElementById("exam-results-areas");

    if (!container) {
      return;
    }

    const rows = Array.isArray(areas) ? areas : [];

    container.innerHTML = `
      <article class="exam-area-card">
        <h2>${escapeHTML(t("exam.breakdown"))}</h2>
        <div class="area-breakdown">
          ${
            rows.length
              ? rows.map((area) => `
                  <div class="area-row">
                    <span class="area-name">${escapeHTML(area.area)}</span>
                    <div class="area-track">
                      <div
                        class="area-fill"
                        style="width:${Math.max(0, Math.min(100, Number(area.percentage) || 0))}%"
                      ></div>
                    </div>
                    <span class="area-value">
                      ${escapeHTML(area.correct)} / ${escapeHTML(area.total)}
                      · ${escapeHTML(area.percentage)}%
                    </span>
                  </div>
                `).join("")
              : `<p>${escapeHTML(t("exam.noQuestions"))}</p>`
          }
        </div>
      </article>
    `;
  }

  function renderExamReview(review) {
    const container = document.getElementById("exam-review");

    if (!container) {
      return;
    }

    if (!Array.isArray(review) || !review.length) {
      container.innerHTML = `
        <div class="empty-state">${escapeHTML(t("exam.noQuestions"))}</div>
      `;
      return;
    }

    container.innerHTML = review
      .map((item, index) => {
        const question = item.question || {};
        const selectedAnswer =
          item.selectedIndex === null || item.selectedIndex === undefined
            ? t("exam.noAnswer")
            : getQuestionOptionText(question, item.selectedIndex);
        const correctAnswer = getQuestionOptionText(
          question,
          item.correctIndex
        );
        const correct = Boolean(item.correct);

        return `
          <article class="review-item ${correct ? "correct" : "incorrect"}">
            <div class="review-question-header">
              <strong>${escapeHTML(t("exam.question"))} ${index + 1}</strong>
              <span class="review-result ${correct ? "correct" : "incorrect"}">
                ${escapeHTML(correct ? t("exam.correct") : t("exam.incorrect"))}
              </span>
            </div>
            <div class="review-question-text">
              ${localizedQuestionMarkup(question.question)}
            </div>
            <p class="review-answer">
              <strong>${escapeHTML(t("exam.selectedAnswer"))}:</strong>
              ${escapeHTML(selectedAnswer)}
            </p>
            <p class="review-answer">
              <strong>${escapeHTML(t("exam.correctAnswer"))}:</strong>
              ${escapeHTML(correctAnswer)}
            </p>
            <div class="review-explanation">
              ${localizedMarkup(question.explanation)}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderExamResults(result) {
    if (!result) {
      return;
    }

    state.examSubmitted = true;

    const startScreen = document.getElementById("exam-start-screen");
    const activeScreen = document.getElementById("exam-active-screen");
    const resultsScreen = document.getElementById("exam-results-screen");
    const summary = document.getElementById("exam-results-summary");

    if (startScreen) startScreen.hidden = true;
    if (activeScreen) activeScreen.hidden = true;
    if (resultsScreen) resultsScreen.hidden = false;

    if (summary) {
      const passed = Boolean(result.passed);

      summary.className = `exam-result-summary ${passed ? "pass" : "fail"}`;
      summary.innerHTML = `
        <p class="eyebrow">${escapeHTML(t("exam.title"))}</p>
        <div class="result-status">
          ${escapeHTML(passed ? t("exam.pass") : t("exam.fail"))}
        </div>
        <div class="result-score">${escapeHTML(result.percentage)}%</div>
        <p class="result-details">
          ${escapeHTML(result.correct)} / ${escapeHTML(result.total)}
          · ${escapeHTML(t("exam.passMark"))}: ${PASS_PERCENTAGE}%
        </p>
      `;
    }

    renderKnowledgeAreaBreakdown(result.knowledgeAreas);
    renderExamReview(result.review);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetExam() {
    if (state.examEngine && typeof state.examEngine.stop === "function") {
      state.examEngine.stop();
    }

    state.examEngine = null;
    state.examSubmitted = false;

    const startScreen = document.getElementById("exam-start-screen");
    const activeScreen = document.getElementById("exam-active-screen");
    const resultsScreen = document.getElementById("exam-results-screen");
    const timer = document.getElementById("exam-timer");

    if (startScreen) startScreen.hidden = false;
    if (activeScreen) activeScreen.hidden = true;
    if (resultsScreen) resultsScreen.hidden = true;

    if (timer) {
      timer.textContent = "01:00:00";
      timer.classList.remove("warning");
    }
  }

  function getGlossaryEntries() {
    const data = getStudyData();
    return data && Array.isArray(data.glossary) ? data.glossary : [];
  }

  function setupGlossaryFilters() {
    const entries = getGlossaryEntries();
    const letterFilter = document.getElementById("letter-filter");
    const categoryFilter = document.getElementById("category-filter");

    if (letterFilter) {
      const selectedLetter = letterFilter.value || "all";
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

      letterFilter.innerHTML = `
        <option value="all">${escapeHTML(t("glossary.all"))}</option>
        ${letters.map((letter) =>
          `<option value="${letter}">${letter}</option>`
        ).join("")}
      `;

      letterFilter.value =
        selectedLetter === "all" || letters.includes(selectedLetter)
          ? selectedLetter
          : "all";
    }

    if (categoryFilter) {
      const selectedCategory = categoryFilter.value || "all";
      const categories = [
        ...new Set(entries.map((entry) => entry.category).filter(Boolean))
      ].sort((a, b) => a.localeCompare(b));

      categoryFilter.innerHTML = `
        <option value="all">${escapeHTML(t("glossary.allCategories"))}</option>
        ${categories.map((category) =>
          `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`
        ).join("")}
      `;

      categoryFilter.value =
        selectedCategory === "all" || categories.includes(selectedCategory)
          ? selectedCategory
          : "all";
    }
  }

  function renderGlossary() {
    const list = document.getElementById("glossary-list");
    const count = document.getElementById("glossary-count");

    if (!list) {
      return;
    }

    const entries = getGlossaryEntries();

    if (!entries.length) {
      list.innerHTML = `
        <div class="empty-state">${escapeHTML(t("glossary.unavailable"))}</div>
      `;
      if (count) count.textContent = "0";
      return;
    }

    const search = (
      document.getElementById("glossary-search")?.value || ""
    ).trim().toLocaleLowerCase();
    const letter =
      document.getElementById("letter-filter")?.value || "all";
    const category =
      document.getElementById("category-filter")?.value || "all";

    const filteredEntries = entries
      .filter((entry) => {
        const searchableText = [
          localizedPlainText(entry.term),
          localizedPlainText(entry.definition),
          localizedPlainText(entry.example)
        ]
          .join(" ")
          .toLocaleLowerCase();

        if (search && !searchableText.includes(search)) {
          return false;
        }

        if (category !== "all" && entry.category !== category) {
          return false;
        }

        if (letter !== "all") {
          const firstCharacter = localizedPlainText(entry.term)
            .trim()
            .charAt(0)
            .toLocaleUpperCase();

          if (firstCharacter !== letter) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) =>
        localizedPlainText(a.term).localeCompare(
          localizedPlainText(b.term),
          state.language === "en" ? "en" : "sl"
        )
      );

    if (count) {
      count.textContent = `${filteredEntries.length} / ${entries.length}`;
    }

    if (!filteredEntries.length) {
      list.innerHTML = `
        <div class="empty-state">${escapeHTML(t("glossary.noResults"))}</div>
      `;
      return;
    }

    list.innerHTML = filteredEntries
      .map((entry) => {
        const example = localizedMarkup(entry.example);

        return `
          <article class="glossary-entry">
            <div class="glossary-entry-header">
              <h2>${localizedMarkup(entry.term)}</h2>
              <span class="category-badge">${escapeHTML(entry.category || "")}</span>
            </div>
            <div class="glossary-definition">
              ${localizedMarkup(entry.definition)}
            </div>
            ${
              example
                ? `
                  <div class="glossary-example">
                    <strong>${escapeHTML(t("glossary.example"))}:</strong>
                    ${example}
                  </div>
                `
                : ""
            }
          </article>
        `;
      })
      .join("");
  }

  function bindEvents() {
    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const view = tab.dataset.view;

        if (view === "plan") {
          showView("plan");
          renderPlan();
        } else if (view === "exam") {
          showView("exam");
        } else if (view === "glossary") {
          showView("glossary");
          renderGlossary();
        }
      });
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.language);
      });
    });

    document
      .getElementById("reset-progress")
      ?.addEventListener("click", resetProgress);

    document.getElementById("study-plan")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-day]");

      if (button) {
        openDay(Number(button.dataset.openDay));
      }
    });

    document.getElementById("back-to-plan")?.addEventListener("click", () => {
      state.currentDay = null;
      state.dailyQuiz = null;
      state.dailyQuizSubmitted = false;
      showView("plan");
      renderPlan();
    });

    document.querySelectorAll(".step-tab").forEach((tab) => {
      tab.addEventListener("click", () => openStep(tab.dataset.step));
    });

    document
      .getElementById("daily-quiz-container")
      ?.addEventListener("click", (event) => {
        const answerButton = event.target.closest("[data-daily-option]");

        if (answerButton) {
          answerDailyQuestion(
            Number(answerButton.dataset.dailyQuestion),
            Number(answerButton.dataset.dailyOption)
          );
          return;
        }

        if (event.target.closest("#submit-daily-quiz")) {
          submitDailyQuiz();
        }
      });

    document.getElementById("start-exam")?.addEventListener("click", startExam);

    document.getElementById("exam-options")?.addEventListener("click", (event) => {
      const optionButton = event.target.closest("[data-exam-option]");

      if (optionButton) {
        answerExamQuestion(Number(optionButton.dataset.examOption));
      }
    });

    document
      .getElementById("question-palette")
      ?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-palette-question]");

        if (button) {
          goToExamQuestion(Number(button.dataset.paletteQuestion));
        }
      });

    document
      .getElementById("previous-question")
      ?.addEventListener("click", () => navigateExamQuestion(-1));

    document
      .getElementById("next-question")
      ?.addEventListener("click", () => navigateExamQuestion(1));

    document
      .getElementById("flag-question")
      ?.addEventListener("click", toggleExamFlag);

    document
      .getElementById("submit-exam")
      ?.addEventListener("click", () => submitExam(true));

    document
      .getElementById("restart-exam")
      ?.addEventListener("click", resetExam);

    document
      .getElementById("glossary-search")
      ?.addEventListener("input", renderGlossary);

    document
      .getElementById("letter-filter")
      ?.addEventListener("change", renderGlossary);

    document
      .getElementById("category-filter")
      ?.addEventListener("change", renderGlossary);

    window.addEventListener("hashchange", handleRouteChange);

    window.addEventListener("beforeunload", () => {
      if (state.examEngine && typeof state.examEngine.stop === "function") {
        state.examEngine.stop();
      }
    });
  }

  function handleRouteChange() {
    const hash = window.location.hash.replace(/^#/, "");
    const dayMatch = hash.match(/^day-(1|2)$/);

    if (dayMatch) {
      openDay(Number(dayMatch[1]));
      return;
    }

    if (hash === "exam") {
      showView("exam", false);
      return;
    }

    if (hash === "glossary") {
      showView("glossary", false);
      renderGlossary();
      return;
    }

    showView("plan", false);
    renderPlan();
  }

  function init() {
    loadState();
    applyTranslations();
    updateLanguageButtons();
    bindEvents();
    setupGlossaryFilters();

    const hash = window.location.hash.replace(/^#/, "");
    const dayMatch = hash.match(/^day-(1|2)$/);

    if (dayMatch) {
      openDay(Number(dayMatch[1]));
      return;
    }

    if (hash === "exam") {
      showView("exam", false);
      return;
    }

    if (hash === "glossary") {
      showView("glossary", false);
      renderGlossary();
      return;
    }

    showView("plan", false);
    renderPlan();
  }

  return {
    init,
    setLanguage,
    showView,
    openDay,
    openStep,
    renderPlan,
    renderDay,
    renderGlossary,
    startExam,
    submitExam,
    renderExamResults,
    resetExam,
    resetProgress
  };
})();

document.addEventListener("DOMContentLoaded", App.init);
