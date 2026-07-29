import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Strømforbrug familie 2026 → Normalt forbrug for familie på 4",
  description:
    "En familie på 4 bruger 4.000-5.500 kWh/år uden varmepumpe. Se hvad der bruger mest strøm, og få sparetips der kan skære 2.000+ kr. af elregningen.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/familie/` },
};

const faqs = [
  { question: "Hvor meget strøm bruger en familie på 4?", answer: "En familie på 4 i et parcelhus bruger typisk 4.000-5.500 kWh/år uden varmepumpe, svarende til 10.000-13.750 kr. Med varmepumpe stiger det til 7.000-11.000 kWh/år." },
  { question: "Hvad er normalt strømforbrug for en familie?", answer: "For en gennemsnitlig dansk familie (2 voksne + 2 børn) i et hus er 4.000-5.500 kWh/år normalt. Over 6.000 kWh (uden varmepumpe) er højt og tyder på besparelsespotentiale." },
  { question: "Hvad koster strøm for en familie om måneden?", answer: "Ved 2,50 kr./kWh koster det ca. 830-1.150 kr./md. uden varmepumpe. Med varmepumpe stiger det til 1.460-2.290 kr./md. i gennemsnit (mere om vinteren, mindre om sommeren)." },
  { question: "Hvad bruger mest strøm i en familie?", answer: "De tre største poster er: 1) køl/frys (400-600 kWh), 2) tøjvask + tørring (400-750 kWh), 3) madlavning (300-500 kWh). Tørretumbleren er ofte den enkeltstående dyreste post." },
  { question: "Bruger familier med børn mere strøm?", answer: "Ja, ca. 500-1.000 kWh mere pr. barn (ekstra vask, tørring, belysning, elektronik). Teenagere med gaming-pc bruger mest — en gaming-pc kan alene tilføje 200-500 kWh/år." },
  { question: "Hvor meget sparer en familie ved at skifte elselskab?", answer: "Med 5.000 kWh/år sparer I ca. 2.300 kr./år ved at skifte fra gennemsnittet (2,00 kr./kWh) til Altid Energi (1,54 kr./kWh)." },
  { question: "Er 7.000 kWh meget for en familie på 4?", answer: "Uden varmepumpe er 7.000 kWh højt og tyder på gammel tørretumbler, gammel fryser/køleskab eller elvarme. Med varmepumpe er 7.000 kWh normalt." },
  { question: "Hvad er strømforbruget for en familie på 5?", answer: "En familie på 5 bruger typisk 4.500-6.000 kWh/år (11.250-15.000 kr.) uden varmepumpe. Den 5. person tilføjer ca. 500-800 kWh i ekstra vask, madlavning og elektronik." },
];

export default function FamiliePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Husstand", url: `${SITE_CONFIG.url}/husstand/` },
              { name: "Familie", url: `${SITE_CONFIG.url}/husstand/familie/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Strømforbrug familie — normalt forbrug for familie på 4",
              description: "En familie på 4 bruger 4.000-5.500 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/husstand/familie/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Husstand", href: "/husstand/" }, { name: "Familie" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Strømforbrug for en familie — hvad er normalt?
        </h1>

        <QuickAnswer>
          <p>
            En dansk familie på 4 i et parcelhus bruger typisk 4.000-5.500 kWh
            strøm om året uden varmepumpe, svarende til 10.000-13.750 kr. Med
            varmepumpe stiger forbruget til 7.000-11.000 kWh/år. De største
            strømslugere er køl/frys, tørretumbler og madlavning.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Gennemsnitligt strømforbrug for danske familier</h2>
          <p>
            Familier er den husstandstype der bruger mest strøm i Danmark, primært pga.
            flere hvidevarer, mere tøjvask, mere madlavning og børnenes elektronik. Her er
            det typiske forbrug baseret på familiens størrelse.
          </p>
          <table>
            <thead>
              <tr><th>Familiestørrelse</th><th>kWh/år (uden VP)</th><th>kWh/år (med VP)</th><th>Pris/år (uden VP)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>2 voksne + 1 barn</strong></td><td>3.500-4.500</td><td>6.500-9.500</td><td>8.750-11.250 kr.</td></tr>
              <tr><td><strong>2 voksne + 2 børn</strong></td><td>4.000-5.500</td><td>7.000-11.000</td><td>10.000-13.750 kr.</td></tr>
              <tr><td><strong>2 voksne + 3 børn</strong></td><td>4.500-6.000</td><td>7.500-12.000</td><td>11.250-15.000 kr.</td></tr>
              <tr><td><strong>Storfamilie (6+)</strong></td><td>5.500-7.500</td><td>8.500-13.500</td><td>13.750-18.750 kr.</td></tr>
            </tbody>
          </table>

          <h2>Hvad bruger mest strøm i en familie?</h2>
          <p>
            I en gennemsnitlig familie på 4 med et forbrug på 4.800 kWh/år er det
            <Link href="/toerretumbler/"> tørretumbleren</Link> og <Link href="/koeleskab/">køleskabet</Link> der
            tilsammen udgør næsten en tredjedel af det samlede forbrug. Her er den fulde fordeling.
          </p>
          <table>
            <thead>
              <tr><th>Kategori</th><th>kWh/år</th><th>Andel</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong><Link href="/koeleskab/">Køl og frys</Link></strong></td><td>300-500 kWh</td><td>6-10%</td><td>750-1.250 kr.</td></tr>
              <tr><td><strong><Link href="/toerretumbler/">Tørretumbler</Link></strong></td><td>300-700 kWh</td><td>6-15%</td><td>750-1.750 kr.</td></tr>
              <tr><td><strong>Madlavning (<Link href="/ovn/">ovn</Link>, <Link href="/induktion/">komfur</Link>)</strong></td><td>300-500 kWh</td><td>6-10%</td><td>750-1.250 kr.</td></tr>
              <tr><td><strong><Link href="/opvaskemaskine/">Opvaskemaskine</Link></strong></td><td>200-300 kWh</td><td>4-6%</td><td>500-750 kr.</td></tr>
              <tr><td><strong><Link href="/vaskemaskine/">Vaskemaskine</Link></strong></td><td>150-250 kWh</td><td>3-5%</td><td>375-625 kr.</td></tr>
              <tr><td><strong>Underholdning + IT</strong></td><td>300-600 kWh</td><td>6-13%</td><td>750-1.500 kr.</td></tr>
              <tr><td><strong>Belysning</strong></td><td>200-350 kWh</td><td>4-7%</td><td>500-875 kr.</td></tr>
              <tr><td><strong>Varmt vand + øvrige</strong></td><td>800-1.500 kWh</td><td>17-31%</td><td>2.000-3.750 kr.</td></tr>
            </tbody>
          </table>

          <h2>Børnenes strømforbrug — hvad koster de ekstra?</h2>
          <p>
            Hvert barn tilføjer typisk 500-1.000 kWh/år til familiens forbrug. Små børn (0-6 år)
            bruger mindst — primært ekstra tøjvask og lidt madlavning. Teenagere bruger mest pga.
            lang tv-tid, <Link href="/playstation/">gaming</Link>, <Link href="/computer/">computer</Link> og
            ekstra badetid.
          </p>
          <table>
            <thead>
              <tr><th>Barnets alder</th><th>Ekstra kWh/år</th><th>Primære poster</th></tr>
            </thead>
            <tbody>
              <tr><td>0-6 år</td><td>300-500 kWh</td><td>Tøjvask, madlavning, belysning</td></tr>
              <tr><td>7-12 år</td><td>500-700 kWh</td><td>+ tablet, tv, lys på værelset</td></tr>
              <tr><td>13-17 år</td><td>700-1.200 kWh</td><td>+ gaming-pc, lang badetid, telefon-opladning</td></tr>
            </tbody>
          </table>

          <h2>Familie med varmepumpe — samlet forbrug</h2>
          <p>
            Har I en <Link href="/varmepumpe/">varmepumpe</Link>, stiger det samlede elforbrug til
            7.000-11.000 kWh/år (17.500-27.500 kr.). Det lyder af meget, men varmepumpen
            erstatter gasfyr (18.000-24.000 kr./år) eller oliefyr (22.000-30.000 kr./år) —
            så den samlede energiudgift falder typisk med 5.000-15.000 kr./år.
          </p>
          <p>
            Se vores detaljerede guide: <Link href="/husstand/med-varmepumpe/">Strømforbrug husstand med varmepumpe</Link>.
          </p>

          <h2>7 sparetips for familier</h2>
          <p>
            En gennemsnitlig dansk familie kan spare 2.000-5.000 kr./år på strømmen med
            disse konkrete tiltag. Punkt 1 og 2 giver størst effekt og kræver mindst indsats.
          </p>
          <ol>
            <li><strong>Skift elselskab</strong> — med 5.000 kWh/år sparer I op til 2.300 kr./år</li>
            <li><strong>Skift gammel <Link href="/toerretumbler/">tørretumbler</Link> til varmepumpemodel</strong> — sparer 600-1.200 kr./år</li>
            <li><strong>Er <Link href="/koeleskab/">køleskabet</Link> 10+ år?</strong> — et nyt sparer 400-700 kr./år</li>
            <li><strong>Brug eco-program på alle hvidevarer</strong> — sparer 200-400 kr./år</li>
            <li><strong>Tør tøj udendørs om sommeren</strong> — halverer tørretumbler-forbruget</li>
            <li><strong>Sluk standby i børneværelserne</strong> — sparer 100-300 kr./år</li>
            <li><strong>Brug timer på <Link href="/elradiator/">elradiatorer</Link></strong> — undgå opvarmning af tomme rum</li>
          </ol>
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
