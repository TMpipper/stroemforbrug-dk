import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Strømforbrug med varmepumpe 2026 → Se samlet forbrug",
  description:
    "En familie med varmepumpe bruger 7.000-11.000 kWh/år. Se samlet forbrug for luft-til-luft, luft-til-vand og jordvarme — og hvad du sparer vs. gas.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/med-varmepumpe/` },
};

const faqs = [
  { question: "Hvor meget strøm bruger en familie med varmepumpe?", answer: "En typisk familie på 4 i et 130 m² hus med luft-til-vand varmepumpe bruger 7.000-11.000 kWh/år totalt — heraf 4.000-6.000 kWh til varmepumpen og 3.500-5.000 kWh til husholdning." },
  { question: "Er det dyrt at have varmepumpe?", answer: "Nej, det er billigere end gas/oliefyr. Selvom elforbruget stiger til 17.500-27.500 kr./år, sparer du 18.000-30.000 kr./år i gas/olie. Nettobesparelsen er typisk 5.000-15.000 kr./år." },
  { question: "Hvor meget ekstra strøm bruger en varmepumpe?", answer: "En luft-til-luft tilføjer 2.000-4.000 kWh/år, luft-til-vand 4.000-6.000 kWh/år og jordvarme 3.500-5.500 kWh/år. Det afhænger af boligens størrelse og isolering." },
  { question: "Hvad er det samlede elforbrug med jordvarme?", answer: "Med jordvarme bruger en gennemsnitlig husstand 7.000-10.500 kWh/år totalt (husholdning + varme). Jordvarme har højere COP end luft-til-vand og bruger derfor lidt mindre strøm." },
  { question: "Stiger elregningen meget med varmepumpe?", answer: "Ja, elforbruget fordobles typisk. Men den samlede energiudgift falder — du betaler mere i strøm men slipper for gas/olie. Netto sparer de fleste 5.000-15.000 kr./år." },
  { question: "Hvad koster opvarmning med varmepumpe om måneden?", answer: "Varmepumpen koster gennemsnitligt 830-1.250 kr./md. i strøm. Om vinteren er det 1.500-3.000 kr./md., mens det om sommeren kun er 75-375 kr./md." },
  { question: "Bør jeg skifte elselskab med varmepumpe?", answer: "Ja, absolut! Med 9.000 kWh/år giver et billigere elselskab stor besparelse. Forskellen mellem gns. (2,00 kr.) og Altid Energi (1,54 kr.) er 4.140 kr./år ved det forbrug." },
  { question: "Hvornår på døgnet bruger varmepumpen mest?", answer: "Varmepumpen arbejder hårdest om morgenen (6-9) og aftenen (17-21). Med fleksibel elpris kan du programmere den til at forvarme om natten når strømmen er billigst." },
];

export default function MedVarmepumpePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Husstand", url: `${SITE_CONFIG.url}/husstand/` },
              { name: "Med varmepumpe", url: `${SITE_CONFIG.url}/husstand/med-varmepumpe/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Strømforbrug husstand med varmepumpe",
              description: "En familie med varmepumpe bruger 7.000-11.000 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/husstand/med-varmepumpe/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Husstand", href: "/husstand/" }, { name: "Med varmepumpe" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Strømforbrug husstand med varmepumpe
        </h1>

        <QuickAnswer>
          <p>
            En dansk familie med varmepumpe bruger typisk 7.000-11.000 kWh strøm
            om året — cirka det dobbelte af en husstand uden. Heraf bruges
            4.000-6.000 kWh til varmepumpen og 3.500-5.000 kWh til normal
            husholdning. Trods højere elforbrug sparer de fleste 5.000-15.000
            kr./år sammenlignet med gasfyr.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Samlet strømforbrug med varmepumpe — oversigt</h2>
          <p>
            Når du installerer en <Link href="/varmepumpe/">varmepumpe</Link>, fordobles dit elforbrug
            typisk. Men den samlede energiudgift falder markant fordi du slipper for
            gas- eller olieregningen. Her er det samlede forbrug opdelt på husholdning
            og varmepumpe for en gennemsnitlig husstand.
          </p>
          <table>
            <thead>
              <tr><th>Husstand + VP-type</th><th>Husholdning</th><th>Varmepumpe</th><th>Total kWh/år</th><th>Total pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1 person + luft-til-luft</strong></td><td>2.000</td><td>2.500</td><td>4.500</td><td>11.250 kr.</td></tr>
              <tr><td><strong>Par + luft-til-vand</strong></td><td>3.000</td><td>4.500</td><td>7.500</td><td>18.750 kr.</td></tr>
              <tr><td><strong>Familie (4) + luft-til-vand</strong></td><td>4.500</td><td>5.000</td><td>9.500</td><td>23.750 kr.</td></tr>
              <tr><td><strong>Familie (4) + jordvarme</strong></td><td>4.500</td><td>4.000</td><td>8.500</td><td>21.250 kr.</td></tr>
              <tr><td><strong>Stor familie (5+) + l-t-v</strong></td><td>5.500</td><td>5.500</td><td>11.000</td><td>27.500 kr.</td></tr>
            </tbody>
          </table>
          <p><em>Priser beregnet med 2,50 kr./kWh inkl. afgifter og transport.</em></p>

          <h2>Varmepumpe vs. gasfyr — den samlede besparelse</h2>
          <p>
            Selvom din elregning stiger markant, sparer du netto på den samlede energiudgift.
            Her er sammenligningen for en typisk familie på 4 i et 130 m² parcelhus med
            normal isolering.
          </p>
          <table>
            <thead>
              <tr><th>Opvarmning</th><th>Varmeudgift</th><th>El (hushold.)</th><th>Total energi/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Gasfyr</strong></td><td>18.000-24.000 kr.</td><td>10.000-13.750 kr.</td><td>28.000-37.750 kr.</td></tr>
              <tr><td><strong>Oliefyr</strong></td><td>22.000-30.000 kr.</td><td>10.000-13.750 kr.</td><td>32.000-43.750 kr.</td></tr>
              <tr><td><strong>Luft-til-vand VP</strong></td><td>Inkl. i el</td><td>23.750 kr. (total)</td><td><strong>23.750 kr.</strong></td></tr>
              <tr><td><strong>Jordvarme</strong></td><td>Inkl. i el</td><td>21.250 kr. (total)</td><td><strong>21.250 kr.</strong></td></tr>
            </tbody>
          </table>
          <p>
            <strong>Besparelse: 4.250-22.500 kr./år</strong> afhængigt af den gamle
            varmekilde og varmepumpetypen. Jordvarme giver størst besparelse, men har
            også højest installationspris.
          </p>

          <h2>Sæsonvariation — hvornår bruger I mest?</h2>
          <p>
            Med varmepumpe er dit strømforbrug langt mere sæsonafhængigt end uden.
            Om vinteren (december-februar) kan den månedlige elregning være 4-5 gange
            højere end om sommeren, fordi varmepumpen arbejder på fuld kraft.
          </p>
          <table>
            <thead>
              <tr><th>Periode</th><th>Husholdning (kWh/md.)</th><th>Varmepumpe (kWh/md.)</th><th>Total kr./md.</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Vinter (dec-feb)</strong></td><td>350-450</td><td>800-1.200</td><td>2.875-4.125 kr.</td></tr>
              <tr><td><strong>Forår/efterår</strong></td><td>350-450</td><td>300-600</td><td>1.625-2.625 kr.</td></tr>
              <tr><td><strong>Sommer (jun-aug)</strong></td><td>300-400</td><td>50-150</td><td>875-1.375 kr.</td></tr>
            </tbody>
          </table>

          <h2>Sådan optimerer du forbruget med varmepumpe</h2>
          <p>
            Med varmepumpe er elselskabsvalget endnu vigtigere — forskellen mellem et
            dyrt og billigt elselskab kan være 4.000-5.000 kr./år ved 9.000+ kWh. Her
            er de vigtigste optimeringer:
          </p>
          <ol>
            <li><strong>Skift til billigste elselskab</strong> — med 9.000 kWh/år sparer I 3.000-5.000 kr./år</li>
            <li><strong>Brug varmepumpen med nattedsænkning</strong> — spar 10-15% på varmepumpens forbrug</li>
            <li><strong>Kør med lav fremløbstemperatur</strong> — gulvvarme kræver kun 30-35°C, radiatorer 50-60°C</li>
            <li><strong>Udnyt fleksible elpriser</strong> — lad varmepumpen &quot;lade op&quot; om natten når strømmen er billigst</li>
            <li><strong>Service hvert 2. år</strong> — en velholdt varmepumpe bruger 10-15% mindre</li>
            <li><strong>Efterisolér</strong> — bedre isolering reducerer varmepumpens arbejdsbyrde og elforbrug</li>
          </ol>

          <h2>Vigtigheden af elselskabsvalg med varmepumpe</h2>
          <p>
            Med et elforbrug på 9.000 kWh/år er forskellen mellem elselskaber enorm.
            Et skifte fra gennemsnitsprisen (2,00 kr./kWh) til det billigste selskab
            (1,54 kr./kWh) giver en besparelse på <strong>4.140 kr./år</strong> — det
            er nok til at betale hele familiens <Link href="/opvaskemaskine/">opvaskemaskine</Link>- og
            <Link href="/vaskemaskine/"> vaskemaskine</Link>-forbrug.
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
