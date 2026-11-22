import Link from "next/link";
import { getAppliance } from "@/lib/appliances";
import MotifChip from "@/components/visuals/MotifChip";
import { applianceMotif } from "@/lib/visuals/defaults";
import { formatKr } from "@/lib/format";

/**
 * »Flere i kategorien«: apparaterne fra samme kategori (efter forbrug), fyldt op med datafilens
 * relatedSlugs. Før var det tre håndvalgte kort med et generisk lyn-ikon og intet link til kategorien.
 */
export default function RelatedAppliances({
  slugs,
  title = "Relateret strømforbrug",
  moreHref,
  moreLabel,
}: {
  slugs: string[];
  title?: string;
  moreHref?: string;
  moreLabel?: string;
}) {
  const appliances = slugs.map((slug) => getAppliance(slug)).filter((a) => a !== undefined);
  if (appliances.length === 0) return null;

  return (
    <section className="my-10" aria-labelledby="relaterede">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="relaterede" className="font-heading text-xl font-semibold text-ink">{title}</h2>
        {moreHref && moreLabel ? (
          <Link href={moreHref} className="text-sm font-semibold text-accent hover:underline">{moreLabel} →</Link>
        ) : null}
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {appliances.map((a) => (
          <li key={a.slug}>
            <Link href={`/${a.slug}/`} className="group flex h-full items-center gap-3 rounded-card bg-surface p-3 shadow-sm transition-shadow hover:shadow-card">
              <MotifChip motif={applianceMotif(a.slug)} />
              <span className="min-w-0">
                <span className="block font-semibold text-ink group-hover:text-accent">{a.name}</span>
                <span className="block text-xs text-ink-muted tabular">{formatKr(a.typicalKwh)} kWh om året</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
