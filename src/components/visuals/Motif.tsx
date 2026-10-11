/**
 * Motif — motivet som bar SVG uden kort omkring: ikoner i tiles (om-os), vandmærket på navy
 * (`tone="mono"`) og andre steder, hvor kalderen selv sætter størrelse og grund. Pynt: aria-hidden,
 * medmindre `title` gives — så bærer det mening (role="img").
 */
import { MOTIF_ALT, type MotifKey } from "@/lib/visuals/motifs";
import { MONO, VISUAL } from "@/lib/visuals/palette";
import { MOTIFS } from "./index";

interface Props {
  motif: MotifKey;
  tone?: "color" | "mono";
  className?: string;
  /** Giv kun en titel, når motivet bærer mening ved siden af teksten. */
  title?: string;
}

export default function Motif({ motif, tone = "color", className = "", title }: Props) {
  const Draw = MOTIFS[motif];
  const label = title === undefined ? undefined : title || MOTIF_ALT[motif];
  return (
    <svg viewBox="0 0 200 200" className={className} role={label ? "img" : undefined} aria-hidden={label ? undefined : true} aria-label={label} data-motif={motif}>
      {label && <title>{label}</title>}
      <Draw p={tone === "mono" ? MONO : VISUAL} />
    </svg>
  );
}
