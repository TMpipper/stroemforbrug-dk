import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const siemensIq500Toerretumbler: ModelData = {
  slug: "siemens-iq500-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "Siemens",
  name: "Siemens iQ500 tørretumbler",
  released: "2025-04",
  synonyms: [
    "siemens iq500 tørretumbler",
    "siemens iq500 varmepumpe tørretumbler",
    "siemens tørretumbler strømforbrug",
    "wq45g2dbdn",
    "wq42g20ldn",
    "wq45h2bxdn",
    "wq46n2didn",
    "siemens tørretumbler 9 kg",
  ],
  title: "Siemens iQ500 tørretumbler strømforbrug (2026) → kWh og tid",
  description:
    "Siemens iQ500 varmepumpetørretumbler på 9 kg: energimærkets kWh pr. tørring fra klasse D til B, pris om året, programtid og billigste tidspunkt.",
  intro:
    "Fire iQ500-tumblere på 9 kg med tre forskellige energiklasser: den nyeste bruger 28 % mindre strøm pr. tørring end den mest strømkrævende — og er 35 minutter længere om det.",
  content: `<h2>Hvor meget strøm bruger en Siemens iQ500 tørretumbler?</h2>
<p>Siemens iQ500 er seriens mellemklasse mellem iQ300 og iQ700. De fire varmepumpetørretumblere på siden er alle iQ500 ifølge Siemens' danske datablade, tager 9 kg og har hver sit energimærke i EU's produktdatabase EPREL. På eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning, bruger de 92–128 kWh pr. 100 tørringer, altså 0,92–1,28 kWh pr. tørring.</p>
<p>Med tre tørringer om ugen bliver det 144–200 kWh om året, svarende til {{kr 144-200}}.</p>
<table>
<thead><tr><th>Model</th><th>Klasse</th><th>kWh pr. 100 tørringer</th><th>Program, fuld</th><th>Halv fyldning</th><th>Kondensering</th><th>Effekt</th></tr></thead>
<tbody>
<tr><td>WQ42G20LDN</td><td>D</td><td>128</td><td>3:50</td><td>2:12</td><td>83 %</td><td>600 W</td></tr>
<tr><td>WQ45G2DBDN</td><td>C</td><td>110</td><td>3:15</td><td>2:05</td><td>88 %</td><td>600 W</td></tr>
<tr><td>WQ45H2BXDN</td><td>C</td><td>110</td><td>3:15</td><td>2:05</td><td>88 %</td><td>600 W</td></tr>
<tr><td>WQ46N2DIDN (2026)</td><td>B</td><td>92</td><td>4:25</td><td>2:40</td><td>91 %</td><td>800 W</td></tr>
</tbody>
</table>

<h2>Tre energiklasser i samme serie</h2>
<p>WQ42G20LDN med klasse D bruger 36 kWh mere pr. 100 tørringer end WQ46N2DIDN med klasse B. Med tre tørringer om ugen er det omkring 56 kWh om året, svarende til {{kr 56}} hvert år. Mellem D-modellen og de to C-modeller er forskellen 18 kWh pr. 100 tørringer, omkring 28 kWh om året eller {{kr 28}}.</p>
<p>WQ45G2DBDN og WQ45H2BXDN har samme energimærke, samme tid og samme kondensering. Forskellen er udstyret: WQ45H2BXDN har ifølge databladet Home Connect med intelligentDry og fjerndiagnostik og bruger derfor 2 W i netværksforbundet standby, mens WQ45G2DBDN kun oplyser 0,3 W slukket. Begge har en selvrensende kondensator, som Siemens fremhæver som grunden til, at forbruget holder sig over tid.</p>

<h2>Kortere tid eller lavere forbrug</h2>
<p>D-modellen er ikke den hurtigste. WQ42G20LDN tager 3 timer og 50 minutter ved fuld fyldning, mens C-modellerne kun tager 3 timer og 15 minutter med mindre strøm. Den nye WQ46N2DIDN tager 4 timer og 25 minutter, men bruger mindst af de fire. Den har også en højere tilslutningseffekt ifølge databladet: 800 W mod 600 W for de tre andre. Programmet kører længere og mere skånsomt, og det er det, der giver klasse B.</p>
<p>WQ46N2DIDN har præcis de samme tal på energimærket som Siemens' iQ700-model WQ46B2DPDN: 92 kWh, 4:25 og 91 % kondensering. Også <a href="/varmepumpe-toerretumbler/bosch-serie-8-toerretumbler/">Bosch Serie 8</a> fra samme koncern har 92 kWh og 4 timer og 25 minutter. Strømmen er altså den samme, uanset om der står iQ500, iQ700 eller Bosch på fronten.</p>

<h2>iQ500 mod Bosch Serie 6</h2>
<p><a href="/varmepumpe-toerretumbler/bosch-serie-6-toerretumbler/">Bosch Serie 6</a>-modellen WQG2450ISN har samme energimærke som WQ42G20LDN: klasse D og 128 kWh pr. 100 tørringer. Vælger du mellem de to, er det de andre egenskaber, der skiller dem ad. Vil du ned i forbrug, skal du op til de C- eller B-modeller, som både iQ500 og Bosch har.</p>
<p>Kondenseringen følger energiklassen: 83 % på D-modellen, 88 % på C-modellerne og 91 % på B-modellen ifølge EPREL. Jo højere tallet er, jo mindre fugt ender i rummet.</p>
<p>Alle fire bruger R290 som kølemiddel. Slukket bruger WQ42G20LDN 0,5 W og de tre andre 0,3 W. WQ45H2BXDN og WQ46N2DIDN bruger 2 W i netværksforbundet standby, når de er på wifi — omkring 17 kWh om året, hvis de står på netværket hele tiden.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>En tørretumbler er let at flytte i tid, fordi tøjet kan vente i tromlen. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle fire iQ500-modeller har udskudt start, og ventetiden bruger 4 W ifølge EPREL, omkring 0,03 kWh på otte timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Tjek hele modelnummeret: WQ42, WQ45 og WQ46 har hver sin energiklasse.</li>
<li>Centrifugér godt i vaskemaskinen, så tumbleren skal fjerne mindre vand.</li>
<li>Rens fnugfilteret efter hver tørring.</li>
<li>Start om aftenen med udskudt start, så tørringen ligger uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Siemens iQ500 tørretumbler?",
      answer:
        "Ifølge energimærket 1,28 kWh pr. tørring for WQ42G20LDN, 1,10 kWh for WQ45G2DBDN og WQ45H2BXDN og 0,92 kWh for WQ46N2DIDN på eco-programmet. Det svarer til {{kr 0,92}}–{{kr 1,28}} pr. tørring.",
    },
    {
      question: "Hvad koster en Siemens iQ500 tørretumbler om året?",
      answer: "Med tre tørringer om ugen 144–200 kWh om året afhængigt af modellen, svarende til {{kr 144-200}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Siemens WQ45G2DBDN?",
      answer: "Energiklasse C på det nye energimærke fra 2025 med 110 kWh pr. 100 tørringer og kondenseringsklasse B (88 %) ifølge EPREL.",
    },
    {
      question: "Hvad er forskellen på WQ42G20LDN og WQ45G2DBDN?",
      answer:
        "WQ42G20LDN har klasse D og 128 kWh pr. 100 tørringer, WQ45G2DBDN klasse C og 110 kWh — og WQ45G2DBDN er 35 minutter hurtigere ved fuld fyldning. Forskellen er omkring 28 kWh om året.",
    },
    {
      question: "Hvornår er det billigst at bruge tørretumbleren?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Siemens WQ42G20LDN (iQ500), EU's energimærke", url: eprel("2142091") },
    { name: "EPREL — Siemens WQ45G2DBDN (iQ500), EU's energimærke", url: eprel("2223863") },
    { name: "EPREL — Siemens WQ45H2BXDN (iQ500), EU's energimærke", url: eprel("2114561") },
    { name: "EPREL — Siemens WQ46N2DIDN (iQ500), EU's energimærke", url: eprel("2456624") },
    { name: "Siemens — WQ42G20LDN, produktdatablad (dansk)", url: sheet("WQ42G20LDN") },
    { name: "Siemens — WQ45G2DBDN, produktdatablad (dansk)", url: sheet("WQ45G2DBDN") },
    { name: "Siemens — WQ45H2BXDN, produktdatablad (dansk)", url: sheet("WQ45H2BXDN") },
    { name: "Siemens — WQ46N2DIDN, produktdatablad (dansk)", url: sheet("WQ46N2DIDN") },
    { name: "EPREL — Siemens WQ46B2DPDN (iQ700), EU's energimærke", url: eprel("2274314") },
    { name: "EPREL — Bosch WQG2450ISN (Serie 6), EU's energimærke", url: eprel("2207568") },
  ],
  variants: [
    { name: "9 kg, klasse D (WQ42G20LDN)", watts: { off: 0.5 }, kwhPer100Cycles: 128, energyClass: "D", source: 0 },
    { name: "9 kg, klasse C (WQ45G2DBDN)", watts: { off: 0.3 }, kwhPer100Cycles: 110, energyClass: "C", source: 1 },
    { name: "9 kg, Home Connect (WQ45H2BXDN)", watts: { off: 0.3 }, kwhPer100Cycles: 110, energyClass: "C", source: 2 },
    { name: "9 kg, klasse B (WQ46N2DIDN)", watts: { off: 0.3 }, kwhPer100Cycles: 92, energyClass: "B", source: 3 },
  ],
  publishDate: "2026-12-14",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default siemensIq500Toerretumbler;
