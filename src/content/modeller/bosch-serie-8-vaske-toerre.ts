import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washerdriers2019/${reg}`;
const eprelWasher = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;
const eprelDryer = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie8VaskeToerre: ModelData = {
  slug: "bosch-serie-8-vaske-toerre",
  parent: "vaskemaskine-med-toerretumbler",
  brand: "Bosch",
  name: "Bosch Serie 8 vaske-tørremaskine",
  released: "2024-04",
  synonyms: [
    "bosch serie 8 vaske-tørremaskine",
    "bosch vaske tørremaskine strømforbrug",
    "bosch kombimaskine vask og tør",
    "wnc254a0sn",
    "wnc254arsn",
    "bosch serie 8 vasketørretumbler",
    "bosch wash & dry",
  ],
  title: "Bosch Serie 8 vaske-tørremaskine strømforbrug (2026) → kWh",
  description:
    "Bosch Serie 8 vaske-tørremaskine (10,5/6 kg): energimærkets kWh for vask og tørring og for vask alene, pris om året, og hvad to maskiner sparer.",
  intro:
    "En vask med tørring bruger 3,05 kWh på Bosch' Serie 8 vaske-tørremaskine — næsten seks gange så meget som en vask alene i den samme maskine.",
  content: `<h2>Hvor meget strøm bruger Bosch Serie 8 vaske-tørremaskine?</h2>
<p>Bosch' Serie 8 vaske-tørremaskine findes i Danmark som WNC254A0SN og i antracitgrå som WNC254ARSN. De to har samme energimærke i EU's produktdatabase EPREL. Maskinen vasker op til 10,5 kg og vasker og tørrer op til 6 kg i én omgang. En vaske-tørremaskine har to energiklasser: én for vask og tørring samlet og én for vask alene.</p>
<p>For vask og tørring har maskinen energiklasse D og bruger 305 kWh pr. 100 omgange, altså 3,05 kWh, hver gang 6 kg tøj bliver vasket og tørret. Programmet tager 8 timer og 20 minutter og bruger 75 liter vand. Med tre omgange om ugen bliver det omkring 476 kWh om året, svarende til {{kr 476}}.</p>
<p>Bruger du kun vaskedelen, har maskinen energiklasse A og bruger 52 kWh pr. 100 vaske på eco 40-60-programmet — 0,52 kWh pr. vask, svarende til {{kr 0,52}}. Programmet tager 4 timer og bruger 50 liter vand.</p>

<h2>Hvorfor tørringen koster så meget</h2>
<p>Regnet som forskellen mellem de to tal står tørringen for omkring 2,5 kWh af de 3,05 kWh. Bosch' datablad nævner ingen varmepumpe, så luften varmes op elektrisk, og det er den varme, der koster. Vask og tørring bruger desuden 25 liter mere vand end vask alene, hvilket passer med, at fugten kondenseres med vand i tromlen frem for i en varmeveksler med luft.</p>
<p>Centrifugeringen er klasse B med op til 1.400 omdrejninger og 53 % restfugt i tøjet ifølge EPREL. Det er det vand, tørringen skal fjerne bagefter.</p>

<h2>To maskiner mod én</h2>
<p>Bosch' egen Serie 8-vaskemaskine WGB266ABSN på 11 kg bruger 0,42 kWh pr. eco-vask ifølge EPREL, og Serie 8-varmepumpetumbleren WQB246DSSN på 9 kg bruger 0,92 kWh pr. tørring. Sammen er det 1,34 kWh mod 3,05 kWh i vaske-tørremaskinen — mindre end halvdelen, og de to maskiner kan tage mere tøj ad gangen. Med tre omgange om ugen er forskellen omkring 267 kWh om året, svarende til {{kr 267}}.</p>
<p>Tallene er ikke målt på helt samme mængde tøj, så sammenligningen er en tilnærmelse. Men retningen er klar: har du plads til en vaskesøjle, er en vaskemaskine og en <a href="/varmepumpe-toerretumbler/">varmepumpetørretumbler</a> langt billigere i drift. Se også varmepumpetumblerne <a href="/varmepumpe-toerretumbler/miele-t1/">Miele T1</a> og <a href="/varmepumpe-toerretumbler/aeg-7000-toerretumbler/">AEG 7000</a>.</p>

<h2>Serie 8 mod Serie 6 og Serie 4</h2>
<table>
<thead><tr><th>Model</th><th>Kapacitet (vask/tør)</th><th>Vask og tør, kWh pr. 100</th><th>Vask alene, kWh pr. 100</th><th>Vask og tør, tid</th></tr></thead>
<tbody>
<tr><td>Serie 8 (WNC254A0SN)</td><td>10,5/6 kg</td><td>305 (D)</td><td>52 (A)</td><td>8:20</td></tr>
<tr><td>Serie 6 (WNG254ARSN)</td><td>10,5/6 kg</td><td>306 (D)</td><td>51 (A)</td><td>8:40</td></tr>
<tr><td>Serie 4 (WNA14400SN)</td><td>9/5 kg</td><td>266 (D)</td><td>49 (A)</td><td>8:35</td></tr>
</tbody>
</table>
<p>Strømforbruget er næsten det samme i Serie 6 og Serie 8. Serie 8 har ifølge Bosch' danske datablad Home Connect og bruger 2 W i netværksstandby, er 20 minutter hurtigere og bruger 7 liter mindre vand pr. vask og tørring. Serie 4-modellen bruger mindre pr. omgang, men tørrer kun 5 kg ad gangen; regnet pr. kg tøj bruger den omtrent lige så meget som Serie 8. Alle tre har Auto Dry, der tørrer til den valgte tørhedsgrad, og Serie 6 og 8 har desuden i-DOS, der doserer vaskemidlet automatisk.</p>

<h2>Hvornår er det billigst at vaske og tørre?</h2>
<p>Med et program på over otte timer er vaske-tørremaskinen oplagt at køre om natten. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Med 3,05 kWh pr. omgang betyder det mere for denne maskine end for en almindelig vaskemaskine, hvornår den kører. Maskinen har udskudt start, hvor ventetiden bruger 4 W ifølge EPREL. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/vaskemaskine-med-toerretumbler/">hvornår vaske-tørremaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug kun tørringen, når du har brug for den: tørt på stativ eller snor sparer omkring 2,5 kWh pr. omgang.</li>
<li>Vask fulde 10,5 kg, når du ikke skal tørre i maskinen; tørrer du, så hold dig til 6 kg.</li>
<li>Brug Auto Dry frem for et tidsstyret program, så tørringen stopper, når tøjet er tørt.</li>
<li>Kør vask og tørring om natten med udskudt start.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch Serie 8 vaske-tørremaskine?",
      answer:
        "Ifølge energimærket 3,05 kWh pr. vask og tørring af 6 kg tøj (energiklasse D) og 0,52 kWh pr. vask alene på eco 40-60 (energiklasse A). Det svarer til {{kr 3,05}} og {{kr 0,52}}.",
    },
    {
      question: "Hvad koster Bosch Serie 8 vaske-tørremaskine om året?",
      answer: "Med tre omgange vask og tørring om ugen omkring 476 kWh om året, svarende til {{kr 476}} ved månedens elpris. Vasker du uden at tørre, er det langt mindre.",
    },
    {
      question: "Er en vaske-tørremaskine dyrere i drift end to maskiner?",
      answer:
        "Ja. Bosch' Serie 8-vaskemaskine WGB266ABSN og Serie 8-varmepumpetumbleren WQB246DSSN bruger tilsammen 1,34 kWh pr. vask og tørring mod 3,05 kWh i vaske-tørremaskinen. Med tre omgange om ugen er det omkring 267 kWh om året.",
    },
    {
      question: "Hvor lang tid tager vask og tørring?",
      answer: "8 timer og 20 minutter for 6 kg ifølge EPREL. En vask alene på eco 40-60 tager 4 timer.",
    },
    {
      question: "Hvornår er det billigst at bruge vaske-tørremaskinen?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Programmet er langt nok til at fylde nattens billige timer; brug udskudt start.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch WNC254A0SN (Serie 8), EU's energimærke", url: eprel("1304892") },
    { name: "EPREL — Bosch WNC254ARSN (Serie 8), EU's energimærke", url: eprel("1450893") },
    { name: "Bosch — WNC254A0SN, produktdatablad (dansk)", url: sheet("WNC254A0SN") },
    { name: "Bosch — WNC254ARSN, produktdatablad (dansk)", url: sheet("WNC254ARSN") },
    { name: "EPREL — Bosch WNG254ARSN (Serie 6), EU's energimærke", url: eprel("1450901") },
    { name: "EPREL — Bosch WNA14400SN (Serie 4), EU's energimærke", url: eprel("2458735") },
    { name: "EPREL — Bosch WGB266ABSN (Serie 8 vaskemaskine), EU's energimærke", url: eprelWasher("2660788") },
    { name: "EPREL — Bosch WQB246DSSN (Serie 8 tørretumbler), EU's energimærke", url: eprelDryer("2274347") },
  ],
  variants: [
    { name: "10,5/6 kg (WNC254A0SN)", watts: { off: 0.5 }, kwhPer100Cycles: 305, energyClass: "D", source: 0 },
    { name: "10,5/6 kg, antracitgrå (WNC254ARSN)", watts: { off: 0.5 }, kwhPer100Cycles: 305, energyClass: "D", source: 1 },
  ],
  publishDate: "2026-11-30",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget for en fuld vask og tørring (eco 40-60 og tørring til skabstørt) som et vægtet gennemsnit af fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie8VaskeToerre;
