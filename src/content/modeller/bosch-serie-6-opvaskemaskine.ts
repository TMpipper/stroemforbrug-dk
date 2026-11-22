import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie6Opvaskemaskine: ModelData = {
  slug: "bosch-serie-6-opvaskemaskine",
  parent: "opvaskemaskine",
  brand: "Bosch",
  name: "Bosch Serie 6 opvaskemaskine",
  released: "2024-09",
  synonyms: [
    "bosch serie 6 opvaskemaskine",
    "bosch opvaskemaskine strømforbrug",
    "bosch serie 6 integrerbar",
    "smu6ecs12e",
    "smv6zcx10e",
    "spv6zmx17e",
    "bosch perfectdry",
    "bosch opvasker 45 cm",
  ],
  title: "Bosch Serie 6 opvaskemaskine strømforbrug (2026) → kWh",
  description:
    "Bosch Serie 6 opvaskemaskine i 60 og 45 cm: energimærkets kWh pr. opvask på eco-programmet, pris om året, PerfectDry mod klasse A og billigste tidspunkt.",
  intro:
    "Inden for samme serie bruger den mest sparsomme Serie 6 en sjettedel mindre strøm end modellerne med PerfectDry — til gengæld tager dens eco-program næsten en time længere.",
  content: `<h2>Hvor meget strøm bruger en Bosch Serie 6?</h2>
<p>Bosch Serie 6 er mellemklassen blandt Bosch' opvaskemaskiner, og modellerne har hver sit energimærke i EU's produktdatabase EPREL. De fire maskiner på siden bruger mellem 54 og 65 kWh pr. 100 opvaske på eco-programmet, altså 0,54–0,65 kWh pr. opvask. Med seks opvaske om ugen bliver det 168–203 kWh om året, svarende til {{kr 168-203}}.</p>
<p>SMU6ECS12E til underbygning har energiklasse A og 54 kWh. SMU6ZCS10E til underbygning og den fuldt integrerbare SMV6ZCX10E har PerfectDry og energiklasse B med 65 kWh. Alle tre tager 14 kuverter og bruger 9 liter vand pr. eco-opvask. Den smalle SPV6ZMX17E på 45 cm tager 10 kuverter og har energiklasse C med 59 kWh.</p>

<h2>PerfectDry eller energiklasse A?</h2>
<p>PerfectDry er Bosch' tørring med zeolit, et mineral, der optager fugt og afgiver varme. Ifølge Bosch' danske datablad giver det dobbelt så gode tørreresultater på plast som en tilsvarende Bosch-maskine uden. Men det er ikke de maskiner, der bruger mindst strøm. SMU6ECS12E uden PerfectDry bruger 11 kWh mindre pr. 100 opvaske end SMU6ZCS10E med. Med seks opvaske om ugen er det omkring 34 kWh om året, svarende til {{kr 34}}.</p>
<p>Prisen for det lave forbrug er tid. Eco-programmet på SMU6ECS12E tager 4 timer og 30 minutter ifølge EPREL, mod 3 timer og 35 minutter på PerfectDry-modellerne. Maskinen bruger længere tid for at kunne vaske ved lavere temperatur, og det er opvarmningen af vandet, der koster strøm — alle fire er tilsluttet med 2.400 W. Kører maskinen alligevel om natten, betyder den ekstra time ikke noget i hverdagen.</p>
<p>PerfectDry-maskinerne er i øvrigt de mest stille med 40 dB mod 42 dB for de to andre.</p>

<h2>Den smalle 45 cm-model</h2>
<p>SPV6ZMX17E på 45 cm bruger 0,59 kWh pr. opvask, altså mindre pr. gang end PerfectDry-modellerne. Men den tager kun 10 kuverter mod 14. Regnet pr. kuvert bruger den smalle maskine omkring 50 % mere end SMU6ECS12E. Har du plads til en 60 cm-maskine, er den mest sparsomme løsning at fylde en stor maskine op og køre den sjældnere. Er køkkenet lille, er 45 cm-modellen stadig et fornuftigt valg; eco-programmet tager 3 timer og 15 minutter.</p>

<h2>Serie 6 mod Siemens iQ500 og andre Bosch-serier</h2>
<p>Bosch og Siemens kommer fra samme koncern, og det ses i tallene. <a href="/opvaskemaskine/siemens-iq500/">Siemens iQ500</a> med Zeolith-tørring bruger ligesom Bosch' PerfectDry-modeller 65 kWh pr. 100 opvaske, med samme programtid på 3:35 og samme 40 dB. Det er reelt den samme teknik under to mærker.</p>
<p>Inden for Bosch' eget program bruger Serie 8-modellen SMD8TCX04E 54 kWh, altså det samme som den mest sparsomme Serie 6, mens Serie 4-modellen SMU4HKS12E med 13 kuverter bruger 74 kWh og har energiklasse C. Det er omkring 62 kWh mere om året end SMU6ECS12E, svarende til {{kr 62}}. Og i EPREL står allerede en nyere Serie 6, SMU6ECS17E, på markedet fra oktober 2026, med 49 kWh pr. 100 opvaske — en tiendedel under SMU6ECS12E.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>Opvaskemaskinen er et af de apparater, der er nemmest at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21 — lige når mange starter maskinen efter aftensmaden. Alle fire Serie 6-modeller har udskudt start, så du kan fylde maskinen om aftenen og lade den køre om natten. Ventetiden er næsten gratis: under forsinket start bruger maskinerne 4 W ifølge EPREL, omkring 0,03 kWh på otte timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>
<p>I standby bruger maskinerne 0,5 W og i netværksforbundet standby 2 W, når de er koblet på wifi via Home Connect. Står de på netværket hele året, er det omkring 17 kWh mod 4 kWh på almindelig standby.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco-programmet som standard; det er det, energimærket er målt på.</li>
<li>Kør kun med fuld maskine — det er den største besparelse pr. kuvert.</li>
<li>Start med udskudt start, så maskinen kører uden for kl. 17–21.</li>
<li>Sammenlign det præcise modelnummer, ikke kun serien: inden for Serie 6 spænder forbruget fra klasse A til C.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Bosch Serie 6 opvaskemaskine?",
      answer:
        "Ifølge energimærket 0,54 kWh pr. opvask på eco-programmet for SMU6ECS12E, 0,65 kWh for SMU6ZCS10E og SMV6ZCX10E med PerfectDry og 0,59 kWh for den smalle SPV6ZMX17E. Det svarer til {{oere 0,54}}–{{oere 0,65}} pr. opvask.",
    },
    {
      question: "Hvad koster en Bosch Serie 6 opvaskemaskine om året?",
      answer: "Med seks opvaske om ugen 168–203 kWh om året afhængigt af modellen, svarende til {{kr 168-203}} ved månedens elpris.",
    },
    {
      question: "Bruger PerfectDry mere strøm?",
      answer:
        "De Serie 6-modeller på siden, der har PerfectDry, har energiklasse B og 65 kWh pr. 100 opvaske, mens SMU6ECS12E uden PerfectDry har klasse A og 54 kWh. Forskellen er omkring 34 kWh om året med seks opvaske om ugen.",
    },
    {
      question: "Hvorfor tager eco-programmet så lang tid?",
      answer:
        "Eco-programmet vasker ved lav temperatur og bruger tiden i stedet. På SMU6ECS12E tager det 4 timer og 30 minutter, på PerfectDry-modellerne 3 timer og 35 minutter ifølge EPREL.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch SMU6ECS12E (Serie 6), EU's energimærke", url: eprel("2015236") },
    { name: "EPREL — Bosch SMU6ZCS10E (Serie 6), EU's energimærke", url: eprel("2100141") },
    { name: "EPREL — Bosch SMV6ZCX10E (Serie 6), EU's energimærke", url: eprel("1576174") },
    { name: "EPREL — Bosch SPV6ZMX17E (Serie 6, 45 cm), EU's energimærke", url: eprel("1249380") },
    { name: "Bosch — SMU6ECS12E, produktdatablad (dansk)", url: sheet("SMU6ECS12E") },
    { name: "Bosch — SMV6ZCX10E, produktdatablad (dansk)", url: sheet("SMV6ZCX10E") },
    { name: "Bosch — SPV6ZMX17E, produktdatablad (dansk)", url: sheet("SPV6ZMX17E") },
    { name: "EPREL — Bosch SMU4HKS12E (Serie 4), EU's energimærke", url: eprel("2496966") },
    { name: "EPREL — Bosch SMD8TCX04E (Serie 8), EU's energimærke", url: eprel("1951361") },
    { name: "EPREL — Bosch SMU6ECS17E (Serie 6, 2026), EU's energimærke", url: eprel("2639032") },
  ],
  variants: [
    { name: "14 kuverter, underbygning (SMU6ECS12E)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 0 },
    { name: "14 kuverter, underbygning, PerfectDry (SMU6ZCS10E)", watts: { standby: 0.5 }, kwhPer100Cycles: 65, energyClass: "B", source: 1 },
    { name: "14 kuverter, integrerbar, PerfectDry (SMV6ZCX10E)", watts: { standby: 0.5 }, kwhPer100Cycles: 65, energyClass: "B", source: 2 },
    { name: "10 kuverter, 45 cm integrerbar (SPV6ZMX17E)", watts: { standby: 0.5 }, kwhPer100Cycles: 59, energyClass: "C", source: 3 },
  ],
  publishDate: "2026-11-27",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet (Eco 50 °C) ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie6Opvaskemaskine;
