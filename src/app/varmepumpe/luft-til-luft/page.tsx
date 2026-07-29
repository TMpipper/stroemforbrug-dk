import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import ForbrugBeregner from "@/components/calculator/ForbrugBeregner";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Luft-til-luft varmepumpe strømforbrug 2026 → Pris og kWh",
  description:
    "En luft-til-luft varmepumpe bruger 2.000-4.000 kWh/år. Se pris pr. måned, sæsonvariation, COP-faktor og 5 tips til at spare på strømmen.",
  alternates: { canonical: `${SITE_CONFIG.url}/varmepumpe/luft-til-luft/` },
};

const faqs = [
  { question: "Hvor meget strøm bruger en luft-til-luft varmepumpe?", answer: "En luft-til-luft varmepumpe bruger typisk 2.000-4.000 kWh/år, svarende til 5.000-10.000 kr. ved 2,50 kr./kWh. Det afhænger af boligens størrelse og isolering." },
  { question: "Hvad koster en luft-til-luft varmepumpe i strøm pr. måned?", answer: "Gennemsnitligt ca. 415-830 kr./md. Om vinteren er det 750-1.500 kr./md., mens det om sommeren kun er 25-100 kr./md." },
  { question: "Kan en luft-til-luft opvarme hele huset?", answer: "En luft-til-luft opvarmer primært det rum den står i + tilstødende rum. Den er ideel som supplement til fjernvarme/radiatorer, men kan sjældent opvarme et helt hus alene (medmindre det er en åben planløsning)." },
  { question: "Hvad er COP på luft-til-luft?", answer: "COP er typisk 3,0-4,0. Ved 7°C ude er COP ca. 4,0 (du får 4 kWh varme pr. 1 kWh strøm). Ved -7°C falder COP til ca. 2,5-3,0." },
  { question: "Er luft-til-luft billigere end luft-til-vand?", answer: "Ja, både i indkøb (15.000-35.000 vs. 80.000-140.000 kr.) og drift (2.000-4.000 vs. 4.000-6.000 kWh/år). Men luft-til-vand erstatter hele dit varmesystem." },
  { question: "Kan luft-til-luft også køle om sommeren?", answer: "Ja, de fleste luft-til-luft modeller kan køle. Køling bruger typisk 1-3 kWh/dag (2,50-7,50 kr./dag) og er langt billigere end en mobil aircondition." },
  { question: "Hvad koster det at installere en luft-til-luft?", answer: "En luft-til-luft koster 15.000-35.000 kr. inkl. installation. Med en besparelse på 3.000-8.000 kr./år er tilbagebetalingstiden 2-5 år." },
  { question: "Støjer en luft-til-luft varmepumpe?", answer: "Udedelen støjer typisk 40-55 dB (som en stille samtale). Indedelen er næsten lydløs på laveste hastighed (20-25 dB). Nye modeller er markant mere støjsvage end ældre." },
];

export default function LuftTilLuftPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Varmepumpe", url: `${SITE_CONFIG.url}/varmepumpe/` },
              { name: "Luft-til-luft", url: `${SITE_CONFIG.url}/varmepumpe/luft-til-luft/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Luft-til-luft varmepumpe strømforbrug",
              description: "En luft-til-luft varmepumpe bruger 2.000-4.000 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/varmepumpe/luft-til-luft/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Varmepumpe", href: "/varmepumpe/" }, { name: "Luft-til-luft" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Luft-til-luft varmepumpe — strømforbrug og pris
        </h1>

        <QuickAnswer>
          <p>
            En luft-til-luft varmepumpe bruger typisk 2.000-4.000 kWh strøm om
            året, svarende til 5.000-10.000 kr. ved 2,50 kr./kWh. Den er den
            billigste varmepumpetype både i indkøb og drift, og bruges primært
            som supplement til eksisterende opvarmning. COP er 3,0-4,0.
          </p>
        </QuickAnswer>

        <ForbrugBeregner
          title="Luft-til-luft forbrugsberegner"
          options={[
            { label: "Lille model (2,5 kW)", kwhPerUse: 0.65 },
            { label: "Standard model (3,5 kW)", kwhPerUse: 0.9 },
            { label: "Stor model (5,0 kW)", kwhPerUse: 1.3 },
            { label: "Ekstra stor (7,0 kW)", kwhPerUse: 1.8 },
          ]}
          usageLabel="Timer i drift pr. dag"
          usageUnit="timer/dag"
          usageMin={2}
          usageMax={24}
          usageDefault={8}
          usageStep={1}
        />

        <div className="prose-editorial">
          <h2>Strømforbrug pr. boligstørrelse</h2>
          <p>
            En luft-til-luft varmepumpes forbrug afhænger primært af boligens størrelse,
            isolering og hvor mange måneder du bruger den. De fleste kører pumpen 7-8
            måneder om året (september-april) og bruger den til køling 1-2 måneder om sommeren.
          </p>
          <table>
            <thead>
              <tr><th>Boligstørrelse</th><th>kWh/år</th><th>Pris/år</th><th>Anbefalet kapacitet</th></tr>
            </thead>
            <tbody>
              <tr><td>40-60 m² (lejlighed)</td><td>1.200-2.000 kWh</td><td>3.000-5.000 kr.</td><td>2,5-3,5 kW</td></tr>
              <tr><td>60-90 m² (lejlighed/rækkehus)</td><td>1.800-3.000 kWh</td><td>4.500-7.500 kr.</td><td>3,5-5,0 kW</td></tr>
              <tr><td>90-130 m² (hus)</td><td>2.500-3.500 kWh</td><td>6.250-8.750 kr.</td><td>5,0-7,0 kW</td></tr>
              <tr><td>130-180 m² (stort hus)</td><td>3.000-4.500 kWh</td><td>7.500-11.250 kr.</td><td>7,0+ kW (evt. 2 enheder)</td></tr>
            </tbody>
          </table>

          <h2>COP-faktor og effektivitet</h2>
          <p>
            COP (Coefficient of Performance) fortæller hvor effektiv varmepumpen er. En
            luft-til-luft har typisk COP 3,0-4,0, hvilket betyder at du får 3-4 kWh varme
            for hver 1 kWh strøm. Det gør den 3-4 gange mere effektiv end en
            <Link href="/elradiator/"> elradiator</Link> (COP = 1,0).
          </p>
          <table>
            <thead>
              <tr><th>Udetemperatur</th><th>Typisk COP</th><th>Varme pr. 1 kWh strøm</th></tr>
            </thead>
            <tbody>
              <tr><td>+10°C (forår/efterår)</td><td>4,0-5,0</td><td>4,0-5,0 kWh varme</td></tr>
              <tr><td>+2°C (mild vinter)</td><td>3,0-4,0</td><td>3,0-4,0 kWh varme</td></tr>
              <tr><td>-5°C (kold vinter)</td><td>2,5-3,0</td><td>2,5-3,0 kWh varme</td></tr>
              <tr><td>-15°C (ekstrem kulde)</td><td>1,5-2,5</td><td>1,5-2,5 kWh varme</td></tr>
            </tbody>
          </table>

          <h2>Sæsonvariation — månedligt forbrug</h2>
          <p>
            En luft-til-luft varmepumpes forbrug varierer kraftigt over året. Om vinteren
            (december-februar) kan den bruge 400-800 kWh/md., mens den om sommeren står
            stort set stille (eller bruges til køling à 30-90 kWh/md.).
          </p>
          <table>
            <thead>
              <tr><th>Måned</th><th>kWh</th><th>Pris</th><th>Note</th></tr>
            </thead>
            <tbody>
              <tr><td>Jan-Feb</td><td>400-700</td><td>1.000-1.750 kr.</td><td>Fuld drift, lavt COP</td></tr>
              <tr><td>Mar-Apr</td><td>200-400</td><td>500-1.000 kr.</td><td>Moderat drift</td></tr>
              <tr><td>Maj</td><td>50-150</td><td>125-375 kr.</td><td>Minimal drift</td></tr>
              <tr><td>Jun-Aug</td><td>30-90</td><td>75-225 kr.</td><td>Evt. køling</td></tr>
              <tr><td>Sep-Okt</td><td>100-300</td><td>250-750 kr.</td><td>Moderat drift</td></tr>
              <tr><td>Nov-Dec</td><td>350-650</td><td>875-1.625 kr.</td><td>Fuld drift</td></tr>
            </tbody>
          </table>

          <h2>Luft-til-luft vs. luft-til-vand</h2>
          <p>
            De to mest populære varmepumpetyper har vidt forskellige anvendelser og forbrug.
            Luft-til-luft er et supplement, luft-til-vand er en komplet varmeløsning.
          </p>
          <table>
            <thead>
              <tr><th></th><th>Luft-til-luft</th><th><Link href="/varmepumpe/luft-til-vand/">Luft-til-vand</Link></th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Forbrug</strong></td><td>2.000-4.000 kWh/år</td><td>4.000-6.000 kWh/år</td></tr>
              <tr><td><strong>Pris (indkøb)</strong></td><td>15.000-35.000 kr.</td><td>80.000-140.000 kr.</td></tr>
              <tr><td><strong>Opvarmer</strong></td><td>Luft (1-3 rum)</td><td>Radiatorer + brugsvand</td></tr>
              <tr><td><strong>Erstatter</strong></td><td>Supplement</td><td>Gasfyr, oliefyr</td></tr>
              <tr><td><strong>COP</strong></td><td>3,0-4,0</td><td>3,0-3,5</td></tr>
              <tr><td><strong>Tilbagebetaling</strong></td><td>2-5 år</td><td>5-8 år</td></tr>
            </tbody>
          </table>

          <h2>5 tips til at spare strøm med luft-til-luft</h2>
          <p>
            Disse tips kan reducere forbruget med 15-25%, svarende til 750-2.500 kr./år
            for en gennemsnitlig husstand. Det vigtigste er at bruge pumpen korrekt —
            mange kører den for hårdt eller for lidt.
          </p>
          <ol>
            <li><strong>Kør pumpen konstant på lav effekt</strong> — at tænde/slukke den hele tiden bruger mere end at lade den køre jævnt</li>
            <li><strong>Indstil temperaturen 1-2 grader lavere</strong> — spar 5-10% pr. grad</li>
            <li><strong>Rens filtrene hver 2-4 uge</strong> — tilstoppede filtre reducerer COP markant</li>
            <li><strong>Hold dørene åbne</strong> — lad varmen cirkulere til tilstødende rum naturligt</li>
            <li><strong>Sluk om sommeren</strong> — medmindre du har brug for køling, spar standby-forbrug (5-15W)</li>
          </ol>

          <h2>Populære modeller og deres forbrug</h2>
          <p>
            Her er tre af de mest solgte luft-til-luft varmepumper i Danmark og deres
            typiske årsforbrug for et 100 m² hus med normal isolering.
          </p>
          <table>
            <thead>
              <tr><th>Model</th><th>Kapacitet</th><th>SCOP</th><th>kWh/år (est.)</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td>Mitsubishi MSZ-AY35VGK</td><td>3,5 kW</td><td>4,6</td><td>2.200 kWh</td><td>5.500 kr.</td></tr>
              <tr><td>Daikin Stylish FTXA35</td><td>3,5 kW</td><td>4,6</td><td>2.300 kWh</td><td>5.750 kr.</td></tr>
              <tr><td>Panasonic Etherea CS-Z35</td><td>3,5 kW</td><td>4,5</td><td>2.400 kWh</td><td>6.000 kr.</td></tr>
            </tbody>
          </table>
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
