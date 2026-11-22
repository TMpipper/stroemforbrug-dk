import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const siemensIq300Opvaskemaskine: ModelData = {
  slug: "siemens-iq300-opvaskemaskine",
  parent: "opvaskemaskine",
  brand: "Siemens",
  name: "Siemens iQ300 opvaskemaskine",
  released: "2025-09",
  synonyms: [
    "siemens iq300",
    "siemens iq300 opvaskemaskine",
    "siemens iq300 strømforbrug",
    "sn63ex22ce",
    "sn43es22ce",
    "sn63hx16ce",
    "sn43hw01vs",
    "siemens opvaskemaskine integrerbar",
  ],
  title: "Siemens iQ300 opvaskemaskine strømforbrug (2026) → A til E",
  description:
    "Siemens iQ300 opvaskemaskiner med energiklasse A, C og E: kWh pr. opvask på eco-programmet, pris om året, forskellen i kroner og billigste tidspunkt.",
  intro:
    "Samme serie, samme 60 cm og næsten samme kurve — men den mest strømkrævende iQ300 på siden bruger 74 % mere pr. opvask end de to modeller med energiklasse A.",
  content: `<h2>Hvor meget strøm bruger en Siemens iQ300?</h2>
<p>Siemens iQ300 er seriens mellemtrin under iQ500 og iQ700, og der står mange modeller under navnet. Fire af dem er på siden, alle med dansk datablad, og hver har sit eget energimærke i EU's produktdatabase EPREL. På eco-programmet bruger de mellem 54 og 94 kWh pr. 100 opvaske, altså 0,54–0,94 kWh pr. opvask. Med seks opvaske om ugen bliver det 168–293 kWh om året, svarende til {{kr 168-293}}.</p>
<p>SN63EX22CE (fuldt integrerbar) og SN43ES22CE (til underbygning med front i børstet stål) har energiklasse A og 54 kWh. SN63HX16CE er også fuldt integrerbar, men har energiklasse C og 75 kWh. SN43HW01VS til underbygning med hvid front har energiklasse E og 94 kWh og tager 13 kuverter mod 14 for de tre andre.</p>

<h2>Klasse A, C eller E: hvad koster forskellen?</h2>
<table>
<thead><tr><th>Model</th><th>Type</th><th>Klasse</th><th>kWh pr. 100 opvaske</th><th>Eco-program</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>SN63EX22CE</td><td>Integrerbar, 14 kuverter</td><td>A</td><td>54</td><td>4:30</td><td>168</td></tr>
<tr><td>SN43ES22CE</td><td>Underbygning, 14 kuverter</td><td>A</td><td>54</td><td>4:30</td><td>168</td></tr>
<tr><td>SN63HX16CE</td><td>Integrerbar, 14 kuverter</td><td>C</td><td>75</td><td>4:55</td><td>234</td></tr>
<tr><td>SN43HW01VS</td><td>Underbygning, 13 kuverter</td><td>E</td><td>94</td><td>3:45</td><td>293</td></tr>
</tbody>
</table>
<p>Mellem klasse A og klasse E er der 125 kWh om året med seks opvaske om ugen, svarende til {{kr 125}} hvert år. Holder maskinen i ti år, løber forskellen op i ti gange det beløb, og det er værd at regne med, når du sammenligner indkøbsprisen. Mellem klasse A og den integrerbare C-model er forskellen 66 kWh om året, svarende til {{kr 66}}.</p>
<p>Læg mærke til programtiden. SN43HW01VS med klasse E er den hurtigste med 3 timer og 45 minutter på eco, mens A-modellerne tager 4 timer og 30 minutter ifølge EPREL. Det er det typiske bytte: et længere program kan vaske ved lavere temperatur, og det er opvarmningen af vandet, der koster strømmen. Alle fire er tilsluttet med 2.400 W ifølge Siemens' danske datablade, så det er tiden ved høj effekt, der gør forskellen. SN63HX16CE skiller sig ud ved at være både langsommere og mere strømkrævende end A-modellerne: 4 timer og 55 minutter og 75 kWh.</p>

<h2>iQ300 mod iQ500 og Bosch</h2>
<p>A-modellerne i iQ300 bruger faktisk mindre strøm end <a href="/opvaskemaskine/siemens-iq500/">Siemens iQ500</a>, hvor de tre modeller på vores side alle har energiklasse B og 65 kWh pr. 100 opvaske. Det er omkring 34 kWh om året i iQ300's favør, svarende til {{kr 34}}. Til gengæld har iQ500 Zeolith-tørring, som ifølge Siemens tørrer plast bedre, og et eco-program på 3 timer og 35 minutter.</p>
<p>Siemens og Bosch kommer fra samme koncern, og tallene går igen. Den mest sparsomme <a href="/opvaskemaskine/bosch-serie-6-opvaskemaskine/">Bosch Serie 6</a>, SMU6ECS12E, har også klasse A, 54 kWh og et eco-program på 4 timer og 30 minutter. Vælger du mellem de to mærker, er det derfor funktioner, front og design, der skiller dem ad — ikke strømmen, så længe energiklassen er den samme.</p>

<h2>Vand, støj og ventetid</h2>
<p>De tre 14-kuverts-modeller bruger 9 liter vand pr. eco-opvask og larmer 42 dB. SN43HW01VS bruger 9,5 liter og larmer 44 dB. Alle fire har Home Connect, så de kan styres fra telefonen, og varioSpeed Plus, der gør programmet hurtigere mod et højere forbrug. Brug kun hurtigfunktionen, når du har brug for det, for energimærket gælder eco-programmet uden tillæg.</p>
<p>I standby bruger maskinerne 0,5 W og i netværksforbundet standby 2 W ifølge EPREL. Står de på wifi hele året, er det omkring 17 kWh mod 4 kWh på almindelig standby. Under udskudt start bruger de 4 W, altså 0,03 kWh på otte timers ventetid. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>En opvaskemaskine er nem at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21, lige når mange starter maskinen efter aftensmaden. Fyld maskinen om aftenen, og lad tidsforvalget starte den om natten eller tidligt om morgenen. Med klasse E-modellen er der mest at hente ved at flytte opvasken, fordi hver opvask bruger 0,94 kWh. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Sammenlign det præcise modelnummer: inden for iQ300 spænder energiklassen fra A til E.</li>
<li>Kør eco-programmet som standard og kun med fuld maskine.</li>
<li>Brug varioSpeed Plus og intensivprogrammet, når der er brug for dem, ikke hver dag.</li>
<li>Start med tidsforvalg, så maskinen kører uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Siemens iQ300 opvaskemaskine?",
      answer:
        "Ifølge energimærket 0,54 kWh pr. opvask på eco-programmet for SN63EX22CE og SN43ES22CE, 0,75 kWh for SN63HX16CE og 0,94 kWh for SN43HW01VS. Det svarer til {{oere 0,54}}–{{oere 0,94}} pr. opvask.",
    },
    {
      question: "Hvad koster en Siemens iQ300 om året i strøm?",
      answer: "Med seks opvaske om ugen 168–293 kWh om året afhængigt af modellen, svarende til {{kr 168-293}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Siemens iQ300?",
      answer:
        "Det afhænger af modellen. SN63EX22CE og SN43ES22CE har klasse A, SN63HX16CE klasse C og SN43HW01VS klasse E ifølge EPREL.",
    },
    {
      question: "Bruger iQ300 mere strøm end iQ500?",
      answer:
        "Ikke nødvendigvis. iQ300-modellerne med klasse A bruger 54 kWh pr. 100 opvaske mod 65 kWh for iQ500-modellerne med klasse B, mens SN43HW01VS i iQ300 bruger 94 kWh.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug tidsforvalget; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Siemens SN63EX22CE (iQ300), EU's energimærke", url: eprel("1956205") },
    { name: "EPREL — Siemens SN43ES22CE (iQ300), EU's energimærke", url: eprel("1969573") },
    { name: "EPREL — Siemens SN63HX16CE (iQ300), EU's energimærke", url: eprel("2255851") },
    { name: "EPREL — Siemens SN43HW01VS (iQ300), EU's energimærke", url: eprel("1872212") },
    { name: "Siemens — SN63EX22CE, produktdatablad (dansk)", url: sheet("SN63EX22CE") },
    { name: "Siemens — SN43ES22CE, produktdatablad (dansk)", url: sheet("SN43ES22CE") },
    { name: "Siemens — SN63HX16CE, produktdatablad (dansk)", url: sheet("SN63HX16CE") },
    { name: "Siemens — SN43HW01VS, produktdatablad (dansk)", url: sheet("SN43HW01VS") },
    { name: "EPREL — Siemens SN65ZX16CE (iQ500), EU's energimærke", url: eprel("2075234") },
    { name: "EPREL — Bosch SMU6ECS12E (Serie 6), EU's energimærke", url: eprel("2015236") },
  ],
  variants: [
    { name: "14 kuverter, integrerbar (SN63EX22CE)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 0 },
    { name: "14 kuverter, underbygning (SN43ES22CE)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 1 },
    { name: "14 kuverter, integrerbar (SN63HX16CE)", watts: { standby: 0.5 }, kwhPer100Cycles: 75, energyClass: "C", source: 2 },
    { name: "13 kuverter, underbygning (SN43HW01VS)", watts: { standby: 0.5 }, kwhPer100Cycles: 94, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-12",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet (Eco 50 °C) ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default siemensIq300Opvaskemaskine;
