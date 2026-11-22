import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/marketing/PageHero";
import SearchBox from "@/components/search/SearchBox";
import { buildSearchIndex } from "@/lib/search-index";
import { search, type SearchEntry } from "@/lib/search";
import { liveHubs } from "@/lib/catalogue";
import { motifForPath } from "@/lib/visuals/defaults";

/**
 * Søgeresultaterne — serverrenderet, så formularen virker uden JavaScript, og målet for WebSite-schemaets
 * SearchAction. Aldrig i indekset: en side pr. søgning er tyndt indhold.
 */
export const metadata: Metadata = {
  title: "Søg i apparaternes strømforbrug",
  description: "Søg blandt alle apparater, kategorier og guider på Strømforbrug.dk — fra opvaskemaskine og elbil til router, akvarium og sauna.",
  robots: { index: false, follow: true },
};

const KIND_LABEL: Record<SearchEntry["k"], string> = { apparat: "Apparat", kategori: "Kategori", guide: "Guide", værktøj: "Værktøj", husstand: "Husstand" };

export default async function SoegPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw ?? "").slice(0, 100).trim();
  const results = q ? search(buildSearchIndex(), q, 30) : [];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Søg" }]}
        eyebrow="Søg"
        title={q ? `Søgeresultater for »${q}«` : "Søg i apparaternes strømforbrug"}
        motif={motifForPath("/apparater/")}
      />
      <div className="container-text py-10 md:py-14">
        <SearchBox variant="page" initialQuery={q} autoFocus={!q} />

        {q ? (
          results.length ? (
            <ul className="mt-8 divide-y divide-border rounded-card bg-surface shadow-sm">
              {results.map((r) => (
                <li key={r.u}>
                  <Link href={r.u} className="flex items-baseline justify-between gap-3 px-5 py-4 hover:bg-bg-blue">
                    <span className="min-w-0">
                      <span className="block font-semibold text-ink">{r.t}</span>
                      <span className="block text-sm text-ink-muted">{KIND_LABEL[r.k]} · {r.d}</span>
                    </span>
                    {r.kwh !== undefined && r.kwh > 0 ? <span className="shrink-0 text-sm text-ink-muted tabular">{r.kwh.toLocaleString("da-DK")} kWh/år</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-card bg-bg-blue p-5 text-ink-body">
              <p>
                Vi har endnu ingen side om »{q}«. Kender du apparatets effekt i watt, kan du{" "}
                <Link href="/beregner/" className="content-link">regne forbruget ud i beregneren</Link> — eller se{" "}
                <Link href="/apparater/" className="content-link">alle apparater</Link>.
              </p>
            </div>
          )
        ) : null}

        <h2 className="mt-12 font-heading text-xl font-semibold text-ink">Gå på opdagelse efter kategori</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {liveHubs().map((c) => (
            <li key={c.key}>
              <Link href={`/apparater/${c.slug}/`} className="inline-flex rounded-pill border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-body hover:border-accent hover:text-ink">
                {c.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/apparater/" className="inline-flex rounded-pill border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-body hover:border-accent hover:text-ink">
              Alle apparater
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
