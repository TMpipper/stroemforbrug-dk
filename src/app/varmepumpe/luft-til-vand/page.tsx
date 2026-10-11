import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";

import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import SwitchCta from "@/components/marketing/SwitchCta";
import { withCurrentYear, formatKr, formatPrice } from "@/lib/format";
import { pageMeta } from "@/lib/pages";

import { getPrices, tokenPrices, calculatorPrices, calculatorDeal } from "@/lib/prices";
import PriceBasis from "@/components/content/PriceBasis";
import type { TokenPrices } from "@/lib/tokens";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";

export const metadata: Metadata = {
  title: withCurrentYear("Luft-til-vand varmepumpe strømforbrug (2026) → Pris og kWh"),
  description:
    "En luft-til-vand varmepumpe bruger 4.000-6.000 kWh/år. Se forbrug pr. måned, sammenligning med gasfyr, og beregn din besparelse.",
  alternates: { canonical: `${SITE_CONFIG.url}/varmepumpe/luft-til-vand/` },
};

const faqsFor = (t: TokenPrices) => [
  { question: "Hvor meget strøm bruger en luft-til-vand varmepumpe?", answer: `En luft-til-vand varmepumpe bruger typisk 4.000-6.000 kWh/år for et 130 m² hus, svarende til ${formatKr(4000 * t.dk)}-${formatKr(6000 * t.dk)} kr. ved ${formatPrice(t.dk)} kr./kWh.` },
  { question: "Hvad koster en luft-til-vand i strøm pr. måned?", answer: `Gennemsnitligt ${formatKr(4000 * t.dk / 12)}-${formatKr(6000 * t.dk / 12)} kr./md. Om vinteren ${formatKr(600 * t.dk)}-${formatKr(1200 * t.dk)} kr./md., om sommeren kun ${formatKr(360 * t.dk / 12)}-${formatKr(1800 * t.dk / 12)} kr./md. (kun varmt brugsvand).` },
  { question: "Hvad er COP på luft-til-vand?", answer: "COP er typisk 3,0-3,5 (SCOP over hele året). Ved +7°C er COP ca. 3,5-4,0, ved -7°C falder den til 2,0-2,5." },
  { question: "Kan luft-til-vand erstatte gasfyr?", answer: "Ja, fuldstændigt. Luft-til-vand opvarmer radiatorer/gulvvarme og producerer varmt brugsvand. Den erstatter gasfyr 1:1 og sparer 10.500-12.800 kr./år." },
  { question: "Hvad koster en luft-til-vand varmepumpe?", answer: "80.000-140.000 kr. inkl. installation. Med en besparelse på 6.000-14.000 kr./år er tilbagebetalingstiden 5-8 år." },
  { question: "Er luft-til-vand bedre med gulvvarme eller radiatorer?", answer: "Gulvvarme er bedst — den kræver kun 30-35°C fremløb vs. 50-60°C for radiatorer. Lavere fremløb = højere COP = lavere strømforbrug (typisk 15-25% mindre)." },
  { question: "Hvor mange kWh bruger en luft-til-vand om vinteren?", answer: `Om vinteren (dec-feb) bruger en luft-til-vand typisk 600-1.200 kWh/md. for et 130 m² hus, svarende til ${formatKr(600 * t.dk)}-${formatKr(1200 * t.dk)} kr./md.` },
  { question: "Hvad er forskellen på luft-til-vand og jordvarme?", answer: "Jordvarme har højere COP (3,5-4,5 vs. 3,0-3,5) og bruger 10-20% mindre strøm, men koster 40.000-60.000 kr. mere at installere og kræver gravetilladelse." },
];

export default async function LuftTilVandPage() {
  const prices = await getPrices();
  const t = tokenPrices(prices);
  const faqs = faqsFor(t);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Varmepumpe", url: `${SITE_CONFIG.url}/varmepumpe/` },
              { name: "Luft-til-vand", url: `${SITE_CONFIG.url}/varmepumpe/luft-til-vand/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Luft-til-vand varmepumpe strømforbrug",
              description: "En luft-til-vand varmepumpe bruger 4.000-6.000 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/varmepumpe/luft-til-vand/`,
              datePublished: "2026-07-29",
              dateModified: pageMeta("/varmepumpe/luft-til-vand/").updated,
            }),
          ]),
        }}
      />

      <PageHero crumbs={[{ name: "Varmepumpe", href: "/varmepumpe/" }, { name: "Luft-til-vand" }]} eyebrow="Varmepumpe" title="Luft-til-vand varmepumpe — strømforbrug og pris" lastUpdated={pageMeta("/varmepumpe/luft-til-vand/").updated} motif={motifForPath("/varmepumpe/luft-til-vand/")} />

      <article className="container-text py-10 md:py-14">

        <QuickAnswer>
          <p>
            En luft-til-vand varmepumpe bruger typisk 4.000-6.000 kWh strøm om
            året for et 130 m² parcelhus, svarende til {formatKr(4000 * t.dk)}-{formatKr(6000 * t.dk)} kr. ved
            {formatPrice(t.dk)} kr./kWh. Den erstatter dit gasfyr fuldstændigt og sparer de
            fleste familier 10.500-12.800 kr./år i samlede energiudgifter.
          </p>
        </QuickAnswer>

        <ForbrugBeregner
          title="Luft-til-vand forbrugsberegner"
          options={[
            { label: "100 m² hus (god isolering)", kwhPerUse: 10.0 },
            { label: "130 m² hus (normal isolering)", kwhPerUse: 13.7 },
            { label: "150 m² hus (normal isolering)", kwhPerUse: 16.0 },
            { label: "200 m² hus (normal isolering)", kwhPerUse: 20.0 },
            { label: "130 m² hus (dårlig isolering)", kwhPerUse: 18.0 },
          ]}
          usageLabel="Timer i drift pr. dag (gennemsnit)"
          usageUnit="timer/dag"
          usageMin={4}
          usageMax={24}
          usageDefault={12}
          usageStep={1}
          prices={calculatorPrices(prices)}
          deal={calculatorDeal(prices)}
        />

        <div className="prose-content">
          <h2>Strømforbrug pr. boligstørrelse</h2>
          <p>
            En luft-til-vand varmepumpe dimensioneres efter boligens varmebehov. Jo større
            hus og jo dårligere isolering, desto mere strøm bruger den. Her er det typiske
            årlige forbrug for forskellige boligstørrelser med normal dansk isolering.
          </p>
          <table>
            <thead>
              <tr><th>Boligstørrelse</th><th>kWh/år</th><th>Pris/år</th><th>Besparelse vs. gas</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>80-100 m²</strong></td><td>3.000-4.500 kWh</td><td>{formatKr(3000 * t.dk)}-{formatKr(4500 * t.dk)} kr.</td><td>~7.600 kr./år</td></tr>
              <tr><td><strong>100-130 m²</strong></td><td>4.000-5.500 kWh</td><td>{formatKr(4000 * t.dk)}-{formatKr(5500 * t.dk)} kr.</td><td>~{formatKr(5500 * t.dk)} kr./år</td></tr>
              <tr><td><strong>130-160 m²</strong></td><td>5.000-6.500 kWh</td><td>{formatKr(5000 * t.dk)}-{formatKr(6500 * t.dk)} kr.</td><td>~{formatKr(6500 * t.dk)} kr./år</td></tr>
              <tr><td><strong>160-200 m²</strong></td><td>6.000-8.000 kWh</td><td>{formatKr(6000 * t.dk)}-{formatKr(8000 * t.dk)} kr.</td><td>~{formatKr(8000 * t.dk)} kr./år</td></tr>
            </tbody>
          </table>
          <p><em>Besparelsen er beregnet vs. gasfyr med en udgift på 18.000-24.000 kr./år for et 130 m² hus — ca. 162 kr./m²/år — og en elpris på {formatPrice(t.dk)} kr./kWh.</em></p>

          <h2>Gulvvarme vs. radiatorer — COP og forbrug</h2>
          <p>
            Har du <Link href="/gulvvarme/">gulvvarme</Link>, bruger varmepumpen 15-25% mindre strøm end
            med radiatorer. Årsagen er at gulvvarme kun kræver 30-35°C fremløbstemperatur,
            mens radiatorer kræver 50-60°C. Lavere fremløb = højere COP = mindre strøm.
          </p>
          <table>
            <thead>
              <tr><th>Varmeafgiver</th><th>Fremløbstemp.</th><th>COP (gns.)</th><th>kWh/år (130 m²)</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Gulvvarme</strong></td><td>30-35°C</td><td>3,5-4,0</td><td>3.500-4.500 kWh</td><td>{formatKr(3500 * t.dk)}-{formatKr(4500 * t.dk)} kr.</td></tr>
              <tr><td><strong>Lavtemperatur radiatorer</strong></td><td>40-50°C</td><td>3,0-3,5</td><td>4.000-5.500 kWh</td><td>{formatKr(4000 * t.dk)}-{formatKr(5500 * t.dk)} kr.</td></tr>
              <tr><td><strong>Gamle radiatorer</strong></td><td>55-70°C</td><td>2,5-3,0</td><td>5.000-7.000 kWh</td><td>{formatKr(5000 * t.dk)}-{formatKr(7000 * t.dk)} kr.</td></tr>
            </tbody>
          </table>
          <p>
            <strong>Tip:</strong> Hvis du har gamle radiatorer, kan det betale sig at udskifte
            dem til lavtemperatur-radiatorer (større paneler) før du installerer varmepumpen.
            Besparelsen på strøm tjener investeringen hjem på 3-5 år.
          </p>

          <h2>Sæsonvariation — månedligt forbrug</h2>
          <p>
            Ca. 70% af en luft-til-vand varmepumpes forbrug ligger i vinterhalvåret
            (oktober-marts). Om sommeren bruges den kun til varmt brugsvand, hvilket
            kræver minimal energi.
          </p>
          <table>
            <thead>
              <tr><th>Periode</th><th>kWh/md.</th><th>Pris/md.</th><th>Drift</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Dec-Feb (vinter)</strong></td><td>600-1.200</td><td>{formatKr(600 * t.dk)}-{formatKr(1200 * t.dk)} kr.</td><td>Fuld varme + brugsvand</td></tr>
              <tr><td><strong>Mar-Maj, Sep-Nov</strong></td><td>250-600</td><td>{formatKr(250 * t.dk)}-{formatKr(600 * t.dk)} kr.</td><td>Moderat varme + brugsvand</td></tr>
              <tr><td><strong>Jun-Aug (sommer)</strong></td><td>50-150</td><td>{formatKr(50 * t.dk)}-{formatKr(150 * t.dk)} kr.</td><td>Kun brugsvand</td></tr>
            </tbody>
          </table>

          <h2>Luft-til-vand vs. jordvarme</h2>
          <p>
            Jordvarme har 10-20% lavere strømforbrug pga. mere stabil jordtemperatur (8-10°C
            hele året vs. lufttemperatur der svinger fra -10 til +30°C). Til gengæld er
            installationen dyrere og kræver plads til jordslanger eller boringer.
          </p>
          <table>
            <thead>
              <tr><th></th><th>Luft-til-vand</th><th>Jordvarme</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>kWh/år (130 m²)</strong></td><td>4.000-6.000</td><td>3.500-5.000</td></tr>
              <tr><td><strong>COP (gns.)</strong></td><td>3,0-3,5</td><td>3,5-4,5</td></tr>
              <tr><td><strong>Installation</strong></td><td>80.000-140.000 kr.</td><td>120.000-200.000 kr.</td></tr>
              <tr><td><strong>Kræver</strong></td><td>Udedel + plads</td><td>Have/jordboringer</td></tr>
              <tr><td><strong>Tilbagebetaling</strong></td><td>5-8 år</td><td>7-12 år</td></tr>
            </tbody>
          </table>

          <h2>Populære modeller</h2>
          <p>
            Her er tre af de mest solgte luft-til-vand varmepumper i Danmark med
            deres typiske forbrug for et standard 130 m² parcelhus.
          </p>
          <table>
            <thead>
              <tr><th>Model</th><th>Kapacitet</th><th>SCOP</th><th>kWh/år (est.)</th><th>Pris inkl. inst.</th></tr>
            </thead>
            <tbody>
              <tr><td>Mitsubishi Ecodan PUZ-WM85</td><td>8,5 kW</td><td>3,3</td><td>4.500 kWh</td><td>90.000-110.000 kr.</td></tr>
              <tr><td>Vaillant aroTHERM plus</td><td>7,5 kW</td><td>3,5</td><td>4.200 kWh</td><td>95.000-120.000 kr.</td></tr>
              <tr><td>Daikin Altherma 3 H HT</td><td>8 kW</td><td>3,2</td><td>4.800 kWh</td><td>100.000-130.000 kr.</td></tr>
            </tbody>
          </table>

          <h2>Tips til at optimere luft-til-vand forbruget</h2>
          <p>
            Med den rigtige indstilling kan du spare 10-20% på varmepumpens strømforbrug.
            Det vigtigste er fremløbstemperatur og varmekurve — mange installatører sætter
            den for højt som standard.
          </p>
          <ol>
            <li><strong>Sænk fremløbstemperaturen</strong> — hver 5°C lavere øger COP med 0,3-0,5</li>
            <li><strong>Justér varmekurven</strong> — lad installatøren optimere efter dit hus&apos; faktiske behov</li>
            <li><strong>Brug nattedsænkning med måde</strong> — max 2-3 grader, ellers koster genopvarmning mere</li>
            <li><strong>Service hvert 2. år</strong> — rens, filtre, kølemiddeltjek</li>
            <li><strong>Udnyt fleksible elpriser</strong> — forvarme huset om natten når strømmen er billig</li>
          </ol>

          <p>
            Se også den overordnede guide til <Link href="/varmepumpe/">varmepumpe strømforbrug</Link> eller
            sammenlign med <Link href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumpe</Link>.
            Vil du vide hvad dit samlede elforbrug bliver med varmepumpe? Se
            <Link href="/husstand/med-varmepumpe/"> strømforbrug husstand med varmepumpe</Link>.
          </p>
        </div>

        <PriceBasis prices={prices} className="my-4" />

        <SwitchCta kwh={9000} household="et hus med luft-til-vand varmepumpe" />
      </article>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/varmepumpe/luft-til-vand/" prices={prices} />
      <AuthorBox />
    </>
  );
}
