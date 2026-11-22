import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie8Toerretumbler: ModelData = {
  slug: "bosch-serie-8-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "Bosch",
  name: "Bosch Serie 8 tørretumbler",
  released: "2025-06",
  synonyms: [
    "bosch serie 8 tørretumbler",
    "bosch varmepumpe tørretumbler",
    "bosch tørretumbler strømforbrug",
    "wqb246dssn",
    "wqb246dlsn",
    "wqb246dasn",
    "bosch serie 8 9 kg tørretumbler",
  ],
  title: "Bosch Serie 8 tørretumbler strømforbrug (2026) → kWh og tid",
  description:
    "Bosch Serie 8 varmepumpetørretumbler på 9 kg: energimærkets kWh pr. tørring, pris om året, og hvorfor den lave energiklasse B koster en lang programtid.",
  intro:
    "Med 0,92 kWh pr. tørring bruger Bosch' Serie 8-tumbler mindst af de tumblere, vi har modelsider om — men dens eco-program tager 4 timer og 25 minutter.",
  content: `<h2>Hvor meget strøm bruger Bosch Serie 8 tørretumbler?</h2>
<p>Bosch' Serie 8-varmepumpetørretumbler findes i tre danske udgaver, WQB246DSSN, WQB246DASN og WQB246DLSN. Alle tre tager 9 kg og har samme energimærke i EU's produktdatabase EPREL: energiklasse B og 92 kWh pr. 100 tørringer på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning. Det er 0,92 kWh pr. tørring, svarende til {{kr 0,92}}.</p>
<p>Med tre tørringer om ugen bliver det omkring 144 kWh om året, svarende til {{kr 144}}. Slukket bruger tumbleren 0,3 W og i netværksstandby 2 W, fordi den er forbundet via Home Connect. Effekten er 800 W ifølge Bosch' danske datablad.</p>

<h2>Lavt forbrug, lang programtid</h2>
<p>Prisen for energiklasse B er tiden. Ved fuld fyldning tager eco-programmet 4 timer og 25 minutter og ved halv fyldning 2 timer og 40 minutter ifølge EPREL. Det er markant længere end de andre 9 kg-tumblere, vi har modelsider om:</p>
<table>
<thead><tr><th>Model (9 kg)</th><th>kWh pr. 100 tørringer</th><th>Klasse</th><th>Program, fuld fyldning</th></tr></thead>
<tbody>
<tr><td>Bosch Serie 8 (WQB246DSSN)</td><td>92</td><td>B</td><td>4:25</td></tr>
<tr><td>AEG 7000 (TR734E95E)</td><td>103</td><td>C</td><td>3:39</td></tr>
<tr><td>Miele T1 (TWD640WP)</td><td>107</td><td>C</td><td>3:07</td></tr>
<tr><td>Bosch Serie 6 (WQG2450ISN)</td><td>128</td><td>D</td><td>2:54</td></tr>
</tbody>
</table>
<p>En varmepumpetumbler bruger mindre strøm, jo lavere temperatur den tørrer ved, og en lavere temperatur kræver mere tid. Serie 8 er det tydeligste eksempel. Mod <a href="/varmepumpe-toerretumbler/miele-t1/">Miele T1</a> på 9 kg sparer den omkring 23 kWh om året med tre tørringer om ugen, og mod <a href="/varmepumpe-toerretumbler/aeg-7000-toerretumbler/">AEG 7000</a> på 9 kg omkring 17 kWh — {{kr 23}} og {{kr 17}} om året. Til gengæld kører den over en time længere end Miele-tumbleren.</p>
<p>Kører tumbleren om natten, betyder den lange programtid ikke noget. Skal du bruge tøjet samme dag, kan den være upraktisk.</p>

<h2>Serie 8 mod Serie 6 og Serie 4</h2>
<p>Inden for Bosch' eget program er forskellen stor. Serie 6-modellen WQG2450ISN, også på 9 kg, har energiklasse D og bruger 128 kWh pr. 100 tørringer, men programmet tager kun 2 timer og 54 minutter. Det er omkring 56 kWh mere om året end Serie 8, svarende til {{kr 56}}. Serie 4-modellen WTH8300LSN på 8 kg har energiklasse E og bruger 138 kWh pr. 100 tørringer med et program på 3 timer og 25 minutter — omkring 72 kWh mere om året end Serie 8, svarende til {{kr 72}}.</p>
<p>Over en levetid på ti år eller mere sparer Serie 8 altså flere hundrede kWh i forhold til Serie 6 og Serie 4.</p>

<h2>Tre udgaver: forskellen er støj og dør</h2>
<p>De tre modelnumre har samme forbrug, samme kondenseringseffektivitet på 91 % (klasse B) og samme støjklasse A. WQB246DLSN er den mest stille med 56 dB mod 59 dB for de to andre ifølge EPREL. WQB246DASN har en dør med black-chrome-ramme ifølge Bosch' datablad. Vælg efter støj og udseende; strømregningen er den samme.</p>
<p>Alle tre har en selvrensende kondensator, som ifølge Bosch holder forbruget stabilt over tid, fordi fnug ikke sætter sig i varmeveksleren. Med Smart Dry kan tumbleren hente programvalget fra en forbundet Bosch-vaskemaskine.</p>

<h2>To maskiner eller én?</h2>
<p>Overvejer du en <a href="/vaskemaskine-med-toerretumbler/bosch-serie-8-vaske-toerre/">Bosch Serie 8 vaske-tørremaskine</a> i stedet for to maskiner, så bruger den 3,05 kWh pr. vask og tørring af 6 kg tøj ifølge EPREL. Serie 8-tumbleren bruger 0,92 kWh til tørringen, og en vaskemaskine som <a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a> bruger 0,47–0,51 kWh pr. vask. Sammen er det under halvdelen af vaske-tørremaskinens forbrug.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>Den lange programtid gør Serie 8 velegnet til natten. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Tumbleren har udskudt start, hvor ventetiden bruger 4 W ifølge EPREL. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>
<ul>
<li>Brug eco-programmet til bomuld; det er det, energimærket er målt på.</li>
<li>Centrifugér godt i vaskemaskinen, så tumbleren har mindre vand at fjerne.</li>
<li>Fyld tumbleren: 9 kg på én gang er billigere end to halve fyldninger.</li>
<li>Rens fnugfilteret efter hver tørring.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch Serie 8 tørretumbler?",
      answer: "Ifølge energimærket 0,92 kWh pr. tørring på eco-programmet (92 kWh pr. 100 tørringer, energiklasse B). Det svarer til {{kr 0,92}} pr. tørring.",
    },
    {
      question: "Hvad koster Bosch Serie 8 tørretumbler om året?",
      answer: "Med tre tørringer om ugen omkring 144 kWh om året, svarende til {{kr 144}} ved månedens elpris.",
    },
    {
      question: "Hvorfor tager Bosch Serie 8 så lang tid?",
      answer:
        "Eco-programmet tørrer ved lav temperatur for at bruge mindre strøm. Ved fuld fyldning tager det 4 timer og 25 minutter, ved halv fyldning 2 timer og 40 minutter ifølge EPREL.",
    },
    {
      question: "Hvad er forskellen på WQB246DSSN, WQB246DASN og WQB246DLSN?",
      answer: "Forbruget er det samme, 92 kWh pr. 100 tørringer. WQB246DLSN er mere stille med 56 dB mod 59 dB, og WQB246DASN har en dør med black-chrome-ramme.",
    },
    {
      question: "Bruger Serie 8 mindre end Bosch Serie 6 tørretumbler?",
      answer:
        "Ja. Serie 6-modellen WQG2450ISN på 9 kg bruger 128 kWh pr. 100 tørringer mod 92 kWh for Serie 8. Med tre tørringer om ugen er det omkring 56 kWh mere om året, men Serie 6 er hurtigere.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch WQB246DSSN (Serie 8), EU's energimærke", url: eprel("2274347") },
    { name: "EPREL — Bosch WQB246DASN (Serie 8), EU's energimærke", url: eprel("2274344") },
    { name: "EPREL — Bosch WQB246DLSN (Serie 8), EU's energimærke", url: eprel("2274343") },
    { name: "Bosch — WQB246DSSN, produktdatablad (dansk)", url: sheet("WQB246DSSN") },
    { name: "Bosch — WQB246DASN, produktdatablad (dansk)", url: sheet("WQB246DASN") },
    { name: "Bosch — WQB246DLSN, produktdatablad (dansk)", url: sheet("WQB246DLSN") },
    { name: "EPREL — Bosch WQG2450ISN (Serie 6), EU's energimærke", url: eprel("2207568") },
    { name: "EPREL — Bosch WTH8300LSN (Serie 4), EU's energimærke", url: eprel("2114935") },
  ],
  variants: [
    { name: "9 kg (WQB246DSSN)", watts: { off: 0.3 }, kwhPer100Cycles: 92, energyClass: "B", source: 0 },
    { name: "9 kg, black-chrome-dør (WQB246DASN)", watts: { off: 0.3 }, kwhPer100Cycles: 92, energyClass: "B", source: 1 },
    { name: "9 kg, 56 dB (WQB246DLSN)", watts: { off: 0.3 }, kwhPer100Cycles: 92, energyClass: "B", source: 2 },
  ],
  publishDate: "2026-12-01",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie8Toerretumbler;
