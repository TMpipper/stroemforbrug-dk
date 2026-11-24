import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;
const bosch = (m: string) =>
  `https://www.bosch-home.dk/da/product/koeleskabe-og-fryseskabe/koele-fryseskabe/fritstaaende-koele-fryseskabe-med-fryser-nederst/${m}`;

const boschKgn: ModelData = {
  slug: "bosch-kgn",
  parent: "koeleskab",
  brand: "Bosch",
  name: "Bosch KGN køle-/fryseskab",
  released: "2025-04",
  synonyms: [
    "bosch kgn39 strømforbrug",
    "bosch kgn49 strømforbrug",
    "bosch køle fryseskab strømforbrug",
    "bosch kgn39aibt",
    "bosch kgn392i1f",
    "bosch kgn39aiau",
    "bosch kgn39vxct",
    "bosch kgn49vxct",
    "bosch kgn493wda",
  ],
  title: "Bosch KGN køle-fryseskab strømforbrug (2026) → kWh om året",
  description:
    "Bosch KGN39 og KGN49 køle-/fryseskab: energimærkets kWh om året for seks danske modeller fra klasse A til D, pris om året og hvad energiklassen betyder.",
  intro:
    "De fire KGN39-modeller har samme skab på 363 liter, men bruger fra 100 til 162 kWh om året. Energiklassen er den store forskel, ikke størrelsen.",
  content: `<h2>Hvor meget strøm bruger et Bosch KGN-køle-/fryseskab?</h2>
<p>KGN er Bosch' fritstående køle-/fryseskabe med fryseren nederst og Total No Frost. Siden dækker seks modeller fra Bosch' danske hjemmeside: fire KGN39 på 60 cm i bredden og to KGN49 på 70 cm, alle 203 cm høje. Energimærket i EU's produktdatabase EPREL giver årsforbruget for hver model, målt ved 25 °C i rummet.</p>
<table>
<thead><tr><th>Model</th><th>Serie</th><th>Køl + frys</th><th>Energiklasse</th><th>kWh om året</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>KGN392I1F</td><td>Serie 4</td><td>260 + 103 l</td><td>A</td><td>100</td><td>29 dB</td></tr>
<tr><td>KGN39AIAU</td><td>Serie 6</td><td>260 + 103 l</td><td>A</td><td>112</td><td>29 dB</td></tr>
<tr><td>KGN39AIBT</td><td>Serie 6</td><td>260 + 103 l</td><td>B</td><td>129</td><td>33 dB</td></tr>
<tr><td>KGN39VXCT</td><td>Serie 4</td><td>260 + 103 l</td><td>C</td><td>162</td><td>35 dB</td></tr>
<tr><td>KGN49VXCT</td><td>Serie 4</td><td>311 + 129 l</td><td>C</td><td>178</td><td>35 dB</td></tr>
<tr><td>KGN493WDA</td><td>Serie 4</td><td>330 + 108 l</td><td>D</td><td>207</td><td>38 dB</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster KGN392I1F {{kr 100}} om året, KGN39AIBT {{kr 129}} og KGN39VXCT {{kr 162}}. De store KGN49VXCT og KGN493WDA koster {{kr 178}} og {{kr 207}}.</p>

<h2>Samme skab, 62 kWh til forskel</h2>
<p>KGN392I1F og KGN39VXCT har samme mål og samme 363 liter fordelt på 260 liter køl og 103 liter frys. Alligevel bruger KGN392I1F 62 kWh mindre om året, svarende til {{kr 62}} ved månedens elpris. Et køle-/fryseskab kører hele døgnet i mange år, så over ti år er forskellen omkring 620 kWh, svarende til {{kr 620}} ved månedens elpris. Det er værd at tage med, når du sammenligner prisen ved købet.</p>
<p>Serien siger ikke meget om forbruget. KGN392I1F er en Serie 4 med klasse A, mens KGN39AIBT er en Serie 6 med klasse B og 29 kWh mere om året. Serie 6 giver ekstra udstyr som metalbagvæg og fleksible hylder, men det er energiklassen, der afgør strømregningen. KGN39AIAU i Serie 6 har til gengæld klasse A med 112 kWh. De to A-modeller er også de mest stille af de seks med 29 dB, der passer til et åbent køkken.</p>

<h2>70 cm i bredden: KGN49</h2>
<p>KGN49VXCT og KGN493WDA er 10 cm bredere og har plads til 438–440 liter. KGN49VXCT har den største fryser af de seks med 129 liter og bruger 178 kWh om året i klasse C. KGN493WDA har mere køleplads (330 liter) og mindre fryser (108 liter) og bruger 207 kWh i klasse D, 29 kWh mere end KGN49VXCT. Har du brug for plads, er KGN49VXCT den sparsomme af de to.</p>
<p>Pr. liter er forskellen tydelig: KGN392I1F bruger omkring 0,28 kWh om året pr. liter, KGN49VXCT omkring 0,40 kWh og KGN493WDA omkring 0,47 kWh. Et stort skab i en lav energiklasse kan altså bruge dobbelt så meget som et mindre skab i klasse A. Har du brug for 70 cm, er det derfor værd at tjekke, om der findes en KGN49 i en bedre energiklasse, når du køber; modelnummeret på energimærket afgør det, ikke serien.</p>

<h2>Bosch KGN mod andre køle-/fryseskabe</h2>
<p>Bosch' mindre <a href="/koeleskab/bosch-kge36/">KGE36</a> på 308 liter bruger 149 kWh om året i klasse C. KGN392I1F har 55 liter mere og bruger 49 kWh mindre. <a href="/koeleskab/gorenje-nrk418/">Gorenje NRK418</a> på 246–256 liter bruger 172–226 kWh, og <a href="/koeleskab/electrolux-ltb1ae/">Electrolux LTB1AE</a> på 206 liter bruger 177 kWh. Mod Gorenje NRK418ECW4 med 226 kWh sparer KGN392I1F 126 kWh om året, svarende til {{kr 126}}, og har samtidig over 100 liter mere plads.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Stil skabet væk fra ovn, opvaskemaskine og direkte sol — energimærket er målt ved 25 °C, og et varmere sted koster mere.</li>
<li>Hold 4–5 °C i køleskabet og −18 °C i fryseren; koldere er spild.</li>
<li>Lad varm mad køle af, før den kommer i skabet.</li>
<li>Hold luft omkring skabet, så kompressoren kan komme af med varmen.</li>
</ul>
<p>Et køle-/fryseskab kører hele døgnet, så det kan ikke flyttes til billige timer; det, der virker, er en lav energiklasse og en god placering. Se flere modeller på siden om <a href="/koeleskab/">køleskabes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et Bosch KGN39 køle-/fryseskab?",
      answer:
        "Ifølge energimærket 100–162 kWh om året for de fire KGN39-modeller på 363 liter: 100 kWh for KGN392I1F, 112 kWh for KGN39AIAU, 129 kWh for KGN39AIBT og 162 kWh for KGN39VXCT.",
    },
    {
      question: "Hvad koster Bosch KGN392I1F om året i strøm?",
      answer: "KGN392I1F bruger 100 kWh om året i energiklasse A, svarende til {{kr 100}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Bosch KGN39AIBT?",
      answer: "Energiklasse B med 129 kWh om året og 363 liter (260 liter køl og 103 liter frys) ifølge EPREL. Støjen er 33 dB.",
    },
    {
      question: "Hvor meget strøm bruger Bosch KGN49?",
      answer: "KGN49VXCT bruger 178 kWh om året i klasse C, KGN493WDA 207 kWh i klasse D. Begge er 70 cm brede med 438–440 liter.",
    },
    {
      question: "Kan det betale sig at vælge klasse A frem for C?",
      answer:
        "Mellem KGN392I1F (A) og KGN39VXCT (C) er forskellen 62 kWh om året, svarende til {{kr 62}} ved månedens elpris — over ti år omkring {{kr 620}}.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch KGN392I1F, EU's energimærke", url: eprel("2040284") },
    { name: "EPREL — Bosch KGN39AIAU, EU's energimærke", url: eprel("2168041") },
    { name: "EPREL — Bosch KGN39AIBT, EU's energimærke", url: eprel("291375") },
    { name: "EPREL — Bosch KGN39VXCT, EU's energimærke", url: eprel("934862") },
    { name: "EPREL — Bosch KGN49VXCT, EU's energimærke", url: eprel("1094933") },
    { name: "EPREL — Bosch KGN493WDA, EU's energimærke", url: eprel("2312224") },
    { name: "Bosch — KGN392I1F, dansk produktside", url: bosch("KGN392I1F") },
    { name: "Bosch — KGN39AIBT, dansk produktside", url: bosch("KGN39AIBT") },
    { name: "Bosch — KGN49VXCT, dansk produktside", url: bosch("KGN49VXCT") },
  ],
  variants: [
    { name: "363 l, klasse A (KGN392I1F)", watts: {}, annualKwh: 100, energyClass: "A", source: 0 },
    { name: "363 l, klasse A, Serie 6 (KGN39AIAU)", watts: {}, annualKwh: 112, energyClass: "A", source: 1 },
    { name: "363 l, klasse B, Serie 6 (KGN39AIBT)", watts: {}, annualKwh: 129, energyClass: "B", source: 2 },
    { name: "363 l, klasse C (KGN39VXCT)", watts: {}, annualKwh: 162, energyClass: "C", source: 3 },
    { name: "440 l, 70 cm, klasse C (KGN49VXCT)", watts: {}, annualKwh: 178, energyClass: "C", source: 4 },
    { name: "438 l, 70 cm, klasse D (KGN493WDA)", watts: {}, annualKwh: 207, energyClass: "D", source: 5 },
  ],
  publishDate: "2026-12-30",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler årsforbruget ved 25 °C i rummet med lukkede døre og standardindstilling. Kilderne står nederst på siden.",
};

export default boschKgn;
