import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;

const aeg9000Toerretumbler: ModelData = {
  slug: "aeg-9000-toerretumbler",
  parent: "varmepumpe-toerretumbler",
  brand: "AEG",
  name: "AEG 9000 tørretumbler",
  released: "2025-07",
  synonyms: [
    "aeg 9000 tørretumbler",
    "aeg 9000 absolutecare plus",
    "aeg 9000 strømforbrug",
    "tr944p96p",
    "tr944p95p",
    "tr944p97x",
    "tr944p17x",
    "aeg varmepumpe tørretumbler 9 kg",
  ],
  title: "AEG 9000 tørretumbler strømforbrug (2026) → kWh og tid",
  description:
    "AEG 9000 varmepumpetørretumbler på 9 og 10 kg: energimærkets kWh pr. tørring fra klasse C til A, pris om året, programtid og billigste tidspunkt.",
  intro:
    "Tre AEG 9000-tumblere med næsten samme modelnummer og samme 9 kg — men den nyeste bruger en fjerdedel mindre strøm pr. tørring end den ældste og er næsten en time længere om det.",
  content: `<h2>Hvor meget strøm bruger en AEG 9000 tørretumbler?</h2>
<p>AEG's 9000-serie ligger over 7000 og 8000 i AEG's nummerering af varmepumpetørretumblere, og AEG sælger TR944P96P i Danmark som 9000 AbsoluteCare Plus. Hver udgave har sit eget energimærke i EU's produktdatabase EPREL. Siden 2025 står forbruget på tørretumblere i kWh pr. 100 tørringer på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning. For de fire 9000-modeller på siden spænder det fra 79 til 106 kWh pr. 100 tørringer, altså 0,79–1,06 kWh pr. tørring.</p>
<p>Med tre tørringer om ugen bliver det 123–165 kWh om året, svarende til {{kr 123-165}}.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>Klasse</th><th>kWh pr. 100 tørringer</th><th>Program, fuld</th><th>Halv fyldning</th><th>Kondensering</th></tr></thead>
<tbody>
<tr><td>TR944P95P (2024)</td><td>9 kg</td><td>C</td><td>106</td><td>3:19</td><td>1:50</td><td>91 %</td></tr>
<tr><td>TR944P96P (2025)</td><td>9 kg</td><td>B</td><td>92</td><td>3:25</td><td>2:00</td><td>94 %</td></tr>
<tr><td>TR944P97X (2025)</td><td>9 kg</td><td>A</td><td>79</td><td>4:15</td><td>2:30</td><td>94 %</td></tr>
<tr><td>TR944P17X (2026)</td><td>10 kg</td><td>A</td><td>84</td><td>4:59</td><td>2:40</td><td>94 %</td></tr>
</tbody>
</table>

<h2>Fra klasse C til A på to år</h2>
<p>De tre 9 kg-modeller viser, hvordan AEG har strammet forbruget op. TR944P95P fra februar 2024 bruger 106 kWh pr. 100 tørringer, TR944P96P fra marts 2025 92 kWh og TR944P97X fra juli 2025 79 kWh. Mellem den ældste og den nyeste er det 27 kWh pr. 100 tørringer, eller omkring 42 kWh om året med tre tørringer om ugen, svarende til {{kr 42}} hvert år.</p>
<p>Prisen er tiden. Ved fuld fyldning tager eco-programmet 3 timer og 19 minutter på TR944P95P og 4 timer og 15 minutter på TR944P97X ifølge EPREL. Tumbleren tørrer ved lavere temperatur og lader varmepumpen arbejde længere, og det er det, der giver klasse A. Kører tumbleren om natten, betyder den ekstra time sjældent noget.</p>
<p>Halv fyldning følger samme mønster: 1 time og 50 minutter på TR944P95P mod 2 timer og 30 minutter på TR944P97X. Energimærkets tal er et gennemsnit af fuld og halv fyldning, så det betaler sig at samle tøjet til fulde tørringer.</p>
<p>Modelnumrene ligner hinanden så meget, at det er let at tage fejl. Tjek de sidste tegn: 95P, 96P eller 97X giver tre forskellige energiklasser.</p>

<h2>10 kg uden merforbrug pr. kg</h2>
<p>TR944P17X på 10 kg kom i EPREL i september 2026 med klasse A og 84 kWh pr. 100 tørringer. Pr. tørring er det lidt mere end TR944P97X, men pr. kg tøj er det lidt mindre: 0,084 kWh mod 0,088 kWh. Til gengæld tager en fuld eco-tørring næsten fem timer. Har I meget vasketøj, er én fuld tørring i den store tumbler billigere end to halve i en mindre.</p>

<h2>AEG 9000 mod 7000 og andre 9 kg-tumblere</h2>
<p>Den ældste 9000-model ligger tæt på <a href="/varmepumpe-toerretumbler/aeg-7000-toerretumbler/">AEG 7000</a>, hvor 9 kg-modellen TR734E95E bruger 103 kWh. TR944P96P har samme energimærke som <a href="/varmepumpe-toerretumbler/bosch-serie-8-toerretumbler/">Bosch Serie 8</a> med 92 kWh, og TR944P97X samme som Samsungs <a href="/varmepumpe-toerretumbler/samsung-dv90dg/">DV90DG6845LE</a> med 79 kWh. Det placerer de nyeste 9000-modeller i toppen blandt de 9 kg-tumblere, vi har modelsider om, målt på kWh pr. tørring.</p>
<p>Kondenseringsklassen er A på de tre nyeste: 94 % af fugten ender i beholderen eller afløbet og ikke i rummet. TR944P95P har klasse B med 91 %. Støjen er 60–63 dB.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>Tøjet kan vente i tromlen, og det gør tumbleren nem at flytte. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle fire har udskudt start, og ventetiden bruger 4 W ifølge EPREL, omkring 0,03 kWh på otte timer. Slukket bruger de 0,05–0,13 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Centrifugér ved højeste omdrejningstal, tøjet tåler — jo tørrere tøjet er, jo kortere kører tumbleren.</li>
<li>Brug eco-programmet til bomuld; det er det, energimærket er målt på.</li>
<li>Rens fnugfilteret efter hver tørring.</li>
<li>Tjek hele modelnummeret, før du køber: 95P, 96P og 97X har hver sin energiklasse.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en AEG 9000 tørretumbler?",
      answer:
        "Ifølge energimærket 1,06 kWh pr. tørring for TR944P95P, 0,92 kWh for TR944P96P, 0,79 kWh for TR944P97X og 0,84 kWh for 10 kg-modellen TR944P17X. Det svarer til {{kr 0,79}}–{{kr 1,06}} pr. tørring.",
    },
    {
      question: "Hvad koster en AEG 9000 tørretumbler om året?",
      answer: "Med tre tørringer om ugen 123–165 kWh om året afhængigt af modellen, svarende til {{kr 123-165}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har AEG TR944P96P?",
      answer: "Energiklasse B på det nye energimærke fra 2025 med 92 kWh pr. 100 tørringer og kondenseringsklasse A (94 %) ifølge EPREL.",
    },
    {
      question: "Hvad er forskellen på TR944P95P, TR944P96P og TR944P97X?",
      answer:
        "Energiklassen og tiden: C med 106 kWh og 3:19, B med 92 kWh og 3:25 og A med 79 kWh og 4:15 ved fuld fyldning. Alle tre tager 9 kg.",
    },
    {
      question: "Hvornår er det billigst at bruge tørretumbleren?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger kun 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — AEG TR944P95P (916099978), EU's energimærke", url: eprel("2074785") },
    { name: "EPREL — AEG TR944P96P (916900359), EU's energimærke", url: eprel("2292132") },
    { name: "EPREL — AEG TR944P97X (916900399), EU's energimærke", url: eprel("2377213") },
    { name: "EPREL — AEG TR944P17X (916900913, 10 kg), EU's energimærke", url: eprel("2803154") },
    { name: "AEG — 9000 AbsoluteCare Plus 9 kg TR944P96P (dansk produktside)", url: "https://www.aeg.dk/laundry/laundry/dryers/heat-pump-dryer/tr944p96p/" },
    { name: "EPREL — AEG TR734E95E (7000), EU's energimærke", url: eprel("2197488") },
    { name: "EPREL — Samsung DV90DG6845LE, EU's energimærke", url: eprel("2195726") },
  ],
  variants: [
    { name: "9 kg, 2024 (TR944P95P)", watts: { off: 0.05 }, kwhPer100Cycles: 106, energyClass: "C", source: 0 },
    { name: "9 kg, 2025 (TR944P96P)", watts: { off: 0.13 }, kwhPer100Cycles: 92, energyClass: "B", source: 1 },
    { name: "9 kg, klasse A (TR944P97X)", watts: { off: 0.13 }, kwhPer100Cycles: 79, energyClass: "A", source: 2 },
    { name: "10 kg (TR944P17X)", watts: { off: 0.13 }, kwhPer100Cycles: 84, energyClass: "A", source: 3 },
  ],
  publishDate: "2026-12-12",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default aeg9000Toerretumbler;
