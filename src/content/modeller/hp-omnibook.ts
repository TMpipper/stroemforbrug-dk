import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const hpOmnibook: ModelData = {
  slug: "hp-omnibook",
  parent: "laptop",
  brand: "HP",
  name: "HP OmniBook 5 og 3",
  released: "2026-09",
  synonyms: [
    "hp omnibook strømforbrug",
    "hp omnibook 5 watt",
    "hp omnibook 3 strømforbrug",
    "hp omnibook 5 14 forbrug",
    "hp omnibook 16 strømforbrug",
    "hp bærbar strømforbrug",
    "hp omnibook batteri wh",
  ],
  title: "HP OmniBook strømforbrug (2026) → watt for OmniBook 5 og 3",
  description:
    "HP OmniBook 5 og OmniBook 3 i 14 og 16 tommer: watt i tomgang og dvale fra HPs ENERGY STAR-målinger, kWh om året og prisen for en fuld opladning.",
  intro:
    "Den nyeste OmniBook 5 14\" med Intel Core 7 bruger mindst af HP-udgaverne her, 3,2 W i tomgang. De store 16\"-udgaver bruger 6,4–7,5 W, cirka dobbelt så meget.",
  content: `<h2>Hvor mange watt bruger HP OmniBook?</h2>
<p>OmniBook er HPs serie af almindelige bærbare til hjem og arbejde. OmniBook 3 er den billige linje, OmniBook 5 ligger et trin over. Begge findes med 14" og 16" skærm og med processorer fra Intel, AMD og Qualcomm. Bærbare har ikke et EU-energimærke, men HP får de fleste udgaver certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<p>De ni certificerede udgaver her bruger 3,2–7,5 W i tomgang og 0,4–1,2 W i dvale. Med seks timer tændt om dagen og dvale resten af døgnet bruger den nyeste OmniBook 5 14" (14-mh) omkring 10 kWh om året, svarende til {{kr 10}}. Den mest strømkrævende, OmniBook 5 16" med AMD Ryzen AI 9 (16-bp), bruger omkring 19 kWh, svarende til {{kr 19}}.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>ENERGY STAR (TEC)</th></tr></thead>
<tbody>
<tr><td>OmniBook 5 14" (14-mh, 2026)</td><td>Intel Core 7 350</td><td>3,2 W</td><td>0,5 W</td><td>9,2 kWh</td></tr>
<tr><td>OmniBook 5 14" (14-hh)</td><td>Intel Core Ultra 9 386H</td><td>3,8 W</td><td>0,5 W</td><td>10,2 kWh</td></tr>
<tr><td>OmniBook 5 14" (14-hm)</td><td>AMD Ryzen 7 250</td><td>6,4 W</td><td>0,4 W</td><td>14,1 kWh</td></tr>
<tr><td>OmniBook 5 14" (14-he, 2025)</td><td>Snapdragon X Elite</td><td>5,2 W</td><td>0,5 W</td><td>12,3 kWh</td></tr>
<tr><td>OmniBook 5 16" (16-bm)</td><td>Intel Core Ultra 9 386H</td><td>6,4 W</td><td>0,6 W</td><td>15,0 kWh</td></tr>
<tr><td>OmniBook 5 16" (16-bp)</td><td>AMD Ryzen AI 9 465</td><td>7,5 W</td><td>0,4 W</td><td>15,9 kWh</td></tr>
<tr><td>OmniBook 3 14" (14-hz)</td><td>Snapdragon X</td><td>3,5 W</td><td>0,6 W</td><td>10,3 kWh</td></tr>
<tr><td>OmniBook 3 14" (14-hv)</td><td>AMD Ryzen 7</td><td>4,5 W</td><td>0,6 W</td><td>11,8 kWh</td></tr>
<tr><td>OmniBook 3 16" (16-ct, 2026)</td><td>Snapdragon X</td><td>3,8 W</td><td>1,2 W</td><td>14,3 kWh</td></tr>
</tbody>
</table>
<p>TEC er ENERGY STAR's eget årstal med en fast fordeling af tomgang, dvale og slukket. Det ligger lidt under vores tal, fordi vores profil har flere timer tændt.</p>

<h2>Skærmen og processoren betyder mest</h2>
<p>To ting skiller udgaverne ad. Den første er skærmen. OmniBook 5 med den samme Intel Core Ultra 9 386H bruger 3,8 W som 14" og 6,4 W som 16", fordi den større skærm skal have mere lys. Den anden er processoren. Som 14" bruger AMD-udgaven 14-hm 6,4 W mod 3,8 W for Intel-udgaven 14-hh med samme skærmopløsning. Over et år er det omkring 5 kWh, svarende til {{kr 5}}.</p>
<p>Husk, at ENERGY STAR måler én bestemt konfiguration af hver model med en bestemt skærm, mængde RAM og lagerplads. Køber du en udgave med en anden skærm, kan forbruget ligge lidt over eller under tallene her.</p>

<h2>Dvale kan fylde halvdelen af året</h2>
<p>De fleste OmniBook-udgaver bruger 0,4–0,6 W i dvale, men OmniBook 3 16" (16-ct) bruger 1,2 W. Med 18 timer i dvale om dagen bliver det omkring 8 kWh om året, næsten halvdelen af maskinens samlede forbrug med vores profil. I tomgang er den ellers sparsom med 3,8 W. Bruger du den lidt og lader den stå med låget lukket det meste af tiden, kan det betale sig at lukke den helt ned i stedet for at lade den gå i dvale.</p>

<h2>Opladning og batteri</h2>
<p>Ifølge certificeringen har OmniBook-udgaverne batterier på 59–73 Wh og en 65 W-oplader. En fuld opladning af et 60 Wh-batteri bruger omkring 0,07 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,068}} ved månedens elpris på {{pris_kwh}}. Ladetabet er vores skøn, ikke HPs tal. Se også, hvad <a href="/mobil-opladning/">opladning af mobil og tablet</a> koster.</p>

<h2>OmniBook mod IdeaPad, MacBook og en ekstern skærm</h2>
<p>De sparsomme OmniBook-udgaver ligger tæt på konkurrenterne. <a href="/laptop/lenovo-ideapad-slim-3/">Lenovo IdeaPad Slim 3</a> med Snapdragon bruger 2,8–2,9 W, og <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 13" bruger 3,63 W i tomgang. Apple måler ved 230 V og HP ved de 115 V, som ENERGY STAR kræver, så sammenligningen er ikke helt præcis. Forskellen mellem 3 og 7 W er dog reel og svarer til omkring 9 kWh om året.</p>
<p>Sætter du en ekstern skærm til, flytter forbruget sig. En 27"-skærm som <a href="/skaerm/aoc-q27g4/">AOC Q27G4</a> bruger 21–26 W, flere gange så meget som selv den mest strømkrævende OmniBook i tomgang.</p>
<ul>
<li>Brug Windows' strømbesparende tilstand og skru lysstyrken ned; skærmen er den største forbruger i tomgang.</li>
<li>Tag opladeren ud af stikket, når maskinen er fuldt opladet.</li>
<li>Tungt arbejde som video og spil trækker meget mere end tomgang, op til opladerens 65 W.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger HP OmniBook 5?",
      answer:
        "3,2–7,5 W i tomgang med skærmen tændt og 0,4–0,6 W i dvale ifølge HPs ENERGY STAR-målinger. 14\"-udgaverne med Intel bruger mindst, 16\"-udgaverne mest.",
    },
    {
      question: "Hvad koster det at bruge en HP OmniBook om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger den nyeste OmniBook 5 14\" omkring 10 kWh om året, svarende til {{kr 10}}. De store 16\"-udgaver bruger 16–19 kWh.",
    },
    {
      question: "Bruger OmniBook 3 mindre strøm end OmniBook 5?",
      answer:
        "Ikke nødvendigvis. OmniBook 3 14\" med Snapdragon bruger 3,5 W i tomgang, men den nyeste OmniBook 5 14\" med Intel Core 7 bruger 3,2 W. Processor og skærm betyder mere end serien.",
    },
    {
      question: "Hvad koster det at oplade en HP OmniBook?",
      answer:
        "En fuld opladning af et 60 Wh-batteri koster {{oere 0,068}} ved månedens elpris på {{pris_kwh}}, regnet med et typisk ladetab.",
    },
    {
      question: "Er HPs tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige en smule, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — HP OmniBook 5 14 inch (14-mh)", url: es("4696274") },
    { name: "ENERGY STAR — HP OmniBook 5 14 inch (14-hh)", url: es("4520450") },
    { name: "ENERGY STAR — HP OmniBook 5 14 inch (14-hm)", url: es("4520449") },
    { name: "ENERGY STAR — HP OmniBook 5 14 inch (14-he)", url: es("4021617") },
    { name: "ENERGY STAR — HP OmniBook 5 16 inch (16-bm)", url: es("4520429") },
    { name: "ENERGY STAR — HP OmniBook 5 16 inch (16-bp)", url: es("4520430") },
    { name: "ENERGY STAR — HP OmniBook 3 14 inch (14-hz)", url: es("4520692") },
    { name: "ENERGY STAR — HP OmniBook 3 14 inch (14-hv)", url: es("4520111") },
    { name: "ENERGY STAR — HP OmniBook 3 16 inch (16-ct)", url: es("4688594") },
  ],
  variants: [
    { name: "OmniBook 5 14\" Intel Core 7 (14-mh)", watts: { off: 0.3, sleep: 0.5, idle: 3.2 }, adapterW: 65, batteryWh: 60, source: 0 },
    { name: "OmniBook 5 14\" Intel Core Ultra 9 (14-hh)", watts: { off: 0.4, sleep: 0.5, idle: 3.8 }, adapterW: 65, batteryWh: 59.2, source: 1 },
    { name: "OmniBook 5 14\" AMD Ryzen 7 (14-hm)", watts: { off: 0.3, sleep: 0.4, idle: 6.4 }, adapterW: 65, batteryWh: 59.2, source: 2 },
    { name: "OmniBook 5 14\" Snapdragon X Elite (14-he)", watts: { off: 0.3, sleep: 0.5, idle: 5.2 }, adapterW: 65, batteryWh: 73, source: 3 },
    { name: "OmniBook 5 16\" Intel Core Ultra 9 (16-bm)", watts: { off: 0.4, sleep: 0.6, idle: 6.4 }, adapterW: 65, batteryWh: 64.6, source: 4 },
    { name: "OmniBook 5 16\" AMD Ryzen AI 9 (16-bp)", watts: { off: 0.3, sleep: 0.4, idle: 7.5 }, adapterW: 65, batteryWh: 64.6, source: 5 },
    { name: "OmniBook 3 14\" Snapdragon X (14-hz)", watts: { off: 0.3, sleep: 0.6, idle: 3.5 }, adapterW: 65, batteryWh: 60, source: 6 },
    { name: "OmniBook 3 14\" AMD Ryzen 7 (14-hv)", watts: { off: 0.2, sleep: 0.6, idle: 4.5 }, adapterW: 65, batteryWh: 60, source: 7 },
    { name: "OmniBook 3 16\" Snapdragon X (16-ct)", watts: { off: 0.3, sleep: 1.2, idle: 3.8 }, batteryWh: 68, source: 8 },
  ],
  publishDate: "2026-12-17",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (HPs egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er HPs egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, HP har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse og opladeren er HPs oplysninger i samme certificering, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra HP. Kilderne står nederst på siden.",
};

export default hpOmnibook;
