import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedAppliances } from "@/lib/appliances";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import { WattCostTable, QuickLookup } from "@/components/content/WattReference";
import { EL_PRICE_KR_PER_KWH, formatKr, formatPrice, MARKET } from "@/lib/pricing";
import { withCurrentYear } from "@/lib/pricing";


const faqs = [
  {
    question: "Hvordan beregner jeg mit strømforbrug?",
    answer:
      `Gang apparatets effekt i watt med antal timer, og divider med 1.000 — så har du forbruget i kWh. Gang med elprisen på ${formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh for at få udgiften. Et apparat på 1.000 watt, der kører en time, bruger 1 kWh og koster altså ${formatPrice(EL_PRICE_KR_PER_KWH)} kr.`,
  },
  {
    question: "Hvad er forskellen på watt og kWh?",
    answer:
      "Watt er effekt — hvor hurtigt et apparat bruger strøm lige nu. kWh er energi — hvor meget det har brugt over tid. En elkedel på 2.000 watt bruger meget hurtigt, men kun i to minutter, så den samlede energi er lille. En router på 8 watt bruger langsomt, men hele døgnet, og ender højere.",
  },
  {
    question: "Hvor finder jeg mit faktiske strømforbrug?",
    answer:
      "Log ind på Eloverblik.dk med MitID. Der kan du se dit præcise forbrug time for time, dag for dag, og hente det som regneark. Det er de samme data, dit elselskab fakturerer efter, så det er facit — en beregner er kun et estimat.",
  },
  {
    question: "Hvordan måler jeg et enkelt apparat?",
    answer:
      "Sæt et energimåler-stik mellem stikkontakten og apparatet. Det koster typisk 100-200 kr. og viser både effekt lige nu og forbrug over tid. Det er den eneste måde at få et præcist tal for netop dit eksemplar, som kan afvige en del fra typetallene.",
  },
  {
    question: "Hvorfor passer beregneren ikke med min elregning?",
    answer:
      `Beregneren regner med en marginal elpris på ${formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh, altså spotpris, transport, afgift og moms. Din regning indeholder derudover et fast abonnement til elselskabet, og din spotpris svinger time for time. Bruger du strøm om natten, betaler du mindre end gennemsnittet.`,
  },
];

export const metadata: Metadata = {
  title: withCurrentYear("Strømberegner (2026) → Beregn dit strømforbrug og pris"),
  description:
    "Beregn dit strømforbrug og se hvad det koster i kr. Vælg apparat, indstil forbrug og få præcist resultat pr. dag, måned og år.",
  alternates: { canonical: `${SITE_CONFIG.url}/beregner/` },
};

export default function BeregnerPage() {
  // Use the first appliance's calculator as default
  const defaultAppliance = getPublishedAppliances()[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Strømberegner", url: `${SITE_CONFIG.url}/beregner/` },
            ]),
            faqSchema(faqs),
          ]),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Strømberegner" }]} />

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-4 leading-tight">
          Strømberegner — beregn dit forbrug og pris
        </h1>

        <div className="quick-answer mb-8">
          <p>
            Brug vores strømberegner til at beregne præcist hvad dit
            strømforbrug koster. Vælg et apparat nedenfor, eller brug de
            individuelle beregnere på hvert apparats side for mere detaljerede
            resultater.
          </p>
        </div>

        {/* General calculator */}
        <ForbrugBeregner
          title="Generel strømberegner"
          options={[
            { label: "100 watt apparat", kwhPerUse: 0.1 },
            { label: "500 watt apparat", kwhPerUse: 0.5 },
            { label: "1.000 watt apparat", kwhPerUse: 1.0 },
            { label: "1.500 watt apparat", kwhPerUse: 1.5 },
            { label: "2.000 watt apparat", kwhPerUse: 2.0 },
            { label: "3.000 watt apparat", kwhPerUse: 3.0 },
          ]}
          usageLabel="Timer i brug pr. dag"
          usageUnit="timer/dag"
          usageMin={1}
          usageMax={24}
          usageDefault={4}
          usageStep={1}
        />

        <WattCostTable />

        {/* How to calculate */}
        <div className="prose-editorial mt-10">
          <h2>Sådan beregner du strømforbrug</h2>
          <p>
            Formlen til at beregne strømforbrug er enkel:
          </p>
          <div className="bg-surface-muted rounded-card p-6 my-6 text-center">
            <p className="font-heading text-lg font-medium text-ink-900">
              Watt &times; timer &times; dage &divide; 1.000 = kWh
            </p>
          </div>
          <p>
            <strong>Eksempel:</strong> Et tv på 85 watt der kører 4 timer om
            dagen: 85 &times; 4 &times; 365 &divide; 1.000 = 124 kWh/år. Med en
            elpris på 1,86 kr./kWh koster det 231 kr. om året.
          </p>

          <h2>Beregn forbrug for specifikke apparater</h2>
          <p>
            Hvert apparat har sin egen beregner med præcise data for forskellige
            modeller og brugsscenarier. Klik på et apparat for at se den
            detaljerede beregner:
          </p>
        </div>

        {/* Links to all appliance calculators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
          {getPublishedAppliances().map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}/`}
              className="flex items-center gap-2 p-3 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-sm"
            >
              <span className="font-medium text-ink-800">{a.name}</span>
              <span className="text-xs text-ink-400 ml-auto">
                {a.typicalKwh} kWh
              </span>
            </Link>
          ))}
        </div>

        <section className="my-10 prose-editorial">
          <h2>Watt, kWh og kW — hvad er forskellen?</h2>
          <p>
            <strong>Watt (W)</strong> er effekt: hvor hurtigt et apparat bruger strøm
            lige nu. <strong>Kilowatt (kW)</strong> er bare 1.000 watt.{" "}
            <strong>Kilowatt-time (kWh)</strong> er energi: effekt gange tid, og det er
            kWh, du betaler for. Et apparat på 2.000 watt, der kører i en halv time,
            bruger 1 kWh — præcis det samme som et apparat på 100 watt, der kører i ti
            timer.
          </p>
          <p>
            Det er derfor, effekten alene ikke fortæller, hvad noget koster. En{" "}
            <Link href="/elkedel/">elkedel</Link> trækker enormt meget, men i to
            minutter. En <Link href="/router/">router</Link> trækker næsten ingenting,
            men 8.760 timer om året. Routeren ender højest.
          </p>

          <h2>Tre måder at finde dit forbrug på</h2>
          <p>
            En beregner er et estimat. Vil du have facit, er der tre veje, og de svarer
            på hver sit spørgsmål:
          </p>
          <ol>
            <li>
              <strong>Eloverblik.dk</strong> — log ind med MitID og se dit faktiske
              forbrug time for time. Det er de data, dit elselskab fakturerer efter, så
              det er sandheden om hele husstanden. Du kan hente det som regneark og se,
              hvornår på døgnet forbruget ligger.
            </li>
            <li>
              <strong>Et energimåler-stik</strong> — koster 100-200 kr. og sættes mellem
              stikkontakt og apparat. Den eneste måde at måle ét apparat præcist, og
              den afslører typisk et par overraskelser i hjemmet.
            </li>
            <li>
              <strong>Typetal og beregning</strong> — det er, hvad denne side gør. Godt
              til at sammenligne apparater og til at vurdere, om et køb kan betale sig,
              men det siger ikke, hvad netop dit eksemplar bruger.
            </li>
          </ol>

          <h2>Regneeksempler</h2>
          <p>
            Formlen er den samme hver gang: <strong>watt × timer ÷ 1.000 = kWh</strong>,
            og kWh × elprisen = kroner.
          </p>
          <ul>
            <li>
              <strong>Tv på 85 watt, 4 timer om dagen:</strong> 85 × 4 ÷ 1.000 = 0,34 kWh
              om dagen. Over et år bliver det 124 kWh, altså omkring{" "}
              {formatKr(EL_PRICE_KR_PER_KWH * 124)} kr.
            </li>
            <li>
              <strong>Elkedel på 2.000 watt, 10 minutter om dagen:</strong> 2.000 ×
              0,167 ÷ 1.000 = 0,33 kWh om dagen — næsten det samme som tv&apos;et, selv om
              effekten er 23 gange højere.
            </li>
            <li>
              <strong>Router på 8 watt, hele døgnet:</strong> 8 × 24 ÷ 1.000 = 0,19 kWh
              om dagen. Mindre pr. dag, men den slukker aldrig.
            </li>
          </ul>

          <h2>Hvorfor passer beregneren ikke præcist med din elregning?</h2>
          <p>
            Fordi de regner på to forskellige ting. Beregneren bruger en marginal elpris
            på {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh — spotpris, nettarif, elafgift
            og moms for {MARKET.period}. Din regning indeholder derudover et fast
            abonnement til elselskabet, som du betaler uanset forbrug.
          </p>
          <p>
            Dertil svinger spotprisen time for time. Kører opvaskemaskinen om natten,
            betaler du mindre end gennemsnittet; laver du mad klokken 18 en vinteraften,
            betaler du mere. Beregneren viser et årsgennemsnit, ikke den enkelte time.
            Se <Link href="/hvad-koster-en-kwh/">hvad en kWh koster</Link> for
            prisens sammensætning.
          </p>
        </section>

        <QuickLookup />

        <section className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">
            Ofte stillede spørgsmål om strømberegning
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading text-base font-medium text-ink-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-ink-700 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
