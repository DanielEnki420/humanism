// Mehrsprachige Inhalte (DE / EN / IT) für die Humanitas-Landingpage.
// Texte werden hier zentral gepflegt; index.tsx liefert nur Icons, Layout & Zahlenwerte.

export const LANGUAGES = ["de", "en", "it"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Lang, string> = {
  de: "DE",
  en: "EN",
  it: "IT",
};

/** Textsegment – `em: true` markiert ein hervorgehobenes Wort. */
export type Segment = { t: string; em?: boolean };

export type PrincipleText = {
  title: string;
  text: string;
  points: string[];
  example: string;
};

export type TimelineItem = { year: string; title: string; text: string };
export type FaqItem = { q: string; a: string };

export type Translation = {
  meta: { title: string; description: string };
  nav: {
    idea: string;
    principles: string;
    history: string;
    data: string;
    faq: string;
    foundation: string;
  };
  hero: {
    badge: string;
    title: Segment[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  idea: { label: string; heading: string; lead: Segment[]; body: string };
  principles: { label: string; heading: string; items: PrincipleText[] };
  foundation: {
    label: string;
    quote: Segment[];
    cards: { k: string; v: string }[];
  };
  history: { label: string; heading: string; intro: string; items: TimelineItem[] };
  data: {
    label: string;
    heading: string;
    intro: string;
    chartCaption: string;
    chartSource: string;
    placeholderBadge: string;
    unit: string;
    regions: string[];
  };
  faq: { label: string; heading: string; items: FaqItem[] };
  sources: {
    label: string;
    heading: string;
    intro: string;
    items: { desc: string }[];
  };
  footer: {
    tagline: string;
    topicsLabel: string;
    moreLabel: string;
    projectLabel: string;
    sourceLink: string;
    copyright: string;
    madeWith: string;
  };
  ui: {
    showMore: string;
    showLess: string;
    exampleLabel: string;
    toggleTheme: string;
    toggleLanguage: string;
  };
};

export const translations: Record<Lang, Translation> = {
  de: {
    meta: {
      title: "Säkularer Humanismus – Menschlichkeit durch Vernunft",
      description:
        "Eine Weltanschauung basierend auf Menschenwürde, Wissenschaft, kritischem Denken und Mitgefühl.",
    },
    nav: {
      idea: "Idee",
      principles: "Prinzipien",
      history: "Geschichte",
      data: "Daten",
      faq: "FAQ",
      foundation: "Grundlage",
    },
    hero: {
      badge: "Eine Einführung in eine moderne Weltanschauung",
      title: [
        { t: "Säkularer Humanismus – " },
        { t: "Menschlichkeit", em: true },
        { t: " durch Vernunft und Verantwortung" },
      ],
      subtitle:
        "Eine Weltanschauung basierend auf Menschenwürde, Wissenschaft, kritischem Denken und Mitgefühl.",
      ctaPrimary: "Prinzipien entdecken",
      ctaSecondary: "Mehr erfahren",
    },
    idea: {
      label: "Die Idee",
      heading: "Was ist säkularer Humanismus?",
      lead: [
        { t: "Säkularer Humanismus stellt den " },
        { t: "Menschen", em: true },
        {
          t: ", Vernunft, Wissenschaft und ethische Verantwortung in den Mittelpunkt.",
        },
      ],
      body: "Es ist eine lebensbejahende Haltung, die sich an dem orientiert, was wir gemeinsam beobachten, verstehen und gestalten können – getragen von Empathie, Neugier und dem Vertrauen in die menschliche Fähigkeit, die Welt besser zu machen.",
    },
    principles: {
      label: "Sechs Prinzipien",
      heading: "Werte, die uns verbinden",
      items: [
        {
          title: "Kritisches Denken",
          text: "Entscheidungen entstehen durch Logik, Fakten und offene Diskussion.",
          points: [
            "Argumente prüfen, statt Autoritäten zu folgen",
            "Eigene Annahmen hinterfragen",
            "Widersprüche aushalten und auflösen",
          ],
          example:
            "Bevor eine Behauptung übernommen wird, werden Quellen, Belege und mögliche Gegenargumente geprüft.",
        },
        {
          title: "Wissenschaftliche Erkenntnis",
          text: "Wissen wächst durch Forschung und überprüfbare Beweise.",
          points: [
            "Hypothesen testen und revidieren",
            "Methoden transparent machen",
            "Konsens als vorläufig verstehen",
          ],
          example:
            "Medizinische Entscheidungen orientieren sich an Studien mit überprüfbaren Ergebnissen, nicht an Tradition.",
        },
        {
          title: "Menschliche Werte",
          text: "Empathie, Zusammenarbeit und Respekt im Miteinander.",
          points: [
            "Andere Perspektiven ernst nehmen",
            "Konflikte im Dialog lösen",
            "Vielfalt als Bereicherung erleben",
          ],
          example:
            "In einer Nachbarschaftsinitiative bringen Menschen unterschiedlicher Herkunft ihre Fähigkeiten zusammen.",
        },
        {
          title: "Menschenrechte",
          text: "Würde und Freiheit für alle Menschen – ohne Ausnahme.",
          points: [
            "Gleiche Rechte unabhängig von Herkunft",
            "Schutz von Minderheiten",
            "Meinungs- und Glaubensfreiheit",
          ],
          example:
            "Die Allgemeine Erklärung der Menschenrechte als gemeinsamer Maßstab für Gesellschaft und Politik.",
        },
        {
          title: "Verantwortung",
          text: "Gemeinsame Lösungen für globale Herausforderungen.",
          points: [
            "Klima und Umwelt schützen",
            "Solidarität über Grenzen hinweg",
            "Zukünftige Generationen mitdenken",
          ],
          example:
            "Beim Konsum bewusst auf Herkunft, Ressourcen und Arbeitsbedingungen achten.",
        },
        {
          title: "Freies Denken",
          text: "Fragen stellen und eigene Überzeugungen entwickeln.",
          points: [
            "Neugier als Lebenshaltung",
            "Sich von guten Argumenten überzeugen lassen",
            "Meinungen weiterentwickeln dürfen",
          ],
          example:
            "Ein Buchclub, in dem alle frei ihre Sicht teilen und gemeinsam Neues entdecken.",
        },
      ],
    },
    foundation: {
      label: "Die Grundlage",
      quote: [
        { t: "„Säkularer Humanismus basiert auf " },
        { t: "Vernunft", em: true },
        { t: ", " },
        { t: "Erfahrung", em: true },
        { t: " und " },
        { t: "menschlichem Wohlergehen", em: true },
        { t: "." },
      ],
      cards: [
        {
          k: "Vernunft",
          v: "Argumente werden geprüft, nicht geglaubt. Klarheit entsteht durch Denken.",
        },
        {
          k: "Erfahrung",
          v: "Die Wirklichkeit ist unser Lehrmeister – beobachtbar, teilbar, lernbar.",
        },
        {
          k: "Wohlergehen",
          v: "Maßstab ethischen Handelns ist das Wohl aller Menschen und Lebewesen.",
        },
      ],
    },
    history: {
      label: "Ideengeschichte",
      heading: "Eine lange Linie des Denkens",
      intro:
        "Humanistische Ideen sind keine Erfindung der Moderne – sie ziehen sich quer durch Kulturen und Jahrtausende.",
      items: [
        {
          year: "~600 v. Chr.",
          title: "Charvaka (Indien)",
          text: "Eine frühe materialistische Schule, die Wissen aus Wahrnehmung statt aus Offenbarung ableitet.",
        },
        {
          year: "~450 v. Chr.",
          title: "Protagoras",
          text: "„Der Mensch ist das Maß aller Dinge“ – der Mensch rückt ins Zentrum des Denkens.",
        },
        {
          year: "~300 v. Chr.",
          title: "Epikur",
          text: "Ethik gründet auf Erfahrung und dem Streben nach einem gelingenden Leben, nicht auf Furcht vor Göttern.",
        },
        {
          year: "um 1500",
          title: "Renaissance-Humanismus",
          text: "Erasmus von Rotterdam und andere stellen Bildung, Sprache und die Würde des Menschen in den Mittelpunkt.",
        },
        {
          year: "um 1750",
          title: "Aufklärung",
          text: "Hume, Kant und Voltaire setzen auf Vernunft, Skepsis und individuelle Freiheit.",
        },
        {
          year: "1859",
          title: "Darwins Evolutionstheorie",
          text: "„Über die Entstehung der Arten“ liefert eine natürliche Erklärung für die Vielfalt des Lebens.",
        },
        {
          year: "1933",
          title: "Humanist Manifesto I",
          text: "Erste programmatische Selbstbeschreibung des modernen, säkularen Humanismus.",
        },
        {
          year: "1948",
          title: "Allgemeine Erklärung der Menschenrechte",
          text: "Die UN verankern universelle Würde und Rechte – ein humanistischer Meilenstein.",
        },
      ],
    },
    data: {
      label: "Daten & Fakten",
      heading: "Ein Blick auf die Zahlen",
      intro:
        "Wie viele Menschen verstehen sich als religiös ungebunden? Die Anteile unterscheiden sich stark zwischen Ländern.",
      chartCaption: "Anteil religiös ungebundener Menschen (illustrativ)",
      chartSource:
        "Quelle: in Anlehnung an Pew Research Center · Werte vor dem Launch prüfen",
      placeholderBadge: "Platzhalter-Werte",
      unit: "%",
      regions: ["Tschechien", "China", "Niederlande", "Deutschland", "USA", "Welt"],
    },
    faq: {
      label: "Häufige Fragen",
      heading: "Klarheit statt Missverständnis",
      items: [
        {
          q: "Ist Humanismus dasselbe wie Atheismus?",
          a: "Nein. Atheismus ist nur die Abwesenheit eines Götterglaubens. Humanismus ist eine positive Lebenshaltung mit eigenen Werten – viele, aber nicht alle Humanist:innen sind auch Atheist:innen.",
        },
        {
          q: "Woher kommen Werte ohne Religion?",
          a: "Aus Empathie, Vernunft und der gemeinsamen Erfahrung, was Menschen schadet oder nützt. Moral lässt sich begründen, ohne sie auf übernatürliche Gebote zu stützen.",
        },
        {
          q: "Glauben Humanist:innen an gar nichts?",
          a: "Doch – an Menschenwürde, an die Kraft der Vernunft und an Verantwortung füreinander. Es geht nicht um Glaubenslosigkeit, sondern um eine andere Grundlage.",
        },
        {
          q: "Ist Humanismus eine Religion?",
          a: "Nein. Es gibt keine Dogmen, heiligen Schriften oder Autoritäten. Überzeugungen dürfen sich mit neuen Erkenntnissen ändern.",
        },
        {
          q: "Wie steht Humanismus zur Wissenschaft?",
          a: "Wissenschaft ist die beste Methode, um Wirklichkeit verlässlich zu verstehen. Humanismus nutzt sie als Werkzeug – kennt aber auch ihre Grenzen bei Sinn- und Wertefragen.",
        },
      ],
    },
    sources: {
      label: "Quellen & Weiterlesen",
      heading: "Vertiefen & nachprüfen",
      intro:
        "Diese Organisationen und Dokumente bilden die Grundlage – ideal zum Weiterlesen und Faktenprüfen.",
      items: [
        { desc: "Weltverband humanistischer Organisationen." },
        { desc: "Herausgeber des Humanist Manifesto III." },
        { desc: "Deutsche Denkfabrik des säkularen Humanismus." },
        { desc: "Daten zu Religion & Gesellschaft weltweit." },
        { desc: "Volltext der Allgemeinen Erklärung der Menschenrechte." },
      ],
    },
    footer: {
      tagline:
        "Eine Einladung, die Welt mit offenen Augen, klarem Verstand und warmem Herzen zu betrachten.",
      topicsLabel: "Themen",
      moreLabel: "Mehr",
      projectLabel: "Projekt",
      sourceLink: "Quellcode (GitHub)",
      copyright: "Eine Einführung in den säkularen Humanismus.",
      madeWith: "Mit Vernunft & Mitgefühl gestaltet.",
    },
    ui: {
      showMore: "Mehr erfahren",
      showLess: "Weniger anzeigen",
      exampleLabel: "Beispiel",
      toggleTheme: "Farbschema wechseln",
      toggleLanguage: "Sprache wählen",
    },
  },

  en: {
    meta: {
      title: "Secular Humanism – Humanity through Reason",
      description:
        "A worldview based on human dignity, science, critical thinking and compassion.",
    },
    nav: {
      idea: "Idea",
      principles: "Principles",
      history: "History",
      data: "Data",
      faq: "FAQ",
      foundation: "Foundation",
    },
    hero: {
      badge: "An introduction to a modern worldview",
      title: [
        { t: "Secular Humanism – " },
        { t: "Humanity", em: true },
        { t: " through Reason and Responsibility" },
      ],
      subtitle:
        "A worldview based on human dignity, science, critical thinking and compassion.",
      ctaPrimary: "Explore the principles",
      ctaSecondary: "Learn more",
    },
    idea: {
      label: "The Idea",
      heading: "What is secular humanism?",
      lead: [
        { t: "Secular humanism places the " },
        { t: "human being", em: true },
        { t: ", reason, science and ethical responsibility at the centre." },
      ],
      body: "It is a life-affirming attitude oriented towards what we can observe, understand and shape together – carried by empathy, curiosity and trust in the human ability to make the world better.",
    },
    principles: {
      label: "Six Principles",
      heading: "Values that connect us",
      items: [
        {
          title: "Critical Thinking",
          text: "Decisions arise from logic, facts and open discussion.",
          points: [
            "Examine arguments instead of following authorities",
            "Question your own assumptions",
            "Endure and resolve contradictions",
          ],
          example:
            "Before a claim is accepted, its sources, evidence and possible counterarguments are examined.",
        },
        {
          title: "Scientific Knowledge",
          text: "Knowledge grows through research and verifiable evidence.",
          points: [
            "Test and revise hypotheses",
            "Make methods transparent",
            "Understand consensus as provisional",
          ],
          example:
            "Medical decisions are based on studies with verifiable results, not on tradition.",
        },
        {
          title: "Human Values",
          text: "Empathy, cooperation and respect in how we treat one another.",
          points: [
            "Take other perspectives seriously",
            "Resolve conflicts through dialogue",
            "Experience diversity as enrichment",
          ],
          example:
            "In a neighbourhood initiative, people of different backgrounds combine their skills.",
        },
        {
          title: "Human Rights",
          text: "Dignity and freedom for all people – without exception.",
          points: [
            "Equal rights regardless of origin",
            "Protection of minorities",
            "Freedom of opinion and belief",
          ],
          example:
            "The Universal Declaration of Human Rights as a shared standard for society and politics.",
        },
        {
          title: "Responsibility",
          text: "Shared solutions to global challenges.",
          points: [
            "Protect the climate and environment",
            "Solidarity across borders",
            "Keep future generations in mind",
          ],
          example:
            "When consuming, pay conscious attention to origin, resources and working conditions.",
        },
        {
          title: "Free Thought",
          text: "Ask questions and develop your own convictions.",
          points: [
            "Curiosity as a way of life",
            "Letting good arguments change your mind",
            "Being allowed to evolve your views",
          ],
          example:
            "A book club where everyone freely shares their view and discovers new things together.",
        },
      ],
    },
    foundation: {
      label: "The Foundation",
      quote: [
        { t: "“Secular humanism rests on " },
        { t: "reason", em: true },
        { t: ", " },
        { t: "experience", em: true },
        { t: " and " },
        { t: "human well-being", em: true },
        { t: ".”" },
      ],
      cards: [
        {
          k: "Reason",
          v: "Arguments are tested, not believed. Clarity comes from thinking.",
        },
        {
          k: "Experience",
          v: "Reality is our teacher – observable, shareable, learnable.",
        },
        {
          k: "Well-being",
          v: "The measure of ethical action is the welfare of all people and living beings.",
        },
      ],
    },
    history: {
      label: "History of Ideas",
      heading: "A long line of thought",
      intro:
        "Humanist ideas are not a modern invention – they run across cultures and millennia.",
      items: [
        {
          year: "~600 BCE",
          title: "Charvaka (India)",
          text: "An early materialist school deriving knowledge from perception rather than revelation.",
        },
        {
          year: "~450 BCE",
          title: "Protagoras",
          text: "“Man is the measure of all things” – the human being moves to the centre of thought.",
        },
        {
          year: "~300 BCE",
          title: "Epicurus",
          text: "Ethics rests on experience and the pursuit of a flourishing life, not on fear of gods.",
        },
        {
          year: "c. 1500",
          title: "Renaissance Humanism",
          text: "Erasmus of Rotterdam and others place education, language and human dignity at the centre.",
        },
        {
          year: "c. 1750",
          title: "The Enlightenment",
          text: "Hume, Kant and Voltaire champion reason, scepticism and individual freedom.",
        },
        {
          year: "1859",
          title: "Darwin's theory of evolution",
          text: "“On the Origin of Species” offers a natural explanation for the diversity of life.",
        },
        {
          year: "1933",
          title: "Humanist Manifesto I",
          text: "The first programmatic self-description of modern secular humanism.",
        },
        {
          year: "1948",
          title: "Universal Declaration of Human Rights",
          text: "The UN enshrine universal dignity and rights – a humanist milestone.",
        },
      ],
    },
    data: {
      label: "Data & Facts",
      heading: "A look at the numbers",
      intro:
        "How many people identify as religiously unaffiliated? The shares vary widely between countries.",
      chartCaption: "Share of religiously unaffiliated people (illustrative)",
      chartSource:
        "Source: based on Pew Research Center · verify values before launch",
      placeholderBadge: "Placeholder values",
      unit: "%",
      regions: ["Czechia", "China", "Netherlands", "Germany", "USA", "World"],
    },
    faq: {
      label: "Frequent Questions",
      heading: "Clarity instead of confusion",
      items: [
        {
          q: "Is humanism the same as atheism?",
          a: "No. Atheism is merely the absence of belief in gods. Humanism is a positive stance on life with its own values – many, but not all, humanists are also atheists.",
        },
        {
          q: "Where do values come from without religion?",
          a: "From empathy, reason and the shared experience of what harms or helps people. Morality can be justified without grounding it in supernatural commandments.",
        },
        {
          q: "Do humanists believe in nothing at all?",
          a: "On the contrary – in human dignity, the power of reason and responsibility for one another. It is not about having no beliefs, but about a different foundation.",
        },
        {
          q: "Is humanism a religion?",
          a: "No. There are no dogmas, sacred scriptures or authorities. Convictions are allowed to change with new evidence.",
        },
        {
          q: "How does humanism relate to science?",
          a: "Science is the best method for reliably understanding reality. Humanism uses it as a tool – while recognising its limits on questions of meaning and values.",
        },
      ],
    },
    sources: {
      label: "Sources & Further Reading",
      heading: "Go deeper & verify",
      intro:
        "These organisations and documents form the basis – ideal for further reading and fact-checking.",
      items: [
        { desc: "Global federation of humanist organisations." },
        { desc: "Publisher of Humanist Manifesto III." },
        { desc: "German think tank for secular humanism." },
        { desc: "Data on religion & society worldwide." },
        { desc: "Full text of the Universal Declaration of Human Rights." },
      ],
    },
    footer: {
      tagline:
        "An invitation to view the world with open eyes, a clear mind and a warm heart.",
      topicsLabel: "Topics",
      moreLabel: "More",
      projectLabel: "Project",
      sourceLink: "Source code (GitHub)",
      copyright: "An introduction to secular humanism.",
      madeWith: "Crafted with reason & compassion.",
    },
    ui: {
      showMore: "Show more",
      showLess: "Show less",
      exampleLabel: "Example",
      toggleTheme: "Toggle colour scheme",
      toggleLanguage: "Choose language",
    },
  },

  it: {
    meta: {
      title: "Umanesimo laico – Umanità attraverso la ragione",
      description:
        "Una visione del mondo basata su dignità umana, scienza, pensiero critico e compassione.",
    },
    nav: {
      idea: "Idea",
      principles: "Principi",
      history: "Storia",
      data: "Dati",
      faq: "FAQ",
      foundation: "Fondamento",
    },
    hero: {
      badge: "Un'introduzione a una visione del mondo moderna",
      title: [
        { t: "Umanesimo laico – " },
        { t: "Umanità", em: true },
        { t: " attraverso ragione e responsabilità" },
      ],
      subtitle:
        "Una visione del mondo basata su dignità umana, scienza, pensiero critico e compassione.",
      ctaPrimary: "Scopri i principi",
      ctaSecondary: "Scopri di più",
    },
    idea: {
      label: "L'idea",
      heading: "Che cos'è l'umanesimo laico?",
      lead: [
        { t: "L'umanesimo laico pone al centro l'" },
        { t: "essere umano", em: true },
        { t: ", la ragione, la scienza e la responsabilità etica." },
      ],
      body: "È un atteggiamento che afferma la vita, orientato a ciò che possiamo osservare, comprendere e plasmare insieme – sostenuto da empatia, curiosità e fiducia nella capacità umana di rendere il mondo migliore.",
    },
    principles: {
      label: "Sei principi",
      heading: "Valori che ci uniscono",
      items: [
        {
          title: "Pensiero critico",
          text: "Le decisioni nascono da logica, fatti e discussione aperta.",
          points: [
            "Esaminare gli argomenti invece di seguire le autorità",
            "Mettere in discussione le proprie supposizioni",
            "Sostenere e risolvere le contraddizioni",
          ],
          example:
            "Prima di accettare un'affermazione si esaminano fonti, prove e possibili controargomentazioni.",
        },
        {
          title: "Conoscenza scientifica",
          text: "La conoscenza cresce attraverso la ricerca e prove verificabili.",
          points: [
            "Testare e rivedere le ipotesi",
            "Rendere trasparenti i metodi",
            "Intendere il consenso come provvisorio",
          ],
          example:
            "Le decisioni mediche si basano su studi con risultati verificabili, non sulla tradizione.",
        },
        {
          title: "Valori umani",
          text: "Empatia, collaborazione e rispetto reciproco.",
          points: [
            "Prendere sul serio le altre prospettive",
            "Risolvere i conflitti con il dialogo",
            "Vivere la diversità come arricchimento",
          ],
          example:
            "In un'iniziativa di quartiere, persone di origini diverse mettono insieme le proprie capacità.",
        },
        {
          title: "Diritti umani",
          text: "Dignità e libertà per tutti gli esseri umani – senza eccezioni.",
          points: [
            "Pari diritti indipendentemente dall'origine",
            "Tutela delle minoranze",
            "Libertà di opinione e di credo",
          ],
          example:
            "La Dichiarazione universale dei diritti umani come criterio comune per società e politica.",
        },
        {
          title: "Responsabilità",
          text: "Soluzioni condivise per le sfide globali.",
          points: [
            "Proteggere il clima e l'ambiente",
            "Solidarietà oltre i confini",
            "Pensare alle generazioni future",
          ],
          example:
            "Nei consumi, prestare attenzione consapevole a origine, risorse e condizioni di lavoro.",
        },
        {
          title: "Libero pensiero",
          text: "Porre domande e sviluppare le proprie convinzioni.",
          points: [
            "La curiosità come stile di vita",
            "Lasciarsi convincere dai buoni argomenti",
            "Poter evolvere le proprie opinioni",
          ],
          example:
            "Un club del libro in cui tutti condividono liberamente la propria visione e scoprono cose nuove insieme.",
        },
      ],
    },
    foundation: {
      label: "Il fondamento",
      quote: [
        { t: "«L'umanesimo laico si fonda su " },
        { t: "ragione", em: true },
        { t: ", " },
        { t: "esperienza", em: true },
        { t: " e " },
        { t: "benessere umano", em: true },
        { t: ".»" },
      ],
      cards: [
        {
          k: "Ragione",
          v: "Gli argomenti si verificano, non si credono. La chiarezza nasce dal pensiero.",
        },
        {
          k: "Esperienza",
          v: "La realtà è il nostro maestro – osservabile, condivisibile, apprendibile.",
        },
        {
          k: "Benessere",
          v: "La misura dell'agire etico è il bene di tutte le persone e gli esseri viventi.",
        },
      ],
    },
    history: {
      label: "Storia delle idee",
      heading: "Una lunga linea di pensiero",
      intro:
        "Le idee umaniste non sono un'invenzione moderna – attraversano culture e millenni.",
      items: [
        {
          year: "~600 a.C.",
          title: "Charvaka (India)",
          text: "Una prima scuola materialista che trae la conoscenza dalla percezione, non dalla rivelazione.",
        },
        {
          year: "~450 a.C.",
          title: "Protagora",
          text: "«L'uomo è misura di tutte le cose» – l'essere umano al centro del pensiero.",
        },
        {
          year: "~300 a.C.",
          title: "Epicuro",
          text: "L'etica si fonda sull'esperienza e sulla ricerca di una vita felice, non sul timore degli dèi.",
        },
        {
          year: "ca. 1500",
          title: "Umanesimo rinascimentale",
          text: "Erasmo da Rotterdam e altri pongono al centro istruzione, lingua e dignità umana.",
        },
        {
          year: "ca. 1750",
          title: "Illuminismo",
          text: "Hume, Kant e Voltaire puntano su ragione, scetticismo e libertà individuale.",
        },
        {
          year: "1859",
          title: "La teoria dell'evoluzione di Darwin",
          text: "«L'origine delle specie» offre una spiegazione naturale della diversità della vita.",
        },
        {
          year: "1933",
          title: "Humanist Manifesto I",
          text: "La prima descrizione programmatica dell'umanesimo laico moderno.",
        },
        {
          year: "1948",
          title: "Dichiarazione universale dei diritti umani",
          text: "L'ONU sancisce dignità e diritti universali – una pietra miliare umanista.",
        },
      ],
    },
    data: {
      label: "Dati e fatti",
      heading: "Uno sguardo ai numeri",
      intro:
        "Quante persone si dichiarano senza affiliazione religiosa? Le quote variano molto tra i paesi.",
      chartCaption: "Quota di persone senza affiliazione religiosa (illustrativa)",
      chartSource:
        "Fonte: basato su Pew Research Center · verificare i valori prima del lancio",
      placeholderBadge: "Valori segnaposto",
      unit: "%",
      regions: ["Cechia", "Cina", "Paesi Bassi", "Germania", "USA", "Mondo"],
    },
    faq: {
      label: "Domande frequenti",
      heading: "Chiarezza invece di malintesi",
      items: [
        {
          q: "L'umanesimo è lo stesso dell'ateismo?",
          a: "No. L'ateismo è solo l'assenza di fede negli dèi. L'umanesimo è un atteggiamento positivo verso la vita con valori propri – molti, ma non tutti gli umanisti, sono anche atei.",
        },
        {
          q: "Da dove vengono i valori senza religione?",
          a: "Dall'empatia, dalla ragione e dall'esperienza condivisa di ciò che nuoce o giova alle persone. La morale può fondarsi senza ricorrere a comandamenti soprannaturali.",
        },
        {
          q: "Gli umanisti non credono in niente?",
          a: "Al contrario – nella dignità umana, nella forza della ragione e nella responsabilità reciproca. Non si tratta di assenza di valori, ma di un fondamento diverso.",
        },
        {
          q: "L'umanesimo è una religione?",
          a: "No. Non ci sono dogmi, testi sacri o autorità. Le convinzioni possono cambiare con nuove conoscenze.",
        },
        {
          q: "Qual è il rapporto dell'umanesimo con la scienza?",
          a: "La scienza è il metodo migliore per comprendere la realtà in modo affidabile. L'umanesimo la usa come strumento, pur riconoscendone i limiti sulle questioni di senso e di valore.",
        },
      ],
    },
    sources: {
      label: "Fonti e approfondimenti",
      heading: "Approfondire e verificare",
      intro:
        "Queste organizzazioni e documenti costituiscono la base – ideali per approfondire e verificare i fatti.",
      items: [
        { desc: "Federazione mondiale delle organizzazioni umaniste." },
        { desc: "Editore dell'Humanist Manifesto III." },
        { desc: "Think tank tedesco dell'umanesimo laico." },
        { desc: "Dati su religione e società nel mondo." },
        { desc: "Testo integrale della Dichiarazione universale dei diritti umani." },
      ],
    },
    footer: {
      tagline:
        "Un invito a guardare il mondo con occhi aperti, mente lucida e cuore caldo.",
      topicsLabel: "Argomenti",
      moreLabel: "Altro",
      projectLabel: "Progetto",
      sourceLink: "Codice sorgente (GitHub)",
      copyright: "Un'introduzione all'umanesimo laico.",
      madeWith: "Realizzato con ragione e compassione.",
    },
    ui: {
      showMore: "Scopri di più",
      showLess: "Mostra meno",
      exampleLabel: "Esempio",
      toggleTheme: "Cambia combinazione di colori",
      toggleLanguage: "Scegli la lingua",
    },
  },
};
