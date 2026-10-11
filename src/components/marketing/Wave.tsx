/** Blød bølge mellem to bånd. `fill` er farven på afsnittet NEDENUNDER (eller ovenover, hvis `flip`). */
export default function Wave({ fill = "var(--color-surface)", flip = false, className = "" }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none relative -mb-px h-10 w-full overflow-hidden md:h-16 ${className}`}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}>
        <path d="M0 40C240 10 480 0 720 22s480 38 720 8v34H0z" fill={fill} />
      </svg>
    </div>
  );
}
