import type { Metadata } from "next";
import CampaignCard from "@/components/campaign/CampaignCard";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import PageHero from "@/components/marketing/PageHero";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PriceBasis from "@/components/content/PriceBasis";
import MotifChip from "@/components/visuals/MotifChip";
import { getPublishedAppliances } from "@/lib/appliances";
import { CATEGORIES, liveHubs, metaOf } from "@/lib/catalogue";
import { termsFor } from "@/lib/search";
import FinderFilter from "@/components/search/FinderFilter";
import { getPrices, tokenPrices } from "@/lib/prices";
import { getBothToday, hourSpan } from "@/lib/hourly-today";
import { formatKr, formatPrice, withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { applianceMotif, motifForPath } from "@/lib/visuals/defaults";
import { bestTimeMode } from "@/components/appliance/BestTimeToday";
import AppStrip from "@/components/app-popup/AppStrip";

const PATH = "/apparater/";

export const metadata: Metadata = {
  title: withCurrentYear("Apparaters strømforbrug (2026) → Alle apparater, kWh og pris"),
  description:
    "Alle apparater sorteret efter forbrug: typisk kWh om året, pris ved månedens marginalpris og om apparatet kan flyttes til billige timer.",
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
};

const MODE_LABEL = { window: "kan flyttes til billige timer", "always-on": "kører hele døgnet", "use-time": "bruges, når du har brug for det" } as const;

export default async function ApparaterPage() {
  const [prices, today] = await Promise.all([getPrices(), getBothToday()]);
  const t = tokenPrices(prices);
  const all = [...getPublishedAppliances()].sort((a, b) => b.typicalKwh - a.typicalKwh);
  const hubSlugs = new Map(liveHubs().map((h) => [h.key, h.slug]));
  const groups = CATEGORIES.map((c) => ({ key: c.key, label: c.label, hub: hubSlugs.get(c.key), items: all.filter((a) => metaOf(a).category === c.key) })).filter((g) => g.items.length);
  const url = `${SITE_CONFIG.url}${PATH}`;
  const total = all.reduce((n, a) => n + Math.max(0, a.typicalKwh), 0);
  // Solceller producerer (negativt forbrug) — ikke enden af et forbrugsspænd.
  const users = all.filter((a) => a.typicalKwh > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([{ name: "Forside", url: SITE_CONFIG.url }, { name: "Apparater", url }]),
            articleSchema({ title: "Apparaters strømforbrug — alle apparater", description: "Alle apparater sorteret efter forbrug, med kWh om året og pris ved månedens marginalpris.", url, datePublished: pageMeta(PATH).published, dateModified: pageMeta(PATH).updated }),
            { "@context": "https://schema.org", "@type": "ItemList", name: "Apparaters strømforbrug", numberOfItems: all.length, itemListElement: all.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name, url: `${SITE_CONFIG.url}/${a.slug}/` })) },
          ]),
        }}
      />
      <PageHero
        crumbs={[{ name: "Apparater" }]}
        eyebrow="Apparater"
        title={`${all.length} apparaters strømforbrug — kWh, pris og tidspunkt`}
        lede={`Fra ${users[0].name.toLowerCase()} (${formatKr(users[0].typicalKwh)} kWh om året) til ${users[users.length - 1].name.toLowerCase()} (${formatKr(users[users.length - 1].typicalKwh)} kWh). Prisen er månedens marginalpris, ${formatPrice(t.dk)} kr./kWh; de apparater, der kan flyttes, er billigst ${hourSpan(today.DK1.cheapest)} i dag.`}
        lastUpdated={pageMeta(PATH).updated}
        motif={motifForPath(PATH)}
      />
      <CampaignCard layout="column" />

      <div className="container-text py-10 md:py-14">
        <p className="text-ink-body">
          Hvert apparat har sin egen side med forbrug pr. gang, energimærker, modeller, sæson og dagens billigste tidspunkt. Her er de alle
          {" "}{all.length}, ordnet efter kategori og typisk årsforbrug — tilsammen {formatKr(total)} kWh om året, hvis man havde dem alle, hvilket
          ingen husstand har.
        </p>
        <PriceBasis prices={prices} className="mt-4" />
        <AppStrip placement="apparater-top" context="cheapest-hours" className="mt-8" />

        {/* Kategorierne som genveje (ankre på siden, hubben hvor den findes) */}
        <nav aria-label="Kategorier" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.key}>
                <a href={`#kat-${g.key}`} className="inline-flex rounded-pill border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-body hover:border-accent hover:text-ink">
                  {g.label} <span className="ml-1 text-ink-muted tabular">{g.items.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6">
          <FinderFilter targetId="apparatliste" total={all.length} />
        </div>

        <div id="apparatliste">
          {groups.map((g) => (
            <section key={g.key} className="mt-10 scroll-mt-40" id={`kat-${g.key}`} aria-labelledby={`kat-${g.key}-h`} data-finder-group>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 id={`kat-${g.key}-h`} className="font-heading text-2xl font-semibold text-ink">{g.label}</h2>
                {g.hub ? (
                  <Link href={`/apparater/${g.hub}/`} className="text-sm font-semibold text-accent hover:underline">Se kategorien →</Link>
                ) : null}
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {g.items.map((a) => (
                  <li key={a.slug} data-finder-item data-terms={termsFor([a.name, a.slug.replace(/-/g, " "), g.label, ...metaOf(a).synonyms]).join(" ")}>
                    <Link href={`/${a.slug}/`} className="group flex h-full items-center gap-3 rounded-card bg-surface p-3 shadow-sm transition-shadow hover:shadow-card">
                      <MotifChip motif={applianceMotif(a.slug)} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-ink group-hover:text-accent">{a.name}</span>
                        <span className="block text-xs text-ink-muted tabular">
                          {formatKr(a.typicalKwh)} kWh · {formatKr(a.typicalKwh * t.dk)} kr. om året · {MODE_LABEL[bestTimeMode(a)]}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <WhoHowWhy path={PATH} prices={prices} />
      <AuthorBox />
    </>
  );
}
