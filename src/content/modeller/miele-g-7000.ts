import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/dishwashers2019/${reg}`;

const mieleG7000: ModelData = {
  slug: "miele-g-7000",
  parent: "opvaskemaskine",
  brand: "Miele",
  name: "Miele G 7000 opvaskemaskine",
  released: "2023-10",
  synonyms: [
    "miele g 7000 strømforbrug",
    "miele g7000 opvaskemaskine forbrug",
    "miele autodos opvaskemaskine strømforbrug",
    "miele g 7600 scu",
    "miele g 7650 scvi",
    "miele g 7233 scu",
    "miele g 7299 scvi xxl",
    "miele g 7790 scvi k2o",
  ],
  title: "Miele G 7000 strømforbrug (2026) → kWh pr. opvask og pris",
  description:
    "Miele G 7000 opvaskemaskine: energimærkets kWh pr. opvask for seks danske modeller med og uden AutoDos, pris om året og hvornår det er billigst at vaske op.",
  intro:
    "Alle seks G 7000-modeller har energiklasse A og samme forbrug: 0,54 kWh pr. opvask på eco-programmet. Forskellen ligger i udstyr, indbygning og støj, ikke i strømregningen.",
  content: `<h2>Hvor meget strøm bruger en Miele G 7000?</h2>
<p>G 7000 er Mieles opvaskemaskineserie med AutoDos (automatisk dosering af opvaskemiddel) i flere af modellerne. Siden dækker seks af de modeller, der står på Mieles danske hjemmeside: G 7600 SCU AutoDos og G 7605 SCU XXL AutoDos til underbygning, G 7233 SCU Excellence til underbygning uden AutoDos, og de fuldt integrerbare G 7650 SCVi AutoDos, G 7299 SCVi XXL Excellence og G 7790 SCVi AutoDos K2O. Alle seks er registreret i EU's produktdatabase EPREL med energiklasse A, 14 kuverter og 54 kWh pr. 100 opvaske på eco-programmet, altså 0,54 kWh pr. opvask.</p>
<p>Med seks opvaske om ugen bliver det omkring 168 kWh om året, svarende til {{kr 168}} ved månedens elpris. Én opvask koster {{oere 0,54}}. Eco-programmet bruger 8,4 liter vand og tager 3 timer og 50 minutter for alle seks modeller.</p>
<table>
<thead><tr><th>Model</th><th>Type</th><th>kWh pr. 100 opvaske</th><th>Vand</th><th>Støj</th><th>Udskudt start</th></tr></thead>
<tbody>
<tr><td>G 7600 SCU AutoDos</td><td>Underbygning</td><td>54</td><td>8,4 l</td><td>42 dB</td><td>0,9 W</td></tr>
<tr><td>G 7605 SCU XXL AutoDos</td><td>Underbygning, XXL</td><td>54</td><td>8,4 l</td><td>42 dB</td><td>0,9 W</td></tr>
<tr><td>G 7233 SCU Excellence</td><td>Underbygning</td><td>54</td><td>8,4 l</td><td>43 dB</td><td>0,3 W</td></tr>
<tr><td>G 7650 SCVi AutoDos</td><td>Fuldt integrerbar</td><td>54</td><td>8,4 l</td><td>42 dB</td><td>0,9 W</td></tr>
<tr><td>G 7299 SCVi XXL Excellence</td><td>Fuldt integrerbar, XXL</td><td>54</td><td>8,4 l</td><td>42 dB</td><td>0,3 W</td></tr>
<tr><td>G 7790 SCVi AutoDos K2O</td><td>Fuldt integrerbar</td><td>54</td><td>8,4 l</td><td>41 dB</td><td>0,9 W</td></tr>
</tbody>
</table>

<h2>AutoDos, XXL eller Excellence — betyder det noget for strømmen?</h2>
<p>Ikke på energimærket. AutoDos-modellerne doserer selv opvaskemidlet fra en beholder, og XXL-modellerne er højere indvendigt, men eco-programmet bruger det samme for alle seks. Den eneste forskel i EPREL er effekten under udskudt start: 0,9 W for AutoDos-modellerne og 0,3 W for G 7233 SCU og G 7299 SCVi. Venter maskinen otte timer, er det 0,007 kWh mod 0,002 kWh. Selv hvis du bruger udskudt start hver gang, er forskellen omkring 1,5 kWh om året.</p>
<p>Slukket og i standby bruger alle seks 0,3 W ifølge EPREL. Støjen er 41–43 dB, hvor G 7790 SCVi AutoDos K2O er den mest stille af de seks med 41 dB. Det er støjklasse B for dem alle.</p>

<h2>G 7000 mod andre opvaskemaskiner</h2>
<p>Mieles billigere serie, <a href="/opvaskemaskine/miele-g-5000/">G 5000</a>, har samme energimærke: 54 kWh pr. 100 opvaske for 60 cm-modellerne. Det samme gælder <a href="/opvaskemaskine/bosch-serie-6-opvaskemaskine/">Bosch Serie 6</a> SMU6ECS12E. Strømmen er altså ikke grunden til at vælge G 7000 frem for G 5000; det er udstyret.</p>
<p>Mod <a href="/opvaskemaskine/siemens-iq500/">Siemens iQ500</a> med zeolit-tørring, der har 65 kWh pr. 100 opvaske, sparer G 7000 0,11 kWh pr. opvask, omkring 34 kWh om året eller {{kr 34}}. Mod Siemens iQ300 SN43HW01VS med 94 kWh pr. 100 opvaske er forskellen større: omkring 125 kWh om året, svarende til {{kr 125}}.</p>

<h2>Det er vandet, der skal varmes</h2>
<p>Næsten al strømmen i en opvask går til at varme vandet og tørre servicet. Eco-programmet holder forbruget nede ved at vaske ved lavere temperatur i længere tid; derfor tager det næsten fire timer. Intensivprogrammer bruger mere, og hurtigprogrammer gør det ofte også, fordi de skal varme vandet hurtigt op. Brug eco som standard og de kraftige programmer til gryder og fastbrændt mad. Se <a href="/opvaskemaskine/">hvad en opvask koster på forskellige programmer</a>.</p>

<h2>Hvornår er det billigst at vaske op?</h2>
<p>En opvaskemaskine er let at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21 — lige når mange sætter maskinen i gang efter aftensmaden. Fyld maskinen, og brug udskudt start, så den kører om natten eller tidligt om morgenen. Det koster næsten intet at vente, også på AutoDos-modellerne. Se <a href="/elpriser/">dagens timepriser</a> og <a href="/opvaskemaskine/">det billigste tidspunkt at vaske op</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco-programmet som standard — det er det, energimærket er målt på.</li>
<li>Fyld maskinen helt: 14 kuverter i én opvask er billigere end to halve.</li>
<li>Skyl ikke under varmt vand før opvasken; skrab tallerknerne i stedet.</li>
<li>Start med udskudt start uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Miele G 7000 pr. opvask?",
      answer: "Ifølge energimærket 0,54 kWh pr. opvask på eco-programmet for alle seks modeller på siden, svarende til {{oere 0,54}} pr. opvask.",
    },
    {
      question: "Hvad koster en Miele G 7000 om året i strøm?",
      answer: "Med seks opvaske om ugen omkring 168 kWh om året, svarende til {{kr 168}} ved månedens elpris.",
    },
    {
      question: "Bruger AutoDos mere strøm?",
      answer:
        "Ikke på eco-programmet: AutoDos-modellerne har samme 54 kWh pr. 100 opvaske som de andre. Under udskudt start bruger de 0,9 W mod 0,3 W, hvilket er omkring 1,5 kWh om året.",
    },
    {
      question: "Er der forskel på Miele G 7000 og G 5000 i strømforbrug?",
      answer: "Nej, 60 cm-modellerne i begge serier har energiklasse A med 54 kWh pr. 100 opvaske. Forskellen er udstyr som AutoDos.",
    },
    {
      question: "Hvornår er det billigst at køre opvaskemaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger 0,3–0,9 W.",
    },
  ],
  sources: [
    { name: "EPREL — Miele G 7600 SCU AutoDos, EU's energimærke", url: eprel("1585558") },
    { name: "EPREL — Miele G 7605 SCU XXL AutoDos, EU's energimærke", url: eprel("1686369") },
    { name: "EPREL — Miele G 7233 SCU Excellence, EU's energimærke", url: eprel("1686356") },
    { name: "EPREL — Miele G 7650 SCVi AutoDos, EU's energimærke", url: eprel("1449600") },
    { name: "EPREL — Miele G 7299 SCVi XXL Excellence, EU's energimærke", url: eprel("1686366") },
    { name: "EPREL — Miele G 7790 SCVi AutoDos K2O, EU's energimærke", url: eprel("1453402") },
    { name: "Miele Danmark — opvaskemaskiner, dansk sortiment", url: "https://www.miele.dk/category/1015063/opvaskemaskiner" },
  ],
  variants: [
    { name: "14 kuverter, underbygning (G 7600 SCU AutoDos)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 0 },
    { name: "14 kuverter, XXL underbygning (G 7605 SCU XXL AutoDos)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 1 },
    { name: "14 kuverter, underbygning (G 7233 SCU Excellence)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 2 },
    { name: "14 kuverter, integrerbar (G 7650 SCVi AutoDos)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 3 },
    { name: "14 kuverter, XXL integrerbar (G 7299 SCVi XXL Excellence)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 4 },
    { name: "14 kuverter, integrerbar (G 7790 SCVi AutoDos K2O)", watts: { standby: 0.3 }, kwhPer100Cycles: 54, energyClass: "A", source: 5 },
  ],
  publishDate: "2026-12-29",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco-programmet ved fuld fyldning; standby er effekten i watt. Kilderne står nederst på siden.",
};

export default mieleG7000;
