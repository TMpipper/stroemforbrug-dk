import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedAppliances } from "@/lib/appliances";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import { WattCostTable, QuickLookup } from "@/components/content/WattReference";
import { formatKr, formatPrice, danishMonth } from "@/lib/format";
import { getPrices, tokenPrices, calculatorPrices, calculatorDeal } from "@/lib/prices";
import type { TokenPrices } from "@/lib/tokens";
import PriceBasis from "@/components/content/PriceBasis";
import { withCurrentYear } from "@/lib/format";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import { pageMeta } from "@/lib/pages";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";


const faqsFor = (t: TokenPrices) => [
  {
    question: "Hvordan beregner jeg mit strømforbrug?",
    answer:
      `Gang apparatets effekt i watt med antal timer, og divider med 1.000 — så har du forbruget i kWh. Gang med elprisen på ${formatPrice(t.dk)} kr./kWh for at få udgiften. Et apparat på 1.000 watt, der kører en time, bruger 1 kWh og koster altså ${formatPrice(t.dk)} kr.`,
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
      `Beregneren regner med en marginal elpris på ${formatPrice(t.dk)} kr./kWh, altså spotpris, transport, afgift og moms. Din regning indeholder derudover et fast abonnement til elselskabet, og din spotpris svinger time for time. Bruger du strøm om natten, betaler du mindre end gennemsnittet.`,
  },
];

export const metadata: Metadata = {
  title: withCurrentYear("Strømberegner (2026) → Beregn dit strømforbrug og pris"),
  description:
    "Beregn dit strømforbrug og se hvad det koster i kr. Vælg apparat, indstil forbrug og få præcist resultat pr. dag, måned og år.",
  alternates: { canonical: `${SITE_CONFIG.url}/beregner/` },
};

export default async function BeregnerPage() {
  const prices = await getPrices();
  const t = tokenPrices(prices);
  const faqs = faqsFor(t);
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

      <PageHero
        crumbs={[{ name: "Strømberegner" }]}
        eyebrow="Beregner"
        title="Strømberegner — beregn dit forbrug og pris"
        lede={`Vælg et apparat eller en effekt, sæt brugen, og se hvad det koster ved månedens marginalpris — ${formatPrice(t.dk1)} kr./kWh i vest og ${formatPrice(t.dk2)} kr./kWh i øst, uden abonnement.`}
        lastUpdated={pageMeta("/beregner/").updated}
        motif={motifForPath("/beregner/")}
      />

      <div className="container-text py-10 md:py-14">

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
          prices={calculatorPrices(prices)}
          deal={calculatorDeal(prices)}
        />
        <PriceBasis prices={prices} className="-mt-6 mb-10" />

        <WattCostTable prices={t} />

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
            elpris på {formatPrice(t.dk)} kr./kWh koster det {formatKr(124 * t.dk)} kr. om året.
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
              className="flex min-w-0 items-center gap-2 rounded-card bg-surface p-3 text-sm shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="min-w-0 truncate font-medium text-ink">{a.name}</span>
              <span className="ml-auto shrink-0 text-xs text-ink-muted">
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
              {formatKr(t.dk * 124)} kr.
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
            på {formatPrice(t.dk)} kr./kWh — spotpris, nettarif, elafgift, et typisk tillæg
            og moms for {danishMonth(t.month)}. Din regning indeholder derudover et fast
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

        <QuickLookup price={t.dk} />

      </div>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/beregner/" prices={prices} />
      <AuthorBox />
    </>
  );
}
