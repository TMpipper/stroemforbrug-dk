import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";

import QuickAnswer from "@/components/content/QuickAnswer";
import SwitchCta from "@/components/marketing/SwitchCta";
import { withCurrentYear, formatKr, formatPrice } from "@/lib/format";
import { pageMeta } from "@/lib/pages";

import { getPrices, tokenPrices } from "@/lib/prices";
import PriceBasis from "@/components/content/PriceBasis";
import type { TokenPrices } from "@/lib/tokens";
import PageHero from "@/components/marketing/PageHero";
import { motifForPath } from "@/lib/visuals/defaults";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";

export const metadata: Metadata = {
  title: withCurrentYear("Strømslugere i hjemmet (2026) → Top 10 over de værste"),
  description:
    "Se de 10 største strømslugere i en dansk husstand. Tørretumbleren, den gamle kummefryser og elradiatoren topper listen. Se kWh/år og pris for hvert apparat.",
  alternates: { canonical: `${SITE_CONFIG.url}/stromslugere/` },
};

const faqsFor = (t: TokenPrices) => [
  { question: "Hvad bruger mest strøm i hjemmet?", answer: "Uden varmepumpe er tørretumbleren, køleskab/fryser og ovnen de tre største strømslugere. Med varmepumpe er den suverænt størst med 3.000-7.000 kWh/år. En gammel elradiator kan også bruge enorme mængder strøm." },
  { question: "Hvor meget strøm bruger en tørretumbler om året?", answer: `En tørretumbler bruger typisk 300-500 kWh/år (${formatKr(300 * t.dk)}-${formatKr(500 * t.dk)} kr.) ved 4-5 tørringer om ugen. En kondenstørretumbler bruger mest, mens en varmepumpetørretumbler bruger ca. 40% mindre.` },
  { question: "Er køleskabet en stor strømsluger?", answer: "Ja, køleskabet er en af de største fordi det kører 24/7/365. Et moderne A-mærket køleskab bruger 100-150 kWh/år, men en gammel model (10+ år) kan bruge 300-500 kWh/år. Det betaler sig at udskifte." },
  { question: "Bruger en opvaskemaskine meget strøm?", answer: `En opvaskemaskine bruger ca. 200-300 kWh/år ved daglig brug (${formatKr(200 * t.dk)}-${formatKr(300 * t.dk)} kr.). På eco-program bruger den 30-40% mindre. Det er primært opvarmningen af vand der bruger strøm.` },
  { question: "Hvad bruger en computer i strøm om året?", answer: `En stationær computer bruger 150-400 kWh/år (${formatKr(150 * t.dk)}-${formatKr(400 * t.dk)} kr.) afhængigt af brug og hardware. En gaming-PC bruger mest. En laptop bruger kun 30-70 kWh/år — markant mindre end en stationær.` },
  { question: "Hvor meget strøm bruger et tv?", answer: `Et moderne LED/QLED-tv bruger 80-200 kWh/år (${formatKr(80 * t.dk)}-${formatKr(200 * t.dk)} kr.) afhængigt af størrelse og brugstid. Et 55\" tv der er tændt 5 timer/dag bruger ca. 120-150 kWh. OLED bruger lidt mindre under aktiv brug.` },
  { question: "Er airfryeren en strømsluger?", answer: `Nej, en airfryer bruger kun 50-100 kWh/år (${formatKr(50 * t.dk)}-${formatKr(100 * t.dk)} kr.) ved daglig brug. Den er faktisk mere energieffektiv end en traditionel ovn, fordi den opvarmer et mindre rum hurtigere.` },
  { question: "Hvordan finder jeg mine strømslugere?", answer: "Brug en elmåler (50-150 kr. i byggemarkedet) til at måle hvert apparat. Alternativt kan du bruge vores strømberegner til at estimere forbruget baseret på watt og brugstid." },
];

export default async function StromslugerePage() {
  const prices = await getPrices();
  const t = tokenPrices(prices);
  const faqs = faqsFor(t);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Strømslugere", url: `${SITE_CONFIG.url}/stromslugere/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: withCurrentYear("Strømslugere i hjemmet (2026) — Top 10 værste"),
              description: "Se de 10 største strømslugere i en dansk husstand med kWh/år og pris.",
              url: `${SITE_CONFIG.url}/stromslugere/`,
              datePublished: "2026-07-29",
              dateModified: pageMeta("/stromslugere/").updated,
            }),
          ]),
        }}
      />

      <PageHero crumbs={[{ name: "Strømslugere" }]} eyebrow="Guide" title="Strømslugere i hjemmet 2026 — Top 10 værste" lastUpdated={pageMeta("/stromslugere/").updated} motif={motifForPath("/stromslugere/")} />

      <article className="container-text py-10 md:py-14">

        <QuickAnswer>
          <p>
            De 10 største strømslugere i en dansk husstand uden varmepumpe er:
            tørretumbler (300-500 kWh/år), køleskab/fryser (200-500 kWh),
            elradiator (500-2.000 kWh), vaskemaskine (150-250 kWh), opvaskemaskine
            (200-300 kWh), ovn (150-300 kWh), stationær computer (150-400 kWh),
            tv (80-200 kWh), tørretumbler og belysning. Samlet udgør disse
            apparater 70-80% af dit elforbrug.
          </p>
        </QuickAnswer>

        <div className="prose-content">
          <h2>Top 10 strømslugere — rangeret efter kWh/år</h2>
          <p>
            Vi har rangeret de 10 apparater der bruger mest strøm i en typisk dansk
            husstand. Forbruget er baseret på gennemsnitlig brug, og prisen er
            beregnet med {formatPrice(t.dk)} kr./kWh. Varmepumpen er udeladt da den erstatter
            anden opvarmning — se separat side om <Link href="/varmepumpe/">varmepumpers strømforbrug</Link>.
          </p>
          <table>
            <thead>
              <tr><th>#</th><th>Apparat</th><th>kWh/år</th><th>Pris/år</th><th>Kører</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><strong><Link href="/elradiator/">Elradiator</Link></strong></td><td>500-2.000</td><td>{formatKr(500 * t.dk)}-{formatKr(2000 * t.dk)} kr.</td><td>Sæson (vinter)</td></tr>
              <tr><td>2</td><td><strong><Link href="/toerretumbler/">Tørretumbler</Link></strong></td><td>300-500</td><td>{formatKr(300 * t.dk)}-{formatKr(500 * t.dk)} kr.</td><td>4-5x/uge</td></tr>
              <tr><td>3</td><td><strong><Link href="/koeleskab/">Køleskab/svale-frys</Link></strong></td><td>200-500</td><td>{formatKr(200 * t.dk)}-{formatKr(500 * t.dk)} kr.</td><td>24/7</td></tr>
              <tr><td>4</td><td><strong><Link href="/kummefryser/">Kummefryser</Link></strong></td><td>150-600</td><td>{formatKr(150 * t.dk)}-{formatKr(600 * t.dk)} kr.</td><td>24/7</td></tr>
              <tr><td>5</td><td><strong><Link href="/ovn/">Ovn</Link></strong></td><td>150-300</td><td>{formatKr(150 * t.dk)}-{formatKr(300 * t.dk)} kr.</td><td>4-5x/uge</td></tr>
              <tr><td>6</td><td><strong><Link href="/opvaskemaskine/">Opvaskemaskine</Link></strong></td><td>200-300</td><td>{formatKr(200 * t.dk)}-{formatKr(300 * t.dk)} kr.</td><td>Dagligt</td></tr>
              <tr><td>7</td><td><strong><Link href="/vaskemaskine/">Vaskemaskine</Link></strong></td><td>150-250</td><td>{formatKr(7800 * t.dk / 52)}-{formatKr(13000 * t.dk / 52)} kr.</td><td>4-5x/uge</td></tr>
              <tr><td>8</td><td><strong><Link href="/computer/">Stationær computer</Link></strong></td><td>150-400</td><td>{formatKr(150 * t.dk)}-{formatKr(400 * t.dk)} kr.</td><td>6-10 t/dag</td></tr>
              <tr><td>9</td><td><strong><Link href="/tv/">TV (55-65&quot;)</Link></strong></td><td>80-200</td><td>{formatKr(80 * t.dk)}-{formatKr(200 * t.dk)} kr.</td><td>4-6 t/dag</td></tr>
              <tr><td>10</td><td><strong>Belysning (samlet)</strong></td><td>200-500</td><td>{formatKr(200 * t.dk)}-{formatKr(500 * t.dk)} kr.</td><td>6-10 t/dag</td></tr>
            </tbody>
          </table>
          <p>
            <em>Gamle apparater (10+ år) ligger i den høje ende. Nye A-mærkede
            modeller ligger typisk 40-60% lavere. Belysning afhænger af om du
            bruger LED eller ældre pæretyper.</em>
          </p>

          <h2>#1: Elradiatoren — den dyreste strømsluger</h2>
          <p>
            En <Link href="/elradiator/">elradiator</Link> er den absolut dyreste
            strømsluger i danske hjem. En enkelt 1.500 W elradiator der kører
            8 timer om dagen i vinterhalvåret (oktober-marts) bruger ca. 2.160
            kWh — det svarer til {formatKr(2900 * t.dk)} kr. Med to elradiatorer fordobles regningen
            naturligvis.
          </p>
          <p>
            Elradiatorer er den mindst effektive opvarmningsform med en
            virkningsgrad på 1:1 — for hver kWh strøm får du 1 kWh varme. Til
            sammenligning leverer en <Link href="/varmepumpe/">varmepumpe</Link> 3-5
            kWh varme pr. kWh strøm. Hvis du opvarmer med elradiatorer, er en
            varmepumpe den enkeltstående investering der kan spare dig mest.
          </p>

          <h2>#2: Tørretumbleren — den skjulte strømsluger</h2>
          <p>
            <Link href="/toerretumbler/">Tørretumbleren</Link> er det husholdningsapparat
            (ud over opvarmning) der bruger mest strøm pr. brug. En enkelt
            tørretumbling bruger 2-4 kWh ({formatKr(2.2 * t.dk)}-{formatKr(3.8 * t.dk)} kr.), og med 4-5 tørringer om
            ugen løber det op i 400-1.000 kWh/år ({formatKr(400 * t.dk)}-{formatKr(1000 * t.dk)} kr.).
          </p>
          <table>
            <thead>
              <tr><th>Tørretumbler-type</th><th>kWh/tørring</th><th>kWh/år (5x/uge)</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Kondenstørretumbler</strong></td><td>3,5-4,5</td><td>910-1.170</td><td>1.693-2.176 kr.</td></tr>
              <tr><td><strong>Varmepumpetørretumbler</strong></td><td>1,5-2,5</td><td>390-650</td><td>{formatKr(390 * t.dk)}-{formatKr(650 * t.dk)} kr.</td></tr>
              <tr><td><strong>Aftræktørretumbler</strong></td><td>3,0-4,0</td><td>780-1.040</td><td>1.950-1.934 kr.</td></tr>
            </tbody>
          </table>
          <p>
            Det bedste alternativ er at bruge tørrestativ — det er gratis og bruger
            0 kWh. Hvis du ikke kan undvære tørretumbleren, så vælg en
            varmepumpetørretumbler der bruger ca. 40-50% mindre strøm end en
            kondensmodel.
          </p>

          <h2>#3: Køleskab og fryser — kører 24/7</h2>
          <p>
            <Link href="/koeleskab/">Køleskabet</Link> er unikt fordi det kører 24
            timer i døgnet, 365 dage om året. Det gør det til en af de største
            strømslugere selvom det effektforbrug (W) er relativt lavt. Et gammelt
            køleskab fra 2010 bruger typisk 350-500 kWh/år, mens en ny A-mærket
            model bruger kun 100-150 kWh/år.
          </p>
          <p>
            Forskellen mellem gammel og ny model er enorm — op til 75% lavere
            strømforbrug. En udskiftning kan spare dig 500-800 kr./år, og den
            nye model er typisk betalt hjem inden for 3-5 år.
          </p>
          <table>
            <thead>
              <tr><th>Apparat</th><th>Gammel model (10+ år)</th><th>Ny A-model</th><th>Årlig besparelse</th></tr>
            </thead>
            <tbody>
              <tr><td><strong><Link href="/koeleskab/">Køleskab</Link></strong></td><td>300-500 kWh</td><td>100-150 kWh</td><td>{formatKr(150 * t.dk)}-{formatKr(400 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/kummefryser/">Kummefryser</Link></strong></td><td>400-600 kWh</td><td>150-200 kWh</td><td>{formatKr(200 * t.dk)}-{formatKr(400 * t.dk)} kr.</td></tr>
              <tr><td><strong><Link href="/fryser/">Fryser (skabs)</Link></strong></td><td>350-500 kWh</td><td>150-200 kWh</td><td>{formatKr(150 * t.dk)}-{formatKr(350 * t.dk)} kr.</td></tr>
              <tr><td><strong>Køle/frys-kombi</strong></td><td>400-600 kWh</td><td>150-250 kWh</td><td>{formatKr(150 * t.dk)}-{formatKr(450 * t.dk)} kr.</td></tr>
            </tbody>
          </table>

          <h2>#4: Kummefryser — ofte den mest oversete</h2>
          <p>
            En <Link href="/kummefryser/">kummefryser</Link> i kælderen eller garagen
            er ofte den mest oversete strømsluger. Mange familier har en gammel
            model der har stået og brummet i 15-20 år uden at nogen har tænkt over
            strømforbruget. En gammel kummefryser kan sagtens bruge 500-600 kWh/år
            ({formatKr(500 * t.dk)}-{formatKr(600 * t.dk)} kr.).
          </p>
          <p>
            Tjek om din kummefryser virkelig er nødvendig. Mange familier har den
            kun halvfyldt, og indholdet kunne sagtens være i køleskabets
            frysesektion. Hvis du har brug for en kummefryser, så udskift til en
            ny A-mærket model der bruger under 200 kWh/år.
          </p>

          <h2>#5-7: Ovn, opvaskemaskine og vaskemaskine</h2>
          <p>
            De tre store hvidevarer i køkkenet og bryggerSet bruger hver 150-300
            kWh/år. <Link href="/ovn/">Ovnen</Link> bruger mest strøm pr. brug
            (1,5-2,0 kWh pr. gang), men bruges sjældnere end opvaskemaskinen.
            <Link href="/opvaskemaskine/"> Opvaskemaskinen</Link> kører dagligt i de
            fleste familier og bruger 1,0-1,5 kWh pr. vask.
            <Link href="/vaskemaskine/"> Vaskemaskinen</Link> bruger 0,5-1,5 kWh
            afhængigt af temperatur — eco-program ved 30°C bruger ca. 60% mindre
            end 60°C-vask.
          </p>
          <p>
            Besparelsespotentiale: Brug eco-programmer (sparer 30-40%), vask ved
            lavere temperatur, fyld maskinen helt, og overvej
            en <Link href="/airfryer/">airfryer</Link> til mindre portioner i stedet
            for ovnen.
          </p>

          <h2>#8: Stationær computer — den glemte strømsluger</h2>
          <p>
            En stationær <Link href="/computer/">computer</Link> bruger 80-300 W
            under brug og 2-10 W i standby. For en der arbejder hjemme 8 timer/dag
            giver det 200-400 kWh/år ({formatKr(200 * t.dk)}-{formatKr(400 * t.dk)} kr.) — plus standby-forbrug om
            natten. En gaming-PC med kraftigt grafikkort kan bruge op til 500 W
            under spil, hvilket giver et endnu højere årsforbrug.
          </p>
          <p>
            Til sammenligning bruger en <Link href="/laptop/">laptop</Link> kun
            20-60 W under brug og 0,5-3 W i dvale. Årligt forbrug: 30-70 kWh/år
            ({formatKr(30 * t.dk)}-{formatKr(70 * t.dk)} kr.). Skifter du fra stationær til laptop, sparer du 300-900
            kr./år i strøm alene.
          </p>

          <h2>#9: TV — større skærm = mere strøm</h2>
          <p>
            Et <Link href="/tv/">tv</Link> bruger 60-200 W afhængigt af størrelse og
            teknologi. Et 55&quot; LED-tv bruger ca. 80-120 W, mens et 75&quot; QLED
            bruger 150-200 W. Med 5 timers daglig brug giver det 150-365 kWh/år
            ({formatKr(150 * t.dk)}-{formatKr(365 * t.dk)} kr.).
          </p>
          <p>
            Husk også <Link href="/standby/">standby-forbruget</Link> — et tv i
            standby bruger 0,5-2 W, og et OLED-tv kan bruge op til 10 W under
            pixel-refresh. Over et år koster standby alene 10-88 kr. ekstra.
          </p>

          <h2>#10: Belysning — LED vs. glødepærer</h2>
          <p>
            Samlet belysning kan udgøre 200-500 kWh/år afhængigt af pæretype. Med
            <Link href="/led-paere/"> LED-pærer</Link> overalt (6-10 W pr. pære)
            kommer du ned på 200-300 kWh/år. Med glødepærer (40-60 W) kan det
            nemt nå 800-1.200 kWh/år — det er en forskel på 1.250-2.250 kr.
          </p>
          <table>
            <thead>
              <tr><th>Pæretype</th><th>Watt (pr. pære)</th><th>20 pærer × 4 t/dag</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Glødepære</strong></td><td>40-60 W</td><td>1.168-1.752 kWh</td><td>{formatKr(1168 * t.dk)}-{formatKr(1752 * t.dk)} kr.</td></tr>
              <tr><td><strong>Halogenpære</strong></td><td>28-42 W</td><td>818-1.226 kWh</td><td>{formatKr(818 * t.dk)}-{formatKr(1226 * t.dk)} kr.</td></tr>
              <tr><td><strong>LED-pære</strong></td><td>6-10 W</td><td>175-292 kWh</td><td>{formatKr(175 * t.dk)}-{formatKr(292 * t.dk)} kr.</td></tr>
            </tbody>
          </table>

          <h2>Gammel vs. ny — hvor stor er forskellen?</h2>
          <p>
            Energieffektiviteten er forbedret dramatisk over de seneste 10-15 år.
            Et nyt A-mærket apparat bruger typisk 40-60% mindre strøm end et
            tilsvarende apparat fra 2010. Nedenstående tabel viser den typiske
            forskel i årligt strømforbrug og -pris.
          </p>
          <table>
            <thead>
              <tr><th>Apparat</th><th>Gammel (kWh/år)</th><th>Ny A-model (kWh/år)</th><th>Du sparer/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Køleskab</strong></td><td>350-500</td><td>100-150</td><td>500-651 kr.</td></tr>
              <tr><td><strong>Kummefryser</strong></td><td>400-600</td><td>150-200</td><td>{formatKr(200 * t.dk)}-{formatKr(400 * t.dk)} kr.</td></tr>
              <tr><td><strong>Tørretumbler</strong></td><td>500-700</td><td>200-300</td><td>372-1.000 kr.</td></tr>
              <tr><td><strong>Opvaskemaskine</strong></td><td>300-400</td><td>180-250</td><td>125-375 kr.</td></tr>
              <tr><td><strong>Vaskemaskine</strong></td><td>200-300</td><td>100-170</td><td>75-325 kr.</td></tr>
            </tbody>
          </table>

          <h2>Hvad kan du gøre nu?</h2>
          <p>
            Start med at identificere dine egne strømslugere. Brug vores
            <Link href="/beregner/"> strømberegner</Link> til at beregne det præcise
            forbrug for hvert apparat i dit hjem. Se også vores <Link href="/sparetips/">15 sparetips</Link> for
            konkrete tiltag der sænker din elregning, og læs om det
            <Link href="/gennemsnitligt/"> gennemsnitlige strømforbrug</Link> for at
            vurdere om dit forbrug er normalt.
          </p>
        </div>

        <PriceBasis prices={prices} className="my-4" />

        <SwitchCta />
      </article>
      <FaqBand faqs={faqs} />
      <WhoHowWhy path="/stromslugere/" prices={prices} />
      <AuthorBox />
    </>
  );
}
