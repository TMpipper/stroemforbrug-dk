import type { ApplianceData } from "@/lib/types";

const printer: ApplianceData = {
  slug: "printer",
  meta: {
    category: "it",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "computer",
    synonyms: ["printer", "blækprinter", "laserprinter", "multifunktionsprinter", "printer standby", "printer dvale", "ecotank", "laserjet"],
  },
  name: "Printer",
  article: "en",
  title: "Printer strømforbrug (2026) → blæk, laser og dvale i kWh",
  description: "En printer bruger mest strøm på at vente: 1 watt i dvale hele døgnet bliver til 9 kWh om året. Se tal for blæk- og laserprintere, og hvad slukning sparer.",
  heading: "Strømforbrug for en printer: kWh og pris",
  quickAnswer:
    "En almindelig blækprinter bruger omkring 1 watt i dvale, ifølge ENERGY STAR's database, og da den står tændt hele døgnet, bliver det cirka 9,5 kWh om året, svarende til {{kr 9,5}}. Selve udskrivningen fylder lidt: en laserprinter trækker knap 500 watt, mens den printer, men kun i sekunder ad gangen. Står en laserprinter i klar-tilstand i stedet for dvale, stiger forbruget til omkring 22 kWh om året.",
  kwhRange: [1, 60],
  typicalKwh: 9.5,
  wattage: 13,
  standbyWatts: 1.1,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Hvor meget strøm bruger en printer?</h2>
<p>En printer i et privat hjem printer sjældent i mere end nogle minutter om ugen. Resten af tiden står den og venter — i dvale, i klar-tilstand eller slukket med kablet i stikket. Derfor er det ventetiden, der bestemmer forbruget over et år, og ikke selve udskrivningen. Printere har ikke et EU-energimærke, men mange modeller er godkendt af den amerikanske ENERGY STAR-ordning, som offentliggør målinger af hver model i en åben database.</p>
<table>
<thead><tr><th>Printer og tilstand</th><th>Watt</th><th>Pris i døgnet</th></tr></thead>
<tbody>
<tr><td>Blækprinter i dvale, typisk (median af 411 modeller)</td><td>1,08 W</td><td>{{oere 0,026}}</td></tr>
<tr><td>Epson EcoTank ET-2850 i dvale</td><td>0,91 W</td><td>{{oere 0,022}}</td></tr>
<tr><td>HP ENVY 6055 i dvale</td><td>1,54 W</td><td>{{oere 0,037}}</td></tr>
<tr><td>HP LaserJet M209d i dvale</td><td>0,6 W</td><td>{{oere 0,014}}</td></tr>
<tr><td>HP LaserJet M209d i klar-tilstand</td><td>2,5 W</td><td>{{oere 0,06}}</td></tr>
<tr><td>Slukket på knappen (laser og blæk)</td><td>0,1-0,3 W</td><td>under en halv øre</td></tr>
</tbody>
</table>
<p>Medianen for blækprintere er vores eget udtræk af ENERGY STAR's database over godkendt billedudstyr. Laserprinterens tal kommer fra HP's oplysninger til den tyske miljømærkning Blauer Engel. Tallene for slukket tilstand er HP's og Epsons egne.</p>

<h2>Blækprinter eller laserprinter</h2>
<p>Under selve udskrivningen er forskellen stor. En blækprinter som Epson EcoTank ET-2760 bruger omkring 13 watt, når den kopierer, ifølge Epson. En laserprinter skal varme en fikseringsenhed op til at smelte toneren fast på papiret, og HP's LaserJet M209d trækker 476 watt, mens den printer, og op til 739 watt i det øjeblik, den tændes. Et minuts udskrivning på laserprinteren koster omkring {{oere 0,008}} — stadig kun en brøkdel af en øre.</p>
<p>Over et år udligner forskellen sig, fordi laserprinteren kun arbejder kort og hurtigt falder i søvn igen. ENERGY STAR måler et typisk ugeforbrug (TEC), der dækker både udskrift, klar-tilstand og dvale efter et fast kontorforløb. For laserprintere op til 35 sider i minuttet er medianen 17,68 kWh om året, og de bedste ligger under 10 kWh. HP's LaserJet M209dwe ligger på 11,44 kWh og Brothers HL-L2400D på 18,2 kWh. Et hjem printer langt mindre end kontorforløbet, så her er tallene et loft snarere end en forventning.</p>
<table>
<thead><tr><th>Brug</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Blækprinter i dvale hele døgnet (1,08 W)</td><td>9,5 kWh</td><td>{{kr 9,5}}</td></tr>
<tr><td>Laserprinter i dvale hele døgnet (0,6 W)</td><td>5,3 kWh</td><td>{{kr 5,3}}</td></tr>
<tr><td>Laserprinter i klar-tilstand hele døgnet (2,5 W)</td><td>22 kWh</td><td>{{kr 22}}</td></tr>
<tr><td>Laserprinter efter ENERGY STAR's kontorforløb (median)</td><td>17,7 kWh</td><td>{{kr 17,7}}</td></tr>
<tr><td>Slukket på knappen hele året (0,3 W)</td><td>2,6 kWh</td><td>{{kr 2,6}}</td></tr>
</tbody>
</table>

<h2>Dvale og automatisk slukning</h2>
<p>Næsten alle nye printere går selv i dvale efter et stykke tid uden opgaver. Hvor hurtigt sker, er forskelligt: HP's LaserJet M209d går i dvale efter et minut, mens Epson ET-2850 venter 13 minutter og HP ENVY 6055 fem minutter, ifølge ENERGY STAR. HP oplyser, at ventetiden på laserprinteren kan stilles fra 1 til 60 minutter. Er den sat højt, står printeren i klar-tilstand en større del af dagen, og så kan forbruget mere end fordobles.</p>
<p>Mange printere kan også slukke helt efter nogle timer uden brug. Det er den mest effektive indstilling, men den betyder, at printeren ikke kan modtage en opgave fra telefonen, før du tænder den. Bruger du kun printeren et par gange om måneden, er det oftest prisen værd. Printeren er et typisk eksempel på de mange små døgnforbrug, der er beskrevet i guiden om <a href="/standby/">standby</a>.</p>

<h2>Printer, NAS og andet kontorudstyr</h2>
<p>Står printeren i et hjemmekontor, er den sjældent alene. Computer, skærm, <a href="/router/">router</a> og måske et <a href="/nas/">netværksdrev</a> står samme sted, og flere af dem kører hele døgnet. Printeren er som regel den mindste post af dem, men den er også den nemmeste at gøre noget ved, fordi den kun skal være tændt, når du printer. Har du en <a href="/3d-printer/">3D-printer</a>, er det en helt anden sag: den bruger strøm i mange timer pr. udskrift.</p>

<p>Mange multifunktionsprintere kan også scanne og kopiere. Det bruger kun ekstra strøm, mens maskinen arbejder, så for årsforbruget er det stadig dvaletallet, der afgør, om printeren er billig eller dyr at have stående.</p>

<h2>Hvad bestemmer, hvor meget strøm din printer bruger?</h2>
<ul>
<li><strong>Dvaleforbruget</strong> — en forskel på 0,5 W over 8.760 timer er godt 4 kWh om året.</li>
<li><strong>Tiden, før den sover</strong> — jo længere klar-tilstand, jo højere forbrug.</li>
<li><strong>Laser eller blæk</strong> — laserprinteren trækker meget under udskrift, blækprinteren næsten intet.</li>
<li><strong>Wifi og fax</strong> — funktioner, der holder printeren klar på netværket, kan hæve dvaleforbruget.</li>
<li><strong>Antal udskrifter</strong> — betyder mest for laserprintere og kontorbrug.</li>
</ul>

<h2>Sådan sparer du strøm på din printer</h2>
<ol>
<li><strong>Sæt tiden til dvale lavt</strong> — et til fem minutter er nok i et hjem.</li>
<li><strong>Slå automatisk slukning til</strong>, hvis printeren kan det.</li>
<li><strong>Sluk på knappen</strong>, når du ikke skal printe i flere dage.</li>
<li><strong>Brug en stikdåse med afbryder</strong> til hele hjemmekontoret, så printer og tilbehør slukker sammen.</li>
<li><strong>Print samlet</strong> på en laserprinter, så den kun skal varme op én gang.</li>
</ol>
<p>Printeren er ikke en stor strømsluger, men den er et af de apparater, hvor en enkelt indstilling halverer forbruget.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en printer på standby?", answer: "En typisk blækprinter bruger omkring 1 W i dvale ifølge ENERGY STAR. Hele året er det cirka 9,5 kWh, svarende til {{kr 9,5}}." },
    { question: "Hvor mange watt bruger en laserprinter, når den printer?", answer: "HP's LaserJet M209d trækker 476 W under udskrift og op til 739 W, når den tændes. Et minuts udskrift koster omkring {{oere 0,008}}." },
    { question: "Bruger en laserprinter mere strøm end en blækprinter?", answer: "Under udskrift ja, men den gør det i kort tid. Over et år afhænger forskellen mest af dvaleforbruget og hvor hurtigt printeren falder i søvn." },
    { question: "Skal jeg slukke printeren, når jeg ikke bruger den?", answer: "Det sparer lidt. Fra 1,08 W i dvale til 0,3 W slukket er knap 7 kWh om året, svarende til {{kr 7}}. Står printeren i klar-tilstand, sparer du mere." },
    { question: "Har printere et energimærke?", answer: "Nej, printere har ikke et EU-energimærke. Mange modeller er godkendt af ENERGY STAR, der offentliggør målinger af dvaleforbrug og typisk ugeforbrug." },
  ],
  relatedSlugs: ["computer", "laptop", "router", "nas", "3d-printer", "skaerm"],
  sources: [
    { name: "ENERGY STAR — database over godkendt billedudstyr (dvale, standby og TEC pr. model)", url: "https://data.energystar.gov/resource/t2v6-g4nf.json?pd_id=2375882" },
    { name: "ENERGY STAR — HP LaserJet M209dwe (TEC 11,44 kWh/år)", url: "https://www.energystar.gov/productfinder/product/certified-imaging-equipment/details/2375882" },
    { name: "ENERGY STAR — Epson EcoTank ET-2850 (dvale og standby)", url: "https://www.energystar.gov/productfinder/product/certified-imaging-equipment/details/2375060" },
    { name: "ENERGY STAR — HP ENVY 6055 (dvale og standby)", url: "https://www.energystar.gov/productfinder/product/certified-imaging-equipment/details/2354868" },
    { name: "ENERGY STAR — Brother HL-L2400D (TEC 18,2 kWh/år)", url: "https://www.energystar.gov/productfinder/product/certified-imaging-equipment/details/2452923" },
    { name: "Blauer Engel / HP — brugeroplysninger for LaserJet M209d (udskrift, klar, dvale, slukket)", url: "https://produktinfo.blauer-engel.de/uploads/pdf_uploads/BA_User_Information_LJ_M209d_UZ219_ENG_2024-08-20.pdf" },
    { name: "Epson — EcoTank ET-2760 specifikationer (strømforbrug ved kopiering og slukket)", url: "https://epson.com/For-Work/Printers/Inkjet/EcoTank-ET-2760-All-in-One-Cartridge-Free-Supertank-Printer/p/C11CG22203" },
  ],
  calculatorConfig: {
    title: "Beregn din printers strømforbrug",
    options: [
      { label: "Blækprinter i dvale (ca. 1,1 W)", kwhPerUse: 0.026 },
      { label: "Laserprinter i dvale (ca. 0,6 W)", kwhPerUse: 0.015 },
      { label: "Laserprinter efter ENERGY STAR's kontorforløb", kwhPerUse: 0.048 },
      { label: "Laserprinter i klar-tilstand (ca. 2,5 W)", kwhPerUse: 0.06 },
      { label: "Slukket på knappen (ca. 0,3 W)", kwhPerUse: 0.007 },
    ],
    usageLabel: "Dage i stikkontakten pr. år",
    usageUnit: "dage/år",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-11",
  updated: "2026-11-22",
};

export default printer;
