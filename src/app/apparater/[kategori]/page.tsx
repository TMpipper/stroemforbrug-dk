import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import PageHero from "@/components/marketing/PageHero";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PriceBasis from "@/components/content/PriceBasis";
import MotifChip from "@/components/visuals/MotifChip";
import SearchBox from "@/components/search/SearchBox";
import { appliancesIn, categoryBySlug, liveHubs, metaOf, type Category } from "@/lib/catalogue";
import { bestTimeMode } from "@/components/appliance/BestTimeToday";
import { getPrices, tokenPrices } from "@/lib/prices";
import { formatKr, formatPrice, withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { applianceMotif } from "@/lib/visuals/defaults";
import type { ApplianceData } from "@/lib/types";

/**
 * Kategorihubberne: /apparater/<kategori>/ for hver kategori med mindst HUB_MIN_ITEMS udgivne apparater
 * (catalogue.ts). Alt på siden er regnet af apparaternes data og månedens marginalpris — ingen tal er skrevet.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return liveHubs().map((c) => ({ kategori: c.slug }));
}

const MODE_LABEL = { window: "Kan flyttes til billige timer", "always-on": "Kører hele døgnet", "use-time": "Bruges, når du har brug for det" } as const;

/** Første kandidat inden for audit-seo's bånd (titel 50–60, beskrivelse 120–158 tegn). */
function within(cands: string[], min: number, max: number): string {
  return cands.find((c) => [...c].length >= min && [...c].length <= max) ?? cands[cands.length - 1];
}

function titleFor(c: Category, n: number): string {
  return within(
    [
      `${c.keyword} (2026) → ${n} apparater, kWh og pris`,
      `${c.keyword} (2026) → ${n} apparater med kWh og pris pr. år`,
      `${c.keyword} (2026) → ${n} apparater og pris pr. år`,
      `${c.keyword} (2026) → kWh og pris pr. år`,
      `${c.keyword} (2026) → ${n} apparater og pris`,
      `${c.keyword} (2026) → kWh og pris`,
    ].map((t) => withCurrentYear(t)),
    50,
    60,
  );
}

function descriptionFor(c: Category, items: ApplianceData[]): string {
  const names = items.slice(0, 3).map((a) => a.name.toLowerCase()).join(", ");
  return within(
    [
      `Se strømforbruget for ${items.length} apparater i kategorien ${c.label.toLowerCase()}: typisk kWh om året, pris pr. år, og hvilke der kan flyttes til billige timer.`,
      `Strømforbruget for ${names} og flere: typisk kWh om året, pris ved månedens elpris, og hvilke der kan flyttes til billige timer.`,
      `Strømforbruget for ${items.length} apparater: ${names}. Typisk kWh om året, pris pr. år, og hvilke apparater der kan flyttes til de billige timer.`,
      `Se strømforbruget for ${items.length} apparater i kategorien ${c.label.toLowerCase()}: typisk kWh om året og pris pr. år ved månedens elpris.`,
    ],
    120,
    158,
  );
}

export async function generateMetadata({ params }: { params: Promise<{ kategori: string }> }): Promise<Metadata> {
  const { kategori } = await params;
  const c = categoryBySlug(kategori);
  if (!c) return {};
  const items = appliancesIn(c.key);
  const url = `${SITE_CONFIG.url}/apparater/${c.slug}/`;
  return {
    title: titleFor(c, items.length),
    description: descriptionFor(c, items),
    alternates: { canonical: url },
    openGraph: { url, title: titleFor(c, items.length), description: descriptionFor(c, items), type: "website", locale: "da_DK" },
  };
}

export default async function KategoriPage({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const c = categoryBySlug(kategori);
  if (!c) notFound();
  const items = appliancesIn(c.key);
  if (!items.length) notFound();

  const prices = await getPrices();
  const t = tokenPrices(prices);
  const path = `/apparater/${c.slug}/`;
  const url = `${SITE_CONFIG.url}${path}`;
  const top = items[0];
  const least = items[items.length - 1];
  const shiftable = items.filter((a) => bestTimeMode(a) === "window");
  const allDay = items.filter((a) => bestTimeMode(a) === "always-on");
  const labelled = items.filter((a) => metaOf(a).hasEuLabel);
  const others = liveHubs().filter((h) => h.key !== c.key);
  const kr = (kwh: number) => formatKr(kwh * t.dk);
  // »TV« og »PlayStation« beholder deres store bogstaver; resten skrives med småt midt i en sætning.
  const name = (a: ApplianceData) => (/[A-ZÆØÅ]/.test(a.name.slice(1)) ? a.name : a.name.toLowerCase());
  const list = (xs: ApplianceData[]) => {
    const n = xs.map(name);
    const text = n.length > 1 ? `${n.slice(0, -1).join(", ")} og ${n[n.length - 1]}` : n[0];
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const faqs = [
    {
      question: `Hvad bruger mest strøm i kategorien ${c.label.toLowerCase()}?`,
      answer: `Af de ${items.length} apparater bruger ${name(top)} mest: typisk ${formatKr(top.typicalKwh)} kWh om året, ca. ${kr(top.typicalKwh)} kr. ved ${formatPrice(t.dk)} kr./kWh. Mindst bruger ${name(least)} med ${formatKr(least.typicalKwh)} kWh.`,
    },
    {
      question: `Hvilke af dem kan flyttes til de billige timer?`,
      answer: shiftable.length
        ? `${list(shiftable)} kan sættes til at køre, når strømmen er billigst — typisk om natten eller midt på dagen. Hvert apparats side viser dagens billigste vindue.`
        : `Ingen af apparaterne her er oplagte at flytte: de bruges, når man har brug for dem, eller kører hele døgnet. Det, der kan spares, ligger i valget af model og i at undgå de dyreste timer.`,
    },
    {
      question: `Hvordan er tallene regnet?`,
      answer: `Forbruget er det typiske årsforbrug fra hvert apparats side, med kilder dér. Prisen er månedens marginalpris, ${formatPrice(t.dk)} kr./kWh: spotpris, nettarif, afgifter og moms, men uden abonnement, som du betaler uanset forbrug.`,
    },
  ];

  const schemas = [
    breadcrumbSchema([
      { name: "Forside", url: SITE_CONFIG.url },
      { name: "Apparater", url: `${SITE_CONFIG.url}/apparater/` },
      { name: c.label, url },
    ]),
    faqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${c.keyword}`,
      numberOfItems: items.length,
      itemListElement: items.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name, url: `${SITE_CONFIG.url}/${a.slug}/` })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <PageHero
        crumbs={[{ name: "Apparater", href: "/apparater/" }, { name: c.label }]}
        eyebrow="Kategori"
        title={`${c.keyword}: ${items.length} apparater, kWh og pris`}
        lede={`${c.blurb} Fra ${name(top)} (${formatKr(top.typicalKwh)} kWh om året) til ${name(least)} (${formatKr(least.typicalKwh)} kWh).`}
        lastUpdated={pageMeta(path).updated}
        motif={c.motif}
      />

      <div className="container-text py-10 md:py-14">
        <SearchBox variant="page" placeholder="Søg i alle apparater" />

        <p className="mt-8 text-ink-body">
          Tabellen viser det typiske årsforbrug for hvert apparat og hvad det koster ved månedens marginalpris. {allDay.length
            ? `${list(allDay)} kører hele døgnet, så dér er det modellen, der afgør regningen. `
            : ""}
          {shiftable.length ? `${list(shiftable)} kan flyttes til de billige timer. ` : ""}
          {labelled.length ? `${list(labelled)} har et EU-energimærke, som viser forbruget pr. år eller pr. gang.` : ""}
        </p>

        <div className="scroll-hint not-prose my-8 overflow-x-auto rounded-card bg-surface shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-bg-blue">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink">Apparat</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">kWh/år</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Pris/år</th>
                <th scope="col" className="hidden px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink sm:table-cell">Effekt</th>
              </tr>
            </thead>
            <tbody>
              {items.map((a) => (
                <tr key={a.slug} className="border-t border-border">
                  <td className="px-4 py-3">
                    <Link href={`/${a.slug}/`} className="flex items-center gap-3 font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent">
                      <MotifChip motif={applianceMotif(a.slug)} />
                      <span>
                        {a.name}
                        <span className="block text-xs font-normal text-ink-muted no-underline">{MODE_LABEL[bestTimeMode(a)]}</span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right tabular text-ink-body">{formatKr(a.typicalKwh)}</td>
                  <td className="px-4 py-3 text-right tabular font-semibold text-ink">{kr(a.typicalKwh)} kr.</td>
                  <td className="hidden px-4 py-3 text-right tabular text-ink-body sm:table-cell">{formatKr(a.wattage)} W</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PriceBasis prices={prices} />

        {others.length ? (
          <nav aria-label="Andre kategorier" className="mt-12">
            <h2 className="font-heading text-xl font-semibold text-ink">Andre kategorier</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {others.map((h) => (
                <li key={h.key}>
                  <Link href={`/apparater/${h.slug}/`} className="inline-flex rounded-pill border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-body hover:border-accent hover:text-ink">
                    {h.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/apparater/" className="inline-flex rounded-pill border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-body hover:border-accent hover:text-ink">
                  Alle apparater
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>

      <FaqBand faqs={faqs} />
      <WhoHowWhy path={path} prices={prices} />
      <AuthorBox />
    </>
  );
}
