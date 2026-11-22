import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie2Opvaskemaskine: ModelData = {
  slug: "bosch-serie-2-opvaskemaskine",
  parent: "opvaskemaskine",
  brand: "Bosch",
  name: "Bosch Serie 2 opvaskemaskine",
  released: "2025-10",
  synonyms: [
    "bosch serie 2 opvaskemaskine",
    "bosch serie 2 strømforbrug",
    "smu26aw11s",
    "smu2hvw06e",
    "sms2itw66e",
    "smv2itx16e",
    "spv2hmx02e",
    "bosch fritstående opvaskemaskine",
  ],
  title: "Bosch Serie 2 opvaskemaskine strømforbrug (2026) → kWh",
  description:
    "Bosch Serie 2 opvaskemaskine fritstående, til underbygning og integrerbar: energimærkets kWh pr. opvask, pris om året mod Serie 4 og billigste tidspunkt.",
  intro:
    "Serie 2 er Bosch' indgangsserie, og det ses på energimærket: ingen af de fem modeller på siden har bedre end klasse C — to af dem har klasse E.",
  content: `<h2>Hvor meget strøm bruger en Bosch Serie 2?</h2>
<p>Bosch Serie 2 er den enkleste serie i Bosch' opvaskemaskiner, og den findes i alle tre typer: fritstående, til underbygning og fuldt integrerbar. De fem modeller på siden har hver sit energimærke i EU's produktdatabase EPREL og bruger mellem 67 og 92 kWh pr. 100 opvaske på eco-programmet. Med seks opvaske om ugen bliver det 209–287 kWh om året, svarende til {{kr 209-287}}.</p>
<table>
<thead><tr><th>Model</th><th>Type</th><th>Kuverter</th><th>Klasse</th><th>kWh pr. 100 opvaske</th><th>Eco-program</th></tr></thead>
<tbody>
<tr><td>SMU2HVW06E</td><td>Underbygning, 60 cm</td><td>14</td><td>C</td><td>75</td><td>4:55</td></tr>
<tr><td>SMS2ITW66E</td><td>Fritstående, 60 cm</td><td>12</td><td>D</td><td>82</td><td>4:30</td></tr>
<tr><td>SMU26AW11S</td><td>Underbygning, 60 cm</td><td>12</td><td>E</td><td>92</td><td>3:30</td></tr>
<tr><td>SMV2ITX16E</td><td>Integrerbar, 60 cm</td><td>12</td><td>E</td><td>92</td><td>4:30</td></tr>
<tr><td>SPV2HMX02E</td><td>Integrerbar, 45 cm</td><td>10</td><td>D</td><td>67</td><td>4:35</td></tr>
</tbody>
</table>
<p>SMU2HVW06E skiller sig ud: den tager 14 kuverter og har klasse C, og regnet pr. kuvert bruger den knap en tredjedel mindre end de to E-modeller med 12 kuverter. Den fritstående SMS2ITW66E kom i EPREL i oktober 2026 med klasse D og 82 kWh.</p>

<h2>Billig i indkøb, dyrere i drift</h2>
<p>Forskellen til de mere sparsomme serier er til at regne ud. <a href="/opvaskemaskine/bosch-serie-4-opvaskemaskine/">Bosch Serie 4</a>-modellen SMU4ECS28E har klasse A og 54 kWh pr. 100 opvaske. Mod SMU26AW11S med 92 kWh er det 38 kWh pr. 100 opvaske, eller omkring 119 kWh om året med seks opvaske om ugen, svarende til {{kr 119}} hvert år. Holder maskinen i ti år, er det ti gange beløbet, og det æder en stor del af prisforskellen ved indkøbet.</p>
<p>Mod SMU2HVW06E med klasse C er forskellen til Serie 4's klasse A 66 kWh om året, svarende til {{kr 66}}. Vil du have en billig Serie 2, er det altså den, der bruger mindst af de fem — især hvis du kører mange opvaske. Kører du kun tre-fire om ugen, betyder forskellen mindre.</p>

<h2>Hurtig eco koster strøm</h2>
<p>SMU26AW11S har det korteste eco-program på siden: 3 timer og 30 minutter ifølge EPREL. Det er en time kortere end de fleste andre Serie 2-modeller, men den bruger også 92 kWh. Det er det typiske bytte i opvaskemaskiner: et kort program skal varme vandet mere op for at blive færdigt, og det er opvarmningen, der koster strøm. Modsat har SMU2HVW06E med klasse C det længste program på 4 timer og 55 minutter.</p>
<p>Den integrerbare SMV2ITX16E fra 2020 bruger også 92 kWh og har det højeste vandforbrug med 10,5 liter og 50 dB. Er det den, du har i køkkenet i dag, giver et skifte til en klasse A-maskine som <a href="/opvaskemaskine/bosch-serie-8-opvaskemaskine/">Bosch Serie 8</a> eller Serie 4 de 119 kWh om året, der er regnet ovenfor.</p>

<h2>Standby, wifi og den smalle model</h2>
<p>SMU26AW11S har ingen Home Connect ifølge Bosch' datablad og bruger 0,1 W i standby. De andre fire har Home Connect og bruger 0,5 W i standby og 2 W i netværksforbundet standby. Under udskudt start bruger alle 4 W. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>
<p>Den smalle SPV2HMX02E på 45 cm har klasse D og 67 kWh med 10 kuverter, samme energimærke som Serie 4's 45 cm-model. Pr. kuvert bruger den omkring en fjerdedel mere end SMU2HVW06E.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>Jo mere en opvask bruger, jo mere er der at hente ved at flytte den. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen, og start den med udskudt start, så den kører om natten. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Regn driften med, når du sammenligner prisen på en Serie 2 med en Serie 4.</li>
<li>Vælg en model med 14 kuverter, hvis I er mange — fuld maskine er billigere pr. kuvert.</li>
<li>Brug eco som standard; hurtigprogrammer og VarioSpeed bruger mere.</li>
<li>Start om aftenen med udskudt start, så maskinen kører uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Bosch Serie 2 opvaskemaskine?",
      answer:
        "Ifølge energimærket 0,75 kWh pr. opvask for SMU2HVW06E, 0,82 kWh for SMS2ITW66E, 0,92 kWh for SMU26AW11S og SMV2ITX16E og 0,67 kWh for 45 cm-modellen SPV2HMX02E. Det svarer til {{oere 0,67}}–{{oere 0,92}} pr. opvask.",
    },
    {
      question: "Hvad koster en Bosch Serie 2 om året i strøm?",
      answer: "Med seks opvaske om ugen 209–287 kWh om året afhængigt af modellen, svarende til {{kr 209-287}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Bosch SMU26AW11S?",
      answer: "Energiklasse E med 92 kWh pr. 100 opvaske og 12 kuverter ifølge EPREL. Eco-programmet tager 3 timer og 30 minutter.",
    },
    {
      question: "Hvor meget sparer en Serie 4 med klasse A i forhold til Serie 2?",
      answer:
        "Mod SMU26AW11S omkring 119 kWh om året med seks opvaske om ugen, svarende til {{kr 119}}. Mod SMU2HVW06E med klasse C omkring 66 kWh om året.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch SMU2HVW06E (Serie 2), EU's energimærke", url: eprel("2352799") },
    { name: "EPREL — Bosch SMS2ITW66E (Serie 2), EU's energimærke", url: eprel("2613414") },
    { name: "EPREL — Bosch SMU26AW11S (Serie 2), EU's energimærke", url: eprel("2302227") },
    { name: "EPREL — Bosch SMV2ITX16E (Serie 2), EU's energimærke", url: eprel("250699") },
    { name: "EPREL — Bosch SPV2HMX02E (Serie 2, 45 cm), EU's energimærke", url: eprel("2357547") },
    { name: "Bosch — SMU2HVW06E, produktdatablad (dansk)", url: sheet("SMU2HVW06E") },
    { name: "Bosch — SMS2ITW66E, produktdatablad (dansk)", url: sheet("SMS2ITW66E") },
    { name: "Bosch — SMU26AW11S, produktdatablad (dansk)", url: sheet("SMU26AW11S") },
    { name: "Bosch — SMV2ITX16E, produktdatablad (dansk)", url: sheet("SMV2ITX16E") },
    { name: "Bosch — SPV2HMX02E, produktdatablad (dansk)", url: sheet("SPV2HMX02E") },
    { name: "EPREL — Bosch SMU4ECS28E (Serie 4), EU's energimærke", url: eprel("1956206") },
  ],
  variants: [
    { name: "14 kuverter, underbygning (SMU2HVW06E)", watts: { standby: 0.5 }, kwhPer100Cycles: 75, energyClass: "C", source: 0 },
    { name: "12 kuverter, fritstående (SMS2ITW66E)", watts: { standby: 0.5 }, kwhPer100Cycles: 82, energyClass: "D", source: 1 },
    { name: "12 kuverter, underbygning (SMU26AW11S)", watts: { standby: 0.1 }, kwhPer100Cycles: 92, energyClass: "E", source: 2 },
    { name: "12 kuverter, integrerbar (SMV2ITX16E)", watts: { standby: 0.5 }, kwhPer100Cycles: 92, energyClass: "E", source: 3 },
    { name: "10 kuverter, 45 cm integrerbar (SPV2HMX02E)", watts: { standby: 0.5 }, kwhPer100Cycles: 67, energyClass: "D", source: 4 },
  ],
  publishDate: "2026-12-16",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet (Eco 50 °C) ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie2Opvaskemaskine;
