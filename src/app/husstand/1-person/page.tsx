import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Strømforbrug 1 person 2026 → Se normalt forbrug og pris",
  description:
    "En person bruger typisk 1.500-2.500 kWh strøm om året. Se normalt forbrug i lejlighed vs. hus, hvad der bruger mest, og hvordan du sparer.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/1-person/` },
};

const faqs = [
  { question: "Hvor meget strøm bruger 1 person om året?", answer: "En enkelt person bruger typisk 1.500-2.500 kWh om året uden varmepumpe. I en lejlighed er det 1.500-2.000 kWh (3.750-5.000 kr.), og i et hus 2.000-2.500 kWh (5.000-6.250 kr.)." },
  { question: "Hvad er normalt strømforbrug for en single?", answer: "Et normalt strømforbrug for en single i en lejlighed er 1.500-2.000 kWh/år. Over 2.500 kWh tyder på besparelsespotentiale — typisk i form af ældre hvidevarer eller høj standby-belastning." },
  { question: "Hvad koster strøm for 1 person om måneden?", answer: "Med en elpris på 2,50 kr./kWh koster strømmen for 1 person ca. 310-520 kr./md. i en lejlighed og 415-520 kr./md. i et hus (begge uden varmepumpe)." },
  { question: "Hvad bruger mest strøm som single?", answer: "De tre største poster er køleskab (24/7, 100-200 kWh/år), madlavning (ovn, komfur, 100-200 kWh/år) og underholdning (tv, computer, router, 100-250 kWh/år)." },
  { question: "Bruger man mere strøm i hus end lejlighed?", answer: "Ja, typisk 20-40% mere. Et hus har mere areal at belyse, ofte en ekstra fryser, og evt. udendørsbelysning. Desuden er varmtvandsforbruget ofte højere i et hus." },
  { question: "Hvad kan jeg gøre for at spare strøm som single?", answer: "De mest effektive tiltag er: 1) skift til et billigere elselskab, 2) skift gammelt køleskab, 3) sluk standby, 4) brug eco-programmer, 5) skift til LED-pærer." },
  { question: "Er 3.000 kWh meget for 1 person?", answer: "Ja, 3.000 kWh er højt for 1 person (typisk er det 1.500-2.500). Det kan skyldes et gammelt køleskab, elvarme, mange elektroniske apparater eller en varmepumpe." },
  { question: "Hvad er det billigste elselskab for en single?", answer: "Altid Energi tilbyder 1,54 kr./kWh uden abonnement og binding. For en single med 2.000 kWh/år sparer du ca. 920 kr./år sammenlignet med gennemsnitsprisen (2,00 kr./kWh)." },
];

export default function EnPersonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Husstand", url: `${SITE_CONFIG.url}/husstand/` },
              { name: "1 person", url: `${SITE_CONFIG.url}/husstand/1-person/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Strømforbrug 1 person — normalt forbrug og pris",
              description: "En person bruger typisk 1.500-2.500 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/husstand/1-person/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          items={[
            { name: "Husstand", href: "/husstand/" },
            { name: "1 person" },
          ]}
        />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Strømforbrug for 1 person — hvad er normalt?
        </h1>

        <QuickAnswer>
          <p>
            En enkelt person bruger typisk 1.500-2.500 kWh strøm om året,
            svarende til 3.750-6.250 kr. ved 2,50 kr./kWh. I en lejlighed er
            forbruget 1.500-2.000 kWh, mens det i et hus stiger til 2.000-2.500
            kWh pga. større areal og flere apparater.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Normalt strømforbrug for 1 person — oversigt</h2>
          <p>
            Dit strømforbrug som enlig afhænger primært af din boligtype,
            apparaternes alder og dine vaner. Her er en detaljeret oversigt over
            hvad der er normalt, og hvornår du bruger for meget.
          </p>
          <table>
            <thead>
              <tr>
                <th>Boligtype</th>
                <th>Normalt</th>
                <th>Højt</th>
                <th>Pris/år (normalt)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Lejlighed (50-70 m²)</strong></td>
                <td>1.500-2.000 kWh</td>
                <td>2.000+ kWh</td>
                <td>3.750-5.000 kr.</td>
              </tr>
              <tr>
                <td><strong>Rækkehus (70-100 m²)</strong></td>
                <td>1.800-2.300 kWh</td>
                <td>2.300+ kWh</td>
                <td>4.500-5.750 kr.</td>
              </tr>
              <tr>
                <td><strong>Hus (100-130 m²)</strong></td>
                <td>2.000-2.500 kWh</td>
                <td>2.500+ kWh</td>
                <td>5.000-6.250 kr.</td>
              </tr>
            </tbody>
          </table>
          <p><em>Tallene er uden varmepumpe eller elvarme. Med <Link href="/varmepumpe/">varmepumpe</Link> tilføjes 2.000-4.000 kWh/år.</em></p>

          <h2>Hvad bruger mest strøm som single?</h2>
          <p>
            Som enlig er dit forbrug lavere end en families, men fordelingen er anderledes —
            køleskabet og underholdning fylder relativt mere. Her er den typiske fordeling
            for en single i en lejlighed med et forbrug på ca. 1.800 kWh/år:
          </p>
          <table>
            <thead>
              <tr>
                <th>Kategori</th>
                <th>kWh/år</th>
                <th>Andel</th>
                <th>Pris/år</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong><Link href="/koeleskab/">Køleskab/fryser</Link></strong></td>
                <td>150-250 kWh</td>
                <td>10-14%</td>
                <td>375-625 kr.</td>
              </tr>
              <tr>
                <td><strong>Madlavning (<Link href="/ovn/">ovn</Link>, <Link href="/induktion/">induktion</Link>)</strong></td>
                <td>150-250 kWh</td>
                <td>8-14%</td>
                <td>375-625 kr.</td>
              </tr>
              <tr>
                <td><strong>Underholdning (<Link href="/tv/">tv</Link>, <Link href="/computer/">pc</Link>, <Link href="/router/">router</Link>)</strong></td>
                <td>150-300 kWh</td>
                <td>8-17%</td>
                <td>375-750 kr.</td>
              </tr>
              <tr>
                <td><strong>Belysning (<Link href="/led-paere/">LED</Link>)</strong></td>
                <td>100-200 kWh</td>
                <td>6-11%</td>
                <td>250-500 kr.</td>
              </tr>
              <tr>
                <td><strong><Link href="/vaskemaskine/">Vaskemaskine</Link></strong></td>
                <td>50-100 kWh</td>
                <td>3-6%</td>
                <td>125-250 kr.</td>
              </tr>
              <tr>
                <td><strong>Varmt vand (elkedel, bruser)</strong></td>
                <td>200-400 kWh</td>
                <td>11-22%</td>
                <td>500-1.000 kr.</td>
              </tr>
              <tr>
                <td><strong>Øvrige apparater</strong></td>
                <td>300-500 kWh</td>
                <td>17-28%</td>
                <td>750-1.250 kr.</td>
              </tr>
            </tbody>
          </table>

          <h2>Lejlighed vs. hus — hvorfor er der forskel?</h2>
          <p>
            En single i en lejlighed bruger typisk 20-30% mindre strøm end i et hus. Det skyldes
            flere faktorer: et hus har mere areal at belyse, ofte en separat <Link href="/fryser/">kummefryser</Link>,
            udendørsbelysning, og typisk større afstand fra varmtvandsbeholder til tappested
            (= mere vandspild og energitab).
          </p>
          <p>
            I en lejlighed deler du desuden varmtvandsanlæg med naboerne, hvilket giver lavere
            individuel energiudgift til varmt vand. I et hus betaler du hele udgiften selv.
          </p>

          <h2>Er dit forbrug normalt? — Sådan tjekker du</h2>
          <p>
            Find dit årlige kWh-forbrug på din seneste elregning eller log ind på
            <strong> Eloverblik.dk</strong> med MitID. Sammenlign derefter med tabellen ovenfor
            for din boligtype. Er du mere end 20% over det &quot;normale&quot; interval, er der
            besparelsespotentiale.
          </p>
          <p>
            De mest almindelige årsager til for højt forbrug som single er: 1) et gammelt
            <Link href="/koeleskab/"> køleskab</Link> (15+ år = 200-300 kWh ekstra/år),
            2) elvarme i bad eller entre, 3) gaming-pc eller server der kører 24/7.
          </p>

          <h2>5 sparetips for single-husstande</h2>
          <p>
            Som enlig kan du spare 300-800 kr./år på strømmen med disse fem konkrete tiltag.
            Det vigtigste er at skifte elselskab — det kræver 5 minutter og giver størst besparelse.
          </p>
          <ol>
            <li><strong>Skift til billigere elselskab</strong> — sparer 500-1.000 kr./år alene</li>
            <li><strong>Skift køleskab hvis det er 10+ år</strong> — sparer 200-400 kr./år</li>
            <li><strong>Sluk standby på tv og underholdning</strong> — sparer 50-150 kr./år</li>
            <li><strong>Brug <Link href="/opvaskemaskine/">opvaskemaskinens</Link> eco-program</strong> — sparer 50-100 kr./år</li>
            <li><strong>Skift til <Link href="/led-paere/">LED-pærer</Link></strong> — sparer 100-300 kr./år (hvis du stadig har halogen)</li>
          </ol>

          <h2>Strømforbrug pr. måned som single</h2>
          <p>
            En enkelt person bruger ca. 125-210 kWh pr. måned (310-525 kr./md.).
            Forbruget varierer over året — om vinteren er det typisk 10-20% højere pga.
            mere belysning og brug af <Link href="/elradiator/">elvarme</Link> i badeværelset.
            Om sommeren falder forbruget da du bruger mindre lys og sjældnere
            <Link href="/toerretumbler/"> tørretumbler</Link>.
          </p>
        </div>

        <AffiliateCta />

        {/* FAQ */}
        <div className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">
            Ofte stillede spørgsmål
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-ink-200 rounded-card">
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
      </article>
    </>
  );
}
