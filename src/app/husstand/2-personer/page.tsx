import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";

import QuickAnswer from "@/components/content/QuickAnswer";
import SwitchCta from "@/components/marketing/SwitchCta";
import { withCurrentYear, formatKr, formatPrice } from "@/lib/format";
import { pageMeta } from "@/lib/pages";

import { getPrices, tokenPrices, savingPerKwh, type SitePrices } from "@/lib/prices";
import PriceBasis from "@/components/content/PriceBasis";
import type { TokenPrices } from "@/lib/tokens";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";

export const metadata: Metadata = {
  title: withCurrentYear("Strømforbrug 2 personer (2026) → Se normalt forbrug for par"),
  description:
    "Et par bruger typisk 2.500-3.500 kWh strøm om året. Se normalt forbrug i lejlighed vs. hus, og hvordan I kan spare som husstand på 2.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/2-personer/` },
};

const faqsFor = (t: TokenPrices, prices: SitePrices) => {
  const deal = prices.deals.DK1;
  const cheapestMarginal = deal.cheapest?.marginalKrPerKwh ?? t.dk1;
  const cheapestName = deal.cheapest?.supplierName ?? "den billigste aftale";
  const saving = savingPerKwh(prices, "DK1");
  return [
  { question: "Hvor meget strøm bruger 2 personer om året?", answer: `Et par bruger typisk 2.500-3.500 kWh/år uden varmepumpe. I en lejlighed 2.000-3.000 kWh (${formatKr(2000 * t.dk)}-${formatKr(3000 * t.dk)} kr.), i et hus 2.500-3.500 kWh (${formatKr(2500 * t.dk)}-${formatKr(3500 * t.dk)} kr.).` },
  { question: "Hvad er normalt strømforbrug for et par?", answer: "Et normalt strømforbrug for 2 personer i et hus er 2.500-3.500 kWh/år. Over 4.000 kWh (uden varmepumpe) tyder på besparelsespotentiale." },
  { question: "Bruger 2 personer dobbelt så meget som 1?", answer: "Nej, kun ca. 50-70% mere. Mange apparater (køleskab, router, belysning) bruger det samme uanset om der bor 1 eller 2 personer. Det ekstra forbrug kommer fra madlavning, vask og personlig pleje." },
  { question: "Hvad koster strøm for 2 personer om måneden?", answer: `Med ${formatPrice(t.dk)} kr./kWh koster det ca. ${formatKr(2500 * t.dk / 12)}-${formatKr(3500 * t.dk / 12)} kr./md. i et hus og ${formatKr(2000 * t.dk / 12)}-${formatKr(3000 * t.dk / 12)} kr./md. i en lejlighed (begge uden varmepumpe).` },
  { question: "Hvor meget sparer et par ved at skifte elselskab?", answer: `Med 3.000 kWh/år sparer I ca. ${formatKr(3000 * saving)} kr./år ved at skifte fra markedets marginalpris (${formatPrice(t.dk1)} kr./kWh) til den billigste rene, varige aftale (${cheapestName}, ${formatPrice(cheapestMarginal)} kr./kWh) — begge uden abonnement. Det tager fem minutter at skifte.` },
  { question: "Hvad bruger mest strøm for et par?", answer: "Køleskab/fryser (24/7), madlavning og tøjvask/tørring er de tre største poster. Har I en gammel tørretumbler, er den ofte den enkeltstående dyreste strømsluger." },
  { question: "Er 4.000 kWh meget for 2 personer?", answer: "Ja, det er over gennemsnittet. Det kan skyldes gammel tørretumbler, elvarme, hjemmekontor med stationær pc, eller et ekstra kummefryser. Tjek de individuelle apparater med vores beregnere." },
  { question: "Påvirker hjemmekontor strømforbruget?", answer: `Ja, en computer der kører 8 timer/dag bruger 50-200 kWh/år ekstra. Med ekstra belysning og evt. ekstra varme i kontoret kan det samlede ekstra forbrug nå 150-400 kWh/år (${formatKr(150 * t.dk)}-${formatKr(400 * t.dk)} kr.).` },
  ];
};

export default async function ToPersonerPage() {
  const prices = await getPrices();
  const t = tokenPrices(prices);
  const deal = prices.deals.DK1;
  const cheapestMarginal = deal.cheapest?.marginalKrPerKwh ?? t.dk1;
  const cheapestName = deal.cheapest?.supplierName ?? "den billigste aftale";
  const saving = savingPerKwh(prices, "DK1");
  const faqs = faqsFor(t, prices);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Husstand", url: `${SITE_CONFIG.url}/husstand/` },
              { name: "2 personer", url: `${SITE_CONFIG.url}/husstand/2-personer/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Strømforbrug 2 personer — normalt forbrug for par",
              description: "Et par bruger typisk 2.500-3.500 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/husstand/2-personer/`,
              datePublished: "2026-07-29",
              dateModified: pageMeta("/husstand/2-personer/").updated,
            }),
          ]),
        }}
      />

      <PageHero crumbs={[{ name: "Husstand", href: "/husstand/" }, { name: "2 personer" }]} eyebrow="Husstand" title="Strømforbrug for 2 personer — hvad er normalt?" lastUpdated={pageMeta("/husstand/2-personer/").updated} motif={motifForPath("/husstand/2-personer/")} />

      <article className="container-text py-10 md:py-14">

        <QuickAnswer>
          <p>
            Et par bruger typisk 2.500-3.500 kWh strøm om året uden varmepumpe,
            svarende til {formatKr(2500 * t.dk)}-{formatKr(3500 * t.dk)} kr. ved {formatPrice(t.dk)} kr./kWh. I en lejlighed er
            forbruget ca. 2.000-3.000 kWh, i et hus 2.500-3.500 kWh. To
            personer bruger kun 50-70% mere end én — ikke dobbelt.
          </p>
        </QuickAnswer>

        <div className="prose-content">
          <h2>Normalt strømforbrug for 2 personer — oversigt</h2>
          <p>
            Et par bruger mere strøm end en single, men langt fra dobbelt. Det skyldes at
            mange apparater kører uanset antal personer (køleskab, router, grundbelysning).
            Det ekstra forbrug kommer primært fra ekstra madlavning, tøjvask og varmt vand.
          </p>
          <table>
            <thead>
              <tr><th>Boligtype</th><th>Normalt</th><th>Højt</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Lejlighed (60-80 m²)</strong></td><td>2.000-3.000 kWh</td><td>3.000+ kWh</td><td>{formatKr(2000 * t.dk)}-{formatKr(3000 * t.dk)} kr.</td></tr>
              <tr><td><strong>Rækkehus (80-110 m²)</strong></td><td>2.300-3.200 kWh</td><td>3.200+ kWh</td><td>{formatKr(2300 * t.dk)}-{formatKr(3200 * t.dk)} kr.</td></tr>
              <tr><td><strong>Hus (100-150 m²)</strong></td><td>2.500-3.500 kWh</td><td>3.500+ kWh</td><td>{formatKr(2500 * t.dk)}-{formatKr(3500 * t.dk)} kr.</td></tr>
            </tbody>
          </table>
          <p><em>Uden varmepumpe eller elvarme. Med <Link href="/varmepumpe/">varmepumpe</Link> tilføjes 2.000-6.000 kWh/år.</em></p>

          <h2>Typisk fordeling af strømforbruget</h2>
          <p>
            For et par i et hus med et samlet forbrug på ca. 3.000 kWh/år fordeler
            strømmen sig typisk sådan. De store poster er de samme som for en single,
            men vaskemaskine og tøjvask fylder relativt mere.
          </p>
          <table>
            <thead>
              <tr><th>Kategori</th><th>kWh/år</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong><Link href="/koeleskab/">Køl og frys</Link></strong></td><td>200-350 kWh</td><td>{formatKr(200 * t.dk)}-{formatKr(350 * t.dk)} kr.</td></tr>
              <tr><td><strong>Madlavning</strong></td><td>200-350 kWh</td><td>{formatKr(200 * t.dk)}-{formatKr(350 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/vaskemaskine/">Tøjvask</Link> + <Link href="/toerretumbler/">tørring</Link></strong></td><td>200-400 kWh</td><td>{formatKr(200 * t.dk)}-{formatKr(400 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/opvaskemaskine/">Opvaskemaskine</Link></strong></td><td>150-250 kWh</td><td>{formatKr(150 * t.dk)}-{formatKr(250 * t.dk)} kr.</td></tr>
              <tr><td><strong>Underholdning + IT</strong></td><td>200-400 kWh</td><td>{formatKr(200 * t.dk)}-{formatKr(400 * t.dk)} kr.</td></tr>
              <tr><td><strong>Belysning</strong></td><td>150-250 kWh</td><td>{formatKr(150 * t.dk)}-{formatKr(250 * t.dk)} kr.</td></tr>
              <tr><td><strong>Varmt vand + øvrige</strong></td><td>500-800 kWh</td><td>{formatKr(500 * t.dk)}-{formatKr(800 * t.dk)} kr.</td></tr>
            </tbody>
          </table>

          <h2>1 person vs. 2 personer — hvorfor ikke dobbelt?</h2>
          <p>
            To personer bruger typisk kun 50-70% mere strøm end én. Årsagen er, at
            mange apparater har fast grundforbrug uanset antal brugere:
            <Link href="/koeleskab/"> køleskabet</Link> kører 24/7, <Link href="/router/">routeren</Link> er
            altid tændt, og grundbelysningen er den samme. Det ekstra forbrug
            kommer fra madlavning (dobbelt portion = max 30% mere), tøjvask (flere
            maskiner, men stadig fylder man maskinen), og personlig pleje (hair
            dryer, ekstra bad).
          </p>

          <h2>Hjemmekontor — ekstra forbrug</h2>
          <p>
            Arbejder en eller begge hjemme, stiger forbruget med 150-400 kWh/år
            ({formatKr(150 * t.dk)}-{formatKr(400 * t.dk)} kr.) pr. person der arbejder hjemme. En <Link href="/laptop/">laptop</Link> bruger
            kun 30-65W, men en stationær <Link href="/computer/">pc med skærm</Link> bruger 100-300W.
            Dertil kommer ekstra belysning og evt. elvarme i kontoret.
          </p>

          <h2>Sådan sparer I som par</h2>
          <p>
            De mest effektive besparelser for et par er de samme som for en single,
            men med større absolut effekt fordi forbruget er højere. Med 3.000 kWh/år
            kan I typisk spare 1.000-2.500 kr./år med disse tiltag:
          </p>
          <ol>
            <li><strong>Skift elselskab</strong> — sparer 700-1.500 kr./år</li>
            <li><strong>Skift gammel <Link href="/toerretumbler/">tørretumbler</Link></strong> — sparer 500-1.000 kr./år</li>
            <li><strong>Brug eco-programmer på hvidevarer</strong> — sparer 100-200 kr./år</li>
            <li><strong>Kør <Link href="/opvaskemaskine/">opvaskemaskine</Link> og <Link href="/vaskemaskine/">vaskemaskine</Link> kun når de er fulde</strong> — sparer 50-150 kr./år</li>
            <li><strong>Sluk standby og underholdning på stikdåse</strong> — sparer 100-200 kr./år</li>
          </ol>
        </div>

        <PriceBasis prices={prices} className="my-4" />

        <SwitchCta kwh={3500} household="en husstand med to voksne" />
      </article>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/husstand/2-personer/" prices={prices} />
      <AuthorBox />
    </>
  );
}
