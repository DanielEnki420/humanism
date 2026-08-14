#!/usr/bin/env python3
"""Erzeugt den Kopfbereich fuer das humanism-Repository.

Das Logo bringt bereits eine eigene gestufte Deco-Fassung mit. Der Rahmen
hier haelt sich deshalb bewusst zurueck — zwei Haarlinien, Eckwinkel, eine
Rautenkette als Trennung. Kein zweiter Strahlenkranz: den hat das Logo.

    python3 generate_banner.py

Schreibt assets/banner.svg.
"""

import base64
import pathlib

W, H = 1200, 420

BG = "#0D1117"
BORDER = "#30363D"
GOLD = "#C8973A"
GOLD_SOFT = "#E0B966"
FG = "#F0E6D2"
MUTED = "#9A8F7D"

SERIF = "Georgia, 'Times New Roman', 'Iowan Old Style', serif"

LOGO_H = 300
LOGO_GAP = 78
# Breite von "HUMANISMUS" in Georgia bei 56px inklusive Sperrung, gemessen
# am gerenderten SVG. Daraus wird die Gruppe aus Logo + Text mittig gesetzt,
# statt sie links zu parken und rechts ein Drittel leer zu lassen.
TITLE_W = 420
LOGO_X = round((W - (LOGO_H + LOGO_GAP + TITLE_W)) / 2)

# Die drei Zeilen spiegeln die drei Sprachen des Projekts (DE/EN/IT).
CLAIMS = [
    ("Vernunft &#183; Wissenschaft &#183; Ethik", GOLD_SOFT),
    ("Reason &#183; Science &#183; Ethics", MUTED),
    ("Ragione &#183; Scienza &#183; Etica", MUTED),
]


def deco_frame():
    """Doppelte Haarlinie plus gestufte Eckwinkel."""
    out = []
    for inset in (9, 19):
        r = max(14 - inset, 2)
        out.append(f'<rect x="{inset}" y="{inset}" width="{W - 2 * inset}" '
                   f'height="{H - 2 * inset}" rx="{r}" fill="none" '
                   f'stroke="{GOLD}" stroke-width="1.2" opacity="0.55"/>')
    for x0, y0, sx, sy in ((0, 0, 1, 1), (W, 0, -1, 1),
                           (0, H, 1, -1), (W, H, -1, -1)):
        for i, arm in enumerate((42, 25)):
            o = 25 + i * 9
            ax, ay = x0 + sx * o, y0 + sy * o
            out.append(f'<path d="M{ax:.1f},{ay + sy * arm:.1f} '
                       f'L{ax:.1f},{ay:.1f} L{ax + sx * arm:.1f},{ay:.1f}" '
                       f'fill="none" stroke="{GOLD}" stroke-width="1.6" '
                       f'opacity="{0.9 if i == 0 else 0.5}"/>')
    return "".join(out)


def diamond_rule(cx, y, half):
    """Zierlinie mit Rautenkette in der Mitte — wie die Trenner im Profil."""
    out = [f'<g stroke="{GOLD}" fill="{GOLD}">',
           f'<line x1="{cx - half}" y1="{y}" x2="{cx - 26}" y2="{y}" '
           f'stroke-width="1" opacity="0.6"/>',
           f'<line x1="{cx + 26}" y1="{y}" x2="{cx + half}" y2="{y}" '
           f'stroke-width="1" opacity="0.6"/>']
    for dx, s in ((-14, 3), (0, 5.5), (14, 3)):
        out.append(f'<rect x="{cx + dx - s:.1f}" y="{y - s:.1f}" '
                   f'width="{s * 2:.1f}" height="{s * 2:.1f}" '
                   f'transform="rotate(45 {cx + dx} {y})" opacity="0.9"/>')
    out.append('</g>')
    return "".join(out)


def build(logo_b64, logo_w):
    tx = LOGO_X + logo_w + LOGO_GAP    # Textspalte beginnt rechts vom Logo
    o = ['<?xml version="1.0" encoding="UTF-8"?>']
    o.append(f'<svg xmlns="http://www.w3.org/2000/svg" '
             f'xmlns:xlink="http://www.w3.org/1999/xlink" '
             f'viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" '
             f'aria-label="Humanismus &#8212; s&#228;kularer Humanismus, '
             f'eine mehrsprachige Bildungsseite &#252;ber Vernunft, '
             f'Wissenschaft und Ethik">')

    o.append(f'<rect width="{W}" height="{H}" rx="14" fill="{BG}" '
             f'stroke="{BORDER}" stroke-width="1"/>')

    o.append(f'<image xlink:href="data:image/png;base64,{logo_b64}" '
             f'x="{LOGO_X}" y="{(H - LOGO_H) / 2:.0f}" width="{logo_w}" '
             f'height="{LOGO_H}"/>')

    # Ueberzeile
    o.append(f'<text x="{tx}" y="140" font-family="{SERIF}" font-size="18" '
             f'letter-spacing="6" fill="{GOLD}">S&#196;KULARER</text>')
    # Titel
    o.append(f'<text x="{tx}" y="200" font-family="{SERIF}" font-size="56" '
             f'letter-spacing="4" fill="{FG}">HUMANISMUS</text>')

    o.append(diamond_rule(tx + 168, 228, 168))

    for i, (line, col) in enumerate(CLAIMS):
        o.append(f'<text x="{tx}" y="{264 + i * 30}" font-family="{SERIF}" '
                 f'font-size="19" fill="{col}">{line}</text>')

    o.append(f'<text x="{tx}" y="356" font-family="{SERIF}" font-size="15" '
             f'letter-spacing="3" fill="{MUTED}">DE &#183; EN &#183; IT</text>')

    o.append(deco_frame())
    o.append('</svg>')
    return "".join(o)


def main():
    # Skript liegt in scripts/, die Bilder im Repo-Root unter assets/.
    assets = pathlib.Path(__file__).parent.parent / "assets"
    logo = assets / "logo.png"
    from PIL import Image
    with Image.open(logo) as im:
        logo_w = round(im.width * LOGO_H / im.height)
    b64 = base64.b64encode(logo.read_bytes()).decode("ascii")

    out = assets / "banner.svg"
    out.write_text(build(b64, logo_w), encoding="utf-8")
    print(f"{out}  ({out.stat().st_size / 1024:.0f} KB, Logo {logo_w}x{LOGO_H})")


if __name__ == "__main__":
    main()
