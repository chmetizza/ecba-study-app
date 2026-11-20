Markdown
# SPEC.md — IIBA ECBA Study Companion Web Application

## 1. Project Overview & Goal
Build a standalone, responsive, single-page web application (SPA) to help a user prepare for the **IIBA ECBA (Entry Certificate in Business Analysis)** certification based on **BABOK® Guide v3**.

- **Target User:** Individual studying for the IIBA ECBA exam who needs structured daily study sessions, bilingual support (English & Slovenian), concept summaries, practice quizzes, an exam simulator, and a terminology glossary.
- **Core Constraint (Zero-Build Setup):** The application MUST be built using **pure HTML5, CSS3, and Vanilla JavaScript (ES6+)** with **no external build tools, bundlers, or frameworks** (no Node.js, React, Vite, or npm required). Opening `index.html` directly in any modern web browser must run the entire application immediately.
- **Language Support (Bilingual EN / SL):**
  - All learning content (theory, summaries, quiz questions, answer explanations, and glossary definitions) must support **both English (`en`) and Slovenian (`sl`)**.
  - Include a prominent **Language Toggle (`EN` | `SL` | `Bilingual Side-by-Side`)** in the top navigation bar so the user can study in English (official exam language), Slovenian (for deeper comprehension), or view both simultaneously.
  - UI labels (buttons, navigation, progress indicators) should adapt to the selected language (defaulting to Slovenian or English based on the toggle).

---

## 2. File & Folder Structure
Keep the architecture clean, modular, and easy to expand with additional study data:

```text
/
├── index.html          # Main application shell and semantic layout
├── css/
│   └── styles.css      # Clean, modern, responsive styling (CSS variables, Flexbox/Grid)
├── js/
│   ├── app.js          # Main application logic, routing/views, state & localStorage management
│   ├── quizEngine.js   # Reusable quiz logic (daily quizzes & full ECBA exam simulation)
│   └── data.js         # Structured dataset: 14-day curriculum, quizzes, exam bank, and glossary
└── SPEC.md             # This specification file
3. Core Functional Requirements
Feature 1: 14-Day Structured Study Plan (14-Day Plan)
A dashboard displaying a 14-day roadmap aligned with the ECBA Exam Blueprint (BABOK v3 Knowledge Areas, Underlying Competencies, Techniques, and Business Analysis Key Concepts).

Curriculum Breakdown (14 Days):

Day 1: Introduction to Business Analysis & BACCM™ (Business Analysis Core Concept Model)

Day 2: Key Terms, Stakeholders & Requirements Classification Schema

Day 3: Business Analysis Planning and Monitoring (Part 1: Approach & Stakeholder Engagement)

Day 4: Business Analysis Planning and Monitoring (Part 2: Governance, Information Management & Performance)

Day 5: Elicitation and Collaboration (Part 1: Prepare & Conduct Elicitation)

Day 6: Elicitation and Collaboration (Part 2: Confirm Results, Communicate & Manage Collaboration)

Day 7: Requirements Life Cycle Management (Trace, Maintain, Prioritize, Assess Changes, Approve)

Day 8: Strategy Analysis (Current State, Future State, Risk, Change Strategy)

Day 9: Requirements Analysis and Design Definition — RADD (Part 1: Specify, Model, Verify & Validate)

Day 10: Requirements Analysis and Design Definition — RADD (Part 2: Architecture, Design Options & Value)

Day 11: Solution Evaluation (Measure, Analyze, Assess Limitations, Recommend Actions)

Day 12: Underlying Competencies (Analytical Thinking, Communication, Business Acumen, Tools)

Day 13: Core BABOK Techniques (SWOT, MoSCoW, User Stories, Process Modelling, Prototyping, RACI, etc.)

Day 14: Final Review, Exam Strategy & Weak-Area Consolidation

Daily Module Flow (3 Mandatory Sequential Stages per Day):
When the user clicks on any Day (1–14), the view must guide them through three distinct tabs/steps:

Step 1: Theory (Teorija / Theory) — Structured, digestible explanation of the day's BABOK topics, inputs/outputs, and core concepts in clear English and Slovenian.

Step 2: Key Takeaways & Summary (Povzetek / Summary) — Bullet-point cheat sheet highlighting "Must-Know for the ECBA Exam", key definitions, and common exam traps.

Step 3: Daily Checkpoint Quiz (Dnevni kviz / Daily Quiz) — 5 to 10 multiple-choice questions testing that specific day's material.

Immediate feedback after each question (or upon completion) showing the correct answer and a detailed explanation of why it is correct.

Passing threshold (e.g., ≥ 70%) marks the Day as "Completed" in localStorage.

Progress Tracking:

Persist completed days, quiz scores, and last visited day in localStorage.

Display a visual progress bar at the top of the 14-Day Plan (e.g., 4 / 14 Days Completed).

Include a "Reset Progress" button with a confirmation dialog.

Feature 2: ECBA Exam Simulator (Simulacija izpita / Exam Simulator)
A realistic mock exam mode designed to replicate official IIBA ECBA exam conditions.

Exam Parameters (aligned with official ECBA format):

Question Count: 50 multiple-choice questions (4 options: A, B, C, D; 1 correct answer), randomly drawn across all BABOK Knowledge Areas weighted according to the ECBA blueprint (e.g., RADD ~24%, Elicitation ~20%, RLCM ~20%, Planning & Monitoring ~5%, Strategy Analysis ~5%, BA Concepts/Techniques/Competencies ~26%).

Countdown Timer: 60 minutes (01:00:00), visible at the top of the exam screen. Auto-submits when time reaches 00:00.

Exam Navigation:

Question palette/grid (1 to 50) showing answered, unanswered, and "Flagged for Review" questions.

"Previous", "Next", and "Flag Question" buttons.

No answers or hints shown during the active exam.

Post-Exam Results & Analytics Screen:

Overall score (number and percentage) and Pass / Fail status (Pass mark: 70% / 35 out of 50).

Breakdown of score by BABOK Knowledge Area (so the user sees which areas need more study).

Full review mode listing every question, the user's selected answer, the correct answer, and a bilingual explanation.

Note on Initial Data: Populate data.js with at least 50 complete, realistic, high-quality ECBA exam questions (with bilingual text and explanations) so the simulator works fully out-of-the-box without placeholder text.

Feature 3: BABOK Terminology Glossary (Slovar pojmov / Terminology Glossary)
A searchable, filterable conceptual dictionary explaining key IIBA / BABOK v3 terms (not a simple word-for-word translation dictionary, but a conceptual encyclopedia of meanings).

Functionality:

Real-time search bar filtering by term name or description text (works in both English and Slovenian).

Alphabetical filter (All, A–Z) and Category filter (e.g., Core Concepts, Knowledge Areas, Techniques, Requirements Types).

Each glossary entry displays:

Term Name (Official English BABOK term + Slovenian equivalent in parentheses)

Category Badge

Conceptual Definition & Meaning (clear explanation of what the concept means in Business Analysis practice, written in both EN and SL)

Practical Example / Exam Context (1–2 sentences illustrating how it is used or tested).

Initial Data: Include at least 40 essential BABOK terms in data.js (e.g., BACCM, Stakeholder, Requirement vs. Design, Business Requirement, Stakeholder Requirement, Solution Requirement, Transition Requirement, Elicitation, Traceability, Verification vs. Validation, Scope, Assumption, Constraint, Risk, RACI Matrix, MoSCoW, Backlog, Use Case, User Story, Root Cause Analysis, etc.).

4. Data Schema (js/data.js)
Structure data.js cleanly using JavaScript objects/arrays so content is easy to read and expand:

JavaScript
const STUDY_DATA = {
  days: [
    {
      day: 1,
      title: { en: "...", sl: "..." },
      babokReference: "Chapter 1 & 2",
      theory: { en: "<p>...</p>", sl: "<p>...</p>" },
      summary: { en: ["Point 1", "Point 2"], sl: ["Točka 1", "Točka 2"] },
      quiz: [
        {
          id: "d1_q1",
          knowledgeArea: "Business Analysis Key Concepts",
          question: { en: "...", sl: "..." },
          options: {
            en: ["Option A", "Option B", "Option C", "Option D"],
            sl: ["Možnost A", "Možnost B", "Možnost C", "Možnost D"]
          },
          correctIndex: 0,
          explanation: { en: "...", sl: "..." }
        }
      ]
    }
    // ... Days 2 through 14
  ],
  examQuestions: [
    // At least 50 full ECBA-style questions following the same question object schema
  ],
  glossary: [
    {
      id: "term_baccm",
      term: { en: "BACCM (Business Analysis Core Concept Model)", sl: "BACCM (Osrednji konceptualni model poslovne analize)" },
      category: "Core Concepts",
      definition: { en: "...", sl: "..." },
      example: { en: "...", sl: "..." }
    }
    // ... At least 40 terms
  ]
};
5. UI / UX & Design Guidelines
Visual Style: Clean, calm, academic/professional interface (soft light background #F8FAFC, crisp white cards #FFFFFF, primary navy/blue accent #1E40AF, success green #15803D, warning amber #B45309, subtle borders #E2E8F0).

Typography: System sans-serif font stack (Inter, system-ui, -apple-system, sans-serif) with comfortable reading width (max-width: 900px for theory blocks) and clear visual hierarchy.

Navigation: Top sticky header with:

App Title (ECBA Study Hub)

Main View Tabs: 14-Day Plan | Exam Simulator | Glossary

Language Switcher: EN | SL | EN + SL

Responsiveness: Must work seamlessly on desktop and mobile screens.

6. Acceptance Criteria for Copilot Implementation
Opening index.html in a browser loads the app with zero console errors and zero external dependencies.

All 14 days contain complete, accurate, non-placeholder BABOK v3 ECBA theory, summaries, and daily quizzes in both English and Slovenian.

The Exam Simulator runs a timed 50-question exam with question flagging, navigation grid, score breakdown by Knowledge Area, and detailed answer review.

The Glossary contains at least 40 well-explained BABOK concepts with working search and category filters.

Switching between EN, SL, and EN + SL updates the displayed content immediately without losing quiz or study progress.
