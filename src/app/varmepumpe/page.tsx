import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { getPrices, tokenPrices, calculatorPrices, calculatorDeal } from "@/lib/prices";
import { renderWith, wrapTables } from "@/lib/tokens";
import PriceBasis from "@/components/content/PriceBasis";
import BestTimeToday from "@/components/appliance/BestTimeToday";
import ElpriserWidget from "@/components/widget/ElpriserWidget";
import { getBothToday } from "@/lib/hourly-today";
import { getAppliance } from "@/lib/appliances";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";

import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import SwitchCta from "@/components/marketing/SwitchCta";
import RelatedAppliances from "@/components/marketing/RelatedAppliances";
import { Zap, Calendar, BarChart3 } from "lucide-react";
import { withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";

import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import FaqBand from "@/components/marketing/FaqBand";

export const metadata: Metadata = {
  title: withCurrentYear("Varmepumpe strømforbrug (2026) → Se kWh og pris pr. type"),
  description:
    "En varmepumpe bruger 2.000-6.000 kWh/år afhængigt af type. Se præcist forbrug for luft-til-luft, luft-til-vand og jordvarme — og beregn din årlige udgift.",
  alternates: { canonical: `${SITE_CONFIG.url}/varmepumpe/` },
};

export default async function VarmepumpePage() {
  const data = getAppliance("varmepumpe")!;
  const [prices, today] = await Promise.all([getPrices(), getBothToday()]);
  const t = tokenPrices(prices);
  const faqs = data.faqs.map((f) => ({ ...f, answer: renderWith(t, f.answer) }));
  const url = `${SITE_CONFIG.url}/varmepumpe/`;
  const costTypical = Math.round(data.typicalKwh * t.dk);

  const schemas = [
    breadcrumbSchema([
      { name: "Forside", url: SITE_CONFIG.url },
      { name: "Varmepumpe", url },
    ]),
    faqSchema(faqs),
    articleSchema({
      title: data.heading,
      description: withCurrentYear(data.description),
      url,
      datePublished: "2026-07-29",
      dateModified: pageMeta("/varmepumpe/").updated,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <PageHero crumbs={[{ name: "Varmepumpe" }]} eyebrow="Varmepumpe" title={data.heading} lastUpdated={pageMeta("/varmepumpe/").updated} motif={motifForPath("/varmepumpe/")} />

      <article className="container-text py-10 md:py-14">
        <QuickAnswer><p>{renderWith(t, data.quickAnswer)}</p></QuickAnswer>

        {/* Sub-page links */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <Link href="/varmepumpe/luft-til-luft/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">Luft-til-luft</p>
            <p className="text-xs text-ink-500 mt-1">2.000-4.000 kWh/år</p>
          </Link>
          <Link href="/varmepumpe/luft-til-vand/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">Luft-til-vand</p>
            <p className="text-xs text-ink-500 mt-1">4.000-6.000 kWh/år</p>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4 text-accent-500" />
              <span className="text-xs text-ink-500">Typisk forbrug</span>
            </div>
            <p className="number">{data.typicalKwh.toLocaleString("da-DK")}</p>
            <p className="text-xs text-ink-500">kWh/år</p>
          </div>
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <BarChart3 className="w-4 h-4 text-accent-500" />
              <span className="text-xs text-ink-500">Spænd</span>
            </div>
            <p className="text-sm font-bold text-brand-800">{data.kwhRange[0].toLocaleString("da-DK")}-{data.kwhRange[1].toLocaleString("da-DK")}</p>
            <p className="text-xs text-ink-500">kWh/år</p>
          </div>
          <div className="key-fact">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Calendar className="w-4 h-4 text-accent-500" />
              <span className="text-xs text-ink-500">Årlig pris</span>
            </div>
            <p className="number">{costTypical.toLocaleString("da-DK")}</p>
            <p className="text-xs text-ink-500">kr./år</p>
          </div>
          <div className="key-fact">
            <span className="text-xs text-ink-500">Standby</span>
            <p className="text-sm font-bold text-brand-800">{data.standbyWatts} W</p>
            <p className="text-xs text-ink-500">{Math.round(data.standbyWatts * 8.76)} kWh/år</p>
          </div>
        </div>

        <ForbrugBeregner
          title={data.calculatorConfig.title}
          options={data.calculatorConfig.options}
          usageLabel={data.calculatorConfig.usageLabel}
          usageUnit={data.calculatorConfig.usageUnit}
          usageMin={data.calculatorConfig.usageMin}
          usageMax={data.calculatorConfig.usageMax}
          usageDefault={data.calculatorConfig.usageDefault}
          usageStep={data.calculatorConfig.usageStep}
          prices={calculatorPrices(prices)}
          deal={calculatorDeal(prices)}
        />
        <PriceBasis prices={prices} className="-mt-6 mb-10" />
        <BestTimeToday data={data} today={today} />
        <ElpriserWidget sted="dk1" kompakt className="my-8" />

        <div className="prose-content" dangerouslySetInnerHTML={{ __html: wrapTables(renderWith(t, data.content)) }} />

        <SwitchCta kwh={9000} household="et hus med varmepumpe" />

        <RelatedAppliances slugs={data.relatedSlugs} />
      </article>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/varmepumpe/" prices={prices} />
      <AuthorBox />
    </>
  );
}
