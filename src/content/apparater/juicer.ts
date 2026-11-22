import type { ApplianceData } from "@/lib/types";

/**
 * Juicer / saftpresser — homeandsmart.de: slow juicer Panasonic MJ-L700KXE 150 W ved 45 omdr./min.; centrifugaljuicere
 * Philips HR1921/20 og KESSER 1.100 W, anbefaling »omkring 700 W« som minimum for en centrifuge. Bosch: centrifugalen
 * VitaJuice 1.200 W; producentens påstand om ca. 30 % mere saft med slow juicer. kWh pr. gang er vores skøn (mærkeeffekt × tid
 * som loft, motoren trækker under loftet). Beregneren: kWh pr. gang (2 glas), antal pr. uge × 52. Intet EU-energimærke.
 */
const juicer: ApplianceData = {
  slug: "juicer",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["juicer", "slow juicer", "slowjuicer", "saftpresser", "centrifugaljuicer", "saftcentrifuge", "juicepresser", "frugtpresser", "hurom", "grøn juice"],
  },
  name: "Juicer",
  title: "Juicer strømforbrug (2026) → slow juicer vs. centrifugal",
  description:
    "Se hvor meget strøm en juicer bruger pr. glas og om året, hvorfor en slow juicer på 150 W bruger mindre end en centrifuge, og hvad saftudbyttet betyder.",
  heading: "Strømforbrug for en juicer: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En juicer bruger meget lidt strøm: to glas saft er efter vores skøn 0,015–0,025 kWh, alt efter om det er en slow juicer eller en centrifuge, svarende til {{oere 0,015-0,025}} ved månedens elpris. Med saft fire gange om ugen bliver det omkring 3 kWh om året, eller {{kr 3}}. Frugten og grøntsagerne koster mange gange mere end strømmen.",
  kwhRange: [0.3, 20],
  typicalKwh: 3,
  wattage: 200,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.05, 1.0, 0.95, 0.9],
  content: `<h2>To slags juicere: langsom presning og centrifuge</h2>
<p>En juicer skiller saften fra frugtkødet, og det kan gøres på to måder. En slow juicer har en snegl, der langsomt presser frugt og grønt mod en si, typisk med 40–80 omdrejninger i minuttet. Motoren er lille, men et gear giver den kraft. En centrifugaljuicer river frugten i stykker på en roterende skive med tusindvis af omdrejninger i minuttet og slynger saften ud gennem en si. Det kræver en langt kraftigere motor.</p>
<p>Forskellen ses tydeligt i effekten. Den slow juicer fra Panasonic, som det tyske sammenligningssite homeandsmart.de har med, har 150 W og kører med 45 omdrejninger i minuttet, mens centrifugaljuicere fra Philips og KESSER har 1.100 W, og Bosch' centrifuge har 1.200 W. Homeandsmart.de anbefaler omkring 700 W som et minimum for en centrifuge. Men selv den kraftige juicer kører kun i et par minutter, og derfor er forbruget lille: to glas saft er efter vores skøn 0,015–0,025 kWh, svarende til {{oere 0,015-0,025}} ved månedens elpris.</p>

<h2>Forbrug pr. gang</h2>
<p>Producenterne oplyser kun effekten, ikke forbruget pr. glas. Tallene er derfor vores skøn ud fra effekt og tid. Mærkeeffekten gange tiden er et loft; motoren trækker typisk mindre, når den ikke er fuldt belastet.</p>
<table>
<thead><tr><th>Juicer og mængde</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Slow juicer, 150–250 W, 2 glas</td><td>Ca. 8 min.</td><td>0,015 kWh</td><td>{{oere 0,015}}</td></tr>
<tr><td>Centrifugaljuicer, 700–1.200 W, 2 glas</td><td>Ca. 2 min.</td><td>0,025 kWh</td><td>{{oere 0,025}}</td></tr>
<tr><td>Slow juicer, 1 liter til ugen</td><td>Ca. 20 min.</td><td>0,04 kWh</td><td>{{oere 0,04}}</td></tr>
<tr><td>Centrifugaljuicer, 1 liter æblesaft</td><td>Ca. 5 min.</td><td>0,07 kWh</td><td>{{oere 0,07}}</td></tr>
</tbody>
</table>
<p>Selv den dyreste række er under en tiendedel kWh. Juicerens forbrug er i samme lille klasse som en <a href="/blender/">blender</a>, og det er ikke strømmen, der gør saft dyr.</p>

<h2>Hvorfor bruger den langsomme juicer mindst?</h2>
<p>Det lyder bagvendt, at den juicer, der arbejder længst, bruger mindst strøm, men det hænger sammen med, hvordan de to typer arbejder. En slow juicer presser frugten med et gear, der omsætter en lille motors hurtige omdrejninger til langsomme, kraftige omdrejninger. Den bruger ikke energi på at slynge frugt og saft rundt, og den varmer ikke saften op. En centrifuge bruger det meste af sin energi på at få skiven op i høj fart og holde den der, mens frugten bliver revet.</p>
<p>Til gengæld tager slow juiceren længere tid, fordi frugten skal skæres i mindre stykker og fødes langsomt ind. Er der meget, der skal presses – fx æblesaft i høstsæsonen – kan centrifugen være hurtigere færdig. Forskellen i strøm er dog så lille, at den ikke bør afgøre, hvilken du vælger.</p>
<p>Til appelsiner og citroner findes også den elektriske citruspresse, hvor en lille motor drejer en kegle, mens du trykker frugten ned. Den kører kun, mens der trykkes, og har en endnu mindre motor end slow juiceren, så dens forbrug er så lille, at det næppe kan måles på et almindeligt strømmåler. Til et glas appelsinjuice om morgenen er den det mest enkle apparat af de tre.</p>

<h2>Saftudbyttet betyder mere end strømmen</h2>
<p>Det, der virkelig koster ved juice, er råvarerne. Bosch skriver, at deres slow juicer giver omkring 30 procent mere saft end en almindelig centrifuge, og at centrifuger giver mindre saft af bladgrønt, kål og bær. Det er producentens egne tal, men de peger på det vigtige: får du mere saft ud af den samme pose æbler eller gulerødder, sparer du langt mere end strømmen til hele året.</p>
<p>Frugtkødet, der bliver tilbage, kan bruges. Det kan bages i brød, røres i suppe eller tørres til knækbrød og frugtlæder i en <a href="/dehydrator/">dehydrator</a>. Tørringen bruger mere strøm end selve juicingen, men udnytter noget, der ellers ville blive smidt ud.</p>

<h2>Hvornår på døgnet bruges juiceren?</h2>
<p>Juice laves typisk om morgenen eller i weekenden. Morgenens timer ligger ofte lidt højere i pris end natten, men med et forbrug på et par hundrededele kWh er det uden betydning. Skal du presse saft til hele ugen på én gang, er det mere praktisk end økonomisk at vælge et bestemt tidspunkt. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>
<p>Frisk saft holder kun et par dage i <a href="/koeleskab/">køleskabet</a>, så pres hellere lidt ad gangen end meget, der skal smides ud.</p>

<h2>Standby og rengøring</h2>
<p>De fleste juicere har en simpel tænd/sluk- eller frem/tilbage-knap og bruger intet, når de er slukket. Modeller med display kan have et lille standbyforbrug under én watt efter EU's regler for husholdningsapparater, og så er det nemmest at tage stikket ud. Rengøringen bruger ingen strøm, når den sker under hanen med en børste. Kommer delene i opvaskemaskinen, kører de med i en vask, du alligevel kører.</p>

<h2>Sådan får du mest ud af juiceren</h2>
<ol>
<li><strong>Vælg type efter råvarerne</strong> – slow juicer til bladgrønt og bær, centrifuge til store mængder hårde æbler og gulerødder.</li>
<li><strong>Skær frugten, så den passer</strong>, så juiceren ikke skal arbejde med for store stykker.</li>
<li><strong>Pres kolde råvarer</strong> fra køleskabet, så saften kan drikkes med det samme og holder længere.</li>
<li><strong>Brug frugtkødet</strong> i bagværk, suppe eller tørret som snack.</li>
<li><strong>Rens sien med det samme</strong> – indtørret frugtkød gør, at juiceren arbejder hårdere næste gang.</li>
</ol>
<p>Saft kan også fryses til slush i en <a href="/slush-ice-maskine/">slush ice-maskine</a>, der bruger omkring 0,08 kWh på en hel beholder.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en juicer?",
      answer:
        "Meget lidt. To glas saft er efter vores skøn 0,015–0,025 kWh, svarende til {{oere 0,015-0,025}} ved månedens elpris. Med saft fire gange om ugen bliver det omkring 3 kWh om året.",
    },
    {
      question: "Bruger en slow juicer mindre strøm end en centrifuge?",
      answer:
        "Ja, efter vores skøn. En slow juicer har ofte 150–250 W, mens en centrifuge har 700–1.200 W. Slow juiceren kører længere, men det samlede forbrug er lavere – dog så lille for begge, at det ikke bør afgøre valget.",
    },
    {
      question: "Hvor mange watt har en juicer?",
      answer:
        "Slow juicere har typisk 150–250 W, fx 150 W for en Panasonic-model. Centrifugaljuicere har 700–1.200 W; Philips og KESSER har 1.100 W, og Bosch' VitaJuice har 1.200 W.",
    },
    {
      question: "Hvad koster en juicer i strøm om året?",
      answer:
        "Med to glas saft fire gange om ugen omkring 3 kWh om året, eller {{kr 3}} ved månedens elpris. Råvarerne koster mange gange mere end strømmen.",
    },
  ],
  relatedSlugs: ["blender", "dehydrator", "slush-ice-maskine", "koekkenmaskine", "opvaskemaskine"],
  sources: [
    { name: "homeandsmart.de — Entsafter Test & Vergleich (effekt og omdrejninger pr. model)", url: "https://www.homeandsmart.de/entsafter-test-vergleich" },
    { name: "Bosch Home — Entsafter kaufen: Zentrifuge oder Slow Juicer?", url: "https://www.bosch-home.com/de/bosch-erleben/magazin/gesund-leben/entsafter-kaufen" },
  ],
  calculatorConfig: {
    title: "Juicer forbrugsberegner",
    options: [
      { label: "Slow juicer, 2 glas", kwhPerUse: 0.015 },
      { label: "Centrifugaljuicer, 2 glas", kwhPerUse: 0.025 },
      { label: "Slow juicer, 1 liter", kwhPerUse: 0.04 },
      { label: "Centrifugaljuicer, 1 liter", kwhPerUse: 0.07 },
    ],
    usageLabel: "Antal gange pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 4,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-02",
  updated: "2026-11-22",
};

export default juicer;
