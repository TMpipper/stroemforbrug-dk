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
  title: withCurrentYear("Strømforbrug familie (2026) → Normalt forbrug for 4 personer"),
  description:
    "En familie på 4 bruger 4.000-5.500 kWh/år uden varmepumpe. Se hvad der bruger mest strøm, og få sparetips der kan skære 2.000+ kr. af elregningen.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/familie/` },
};

const faqsFor = (t: TokenPrices, prices: SitePrices) => {
  const deal = prices.deals.DK1;
  const cheapestMarginal = deal.cheapest?.marginalKrPerKwh ?? t.dk1;
  const cheapestName = deal.cheapest?.supplierName ?? "den billigste aftale";
  const saving = savingPerKwh(prices, "DK1");
  return [
  { question: "Hvor meget strøm bruger en familie på 4?", answer: `En familie på 4 i et parcelhus bruger typisk 4.000-5.500 kWh/år uden varmepumpe, svarende til ${formatKr(4000 * t.dk)}-${formatKr(5500 * t.dk)} kr. Med varmepumpe stiger det til 7.000-11.000 kWh/år.` },
  { question: "Hvad er normalt strømforbrug for en familie?", answer: "For en gennemsnitlig dansk familie (2 voksne + 2 børn) i et hus er 4.000-5.500 kWh/år normalt. Over 6.000 kWh (uden varmepumpe) er højt og tyder på besparelsespotentiale." },
  { question: "Hvad koster strøm for en familie om måneden?", answer: `Ved ${formatPrice(t.dk)} kr./kWh koster det ca. ${formatKr(4000 * t.dk / 12)}-${formatKr(5500 * t.dk / 12)} kr./md. uden varmepumpe. Med varmepumpe stiger det til ${formatKr(7000 * t.dk / 12)}-${formatKr(11000 * t.dk / 12)} kr./md. i gennemsnit (mere om vinteren, mindre om sommeren).` },
  { question: "Hvad bruger mest strøm i en familie?", answer: "De tre største poster er: 1) køl/frys (400-600 kWh), 2) tøjvask + tørring (400-750 kWh), 3) madlavning (300-500 kWh). Tørretumbleren er ofte den enkeltstående dyreste post." },
  { question: "Bruger familier med børn mere strøm?", answer: "Ja, ca. 500-1.000 kWh mere pr. barn (ekstra vask, tørring, belysning, elektronik). Teenagere med gaming-pc bruger mest — en gaming-pc kan alene tilføje 200-500 kWh/år." },
  { question: "Hvor meget sparer en familie ved at skifte elselskab?", answer: `Med 5.000 kWh/år sparer I ca. ${formatKr(5000 * saving)} kr./år ved at skifte fra markedets marginalpris (${formatPrice(t.dk1)} kr./kWh) til den billigste rene, varige aftale (${cheapestName}, ${formatPrice(cheapestMarginal)} kr./kWh) — begge uden abonnement, Vestdanmark. Velkomstrabatter og introtilbud er ikke regnet med.` },
  { question: "Er 7.000 kWh meget for en familie på 4?", answer: "Uden varmepumpe er 7.000 kWh højt og tyder på gammel tørretumbler, gammel fryser/køleskab eller elvarme. Med varmepumpe er 7.000 kWh normalt." },
  { question: "Hvad er strømforbruget for en familie på 5?", answer: `En familie på 5 bruger typisk 4.500-6.000 kWh/år (${formatKr(4500 * t.dk)}-${formatKr(6000 * t.dk)} kr.) uden varmepumpe. Den 5. person tilføjer ca. 500-800 kWh i ekstra vask, madlavning og elektronik.` },
  ];
};

export default async function FamiliePage() {
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
              { name: "Familie", url: `${SITE_CONFIG.url}/husstand/familie/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Strømforbrug familie — normalt forbrug for familie på 4",
              description: "En familie på 4 bruger 4.000-5.500 kWh strøm om året.",
              url: `${SITE_CONFIG.url}/husstand/familie/`,
              datePublished: "2026-07-29",
              dateModified: pageMeta("/husstand/familie/").updated,
            }),
          ]),
        }}
      />

      <PageHero crumbs={[{ name: "Husstand", href: "/husstand/" }, { name: "Familie" }]} eyebrow="Husstand" title="Strømforbrug for en familie — hvad er normalt?" lastUpdated={pageMeta("/husstand/familie/").updated} motif={motifForPath("/husstand/familie/")} />

      <article className="container-text py-10 md:py-14">

        <QuickAnswer>
          <p>
            En dansk familie på 4 i et parcelhus bruger typisk 4.000-5.500 kWh
            strøm om året uden varmepumpe, svarende til {formatKr(4000 * t.dk)}-{formatKr(5500 * t.dk)} kr. Med
            varmepumpe stiger forbruget til 7.000-11.000 kWh/år. De største
            strømslugere er køl/frys, tørretumbler og madlavning.
          </p>
        </QuickAnswer>

        <div className="prose-content">
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
              <tr><td><strong>2 voksne + 1 barn</strong></td><td>3.500-4.500</td><td>6.500-9.500</td><td>{formatKr(3500 * t.dk)}-{formatKr(4500 * t.dk)} kr.</td></tr>
              <tr><td><strong>2 voksne + 2 børn</strong></td><td>4.000-5.500</td><td>7.000-11.000</td><td>{formatKr(4000 * t.dk)}-{formatKr(5500 * t.dk)} kr.</td></tr>
              <tr><td><strong>2 voksne + 3 børn</strong></td><td>4.500-6.000</td><td>7.500-12.000</td><td>11.250-11.160 kr.</td></tr>
              <tr><td><strong>Storfamilie (6+)</strong></td><td>5.500-7.500</td><td>8.500-13.500</td><td>{formatKr(7400 * t.dk)}-{formatKr(7500 * t.dk)} kr.</td></tr>
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
              <tr><td><strong><Link href="/koeleskab/">Køl og frys</Link></strong></td><td>300-500 kWh</td><td>6-10%</td><td>{formatKr(300 * t.dk)}-{formatKr(500 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/toerretumbler/">Tørretumbler</Link></strong></td><td>300-700 kWh</td><td>6-15%</td><td>{formatKr(300 * t.dk)}-{formatKr(700 * t.dk)} kr.</td></tr>
              <tr><td><strong>Madlavning (<Link href="/ovn/">ovn</Link>, <Link href="/induktion/">komfur</Link>)</strong></td><td>300-500 kWh</td><td>6-10%</td><td>{formatKr(300 * t.dk)}-{formatKr(500 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/opvaskemaskine/">Opvaskemaskine</Link></strong></td><td>200-300 kWh</td><td>4-6%</td><td>{formatKr(200 * t.dk)}-{formatKr(300 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/vaskemaskine/">Vaskemaskine</Link></strong></td><td>150-250 kWh</td><td>3-5%</td><td>{formatKr(150 * t.dk)}-{formatKr(250 * t.dk)} kr.</td></tr>
              <tr><td><strong>Underholdning + IT</strong></td><td>300-600 kWh</td><td>6-13%</td><td>{formatKr(300 * t.dk)}-{formatKr(600 * t.dk)} kr.</td></tr>
              <tr><td><strong>Belysning</strong></td><td>200-350 kWh</td><td>4-7%</td><td>{formatKr(200 * t.dk)}-{formatKr(350 * t.dk)} kr.</td></tr>
              <tr><td><strong>Varmt vand + øvrige</strong></td><td>800-1.500 kWh</td><td>17-31%</td><td>{formatKr(800 * t.dk)}-{formatKr(1500 * t.dk)} kr.</td></tr>
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
            7.000-11.000 kWh/år ({formatKr(7000 * t.dk)}-{formatKr(11000 * t.dk)} kr.). Det lyder af meget, men varmepumpen
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

        <PriceBasis prices={prices} className="my-4" />

        <SwitchCta kwh={5500} household="en børnefamilie" />
      </article>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/husstand/familie/" prices={prices} />
      <AuthorBox />
    </>
  );
}
