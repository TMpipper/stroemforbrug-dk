import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie4Opvaskemaskine: ModelData = {
  slug: "bosch-serie-4-opvaskemaskine",
  parent: "opvaskemaskine",
  brand: "Bosch",
  name: "Bosch Serie 4 opvaskemaskine",
  released: "2026-04",
  synonyms: [
    "bosch serie 4 opvaskemaskine",
    "bosch serie 4 strømforbrug",
    "smu4hks12e",
    "smu4ecs28e",
    "smv4hcx07e",
    "smu4hms07e",
    "spv4hmx12e",
    "bosch opvaskemaskine underbygning",
  ],
  title: "Bosch Serie 4 opvaskemaskine strømforbrug (2026) → kWh",
  description:
    "Bosch Serie 4 opvaskemaskine i 60 og 45 cm: energimærkets kWh pr. opvask fra klasse A til D, pris om året, EfficientDry og billigste tidspunkt.",
  intro:
    "To Serie 4-maskiner på siden har samme mål, samme 14 kuverter og samme programtid på eco — men den ene bruger 57 % mere strøm pr. opvask end den anden.",
  content: `<h2>Hvor meget strøm bruger en Bosch Serie 4?</h2>
<p>Bosch Serie 4 ligger mellem Serie 2 og Serie 6 i Bosch' opvaskemaskiner, og modellerne er registreret hver for sig i EU's produktdatabase EPREL. De fem maskiner på siden bruger mellem 54 og 85 kWh pr. 100 opvaske på eco-programmet, altså 0,54–0,85 kWh pr. opvask. Med seks opvaske om ugen bliver det 168–265 kWh om året, svarende til {{kr 168-265}}.</p>
<table>
<thead><tr><th>Model</th><th>Type</th><th>Kuverter</th><th>Klasse</th><th>kWh pr. 100 opvaske</th><th>Eco-program</th></tr></thead>
<tbody>
<tr><td>SMU4ECS28E</td><td>Underbygning, 60 cm</td><td>14</td><td>A</td><td>54</td><td>4:30</td></tr>
<tr><td>SMU4HKS12E</td><td>Underbygning, 60 cm</td><td>13</td><td>C</td><td>74</td><td>4:55</td></tr>
<tr><td>SMV4HCX07E</td><td>Integrerbar, 60 cm</td><td>14</td><td>C</td><td>75</td><td>4:55</td></tr>
<tr><td>SMU4HMS07E</td><td>Underbygning, 60 cm</td><td>14</td><td>D</td><td>85</td><td>4:30</td></tr>
<tr><td>SPV4HMX12E</td><td>Integrerbar, 45 cm</td><td>10</td><td>D</td><td>67</td><td>4:35</td></tr>
</tbody>
</table>

<h2>Samme tid på eco, forskelligt forbrug</h2>
<p>Normalt købes et lavt forbrug med et længere program: maskinen vasker ved lavere temperatur og bruger tiden i stedet. Serie 4 viser, at det ikke altid holder. SMU4ECS28E med klasse A og SMU4HMS07E med klasse D har begge et eco-program på 4 timer og 30 minutter ifølge EPREL og tager begge 14 kuverter og 9 liter vand. Alligevel bruger D-modellen 31 kWh mere pr. 100 opvaske. Med seks opvaske om ugen er det omkring 97 kWh om året, svarende til {{kr 97}} hvert år.</p>
<p>Forklaringen står i Bosch' danske datablad: SMU4ECS28E har EfficientDry og en varmeudveksler. Varmeudveksleren genbruger varme fra vasken, og EfficientDry åbner lågen automatisk til sidst, så servicet tørrer med restvarmen i stedet for ekstra opvarmning. Det er teknik, der koster i indkøb, men som tjener sig ind på strømmen over maskinens levetid.</p>
<p>De to C-modeller, SMU4HKS12E og den fuldt integrerbare SMV4HCX07E, ligger midt imellem med 74 og 75 kWh, men har det længste eco-program på 4 timer og 55 minutter. SMU4HKS12E tager 13 kuverter mod 14 og larmer 44 dB mod 42 dB for de andre 60 cm-modeller.</p>

<h2>Den smalle 45 cm-model</h2>
<p>SPV4HMX12E på 45 cm bruger 0,67 kWh pr. opvask og 8,9 liter vand. Pr. gang er det mindre end de store D- og C-modeller, men den tager kun 10 kuverter. Regnet pr. kuvert bruger den omkring 74 % mere end SMU4ECS28E. Har du plads til 60 cm, er en stor maskine med klasse A og fuld kurv det mest sparsomme valg; i et lille køkken er 45 cm-modellen stadig fornuftig, så længe den køres fuld.</p>

<h2>Serie 4 mod Serie 6 og Siemens iQ300</h2>
<p>SMU4ECS28E har samme energimærke som den mest sparsomme <a href="/opvaskemaskine/bosch-serie-6-opvaskemaskine/">Bosch Serie 6</a>, SMU6ECS12E: klasse A, 54 kWh og 4 timer og 30 minutter. Den samme kombination findes hos søstermærket <a href="/opvaskemaskine/siemens-iq300-opvaskemaskine/">Siemens iQ300</a> i SN63EX22CE og SN43ES22CE. På strømmen er der altså ingen forskel mellem de tre serier, når energiklassen er den samme — prisforskellen handler om funktioner som tørring, kurve og design.</p>
<p>Omvendt kan en Serie 4 bruge mere end en Serie 6 med PerfectDry, som har klasse B og 65 kWh. SMU4HMS07E med 85 kWh bruger omkring 62 kWh mere om året end de Serie 6-modeller, svarende til {{kr 62}}. Serienummeret siger altså ikke meget om strømmen; energimærket gør.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>Alle fem Serie 4-modeller har Home Connect og udskudt start, og ifølge databladene kan nogle af dem bruge Smart Start, der vælger starttidspunktet via appen. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen, og lad den køre om natten. Under ventetiden bruger maskinerne 4 W ifølge EPREL, i standby 0,5 W og på wifi 2 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Se efter energiklassen og ikke kun serien: Serie 4 spænder fra A til D.</li>
<li>Kør eco som standard; VarioSpeed og ExtraDry gør programmet hurtigere eller tørrere, men bruger mere.</li>
<li>Fyld maskinen helt, før du starter den.</li>
<li>Start med udskudt start, så maskinen kører uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Bosch Serie 4 opvaskemaskine?",
      answer:
        "Ifølge energimærket 0,54 kWh pr. opvask for SMU4ECS28E, 0,74–0,75 kWh for SMU4HKS12E og SMV4HCX07E, 0,85 kWh for SMU4HMS07E og 0,67 kWh for den smalle SPV4HMX12E. Det svarer til {{oere 0,54}}–{{oere 0,85}} pr. opvask.",
    },
    {
      question: "Hvad koster en Bosch Serie 4 om året i strøm?",
      answer: "Med seks opvaske om ugen 168–265 kWh om året afhængigt af modellen, svarende til {{kr 168-265}} ved månedens elpris.",
    },
    {
      question: "Hvilken Bosch Serie 4 bruger mindst strøm?",
      answer:
        "Af de fem modeller på siden SMU4ECS28E med energiklasse A og 54 kWh pr. 100 opvaske. Den har EfficientDry og varmeudveksler ifølge Bosch' datablad.",
    },
    {
      question: "Hvad er forskellen på SMU4HKS12E og SMU4ECS28E?",
      answer:
        "SMU4HKS12E har klasse C, 13 kuverter og 74 kWh pr. 100 opvaske; SMU4ECS28E har klasse A, 14 kuverter og 54 kWh. Med seks opvaske om ugen er forskellen omkring 62 kWh om året.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch SMU4ECS28E (Serie 4), EU's energimærke", url: eprel("1956206") },
    { name: "EPREL — Bosch SMU4HKS12E (Serie 4), EU's energimærke", url: eprel("2496966") },
    { name: "EPREL — Bosch SMV4HCX07E (Serie 4), EU's energimærke", url: eprel("2143481") },
    { name: "EPREL — Bosch SMU4HMS07E (Serie 4), EU's energimærke", url: eprel("2496965") },
    { name: "EPREL — Bosch SPV4HMX12E (Serie 4, 45 cm), EU's energimærke", url: eprel("2346944") },
    { name: "Bosch — SMU4ECS28E, produktdatablad (dansk)", url: sheet("SMU4ECS28E") },
    { name: "Bosch — SMU4HKS12E, produktdatablad (dansk)", url: sheet("SMU4HKS12E") },
    { name: "Bosch — SMV4HCX07E, produktdatablad (dansk)", url: sheet("SMV4HCX07E") },
    { name: "Bosch — SMU4HMS07E, produktdatablad (dansk)", url: sheet("SMU4HMS07E") },
    { name: "Bosch — SPV4HMX12E, produktdatablad (dansk)", url: sheet("SPV4HMX12E") },
  ],
  variants: [
    { name: "14 kuverter, underbygning (SMU4ECS28E)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 0 },
    { name: "13 kuverter, underbygning (SMU4HKS12E)", watts: { standby: 0.5 }, kwhPer100Cycles: 74, energyClass: "C", source: 1 },
    { name: "14 kuverter, integrerbar (SMV4HCX07E)", watts: { standby: 0.5 }, kwhPer100Cycles: 75, energyClass: "C", source: 2 },
    { name: "14 kuverter, underbygning (SMU4HMS07E)", watts: { standby: 0.5 }, kwhPer100Cycles: 85, energyClass: "D", source: 3 },
    { name: "10 kuverter, 45 cm integrerbar (SPV4HMX12E)", watts: { standby: 0.5 }, kwhPer100Cycles: 67, energyClass: "D", source: 4 },
  ],
  publishDate: "2026-12-13",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet (Eco 50 °C) ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie4Opvaskemaskine;
