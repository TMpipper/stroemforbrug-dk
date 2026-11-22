import type { ApplianceData } from "@/lib/types";

/**
 * Dampovn (indbygget dampovn / kombidampovn med varmluft) — energimærket efter forordning 65/2014 måler kun varmluft og over-/
 * undervarme (standardcyklus); ovne med damp som primær opvarmning er undtaget (art. 1, stk. 2, litra f). EEI-klasser: A+++ < 45,
 * A++ 45–62, A+ 62–82, A 82–107, B 107–132, C 132–159, D ≥ 159. Standardforbrug SEC = 0,0042 × V + 0,55 kWh (efterprøvet mod EPREL:
 * Siemens 0,69 kWh ved 71 l giver EEI 81,2). Mærketabellen = klassens midte for 71 l × 104 cyklusser om året (vores omregning).
 * Modeller fra Siemens' danske datablade + EPREL: HS736G1B1 dampovn 71 l A+ 0,87/0,69 kWh; CS736G1B1 kompakt dampovn 47 l A+
 * 0,73/0,61 kWh. Dampning: Stiftung Warentest (2006) 500 g kartofler — stort dampapparat 356–601 Wh, gryde 295, trykkoger 235,
 * mikroovn 157 Wh. Genopvarmning med damp og varmluft + damp i en time er vores skøn. Beregneren: kWh pr. gang, antal pr. uge × 52.
 */
const dampovn: ApplianceData = {
  slug: "dampovn",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: true,
    shiftable: false,
    motif: "ovn",
    synonyms: ["dampovn", "damp ovn", "kombidampovn", "kombi dampovn", "dampovn indbygning", "kompakt dampovn", "steam ovn", "dampkoger", "fullsteam", "ovn med damp", "dampovn strømforbrug"],
  },
  name: "Dampovn",
  article: "en",
  title: "Dampovn strømforbrug (2026) → kWh med damp og energimærke",
  description:
    "Se hvor meget strøm en dampovn bruger pr. gang med damp og varmluft, hvad energimærket måler og ikke måler, og hvordan den klarer sig mod gryden.",
  heading: "Strømforbrug for en dampovn: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En dampovn bruger typisk 0,36–0,6 kWh på at dampe en portion kartofler eller grøntsager og omkring 1 kWh, når den bager en time med varmluft og damp. En dampning koster cirka {{kr 0,48}} ved månedens elpris. Med tre retter om ugen bliver det omkring 75 kWh om året, eller {{kr 75}}.",
  kwhRange: [15, 250],
  typicalKwh: 75,
  wattage: 3600,
  standbyWatts: 0.5,
  energyLabels: [
    { class: "A++", kwhPerYear: 47 },
    { class: "A+", kwhPerYear: 64 },
    { class: "A", kwhPerYear: 83 },
    { class: "B", kwhPerYear: 105 },
    { class: "C", kwhPerYear: 128 },
  ],
  models: [
    { brand: "Siemens", model: "iQ700 HS736G1B1 dampovn, 71 l", kwh: 72, energyClass: "A+" },
    { brand: "Siemens", model: "iQ700 CS736G1B1 kompakt dampovn, 47 l", kwh: 63, energyClass: "A+" },
  ],
  seasonalProfile: [1.1, 1.06, 1.02, 0.97, 0.93, 0.88, 0.86, 0.89, 0.98, 1.05, 1.1, 1.16],
  content: `<h2>To slags dampovne</h2>
<p>En dampovn tilbereder maden i vanddamp i stedet for, eller sammen med, varm luft. Damp fra en lille dampgenerator fylder ovnrummet, og maden bliver tilberedt ved omkring 100 grader uden at tørre ud. Der findes to typer. Den rene dampovn kan kun dampe og bliver mest brugt til grøntsager, fisk, ris og opvarmning. Kombidampovnen er en almindelig ovn med varmluft og grill, der også kan dampe eller tilsætte damp, mens den bager.</p>
<p>Den forskel betyder noget for energimærket. EU's forordning om energimærkning af ovne gælder ikke for ovne, hvor damp er den primære opvarmning, så en ren dampovn har intet mærke. En kombidampovn har et mærke, men det måler kun de almindelige ovnfunktioner. Dampfunktionen indgår ikke i tallet.</p>

<h2>Hvad bruger dampningen?</h2>
<p>At dampe kræver, at vand bliver kogt til damp, og at ovnrummet og maden varmes op til omkring 100 grader. Det er mere end en gryde med låg skal bruge, fordi ovnrummet er større end gryden. Stiftung Warentest målte i sin tid forbruget for 500 gram kartofler. Et stort dampapparat brugte 356–601 Wh, en almindelig gryde 295 Wh, en trykkoger 235 Wh og en mikroovn kun 157 Wh. En dampning i en stor dampovn koster altså cirka {{kr 0,36-0,6}} ved månedens elpris.</p>
<table>
<thead><tr><th>Funktion og ret</th><th>kWh pr. gang</th><th>Pris pr. gang</th><th>kWh om året ved 3 gange om ugen</th></tr></thead>
<tbody>
<tr><td>Genopvarmning af rester med damp, ca. 15 min. (vores skøn)</td><td>0,25 kWh</td><td>{{kr 0,25}}</td><td>39 kWh</td></tr>
<tr><td>Dampning af 500 g kartofler eller grøntsager (målt)</td><td>0,36–0,6 kWh</td><td>{{kr 0,36-0,6}}</td><td>75 kWh ved 0,48</td></tr>
<tr><td>Varmluft med damp, en times bagning (vores skøn)</td><td>1,1 kWh</td><td>{{kr 1,1}}</td><td>172 kWh</td></tr>
</tbody>
</table>
<p>Varmluft med damp er vores skøn ud fra den almindelige ovn: en schweizisk måling gengivet af Øko-Test viser, at en ovn bruger omkring 1,15 kWh den første time ved 200 grader. Damptilsætningen koster lidt ekstra til at koge vandet, men til gengæld bager mange retter ved en lidt lavere temperatur.</p>

<h2>Dampovn mod gryde, trykkoger og mikroovn</h2>
<p>Til en enkelt portion grøntsager er dampovnen ikke det sparsomste. Gryden med låg, trykkogeren og især <a href="/mikroovn/">mikroovnen</a> bruger mindre, fordi de kun varmer maden og lidt vand. Dampovnens fordel er kapaciteten: du kan dampe kartofler, grøntsager og fisk på tre plader på én gang, og så deles opvarmningen på det hele. En stor dampning til en familie behøver derfor ikke koste mere end tre gryder på komfuret.</p>
<p>Skal du lave gryderetter og ris, bruger en <a href="/multikoger/">multikoger</a> markant mindre end dampovnen. Til brød, steg og gratin er en kombidampovn til gengæld et godt valg, fordi dampen giver sprød skorpe uden at forlænge bagetiden.</p>

<h2>Energimærket: hvad betyder det for en kombidampovn?</h2>
<p>Energimærket for ovne bygger på en standardcyklus, hvor ovnen varmer en våd mursten op med varmluft eller over- og undervarme. Klassen afhænger af, hvor meget ovnen bruger i forhold til et standardforbrug, der stiger med ovnrummets størrelse. For et ovnrum på 71 liter er standardforbruget 0,85 kWh pr. cyklus. Klasse A+ betyder, at ovnen bruger 62–82 procent af det, klasse A 82–107 procent.</p>
<p>Siemens' dampovn HS736G1B1 med 71 liter er mærket A+ og bruger 0,69 kWh pr. standardcyklus med varmluft og 0,87 kWh med over- og undervarme. Den kompakte udgave CS736G1B1 med 47 liter bruger 0,61 og 0,73 kWh. Tabellen over energiklasser og modeltabellen længere nede på siden omregner mærkets standardcyklus til et år med 104 cyklusser, svarende til to gange om ugen. Det er vores omregning, ikke et tal fra mærket, og det rigtige forbrug afhænger af, hvad og hvor længe du bager.</p>

<h2>Damp, afkalkning og tørring</h2>
<p>Dampen kommer fra en dampgenerator, der hos fx Siemens sidder uden for ovnrummet og fyldes fra en vandtank. Kalk i dampgeneratoren gør den langsommere og øger forbruget, så afkalkningsprogrammet bør køres, når ovnen beder om det. Selve afkalkningen bruger efter vores skøn lidt strøm, fordi den varmer afkalkningsmidlet op, men det er en lille udgift i forhold til en tilkalket generator.</p>
<p>Efter dampning står der kondensvand i ovnen. Nogle ovne har et tørreprogram, der varmer rummet op for at fjerne fugten. Det er nemmere at tørre ovnen af med en klud og lade lågen stå på klem. Neff skriver, at klassiske dampovne ikke kan kombineres med pyrolyserens, mens deres ovne med damptilsætning godt kan – læs mere om selvrensning på vores side om <a href="/pyrolyseovn/">pyrolyseovnen</a>.</p>

<h2>Hvornår på døgnet bruges dampovnen?</h2>
<p>Dampovnen bruges som andre ovne mest til aftensmaden, når elprisen er højest. Den kan ikke flyttes ret meget, men det kan godt betale sig at samle tilberedningen: damp kartofler, grøntsager og fisk på én gang i stedet for at bruge ovnen og to plader på komfuret. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Sådan holder du dampovnens forbrug nede</h2>
<ol>
<li><strong>Fyld ovnen</strong> – damp flere ting på én gang, så opvarmningen deles.</li>
<li><strong>Brug mikroovnen</strong> til en enkelt portion rester; damp er bedst til større mængder.</li>
<li><strong>Afkalk</strong>, når ovnen beder om det, så dampgeneratoren arbejder effektivt.</li>
<li><strong>Spring tørreprogrammet over</strong> og tør ovnen af med en klud i stedet.</li>
<li><strong>Vælg den kompakte model</strong>, hvis du mest damper – et mindre ovnrum bruger mindre.</li>
</ol>
<p>Vil du sammenligne med den almindelige <a href="/ovn/">ovn</a> uden damp, finder du dens forbrug pr. time og pr. år på vores side om ovnen.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en dampovn?",
      answer:
        "Omkring 0,36–0,6 kWh på at dampe en portion kartofler eller grøntsager og cirka 1,1 kWh på en times bagning med varmluft og damp. En dampning koster omkring {{kr 0,48}} ved månedens elpris.",
    },
    {
      question: "Bruger en dampovn mere strøm end en gryde?",
      answer:
        "Til en enkelt portion, ja. Stiftung Warentest målte 356–601 Wh i et stort dampapparat mod 295 Wh i en gryde for 500 gram kartofler. Dampovnen vinder, når du damper flere ting på én gang.",
    },
    {
      question: "Har en dampovn et energimærke?",
      answer:
        "En kombidampovn med varmluft har et EU-energimærke, men det måler kun de almindelige ovnfunktioner, ikke dampen. En ren dampovn, hvor damp er den primære opvarmning, er undtaget og har intet mærke.",
    },
    {
      question: "Hvor mange watt har en dampovn?",
      answer:
        "Siemens' dampovn på 71 liter har en samlet tilslutningseffekt på 3,6 kW og den kompakte på 47 liter 3,3 kW. Den fulde effekt bruges kun under opvarmningen.",
    },
    {
      question: "Hvad koster en dampovn i strøm om året?",
      answer:
        "Med tre dampninger om ugen bliver det omkring 75 kWh om året, hvilket koster cirka {{kr 75}} ved månedens elpris. Bager du også med varmluft, kommer ovnens almindelige forbrug oveni.",
    },
  ],
  relatedSlugs: ["ovn", "mikroovn", "multikoger", "pyrolyseovn", "komfur"],
  sources: [
    { name: "Siemens — HS736G1B1 dampovn til indbygning, dansk datablad", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/HS736G1B1.pdf" },
    { name: "Siemens — CS736G1B1 kompakt dampovn til indbygning, dansk datablad", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/CS736G1B1.pdf" },
    { name: "EPREL — EU's produktdatabase, ovne (Siemens HS736G1B1)", url: "https://eprel.ec.europa.eu/screen/product/ovens/1053782" },
    { name: "EPREL — EU's produktdatabase, ovne (Siemens CS736G1B1)", url: "https://eprel.ec.europa.eu/screen/product/ovens/1053790" },
    { name: "EUR-Lex — Forordning (EU) 65/2014 om energimærkning af ovne og emhætter", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0065" },
    { name: "Neff — Wie funktioniert ein Pyrolyse-Backofen? (dampovne og pyrolyse)", url: "https://www.neff-home.com/de/produktberatung/pyrolyse-backofen-reinigen" },
    { name: "Stiftung Warentest — Vitaminschonende Garmethoden: Energieverbrauch für 500 g Kartoffeln (2006)", url: "https://www.test.de/Vitaminschonende-Garmethoden-Dampf-ist-gesund-1487944-1487745/" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (ovn pr. time)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
  ],
  calculatorConfig: {
    title: "Dampovn forbrugsberegner",
    options: [
      { label: "Genopvarmning med damp, ca. 15 min.", kwhPerUse: 0.25 },
      { label: "Dampning af kartofler eller grøntsager", kwhPerUse: 0.48 },
      { label: "Varmluft med damp, en time", kwhPerUse: 1.1 },
    ],
    usageLabel: "Antal gange pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 3,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-04",
  updated: "2026-11-22",
};

export default dampovn;
