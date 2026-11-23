import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const asusVivobook: ModelData = {
  slug: "asus-vivobook",
  parent: "laptop",
  brand: "ASUS",
  name: "ASUS Vivobook 14 og 16",
  released: "2026-01",
  synonyms: [
    "asus vivobook strømforbrug",
    "vivobook 16 strømforbrug",
    "vivobook 14 watt",
    "asus vivobook 16 m1607 forbrug",
    "vivobook 14 x1407 strømforbrug",
    "vivobook snapdragon strømforbrug",
    "asus vivobook batteri wh",
  ],
  title: "ASUS Vivobook strømforbrug (2026) → Vivobook 14 og 16 i watt",
  description:
    "ASUS Vivobook 14 og 16 med Intel, AMD og Snapdragon: watt i tomgang og dvale fra ASUS' ENERGY STAR-målinger, kWh om året og prisen for en fuld opladning.",
  intro:
    "Vivobook 14 med Intel Core Ultra 7 fra 2026 bruger mindst af Vivobook-udgaverne her, 3,2 W i tomgang. Den tilsvarende AMD-udgave fra 2025 bruger 6,1 W, næsten dobbelt så meget.",
  content: `<h2>Hvor mange watt bruger ASUS Vivobook?</h2>
<p>Vivobook 14 og Vivobook 16 er ASUS' almindelige hverdagsbærbare til hjem og studie, et trin under Zenbook. Begge findes med processorer fra Intel (X1407 og X1607), AMD (M1407 og M1607) og Qualcomm Snapdragon (X1407Q og X1607Q), og de certificerede udgaver har et batteri på 70–75 Wh. 2026-udgaverne med Intel har ifølge ASUS en IPS-skærm i 1920 × 1200. Bærbare har ikke et EU-energimærke, men ASUS får dem certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>Vivobook 14 X1407 (2026)</td><td>Intel Core Ultra 7</td><td>3,2 W</td><td>0,6 W</td><td>70 Wh</td><td>10,9</td></tr>
<tr><td>Vivobook 16 X1607 (2026)</td><td>Intel Core Ultra 7</td><td>3,5 W</td><td>0,7 W</td><td>70 Wh</td><td>12,3</td></tr>
<tr><td>Vivobook 14 M1407 (nov. 2025)</td><td>AMD Ryzen AI 7</td><td>4,0 W</td><td>0,5 W</td><td>70 Wh</td><td>12,0</td></tr>
<tr><td>Vivobook 16 M1607 (nov. 2025)</td><td>AMD Ryzen AI 7</td><td>4,0 W</td><td>0,5 W</td><td>70 Wh</td><td>12,0</td></tr>
<tr><td>Vivobook 14 X1407Q (2025)</td><td>Snapdragon X Plus</td><td>3,9 W</td><td>0,6 W</td><td>70 Wh</td><td>12,5</td></tr>
<tr><td>Vivobook 16 X1607Q (2025)</td><td>Snapdragon X Plus</td><td>3,7 W</td><td>0,5 W</td><td>75 Wh</td><td>11,4</td></tr>
<tr><td>Vivobook 14 M1407 (jan. 2025)</td><td>AMD Ryzen AI 7</td><td>6,1 W</td><td>0,8 W</td><td>70 Wh</td><td>18,6</td></tr>
<tr><td>Vivobook 16 M1607 (jan. 2025)</td><td>AMD Ryzen AI 7</td><td>5,0 W</td><td>0,7 W</td><td>70 Wh</td><td>15,5</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Nyere AMD-udgaver bruger mindre</h2>
<p>AMD-udgaverne af Vivobook findes i to generationer med samme navn. ENERGY STAR skelner dem ved det sidste bogstav i koden: M1407K og M1607K fra januar 2025 og M1407G og M1607G fra november 2025. Den nye generation bruger 4,0 W i tomgang i begge størrelser. Den gamle brugte 6,1 W som 14" og 5,0 W som 16". For Vivobook 14 er det en forskel på godt 6 kWh om året med vores profil, svarende til {{kr 6,6}}.</p>
<p>Står du og vælger mellem to Vivobooks med AMD, er det derfor værd at kigge efter processoren og den fulde modelkode i specifikationerne. I ENERGY STAR er den nye generation registreret med et G efter tallene og den gamle med et K.</p>

<h2>Skærmstørrelsen betyder mindre end man tror</h2>
<p>En 16"-skærm skal lyse et større areal op, og på mange bærbare er det den største forskel mellem 14" og 16". På Vivobook er forskellen lille: Intel-udgaven bruger 3,2 W som 14" og 3,5 W som 16", og Snapdragon-udgaven bruger endda mindre som 16" (3,7 W) end som 14" (3,9 W). Det skyldes, at ENERGY STAR måler hver model i den konfiguration, producenten har certificeret, med en bestemt skærm og lysstyrke, og at panelerne ikke er ens.</p>
<p>Over et år ligger alle de nye Vivobooks på 10,9–12,5 kWh med seks timers brug om dagen — {{kr 10,9}} til {{kr 12,5}}. En fuld opladning af et batteri på 70 Wh trækker omkring 0,08 kWh fra stikkontakten med et typisk ladetab på 12 % og koster {{oere 0,080}} ved {{pris_kwh}}.</p>

<h2>Vivobook mod Zenbook og IdeaPad</h2>
<p>Den dyrere <a href="/laptop/asus-zenbook-14/">ASUS Zenbook 14</a> har OLED-skærm og bruger 4,1–5,2 W i tomgang, altså lidt mere end de nye Vivobooks med IPS-skærm. Lenovos tilsvarende <a href="/laptop/lenovo-ideapad-slim-3/">IdeaPad Slim 3</a> bruger 2,8–4,6 W i 2026-udgaverne. Forskellene mellem 3 og 4 W er små i kroner: omkring 2 kWh om året. Det er processorgenerationen og dvalen, der giver de store udsving.</p>
<p>ASUS' tal er målt til ENERGY STAR ved 115 V, ligesom Lenovos og HP's, så de kan sammenlignes indbyrdes. Tungt arbejde som spil og videoredigering trækker langt mere end tomgang, op til opladerens 65–68 W.</p>

<h2>Gode råd til en Vivobook</h2>
<ul>
<li>Vælg den nyeste processorgeneration, hvis du står mellem to ellers ens maskiner; det er her, de største forskelle i forbrug ligger.</li>
<li>Slå batteribeskyttelse til i MyASUS, så batteriet ikke står på 100 % hele tiden, når maskinen bruges ved skrivebordet.</li>
<li>Skru ned for lysstyrken, og lad skærmen slukke efter få minutters inaktivitet.</li>
<li>Bruger du en ekstern skærm, så husk, at den bruger mere end selve maskinen — en 27"-skærm ofte 20 W eller mere.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger ASUS Vivobook 16?",
      answer:
        "Vivobook 16 fra 2026 med Intel bruger 3,5 W i tomgang og 0,7 W i dvale efter ASUS' ENERGY STAR-målinger. AMD-udgaven M1607 fra november 2025 bruger 4,0 W og 0,5 W.",
    },
    {
      question: "Hvor mange watt bruger ASUS Vivobook 14?",
      answer:
        "3,2 W i tomgang med Intel Core Ultra 7 (X1407, 2026), 4,0 W med AMD (M1407, november 2025) og 3,9 W med Snapdragon (X1407Q). Dvale ligger på 0,5–0,8 W.",
    },
    {
      question: "Hvad koster det at bruge en Vivobook om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger de nye Vivobooks 10,9–12,5 kWh om året, svarende til {{kr 10,9}} til {{kr 12,5}}.",
    },
    {
      question: "Hvad koster det at oplade en Vivobook?",
      answer:
        "En fuld opladning af et batteri på 70 Wh trækker omkring 0,08 kWh fra stikket med et typisk ladetab og koster {{oere 0,080}} ved månedens elpris.",
    },
    {
      question: "Bruger Vivobook med Snapdragon mindre strøm?",
      answer:
        "Ikke i tomgang. Vivobook 14 med Snapdragon X Plus bruger 3,9 W, mens 2026-udgaven med Intel Core Ultra 7 bruger 3,2 W i samme måling.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — ASUS X1407A (Vivobook 14, Intel, 2026)", url: es("4518045") },
    { name: "ENERGY STAR — ASUS X1607A (Vivobook 16, Intel, 2026)", url: es("4517997") },
    { name: "ENERGY STAR — ASUS M1407G (Vivobook 14, AMD)", url: es("4514035") },
    { name: "ENERGY STAR — ASUS M1607G (Vivobook 16, AMD)", url: es("4514033") },
    { name: "ENERGY STAR — ASUS X1407Q (Vivobook 14, Snapdragon)", url: es("4470621") },
    { name: "ENERGY STAR — ASUS X1607Q (Vivobook 16, Snapdragon)", url: es("4471331") },
    { name: "ENERGY STAR — ASUS M1407K (Vivobook 14, AMD, 2025)", url: es("4437455") },
    { name: "ENERGY STAR — ASUS M1607K (Vivobook 16, AMD, 2025)", url: es("4437513") },
    { name: "ASUS — Vivobook 14 (X1407), tekniske specifikationer", url: "https://www.asus.com/laptops/for-home/vivobook/asus-vivobook-14-x1407/techspec/" },
  ],
  variants: [
    { name: "14\" X1407 Intel Core Ultra 7 (2026)", watts: { off: 0.2, sleep: 0.6, idle: 3.2 }, adapterW: 68, batteryWh: 70, source: 0 },
    { name: "16\" X1607 Intel Core Ultra 7 (2026)", watts: { off: 0.3, sleep: 0.7, idle: 3.5 }, adapterW: 68, batteryWh: 70, source: 1 },
    { name: "14\" M1407G AMD Ryzen AI 7 (2025)", watts: { off: 0.2, sleep: 0.5, idle: 4.0 }, adapterW: 68, batteryWh: 70, source: 2 },
    { name: "16\" M1607G AMD Ryzen AI 7 (2025)", watts: { off: 0.2, sleep: 0.5, idle: 4.0 }, adapterW: 68, batteryWh: 70, source: 3 },
    { name: "14\" X1407Q Snapdragon X Plus", watts: { off: 0.3, sleep: 0.6, idle: 3.9 }, adapterW: 65, batteryWh: 70, source: 4 },
    { name: "16\" X1607Q Snapdragon X Plus", watts: { off: 0.3, sleep: 0.5, idle: 3.7 }, adapterW: 65, batteryWh: 75, source: 5 },
    { name: "14\" M1407K AMD Ryzen AI 7 (jan. 2025)", watts: { off: 0.3, sleep: 0.8, idle: 6.1 }, adapterW: 65, batteryWh: 70, source: 6 },
    { name: "16\" M1607K AMD Ryzen AI 7 (jan. 2025)", watts: { off: 0.3, sleep: 0.7, idle: 5.0 }, adapterW: 65, batteryWh: 70, source: 7 },
  ],
  publishDate: "2026-12-24",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (ASUS' egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Watt-tallene er ASUS' egne målinger til ENERGY STAR — kort tomgang med skærmen tændt, dvale og slukket — ved 115 V på den konfiguration, ASUS har certificeret under maskinens regulatoriske kode. Ved 230 V kan tallene afvige lidt. Batteri og oplader er fra samme certificering; prisen pr. opladning er regnet med et typisk ladetab, ikke ASUS' tal. Kilderne står nederst på siden.",
};

export default asusVivobook;
