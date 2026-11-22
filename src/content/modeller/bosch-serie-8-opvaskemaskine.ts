import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie8Opvaskemaskine: ModelData = {
  slug: "bosch-serie-8-opvaskemaskine",
  parent: "opvaskemaskine",
  brand: "Bosch",
  name: "Bosch Serie 8 opvaskemaskine",
  released: "2024-09",
  synonyms: [
    "bosch serie 8 opvaskemaskine",
    "bosch serie 8 strømforbrug",
    "smd8tcx04e",
    "smv8ycx02e",
    "sbd8tcx04e",
    "smu8ycs04e",
    "bosch zeolith opvaskemaskine",
    "bosch perfectdry klasse a",
  ],
  title: "Bosch Serie 8 opvaskemaskine strømforbrug (2026) → klasse A",
  description:
    "Bosch Serie 8 opvaskemaskine med Zeolith og PerfectDry: energimærkets kWh pr. opvask, pris om året, ældre klasse C til sammenligning og billigste tidspunkt.",
  intro:
    "Serie 8 er den eneste Bosch-serie på vores sider, hvor PerfectDry-tørringen og energiklasse A følges ad — prisen er et eco-program på 4 timer og 55 minutter.",
  content: `<h2>Hvor meget strøm bruger en Bosch Serie 8?</h2>
<p>Bosch Serie 8 er toppen af Bosch' opvaskemaskiner. Fire af de fem modeller på siden har samme energimærke i EU's produktdatabase EPREL: energiklasse A og 54 kWh pr. 100 opvaske på eco-programmet, altså 0,54 kWh pr. opvask. Med seks opvaske om ugen bliver det omkring 168 kWh om året, svarende til {{kr 168}}.</p>
<p>De fire er SMD8TCX04E og SMV8YCX02E, der er fuldt integrerbare, SBD8TCX04E i XXL-højde til høje nicher og den nyere SMU8YCS04E til underbygning, der kom i EPREL i oktober 2026. Alle tager 14 kuverter. Den femte, SMV8ZCX07E, er en ældre fuldt integrerbar Serie 8 fra 2020 med energiklasse C og 75 kWh.</p>
<table>
<thead><tr><th>Model</th><th>Klasse</th><th>kWh pr. 100 opvaske</th><th>Eco-program</th><th>Vand</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>SMD8TCX04E</td><td>A</td><td>54</td><td>4:55</td><td>9,5 l</td><td>42 dB</td></tr>
<tr><td>SMV8YCX02E</td><td>A</td><td>54</td><td>4:55</td><td>9,5 l</td><td>44 dB</td></tr>
<tr><td>SBD8TCX04E (XXL)</td><td>A</td><td>54</td><td>4:55</td><td>9,5 l</td><td>42 dB</td></tr>
<tr><td>SMU8YCS04E</td><td>A</td><td>54</td><td>4:55</td><td>9 l</td><td>40 dB</td></tr>
<tr><td>SMV8ZCX07E (2020)</td><td>C</td><td>75</td><td>3:55</td><td>9,5 l</td><td>41 dB</td></tr>
</tbody>
</table>

<h2>Zeolith og klasse A i samme maskine</h2>
<p>PerfectDry er Bosch' tørring med zeolit, et mineral, der optager fugt og afgiver varme. Ifølge Bosch' danske datablade giver den dobbelt så gode tørreresultater på plast som en tilsvarende Bosch-maskine uden. I <a href="/opvaskemaskine/bosch-serie-6-opvaskemaskine/">Bosch Serie 6</a> har modellerne med PerfectDry energiklasse B og 65 kWh, og den sparsomme Serie 6 med klasse A har ingen PerfectDry. I Serie 8 får du begge dele: SMD8TCX04E og SMV8YCX02E har Zeolith-tørring og klasse A ifølge databladene.</p>
<p>Forskellen til Serie 6 med PerfectDry er 11 kWh pr. 100 opvaske, omkring 34 kWh om året med seks opvaske om ugen, svarende til {{kr 34}}. Det er ikke meget pr. år, men det er gratis ved siden af den bedre tørring, hvis du alligevel vælger en maskine med zeolit.</p>

<h2>Prisen er tiden</h2>
<p>Klasse A-modellerne har et eco-program på 4 timer og 55 minutter. Det er længere end Serie 6-modellerne med PerfectDry (3:35) og den sparsomme Serie 6 og <a href="/opvaskemaskine/siemens-iq300-opvaskemaskine/">Siemens iQ300</a> med klasse A (4:30). Maskinen vasker ved lav temperatur og bruger tiden i stedet, for det er opvarmningen af vandet, der koster strøm: SMD8TCX04E er tilsluttet med 2.400 W.</p>
<p>Den ældre SMV8ZCX07E viser byttet den anden vej. Dens eco-program tager kun 3 timer og 55 minutter, men den bruger 75 kWh pr. 100 opvaske. Med seks opvaske om ugen er det omkring 66 kWh mere om året end de nye Serie 8-modeller, svarende til {{kr 66}} hvert år. Har du en ældre Serie 8 og overvejer at skifte, er det tallet at regne med — sammen med, at maskinen typisk kører om natten, hvor en time ekstra ikke betyder noget.</p>
<p>Vil du sammenligne med den maskine, du har i dag, så find modelnummeret på typeskiltet i lågens kant og slå det op i EPREL. Maskiner fra før marts 2021 har det gamle energimærke med A+++, som ikke kan sammenlignes direkte med den nye skala fra A til G.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>Den lange programtid passer godt til natten. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Med Home Connect og udskudt start kan Serie 8 startes, så hele programmet ligger i billige timer. Under ventetiden bruger maskinerne 4 W ifølge EPREL, omkring 0,03 kWh på otte timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>
<p>I standby bruger alle fem 0,5 W og i netværksforbundet standby 2 W. Står maskinen på wifi hele året, er det omkring 17 kWh mod 4 kWh på almindelig standby.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg eco som standard; Intensiv 70 °C og hurtigfunktionerne bruger mere.</li>
<li>Lad PerfectDry gøre arbejdet: skru ikke op for ExtraDry, hvis servicet allerede kommer tørt ud.</li>
<li>Kør med fuld maskine — 14 kuverter på én gang er billigere end to halve opvaske.</li>
<li>Start om aftenen med udskudt start, så programmet ligger uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Bosch Serie 8 opvaskemaskine?",
      answer:
        "Ifølge energimærket 0,54 kWh pr. opvask på eco-programmet for SMD8TCX04E, SMV8YCX02E, SBD8TCX04E og SMU8YCS04E. Det svarer til {{oere 0,54}} pr. opvask. Den ældre SMV8ZCX07E bruger 0,75 kWh.",
    },
    {
      question: "Hvad koster en Bosch Serie 8 om året i strøm?",
      answer: "Med seks opvaske om ugen omkring 168 kWh om året for klasse A-modellerne, svarende til {{kr 168}} ved månedens elpris.",
    },
    {
      question: "Har Bosch Serie 8 PerfectDry?",
      answer:
        "Ja, SMD8TCX04E og SMV8YCX02E har Zeolith-tørring (PerfectDry) og alligevel energiklasse A ifølge Bosch' datablade. Serie 6-modellerne med PerfectDry har klasse B.",
    },
    {
      question: "Hvorfor tager eco-programmet næsten fem timer?",
      answer:
        "Eco-programmet vasker ved lav temperatur og bruger tiden i stedet for strøm. På klasse A-modellerne tager det 4 timer og 55 minutter ifølge EPREL; den ældre SMV8ZCX07E bruger 3 timer og 55 minutter men 0,21 kWh mere pr. opvask.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch SMD8TCX04E (Serie 8), EU's energimærke", url: eprel("1951361") },
    { name: "EPREL — Bosch SMV8YCX02E (Serie 8), EU's energimærke", url: eprel("1643844") },
    { name: "EPREL — Bosch SBD8TCX04E (Serie 8, XXL), EU's energimærke", url: eprel("1951359") },
    { name: "EPREL — Bosch SMU8YCS04E (Serie 8, 2026), EU's energimærke", url: eprel("2643839") },
    { name: "EPREL — Bosch SMV8ZCX07E (2020), EU's energimærke", url: eprel("250819") },
    { name: "Bosch — SMD8TCX04E, produktdatablad (dansk)", url: sheet("SMD8TCX04E") },
    { name: "Bosch — SMV8YCX02E, produktdatablad (dansk)", url: sheet("SMV8YCX02E") },
    { name: "EPREL — Bosch SMV6ZCX10E (Serie 6, PerfectDry), EU's energimærke", url: eprel("1576174") },
  ],
  variants: [
    { name: "14 kuverter, integrerbar (SMD8TCX04E)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 0 },
    { name: "14 kuverter, integrerbar (SMV8YCX02E)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 1 },
    { name: "14 kuverter, XXL integrerbar (SBD8TCX04E)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 2 },
    { name: "14 kuverter, underbygning (SMU8YCS04E)", watts: { standby: 0.5 }, kwhPer100Cycles: 54, energyClass: "A", source: 3 },
    { name: "14 kuverter, integrerbar, 2020 (SMV8ZCX07E)", watts: { standby: 0.5 }, kwhPer100Cycles: 75, energyClass: "C", source: 4 },
  ],
  publishDate: "2026-12-14",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet (Eco 50 °C) ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie8Opvaskemaskine;
