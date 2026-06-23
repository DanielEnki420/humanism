// Mehrsprachige Inhalte (DE / EN / IT) für die Humanitas-Landingpage.
// Texte werden hier zentral gepflegt; index.tsx liefert nur Icons, Layout,
// Zahlenwerte und Links. Faktenblöcke tragen eine Quellen-Fußnote.

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
export type TitledItem = { title: string; text: string };
export type TermItem = { term: string; def: string };
export type QuizItem = {
  statement: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type Translation = {
  meta: { title: string; description: string };
  nav: {
    idea: string;
    principles: string;
    foundation: string;
    science: string;
    ethics: string;
    distinctions: string;
    history: string;
    documents: string;
    data: string;
    faq: string;
    glossary: string;
  };
  hero: {
    badge: string;
    title: Segment[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  mission: { label: string; statement: Segment[]; note: string };
  idea: { label: string; heading: string; lead: Segment[]; body: string };
  principles: { label: string; heading: string; center: string; items: PrincipleText[] };
  foundation: {
    label: string;
    quote: Segment[];
    cards: { k: string; v: string }[];
  };
  science: {
    label: string;
    heading: string;
    intro: string;
    items: TitledItem[];
    source: string;
  };
  ethics: {
    label: string;
    heading: string;
    intro: string;
    items: TitledItem[];
    source: string;
  };
  distinctions: {
    label: string;
    heading: string;
    intro: string;
    affirmLabel: string;
    affirmText: string;
    items: TitledItem[];
  };
  history: { label: string; heading: string; intro: string; items: TimelineItem[] };
  documents: {
    label: string;
    heading: string;
    intro: string;
    items: { desc: string }[];
  };
  data: {
    label: string;
    heading: string;
    intro: string;
    chartCaption: string;
    chooseYear: string;
    changeLabel: string;
    worldNote: string;
    chartSource: string;
    unit: string;
    regions: string[];
  };
  faq: { label: string; heading: string; items: FaqItem[] };
  quiz: {
    label: string;
    heading: string;
    intro: string;
    questionLabel: string;
    next: string;
    restart: string;
    resultLabel: string;
    items: QuizItem[];
  };
  glossary: { label: string; heading: string; intro: string; items: TermItem[] };
  sources: {
    label: string;
    heading: string;
    intro: string;
    items: { desc: string }[];
  };
  footer: {
    tagline: string;
    topicsLabel: string;
    referenceLabel: string;
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
    sourceLabel: string;
    skipToContent: string;
  };
  legal: {
    impressumLabel: string;
    privacyLabel: string;
    disclaimer: string;
    impressum: { heading: string; blocks: { title: string; lines: string[] }[] };
    privacy: { heading: string; blocks: { title: string; body: string }[] };
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    consent: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    notConfigured: string;
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
      foundation: "Grundlage",
      science: "Wissenschaft",
      ethics: "Ethik",
      distinctions: "Abgrenzung",
      history: "Geschichte",
      documents: "Dokumente",
      data: "Daten",
      faq: "FAQ",
      glossary: "Glossar",
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
    mission: {
      label: "Unser Leitbild",
      statement: [
        { t: "Bildung für ein " },
        { t: "menschlicheres Miteinander", em: true },
        { t: " – getragen von Vernunft, Würde und Offenheit." },
      ],
      note: "Eine Einladung an alle, die mit offenem Geist nach Orientierung suchen – über Kulturen, Generationen und Überzeugungen hinweg.",
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
      center: "Der Mensch",
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
          example: "Beim Konsum bewusst auf Herkunft, Ressourcen und Arbeitsbedingungen achten.",
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
        { t: ".“" },
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
    science: {
      label: "Wissenschafts-1×1",
      heading: "Wie wir verlässlich Wissen gewinnen",
      intro:
        "Prinzip 2 konkret: Wissenschaft ist kein Glaube, sondern eine Methode, die sich selbst korrigiert.",
      items: [
        {
          title: "Hypothese & Test",
          text: "Eine Vermutung wird so formuliert, dass die Wirklichkeit sie widerlegen könnte – und dann geprüft.",
        },
        {
          title: "Falsifizierbarkeit",
          text: "Nur was widerlegbar ist, ist wissenschaftlich (Karl Popper). Was nichts ausschließt, erklärt nichts.",
        },
        {
          title: "Korrelation ≠ Kausalität",
          text: "Dass zwei Dinge gemeinsam auftreten, heißt nicht, dass eines das andere verursacht.",
        },
        {
          title: "Peer-Review",
          text: "Unabhängige Fachleute prüfen Methode und Ergebnisse, bevor etwas als gesichert gilt.",
        },
        {
          title: "Vorläufiger Konsens",
          text: "Wissen gilt, bis bessere Belege es korrigieren. Irrtum ist Teil des Fortschritts, nicht sein Gegenteil.",
        },
      ],
      source: "Nach Karl Popper, „Logik der Forschung“ (1934).",
    },
    ethics: {
      label: "Ethik",
      heading: "Woher kommen Werte ohne Gott?",
      intro: "Moral braucht keine übernatürliche Quelle – sie lässt sich begründen.",
      items: [
        {
          title: "Empathie & Evolution",
          text: "Kooperation und Mitgefühl sind tief in sozialen Lebewesen verankert – Moral hat eine natürliche Wurzel.",
        },
        {
          title: "Gesellschaftsvertrag",
          text: "Regeln gelten, weil sie das Zusammenleben für alle besser machen, nicht weil sie befohlen werden.",
        },
        {
          title: "Wohlergehen als Maßstab",
          text: "Gut ist, was Leid mindert und Aufblühen ermöglicht – beurteilt an den realen Folgen für fühlende Wesen.",
        },
      ],
      source: "Im Anschluss an Peter Singer und Sam Harris, „The Moral Landscape“ (2010).",
    },
    distinctions: {
      label: "Abgrenzung",
      heading: "Was Humanismus nicht ist",
      intro: "Vier häufige Verwechslungen – und warum sie danebenliegen.",
      affirmLabel: "Humanismus ist",
      affirmText:
        "eine positive Lebenshaltung mit eigenen Werten – getragen von Vernunft, Würde und Verantwortung.",
      items: [
        {
          title: "Atheismus",
          text: "ist allein die Verneinung eines Gottesglaubens. Humanismus fügt eine positive Werteordnung hinzu.",
        },
        {
          title: "Säkularismus",
          text: "ist ein politisches Prinzip – die Trennung von Staat und Religion –, keine umfassende Lebenshaltung.",
        },
        {
          title: "Nihilismus",
          text: "bestreitet jeden Sinn. Humanismus findet Sinn im Diesseits: in Beziehungen, Wissen und Wirken.",
        },
        {
          title: "Antitheismus",
          text: "bekämpft Religion aktiv. Humanismus verteidigt Glaubensfreiheit – auch die der Gläubigen.",
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
          year: "~500 v. Chr.",
          title: "Konfuzius (China)",
          text: "Ethik des Mitmenschlichen (rén): rechtes Handeln gründet auf Menschlichkeit und Gegenseitigkeit, nicht auf göttlichem Gebot.",
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
          year: "1927",
          title: "Bertrand Russell",
          text: "„Warum ich kein Christ bin“ macht skeptisches, vernunftgeleitetes Denken zu einer öffentlichen Haltung.",
        },
        {
          year: "1933",
          title: "Humanist Manifesto I",
          text: "John Dewey und andere formulieren den modernen, säkularen Humanismus erstmals programmatisch.",
        },
        {
          year: "1948",
          title: "Allgemeine Erklärung der Menschenrechte",
          text: "Die UN verankern universelle Würde und Rechte – ein humanistischer Meilenstein.",
        },
      ],
    },
    documents: {
      label: "Schlüsseldokumente",
      heading: "Worauf der Humanismus sich beruft",
      intro: "Programmatische Texte – verlinkt zum Original.",
      items: [
        { desc: "Erste programmatische Erklärung des säkularen Humanismus." },
        { desc: "Antwort auf Krieg und Krisen – Menschenrechte und globale Ethik." },
        { desc: "„Humanism and Its Aspirations“ – die heutige Kurzfassung." },
        { desc: "Offizielle Grundsatzerklärung der weltweiten humanistischen Bewegung." },
        { desc: "Universelle Würde und Rechte – ein humanistischer Meilenstein." },
      ],
    },
    data: {
      label: "Daten & Fakten",
      heading: "Ein Blick auf die Zahlen",
      intro:
        "Wie viele Menschen verstehen sich als religiös ungebunden? Die Anteile unterscheiden sich stark zwischen Ländern.",
      chartCaption: "Anteil religiös ungebundener Menschen",
      chooseYear: "Jahr wählen",
      changeLabel: "seit 2010",
      worldNote:
        "Weltweit sind rund 1,9 Mrd. Menschen (~24 %) religiös ungebunden – nach Christen und Muslimen die drittgrößte Gruppe. Zwischen 2010 und 2020 wuchs der Anteil vor allem durch Konfessionswechsel in Nordamerika (+13 Pp.) und Europa.",
      chartSource:
        "Quelle: Pew Research Center, „How the Global Religious Landscape Changed, 2010–2020“ (Juni 2025). Der China-Wert beruht auf einer neuen Methodik (CGSS 2018) und liegt daher höher als in Pew-Berichten vor 2025.",
      unit: "%",
      regions: ["China", "Tschechien", "Niederlande", "Deutschland", "USA", "Welt"],
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
    quiz: {
      label: "Mitmachen",
      heading: "Erkenne den Denkfehler",
      intro: "Vier Aussagen, vier typische Denkfehler. Welcher steckt jeweils dahinter?",
      questionLabel: "Frage",
      next: "Weiter",
      restart: "Nochmal",
      resultLabel: "richtig",
      items: [
        {
          statement: "„Was weiß die schon über Klimapolitik – sie fährt doch selbst einen SUV.“",
          options: ["Ad hominem", "Strohmann", "Falsches Dilemma"],
          correct: 0,
          explanation:
            "Angegriffen wird die Person, nicht ihr Argument. Ob sie einen SUV fährt, sagt nichts über die Richtigkeit ihrer Aussage.",
        },
        {
          statement:
            "„Entweder du bist für das Gesetz – oder dir ist die Sicherheit der Bürger egal.“",
          options: ["Ad hominem", "Falsches Dilemma", "Zirkelschluss"],
          correct: 1,
          explanation:
            "Es werden nur zwei Möglichkeiten vorgegaukelt, obwohl es viele Positionen dazwischen gibt.",
        },
        {
          statement:
            "„Seit es mehr Bio-Läden gibt, steigen auch die Allergien. Bio macht also krank.“",
          options: ["Strohmann", "Autoritätsargument", "Scheinkausalität"],
          correct: 2,
          explanation:
            "Zwei Dinge treten gleichzeitig auf – das beweist keinen ursächlichen Zusammenhang. Korrelation ≠ Kausalität.",
        },
        {
          statement:
            "„Humanist:innen wollen die Religion abschaffen? Dann seid ihr also gegen jede Tradition!“",
          options: ["Ad hominem", "Strohmann", "Falsches Dilemma"],
          correct: 1,
          explanation:
            "Die Gegenposition wird verzerrt überzeichnet, um sie leichter angreifen zu können – ein Strohmann.",
        },
      ],
    },
    glossary: {
      label: "Glossar",
      heading: "Begriffe kurz erklärt",
      intro: "Eine kleine Landkarte der wichtigsten Wörter.",
      items: [
        { term: "Säkular", def: "Weltlich; unabhängig von Religion und Kirche." },
        { term: "Empirie", def: "Erkenntnis, die auf Beobachtung und Erfahrung beruht." },
        {
          term: "Falsifizierbarkeit",
          def: "Die Eigenschaft einer Aussage, durch Beobachtung widerlegbar zu sein.",
        },
        {
          term: "Agnostizismus",
          def: "Die Haltung, dass sich die Existenz von Göttern nicht wissen lässt.",
        },
        {
          term: "Naturalismus",
          def: "Die Annahme, dass alle Vorgänge natürliche Ursachen haben.",
        },
        {
          term: "Aufklärung",
          def: "Geistesströmung des 18. Jh., die Vernunft und Mündigkeit betont.",
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
      referenceLabel: "Nachschlagen",
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
      sourceLabel: "Quelle",
      skipToContent: "Zum Inhalt springen",
    },
    legal: {
      impressumLabel: "Impressum",
      privacyLabel: "Datenschutz",
      disclaimer:
        "Vorlage ohne Gewähr – ersetzt keine Rechtsberatung. Bitte die Platzhalter in eckigen Klammern mit deinen Angaben ersetzen und vor Veröffentlichung prüfen lassen.",
      impressum: {
        heading: "Impressum",
        blocks: [
          {
            title: "Angaben gemäß § 5 DDG",
            lines: ["Daniel Buttadauro", "[Straße und Hausnummer]", "[PLZ und Ort]"],
          },
          { title: "Kontakt", lines: ["Über das Kontaktformular auf dieser Seite."] },
          {
            title: "Verantwortlich nach § 18 Abs. 2 MStV",
            lines: ["Daniel Buttadauro", "[Anschrift wie oben]"],
          },
        ],
      },
      privacy: {
        heading: "Datenschutzerklärung",
        blocks: [
          {
            title: "Verantwortlicher",
            body: "Verantwortlich für die Datenverarbeitung ist die im Impressum genannte Person.",
          },
          {
            title: "Hosting",
            body: "Diese Website wird bei [Hosting-Anbieter] gehostet. Beim Aufruf verarbeitet der Anbieter technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt) in Server-Logfiles auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
          },
          {
            title: "Schriftarten",
            body: "Die Seite lädt Schriftarten von Google-Servern (Google Fonts); dabei wird deine IP-Adresse an Google übertragen. Für volle DSGVO-Konformität empfiehlt sich, die Schriften lokal zu hosten.",
          },
          {
            title: "Lokale Speicherung",
            body: "Sprache und Farbschema werden ausschließlich lokal in deinem Browser gespeichert (localStorage). Es werden keine Cookies gesetzt, und es findet kein Tracking und keine Analyse statt.",
          },
          {
            title: "Kontaktformular",
            body: "Nutzt du das Kontaktformular, werden die eingegebenen Daten (Name, E-Mail, Nachricht) zur Bearbeitung deiner Anfrage verarbeitet (Art. 6 Abs. 1 lit. a und b DSGVO). Der Versand erfolgt über den Dienstleister Web3Forms; die Daten werden nicht für Werbung genutzt.",
          },
          {
            title: "Deine Rechte",
            body: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.",
          },
        ],
      },
    },
    contact: {
      label: "Kontakt",
      heading: "Schreib uns",
      intro: "Fragen, Anregungen oder Feedback? Nutze das Formular – wir melden uns.",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      consent:
        "Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.",
      submit: "Senden",
      sending: "Wird gesendet…",
      success: "Danke! Deine Nachricht wurde gesendet.",
      error: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
      notConfigured: "Kontaktformular noch nicht aktiviert (Zugangs-Schlüssel fehlt).",
    },
  },

  en: {
    meta: {
      title: "Secular Humanism – Humanity through Reason",
      description: "A worldview based on human dignity, science, critical thinking and compassion.",
    },
    nav: {
      idea: "Idea",
      principles: "Principles",
      foundation: "Foundation",
      science: "Science",
      ethics: "Ethics",
      distinctions: "Distinctions",
      history: "History",
      documents: "Documents",
      data: "Data",
      faq: "FAQ",
      glossary: "Glossary",
    },
    hero: {
      badge: "An introduction to a modern worldview",
      title: [
        { t: "Secular Humanism – " },
        { t: "Humanity", em: true },
        { t: " through Reason and Responsibility" },
      ],
      subtitle: "A worldview based on human dignity, science, critical thinking and compassion.",
      ctaPrimary: "Explore the principles",
      ctaSecondary: "Learn more",
    },
    mission: {
      label: "Our mission",
      statement: [
        { t: "Education for a " },
        { t: "more humane togetherness", em: true },
        { t: " – grounded in reason, dignity and openness." },
      ],
      note: "An invitation to everyone seeking orientation with an open mind – across cultures, generations and convictions.",
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
      center: "The human",
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
    science: {
      label: "Science 101",
      heading: "How we gain reliable knowledge",
      intro: "Principle 2 in practice: science is not a belief but a self-correcting method.",
      items: [
        {
          title: "Hypothesis & test",
          text: "A conjecture is framed so that reality could refute it – and then tested.",
        },
        {
          title: "Falsifiability",
          text: "Only what can be refuted is scientific (Karl Popper). What excludes nothing explains nothing.",
        },
        {
          title: "Correlation ≠ causation",
          text: "Two things occurring together does not mean one causes the other.",
        },
        {
          title: "Peer review",
          text: "Independent experts check method and results before anything counts as established.",
        },
        {
          title: "Provisional consensus",
          text: "Knowledge holds until better evidence corrects it. Error is part of progress, not its opposite.",
        },
      ],
      source: "After Karl Popper, “The Logic of Scientific Discovery” (1934).",
    },
    ethics: {
      label: "Ethics",
      heading: "Where do values come from without a god?",
      intro: "Morality needs no supernatural source – it can be justified.",
      items: [
        {
          title: "Empathy & evolution",
          text: "Cooperation and compassion are deeply rooted in social beings – morality has a natural origin.",
        },
        {
          title: "Social contract",
          text: "Rules hold because they make living together better for all, not because they are commanded.",
        },
        {
          title: "Well-being as the measure",
          text: "Good is what reduces suffering and enables flourishing – judged by real consequences for sentient beings.",
        },
      ],
      source: "Following Peter Singer and Sam Harris, “The Moral Landscape” (2010).",
    },
    distinctions: {
      label: "Distinctions",
      heading: "What humanism is not",
      intro: "Four common mix-ups – and why they miss the point.",
      affirmLabel: "Humanism is",
      affirmText:
        "a positive stance on life with its own values – carried by reason, dignity and responsibility.",
      items: [
        {
          title: "Atheism",
          text: "is merely the denial of belief in a god. Humanism adds a positive framework of values.",
        },
        {
          title: "Secularism",
          text: "is a political principle – the separation of state and religion – not a whole way of life.",
        },
        {
          title: "Nihilism",
          text: "denies all meaning. Humanism finds meaning in this world: in relationships, knowledge and action.",
        },
        {
          title: "Anti-theism",
          text: "actively fights religion. Humanism defends freedom of belief – including that of believers.",
        },
      ],
    },
    history: {
      label: "History of Ideas",
      heading: "A long line of thought",
      intro: "Humanist ideas are not a modern invention – they run across cultures and millennia.",
      items: [
        {
          year: "~600 BCE",
          title: "Charvaka (India)",
          text: "An early materialist school deriving knowledge from perception rather than revelation.",
        },
        {
          year: "~500 BCE",
          title: "Confucius (China)",
          text: "An ethic of humaneness (rén): right conduct rests on humanity and reciprocity, not on divine command.",
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
          year: "1927",
          title: "Bertrand Russell",
          text: "“Why I Am Not a Christian” turns sceptical, reason-led thinking into a public stance.",
        },
        {
          year: "1933",
          title: "Humanist Manifesto I",
          text: "John Dewey and others give modern secular humanism its first programmatic form.",
        },
        {
          year: "1948",
          title: "Universal Declaration of Human Rights",
          text: "The UN enshrine universal dignity and rights – a humanist milestone.",
        },
      ],
    },
    documents: {
      label: "Key Documents",
      heading: "What humanism appeals to",
      intro: "Programmatic texts – linked to the originals.",
      items: [
        { desc: "The first programmatic declaration of secular humanism." },
        { desc: "A response to war and crisis – human rights and a global ethic." },
        { desc: "“Humanism and Its Aspirations” – today's concise statement." },
        { desc: "The official statement of principles of the worldwide humanist movement." },
        { desc: "Universal dignity and rights – a humanist milestone." },
      ],
    },
    data: {
      label: "Data & Facts",
      heading: "A look at the numbers",
      intro:
        "How many people identify as religiously unaffiliated? The shares vary widely between countries.",
      chartCaption: "Share of religiously unaffiliated people",
      chooseYear: "Choose year",
      changeLabel: "since 2010",
      worldNote:
        "Worldwide, around 1.9 billion people (~24%) are religiously unaffiliated – the third-largest group after Christians and Muslims. Between 2010 and 2020 the share grew mainly through religious switching in North America (+13 pts) and Europe.",
      chartSource:
        "Source: Pew Research Center, “How the Global Religious Landscape Changed, 2010–2020” (June 2025). The figure for China uses a new methodology (CGSS 2018) and is therefore higher than in Pew reports before 2025.",
      unit: "%",
      regions: ["China", "Czechia", "Netherlands", "Germany", "USA", "World"],
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
    quiz: {
      label: "Join in",
      heading: "Spot the fallacy",
      intro: "Four statements, four classic reasoning errors. Which one is at work each time?",
      questionLabel: "Question",
      next: "Next",
      restart: "Again",
      resultLabel: "correct",
      items: [
        {
          statement: "“What would she know about climate policy – she drives an SUV herself.”",
          options: ["Ad hominem", "Straw man", "False dilemma"],
          correct: 0,
          explanation:
            "The person is attacked, not their argument. Driving an SUV says nothing about whether their claim is true.",
        },
        {
          statement: "“Either you support the law – or you don't care about citizens' safety.”",
          options: ["Ad hominem", "False dilemma", "Circular reasoning"],
          correct: 1,
          explanation: "Only two options are presented, though many positions exist in between.",
        },
        {
          statement:
            "“Since organic shops became common, allergies have risen too. So organic food makes you ill.”",
          options: ["Straw man", "Appeal to authority", "False cause"],
          correct: 2,
          explanation:
            "Two things occur at the same time – that proves no causal link. Correlation ≠ causation.",
        },
        {
          statement: "“Humanists want to abolish religion? So you're against all tradition!”",
          options: ["Ad hominem", "Straw man", "False dilemma"],
          correct: 1,
          explanation:
            "The opposing view is distorted and exaggerated to make it easier to attack – a straw man.",
        },
      ],
    },
    glossary: {
      label: "Glossary",
      heading: "Key terms in brief",
      intro: "A small map of the most important words.",
      items: [
        { term: "Secular", def: "Worldly; independent of religion and church." },
        { term: "Empiricism", def: "Knowledge based on observation and experience." },
        {
          term: "Falsifiability",
          def: "The property of a statement of being refutable by observation.",
        },
        {
          term: "Agnosticism",
          def: "The view that the existence of gods cannot be known.",
        },
        {
          term: "Naturalism",
          def: "The assumption that all events have natural causes.",
        },
        {
          term: "Enlightenment",
          def: "An 18th-century movement emphasising reason and autonomy.",
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
      tagline: "An invitation to view the world with open eyes, a clear mind and a warm heart.",
      topicsLabel: "Topics",
      referenceLabel: "Reference",
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
      sourceLabel: "Source",
      skipToContent: "Skip to content",
    },
    legal: {
      impressumLabel: "Imprint",
      privacyLabel: "Privacy",
      disclaimer:
        "Template without warranty – not legal advice. Please replace the bracketed placeholders with your details and have it reviewed before publishing.",
      impressum: {
        heading: "Imprint",
        blocks: [
          {
            title: "Information pursuant to § 5 DDG (German law)",
            lines: ["Daniel Buttadauro", "[Street and number]", "[Postal code and city]"],
          },
          { title: "Contact", lines: ["Via the contact form on this page."] },
          {
            title: "Responsible per § 18 (2) MStV",
            lines: ["Daniel Buttadauro", "[Address as above]"],
          },
        ],
      },
      privacy: {
        heading: "Privacy Policy",
        blocks: [
          {
            title: "Controller",
            body: "The person named in the imprint is responsible for data processing.",
          },
          {
            title: "Hosting",
            body: "This website is hosted by [hosting provider]. On access, the provider processes technically necessary access data (e.g. IP address, timestamp) in server log files under Art. 6(1)(f) GDPR.",
          },
          {
            title: "Fonts",
            body: "The site loads fonts from Google servers (Google Fonts); your IP address is transmitted to Google. For full GDPR compliance, hosting the fonts locally is recommended.",
          },
          {
            title: "Local storage",
            body: "Language and colour scheme are stored solely in your browser (localStorage). No cookies are set, and no tracking or analytics take place.",
          },
          {
            title: "Contact form",
            body: "If you use the contact form, the data you enter (name, email, message) is processed to handle your request (Art. 6(1)(a) and (b) GDPR). Submission is handled by the provider Web3Forms; the data is not used for advertising.",
          },
          {
            title: "Your rights",
            body: "You have the right to access, rectification, erasure, restriction of processing, data portability and objection, as well as to lodge a complaint with a supervisory authority.",
          },
        ],
      },
    },
    contact: {
      label: "Contact",
      heading: "Get in touch",
      intro: "Questions, ideas or feedback? Use the form – we'll get back to you.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      consent: "I agree to my data being processed to handle my request.",
      submit: "Send",
      sending: "Sending…",
      success: "Thank you! Your message has been sent.",
      error: "Sending failed. Please try again later.",
      notConfigured: "Contact form not yet active (access key missing).",
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
      foundation: "Fondamento",
      science: "Scienza",
      ethics: "Etica",
      distinctions: "Distinzioni",
      history: "Storia",
      documents: "Documenti",
      data: "Dati",
      faq: "FAQ",
      glossary: "Glossario",
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
    mission: {
      label: "La nostra missione",
      statement: [
        { t: "Educazione per una " },
        { t: "convivenza più umana", em: true },
        { t: " – fondata su ragione, dignità e apertura." },
      ],
      note: "Un invito a chiunque cerchi orientamento con mente aperta – tra culture, generazioni e convinzioni.",
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
      center: "L'essere umano",
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
    science: {
      label: "ABC della scienza",
      heading: "Come otteniamo conoscenza affidabile",
      intro:
        "Il principio 2 in pratica: la scienza non è una fede, ma un metodo che si autocorregge.",
      items: [
        {
          title: "Ipotesi e verifica",
          text: "Una congettura è formulata in modo che la realtà possa smentirla – e poi viene verificata.",
        },
        {
          title: "Falsificabilità",
          text: "È scientifico solo ciò che è confutabile (Karl Popper). Ciò che non esclude nulla non spiega nulla.",
        },
        {
          title: "Correlazione ≠ causalità",
          text: "Che due cose si presentino insieme non significa che una causi l'altra.",
        },
        {
          title: "Revisione paritaria",
          text: "Esperti indipendenti verificano metodo e risultati prima che qualcosa sia considerato acquisito.",
        },
        {
          title: "Consenso provvisorio",
          text: "La conoscenza vale finché prove migliori non la correggono. L'errore fa parte del progresso, non il suo opposto.",
        },
      ],
      source: "Da Karl Popper, «Logica della scoperta scientifica» (1934).",
    },
    ethics: {
      label: "Etica",
      heading: "Da dove vengono i valori senza un dio?",
      intro: "La morale non ha bisogno di una fonte soprannaturale – può essere fondata.",
      items: [
        {
          title: "Empatia ed evoluzione",
          text: "Cooperazione e compassione sono profondamente radicate negli esseri sociali – la morale ha un'origine naturale.",
        },
        {
          title: "Contratto sociale",
          text: "Le regole valgono perché migliorano la convivenza per tutti, non perché sono imposte.",
        },
        {
          title: "Il benessere come metro",
          text: "È bene ciò che riduce la sofferenza e favorisce la fioritura – valutato dalle conseguenze reali per gli esseri senzienti.",
        },
      ],
      source: "Sulla scia di Peter Singer e Sam Harris, «The Moral Landscape» (2010).",
    },
    distinctions: {
      label: "Distinzioni",
      heading: "Cosa non è l'umanesimo",
      intro: "Quattro confusioni frequenti – e perché sbagliano bersaglio.",
      affirmLabel: "L'umanesimo è",
      affirmText:
        "un atteggiamento positivo verso la vita con valori propri – sostenuto da ragione, dignità e responsabilità.",
      items: [
        {
          title: "Ateismo",
          text: "è soltanto la negazione della fede in un dio. L'umanesimo aggiunge un ordine positivo di valori.",
        },
        {
          title: "Secolarismo",
          text: "è un principio politico – la separazione tra Stato e religione – non un'intera visione della vita.",
        },
        {
          title: "Nichilismo",
          text: "nega ogni senso. L'umanesimo trova senso in questo mondo: nelle relazioni, nella conoscenza e nell'agire.",
        },
        {
          title: "Antiteismo",
          text: "combatte attivamente la religione. L'umanesimo difende la libertà di credo – anche quella dei credenti.",
        },
      ],
    },
    history: {
      label: "Storia delle idee",
      heading: "Una lunga linea di pensiero",
      intro: "Le idee umaniste non sono un'invenzione moderna – attraversano culture e millenni.",
      items: [
        {
          year: "~600 a.C.",
          title: "Charvaka (India)",
          text: "Una prima scuola materialista che trae la conoscenza dalla percezione, non dalla rivelazione.",
        },
        {
          year: "~500 a.C.",
          title: "Confucio (Cina)",
          text: "Un'etica dell'umanità (rén): l'agire retto si fonda sull'umanità e la reciprocità, non sul comando divino.",
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
          year: "1927",
          title: "Bertrand Russell",
          text: "«Perché non sono cristiano» rende il pensiero scettico e guidato dalla ragione un atteggiamento pubblico.",
        },
        {
          year: "1933",
          title: "Humanist Manifesto I",
          text: "John Dewey e altri danno all'umanesimo laico moderno la sua prima forma programmatica.",
        },
        {
          year: "1948",
          title: "Dichiarazione universale dei diritti umani",
          text: "L'ONU sancisce dignità e diritti universali – una pietra miliare umanista.",
        },
      ],
    },
    documents: {
      label: "Documenti chiave",
      heading: "A cosa si richiama l'umanesimo",
      intro: "Testi programmatici – con link agli originali.",
      items: [
        { desc: "La prima dichiarazione programmatica dell'umanesimo laico." },
        { desc: "Una risposta a guerra e crisi – diritti umani ed etica globale." },
        { desc: "«Humanism and Its Aspirations» – la formulazione concisa di oggi." },
        { desc: "La dichiarazione ufficiale di principi del movimento umanista mondiale." },
        { desc: "Dignità e diritti universali – una pietra miliare umanista." },
      ],
    },
    data: {
      label: "Dati e fatti",
      heading: "Uno sguardo ai numeri",
      intro:
        "Quante persone si dichiarano senza affiliazione religiosa? Le quote variano molto tra i paesi.",
      chartCaption: "Quota di persone senza affiliazione religiosa",
      chooseYear: "Scegli l'anno",
      changeLabel: "dal 2010",
      worldNote:
        "Nel mondo circa 1,9 miliardi di persone (~24%) sono senza affiliazione religiosa – il terzo gruppo dopo cristiani e musulmani. Tra il 2010 e il 2020 la quota è cresciuta soprattutto per i cambi di religione in Nord America (+13 punti) ed Europa.",
      chartSource:
        "Fonte: Pew Research Center, «How the Global Religious Landscape Changed, 2010–2020» (giugno 2025). Il dato sulla Cina usa una nuova metodologia (CGSS 2018) ed è quindi più alto che nei rapporti Pew precedenti al 2025.",
      unit: "%",
      regions: ["Cina", "Cechia", "Paesi Bassi", "Germania", "USA", "Mondo"],
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
    quiz: {
      label: "Partecipa",
      heading: "Riconosci l'errore di ragionamento",
      intro: "Quattro affermazioni, quattro errori tipici. Quale si nasconde ogni volta?",
      questionLabel: "Domanda",
      next: "Avanti",
      restart: "Ricomincia",
      resultLabel: "corrette",
      items: [
        {
          statement: "«Che ne sa lei di politica climatica – guida lei stessa un SUV.»",
          options: ["Ad hominem", "Uomo di paglia", "Falso dilemma"],
          correct: 0,
          explanation:
            "Si attacca la persona, non il suo argomento. Guidare un SUV non dice nulla sulla verità dell'affermazione.",
        },
        {
          statement:
            "«O sei a favore della legge – o non t'importa della sicurezza dei cittadini.»",
          options: ["Ad hominem", "Falso dilemma", "Ragionamento circolare"],
          correct: 1,
          explanation:
            "Si presentano solo due opzioni, anche se esistono molte posizioni intermedie.",
        },
        {
          statement:
            "«Da quando ci sono più negozi bio, aumentano anche le allergie. Quindi il bio fa male.»",
          options: ["Uomo di paglia", "Argomento d'autorità", "Falsa causa"],
          correct: 2,
          explanation:
            "Due fenomeni si presentano insieme – ciò non prova un nesso causale. Correlazione ≠ causalità.",
        },
        {
          statement:
            "«Gli umanisti vogliono abolire la religione? Allora siete contro ogni tradizione!»",
          options: ["Ad hominem", "Uomo di paglia", "Falso dilemma"],
          correct: 1,
          explanation:
            "La posizione avversaria viene distorta ed esagerata per attaccarla più facilmente – un uomo di paglia.",
        },
      ],
    },
    glossary: {
      label: "Glossario",
      heading: "Termini in breve",
      intro: "Una piccola mappa delle parole più importanti.",
      items: [
        { term: "Laico / secolare", def: "Mondano; indipendente da religione e chiesa." },
        { term: "Empirismo", def: "Conoscenza basata su osservazione ed esperienza." },
        {
          term: "Falsificabilità",
          def: "La proprietà di un'affermazione di poter essere confutata dall'osservazione.",
        },
        {
          term: "Agnosticismo",
          def: "La posizione secondo cui l'esistenza degli dèi non può essere conosciuta.",
        },
        {
          term: "Naturalismo",
          def: "L'assunto che tutti i fenomeni abbiano cause naturali.",
        },
        {
          term: "Illuminismo",
          def: "Movimento del XVIII secolo che valorizza ragione e autonomia.",
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
      tagline: "Un invito a guardare il mondo con occhi aperti, mente lucida e cuore caldo.",
      topicsLabel: "Argomenti",
      referenceLabel: "Consultazione",
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
      sourceLabel: "Fonte",
      skipToContent: "Vai al contenuto",
    },
    legal: {
      impressumLabel: "Note legali",
      privacyLabel: "Privacy",
      disclaimer:
        "Modello senza garanzia – non costituisce consulenza legale. Sostituisci i segnaposto tra parentesi con i tuoi dati e fallo verificare prima della pubblicazione.",
      impressum: {
        heading: "Note legali",
        blocks: [
          {
            title: "Informazioni ai sensi del § 5 DDG (legge tedesca)",
            lines: ["Daniel Buttadauro", "[Via e numero civico]", "[CAP e città]"],
          },
          { title: "Contatto", lines: ["Tramite il modulo di contatto in questa pagina."] },
          {
            title: "Responsabile ai sensi del § 18 c. 2 MStV",
            lines: ["Daniel Buttadauro", "[Indirizzo come sopra]"],
          },
        ],
      },
      privacy: {
        heading: "Informativa sulla privacy",
        blocks: [
          {
            title: "Titolare",
            body: "Il trattamento dei dati è di competenza della persona indicata nelle note legali.",
          },
          {
            title: "Hosting",
            body: "Questo sito è ospitato da [provider di hosting]. All'accesso, il provider tratta dati tecnicamente necessari (es. indirizzo IP, orario) in file di log del server ai sensi dell'art. 6 par. 1 lett. f GDPR.",
          },
          {
            title: "Caratteri",
            body: "Il sito carica i caratteri dai server di Google (Google Fonts); il tuo indirizzo IP viene trasmesso a Google. Per piena conformità al GDPR si consiglia di ospitare i caratteri localmente.",
          },
          {
            title: "Memoria locale",
            body: "Lingua e combinazione di colori sono salvate solo nel tuo browser (localStorage). Non vengono impostati cookie e non avviene alcun tracciamento o analisi.",
          },
          {
            title: "Modulo di contatto",
            body: "Se usi il modulo di contatto, i dati inseriti (nome, e-mail, messaggio) sono trattati per gestire la tua richiesta (art. 6 par. 1 lett. a e b GDPR). L'invio avviene tramite il fornitore Web3Forms; i dati non sono usati per pubblicità.",
          },
          {
            title: "I tuoi diritti",
            body: "Hai diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione, nonché di reclamo a un'autorità di controllo.",
          },
        ],
      },
    },
    contact: {
      label: "Contatto",
      heading: "Scrivici",
      intro: "Domande, idee o feedback? Usa il modulo – ti risponderemo.",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      messageLabel: "Messaggio",
      consent: "Acconsento al trattamento dei miei dati per gestire la richiesta.",
      submit: "Invia",
      sending: "Invio in corso…",
      success: "Grazie! Il tuo messaggio è stato inviato.",
      error: "Invio non riuscito. Riprova più tardi.",
      notConfigured: "Modulo di contatto non ancora attivo (chiave di accesso mancante).",
    },
  },
};
