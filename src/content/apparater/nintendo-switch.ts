import type { ApplianceData } from "@/lib/types";

const nintendoSwitch: ApplianceData = {
  slug: "nintendo-switch",
  meta: {
    category: "underholdning",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "tv",
    synonyms: ["nintendo switch", "switch 2", "nintendo switch 2", "switch oled", "switch lite", "spillekonsol", "switch dvale", "switch standby"],
  },
  name: "Nintendo Switch",
  article: "en",
  title: "Nintendo Switch strømforbrug (2026) → Switch 2, OLED og Lite",
  description: "En Switch 2 bruger 19 watt i spil via tv, den første Switch og OLED-modellen 6-7 watt. Se kWh om året, prisen pr. time og hvad dvale med kablet net koster.",
  heading: "Strømforbrug for en Nintendo Switch: watt og pris",
  quickAnswer:
    "Nintendo måler selv Switch 2 til 19 watt, når der spilles på tv'et, mens den første Switch bruger 7 watt og OLED-modellen 6 watt. En times spil på Switch 2 koster {{oere 0,019}} ved {{pris_kwh}}, og to timer om dagen hele året giver cirka 14 kWh, svarende til {{kr 14}}. Den største skjulte post er dvale med kablet internet: 5 watt hele døgnet på Switch 2.",
  kwhRange: [2, 50],
  typicalKwh: 14,
  wattage: 19,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.0, 0.95, 0.85, 0.8, 0.95, 0.9, 0.95, 1.05, 1.1, 1.2],
  content: `<h2>Hvor mange watt bruger en Nintendo Switch?</h2>
<p>Nintendo er en af de få konsolproducenter, der selv skriver strømforbruget i produktets specifikationer, og tallene er lave. Selv den nye Switch 2 bruger mindre end en femtedel af, hvad en stor konsol bruger i spil. Forbruget afhænger af tre ting: hvilken model du har, om konsollen sidder i docken og spiller på tv'et eller bruges i hånden, og hvad den laver — spil, film eller hovedmenu.</p>
<table>
<thead><tr><th>Model og tilstand</th><th>Watt</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>Switch 2 i docken, spil</td><td>19 W</td><td>{{oere 0,019}}</td></tr>
<tr><td>Switch 2 i docken, hovedmenu</td><td>8 W</td><td>{{oere 0,008}}</td></tr>
<tr><td>Første Switch i docken, spil</td><td>7 W</td><td>{{oere 0,007}}</td></tr>
<tr><td>Switch OLED i docken, spil</td><td>6 W</td><td>{{oere 0,006}}</td></tr>
<tr><td>Switch OLED i docken, film og streaming</td><td>5 W</td><td>{{oere 0,005}}</td></tr>
<tr><td>Switch og OLED i hånden, spil</td><td>4 W</td><td>{{oere 0,004}}</td></tr>
<tr><td>Switch Lite, spil</td><td>4 W</td><td>{{oere 0,004}}</td></tr>
<tr><td>Dvale (alle modeller, uden kablet net)</td><td>0,03-0,5 W</td><td>under en halv øre</td></tr>
</tbody>
</table>
<p>Tallet for Switch 2 er målt af Nintendo med Mario Kart World, og andre spil kan ligge lidt over eller under. For de ældre modeller oplyser Nintendo også et årstal: 6 kWh om året for den første Switch og OLED-modellen, når der spilles to timer om dagen, og 3 kWh for Switch Lite. Det svarer til {{kr 6}} og {{kr 3}} om året.</p>

<h2>Switch 2 mod den første Switch</h2>
<p>Switch 2 har en større skærm, mere regnekraft og kan sende et skarpere billede til tv'et. Det koster strøm: i docken bruger den knap tre gange så meget som den første model. Målt i kroner er forskellen alligevel lille. To timer om dagen i et helt år giver cirka 14 kWh på Switch 2 og 5-6 kWh på de ældre modeller — en forskel på {{kr 9}} om året.</p>
<p>Sammenlignet med de store konsoller er Switch stadig i en klasse for sig. En <a href="/xbox/">Xbox</a> Series X bruger over 150 watt i et krævende spil, og en <a href="/playstation/">PlayStation 5</a> ligger i samme område. Det betyder, at en times spil på Switch 2 bruger omtrent det samme som otte minutter på en stor konsol. Vil du spare på strømmen og ikke har brug for den tunge grafik, er Switch det sparsomme valg.</p>
<table>
<thead><tr><th>Brug</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Switch 2 i docken, 1 time om dagen</td><td>7 kWh</td><td>{{kr 7}}</td></tr>
<tr><td>Switch 2 i docken, 2 timer om dagen</td><td>14 kWh</td><td>{{kr 14}}</td></tr>
<tr><td>Switch 2 i docken, 4 timer om dagen</td><td>28 kWh</td><td>{{kr 28}}</td></tr>
<tr><td>Første Switch eller OLED, 2 timer om dagen (Nintendos tal)</td><td>6 kWh</td><td>{{kr 6}}</td></tr>
<tr><td>Switch Lite, 2 timer om dagen (Nintendos tal)</td><td>3 kWh</td><td>{{kr 3}}</td></tr>
</tbody>
</table>

<h2>Dvale med kablet internet: den skjulte post</h2>
<p>Den post, der overrasker, er ikke selve spillet, men dvaletilstanden. Uden netværk bruger Switch 2 kun 0,5 W i dvale, og den første Switch 0,3 W. Men sidder konsollen i en dock med netværkskabel, og er indstillingen om at holde den kablede forbindelse aktiv i dvale slået til, stiger forbruget til 5 W på Switch 2 og 2,2 W på OLED-modellen. Nintendo skriver selv, at OLED-modellens årsforbrug stiger fra 6 til 21 kWh, når forbindelsen holdes i live.</p>
<p>Regnestykket for Switch 2 er tydeligt: 5 W i 22 timer om dagen bliver til cirka 40 kWh om året, svarende til {{kr 40}}. Det er næsten tre gange så meget som to timers spil hver dag. Med indstillingen slået fra er dvalen nede på et par kWh om året. Funktionen er praktisk, fordi konsollen kan hente opdateringer og spil i baggrunden, men den er sjældent pengene værd, hvis du alligevel bruger wifi i hånden. Læs mere om de små døgnforbrug i guiden om <a href="/standby/">standby</a>.</p>

<h2>I hånden eller på tv'et</h2>
<p>Når du spiller i hånden, kommer strømmen fra batteriet, og det, du betaler for, er opladningen. Den første Switch og OLED-modellen bruger omkring 4 W i hånden, og Switch Lite det samme. Switch 2 har et batteri på godt 5.200 mAh, som ifølge Nintendo holder fra cirka 2 til 6,5 timer afhængigt af spillet og tager omkring 3 timer at lade helt op. Uanset model er en fuld opladning et forbrug på få hundrededele af en kWh — en brøkdel af en øre.</p>
<p>Spil på tv'et kræver til gengæld, at <a href="/tv/">tv'et</a> også er tændt, og det er ofte her, den reelle udgift ligger. Et stort tv bruger typisk flere gange så meget som konsollen, og har du en soundbar eller en <a href="/tv-boks/">tv-boks</a> tilsluttet, kører de måske også med. Spil i hånden er derfor den billigste måde at spille på, selv med en Switch 2.</p>

<h2>Hvad bestemmer, hvor meget strøm din Switch bruger?</h2>
<ul>
<li><strong>Modellen</strong> — Switch 2 bruger mest, Switch Lite mindst.</li>
<li><strong>Docken</strong> — i docken kører konsollen med højere ydelse og sender billede til tv'et, så forbruget stiger.</li>
<li><strong>Dvaleindstillingen</strong> — kablet net i dvale kan koste mere end selve spillet over et år.</li>
<li><strong>Spillet</strong> — grafiktunge spil trækker mere end simple spil og menuer.</li>
<li><strong>Tilbehør</strong> — controllere, der lades i docken, og en tændt skærm eller et tv lægger forbrug til.</li>
</ul>
<p>Spiller børnene også med <a href="/vr-briller/">VR-briller</a>, er det værd at vide, at et selvstændigt headset bruger strøm på samme måde som Switch i hånden: lidt til opladning og intet, mens det ligger slukket.</p>

<h2>Sådan sparer du strøm på din Switch</h2>
<ol>
<li><strong>Slå kablet forbindelse i dvale fra</strong> i konsollens indstillinger, hvis du ikke har brug for baggrundsdownloads. På Switch 2 sparer det omkring 40 kWh om året.</li>
<li><strong>Spil i hånden</strong>, når tv'et ikke er nødvendigt — så sparer du både konsollens ekstra watt og tv'ets forbrug.</li>
<li><strong>Lad konsollen gå i dvale automatisk</strong> efter kort tid uden aktivitet.</li>
<li><strong>Sluk tv og lyd</strong>, når konsollen går i dvale — HDMI-styring kan gøre det automatisk.</li>
<li><strong>Tag laderen ud</strong>, når konsollen er fuldt opladet og ikke står i docken; en tom lader bruger lidt hele tiden.</li>
</ol>
<p>Selv med alle gode vaner er Switch en lille post på elregningen. Den vigtigste indstilling er dvalen; resten handler om de apparater, der står omkring den.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger en Nintendo Switch 2?", answer: "Nintendo måler Switch 2 til 19 W i spil i docken og 8 W i hovedmenuen. En times spil koster {{oere 0,019}} ved {{pris_kwh}}." },
    { question: "Hvor meget strøm bruger den første Switch og OLED-modellen?", answer: "Omkring 6-7 W i docken og 4 W i hånden. Nintendo opgiver selv 6 kWh om året ved to timers spil om dagen, svarende til {{kr 6}}." },
    { question: "Hvad koster det at have Switch i dvale?", answer: "Uden netværk næsten ingenting: 0,3-0,5 W. Med kablet net holdt aktivt i dvale bruger Switch 2 5 W, cirka 40 kWh om året eller {{kr 40}}." },
    { question: "Bruger Switch Lite mindre strøm?", answer: "Ja. Switch Lite bruger omkring 4 W i spil, og Nintendo opgiver 3 kWh om året ved to timer om dagen, svarende til {{kr 3}}." },
    { question: "Er Switch billigere at spille på end PlayStation og Xbox?", answer: "Ja, markant. Switch 2 bruger 19 W i spil mod over 150 W for de store konsoller. Med to timer om dagen er det cirka 14 kWh om året, svarende til {{kr 14}}." },
  ],
  relatedSlugs: ["xbox", "playstation", "tv", "vr-briller", "tv-boks", "gaming-pc"],
  sources: [
    { name: "Nintendo — Nintendo Switch 2 specifikationer (strømforbrug i dock, dvale og batteri)", url: "https://www.nintendo.com/en-gb/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Specifications-2785627.html" },
    { name: "Nintendo — Nintendo Switch (OLED-model) specifikationer og årsforbrug", url: "https://www.nintendo.com/my/hardware/switch/modal/specs/body_oled.html" },
    { name: "Nintendo — Nintendo Switch specifikationer og årsforbrug", url: "https://nintendo.com/sg/hardware/switch/modal/specs/body.html?width=960" },
    { name: "Nintendo — Nintendo Switch Lite specifikationer og årsforbrug", url: "https://www.nintendo.com/ph/hardware/switch/modal/specs/lite.html" },
    { name: "Nintendo Support Europe — Switch ecodesign-oplysninger", url: "https://gr.cdmediase.eu/nintendo-support/switch-ecodesign/?ln=en" },
  ],
  calculatorConfig: {
    title: "Beregn din Switch' strømforbrug",
    options: [
      { label: "Switch 2 i docken (ca. 19 W)", kwhPerUse: 0.019 },
      { label: "Første Switch i docken (ca. 7 W)", kwhPerUse: 0.007 },
      { label: "Switch OLED i docken (ca. 6 W)", kwhPerUse: 0.006 },
      { label: "Switch Lite eller spil i hånden (ca. 4 W)", kwhPerUse: 0.004 },
    ],
    usageLabel: "Timer i brug pr. dag",
    usageUnit: "timer/dag",
    usageMin: 0.5,
    usageMax: 10,
    usageDefault: 2,
    usageStep: 0.5,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-12-10",
  updated: "2026-11-22",
};

export default nintendoSwitch;
