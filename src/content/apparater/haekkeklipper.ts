import type { ApplianceData } from "@/lib/types";

/**
 * Hækkeklipper — med ledning eller batteri. Intet EU-energimærke.
 * Tal: Bosch EasyHedgeCut 45 (420 W, 45 cm), Bosch AdvancedHedgeCut 65 (500 W), Gardena ComfortCut 60/18V
 * (18 V 2,5 Ah: op til 56 min og 188 m² hæk pr. opladning), Bosch EasyHedgeCut 18-45 (18 V 2 Ah: 160 m² pr. opladning,
 * ladetid 2 t). Batteriets Wh = V × Ah; opladningstab ca. 15 % og timer pr. år er vores skøn.
 */
const haekkeklipper: ApplianceData = {
  slug: "haekkeklipper",
  meta: {
    category: "have",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: true,
    motif: "robotklipper",
    synonyms: ["hækkeklipper", "haekkeklipper", "elektrisk hækkeklipper", "hækkeklipper med ledning", "batteri hækkeklipper", "akku hækkeklipper", "hækkesaks el", "stanghækkeklipper"],
  },
  name: "Hækkeklipper",
  article: "en",
  title: "Hækkeklipper strømforbrug (2026) → watt og kWh pr. hæk",
  description:
    "Se hvor meget strøm en hækkeklipper bruger i timen og pr. opladning: ledningsmodeller på 420-500 W mod batterimodeller på 18 V, og hvad en sæson koster.",
  heading: "Strømforbrug for en hækkeklipper: watt, pris i timen og billigste tidspunkt",
  quickAnswer:
    "En hækkeklipper med ledning på 420-500 W bruger højst en halv kWh i timen, svarende til {{kr 0,5}} ved {{pris_kwh}}. Klipper du hækken seks timer om året, bliver det omkring 2,5 kWh, eller {{kr 2,5}}. En batterimodel på 18 V bruger endnu mindre: en fuld opladning på omkring 0,05 kWh rækker til knap en times klipning.",
  kwhRange: [0.2, 20],
  typicalKwh: 2.5,
  wattage: 420,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0.2, 0.6, 1.8, 2.6, 1.6, 2.4, 1.8, 0.8, 0.2, 0],
  content: `<h2>Et af havens mindste strømforbrug</h2>
<p>En hækkeklipper er et lille redskab med en lille motor. Knivene bevæger sig frem og tilbage og skal kun skære tynde grene, så effekten er beskeden sammenlignet med en plæneklipper eller en løvblæser. Bosch oplyser for eksempel 420 W for EasyHedgeCut 45 med en knivlængde på 45 cm og 500 W for AdvancedHedgeCut 65. En time med den mindste bruger altså højst 0,42 kWh.</p>
<p>Batterimodellerne bruger endnu mindre. Gardena oplyser, at ComfortCut 60/18V med et 18 V-batteri på 2,5 Ah kan køre op til 56 minutter på en opladning. Batteriet rummer 45 Wh, og med et tab på omkring 15 procent i opladeren, som er vores skøn, bruger en fuld opladning cirka 0,05 kWh fra stikkontakten. Det er nogenlunde det samme som at lade en bærbar computer.</p>

<h2>Watt og pris i timen</h2>
<table>
<thead><tr><th>Hækkeklipper</th><th>kWh i timen</th><th>Pris i timen</th><th>6 timer om året</th></tr></thead>
<tbody>
<tr><td>Batteri 18 V, 2-2,5 Ah</td><td>0,06</td><td>{{kr 0,06}}</td><td>{{kr 0,36}}</td></tr>
<tr><td>Ledning 420 W (Bosch EasyHedgeCut 45)</td><td>0,42</td><td>{{kr 0,42}}</td><td>{{kr 2,5}}</td></tr>
<tr><td>Ledning 500 W (Bosch AdvancedHedgeCut 65)</td><td>0,5</td><td>{{kr 0,5}}</td><td>{{kr 3}}</td></tr>
</tbody>
</table>
<p>Ledningsmodellernes tal forudsætter fuld effekt hele tiden og er derfor en øvre grænse. I praksis holder du pauser, flytter stigen og samler afklip op, så motoren kører kun en del af den tid, du står i haven. Batteritallet er vores omregning af batteriets kapacitet og Gardenas oplyste køretid.</p>

<h2>Hvor meget hæk klarer en opladning?</h2>
<p>For batterimodellerne oplyser producenterne ofte, hvor mange kvadratmeter hæk en opladning rækker til. Gardena skriver, at ComfortCut 60/18V klarer op til 188 m² hæk pr. opladning med det medfølgende 2,5 Ah-batteri. Bosch oplyser 160 m² pr. opladning for EasyHedgeCut 18-45 med et 2 Ah-batteri, og at en opladning tager 2 timer.</p>
<p>Kvadratmeterne er hækkens sideflader og top lagt sammen. En hæk på 20 meter, der er 1,8 meter høj og 0,6 meter bred, har omkring 84 m², når begge sider og toppen klippes. Den klarer et batteri på 2-2,5 Ah altså på én opladning, og strømmen til hele klipningen koster under {{kr 0,1}}. Har du en lang hæk eller tykke grene, skal du regne med, at et batteri ikke rækker hele vejen.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Grenenes tykkelse</strong> — en hæk, der kun klippes én gang om året, har tykkere skud, og motoren skal arbejde hårdere. To klipninger om året giver tyndere grene og lettere arbejde.</li>
<li><strong>Knivlængden</strong> — en lang kniv klarer mere pr. strøg, men vejer mere. Til en lav hæk er en kort kniv både lettere og mere sparsom.</li>
<li><strong>Skarpe knive</strong> — sløve knive kniber grenene over og belaster motoren. Rens og smør knivene efter brug.</li>
<li><strong>Batteriets alder</strong> — et ældre batteri rummer mindre, så du skal lade oftere for samme hæk.</li>
<li><strong>Kulde</strong> — et koldt batteri leverer mindre. Klipper du sent på efteråret, så hold batteriet indendørs, til du skal bruge det.</li>
</ul>

<h2>Hvornår skal du lade batteriet?</h2>
<p>Ledningsmodellen bruger strøm, mens du klipper, og det sker i dagtimerne. Batteriet kan du derimod lade, når det passer: aftenen før, i en billig time om natten eller midt på dagen, når solcellerne på taget leverer strøm. Oversigten over dagens timepriser længere oppe på siden viser, hvornår strømmen er billigst. Forskellen mellem en dyr og en billig time er dog kun nogle få øre pr. opladning, fordi opladningen bruger så lidt.</p>
<p>Det vigtigste for økonomien er batteriet selv. Det koster mange gange mere at udskifte end al den strøm, det bruger i sin levetid. Opbevar det tørt og frostfrit, helst halvt opladet over vinteren, og lad det ikke ligge i en varm bil eller i solen.</p>

<h2>Ledning eller batteri?</h2>
<p>Strømmen er ikke det, der afgør valget. Begge typer bruger så lidt, at forskellen over en sæson er få kroner. Ledningsmodellen er lettere, fordi den ikke har et batteri, og den kører, så længe du vil. Til gengæld skal du holde styr på ledningen, så du ikke klipper i den, og du skal bruge en forlængerledning til udendørs brug. Batterimodellen er friere at bevæge sig med, især på en stige, og passer ofte til samme batteri som <a href="/elplaeneklipper/">elplæneklipperen</a> og <a href="/loevblaeser/">løvblæseren</a>.</p>
<p>Brug altid en fejlstrømsafbryder (HPFI eller RCD) ved udendørs stikkontakter. Den sidder i de fleste nyere eltavler, men har du et ældre hus, kan en elinstallatør tjekke det.</p>

<h2>Hækkeklipperen i havens samlede forbrug</h2>
<p>Lagt sammen med de andre redskaber er hækkeklipperen en lille post. En <a href="/robotplaeneklipper/">robotplæneklipper</a> eller en elplæneklipper bruger typisk mere i løbet af en sæson, fordi den kører hver uge, og en <a href="/hoejtryksrenser/">højtryksrenser</a> bruger mere på en enkelt eftermiddag end hækkeklipperen på et helt år. Det samme gælder en <a href="/kaedesav/">kædesav</a> med ledning, der har omkring fire gange hækkeklipperens effekt. Vil du nedbringe havens strømforbrug, er der mere at hente andre steder — for eksempel ved en pool, en <a href="/terrassevarmer/">terrassevarmer</a> eller en pumpe, der kører hele sommeren.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Klip hækken to gange om året, så grenene er tynde.</li>
<li>Hold knivene skarpe, rene og smurte.</li>
<li>Vælg en knivlængde, der passer til hækken.</li>
<li>Lad batteriet, når strømmen er billig, og opbevar det frostfrit.</li>
<li>Sluk for motoren, når du flytter stigen eller samler afklip.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad din hækkeklipper bruger over et år.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en hækkeklipper?",
      answer:
        "Ledningsmodeller ligger typisk omkring 420-500 W. Bosch oplyser 420 W for EasyHedgeCut 45 og 500 W for AdvancedHedgeCut 65. En time ved fuld effekt bruger altså 0,42-0,5 kWh.",
    },
    {
      question: "Hvad koster det at lade en batterihækkeklipper?",
      answer:
        "Et 18 V-batteri på 2,5 Ah rummer 45 Wh og bruger omkring 0,05 kWh fra stikkontakten. En fuld opladning koster cirka {{kr 0,05}} ved {{pris_kwh}}.",
    },
    {
      question: "Hvor lang tid holder batteriet i en hækkeklipper?",
      answer:
        "Gardena oplyser op til 56 minutter og 188 m² hæk for ComfortCut 60/18V med et 2,5 Ah-batteri. Bosch oplyser 160 m² pr. opladning for EasyHedgeCut 18-45 med 2 Ah.",
    },
    {
      question: "Hvad koster en hækkeklipper i strøm om året?",
      answer:
        "Med seks timer om året bruger en ledningsmodel på 420 W omkring 2,5 kWh, svarende til {{kr 2,5}}. En batterimodel bruger under en halv kWh på samme tid.",
    },
    {
      question: "Hvornår skal jeg lade batteriet til hækkeklipperen?",
      answer:
        "Når strømmen er billig, typisk om natten. Forskellen er dog kun få øre pr. opladning, så det er vigtigere at opbevare batteriet tørt og frostfrit.",
    },
  ],
  relatedSlugs: ["elplaeneklipper", "loevblaeser", "robotplaeneklipper", "kaedesav", "hoejtryksrenser"],
  sources: [
    { name: "Bosch — EasyHedgeCut 45 (420 W)", url: "https://www.bosch-diy.com/dk/da/p/easyhedgecut-45-0600847a05" },
    { name: "Bosch — AdvancedHedgeCut 65 (500 W)", url: "https://www.bosch-diy.com/dk/da/p/advancedhedgecut-65-06008c0801" },
    { name: "Bosch — EasyHedgeCut 18-45 (m² pr. opladning, ladetid)", url: "https://www.bosch-diy.com/gb/en/p/easyhedgecut-18-45-0600849h71" },
    { name: "Gardena — ComfortCut 60/18V P4A Ready-To-Use Set", url: "https://www.gardena.com/au/products/tree-shrub-care/hedge-trimmers/battery-hedge-trimmer-comfortcut-60-18v-p4a-ready-to-use-set/970588601" },
  ],
  calculatorConfig: {
    title: "Beregn hækkeklipperens strømforbrug",
    options: [
      { label: "Batteri 18 V, 2-2,5 Ah (ca. 0,06 kWh/time)", kwhPerUse: 0.06 },
      { label: "Ledning 420 W", kwhPerUse: 0.42 },
      { label: "Ledning 500 W", kwhPerUse: 0.5 },
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
  publishDate: "2026-12-14",
  updated: "2026-11-22",
};

export default haekkeklipper;
