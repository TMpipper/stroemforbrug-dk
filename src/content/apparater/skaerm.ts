import type { ApplianceData } from "@/lib/types";

const skaerm: ApplianceData = {
  slug: "skaerm",
  meta: {
    category: "it",
    usage: "per-hour",
    hasEuLabel: true,
    shiftable: false,
    motif: "computer",
    synonyms: ["computerskærm", "skærm", "pc-skærm", "monitor", "gamingskærm", "27 tommer skærm", "24 tommer skærm", "ultrawide"],
  },
  name: "Computerskærm",
  article: "en",
  title: "Computerskærm strømforbrug (2026) → Watt, mærke og standby",
  description: "En computerskærm bruger 10-30 watt i drift og under en halv watt på standby. Se energimærket, kWh om året for 24 og 27 tommer skærme og hvad en dag koster.",
  heading: "Strømforbrug for en computerskærm: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En almindelig 24-27\" computerskærm bruger 12-25 watt, mens den er tændt, og 0,3-0,5 watt på standby. Seks timer om dagen hele året giver cirka 35 kWh, svarende til {{kr 35}} ved {{pris_kwh}}. En time foran skærmen koster under {{oere 0,03}}.",
  kwhRange: [10, 120],
  typicalKwh: 35,
  wattage: 16,
  standbyWatts: 0.3,
  energyLabels: [
    { class: "A", kwhPerYear: 16 },
    { class: "B", kwhPerYear: 22 },
    { class: "C", kwhPerYear: 28 },
    { class: "D", kwhPerYear: 34 },
    { class: "E", kwhPerYear: 43 },
    { class: "F", kwhPerYear: 53 },
  ],
  models: [
    { brand: "Dell", model: "P2425H (24\", 2.000 timer/år)", kwh: 23, energyClass: "C" },
    { brand: "Dell", model: "P2725H (27\", 2.000 timer/år)", kwh: 32, energyClass: "D" },
    { brand: "Dell", model: "U2724D (27\" QHD, 2.000 timer/år)", kwh: 48, energyClass: "F" },
    { brand: "Dell", model: "U2725QE (27\" 4K, 2.000 timer/år)", kwh: 51, energyClass: "F" },
  ],
  seasonalProfile: [1.1, 1.05, 1.0, 1.0, 0.95, 0.9, 0.85, 0.95, 1.0, 1.05, 1.05, 1.1],
  content: `<h2>Hvor mange watt bruger en computerskærm?</h2>
<p>En moderne computerskærm er et af de mindste strømforbrug ved skrivebordet. Det er selve computeren — og især en <a href="/gaming-pc/">gaming-pc</a> med grafikkort — der trækker de store watt; skærmen ligger typisk mellem 10 og 30 watt, så længe den viser et billede. Det svarer til en eller to LED-pærer.</p>
<p>Tallene kommer fra EU's produktdatabase EPREL, hvor alle skærme, der sælges i EU, skal registreres med deres strømforbrug i tændt tilstand målt efter en fælles standard. Fire eksempler fra samme producent viser spændet: en 24" full HD-skærm (Dell P2425H) er registreret med 11,7 W, en 27" full HD (P2725H) med 15,8 W, en 27" med højere opløsning (U2724D) med 23,9 W og en 27" 4K-model (U2725QE) med 25,4 W. Alle fire bruger 0,3-0,5 W på standby.</p>
<table>
<thead><tr><th>Skærm</th><th>Watt i drift</th><th>kWh pr. 1.000 timer</th><th>Pris pr. 1.000 timer</th></tr></thead>
<tbody>
<tr><td>24" full HD, klasse C</td><td>11,7 W</td><td>11,7 kWh</td><td>{{kr 11,7}}</td></tr>
<tr><td>27" full HD, klasse D</td><td>15,8 W</td><td>15,8 kWh</td><td>{{kr 15,8}}</td></tr>
<tr><td>27" QHD, klasse F</td><td>23,9 W</td><td>23,9 kWh</td><td>{{kr 23,9}}</td></tr>
<tr><td>27" 4K, klasse F</td><td>25,4 W</td><td>25,4 kWh</td><td>{{kr 25,4}}</td></tr>
</tbody>
</table>
<p>Watt i drift er målt med standardindstillingerne fra fabrikken. Skruer du lysstyrken helt op, slår HDR til eller kører 144 Hz og derover på en gamingskærm, ligger forbruget højere end tallet på mærket.</p>

<h2>Energimærket på skærme — og hvorfor de fleste ligger i D til F</h2>
<p>Computerskærme har haft det nye EU-energimærke med skalaen A-G siden marts 2021 (forordning 2019/2013). Klassen beregnes ud fra et energieffektivitetsindeks, der sammenligner det målte forbrug med skærmens areal: en stor skærm må bruge flere watt end en lille i samme klasse. Mærket viser forbruget i kWh pr. 1.000 timer, ikke pr. år, fordi skærme bruges så forskelligt.</p>
<p>Skalaen blev med vilje lagt stramt, så der var plads til forbedringer. Derfor er A og B sjældne, og almindelige kontorskærme lander typisk i C, D eller E, mens skærme med høj opløsning, høj lysstyrke eller høj billedfrekvens ofte ender i F eller G. Energimærke-tabellen længere nede på siden viser grænserne for en 27" skærm (20,1 dm² synligt areal), omregnet til et år med 2.000 timer — otte timer på 250 arbejdsdage. Tallet for hver klasse er det højeste forbrug, en skærm i den klasse må have.</p>
<p>Forskellen mellem klasse C og F på en 27" skærm er cirka 25 kWh om året ved fuldtidsbrug, eller {{kr 25}}. Det er ikke nok til at betale en ny skærm hjem, men det er et godt argument for at vælge en effektiv model, når du alligevel skal købe.</p>

<h2>Strømforbrug om året ved forskellig brug</h2>
<p>Skærmens årsforbrug afhænger mere af antallet af timer end af modellen. Hjemmekontoret med to skærme otte timer om dagen bruger helt anderledes end en skærm, der kun tændes til lidt netbank om aftenen.</p>
<table>
<thead><tr><th>Brug (27" skærm, 16 W)</th><th>Timer om året</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>1 time om dagen</td><td>365</td><td>6 kWh</td><td>{{kr 6}}</td></tr>
<tr><td>6 timer om dagen</td><td>2.190</td><td>35 kWh</td><td>{{kr 35}}</td></tr>
<tr><td>Hjemmekontor, 8 timer på 250 dage</td><td>2.000</td><td>32 kWh</td><td>{{kr 32}}</td></tr>
<tr><td>To skærme, 8 timer på 250 dage</td><td>2.000</td><td>64 kWh</td><td>{{kr 64}}</td></tr>
<tr><td>Tændt døgnet rundt</td><td>8.760</td><td>140 kWh</td><td>{{kr 140}}</td></tr>
</tbody>
</table>
<p>Den sidste række er ikke så usædvanlig, som den lyder: en skærm, hvor strømsparetilstanden er slået fra, eller som sidder på en computer, der aldrig går i dvale, bliver ved med at lyse om natten. Her er det indstillingerne, der koster, ikke skærmen.</p>

<h2>Standby og slukket: de 0,3 watt</h2>
<p>De skærme, vi har slået op i EPREL, er registreret med 0,3-0,5 W på standby og i slukket tilstand. Over et helt år giver 0,3 W under 3 kWh, svarende til under {{kr 3}}. En skærm i standby er derfor ikke et problem i sig selv — det er en skærm, der ikke når at gå i standby.</p>
<p>Skærmen går i standby, når den ikke længere får et signal fra computeren. Står din computer og kører uden at gå i dvale, eller har du en pauseskærm med animation, får skærmen fortsat signal og bliver tændt med fuld effekt. Den mest effektive indstilling er at lade computeren slukke skærmen efter 5-10 minutter uden aktivitet. Læs mere om de små døgnforbrug i guiden om <a href="/standby/">standby</a>.</p>

<h2>Hvad bestemmer, hvor meget skærmen bruger?</h2>
<ul>
<li><strong>Størrelse</strong> — en 27" skærm har cirka 30 % mere areal end en 24", og baggrundslyset skal lyse det hele op.</li>
<li><strong>Lysstyrke</strong> — den største enkeltfaktor, du selv styrer. Fabriksindstillingen er ofte lysere, end et almindeligt kontor kræver.</li>
<li><strong>Opløsning og billedfrekvens</strong> — 4K, 144 Hz og derover kræver mere af både panel og elektronik.</li>
<li><strong>HDR</strong> — HDR-tilstand presser lysstyrken op i dele af billedet og øger forbruget, mens den er slået til.</li>
<li><strong>Indbyggede funktioner</strong> — USB-C med strømforsyning til en bærbar, højttalere og USB-hub trækker strøm gennem skærmen, så tallet på stikmåleren kan være højere end mærket.</li>
</ul>
<p>Det sidste punkt er værd at kende: en skærm, der lader din <a href="/laptop/">bærbare computer</a> gennem USB-C-kablet, viser hele opladningen som sit eget forbrug. Det er ikke skærmen, der er blevet dyrere, men bærbarens strøm, der er flyttet over i den.</p>

<h2>Gamingskærme og ultrawide</h2>
<p>En gamingskærm med 144, 165 eller 240 Hz opdaterer billedet langt oftere end en kontorskærm på 60 Hz, og mange har en lysere baggrundsbelysning til HDR. Begge dele koster watt. Energimærket måles ved skærmens standardindstilling, så en skærm, der står i klasse E fra fabrikken, kan bruge mere, når du slår den højeste billedfrekvens og HDR til. En ultrawide på 34" har samtidig et større areal end en 27", og arealet er det, baggrundslyset skal dække. Vil du kende dit eget tal, så sæt en stikmåler på skærmen alene en aften med spil og en dag med kontorarbejde, og sammenlign. Forskellen er sjældent stor i kroner, men den viser tydeligt, hvilke indstillinger der betyder noget.</p>

<h2>Skærm, tv eller tablet?</h2>
<p>En computerskærm og et <a href="/tv/">tv</a> bruger samme teknik, men tv'et er større og bliver typisk brugt ved højere lysstyrke, så det trækker flere watt. En tablet bruger endnu mindre, fordi den har en lille skærm og en strømforsyning, der er bygget til at spare på batteriet — se siden om <a href="/ipad/">iPad og tablets</a>. Vil du se film i sengen, er tabletten derfor den mest sparsomme af de tre, mens en 27" skærm ved skrivebordet ligger et sted mellem tabletten og tv'et.</p>

<h2>Sådan sparer du strøm på skærmen</h2>
<ol>
<li><strong>Skru ned for lysstyrken</strong> — sæt den efter rummet. Mange skærme har en eco- eller automatisk lysstyrketilstand.</li>
<li><strong>Lad computeren slukke skærmen</strong> — 5-10 minutter uden aktivitet er nok, og skærmen vågner på et øjeblik.</li>
<li><strong>Undgå pauseskærme</strong> — de holder skærmen tændt med fuld effekt uden grund.</li>
<li><strong>Brug HDR, når du har brug for det</strong> — slå det fra til kontorarbejde.</li>
<li><strong>Sluk på stikdåsen om natten</strong>, hvis skærm, computer og højttalere sidder på samme kontakt — så forsvinder også de små standby-forbrug.</li>
<li><strong>Tjek energiklassen ved køb</strong> — to skærme i samme størrelse kan ligge flere klasser fra hinanden.</li>
</ol>
<p>Skærmens forbrug kan ikke flyttes til billige timer — den bruger strøm, når du arbejder. Men da en time med en 27" skærm koster omkring {{oere 0,016}}, er det ikke her, elregningen bliver stor. Kig hellere på computeren og på de apparater, der varmer.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger en computerskærm?", answer: "En 24-27\" skærm bruger typisk 12-25 watt i drift, ifølge registreringerne i EU's produktdatabase. En time koster {{oere 0,012}}-{{oere 0,025}} ved {{pris_kwh}}." },
    { question: "Hvad koster det at have en skærm tændt hele året?", answer: "Seks timer om dagen med en 27\" skærm på 16 W giver cirka 35 kWh om året, svarende til {{kr 35}}. Er skærmen tændt døgnet rundt, bliver det cirka 140 kWh eller {{kr 140}}." },
    { question: "Hvor meget bruger en skærm på standby?", answer: "De modeller, vi har slået op i EU's produktdatabase, bruger 0,3-0,5 W. Det er under 4,5 kWh om året, svarende til under {{kr 4,5}}." },
    { question: "Bruger en 4K-skærm mere strøm end en full HD-skærm?", answer: "Ja, typisk. En 27\" 4K-skærm er registreret med 25,4 W mod 15,8 W for en 27\" full HD-skærm fra samme producent. Ved 2.000 timer om året er forskellen cirka 19 kWh, svarende til {{kr 19}}." },
    { question: "Hvilken energiklasse har de fleste computerskærme?", answer: "De fleste almindelige skærme ligger i C til F på EU's skala A-G. A og B er sjældne, fordi skalaen blev lagt stramt, da den kom i 2021." },
    { question: "Skal jeg slukke skærmen, når jeg holder pause?", answer: "Lad computeren slukke skærmen efter 5-10 minutter uden aktivitet. Skærmen går så i standby og bruger under en halv watt i stedet for 15-25 watt." },
  ],
  relatedSlugs: ["computer", "laptop", "ipad", "xbox", "lysstofroer"],
  sources: [
    { name: "EPREL — produktinformationsblad, Dell P2725H", url: "https://eprel.ec.europa.eu/fiches/electronicdisplays/Fiche_1862987_EN.pdf" },
    { name: "EPREL — produktinformationsblad, Dell P2425H", url: "https://eprel.ec.europa.eu/fiches/electronicdisplays/Fiche_1865623_EN.pdf" },
    { name: "EPREL — produktinformationsblad, Dell U2724D", url: "https://eprel.ec.europa.eu/fiches/electronicdisplays/Fiche_1591641_EN.pdf" },
    { name: "Forordning (EU) 2019/2013, bilag II — energiklasser for elektroniske skærme", url: "https://www.legislation.gov.uk/eur/2019/2013/annex/II" },
  ],
  calculatorConfig: {
    title: "Beregn skærmens strømforbrug",
    options: [
      { label: "24\" full HD (ca. 12 W)", kwhPerUse: 0.012 },
      { label: "27\" full HD (ca. 16 W)", kwhPerUse: 0.016 },
      { label: "27\" QHD/4K (ca. 25 W)", kwhPerUse: 0.025 },
      { label: "To 27\" skærme (ca. 32 W)", kwhPerUse: 0.032 },
    ],
    usageLabel: "Timer tændt pr. dag",
    usageUnit: "timer/dag",
    usageMin: 0.5,
    usageMax: 24,
    usageDefault: 5,
    usageStep: 0.5,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default skaerm;
