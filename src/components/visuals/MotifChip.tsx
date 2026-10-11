/**
 * MotifChip — motivet som 40 px-chip på kort (bloglisten, læs også). Pynt: aria-hidden.
 */
import type { MotifKey } from "@/lib/visuals/motifs";
import { VISUAL } from "@/lib/visuals/palette";
import { MOTIFS } from "./index";

export default function MotifChip({ motif, className = "" }: { motif: MotifKey; className?: string }) {
  const Motif = MOTIFS[motif];
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={`h-10 w-10 shrink-0 rounded-pill bg-bg-blue ${className}`} data-motif-chip={motif}>
      <g transform="translate(24 24) scale(0.76)">
        <Motif p={VISUAL} />
      </g>
    </svg>
  );
}
