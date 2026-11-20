const STUDY_DATA = {
  days: [
    {
      day: 1,
      title: {
        en: "Introduction to Business Analysis and BACCM",
        sl: "Uvod v poslovno analizo in BACCM"
      },
      babokReference: "BABOK Guide v3 — Chapter 1 and Business Analysis Core Concept Model",
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
          "<p><strong>Poslovna analiza</strong> je praksa omogočanja sprememb v podjetju z določanjem potreb in priporočanjem rešitev, ki strankam in drugim deležnikom prinašajo vrednost. Ne omejuje se na programske zahteve, temveč vključuje razumevanje organizacijskega konteksta, prepoznavanje priložnosti za izboljšave in pomoč deležnikom pri dogovoru o rešitvi.</p>" +
          "<p><strong>BACCM</strong> (osrednji konceptualni model poslovne analize) vključuje šest enakovredno pomembnih pojmov: sprememba, potreba, rešitev, deležnik, vrednost in kontekst. Skupaj predstavljajo skupni analitični okvir. Vsak pojem je mogoče obravnavati z različnih perspektiv, meje med pojmi pa določajo okoliščine.</p>" +
          "<ul>" +
          "<li><strong>Sprememba:</strong> preoblikovanje nekega dela organizacije ali sistema.</li>" +
          "<li><strong>Potreba:</strong> problem, priložnost ali omejitev, ki lahko povzroči spremembo.</li>" +
          "<li><strong>Rešitev:</strong> določen način zadovoljanja ene ali več potreb v nekem kontekstu.</li>" +
          "<li><strong>Deležnik:</strong> skupina ali posameznik, ki je povezan s spremembo, potrebo ali rešitvijo.</li>" +
          "<li><strong>Vrednost:</strong> pomembnost, korist ali uporabnost nečesa za deležnika.</li>" +
          "<li><strong>Kontekst:</strong> okoliščine, ki vplivajo na spremembo, jo omogočajo ali omejujejo.</li>" +
          "</ul>" +
          "<p>Poslovnoanalitsko delo sestavljajo <strong>področja znanja</strong>, <strong>naloge</strong>, <strong>tehnike</strong> in <strong>temeljne kompetence</strong>. Področja znanja opisujejo področja strokovne prakse. Naloge se izvajajo za ustvarjanje zahtevanih rezultatov. Tehnike so pristopi za izvedbo nalog, kompetence pa opisujejo vedenjske, analitične in medosebne sposobnosti.</p>"
      },
      summary: {
        en: [
          "Business analysis enables enterprise change and is concerned with value, not only requirements.",
          "BACCM has six concepts: Change, Need, Solution, Stakeholder, Value, and Context.",
          "A solution is a way to satisfy a need; it is not necessarily a software product.",
          "Context determines how the other five BACCM concepts are interpreted.",
          "The BABOK framework distinguishes knowledge areas, tasks, techniques, inputs, outputs, and competencies.",
          "Stakeholders may view the same solution's value differently."
        ],
        sl: [
          "Poslovna analiza omogoča spremembe v podjetju in je usmerjena predvsem v vrednost, ne zgolj v zahteve.",
          "BACCM ima šest pojmov: sprememba, potreba, rešitev, deležnik, vrednost in kontekst.",
          "Rešitev je način zadovoljanja potrebe; ni nujno programska rešitev.",
          "Kontekst določa, kako razlagamo ostalih pet pojmov BACCM.",
          "BABOK loči področja znanja, naloge, tehnike, vhode, izhode in kompetence.",
          "Deležniki lahko isto vrednost rešitve razumejo različno."
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
            en: "Business analysis enables change by defining needs and recommending solutions that deliver value.",
            sl: "Poslovna analiza omogoča spremembo tako, da določi potrebe in priporoča rešitve, ki prinašajo vrednost."
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
            en: "Requirement is not a separate BACCM core concept. BACCM consists of Change, Need, Solution, Stakeholder, Value, and Context.",
            sl: "Zahteva ni ločen osrednji pojem BACCM. Model sestavljajo sprememba, potreba, rešitev, deležnik, vrednost in kontekst."
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
            sl: "Potreba je problem, priložnost ali omejitev, ki lahko povzroči spremembo."
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
              "Določi natančno implementacijsko tehnologijo",
              "Zamenja potrebo po vključevanju deležnikov",
              "Vpliva na ustreznost spremembe in na oceno vrednosti",
              "Je sinonim za rešitev"
            ]
          },
          correctIndex: 2,
          explanation: {
            en: "Context includes circumstances that influence, enable, or constrain a change and shape interpretation of value.",
            sl: "Kontekst zajema okoliščine, ki vplivajo na spremembo, jo omogočajo ali omejujejo ter oblikujejo razumevanje vrednosti."
          }
        },
        {
          id: "d1_q5",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "What do BABOK techniques provide?",
            sl: "Kaj zagotavljajo BABOK tehnike?"
          },
          options: {
            en: [
              "Mandatory organizational policies",
              "Ways to perform business analysis tasks",
              "Definitions of every stakeholder",
              "The official pass score"
            ],
            sl: [
              "Obvezne organizacijske politike",
              "Načine izvajanja nalog poslovne analize",
              "Definicije vseh deležnikov",
              "Uraden minimalni rezultat za opravljanje"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Techniques are methods that support the performance of tasks in business analysis.",
            sl: "Tehnike so metode, ki podpirajo izvajanje nalog poslovne analize."
          }
        }
      ]
    },

    {
      day: 2,
      title: {
        en: "Key Terms, Stakeholders and Requirements Classification",
        sl: "Ključni pojmi, deležniki in razvrščanje zahtev"
      },
      babokReference: "BABOK Guide v3 — Chapter 2 and Requirements Classification Schema",
      theory: {
        en:
          "<p>A <strong>stakeholder</strong> is a group or individual with a relationship to the change, need, or solution. Stakeholders influence or are affected by business analysis work, and one person may represent multiple stakeholder roles.</p>" +
          "<p>Stakeholder roles can include customers, end users, suppliers, sponsors, regulators, project managers, domain experts, implementation subject matter experts, testers, and operational support staff. Analysts should identify stakeholders broadly and determine how each stakeholder contributes information or makes decisions.</p>" +
          "<p>A <strong>requirement</strong> represents a usable representation of a need. Requirements describe capabilities or conditions that a solution must satisfy. A <strong>design</strong> describes how a solution can satisfy a requirement.</p>" +
          "<p>The BABOK Requirements Classification Schema divides requirements into:</p>" +
          "<ul>" +
          "<li><strong>Business requirements:</strong> high-level objectives and reasons for a change.</li>" +
          "<li><strong>Stakeholder requirements:</strong> needs of a stakeholder or stakeholder group.</li>" +
          "<li><strong>Solution requirements:</strong> capabilities and qualities of a solution, divided into functional and non-functional requirements.</li>" +
          "<li><strong>Transition requirements:</strong> temporary capabilities needed to move from the current state to the future state.</li>" +
          "</ul>" +
          "<p><strong>Functional requirements</strong> describe behaviour or the functions a solution performs. <strong>Non-functional requirements</strong> define solution qualities, including usability, reliability, performance, security, and maintainability.</p>",
        sl:
          "<p><strong>Deležnik</strong> je skupina ali posameznik, ki je povezan s spremembo, potrebo ali rešitvijo. Deležniki vplivajo na delo poslovne analize ali jih to delo neposredno prizadene; ena oseba lahko zastopa več vlog deležnikov.</p>" +
          "<p>Meddeležnikove vloge lahko spadajo kupci, končni uporabniki, dobavitelji, pokrovitelji, regulatorji, vodje projektov, strokovnjaki s področja, izvajalci, preizkuševalci ter osebje za operativno podporo. Analitik mora široko identificirati deležnike in ugotoviti, kakšne informacije prispevajo oziroma kakšne odločitve sprejemajo.</p>" +
          "<p><strong>Zahteva</strong> je uporabna predstavitev potrebe. Zahteve opisujejo sposobnosti ali pogoje, ki jih mora rešitev izpolniti. <strong>Načrt rešitev ali dizajn</strong> opisuje, kako lahko rešitev izpolni zahtevano potrebo.</p>" +
          "<p>BABOK-ova shema razvrščanja zahtev zahteve deli na:</p>" +
          "<ul>" +
          "<li><strong>Poslovne zahteve:</strong> cilji in razlogi na višji ravni za spremembo.</li>" +
          "<li><strong>Zahteve deležnikov:</strong> potrebe posameznega deležnika ali skupine deležnikov.</li>" +
          "<li><strong>Zahteve rešitve:</strong> sposobnosti in lastnosti rešitve, razdeljene na funkcionalne in nefunkcionalne zahteve.</li>" +
          "<li><strong>Prehodne zahteve:</strong> začasne zmožnosti, potrebne za prehod iz sedanjega v prihodnje stanje.</li>" +
          "</ul>" +
          "<p><strong>Funkcionalne zahteve</strong> opisujejo vedenje oziroma funkcije rešitve. <strong>Nefunkcionalne zahteve</strong> določajo kakovost rešitve, med drugim uporabnost, zanesljivost, učinkovitost, varnost in vzdržljivost.</p>"
      },
      summary: {
        en: [
          "A stakeholder has a relationship to the change, need, or solution.",
          "Requirements represent needs; designs describe how needs may be satisfied.",
          "Business requirements describe organizational objectives.",
          "Stakeholder requirements describe stakeholder needs.",
          "Solution requirements include functional and non-functional requirements.",
          "Transition requirements are temporary and support the move to the future state."
        ],
        sl: [
          "Deležnik je povezan s spremembo, potrebo ali rešitvijo.",
          "Zahteve predstavljajo potrebe; načrt rešitev opisuje, kako jih je mogoče zadovoljiti.",
          "Poslovne zahteve opisujejo organizacijske cilje.",
          "Zahteve deležnikov opisujejo potrebe deležnikov.",
          "Zahteve rešitve vključujejo funkcionalne in nefunkcionalne zahteve.",
          "Prehodne zahteve so začasne in podpirajo prehod v prihodnje stanje."
        ]
      },
      quiz: [
        {
          id: "d2_q1",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A statement that the organization must reduce processing time by 30 percent is an example of which requirement type?",
            sl: "Izjava, da mora organizacija skrajšati čas obdelave za 30 %, je primer katere vrste zahteve?"
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
            sl: "Organizacijski cilj je poslovna zahteva, ker opisuje, zakaj in za kateri namen se izvaja sprememba."
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
              "Deležnikov želeni datum srečanja"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Functional requirements describe the behaviour, actions, or capabilities that a solution must provide.",
            sl: "Funkcionalne zahteve opisujejo vedenje, dejanja ali zmožnosti, ki jih mora rešitev zagotoviti."
          }
        },
        {
          id: "d2_q3",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Data migration needed only during implementation is an example of:",
            sl: "Selitev podatkov, potrebna le med uvajanjem, je primer:"
          },
          options: {
            en: [
              "A business requirement",
              "A stakeholder requirement",
              "A transition requirement",
              "A non-functional requirement"
            ],
            sl: [
              "Poslovne zahteve",
              "Zahteve deležnika",
              "Prehodne zahteve",
              "Nefunkcionalne zahteve"
            ]
          },
          correctIndex: 2,
          explanation: {
            en: "Implementation-only migration or conversion capabilities are transition requirements because they are temporary.",
            sl: "Selitev ali pretvorba podatkov, potrebna le med uvajanjem, je prehodna zahteva, ker je začasna."
          }
        },
        {
          id: "d2_q4",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which statement best distinguishes a requirement from a design?",
            sl: "Katera trditev najbolje loči zahteve od načrta rešitve?"
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
              "Konceptualno ni razlike"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Requirements represent needs, while designs describe possible structures or approaches for satisfying those needs.",
            sl: "Zahteve predstavljajo potrebe, načrti pa opisujejo možne strukture ali pristope za njihovo zadovoljitev."
          }
        },
        {
          id: "d2_q5",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A usability standard requiring 95 percent of trained users to complete a task in five minutes is:",
            sl: "Standard uporabnosti, po katerem mora 95 % usposobljenih uporabnikov opraviti nalogo v petih minutah:"
          },
          options: {
            en: [
              "A non-functional requirement",
              "A business requirement",
              "A transition requirement",
              "A stakeholder group"
            ],
            sl: [
              "Nefunkcionalna zahteva",
              "Poslovna zahteva",
              "Prehodna zahteva",
              "Skupina deležnikov"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Usability, performance, and measurable quality constraints are non-functional requirements.",
            sl: "Merljive zahteve glede uporabnosti, učinkovitosti in drugih lastnosti so nefunkcionalne zahteve."
          }
        }
      ]
    },

    {
      day: 3,
      title: {
        en: "Business Analysis Planning and Monitoring — Approach and Stakeholders",
        sl: "Načrtovanje in spremljanje poslovne analize — pristop in deležniki"
      },
      babokReference: "BABOK Guide v3 — Business Analysis Planning and Monitoring",
      theory: {
        en:
          "<p>The purpose of <strong>Business Analysis Planning and Monitoring</strong> is to organize and coordinate business analysis activities and determine how work will be performed. Planning begins with understanding the approach, stakeholders, governance, information management, and performance measures required for success.</p>" +
          "<p>The <strong>plan for approach</strong> defines whether work will follow predictive, adaptive, or hybrid planning. Predictive approaches emphasize advance planning, while adaptive approaches plan incrementally and respond to emerging information. Hybrid approaches combine both styles according to the context.</p>" +
          "<p>The plan should describe deliverables, techniques, timing, participants, approvals, and expected changes. It should be sufficiently flexible to respond to uncertainty and stakeholder needs.</p>" +
          "<p><strong>Stakeholder engagement planning</strong> identifies stakeholder roles and responsibilities, establishes collaboration mechanisms, determines expected participation, and manages stakeholder communication. A stakeholder map or matrix can help identify stakeholders, assess their influence and interest, and plan appropriate engagement.</p>" +
          "<p>The <strong>stakeholder engagement approach</strong> should consider availability, authority, geographic location, organizational culture, conflict, competing objectives, and the stakeholder's level of domain knowledge.</p>",
        sl:
          "<p>Namen <strong>načrtovanja in spremljanja poslovne analize</strong> je organizirati in usklajevati aktivnosti poslovne analize ter določiti, kako bo delo potekalo. Načrtovanje vključuje razumevanje pristopa, deležnikov, upravljanja, upravljanja informacij in meril uspešnosti.</p>" +
          "<p><strong>Načrt pristopa</strong> določi, ali bo delo sledilo prediktivnemu, prilagodljivemu ali hibridnemu načinu načrtovanja. Prediktivni pristopi poudarjajo načrtovanje vnaprej, prilagodljivi načrtujejo postopoma in se odzivajo na nove informacije. Hibridni pristope združujejo oba načina glede na kontekst.</p>" +
          "<p>Načrt mora opisati rezultate, tehnike, časovni razpored, udeležence, odobritve in pričakovane spremembe. Dovolj prožen mora biti, da se lahko prilagaja negotovosti in potrebam deležnikov.</p>" +
          "<p><strong>Načrtovanje sodelovanja z deležniki</strong> določi njihove vloge in odgovornosti, vzpostavi mehanizme sodelovanja, opredeli pričakovano udeležbo ter upravlja komunikacijo z deležniki. Zemljevid ali matrika deležnikov pomaga prepoznati deležnike, oceniti njihov vpliv in zanimanje ter načrtovati ustrezno sodelovanje.</p>" +
          "<p><strong>Pristop k sodelovanju z deležniki</strong> mora upoštevati razpoložljivost, avtoriteto, geografsko lokacijo, organizacijsko kulturo, konflikte, nasprotujoče si cilje in stopnjo strokovnega znanja posameznega deležnika.</p>"
      },
      summary: {
        en: [
          "Business analysis planning defines how analysis work will be organized and monitored.",
          "Predictive planning assumes more certainty and plans work earlier.",
          "Adaptive planning accepts uncertainty and allows plans to evolve.",
          "Hybrid planning combines predictive and adaptive approaches.",
          "Stakeholder analysis identifies roles, influence, interest, availability, and participation needs.",
          "Plans should be revisited when organizational or stakeholder conditions change."
        ],
        sl: [
          "Načrtovanje poslovne analize določa organizacijo in spremljanje analitičnega dela.",
          "Prediktivno načrtovanje temelji na večji gotovosti in načrtuje delo prej.",
          "Prilagodljivo načrtovanje sprejema negotovost in dopušča razvoj načrtov.",
          "Hibridno načrtovanje združuje prediktivne in prilagodljive pristope.",
          "Analiza deležnikov določa njihove vloge, vpliv, interes, razpoložljivost in potrebe po sodelovanju.",
          "Načrt je treba ponovno pregledati, ko se spremenijo organizacijske ali deležniške okoliščine."
        ]
      },
      quiz: [
        {
          id: "d3_q1",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "Which planning approach emphasizes detailed planning before execution when requirements are relatively stable?",
            sl: "Kateri pristop načrtovanja poudarja podrobno načrtovanje pred izvedbo, ko so zahteve relativno stabilne?"
          },
          options: {
            en: ["Adaptive", "Predictive", "Reactive", "Incremental only"],
            sl: ["Prilagodljiv", "Prediktivni", "Reaktiven", "Izključno postopni"]
          },
          correctIndex: 1,
          explanation: {
            en: "Predictive approaches emphasize advance planning and are suited to contexts with lower uncertainty.",
            sl: "Prediktivni pristopi poudarjajo načrtovanje vnaprej in so primernejši za okolja z manjšo negotovostjo."
          }
        },
        {
          id: "d3_q2",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "What is the main purpose of stakeholder engagement planning?",
            sl: "Kaj je glavni namen načrtovanja sodelovanja z deležniki?"
          },
          options: {
            en: [
              "To reduce the number of stakeholders",
              "To determine participation and collaboration mechanisms",
              "To approve final solutions",
              "To eliminate all conflicts"
            ],
            sl: [
              "Zmanjšati število deležnikov",
              "Določiti sodelovanje in mehanizme sodelovanja",
              "Odobriti končne rešitve",
              "Odpraviti vse konflikte"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Stakeholder engagement planning identifies how stakeholders will participate and collaborate throughout the work.",
            sl: "Načrtovanje sodelovanja z deležniki določa, kako bodo sodelovali in sodelovali med celotnim delom."
          }
        },
        {
          id: "d3_q3",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "Which approach is most appropriate for a project facing significant unknown requirements and frequent learning?",
            sl: "Kateri pristop je najbolj primeren za projekt z veliko neznanimi zahtevami in pogostim učenjem?"
          },
          options: {
            en: ["Predictive", "Adaptive", "Waterfall-only", "Unplanned"],
            sl: ["Prediktivni", "Prilagodljiv", "Izključno vodopadni", "Nenačrtovan"]
          },
          correctIndex: 1,
          explanation: {
            en: "Adaptive approaches are intended for environments where requirements evolve and information emerges through experimentation.",
            sl: "Prilagodljivi pristopi so namenjeni okoljem, v katerih se zahteve spreminjajo in se informacije pojavljajo z eksperimentiranjem."
          }
        },
        {
          id: "d3_q4",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "What might a stakeholder analysis matrix document?",
            sl: "Kaj lahko dokumentira matrika analize deležnikov?"
          },
          options: {
            en: [
              "Influence, interest, attitude, and engagement needs",
              "Only stakeholder salaries",
              "Only technical architecture",
              "A final test script"
            ],
            sl: [
              "Vpliv, interes, odnos in potrebe po sodelovanju",
              "Izključno plače deležnikov",
              "Izključno tehnično arhitekturo",
              "Končni preizkusni scenarij"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Stakeholder matrices commonly capture influence, interest, attitude, needs, and required engagement.",
            sl: "Matrike deležnikov običajno zajemajo vpliv, interes, odnos, potrebe in zahtevano stopnjo sodelovanja."
          }
        },
        {
          id: "d3_q5",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "How often should a business analysis approach be revisited?",
            sl: "Kako pogosto je treba pregledati pristop k poslovni analizi?"
          },
          options: {
            en: [
              "Only at project initiation",
              "Whenever context or stakeholder needs change",
              "Only after project failure",
              "Never, once approved"
            ],
            sl: [
              "Le na začetku projekta",
              "Kadarkoli se kontekst ali potrebe deležnikov spremenijo",
              "Le po neuspehu projekta",
              "Nikoli, ko je enkrat odobren"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Plans are living artifacts and should be adapted when new information or changed conditions require it.",
            sl: "Načrti so živ dokument, ki ga je treba prilagoditi, ko nove informacije ali spremenjene okoliščine to zahtevajo."
          }
        }
      ]
    },

    {
      day: 4,
      title: {
        en: "Business Analysis Planning and Monitoring — Governance and Information",
        sl: "Načrtovanje in spremljanje poslovne analize — upravljanje in informacije"
      },
      babokReference: "BABOK Guide v3 — Business Analysis Planning and Monitoring",
      theory: {
        en:
          "<p>This knowledge area establishes how business analysis work is governed, how information is managed, and how the performance of analysis work is measured. Governance includes decision-making authorities, prioritization processes, approval processes, and change controls.</p>" +
          "<p><strong>Business analysis governance</strong> identifies who makes decisions about requirements, designs, and changes. Governance processes define which stakeholders review work, what standards apply, and how disagreements or escalations are handled.</p>" +
          "<p><strong>Information management</strong> determines how requirements and designs are stored, organized, secured, shared, and maintained throughout their life cycle. The goal is to ensure that the right stakeholders can access accurate information without compromising confidentiality or traceability.</p>" +
          "<p>An effective plan defines the level of detail required, the repository or documentation tool, naming conventions, version control, access rights, archiving, and retention requirements.</p>" +
          "<p><strong>Performance monitoring</strong> uses measures to assess whether business analysis activities are effective and efficient. Measures may include requirement quality, rework, stakeholder participation, defect trends, approval cycle time, or traceability coverage.</p>",
        sl:
          "<p>To področje znanja določa, kako se upravlja delo poslovne analize, kako se upravlja informacije in kako se meri uspešnost analitičnega dela. Upravljanje vključuje pooblaščence za odločanje, procese določanja prioritet, odobritve in nadzor nad spremembami.</p>" +
          "<p><strong>Upravljanje poslovne analize</strong> določa, kdo sprejema odločitve o zahtevah, načrtih rešitev in spremembah. Procesi upravljanja določajo, kateri deležniki pregledajo delo, kateri standardi veljajo ter kako se rešujejo nesoglasja ali eskalacije.</p>" +
          "<p><strong>Upravljanje informacij</strong> določa, kako se zahteve in načrti rešitev shranjujejo, organizirajo, varujejo, delijo in vzdržujejo skozi celoten življenjski cikel. Cilj je zagotoviti, da pravilni deležniki dostopajo do točnih informacij, ne da bi pri tem ogrozili zaupnost ali sledljivost.</p>" +
          "<p>Učinkovit načrt določa zahtevano raven podrobnosti, skladišče ali orodje za dokumentacijo, konvencije poimenovanja, nadzor različic, pravice dostopa, arhiviranje in zahteve po hrambi dokumentacije.</p>" +
          "<p><strong>Spremljanje uspešnosti</strong> uporablja mere za ocenjevanje učinkovitosti in uspešnosti aktivnosti poslovne analize. Mere lahko vključujejo kakovost zahtev, ponovno delo, sodelovanje deležnikov, trend napak, čas odobritve ali pokritost sledljivosti.</p>"
      },
      summary: {
        en: [
          "Governance defines decision rights, approvals, prioritization, and change control.",
          "Information management ensures that requirements and designs are stored and maintained appropriately.",
          "Repositories support version control, access, traceability, and reuse.",
          "Performance measures should be based on analysis goals.",
          "Useful measures are accurate, understandable, actionable, and feasible.",
          "Requirements cannot be effectively managed without clear ownership and traceability."
        ],
        sl: [
          "Upravljanje določa pravice odločanja, odobritve, razvrščanje prioritet in nadzor sprememb.",
          "Upravljanje informacij zagotavlja ustrezno shranjevanje in vzdrževanje zahtev ter načrtov.",
          "Skladišča podpirajo različice, dostop, sledljivost in ponovno uporabo.",
          "Merila uspešnosti morajo temeljiti na ciljih poslovne analize.",
          "Koristne mere so točne, razumljive, uporabne za ukrepanje in izvedljive.",
          "Zahtev ni mogoče učinkovito upravljati brez jasnega lastništva in sledljivosti."
        ]
      },
      quiz: [
        {
          id: "d4_q1",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "What is the purpose of requirements approval governance?",
            sl: "Kakšen je namen upravljanja odobritve zahtev?"
          },
          options: {
            en: [
              "To remove stakeholder involvement",
              "To define who approves requirements and how approvals are recorded",
              "To decide system source code",
              "To prohibit changes"
            ],
            sl: [
              "Odpraviti sodelovanje deležnikov",
              "Določiti, kdo odobri zahteve in kako se odobritve evidentirajo",
              "Odločati o izvorni kodi sistema",
              "Prepovedati vse spremembe"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Governance establishes decision authorities and approval procedures.",
            sl: "Upravljanje določa pooblaščenega odločevalca in postopke odobritve."
          }
        },
        {
          id: "d4_q2",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "What should an information management plan define?",
            sl: "Kaj mora določati načrt upravljanja informacij?"
          },
          options: {
            en: [
              "Only the names of stakeholders",
              "Storage, access, naming, versioning, and retention",
              "Only project costs",
              "Only the test plan"
            ],
            sl: [
              "Le imena deležnikov",
              "Shranjevanje, dostop, poimenovanje, različice in hranjenje",
              "Le stroške projekta",
              "Le preizkusni načrt"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Information management planning defines how information is organized and controlled throughout its life cycle.",
            sl: "Načrtovanje upravljanja informacij določa, kako se informacije organizirajo in nadzorujejo skozi celoten življenjski cikel."
          }
        },
        {
          id: "d4_q3",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "Which of the following is an example of a business analysis performance measure?",
            sl: "Kateri od naslednjih primerov je merilo uspešnosti poslovne analize?"
          },
          options: {
            en: [
              "Percentage of requirements traced to a solution",
              "Number of office desks",
              "Annual revenue without context",
              "Corporate logo colour"
            ],
            sl: [
              "Delež zahtev, povezanih z rešitvijo",
              "Število pisarniških miz",
              "Letni prihodek brez konteksta",
              "Barva podjetniškega logotipa"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Traceability coverage is a concrete measure of requirements management performance.",
            sl: "Pokritost s sledljivostjo je konkretno merilo uspešnosti upravljanja zahtev."
          }
        },
        {
          id: "d4_q4",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "Why is version control important for requirements and designs?",
            sl: "Zakaj je nadzor različic pomemben za zahteve in načrte rešitev?"
          },
          options: {
            en: [
              "It prevents all changes",
              "It identifies changes and preserves approved states",
              "It removes the need for approvals",
              "It guarantees project success"
            ],
            sl: [
              "Preprečuje vse spremembe",
              "Prepozna spremembe in ohranja odobrene različice",
              "Odpravlja potrebo po odobritvah",
              "Zagotavlja uspeh projekta"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Version control preserves a history of changes and helps stakeholders identify the approved state.",
            sl: "Nadzor različic ohranja zgodovino sprememb in pomaga deležnikom prepoznati odobreno različico."
          }
        },
        {
          id: "d4_q5",
          knowledgeArea: "Business Analysis Planning and Monitoring",
          question: {
            en: "Which feature improves confidential handling of business analysis information?",
            sl: "Katera funkcija izboljša varovanje zaupnih informacij poslovne analize?"
          },
          options: {
            en: [
              "Unrestricted repository access",
              "Role-based access control",
              "Deleting audit records",
              "Publicly sharing every document"
            ],
            sl: [
              "Neomejen dostop do skladišča",
              "Nadzor dostopa na osnovi vlog",
              "Brisanje evidenc",
              "Javna objava vseh dokumentov"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Role-based access control ensures that only authorized stakeholders can view or modify sensitive information.",
            sl: "Nadzor dostopa na osnovi vlog zagotavlja, da občutljive informacije lahko vidijo ali spreminjajo samo pooblaščeni deležniki."
          }
        }
      ]
    },

    {
      day: 5,
      title: {
        en: "Elicitation and Collaboration — Preparation and Conduct",
        sl: "Elicitacija in sodelovanje — priprava in izvedba"
      },
      babokReference: "BABOK Guide v3 — Elicitation and Collaboration",
      theory: {
        en:
          "<p><strong>Elicitation</strong> draws out information relevant to a change from stakeholders and other sources. It includes planning preparation, conducting elicitation, and confirming the results.</p>" +
          "<p>During preparation, the analyst understands the elicitation purpose, scope, participants, sources, techniques, logistics, and expected constraints. Preparation should also identify missing information and assumptions that might affect the session.</p>" +
          "<p>Common elicitation techniques include interviews, workshops, document analysis, observation, surveys, brainstorming, and prototypes. The technique should fit the question being answered, stakeholder availability, organizational culture, and level of uncertainty.</p>" +
          "<p>When conducting elicitation, the analyst creates an environment in which stakeholders can contribute openly. This includes explaining the purpose, asking clear questions, managing dominance, following evidence, and recording relevant information.</p>" +
          "<p>During elicitation, the analyst must distinguish facts from opinions, assumptions, constraints, and emerging requirements. Important details must be captured accurately and confirmed with participants before they become authoritative.</p>",
        sl:
          "<p><strong>Elicitacija</strong> pridobi informacije, pomembne za spremembo, od deležnikov in drugih virov. Vključuje načrtovanje, pripravo, izvedbo elicitacije in potrditev rezultatov.</p>" +
          "<p>Med pripravo analitik razume namen elicitacije, obseg, udeležence, vire, tehnike, logistiko in pričakovane omejitve. Priprava mora prepoznati tudi manjkajoče informacije in predpostavke, ki lahko vplivajo na srečanje.</p>" +
          "<p>Pogoste tehnike elicitacije vključujejo intervjuje, delavnice, analizo dokumentov, opazovanje, ankete, razmišljanje na deže, in prototipiranje. Tehnika mora ustrezati vprašanju, razpoložljivosti deležnikov, organizacijski kulturi in stopnji negotovosti.</p>" +
          "<p>Med izvedbo elicitacije analitik ustvari okolje, v katerem lahko deležniki odkrito prispevajo informacije. To vključuje razlago namena, jasna vprašanja, upravljanje dominantnih udeležencev, sledenje dokazom in beleženje pomembnih informacij.</p>" +
          "<p>Med elicitacijo mora analitik ločevati dejstva od mnenj, predpostavk, omejitev in nastajajočih zahtev. Pomembne podrobnosti je treba zabeležiti točno in potrditi z udeleženci, preden postanejo zanesljivi.</p>"
      },
      summary: {
        en: [
          "Elicitation gathers information from stakeholders and existing sources.",
          "Preparation defines purpose, scope, participants, sources, techniques, and logistics.",
          "The technique must be matched to the information need and context.",
          "Interviews are useful for focused exploration.",
          "Workshops support structured collaboration and conflict resolution.",
          "Captured elicitation results must be confirmed before they are treated as final requirements."
        ],
        sl: [
          "Elicitacija pridobiva informacije od deležnikov in iz obstoječih virov.",
          "Priprava določa namen, obseg, udeležence, vire, tehnike in logistiko.",
          "Tehniko je treba uskladiti z informacijsko potrebo in kontekstom.",
          "Intervjuji so uporabni za poglobljeno raziskovanje.",
          "Delavnice podpirajo strukturirano sodelovanje in reševanje konfliktov.",
          "Rezultate elicitacije je treba potrditi, preden jih obravnavamo kot končne zahteve."
        ]
      },
      quiz: [
        {
          id: "d5_q1",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "What should be identified before conducting an elicitation session?",
            sl: "Kaj je treba določiti pred izvedbo elicitacijskega srečanja?"
          },
          options: {
            en: [
              "Final solution architecture only",
              "Purpose, scope, participants, sources, and technique",
              "Only the meeting location",
              "The final approval date"
            ],
            sl: [
              "Le končno arhitekturo rešitve",
              "Namen, obseg, udeležence, vire in tehniko",
              "Le mesto srečanja",
              "Končni datum odobritve"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Preparation establishes the purpose and logistics needed to conduct elicitation effectively.",
            sl: "Priprava določa namen in logistiko, potrebne za učinkovito elicitacijo."
          }
        },
        {
          id: "d5_q2",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "Which elicitation technique is most suitable for observing how users perform work in their real environment?",
            sl: "Katera tehnika elicitacije je najbolj primerna za opazovanje, kako uporabniki opravljajo delo v resničnem okolju?"
          },
          options: {
            en: ["Document analysis", "Observation", "Survey", "Prioritization"],
            sl: ["Analiza dokumentov", "Opazovanje", "Anketa", "Določanje prioritet"]
          },
          correctIndex: 1,
          explanation: {
            en: "Observation reveals real behaviour and working patterns that stakeholders may not describe accurately.",
            sl: "Opazovanje razkriva dejansko vedenje in delovne vzorce, ki jih deležniki mogoče ne opisujejo povsem točno."
          }
        },
        {
          id: "d5_q3",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "What should an analyst do when elicitation reveals a potential assumption?",
            sl: "Kaj mora analitik storiti, ko elicitacija razkrije možno predpostavko?"
          },
          options: {
            en: [
              "Record it as an unquestioned fact",
              "Identify and document it for validation",
              "Remove all stakeholder input",
              "Convert it immediately into an approved design"
            ],
            sl: [
              "Zabeležiti jo kot nepremenljivo dejstvo",
              "Ugotoviti in dokumentirati jo zaradi preverjanja",
              "Odpraviti vse informacije deležnikov",
              "Takoj jo pretvoriti v odobren načrt rešitve"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Assumptions must be made explicit and subsequently validated.",
            sl: "Predpostavke je treba eksplicitno zapisati in nato preveriti."
          }
        },
        {
          id: "d5_q4",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "What is the primary benefit of a workshop compared with an individual interview?",
            sl: "Kakšna je glavna prednost delavnice v primerjavi z individualnim intervjujem?"
          },
          options: {
            en: [
              "It allows immediate collaboration among several stakeholders",
              "It eliminates the need for preparation",
              "It guarantees consensus",
              "It prevents disagreement"
            ],
            sl: [
              "Omogoča neposredno sodelovanje več deležnikov",
              "Odpravlja potrebo po pripravi",
              "Zagotavlja soglasje",
              "Preprečuje nesoglasja"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Workshops allow stakeholders to explore issues and reach shared understanding together.",
            sl: "Delavnice omogočajo, da deležniki skupaj preučijo vprašanja in dosežejo skupno razumevanje."
          }
        },
        {
          id: "d5_q5",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "Which of the following is a poor elicitation practice?",
            sl: "Katera od naslednjih praks je slaba praksa elicitacije?"
          },
          options: {
            en: [
              "Asking open-ended questions",
              "Recording information accurately",
              "Leading stakeholders toward a predetermined answer",
              "Confirming unclear statements"
            ],
            sl: [
              "Postavljanje odprtih vprašanj",
              "Točno beleženje informacij",
              "Vodenje deležnikov k vnaprej določenemu odgovoru",
              "Potrjevanje nejasnih izjav"
            ]
          },
          correctIndex: 2,
          explanation: {
            en: "Leading questions bias elicitation and may prevent stakeholders from expressing actual needs.",
            sl: "Navodna vprašanja izkrivljajo elicitacijo in lahko deležnikom preprečijo izražanje resničnih potreb."
          }
        }
      ]
    },

    {
      day: 6,
      title: {
        en: "Elicitation and Collaboration — Confirmation and Communication",
        sl: "Elicitacija in sodelovanje — potrditev in komunikacija"
      },
      babokReference: "BABOK Guide v3 — Elicitation and Collaboration",
      theory: {
        en:
          "<p>After elicitation, results must be confirmed for accuracy and completeness. Confirmation is not merely transcription. It involves reviewing the information with stakeholders, resolving inconsistencies, checking whether stakeholders agree with the interpretation, and identifying missing details.</p>" +
          "<p>The analyst may organize elicitation results into models, diagrams, requirement statements, matrices, or summaries. The representation should be understandable to the stakeholder audience and suitable for the decisions that must be made.</p>" +
          "<p>Communication and collaboration are continuous activities. Analysts must communicate in a timely and transparent manner, adapt detail to the audience, and create opportunities for stakeholders to provide feedback.</p>" +
          "<p>Collaboration includes managing conflicts and balancing different stakeholder needs. The analyst does not always decide the final outcome but creates structure for informed discussion and traceable decisions.</p>" +
          "<p>Confirming elicitation results also identifies conflicts between requirements, constraints, and stakeholder viewpoints. These issues should be resolved or formally escalated rather than hidden or assumed to be resolved.</p>",
        sl:
          "<p>Po elicitaciji je treba rezultate potrditi glede točnosti in popolnosti. Potrditev ni zgolj prepisovanje. Vključuje pregled informacij z deležniki, odpravljanje neskladij, preverjanje, ali se deležniki strinjajo z interpretacijo, in prepoznavanje manjkajočih podrobnosti.</p>" +
          "<p>Analitik lahko elicitacijske rezultate organizira v modele, diagram, zahtevne izjave, matrike ali povzetke. Predstavitev mora biti razumljiva ciljni skupini deležnikov in primerna za odločitve, ki jih je treba sprejeti.</p>" +
          "<p>Komunikacija in sodelovanje sta stalni aktivnosti. Analitiki morajo komunicirati pravočasno in pregledno, prilagoditi podrobnost občinstvu ter ustvariti možnosti za povratne informacije deležnikov.</p>" +
          "<p>Sodelovanje vključuje upravljanje konfliktov in uravnoteženje različnih potreb deležnikov. Analitik ne sprejema vedno končne odločitve, temveč ustvarja strukturo za informirano razpravo in sledljive odločitve.</p>" +
          "<p>Potrditev elicitacijskih rezultatov prav tako prepozna konflikte med zahtevami, omejitvami in stališči deležnikov. Te težave je treba rešiti ali formalno eskalirati namesto jih prikrivati ali predpostavljati, da so že rešene.</p>"
      },
      summary: {
        en: [
          "Elicitation results must be confirmed with stakeholders.",
          "Models and summaries should match the audience and purpose.",
          "Collaboration requires transparent communication and feedback.",
          "Conflicting stakeholder positions must be surfaced and resolved or escalated.",
          "The analyst facilitates shared understanding but may not make every final decision.",
          "Confirmed information becomes a reliable basis for requirements analysis."
        ],
        sl: [
          "Rezultate elicitacije je treba potrditi z deležniki.",
          "Modeli in povzetki morajo ustrezati občinstvu in namenu.",
          "Sodelovanje zahteva pregledno komunikacijo in povratne informacije.",
          "Nasprotujoča si stališča deležnikov je treba izpostaviti ter jih rešiti ali eskalirati.",
          "Analitik spodbuja skupno razumevanje, vendar ne sprejema nujno vseh končnih odločitev.",
          "Potrjene informacije postanejo zanesljiva osnova za analizo zahtev."
        ]
      },
      quiz: [
        {
          id: "d6_q1",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "What is the purpose of confirming elicitation results?",
            sl: "Kaj je namen potrjevanja elicitacijskih rezultatov?"
          },
          options: {
            en: [
              "To verify accuracy and completeness with stakeholders",
              "To guarantee project approval",
              "To create source code",
              "To avoid stakeholder communication"
            ],
            sl: [
              "Preveriti točnost in popolnost z deležniki",
              "Zagotoviti odobritev projekta",
              "Ustvariti izvorno kodo",
              "Izogniti se komunikaciji z deležniki"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Confirmation ensures that elicited information is understood and accepted by relevant stakeholders.",
            sl: "Potrditev zagotavlja, da ustrezni deležniki razumejo pridobljene informacije in se z njimi strinjajo."
          }
        },
        {
          id: "d6_q2",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "Which representation is most appropriate for communicating a complex process to senior decision-makers?",
            sl: "Katera predstavitev je najbolj primerna za sporočanje kompleksnega procesa vodstvenim odločiteljem?"
          },
          options: {
            en: [
              "An overly detailed technical record with no summary",
              "A clear process model or concise summary",
              "Only an email subject",
              "An unresolved assumption list"
            ],
            sl: [
              "Preveč podrobna tehnična evidenca brez povzetka",
              "Jasen model procesa ali jedrnat povzetek",
              "Le zadeva elektronskega sporočila",
              "Seznam nepotrjenih predpostavk"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "The representation should match the stakeholder audience and decision purpose.",
            sl: "Predstavitev mora ustrezati občinstvu deležnikov in namenu odločitve."
          }
        },
        {
          id: "d6_q3",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "What should an analyst do if stakeholders disagree on a requirement?",
            sl: "Kaj mora analitik storiti, če se deležniki ne strinjajo glede zahteve?"
          },
          options: {
            en: [
              "Ignore the disagreement",
              "Facilitate discussion, document positions, and escalate if needed",
              "Automatically select the cheapest option",
              "Delete the requirement"
            ],
            sl: [
              "Ignorirati nesoglasje",
              "Olajšati razpravo, dokumentirati stališča in po potrebi eskalirati",
              "Samodejno izbrati najcenejšo možnost",
              "Izbrisati zahtevo"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "The analyst facilitates understanding and ensures decisions are visible and traceable.",
            sl: "Analitik olajša razumevanje in zagotovi, da so odločitve vidne in sledljive."
          }
        },
        {
          id: "d6_q4",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "What is collaboration?",
            sl: "Kaj je sodelovanje?"
          },
          options: {
            en: [
              "Sending documents without response",
              "Working with stakeholders to achieve shared understanding and decisions",
              "Completing analysis alone",
              "Avoiding disagreement"
            ],
            sl: [
              "Pošiljanje dokumentov brez odziva",
              "Delo z deležniki za skupno razumevanje in odločitve",
              "Samostojno dokončanje analize",
              "Izogibanje nesoglasjem"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Collaboration involves active stakeholder participation and shared progress toward decisions.",
            sl: "Sodelovanje vključuje aktivno sodelovanje deležnikov in skupen napredek proti odločitvam."
          }
        },
        {
          id: "d6_q5",
          knowledgeArea: "Elicitation and Collaboration",
          question: {
            en: "Which action helps prevent stakeholder requirements from becoming unverifiable?",
            sl: "Kateri ukrep preprečuje, da zahteve deležnikov postanejo nepreverljive?"
          },
          options: {
            en: [
              "Using vague statements",
              "Defining measurable acceptance criteria",
              "Avoiding stakeholder review",
              "Combining unrelated needs"
            ],
            sl: [
              "Uporabiti nejasne izjave",
              "Določiti merljiva sprejemna merila",
              "Izogniti se pregledu s strani deležnikov",
              "Združiti nepovezane potrebe"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Acceptance criteria make a requirement demonstrably verifiable and support shared understanding.",
            sl: "Sprejemna merila zahtevam omogočijo dokazljivo preverljivost in podpirajo skupno razumevanje."
          }
        }
      ]
    },

    {
      day: 7,
      title: {
        en: "Requirements Life Cycle Management",
        sl: "Upravljanje življenjskega cikla zahtev"
      },
      babokReference: "BABOK Guide v3 — Requirements Life Cycle Management",
      theory: {
        en:
          "<p><strong>Requirements Life Cycle Management</strong> maintains requirements and designs from initial representation through retirement. It ensures that requirements remain aligned with the need and value they are intended to deliver.</p>" +
          "<p>The major tasks are <strong>trace requirements</strong>, <strong>maintain requirements</strong>, <strong>prioritize requirements</strong>, <strong>assess requirements changes</strong>, and <strong>approve requirements</strong>. These tasks apply across different approaches and project types.</p>" +
          "<p><strong>Traceability</strong> establishes relationships among requirements, solution components, designs, test cases, objectives, and sources. It helps analysts assess impact, prove coverage, identify gaps, and understand dependencies.</p>" +
          "<p><strong>Maintaining requirements</strong> keeps them accurate, current, reusable, and consistent over time. Requirements at different levels may have different lifetimes and should be managed according to their purpose.</p>" +
          "<p><strong>Prioritization</strong> applies value, risk, cost, dependency, urgency, and stakeholder concerns to determine relative importance. Priorities may change as the context changes.</p>" +
          "<p><strong>Change assessment</strong> identifies affected artifacts, stakeholders, schedules, costs, risks, and benefits before a proposed change is approved. <strong>Requirement approval</strong> confirms that stakeholders with authority accept the requirement or proposed change.</p>",
        sl:
          "<p><strong>Upravljanje življenjskega cikla zahtev</strong> vzdržuje zahteve in načrte rešitev od prve predstavitve do umika. Zagotavlja, da zahteve ostajajo usklajene s potrebo in vrednostjo, ki ju morajo zagotoviti.</p>" +
          "<p>Glavne naloge so <strong>sledenje zahtevam</strong>, <strong>vzdrževanje zahtev</strong>, <strong>določanje prioritet zahtev</strong>, <strong>ocenjevanje sprememb zahtev</strong> in <strong>odobravanje zahtev</strong>. Te naloge veljajo za različne pristope in vrste projektov.</p>" +
          "<p><strong>Sledljivost</strong> vzpostavlja odnose med zahtevami, komponentami rešitve, načrtovanimi rešitvami, preizkusnimi primeri, cilji in viri. Pomaga analitikom oceniti vpliv spremembe, dokazati pokritost, prepoznati vrzeli ter razumeti medsebojne odvisnosti.</p>" +
          "<p><strong>Vzdrževanje zahtev</strong> jih ohranja točne, aktualne, ponovno uporabne in skladne skozi čas. Zahteve različnih ravni lahko imajo različen življenjski čas, zato jih je treba upravljati glede na njihov namen.</p>" +
          "<p><strong>Določanje prioritet</strong> upošteva vrednost, tveganje, stroške, odvisnosti, nujnost in interese deležnikov za določitev relativne pomembnosti. Prioritete se lahko spremenijo, ko se kontekst spremeni.</p>" +
          "<p><strong>Ocenjevanje sprememb</strong> pred odobritvijo predlagane spremembe določi vpliv na dokumentacijo, deležnike, urnik, stroške, tveganja in koristi. <strong>Odobritev zahtev</strong> potrjuje, da pooblaščeni deležniki sprejmejo zahtevo ali predlagano spremembo.</p>"
      },
      summary: {
        en: [
          "Requirements remain under management throughout their life cycle.",
          "Traceability links requirements to sources, solutions, tests, and objectives.",
          "Traceability supports impact analysis and coverage checks.",
          "Maintaining requirements keeps them reusable, accurate, and current.",
          "Prioritization considers value, risk, cost, dependency, and urgency.",
          "A proposed change must be assessed before approval."
        ],
        sl: [
          "Zahteve ostajajo pod upravljanjem skozi celoten življenjski cikel.",
          "Sledljivost povezuje zahteve z viri, rešitvami, testi in cilji.",
          "Sledljivost podpira analizo vpliva in preverjanje pokritosti.",
          "Vzdrževanje zahtev jih ohranja ponovno uporabne, točne in aktualne.",
          "Določanje prioritet upošteva vrednost, tveganje, stroške, odvisnosti in nujnost.",
          "Predlagano spremembo je treba pred odobritvijo oceniti."
        ]
      },
      quiz: [
        {
          id: "d7_q1",
          knowledgeArea: "Requirements Life Cycle Management",
          question: {
            en: "What is the primary purpose of requirements traceability?",
            sl: "Kakšen je glavni namen sledljivosti zahtev?"
          },
          options: {
            en: [
              "To establish relationships and support impact analysis",
              "To hide requirement changes",
              "To remove stakeholder approvals",
              "To replace testing"
            ],
            sl: [
              "Vzpostaviti odnose in podpirati analizo vpliva",
              "Skriti spremembe zahtev",
              "Odpraviti odobritve deležnikov",
              "Zamenjati testiranje"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Traceability identifies relationships between requirements and related artifacts, enabling impact and coverage analysis.",
            sl: "Sledljivost prepozna odnose med zahtevami in povezanimi elementi ter omogoča analizo vpliva in pokritosti."
          }
        },
        {
          id: "d7_q2",
          knowledgeArea: "Requirements Life Cycle Management",
          question: {
            en: "When a change is proposed, what should an analyst assess first?",
            sl: "Kaj mora analitik najprej oceniti, ko je predlagana sprememba?"
          },
          options: {
            en: [
              "Only the cost",
              "Affected requirements and related artifacts, stakeholders, risks, and benefits",
              "Only the project schedule",
              "Whether the change can be ignored"
            ],
            sl: [
              "Le strošek",
              "Prizadete zahteve in povezane elemente, deležnike, tveganja in koristi",
              "Le projektni urnik",
              "Ali je spremembo mogoče prezreti"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Change assessment considers the full impact before a decision to approve or reject the change.",
            sl: "Ocena spremembe pred odločitvijo o odobritvi ali zavrnitvi upošteva celoten vpliv."
          }
        },
        {
          id: "d7_q3",
          knowledgeArea: "Requirements Life Cycle Management",
          question: {
            en: "Which information is commonly used to prioritize requirements?",
            sl: "Kateri podatki se običajno uporabljajo za določanje prioritet zahtev?"
          },
          options: {
            en: [
              "Value, risk, cost, dependency, and urgency",
              "Font style and document colour",
              "Employee names only",
              "Hardware serial numbers only"
            ],
            sl: [
              "Vrednost, tveganje, strošek, odvisnost in nujnost",
              "Slog pisave in barva dokumenta",
              "Le imena zaposlenih",
              "Le serijske številke strojne opreme"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Prioritization factors include value, risk, cost, urgency, dependencies, and stakeholder needs.",
            sl: "Dejavniki določanja prioritet vključujejo vrednost, tveganje, stroške, nujnost, odvisnosti in potrebe deležnikov."
          }
        },
        {
          id: "d7_q4",
          knowledgeArea: "Requirements Life Cycle Management",
          question: {
            en: "What does maintaining a requirement mean?",
            sl: "Kaj pomeni vzdrževanje zahteve?"
          },
          options: {
            en: [
              "Keeping it accurate, consistent, reusable, and current",
              "Approving it once and never reviewing it",
              "Deleting all historical versions",
              "Making it as vague as possible"
            ],
            sl: [
              "Ohranjati jo točno, skladno, ponovno uporabno in aktualno",
              "Odobriti jo enkrat in je nikoli več ne pregledati",
              "Izbrisati vse zgodovinske različice",
              "Narediti jo čim bolj nejasno"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Maintenance keeps requirements aligned with the current need and useful throughout the life cycle.",
            sl: "Vzdrževanje zahteve ohranja njeno usklajenost s trenutno potrebo in uporabnost skozi celoten življenjski cikel."
          }
        },
        {
          id: "d7_q5",
          knowledgeArea: "Requirements Life Cycle Management",
          question: {
            en: "Who should approve a requirement or requirement change?",
            sl: "Kdo mora odobriti zahtevo ali spremembo zahteve?"
          },
          options: {
            en: [
              "Any available team member",
              "A stakeholder with the appropriate authority",
              "Only an external auditor",
              "Only the individual who wrote it"
            ],
            sl: [
              "Kateri koli razpoložljiv član ekipe",
              "Deležnik z ustreznim pooblastilom",
              "Izključno zunanji revizor",
              "Izključno oseba, ki jo je napisala"
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "Approval authority must be assigned according to governance and must remain traceable.",
            sl: "Pravica odobritve mora biti določena v skladu z upravljanjem in mora ostati sledljiva."
          }
        }
      ]
    }
  ]
};
