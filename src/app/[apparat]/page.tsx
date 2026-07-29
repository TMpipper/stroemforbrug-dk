import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG, ELECTRICITY_PRICE_KR_PER_KWH } from "@/lib/config";
import { getAppliance, getAllSlugs } from "@/lib/appliances";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import AffiliateCta from "@/components/marketing/AffiliateCta";
import RelatedAppliances from "@/components/marketing/RelatedAppliances";
import { Zap, Calendar, BarChart3 } from "lucide-react";

// Reserved slugs that should NOT be handled by this dynamic route
const RESERVED_SLUGS = [
  "beregner",
  "gennemsnitligt",
  "husstand",
  "varmepumpe",
  "sparetips",
  "standby",
  "stromslugere",
  "spare-paa-stroemmen",
  "hvad-koster-en-kwh",
  "hvad-koster-det-at-lade-en-elbil",
  "om-os",
  "kontakt",
  "privatlivspolitik",
  "go",
];

export async function generateStaticParams() {
  return getAllSlugs()
    .filter((slug) => !RESERVED_SLUGS.includes(slug))
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
    title: data.title,
    description: data.description,
    alternates: { canonical: `${SITE_CONFIG.url}/${data.slug}/` },
    openGraph: {
      title: data.title,
      description: data.description,
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

  if (!data || RESERVED_SLUGS.includes(apparat)) {
    notFound();
  }

  const url = `${SITE_CONFIG.url}/${data.slug}/`;
  const costMin = Math.round(data.kwhRange[0] * ELECTRICITY_PRICE_KR_PER_KWH);
  const costMax = Math.round(data.kwhRange[1] * ELECTRICITY_PRICE_KR_PER_KWH);
  const costTypical = Math.round(data.typicalKwh * ELECTRICITY_PRICE_KR_PER_KWH);

  const schemas = [
    breadcrumbSchema([
      { name: "Forside", url: SITE_CONFIG.url },
      { name: data.name, url },
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
        <Breadcrumb items={[{ name: data.name }]} />

        {/* Byline */}
        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* H1 */}
        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          {data.heading}
        </h1>

        {/* Quick Answer */}
        <QuickAnswer>
          <p>{data.quickAnswer}</p>
        </QuickAnswer>

        {/* Key facts grid */}
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
            <p className="text-sm font-bold text-brand-800">
              {data.kwhRange[0].toLocaleString("da-DK")}-
              {data.kwhRange[1].toLocaleString("da-DK")}
            </p>
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
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-xs text-ink-500">Standby</span>
            </div>
            <p className="text-sm font-bold text-brand-800">
              {data.standbyWatts} W
            </p>
            <p className="text-xs text-ink-500">
              {Math.round(data.standbyWatts * 8.76)} kWh/år
            </p>
          </div>
        </div>

        {/* Calculator */}
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

        {/* Main content */}
        <div
          className="prose-editorial"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        {/* Second CTA */}
        <AffiliateCta />

        {/* Energy labels table */}
        {data.energyLabels.length > 0 && (
          <div className="my-10">
            <h2 className="font-heading text-xl font-medium text-ink-900 mb-4">
              Energimærkning — {data.name}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
                      Energimærke
                    </th>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
                      kWh/år
                    </th>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
                      Pris/år
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.energyLabels.map((label) => (
                    <tr key={label.class} className="hover:bg-surface-alt">
                      <td className="py-2 px-3 border-b border-ink-200 font-medium">
                        <span
                          className={`energy-${label.class.toLowerCase().replace(/\+/g, "")}`}
                        >
                          {label.class}
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b border-ink-200">
                        {label.kwhPerYear} kWh
                      </td>
                      <td className="py-2 px-3 border-b border-ink-200">
                        {Math.round(label.kwhPerYear * ELECTRICITY_PRICE_KR_PER_KWH).toLocaleString("da-DK")}{" "}
                        kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Specific models */}
        {data.models.length > 0 && (
          <div className="my-10">
            <h2 className="font-heading text-xl font-medium text-ink-900 mb-4">
              Populære modeller — {data.name} strømforbrug
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
                      Mærke
                    </th>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
                      Model
                    </th>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
                      kWh/år
                    </th>
                    <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200">
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
                      <td className="py-2 px-3 border-b border-ink-200 font-medium">
                        {model.brand}
                      </td>
                      <td className="py-2 px-3 border-b border-ink-200">
                        {model.model}
                      </td>
                      <td className="py-2 px-3 border-b border-ink-200">
                        {model.kwh} kWh
                      </td>
                      <td className="py-2 px-3 border-b border-ink-200">
                        {Math.round(model.kwh * ELECTRICITY_PRICE_KR_PER_KWH).toLocaleString("da-DK")}{" "}
                        kr.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FAQ section */}
        <div className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">
            Ofte stillede spørgsmål om {data.name.toLowerCase()} strømforbrug
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-ink-200 rounded-card"
              >
                <summary className="cursor-pointer px-5 py-4 font-medium text-ink-900 hover:bg-surface-alt transition-colors rounded-card">
                  {faq.question}
                </summary>
                <div className="px-5 pb-4 text-sm text-ink-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Related appliances */}
        <RelatedAppliances slugs={data.relatedSlugs} />

        {/* Sources */}
        {data.sources.length > 0 && (
          <div className="mt-10 pt-6 border-t border-ink-200">
            <p className="text-xs text-ink-400 mb-2 font-medium uppercase tracking-wide">
              Kilder
            </p>
            <ul className="text-xs text-ink-500 space-y-1">
              {data.sources.map((source, i) => (
                <li key={i}>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-brand-700 underline"
                    >
                      {source.name}
                    </a>
                  ) : (
                    source.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </>
  );
}
