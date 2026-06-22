import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  FlaskConical,
  HeartHandshake,
  Scale,
  Globe2,
  Sparkles,
  ArrowRight,
  Leaf,
} from "lucide-react";

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

const principles = [
  {
    icon: Brain,
    title: "Kritisches Denken",
    text: "Entscheidungen entstehen durch Logik, Fakten und offene Diskussion.",
  },
  {
    icon: FlaskConical,
    title: "Wissenschaftliche Erkenntnis",
    text: "Wissen wächst durch Forschung und überprüfbare Beweise.",
  },
  {
    icon: HeartHandshake,
    title: "Menschliche Werte",
    text: "Empathie, Zusammenarbeit und Respekt im Miteinander.",
  },
  {
    icon: Scale,
    title: "Menschenrechte",
    text: "Würde und Freiheit für alle Menschen – ohne Ausnahme.",
  },
  {
    icon: Globe2,
    title: "Verantwortung",
    text: "Gemeinsame Lösungen für globale Herausforderungen.",
  },
  {
    icon: Sparkles,
    title: "Freies Denken",
    text: "Fragen stellen und eigene Überzeugungen entwickeln.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold">
          <Leaf className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <span>Humanitas</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#was-ist" className="transition-colors hover:text-foreground">Idee</a>
          <a href="#prinzipien" className="transition-colors hover:text-foreground">Prinzipien</a>
          <a href="#grundlage" className="transition-colors hover:text-foreground">Grundlage</a>
        </nav>
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
        <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-16 text-center sm:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Eine Einführung in eine moderne Weltanschauung
          </div>
          <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Säkularer Humanismus –{" "}
            <span className="italic text-primary">Menschlichkeit</span> durch
            Vernunft und Verantwortung
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Eine Weltanschauung basierend auf Menschenwürde, Wissenschaft,
            kritischem Denken und Mitgefühl.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#prinzipien"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
            >
              Prinzipien entdecken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#was-ist"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Was ist */}
      <section id="was-ist" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Die Idee
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
              Was ist säkularer Humanismus?
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed text-foreground/90">
              Säkularer Humanismus stellt den{" "}
              <span className="text-primary">Menschen</span>, Vernunft,
              Wissenschaft und ethische Verantwortung in den Mittelpunkt.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Es ist eine lebensbejahende Haltung, die sich an dem orientiert,
              was wir gemeinsam beobachten, verstehen und gestalten können –
              getragen von Empathie, Neugier und dem Vertrauen in die
              menschliche Fähigkeit, die Welt besser zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Prinzipien */}
      <section id="prinzipien" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Sechs Prinzipien
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
              Werte, die uns verbinden
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative bg-card p-8 transition-colors hover:bg-card/70"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grundlage / Compare */}
      <section id="grundlage" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-12">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Die Grundlage
            </p>
            <blockquote className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              „Säkularer Humanismus basiert auf{" "}
              <span className="italic text-primary">Vernunft</span>,{" "}
              <span className="italic text-primary">Erfahrung</span> und{" "}
              <span className="italic text-primary">menschlichem Wohlergehen</span>."
            </blockquote>
          </div>

          <div className="mt-8 grid gap-8 md:col-span-12 md:grid-cols-3">
            {[
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
            ].map((b) => (
              <div key={b.k} className="border-t border-border pt-6">
                <p className="font-serif text-lg text-primary">{b.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 font-serif text-lg font-semibold">
                <Leaf className="h-5 w-5 text-primary" strokeWidth={1.5} />
                Humanitas
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Eine Einladung, die Welt mit offenen Augen, klarem Verstand und
                warmem Herzen zu betrachten.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Themen
                </p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#was-ist" className="hover:text-primary">Idee</a></li>
                  <li><a href="#prinzipien" className="hover:text-primary">Prinzipien</a></li>
                  <li><a href="#grundlage" className="hover:text-primary">Grundlage</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Lesen
                </p>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-muted-foreground">Manifeste</span></li>
                  <li><span className="text-muted-foreground">Essays</span></li>
                  <li><span className="text-muted-foreground">Wissenschaft</span></li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Kontakt
                </p>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-muted-foreground">Newsletter</span></li>
                  <li><span className="text-muted-foreground">Community</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Humanitas. Eine Einführung in den säkularen Humanismus.</p>
            <p>Mit Vernunft & Mitgefühl gestaltet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
