import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const psref = (m: string) => `https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_Slim_3_${m}/IdeaPad_Slim_3_${m}_Spec.pdf`;

const lenovoIdeapadSlim3: ModelData = {
  slug: "lenovo-ideapad-slim-3",
  parent: "laptop",
  brand: "Lenovo",
  name: "Lenovo IdeaPad Slim 3",
  released: "2026-01",
  synonyms: [
    "lenovo ideapad slim 3 strømforbrug",
    "ideapad slim 3 watt",
    "lenovo ideapad slim 3 forbrug",
    "ideapad slim 3 snapdragon strømforbrug",
    "lenovo bærbar strømforbrug",
    "ideapad slim 3 15 tommer watt",
    "ideapad slim 3 batteri wh",
  ],
  title: "Lenovo IdeaPad Slim 3 strømforbrug (2026) → watt og kWh",
  description:
    "Lenovo IdeaPad Slim 3 med Snapdragon, Intel og AMD: watt i tomgang og dvale fra Lenovos ENERGY STAR-målinger, kWh om året og prisen for en opladning.",
  intro:
    "Snapdragon-udgaverne af 2026-modellen bruger mindst, 2,8–2,9 W i tomgang. 2025-modellerne med Intel og AMD brugte 5,5–7,2 W, op til dobbelt så meget.",
  content: `<h2>Hvor mange watt bruger Lenovo IdeaPad Slim 3?</h2>
<p>IdeaPad Slim 3 er Lenovos billige hverdagsbærbare. Den findes i mange udgaver med 14" eller 15" skærm og processorer fra Qualcomm, Intel og AMD. Der findes ikke et EU-energimærke for bærbare, men Lenovo har fået de fleste udgaver certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<p>2026-modellerne (generation 11) bruger 2,8–4,6 W i tomgang og 0,4–0,6 W i dvale ifølge målingerne. Mest sparsomme er Snapdragon-udgaverne 14Q7X11 og 15Q7X11 med 2,9 og 2,8 W. Med seks timer tændt om dagen og dvale resten af døgnet bruger de omkring 9–10 kWh om året, svarende til {{kr 9-10}}. 15"-udgaverne med Intel bruger 4,6 W og omkring 13–14 kWh om året.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>ENERGY STAR (TEC)</th></tr></thead>
<tbody>
<tr><td>14Q7X11 (2026)</td><td>Snapdragon C</td><td>2,9 W</td><td>0,5 W</td><td>8,2 kWh</td></tr>
<tr><td>15Q7X11 (2026)</td><td>Snapdragon C</td><td>2,8 W</td><td>0,4 W</td><td>7,8 kWh</td></tr>
<tr><td>14IWC11 (2026)</td><td>Intel Core Series 3</td><td>3,4 W</td><td>0,5 W</td><td>9,1 kWh</td></tr>
<tr><td>15IWC11 (2026)</td><td>Intel Core Series 3</td><td>4,6 W</td><td>0,5 W</td><td>11,2 kWh</td></tr>
<tr><td>14IPH11 (2026)</td><td>Intel Core Ultra Series 3</td><td>3,3 W</td><td>0,5 W</td><td>9,3 kWh</td></tr>
<tr><td>15IPH11 (2026)</td><td>Intel Core Ultra Series 3</td><td>4,6 W</td><td>0,6 W</td><td>11,7 kWh</td></tr>
<tr><td>15IRU10 (2025)</td><td>Intel</td><td>5,9 W</td><td>0,7 W</td><td>14,9 kWh</td></tr>
<tr><td>15ARP10 (2025)</td><td>AMD Ryzen</td><td>7,2 W</td><td>0,6 W</td><td>16,8 kWh</td></tr>
<tr><td>15AHP10 (2025)</td><td>AMD Ryzen</td><td>7,0 W</td><td>0,6 W</td><td>16,3 kWh</td></tr>
<tr><td>15Q8X10 (2025)</td><td>Snapdragon X</td><td>5,5 W</td><td>0,6 W</td><td>13,4 kWh</td></tr>
</tbody>
</table>
<p>TEC er ENERGY STAR's eget årstal, beregnet med en fast fordeling af tomgang, dvale og slukket. Det ligger i samme niveau som vores tal, selv om vores profil har flere timer tændt.</p>

<h2>2026 mod 2025: et stort spring</h2>
<p>Den nye generation bruger markant mindre end sidste års. 15"-udgaverne fra 2025 brugte 5,5–7,2 W i tomgang, og AMD-udgaven 15ARP10 nåede omkring 20 kWh om året med vores profil. Den nye 15Q7X11 bruger under halvdelen, omkring 9 kWh. Forskellen er omkring 11 kWh om året, svarende til {{kr 11}}. Det er ikke mange penge, men det betyder også længere batteritid med samme batteri.</p>
<p>Vær opmærksom på, at ENERGY STAR måler én bestemt konfiguration af hver model, med en bestemt skærm, mængde RAM og processor. Har din udgave en anden skærm eller processor, kan forbruget ligge lidt over eller under certificeringens tal.</p>

<h2>Opladning og batteri</h2>
<p>Ifølge Lenovos tekniske specifikationer har generation 11 med Intel et batteri på 50 eller 60 Wh afhængigt af udgave. Snapdragon-udgaverne 14Q7X11 og 15Q7X11 har 50 Wh, selv om ENERGY STAR-certificeringen angiver 60 Wh. Alle lader via USB-C med 45–65 W, og ENERGY STAR er målt med en 65 W-oplader.</p>
<p>En fuld opladning af et 60 Wh-batteri bruger omkring 0,07 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,068}} ved månedens elpris på {{pris_kwh}}. Ladetabet er vores skøn, ikke Lenovos tal. Selv med en opladning hver dag er det kun omkring 25 kWh om året. Se også, hvad <a href="/mobil-opladning/">opladning af mobil og tablet</a> koster.</p>

<h2>IdeaPad Slim 3 mod MacBook og en ekstern skærm</h2>
<p>De nye Snapdragon-udgaver er på niveau med Apples bærbare. <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 13" bruger 3,63 W i tomgang og omkring 10 kWh om året med samme profil. Den lille <a href="/laptop/macbook-neo/">MacBook Neo</a> bruger 2,77 W, omkring 7 kWh. Apple måler ved 230 V og Lenovo ved de 115 V, som ENERGY STAR kræver, så sammenligningen er ikke helt præcis, men forskellen er lille.</p>
<p>Sætter du en ekstern skærm til, ændrer billedet sig. En 27"-skærm som <a href="/skaerm/aoc-q27g4/">AOC Q27G4</a> bruger 21–26 W, syv til ni gange så meget som den bærbare i tomgang. Arbejder du ved skrivebordet med skærm hele dagen, er det skærmen, der fylder på elregningen.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug strømbesparende tilstand i Windows og skru lysstyrken ned; skærmen er den største forbruger i tomgang.</li>
<li>Luk låget eller lad computeren gå i dvale efter få minutter; dvale koster kun 0,4–0,7 W.</li>
<li>Tag opladeren ud af stikket, når computeren er fuldt opladet og du ikke bruger den.</li>
<li>Tungt arbejde som video og spil trækker meget mere end tomgang, op til opladerens 65 W.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>, eller sammenlign med en <a href="/computer/">stationær computer</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo IdeaPad Slim 3?",
      answer:
        "2026-modellerne bruger 2,8–4,6 W i tomgang med skærmen tændt og 0,4–0,6 W i dvale ifølge Lenovos ENERGY STAR-målinger. 2025-modellerne brugte 5,5–7,2 W i tomgang.",
    },
    {
      question: "Hvad koster det at bruge en IdeaPad Slim 3 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger Snapdragon-udgaverne omkring 9–10 kWh om året, svarende til {{kr 9-10}}, og 15\"-udgaverne med Intel omkring 13–14 kWh.",
    },
    {
      question: "Hvad koster det at oplade en IdeaPad Slim 3?",
      answer:
        "En fuld opladning af et 60 Wh-batteri koster {{oere 0,068}} ved månedens elpris på {{pris_kwh}}, regnet med et typisk ladetab. Med 50 Wh-batteri er det lidt mindre.",
    },
    {
      question: "Hvilken IdeaPad Slim 3 bruger mindst strøm?",
      answer:
        "15Q7X11 med Snapdragon fra 2026: 2,8 W i tomgang og 0,4 W i dvale. Den bruger under halvdelen af AMD-udgaven 15ARP10 fra 2025.",
    },
    {
      question: "Er Lenovos tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige en smule, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 14Q7X11", url: es("4703854") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15Q7X11", url: es("4703894") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 14IWC11", url: es("4587201") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15IWC11", url: es("4587203") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 14IPH11", url: es("4520398") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15IPH11", url: es("4520683") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15IRU10", url: es("4005515") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15ARP10", url: es("4005706") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15AHP10", url: es("4005707") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 3 15Q8X10", url: es("3998848") },
    { name: "Lenovo PSREF — IdeaPad Slim 3 14Q7X11, tekniske specifikationer", url: psref("14Q7X11") },
    { name: "Lenovo PSREF — IdeaPad Slim 3 15Q7X11, tekniske specifikationer", url: psref("15Q7X11") },
    { name: "Lenovo PSREF — IdeaPad Slim 3 15IWC11, tekniske specifikationer", url: psref("15IWC11") },
    { name: "Lenovo PSREF — IdeaPad Slim 3 15ARP10, tekniske specifikationer", url: psref("15ARP10") },
  ],
  variants: [
    { name: "14\" 14Q7X11 Snapdragon (2026)", watts: { off: 0.2, sleep: 0.5, idle: 2.9 }, adapterW: 65, batteryWh: 50, source: 0 },
    { name: "15\" 15Q7X11 Snapdragon (2026)", watts: { off: 0.2, sleep: 0.4, idle: 2.8 }, adapterW: 65, batteryWh: 50, source: 1 },
    { name: "14\" 14IWC11 Intel (2026)", watts: { off: 0.2, sleep: 0.5, idle: 3.4 }, adapterW: 65, batteryWh: 60, source: 2 },
    { name: "15\" 15IWC11 Intel (2026)", watts: { off: 0.2, sleep: 0.5, idle: 4.6 }, adapterW: 65, batteryWh: 60, source: 3 },
    { name: "14\" 14IPH11 Intel Core Ultra (2026)", watts: { off: 0.2, sleep: 0.5, idle: 3.3 }, adapterW: 65, batteryWh: 60, source: 4 },
    { name: "15\" 15IPH11 Intel Core Ultra (2026)", watts: { off: 0.2, sleep: 0.6, idle: 4.6 }, adapterW: 65, batteryWh: 60, source: 5 },
    { name: "15\" 15IRU10 Intel (2025)", watts: { off: 0.3, sleep: 0.7, idle: 5.9 }, adapterW: 65, batteryWh: 60, source: 6 },
    { name: "15\" 15ARP10 AMD (2025)", watts: { off: 0.3, sleep: 0.6, idle: 7.2 }, adapterW: 65, batteryWh: 60, source: 7 },
    { name: "15\" 15AHP10 AMD (2025)", watts: { off: 0.3, sleep: 0.6, idle: 7.0 }, adapterW: 65, batteryWh: 60, source: 8 },
    { name: "15\" 15Q8X10 Snapdragon X (2025)", watts: { off: 0.3, sleep: 0.6, idle: 5.5 }, adapterW: 65, batteryWh: 60, source: 9 },
  ],
  publishDate: "2026-12-10",
  updated: "2026-11-22",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Lenovos egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, Lenovo har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse er fra Lenovos tekniske specifikationer (PSREF), og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra Lenovo. Kilderne står nederst på siden.",
};

export default lenovoIdeapadSlim3;
