import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import SwitchCta from "@/components/marketing/SwitchCta";
import PriceBasis from "@/components/content/PriceBasis";
import { getPrices, tokenPrices, REFERENCE_KWH, type SitePrices, type Region } from "@/lib/prices";
import { VAT_FACTOR } from "@/lib/feed/marginal";
import { formatPrice, formatKr, danishMonth, withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { danishDate } from "@/lib/format";

const PATH = "/hvad-koster-en-kwh/";

export const metadata: Metadata = {
  title: withCurrentYear("Hvad koster en kWh (2026)? → Prisens dele og dagens niveau"),
  description:
    "Hvad koster en kWh strøm lige nu? Se marginalprisen for Vest- og Østdanmark, hvad spot, nettarif, afgifter og tillæg udgør, og hvad en typisk elaftale koster.",
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
};

/** Prisens dele pr. kWh inkl. moms for én landsdel — regnet, aldrig skrevet. */
function parts(p: SitePrices, region: Region) {
  const m = p.marginal[region === "DK1" ? "dk1" : "dk2"];
  const vat = (ore: number) => (ore * VAT_FACTOR) / 100;
  const rows = [
    { label: "Spotpris (Nord Pool, forventet niveau)", kr: vat(m.parts.spotOre), can: "Ja — brug strøm, når timeprisen er lav" },
    { label: "Nettarif (netselskabet)", kr: vat(m.parts.gridOre), can: "Nej — følger dit netområde" },
    { label: "Energinet-tariffer og elafgift", kr: vat(m.parts.chargesOre), can: "Nej — fastsat af Energinet og staten" },
    { label: "Elselskabets tillæg (markedets median)", kr: vat(m.parts.markupOre), can: "Ja — vælg en aftale med lavt tillæg" },
  ];
  const total = rows.reduce((n, r) => n + r.kr, 0);
  return { rows: rows.map((r) => ({ ...r, share: r.kr / total })), total, m };
}

function faqsFor(p: SitePrices) {
  const t = tokenPrices(p);
  const d1 = p.deals.DK1;
  const cheapest = d1.cheapest;
  const typical = d1.typical;
  return [
    {
      question: `Hvad koster 1 kWh strøm i Danmark i ${danishMonth(t.month)}?`,
      answer: `Én kWh mere koster ca. ${formatPrice(t.dk1)} kr. vest for Storebælt og ${formatPrice(t.dk2)} kr. øst for — spotprisens forventede niveau, nettarif, Energinets tariffer, elafgift og et typisk tillæg, alt inkl. moms og uden abonnement. Abonnementet er en fast månedlig post oveni.`,
    },
    {
      question: "Hvad er inkluderet i kWh-prisen?",
      answer: "Spotprisen (strømmen selv), nettariffen til dit netselskab, Energinets transmissions- og systemtarif, elafgiften, dit elselskabs tillæg og 25 % moms på det hele. Abonnementet til elselskabet og netselskabet er faste beløb pr. måned og indgår ikke pr. kWh.",
    },
    {
      question: "Hvornår er strømmen billigst?",
      answer: "Som regel om natten og midt på dagen, og dyrest i aftentimerne, hvor både spotprisen og nettariffen er høj. Med en spotaftale betaler du timeprisen direkte, så vask, opvask og opladning uden for kl. 17–21 giver den største forskel.",
    },
    {
      question: "Hvad koster en kWh på den billigste elaftale?",
      answer: cheapest
        ? `Den billigste rene, varige aftale ${d1.scope} er ${cheapest.supplierName} ${cheapest.productName}: ${formatKr(cheapest.allInKr)} kr. om året alt inklusive, svarende til ${formatPrice(cheapest.allInKrPerKwh)} kr./kWh med abonnement — ${formatPrice(cheapest.marginalKrPerKwh)} kr./kWh uden.`
        : "Feedet har i øjeblikket ingen ren, varig aftale at pege på.",
    },
    {
      question: "Hvad er forskellen på spotpris og fastpris?",
      answer: "Med spotpris følger du markedets timepris og betaler elselskabets faste tillæg oveni. Med fastpris låser du kWh-prisen i en periode og betaler for sikkerheden. Over et helt år har spotaftaler historisk været billigst, men regningen svinger fra måned til måned.",
    },
    {
      question: "Hvad koster en typisk elaftale pr. kWh?",
      answer: typical
        ? `Medianen af de ${typical.offers} rene, varige aftaler fra ${typical.suppliers} selskaber i ${d1.areaLabel} er ${formatKr(typical.allInKr)} kr. om året ved ${formatKr(REFERENCE_KWH)} kWh — ${formatPrice(typical.allInKrPerKwh)} kr./kWh alt inklusive, abonnement medregnet.`
        : "Feedet har i øjeblikket ikke nok rene, varige aftaler til en median.",
    },
    {
      question: "Hvorfor er kWh-prisen højere øst for Storebælt?",
      answer: `Både spotprisen og nettariffen ligger typisk højere i Østdanmark. I ${danishMonth(t.month)} er forskellen ${formatPrice(Math.abs(t.dk2 - t.dk1))} kr./kWh — på 4.000 kWh om året bliver det ${formatKr(Math.abs(t.dk2 - t.dk1) * 4000)} kr.`,
    },
    {
      question: "Hvordan finder jeg den billigste kWh-pris?",
      answer: "Vælg en spotaftale med lavt tillæg og lavt abonnement for dit forbrug, og flyt det forbrug, du kan, til timer med lav pris. Tjek dit faktiske forbrug på Eloverblik.dk, før du sammenligner.",
    },
  ];
}

export default async function HvadKosterEnKwhPage() {
  const prices = await getPrices();
  const t = tokenPrices(prices);
  const faqs = faqsFor(prices);
  const dk1 = parts(prices, "DK1");
  const dk2 = parts(prices, "DK2");
  const month = danishMonth(t.month);
  const url = `${SITE_CONFIG.url}${PATH}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Hvad koster en kWh", url },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: withCurrentYear("Hvad koster en kWh i (2026)?").replace(" i (", " i ").replace(")?", "?"),
              description: "Marginalprisen pr. kWh for Vest- og Østdanmark, prisens dele og hvad en typisk og den billigste elaftale koster.",
              url,
              datePublished: pageMeta(PATH).published,
              dateModified: pageMeta(PATH).updated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Hvad koster en kWh" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret {danishDate(pageMeta(PATH).updated)}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Hvad koster en kWh i {month}?
        </h1>

        <QuickAnswer>
          <p>
            Én kWh mere koster ca. <strong>{formatPrice(t.dk1)} kr. i Vestdanmark</strong> og{" "}
            <strong>{formatPrice(t.dk2)} kr. i Østdanmark</strong> i {month} — spotprisens forventede niveau,
            nettarif, Energinets tariffer, elafgift og et typisk tillæg, alt inkl. moms og uden abonnement.
            Time for time svinger prisen meget mere end det: den er lavest om natten og midt på dagen og højest
            kl. 17–21.
          </p>
        </QuickAnswer>
        <PriceBasis prices={prices} className="mb-8" />

        <div className="prose-editorial">
          <h2>Sammensætningen af kWh-prisen</h2>
          <p>
            Prisen for én kWh er lagt sammen af fem dele. Spotprisen er den eneste, der svinger time for
            time; nettarif, Energinets tariffer og elafgift betaler du uanset elselskab, og tillægget er det,
            dit valg af aftale afgør. Tabellen viser delene i {month} for landsdelens repræsentative netområde
            ({prices.deals.DK1.areaLabel} i vest, {prices.deals.DK2.areaLabel} i øst).
          </p>
          <table>
            <thead>
              <tr>
                <th>Del af prisen (inkl. moms)</th>
                <th>Vest (DK1)</th>
                <th>Øst (DK2)</th>
                <th>Andel i vest</th>
                <th>Kan du påvirke den?</th>
              </tr>
            </thead>
            <tbody>
              {dk1.rows.map((r, i) => (
                <tr key={r.label}>
                  <td><strong>{r.label}</strong></td>
                  <td>{formatPrice(r.kr)} kr.</td>
                  <td>{formatPrice(dk2.rows[i].kr)} kr.</td>
                  <td>{Math.round(r.share * 100)} %</td>
                  <td>{r.can}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Marginalpris pr. kWh</strong></td>
                <td><strong>{formatPrice(dk1.m.krPerKwh)} kr.</strong></td>
                <td><strong>{formatPrice(dk2.m.krPerKwh)} kr.</strong></td>
                <td>100 %</td>
                <td></td>
              </tr>
              <tr>
                <td>Abonnement (fast, ikke pr. kWh)</td>
                <td colSpan={2}>Elselskabets og netselskabets faste beløb pr. måned</td>
                <td>—</td>
                <td>Ja — vælg en aftale med lavt abonnement</td>
              </tr>
            </tbody>
          </table>
          <p>
            Tillægget er medianen af de {dk1.m.markupOffers} rene, varige spotaftaler i markedet — hverken den
            billigste partners eller en dyr aftales. Spotprisen er feedets forventede niveau for måneden, ikke
            et facit: se dagens faktiske timepriser, før du tænder noget stort.
          </p>

          <h2>Spotpris eller fastpris?</h2>
          <p>
            De fleste elselskaber tilbyder enten en spotaftale, hvor du betaler Nord Pools timepris plus et fast
            tillæg, eller en fastprisaftale, hvor kWh-prisen låses i en periode. Over et helt år har spotaftaler
            historisk været billigst, fordi fastprisen indeholder en præmie for sikkerheden; til gengæld svinger
            regningen med spotmarkedet. Sammenligningen af aftaler regner begge typer om til hele regningen over
            12 måneder, så de kan måles på samme tal.
          </p>

          <h2>Hvornår er strømmen billigst?</h2>
          <p>
            Med en spotaftale betaler du den faktiske markedspris time for time. Strømmen er som regel billigst om
            natten og midt på dagen og dyrest i aftentimerne, hvor både spotprisen og nettariffen er høj. Ved at
            køre <Link href="/opvaskemaskine/">opvaskemaskine</Link>, <Link href="/vaskemaskine/">vaskemaskine</Link>{" "}
            og <Link href="/toerretumbler/">tørretumbler</Link> uden for kl. 17–21 flytter du det forbrug, der er
            lettest at flytte, til de billige timer. Hver apparatside viser, hvad én gang koster, og{" "}
            <Link href="/beregner/">beregneren</Link> regner dit eget mønster igennem.
          </p>

          <h2>Elafgiften — historisk lav</h2>
          <p>
            Elafgiften er sat ned til EU&apos;s minimum, så den fylder under én procent af kWh-prisen. Det er en af
            grundene til, at <Link href="/varmepumpe/">varmepumper</Link> og{" "}
            <Link href="/hvad-koster-det-at-lade-en-elbil/">elbiler</Link> er blevet markant billigere i drift end
            for få år siden. Satsen står i tabellen ovenfor og kommer fra feedet med dato og kilde.
          </p>

          <h2>Hvad koster strøm på en typisk og på den billigste aftale?</h2>
          <p>
            Når abonnementet regnes med, ser kWh-prisen anderledes ud end marginalprisen. Tabellen viser hele
            regningen over 12 måneder ved {formatKr(REFERENCE_KWH)} kWh om året — den typiske aftale (medianen af
            de rene, varige aftaler) og den billigste rene, varige aftale — regnet om til kr. pr. kWh.
          </p>
          <table>
            <thead>
              <tr>
                <th>Landsdel</th>
                <th>Typisk aftale, kr./år</th>
                <th>Typisk, kr./kWh alt inkl.</th>
                <th>Billigste aftale</th>
                <th>Billigst, kr./år</th>
                <th>Billigst, kr./kWh alt inkl.</th>
              </tr>
            </thead>
            <tbody>
              {(["DK1", "DK2"] as const).map((r) => {
                const d = prices.deals[r];
                return (
                  <tr key={r}>
                    <td><strong>{r === "DK1" ? "Vest" : "Øst"} ({d.areaLabel})</strong></td>
                    <td>{d.typical ? `${formatKr(d.typical.allInKr)} kr.` : "—"}</td>
                    <td>{d.typical ? `${formatPrice(d.typical.allInKrPerKwh)} kr.` : "—"}</td>
                    <td>{d.cheapest ? `${d.cheapest.supplierName} ${d.cheapest.productName}` : "—"}</td>
                    <td>{d.cheapest ? `${formatKr(d.cheapest.allInKr)} kr.` : "—"}</td>
                    <td>{d.cheapest ? `${formatPrice(d.cheapest.allInKrPerKwh)} kr.` : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-sm">
            <em>
              Billigst {prices.deals.DK1.scope}; i øst {prices.deals.DK2.scope.replace(/^af /, "af ")}. Hele regningen
              inkl. abonnement, nettarif, afgifter og moms; velkomstrabatter og introtilbud tæller ikke med i
              &quot;billigst&quot;. Rækkefølgen skifter med forbruget — et hus med varmepumpe får et andet svar end en
              lejlighed.
            </em>
          </p>

          <h2>Sådan sænker du din kWh-pris</h2>
          <p>
            Du kan påvirke to af prisens fem dele: tillægget (vælg aftale) og spotprisen (vælg tidspunkt).
            Nettarif, Energinets tariffer og elafgift følger med uanset.
          </p>
          <ol>
            <li><strong>Vælg en aftale med lavt tillæg og lavt abonnement</strong> for dit forbrug — se tabellen ovenfor</li>
            <li><strong>Flyt forbrug til billige timer</strong> — timer-funktion på hvidevarer og opladning om natten</li>
            <li><strong>Brug mindre</strong> — se vores <Link href="/beregner/">strømberegner</Link> og <Link href="/stromslugere/">strømslugerne</Link></li>
            <li><strong>Tjek din nettarif</strong> — lavlastperioderne varierer mellem netselskaber</li>
          </ol>
        </div>

        <SwitchCta />

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
