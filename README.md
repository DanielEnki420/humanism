<img src="https://raw.githubusercontent.com/DanielEnki420/humanism/main/assets/banner.svg" alt="Humanitas — Säkularer Humanismus: Vernunft, Wissenschaft, Ethik" width="100%">

# Humanitas — Säkularer Humanismus

Eine kleine, mehrsprachige Landingpage, die in den **säkularen Humanismus**
einführt: eine Weltanschauung auf der Grundlage von Menschenwürde, Vernunft,
Wissenschaft, kritischem Denken und Mitgefühl.

🔗 **Live:** <https://humanism.lovable.app/>

## Transparenz zur Entstehung

Diese Seite ist mit KI-Unterstützung entstanden (Lovable, Claude). Die Inhalte
sind redigiert und quellenbasiert geprüft: Zitate und Jahreszahlen wurden einzeln
verifiziert, die Primärdokumente (Humanist Manifestos, Amsterdam-Deklaration,
AEMR) sind direkt verlinkt, die statistischen Angaben stammen vom Pew Research
Center.

Bei einer Seite über kritisches Denken und Nachprüfbarkeit gehört diese Angabe
dazu: Man soll wissen, wie sie entstanden ist — und die Inhalte selbst prüfen
können, statt mir glauben zu müssen.

## Features

- **Sechs Prinzipien** mit ausklappbaren Karten (Punkte + konkretes Alltagsbeispiel)
- **Drei Sprachen** — Deutsch, English, Italiano — per Umschalter in der Kopfzeile
- **Hell- & Dunkelmodus** mit Umschalter; respektiert die System­einstellung und
  merkt sich die Wahl (`localStorage`), ohne Flackern beim Laden
- Ruhige, „humanistische" Ästhetik: Papier-Beige, tiefes Waldgrün, *Fraunces*-Serife

## Tech-Stack

- [TanStack Start](https://tanstack.com/start) (React, SSR) + TanStack Router
- Tailwind CSS v4 (OKLCH-Farbtokens)
- [lucide-react](https://lucide.dev) Icons
- Erstellt mit [Lovable](https://lovable.dev)

## Entwicklung

```bash
bun install
bun run dev      # Dev-Server
bun run build    # Production-Build
```

## Projektstruktur

```
src/
  routes/
    __root.tsx     # HTML-Shell, Meta-Tags, No-Flash-Theme-Skript
    index.tsx      # Seite: Layout, Sprach-/Theme-Umschalter, Karten
  lib/
    i18n.ts        # Alle Texte (DE / EN / IT) zentral gepflegt
  styles.css       # Farbtokens für Hell- und Dunkelmodus
```

Inhalte werden zentral in [`src/lib/i18n.ts`](src/lib/i18n.ts) gepflegt — neue
Sprache hinzufügen = einen weiteren Eintrag im `translations`-Objekt anlegen.

## Lizenz

MIT

---

<sub>Der Banner oben ist eine eigene SVG-Grafik nur fuer dieses README
(<a href="scripts/generate-banner.py"><code>scripts/generate-banner.py</code></a>,
Logo als <code>assets/logo.png</code>) — bewusst unabhaengig von der
Waldgruen/Creme-Palette der Live-Seite und der <code>og-image-*.svg</code>-Social-Cards
in <code>scripts/</code>, die weiterhin die massgebliche Marke sind.</sub>
