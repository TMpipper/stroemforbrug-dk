import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Standby strømforbrug 2026 → Hvad koster det dig?",
  description:
    "Standby-forbrug koster den gennemsnitlige husstand 400-800 kr./år. Se standby-watt for 20+ apparater og lær hvordan du eliminerer det skjulte strømforbrug.",
  alternates: { canonical: `${SITE_CONFIG.url}/standby/` },
};

const faqs = [
  { question: "Hvad er standby-forbrug?", answer: "Standby-forbrug er den strøm et apparat bruger når det er 'slukket' men stadig tilsluttet stikkontakten. Apparatet er klar til at tænde med fjernbetjening eller knaptryk, men bruger konstant en lille mængde strøm — typisk 0,5-15 W." },
  { question: "Hvor meget koster standby-forbrug om året?", answer: "En gennemsnitlig dansk husstand betaler 400-800 kr./år for standby-forbrug. Det svarer til 160-320 kWh/år — strøm der bruges uden at apparaterne reelt er i brug." },
  { question: "Hvad bruger mest strøm i standby?", answer: "Spillekonsoller (PlayStation, Xbox) er de værste standby-slugere med 5-15 W. Derefter kommer stationære computere (2-10 W), tv-bokse/streaming-enheder (5-12 W) og ældre tv-apparater (1-5 W)." },
  { question: "Koster det noget at lade opladeren sidde i stikkontakten?", answer: "En mobiloplader uden telefon bruger ca. 0,3-0,5 W, hvilket koster under 10 kr./år. En laptop-oplader bruger lidt mere (0,5-1 W). Det er altså minimalt, men alle småforbrug lægges sammen." },
  { question: "Bruger et tv strøm i standby?", answer: "Ja, et moderne tv bruger typisk 0,5-2 W i standby, svarende til 4-17 kWh/år (10-43 kr.). Ældre tv-modeller kan bruge op til 5 W (44 kWh/år). Et OLED-tv med pixel refresh kan bruge op til 10 W periodevis." },
  { question: "Hvordan kan jeg måle standby-forbruget?", answer: "Køb en elmåler (energimåler) til 50-150 kr. i et byggemarked. Sæt den mellem stikkontakten og apparatet, og aflæs watt-forbruget når apparatet er i standby. Multiplicer med 8.760 timer for at få årligt kWh-forbrug." },
  { question: "Hvad er en smart stikdåse?", answer: "En smart stikdåse (smart plug) er en stikdåse du kan styre via app eller timer. Den kan automatisk slukke for strømmen om natten eller når du forlader hjemmet, så du eliminerer standby-forbrug uden at tænke over det." },
  { question: "Bruger en router strøm i standby?", answer: "En router har ikke egentlig standby-tilstand — den kører 24/7 og bruger typisk 6-12 W konstant. Det giver 52-105 kWh/år (130-263 kr.). Mange vælger at lade routeren køre hele tiden, da den skal genstartes for at fungere." },
];

export default function StandbyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Standby strømforbrug", url: `${SITE_CONFIG.url}/standby/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Standby strømforbrug 2026 — Hvad koster det dig?",
              description: "Standby-forbrug koster den gennemsnitlige husstand 400-800 kr./år.",
              url: `${SITE_CONFIG.url}/standby/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Standby strømforbrug" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Standby strømforbrug 2026 — Hvad koster det dig?
        </h1>

        <QuickAnswer>
          <p>
            Standby-forbrug koster den gennemsnitlige danske husstand mellem 400
            og 800 kr. om året. Det svarer til 160-320 kWh i strøm der bruges
            af apparater der tilsyneladende er slukket. Ved at bruge stikdåser
            med afbryder eller smart plugs kan du eliminere stort set hele dette
            skjulte forbrug.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Hvad er standby-forbrug?</h2>
          <p>
            Standby-forbrug — også kaldet phantom power eller vampyrstrøm — er den
            strøm et apparat bruger når det er tilsluttet stikkontakten men ikke
            aktivt i brug. Apparatet holder sig klar til at blive tændt med
            fjernbetjening, modtager opdateringer, eller viser et lille lys. Det
            lyder uskyldigt, men med 15-30 apparater i standby 24/7 løber det op.
          </p>
          <p>
            Ifølge Energistyrelsen udgør standby-forbruget 5-10% af en dansk
            husstands samlede elforbrug. For en familie med et forbrug på 4.000
            kWh/år svarer det til 200-400 kWh — eller 500-1.000 kr. ved 2,50
            kr./kWh.
          </p>

          <h2>Standby-forbrug for 20+ apparater</h2>
          <p>
            Nedenstående tabel viser det typiske standby-forbrug for de mest
            almindelige apparater i en dansk husstand. Watt-forbruget er målt når
            apparatet er slukket men stadig tilsluttet stikkontakten. Den årlige
            pris er beregnet med 2,50 kr./kWh.
          </p>
          <table>
            <thead>
              <tr><th>Apparat</th><th>Standby (W)</th><th>kWh/år</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong><Link href="/playstation/">PlayStation 5</Link></strong></td><td>3-15</td><td>26-131</td><td>65-328 kr.</td></tr>
              <tr><td><strong>Xbox Series X</strong></td><td>5-13</td><td>44-114</td><td>110-285 kr.</td></tr>
              <tr><td><strong>Streaming-boks (Apple TV, Chromecast)</strong></td><td>2-6</td><td>17-52</td><td>43-131 kr.</td></tr>
              <tr><td><strong>Kabel-/IPTV-boks</strong></td><td>5-12</td><td>44-105</td><td>110-263 kr.</td></tr>
              <tr><td><strong><Link href="/computer/">Stationær computer</Link></strong></td><td>2-10</td><td>17-88</td><td>44-219 kr.</td></tr>
              <tr><td><strong><Link href="/laptop/">Laptop (lukket)</Link></strong></td><td>0,5-3</td><td>4-26</td><td>11-66 kr.</td></tr>
              <tr><td><strong>Computerskærm</strong></td><td>0,5-2</td><td>4-17</td><td>11-44 kr.</td></tr>
              <tr><td><strong><Link href="/tv/">TV (LED/QLED)</Link></strong></td><td>0,5-2</td><td>4-17</td><td>10-44 kr.</td></tr>
              <tr><td><strong>TV (OLED)</strong></td><td>1-10</td><td>9-88</td><td>22-219 kr.</td></tr>
              <tr><td><strong>Soundbar</strong></td><td>1-5</td><td>9-44</td><td>22-110 kr.</td></tr>
              <tr><td><strong>Subwoofer</strong></td><td>2-8</td><td>17-70</td><td>44-175 kr.</td></tr>
              <tr><td><strong><Link href="/router/">Router/modem</Link></strong></td><td>6-12</td><td>52-105</td><td>131-263 kr.</td></tr>
              <tr><td><strong>Printer</strong></td><td>1-5</td><td>9-44</td><td>22-110 kr.</td></tr>
              <tr><td><strong><Link href="/kaffemaskine/">Kaffemaskine (kapsel)</Link></strong></td><td>0,5-2</td><td>4-17</td><td>11-44 kr.</td></tr>
              <tr><td><strong><Link href="/mikroovn/">Mikroovn</Link></strong></td><td>1-3</td><td>9-26</td><td>22-66 kr.</td></tr>
              <tr><td><strong><Link href="/ovn/">Ovn (med ur/display)</Link></strong></td><td>1-4</td><td>9-35</td><td>22-88 kr.</td></tr>
              <tr><td><strong>Mobiloplader (uden telefon)</strong></td><td>0,3-0,5</td><td>3-4</td><td>7-11 kr.</td></tr>
              <tr><td><strong>Laptop-oplader (uden laptop)</strong></td><td>0,5-1</td><td>4-9</td><td>11-22 kr.</td></tr>
              <tr><td><strong>Elektrisk tandbørste (holder)</strong></td><td>0,5-1</td><td>4-9</td><td>11-22 kr.</td></tr>
              <tr><td><strong>Smart-højtaler (Echo, Nest)</strong></td><td>2-4</td><td>17-35</td><td>44-88 kr.</td></tr>
              <tr><td><strong>Trådløs oplader (tom)</strong></td><td>0,5-1,5</td><td>4-13</td><td>11-33 kr.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Bemærk: Routeren er inkluderet selvom den teknisk set ikke er i
            standby — den kører konstant. De fleste vælger at lade den køre 24/7.</em>
          </p>

          <h2>De værste standby-slugere</h2>
          <p>
            Spillekonsoller er de absolut værste standby-slugere i de fleste hjem.
            En <Link href="/playstation/">PlayStation 5</Link> i rest mode med
            netværksfunktioner aktiveret kan bruge op til 15 W — det svarer til
            131 kWh/år og en udgift på 328 kr. blot for at stå tændt. Xbox Series X
            er næsten lige så slem med op til 13 W i instant-on tilstand.
          </p>
          <p>
            Kabel- og IPTV-bokse er en anden stor synder. Mange ældre bokse fra
            YouSee/Nuuday bruger 8-12 W i standby fordi de opdaterer programguiden
            og downloader software. Selv moderne streaming-enheder bruger 2-6 W.
          </p>
          <p>
            Hvis du har en subwoofer til dit surround-system, bruger den typisk
            2-8 W i standby — den holder forstærkeren varm og klar. Over et år
            koster det 44-175 kr. for en enhed du måske kun bruger til film i
            weekenden.
          </p>

          <h2>Hvad koster det at lade opladeren sidde i?</h2>
          <p>
            Det er en af de mest stillede spørgsmål om standby-forbrug. Svaret
            er: meget lidt. En mobiloplader uden tilsluttet telefon bruger kun
            0,3-0,5 W, hvilket koster under 10 kr./år. En laptop-oplader uden
            laptop bruger 0,5-1 W (11-22 kr./år).
          </p>
          <p>
            Opladeren er altså ikke den store synder. Men en trådløs oplader
            (Qi-oplader) der står tom bruger lidt mere — 0,5-1,5 W — fordi den
            konstant sender korte pulser for at detektere om en telefon er
            placeret. Det koster stadig under 35 kr./år, men det er 3-4 gange
            mere end en almindelig kabeloplader.
          </p>

          <h2>Stue og underholdning — den dyreste zone</h2>
          <p>
            Stuen er typisk den zone i hjemmet med højest samlet standby-forbrug.
            Et typisk stue-setup med <Link href="/tv/">tv</Link>, soundbar,
            spillekonsol, streaming-boks og subwoofer bruger tilsammen 10-40 W
            i standby. Det svarer til 88-350 kWh/år — en udgift på 219-876 kr.
            bare for at have udstyret klar.
          </p>
          <table>
            <thead>
              <tr><th>Stue-setup</th><th>Samlet standby (W)</th><th>kWh/år</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Minimalt</strong> (TV + streaming-boks)</td><td>3-8</td><td>26-70</td><td>66-175 kr.</td></tr>
              <tr><td><strong>Typisk</strong> (TV + soundbar + konsol + streaming)</td><td>10-25</td><td>88-219</td><td>219-547 kr.</td></tr>
              <tr><td><strong>Fuldt setup</strong> (alt + subwoofer + ekstra konsol)</td><td>20-45</td><td>175-394</td><td>438-985 kr.</td></tr>
            </tbody>
          </table>

          <h2>Kontor og hjemmearbejde</h2>
          <p>
            Hjemmekontoret er en anden standby-zone der ofte overses. En stationær
            <Link href="/computer/"> computer</Link> med skærm, printer og eventuel
            ekstern harddisk bruger tilsammen 5-20 W i standby. For dem der
            arbejder hjemme er det en del af det daglige forbrug — men om natten
            og i weekender er det rent spild.
          </p>
          <p>
            En <Link href="/laptop/">laptop</Link> er markant bedre end en stationær
            computer i standby-forbrug. En lukket laptop bruger typisk kun 0,5-3 W,
            og de fleste laptops går automatisk i dvale efter kort tid. Hvis du kan
            vælge mellem stationær og laptop til hjemmearbejde, er laptopen det
            mere energivenlige valg — både i brug og i standby.
          </p>

          <h2>Sådan eliminerer du standby-forbruget</h2>
          <p>
            Der er flere metoder til at reducere eller eliminere standby-forbrug.
            Den bedste løsning afhænger af hvor mange apparater du har, og hvor
            automatiseret du vil have det. Her er de tre mest effektive metoder.
          </p>

          <h3>1. Stikdåse med afbryder</h3>
          <p>
            Den billigste løsning er en stikdåse med afbryder (30-60 kr.). Tilslut
            alle stue-apparater til én stikdåse og sluk med ét tryk når du går i
            seng. Undtagelse: routeren bør have sin egen stikdåse, da den skal
            køre 24/7 for at modtage opdateringer og opretholde netværket.
          </p>

          <h3>2. Smart plugs med timer</h3>
          <p>
            En smart plug (50-150 kr.) kan programmeres til automatisk at slukke kl.
            23 og tænde kl. 6. Du behøver ikke tænke over det, og du sparer stadig
            7-8 timers standby-forbrug hver nat. Mange smart plugs kan også styres
            via app, så du kan slukke apparater når du forlader hjemmet.
          </p>

          <h3>3. Vælg apparater med lavt standby-forbrug</h3>
          <p>
            Når du køber nye apparater, tjek standby-forbruget i databladet.
            EU-regler kræver at de fleste nye apparater bruger under 0,5 W i
            standby, men der er undtagelser — især spillekonsoller og
            underholdningsudstyr. Vælg apparater med under 1 W standby, og du
            undgår problemet fra starten.
          </p>

          <h2>Beregn dit eget standby-forbrug</h2>
          <p>
            Lav en hurtig optælling af alle apparater i dit hjem der står i
            stikkontakten. Brug tabellen ovenfor til at estimere det samlede
            standby-forbrug, eller brug vores <Link href="/beregner/">strømberegner</Link> til
            en præcis beregning apparat for apparat.
          </p>
          <p>
            Du kan også købe en elmåler (energimåler) til 50-150 kr. i et
            byggemarked. Sæt den mellem stikkontakten og apparatet i 24 timer,
            og aflæs det reelle forbrug. Det er den mest præcise metode, og
            resultatet overrasker ofte — mange opdager at deres reelle
            standby-forbrug er højere end forventet.
          </p>
          <p>
            Læs mere om <Link href="/sparetips/">15 tips til at spare strøm</Link> eller
            se hvilke apparater der er de værste <Link href="/stromslugere/">strømslugere i hjemmet</Link>.
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
