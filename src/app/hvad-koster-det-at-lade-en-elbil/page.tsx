import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import SwitchCta from "@/components/marketing/SwitchCta";
import PriceBasis from "@/components/content/PriceBasis";
import { withCurrentYear, formatKr, formatPrice, formatKrExact, danishDate, danishMonth } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { getPrices, tokenPrices, savingPerKwh, type SitePrices } from "@/lib/prices";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";

const PATH = "/hvad-koster-det-at-lade-en-elbil/";

export const metadata: Metadata = {
  title: withCurrentYear("Hvad koster det at lade en elbil? (2026) → Pris pr. km"),
  description:
    "Hvad koster det at lade en elbil derhjemme? Se prisen for en fuld opladning og pr. kilometer ved månedens marginalpris, og forskellen til offentlig ladning.",
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
};

/**
 * Elbilens strøm regnes med marginalprisen (hvad én kWh MERE koster, uden abonnement) — bilen er
 * et ekstra forbrug oven i husstanden. Benzin, diesel og offentlig ladning følger deres egne markeder
 * og er typede tal med deres egen kilde; de flytter sig ikke med elprisen.
 */
const CARS = [
  { name: "Tesla Model 3 LR", battery: 75, range: 580 },
  { name: "VW ID.4 Pro", battery: 77, range: 520 },
  { name: "Hyundai Kona Electric", battery: 64, range: 460 },
  { name: "Skoda Enyaq iV 80", battery: 77, range: 510 },
  { name: "Peugeot e-208", battery: 50, range: 360 },
];
const KWH_PER_100KM = 17;
const KM_PER_YEAR = 15000;
const KWH_PER_YEAR = (KM_PER_YEAR / 100) * KWH_PER_100KM; // 2.550
/** Ladetab mellem stik og batteri. */
const CHARGE_LOSS = 0.12;
/** Andre markeder — typede tal, ikke elpriser. Kilde: gennemsnit af udbydernes listepriser, efterår 2026. */
const PUBLIC_AC_KR_PER_KWH: [number, number] = [3.5, 5.0];
const DC_KR_PER_KWH: [number, number] = [4.5, 8.0];
const PETROL_L_PER_100KM = 6.5;
const PETROL_KR_PER_L = 13.5;
const DIESEL_L_PER_100KM = 5.5;
const DIESEL_KR_PER_L = 12.5;

function figures(p: SitePrices) {
  const t = tokenPrices(p);
  const cheapest = p.deals.DK1.cheapest;
  const cheapestMarginal = cheapest?.marginalKrPerKwh ?? t.dk1;
  const cheapestName = cheapest?.supplierName ?? "den billigste aftale";
  const saving = savingPerKwh(p, "DK1");
  const perKm = (price: number) => (KWH_PER_100KM / 100) * price * (1 + CHARGE_LOSS);
  const fullCharge = (kwh: number, price: number) => kwh * price * (1 + CHARGE_LOSS);
  return { t, cheapest, cheapestMarginal, cheapestName, saving, perKm, fullCharge,
    perYear: (price: number) => KWH_PER_YEAR * price * (1 + CHARGE_LOSS),
    petrolPerKm: (PETROL_L_PER_100KM / 100) * PETROL_KR_PER_L,
    dieselPerKm: (DIESEL_L_PER_100KM / 100) * DIESEL_KR_PER_L,
  };
}

function faqsFor(p: SitePrices) {
  const f = figures(p);
  const { t } = f;
  return [
    { question: "Hvad koster det at lade en elbil derhjemme?", answer: `Med marginalprisen ${formatPrice(t.dk1)} kr./kWh (Vestdanmark, ${danishMonth(t.month)}) koster en fuld opladning ${formatKr(f.fullCharge(30, t.dk1))}-${formatKr(f.fullCharge(70, t.dk1))} kr. for et batteri på 30-70 kWh, inkl. et ladetab på ca. 12 %. På den billigste rene, varige aftale (${formatPrice(f.cheapestMarginal)} kr./kWh) er det ${formatKr(f.fullCharge(30, f.cheapestMarginal))}-${formatKr(f.fullCharge(70, f.cheapestMarginal))} kr.` },
    { question: "Hvad koster det pr. km at køre elbil?", answer: `En elbil bruger typisk 15-20 kWh pr. 100 km. Ved ${formatPrice(t.dk1)} kr./kWh koster det ${formatKrExact(f.perKm(t.dk1) * 15 / 17)}-${formatKrExact(f.perKm(t.dk1) * 20 / 17)} kr. pr. km inkl. ladetab — mod ca. ${formatKrExact(f.petrolPerKm)} kr. pr. km for en benzinbil (${PETROL_L_PER_100KM.toString().replace(".", ",")} l/100 km ved ${formatKrExact(PETROL_KR_PER_L)} kr./l).` },
    { question: "Er det billigere at lade hjemme eller offentligt?", answer: `Hjemmeladning er billigst: ${formatPrice(f.cheapestMarginal)}-${formatPrice(t.dk2)} kr./kWh afhængigt af aftale og landsdel. Offentlig AC-ladning koster typisk ${formatPrice(PUBLIC_AC_KR_PER_KWH[0])}-${formatPrice(PUBLIC_AC_KR_PER_KWH[1])} kr./kWh og hurtigladning (DC) ${formatPrice(DC_KR_PER_KWH[0])}-${formatPrice(DC_KR_PER_KWH[1])} kr./kWh — to til fem gange hjemmeprisen.` },
    { question: "Hvor lang tid tager det at lade en elbil derhjemme?", answer: "Med en standard hjemmelader (7,4 kW, 1-faset 32 A) tager en fuld opladning 5-10 timer; med en 11 kW 3-faset lader 3-6 timer. En almindelig stikkontakt (2,3 kW) tager 15-30 timer og frarådes til daglig brug." },
    { question: "Hvad koster en hjemmelader til elbil?", answer: "En hjemmelader (wallbox) koster typisk 5.000-15.000 kr. inkl. installation. Det er en engangsudgift, der tjener sig hjem, fordi hjemmeladning er markant billigere end offentlig ladning. Vælg en med smart styring, så den lader i de billige timer." },
    { question: "Hvad koster det i strøm at køre 15.000 km om året?", answer: `Med ${KWH_PER_100KM} kWh pr. 100 km og 15.000 km om året bruger bilen ca. ${formatKr(KWH_PER_YEAR)} kWh. Ved ${formatPrice(t.dk1)} kr./kWh koster det ${formatKr(f.perYear(t.dk1))} kr. om året inkl. ladetab — mod ca. ${formatKr((KM_PER_YEAR / 100) * PETROL_L_PER_100KM * PETROL_KR_PER_L)} kr. i benzin for samme kørsel.` },
    { question: "Stiger min elregning meget med en elbil?", answer: `Ja: en elbil lægger typisk 2.000-3.500 kWh til årsforbruget, altså ${formatKr(2000 * t.dk1)}-${formatKr(3500 * t.dk1)} kr. om året ved ${formatPrice(t.dk1)} kr./kWh. Det er stadig langt billigere end benzin og diesel. Lad om natten på en spotaftale, og vælg en aftale med lavt tillæg.` },
    { question: "Kan man lade en elbil med solceller?", answer: "Ja. Et typisk solcelleanlæg producerer 4.000-8.000 kWh om året — mere end bilens forbrug. Med en smart lader kan bilen lade, når anlægget producerer mest, midt på dagen." },
  ];
}

export default async function ElbilLadningPage() {
  const prices = await getPrices();
  const f = figures(prices);
  const { t } = f;
  const faqs = faqsFor(prices);
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
              { name: "Hvad koster det at lade en elbil", url },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Hvad koster det at lade en elbil?",
              description: "Prisen for en fuld opladning og pr. kilometer ved månedens marginalpris, og forskellen til offentlig ladning.",
              url,
              datePublished: pageMeta(PATH).published,
              dateModified: pageMeta(PATH).updated,
            }),
          ]),
        }}
      />

      <PageHero crumbs={[{ name: "Hvad koster det at lade en elbil" }]} eyebrow="Elbil" title="Hvad koster det at lade en elbil?" lastUpdated={pageMeta("/hvad-koster-det-at-lade-en-elbil/").updated} motif={motifForPath("/hvad-koster-det-at-lade-en-elbil/")} />

      <article className="container-text py-10 md:py-14">

        <QuickAnswer>
          <p>
            En fuld opladning derhjemme koster <strong>{formatKr(f.fullCharge(30, t.dk1))}-{formatKr(f.fullCharge(70, t.dk1))} kr.</strong> for et
            batteri på 30-70 kWh ved marginalprisen {formatPrice(t.dk1)} kr./kWh i Vestdanmark ({month}), inkl. et ladetab på ca. 12 %.
            Pr. kilometer er det {formatKrExact(f.perKm(t.dk1))} kr. — omkring {Math.round(f.petrolPerKm / f.perKm(t.dk1))} gange billigere end benzin.
            På den billigste rene, varige aftale ({f.cheapestName}, {formatPrice(f.cheapestMarginal)} kr./kWh) falder en fuld opladning til{" "}
            {formatKr(f.fullCharge(30, f.cheapestMarginal))}-{formatKr(f.fullCharge(70, f.cheapestMarginal))} kr.
          </p>
        </QuickAnswer>
        <PriceBasis prices={prices} className="mb-8" />

        <div className="prose-content">
          <h2>Opladningspris for 5 populære elbiler</h2>
          <p>
            Prisen for at lade afhænger af batteriets størrelse, ladetabet og kWh-prisen. Tabellen viser en fuld opladning derhjemme
            ved marginalprisen i Vest- og Østdanmark i {month}, og på den billigste rene, varige aftale i vest.
          </p>
          <table>
            <thead>
              <tr><th>Elbil</th><th>Batteri (kWh)</th><th>Rækkevidde (km)</th><th>Fuld ladning, vest</th><th>Fuld ladning, øst</th><th>Billigste aftale</th></tr>
            </thead>
            <tbody>
              {CARS.map((c) => (
                <tr key={c.name}>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.battery}</td>
                  <td>~{c.range}</td>
                  <td>{formatKr(f.fullCharge(c.battery, t.dk1))} kr.</td>
                  <td>{formatKr(f.fullCharge(c.battery, t.dk2))} kr.</td>
                  <td>{formatKr(f.fullCharge(c.battery, f.cheapestMarginal))} kr.</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <em>Rækkevidde er WLTP-tal; i praksis er den 10-20 % lavere, især om vinteren. Ladeprisen inkluderer et ladetab på 12 %.</em>
          </p>

          <h2>Hjemmeladning, offentlig ladning og hurtigladning</h2>
          <p>
            Der er tre måder at lade på, og prisforskellen er stor. Hjemmeladning er billigst; offentlig hurtigladning kan koste tre
            til fem gange mere pr. kWh. Til daglig pendling er en hjemmelader den bedste investering.
          </p>
          <table>
            <thead>
              <tr><th>Ladetype</th><th>Effekt</th><th>Pris pr. kWh</th><th>Fuld ladning (75 kWh)</th><th>Tid</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Hjemme (wallbox)</strong></td><td>7,4-11 kW</td><td>{formatPrice(f.cheapestMarginal)}-{formatPrice(t.dk2)} kr.</td><td>{formatKr(f.fullCharge(75, f.cheapestMarginal))}-{formatKr(f.fullCharge(75, t.dk2))} kr.</td><td>5-10 timer</td></tr>
              <tr><td><strong>Hjemme (stikkontakt)</strong></td><td>2,3 kW</td><td>{formatPrice(f.cheapestMarginal)}-{formatPrice(t.dk2)} kr.</td><td>{formatKr(f.fullCharge(75, f.cheapestMarginal))}-{formatKr(f.fullCharge(75, t.dk2))} kr.</td><td>20-32 timer</td></tr>
              <tr><td><strong>Offentlig AC</strong></td><td>11-22 kW</td><td>{formatPrice(PUBLIC_AC_KR_PER_KWH[0])}-{formatPrice(PUBLIC_AC_KR_PER_KWH[1])} kr.</td><td>{formatKr(75 * PUBLIC_AC_KR_PER_KWH[0])}-{formatKr(75 * PUBLIC_AC_KR_PER_KWH[1])} kr.</td><td>3-7 timer</td></tr>
              <tr><td><strong>Hurtigladning (DC)</strong></td><td>50-150 kW</td><td>{formatPrice(DC_KR_PER_KWH[0])}-{formatPrice(DC_KR_PER_KWH[1])} kr.</td><td>{formatKr(75 * DC_KR_PER_KWH[0])}-{formatKr(75 * DC_KR_PER_KWH[1])} kr.</td><td>25-60 min.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Offentlig ladning følger udbydernes egne priser og flytter sig ikke med elprisen. Hjemmeladning via almindelig stikkontakt
            frarådes til daglig brug på grund af risiko for overophedning.</em>
          </p>

          <h2>Pris pr. kilometer — elbil mod benzin og diesel</h2>
          <p>
            Besparelsen ses tydeligst pr. kilometer. En elbil koster {formatKrExact(f.perKm(t.dk1))} kr. pr. km med hjemmeladning i vest,
            en benzinbil ca. {formatKrExact(f.petrolPerKm)} kr. og en dieselbil ca. {formatKrExact(f.dieselPerKm)} kr. Brændstofpriserne er
            typiske listepriser og følger deres eget marked.
          </p>
          <table>
            <thead>
              <tr><th>Drivmiddel</th><th>Forbrug</th><th>Pris pr. enhed</th><th>Pris pr. km</th><th>{formatKr(KM_PER_YEAR)} km om året</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Elbil (hjemme, vest)</strong></td><td>{KWH_PER_100KM} kWh/100 km</td><td>{formatPrice(t.dk1)} kr./kWh</td><td>{formatKrExact(f.perKm(t.dk1))} kr.</td><td>{formatKr(f.perYear(t.dk1))} kr.</td></tr>
              <tr><td><strong>Elbil (billigste aftale)</strong></td><td>{KWH_PER_100KM} kWh/100 km</td><td>{formatPrice(f.cheapestMarginal)} kr./kWh</td><td>{formatKrExact(f.perKm(f.cheapestMarginal))} kr.</td><td>{formatKr(f.perYear(f.cheapestMarginal))} kr.</td></tr>
              <tr><td><strong>Elbil (hurtiglader)</strong></td><td>{KWH_PER_100KM} kWh/100 km</td><td>{formatPrice((DC_KR_PER_KWH[0] + DC_KR_PER_KWH[1]) / 2)} kr./kWh</td><td>{formatKrExact(f.perKm((DC_KR_PER_KWH[0] + DC_KR_PER_KWH[1]) / 2))} kr.</td><td>{formatKr(f.perYear((DC_KR_PER_KWH[0] + DC_KR_PER_KWH[1]) / 2))} kr.</td></tr>
              <tr><td><strong>Benzinbil</strong></td><td>{PETROL_L_PER_100KM.toString().replace(".", ",")} l/100 km</td><td>{formatKrExact(PETROL_KR_PER_L)} kr./l</td><td>{formatKrExact(f.petrolPerKm)} kr.</td><td>{formatKr(f.petrolPerKm * KM_PER_YEAR)} kr.</td></tr>
              <tr><td><strong>Dieselbil</strong></td><td>{DIESEL_L_PER_100KM.toString().replace(".", ",")} l/100 km</td><td>{formatKrExact(DIESEL_KR_PER_L)} kr./l</td><td>{formatKrExact(f.dieselPerKm)} kr.</td><td>{formatKr(f.dieselPerKm * KM_PER_YEAR)} kr.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Lader du udelukkende på hurtigladere, forsvinder det meste af besparelsen. Nøglen er hjemmeladning i de billige timer.</em>
          </p>

          <h2>Månedlig ladeudgift ved {formatKr(KM_PER_YEAR)} km om året</h2>
          <p>
            De fleste kører 10.000-20.000 km om året. Tabellen viser strømmen til {formatKr(KM_PER_YEAR)} km med hjemmeladning ved
            de priser, der gælder i {month} — og ved den billigste aftale.
          </p>
          <table>
            <thead>
              <tr><th>Elpris</th><th>kWh om året</th><th>Pris pr. måned</th><th>Pris om året</th></tr>
            </thead>
            <tbody>
              {[
                { label: `Billigste rene aftale, vest (${formatPrice(f.cheapestMarginal)} kr./kWh)`, price: f.cheapestMarginal },
                { label: `Marginalpris, vest (${formatPrice(t.dk1)} kr./kWh)`, price: t.dk1 },
                { label: `Marginalpris, øst (${formatPrice(t.dk2)} kr./kWh)`, price: t.dk2 },
              ].map((r) => (
                <tr key={r.label}>
                  <td><strong>{r.label}</strong></td>
                  <td>{formatKr(KWH_PER_YEAR)}</td>
                  <td>{formatKr(f.perYear(r.price) / 12)} kr.</td>
                  <td>{formatKr(f.perYear(r.price))} kr.</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Til sammenligning bruger en benzinbil ca. {formatKr((KM_PER_YEAR / 100) * PETROL_L_PER_100KM)} liter om året ved{" "}
            {formatKr(KM_PER_YEAR)} km, svarende til ca. {formatKr(f.petrolPerKm * KM_PER_YEAR)} kr. Besparelsen ved elbil er{" "}
            {formatKr(f.petrolPerKm * KM_PER_YEAR - f.perYear(t.dk2))}-{formatKr(f.petrolPerKm * KM_PER_YEAR - f.perYear(f.cheapestMarginal))} kr. om året
            afhængigt af din elpris.
          </p>

          <h2>Spar mest muligt på elbil-ladning</h2>
          <h3>1. Vælg en aftale med lavt tillæg</h3>
          <p>
            Forskellen mellem markedets marginalpris ({formatPrice(t.dk1)} kr./kWh) og den billigste rene, varige aftale
            ({formatPrice(f.cheapestMarginal)} kr./kWh) er {Math.round(f.saving * 100)} øre pr. kWh — det er{" "}
            {formatKr(KWH_PER_YEAR * f.saving)} kr. om året på elbilens strøm alene. Læs mere om{" "}
            <Link href="/hvad-koster-en-kwh/">hvad en kWh koster</Link>.
          </p>
          <h3>2. Lad om natten på en spotaftale</h3>
          <p>
            Med en spotaftale følger kWh-prisen timen. Om natten er spotprisen typisk markant lavere end i aftentimerne, og de fleste
            hjemmeladere og biler har en timer, så ladningen starter ved 1-2-tiden og er færdig inden morgen.
          </p>
          <h3>3. Investér i en smart hjemmelader</h3>
          <p>
            En wallbox med app-styring koster typisk 5.000-15.000 kr. inkl. installation og lader automatisk, når strømmen er billigst.
          </p>
          <h3>4. Overvej solceller</h3>
          <p>
            Et anlæg på 6-10 kWp producerer 4.000-8.000 kWh om året — mere end bilens ca. {formatKr(KWH_PER_YEAR)} kWh. Med smart styring
            lader bilen midt på dagen, hvor anlægget producerer mest.
          </p>

          <h2>Elbilens effekt på din samlede elregning</h2>
          <p>
            For en husstand, der i forvejen bruger 4.000 kWh om året, lægger en elbil 2.000-3.500 kWh til — en stigning på 50-88 %.
            Tabellen regner strømmen ved marginalprisen i vest og ved den billigste aftale.
          </p>
          <table>
            <thead>
              <tr><th>Scenario</th><th>Forbrug om året</th><th>Ved {formatPrice(t.dk1)} kr./kWh</th><th>Ved {formatPrice(f.cheapestMarginal)} kr./kWh</th></tr>
            </thead>
            <tbody>
              {[
                { label: "Husstand uden elbil", kwh: 4000 },
                { label: "Husstand + elbil (10.000 km)", kwh: 4000 + 1700 },
                { label: "Husstand + elbil (15.000 km)", kwh: 4000 + 2550 },
                { label: "Husstand + elbil (20.000 km)", kwh: 4000 + 3400 },
              ].map((r) => (
                <tr key={r.label}>
                  <td><strong>{r.label}</strong></td>
                  <td>{formatKr(r.kwh)} kWh</td>
                  <td>{formatKr(r.kwh * t.dk1)} kr.</td>
                  <td>{formatKr(r.kwh * f.cheapestMarginal)} kr.</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Hvad med varmepumpe og elbil?</h2>
          <p>
            Husstande med <Link href="/varmepumpe/">varmepumpe</Link> og elbil bruger ofte 8.000-14.000 kWh om året. Her betyder aftalen
            mest: forskellen på {Math.round(f.saving * 100)} øre pr. kWh bliver {formatKr(14000 * f.saving)} kr. om året ved 14.000 kWh.
            Se <Link href="/elbil/">elbilens strømforbrug</Link>, <Link href="/varmepumpe/">varmepumpens strømforbrug</Link> og brug{" "}
            <Link href="/beregner/">strømberegneren</Link> til din samlede udgift.
          </p>
        </div>

        <SwitchCta kwh={7000} household="en husstand med elbil" />
      </article>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/hvad-koster-det-at-lade-en-elbil/" prices={prices} />
      <AuthorBox />
    </>
  );
}
