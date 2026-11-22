import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;

const samsungDv90dg: ModelData = {
  slug: "samsung-dv90dg",
  parent: "varmepumpe-toerretumbler",
  brand: "Samsung",
  name: "Samsung DV90DG tørretumbler",
  released: "2025-01",
  synonyms: [
    "samsung dv90dg",
    "samsung dv90dg6845le",
    "samsung dv90dg6845hh",
    "samsung dv90dg52a0ae",
    "samsung dv90dg52a0te",
    "samsung tørretumbler strømforbrug",
    "samsung varmepumpe tørretumbler 9 kg",
    "samsung tørretumbler energiklasse a",
  ],
  title: "Samsung DV90DG strømforbrug (2026) → tørretumbler i kWh",
  description:
    "Samsung DV90DG varmepumpetørretumblere på 9 kg: energimærkets kWh pr. tørring i klasse A og C, pris om året, og hvad den langsomme A-model sparer.",
  intro:
    "DV90DG6845 har energiklasse A på det nye mærke for tørretumblere: 0,79 kWh pr. tørring — en fjerdedel mindre end DV90DG52A0 i samme størrelse.",
  content: `<h2>Hvor meget strøm bruger en Samsung DV90DG tørretumbler?</h2>
<p>Samsung DV90DG er en serie kondenstørretumblere med varmepumpe på 9 kg. I EU's produktdatabase EPREL findes de i to udgaver med hver sit energimærke: DV90DG6845 i energiklasse A med 79 kWh pr. 100 tørringer, og DV90DG52A0 i klasse C med 105 kWh. Bogstaverne til sidst i modelnummeret (LE, HH, AE, TE og flere) skiller udgaverne ad; ifølge EPREL er forbruget det samme inden for hver af de to.</p>
<p>Med tre tørringer om ugen bruger DV90DG6845 omkring 123 kWh om året og DV90DG52A0 omkring 164 kWh, svarende til {{kr 123}} og {{kr 164}}. Forskellen er 41 kWh om året, svarende til {{kr 41}}.</p>

<h2>Klasse A og klasse C side om side</h2>
<table>
<thead><tr><th>Model</th><th>kWh pr. 100 tørringer</th><th>Klasse</th><th>Program, fuld / halv</th><th>Kondensering</th><th>Kølemiddel</th></tr></thead>
<tbody>
<tr><td>DV90DG6845LE / HH</td><td>79</td><td>A</td><td>4:45 / 2:40</td><td>88 %, klasse B</td><td>R290</td></tr>
<tr><td>DV90DG52A0AE / TE</td><td>105</td><td>C</td><td>3:40 / 2:20</td><td>87 %, klasse C</td><td>R134a</td></tr>
</tbody>
</table>
<p>A-udgaven sparer strøm ved at tage sig tid: en fuld eco-tørring varer 4 timer og 45 minutter mod 3 timer og 40 minutter for C-udgaven. En varmepumpe, der arbejder langsommere, kan typisk flytte fugten med mindre energi. Det er det samme princip som eco-programmet på en vaskemaskine. Til gengæld skal du planlægge lidt mere: en fuld maskine om aftenen er tør om natten, ikke inden aftensmaden.</p>
<p>De to udgaver bruger også forskellige kølemidler i varmepumpen ifølge EPREL: DV90DG6845 propan (R290), DV90DG52A0 R134a. Begge har 64 dB og støjklasse B, og begge kan kobles på nettet med 2 W i netværksforbundet standby. Slukket bruger de 0,5 W.</p>

<h2>DV90DG mod de andre tumblere på siden</h2>
<p>Med 79 kWh pr. 100 tørringer er DV90DG6845 den mest sparsomme af de varmepumpetørretumblere, vi har modelsider for. <a href="/varmepumpe-toerretumbler/bosch-serie-6-toerretumbler/">Bosch Serie 6</a> bruger 110–128 kWh, <a href="/varmepumpe-toerretumbler/miele-t1/">Miele T1</a> 95–107 kWh og Bosch Serie 8 92 kWh. Over for en Bosch Serie 6 i klasse D sparer DV90DG6845 49 kWh pr. 100 tørringer — med tre tørringer om ugen omkring 76 kWh om året, svarende til {{kr 76}}.</p>
<p>DV90DG52A0 i klasse C ligger på niveau med Miele T1 på 9 kg og lidt over Bosch Serie 8. Samsungs 8 kg-søskende, DV80DG52B0, bruger 95 kWh pr. 100 tørringer i klasse C ifølge EPREL.</p>

<h2>Reparation og levetid</h2>
<p>Det nye EU-mærke for tørretumblere viser også en reparationsklasse. Samsung har oplyst reparationsklasse A for DV90DG6845 og for DV90DG52A0AE til EPREL, med et reparationsindeks på henholdsvis 9,07 og 8,35. Det handler ikke om strøm, men en tumbler, der kan repareres, holder længere — og det er godt for både økonomien og miljøet.</p>

<h2>Centrifugér godt, og rens filteret</h2>
<p>Tumblerens forbrug afhænger af, hvor vådt tøjet er. Vælg den højeste centrifugering, tøjet tåler, før det kommer i tumbleren; en vaskemaskine i centrifugeringsklasse A efterlader under 45 % restfugt, klasse B 45–54 %. Rens fnugfilteret efter hver tørring, og følg Samsungs anvisning for kondensatoren og vandbeholderen. Brug eco-programmet til bomuld — det er det, energimærket er målt på.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>En tørretumbler er let at flytte til billige timer, fordi tøjet kan vente i tromlen. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Med udskudt start kan du sætte tørringen til at køre om natten; ventetiden koster 4 W ifølge EPREL, eller omkring 0,03 kWh på otte timer. Det passer godt til A-udgavens lange program. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg DV90DG6845, hvis du tørrer meget: den bruger en fjerdedel mindre end DV90DG52A0.</li>
<li>Start den lange eco-tørring om aftenen eller natten.</li>
<li>Fyld op til 9 kg, men ikke mere.</li>
<li>Slå netværksforbindelsen fra, hvis du ikke bruger appen.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Samsung DV90DG6845LE pr. tørring?",
      answer: "0,79 kWh pr. tørring på eco-programmet ifølge energimærket (79 kWh pr. 100 tørringer, klasse A). Det svarer til {{kr 0,79}} pr. tørring ved månedens elpris.",
    },
    {
      question: "Hvad koster en Samsung DV90DG tørretumbler om året?",
      answer: "Med tre tørringer om ugen bruger DV90DG6845 omkring 123 kWh og DV90DG52A0 omkring 164 kWh om året, svarende til {{kr 123}} og {{kr 164}}.",
    },
    {
      question: "Hvad er forskellen på DV90DG6845 og DV90DG52A0?",
      answer: "Energiklassen og tiden. DV90DG6845 har klasse A og bruger 79 kWh pr. 100 tørringer, men tager 4:45 for en fuld eco-tørring. DV90DG52A0 har klasse C, bruger 105 kWh og tager 3:40.",
    },
    {
      question: "Hvorfor tager Samsung DV90DG6845 så lang tid?",
      answer: "Typisk fordi en varmepumpe, der arbejder langsomt, bruger mindre strøm pr. kg tøj. Fuld fyldning tager 4 timer og 45 minutter, halv 2 timer og 40 minutter ifølge EPREL.",
    },
    {
      question: "Hvornår er det billigst at tørre tøj?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Udskudt start lader tumbleren vente for 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung DV90DG6845LE, EU's energimærke", url: eprel("2195726") },
    { name: "EPREL — Samsung DV90DG6845HH, EU's energimærke", url: eprel("2195724") },
    { name: "EPREL — Samsung DV90DG52A0AE, EU's energimærke", url: eprel("2182138") },
    { name: "EPREL — Samsung DV90DG52A0TE, EU's energimærke", url: eprel("2182141") },
    { name: "EPREL — Samsung DV80DG52B0AE (8 kg), EU's energimærke", url: eprel("2498455") },
  ],
  variants: [
    { name: "9 kg (DV90DG6845LE)", watts: { off: 0.5 }, kwhPer100Cycles: 79, energyClass: "A", source: 0 },
    { name: "9 kg (DV90DG6845HH)", watts: { off: 0.5 }, kwhPer100Cycles: 79, energyClass: "A", source: 1 },
    { name: "9 kg (DV90DG52A0AE)", watts: { off: 0.5 }, kwhPer100Cycles: 105, energyClass: "C", source: 2 },
    { name: "9 kg (DV90DG52A0TE)", watts: { off: 0.5 }, kwhPer100Cycles: 105, energyClass: "C", source: 3 },
  ],
  publishDate: "2026-12-05",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default samsungDv90dg;
