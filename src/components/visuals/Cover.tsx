/**
 * Cover — motivet som figur i brødteksten (afløser WordPress-tidens billeder): et 16:9-kort på
 * mintgrund med bløde grunde bag motivet. Fast sideforhold → CLS 0; inline SVG → ingen hentning,
 * ingen lazy-loading at tage stilling til. Titlen er motivets danske alt (eller den, registret
 * sætter), aldrig et tal; en figcaption kun når registret giver en.
 */
import { MOTIF_ALT, type MotifKey } from "@/lib/visuals/motifs";
import { VISUAL } from "@/lib/visuals/palette";
import { MOTIFS } from "./index";

interface Props {
  motif: MotifKey;
  alt?: string;
  caption?: string;
  className?: string;
}

export default function Cover({ motif, alt, caption, className = "" }: Props) {
  const Motif = MOTIFS[motif];
  const title = alt ?? MOTIF_ALT[motif];
  const id = `cover-${motif}`;
  return (
    <figure className={`not-prose my-6 ${className}`} data-visual={motif}>
      <div className="overflow-hidden rounded-img bg-bg-blue" style={{ aspectRatio: "16 / 9" }}>
        <svg viewBox="0 0 640 360" className="block h-full w-full" role="img" aria-labelledby={`${id}-t`} data-visual-svg>
          <title id={`${id}-t`}>{title}</title>
          <ellipse cx="330" cy="212" rx="210" ry="120" fill={VISUAL.mintDeep} opacity="0.55" />
          <ellipse cx="420" cy="120" rx="120" ry="80" fill={VISUAL.paper} opacity="0.6" />
          <g transform="translate(180 40) scale(1.4)">
            <Motif p={VISUAL} />
          </g>
        </svg>
      </div>
      {caption && <figcaption className="mt-2 text-xs leading-relaxed text-ink-muted">{caption}</figcaption>}
    </figure>
  );
}
