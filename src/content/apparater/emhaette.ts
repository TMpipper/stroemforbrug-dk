import type { ApplianceData } from "@/lib/types";

/**
 * Emhætte — EU-energimærke efter forordning 65/2014 (mærket regner med 60 min. udsugning og 120 min. lys om dagen).
 * Mærketabellen er medianen af 3.000 EPREL-registreringer pr. klasse (trukket 22. nov. 2026); modellerne er EPREL-tal.
 * Beregnerens kWh pr. time = mærkets årsforbrug ÷ 365, fordi mærket regner med én times brug om dagen.
 */
const emhaette: ApplianceData = {
  slug: "emhaette",
  meta: {
    category: "koekken",
    usage: "per-hour",
    hasEuLabel: true,
    shiftable: false,
    motif: "ovn",
    synonyms: ["emhætte", "emhaette", "køkkenemhætte", "udsugning", "emhætte med recirkulation", "loftemhætte", "bordemhætte"],
  },
  name: "Emhætte",
  title: "Emhætte strømforbrug (2026) → kWh pr. time, år og standby",
  description:
    "Se hvor meget strøm en emhætte bruger pr. times madlavning og om året, hvad energimærket A+++ til D betyder, og hvor længe den skal køre efter madlavningen.",
  heading: "Strømforbrug for en emhætte: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En emhætte bruger typisk 30–80 kWh om året ved en times madlavning om dagen. Den median emhætte i klasse A bruger 48 kWh om året, hvilket koster omkring {{kr 48}} ved månedens elpris, eller cirka {{kr 0,13}} pr. time, den kører. Lyset og standby er i dag en lille del af forbruget, fordi næsten alle har LED.",
  kwhRange: [15, 120],
  typicalKwh: 45,
  wattage: 150,
  standbyWatts: 0.4,
  energyLabels: [
    { class: "A+++", kwhPerYear: 9 },
    { class: "A++", kwhPerYear: 20 },
    { class: "A+", kwhPerYear: 27 },
    { class: "A", kwhPerYear: 48 },
    { class: "B", kwhPerYear: 61 },
    { class: "C", kwhPerYear: 81 },
  ],
  models: [
    { brand: "IKEA", model: "NILSBYN 10602369", kwh: 16.1, energyClass: "A+" },
    { brand: "Bosch", model: "DWB98JQ50", kwh: 29.9, energyClass: "A+" },
    { brand: "Bosch", model: "DWB97JP50", kwh: 33.6, energyClass: "A" },
    { brand: "IKEA", model: "LAGAN 30401398", kwh: 63.3, energyClass: "D" },
    { brand: "Electrolux", model: "LFV316Y", kwh: 94.6, energyClass: "C" },
  ],
  seasonalProfile: [1.08, 1.05, 1.0, 0.97, 0.95, 0.92, 0.9, 0.92, 0.98, 1.02, 1.08, 1.13],
  content: `<h2>Hvor meget strøm bruger en emhætte?</h2>
<p>En emhætte består af en ventilator, et fedtfilter og en lampe. Det er ventilatoren, der bruger strømmen – typisk 50–250 W afhængigt af hastighed og model – mens LED-lyset kun bruger få watt. Da de fleste kun har emhætten tændt, mens de laver mad, er årsforbruget beskedent: en almindelig emhætte i klasse A bruger omkring 48 kWh om året, når den kører en time om dagen. Det koster {{kr 48}} om året ved månedens elpris.</p>
<p>Regnet pr. gang koster en times udsugning med en A-emhætte omkring {{kr 0,13}}, og en hurtig aftensmad med en halv times udsugning koster under det halve. Det er emhættens samlede forbrug, der er småt – ikke at den er gratis at have kørende. En gammel emhætte med halogenpærer, der står tændt hele aftenen, kan sagtens bruge 100 kWh om året eller mere.</p>

<h2>Energimærket: A+++ til D og hvad det dækker</h2>
<p>Emhætter til private køkkener har haft EU-energimærke siden 2015 efter forordning 65/2014, og siden 2020 går skalaen fra A+++ til D. Mærket viser fire ting: energiklassen, årsforbruget i kWh, samt klasser for hvor godt ventilatoren udnytter strømmen, hvor godt lyset lyser og hvor godt fedtfilteret fanger fedtet. Årsforbruget regnes med en fast antagelse om 60 minutters udsugning og 120 minutters lys om dagen.</p>
<p>Vi har trukket 3.000 emhætter ud af EU's produktdatabase EPREL. Tabellen viser medianforbruget pr. klasse – halvdelen af emhætterne i klassen bruger mere, halvdelen mindre.</p>
<table>
<thead><tr><th>Energiklasse</th><th>Medianforbrug pr. år</th><th>Pris om året</th><th>Pris pr. times brug</th></tr></thead>
<tbody>
<tr><td>A+++</td><td>9 kWh</td><td>{{kr 9}}</td><td>{{kr 0,025}}</td></tr>
<tr><td>A++</td><td>20 kWh</td><td>{{kr 20}}</td><td>{{kr 0,055}}</td></tr>
<tr><td>A+</td><td>27 kWh</td><td>{{kr 27}}</td><td>{{kr 0,073}}</td></tr>
<tr><td>A</td><td>48 kWh</td><td>{{kr 48}}</td><td>{{kr 0,13}}</td></tr>
<tr><td>B</td><td>61 kWh</td><td>{{kr 61}}</td><td>{{kr 0,17}}</td></tr>
<tr><td>C</td><td>81 kWh</td><td>{{kr 81}}</td><td>{{kr 0,22}}</td></tr>
</tbody>
</table>
<p>Klasse D er udeladt af tabellen, fordi medianen her (72 kWh) er lavere end i C. Det skyldes, at mange D-emhætter er små, billige modeller med svag ventilator og lav luftmængde – de bruger ikke så meget strøm, men flytter heller ikke ret meget luft. Det er en vigtig pointe: energiklassen siger noget om, hvor effektivt emhætten bruger strømmen, ikke om hvor godt den fjerner os. Se derfor også på luftmængden i m³/t og på fedtfilterets klasse, før du køber.</p>

<h2>Hvad bestemmer emhættens forbrug?</h2>
<p><strong>Hastigheden.</strong> Ventilatorens effekt stiger kraftigt med omdrejningerne. Ifølge Bolius bruger en emhætte på fuld udsugning omkring halvanden gang så meget energi som på laveste trin, og boost-trinnet, som mange emhætter har i 5–10 minutter, ligger endnu højere. Brug kun højeste trin, når du steger eller koger noget, der lugter kraftigt eller ryger.</p>
<p><strong>Motortypen.</strong> Nyere emhætter har ofte en EC- eller DC-motor, der bruger markant mindre strøm på lave og mellemste trin end de ældre AC-motorer. Det er en stor del af forklaringen på, at A+ og A++ ligger så langt under A.</p>
<p><strong>Lyset.</strong> Før var halogenpærerne emhættens største strømsluger, fordi lyset ofte blev brugt som køkkenets arbejdslys hele aftenen. Fire halogenspots på 20 W tændt tre timer om dagen bruger omkring 88 kWh om året – mere end en hel A-emhættes udsugning. Med LED er lyset nede på få kWh om året. Har du stadig halogen, kan nye LED-pærer være den største besparelse.</p>
<p><strong>Kanalen og filtrene.</strong> En lang aftrækskanal med mange bøjninger eller et fedtet filter giver modstand, og så skal ventilatoren køre hurtigere for at flytte den samme luft. Rens fedtfiltret jævnligt – metalfiltre kan som regel komme i opvaskemaskinen.</p>

<h2>Emhætte med aftræk eller recirkulation</h2>
<p>En emhætte med aftræk blæser luften ud af huset. En recirkulationsemhætte (kulfilteremhætte) suger luften gennem et fedtfilter og et kulfilter og blæser den tilbage i køkkenet. Recirkulation kræver typisk lidt mere ventilatorkraft, fordi kulfiltret giver modstand, og fugten fra gryderne bliver i køkkenet. Til gengæld blæser aftræksmodellen opvarmet luft ud, som skal erstattes af kold luft udefra – om vinteren koster det varme, ikke strøm, medmindre du varmer huset med el.</p>
<p>Har huset et <a href="/ventilationsanlaeg/">ventilationsanlæg med varmegenvinding</a>, kan en emhætte med aftræk give undertryk, hvis der ikke er erstatningsluft nok. Bolius anbefaler at sikre frisk luft til køkkenet, fx via et vindue på klem eller en ventil, ellers suger emhætten dårligt.</p>

<h2>Hvor længe skal emhætten køre?</h2>
<p>Teknologisk Institut mener ifølge Bolius ikke, det er nødvendigt at tænde emhætten 5–10 minutter før madlavningen, som nogle producenter anbefaler. Tænd den, når du begynder at lave mad. En god emhætte fjerner det meste af os og lugt med det samme, så der er heller ingen grund til at lade den køre længe bagefter. Bolius' tommelfingerregel: hvis en gæst, der kommer ind udefra, ikke kan lugte maden, kan du slukke.</p>
<p>Det betyder, at den typiske emhætte kører 30–60 minutter om dagen. Beregneren ovenfor tager udgangspunkt i en time, som er den samme antagelse, energimærket bruger. Laver du sjældent varm mad, er dit forbrug lavere; steger du meget og har en stor familie, er det højere.</p>

<h2>Emhættens standbyforbrug</h2>
<p>Emhætter med elektroniske knapper, display eller fjernbetjening har et lille standbyforbrug. I EPREL-udtrækket er medianen 0,45 W i standby og 0,4 W i slukket tilstand. Det giver 3–4 kWh om året, svarende til {{kr 4}}. Har emhætten mekaniske knapper, bruger den ingenting, når den er slukket. Standby er altså ikke det, der flytter emhættens forbrug – det gør hastigheden og lyset.</p>

<h2>Hvornår på døgnet bruger emhætten strøm?</h2>
<p>Emhætten kører, når du laver mad, og for de fleste er det sidst på eftermiddagen og om aftenen. Det er netop de timer, hvor elprisen typisk er højest, fordi forbruget i hele landet topper, mens solcellerne er holdt op med at producere. Emhætten kan ikke flyttes til billigere timer, men forbruget er så lille, at forskellen mellem dyre og billige timer kun er få øre pr. aftensmad. Det betyder mere at vælge den rigtige hastighed og at slukke, når lugten er væk.</p>
<p>Det er de store apparater i køkkenet, du kan flytte: <a href="/opvaskemaskine/">opvaskemaskinen</a> kan startes om natten, og en <a href="/slow-cooker/">slow cooker</a> kan sættes over om formiddagen, så maden står klar uden at ovnen kører i de dyre aftentimer.</p>

<h2>Sådan sparer du strøm på emhætten</h2>
<ol>
<li><strong>Skift halogen til LED</strong> – på ældre emhætter er lyset ofte en større post end ventilatoren.</li>
<li><strong>Brug laveste trin som udgangspunkt</strong> – skru kun op, når panden ryger.</li>
<li><strong>Læg låg på gryderne</strong> – mindre damp betyder, at emhætten kan køre langsommere og kortere, og kogepladen bruger mindre strøm.</li>
<li><strong>Sluk, når lugten er væk</strong> – lad den ikke køre i en halv time efter maden.</li>
<li><strong>Rens fedtfiltret</strong> – et fedtet filter tvinger ventilatoren til at arbejde hårdere.</li>
<li><strong>Vælg efter klasse og luftmængde</strong> – en A+-emhætte med god luftmængde er både sparsom og effektiv.</li>
</ol>
<p>Laver du meget mad på <a href="/induktion/">induktion</a> eller i <a href="/ovn/">ovnen</a>, er de apparater langt større poster på elregningen end emhætten over dem.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en emhætte i timen?",
      answer:
        "En emhætte i klasse A bruger omkring 0,13 kWh pr. time, den kører, hvilket koster cirka {{kr 0,13}} ved månedens elpris. På laveste trin er det mindre, og på boost-trinnet mere. En A++-emhætte bruger omkring 0,05 kWh i timen.",
    },
    {
      question: "Hvor mange kWh bruger en emhætte om året?",
      answer:
        "Typisk 30–80 kWh om året ved en times brug om dagen. Medianen for klasse A i EU's produktdatabase er 48 kWh, svarende til {{kr 48}} om året.",
    },
    {
      question: "Bruger emhætten strøm, når den er slukket?",
      answer:
        "Emhætter med elektroniske knapper bruger typisk 0,3–0,5 W i standby, eller 3–4 kWh om året. Det koster omkring {{kr 4}} om året. Emhætter med mekaniske knapper bruger intet.",
    },
    {
      question: "Skal emhætten køre efter madlavning?",
      answer:
        "Kun kort. Bolius' tommelfingerregel er, at du kan slukke, når en gæst, der kommer ind udefra, ikke kan lugte maden. At lade emhætten køre længe efter madlavningen bruger strøm uden at gøre luften mærkbart bedre.",
    },
    {
      question: "Hvilken energiklasse skal jeg vælge til en ny emhætte?",
      answer:
        "A+ eller bedre giver et lavt forbrug: medianen for A+ er 27 kWh om året mod 81 kWh for C. Se også på luftmængden og fedtfilterets klasse, for en emhætte i klasse D kan bruge lidt strøm, fordi den flytter lidt luft.",
    },
    {
      question: "Er en recirkulationsemhætte dyrere i drift?",
      answer:
        "Den bruger lidt mere ventilatorkraft, fordi kulfiltret giver modstand, og kulfiltret skal skiftes. Til gengæld blæser den ikke varm luft ud af huset om vinteren. I strøm er forskellen lille.",
    },
  ],
  relatedSlugs: ["ventilationsanlaeg", "slow-cooker", "induktion", "ovn", "airfryer"],
  sources: [
    { name: "EPREL — EU's produktdatabase, emhætter (fx Bosch DWB97JP50)", url: "https://eprel.ec.europa.eu/screen/product/rangehoods/104213" },
    { name: "Forordning (EU) nr. 65/2014, bilag II — beregning af emhætters årsforbrug", url: "https://www.legislation.gov.uk/eur/2014/65/annex/II/adopted" },
    { name: "Bolius — Skal emhætten være tændt efter madlavning?", url: "https://www.bolius.dk/skal-emhaetten-vaere-taendt-efter-madlavning-4070" },
  ],
  calculatorConfig: {
    title: "Emhætte forbrugsberegner",
    options: [
      { label: "A+ eller bedre (ca. 27 kWh/år på mærket)", kwhPerUse: 0.073 },
      { label: "Klasse A (ca. 48 kWh/år på mærket)", kwhPerUse: 0.13 },
      { label: "Klasse B (ca. 61 kWh/år på mærket)", kwhPerUse: 0.166 },
      { label: "Klasse C eller ældre emhætte", kwhPerUse: 0.22 },
    ],
    usageLabel: "Timer med emhætten tændt pr. dag",
    usageUnit: "timer pr. dag",
    usageMin: 0.25,
    usageMax: 4,
    usageDefault: 1,
    usageStep: 0.25,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-11-23",
  updated: "2026-11-22",
};

export default emhaette;
