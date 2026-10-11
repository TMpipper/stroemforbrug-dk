import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import PageHero from "@/components/marketing/PageHero";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PriceBasis from "@/components/content/PriceBasis";
import { getPrices, tokenPrices, REFERENCE_KWH } from "@/lib/prices";
import { VAT_FACTOR } from "@/lib/feed/marginal";
import { formatKr, formatPrice, danishMonth, withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { motifForPath } from "@/lib/visuals/defaults";
import { PARTNERS } from "@/lib/partners";

const PATH = "/metode/";

export const metadata: Metadata = {
  title: withCurrentYear("Sådan regner vi (2026) → Marginalpris og billigste aftale"),
  description:
    "Metoden bag hvert tal: marginalprisen fra Elpriser.dk's feed, hvorfor abonnementet ikke er med, og hvordan billigste aftale og tidspunkt findes.",
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
};

const faqs = [
  { question: "Hvorfor regner I med en marginalpris og ikke med min elregning pr. kWh?", answer: "Fordi et apparat aldrig koster abonnementet. Abonnementet til elselskab og netselskab betales uanset forbrug; det, en vask eller en opladning koster, er den sidste kWh: spot, nettarif, afgifter og tillæg med moms. Deler man hele regningen med forbruget, får man en højere pris pr. kWh — og overdriver, hvad apparatet koster." },
  { question: "Hvorfor er priserne forskellige i vest og øst?", answer: "Danmark er delt i to prisområder ved Storebælt med hver sin spotpris, og nettariffen afhænger af netselskabet. Vi regner med landsdelens repræsentative netområde; dit eget kan afvige lidt." },
  { question: "Hvad er en »ren, varig« aftale?", answer: "En aftale uden anmærkning om selskabet i Elpriser.dk's register, uden introtilbud, uden kontant velkomstrabat og uden betingelser som fx medlemskab. Kun dem kan være »billigst« — et introtilbud er billigt i seks måneder, ikke i tolv." },
  { question: "Får I penge for at vise en aftale?", answer: "Vi får provision, hvis du tegner en aftale gennem en knap hos et selskab, vi har en aftale med. Knappen står kun ved de selskaber; alle andre aftaler vises uden knap, og »billigst« regnes over hele markedet, ikke kun partnerne." },
  { question: "Hvor tit opdateres tallene?", answer: "Feedet henter spotpriser og tariffer hver dag og markedets aftaler hver nat; sitet genberegner sine sider mindst hvert femte minut og bygges helt forfra hver morgen. Datoen for prisernes grundlag står i grundlagssætningen på hver side." },
  { question: "Hvor kommer forbrugstallene fra?", answer: "Fra energimærker, producenternes datablade og Energistyrelsens vejledninger — typetal, der er skrevet og kontrolleret af redaktøren, med kilde på hver side. De ændrer sig ikke med elprisen." },
];

export default async function MetodePage() {
  const prices = await getPrices();
  const t = tokenPrices(prices);
  const m = prices.marginal;
  const vat = (ore: number) => (ore * VAT_FACTOR) / 100;
  const url = `${SITE_CONFIG.url}${PATH}`;
  const month = danishMonth(t.month);
  const partnerCount = Object.keys(PARTNERS).length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([{ name: "Forside", url: SITE_CONFIG.url }, { name: "Sådan regner vi", url }]),
            faqSchema(faqs),
            articleSchema({ title: "Sådan regner vi", description: "Metoden bag hvert tal på Strømforbrug.dk.", url, datePublished: pageMeta(PATH).published, dateModified: pageMeta(PATH).updated }),
          ]),
        }}
      />
      <PageHero
        crumbs={[{ name: "Sådan regner vi" }]}
        eyebrow="Metode"
        title="Sådan regner vi"
        lede="Hvert kronebeløb på Strømforbrug.dk er regnet ved visningen — aldrig skrevet ind i hånden. Her står reglerne: hvilken pris, over hvilket marked, og hvad tidspunkt-blokken måler."
        lastUpdated={pageMeta(PATH).updated}
        motif={motifForPath(PATH)}
      />

      <div className="container-text py-10 md:py-14">
        <nav aria-label="Indhold" className="rounded-card bg-bg-blue p-5">
          <p className="font-semibold text-ink">På denne side</p>
          <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
            {[["#elpris", "Marginalprisen"], ["#billigste-aftale", "Billigste aftale og typisk aftale"], ["#anmaerkninger", "Anmærkninger"], ["#tidspunkt", "Billigste tidspunkt i dag"], ["#forbrug", "Forbrugstallene"], ["#provision", "Provision og uafhængighed af den"]].map(([h, l]) => (
              <li key={h}><a href={h} className="content-link">{l}</a></li>
            ))}
          </ul>
        </nav>

        <div className="prose-content mt-10">
          <h2 id="elpris">Marginalprisen — det et apparat koster at bruge</h2>
          <p>
            Prisen på hver apparatside er <strong>marginalprisen</strong>: hvad én kWh <em>mere</em> koster. Den består af spotprisens forventede
            niveau for måneden, nettariffen i landsdelens repræsentative netområde, Energinets tariffer, elafgiften og medianen af de rene,
            varige spotaftalers tillæg — alt med moms, uden abonnement. I {month} er den <strong>{formatPrice(t.dk1)} kr./kWh</strong> i
            Vestdanmark og <strong>{formatPrice(t.dk2)} kr./kWh</strong> i Østdanmark; i prosaen bruger vi gennemsnittet{" "}
            <strong>{formatPrice(t.dk)} kr./kWh</strong>, og beregnere og tabeller viser begge landsdele.
          </p>
          <table>
            <thead><tr><th>Led (inkl. moms)</th><th>Vest (DK1)</th><th>Øst (DK2)</th><th>Kilde i feedet</th></tr></thead>
            <tbody>
              <tr><td>Spotpris, forventet niveau for måneden</td><td>{formatPrice(vat(m.dk1.parts.spotOre))} kr.</td><td>{formatPrice(vat(m.dk2.parts.spotOre))} kr.</td><td>Energi Data Service (Nord Pool day-ahead)</td></tr>
              <tr><td>Nettarif, repræsentativt netområde</td><td>{formatPrice(vat(m.dk1.parts.gridOre))} kr.</td><td>{formatPrice(vat(m.dk2.parts.gridOre))} kr.</td><td>DataHub (Energi Data Service)</td></tr>
              <tr><td>Energinets tariffer og elafgift</td><td>{formatPrice(vat(m.dk1.parts.chargesOre))} kr.</td><td>{formatPrice(vat(m.dk2.parts.chargesOre))} kr.</td><td>DataHub, Skattestyrelsen</td></tr>
              <tr><td>Tillæg, median af {m.dk1.markupOffers} rene, varige spotaftaler</td><td>{formatPrice(vat(m.dk1.parts.markupOre))} kr.</td><td>{formatPrice(vat(m.dk2.parts.markupOre))} kr.</td><td>elpris.dk (Forsyningstilsynet)</td></tr>
              <tr><td><strong>Marginalpris pr. kWh</strong></td><td><strong>{formatPrice(m.dk1.krPerKwh)} kr.</strong></td><td><strong>{formatPrice(m.dk2.krPerKwh)} kr.</strong></td><td></td></tr>
            </tbody>
          </table>
          <p>
            Spotleddet er feedets forventede niveau for måneden ({m.dk1.spotBasis.toLowerCase()}), ikke et facit — timepriserne på{" "}
            <Link href="/elpriser/">elpriser time for time</Link> viser, hvad den enkelte time faktisk koster. Abonnementet er ikke med, fordi det
            ikke ændrer sig, når et apparat kører en time mere. Reglen er den samme som på Elpriser.dk, og koden deles (el-feed).
          </p>
          <PriceBasis prices={prices} />

          <h2 id="billigste-aftale">Billigste aftale og typisk aftale</h2>
          <p>
            Når vi skriver »billigste elaftale«, er det regnet over <strong>hele det marked, Forsyningstilsynets elpris.dk kender</strong> — ikke
            kun de {partnerCount} selskaber, vi har en aftale med. Grundlaget er hele regningen over 12 måneder ved {formatKr(REFERENCE_KWH)} kWh
            (eller sidens forbrug) inkl. abonnementer, nettarif, afgifter og moms; velkomstrabatter og introtilbud tæller ikke med, og en aftale
            med anmærkning kan ikke være billigst. Omfanget står altid i samme sætning som påstanden, fx »{prices.deals.DK1.scope}«.
          </p>
          <p>
            »En typisk aftale« er medianen af de rene, varige aftaler — i vest{" "}
            {prices.deals.DK1.typical ? `${formatKr(prices.deals.DK1.typical.allInKr)} kr. om året (${formatPrice(prices.deals.DK1.typical.allInKrPerKwh)} kr./kWh alt inklusive)` : "ikke tilgængelig lige nu"}. Besparelsen ved et skifte
            regnes marginal mod marginal: forskellen på markedets tillæg og den billigste aftales, ganget med apparatets kWh.
          </p>

          <h2 id="anmaerkninger">Anmærkninger</h2>
          <p>
            Elpriser.dk fører et register over selskaber med anmærkning (»OBS« eller »Frarådes«) med kilde og dato for hver begrundelse —
            afgørelser fra Forbrugerombudsmanden, konkurser, dokumenteret overfakturering. Et selskab med anmærkning får ingen knap og kan ikke
            være »billigst« her, uanset pris. Vi kan ikke selv tilføje eller fjerne en anmærkning; indsigelser går til{" "}
            <a href={`mailto:${SITE_CONFIG.company.email}`} className="content-link">{SITE_CONFIG.company.email}</a>.
          </p>

          <h2 id="tidspunkt">Billigste tidspunkt i dag</h2>
          <p>
            Blokken »Hvornår er det billigst at bruge …« regner på dagens 24 timepriser fra feedet: markedets grundlag time for time (spot,
            nettarif, Energinets tariffer og elafgift, inkl. moms) uden tillæg og abonnement. Det billigste vindue er de tre sammenhængende
            timer med lavest gennemsnit; det dyreste ligeledes. Prisen pr. gang er apparatets typiske forbrug pr. gang ganget med vinduets
            gennemsnit. Apparater, der kører døgnet rundt, får døgnets gennemsnit — de kan ikke flyttes. Siden genberegnes mindst hvert femte
            minut, så teksten siger »kl. 02–05« og »i dag«, aldrig »lige nu«; det levende tal står i Elpriser.dk&apos;s kort.
          </p>

          <h2 id="forbrug">Forbrugstallene</h2>
          <p>
            Hvert apparat har et typisk årsforbrug og et spænd, forbrug pr. gang og en sæsonprofil. De er typetal fra energimærker,
            producenternes datablade og Energistyrelsens vejledninger, skrevet og kontrolleret af redaktøren med kilde nederst på hver side.
            Husstandstallene er forankret i Energistyrelsens opgørelser, ikke lagt sammen af apparatlisten. Forbrugstal ændrer sig ikke med
            elprisen — det gør kun kronerne.
          </p>

          <h2 id="provision">Provision — og hvorfor den ikke flytter et tal</h2>
          <p>
            Strømforbrug.dk drives af {SITE_CONFIG.company.legalName} og er et site af Elpriser.dk. Vi får provision, hvis du tegner en
            aftale gennem en knap hos et af de {partnerCount} selskaber, vi samarbejder med. Provisionen kan ikke påvirke et tal: marginalprisen
            bruger hele markedets median, »billigst« regnes over hele markedet, og en aftale uden partner vises på lige fod — blot uden knap.
            Hver side bærer en grundlagssætning med de præcise priser, bygget er lavet på, og de kontrolleres automatisk, før en ny udgave
            kan udgives.
          </p>
        </div>
      </div>

      <FaqBand faqs={faqs} />
      <WhoHowWhy path={PATH} prices={prices} />
      <AuthorBox />
    </>
  );
}
