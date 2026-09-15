import Link from "next/link";
import { Zap, Calculator, Home, BarChart3 } from "lucide-react";
import { SITE_CONFIG, ELECTRICITY_PRICE_KR_PER_KWH } from "@/lib/config";
import { formatKr } from "@/lib/pricing";
import { getPublishedAppliances } from "@/lib/appliances";
import { homeFaqs, topEverydayAppliances } from "@/lib/home-insights";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  DirectAnswer,
  HouseholdProfiles,
  WhatDominates,
  Methodology,
} from "@/components/home/HomePillar";

export default function HomePage() {
  // Sort by typical kWh descending for the ranking
  const sorted = [...getPublishedAppliances()].sort((a, b) => b.typicalKwh - a.typicalKwh);
  const faqs = homeFaqs();
  const everyday = topEverydayAppliances(5);

  // The pillar page previously carried no page-level schema at all — every
  // appliance page it links to was better marked up than the page itself.
  const schema = [
    breadcrumbSchema([{ name: "Forside", url: `${SITE_CONFIG.url}/` }]),
    articleSchema({
      title: "Strømforbrug i Danmark — se hvad dine apparater bruger",
      description: SITE_CONFIG.description,
      url: `${SITE_CONFIG.url}/`,
      datePublished: "2026-07-29",
      dateModified: SITE_CONFIG.lastUpdated,
    }),
    faqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Apparaters strømforbrug",
      description: "Typisk årligt strømforbrug for almindelige apparater i danske hjem",
      numberOfItems: sorted.length,
      itemListElement: sorted.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.name,
        url: `${SITE_CONFIG.url}/${a.slug}/`,
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero */}
      <section className="bg-brand-800 text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-8 h-8 text-accent-400" />
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-medium mb-4 leading-tight">
            Strømforbrug i Danmark
          </h1>
          <p className="text-lg sm:text-xl text-brand-200 max-w-2xl mx-auto mb-8">
            Se hvor meget strøm dine apparater bruger, beregn din årlige udgift
            og få konkrete tips til at spare på elregningen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/beregner/"
              className="btn-cta bg-accent-500 hover:bg-accent-600 text-ink-900"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Beregn dit strømforbrug
              </span>
            </Link>
            <Link
              href="/gennemsnitligt/"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white transition-colors underline underline-offset-4"
            >
              Se gennemsnitligt forbrug
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-surface-alt border-b border-ink-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/beregner/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <Calculator className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Strømberegner
              </span>
            </Link>
            <Link
              href="/gennemsnitligt/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <BarChart3 className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Gennemsnitligt forbrug
              </span>
            </Link>
            <Link
              href="/varmepumpe/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <Zap className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Varmepumpe
              </span>
            </Link>
            <Link
              href="/husstand/"
              className="flex flex-col items-center gap-2 p-4 rounded-card hover:bg-white hover:shadow-sm transition-all text-center"
            >
              <Home className="w-6 h-6 text-brand-600" />
              <span className="text-sm font-medium text-ink-800">
                Husstand
              </span>
            </Link>
          </div>
        </div>
      </section>

      <DirectAnswer />
      <HouseholdProfiles />
      <WhatDominates />

      {/* Appliance ranking */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-medium text-ink-900 mb-2">
            Alle apparaters strømforbrug
          </h2>
          <p className="text-ink-600 mb-8 max-w-2xl">
            Oversigt over typisk årligt strømforbrug for de mest almindelige
            apparater i danske hjem. Klik på et apparat for at se detaljeret
            guide med beregner.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">
                    Apparat
                  </th>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">
                    kWh/år
                  </th>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">
                    Pris/år
                  </th>
                  <th className="text-left py-3 px-4 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium hidden sm:table-cell">
                    Effekt (W)
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((appliance) => (
                  <tr key={appliance.slug} className="hover:bg-surface-alt group">
                    <td className="py-3 px-4 border-b border-ink-200">
                      <Link
                        href={`/${appliance.slug}/`}
                        className="font-medium text-brand-700 group-hover:text-brand-900 transition-colors"
                      >
                        {appliance.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 border-b border-ink-200">
                      {appliance.kwhRange[0].toLocaleString("da-DK")}-
                      {appliance.kwhRange[1].toLocaleString("da-DK")}
                    </td>
                    <td className="py-3 px-4 border-b border-ink-200">
                      {Math.round(
                        appliance.typicalKwh * ELECTRICITY_PRICE_KR_PER_KWH
                      ).toLocaleString("da-DK")}{" "}
                      kr.
                    </td>
                    <td className="py-3 px-4 border-b border-ink-200 hidden sm:table-cell">
                      {appliance.wattage.toLocaleString("da-DK")} W
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Editorial content */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-editorial">
          <h2>Hvad er strømforbrug?</h2>
          <p>
            Strømforbrug måles i kilowatt-timer (kWh) og angiver hvor meget
            elektrisk energi dine apparater bruger over tid. 1 kWh svarer til at
            bruge 1.000 watt i én time — for eksempel en{" "}
            <Link href="/ovn/">ovn på 1.000W</Link> der kører i 60 minutter.
          </p>
          <p>
            Den gennemsnitlige danske husstand bruger{" "}
            <Link href="/gennemsnitligt/">3.000-4.500 kWh strøm om året</Link>,
            svarende til 5.580-8.370 kr. ved den aktuelle gennemsnitspris på
            1,86 kr./kWh. Inkluderer husstanden en{" "}
            <Link href="/varmepumpe/">varmepumpe</Link>, stiger forbruget typisk
            til 6.000-10.000 kWh/år.
          </p>

          <h2>Hvilke hvidevarer bruger mest?</h2>
          <p>
            Ser man bort fra opvarmning, varmt vand og elbil — som er behandlet
            ovenfor — er det madlavning, tørring og køl/frys, der fylder mest. Her er
            de fem største blandt de apparater, de fleste husstande faktisk har:
          </p>
          <ol>
            {everyday.map((t) => (
              <li key={t.appliance.slug}>
                <strong>
                  <Link href={`/${t.appliance.slug}/`}>{t.appliance.name}</Link>
                </strong>{" "}
                — {t.appliance.kwhRange[0].toLocaleString("da-DK")}-
                {t.appliance.kwhRange[1].toLocaleString("da-DK")} kWh/år, typisk{" "}
                {formatKr(t.cost)} kr.
              </li>
            ))}
          </ol>
          <p>
            Rækkefølgen overrasker mange: <Link href="/komfur/">komfuret</Link> og
            kogepladen slår både <Link href="/toerretumbler/">tørretumbleren</Link> og{" "}
            <Link href="/koeleskab/">køleskabet</Link>, fordi de bruger meget effekt
            hver dag året rundt. Til gengæld betyder{" "}
            <Link href="/tv/">tv</Link> og elektronik mindre, end de fleste tror.
          </p>

          <h2>Sådan beregner du dit strømforbrug</h2>
          <p>
            Formlen er enkel: <strong>Watt × timer × dage ÷ 1.000 = kWh</strong>
            . Eksempel: et <Link href="/tv/">55&quot; tv</Link> på 85W der kører 4
            timer dagligt bruger 85 × 4 × 365 ÷ 1.000 = 124 kWh/år, svarende
            til 231 kr.
          </p>
          <p>
            Brug vores{" "}
            <Link href="/beregner/">
              interaktive strømberegner
            </Link>{" "}
            til at beregne forbruget for alle dine apparater — eller klik ind på
            et specifikt apparat i oversigten ovenfor for en detaljeret guide.
          </p>

          <h2>Tips til at spare på strømmen</h2>
          <p>
            De tre mest effektive måder at reducere dit strømforbrug på er: 1)
            skift til energieffektive apparater (især{" "}
            <Link href="/toerretumbler/">tørretumbler</Link> og{" "}
            <Link href="/koeleskab/">køleskab</Link> giver stor besparelse), 2)
            reducer standby-forbrug ved at slukke helt, og 3) vælg et billigere
            elselskab med lavere kWh-pris.
          </p>
        </div>
      </section>
      <Methodology />

      {/* FAQ — answers computed from the same data as the tables above */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-medium text-ink-900 mb-8">
            Ofte stillede spørgsmål om strømforbrug
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading text-lg font-medium text-ink-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-ink-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
