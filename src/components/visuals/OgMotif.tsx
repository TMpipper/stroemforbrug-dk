/**
 * OgMotif — motivet inde i et OG-billede (next/og → satori): et <svg> med fast bredde/højde,
 * hex-farver og ingen <title>, className eller CSS-variabler. Satori kender ikke funktionskomponenter
 * inde i <svg> (den gør dem til tekst), så motivets funktion KALDES her, og kun rene SVG-elementer
 * når satori.
 */
import type { MotifKey } from "@/lib/visuals/motifs";
import { VISUAL } from "@/lib/visuals/palette";
import { MOTIFS } from "./index";

export default function OgMotif({ motif, size = 260 }: { motif: MotifKey; size?: number }) {
  const draw = MOTIFS[motif];
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      {draw({ p: VISUAL })}
    </svg>
  );
}
