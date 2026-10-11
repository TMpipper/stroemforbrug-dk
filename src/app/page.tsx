import Link from "next/link";
import { Zap, Calculator, Home, BarChart3 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { formatKr, formatPrice } from "@/lib/format";
import { getPrices, tokenPrices } from "@/lib/prices";
import { getBothToday, hourSpan } from "@/lib/hourly-today";
import ElpriserWidget from "@/components/widget/ElpriserWidget";
import { getPublishedAppliances } from "@/lib/appliances";
import { homeFaqs, topEverydayAppliances } from "@/lib/home-insights";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  DirectAnswer,
  HouseholdProfiles,
  WhatDominates,
  Methodology,
} from "@/components/home/HomePillar";
import { pageMeta } from "@/lib/pages";

import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";

export default async function HomePage() {
  const [prices, today] = await Promise.all([getPrices(), getBothToday()]);
  const t = tokenPrices(prices);
  // Sort by typical kWh descending for the ranking
  const sorted = [...getPublishedAppliances()].sort((a, b) => b.typicalKwh - a.typicalKwh);
  const faqs = homeFaqs(t);
  const everyday = topEverydayAppliances(t.dk, 5);

  // The pillar page previously carried no page-level schema at all — every
  // appliance page it links to was better marked up than the page itself.
  const schema = [
    breadcrumbSchema([{ name: "Forside", url: `${SITE_CONFIG.url}/` }]),
    articleSchema({
      title: "Strømforbrug i Danmark — se hvad dine apparater bruger",
      description: SITE_CONFIG.description,
      url: `${SITE_CONFIG.url}/`,
      datePublished: "2026-07-29",
      dateModified: pageMeta("/").updated,
      image: `${SITE_CONFIG.url}/opengraph-image/`,
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
      <PageHero
        crumbs={[]}
        eyebrow="Et site af Elpriser.dk"
        title="Strømforbrug i Danmark"
        lede={`Se hvor meget strøm dine apparater bruger, hvad det koster ved månedens elpris — ${formatPrice(t.dk1)} kr./kWh i vest og ${formatPrice(t.dk2)} kr./kWh i øst — og hvornår på dagen det er billigst at bruge dem.`}
        lastUpdated={pageMeta("/").updated}
        motif={motifForPath("/")}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/beregner/" className="btn-cta">
            <Calculator className="h-4 w-4" aria-hidden />
            Beregn dit strømforbrug
          </Link>
          <Link href="/gennemsnitligt/" className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-5 py-3 text-sm font-medium text-ink-body transition-colors hover:border-brand-500 hover:text-ink">
            <BarChart3 className="h-4 w-4" aria-hidden />
            Gennemsnitligt forbrug
          </Link>
          <Link href="/husstand/" className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-5 py-3 text-sm font-medium text-ink-body transition-colors hover:border-brand-500 hover:text-ink">
            <Home className="h-4 w-4" aria-hidden />
            Din husstand
          </Link>
          <Link href="/varmepumpe/" className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-5 py-3 text-sm font-medium text-ink-body transition-colors hover:border-brand-500 hover:text-ink">
            <Zap className="h-4 w-4" aria-hidden />
            Varmepumpe
          </Link>
        </div>
      </PageHero>

      <DirectAnswer prices={prices} />

      {/* Elprisen i dag — Elpriser.dk's kort og dagens billigste timer, regnet på samme feed */}
      <section className="py-16 border-b border-border" aria-labelledby="elprisen-i-dag" data-home-hourly>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Elpriser time for time · fra Elpriser.dk</p>
              <h2 id="elprisen-i-dag" className="mt-2 font-heading text-2xl sm:text-3xl font-semibold text-ink">
                Hvornår er strømmen billigst i dag?
              </h2>
              <p className="mt-4 text-ink-body">
                I Vestdanmark er de tre billigste timer <strong>{hourSpan(today.DK1.cheapest)}</strong> ({formatPrice(today.DK1.cheapest.krPerKwh)} kr./kWh)
                og de dyreste <strong>{hourSpan(today.DK1.dearest)}</strong> ({formatPrice(today.DK1.dearest.krPerKwh)} kr./kWh). I Østdanmark er det{" "}
                {hourSpan(today.DK2.cheapest)} mod {hourSpan(today.DK2.dearest)}. Vask, opvask, tørring og opladning er det forbrug, der er lettest
                at flytte — hver apparatside viser, hvad én gang koster i den billige og den dyre time.
              </p>
              <p className="mt-4">
                <Link href="/elpriser/" className="btn-cta !whitespace-normal text-center">
                  Se timepriserne og dine apparater
                </Link>
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                Spotpris, nettarif, Energinets tariffer og elafgift pr. time, inkl. moms, uden abonnement og tillæg. Dit eget postnummer kan slås op på Elpriser.dk.
              </p>
            </div>
            <ElpriserWidget sted="dk1" />
          </div>
        </div>
      </section>
      <HouseholdProfiles price={t.dk} />
      <WhatDominates price={t.dk} />

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
                        appliance.typicalKwh * t.dk
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
            svarende til {formatKr(3000 * t.dk)}-{formatKr(4500 * t.dk)} kr. ved den aktuelle gennemsnitspris på
            {formatPrice(t.dk)} kr./kWh. Inkluderer husstanden en{" "}
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
            til {formatKr(124 * t.dk)} kr.
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
      <Methodology prices={prices} />

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
