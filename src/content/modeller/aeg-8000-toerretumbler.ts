import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;

const aeg8000Toerretumbler: ModelData = {
  slug: "aeg-8000-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "AEG",
  name: "AEG 8000 tørretumbler",
  released: "2025-05",
  synonyms: [
    "aeg 8000 tørretumbler",
    "aeg 8000 absolutecare",
    "aeg 8000 strømforbrug",
    "tr844p85p",
    "tr844p96p",
    "aeg tørretumbler 8 kg",
    "aeg varmepumpe 8000",
  ],
  title: "AEG 8000 tørretumbler strømforbrug (2026) → kWh og pris",
  description:
    "AEG 8000 AbsoluteCare varmepumpetørretumbler på 8 og 9 kg: energimærkets kWh pr. tørring, pris om året, programtid og hvorfor 9 kg bruger mindre.",
  intro:
    "Den nyere 9 kg-udgave af AEG 8000 bruger mindre strøm pr. tørring end 8 kg-udgaven — og har nøjagtig samme energimærke som en 9000-model.",
  content: `<h2>Hvor meget strøm bruger en AEG 8000 tørretumbler?</h2>
<p>AEG 8000 ligger mellem 7000 og 9000 i AEG's varmepumpetørretumblere, og AEG sælger TR844P85P i Danmark som 8000 AbsoluteCare på 8 kg. De to 8000-modeller på siden har hver sit energimærke i EU's produktdatabase EPREL. TR844P85P har energiklasse C og 97 kWh pr. 100 tørringer på eco-programmet, og den nyere TR844P96P på 9 kg fra maj 2025 har energiklasse B og 92 kWh. Det er 0,97 og 0,92 kWh pr. tørring, svarende til {{kr 0,97}} og {{kr 0,92}}.</p>
<p>Med tre tørringer om ugen bliver det omkring 151 kWh om året for TR844P85P og 144 kWh for TR844P96P, svarende til {{kr 151}} og {{kr 144}}. Energimærket fra 2025 måler eco-programmet til skabstørt bomuld og vægter mellem fuld og halv fyldning.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>Klasse</th><th>kWh pr. 100 tørringer</th><th>Program, fuld</th><th>Halv fyldning</th><th>Kondensering</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>TR844P85P (2023)</td><td>8 kg</td><td>C</td><td>97</td><td>2:55</td><td>1:45</td><td>86 %</td><td>65 dB</td></tr>
<tr><td>TR844P96P (2025)</td><td>9 kg</td><td>B</td><td>92</td><td>3:25</td><td>2:00</td><td>94 %</td><td>61 dB</td></tr>
</tbody>
</table>

<h2>Større tromle, mindre forbrug</h2>
<p>En større tromle betyder tit et højere forbrug pr. tørring, men ikke her: TR844P96P på 9 kg bruger mindre end TR844P85P på 8 kg. Pr. kg tøj er forskellen endnu tydeligere: 0,10 kWh mod 0,12 kWh, altså omkring 16 % mindre. Den nye model bruger til gengæld en halv time længere ved fuld fyldning, og den har bedre kondensering: 94 % af fugten opsamles mod 86 %, så mindre damp ender i bryggerset. Den er også 4 dB mere stille.</p>
<p>Har du en TR844P85P i dag, er der ikke meget at spare ved at skifte for strømmens skyld: omkring 8 kWh om året med tre tørringer om ugen. Står du og skal vælge, er 9 kg-modellen et bedre valg både for strømmen og for familier med meget vasketøj, fordi én fuld tørring er billigere end to halve.</p>

<h2>8000 mod 9000 og 7000</h2>
<p>TR844P96P har præcis de samme tal på energimærket som <a href="/varmepumpe-toerretumbler/aeg-9000-toerretumbler/">AEG 9000</a>-modellen TR944P96P: 92 kWh pr. 100 tørringer, 3 timer og 25 minutter ved fuld fyldning, 94 % kondensering og 61 dB. Forskellen ligger i udstyret, ikke i strømmen. Vil du længere ned i forbrug, har 9000-serien også TR944P97X med klasse A og 79 kWh, omkring 20 kWh mindre om året end TR844P96P.</p>
<p>I <a href="/varmepumpe-toerretumbler/aeg-7000-toerretumbler/">AEG 7000</a> bruger 8 kg-modellerne 102–128 kWh pr. 100 tørringer. TR844P85P ligger altså under alle 7000-modellerne på vores side, og mod den mest strømkrævende, TR702K84L, er forskellen omkring 48 kWh om året. Til sammenligning bruger <a href="/varmepumpe-toerretumbler/miele-t1/">Miele T1</a> på 8 kg 95 kWh.</p>

<h2>Centrifugering og filtre</h2>
<p>En tørretumblers forbrug afhænger meget af, hvor vådt tøjet er, når det kommer i. Centrifugér ved det højeste omdrejningstal, tøjet tåler; jo mindre vand der er tilbage, jo kortere kører tumbleren. Rens fnugfilteret efter hver tørring og kondensatoren efter AEG's anvisning, ellers forlænges tørretiden, og forbruget stiger. Begge 8000-modeller bruger R290 (propan) som kølemiddel i varmepumpen ifølge EPREL.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>Tøjet kan vente i tromlen, så tumbleren er nem at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Begge modeller har udskudt start, og ventetiden bruger 4 W ifølge EPREL, omkring 0,03 kWh på otte timer. Slukket bruger TR844P85P 0,05 W og TR844P96P 0,13 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Fyld tromlen op til kapaciteten — to halve tørringer koster mere end én fuld.</li>
<li>Brug eco-programmet til bomuld og de korte programmer kun, når det haster.</li>
<li>Tør let syntetisk tøj for sig, så tumbleren ikke kører længe for de tykkeste stykker.</li>
<li>Start om aftenen med udskudt start, så tørringen ligger uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en AEG 8000 tørretumbler?",
      answer:
        "Ifølge energimærket 0,97 kWh pr. tørring for 8 kg-modellen TR844P85P og 0,92 kWh for 9 kg-modellen TR844P96P på eco-programmet. Det svarer til {{kr 0,97}} og {{kr 0,92}} pr. tørring.",
    },
    {
      question: "Hvad koster en AEG 8000 tørretumbler om året?",
      answer: "Med tre tørringer om ugen omkring 151 kWh om året for TR844P85P og 144 kWh for TR844P96P, svarende til {{kr 151}} og {{kr 144}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har AEG TR844P85P?",
      answer: "Energiklasse C på det nye energimærke fra 2025 med 97 kWh pr. 100 tørringer og kondenseringsklasse C (86 %) ifølge EPREL.",
    },
    {
      question: "Er AEG 8000 og 9000 forskellige i strømforbrug?",
      answer:
        "Ikke nødvendigvis. TR844P96P (8000) og TR944P96P (9000) har samme energimærke: klasse B og 92 kWh pr. 100 tørringer. 9000-modellen TR944P97X har klasse A og 79 kWh.",
    },
    {
      question: "Hvornår er det billigst at bruge tørretumbleren?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — AEG TR844P85P (916099645), EU's energimærke", url: eprel("2085674") },
    { name: "EPREL — AEG TR844P96P (916900387), EU's energimærke", url: eprel("2335860") },
    { name: "AEG — 8000 AbsoluteCare 8 kg TR844P85P (dansk produktside)", url: "https://www.aeg.dk/laundry/laundry/dryers/heat-pump-dryer/tr844p85p/" },
    { name: "EPREL — AEG TR944P96P (9000), EU's energimærke", url: eprel("2292132") },
    { name: "EPREL — AEG TR702K84L (7000), EU's energimærke", url: eprel("2162348") },
  ],
  variants: [
    { name: "8 kg (TR844P85P)", watts: { off: 0.05 }, kwhPer100Cycles: 97, energyClass: "C", source: 0 },
    { name: "9 kg (TR844P96P)", watts: { off: 0.13 }, kwhPer100Cycles: 92, energyClass: "B", source: 1 },
  ],
  publishDate: "2026-12-13",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default aeg8000Toerretumbler;
