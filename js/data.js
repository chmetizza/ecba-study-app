const STUDY_DATA = {
  days: [
    {
      day: 1,
      title: {
        en: "Introduction to Business Analysis and BACCM",
        sl: "Uvod v poslovno analizo in BACCM"
      },
      babokReference: "BABOK Guide v3 — Chapter 1; The Business Analysis Standard v.A2.0 (2025), Sections 2.1–2.5",
      theory: {
        en:
          "<p><strong>Business analysis</strong> is the practice of enabling change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders within a given context. The purpose is broader than documenting requirements: analysis helps people understand a problem or opportunity, make informed decisions, and work toward desired outcomes.</p>" +
          "<p>The <strong>Business Analysis Core Concept Model (BACCM)</strong> is a thinking and organizing model for effective business analysis. It consists of six interrelated concepts. The model is most useful when all six concepts and their relationships are considered together.</p>" +
          "<ul>" +
          "<li><strong>Change:</strong> a transformation in response to a need. Organizations undertake change to improve outcomes, respond to circumstances, or take advantage of opportunities.</li>" +
          "<li><strong>Need:</strong> a problem or opportunity to be addressed. A need can motivate change; a change can also create or alter needs by changing the value delivered by existing solutions.</li>" +
          "<li><strong>Solution:</strong> a specific way of satisfying one or more needs in a context. A solution may combine technology, manual procedures, process changes, business-model updates, or improved organizational capabilities.</li>" +
          "<li><strong>Stakeholder:</strong> a group or individual with a relationship to the change, need, or solution. Stakeholders may be internal or external and can differ in their interests, impact, and influence.</li>" +
          "<li><strong>Value:</strong> the worth, importance, or usefulness of something to a stakeholder within a context. Value may be realized through returns and improvements or preserved by reducing losses, risks, or costs. It may be tangible or intangible, and different stakeholders may assess it differently.</li>" +
          "<li><strong>Context:</strong> the dynamic circumstances that influence, are influenced by, and help explain a change. Relevant context may include goals, culture, processes, technology, regulations, market conditions, infrastructure, and stakeholder attitudes.</li>" +
          "</ul>" +
          "<p>The concepts form a connected system: stakeholders experience needs in a context; a need motivates change; a solution responds to the need; and stakeholders assess the value of the change and solution in that context. Ignoring one concept or its relationships can weaken analysis.</p>" +
          "<p>The BACCM can help practitioners communicate using shared language, evaluate the completeness and quality of analysis, understand impacts, identify development opportunities, and establish a foundation for the work ahead. Business analysis is applicable at strategic, tactical, and operational levels and is not limited to a particular job title or solution type.</p>" +
          "<p>There is no single analysis approach that fits every initiative. Practices, techniques, processes, and tools should be selected with consideration for the specific context and need. The goal is to support informed decisions and desired outcomes while discovering and maximizing value for stakeholders.</p>",
        sl:
          "<p><strong>Poslovna analiza</strong> je praksa omogočanja sprememb v podjetju z opredeljevanjem potreb in priporočanjem rešitev, ki deležnikom v danem kontekstu prinašajo vrednost. Njen namen je širši od dokumentiranja zahtev: pomaga razumeti problem ali priložnost, sprejemati informirane odločitve in delovati v smeri želenih izidov.</p>" +
          "<p><strong>BACCM (osrednji konceptualni model poslovne analize)</strong> je miselni in organizacijski model za učinkovito poslovno analizo. Sestavlja ga šest medsebojno povezanih pojmov. Model je najuporabnejši, kadar obravnavamo vseh šest pojmov in njihove odnose skupaj.</p>" +
          "<ul>" +
          "<li><strong>Sprememba:</strong> preobrazba kot odziv na potrebo. Organizacije uvajajo spremembe za izboljšanje izidov, odzivanje na okoliščine ali izkoriščanje priložnosti.</li>" +
          "<li><strong>Potreba:</strong> problem ali priložnost, ki jo je treba obravnavati. Potreba lahko spodbudi spremembo; sprememba pa lahko ustvari ali spremeni potrebe, ker vpliva na vrednost obstoječih rešitev.</li>" +
          "<li><strong>Rešitev:</strong> določen način zadovoljevanja ene ali več potreb v danem kontekstu. Rešitev lahko združuje tehnologijo, ročne postopke, spremembe procesov, posodobitve poslovnega modela ali izboljšanje organizacijskih zmožnosti.</li>" +
          "<li><strong>Deležnik:</strong> skupina ali posameznik, povezan s spremembo, potrebo ali rešitvijo. Deležniki so lahko notranji ali zunanji ter se razlikujejo po interesih, vplivu in moči.</li>" +
          "<li><strong>Vrednost:</strong> korist, pomembnost ali uporabnost nečesa za deležnika v danem kontekstu. Vrednost se lahko uresniči z donosi in izboljšavami ali ohrani z zmanjšanjem izgub, tveganj ali stroškov. Lahko je oprijemljiva ali neoprijemljiva, različni deležniki pa jo lahko ocenjujejo različno.</li>" +
          "<li><strong>Kontekst:</strong> dinamične okoliščine, ki vplivajo na spremembo, so pod njenim vplivom in jo pomagajo pojasniti. Pomembni so lahko cilji, kultura, procesi, tehnologija, predpisi, tržne razmere, infrastruktura in stališča deležnikov.</li>" +
          "</ul>" +
          "<p>Pojmi tvorijo povezan sistem: deležniki v določenem kontekstu doživljajo potrebe; potreba spodbuja spremembo; rešitev se odziva na potrebo; deležniki pa v tem kontekstu ocenjujejo vrednost spremembe in rešitve. Če zanemarimo kateri koli pojem ali njegove odnose, lahko oslabimo analizo.</p>" +
          "<p>BACCM pomaga strokovnjakom uporabljati skupen jezik, ocenjevati popolnost in kakovost analize, razumeti vplive, prepoznavati priložnosti za razvoj ter postaviti temelje za nadaljnje delo. Poslovna analiza se uporablja na strateški, taktični in operativni ravni ter ni omejena na določen naziv delovnega mesta ali vrsto rešitve.</p>" +
          "<p>En sam pristop k analizi ne ustreza vsaki pobudi. Prakse, tehnike, procese in orodja izbiramo glede na konkretni kontekst in potrebo. Cilj je podpirati informirane odločitve in želene izide ter odkrivati in povečevati vrednost za deležnike.</p>"
      },
      summary: {
        en: [
          "Business analysis enables enterprise change by defining needs and recommending solutions that deliver stakeholder value within context.",
          "BACCM is a thinking and organizing model made up of six interrelated concepts: Change, Need, Solution, Stakeholder, Value, and Context.",
          "A need is a problem or opportunity; it can motivate change, and change can also alter needs.",
          "A solution is not necessarily a technology product: it may include processes, manual work, business-model changes, or organizational capabilities.",
          "Value is stakeholder- and context-dependent; it may be tangible or intangible, realized through gains, or preserved by reducing losses and risks.",
          "The BACCM supports shared communication, impact analysis, and assessment of the completeness and quality of business analysis.",
          "Choose analysis practices and techniques to fit the context; there is no single approach suitable for every initiative."
        ],
        sl: [
          "Poslovna analiza omogoča spremembe v podjetju z opredeljevanjem potreb in priporočanjem rešitev, ki v danem kontekstu prinašajo vrednost deležnikom.",
          "BACCM je miselni in organizacijski model šestih povezanih pojmov: sprememba, potreba, rešitev, deležnik, vrednost in kontekst.",
          "Potreba je problem ali priložnost; lahko spodbudi spremembo, sprememba pa lahko vpliva na potrebe.",
          "Rešitev ni nujno tehnološki izdelek: vključuje lahko procese, ročno delo, spremembe poslovnega modela ali organizacijske zmožnosti.",
          "Vrednost je odvisna od deležnika in konteksta; je lahko oprijemljiva ali neoprijemljiva, uresničena z dobički ali ohranjena z zmanjšanjem izgub in tveganj.",
          "BACCM podpira skupno komunikacijo, analizo vplivov ter ocenjevanje popolnosti in kakovosti poslovne analize.",
          "Prakse in tehnike analize izberi glede na kontekst; en sam pristop ni primeren za vsako pobudo."
        ]
      },
      quiz: [
        {
          id: "d1_q1",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which statement best describes business analysis according to the Business Analysis Standard?",
            sl: "Katera trditev najbolje opisuje poslovno analizo po standardu The Business Analysis Standard?"
          },
          options: {
            en: [
              "It is the practice of documenting software features before development.",
              "It enables enterprise change by defining needs and recommending solutions that deliver stakeholder value within context.",
              "It is the practice of approving every project decision.",
              "It is limited to technology implementation projects."
            ],
            sl: [
              "Je praksa dokumentiranja funkcionalnosti programske opreme pred razvojem.",
              "Omogoča spremembe v podjetju z opredeljevanjem potreb in priporočanjem rešitev, ki deležnikom v danem kontekstu prinašajo vrednost.",
              "Je praksa odobravanja vseh projektnih odločitev.",
              "Omejena je na projekte uvajanja tehnologije."
            ]
          },
          correctIndex: 1,
          explanation: {
            en: "The Standard defines business analysis as enabling enterprise change by defining needs and recommending solutions that deliver value to stakeholders within a given context. It is not limited to software or project documentation.",
            sl: "Standard opredeli poslovno analizo kot omogočanje sprememb v podjetju z opredeljevanjem potreb in priporočanjem rešitev, ki deležnikom v danem kontekstu prinašajo vrednost. Ni omejena na programsko opremo ali projektno dokumentacijo."
          }
        },
        {
          id: "d1_q2",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which set contains all six BACCM core concepts?",
            sl: "Kateri nabor vsebuje vseh šest osrednjih pojmov BACCM?"
          },
          options: {
            en: [
              "Change, Need, Solution, Stakeholder, Value, Context",
              "Change, Requirement, Product, Customer, Cost, Scope",
              "Need, Process, Technology, Sponsor, Benefit, Project",
              "Stakeholder, Requirement, Design, Risk, Cost, Schedule"
            ],
            sl: [
              "Sprememba, potreba, rešitev, deležnik, vrednost, kontekst",
              "Sprememba, zahteva, izdelek, stranka, strošek, obseg",
              "Potreba, proces, tehnologija, pokrovitelj, korist, projekt",
              "Deležnik, zahteva, načrt, tveganje, strošek, urnik"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "BACCM consists of Change, Need, Solution, Stakeholder, Value, and Context. The concepts should be considered as an interconnected system.",
            sl: "BACCM sestavljajo sprememba, potreba, rešitev, deležnik, vrednost in kontekst. Pojme je treba obravnavati kot medsebojno povezan sistem."
          }
        },
        {
          id: "d1_q3",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A company identifies an opportunity to serve a new customer group. In BACCM terms, what is the opportunity itself?",
            sl: "Podjetje prepozna priložnost za oskrbo nove skupine strank. Kaj je v okviru BACCM ta priložnost?"
          },
          options: {
            en: ["A need", "A solution", "A stakeholder", "A change"],
            sl: ["Potreba", "Rešitev", "Deležnik", "Sprememba"]
          },
          correctIndex: 0,
          explanation: {
            en: "A need is a problem or opportunity to be addressed. The opportunity may motivate a change, and a solution may then be proposed to address it.",
            sl: "Potreba je problem ali priložnost, ki jo je treba obravnavati. Priložnost lahko spodbudi spremembo, nato pa se lahko predlaga rešitev."
          }
        },
        {
          id: "d1_q4",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "Which option is the best example of a solution that is not solely a technology product?",
            sl: "Kateri primer najbolje ponazarja rešitev, ki ni zgolj tehnološki izdelek?"
          },
          options: {
            en: [
              "A combination of a revised process, staff training, and a software tool",
              "A list of stakeholder names",
              "A problem statement without a response",
              "A market condition that has not been analyzed"
            ],
            sl: [
              "Kombinacija spremenjenega procesa, usposabljanja zaposlenih in programskega orodja",
              "Seznam imen deležnikov",
              "Opis problema brez predlaganega odziva",
              "Tržna okoliščina, ki še ni bila analizirana"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "A solution can combine technology with manual procedures, process changes, business-model updates, and improved organizational capabilities.",
            sl: "Rešitev lahko združuje tehnologijo z ročnimi postopki, spremembami procesov, posodobitvami poslovnega modela in izboljšanimi organizacijskimi zmožnostmi."
          }
        },
        {
          id: "d1_q5",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A solution reduces operating costs but makes work less convenient for one stakeholder group. What is the most accurate conclusion about value?",
            sl: "Rešitev zmanjša operativne stroške, vendar eni skupini deležnikov oteži delo. Kateri sklep o vrednosti je najprimernejši?"
          },
          options: {
            en: [
              "Value is always identical for every stakeholder.",
              "The solution has no value because one group is inconvenienced.",
              "Value depends on stakeholder perspective and context, so benefits and concerns should both be assessed.",
              "Only monetary returns count as value."
            ],
            sl: [
              "Vrednost je vedno enaka za vse deležnike.",
              "Rešitev nima vrednosti, ker eni skupini oteži delo.",
              "Vrednost je odvisna od perspektive deležnikov in konteksta, zato je treba oceniti koristi in pomisleke.",
              "Kot vrednost štejejo samo denarni donosi."
            ]
          },
          correctIndex: 2,
          explanation: {
            en: "The Standard describes value as stakeholder- and context-dependent. Value may be tangible or intangible, and a solution can create different outcomes for different stakeholders; analysis should make those trade-offs visible.",
            sl: "Standard opredeli vrednost kot odvisno od deležnika in konteksta. Vrednost je lahko oprijemljiva ali neoprijemljiva, rešitev pa lahko različnim deležnikom prinese različne izide; analiza mora te kompromise jasno pokazati."
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
      babokReference: "BABOK Guide v3 — Chapter 2; The Business Analysis Standard v.A2.0 (2025), Sections 4.4.1–4.4.3",
      theory: {
        en:
          "<p>A <strong>stakeholder</strong> is a group or individual with a relationship to a change, need, or solution. Stakeholders may be internal or external. Their interests, impact, and influence can differ, so identifying and understanding relevant stakeholders is important when analyzing needs and expected value.</p>" +
          "<p>A <strong>requirement</strong> is a usable representation of a need. Requirements focus on understanding what kind of value could be delivered when the need is fulfilled. A <strong>design</strong> is a usable representation of a solution and focuses on how value might be realized if that solution is built. Requirements and designs are interdependent: exploring a design can reveal new requirements, while a changed requirement can lead to a revised design.</p>" +
          "<p>The BABOK requirements classification schema has four main types:</p>" +
          "<ul>" +
          "<li><strong>Business requirements:</strong> statements of goals, objectives, and outcomes that explain why a change has been initiated. They may apply to an enterprise, a business area, or an initiative.</li>" +
          "<li><strong>Stakeholder requirements:</strong> stakeholder needs that must be met to achieve business requirements. They can provide a bridge between business requirements and solution requirements.</li>" +
          "<li><strong>Solution requirements:</strong> capabilities and qualities of a solution that meet stakeholder requirements. Functional requirements describe the behaviour and information the solution must manage; non-functional requirements describe conditions or qualities the solution must have.</li>" +
          "<li><strong>Transition requirements:</strong> temporary capabilities or conditions needed to move from the current state to the future state. Examples include data conversion, training, and business continuity arrangements.</li>" +
          "</ul>" +
          "<p>Requirements and designs are not simply documents: they may be represented by individual artifacts, sets of documents, or models. Their purpose matters more than their format. For example, a need to reduce the time required to pick and pack an order is a requirement; a process model showing a proposed way to do that work is a design.</p>" +
          "<p><strong>Traceability</strong> tracks relationships from the original stakeholder need to requirements, designs, and solution components. Backward traceability links an item to its source or need; forward traceability links it to the solution. A traceability model can reveal missing requirements or solution components that are not supported by a requirement or design, and it helps assess the impact of a proposed change.</p>",
        sl:
          "<p><strong>Deležnik</strong> je skupina ali posameznik, povezan s spremembo, potrebo ali rešitvijo. Deležniki so lahko notranji ali zunanji. Njihovi interesi, vpliv in moč se lahko razlikujejo, zato je pri analizi potreb in pričakovane vrednosti pomembno prepoznati in razumeti ustrezne deležnike.</p>" +
          "<p><strong>Zahteva</strong> je uporabna predstavitev potrebe. Zahteve se osredotočajo na razumevanje, kakšno vrednost bi lahko zagotovili z zadovoljitvijo potrebe. <strong>Načrt rešitve</strong> je uporabna predstavitev rešitve in se osredotoča na to, kako bi se vrednost lahko uresničila, če bi rešitev izdelali. Zahteve in načrti rešitev so medsebojno odvisni: raziskovanje načrta lahko razkrije nove zahteve, sprememba zahteve pa lahko zahteva spremembo načrta.</p>" +
          "<p>Shema razvrščanja zahtev BABOK vključuje štiri glavne vrste:</p>" +
          "<ul>" +
          "<li><strong>Poslovne zahteve:</strong> izjave o ciljih in izidih, ki pojasnjujejo, zakaj je bila uvedena sprememba. Veljajo lahko za podjetje, poslovno področje ali pobudo.</li>" +
          "<li><strong>Zahteve deležnikov:</strong> potrebe deležnikov, ki jih je treba zadovoljiti za dosego poslovnih zahtev. Lahko predstavljajo povezavo med poslovnimi zahtevami in zahtevami rešitve.</li>" +
          "<li><strong>Zahteve rešitve:</strong> zmožnosti in lastnosti rešitve, ki izpolnjujejo zahteve deležnikov. Funkcionalne zahteve opisujejo vedenje in informacije, ki jih mora rešitev upravljati; nefunkcionalne zahteve opisujejo pogoje ali lastnosti, ki jih mora rešitev imeti.</li>" +
          "<li><strong>Prehodne zahteve:</strong> začasne zmožnosti ali pogoji, potrebni za prehod iz sedanjega v prihodnje stanje. Primeri so pretvorba podatkov, usposabljanje in zagotavljanje neprekinjenega poslovanja.</li>" +
          "</ul>" +
          "<p>Zahteve in načrti rešitev niso zgolj dokumenti: predstavimo jih lahko kot posamezne artefakte, zbirke dokumentov ali modele. Pomembnejši od oblike je njihov namen. Potreba po skrajšanju časa za pripravo in pakiranje naročila je na primer zahteva; procesni model, ki prikazuje predlagani način dela, pa je načrt rešitve.</p>" +
          "<p><strong>Sledljivost</strong> spremlja povezave od prvotne potrebe deležnika do zahtev, načrtov in komponent rešitve. Povratna sledljivost poveže element z njegovim virom ali potrebo; napredna sledljivost ga poveže z rešitvijo. Model sledljivosti lahko razkrije manjkajoče zahteve ali komponente rešitve, ki nimajo ustrezne podpore v zahtevi ali načrtu, ter pomaga oceniti vpliv predlagane spremembe.</p>"
      },
      summary: {
        en: [
          "A stakeholder is a group or individual related to a change, need, or solution; stakeholders may be internal or external and have different interests and influence.",
          "A requirement is a usable representation of a need and addresses what value could be delivered.",
          "A design is a usable representation of a solution and addresses how value might be realized.",
          "Requirements and designs inform one another and may evolve together during analysis.",
          "The four main classifications are business, stakeholder, solution, and transition requirements.",
          "Solution requirements include functional requirements (behaviour and information) and non-functional requirements (conditions and qualities).",
          "Transition requirements are temporary and help move from the current state to the future state.",
          "Traceability links needs, requirements, designs, and solution components, supporting coverage and change-impact analysis."
        ],
        sl: [
          "Deležnik je skupina ali posameznik, povezan s spremembo, potrebo ali rešitvijo; deležniki so lahko notranji ali zunanji ter imajo različne interese in vpliv.",
          "Zahteva je uporabna predstavitev potrebe in obravnava, kakšno vrednost bi lahko zagotovili.",
          "Načrt rešitve je uporabna predstavitev rešitve in obravnava, kako bi se vrednost lahko uresničila.",
          "Zahteve in načrti rešitev se medsebojno dopolnjujejo ter se lahko med analizo razvijajo skupaj.",
          "Štiri glavne klasifikacije so poslovne zahteve, zahteve deležnikov, zahteve rešitve in prehodne zahteve.",
          "Zahteve rešitve vključujejo funkcionalne zahteve (vedenje in informacije) ter nefunkcionalne zahteve (pogoji in lastnosti).",
          "Prehodne zahteve so začasne in podpirajo prehod iz sedanjega v prihodnje stanje.",
          "Sledljivost povezuje potrebe, zahteve, načrte in komponente rešitve ter podpira preverjanje pokritosti in analizo vpliva sprememb."
        ]
      },
      quiz: [
        {
          id: "d2_q1",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A statement that an organization intends to improve customer retention is best classified as which type of requirement?",
            sl: "Izjava, da namerava organizacija izboljšati zadržanje strank, se najbolje razvrsti kot katera vrsta zahteve?"
          },
          options: {
            en: [
              "Business requirement",
              "Stakeholder requirement",
              "Transition requirement",
              "Functional solution requirement"
            ],
            sl: [
              "Poslovna zahteva",
              "Zahteva deležnika",
              "Prehodna zahteva",
              "Funkcionalna zahteva rešitve"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Business requirements state the goals, objectives, or outcomes that explain why a change is initiated. Improving customer retention is an organizational outcome.",
            sl: "Poslovne zahteve izražajo cilje in izide, ki pojasnjujejo, zakaj se uvede sprememba. Izboljšanje zadržanja strank je organizacijski izid."
          }
        },
        {
          id: "d2_q2",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A customer-service team needs to see a customer's order history to resolve enquiries. In the requirements/design distinction, this statement primarily expresses:",
            sl: "Ekipa za podporo strankam mora videti zgodovino naročil stranke, da lahko razreši vprašanja. Kaj ta izjava predvsem izraža v razlikovanju med zahtevo in načrtom?"
          },
          options: {
            en: [
              "A need, represented as a requirement",
              "A complete solution design",
              "A transition capability",
              "A solution component that has already been implemented"
            ],
            sl: [
              "Potrebo, predstavljeno kot zahtevo",
              "Popoln načrt rešitve",
              "Prehodno zmožnost",
              "Že uvedeno komponento rešitve"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "A requirement is a usable representation of a need. A design would describe a possible solution, such as a screen or model that provides access to the order history.",
            sl: "Zahteva je uporabna predstavitev potrebe. Načrt bi opisal mogočo rešitev, na primer zaslon ali model, ki omogoča dostop do zgodovine naročil."
          }
        },
        {
          id: "d2_q3",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "A solution must allow trained staff to complete a task within two minutes. This is best classified as:",
            sl: "Rešitev mora usposobljenemu osebju omogočiti dokončanje naloge v dveh minutah. Kako to zahtevo najbolje razvrstimo?"
          },
          options: {
            en: [
              "A non-functional solution requirement about performance",
              "A business requirement",
              "A transition requirement",
              "A stakeholder role"
            ],
            sl: [
              "Nefunkcionalna zahteva rešitve glede učinkovitosti",
              "Poslovna zahteva",
              "Prehodna zahteva",
              "Vloga deležnika"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "A measurable time condition describes a quality or condition of the solution, so it is a non-functional solution requirement.",
            sl: "Merljiv časovni pogoj opisuje lastnost oziroma pogoj rešitve, zato gre za nefunkcionalno zahtevo rešitve."
          }
        },
        {
          id: "d2_q4",
          knowledgeArea: "Business Analysis Key Concepts",
          question: {
            en: "User training required only to move employees to a new operating process is an example of:",
            sl: "Usposabljanje uporabnikov, potrebno samo za prehod zaposlenih na nov način dela, je primer:"
          },
          options: {
            en: [
              "A transition requirement",
              "A business requirement",
              "A functional requirement",
              "A design option"
            ],
            sl: [
              "Prehodne zahteve",
              "Poslovne zahteve",
              "Funkcionalne zahteve",
              "Možnosti načrta rešitve"
            ]
          },
          correctIndex: 0,
          explanation: {
            en: "Transition requirements are temporary capabilities or conditions needed to move from the current state to the future state. Training is a typical example.",
            sl: "Prehodne zahteve so začasne zmožnosti ali pogoji, potrebni za prehod iz sedanjega v prihodnje stanje. Usposabljanje je značilen primer."
          }
        },
        {
          id: "d2_q5",
          knowledgeArea: "Requirements Life Cycle Management",
          question: {
            en: "A proposed change affects a solution component. Which practice helps identify the related need, requirements, designs, and other components that may also be affected?",
            sl: "Predlagana sprememba vpliva na komponento rešitve. Katera praksa pomaga prepoznati povezano potrebo, zahteve, načrte in druge komponente, ki bi lahko bile prav tako prizadete?"
          },
          options: {
            en: ["Traceability", "Stakeholder classification", "Value definition", "Elicitation preparation"],
            sl: ["Sledljivost", "Razvrščanje deležnikov", "Opredelitev vrednosti", "Priprava na elicitacijo"]
          },
          correctIndex: 0,
          explanation: {
            en: "Traceability tracks relationships from stakeholder needs through requirements and designs to solution components. It supports change control and impact analysis.",
            sl: "Sledljivost spremlja povezave od potreb deležnikov prek zahtev in načrtov do komponent rešitve. Podpira nadzor sprememb in analizo vpliva."
          }
        }
      ]
    }
  ],
  examQuestions: [],
  glossary: []
};
