import type { ApplianceData } from "@/lib/types";

/**
 * Højtryksrenser (koldtvand, til hjemmet). Intet EU-energimærke.
 * Tal: Kärcher K 2 Start (1,4 kW, maks. 360 l/t, 20 m²/t), K 4 Power Control Flex (1,8 kW, 420 l/t, 30 m²/t),
 * K 5 Power Control Flex (2,1 kW, 500 l/t, 40 m²/t), K 7 Power Flex (3 kW, 600 l/t, 60 m²/t), K 7-manualen (16 A-sikring),
 * Kärchers klasseoversigt (op til 80 % mindre vand end en haveslange), Bosch UniversalAquatak 36V-100 (op til 45 min, ≥ 4 Ah).
 * Kärchers m²/t er en arealydelse ved fuld effekt — kWh pr. m² er vores omregning og en øvre grænse. Timer pr. år: vores skøn.
 */
const hoejtryksrenser: ApplianceData = {
  slug: "hoejtryksrenser",
  meta: {
    category: "have",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["højtryksrenser", "hoejtryksrenser", "højtryksspuler", "kärcher", "karcher", "højtryksrenser til terrasse", "fliserens højtryk", "batteri højtryksrenser"],
  },
  name: "Højtryksrenser",
  article: "en",
  title: "Højtryksrenser strømforbrug (2026) → kWh pr. time og m²",
  description:
    "Se hvor meget strøm en højtryksrenser bruger i timen og pr. m² terrasse: fra 1,4 kW i de små klasser til 3 kW i de store, og hvad en forårsrengøring koster.",
  heading: "Strømforbrug for en højtryksrenser: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En højtryksrenser til hjemmet bruger 1,4-3 kWh i timen, når motoren kører. En mellemklassemodel på 1,8 kW koster omkring {{kr 1,8}} i timen ved {{pris_kwh}}, og seks timer om året bliver cirka 11 kWh, eller {{kr 11}}. Pr. m² terrasse er det efter vores omregning højst omkring 0,06 kWh.",
  kwhRange: [1, 60],
  typicalKwh: 11,
  wattage: 1800,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0.1, 0.6, 2.0, 2.2, 1.6, 1.2, 1.4, 1.6, 1.0, 0.3, 0],
  content: `<h2>Motoren er pumpen</h2>
<p>En højtryksrenser er en elmotor, der driver en lille stempelpumpe. Pumpen tager vand fra haveslangen og presser det ud gennem en smal dyse med et tryk, der er mange gange højere end i vandhanen. Al strømmen går til at skabe det tryk og den vandmængde, og jo større klasse, jo større motor. Kärcher, der har givet navn til hele produktgruppen i daglig tale, oplyser for eksempel 1,4 kW for K 2 Start, 1,8 kW for K 4 Power Control Flex, 2,1 kW for K 5 Power Control Flex og 3 kW for K 7 Power Flex.</p>
<p>Effekten er det, motoren trækker, mens du sprøjter. En time med en model på 1,8 kW bruger 1,8 kWh. Det er ikke meget for et enkelt projekt, men det er mere end de fleste andre haveredskaber, og en K 7 trækker så meget, at Kärcher i manualen anbefaler en sikring på 16 ampere.</p>

<h2>Watt, vand og pris i timen</h2>
<table>
<thead><tr><th>Klasse (eksempel)</th><th>Effekt</th><th>Vand (maks.)</th><th>kWh i timen</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>Batteri 36 V (Bosch UniversalAquatak 36V-100)</td><td>Batteri</td><td>ca. 190 l/t</td><td>0,22</td><td>{{kr 0,22}}</td></tr>
<tr><td>Lille (Kärcher K 2 Start)</td><td>1,4 kW</td><td>360 l/t</td><td>1,4</td><td>{{kr 1,4}}</td></tr>
<tr><td>Mellem (Kärcher K 4)</td><td>1,8 kW</td><td>420 l/t</td><td>1,8</td><td>{{kr 1,8}}</td></tr>
<tr><td>Stor (Kärcher K 5)</td><td>2,1 kW</td><td>500 l/t</td><td>2,1</td><td>{{kr 2,1}}</td></tr>
<tr><td>Største hjemmeklasse (Kärcher K 7)</td><td>3 kW</td><td>600 l/t</td><td>3</td><td>{{kr 3}}</td></tr>
</tbody>
</table>
<p>Batterimodellens tal er vores omregning: Bosch oplyser op til 45 minutters køretid på et batteri på mindst 4 Ah ved 36 V, det vil sige omkring 144 Wh, og vi har lagt cirka 15 procent tab i opladeren til. Bosch oplyser 3,1 liter i minuttet og et tryk på 100 bar for samme model.</p>

<h2>Hvad koster det at rense terrassen?</h2>
<p>Kärcher opgiver en arealydelse for hver klasse: 20 m² i timen for K 2, 30 m² for K 4, 40 m² for K 5 og 60 m² for K 7. Deler man effekten med arealet, bruger alle klasserne omkring 0,05-0,07 kWh pr. m². Den store maskine bruger mere strøm i timen, men bliver hurtigere færdig, så forbruget pr. m² er næsten det samme. Tallene er en øvre grænse, fordi motoren kun kører, mens du trykker på håndtaget.</p>
<table>
<thead><tr><th>Opgave (vores eksempler)</th><th>Areal</th><th>kWh med K 4 (ca.)</th><th>Pris</th></tr></thead>
<tbody>
<tr><td>Lille terrasse</td><td>20 m²</td><td>1,2</td><td>{{kr 1,2}}</td></tr>
<tr><td>Fliser foran huset og indkørsel</td><td>50 m²</td><td>3</td><td>{{kr 3}}</td></tr>
<tr><td>Stor træterrasse</td><td>80 m²</td><td>4,8</td><td>{{kr 4,8}}</td></tr>
</tbody>
</table>
<p>I praksis tager arbejdet ofte længere tid, end arealydelsen lover. Tilgroede fuger, alger og en fliserenser, der skal køres langsomt, kan let fordoble tiden. Kärchers tal er målt under gode forhold og egner sig mest til at sammenligne klasserne med hinanden.</p>

<h2>Vand er også en del af regningen</h2>
<p>En højtryksrenser bruger vand, og det er ofte den større post. En K 4 kan bruge op til 420 liter i timen, så en eftermiddag med terrassen kan let bruge et par tusinde liter. Kärcher skriver, at en højtryksrenser bruger op til 80 procent mindre vand end en almindelig haveslange til samme opgave, fordi det er trykket og ikke mængden, der gør arbejdet. Brug alligevel kun vand, hvor det gør gavn, og fej løst snavs væk først.</p>

<h2>Hvornår bruger højtryksrenseren strøm?</h2>
<p>Højtryksrenseren bruges, når vejret er til det — typisk en lørdag eller en lys aften om foråret. Forbruget kan ikke flyttes til natten, men du kan vælge tidspunktet på dagen. Midt på dagen er elprisen ofte lavere end mellem kl. 17 og 21, hvor nettariffen er højest. Boksen længere oppe på siden viser, hvordan prisen ser ud time for time i dag. På et enkelt projekt er forskellen dog kun nogle få kroner.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Klassen</strong> — en større maskine trækker mere, men er hurtigere færdig. Til en lille altan er den mindste klasse nok.</li>
<li><strong>Dysen og fliserenseren</strong> — en roterende dyse eller en fliserenser gør arbejdet hurtigere end en flad stråle, så motoren kører kortere tid.</li>
<li><strong>Afstanden</strong> — hold dysen tæt nok på til, at snavset flytter sig, men ikke så tæt, at du ødelægger fugerne eller træet.</li>
<li><strong>Rengøringsmiddel</strong> — på alger og olie kan et middel, der får lov at virke først, spare tid med strålen.</li>
<li><strong>Pauser</strong> — slip håndtaget, når du flytter dig, så pumpen ikke kører uden grund.</li>
</ul>

<h2>Strøm og sikkerhed udendørs</h2>
<p>En højtryksrenser på 2-3 kW trækker 9-13 ampere og skal tilsluttes en udendørs stikkontakt med fejlstrømsafbryder (HPFI eller RCD). Brug helst ikke en lang forlængerledning; er det nødvendigt, så vælg en til udendørs brug med et tykt tværsnit, og rul den helt ud. Det er bedre at forlænge vandslangen end strømkablet. Del ikke gruppe med andre store forbrugere, mens du sprøjter, så sikringen ikke slår fra.</p>
<p>Sammenlignet med havens andre redskaber er højtryksrenseren en af de større forbrugere, når den kører — større end en <a href="/elplaeneklipper/">elplæneklipper</a> og på niveau med en <a href="/loevblaeser/">løvsuger</a> på fuld kraft. Men den bruges få timer om året, så det samlede forbrug er lille. En <a href="/dykpumpe/">dykpumpe</a>, der tømmer en regnvandstank, bruger ofte langt mindre i timen, men kan køre mange flere timer.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Fej og fjern løst snavs, før du tænder.</li>
<li>Brug en fliserenser eller roterende dyse på store flader.</li>
<li>Vælg en klasse, der passer til dine opgaver — ikke den største.</li>
<li>Slip håndtaget, når du ikke sprøjter.</li>
<li>Rens terrassen, inden algerne tager over; et let lag tager kortere tid.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad dine timer med højtryksrenseren koster.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en højtryksrenser?",
      answer:
        "Til hjemmebrug typisk 1,4-3 kW. Kärcher oplyser 1,4 kW for K 2 Start, 1,8 kW for K 4, 2,1 kW for K 5 og 3 kW for K 7. En time med en K 4 bruger 1,8 kWh og koster {{kr 1,8}}.",
    },
    {
      question: "Hvad koster det at rense en terrasse med højtryksrenser?",
      answer:
        "Efter vores omregning af Kärchers arealydelse bruger en K 4 omkring 0,06 kWh pr. m². En terrasse på 50 m² bruger cirka 3 kWh og koster {{kr 3}} i strøm — vandet kommer oveni.",
    },
    {
      question: "Bruger en stor højtryksrenser mere strøm end en lille?",
      answer:
        "I timen ja, men den bliver hurtigere færdig. Kärchers tal giver omkring 0,05-0,07 kWh pr. m² for alle klasserne, så forbruget pr. opgave er næsten det samme.",
    },
    {
      question: "Hvor meget vand bruger en højtryksrenser?",
      answer:
        "Kärcher oplyser maks. 360 liter i timen for K 2 og 600 liter for K 7. Ifølge Kärcher bruger en højtryksrenser op til 80 procent mindre vand end en haveslange til samme opgave.",
    },
    {
      question: "Kræver en højtryksrenser en særlig sikring?",
      answer:
        "De største hjemmemodeller trækker op til 3 kW, og Kärcher anbefaler en sikring på 16 ampere til K 7. Brug en udendørs stikkontakt med fejlstrømsafbryder.",
    },
    {
      question: "Hvad koster en højtryksrenser i strøm om året?",
      answer:
        "Med seks timer om året bruger en model på 1,8 kW omkring 11 kWh, svarende til {{kr 11}}.",
    },
  ],
  relatedSlugs: ["elplaeneklipper", "loevblaeser", "dykpumpe", "kompressor", "pool"],
  sources: [
    { name: "Kärcher — K 2 Start (effekt, vandmængde, arealydelse)", url: "https://www.kaercher.com/int/home-garden/pressure-washers/k-2-16735200.html" },
    { name: "Kärcher — K 4 Power Control Flex", url: "https://www.kaercher.com/int/home-garden/pressure-washers/k-4-power-control-flex-13243000.html" },
    { name: "Kärcher — K 5 Power Control Flex", url: "https://www.kaercher.com/za/home-garden/pressure-washers/k-5-power-control-flex-13247000.html" },
    { name: "Kärcher — K 7 Power Flex", url: "https://www.kaercher.com/za/home-garden/pressure-washers/k-7-power-flex-13173000.html" },
    { name: "Kärcher — Brugsanvisning K 7 Smart Control (sikring)", url: "https://www.kaercher.com/documents/manuals/html/BTA-5772280-000-00/EN.html" },
    { name: "Kärcher — Højtryksrensere: klasser og vandforbrug", url: "https://www.kaercher.com/za/home-garden/high-pressure-cleaners.html" },
    { name: "Bosch — UniversalAquatak 36V-100", url: "https://www.bosch-diy.com/dk/da/p/universalaquatak-36v-100-06008c7000" },
  ],
  calculatorConfig: {
    title: "Beregn højtryksrenserens strømforbrug",
    options: [
      { label: "Batteri 36 V (ca. 0,22 kWh/time)", kwhPerUse: 0.22 },
      { label: "Lille klasse (1,4 kW)", kwhPerUse: 1.4 },
      { label: "Mellemklasse (1,8 kW)", kwhPerUse: 1.8 },
      { label: "Stor klasse (2,1 kW)", kwhPerUse: 2.1 },
      { label: "Største hjemmeklasse (3 kW)", kwhPerUse: 3 },
    ],
    usageLabel: "Timer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 40,
    usageDefault: 6,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-15",
  updated: "2026-11-22",
};

export default hoejtryksrenser;
