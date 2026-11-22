import type { Metadata } from "next";
import CampaignCard from "@/components/campaign/CampaignCard";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { getPrices, tokenPrices, calculatorPrices, calculatorDeal } from "@/lib/prices";
import { renderWith, wrapTables, collapseAbbreviationPeriods } from "@/lib/tokens";
import { pageMeta } from "@/lib/pages";

import PriceBasis from "@/components/content/PriceBasis";
import { getAppliance, getAllSlugs } from "@/lib/appliances";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import { appliancesIn, calcModel, category as categoryInfo, headingFor, hubFor, metaOf } from "@/lib/catalogue";
import { isReserved } from "@/lib/routes";
import PageToc from "@/components/appliance/PageToc";
import ModelLinks from "@/components/appliance/ModelLinks";
import { modelsFor } from "@/lib/models";
import RelatedAppliances from "@/components/marketing/RelatedAppliances";
import ApplianceInsights from "@/components/content/ApplianceInsights";
import { EnergyLabelChart } from "@/components/charts/ApplianceCharts";
import { sourcesFor } from "@/lib/sources";
import { Zap, Calendar, BarChart3 } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import { applianceMotif } from "@/lib/visuals/defaults";
import BestTimeToday, { isAlwaysOn } from "@/components/appliance/BestTimeToday";
import AppPromo from "@/components/app-promo/AppPromo";
import { getBothToday } from "@/lib/hourly-today";
import { withCurrentYear } from "@/lib/format";


export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSlugs()
    .filter((slug) => !isReserved(slug))
    .map((slug) => ({ apparat: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ apparat: string }>;
}): Promise<Metadata> {
  const { apparat } = await params;
  const data = getAppliance(apparat);
  if (!data) return {};

  return {
    title: withCurrentYear(data.title),
    description: withCurrentYear(data.description),
    alternates: { canonical: `${SITE_CONFIG.url}/${data.slug}/` },
    openGraph: {
      title: withCurrentYear(data.title),
      description: withCurrentYear(data.description),
      url: `${SITE_CONFIG.url}/${data.slug}/`,
      type: "article",
      locale: SITE_CONFIG.locale,
    },
  };
}

export default async function AppliancePage({
  params,
}: {
  params: Promise<{ apparat: string }>;
}) {
  const { apparat } = await params;
  const data = getAppliance(apparat);

  if (!data || isReserved(apparat)) {
    notFound();
  }

  const url = `${SITE_CONFIG.url}/${data.slug}/`;
  const [prices, today] = await Promise.all([getPrices(), getBothToday()]);
  const t = tokenPrices(prices);
  const meta = pageMeta(`/${data.slug}/`);
  const updated = data.updated && data.updated > meta.updated ? data.updated : meta.updated;
  // Et beløb sidst i en sætning: »458 kr..« → »458 kr.« (også i FAQ-schemaet nedenfor).
  const content = collapseAbbreviationPeriods(wrapTables(renderWith(t, data.content)));
  const quickAnswer = collapseAbbreviationPeriods(renderWith(t, data.quickAnswer));
  const faqs = data.faqs.map((f) => ({ ...f, answer: collapseAbbreviationPeriods(renderWith(t, f.answer)) }));

  // Verified source links for this appliance, plus any named reference the data
  // already carried that is not one of the old generic homepage links.
  const GENERIC_HOSTS = ["https://ens.dk", "https://sparenergi.dk", "https://www.bolius.dk", "https://bolius.dk"];
  const ownReferences = data.sources.filter((s) => !s.url || !GENERIC_HOSTS.includes(s.url));
  const sources = [...sourcesFor(data.slug), ...ownReferences];
  const costTypical = Math.round(data.typicalKwh * t.dk);
  const calc = calcModel(data);
  const meta_ = metaOf(data);
  const heading = headingFor(data);
  const hub = hubFor(data);
  const cat = categoryInfo(meta_.category);
  // Søskende i kategorien først (efter forbrug), så datafilens relatedSlugs — seks i alt.
  const siblings = appliancesIn(meta_.category).map((a) => a.slug).filter((s) => s !== data.slug);
  const related = [...new Set([...siblings, ...data.relatedSlugs])].filter((s) => s !== data.slug).slice(0, 6);
  // Et apparat, der kører hele døgnet, har ingen billige timer at flytte til — dér den generelle tekst.
  const appContext = isAlwaysOn(data) ? "generic" : "cheapest-hours";

  const schemas = [
    breadcrumbSchema([
      { name: "Forside", url: SITE_CONFIG.url },
      { name: "Apparater", url: `${SITE_CONFIG.url}/apparater/` },
      ...(hub ? [{ name: hub.label, url: `${SITE_CONFIG.url}/apparater/${hub.slug}/` }] : []),
      { name: data.name, url },
    ]),
    faqSchema(faqs),
    articleSchema({
      title: heading,
      description: withCurrentYear(data.description),
      url,
      datePublished: meta.published,
      dateModified: updated,
      image: `${url}opengraph-image/og/`,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <PageHero
        crumbs={[{ name: "Apparater", href: "/apparater/" }, ...(hub ? [{ name: hub.label, href: `/apparater/${hub.slug}/` }] : []), { name: data.name }]}
        eyebrow="Strømforbrug"
        title={heading}
        lastUpdated={updated}
        motif={applianceMotif(data.slug)}
      />

      <article className="container-text py-10 md:py-14">
        {/* Quick Answer */}
        <QuickAnswer>
          <p>{quickAnswer}</p>
        </QuickAnswer>
        <CampaignCard />

        {/* Key facts grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-xs text-ink-500">Typisk forbrug</span>
            </div>
            <p className="number">{data.typicalKwh.toLocaleString("da-DK")}</p>
            <p className="text-xs text-ink-500">kWh/år</p>
          </div>
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-xs text-ink-500">Spænd</span>
            </div>
            <p className="text-sm font-bold text-ink tabular">
              {data.kwhRange[0].toLocaleString("da-DK")}-
              {data.kwhRange[1].toLocaleString("da-DK")}
            </p>
            <p className="text-xs text-ink-500">kWh/år</p>
          </div>
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-xs text-ink-500">Årlig pris</span>
            </div>
            <p className="number">{costTypical.toLocaleString("da-DK")}</p>
            <p className="text-xs text-ink-500">kr./år</p>
          </div>
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-xs text-ink-500">Standby</span>
            </div>
            <p className="text-sm font-bold text-ink tabular">
              {data.standbyWatts} W
            </p>
            <p className="text-xs text-ink-500">
              {Math.round(data.standbyWatts * 8.76)} kWh/år
            </p>
          </div>
        </div>


        <PageToc
          items={[
            ...(calc ? [{ id: "beregner", label: "Beregner" }] : []),
            { id: "bedste-tidspunkt", label: "Billigste tidspunkt" },
            { id: "forbrug", label: "Forbrug og tips" },
            ...(meta_.hasEuLabel && data.energyLabels.length > 0 ? [{ id: "energimaerker", label: "Energimærker" }] : []),
            ...(modelsFor(data.slug).length > 0 ? [{ id: "modelsider", label: "Modeller" }] : data.models.length > 0 ? [{ id: "modeller", label: "Modeller" }] : []),
            { id: "relaterede", label: "Lignende apparater" },
            ...(faqs.length ? [{ id: "spoergsmaal", label: "Spørgsmål" }] : []),
          ]}
        />

        {/* Calculator */}
        {calc && (
        <div id="beregner">
        <ForbrugBeregner
          title={data.calculatorConfig.title}
          options={calc.options}
          usageLabel={data.calculatorConfig.usageLabel}
          usageUnit={data.calculatorConfig.usageUnit}
          usageMin={data.calculatorConfig.usageMin}
          usageMax={data.calculatorConfig.usageMax}
          usageDefault={calc.usageDefault}
          usageStep={data.calculatorConfig.usageStep}
          perYear={calc.perYear}
          per={calc.per}
          defaultIndex={calc.defaultIndex}
          prices={calculatorPrices(prices)}
          deal={calculatorDeal(prices)}
        />
        </div>
        )}
        <PriceBasis prices={prices} className="-mt-6 mb-10" />

        {/* Sidens differentiator: hvornår på dagen apparatet er billigst — dagens timepriser fra Elpriser.dk */}
        <BestTimeToday data={data} today={today} />

        {/* Main content */}
        <div
          id="forbrug"
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Computed depth: region, season, replacement, standby, ranking */}
        <ApplianceInsights data={data} prices={t} />


        {/* Energy labels table */}
        {/* Kun produktgrupper med et gældende EU-energimærke — før stod der opfundne A–D-tabeller på airfryer, router, laptop … */}
        {meta_.hasEuLabel && data.energyLabels.length > 0 && (
          <div id="energimaerker" className="my-10">
            <EnergyLabelChart data={data} price={t.dk} />
            <h2 className="font-heading text-2xl font-semibold text-ink mb-4 mt-12">
              Energimærkning — {data.name}
            </h2>
            <div className="scroll-hint not-prose my-8 overflow-x-auto rounded-card bg-surface shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      Energimærke
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      kWh/år
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      Pris/år
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.energyLabels.map((label) => (
                    <tr key={label.class} className="hover:bg-surface-alt">
                      <td className="px-4 py-3 border-t border-border text-ink-body font-medium">
                        <span
                          className={`energy-${label.class.toLowerCase().replace(/\+/g, "")}`}
                        >
                          {label.class}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-t border-border text-ink-body">
                        {label.kwhPerYear} kWh
                      </td>
                      <td className="px-4 py-3 border-t border-border text-ink-body">
                        {Math.round(label.kwhPerYear * t.dk).toLocaleString("da-DK")}{" "}
                        kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <ModelLinks parent={data.slug} name={data.name} />

        {/* Specific models */}
        {data.models.length > 0 && (
          <div id="modeller" className="my-10">
            <h2 className="font-heading text-2xl font-semibold text-ink mb-4 mt-12">
              Populære modeller — {data.name} strømforbrug
            </h2>
            <div className="scroll-hint not-prose my-8 overflow-x-auto rounded-card bg-surface shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      Mærke
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      Model
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      kWh/år
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink bg-bg-blue">
                      Pris/år
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.models.map((model) => (
                    <tr
                      key={`${model.brand}-${model.model}`}
                      className="hover:bg-surface-alt"
                    >
                      <td className="px-4 py-3 border-t border-border text-ink-body font-medium">
                        {model.brand}
                      </td>
                      <td className="px-4 py-3 border-t border-border text-ink-body">
                        {model.model}
                      </td>
                      <td className="px-4 py-3 border-t border-border text-ink-body">
                        {model.kwh} kWh
                      </td>
                      <td className="px-4 py-3 border-t border-border text-ink-body">
                        {Math.round(model.kwh * t.dk).toLocaleString("da-DK")}{" "}
                        kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Related appliances */}
        <RelatedAppliances
          slugs={related}
          title={siblings.length ? `Flere i ${cat.label.toLowerCase()}` : "Relateret strømforbrug"}
          moreHref={hub ? `/apparater/${hub.slug}/` : "/apparater/"}
          moreLabel={hub ? `Alle i ${cat.label.toLowerCase()}` : "Alle apparater"}
        />
      </article>
      {/* Appens ene enhed på apparatsiden (ejeren 22. nov. 2026: ~4 promoer pr. side): båndet før FAQ'en. */}
      <div className="container-site pb-16 md:pb-24">
        <AppPromo variant="band" placement="apparat-tail" context={appContext} />
      </div>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path={`/${data.slug}/`} prices={prices} sources={sources} />
      <AuthorBox />
    </>
  );
}
