const STUDY_DATA = {
  days: [
    {
      day: 1,
      title: {
        en: "Introduction to Business Analysis and BACCM",
        sl: "Uvod v poslovno analizo in BACCM"
      },
      babokReference:
        "BABOK Guide v3 — Chapter 1 and Business Analysis Core Concept Model",
      theory: {
        en:
          "<p><strong>Business analysis</strong> is the practice of enabling change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders. It is not limited to software requirements. It includes understanding organizational context, identifying opportunities for improvement, and helping stakeholders agree on a solution.</p>" +
          "<p>The <strong>BACCM</strong> (Business Analysis Core Concept Model) provides six equally important concepts: Change, Need, Solution, Stakeholder, Value, and Context. Together, they form a shared analytical framework. Each concept can be viewed from several perspectives, and the boundaries between concepts are determined by the context.</p>" +
          "<ul>" +
          "<li><strong>Change:</strong> the transformation of some aspect of an organization or system.</li>" +
          "<li><strong>Need:</strong> a problem, opportunity, or constraint with the potential to change.</li>" +
          "<li><strong>Solution:</strong> a specific way of satisfying one or more needs in a context.</li>" +
          "<li><strong>Stakeholder:</strong> a group or individual with a relationship to the change, need, or solution.</li>" +
          "<li><strong>Value:</strong> the worth, importance, or usefulness of something to a stakeholder.</li>" +
          "<li><strong>Context:</strong> the circumstances that influence, facilitate, or constrain change.</li>" +
          "</ul>" +
          "<p>Business analysis work is organized through <strong>knowledge areas</strong>, <strong>tasks</strong>, <strong>techniques</strong>, and <strong>underlying competencies</strong>. Knowledge areas describe fields of professional practice. Tasks are performed to create required outputs. Techniques provide approaches for completing tasks, while competencies describe behavioural, analytical, and interpersonal abilities.</p>",
        sl:
          "<p><strong>Poslovna analiza</strong> je praksa omogočanja sprememb v podjetju z določanjem potreb in priporočanjem rešitev, ki deležnikom prinašajo vrednost. Ne omejuje se na programske zahteve. Vključuje razumevanje organizacijskega konteksta, prepoznavanje priložnosti za izboljšave in pomoč deležnikom pri dogovoru o rešitvi.</p>" +
          "<p><strong>BACCM</strong> (osrednji konceptualni model poslovne analize) vključuje šest enakovredno pomembnih pojmov: spremembo, potrebo, rešitev, deležnika, vrednost in kontekst. Skupaj predstavljajo skupni analitični okvir. Vsak pojem je mogoče obravnavati z različnih perspektiv, meje med pojmi pa določa kontekst.</p>" +
          "<ul>" +
          "<li><strong>Sprememba:</strong> preoblikovanje nekega dela organizacije ali sistema.</li>" +
          "<li><strong>Potreba:</strong> problem, priložnost ali omejitev, ki lahko povzroči spremembo.</li>" +
          "<li><strong>Rešitev:</strong> določen način zadovoljevanja ene ali več potreb v danem kontekstu.</li>" +
          "<li><strong>Deležnik:</strong> skupina ali posameznik, ki je povezan s spremembo, potrebo ali rešitvijo.</li>" +
          "<li><strong>Vrednost:</strong> korist, pomembnost ali uporabnost nečesa za deležnika.</li>" +
          "<li><strong>Kontekst:</strong> okoliščine, ki vplivajo na spremembo, jo omogočajo ali omejujejo.</li>" +
          "</ul>" +
          "<p>Poslovnoanalitsko delo sestavljajo <strong>področja znanja</strong>, <strong>naloge</strong>, <strong>tehnike</strong> in <strong>temeljne kompetence</strong>. Področja znanja opisujejo področja strokovne prakse. Naloge se izvajajo za ustvarjanje zahtevanih rezultatov. Tehnike so pristopi za izvedbo nalog, kompetence pa opisujejo vedenjske, analitične in medosebne sposobnosti.</p>"
      },
      summary: {
        en: [
          "Business analysis enables enterprise change and is concerned with delivering value, not only documenting requirements.",
          "BACCM has six concepts: Change, Need, Solution, Stakeholder, Value, and Context.",
          "A solution is a way to satisfy a need; it is not necessarily a software product.",
          "Context influences how the other five BACCM concepts are understood.",
          "The BABOK framework includes knowledge areas, tasks, techniques, inputs, outputs, and underlying competencies.",
          "Different stakeholders may perceive the value of the same solution differently."
        ],
        sl: [
          "Poslovna analiza omogoča spremembe v podjetju in je usmerjena v zagotavljanje vrednosti, ne zgolj v dokumentiranje zahtev.",
          "BACCM vključuje šest pojmov: spremembo, potrebo, rešitev, deležnika, vrednost in kontekst.",
          "Rešitev je način zadovoljevanja potrebe in ni nujno programski izdelek.",
          "Kontekst vpliva na razumevanje preostalih petih pojmov BACCM.",
          "Okvir BABOK vključuje področja znanja, naloge, tehnike, vhode, izhode in temeljne kompetence.",
          "Različni deležniki lahko vrednost iste rešitve razumejo različno."
        ]
      },
      quiz: [
        {
          id: "d1_q1",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "What is the primary purpose of business analysis?",
            sl: "Kateri je glavni namen poslovne analize?"
          },
          options: {
            en: [
              "To document every possible system feature",
              "To enable change and deliver value to stakeholders",
              "To prepare technical source code",
              "To replace organizational decision-making"
            ],
            sl: [
              "Dokumentirati vsako možno funkcionalnost sistema",
              "Omogočiti spremembo in deležnikom zagotoviti vrednost",
              "Pripraviti tehnično izvorno kodo",
              "Zamenjati odločanje v organizaciji"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Business analysis enables change by defining needs and recommending solutions that deliver value to stakeholders.",
            sl: "Poslovna analiza omogoča spremembe tako, da opredeli potrebe in priporoča rešitve, ki deležnikom prinašajo vrednost."
          }
        },
        {
          id: "d1_q2",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which of the following is NOT one of the six BACCM concepts?",
            sl: "Kateri od naslednjih pojmov NI eden od šestih pojmov BACCM?"
          },
          options: {
            en: ["Change", "Need", "Requirement", "Context"],
            sl: ["Sprememba", "Potreba", "Zahteva", "Kontekst"]
          },
          correctIndex: 2,
          explanation: {
            en: "Requirement is not a separate BACCM core concept. The six concepts are Change, Need, Solution, Stakeholder, Value, and Context.",
            sl: "Zahteva ni samostojen osrednji pojem BACCM. Šest pojmov je sprememba, potreba, rešitev, deležnik, vrednost in kontekst."
          }
        },
        {
          id: "d1_q3",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which BACCM concept describes a problem or opportunity that may lead to change?",
            sl: "Kateri pojem BACCM opisuje problem ali priložnost, ki lahko povzroči spremembo?"
          },
          options: {
            en: ["Context", "Need", "Solution", "Stakeholder"],
            sl: ["Kontekst", "Potreba", "Rešitev", "Deležnik"]
          },
          correctIndex: 1,
          explanation: {
            en: "A need is a problem, opportunity, or constraint that has the potential to motivate change.",
            sl: "Potreba je problem, priložnost ali omejitev, ki lahko spodbudi spremembo."
          }
        },
        {
          id: "d1_q4",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Why is context important in business analysis?",
            sl: "Zakaj je kontekst pomemben pri poslovni analizi?"
          },
          options: {
            en: [
              "It defines the exact implementation technology",
              "It replaces the need for stakeholders",
              "It influences whether a change is appropriate and how value is judged",
              "It is another term for a solution"
            ],
            sl: [
              "Določi natančno tehnologijo izvedbe",
              "Odpravi potrebo po deležnikih",
              "Vpliva na ustreznost spremembe in presojo vrednosti",
              "Je drug izraz za rešitev"
            ]
          },
          correctIndex: 2,
          explanation: {
            en: "Context includes circumstances that influence, enable, or constrain change and shape how value is interpreted.",
            sl: "Kontekst vključuje okoliščine, ki vplivajo na spremembo, jo omogočajo ali omejujejo ter oblikujejo razumevanje vrednosti."
          }
        },
        {
          id: "d1_q5",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "What do BABOK techniques provide?",
            sl: "Kaj zagotavljajo tehnike BABOK?"
          },
          options: {
            en: [
              "Mandatory organizational policies",
              "Ways to perform business analysis tasks",
              "Definitions of every stakeholder",
              "The official examination pass score"
            ],
            sl: [
              "Obvezne organizacijske politike",
              "Načine izvajanja nalog poslovne analize",
              "Definicije vseh deležnikov",
              "Uradni minimalni rezultat za opravljanje izpita"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Techniques are methods and approaches that support the performance of business analysis tasks.",
            sl: "Tehnike so metode in pristopi, ki podpirajo izvajanje nalog poslovne analize."
          }
        }
      ]
    },
    {
      day: 2,
      title: {
        en: "Key Terms, Stakeholders, and Requirements Classification",
        sl: "Ključni pojmi, deležniki in razvrščanje zahtev"
      },
      babokReference:
        "BABOK Guide v3 — Chapter 2 and Requirements Classification Schema",
      theory: {
        en:
          "<p>A <strong>stakeholder</strong> is a group or individual with a relationship to the change, need, or solution. Stakeholders influence or are affected by business analysis work, and one person may represent more than one stakeholder role.</p>" +
          "<p>Stakeholder roles can include customers, end users, suppliers, sponsors, regulators, project managers, domain experts, implementation subject matter experts, testers, and operational support staff. Business analysts identify stakeholders, understand their interests and responsibilities, and determine how they contribute information or make decisions.</p>" +
          "<p>A <strong>requirement</strong> is a usable representation of a need. Requirements describe capabilities or conditions that a solution must satisfy. A <strong>design</strong> describes how a solution may satisfy a requirement. The distinction depends on the perspective: a design at one level may become a requirement for a more detailed design.</p>" +
          "<p>The BABOK Requirements Classification Schema has four categories:</p>" +
          "<ul>" +
          "<li><strong>Business requirements:</strong> goals and objectives at the enterprise level that explain why a change is undertaken.</li>" +
          "<li><strong>Stakeholder requirements:</strong> the needs of a stakeholder or stakeholder group that must be met to achieve business requirements.</li>" +
          "<li><strong>Solution requirements:</strong> capabilities and qualities that a solution must have to meet stakeholder requirements. These include functional and non-functional requirements.</li>" +
          "<li><strong>Transition requirements:</strong> temporary capabilities needed to move from the current state to the future state, such as data conversion or user training.</li>" +
          "</ul>" +
          "<p><strong>Functional requirements</strong> describe behaviour or functions that a solution performs. <strong>Non-functional requirements</strong> describe conditions or qualities of the solution, such as usability, reliability, performance, security, and maintainability.</p>",
        sl:
          "<p><strong>Deležnik</strong> je skupina ali posameznik, ki je povezan s spremembo, potrebo ali rešitvijo. Deležniki vplivajo na delo poslovne analize ali jih to delo prizadene; ena oseba lahko zastopa več vlog deležnikov.</p>" +
          "<p>Vloge deležnikov lahko vključujejo stranke, končne uporabnike, dobavitelje, pokrovitelje, regulatorje, vodje projektov, strokovnjake s področja, strokovnjake za izvedbo, preizkuševalce in osebje za operativno podporo. Poslovni analitik prepozna deležnike, razume njihove interese in odgovornosti ter ugotovi, kako prispevajo informacije ali sprejemajo odločitve.</p>" +
          "<p><strong>Zahteva</strong> je uporabna predstavitev potrebe. Zahteve opisujejo zmožnosti ali pogoje, ki jih mora rešitev izpolniti. <strong>Načrt rešitve</strong> opisuje, kako lahko rešitev izpolni zahtevo. Razlika je odvisna od perspektive: načrt rešitve na eni ravni lahko postane zahteva za podrobnejši načrt.</p>" +
          "<p>Shema razvrščanja zahtev BABOK vključuje štiri kategorije:</p>" +
          "<ul>" +
          "<li><strong>Poslovne zahteve:</strong> cilji na ravni podjetja, ki pojasnjujejo, zakaj se izvaja sprememba.</li>" +
          "<li><strong>Zahteve deležnikov:</strong> potrebe deležnika ali skupine deležnikov, ki jih je treba zadovoljiti za dosego poslovnih zahtev.</li>" +
          "<li><strong>Zahteve rešitve:</strong> zmožnosti in lastnosti, ki jih mora imeti rešitev za izpolnjevanje zahtev deležnikov. Vključujejo funkcionalne in nefunkcionalne zahteve.</li>" +
          "<li><strong>Prehodne zahteve:</strong> začasne zmožnosti, potrebne za prehod iz sedanjega v prihodnje stanje, na primer pretvorba podatkov ali usposabljanje uporabnikov.</li>" +
          "</ul>" +
          "<p><strong>Funkcionalne zahteve</strong> opisujejo vedenje ali funkcije, ki jih izvaja rešitev. <strong>Nefunkcionalne zahteve</strong> opisujejo pogoje ali lastnosti rešitve, kot so uporabnost, zanesljivost, učinkovitost, varnost in vzdržljivost.</p>"
      },
      summary: {
        en: [
          "A stakeholder is a group or individual related to a change, need, or solution.",
          "Requirements represent needs; designs describe possible ways to satisfy them.",
          "Business requirements describe enterprise objectives and the rationale for change.",
          "Stakeholder requirements describe the needs of stakeholders.",
          "Solution requirements include functional requirements and non-functional requirements.",
          "Transition requirements are temporary and support movement from the current state to the future state.",
          "Functional requirements describe solution behaviour; non-functional requirements describe solution qualities or conditions."
        ],
        sl: [
          "Deležnik je skupina ali posameznik, povezan s spremembo, potrebo ali rešitvijo.",
          "Zahteve predstavljajo potrebe; načrti rešitev opisujejo mogoče načine njihovega zadovoljevanja.",
          "Poslovne zahteve opisujejo cilje podjetja in razloge za spremembo.",
          "Zahteve deležnikov opisujejo njihove potrebe.",
          "Zahteve rešitve vključujejo funkcionalne in nefunkcionalne zahteve.",
          "Prehodne zahteve so začasne in podpirajo prehod iz sedanjega v prihodnje stanje.",
          "Funkcionalne zahteve opisujejo vedenje rešitve; nefunkcionalne zahteve opisujejo njene lastnosti ali pogoje."
        ]
      },
      quiz: [
        {
          id: "d2_q1",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A statement that the organization must reduce processing time by 30 percent is an example of which requirement type?",
            sl: "Izjava, da mora organizacija skrajšati čas obdelave za 30 odstotkov, je primer katere vrste zahteve?"
          },
          options: {
            en: [
              "Stakeholder requirement",
              "Business requirement",
              "Transition requirement",
              "Design"
            ],
            sl: [
              "Zahteva deležnika",
              "Poslovna zahteva",
              "Prehodna zahteva",
              "Načrt rešitve"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "An organizational objective is a business requirement because it describes why and for what purpose the change is undertaken.",
            sl: "Organizacijski cilj je poslovna zahteva, ker opisuje, zakaj in s kakšnim namenom se izvaja sprememba."
          }
        },
        {
          id: "d2_q2",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "What does a functional requirement primarily describe?",
            sl: "Kaj predvsem opisuje funkcionalna zahteva?"
          },
          options: {
            en: [
              "A temporary data migration",
              "A behaviour or capability of the solution",
              "An organizational objective",
              "A stakeholder's preferred meeting date"
            ],
            sl: [
              "Začasno selitev podatkov",
              "Vedenje ali zmožnost rešitve",
              "Organizacijski cilj",
              "Želeni datum srečanja posameznega deležnika"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Functional requirements describe the behaviour, actions, or capabilities that a solution must provide.",
            sl: "Funkcionalne zahteve opisujejo vedenje, dejanja ali zmožnosti, ki jih mora zagotoviti rešitev."
          }
        },
        {
          id: "d2_q3",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Data migration needed only during implementation is an example of which requirement type?",
            sl: "Selitev podatkov, potrebna samo med uvajanjem rešitve, je primer katere vrste zahteve?"
          },
          options: {
            en: [
              "Business requirement",
              "Stakeholder requirement",
              "Transition requirement",
              "Non-functional requirement"
            ],
            sl: [
              "Poslovna zahteva",
              "Zahteva deležnika",
              "Prehodna zahteva",
              "Nefunkcionalna zahteva"
            ]
          },
          correctIndex: 2,
          explanation: {
            en: "Implementation-only migration or conversion capabilities are transition requirements because they are temporary and support the move to the future state.",
            sl: "Selitev ali pretvorba podatkov, potrebna samo med uvajanjem, je prehodna zahteva, ker je začasna in podpira prehod v prihodnje stanje."
          }
        },
        {
          id: "d2_q4",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which statement best distinguishes a requirement from a design?",
            sl: "Katera trditev najbolje razlikuje zahtevo od načrta rešitve?"
          },
          options: {
            en: [
              "A requirement is always technical, while a design is always financial",
              "A requirement represents a need, while a design describes how to satisfy it",
              "A design represents a need, while a requirement defines implementation",
              "There is no conceptual difference"
            ],
            sl: [
              "Zahteva je vedno tehnična, načrt pa vedno finančen",
              "Zahteva predstavlja potrebo, načrt pa opisuje, kako jo zadovoljiti",
              "Načrt predstavlja potrebo, zahteva pa določa izvedbo",
              "Med njima ni konceptualne razlike"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "A requirement represents a need; a design describes a possible way to satisfy that need. The same item can be viewed as a design at one level and a requirement at another.",
            sl: "Zahteva predstavlja potrebo, načrt pa opisuje mogoč način njenega zadovoljevanja. Isti element je lahko na eni ravni načrt, na drugi pa zahteva."
          }
        },
        {
          id: "d2_q5",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A usability requirement states that 95 percent of trained users must complete a task within five minutes. How is it classified?",
            sl: "Zahteva uporabnosti določa, da mora 95 odstotkov usposobljenih uporabnikov opraviti nalogo v petih minutah. Kako jo razvrstimo?"
          },
          options: {
            en: [
              "Non-functional solution requirement",
              "Business requirement",
              "Transition requirement",
              "Stakeholder role"
            ],
            sl: [
              "Nefunkcionalna zahteva rešitve",
              "Poslovna zahteva",
              "Prehodna zahteva",
              "Vloga deležnika"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Usability is a quality of the solution, so this measurable usability condition is a non-functional solution requirement.",
            sl: "Uporabnost je lastnost rešitve, zato je ta merljiv pogoj uporabnosti nefunkcionalna zahteva rešitve."
          }
        }
      ]
    }
  ],
  examQuestions: [],
  glossary: []
};
