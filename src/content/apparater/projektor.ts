import type { ApplianceData } from "@/lib/types";

const projektor: ApplianceData = {
  slug: "projektor",
  meta: {
    category: "underholdning",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "tv",
    synonyms: ["projektor", "projector", "hjemmebiograf", "laserprojektor", "lampeprojektor", "mini-projektor", "beamer", "epson projektor", "samsung freestyle"],
  },
  name: "Projektor",
  article: "en",
  title: "Projektor strømforbrug (2026) → lampe, laser og mini i watt",
  description: "En hjemmebiografprojektor bruger 200-320 watt, en lille LED-projektor under 50. Se pris pr. film, kWh om året og hvorfor ECO-tilstand sparer en tredjedel.",
  heading: "Strømforbrug for en projektor: watt og pris",
  quickAnswer:
    "En hjemmebiografprojektor med lampe eller laser bruger omkring 300 watt i normal tilstand, ifølge Epson. En time koster {{oere 0,3}} ved {{pris_kwh}}, og en film på to timer cirka {{oere 0,6}}. Seks timer om ugen hele året giver omkring 94 kWh, svarende til {{kr 94}}. I ECO-tilstand falder forbruget med op til en tredjedel, og en lille LED-projektor bruger højst 50 watt.",
  kwhRange: [5, 400],
  typicalKwh: 94,
  wattage: 300,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.25, 1.15, 1.05, 0.95, 0.8, 0.7, 0.75, 0.8, 0.95, 1.1, 1.2, 1.3],
  content: `<h2>Hvor mange watt bruger en projektor?</h2>
<p>En projektor skal sende så meget lys ud, at billedet kan ses på et lærred på tre meter eller mere. Det kræver strøm, og en hjemmebiografprojektor bruger derfor typisk mere end et stort fladskærms-<a href="/tv/">tv</a>. Lyskilden er den store post — en kviksølvlampe, en laser eller lysdioder — og resten går til elektronik og blæsere, der skal holde lyskilden kølig. Forskellen mellem de store hjemmebiografmodeller og de små bærbare er stor.</p>
<table>
<thead><tr><th>Projektor og tilstand</th><th>Watt</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>Epson EH-TW7100 (lampe), normal</td><td>323 W</td><td>{{oere 0,323}}</td></tr>
<tr><td>Epson EH-TW7100, ECO, højeste forbrug</td><td>297 W</td><td>{{oere 0,297}}</td></tr>
<tr><td>Epson LS11000 (laser), normal</td><td>302 W</td><td>{{oere 0,302}}</td></tr>
<tr><td>Epson LS11000, ECO</td><td>198 W</td><td>{{oere 0,198}}</td></tr>
<tr><td>Samsung The Freestyle 2. gen. (LED), højst</td><td>50 W</td><td>{{oere 0,05}}</td></tr>
<tr><td>Standby (alle tre)</td><td>0,4-0,5 W</td><td>under en halv øre</td></tr>
</tbody>
</table>
<p>Tallene er producenternes egne. For Epsons laserprojektor gælder tallene ved 220-240 volt, som i Danmark. Lampemodellen kan toppe ved 387 watt i normal tilstand, men ligger i gennemsnit omkring 323 watt.</p>

<h2>Lampe, laser eller LED</h2>
<p>De klassiske projektorer bruger en lampe, der giver meget lys for pengene, men slides. Epson oplyser en levetid på omkring 3.500 timer i normal tilstand og 5.000 timer i ECO for lampen i EH-TW7100. Derefter skal lampen skiftes. Laserprojektorer koster mere at købe, men lyskilden holder langt længere end en lampe, og lyset kan dæmpes trinløst. I Epsons tal bruger laser- og lampemodellen omtrent det samme i normal tilstand, men laseren falder til knap 200 watt i ECO.</p>
<p>Lysstyrken angives i lumen, og jo mere lys, jo mere strøm kræver det som regel. Epson oplyser, at lampen i EH-TW7100 er på 250 watt — altså størstedelen af projektorens samlede forbrug på omkring 323 watt. Resten går til elektronik, billedbehandling og de blæsere, der skal køle lampen. Det er også blæserne, du hører, når projektoren køler af et øjeblik, efter at du har slukket den.</p>
<p>Små LED-projektorer som Samsungs The Freestyle er i en helt anden klasse. De bruger højst 50 watt, men de giver også et svagere billede, der kræver et mørkt rum. Til en filmaften i et mørklagt soveværelse er de rigeligt; til en lys stue med et stort lærred er de for svage.</p>

<h2>Hvad koster en projektor om året?</h2>
<p>Forbruget pr. time er ikke stort, men en film tager to timer, og en sportsaften længere. Tabellen regner med cirka 300 watt for en hjemmebiografprojektor i normal tilstand og 200 watt i ECO.</p>
<table>
<thead><tr><th>Brug</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>To film om ugen (4 timer), normal</td><td>62 kWh</td><td>{{kr 62}}</td></tr>
<tr><td>Seks timer om ugen, normal</td><td>94 kWh</td><td>{{kr 94}}</td></tr>
<tr><td>Seks timer om ugen, ECO</td><td>62 kWh</td><td>{{kr 62}}</td></tr>
<tr><td>To timer hver aften, normal</td><td>219 kWh</td><td>{{kr 219}}</td></tr>
<tr><td>Lille LED-projektor, seks timer om ugen</td><td>16 kWh</td><td>{{kr 16}}</td></tr>
</tbody>
</table>
<p>Bruger du projektoren i stedet for et tv hver aften, er den altså en større post end de fleste tv. Bruger du den til en ugentlig filmaften, er den en lille post. Husk også, at en lampeprojektor i ECO-tilstand holder længere mellem lampeskiftene, så den sparsomme tilstand betaler sig på to måder: lavere elregning og færre nye lamper.</p>

<h2>Projektorer har ikke et energimærke</h2>
<p>Tv og skærme skal have EU's energimærke, men projektorer er udtrykkeligt undtaget fra reglerne om elektroniske skærme. Det betyder, at der ikke er nogen energiklasse at sammenligne med i butikken. Du må i stedet finde forbruget i producentens specifikationer — se efter tal for normal og ECO-tilstand og for standby. Står der kun ét tal, er det ofte det maksimale forbrug, og det reelle gennemsnit ligger lidt lavere.</p>

<h2>Lyd, afspiller og standby</h2>
<p>En projektor har sjældent god lyd selv, så den bruges næsten altid med en <a href="/soundbar/">soundbar</a> eller et lydanlæg, og billedet kommer fra en <a href="/tv-boks/">tv-boks</a>, en konsol eller en computer. De står ofte tændt eller på standby ved siden af. Selve projektoren bruger lidt i standby: 0,4-0,5 watt hos Epson og Samsung. Er netværksfunktionerne på Epsons laserprojektor slået til, stiger standby dog til 2 watt, ifølge Epson — det er cirka 17 kWh om året, svarende til {{kr 17}}.</p>

<h2>Hvad bestemmer, hvor meget strøm din projektor bruger?</h2>
<ul>
<li><strong>Lyskilden</strong> — lampe og laser bruger omtrent det samme i normal tilstand; LED bruger langt mindre.</li>
<li><strong>Tilstanden</strong> — ECO kan skære op til en tredjedel af forbruget.</li>
<li><strong>Lysstyrken</strong> — et lyst rum kræver mere lys og dermed mere strøm.</li>
<li><strong>Timer om ugen</strong> — projektor som hovedskærm eller til filmaftener er to forskellige regnestykker.</li>
<li><strong>Netværk i standby</strong> — kan gange standbyforbruget med fem.</li>
</ul>

<h2>Sådan sparer du strøm på din projektor</h2>
<ol>
<li><strong>Brug ECO-tilstand</strong>, når rummet er mørkt — det sparer strøm og forlænger lampens levetid.</li>
<li><strong>Mørklæg rummet</strong>, så du kan nøjes med mindre lys.</li>
<li><strong>Slå netværk i standby fra</strong>, hvis du ikke tænder projektoren fra en app.</li>
<li><strong>Sluk lyd og afspiller</strong> sammen med projektoren.</li>
<li><strong>Brug tv'et til hverdag</strong> og projektoren til de store aftener.</li>
</ol>`,
  faqs: [
    { question: "Hvor mange watt bruger en projektor?", answer: "En hjemmebiografprojektor bruger 200-320 W afhængigt af tilstand, ifølge Epson. En lille LED-projektor som Samsung The Freestyle bruger højst 50 W. En time på 300 W koster {{oere 0,3}}." },
    { question: "Hvad koster det at se en film på projektor?", answer: "En film på to timer med cirka 300 W bruger 0,6 kWh og koster {{oere 0,6}} ved {{pris_kwh}}." },
    { question: "Bruger en projektor mere strøm end et tv?", answer: "Ofte ja. En hjemmebiografprojektor bruger omkring 300 W i normal tilstand, mere end de fleste tv. Seks timer om ugen er cirka 94 kWh om året, svarende til {{kr 94}}." },
    { question: "Bruger en laserprojektor mindre strøm end en lampeprojektor?", answer: "I normal tilstand bruger de omtrent det samme i Epsons tal: 302 W mod 323 W. I ECO falder laseren til 198 W." },
    { question: "Har projektorer et energimærke?", answer: "Nej. Projektorer er undtaget fra EU's regler om energimærkning af elektroniske skærme, så du skal finde forbruget i producentens specifikationer." },
  ],
  relatedSlugs: ["tv", "soundbar", "tv-boks", "playstation", "xbox", "skaerm"],
  sources: [
    { name: "Epson — EH-TW7100 specifikationer (strømforbrug, standby og lampens levetid)", url: "https://www.epson.co.uk/p/28496" },
    { name: "Epson — Home Cinema LS11000 elektriske specifikationer (220-240 V)", url: "https://files.support.epson.com/docid/cpd6/cpd61108/source/specifications/reference/hcls11000/spex_electrical_hcls11000.html" },
    { name: "Samsung — The Freestyle 2nd Gen specifikationer (maksimalt forbrug og standby)", url: "https://www.samsung.com/uk/business/projectors/the-freestyle/the-freestyle-2nd-gen-sp-lff3claxxxu" },
    { name: "Forordning (EU) 2019/2013, artikel 1 — undtagelser fra energimærkning af elektroniske skærme", url: "https://www.legislation.gov.uk/eur/2019/2013/article/1" },
  ],
  calculatorConfig: {
    title: "Beregn din projektors strømforbrug",
    options: [
      { label: "Lille LED-projektor (højst ca. 50 W)", kwhPerUse: 0.05 },
      { label: "Laserprojektor i ECO (ca. 200 W)", kwhPerUse: 0.2 },
      { label: "Laserprojektor, normal (ca. 300 W)", kwhPerUse: 0.3 },
      { label: "Lampeprojektor, normal (ca. 320 W)", kwhPerUse: 0.32 },
    ],
    usageLabel: "Timer i brug pr. uge",
    usageUnit: "timer/uge",
    usageMin: 1,
    usageMax: 40,
    usageDefault: 6,
    usageStep: 1,
    per: "time",
    perYear: 52,
  },
  publishDate: "2026-12-11",
  updated: "2026-11-22",
};

export default projektor;
