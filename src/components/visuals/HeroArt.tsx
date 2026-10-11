/**
 * HeroArt — motivet i sidehovedets højre spalte (PageHero's `art`, kun fra md og op). En fast
 * kvadratisk plade, så intet rykker sig; aria-hidden, for H1 ved siden af bærer meningen.
 */
import type { MotifKey } from "@/lib/visuals/motifs";
import { VISUAL } from "@/lib/visuals/palette";
import { MOTIFS } from "./index";

export default function HeroArt({ motif, className = "" }: { motif: MotifKey; className?: string }) {
  const Motif = MOTIFS[motif];
  return (
    <div aria-hidden className={`flex h-40 w-40 items-center justify-center rounded-img bg-surface/70 shadow-sm lg:h-56 lg:w-56 ${className}`} data-hero-art={motif}>
      <svg viewBox="0 0 200 200" className="h-[82%] w-[82%]">
        <Motif p={VISUAL} />
      </svg>
    </div>
  );
}
