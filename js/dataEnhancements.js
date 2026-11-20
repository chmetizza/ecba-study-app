(function normalizeStudyKeyPoints() {
  "use strict";

  if (typeof STUDY_DATA === "undefined" || !Array.isArray(STUDY_DATA.days)) {
    console.error("Study data is unavailable; key points could not be prepared.");
    return;
  }

  const additions = {
    1: {
      en: [
        "ECBA blueprint connection: be able to define business analysis, explain how it enables change, describe all six BACCM concepts and their relationships, and explain how value is created and assessed.",
        "For situation-based questions, use the context and stakeholder perspective to identify the need and desired outcome before choosing or judging a solution."
      ],
      sl: [
        "Povezava z ECBA blueprintom: znati moraš opredeliti poslovno analizo, pojasniti, kako omogoča spremembe, opisati vseh šest pojmov BACCM in njihove odnose ter razložiti ustvarjanje in ocenjevanje vrednosti.",
        "Pri situacijskih vprašanjih upoštevaj kontekst in perspektivo deležnikov; pred izbiro ali presojo rešitve prepoznaj potrebo in želeni izid."
      ]
    },
    2: {
      en: [
        "ECBA blueprint connection: be ready to distinguish a requirement (a usable representation of a need) from a design (a usable representation of a solution), and explain how they can evolve together.",
        "Classify a scenario before selecting an answer: business requirements explain why change is needed; stakeholder requirements express stakeholder needs; solution requirements describe capabilities or qualities; transition requirements support the temporary move to the future state.",
        "The sample questions use practical scenarios and ask for the most appropriate or next action. Apply the concepts to the situation instead of relying only on memorized definitions."
      ],
      sl: [
        "Povezava z ECBA blueprintom: razlikovati moraš zahtevo (uporabno predstavitev potrebe) od načrta rešitve (uporabne predstavitve rešitve) ter pojasniti, kako se lahko razvijata skupaj.",
        "Pred izbiro odgovora razvrsti zahtevo v scenariju: poslovne zahteve pojasnjujejo, zakaj je potrebna sprememba; zahteve deležnikov izražajo njihove potrebe; zahteve rešitve opisujejo zmožnosti ali lastnosti; prehodne zahteve pa podpirajo začasni prehod v prihodnje stanje.",
        "Vzorčna vprašanja uporabljajo praktične scenarije in sprašujejo po najprimernejšem naslednjem koraku. Pojme uporabi v dani situaciji, namesto da se zanašaš samo na pomnjenje definicij."
      ]
    }
  };

  [1, 2].forEach((dayNumber) => {
    const day = STUDY_DATA.days.find((item) => Number(item.day) === dayNumber);
    if (!day) return;

    const summary = day.summary;
    if (!Array.isArray(summary) && summary && typeof summary === "object") {
      const english = Array.isArray(summary.en) ? summary.en : [];
      const slovene = Array.isArray(summary.sl) ? summary.sl : [];
      const length = Math.max(english.length, slovene.length);

      day.summary = Array.from({ length }, (_, index) => ({
        en: english[index] || slovene[index] || "",
        sl: slovene[index] || english[index] || ""
      }));
    } else if (!Array.isArray(day.summary)) {
      day.summary = [];
    }

    const extra = additions[dayNumber];
    extra.en.forEach((englishPoint, index) => {
      const slovenePoint = extra.sl[index] || englishPoint;
      const exists = day.summary.some(
        (point) => point.en === englishPoint || point.sl === slovenePoint
      );

      if (!exists) {
        day.summary.push({ en: englishPoint, sl: slovenePoint });
      }
    });
  });
})();
