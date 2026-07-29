import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, ELECTRICITY_PRICE_KR_PER_KWH } from "@/lib/config";
import { getAppliance } from "@/lib/appliances";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import AffiliateCta from "@/components/marketing/AffiliateCta";
import RelatedAppliances from "@/components/marketing/RelatedAppliances";
import { Zap, Calendar, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Varmepumpe strømforbrug 2026 → Se kWh og pris pr. type",
  description:
    "En varmepumpe bruger 2.000-6.000 kWh/år afhængigt af type. Se præcist forbrug for luft-til-luft, luft-til-vand og jordvarme — og beregn din årlige udgift.",
  alternates: { canonical: `${SITE_CONFIG.url}/varmepumpe/` },
};

export default function VarmepumpePage() {
  const data = getAppliance("varmepumpe")!;
  const url = `${SITE_CONFIG.url}/varmepumpe/`;
  const costTypical = Math.round(data.typicalKwh * ELECTRICITY_PRICE_KR_PER_KWH);

  const schemas = [
    breadcrumbSchema([
      { name: "Forside", url: SITE_CONFIG.url },
      { name: "Varmepumpe", url },
    ]),
    faqSchema(data.faqs),
    articleSchema({
      title: data.heading,
      description: data.description,
      url,
      datePublished: "2026-07-29",
      dateModified: SITE_CONFIG.lastUpdated,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Varmepumpe" }]} />
        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          {data.heading}
        </h1>
        <QuickAnswer><p>{data.quickAnswer}</p></QuickAnswer>

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
        />

        <div className="prose-editorial" dangerouslySetInnerHTML={{ __html: data.content }} />

        <AffiliateCta />

        <div className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">
            Ofte stillede spørgsmål om varmepumpe strømforbrug
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group border border-ink-200 rounded-card">
                <summary className="cursor-pointer px-5 py-4 font-medium text-ink-900 hover:bg-surface-alt transition-colors rounded-card">
                  {faq.question}
                </summary>
                <div className="px-5 pb-4 text-sm text-ink-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>

        <RelatedAppliances slugs={data.relatedSlugs} />
      </article>
    </>
  );
}
