import type { ApplianceData } from "@/lib/types";

const spabad: ApplianceData = {
  slug: "spabad",
  meta: {
    category: "poolSpa",
    usage: "heating",
    hasEuLabel: false,
    shiftable: true,
    synonyms: ["spabad", "udespa", "udendørs spa", "boblebad", "jacuzzi", "hot tub", "whirlpool", "spa"],
  },
  name: "Spabad",
  article: "et",
  title: "Spabad strømforbrug (2026) → kWh i døgnet, låg og vinter",
  description: "Et udendørs spabad bruger typisk 2.500-7.500 kWh om året. Se forbruget i døgnet, hvad låget og en varmepumpe betyder, og hvornår opvarmningen bør køre.",
  heading: "Strømforbrug for et spabad: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "Et udendørs spabad, der holdes varmt hele året, bruger ifølge Schweiz' energistyrelse typisk 2.500-7.500 kWh om året. Med 8 kWh i døgnet bliver det knap 3.000 kWh, svarende til {{kr 3000}} ved {{pris_kwh}} eller cirka {{kr 3000 /md}} om måneden. Låget, isoleringen og vinterens kulde bestemmer, hvor i spændet du lander.",
  kwhRange: [1000, 7500],
  typicalKwh: 3000,
  wattage: 3000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.45, 1.4, 1.2, 1.0, 0.8, 0.65, 0.6, 0.6, 0.8, 1.0, 1.15, 1.35],
  content: `<h2>Hvorfor et spabad bruger så meget strøm</h2>
<p>Et spabad indeholder ikke meget vand sammenlignet med en <a href="/pool/">pool</a> — typisk 800-1.200 liter til tre-fire personer — men vandet holdes på 35-40 °C, og ofte hele året. En pool lukkes ned om vinteren; et udendørs spabad bruges tværtimod mest, når det er koldt. Hver time skal varmelegemet erstatte den varme, der forsvinder gennem låget, kabinettet og bunden, og jo koldere det er ude, jo mere varme forsvinder der.</p>
<p>Det schweiziske energiministeriums vejledning om spabade (Bundesamt für Energie) angiver, at et spabad til 3-4 personer, alt efter model og placering, bruger mellem 2.500 og over 7.500 kWh strøm om året. Det er mere end en almindelig husstand uden elvarme. Her i Danmark svarer et forbrug på 3.000 kWh til {{kr 3000}} om året ved månedens elpris — og det er før vand, kemi og filtre.</p>
<table>
<thead><tr><th>Spabad og drift</th><th>kWh i døgnet</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Godt isoleret, tæt låg, varmepumpe</td><td>ca. 3</td><td>ca. 1.100</td><td>{{kr 1100}}</td></tr>
<tr><td>Godt isoleret, tæt låg, varmelegeme</td><td>ca. 6</td><td>ca. 2.200</td><td>{{kr 2200}}</td></tr>
<tr><td>Almindelig udespa, varmelegeme</td><td>ca. 8</td><td>ca. 2.900</td><td>{{kr 2900}}</td></tr>
<tr><td>Ældre spa, vandtrukket låg</td><td>ca. 14</td><td>ca. 5.100</td><td>{{kr 5100}}</td></tr>
<tr><td>Dårligt isoleret, vinterdrift</td><td>ca. 20</td><td>ca. 7.300</td><td>{{kr 7300}}</td></tr>
</tbody>
</table>
<p>Tallene i døgnet er et gennemsnit over året; om vinteren ligger de højere, om sommeren lavere. De dækker opvarmning, filtrering og de korte bade. De er vores omregning af det spænd, energistyrelsen opgiver, og ikke en måling af en bestemt model, fordi der ikke findes et fælles energimærke, der gør spabade sammenlignelige.</p>

<h2>Varmelegeme, pumper og blæser</h2>
<p>Spabadets strøm går til tre ting. Varmelegemet er det store forbrug: Bolius angiver, at selvstændige varmelegemer til spa ligger fra omkring 2,7 til 6 kW, og at et element på 2.700 W varmer 200 liter vand fra 15 til 39 grader på cirka to timer. Et udendørs spabad på 1.000 liter skal altså bruge mange timer på at komme op på temperatur efter en påfyldning — Bundesamt für Energie skriver, at det kan tage over et døgn.</p>
<p>Cirkulationspumpen kører flere timer hver dag for at filtrere vandet, også når ingen bader, og Bolius nævner blæsere til luftbobler på omkring 700-1.000 W. Massagepumperne og blæseren bruger kun strøm, mens du sidder i karret, men luftbobler og bevægelse køler vandet, så varmelegemet skal arbejde mere bagefter. Sluk derfor massage og bobler, når du går op, og læg låget på med det samme.</p>

<h2>Låget og isoleringen afgør regningen</h2>
<p>Den største enkeltpost er varmetabet, og det meste af det går op gennem overfladen. Fordampning fra varmt vand fjerner meget energi, så et låg, der slutter tæt, er det vigtigste udstyr på et spabad. Bundesamt für Energie advarer mod tynde overtræk og flydende presenninger, der ikke holder på varmen, og mod låg, der suger vand: bliver låget tungere med tiden, er isoleringen vandtrukket og holder dårligere på varmen.</p>
<p>Kabinettet betyder også noget. Nogle producenter fylder hele hulrummet under karret med isolering, andre isolerer kun bunden eller rørene. En spa, der hurtigt bliver kold, når varmen er slukket, er dårligt isoleret — og det kan mærkes på elmåleren hver eneste vinterdag. Står spabadet i læ, under tag eller i et lille hus, falder forbruget, fordi vinden ikke køler låget.</p>

<h2>Varmepumpe til spabadet</h2>
<p>En luft-til-vand-varmepumpe, der er koblet på spabadet, kan sænke strømforbruget betydeligt. Bolius skriver, at besparelsen kan være 50 procent eller mere, alt efter varmepumpens effektivitet, mens den schweiziske vejledning angiver, at en varmepumpe kan sænke spabadets forbrug med to tredjedele og på et år bruger to til tre gange mindre strøm end et elektrisk varmelegeme. Kilderne er altså enige om retningen, men ikke om størrelsen, og meget afhænger af, hvor koldt det er, når varmepumpen skal arbejde.</p>
<p>Ved et forbrug på 3.000 kWh om året svarer en halvering til 1.500 kWh, eller {{kr 1500}} om året. Om det kan betale sig, afhænger af, hvad varmepumpen koster at købe og installere, og hvor mange år spabadet skal bruges. Brug tallet som et loft: varmepumpen må koste så meget mere, som den sparer på de år, du regner med at have spabadet.</p>

<h2>Temperaturen mellem to bade</h2>
<p>Skal vandet holdes på badetemperatur hele tiden, eller må det falde mellem badene? Den schweiziske vejledning er klar: det er en myte, at det sparer energi at holde vandet varmt hele tiden. Det koster altid mindre at sænke temperaturen. Bruges spabadet næsten dagligt og er det godt isoleret, anbefaler den at sænke 2-3 grader; bruges det kun i weekenden og køler det hurtigt af, er det bedre at lade temperaturen falde mere og varme op igen, når du skal bruge det. Pas på frost, hvis spabadet står ude.</p>
<p>Bolius anbefaler at holde spabade på 38-40 °C og aldrig over 40 °C, og 38 °C for børn og gravide. Hver grad, du kan undvære, er en grad mindre forskel mellem vandet og den kolde luft, og det er den forskel, der driver varmetabet.</p>

<h2>Hvornår skal spabadet varme op?</h2>
<p>Et spabad er et af de få store forbrug i hjemmet, hvor opvarmningen kan flyttes. 1.000 liter vand ved 38 °C holder på varmen i flere timer under et godt låg, så styringen kan varme i de timer, hvor elprisen er lav, og lade vandet falde en grad eller to i de dyre timer. Mange nyere spabade har en styring med tidsprogram for filtrering og opvarmning; har dit spabad det, så læg opvarmningen i nattetimerne eller midt på dagen, når timeprisen ofte er lav, og undgå kl. 17-21, hvor nettariffen er højere.</p>
<p>Skal du bade fredag aften, kan styringen varme op i løbet af natten og formiddagen i stedet for at holde badetemperatur hele ugen. Se dagens billige timer i oversigten længere oppe på siden, og læg opvarmningen der. Har du solceller, kan du også lade spabadet bruge solstrømmen om dagen.</p>

<h2>Indendørs spa og opstart efter påfyldning</h2>
<p>En indendørs spa står i et opvarmet rum, så varmetabet er mindre end ude i vinterkulden. Bolius beskriver, at indendørs spabade har varmelegemer på 1,5-6 kW, og at vandet typisk taber 1-2 grader på 20 minutter, når karret står uden låg. Tabet er altså mærkbart, også indenfor, og låget er lige så vigtigt her. Til gengæld skal rummet ventileres, fordi fugten fra det varme vand ellers sætter sig i vægge og loft — og en affugter eller et ventilationsanlæg bruger også strøm.</p>
<p>Hver gang spabadet tømmes og fyldes igen, skal alt vandet varmes op fra koldt. Med 1.000 liter fra 10 til 38 grader er det omkring 33 kWh varme, svarende til {{kr 33}} for en enkelt opstart med varmelegeme. Skift derfor vandet efter producentens anvisning og ikke oftere, og fyld helst om sommeren, hvor vandet fra hanen er lidt varmere og luften ikke køler så meget under opvarmningen.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Låget på — altid</strong> — og tjek, at det slutter tæt og ikke er blevet tungt af vand.</li>
<li><strong>Sænk temperaturen</strong> mellem badene, især hvis spabadet kun bruges i weekenden.</li>
<li><strong>Varm op i billige timer</strong> med spabadets tidsprogram.</li>
<li><strong>Sluk bobler og massage</strong>, når du går op.</li>
<li><strong>Læ og tag</strong> — vind over låget øger varmetabet.</li>
<li><strong>Overvej en varmepumpe</strong>, hvis spabadet bruges hele vinteren.</li>
<li><strong>Vælg mindre</strong> — et spabad til fire personer bruger mere end et til to, også når kun to bader.</li>
</ul>
<p>Er det varmen, du er ude efter, så sammenlign med en <a href="/sauna/">sauna</a>: den bruger meget strøm, mens den er tændt, men intet mellem gangene, fordi der ikke er vand, der skal holdes varmt. Et spabad er en varmekilde, der skal fodres døgnet rundt.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger et spabad om året?", answer: "Ifølge Schweiz' energistyrelse bruger et spabad til 3-4 personer mellem 2.500 og over 7.500 kWh om året. 3.000 kWh koster {{kr 3000}} ved {{pris_kwh}}." },
    { question: "Hvad koster et spabad i strøm om måneden?", answer: "Ved 3.000 kWh om året er det i gennemsnit {{kr 3000 /md}} om måneden, men vintermånederne koster mere end sommermånederne, fordi varmetabet stiger med kulden." },
    { question: "Hvor meget sparer en varmepumpe på spabadet?", answer: "Bolius angiver 50 procent eller mere, den schweiziske vejledning op til to tredjedele. Ved 3.000 kWh om året er en halvering 1.500 kWh, svarende til {{kr 1500}}." },
    { question: "Skal jeg holde spabadet varmt hele tiden?", answer: "Nej, det koster altid mindre at sænke temperaturen mellem badene. Ved næsten daglig brug er 2-3 grader nok; ved brug i weekenden kan temperaturen falde mere. Pas på frost om vinteren." },
    { question: "Kan spabadet varme op, når strømmen er billig?", answer: "Ja. Vandet holder på varmen i flere timer under et tæt låg, så opvarmningen kan lægges i de billige timer med spabadets tidsprogram. Undgå kl. 17-21, hvor nettariffen er højere." },
    { question: "Hvor meget strøm bruger et spabad i døgnet?", answer: "Typisk 3-20 kWh i døgnet afhængigt af isolering, låg og udetemperatur. 8 kWh i døgnet koster {{kr 8}}." },
  ],
  relatedSlugs: ["pool", "sauna", "cirkulationspumpe", "haandklaedetoerrer"],
  sources: [
    { name: "Bundesamt für Energie (Schweiz) — Whirlpools: Tipps zum Strom und Geld sparen", url: "https://pubdb.bfe.admin.ch/de/publication/download/8590" },
    { name: "Bolius — Udendørs spa: køb og vedligeholdelse", url: "https://www.bolius.dk/udendoers-spa-koeb-og-vedligeholdelse-18242" },
    { name: "Bolius — Så meget koster en indendørs spa i drift", url: "https://www.bolius.dk/saa-meget-koster-en-indendoers-spa-i-drift-16420" },
  ],
  calculatorConfig: {
    title: "Beregn spabadets strømforbrug",
    options: [
      { label: "Godt isoleret, tæt låg, varmepumpe (ca. 3 kWh/døgn)", kwhPerUse: 3 },
      { label: "Godt isoleret, tæt låg, varmelegeme (ca. 6 kWh/døgn)", kwhPerUse: 6 },
      { label: "Almindelig udespa (ca. 8 kWh/døgn)", kwhPerUse: 8 },
      { label: "Ældre spa eller vandtrukket låg (ca. 14 kWh/døgn)", kwhPerUse: 14 },
    ],
    usageLabel: "Uger i drift pr. år",
    usageUnit: "uger",
    usageMin: 4,
    usageMax: 52,
    usageDefault: 52,
    usageStep: 1,
    per: "døgn",
    perYear: 7,
  },
  publishDate: "2026-11-25",
  updated: "2026-11-22",
};

export default spabad;
