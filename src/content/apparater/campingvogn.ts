import type { ApplianceData } from "@/lib/types";

/**
 * Campingvogn på 230 V (strøm fra campingpladsens standerstik): køleskab, varme, lys og opladning — pr. døgn.
 * Intet EU-energimærke for vognen; absorptionskøleskabe til campingvogne er mobile og har ingen mærketabel her.
 * Tal: Thetford datablad 2026 (N4080-E+ 153 W / 2,6 kWh pr. døgn, N4090-E+ 153 W / 2,9, N4145-N4175 220 W / 4,3,
 * N4141/N4142 240 W / 4,5 kWh pr. døgn, målt efter IEC 62552-2020), Dometic RMD 10.5XT (250 W), RUA 5208X (195 W),
 * Truma Combi 4 E (900/1.800 W, 3,9/7,8 A), Truma Ultraheat (500/1.000/2.000 W), Vejers Strand Camping (10 A),
 * promobil (16 A er standard, nogle pladser 6 eller 10 A), FDM (kabel mindst 2,5 mm², 16 A, blå CEE-stik),
 * DCU-Camping Grønninghoved Strand (pris pr. kWh og pr. døgn på prislisten — ingen beløb gengivet).
 * Døgnbudgetterne (lys, opladning, kaffe, timer med el-varme) er vores skøn.
 */
const campingvogn: ApplianceData = {
  slug: "campingvogn",
  meta: {
    category: "transport",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "hus",
    synonyms: ["campingvogn", "campingvogn strøm", "strøm på campingpladsen", "camping el", "autocamper strøm", "campingvogn køleskab", "truma el", "absorptionskøleskab", "campingvogn 230 v"],
  },
  name: "Campingvogn",
  article: "en",
  title: "Campingvogn strømforbrug (2026) → kWh i døgnet på pladsen",
  description:
    "Se hvor meget strøm en campingvogn bruger i døgnet på campingpladsen: køleskab, el-varme fra Truma, lys og opladning, og hvad 6, 10 og 16 A kan klare.",
  heading: "Strømforbrug for en campingvogn: kWh i døgnet og pris om året",
  quickAnswer:
    "En campingvogn bruger efter vores skøn omkring 4 kWh i døgnet om sommeren, når køleskabet kører på 230 V, og lys og opladning kommer oveni. Det svarer til {{kr 4}} i døgnet ved {{pris_kwh}}, som er prisen derhjemme — på pladsen betaler du campingpladsens egen pris. Med el-varme i kolde nætter kan det let blive 9-20 kWh i døgnet.",
  kwhRange: [10, 2000],
  typicalKwh: 120,
  wattage: 220,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.3, 0.3, 0.5, 0.9, 1.4, 1.8, 2.4, 2.2, 1.1, 0.6, 0.3, 0.2],
  content: `<h2>Hvad bruger strøm i en campingvogn?</h2>
<p>Når campingvognen er tilsluttet standerstikket på campingpladsen, kører det meste på 230 V: køleskabet, varmen, hvis du vælger el i stedet for gas, lyset, vandpumpen, opladning af telefoner og computere, og de apparater, du selv har med — en elkedel, en kaffemaskine eller et lille tv. Det store, faste forbrug er køleskabet, der kører hele døgnet. Det store, svingende forbrug er varmen.</p>
<p>Et døgn om sommeren ligger efter vores skøn omkring 4 kWh. Køleskabet står for det meste af det. Om foråret og efteråret, når nætterne er kolde, og du lader varmeanlægget køre på el i stedet for gas, kan det let blive to eller fem gange så meget.</p>

<h2>Køleskabet: kører hele døgnet</h2>
<p>De fleste campingvogne har et absorptionskøleskab, der kan køre på 230 V, på 12 V under kørslen og på gas. Det er lydløst, men bruger typisk mere strøm end et almindeligt køleskab i et hus, fordi det køler med varme i stedet for en kompressor. Thetford oplyser i sit datablad for 2026, at N4080-E+ og N4090-E+ bruger 153 W på 230 V og 2,6-2,9 kWh i døgnet, mens de større N4145-N4175 bruger 220 W og 4,3 kWh i døgnet. Tallene er målt efter standarden IEC 62552. Dometic oplyser 195 W for RUA 5208X og 250 W for det store RMD 10.5XT.</p>
<table>
<thead><tr><th>Køleskab (eksempel)</th><th>Effekt på 230 V</th><th>kWh i døgnet</th><th>Pris i døgnet</th><th>30 døgn</th></tr></thead>
<tbody>
<tr><td>Thetford N4080-E+</td><td>153 W</td><td>2,6</td><td>{{kr 2,6}}</td><td>{{kr 78}}</td></tr>
<tr><td>Thetford N4090-E+</td><td>153 W</td><td>2,9</td><td>{{kr 2,9}}</td><td>{{kr 87}}</td></tr>
<tr><td>Thetford N4145-N4175</td><td>220 W</td><td>4,3</td><td>{{kr 4,3}}</td><td>{{kr 129}}</td></tr>
<tr><td>Thetford N4141/N4142</td><td>240 W</td><td>4,5</td><td>{{kr 4,5}}</td><td>{{kr 135}}</td></tr>
</tbody>
</table>
<p>På en varm dag med solen på vognens side arbejder køleskabet hårdere. Sørg for, at ventilationsristene på ydersiden ikke er dækket af fortelt eller cykler, og fyld ikke skabet med varme varer på én gang. Til korte ture og til bilen kan en <a href="/koeleboks/">køleboks</a> med kompressor være et sparsomt supplement.</p>

<h2>Varmen: det store forbrug</h2>
<p>Mange campingvogne har et Truma Combi-anlæg, der varmer både luft og vand og kan køre på gas, på el eller på begge dele. Truma oplyser, at Combi 4 E har en el-effekt på 900 eller 1.800 W og trækker 3,9 eller 7,8 ampere ved 230 V. Truma Ultraheat, et el-tilskud til Trumas S-gasvarmere, har 500, 1.000 eller 2.000 W. Kører varmeren på 1.800 W i fem timer en kølig aften og nat, bruger den 9 kWh — mere end to døgns køleskab.</p>
<table>
<thead><tr><th>Døgn (vores skøn)</th><th>Køleskab</th><th>Varme på el</th><th>Lys, pumpe, opladning, kaffe</th><th>kWh i døgnet</th><th>Pris</th></tr></thead>
<tbody>
<tr><td>Sommerdag</td><td>ca. 3 kWh</td><td>ingen</td><td>ca. 1 kWh</td><td>4</td><td>{{kr 4}}</td></tr>
<tr><td>Kølig forårsdag</td><td>ca. 3 kWh</td><td>900 W i 5-6 timer</td><td>ca. 1 kWh</td><td>9</td><td>{{kr 9}}</td></tr>
<tr><td>Kold periode</td><td>ca. 3 kWh</td><td>1.800 W i ca. 9 timer</td><td>ca. 1 kWh</td><td>20</td><td>{{kr 20}}</td></tr>
</tbody>
</table>
<p>Fordelingen er vores eget skøn og ikke en måling. Den viser, hvorfor det er varmen, der bestemmer døgnets forbrug. Bruger du gas til varmen, falder strømforbruget til sommerniveauet — men så betaler du for gassen i stedet.</p>

<h2>6, 10 eller 16 ampere</h2>
<p>Campingpladserne sætter en grænse for, hvor meget strøm du kan trække på én gang. Det tyske campingblad promobil skriver, at 16 ampere er standard på de fleste pladser, men at nogle begrænser til 6 eller 10 ampere. På Vejers Strand Camping er pladserne med strøm for eksempel på 10 ampere. Grænsen er en effekt, ikke en mængde: 10 ampere ved 230 V er 2.300 W.</p>
<ul>
<li><strong>6 ampere (cirka 1.380 W)</strong>: køleskab og Truma Combi på 900 W kan køre samtidig, men ikke en elkedel oveni.</li>
<li><strong>10 ampere (cirka 2.300 W)</strong>: Combi på 1.800 W og køleskab går lige, men en elkedel eller en hårtørrer samtidig slår sikringen i standeren fra.</li>
<li><strong>16 ampere (cirka 3.680 W)</strong>: plads til varme, køleskab og et køkkenapparat ad gangen.</li>
</ul>
<p>FDM anbefaler et forlængerkabel på mindst 2,5 mm², godkendt til 16 ampere og med de blå CEE-stik, der bruges på campingpladserne. Rul kablet helt ud; et sammenrullet kabel kan blive meget varmt under høj belastning.</p>

<h2>Hvad betaler du på pladsen?</h2>
<p>Campingpladsen afregner selv strømmen, og priserne svinger fra plads til plads. Nogle afregner efter en måler pr. kWh, andre tager en fast pris pr. døgn, og nogle har begge dele på prislisten — DCU-Camping Grønninghoved Strand oplyser for eksempel både en pris pr. kWh og en pris pr. døgn. Priserne på siden her er regnet med {{pris_kwh}}, som er prisen derhjemme, så de viser, hvad samme strøm ville koste i dit eget hus. Spørg i receptionen, hvordan pladsen afregner, og hvad en kWh koster der.</p>
<p>Bruger du meget el-varme, kan en fast døgnpris være en fordel; bruger du kun køleskab og lys, kan måler være billigere. Det afhænger helt af pladsens priser.</p>

<h2>Hvornår bruger campingvognen strøm?</h2>
<p>Køleskabet kører hele døgnet, så det er døgnets gennemsnit, der tæller. Varmen bruges, når det er koldt — om aftenen og natten — og lys og opladning om aftenen. Der er ikke meget at flytte. Betaler du pr. kWh, er der intet at hente ved at vente med at lade telefonen; betaler du en fast døgnpris, er strømmen allerede betalt. Boksen længere oppe på siden viser dagens timepriser derhjemme.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Hold køleskabets ventilationsriste fri, og parker skabets side i skygge, hvis du kan.</li>
<li>Skru ned for varmen om dagen, og luk vinduer og døre i fortelt.</li>
<li>Brug gas til varmen, hvis det er billigere end pladsens strøm.</li>
<li>Kog vand på gasblusset i stedet for en elkedel, når pladsens grænse er lav.</li>
<li>Sluk for køleskabet og lad lågen stå på klem, når vognen står opmagasineret.</li>
</ol>
<p>Kører du på el til pladsen, er det en anden historie: en <a href="/elbil/">elbil</a> med campingvogn bruger mærkbart mere strøm pr. kilometer end uden. Brug beregneren ovenfor til at se, hvad dine døgn på pladsen bruger på et år, og læs om <a href="/motorvarmer/">motorvarmeren</a>, hvis du også kører med bilen om vinteren.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en campingvogn i døgnet?",
      answer:
        "Efter vores skøn omkring 4 kWh om sommeren med køleskab, lys og opladning, svarende til {{kr 4}} ved prisen derhjemme. Med el-varme i kolde perioder kan det blive 9-20 kWh i døgnet.",
    },
    {
      question: "Hvor meget strøm bruger køleskabet i en campingvogn?",
      answer:
        "Thetford oplyser 2,6-4,5 kWh i døgnet på 230 V for sine absorptionskøleskabe, med en effekt på 153-240 W. Et døgn koster derfor {{kr 2,6}}-{{kr 4,5}} ved prisen derhjemme.",
    },
    {
      question: "Hvor meget strøm bruger Truma-varmen på el?",
      answer:
        "Truma oplyser 900 eller 1.800 W for Combi 4 E på el. Fem timer på 1.800 W bruger 9 kWh, svarende til {{kr 9}} ved prisen derhjemme.",
    },
    {
      question: "Hvad kan jeg have tændt på 10 ampere?",
      answer:
        "10 ampere ved 230 V er cirka 2.300 W. Køleskab og Truma Combi på 1.800 W går lige, men en elkedel eller hårtørrer samtidig slår sikringen i standeren fra.",
    },
    {
      question: "Hvad koster strøm på campingpladsen?",
      answer:
        "Campingpladsen fastsætter selv prisen, enten pr. kWh efter måler eller som en fast pris pr. døgn. Spørg i receptionen. Priserne her er regnet med {{pris_kwh}}, som er prisen derhjemme.",
    },
  ],
  relatedSlugs: ["koeleboks", "motorvarmer", "elbil", "el-scooter", "varmeblaeser"],
  sources: [
    { name: "Thetford — Absorptionskøleskabe 2026, datablad (effekt og kWh pr. døgn)", url: "https://www.thetford.com/app/uploads/2026/02/7.2_Thetford_Absorption-refrigerators_2026_SV_LR-1.pdf" },
    { name: "Dometic — RMD 10.5XT", url: "https://www.dometic.com/en/product/dometic-rmd-10-5xt-9620012756" },
    { name: "Dometic — RUA 5208X", url: "https://www.dometic.com/en-nz/product/dometic-rua-5208x-9600015786" },
    { name: "Truma — Combi 4 E", url: "https://truma.com/products/heating-systems/combi/combi-4-e" },
    { name: "Truma — Ultraheat", url: "https://www.truma.com/products/heating-systems/s-heaters/truma-ultraheat/" },
    { name: "promobil — Stromspar-Tipps für den Wohnwagen", url: "https://www.promobil.de/tipps/stromsparer-tipps-fuer-den-wohnwagen-vermeiden-sie-hohe-stromkosten/" },
    { name: "Vejers Strand Camping — pladskort 2026", url: "https://www.vejersstrandcamping.de/media/cw5nssa0/vejersstrand_pladskort_dkplusde_2026_screen.pdf" },
    { name: "FDM — El og gas i campingvognen", url: "https://fdm.dk/alt-om-biler/koer-selv-ferie/camping/el-gas-campingvognen" },
    { name: "DCU — DCU-Camping Grønninghoved Strand (priser)", url: "https://www.dcu.dk/da/dcu-camping/dcu-camping-groenninghoved-strand" },
  ],
  calculatorConfig: {
    title: "Beregn campingvognens strømforbrug",
    options: [
      { label: "Sommer: køleskab, lys og opladning (ca. 4 kWh/døgn)", kwhPerUse: 4 },
      { label: "Kølig periode: el-varme 900 W nogle timer (ca. 9 kWh/døgn)", kwhPerUse: 9 },
      { label: "Kold periode: el-varme 1.800 W meget af døgnet (ca. 20 kWh/døgn)", kwhPerUse: 20 },
    ],
    usageLabel: "Døgn på campingpladsen pr. år",
    usageUnit: "døgn/år",
    usageMin: 1,
    usageMax: 200,
    usageDefault: 30,
    usageStep: 1,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-17",
  updated: "2026-11-22",
};

export default campingvogn;
