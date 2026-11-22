import type { ApplianceData } from "@/lib/types";

/**
 * Miniovn (bordovn/minikøkken-ovn) — lecker.de testede fem bordovne med strømmåler: Ninja Foodi 8-i-1 SP101EU (10 l, 2.000–2.400 W)
 * frossen pizza 0,35 kWh på 12 min. og pommes frites 0,5 kWh på knap en halv time; Silvercrest SGB 1200 B5 (14 l, 1.300 W)
 * 200 g pommes frites 0,244 kWh; Rommelsbacher BGE 1580/E (30 l, 1.450–1.750 W) pommes frites ca. 0,6 kWh; Stillstern MB60-MX 2G
 * (60 l, 2.200 W) næsten 15 min. forvarmning til 180 °C. Stor ovn: Øko-Test (schweizisk måling) kølepizza 0,54–0,68 kWh, en time
 * ved 200 °C 1,15 kWh. EU-energimærket (65/2014) gælder ikke »portable ovne« under 18 kg — bordovne har intet mærke.
 * Stor bordovn i en time (≈ 1 kWh) er vores skøn. Beregneren: kWh pr. gang, antal pr. uge × 52.
 */
const miniovn: ApplianceData = {
  slug: "miniovn",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["miniovn", "mini ovn", "bordovn", "minikøkken", "minikøkken ovn", "lille ovn", "toasterovn", "toaster oven", "minibageovn", "bordovn med varmluft", "kombiovn bord"],
  },
  name: "Miniovn",
  article: "en",
  title: "Miniovn strømforbrug (2026) → bordovn mod stor ovn i kWh",
  description:
    "Se hvor meget strøm en miniovn eller bordovn bruger pr. gang – pizza, pommes frites og bagning – og hvornår den slår den store ovn, målt i kWh og pris.",
  heading: "Strømforbrug for en miniovn: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En miniovn bruger typisk 0,25–0,6 kWh pr. gang, alt efter størrelse og ret. En frossen pizza i en bordovn på 10 liter brugte 0,35 kWh i en test, svarende til {{kr 0,35}} ved månedens elpris. Den samme pizza i en stor ovn bruger 0,54–0,68 kWh. Med tre retter om ugen bliver det omkring 55 kWh om året, eller {{kr 55}}.",
  kwhRange: [10, 200],
  typicalKwh: 55,
  wattage: 1500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.08, 1.04, 1.0, 0.97, 0.94, 0.9, 0.9, 0.92, 0.98, 1.04, 1.08, 1.15],
  content: `<h2>Hvorfor en miniovn bruger mindre end den store ovn</h2>
<p>En miniovn – også kaldet bordovn eller minikøkken – er en lille ovn med varmelegemer i top og bund, ofte med varmluft og nogle gange med kogeplader ovenpå. Den har typisk et ovnrum på 10–40 liter, mens en indbygget ovn har 60–75 liter. Det er rummets størrelse, der afgør det meste af forbruget: jo mindre luft og stål der skal varmes op, jo hurtigere er ovnen klar, og jo mindre varme slipper ud undervejs.</p>
<p>Effekten er til gengæld ikke lav. En bordovn er typisk mærket 1.300–2.400 W, så mens den varmer op, trækker den næsten lige så meget som en stor ovn. Forskellen er, at den bliver færdig med at varme op langt hurtigere og derefter kun skal holde et lille rum varmt.</p>

<h2>Målte tal: pizza, pommes frites og bagning</h2>
<p>Det tyske madmagasin lecker.de testede fem bordovne med en strømmåler og den samme frosne pizza, pommes frites og boller i dem alle. En kombiovn på 10 liter med varmluft brugte 0,35 kWh på en frossen pizza på 12 minutter og 0,5 kWh på pommes frites i knap en halv time. En lille ovn på 14 liter brugte 0,244 kWh på 200 gram pommes frites, og en bordovn på 30 liter brugte omkring 0,6 kWh på det samme. Den største ovn i testen, på 60 liter, var næsten et kvarter om at nå 180 grader.</p>
<table>
<thead><tr><th>Ovn og ret</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Lille bordovn 14 l, pommes frites (målt)</td><td>0,24 kWh</td><td>{{kr 0,24}}</td></tr>
<tr><td>Kombiovn 10 l med varmluft, frossen pizza (målt)</td><td>0,35 kWh</td><td>{{kr 0,35}}</td></tr>
<tr><td>Bordovn 30 l, pommes frites (målt)</td><td>0,6 kWh</td><td>{{kr 0,6}}</td></tr>
<tr><td>Stor bordovn 40–60 l, en times bagning (vores skøn)</td><td>1,0 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Indbygget ovn, kølepizza (målt, til sammenligning)</td><td>0,54–0,68 kWh</td><td>{{kr 0,54-0,68}}</td></tr>
</tbody>
</table>
<p>Tallet for den indbyggede ovn kommer fra en schweizisk måling, som Øko-Test har gengivet: 0,54 kWh på varmluft uden forvarmning og 0,68 kWh med over- og undervarme og forvarmning. Den store bordovn i en time er vores skøn ud fra testens opvarmningstid og effekt.</p>

<h2>Hvornår slår miniovnen den store ovn?</h2>
<p>Miniovnen vinder klart til små portioner: en pizza, en portion pommes frites, et par stykker brød til opvarmning eller et lille fad lasagne. En lille ovn på 10–15 liter bruger her cirka halvdelen af, hvad en indbygget <a href="/ovn/">ovn</a> bruger. Fordelen bliver mindre, jo større bordovnen er. En miniovn på 40–60 liter er næsten lige så stor som en almindelig ovn, men har ofte tyndere vægge og dårligere isolering, og så kan den bruge lige så meget eller mere.</p>
<p>Den tyske forbrugerorganisation Verbraucherzentrale advarer netop om, at en miniovn og en almindelig ovn kan have samme energiklasse og alligevel bruge forskelligt, fordi rummet er så forskelligt. Bordovne har i dag slet intet EU-energimærke: forordningen om ovnenes energimærke gælder ikke for »portable ovne«, som er ovne under 18 kilo, der ikke er bygget til indbygning. Det betyder også, at du ikke kan sammenligne bordovne på mærket – kun på størrelse, effekt og test.</p>

<h2>Miniovn, airfryer eller mikroovn?</h2>
<p>En <a href="/airfryer/">airfryer</a> er i praksis en endnu mindre varmluftsovn med en kraftig blæser. Til pommes frites og nuggets er den ofte den mest sparsomme, fordi rummet er så lille. Kombiovnen på 10 liter i lecker.de's test er netop en ovn med airfryerfunktion. Til opvarmning af rester er en <a href="/mikroovn/">mikroovn</a> endnu billigere, fordi den varmer maden direkte og ikke luften omkring den. Miniovnen er bedst, når maden skal have sprød bund eller skorpe, og portionen er for stor til airfryeren.</p>

<h2>Bordovnen i sommerhuset, på kollegiet og i campingvognen</h2>
<p>Mange bruger en miniovn, hvor der ikke er plads til et rigtigt køkken. Et minikøkken med ovn og to kogeplader på toppen kan erstatte et komfur, men pas på sikringen: ovn og plader tilsammen kan trække 3.000 W, og en almindelig gruppe på 10 ampere kan kun klare omkring 2.300 W. Brug ikke ovn og begge plader på fuld effekt på én gang, og slet ikke med en elkedel på samme gruppe. Kogepladerne bruger det samme som en almindelig bordkogeplade – se vores side om <a href="/kogeplade/">kogepladen</a>.</p>
<p>Bager du brød i miniovnen, er det værd at sammenligne med en <a href="/broedbagemaskine/">brødbagemaskine</a>, der bruger omkring 0,36 kWh pr. brød og kan bage om natten.</p>

<h2>Hvornår på døgnet bruges miniovnen?</h2>
<p>Miniovnen bruges som regel til aftensmaden mellem klokken 17 og 19, når elprisen er højest, og den kan ikke flyttes, fordi maden skal spises varm. Beløbet pr. gang er lille, men det samlede forbrug af alt det, der koger og bager i de timer, kan mærkes. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Sådan sparer du strøm med miniovnen</h2>
<ol>
<li><strong>Spring forvarmningen over</strong>, hvor opskriften tillader det – Verbraucherzentrale regner med op til 20 procent besparelse.</li>
<li><strong>Brug varmluft</strong>, så kan temperaturen typisk sættes lidt lavere end ved over- og undervarme – i Øko-Tests måling var varmluft også den billigste måde at bage pizzaen på.</li>
<li><strong>Sluk et par minutter før tid</strong>; restvarmen bager færdig i op til et kvarter.</li>
<li><strong>Vælg den mindste ovn</strong>, der passer til dine portioner – den store bordovn sparer ikke meget.</li>
<li><strong>Hold lågen lukket</strong>; et lille rum mister varmen hurtigt, hver gang den åbnes.</li>
</ol>
<p>Skal den store ovn renses med pyrolyse bagefter, kan du se, hvad det koster på vores side om <a href="/pyrolyseovn/">pyrolyseovnen</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en miniovn?",
      answer:
        "Typisk 0,25–0,6 kWh pr. gang. En frossen pizza i en bordovn på 10 liter brugte 0,35 kWh i lecker.de's test, hvilket koster cirka {{kr 0,35}} ved månedens elpris.",
    },
    {
      question: "Er en miniovn billigere end en almindelig ovn?",
      answer:
        "Ja, til små portioner. En lille bordovn bruger omtrent halvdelen af en indbygget ovn, som brugte 0,54–0,68 kWh på en kølepizza. En stor bordovn på 40–60 liter sparer derimod ikke meget.",
    },
    {
      question: "Hvor mange watt har en bordovn?",
      answer:
        "Typisk 1.300–2.400 W. Effekten bruges mest, mens ovnen varmer op. En lille ovn er hurtigere klar og holder derefter kun et lille rum varmt.",
    },
    {
      question: "Har en miniovn et energimærke?",
      answer:
        "Nej. EU's energimærke for ovne gælder ikke for portable ovne under 18 kilo, så bordovne og minikøkkener har intet mærke. Sammenlign på størrelse, effekt og test.",
    },
    {
      question: "Hvad koster en miniovn i strøm om året?",
      answer:
        "Med tre retter om ugen på omkring 0,35 kWh bliver det cirka 55 kWh om året, hvilket koster omkring {{kr 55}} ved månedens elpris.",
    },
  ],
  relatedSlugs: ["ovn", "airfryer", "mikroovn", "broedbagemaskine", "kogeplade"],
  sources: [
    { name: "lecker.de — Minibackofen-Test: die besten kleinen Öfen (målt med strømmåler)", url: "https://www.lecker.de/minibackofen-test-die-besten-kleinen-oefen-zum-sparen-131259.html" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (pizza i ovn)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
    { name: "Verbraucherzentrale — Backofen: Darauf sollten Sie bei Kauf und Nutzung achten", url: "https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/backofen-darauf-sollten-sie-bei-kauf-und-nutzung-achten-46197" },
    { name: "EUR-Lex — Forordning (EU) 65/2014 om energimærkning af ovne (undtagelse for portable ovne)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0065" },
  ],
  calculatorConfig: {
    title: "Miniovn forbrugsberegner",
    options: [
      { label: "Lille bordovn 10–15 l, en portion", kwhPerUse: 0.25 },
      { label: "Kombiovn med varmluft, frossen pizza", kwhPerUse: 0.35 },
      { label: "Bordovn 30 l, pommes frites eller fad", kwhPerUse: 0.6 },
      { label: "Stor bordovn 40–60 l, en times bagning", kwhPerUse: 1.0 },
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

export default miniovn;
