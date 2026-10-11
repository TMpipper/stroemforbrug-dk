import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import PageHero from "@/components/marketing/PageHero";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PriceBasis from "@/components/content/PriceBasis";
import MotifChip from "@/components/visuals/MotifChip";
import { getPublishedAppliances } from "@/lib/appliances";
import { categoryOf, CATEGORY_LABELS, type CategoryKey } from "@/lib/home-insights";
import { getPrices, tokenPrices } from "@/lib/prices";
import { getBothToday, hourSpan } from "@/lib/hourly-today";
import { formatKr, formatPrice, withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { applianceMotif, motifForPath } from "@/lib/visuals/defaults";
import { isAlwaysOn } from "@/components/appliance/BestTimeToday";

const PATH = "/apparater/";

export const metadata: Metadata = {
  title: withCurrentYear("Apparaters strømforbrug (2026) → Alle apparater, kWh og pris"),
  description:
    "Alle apparater sorteret efter forbrug: typisk kWh om året, pris ved månedens marginalpris og om apparatet kan flyttes til billige timer.",
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
};

const ORDER: CategoryKey[] = ["varme", "transport", "vaskToerring", "koelFrys", "madlavning", "underholdning", "oevrigt"];

export default async function ApparaterPage() {
  const [prices, today] = await Promise.all([getPrices(), getBothToday()]);
  const t = tokenPrices(prices);
  const all = [...getPublishedAppliances()].sort((a, b) => b.typicalKwh - a.typicalKwh);
  const groups = ORDER.map((key) => ({ key, label: CATEGORY_LABELS[key], items: all.filter((a) => categoryOf(a.slug) === key) })).filter((g) => g.items.length);
  const url = `${SITE_CONFIG.url}${PATH}`;
  const total = all.reduce((n, a) => n + a.typicalKwh, 0);

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
        lede={`Fra ${all[0].name.toLowerCase()} (${formatKr(all[0].typicalKwh)} kWh om året) til ${all[all.length - 1].name.toLowerCase()} (${formatKr(all[all.length - 1].typicalKwh)} kWh). Prisen er månedens marginalpris, ${formatPrice(t.dk)} kr./kWh; de apparater, der kan flyttes, er billigst ${hourSpan(today.DK1.cheapest)} i dag.`}
        lastUpdated={pageMeta(PATH).updated}
        motif={motifForPath(PATH)}
      />

      <div className="container-text py-10 md:py-14">
        <p className="text-ink-body">
          Hvert apparat har sin egen side med forbrug pr. gang, energimærker, modeller, sæson og dagens billigste tidspunkt. Her er de alle
          {" "}{all.length}, ordnet efter kategori og typisk årsforbrug — tilsammen {formatKr(total)} kWh om året, hvis man havde dem alle, hvilket
          ingen husstand har.
        </p>
        <PriceBasis prices={prices} className="mt-4" />

        {groups.map((g) => (
          <section key={g.key} className="mt-12" aria-labelledby={`kat-${g.key}`}>
            <h2 id={`kat-${g.key}`} className="font-heading text-2xl font-semibold text-ink">{g.label}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {g.items.map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.slug}/`} className="group flex h-full items-center gap-3 rounded-card bg-surface p-3 shadow-sm transition-shadow hover:shadow-card">
                    <MotifChip motif={applianceMotif(a.slug)} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink group-hover:text-accent">{a.name}</span>
                      <span className="block text-xs text-ink-muted tabular">
                        {formatKr(a.typicalKwh)} kWh · {formatKr(a.typicalKwh * t.dk)} kr. om året · {isAlwaysOn(a) ? "kører hele døgnet" : "kan flyttes til billige timer"}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <WhoHowWhy path={PATH} prices={prices} />
      <AuthorBox />
    </>
  );
}
