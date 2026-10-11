/** "Opdateret 23.09.2026" med den grønne prik. `date` er YYYY-MM-DD. `inverted` = hvid tekst på navy. */
export default function LastUpdated({ date, className = "", inverted = false }: { date: string; className?: string; inverted?: boolean }) {
  const [y, m, d] = date.split("-");
  return (
    <p className={`inline-flex items-center gap-1.5 text-sm ${inverted ? "text-white/70" : "text-ink-muted"} ${className}`}>
      <span className="h-1.5 w-1.5 rounded-pill bg-accent" aria-hidden /> Opdateret {d}.{m}.{y}
    </p>
  );
}
