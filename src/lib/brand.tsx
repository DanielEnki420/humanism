/**
 * Logo „Mensch und Buch": ein Kopf über einem offenen Buch – liest sich zugleich
 * als Mensch mit offenen Armen (Leitbild: Bildung für ein menschlicheres Miteinander).
 * Zeichnet in `currentColor`; Größe & Farbe kommen per className.
 * Gleiche Geometrie wie public/favicon.svg und scripts/og-image-*.svg.
 */
export function LogoMark({
  className,
  strokeWidth = 2.4,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="24" cy="13.5" r="4.6" fill="currentColor" stroke="none" />
      <path d="M24 25.5C19.5 21.8 12.8 21.2 7 23.2v12c5.8-2 12.5-1.4 17 2.3 4.5-3.7 11.2-4.3 17-2.3v-12c-5.8-2-12.5-1.4-17 2.3z" />
      <path d="M24 25.5v12" />
    </svg>
  );
}
