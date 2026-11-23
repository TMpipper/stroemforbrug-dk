import type { ApplianceData } from "@/lib/types";

/**
 * Rugemaskine — hobbyrugemaskiner til hønseæg, ænder og vagtler. Intet EU-energimærke.
 * Tal: Brinsea Mini II Advance (maks. 20 W, typisk 12 W), Maxi 24 Advance (maks. 40 W, typisk 24 W) og Ovation 28 EX
 * (maks. 60 W, typisk 30 W), alle fra Brinseas produktsider; Borotto Lumia 8 (maks. 50 W, gennemsnit 20 W, Rivista di
 * Agraria); Novital Covatutto 24 Eco (maks. 105 W, AgriEuro). Rugetider og temperatur: Mississippi State University
 * Extension. Kyllingemødre: Brinsea EcoGlow (12-18 W mod 250 W for en varmelampe), Kerbl CosyHeat (25/50 W).
 * kWh pr. udrugning = typisk watt × 24 × rugedage (vores omregning); Covatutto-tallet ved halv tid er vores skøn.
 */
const rugemaskine: ApplianceData = {
  slug: "rugemaskine",
  meta: {
    category: "hobby",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["rugemaskine", "æggerugemaskine", "rugeapparat", "inkubator til æg", "incubator", "brinsea", "udrugning af æg", "rugemaskine til høns", "kyllingemor", "varmeplade til kyllinger"],
  },
  name: "Rugemaskine",
  article: "en",
  title: "Rugemaskine strømforbrug (2026) → kWh pr. udrugning af æg",
  description:
    "En rugemaskine til hønseæg bruger 6-15 kWh på 21 dage, afhængigt af størrelse. Se tallene for ænder og vagtler, og hvad kyllingemoderen bruger bagefter.",
  heading: "Strømforbrug for en rugemaskine: kWh, pris pr. udrugning og dyreste timer",
  quickAnswer:
    "En hobbyrugemaskine bruger typisk 12-30 W i gennemsnit, og en udrugning af hønseæg tager 21 døgn. Det giver 6-15 kWh pr. udrugning, eller {{kr 6}}-{{kr 15}} ved {{pris_kwh}}. En maskine til 24 æg bruger cirka 12 kWh, så to kuld om året koster omkring {{kr 24}}. Bagefter bruger en varmeplade til kyllingerne langt mindre end en varmelampe.",
  kwhRange: [5, 160],
  typicalKwh: 24,
  wattage: 24,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.2, 0.6, 1.8, 2.4, 2.0, 1.0, 0.5, 0.3, 0.6, 0.4, 0.2, 0.2],
  content: `<h2>Tre uger med varme døgnet rundt</h2>
<p>En rugemaskine gør det, hønen ellers gør: den holder æggene på en jævn temperatur lige under 38 grader i hele rugetiden, vender dem og holder luftfugtigheden. Varmelegemet er lille, men det kører i døgnets 24 timer i tre uger eller mere, så det er tiden og ikke watt-tallet, der afgør strømforbruget. Ifølge Mississippi State University Extension tager hønseæg 21 dage, ænder 28 dage og japanske vagtler 17 dage.</p>
<p>Den britiske producent Brinsea er en af de få, der oplyser både den højeste og den typiske effekt. Den maksimale effekt er det, varmelegemet trækker, når det er tændt; den typiske er gennemsnittet, når termostaten slår til og fra. Forskellen er omtrent en faktor to, og det er det typiske tal, der skal bruges, når forbruget regnes ud.</p>
<table>
<thead><tr><th>Rugemaskine</th><th>Æg</th><th>Typisk effekt</th><th>kWh pr. udrugning (21 døgn)</th><th>Pris pr. udrugning</th></tr></thead>
<tbody>
<tr><td>Brinsea Mini II Advance</td><td>7</td><td>12 W (maks. 20 W)</td><td>6,0</td><td>{{kr 6}}</td></tr>
<tr><td>Borotto Lumia 8</td><td>8</td><td>20 W (maks. 50 W)</td><td>10,1</td><td>{{kr 10,1}}</td></tr>
<tr><td>Brinsea Maxi 24 Advance</td><td>24</td><td>24 W (maks. 40 W)</td><td>12,1</td><td>{{kr 12,1}}</td></tr>
<tr><td>Brinsea Ovation 28 EX</td><td>28</td><td>30 W (maks. 60 W)</td><td>15,1</td><td>{{kr 15,1}}</td></tr>
</tbody>
</table>
<p>kWh-tallene er vores omregning: typisk watt gange 24 timer gange 21 døgn. Ingen af producenterne oplyser selv et forbrug pr. udrugning. Den italienske Borotto oplyser et gennemsnit på 20 W for Lumia 8, så den er regnet på samme måde.</p>

<h2>Ænder, gæs og vagtler: rugetiden flytter regningen</h2>
<p>Forbruget pr. kuld følger antallet af rugedage. Andeæg ligger en uge længere end hønseæg, og moskusænder endnu længere: Mississippi State University Extension angiver 35-37 dage for moskusand, 28-34 dage for gæs og 28 dage for kalkun. Vagtler er hurtigere færdige.</p>
<table>
<thead><tr><th>Æg (Brinsea Ovation 28 EX, 30 W)</th><th>Rugedage</th><th>kWh pr. kuld</th><th>Pris pr. kuld</th></tr></thead>
<tbody>
<tr><td>Japansk vagtel</td><td>17</td><td>12,2</td><td>{{kr 12,2}}</td></tr>
<tr><td>Høne</td><td>21</td><td>15,1</td><td>{{kr 15,1}}</td></tr>
<tr><td>And og kalkun</td><td>28</td><td>20,2</td><td>{{kr 20,2}}</td></tr>
<tr><td>Moskusand</td><td>36</td><td>25,9</td><td>{{kr 25,9}}</td></tr>
</tbody>
</table>
<p>Tallene er igen vores omregning fra den typiske effekt. I virkeligheden bruger maskinen lidt mindre de sidste dage, hvor fosteret selv laver varme, og lidt mere de første timer, hvor kolde æg skal varmes op fra stuetemperatur.</p>

<h2>Temperaturen og rummet, maskinen står i</h2>
<p>Mississippi State University Extension anbefaler 37,2-37,8 grader i en rugemaskine med blæser og 2-3 grader Fahrenheit mere, cirka 38,9 grader, i en maskine uden blæser, hvor luften står stille. Brinsea leverer sine maskiner forindstillet til 37,5 grader. Temperaturen inde i maskinen er altså fast, og det, du kan påvirke, er forskellen til rummet udenom.</p>
<p>Varmelegemet skal erstatte den varme, der siver ud gennem plastkassen. Står maskinen i et rum på 15 grader, er forskellen til de 37,5 grader cirka 22 grader; i et rum på 22 grader er den kun godt 15. Efter vores skøn kan det flytte forbruget med en tredjedel, og producenterne anbefaler generelt et rum uden træk og direkte sol, så temperaturen inde i maskinen ikke svinger. En kold carport eller et uopvarmet udhus er derfor både dyrere og mere risikabelt for kuldet. Et stille værelse inde i huset er det bedste sted for både æg og elregning.</p>

<h2>Større maskiner og modeller uden oplyst gennemsnit</h2>
<p>De billigere maskiner til 24 æg og opefter oplyser ofte kun varmelegemets maksimale effekt. Forhandleren AgriEuro opgiver 105 W for Novital Covatutto 24 Eco. Kørte varmelegemet fuldt hele tiden, ville det give 53 kWh på 21 døgn, men det gør det ikke: termostaten slår fra, når temperaturen er nået. Regner vi med, at varmelegemet er tændt halvdelen af tiden, som det omtrent er tilfældet for Brinseas maskiner, bliver det cirka 26 kWh pr. kuld, svarende til {{kr 26,5}}. Det tal er vores skøn.</p>
<p>Vil du kende forbruget på din egen maskine, så sæt en stikmåler i mellem stikkontakt og rugemaskine det første døgn og igen efter en uge. Det første døgn er højere, fordi æggene skal varmes op. Gang ugens tal med tre, så har du hele udrugningen.</p>

<h2>Efter klækningen: kyllingemor eller varmelampe</h2>
<p>Når kyllingerne er klækket, skal de holdes varme i de første uger. Her ligger den store forskel i strømforbruget. Brinsea skriver, at deres EcoGlow-kyllingemødre bruger 12-18 W, mens de fleste varmelamper bruger 250 W, og at det samtidig mindsker risikoen for brand markant. Kerbl sælger varmeplader til kyllinger på 25 og 50 W.</p>
<table>
<thead><tr><th>Varme til kyllinger, fire uger døgnet rundt</th><th>Effekt</th><th>kWh</th><th>Pris</th></tr></thead>
<tbody>
<tr><td>Brinsea EcoGlow Safety 600</td><td>12 W</td><td>8,1</td><td>{{kr 8,1}}</td></tr>
<tr><td>Kerbl CosyHeat 30 × 30 cm</td><td>25 W</td><td>16,8</td><td>{{kr 16,8}}</td></tr>
<tr><td>Kerbl CosyHeat 40 × 50 cm</td><td>50 W</td><td>33,6</td><td>{{kr 33,6}}</td></tr>
<tr><td>Infrarød varmelampe</td><td>250 W</td><td>168</td><td>{{kr 168}}</td></tr>
</tbody>
</table>
<p>Fire uger er et eksempel, ikke en regel; hvor længe kyllingerne skal have varme, afhænger af race, årstid og stalden. Pointen er forholdet: en varmelampe bruger på fire uger mere strøm end ti udrugninger i en rugemaskine til 24 æg. Skal kyllingerne siden flytte ud i et <a href="/hoensehus/">hønsehus</a>, gælder det samme om vinteren: en lille varmeplade under vandet er billigere end en lampe over hønsene.</p>

<h2>Kan rugemaskinen køre i de billige timer?</h2>
<p>Nej. En rugemaskine skal holde temperaturen hele døgnet, og selv få timers afbrydelse kan koste kuldet. Den bruger derfor strøm i alle timer, også i de dyre timer om eftermiddagen og aftenen. Det er heller ikke dér, besparelsen ligger. Forbruget pr. time er så lille, at forskellen mellem en billig og en dyr time er få øre. Det, der flytter regningen, er maskinens størrelse i forhold til antallet af æg, rummets temperatur og varmekilden til kyllingerne bagefter.</p>
<p>En lille maskine, der kun er halvt fyldt, bruger lige så meget strøm som en fuld. Har du 20 æg, er en maskine til 24 billigere pr. æg end tre små. Til gengæld er det spild at varme en maskine til 50 æg op for et halvt dusin. Har du både krybdyr og høns, så sammenlign med et <a href="/terrarie/">terrarie</a>: begge dele er små varmelegemer, der kører længe, og begge koster mest, når de står koldt.</p>

<h2>Sådan sparer du på udrugningen</h2>
<ul>
<li><strong>Stil maskinen varmt og stille</strong> — et rum på 20-22 grader uden træk og sol giver det laveste forbrug og den mest stabile temperatur.</li>
<li><strong>Fyld den</strong> — en fuld maskine bruger ikke mere end en halvtom.</li>
<li><strong>Åbn låget mindst muligt</strong> — hver gang låget løftes, skal varmelegemet indhente det tabte.</li>
<li><strong>Vælg en varmeplade til kyllingerne</strong> — 12-50 W i stedet for 150-250 W.</li>
<li><strong>Mål det første døgn</strong> — en stikmåler viser hurtigt, om maskinen ligger på det typiske tal.</li>
</ul>`,
  faqs: [
    { question: "Hvor mange kWh bruger en rugemaskine på en udrugning?", answer: "En hobbymaskine til 7-28 hønseæg bruger typisk 6-15 kWh på 21 døgn, svarende til {{kr 6}}-{{kr 15}} ved {{pris_kwh}}. Tallene er regnet fra producenternes typiske effekt." },
    { question: "Bruger en rugemaskine mere strøm til andeæg?", answer: "Ja, fordi andeæg skal ruges i 28 døgn mod 21 for hønseæg. En maskine på 30 W bruger cirka 20 kWh på et kuld andeæg, svarende til {{kr 20,2}}." },
    { question: "Hvad koster det at holde kyllinger varme efter klækningen?", answer: "En varmeplade på 12-50 W bruger 8-34 kWh på fire uger døgnet rundt. En varmelampe på 250 W bruger 168 kWh på samme tid, svarende til {{kr 168}}." },
    { question: "Kan jeg slukke rugemaskinen om natten for at spare?", answer: "Nej. Æggene skal holdes på 37,2-37,8 grader hele tiden, og en afbrydelse kan ødelægge kuldet. Besparelsen ligger i et varmt rum og en fyldt maskine." },
    { question: "Har rugemaskiner et energimærke?", answer: "Nej. Der er intet EU-energimærke for rugemaskiner. Kig efter den typiske effekt, som nogle producenter oplyser ud over den maksimale." },
  ],
  relatedSlugs: ["hoensehus", "terrarie", "akvarium", "drivhusvarme"],
  sources: [
    { name: "Brinsea — specifikationer Mini II Advance", url: "https://brinsea.com/p-571-mini-ii-advance-fully-digital-7-egg-incubator.aspx" },
    { name: "Brinsea — specifikationer Maxi 24 Advance", url: "https://www.brinsea.com/p-673-maxi-24-advance-fully-digital-24-egg-incubator.aspx" },
    { name: "Brinsea — specifikationer Ovation 28 EX", url: "https://brinsea.com/p-584-ovation-28-ex-fully-automatic-digital-egg-incubator.aspx" },
    { name: "Rivista di Agraria — Borotto Lumia 8, tekniske data", url: "https://www.rivistadiagraria.org/news/borotto-lancia-un-modello-incubatrice-lumia-8/" },
    { name: "AgriEuro — Novital Covatutto 24 Eco, specifikationer", url: "https://www.agrieuro.co.uk/novital-covatutto-24-eco-manual-egg-incubator-p-42823.html" },
    { name: "Mississippi State University Extension — Hatchery Management Guide for Game Bird and Small Poultry Flock Owners", url: "https://extension.msstate.edu/agriculture/livestock/poultry/hatchery-management-guide-for-game-bird-and-small-poultry-flock-owners" },
    { name: "Mississippi State University Extension — Incubation Temperature Requirements", url: "https://extension.msstate.edu/agriculture/livestock/poultry/incubation-temperature-requirements" },
    { name: "Brinsea — EcoGlow kyllingemødre", url: "https://brinsea.com/t-ecoglow.aspx" },
    { name: "Kerbl — CosyHeat varmeplade til kyllinger", url: "https://www.kerbl.com/en/product/heating-plate-for-chicks-cosyheat-115414" },
  ],
  calculatorConfig: {
    title: "Beregn rugemaskinens strømforbrug",
    options: [
      { label: "Lille maskine til 7 æg, typisk 12 W", kwhPerUse: 6.0 },
      { label: "Maskine til 8 æg, typisk 20 W", kwhPerUse: 10.1 },
      { label: "Maskine til 24 æg, typisk 24 W", kwhPerUse: 12.1 },
      { label: "Maskine til 28 æg, typisk 30 W", kwhPerUse: 15.1 },
      { label: "Maskine med 105 W varmelegeme, halv tid (vores skøn)", kwhPerUse: 26.5 },
    ],
    usageLabel: "Udrugninger af hønseæg pr. år (21 døgn hver)",
    usageUnit: "udrugninger/år",
    usageMin: 1,
    usageMax: 12,
    usageDefault: 2,
    usageStep: 1,
    per: "udrugning",
    perYear: 1,
  },
  publishDate: "2026-12-21",
  updated: "2026-11-23",
};

export default rugemaskine;
