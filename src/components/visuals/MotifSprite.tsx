/**
 * MotifSprite — motiverne én gang som <symbol>, så en lang liste (bloggen med 100+ kort) kan vise
 * chips med <use> i stedet for 100 kopier af geometrien. Kun til HTML; OG-billedet bruger OgMotif.
 */
import type { MotifKey } from "@/lib/visuals/motifs";
import { VISUAL } from "@/lib/visuals/palette";
import { MOTIFS } from "./index";

export const spriteId = (motif: MotifKey): string => `motif-${motif}`;

export function MotifSprite({ motifs }: { motifs: readonly MotifKey[] }) {
  const unique = [...new Set(motifs)];
  return (
    <svg width="0" height="0" className="absolute h-0 w-0 overflow-hidden" aria-hidden focusable="false">
      {unique.map((m) => {
        const Draw = MOTIFS[m];
        return (
          <symbol key={m} id={spriteId(m)} viewBox="0 0 200 200">
            <Draw p={VISUAL} />
          </symbol>
        );
      })}
    </svg>
  );
}

/** En chip, der peger på spriten — samme udseende som MotifChip. */
export function SpriteChip({ motif, className = "" }: { motif: MotifKey; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={`h-10 w-10 shrink-0 rounded-pill bg-bg-blue ${className}`} data-motif-chip={motif}>
      <use href={`#${spriteId(motif)}`} x="24" y="24" width="152" height="152" />
    </svg>
  );
}
