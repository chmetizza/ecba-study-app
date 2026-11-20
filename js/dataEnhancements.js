(function initializeTechniquesView() {
  "use strict";

  const STYLE_ID = "techniques-view-styles";
  const VIEW_ID = "techniques-view";
  const NAV_ID = "techniques-nav";
  let initialized = false;

  function language() {
    const stored = localStorage.getItem("ecba_language");
    return ["en", "sl", "bilingual"].includes(stored) ? stored : "sl";
  }

  function text(en, sl) {
    const lang = language();
    if (lang === "en") return en;
    if (lang === "bilingual") return `${en} / ${sl}`;
    return sl;
  }

  function escape(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .techniques-controls { margin: 0 0 20px; }
      .techniques-search { width: min(100%, 560px); }
      .techniques-count { color: var(--color-text-muted); font-size: .88rem; font-weight: 700; }
      .techniques-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
      .technique-entry { padding: 20px; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-sm); }
      .technique-entry header { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:10px; }
      .technique-entry h2 { margin:0; font-size:1.08rem; }
      .technique-number { flex:none; color:var(--color-primary); font-size:.8rem; font-weight:800; }
      .technique-category { display:inline-flex; margin:0 0 10px; padding:3px 9px; border-radius:999px; background:var(--color-primary-soft); color:var(--color-primary); font-size:.72rem; font-weight:750; }
      .technique-description { margin:0; color:#334155; }
      @media (max-width:760px) { .techniques-list { grid-template-columns:1fr; } }
      @media (max-width:700px) { #techniques-nav { min-width:auto; padding-inline:9px; } }
    `;
    document.head.appendChild(style);
  }

  function addInterface() {
    const nav = document.querySelector(".main-nav");
    const main = document.querySelector("main#app");
    if (!nav || !main) return false;

    if (!document.getElementById(NAV_ID)) {
      const button = document.createElement("button");
      button.id = NAV_ID;
      button.type = "button";
      button.className = "nav-tab";
      button.dataset.view = "techniques";
      button.textContent = text("Techniques", "Tehnike");
      nav.appendChild(button);
    }

    if (!document.getElementById(VIEW_ID)) {
      const section = document.createElement("section");
      section.id = VIEW_ID;
      section.className = "view";
      section.setAttribute("aria-labelledby", "techniques-heading");
      section.innerHTML = `
        <div class="view-heading">
          <div>
            <p class="eyebrow">BABOK® Guide v3 · 10</p>
            <h1 id="techniques-heading">${escape(text("Business Analysis Techniques", "Tehnike poslovne analize"))}</h1>
          </div>
          <span id="techniques-count" class="techniques-count" aria-live="polite"></span>
        </div>
        <div class="techniques-controls">
          <label class="search-field" for="techniques-search">
            <span class="sr-only">${escape(text("Search techniques", "Išči tehnike"))}</span>
            <span aria-hidden="true">⌕</span>
            <input id="techniques-search" class="techniques-search" type="search" autocomplete="off" placeholder="${escape(text("Search technique or description…", "Išči tehniko ali opis…"))}">
          </label>
        </div>
        <div id="techniques-list" class="techniques-list"></div>
      `;
      main.appendChild(section);
    }
    return true;
  }

  function render() {
    const list = document.getElementById("techniques-list");
    const count = document.getElementById("techniques-count");
    if (!list) return;

    const all = Array.isArray(window.STUDY_TECHNIQUES) ? window.STUDY_TECHNIQUES : [];
    const query = (document.getElementById("techniques-search")?.value || "").trim().toLocaleLowerCase();
    const filtered = all.filter((item) => {
      const haystack = [item.id, item.category, item.title?.en, item.title?.sl, item.description?.en, item.description?.sl]
        .join(" ").toLocaleLowerCase();
      return !query || haystack.includes(query);
    });

    if (count) count.textContent = `${filtered.length} / ${all.length}`;
    if (!all.length) {
      list.innerHTML = `<div class="empty-state">${escape(text("Technique data could not be loaded.", "Podatkov o tehnikah ni bilo mogoče naložiti."))}</div>`;
      return;
    }
    if (!filtered.length) {
      list.innerHTML = `<div class="empty-state">${escape(text("No techniques match your search.", "Nobena tehnika ne ustreza iskanju."))}</div>`;
      return;
    }

    list.innerHTML = filtered.map((item) => `
      <article class="technique-entry">
        <header>
          <h2>${escape(text(item.title.en, item.title.sl))}</h2>
          <span class="technique-number">${escape(item.id)}</span>
        </header>
        <span class="technique-category">${escape(text(item.category, item.category))}</span>
        <p class="technique-description">${escape(text(item.description.en, item.description.sl))}</p>
      </article>
    `).join("");
  }

  function showTechniques(updateHash) {
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    document.getElementById(VIEW_ID)?.classList.add("active");
    document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === "techniques"));
    if (updateHash && window.location.hash !== "#techniques") {
      window.history.replaceState(null, "", "#techniques");
    }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function install() {
    if (initialized || !addInterface()) return;
    initialized = true;
    addStyles();

    document.getElementById(NAV_ID).addEventListener("click", () => showTechniques(true));
    document.getElementById("techniques-search").addEventListener("input", render);
    document.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () => window.setTimeout(() => {
        const navButton = document.getElementById(NAV_ID);
        if (navButton) navButton.textContent = text("Techniques", "Tehnike");
        const heading = document.getElementById("techniques-heading");
        if (heading) heading.textContent = text("Business Analysis Techniques", "Tehnike poslovne analize");
        const input = document.getElementById("techniques-search");
        if (input) input.placeholder = text("Search technique or description…", "Išči tehniko ali opis…");
        render();
      }, 0));
    });

    window.addEventListener("hashchange", () => {
      if (window.location.hash === "#techniques") window.setTimeout(() => showTechniques(false), 0);
    });
    if (window.location.hash === "#techniques") window.setTimeout(() => showTechniques(false), 0);

    const dataScript = document.createElement("script");
    dataScript.src = "js/techniques.js";
    dataScript.onload = render;
    dataScript.onerror = render;
    document.body.appendChild(dataScript);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  } else {
    install();
  }
})();
