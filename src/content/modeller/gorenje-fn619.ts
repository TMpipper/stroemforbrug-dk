import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const gorenjeFn619: ModelData = {
  slug: "gorenje-fn619",
  parent: "fryser",
  brand: "Gorenje",
  name: "Gorenje FN619 fryseskab",
  released: "2022-11",
  synonyms: [
    "gorenje fn619",
    "gorenje fn619eew5",
    "gorenje fn619daw6",
    "gorenje fryseskab strømforbrug",
    "gorenje nofrost fryser 185 cm",
    "gorenje fryser 280 liter",
  ],
  title: "Gorenje FN619 fryseskab strømforbrug (2026) → kWh og pris",
  description:
    "Gorenje FN619 fryseskab på 280 liter med NoFrost: energimærkets kWh om året i klasse D, E og F, pris om året og døgnet, og hvad forskellen koster.",
  intro:
    "Samme kabinet på 185 cm og 280 liter i tre energiklasser: D-udgaven FN619DAW6 bruger 48 kWh mindre om året end E-udgaven FN619EEW5.",
  content: `<h2>Hvor meget strøm bruger Gorenje FN619?</h2>
<p>Gorenje FN619 er et fritstående fryseskab på 280 liter, 185 cm højt, 59,5 cm bredt og 66,3 cm dybt, med automatisk afrimning (NoFrost) ifølge EU's produktdatabase EPREL. Der findes flere udgaver med samme kabinet, og hver har sit eget energimærke. FN619EEW5 har energiklasse E og bruger 247 kWh om året. FN619DAW6 har energiklasse D og 199 kWh. Gorenje har også registreret FN619FEW5 med klasse F og 310 kWh.</p>
<p>247 kWh om året er omkring 0,68 kWh i døgnet, svarende til {{kr 247}} om året ved månedens elpris. FN619DAW6 bruger omkring 0,54 kWh i døgnet, svarende til {{kr 199}} om året.</p>
<table>
<thead><tr><th>Model</th><th>Klasse</th><th>kWh om året</th><th>kWh i døgnet</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>FN619DAW6</td><td>D</td><td>199</td><td>0,54</td><td>35 dB</td></tr>
<tr><td>FN619EEW5</td><td>E</td><td>247</td><td>0,68</td><td>38 dB</td></tr>
<tr><td>FN619FEW5</td><td>F</td><td>310</td><td>0,85</td><td>38 dB</td></tr>
</tbody>
</table>

<h2>Bogstaverne i modelnummeret afgør regningen</h2>
<p>Det fjerdesidste bogstav i modelnummeret følger energiklassen: D i FN619DAW6, E i FN619EEW5 og F i FN619FEW5. Mellem E- og D-udgaven er forskellen 48 kWh om året, svarende til {{kr 48}}. Mellem F og D er den 111 kWh, svarende til {{kr 111}} hvert år. En fryser holder typisk i mange år, så forskellen ved købet ganges op.</p>
<p>D-udgaven er også mere stille: 35 dB mod 38 dB. Alle tre kan fryse 12,6 kg ned i døgnet ifølge EPREL og holder −18 °C i fryserummet med fire stjerner.</p>

<h2>FN619 mod Bosch GSN58 og kummefryseren</h2>
<p>Et større fryseskab behøver ikke bruge mere. <a href="/fryser/bosch-gsn58/">Bosch GSN58</a> er 366 liter, altså 86 liter mere end FN619, og den nyeste udgave, GSN58AWCP, bruger 178 kWh om året i klasse C. Det er 21 kWh mindre end FN619DAW6 og 69 kWh mindre end FN619EEW5. Regnet pr. 100 liter bruger FN619DAW6 omkring 71 kWh om året mod 49 kWh for GSN58AWCP.</p>
<p>En kummefryser holder bedre på kulden, fordi kold luft ikke falder ud, når låget åbnes. <a href="/kummefryser/gram-fb-3297/">Gram FB 3297</a> på 297 liter bruger 231 kWh om året i klasse E — mindre end FN619EEW5 med 17 liter mere plads. Til gengæld giver et fryseskab bedre overblik og tager mindre gulvplads.</p>
<p>Har du en ældre fryser, er det værd at måle den. Et fryseskab fra før marts 2021 har det gamle energimærke med A+, A++ og A+++, som ikke kan sammenlignes direkte med den nye skala fra A til G. En stikmåler i et døgn viser det faktiske forbrug, og det tal kan du sammenligne direkte med kolonnen kWh i døgnet ovenfor.</p>

<h2>Hvad energimærket forudsætter</h2>
<p>Energimærket er målt ved 25 °C i rummet med lukket dør og −18 °C i fryseren. Står fryseskabet i en kølig kælder eller et bryggers på 15–18 °C, bruger det typisk mindre end mærket, og i et varmt rum mere. Gorenje har oplyst alle klimaklasser fra SN til T til EPREL, altså rum mellem 10 og 43 °C. En uopvarmet garage, der bliver koldere end 10 °C om vinteren, ligger uden for det.</p>
<p>NoFrost betyder, at du ikke selv skal afrime, og at isen ikke bygger sig op og isolerer fordamperen. Hold alligevel luftkanalerne inde i fryseren fri, så kulden kan cirkulere.</p>

<h2>Hvornår er det billigst?</h2>
<p>En fryser kører hele døgnet og kan ikke flyttes til billige timer. Den koster derfor det samme, uanset om du har timepris; regnestykket er mærkets kWh gange din gennemsnitlige pris. Det, du kan påvirke, er hvor hårdt den arbejder: åbn døren kort, fyld den nogenlunde op (frosne varer holder på kulden), og giv den luft bagved. Læs mere om <a href="/fryser/">fryserens strømforbrug</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg D-udgaven FN619DAW6 frem for E og F — kabinettet er det samme.</li>
<li>Stil termostaten på −18 °C; koldere koster mere strøm.</li>
<li>Placér fryseren i det køligste rum, du har, inden for 10–43 °C.</li>
<li>Sluk en gammel ekstra fryser, hvis indholdet kan samles i én.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Gorenje FN619 om året?",
      answer:
        "199 kWh om året for FN619DAW6 (klasse D), 247 kWh for FN619EEW5 (klasse E) og 310 kWh for FN619FEW5 (klasse F) ifølge EPREL. 247 kWh svarer til {{kr 247}} om året ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Gorenje FN619EEW5?",
      answer: "Energiklasse E på skalaen fra A til G med 247 kWh om året og 280 liter ifølge EPREL.",
    },
    {
      question: "Er Gorenje FN619 NoFrost?",
      answer: "Ja. EPREL oplyser automatisk afrimning for alle tre udgaver, så du skal ikke selv fjerne is.",
    },
    {
      question: "Kan Gorenje FN619 stå i en garage?",
      answer: "Kun hvis temperaturen holder sig mellem 10 og 43 °C. Gorenje har oplyst klimaklasserne SN, N, ST og T til EPREL.",
    },
    {
      question: "Hvad sparer FN619DAW6 i forhold til FN619EEW5?",
      answer: "48 kWh om året, svarende til {{kr 48}} om året ved månedens elpris. Kabinet og rumfang er det samme.",
    },
  ],
  sources: [
    { name: "EPREL — Gorenje FN619DAW6, EU's energimærke", url: eprel("1402474") },
    { name: "EPREL — Gorenje FN619EEW5, EU's energimærke", url: eprel("1282127") },
    { name: "EPREL — Gorenje FN619FEW5, EU's energimærke", url: eprel("1282149") },
    { name: "Gorenje — FN619EEW5, dansk produktside", url: "https://dk.gorenje.com/produkter/kol-og-frys/fritstaende-frysere/UP-FREEZ-ZOF3168SBD-FN619EEW5-GOR/p/000000000000740887" },
    { name: "Gorenje — FN619DAW6, dansk produktside", url: "https://dk.gorenje.com/produkter/kol-og-frys/fryseskabe/UP-FREEZ-ZOF3168SED-FN619DAW6-GOR/p/000000000000742502" },
    { name: "EPREL — Bosch GSN58AWCP, EU's energimærke", url: eprel("1808314") },
  ],
  variants: [
    { name: "280 l, klasse D (FN619DAW6)", watts: {}, annualKwh: 199, energyClass: "D", source: 0 },
    { name: "280 l, klasse E (FN619EEW5)", watts: {}, annualKwh: 247, energyClass: "E", source: 1 },
    { name: "280 l, klasse F (FN619FEW5)", watts: {}, annualKwh: 310, energyClass: "F", source: 2 },
  ],
  publishDate: "2026-12-14",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Gorenje har oplyst til EU-databasen EPREL: målt ved 25 °C i rummet med lukket dør og −18 °C. Kilderne står nederst på siden.",
};

export default gorenjeFn619;
