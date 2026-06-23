import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  FlaskConical,
  HeartHandshake,
  Scale,
  Globe2,
  Sparkles,
  ArrowRight,
  Plus,
  Moon,
  Sun,
  ExternalLink,
  RotateCw,
  Check,
  Eye,
  Heart,
} from "lucide-react";
import {
  LANGUAGES,
  LANGUAGE_LABELS,
  translations,
  type FaqItem,
  type Lang,
  type PrincipleText,
  type Segment,
} from "@/lib/i18n";

const GITHUB_URL = "https://github.com/DanielEnki420/humanism";

// Icons in der Reihenfolge der Prinzipien aus i18n.ts.
const PRINCIPLE_ICONS = [
  Brain,
  FlaskConical,
  HeartHandshake,
  Scale,
  Globe2,
  Sparkles,
];

// Icons für die drei Grundlage-Säulen (Reihenfolge = foundation.cards).
const FOUNDATION_ICONS = [Brain, Eye, Heart];

// Sprachunabhängige Zahlenwerte zum Diagramm (Reihenfolge = data.regions).
// Anteil religiös Ungebundener 2020, Pew Research Center, „How the Global Religious
// Landscape Changed, 2010–2020" (Juni 2025). China nach neuer Methodik (CGSS 2018).
const DATA_VALUES = [90, 73, 54, 36, 30, 24];

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Säkularer Humanismus – Menschlichkeit durch Vernunft" },
      {
        name: "description",
        content:
          "Eine Weltanschauung basierend auf Menschenwürde, Wissenschaft, kritischem Denken und Mitgefühl.",
      },
      { property: "og:title", content: "Säkularer Humanismus" },
      {
        property: "og:description",
        content:
          "Werte, Vernunft und Verantwortung – eine Einführung in den säkularen Humanismus.",
      },
    ],
  }),
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

/** Kleine Überschrift + Titel für einen Abschnitt. */
function SectionHead({
  label,
  heading,
  intro,
  center = false,
}: {
  label: string;
  heading: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">{heading}</h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

/** Quellen-Fußnote unter einem Faktenblock. */
function SourceNote({ label, text }: { label: string; text: string }) {
  return (
    <p className="mt-8 border-l-2 border-primary/30 pl-4 text-xs leading-relaxed text-muted-foreground">
      <span className="font-medium text-foreground/70">{label}:</span> {text}
    </p>
  );
}

/** Markenzeichen: serifen-„H" mittig im Erd-Ring „O" (Pendant zur Favicon). */
function Monogram() {
  return (
    <span
      aria-hidden
      className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground"
    >
      <svg viewBox="0 0 100 100" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="7" />
        <g fill="currentColor">
          <rect x="36" y="32" width="8" height="36" />
          <rect x="56" y="32" width="8" height="36" />
          <rect x="40" y="47" width="20" height="6" />
          <rect x="32" y="32" width="16" height="4.5" />
          <rect x="32" y="63.5" width="16" height="4.5" />
          <rect x="52" y="32" width="16" height="4.5" />
          <rect x="52" y="63.5" width="16" height="4.5" />
        </g>
      </svg>
    </span>
  );
}

// Hexagon-Positionen (Prozent) der sechs Hub-Knoten um das Zentrum.
const HUB_POSITIONS = [
  { left: "50%", top: "7%" },
  { left: "87%", top: "29%" },
  { left: "87%", top: "71%" },
  { left: "50%", top: "93%" },
  { left: "13%", top: "71%" },
  { left: "13%", top: "29%" },
];

/** Prinzipien-Hub: der Mensch im Zentrum, sechs Werte mit Icons ringsum (klickbar). */
function PrinciplesHub({
  items,
  center,
}: {
  items: { title: string; Icon: (typeof PRINCIPLE_ICONS)[number] }[];
  center: string;
}) {
  return (
    <div className="relative mx-auto mt-12 hidden aspect-square max-w-xl sm:block">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute inset-0 h-full w-full text-primary/25"
      >
        {HUB_POSITIONS.map((p, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={parseFloat(p.left)}
            y2={parseFloat(p.top)}
            stroke="currentColor"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary px-2 text-center font-serif text-sm font-medium leading-tight text-primary-foreground">
        {center}
      </div>

      {items.map((item, i) => {
        const Icon = item.Icon;
        return (
          <a
            key={item.title}
            href={`#principle-${i}`}
            className="group absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: HUB_POSITIONS[i].left, top: HUB_POSITIONS[i].top }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-primary ring-1 ring-border transition-colors group-hover:bg-secondary group-hover:ring-primary/40">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <span className="mt-2 text-center text-xs font-medium leading-tight text-foreground transition-colors group-hover:text-primary">
              {item.title}
            </span>
          </a>
        );
      })}
    </div>
  );
}

// Pentagon-Positionen (Prozent) der fünf Zyklus-Knoten um das Zentrum.
const CYCLE_POSITIONS = [
  { left: "50%", top: "11%" },
  { left: "86%", top: "39%" },
  { left: "72%", top: "82%" },
  { left: "28%", top: "82%" },
  { left: "14%", top: "39%" },
];

/** Wissenschafts-Kreislauf: fünf Methoden-Schritte als selbst-korrigierender Zyklus. */
function ScienceCycle({ titles }: { titles: string[] }) {
  return (
    <div className="relative mx-auto mt-12 hidden aspect-square max-w-xl sm:block">
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full text-primary/30">
        <circle
          cx="50"
          cy="50"
          r="39"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <RotateCw className="h-7 w-7" strokeWidth={1.5} />
      </div>

      {titles.map((title, i) => (
        <a
          key={title}
          href={`#science-${i}`}
          className="group absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: CYCLE_POSITIONS[i].left, top: CYCLE_POSITIONS[i].top }}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card font-serif text-sm font-medium text-primary ring-1 ring-border transition-colors group-hover:bg-secondary group-hover:ring-primary/40">
            {`0${i + 1}`}
          </span>
          <span className="mt-2 text-center text-xs font-medium leading-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </span>
        </a>
      ))}
    </div>
  );
}

// Sektions-IDs in Nav-Reihenfolge – auch für den Scroll-Spy.
const NAV_SECTION_IDS = [
  "was-ist",
  "prinzipien",
  "wissenschaft",
  "geschichte",
  "daten",
  "faq",
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

/** Pflegt hreflang-Alternates + Canonical zur Laufzeit (domain-unabhängig über origin). */
function updateAlternateLinks(lang: Lang) {
  const base = window.location.origin + window.location.pathname;
  const href = (l: Lang) => (l === "de" ? base : `${base}?lang=${l}`);
  document.head.querySelectorAll("link[data-i18n]").forEach((n) => n.remove());
  const add = (rel: string, linkHref: string, hreflang?: string) => {
    const l = document.createElement("link");
    l.setAttribute("rel", rel);
    if (hreflang) l.setAttribute("hreflang", hreflang);
    l.setAttribute("href", linkHref);
    l.setAttribute("data-i18n", "");
    document.head.appendChild(l);
  };
  LANGUAGES.forEach((l) => add("alternate", href(l), l));
  add("alternate", href("de"), "x-default");
  add("canonical", href(lang));
}

function Index() {
  const [lang, setLang] = useState<Lang>("de");
  const [dark, setDark] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const t = translations[lang];

  // Sprache aus ?lang oder localStorage übernehmen (vermeidet Hydration-Mismatch).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    const saved = localStorage.getItem("lang") as Lang | null;
    const initial =
      q && LANGUAGES.includes(q)
        ? q
        : saved && LANGUAGES.includes(saved)
          ? saved
          : "de";
    if (initial !== "de") setLang(initial);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Sprache überall synchron halten: <html lang>, Titel, Description, URL, hreflang/canonical.
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
    updateAlternateLinks(lang);
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

  // Scroll-Reveal: Abschnitte blenden beim Scrollen sanft ein (außer Hero).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    ).filter((el) => el.id !== "top");
    if (!targets.length) return;
    targets.forEach((el) => el.setAttribute("data-reveal", ""));
    document.documentElement.classList.add("reveal-ready");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    targets.forEach((el) => obs.observe(el));
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

  // FAQPage-Structured-Data (JSON-LD) für Rich Results.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Skip-to-content – per Fokus eingeblendet, bleibt für Screenreader erreichbar */}
      <a
        href="#was-ist"
        className="fixed left-4 -top-20 z-[60] rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all focus:top-4"
      >
        {t.ui.skipToContent}
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold">
            <Monogram />
            <span>Humanitas</span>
          </a>
          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden gap-7 text-sm lg:flex">
              {[
                { id: "was-ist", label: t.nav.idea },
                { id: "prinzipien", label: t.nav.principles },
                { id: "wissenschaft", label: t.nav.science },
                { id: "geschichte", label: t.nav.history },
                { id: "daten", label: t.nav.data },
                { id: "faq", label: t.nav.faq },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`transition-colors ${
                    activeId === item.id
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Sprachumschalter */}
            <div
              className="flex items-center gap-0.5 rounded-full border border-border bg-card/60 p-0.5 backdrop-blur"
              role="group"
              aria-label={t.ui.toggleLanguage}
            >
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={l === lang}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                    l === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              {dark ? (
                <Sun className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, var(--sage), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[46%] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 text-primary opacity-[0.07]"
        >
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.4" className="globe-spin h-full w-full">
            <circle cx="100" cy="100" r="96" />
            <ellipse cx="100" cy="100" rx="96" ry="32" />
            <ellipse cx="100" cy="100" rx="34" ry="96" />
            <ellipse cx="100" cy="100" rx="66" ry="96" />
            <line x1="4" y1="100" x2="196" y2="100" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-16 text-center sm:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.hero.badge}
          </div>
          <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <RichText segments={t.hero.title} em="italic text-primary" />
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#prinzipien"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#was-ist"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Was ist */}
      <section id="was-ist" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <SectionHead label={t.idea.label} heading={t.idea.heading} />
          </div>
          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed text-foreground/90">
              <RichText segments={t.idea.lead} />
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.idea.body}
            </p>
          </div>
        </div>
      </section>

      {/* Prinzipien */}
      <section id="prinzipien" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead label={t.principles.label} heading={t.principles.heading} center />

          <PrinciplesHub
            center={t.principles.center}
            items={t.principles.items.map((p, i) => ({
              title: p.title,
              Icon: PRINCIPLE_ICONS[i],
            }))}
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {t.principles.items.map((p, i) => (
              <PrincipleCard
                key={p.title}
                id={`principle-${i}`}
                principle={p}
                Icon={PRINCIPLE_ICONS[i]}
                showMore={t.ui.showMore}
                showLess={t.ui.showLess}
                exampleLabel={t.ui.exampleLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grundlage */}
      <section id="grundlage" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-12">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t.foundation.label}
            </p>
            <blockquote className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <RichText segments={t.foundation.quote} em="italic text-primary" />
            </blockquote>
          </div>
          <div className="mt-12 md:col-span-12">
            <div className="h-1.5 rounded-full bg-primary/20" />
            <div className="grid gap-4 py-4 sm:grid-cols-3">
              {t.foundation.cards.map((b, i) => {
                const Icon = FOUNDATION_ICONS[i];
                return (
                  <div
                    key={b.k}
                    className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <p className="mt-4 font-serif text-lg font-medium text-primary">{b.k}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.v}</p>
                  </div>
                );
              })}
            </div>
            <div className="h-1.5 rounded-full bg-primary/20" />
          </div>
        </div>
      </section>

      {/* Wissenschafts-1x1 */}
      <section id="wissenschaft" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead label={t.science.label} heading={t.science.heading} intro={t.science.intro} />

          <ScienceCycle titles={t.science.items.map((it) => it.title)} />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.science.items.map((item, i) => (
              <div
                key={item.title}
                id={`science-${i}`}
                className="scroll-mt-24 rounded-xl border border-border bg-card p-6"
              >
                <span className="font-serif text-sm text-primary">{`0${i + 1}`}</span>
                <h3 className="mt-2 font-serif text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <SourceNote label={t.ui.sourceLabel} text={t.science.source} />
        </div>
      </section>

      {/* Ethik */}
      <section id="ethik" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionHead label={t.ethics.label} heading={t.ethics.heading} intro={t.ethics.intro} />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {t.ethics.items.map((item, i) => (
            <div key={item.title} className="border-t-2 border-primary/30 pt-6">
              <span className="font-serif text-sm text-primary">{`0${i + 1}`}</span>
              <h3 className="mt-1 font-serif text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <SourceNote label={t.ui.sourceLabel} text={t.ethics.source} />
      </section>

      {/* Abgrenzung */}
      <section id="abgrenzung" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHead
            label={t.distinctions.label}
            heading={t.distinctions.heading}
            intro={t.distinctions.intro}
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {/* Was es IST */}
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-6 text-primary-foreground md:col-span-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <Check className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/70">
                {t.distinctions.affirmLabel}
              </p>
              <p className="mt-1 font-serif text-xl font-medium leading-snug">
                {t.distinctions.affirmText}
              </p>
            </div>

            {/* Was es NICHT ist */}
            <div className="grid gap-3 sm:grid-cols-2 md:col-span-3">
              {t.distinctions.items.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary font-serif text-base text-muted-foreground">
                      ≠
                    </span>
                    <span className="font-serif text-base font-medium text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte / Zeitstrahl */}
      <section id="geschichte" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionHead label={t.history.label} heading={t.history.heading} intro={t.history.intro} />
        <ol className="mt-16 space-y-10 border-l border-border pl-6 sm:pl-8">
          {t.history.items.map((item) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[39px]"
              />
              <p className="font-serif text-sm font-medium text-primary">{item.year}</p>
              <h3 className="mt-1 font-serif text-xl font-medium">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Schlüsseldokumente */}
      <section id="dokumente" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            label={t.documents.label}
            heading={t.documents.heading}
            intro={t.documents.intro}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.documents.items.map((item, i) => (
              <a
                key={DOCUMENT_LINKS[i].name}
                href={DOCUMENT_LINKS[i].url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-card/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-xs font-medium text-primary">
                    {DOCUMENT_LINKS[i].year}
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-2 font-serif text-lg font-medium leading-snug">
                  {DOCUMENT_LINKS[i].name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Daten & Fakten */}
      <section id="daten" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHead label={t.data.label} heading={t.data.heading} intro={t.data.intro} />
            <p className="mt-6 rounded-xl bg-secondary/60 p-4 text-sm leading-relaxed text-foreground/85">
              {t.data.worldNote}
            </p>
          </div>
          <div className="md:col-span-7">
            <DataChart
              regions={t.data.regions}
              caption={t.data.chartCaption}
              source={t.data.chartSource}
              estimateBadge={t.data.estimateBadge}
              unit={t.data.unit}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <SectionHead label={t.faq.label} heading={t.faq.heading} center />
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {t.faq.items.map((item) => (
              <FaqRow key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Glossar */}
      <section id="glossar" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionHead
          label={t.glossary.label}
          heading={t.glossary.heading}
          intro={t.glossary.intro}
        />
        <dl className="mt-12 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {t.glossary.items.map((item) => (
            <div key={item.term} className="border-t border-border pt-4">
              <dt className="font-serif text-lg font-medium text-primary">{item.term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Quellen */}
      <section id="quellen" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead
            label={t.sources.label}
            heading={t.sources.heading}
            intro={t.sources.intro}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.sources.items.map((item, i) => (
              <a
                key={SOURCE_LINKS[i].name}
                href={SOURCE_LINKS[i].url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-card/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-lg font-medium">{SOURCE_LINKS[i].name}</span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-2 font-serif text-lg font-semibold">
                <Monogram />
                Humanitas
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t.footer.tagline}
              </p>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t.footer.topicsLabel}
                </p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#was-ist" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.idea}</a></li>
                  <li><a href="#prinzipien" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.principles}</a></li>
                  <li><a href="#grundlage" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.foundation}</a></li>
                  <li><a href="#wissenschaft" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.science}</a></li>
                  <li><a href="#ethik" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.ethics}</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t.footer.referenceLabel}
                </p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#abgrenzung" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.distinctions}</a></li>
                  <li><a href="#geschichte" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.history}</a></li>
                  <li><a href="#dokumente" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.documents}</a></li>
                  <li><a href="#daten" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.data}</a></li>
                  <li><a href="#glossar" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.glossary}</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t.footer.projectLabel}
                </p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#faq" className="text-muted-foreground transition-colors hover:text-primary">{t.nav.faq}</a></li>
                  <li><a href="#quellen" className="text-muted-foreground transition-colors hover:text-primary">{t.sources.label}</a></li>
                  <li>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {t.footer.sourceLink}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Humanitas. {t.footer.copyright}</p>
            <p>{t.footer.madeWith}</p>
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
  estimateBadge,
  unit,
}: {
  regions: string[];
  caption: string;
  source: string;
  estimateBadge: string;
  unit: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // 0 → 1; treibt Balkenbreite UND Zahlen-Count-up, sobald sichtbar.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const dur = 900;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setProgress(1 - (1 - p) * (1 - p)); // easeOutQuad
          if (p < 1) raf = window.requestAnimationFrame(tick);
        };
        raf = window.requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <figure ref={ref} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <figcaption className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-medium text-foreground">{caption}</span>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary ring-1 ring-primary/20">
          {estimateBadge}
        </span>
      </figcaption>

      <div className="space-y-4">
        {regions.map((region, i) => {
          const value = DATA_VALUES[i] ?? 0;
          return (
            <div key={region} className="grid grid-cols-[5.5rem_1fr_2.5rem] items-center gap-3 sm:grid-cols-[7rem_1fr_3rem]">
              <span className="truncate text-sm text-muted-foreground">{region}</span>
              <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${value * progress}%` }}
                />
              </div>
              <span className="text-right font-serif text-sm tabular-nums text-foreground">
                {Math.round(value * progress)}
                {unit}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{source}</p>
    </figure>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-${item.q.replace(/[^\p{L}\p{N}]+/gu, "-").toLowerCase()}`;

  return (
    <div className="bg-card">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50"
      >
        <span className="font-serif text-base font-medium">{item.q}</span>
        <Plus
          className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          strokeWidth={2}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function PrincipleCard({
  id,
  principle,
  Icon,
  showMore,
  showLess,
  exampleLabel,
}: {
  id: string;
  principle: PrincipleText;
  Icon: (typeof PRINCIPLE_ICONS)[number];
  showMore: string;
  showLess: string;
  exampleLabel: string;
}) {
  const { title, text, points, example } = principle;
  const [open, setOpen] = useState(false);
  const panelId = `principle-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const exampleRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        // Warten bis die Ausklapp-Animation gestartet hat, dann die Beispiel-Box sanft sichtbar machen.
        window.setTimeout(() => {
          exampleRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 320);
      }
      return next;
    });
  };

  return (
    <article id={id} className="group relative scroll-mt-24 bg-card p-8 transition-colors hover:bg-card/70">
      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl font-medium">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>

      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-primary transition-opacity hover:opacity-70"
      >
        <span>{open ? showLess : showMore}</span>
        <Plus
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          strokeWidth={2}
        />
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 border-l border-primary/20 pl-4 text-sm text-foreground/80">
            {points.map((pt) => (
              <li key={pt} className="leading-relaxed">
                {pt}
              </li>
            ))}
          </ul>
          <div
            ref={exampleRef}
            className="mt-5 scroll-mt-24 rounded-lg bg-secondary/60 p-4"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {exampleLabel}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
              {example}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
