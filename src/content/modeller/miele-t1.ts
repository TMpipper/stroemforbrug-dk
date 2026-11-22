import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;

const mieleT1: ModelData = {
  slug: "miele-t1",
  parent: "varmepumpe-toerretumbler",
  brand: "Miele",
  name: "Miele T1 tørretumbler",
  released: "2025-01",
  synonyms: [
    "miele t1",
    "miele t1 tørretumbler",
    "miele varmepumpe tørretumbler",
    "tsa523wp",
    "tsc643wp",
    "twd640wp",
    "miele tørretumbler strømforbrug",
    "miele t1 9 kg",
  ],
  title: "Miele T1 tørretumbler strømforbrug (2026) → kWh pr. tørring",
  description:
    "Miele T1 varmepumpetørretumblere i 8 og 9 kg: energimærkets kWh pr. tørring, pris om året, programtid og hvorfor 9 kg ikke bruger mere pr. kg tøj.",
  intro:
    "Alle tre Miele T1-modeller på siden har energiklasse C og den bedste kondenseringsklasse, A — og 9 kg-modellen bruger præcis det samme pr. kg tøj som 8 kg-modellerne.",
  content: `<h2>Hvor meget strøm bruger en Miele T1?</h2>
<p>Miele T1 er Mieles serie af varmepumpetørretumblere, og hver model har sit eget energimærke i EU's produktdatabase EPREL. Tallene står på det nye energimærke for tørretumblere fra 2025: kWh pr. 100 tørringer på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning. De to 8 kg-modeller, TSA523WP og TSC643WP, bruger 95 kWh pr. 100 tørringer, og 9 kg-modellen TWD640WP bruger 107 kWh.</p>
<p>Med tre tørringer om ugen bliver det omkring 148 kWh om året for 8 kg-modellerne og 167 kWh for 9 kg-modellen, svarende til {{kr 148}} og {{kr 167}}. Pr. tørring er det 0,95 og 1,07 kWh, eller {{kr 0,95}} og {{kr 1,07}}.</p>

<h2>Ens klasse, forskellig kapacitet</h2>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 tørringer</th><th>Program, fuld fyldning</th><th>Halv fyldning</th><th>Slukket</th></tr></thead>
<tbody>
<tr><td>TSA523WP</td><td>8 kg</td><td>95</td><td>2:50</td><td>1:51</td><td>0,5 W</td></tr>
<tr><td>TSC643WP</td><td>8 kg</td><td>95</td><td>2:50</td><td>1:51</td><td>0,3 W</td></tr>
<tr><td>TWD640WP</td><td>9 kg</td><td>107</td><td>3:07</td><td>1:55</td><td>0,3 W</td></tr>
</tbody>
</table>
<p>TSA523WP og TSC643WP har samme forbrug og samme programtid. Forskellen ligger i udstyret: TSC643WP og TWD640WP har netværksforbindelse og bruger 2 W i netværksstandby, mens TSA523WP ikke har et tal for netværksstandby i EPREL. Slukket bruger de to netværksmodeller 0,3 W, TSA523WP 0,5 W.</p>
<p>Regnet pr. kg tøj bruger 9 kg-modellen det samme som 8 kg-modellerne: knap 0,12 kWh pr. kg, regnet på den kapacitet, energimærket angiver. Har I meget vasketøj, er den store model derfor ikke dyrere i drift; den skal bare fyldes. Kører I mest halve fyldninger, er en 8 kg-model nok.</p>

<h2>Kondensering i klasse A</h2>
<p>En varmepumpetumbler opsamler vandet fra tøjet i en beholder eller sender det i afløbet. Den del af fugten, der ikke bliver opsamlet, ender i rummet. Alle tre T1-modeller har en kondenseringseffektivitet på 95 % ifølge EPREL og dermed klasse A, den bedste. Til sammenligning ligger <a href="/varmepumpe-toerretumbler/aeg-7000-toerretumbler/">AEG 7000</a> på 81–91 %. Står tumbleren i et lille bryggers eller badeværelse, betyder det mindre fugt på vægge og vinduer.</p>
<p>Støjen er 64 dB for alle tre, støjklasse B.</p>

<h2>Miele T1 mod AEG 7000 og Bosch</h2>
<p>Blandt de 8 kg-tumblere, vi har modelsider om, er T1 den mest sparsomme. Den mest sparsomme AEG 7000 på 8 kg, TR724P85P, bruger 102 kWh pr. 100 tørringer og har også klasse C, og den mest strømkrævende, TR702K84L, bruger 128 kWh. Med tre tørringer om ugen sparer en 8 kg T1 omkring 11 kWh om året mod den bedste AEG og omkring 51 kWh mod den dårligste, svarende til {{kr 51}}.</p>
<p>Bosch' Serie 8-tumbler WQB246DSSN på 9 kg har energiklasse B og bruger 92 kWh pr. 100 tørringer ifølge EPREL — mindre end både 9 kg T1 og 8 kg T1. Til gengæld tager dens eco-program 4 timer og 25 minutter ved fuld fyldning mod 3 timer og 7 minutter for TWD640WP. Der er altså en afvejning mellem tid og strøm: en langsommere tumbler kan nøjes med en lavere temperatur.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>Tørretumbleren er et af de apparater, der er nemmest at flytte i døgnet. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle tre modeller har udskudt start, hvor ventetiden bruger 4 W ifølge EPREL — omkring 0,03 kWh på otte timer. Fyld tumbleren efter aftensmaden og lad den køre i nattens billige timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>
<p>Husk også vaskemaskinen. Jo bedre den centrifugerer, jo mindre vand skal tumbleren fjerne. Blandt <a href="/vaskemaskine/miele-w1/">Miele W1</a>-maskinerne efterlader dem med centrifugeringsklasse A 44,9 % restfugt mod 53,9 % for dem med klasse B ifølge EPREL.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco-programmet til bomuld; det er det, energimærket er målt på.</li>
<li>Rens fnugfilteret efter hver tørring, så luften kan cirkulere frit.</li>
<li>Sorter efter stoftype, så tumbleren ikke tørrer tyndt tøj længe for de tykke håndklæders skyld.</li>
<li>Slå netværksfunktionen fra, hvis du ikke bruger den; det sparer få kWh om året.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Miele T1 tørretumbler?",
      answer:
        "Ifølge energimærket 0,95 kWh pr. tørring for 8 kg-modellerne TSA523WP og TSC643WP og 1,07 kWh for 9 kg-modellen TWD640WP på eco-programmet. Det svarer til {{kr 0,95}} og {{kr 1,07}} pr. tørring.",
    },
    {
      question: "Hvad koster en Miele T1 om året i strøm?",
      answer: "Med tre tørringer om ugen omkring 148 kWh om året for 8 kg-modellerne og 167 kWh for 9 kg-modellen, svarende til {{kr 148}} og {{kr 167}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Miele T1?",
      answer: "De tre modeller på siden har energiklasse C på det nye energimærke fra 2025 og kondenseringsklasse A med 95 % kondenseringseffektivitet ifølge EPREL.",
    },
    {
      question: "Bruger Miele T1 på 9 kg mere strøm end 8 kg?",
      answer:
        "Pr. tørring ja: 1,07 mod 0,95 kWh. Pr. kg tøj nej — begge bruger knap 0,12 kWh pr. kg. Programmet tager 3 timer og 7 minutter mod 2 timer og 50 minutter.",
    },
    {
      question: "Hvornår er det billigst at bruge tørretumbleren?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Miele TSA523WP 8kg Active, EU's energimærke", url: eprel("2189215") },
    { name: "EPREL — Miele TSC643WP 8 kg, EU's energimærke", url: eprel("2732093") },
    { name: "EPREL — Miele TWD640WP 9 kg, EU's energimærke", url: eprel("2702960") },
  ],
  variants: [
    { name: "8 kg (TSA523WP)", watts: { off: 0.5 }, kwhPer100Cycles: 95, energyClass: "C", source: 0 },
    { name: "8 kg (TSC643WP)", watts: { off: 0.3 }, kwhPer100Cycles: 95, energyClass: "C", source: 1 },
    { name: "9 kg (TWD640WP)", watts: { off: 0.3 }, kwhPer100Cycles: 107, energyClass: "C", source: 2 },
  ],
  publishDate: "2026-11-29",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default mieleT1;
