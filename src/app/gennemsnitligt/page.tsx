import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Gennemsnitligt strømforbrug 2026 → Se forbrug pr. husstand",
  description:
    "Det gennemsnitlige strømforbrug i Danmark er 3.000-4.500 kWh/år for en husstand uden varmepumpe. Se forbrug pr. person, familie og boligtype.",
  alternates: { canonical: `${SITE_CONFIG.url}/gennemsnitligt/` },
};

const faqs = [
  { question: "Hvad er det gennemsnitlige strømforbrug i Danmark?", answer: "Det gennemsnitlige strømforbrug for en dansk husstand uden varmepumpe er ca. 3.000-4.500 kWh/år, svarende til 7.500-11.250 kr. Med varmepumpe stiger det til 6.000-10.000 kWh/år." },
  { question: "Hvor meget strøm bruger en person om året?", answer: "En enkelt person bruger typisk 1.500-2.500 kWh/år (3.750-6.250 kr.). I en lejlighed er forbruget lavere (1.500-2.000 kWh), i et hus højere (2.000-2.500 kWh)." },
  { question: "Hvor meget strøm bruger en familie på 4?", answer: "En familie på 4 bruger typisk 4.000-5.500 kWh/år uden varmepumpe (10.000-13.750 kr.). Med varmepumpe stiger det til 7.000-11.000 kWh/år." },
  { question: "Er mit strømforbrug normalt?", answer: "Se din seneste elregning og sammenlign med gennemsnittet for din husstandsstørrelse. Under gennemsnittet er godt, over 20% mere end gennemsnittet tyder på besparelsespotentiale." },
  { question: "Hvad koster 1 kWh strøm i 2026?", answer: "Den gennemsnitlige elpris i Danmark er ca. 2,50 kr./kWh inkl. afgifter, transport og moms. Prisen varierer med spotprisen og dit elselskab — de billigste tilbyder ca. 1,50-1,80 kr./kWh." },
  { question: "Hvordan kan jeg sænke mit strømforbrug?", answer: "De mest effektive tiltag er: 1) skift gamle hvidevarer til A-mærkede, 2) reducer standby-forbrug, 3) skift til LED-pærer, 4) vælg et billigere elselskab, 5) brug eco-programmer på vaskemaskine og opvaskemaskine." },
];

export default function GennemsnitligtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Gennemsnitligt strømforbrug", url: `${SITE_CONFIG.url}/gennemsnitligt/` },
            ]),
            faqSchema(faqs),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Gennemsnitligt strømforbrug" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Gennemsnitligt strømforbrug i Danmark 2026
        </h1>

        <QuickAnswer>
          <p>
            Det gennemsnitlige strømforbrug for en dansk husstand uden varmepumpe
            er 3.000-4.500 kWh om året, svarende til 7.500-11.250 kr. ved en
            elpris på 2,50 kr./kWh. Med varmepumpe stiger det til 6.000-10.000
            kWh/år (15.000-25.000 kr.).
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Gennemsnitligt strømforbrug pr. husstandstype</h2>
          <p>
            Strømforbruget varierer markant afhængigt af husstandens størrelse,
            boligtype og opvarmningsform. Tabellen nedenfor viser det typiske
            forbrug for danske husstande i 2026.
          </p>
          <table>
            <thead>
              <tr>
                <th>Husstandstype</th>
                <th>kWh/år (uden VP)</th>
                <th>kWh/år (med VP)</th>
                <th>Pris/år</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong><Link href="/husstand/">1 person, lejlighed</Link></strong></td>
                <td>1.500-2.000</td>
                <td>—</td>
                <td>3.750-5.000 kr.</td>
              </tr>
              <tr>
                <td><strong>1 person, hus</strong></td>
                <td>2.000-2.500</td>
                <td>5.000-7.000</td>
                <td>5.000-17.500 kr.</td>
              </tr>
              <tr>
                <td><strong>2 personer, lejlighed</strong></td>
                <td>2.000-3.000</td>
                <td>—</td>
                <td>5.000-7.500 kr.</td>
              </tr>
              <tr>
                <td><strong>2 personer, hus</strong></td>
                <td>2.500-3.500</td>
                <td>5.500-8.500</td>
                <td>6.250-21.250 kr.</td>
              </tr>
              <tr>
                <td><strong>Familie (3-4 pers.), hus</strong></td>
                <td>3.500-5.000</td>
                <td>6.500-10.500</td>
                <td>8.750-26.250 kr.</td>
              </tr>
              <tr>
                <td><strong>Stor familie (5+ pers.)</strong></td>
                <td>4.500-6.000</td>
                <td>7.500-12.000</td>
                <td>11.250-30.000 kr.</td>
              </tr>
            </tbody>
          </table>
          <p>
            <em>
              VP = varmepumpe. Priser beregnet med 2,50 kr./kWh. Husstande med
              varmepumpe har markant højere elforbrug, men lavere samlet
              varmepris fordi varmepumpen erstatter gas/olie.
            </em>
          </p>

          <h2>Hvad bruger mest strøm i husstanden?</h2>
          <p>
            I en gennemsnitlig dansk husstand uden varmepumpe fordeler
            strømforbruget sig typisk sådan:
          </p>
          <ol>
            <li>
              <strong>
                <Link href="/koeleskab/">Køl og frys</Link>
              </strong>{" "}
              — 15-25% af det samlede forbrug (kører 24/7)
            </li>
            <li>
              <strong>Madlavning</strong> — 10-15% (
              <Link href="/ovn/">ovn</Link>,{" "}
              <Link href="/opvaskemaskine/">opvaskemaskine</Link>)
            </li>
            <li>
              <strong>Tøjvask og tørring</strong> — 10-15% (
              <Link href="/vaskemaskine/">vaskemaskine</Link> +{" "}
              <Link href="/toerretumbler/">tørretumbler</Link>)
            </li>
            <li>
              <strong>Underholdning</strong> — 10-15% (
              <Link href="/tv/">tv</Link>, <Link href="/computer/">computer</Link>
              , <Link href="/router/">router</Link>)
            </li>
            <li>
              <strong>Belysning</strong> — 10-15%
            </li>
            <li>
              <strong>Øvrige apparater</strong> — 15-25%
            </li>
          </ol>

          <h2>Er dit strømforbrug normalt?</h2>
          <p>
            For at vurdere om dit forbrug er normalt, find din seneste
            årsopgørelse og sammenlign med tabellen ovenfor. Er dit forbrug
            mere end 20% over gennemsnittet for din husstandstype, er der
            sandsynligvis besparelsespotentiale — typisk i form af gamle
            hvidevarer, standby-forbrug eller dårlige vaner.
          </p>
          <p>
            Brug vores <Link href="/beregner/">strømberegner</Link> til at
            beregne hvad hvert enkelt apparat koster dig — det giver det bedste
            overblik over hvor du kan spare.
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
