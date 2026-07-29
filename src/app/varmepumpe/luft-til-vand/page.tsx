import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Luft-til-vand varmepumpe strømforbrug 2026 → Pris og kWh",
  description:
    "En luft-til-vand varmepumpe bruger 4.000-6.000 kWh/år. Se forbrug pr. måned, sammenligning med gasfyr, og beregn din besparelse.",
  alternates: { canonical: `${SITE_CONFIG.url}/varmepumpe/luft-til-vand/` },
};

const faqs = [
  { question: "Hvor meget strøm bruger en luft-til-vand varmepumpe?", answer: "En luft-til-vand varmepumpe bruger typisk 4.000-6.000 kWh/år for et 130 m² hus, svarende til 10.000-15.000 kr. ved 2,50 kr./kWh." },
  { question: "Hvad koster en luft-til-vand i strøm pr. måned?", answer: "Gennemsnitligt 830-1.250 kr./md. Om vinteren 1.500-3.000 kr./md., om sommeren kun 75-375 kr./md. (kun varmt brugsvand)." },
  { question: "Hvad er COP på luft-til-vand?", answer: "COP er typisk 3,0-3,5 (SCOP over hele året). Ved +7°C er COP ca. 3,5-4,0, ved -7°C falder den til 2,0-2,5." },
  { question: "Kan luft-til-vand erstatte gasfyr?", answer: "Ja, fuldstændigt. Luft-til-vand opvarmer radiatorer/gulvvarme og producerer varmt brugsvand. Den erstatter gasfyr 1:1 og sparer 6.000-14.000 kr./år." },
  { question: "Hvad koster en luft-til-vand varmepumpe?", answer: "80.000-140.000 kr. inkl. installation. Med en besparelse på 6.000-14.000 kr./år er tilbagebetalingstiden 5-8 år." },
  { question: "Er luft-til-vand bedre med gulvvarme eller radiatorer?", answer: "Gulvvarme er bedst — den kræver kun 30-35°C fremløb vs. 50-60°C for radiatorer. Lavere fremløb = højere COP = lavere strømforbrug (typisk 15-25% mindre)." },
  { question: "Hvor mange kWh bruger en luft-til-vand om vinteren?", answer: "Om vinteren (dec-feb) bruger en luft-til-vand typisk 600-1.200 kWh/md. for et 130 m² hus, svarende til 1.500-3.000 kr./md." },
  { question: "Hvad er forskellen på luft-til-vand og jordvarme?", answer: "Jordvarme har højere COP (3,5-4,5 vs. 3,0-3,5) og bruger 10-20% mindre strøm, men koster 40.000-60.000 kr. mere at installere og kræver gravetilladelse." },
];

export default function LuftTilVandPage() {
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
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Varmepumpe", href: "/varmepumpe/" }, { name: "Luft-til-vand" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Luft-til-vand varmepumpe — strømforbrug og pris
        </h1>

        <QuickAnswer>
          <p>
            En luft-til-vand varmepumpe bruger typisk 4.000-6.000 kWh strøm om
            året for et 130 m² parcelhus, svarende til 10.000-15.000 kr. ved
            2,50 kr./kWh. Den erstatter dit gasfyr fuldstændigt og sparer de
            fleste familier 6.000-14.000 kr./år i samlede energiudgifter.
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
        />

        <div className="prose-editorial">
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
              <tr><td><strong>80-100 m²</strong></td><td>3.000-4.500 kWh</td><td>7.500-11.250 kr.</td><td>~6.000 kr./år</td></tr>
              <tr><td><strong>100-130 m²</strong></td><td>4.000-5.500 kWh</td><td>10.000-13.750 kr.</td><td>~8.000 kr./år</td></tr>
              <tr><td><strong>130-160 m²</strong></td><td>5.000-6.500 kWh</td><td>12.500-16.250 kr.</td><td>~10.000 kr./år</td></tr>
              <tr><td><strong>160-200 m²</strong></td><td>6.000-8.000 kWh</td><td>15.000-20.000 kr.</td><td>~12.000 kr./år</td></tr>
            </tbody>
          </table>
          <p><em>Besparelsen er beregnet vs. gasfyr med udgift på 18.000-24.000 kr./år for et 130 m² hus.</em></p>

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
              <tr><td><strong>Gulvvarme</strong></td><td>30-35°C</td><td>3,5-4,0</td><td>3.500-4.500 kWh</td><td>8.750-11.250 kr.</td></tr>
              <tr><td><strong>Lavtemperatur radiatorer</strong></td><td>40-50°C</td><td>3,0-3,5</td><td>4.000-5.500 kWh</td><td>10.000-13.750 kr.</td></tr>
              <tr><td><strong>Gamle radiatorer</strong></td><td>55-70°C</td><td>2,5-3,0</td><td>5.000-7.000 kWh</td><td>12.500-17.500 kr.</td></tr>
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
              <tr><td><strong>Dec-Feb (vinter)</strong></td><td>600-1.200</td><td>1.500-3.000 kr.</td><td>Fuld varme + brugsvand</td></tr>
              <tr><td><strong>Mar-Maj, Sep-Nov</strong></td><td>250-600</td><td>625-1.500 kr.</td><td>Moderat varme + brugsvand</td></tr>
              <tr><td><strong>Jun-Aug (sommer)</strong></td><td>50-150</td><td>125-375 kr.</td><td>Kun brugsvand</td></tr>
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

        <AffiliateCta />

        <div className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-ink-200 rounded-card">
                <summary className="cursor-pointer px-5 py-4 font-medium text-ink-900 hover:bg-surface-alt transition-colors rounded-card">{faq.question}</summary>
                <div className="px-5 pb-4 text-sm text-ink-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
