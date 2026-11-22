import type { ApplianceData } from "@/lib/types";

/**
 * Aircondition (fast split-anlæg, luft-til-luft) brugt til KØLING. Opvarmning ligger på /varmepumpe/luft-til-luft/.
 * Mærketabellen er regnet efter forordning 626/2011: QCE = 3,5 kW × 350 timer ÷ SEER ved hver klasses nedre grænse.
 * Modellerne er EPREL-registreringer (kWh/år på mærket = 350 fuldlasttimer).
 */
const aircondition: ApplianceData = {
  slug: "aircondition",
  meta: {
    category: "klima",
    usage: "per-hour",
    hasEuLabel: true,
    shiftable: false,
    motif: "varmepumpe",
    synonyms: ["aircondition", "air condition", "airconditionanlæg", "aircon", "klimaanlæg", "split aircondition", "aircondition køling"],
  },
  name: "Aircondition",
  title: "Aircondition strømforbrug (2026) → kWh ved køling og SEER",
  description:
    "Se hvor meget strøm en fast aircondition bruger, når den køler om sommeren: kWh i timen, hvad energimærkets SEER betyder, og hvordan du køler for mindre.",
  heading: "Strømforbrug for en aircondition: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En fast split-aircondition på 3,5 kW bruger typisk 0,3–0,7 kWh i timen, når den køler en stue en varm sommerdag. Det svarer til {{kr 0,5}} i timen for en almindelig model. Over en dansk sommer lander de fleste på 50–200 kWh, eller omkring {{kr 120}} om året.",
  kwhRange: [30, 350],
  typicalKwh: 120,
  wattage: 900,
  standbyWatts: 1,
  energyLabels: [
    { class: "A+++", kwhPerYear: 144 },
    { class: "A++", kwhPerYear: 201 },
    { class: "A+", kwhPerYear: 219 },
    { class: "A", kwhPerYear: 240 },
    { class: "B", kwhPerYear: 266 },
  ],
  models: [
    { brand: "Panasonic", model: "CS-XZ25CKEW-H (2,5 kW)", kwh: 92, energyClass: "A+++" },
    { brand: "Daikin", model: "FTXJ25A2V1BB (2,5 kW)", kwh: 100, energyClass: "A+++" },
    { brand: "Mitsubishi Electric", model: "MSZ-FT35VG (3,5 kW)", kwh: 142, energyClass: "A+++" },
    { brand: "Panasonic", model: "CS-TZ35TKEW-1 (3,5 kW)", kwh: 183, energyClass: "A++" },
    { brand: "Toshiba", model: "RAS-35J2KVG-ND (3,5 kW)", kwh: 188, energyClass: "A++" },
  ],
  seasonalProfile: [0, 0, 0, 0.1, 0.6, 2.4, 3.6, 3.2, 1.6, 0.4, 0.1, 0],
  content: `<h2>Hvor meget strøm bruger en aircondition til køling?</h2>
<p>En fast aircondition – et split-anlæg med en indedel på væggen og en udedel på facaden – flytter varme ud af huset i stedet for at lave kulde. Det gør den med en kompressor, og det er derfor, den kan køle for langt mindre strøm, end man skulle tro. En typisk indedel på 3,5 kW kølekapacitet trækker 0,8–1 kW fra stikket, når den kører for fuld kraft, men på en almindelig dansk sommerdag kører den langt det meste af tiden på dellast. Gennemsnittet over en eftermiddag ligger typisk på 0,3–0,7 kWh i timen.</p>
<p>Med månedens elpris koster en times køling med et standardanlæg omkring {{kr 0,5}}. Kører anlægget fem timer på en varm dag, er dagens regning cirka {{kr 2,5}}. Over en hel dansk sommer med omkring 40 dage, hvor der er brug for køling, bliver det til cirka 120 kWh, eller {{kr 120}} om året. Det er den sommer, beregneren ovenfor regner med – juster timerne, så de passer til dit hus.</p>
<p>Denne side handler om køling. Bruger du det samme anlæg til at varme huset op om vinteren, er det en luft-til-luft-varmepumpe, og så er vinterens forbrug mange gange større end sommerens. Det kan du se på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft-varmepumpen</a>.</p>

<h2>Strømforbrug i timen efter størrelse</h2>
<p>Hvor meget en aircondition bruger i timen, afhænger af tre ting: hvor stor den er, hvor effektiv den er (SEER-tallet), og hvor varmt det er udenfor. Tabellen viser typisk gennemsnit for en varm eftermiddag, når anlægget holder rummet på 23–24 grader.</p>
<table>
<thead><tr><th>Anlæg</th><th>Kølekapacitet</th><th>Typisk kWh i timen</th><th>Pris i timen</th><th>Pris for 5 timer</th></tr></thead>
<tbody>
<tr><td>Lille split, A+++</td><td>2,5 kW</td><td>0,25 kWh</td><td>{{kr 0,25}}</td><td>{{kr 1,25}}</td></tr>
<tr><td>Standard split, A++</td><td>3,5 kW</td><td>0,5 kWh</td><td>{{kr 0,5}}</td><td>{{kr 2,5}}</td></tr>
<tr><td>Ældre split, A</td><td>3,5 kW</td><td>0,7 kWh</td><td>{{kr 0,7}}</td><td>{{kr 3,5}}</td></tr>
<tr><td>Stor split eller multisplit</td><td>5 kW</td><td>0,75 kWh</td><td>{{kr 0,75}}</td><td>{{kr 3,75}}</td></tr>
</tbody>
</table>
<p>Tallene stemmer med energimærkerne: mærket regner med 350 timers køling ved fuld kapacitet om året, og et 3,5 kW-anlæg med A++ må bruge højst omkring 200 kWh på de 350 timer – altså godt 0,5 kWh i timen. På et varmt tagetageværelse kan forbruget blive højere, fordi anlægget kører tættere på fuld kraft.</p>

<h2>Hvad betyder SEER og energimærket?</h2>
<p>En aircondition har et EU-energimærke efter forordning 626/2011 med to skalaer: en for køling (SEER) og en for opvarmning (SCOP). SEER står for sæsonvirkningsgrad og fortæller, hvor mange kWh varme anlægget fjerner for hver kWh strøm. Et anlæg med SEER 8,5 flytter 8,5 kWh varme ud af stuen for én kWh fra stikket – det er A+++. Et anlæg med SEER 5,1 er klasse A og bruger altså 67 procent mere strøm til samme køling.</p>
<p>Mærket viser også et årsforbrug til køling. Det regnes som anlæggets kølebehov gange 350 timer delt med SEER. For et anlæg på 3,5 kW giver det de grænser, du ser i energimærke-tabellen længere nede på siden: fra højst 144 kWh om året for A+++ til 266 kWh for B. De fleste nye anlæg i EU's produktdatabase EPREL ligger i A++ eller A+++, og det er de to klasser, det giver mening at vælge imellem i dag.</p>
<p>De 350 timer er et europæisk gennemsnit, hvor Sydeuropa trækker op. I Danmark er der langt færre varme timer, så de fleste bruger mindre end det, der står på mærket. Brug derfor mærkets kWh-tal til at sammenligne modeller, og beregneren til at regne dit eget forbrug.</p>

<h2>Fast aircondition, mobil aircondition eller ventilator?</h2>
<p>Den faste aircondition er klart den mest sparsomme af de to aircondition-typer. En <a href="/mobil-aircondition/">mobil aircondition</a> har kompressor og kondensator i samme kasse inde i rummet og blæser den varme luft ud gennem en slange i vinduet. Det giver en virkningsgrad (EER) omkring 2,6 mod et split-anlægs SEER på 6–9, og en typisk mobil model bruger 1–1,5 kWh i timen. Forbrugerrådet Tænk anbefaler netop en luft-til-luft-varmepumpe frem for en mobil aircondition, hvis du har brug for køling ofte eller i flere rum.</p>
<table>
<thead><tr><th>Løsning</th><th>Typisk effekt</th><th>Pris i timen</th><th>Køler luften?</th></tr></thead>
<tbody>
<tr><td>Fast split-aircondition (3,5 kW)</td><td>0,3–0,7 kW</td><td>{{kr 0,3-0,7}}</td><td>Ja</td></tr>
<tr><td>Mobil aircondition (3,5 kW)</td><td>1,0–1,5 kW</td><td>{{kr 1-1,5}}</td><td>Ja, men mindre effektivt</td></tr>
<tr><td>Gulv- eller bordventilator</td><td>11–50 W</td><td>{{kr 0,01-0,05}}</td><td>Nej, kun luftbevægelse</td></tr>
</tbody>
</table>
<p>En <a href="/ventilator/">ventilator</a> bruger kun en brøkdel af strømmen, men den sænker ikke temperaturen – den får dig til at føle dig køligere, fordi luften bevæger sig over huden. I et soveværelse en lun nat kan det være nok, og så er ventilatoren langt den billigste løsning af de tre.</p>

<h2>Hvornår på døgnet bruger airconditionen strøm?</h2>
<p>Køling følger varmen, og varmen topper om eftermiddagen. Det passer faktisk godt med elprisen om sommeren: mange solrige dage er strømmen billig midt på dagen, fordi solcellerne producerer meget, mens prisen stiger igen sidst på eftermiddagen og om aftenen, når solen går ned og alle kommer hjem. Timerne fra kl. 17 til 21 er typisk døgnets dyreste.</p>
<p>Det giver et simpelt trick: kør airconditionen lidt hårdere fra formiddagen og tidlig eftermiddag, mens strømmen er billig, og lad huset være kølet ned, før aftenens dyre timer begynder. Murværk, gulve og møbler holder på kulden i flere timer, så du kan skrue ned eller slukke i de dyre timer uden at stuen bliver varm med det samme. Det kræver ikke andet end anlæggets ugeprogram eller app. Se dagens billige og dyre timer i boksen længere oppe på siden.</p>

<h2>Standby og forbrug om vinteren</h2>
<p>Indedelen bruger lidt strøm på standby, så den kan reagere på fjernbetjeningen. EU's økodesignkrav sætter et loft på 0,5 W i slukket tilstand og 1 W med display. Det er under 10 kWh om året. Nogle udedele har desuden en lille varmelegeme i kompressoren, der holder olien varm, når det er koldt udenfor. Bruger du kun anlægget til køling, kan det betale sig at slå det fra på en sikringsgruppe eller kontakt om vinteren, hvis installatøren siger, at det er i orden for netop dit anlæg.</p>

<h2>Sådan køler du for mindre strøm</h2>
<ol>
<li><strong>Hold varmen ude</strong> – træk gardiner og persienner for på solsiden om formiddagen. Udvendig solafskærmning virker bedre end indvendig, fordi solen så aldrig når glasset.</li>
<li><strong>Sæt temperaturen fornuftigt</strong> – 23–25 grader er rigeligt. Hver grad lavere får anlægget til at arbejde mærkbart mere.</li>
<li><strong>Luk døre og vinduer</strong> – et åbent vindue i et kølet rum er som at køle haven.</li>
<li><strong>Brug natten</strong> – er det køligt om natten, så luft grundigt ud tidligt om morgenen, før du tænder.</li>
<li><strong>Rens filtrene</strong> – støvede filtre i indedelen nedsætter luftstrømmen, så anlægget skal køre længere. Tjek dem hver måned i kølesæsonen.</li>
<li><strong>Undgå at køle tomme rum</strong> – brug ugeprogrammet, så anlægget ikke kører, mens ingen er hjemme, men start det, mens strømmen er billig.</li>
</ol>
<p>Er huset generelt fugtigt om sommeren, kan en <a href="/affugter/">affugter</a> gøre luften mere behagelig ved samme temperatur. Har du mekanisk ventilation, kan sommerbypass i et <a href="/ventilationsanlaeg/">ventilationsanlæg</a> også hjælpe med at få nattens kølige luft ind.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en aircondition i timen?",
      answer:
        "En fast split-aircondition på 3,5 kW bruger typisk 0,3–0,7 kWh i timen, når den køler på en varm dag. En almindelig A++-model bruger omkring 0,5 kWh, hvilket koster cirka {{kr 0,5}} i timen ved månedens elpris.",
    },
    {
      question: "Hvad koster det at køre aircondition en hel sommer?",
      answer:
        "Med omkring 40 varme dage og fem timers køling om dagen bruger et standardanlæg cirka 100–120 kWh. Det koster omkring {{kr 120}} for hele sommeren ved månedens elpris.",
    },
    {
      question: "Hvad betyder SEER på en aircondition?",
      answer:
        "SEER er sæsonvirkningsgraden for køling: hvor mange kWh varme anlægget fjerner pr. kWh strøm. SEER 8,5 eller mere er A+++, mens SEER 5,1–5,6 er klasse A. Et A+++-anlæg bruger derfor omkring 40 procent mindre strøm end et A-anlæg til samme køling.",
    },
    {
      question: "Er en fast aircondition billigere i drift end en mobil?",
      answer:
        "Ja. En fast split-aircondition bruger typisk en tredjedel til halvdelen af strømmen til samme køling. En mobil model bruger 1–1,5 kWh i timen, mens et split-anlæg bruger 0,3–0,7 kWh, altså {{kr 0,3-0,7}} i timen.",
    },
    {
      question: "Hvorfor står der et højere forbrug på energimærket, end jeg bruger?",
      answer:
        "Energimærket regner med 350 timers køling ved fuld kapacitet om året, som er et europæisk gennemsnit. I Danmark er der færre varme timer, så de fleste bruger mindre end mærkets tal. Brug mærket til at sammenligne modeller.",
    },
    {
      question: "Hvornår er det billigst at køle med aircondition?",
      answer:
        "Om sommeren er strømmen ofte billig midt på dagen, når solcellerne producerer meget, og dyr fra kl. 17 til 21. Kør gerne anlægget fra formiddagen, så huset er kølet ned, før aftenens dyre timer begynder.",
    },
  ],
  relatedSlugs: ["mobil-aircondition", "ventilator", "varmepumpe", "affugter", "ventilationsanlaeg"],
  sources: [
    { name: "Forordning (EU) nr. 626/2011, bilag II — energiklasser for klimaanlæg (SEER/EER)", url: "https://www.legislation.gov.uk/eur/2011/626/annex/II/adopted" },
    { name: "Forordning (EU) nr. 626/2011, bilag VII — 350 ækvivalente køletimer", url: "https://www.legislation.gov.uk/eur/2011/626/annex/VII/adopted" },
    { name: "EPREL — EU's produktdatabase, fx Mitsubishi Electric MSZ-FT35VG", url: "https://eprel.ec.europa.eu/screen/product/airconditioners/293231" },
    { name: "Forbrugerrådet Tænk — Mobil aircondition: hvad skal du overveje før køb", url: "https://taenk.dk/forbrugerliv/bolig/mobil-aircondition-hvad-skal-du-overveje-foer-koeb" },
  ],
  calculatorConfig: {
    title: "Aircondition forbrugsberegner (køling)",
    options: [
      { label: "Lille split, 2,5 kW, A+++", kwhPerUse: 0.25 },
      { label: "Standard split, 3,5 kW, A++", kwhPerUse: 0.5 },
      { label: "Ældre split, 3,5 kW, A", kwhPerUse: 0.7 },
      { label: "Stor split eller multisplit, 5 kW", kwhPerUse: 0.75 },
    ],
    usageLabel: "Timer med køling pr. varm dag (ca. 40 dage om året)",
    usageUnit: "timer pr. dag",
    usageMin: 1,
    usageMax: 16,
    usageDefault: 6,
    usageStep: 1,
    per: "time",
    perYear: 40,
  },
  publishDate: "2026-11-23",
  updated: "2026-11-22",
};

export default aircondition;
