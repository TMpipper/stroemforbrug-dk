/**
 * »På denne side«: genveje til apparatsidens hovedafsnit (22. nov. 2026). En apparatside er 15–20 skærme
 * lang på en telefon; uden genveje fandt ingen beregneren eller energimærkerne. Ren HTML, intet JavaScript.
 */
export default function PageToc({ items }: { items: { id: string; label: string }[] }) {
  if (items.length < 3) return null;
  return (
    <nav aria-label="På denne side" className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">På denne side</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className="inline-flex min-h-9 items-center rounded-pill border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-body transition-colors hover:border-accent hover:text-ink"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
