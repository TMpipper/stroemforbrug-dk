import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;
const samsung = (path: string) => `https://www.samsung.com/dk/refrigerators/bottom-mount-freezer/${path}/`;

const samsungRb: ModelData = {
  slug: "samsung-rb",
  parent: "koeleskab",
  brand: "Samsung",
  name: "Samsung RB køle-/fryseskab",
  released: "2024-09",
  synonyms: [
    "samsung rb34 strømforbrug",
    "samsung rb38 strømforbrug",
    "samsung køle fryseskab strømforbrug",
    "samsung rb34c602eww",
    "samsung rb34c605cww",
    "samsung rb34c704db1",
    "samsung rb38c605cww",
    "samsung rb38c607as9",
    "samsung rb38c7agws9",
  ],
  title: "Samsung RB køle-fryseskab strømforbrug (2026) → A til E",
  description:
    "Samsung RB34 og RB38 køle-/fryseskab: energimærkets kWh om året for seks danske modeller fra klasse A til E, pris om året og hvorfor klassen slår størrelsen.",
  intro:
    "Samme skab kan bruge fra 87 til 254 kWh om året: de seks Samsung RB-modeller spænder over fire energiklasser. Det store RB38C7AGWS9 i klasse A bruger en tredjedel af det lille RB34C602EWW i klasse E.",
  content: `<h2>Hvor meget strøm bruger et Samsung RB-køle-/fryseskab?</h2>
<p>RB er Samsungs fritstående køle-/fryseskabe med fryseren nederst, 59,5 cm brede. RB34 er 185 cm høje med 344 liter, RB38 203 cm med 387–390 liter, og fryseren rummer 114 liter i dem alle. Siden dækker seks modeller fra Samsungs danske hjemmeside, og hver har sit eget energimærke i EU's produktdatabase EPREL, målt ved 25 °C i rummet.</p>
<table>
<thead><tr><th>Model</th><th>Højde</th><th>Køl + frys</th><th>Energiklasse</th><th>kWh om året</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>RB34C602EWW</td><td>185 cm</td><td>230 + 114 l</td><td>E</td><td>254</td><td>35 dB</td></tr>
<tr><td>RB34C704DB1</td><td>185 cm</td><td>230 + 114 l</td><td>D</td><td>204</td><td>35 dB</td></tr>
<tr><td>RB34C605CWW</td><td>185 cm</td><td>230 + 114 l</td><td>C</td><td>163</td><td>35 dB</td></tr>
<tr><td>RB38C605CWW</td><td>203 cm</td><td>276 + 114 l</td><td>C</td><td>169</td><td>35 dB</td></tr>
<tr><td>RB38C607AS9</td><td>203 cm</td><td>273 + 114 l</td><td>A</td><td>108</td><td>35 dB</td></tr>
<tr><td>RB38C7AGWS9</td><td>203 cm</td><td>273 + 114 l</td><td>A</td><td>87</td><td>29 dB</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster RB34C602EWW {{kr 254}} om året og RB34C605CWW {{kr 163}}. RB38C607AS9 koster {{kr 108}} og RB38C7AGWS9 {{kr 87}}.</p>

<h2>Samme skab, fire energiklasser</h2>
<p>De tre RB34-modeller har nøjagtig samme mål og samme 344 liter, men RB34C602EWW i klasse E bruger 254 kWh om året, RB34C704DB1 i klasse D 204 kWh og RB34C605CWW i klasse C 163 kWh. Mellem E og C er forskellen 91 kWh om året, svarende til {{kr 91}} ved månedens elpris. Et køle-/fryseskab holder typisk mange år, så over ti år er det omkring 910 kWh, svarende til {{kr 910}}.</p>
<p>I RB38-serien er spændet lige så stort. RB38C605CWW i klasse C bruger 169 kWh, RB38C607AS9 i klasse A 108 kWh og RB38C7AGWS9 i klasse A kun 87 kWh, selv om de har næsten samme plads. RB38C7AGWS9 er også den mest stille af de seks med 29 dB mod 35 dB for de andre.</p>

<h2>Det store skab kan være det sparsomme</h2>
<p>Det er ikke størrelsen, der styrer forbruget. RB38C7AGWS9 har 43 liter mere plads end RB34C602EWW og bruger 167 kWh mindre om året, svarende til {{kr 167}} ved månedens elpris. Selv RB38C605CWW i klasse C bruger 85 kWh mindre end det mindre RB34C602EWW i klasse E. Står du mellem et lille skab i en dårlig energiklasse og et større i en god, kan det større altså være billigere i drift.</p>
<p>Pr. liter bruger RB38C7AGWS9 omkring 0,22 kWh om året, RB34C605CWW omkring 0,47 kWh og RB34C602EWW omkring 0,74 kWh. Kig derfor på kWh-tallet på energimærket, når du sammenligner. Modelnavnene ligner hinanden, og det er ofte kun et par bogstaver i slutningen, der skiller en klasse A-model fra en klasse E-model. Tjek det fulde modelnummer på energimærket i butikken eller i EPREL, før du køber.</p>

<h2>Samsung RB mod andre køle-/fryseskabe</h2>
<p><a href="/koeleskab/bosch-kgn/">Bosch KGN39</a> på 363 liter bruger 100–162 kWh om året. Bosch KGN392I1F i klasse A med 100 kWh ligger mellem Samsungs to A-modeller: RB38C7AGWS9 bruger 13 kWh mindre og har 24 liter mere, mens RB38C607AS9 bruger 8 kWh mere. <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> på 308 liter bruger 149 kWh i klasse C, omtrent som RB34C605CWW, der har 36 liter mere.</p>
<p>Et amerikanerkøleskab som <a href="/koeleskab/samsung-rs70f/">Samsung RS70F</a> på 634–659 liter bruger 180–364 kWh om året. Har du ikke brug for den ekstra plads, sparer RB38C7AGWS9 93–277 kWh om året.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Stil skabet væk fra ovn, opvaskemaskine og direkte sol — energimærket er målt ved 25 °C, og et varmere sted koster mere.</li>
<li>Hold 4–5 °C i køleskabet og −18 °C i fryseren; koldere er spild.</li>
<li>Luk døren hurtigt, og lad varm mad køle af, før den sættes ind.</li>
<li>Hold luft omkring skabet, så kompressoren kan komme af med varmen.</li>
</ul>
<p>Et køle-/fryseskab kører hele døgnet, så det kan ikke flyttes til billige timer; det, der virker, er en god energiklasse og en god placering. Se flere modeller på siden om <a href="/koeleskab/">køleskabes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et Samsung RB34 køle-/fryseskab?",
      answer:
        "Ifølge energimærket 163–254 kWh om året for de tre RB34-modeller på 344 liter: 163 kWh for RB34C605CWW (C), 204 kWh for RB34C704DB1 (D) og 254 kWh for RB34C602EWW (E).",
    },
    {
      question: "Hvad koster Samsung RB38C7AGWS9 om året i strøm?",
      answer: "RB38C7AGWS9 bruger 87 kWh om året i energiklasse A, svarende til {{kr 87}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Samsung RB38C607AS9?",
      answer: "Energiklasse A med 108 kWh om året og 387 liter (273 liter køl og 114 liter frys) ifølge EPREL.",
    },
    {
      question: "Bruger et Samsung RB38 mere strøm end et RB34?",
      answer:
        "Ikke nødvendigvis. Energiklassen betyder mere end størrelsen: RB38C7AGWS9 på 387 liter bruger 87 kWh om året, RB34C602EWW på 344 liter 254 kWh.",
    },
    {
      question: "Kan det betale sig at vælge klasse A frem for E?",
      answer:
        "Mellem RB38C7AGWS9 (A) og RB34C602EWW (E) er forskellen 167 kWh om året, svarende til {{kr 167}} ved månedens elpris.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung RB34C602EWW, EU's energimærke", url: eprel("1750666") },
    { name: "EPREL — Samsung RB34C704DB1, EU's energimærke", url: eprel("1501923") },
    { name: "EPREL — Samsung RB34C605CWW, EU's energimærke", url: eprel("1509372") },
    { name: "EPREL — Samsung RB38C605CWW, EU's energimærke", url: eprel("1378770") },
    { name: "EPREL — Samsung RB38C607AS9, EU's energimærke", url: eprel("1530776") },
    { name: "EPREL — Samsung RB38C7AGWS9, EU's energimærke", url: eprel("2101763") },
    { name: "Samsung Danmark — køle-/fryseskabe med fryser nederst", url: "https://www.samsung.com/dk/refrigerators/bottom-mount-freezer/" },
    { name: "Samsung Danmark — RB38C7AGWS9, produktside", url: samsung("rb7300t-a-20-extra-energy-saving-bottom-mount-freezer-refrigerator-with-a-20-extra-energy-saving-390l-silver-rb38c7agws9-ef") },
    { name: "Samsung Danmark — RB34C602EWW, produktside", url: samsung("rb7300t-344l-white-rb34c602eww-ef") },
  ],
  variants: [
    { name: "344 l, klasse E (RB34C602EWW)", watts: {}, annualKwh: 254, energyClass: "E", source: 0 },
    { name: "344 l, klasse D (RB34C704DB1)", watts: {}, annualKwh: 204, energyClass: "D", source: 1 },
    { name: "344 l, klasse C (RB34C605CWW)", watts: {}, annualKwh: 163, energyClass: "C", source: 2 },
    { name: "390 l, klasse C (RB38C605CWW)", watts: {}, annualKwh: 169, energyClass: "C", source: 3 },
    { name: "387 l, klasse A (RB38C607AS9)", watts: {}, annualKwh: 108, energyClass: "A", source: 4 },
    { name: "387 l, klasse A (RB38C7AGWS9)", watts: {}, annualKwh: 87, energyClass: "A", source: 5 },
  ],
  publishDate: "2027-01-01",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler årsforbruget ved 25 °C i rummet med lukkede døre og standardindstilling. Kilderne står nederst på siden.",
};

export default samsungRb;
