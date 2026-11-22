import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;

const mieleG5000: ModelData = {
  slug: "miele-g-5000",
  parent: "opvaskemaskine",
  brand: "Miele",
  name: "Miele G 5000 opvaskemaskine",
  released: "2025-04",
  synonyms: [
    "miele g 5000",
    "miele opvaskemaskine strømforbrug",
    "miele g 5611 scu active",
    "miele g 5611 u active",
    "miele g 5856 scvi xxl",
    "miele g 5590 scvi sl",
    "miele opvaskemaskine 45 cm",
    "miele g5611",
  ],
  title: "Miele G 5000 opvaskemaskine strømforbrug (2026) → kWh",
  description:
    "Miele G 5000 opvaskemaskine i 60 og 45 cm: energimærkets kWh pr. opvask på eco-programmet, pris om året, vand, ventetid og billigste tidspunkt.",
  intro:
    "De tre 60 cm-maskiner på siden har energiklasse A; den smalle 45 cm-model har klasse E og bruger dobbelt så meget strøm pr. kuvert.",
  content: `<h2>Hvor meget strøm bruger en Miele G 5000?</h2>
<p>G 5000 er Mieles store serie af opvaskemaskiner, og der findes mange udgaver med samme grundmaskine. De fire på siden er registreret i EU's produktdatabase EPREL fra april til september 2025. De tre 60 cm-modeller — G 5611 SCU Active og G 5611 U Active til underbygning og den fuldt integrerbare G 5856 SCVi XXL Active Plus — har energiklasse A og 54 kWh pr. 100 opvaske på eco-programmet, altså 0,54 kWh pr. opvask. Med seks opvaske om ugen bliver det omkring 168 kWh om året, svarende til {{kr 168}}.</p>
<p>Den smalle G 5590 SCVi SL Active på 45 cm har energiklasse E og 70 kWh pr. 100 opvaske. Det bliver omkring 218 kWh om året, svarende til {{kr 218}}.</p>
<table>
<thead><tr><th>Model</th><th>Bredde</th><th>Kuverter</th><th>Klasse</th><th>kWh pr. 100 opvaske</th><th>Eco-program</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>G 5611 SCU Active</td><td>60 cm</td><td>14</td><td>A</td><td>54</td><td>4:18</td><td>45 dB</td></tr>
<tr><td>G 5611 U Active</td><td>60 cm</td><td>13</td><td>A</td><td>54</td><td>4:18</td><td>45 dB</td></tr>
<tr><td>G 5856 SCVi XXL Active Plus</td><td>60 cm</td><td>14</td><td>A</td><td>54</td><td>4:18</td><td>43 dB</td></tr>
<tr><td>G 5590 SCVi SL Active</td><td>45 cm</td><td>9</td><td>E</td><td>70</td><td>4:55</td><td>45 dB</td></tr>
</tbody>
</table>

<h2>Mindre vand og kortere eco end mange klasse A-maskiner</h2>
<p>Klasse A betyder det samme forbrug pr. opvask som de mest sparsomme maskiner fra Bosch og Siemens på vores sider: <a href="/opvaskemaskine/siemens-iq300-opvaskemaskine/">Siemens iQ300</a> SN63EX22CE og <a href="/opvaskemaskine/bosch-serie-8-opvaskemaskine/">Bosch Serie 8</a> bruger også 54 kWh pr. 100 opvaske. Forskellen ligger andre steder. Mieles 60 cm-modeller bruger 8,2 liter vand pr. eco-opvask mod 9–9,5 liter hos de to, og eco-programmet tager 4 timer og 18 minutter mod 4:30 hos iQ300 og 4:55 hos Serie 8.</p>
<p>Til gengæld larmer G 5611-modellerne 45 dB, mere end de 40–44 dB, som Bosch og Siemens oplyser for deres klasse A-maskiner. Står opvaskemaskinen i et åbent køkken-alrum, kan de få decibel betyde mere for dig end vandet.</p>

<h2>45 cm: dobbelt så meget pr. kuvert</h2>
<p>G 5590 SCVi SL Active tager 9 kuverter og bruger 0,70 kWh pr. opvask. Det er mindre pr. gang end en 60 cm-maskine med en dårligere klasse, men pr. kuvert bruger den omkring dobbelt så meget som G 5611 SCU Active. Eco-programmet tager 4 timer og 55 minutter, og vandforbruget er 8,1 liter.</p>
<p>Blandt 45 cm-maskinerne er der også forskel. Bosch' smalle Serie 6, SPV6ZMX17E, har klasse C og 59 kWh med 10 kuverter, altså omkring 34 kWh mindre om året end G 5590 med seks opvaske om ugen, svarende til {{kr 34}}. Har du kun plads til 45 cm, er energimærket på den præcise model derfor vigtigere end mærket på fronten.</p>

<h2>Lav ventetid og standby</h2>
<p>Miele oplyser 0,3 W i standby og slukket til EPREL og 1 W under udskudt start på 60 cm-modellerne — en fjerdedel af de 4 W, som Bosch og Siemens oplyser. På otte timers ventetid er det 0,008 kWh, altså så godt som ingenting. Det gør det endnu mere oplagt at fylde maskinen om aftenen og lade den starte senere. EPREL oplyser ingen netværksstandby for de fire modeller. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Hvornår er det billigst at tage opvasken?</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21, når mange starter opvaskemaskinen efter aftensmaden. Med udskudt start kan Mieles maskiner køre om natten eller tidligt om morgenen, og eco-programmet på godt fire timer passer fint ind i de billige timer. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/opvaskemaskine/">hvornår opvaskemaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg 60 cm, hvis der er plads — med fuld kurv bruger den halvdelen pr. kuvert af 45 cm-modellen.</li>
<li>Brug eco-programmet som standard; Intensiv og hurtigprogrammer bruger mere.</li>
<li>Skyl ikke service under varm hane først — maskinen klarer madrester.</li>
<li>Start med udskudt start, så maskinen kører uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Miele G 5000 opvaskemaskine?",
      answer:
        "Ifølge energimærket 0,54 kWh pr. opvask på eco-programmet for G 5611 SCU Active, G 5611 U Active og G 5856 SCVi XXL Active Plus og 0,70 kWh for 45 cm-modellen G 5590 SCVi SL Active. Det svarer til {{oere 0,54}} og {{oere 0,70}} pr. opvask.",
    },
    {
      question: "Hvad koster en Miele G 5000 om året i strøm?",
      answer: "Med seks opvaske om ugen omkring 168 kWh om året for 60 cm-modellerne og 218 kWh for 45 cm-modellen, svarende til {{kr 168}} og {{kr 218}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Miele G 5611 SCU Active?",
      answer: "Energiklasse A med 54 kWh pr. 100 opvaske, 14 kuverter og 8,2 liter vand pr. eco-opvask ifølge EPREL.",
    },
    {
      question: "Bruger Mieles 45 cm-opvaskemaskine meget strøm?",
      answer:
        "G 5590 SCVi SL Active har klasse E og 70 kWh pr. 100 opvaske med 9 kuverter. Pr. kuvert er det omkring dobbelt så meget som G 5611 SCU Active med 14 kuverter.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Mieles 60 cm-modeller bruger 1 W under udskudt start.",
    },
  ],
  sources: [
    { name: "EPREL — Miele G 5611 SCU Active, EU's energimærke", url: eprel("2238285") },
    { name: "EPREL — Miele G 5611 U Active, EU's energimærke", url: eprel("2266150") },
    { name: "EPREL — Miele G 5856 SCVi XXL Active Plus, EU's energimærke", url: eprel("2238286") },
    { name: "EPREL — Miele G 5590 SCVi SL Active (45 cm), EU's energimærke", url: eprel("1132305") },
    { name: "EPREL — Siemens SN63EX22CE (iQ300), EU's energimærke", url: eprel("1956205") },
    { name: "EPREL — Bosch SPV6ZMX17E (Serie 6, 45 cm), EU's energimærke", url: eprel("1249380") },
  ],
  variants: [
    { name: "14 kuverter, underbygning (G 5611 SCU Active)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 0 },
    { name: "13 kuverter, underbygning (G 5611 U Active)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 1 },
    { name: "14 kuverter, XXL integrerbar (G 5856 SCVi XXL Active Plus)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 2 },
    { name: "9 kuverter, 45 cm integrerbar (G 5590 SCVi SL Active)", watts: { standby: 0.3 }, kwhPer100Cycles: 70, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-15",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default mieleG5000;
