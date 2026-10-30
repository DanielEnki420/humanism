import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Menu, Moon, RotateCw, Sun, X } from "lucide-react";
import {
  LANGUAGES,
  LANGUAGE_LABELS,
  translations,
  type EthicsItem,
  type Lang,
  type Segment,
  type Translation,
} from "@/lib/i18n";
import { LogoMark } from "@/lib/brand";

const GITHUB_URL = "https://github.com/DanielEnki420/humanism";

// Anteil religiös Ungebundener je Land (Reihenfolge = data.regions), gerundet.
// Quelle: Pew Research Center, „How the Global Religious Landscape Changed, 2010–2020"
// (Juni 2025). China nach neuer Methodik (CGSS 2018).
const DATA_BY_YEAR: Record<2010 | 2020, number[]> = {
  2010: [87, 69, 46, 32, 17, 23],
  2020: [90, 73, 54, 36, 30, 24],
};
const DATA_YEARS = [2010, 2020] as const;

// Schlüsseldokumente: Name/Jahr/Link bleiben sprachunabhängig (Reihenfolge = documents.items).
const DOCUMENT_LINKS = [
  {
    name: "Humanist Manifesto I",
    year: "1933",
    url: "https://americanhumanist.org/what-is-humanism/manifesto1/",
  },
  {
    name: "Humanist Manifesto II",
    year: "1973",
    url: "https://americanhumanist.org/what-is-humanism/manifesto2/",
  },
  {
    name: "Humanist Manifesto III",
    year: "2003",
    url: "https://americanhumanist.org/what-is-humanism/humanist-manifesto-iii/",
  },
  {
    name: "Amsterdam Declaration",
    year: "1952 · rev. 2022",
    url: "https://humanists.international/what-is-humanism/the-amsterdam-declaration/",
  },
  {
    name: "Allgemeine Erklärung der Menschenrechte",
    year: "1948",
    url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
  },
];

// Quellen-Kacheln: Eigennamen & Links sprachunabhängig (Reihenfolge = sources.items).
const SOURCE_LINKS = [
  { name: "Humanists International", url: "https://humanists.international" },
  { name: "American Humanist Association", url: "https://americanhumanist.org" },
  { name: "Giordano-Bruno-Stiftung", url: "https://giordano-bruno-stiftung.de" },
  { name: "Pew Research Center", url: "https://www.pewresearch.org/religion/" },
  {
    name: "UN – Menschenrechte",
    url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
  },
];

// Einziges Domain-Stellrad: steuert canonical, og:url, og:image & hreflang.
// Bei eigener Domain hier (und nur hier) ändern.
const SITE_URL = "https://humanism.lovable.app";

// Kontaktformular läuft über Web3Forms (kostenlos, kein Konto).
// Zugangs-Schlüssel auf web3forms.com holen und hier eintragen:
const CONTACT_ACCESS_KEY = "7b90faea-d8bb-4b29-af97-3e67a714b8d1";

const LOCALIZED_META: Record<
  Lang,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
    image: string;
    imageAlt: string;
  }
> = {
  de: {
    title: "Säkularer Humanismus – eine Einführung",
    description:
      "Eine Einführung in den säkularen Humanismus: Prinzipien, Ethik ohne Gott, Ideengeschichte und Zahlen, mit geprüften Quellen.",
    ogTitle: "Säkularer Humanismus",
    ogDescription:
      "Eine Einführung in den säkularen Humanismus: Prinzipien, Ethik ohne Gott, Ideengeschichte und Zahlen, mit geprüften Quellen.",
    ogLocale: "de_DE",
    image: "/og-image-de.png",
    imageAlt: "Humanitas – Säkularer Humanismus: Vernunft, Wissenschaft, Mitgefühl",
  },
  en: {
    title: "Secular Humanism – An Introduction",
    description:
      "An introduction to secular humanism: principles, ethics without God, the history of ideas and the numbers, with checked sources.",
    ogTitle: "Secular Humanism",
    ogDescription:
      "An introduction to secular humanism: principles, ethics without God, the history of ideas and the numbers, with checked sources.",
    ogLocale: "en_US",
    image: "/og-image-en.png",
    imageAlt: "Humanitas – Secular Humanism: Reason, Science, Compassion",
  },
  it: {
    title: "Umanesimo laico – un'introduzione",
    description:
      "Un'introduzione all'umanesimo laico: principi, etica senza Dio, storia delle idee e numeri, con fonti verificate.",
    ogTitle: "Umanesimo Laico",
    ogDescription:
      "Un'introduzione all'umanesimo laico: principi, etica senza Dio, storia delle idee e numeri, con fonti verificate.",
    ogLocale: "it_IT",
    image: "/og-image-it.png",
    imageAlt: "Humanitas – Umanesimo Laico: Ragione, Scienza, Compassione",
  },
};

function isLang(value: unknown): value is Lang {
  return value === "de" || value === "en" || value === "it";
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    lang: isLang(search.lang) ? (search.lang as Lang) : undefined,
  }),
  loaderDeps: ({ search }) => ({ lang: search.lang ?? "de" }),
  loader: ({ deps }) => ({ lang: deps.lang as Lang }),
  head: ({ loaderData }) => {
    const lang: Lang = loaderData?.lang ?? "de";
    const m = LOCALIZED_META[lang];
    const url = lang === "de" ? SITE_URL + "/" : `${SITE_URL}/?lang=${lang}`;
    const imageAbs = SITE_URL + m.image;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.ogTitle },
        { property: "og:description", content: m.ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:locale", content: m.ogLocale },
        { property: "og:image", content: imageAbs },
        { property: "og:image:secure_url", content: imageAbs },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: m.imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: m.ogTitle },
        { name: "twitter:description", content: m.ogDescription },
        { name: "twitter:image", content: imageAbs },
        { name: "twitter:image:alt", content: m.imageAlt },
      ],
      links: [
        { rel: "canonical", href: url },
        ...LANGUAGES.map((l) => ({
          rel: "alternate",
          hrefLang: l,
          href: l === "de" ? `${SITE_URL}/` : `${SITE_URL}/?lang=${l}`,
        })),
        { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
      ],
    };
  },
  component: Index,
});

/** Rendert Textsegmente; hervorgehobene (`em`) Teile mit eigener Klasse. */
function RichText({ segments, em = "text-primary" }: { segments: Segment[]; em?: string }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.em ? (
          <span key={i} className={em}>
            {seg.t}
          </span>
        ) : (
          <span key={i}>{seg.t}</span>
        ),
      )}
    </>
  );
}

// Römische Kapitelziffern für Inhaltsverzeichnis & Randspalte.
const ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
];

// Lesetext in Listen/Spalten: Buchschrift, Vordergrundfarbe, etwas kleiner als der Haupttext.
const ITEM_TEXT = "mt-2 font-text text-[1.0625rem] leading-relaxed text-foreground/80";

/**
 * Ein Kapitel im Buch-Raster: links schmale Randspalte mit Ziffer & Kapitelname,
 * rechts Überschrift, Einleitung und Inhalt. Mobil stehen Ziffer & Name in einer Zeile darüber.
 */
function Chapter({
  id,
  num,
  label,
  heading,
  intro,
  children,
}: {
  id: string;
  num?: string;
  label: string;
  heading: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-4 px-6 py-16 sm:py-20 md:grid-cols-[9rem_minmax(0,1fr)]">
        <div className="flex items-baseline gap-3 md:block md:pt-2">
          {num && <p className="font-serif text-xl text-gold tabular-nums md:text-2xl">{num}</p>}
          <p className="text-sm text-muted-foreground md:mt-1">{label}</p>
        </div>
        <div className="min-w-0">
          <h2 className="max-w-[26ch] font-serif text-3xl font-medium leading-tight sm:text-[2.25rem]">
            {heading}
          </h2>
          {intro && <p className="prose-text mt-5 max-w-[62ch] text-foreground/85">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/** Zitat im Lesefluss: eingerückt, mit Haarlinie links und Namen darunter. */
function PullQuote({ text, author, source }: { text: string; author: string; source: string }) {
  return (
    <figure className="mt-14 max-w-[56ch] border-l border-foreground/25 pl-6">
      <blockquote className="font-text text-2xl italic leading-snug text-foreground">
        {text}
      </blockquote>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {author}, <cite className="not-italic">{source}</cite>
      </figcaption>
    </figure>
  );
}

/** Pixelmaße der Scans in public/faksimiles – verhindern Layoutsprünge beim Laden. */
const FACSIMILE_SIZES: Record<string, [number, number]> = {
  "/faksimiles/duerer-erasmus-1526.webp": [772, 1000],
  "/faksimiles/kant-aufklaerung-1784.webp": [808, 1096],
  "/faksimiles/darwin-origin-1859.webp": [634, 1100],
};

/** Gemeinfreier Scan als Beleg, selbst gehostet; im hellen Modus auf das Papier gedruckt. */
function Facsimile({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [width, height] = FACSIMILE_SIZES[src] ?? [];
  return (
    <figure className="mt-6 max-w-[15rem]">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full border border-border grayscale mix-blend-multiply dark:opacity-85 dark:mix-blend-normal"
      />
      <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

/** Unterabschnitt innerhalb eines Kapitels, mit eigenem Anker. */
function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24 border-t border-border pt-10">
      <h3 className="font-serif text-2xl font-medium">{title}</h3>
      {intro && <p className="prose-text mt-3 max-w-[62ch] text-foreground/85">{intro}</p>}
      {children}
    </section>
  );
}

/** Quellen-Fußnote unter einem Faktenblock, optional mit Weiterlesen-Link. */
function SourceNote({
  label,
  text,
  linkUrl,
  linkLabel,
}: {
  label: string;
  text: string;
  linkUrl?: string;
  linkLabel?: string;
}) {
  return (
    <p className="mt-10 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
      <span className="font-medium text-foreground/70">{label}:</span> {text}
      {linkUrl && (
        <>
          {" "}
          <a
            href={linkUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted underline-offset-2 hover:text-foreground"
          >
            {linkLabel} ↗
          </a>
        </>
      )}
    </p>
  );
}

/** Markenzeichen in Kopf- und Fußzeile: Logo „Mensch und Buch" (Pendant zur Favicon). */
function BrandMark() {
  return <LogoMark className="h-7 w-7 text-primary" strokeWidth={2.6} />;
}

// Sektions-IDs in Nav-Reihenfolge – auch für den Scroll-Spy.
const NAV_SECTION_IDS = [
  "was-ist",
  "prinzipien",
  "wissenschaft",
  "einwaende",
  "geschichte",
  "daten",
] as const;

/** Setzt/aktualisiert ein <meta name>-Tag im <head>. */
function setMetaTag(name: string, content: string) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function Index() {
  const [lang, setLang] = useState<Lang>("de");
  const [dark, setDark] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  // Nav-Einträge einmal ableiten – Desktop-Leiste & Mobile-Panel teilen dieselbe Liste.
  const navItems = [
    { id: "was-ist", label: t.nav.idea },
    { id: "prinzipien", label: t.nav.principles },
    { id: "wissenschaft", label: t.nav.science },
    { id: "einwaende", label: t.nav.objections },
    { id: "geschichte", label: t.nav.history },
    { id: "daten", label: t.nav.data },
  ];

  // Kapitel in Lesereihenfolge – Quelle für Inhaltsverzeichnis und Randziffern.
  const chapters = [
    { id: "was-ist", label: t.idea.label },
    { id: "prinzipien", label: t.principles.label },
    { id: "wissenschaft", label: t.science.label },
    { id: "ethik", label: t.ethics.label },
    { id: "abgrenzung", label: t.distinctions.label },
    { id: "streitpunkte", label: t.disputes.label },
    { id: "geschichte", label: t.history.label },
    { id: "daten", label: t.data.label },
    { id: "glossar", label: t.glossary.label },
    { id: "weiterlesen", label: t.reading.label },
    { id: "kontakt", label: t.contact.label },
  ];
  const num = (id: string) => ROMAN[chapters.findIndex((c) => c.id === id)];

  // Menü schließen, sobald der Viewport wieder Desktop-Breite erreicht.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Escape schließt das Mobile-Menü (Tastatur-Bedienbarkeit).
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Sprache aus ?lang oder localStorage übernehmen (vermeidet Hydration-Mismatch).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    const saved = localStorage.getItem("lang") as Lang | null;
    const initial =
      q && LANGUAGES.includes(q) ? q : saved && LANGUAGES.includes(saved) ? saved : "de";
    if (initial !== "de") setLang(initial);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Bei Sprachwechsel im Client <html lang>, Titel, Description & URL synchron halten.
  // canonical/og/hreflang kommen serverseitig aus head() (siehe Route oben).
  useEffect(() => {
    const tr = translations[lang];
    document.documentElement.lang = lang;
    document.title = tr.meta.title;
    setMetaTag("description", tr.meta.description);
    localStorage.setItem("lang", lang);
    const url = new URL(window.location.href);
    if (lang === "de") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
  }, [lang]);

  // Scroll-Spy: aktiven Abschnitt für die Navigation bestimmen.
  useEffect(() => {
    const els = NAV_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip-to-content – per Fokus eingeblendet, bleibt für Screenreader erreichbar */}
      <a
        href="#inhalt"
        className="fixed left-4 -top-20 z-[60] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all focus:top-4"
      >
        {t.ui.skipToContent}
      </a>

      {/* Kopfzeile */}
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 font-serif text-lg font-semibold tracking-tight sm:gap-2.5"
          >
            <BrandMark />
            <span>Humanitas</span>
          </a>
          <div className="flex items-center gap-4 lg:gap-7">
            <nav className="hidden gap-6 text-sm lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`underline underline-offset-[6px] transition-colors ${
                    activeId === item.id
                      ? "text-foreground decoration-foreground/60"
                      : "text-muted-foreground decoration-transparent hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Sprachumschalter */}
            <div
              className="flex items-center gap-2.5 text-xs"
              role="group"
              aria-label={t.ui.toggleLanguage}
            >
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={l === lang}
                  className={`underline underline-offset-4 transition-colors ${
                    l === lang
                      ? "font-semibold text-foreground decoration-foreground/60"
                      : "text-muted-foreground decoration-transparent hover:text-foreground"
                  }`}
                >
                  {LANGUAGE_LABELS[l]}
                </button>
              ))}
            </div>

            {/* Theme-Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.ui.toggleTheme}
              className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              {dark ? (
                <Sun className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>

            {/* Mobile-Menü-Button (nur unter lg sichtbar) */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t.ui.menuClose : t.ui.menuOpen}
              className="inline-flex h-8 w-8 items-center justify-center text-foreground lg:hidden"
            >
              {menuOpen ? (
                <X className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile-Nav-Panel: das Inhaltsverzeichnis */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="max-h-[70vh] overflow-y-auto border-t border-border bg-background lg:hidden"
            aria-label={t.ui.navLabel}
          >
            <ol className="mx-auto flex max-w-6xl flex-col px-6 py-3">
              {chapters.map((c, i) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-3 py-2 text-foreground"
                  >
                    <span className="w-8 shrink-0 font-serif text-sm text-gold tabular-nums">
                      {ROMAN[i]}
                    </span>
                    <span className="font-text text-base">{c.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </header>

      <main id="inhalt">
        {/* Titelseite */}
        <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-24">
          <div className="md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-12">
            <div aria-hidden className="hidden md:block" />
            <div>
              <p className="text-sm text-muted-foreground">{t.hero.badge}</p>
              <h1 className="mt-5 max-w-[17ch] font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                <RichText segments={t.hero.title} em="" />
              </h1>
              <p className="prose-text mt-8 max-w-[48ch] text-[1.3rem] text-foreground/85">
                {t.hero.subtitle}
              </p>
              <p className="mt-8 text-sm text-muted-foreground">{t.hero.byline}</p>
            </div>
          </div>

          <nav
            aria-label={t.ui.contents}
            className="mt-16 border-t border-border pt-8 md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-12"
          >
            <p className="mb-5 text-sm text-muted-foreground md:pt-1">{t.ui.contents}</p>
            <ol className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((c, i) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="group flex items-baseline gap-3 py-1.5">
                    <span className="w-8 shrink-0 font-serif text-sm text-gold tabular-nums">
                      {ROMAN[i]}
                    </span>
                    <span className="font-text text-lg decoration-foreground/40 underline-offset-4 group-hover:underline">
                      {c.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        {/* Die Idee */}
        <Chapter id="was-ist" num={num("was-ist")} label={t.idea.label} heading={t.idea.heading}>
          <div className="prose-text mt-6 max-w-[62ch]">
            <p className="text-[1.3rem] leading-relaxed">
              <RichText segments={t.idea.lead} em="" />
            </p>
            <p className="text-foreground/85">{t.idea.body}</p>
            {t.foundation.cards.map((b) => (
              <p key={b.k} className="text-foreground/85">
                <span className="font-semibold text-foreground">{b.k}.</span> {b.v}
              </p>
            ))}
          </div>
          <PullQuote {...t.quotes[0]} />
        </Chapter>

        {/* Prinzipien */}
        <Chapter
          id="prinzipien"
          num={num("prinzipien")}
          label={t.principles.label}
          heading={t.principles.heading}
          intro={t.principles.intro}
        >
          <ol className="mt-10 max-w-[62ch] space-y-10">
            {t.principles.items.map((p, i) => (
              <li key={p.title} id={`principle-${i}`} className="scroll-mt-24">
                <h3 className="font-serif text-xl font-medium">
                  <span className="tabular-nums text-muted-foreground">{i + 1}.</span> {p.title}
                </h3>
                <p className="prose-text mt-2">{p.text}</p>
              </li>
            ))}
          </ol>
        </Chapter>

        {/* Wissenschaft */}
        <Chapter
          id="wissenschaft"
          num={num("wissenschaft")}
          label={t.science.label}
          heading={t.science.heading}
          intro={t.science.intro}
        >
          <ol className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {t.science.items.map((item, i) => (
              <li
                key={item.title}
                id={`science-${i}`}
                className="scroll-mt-24 border-t border-border pt-4"
              >
                <h3 className="font-serif text-xl font-medium">
                  <span className="mr-2 text-muted-foreground tabular-nums">{i + 1}.</span>
                  {item.title}
                </h3>
                <p className={ITEM_TEXT}>{item.text}</p>
              </li>
            ))}
          </ol>
          <SourceNote label={t.ui.sourceLabel} text={t.science.source} />
          <Section id="quiz" title={t.quiz.heading} intro={t.quiz.intro}>
            <FallacyQuiz quiz={t.quiz} />
          </Section>
          <PullQuote {...t.quotes[1]} />
        </Chapter>

        {/* Ethik */}
        <Chapter
          id="ethik"
          num={num("ethik")}
          label={t.ethics.label}
          heading={t.ethics.heading}
          intro={t.ethics.intro}
        >
          <div className="mt-10 max-w-[62ch] space-y-10">
            {t.ethics.items.map((item: EthicsItem, i: number) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl font-medium">
                  <span className="mr-2 text-muted-foreground tabular-nums">{i + 1}.</span>
                  {item.title}
                </h3>
                <p className="prose-text mt-2">{item.text}</p>
                <p className="mt-3 border-l border-foreground/25 pl-4 font-text text-base italic leading-relaxed text-foreground/75">
                  {item.example}
                </p>
              </div>
            ))}
          </div>
          <SourceNote
            label={t.ui.sourceLabel}
            text={t.ethics.source}
            linkUrl={SOURCE_LINKS[2].url}
            linkLabel={t.ui.sourceLinkLabel}
          />
        </Chapter>

        {/* Abgrenzung */}
        <Chapter
          id="abgrenzung"
          num={num("abgrenzung")}
          label={t.distinctions.label}
          heading={t.distinctions.heading}
          intro={t.distinctions.intro}
        >
          <p className="prose-text mt-8 max-w-[62ch] border-l border-foreground/25 pl-6">
            <span className="font-semibold">{t.distinctions.affirmLabel}:</span>{" "}
            {t.distinctions.affirmText}
          </p>
          <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {t.distinctions.items.map((item) => (
              <div key={item.title} className="border-t border-border pt-4">
                <dt className="font-serif text-xl font-medium">
                  <span aria-hidden className="mr-2 text-muted-foreground">
                    ≠
                  </span>
                  {item.title}
                </dt>
                <dd className={ITEM_TEXT}>{item.text}</dd>
              </div>
            ))}
          </dl>
        </Chapter>

        {/* Was strittig ist */}
        <Chapter
          id="streitpunkte"
          num={num("streitpunkte")}
          label={t.disputes.label}
          heading={t.disputes.heading}
          intro={t.disputes.intro}
        >
          <div className="mt-10 max-w-[62ch] space-y-10">
            {t.disputes.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                <p className="prose-text mt-2">{item.text}</p>
              </div>
            ))}
          </div>
          {/* Früherer Anker der FAQ, damit alte Links weiter funktionieren. */}
          <span id="faq" className="block scroll-mt-24" aria-hidden="true" />
          <Section id="einwaende" title={t.objections.heading} intro={t.objections.intro}>
            <div className="mt-10 max-w-[62ch] space-y-10">
              {t.objections.items.map((item) => (
                <div key={item.claim}>
                  <h4 className="font-serif text-xl font-medium italic">{item.claim}</h4>
                  <p className="prose-text mt-2">{item.answer}</p>
                  {item.source && (
                    <p className="mt-2 text-sm text-muted-foreground">{item.source}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>
          <PullQuote {...t.quotes[2]} />
        </Chapter>

        {/* Geschichte / Zeittafel */}
        <Chapter
          id="geschichte"
          num={num("geschichte")}
          label={t.history.label}
          heading={t.history.heading}
          intro={t.history.intro}
        >
          <ol className="mt-10 max-w-[70ch] border-b border-border">
            {t.history.items.map((item) => (
              <li
                key={item.title}
                className="grid gap-x-6 border-t border-border py-5 sm:grid-cols-[8rem_minmax(0,1fr)]"
              >
                <p className="font-serif text-base text-muted-foreground tabular-nums sm:pt-0.5">
                  {item.year}
                </p>
                <div>
                  <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                  <p className={ITEM_TEXT}>{item.text}</p>
                  {item.figure && <Facsimile {...item.figure} />}
                </div>
              </li>
            ))}
          </ol>
          <Section id="dokumente" title={t.documents.heading} intro={t.documents.intro}>
            <ul className="mt-10 max-w-[70ch] border-b border-border">
              {t.documents.items.map((item, i) => (
                <li
                  key={DOCUMENT_LINKS[i].name}
                  className="grid gap-x-6 border-t border-border py-5 sm:grid-cols-[8rem_minmax(0,1fr)]"
                >
                  <p className="font-serif text-base text-muted-foreground tabular-nums sm:pt-0.5">
                    {DOCUMENT_LINKS[i].year}
                  </p>
                  <div>
                    <a
                      href={DOCUMENT_LINKS[i].url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-serif text-xl font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      {item.name ?? DOCUMENT_LINKS[i].name} ↗
                    </a>
                    <p className={ITEM_TEXT}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        </Chapter>

        {/* Daten & Fakten */}
        <Chapter
          id="daten"
          num={num("daten")}
          label={t.data.label}
          heading={t.data.heading}
          intro={t.data.intro}
        >
          <p className="prose-text mt-5 max-w-[62ch] text-foreground/85">{t.data.worldNote}</p>
          <div className="mt-10 max-w-3xl">
            <DataChart
              regions={t.data.regions}
              caption={t.data.chartCaption}
              source={t.data.chartSource}
              chooseYear={t.data.chooseYear}
              changeLabel={t.data.changeLabel}
              unit={t.data.unit}
            />
          </div>
        </Chapter>

        {/* Glossar */}
        <Chapter
          id="glossar"
          num={num("glossar")}
          label={t.glossary.label}
          heading={t.glossary.heading}
          intro={t.glossary.intro}
        >
          <dl className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {t.glossary.items.map((item) => (
              <div key={item.term} className="border-t border-border pt-4">
                <dt className="font-serif text-lg font-medium">{item.term}</dt>
                <dd className={ITEM_TEXT}>{item.def}</dd>
              </div>
            ))}
          </dl>
        </Chapter>

        {/* Weiterlesen */}
        <Chapter
          id="weiterlesen"
          num={num("weiterlesen")}
          label={t.reading.label}
          heading={t.reading.heading}
          intro={t.reading.intro}
        >
          <ul className="mt-10 max-w-[70ch] border-b border-border">
            {t.reading.items.map((b) => (
              <li key={b.author + b.title} className="border-t border-border py-5">
                <p className="font-text text-lg leading-snug">
                  {b.author}: <cite className="font-medium">{b.title}</cite> ({b.year})
                </p>
                <p className={ITEM_TEXT}>{b.note}</p>
              </li>
            ))}
          </ul>
          <Section id="quellen" title={t.sources.heading} intro={t.sources.intro}>
            <ul className="mt-10 max-w-[70ch] border-b border-border">
              {t.sources.items.map((item, i) => (
                <li key={SOURCE_LINKS[i].name} className="border-t border-border py-5">
                  <a
                    href={SOURCE_LINKS[i].url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-xl font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                  >
                    {item.name ?? SOURCE_LINKS[i].name} ↗
                  </a>
                  <p className={ITEM_TEXT}>{item.desc}</p>
                </li>
              ))}
            </ul>
          </Section>
        </Chapter>

        {/* Kontakt */}
        <Chapter
          id="kontakt"
          num={num("kontakt")}
          label={t.contact.label}
          heading={t.contact.heading}
          intro={t.contact.intro}
        >
          <ContactForm c={t.contact} />
        </Chapter>

        {/* Impressum */}
        <Chapter id="impressum" label={t.legal.impressumLabel} heading={t.legal.impressum.heading}>
          <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
            {t.legal.disclaimer}
          </p>
          <div className="mt-8 space-y-6">
            {t.legal.impressum.blocks.map((b) => (
              <div key={b.title}>
                <p className="text-sm font-medium text-foreground">{b.title}</p>
                {b.lines.map((line) => (
                  <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Chapter>

        {/* Datenschutz */}
        <Chapter id="datenschutz" label={t.legal.privacyLabel} heading={t.legal.privacy.heading}>
          <p className="mt-2 text-xs text-muted-foreground">{t.legal.privacy.updated}</p>
          <div className="mt-8 max-w-[70ch] space-y-6">
            {t.legal.privacy.blocks.map((b) => (
              <div key={b.title}>
                <p className="text-sm font-medium text-foreground">{b.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </Chapter>
      </main>

      {/* Kolophon */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-6 px-6 py-14 md:grid-cols-[9rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight md:items-start">
            <BrandMark />
            Humanitas
          </div>
          <div className="max-w-[62ch]">
            <p className="text-sm text-muted-foreground">{t.footer.colophonLabel}</p>
            <p className="mt-2 font-text text-base leading-relaxed text-foreground/80">
              {t.footer.colophon}
            </p>
            <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Humanitas</span>
              <a href="#kontakt" className="hover:text-foreground">
                {t.contact.label}
              </a>
              <a href="#impressum" className="hover:text-foreground">
                {t.legal.impressumLabel}
              </a>
              <a href="#datenschutz" className="hover:text-foreground">
                {t.legal.privacyLabel}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {t.footer.sourceLink}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DataChart({
  regions,
  caption,
  source,
  chooseYear,
  changeLabel,
  unit,
}: {
  regions: string[];
  caption: string;
  source: string;
  chooseYear: string;
  changeLabel: string;
  unit: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const rafRef = useRef(0);
  const displayRef = useRef<number[]>(regions.map(() => 0));
  const [display, setDisplay] = useState<number[]>(() => regions.map(() => 0));
  const [year, setYear] = useState<2010 | 2020>(2020);

  const setBoth = (vals: number[]) => {
    displayRef.current = vals;
    setDisplay(vals);
  };

  // Tweent die Balken/Zahlen von `from` zu `target` (Reduced-Motion → sofort).
  const tween = (from: number[], target: number[]) => {
    window.cancelAnimationFrame(rafRef.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBoth(target);
      return;
    }
    const t0 = performance.now();
    const dur = 800;
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - (1 - p) * (1 - p); // easeOutQuad
      setBoth(target.map((v, i) => from[i] + (v - from[i]) * e));
      if (p < 1) rafRef.current = window.requestAnimationFrame(step);
    };
    rafRef.current = window.requestAnimationFrame(step);
  };

  // Beim Sichtbarwerden von 0 auf die Werte des aktiven Jahres hochzählen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        tween(
          regions.map(() => 0),
          DATA_BY_YEAR[year],
        );
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      window.cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectYear = (y: 2010 | 2020) => {
    if (y === year) return;
    setYear(y);
    tween(displayRef.current, DATA_BY_YEAR[y]);
  };

  return (
    <figure ref={ref} className="border-y border-border py-6">
      <figcaption className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="font-text text-base text-foreground">{caption}</span>
        <div role="group" aria-label={chooseYear} className="flex items-center gap-3">
          {DATA_YEARS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => selectYear(y)}
              aria-pressed={y === year}
              className={`text-sm tabular-nums underline underline-offset-4 transition-colors ${
                y === year
                  ? "font-semibold text-foreground decoration-foreground/60"
                  : "text-muted-foreground decoration-transparent hover:text-foreground"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </figcaption>

      <p className="mb-3 text-right text-[11px] tabular-nums text-muted-foreground">
        Δ {changeLabel}
      </p>

      <div className="space-y-4">
        {regions.map((region, i) => {
          const v = display[i] ?? 0;
          const delta = DATA_BY_YEAR[2020][i] - DATA_BY_YEAR[2010][i];
          return (
            <div
              key={region}
              className="grid grid-cols-[6rem_1fr_2.2rem_2.4rem] items-center gap-2 sm:grid-cols-[8rem_1fr_2.6rem_2.8rem] sm:gap-3"
            >
              <span className="truncate text-sm text-muted-foreground">{region}</span>
              <div className="h-2 bg-secondary">
                <div className="h-full bg-primary" style={{ width: `${v}%` }} />
              </div>
              <span className="text-right font-serif text-sm tabular-nums text-foreground">
                {Math.round(v)}
                {unit}
              </span>
              <span className="text-right text-xs tabular-nums text-muted-foreground">
                +{delta}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{source}</p>
    </figure>
  );
}

function FallacyQuiz({ quiz }: { quiz: Translation["quiz"] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = quiz.items.length;
  const item = quiz.items[index];

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === item.correct) setScore((s) => s + 1);
  };
  const next = () => {
    if (index + 1 < total) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };
  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="mt-10 max-w-xl border-y border-border py-8">
        <p className="font-serif text-5xl font-medium text-primary">
          {score}
          <span className="text-muted-foreground">/{total}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{quiz.resultLabel}</p>
        <button
          type="button"
          onClick={restart}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground"
        >
          <RotateCw className="h-4 w-4" strokeWidth={1.8} />
          {quiz.restart}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-xl border-y border-border py-8">
      <p className="text-sm text-muted-foreground">
        {quiz.questionLabel} {index + 1}/{total}
      </p>
      <p className="mt-3 font-text text-xl leading-snug text-foreground">{item.statement}</p>

      <div className="mt-6 space-y-2.5">
        {item.options.map((opt, i) => {
          const isCorrect = i === item.correct;
          const isChosen = selected === i;
          let cls = "border-border bg-background hover:bg-secondary";
          if (selected !== null) {
            if (isCorrect) cls = "border-primary/40 bg-primary/10";
            else if (isChosen) cls = "border-destructive/40 bg-destructive/10";
            else cls = "border-border bg-background opacity-60";
          }
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`flex w-full items-center justify-between gap-3 border px-4 py-3 text-left text-[0.95rem] text-foreground transition-colors ${cls}`}
            >
              <span>{opt}</span>
              {selected !== null && isCorrect && (
                <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
              )}
              {selected !== null && isChosen && !isCorrect && (
                <X className="h-4 w-4 shrink-0 text-destructive" strokeWidth={2} />
              )}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-5">
          <p
            role="status"
            aria-live="polite"
            className="border-l border-foreground/25 pl-4 font-text text-base leading-relaxed text-foreground/85"
          >
            {item.explanation}
          </p>
          <button
            type="button"
            onClick={next}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground"
          >
            {quiz.next}
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  );
}

function ContactForm({ c }: { c: Translation["contact"] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const configured = !CONTACT_ACCESS_KEY.startsWith("DEIN-");
  const field =
    "w-full border border-border bg-background px-4 py-3 font-text text-base text-foreground outline-none transition-colors focus:border-foreground/50";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!configured) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", CONTACT_ACCESS_KEY);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-4">
      <input
        type="text"
        name="name"
        required
        aria-label={c.nameLabel}
        placeholder={c.nameLabel}
        className={field}
      />
      <input
        type="email"
        name="email"
        required
        aria-label={c.emailLabel}
        placeholder={c.emailLabel}
        className={field}
      />
      <textarea
        name="message"
        required
        rows={5}
        aria-label={c.messageLabel}
        placeholder={c.messageLabel}
        className={field}
      />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      {/* Web3Forms-Metafelder: bessere Zustellbarkeit & erkennbarer Betreff.
          replyto wird von Web3Forms automatisch aus dem email-Feld gesetzt. */}
      <input
        type="hidden"
        name="subject"
        value="Neue Nachricht über das Humanitas-Kontaktformular"
      />
      <input type="hidden" name="from_name" value="Humanitas Kontaktformular" />
      <label className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-primary" />
        <span>{c.consent}</span>
      </label>
      <button
        type="submit"
        disabled={status === "sending" || !configured}
        className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? c.sending : c.submit}
      </button>
      {status === "success" && (
        <p role="status" className="text-sm font-medium text-primary">
          {c.success}
        </p>
      )}
      {status === "error" && (
        <p role="status" className="text-sm font-medium text-destructive">
          {c.error}
        </p>
      )}
      {!configured && <p className="text-xs text-muted-foreground">{c.notConfigured}</p>}
    </form>
  );
}
