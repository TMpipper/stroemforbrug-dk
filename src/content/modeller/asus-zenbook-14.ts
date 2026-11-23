import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const asusZenbook14: ModelData = {
  slug: "asus-zenbook-14",
  parent: "laptop",
  brand: "ASUS",
  name: "ASUS Zenbook 14",
  released: "2026-08",
  synonyms: [
    "asus zenbook 14 strømforbrug",
    "zenbook 14 oled watt",
    "zenbook 14 ux3480 strømforbrug",
    "zenbook 14 um3406 forbrug",
    "asus zenbook strømforbrug",
    "zenbook 14 batteri wh",
    "asus bærbar strømforbrug",
  ],
  title: "ASUS Zenbook 14 strømforbrug (2026) → watt for Intel og AMD",
  description:
    "ASUS Zenbook 14 (UX3480) fra 2026 og Zenbook 14 OLED (UM3406, UX3405): watt i tomgang og dvale fra ENERGY STAR, kWh om året og prisen for en opladning.",
  intro:
    "2026-udgaven med Intel bruger mindst af Zenbook 14-modellerne her, 4,1 W i tomgang og 0,4 W i dvale. AMD-udgaven af samme maskine bruger 1,2 W i dvale, tre gange så meget.",
  content: `<h2>Hvor mange watt bruger ASUS Zenbook 14?</h2>
<p>Zenbook 14 er ASUS' tynde 14"-bærbare med OLED-skærm og et stort batteri på 70–75 Wh. Den nyeste generation fra sommeren 2026 hedder Zenbook 14 (UX3480) og findes med Intel Core Ultra, AMD Ryzen AI og Qualcomm Snapdragon. Ved siden af sælges Zenbook 14 OLED med AMD (UM3406) i to generationer og Zenbook 14 OLED med Intel (UX3405) fra 2025. Bærbare har ikke et EU-energimærke, men ASUS får dem certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<p>ENERGY STAR kender kun maskinerne på deres regulatoriske koder (UX3480A, UM3406G og så videre), mens ASUS sælger dem som Zenbook 14 med koden i parentes. Bogstavet efter koden fortæller processoren: A for Intel, G og K for AMD og Q for Snapdragon.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>Zenbook 14 UX3480 (2026)</td><td>Intel Core Ultra 9</td><td>4,1 W</td><td>0,4 W</td><td>70 Wh</td><td>11,6</td></tr>
<tr><td>Zenbook 14 UX3480 (2026)</td><td>Snapdragon X Plus</td><td>4,3 W</td><td>0,5 W</td><td>50 Wh</td><td>12,7</td></tr>
<tr><td>Zenbook 14 UX3480 (2026)</td><td>AMD Ryzen AI 9 465</td><td>4,4 W</td><td>1,2 W</td><td>70 Wh</td><td>17,5</td></tr>
<tr><td>Zenbook 14 OLED UM3406 (2026)</td><td>AMD Ryzen AI 7</td><td>5,0 W</td><td>0,5 W</td><td>75 Wh</td><td>14,2</td></tr>
<tr><td>Zenbook 14 OLED UM3406 (2025)</td><td>AMD Ryzen AI 7</td><td>5,2 W</td><td>0,6 W</td><td>75 Wh</td><td>15,3</td></tr>
<tr><td>Zenbook 14 OLED UX3405 (2025)</td><td>Intel Core Ultra 9</td><td>4,9 W</td><td>0,8 W</td><td>75 Wh</td><td>16,0</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Dvale gør forskellen på den nye Zenbook 14</h2>
<p>I tomgang ligger de tre 2026-udgaver tæt: 4,1–4,4 W. Det er dvalen, der skiller dem ad. AMD-udgaven bruger 1,2 W med låget lukket, Intel-udgaven 0,4 W. Med 18 timer i dvale om dagen bliver det 7,9 kWh om året for AMD-udgaven alene i dvale mod 2,6 kWh for Intel-udgaven — en forskel på over 5 kWh, svarende til {{kr 5,3}} om året. Lukker du maskinen helt ned om natten, forsvinder forskellen næsten.</p>
<p>Snapdragon-udgaven har et mindre batteri på 50 Wh, men bruger ikke mindre strøm i tomgang. Den lange batteritid, som Snapdragon-maskiner er kendt for, kommer især fra lavere forbrug ved let arbejde som browsing og video, ikke fra tomgangsmålingen.</p>

<h2>Hvad koster et år med en Zenbook 14?</h2>
<p>Med seks timers brug om dagen bruger den mest sparsomme udgave her, UX3480 med Intel, omkring 11,6 kWh om året, svarende til {{kr 11,6}}. AMD-udgaven af samme model bruger omkring 17,5 kWh, svarende til {{kr 17,5}}. Den ældre Zenbook 14 OLED fra 2025 ligger midt imellem med 15–16 kWh.</p>
<p>En fuld opladning af et batteri på 70 Wh trækker omkring 0,08 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,080}} ved {{pris_kwh}}. ENERGY STAR-målingerne er lavet med en 65–68 W USB-C-oplader; tungt arbejde som videoredigering eller spil kan trække op til opladerens effekt, og det er langt mere end tomgangstallene her.</p>

<h2>Zenbook 14 mod Yoga Slim 7, OmniBook og MacBook Air</h2>
<p>Zenbook 14 ligger i samme klasse som <a href="/laptop/lenovo-yoga-slim-7/">Lenovo Yoga Slim 7</a>, der bruger 4,5–6,1 W i tomgang i 2026-udgaverne, og tæt på <a href="/laptop/hp-omnibook/">HP OmniBook 5</a> 14", der bruger 3,2–6,4 W. Den nye Zenbook 14 med Intel er altså blandt de sparsomme af de tynde 14"-maskiner med OLED på siden, men ikke den mest sparsomme bærbare. <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 13" bruger 3,63 W i tomgang og 0,29 W i dvale ifølge Apples egne målinger ved 230 V.</p>
<p>ASUS' tal er målt til ENERGY STAR ved 115 V og på én bestemt konfiguration af hver model. Køber du en udgave med en anden skærm, mere RAM eller en anden processor i samme familie, kan tallene ligge lidt over eller under.</p>

<h2>Sådan sparer du strøm på en Zenbook 14</h2>
<ul>
<li>Brug mørk tilstand: OLED-skærmen bruger mindre strøm på mørke flader.</li>
<li>Slå ASUS' batteribeskyttelse til i MyASUS, så opladningen stopper ved 80 %. Det skåner batteriet mere, end det sparer strøm.</li>
<li>Har du AMD-udgaven og bruger den sjældent, så luk den ned i stedet for at lukke låget.</li>
<li>Tag opladeren ud, når maskinen er fuldt opladet og ikke bruges.</li>
</ul>
<p>Se flere modeller og regn din egen ud på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger ASUS Zenbook 14?",
      answer:
        "2026-udgaven (UX3480) bruger 4,1–4,4 W i tomgang med skærmen tændt og 0,4–1,2 W i dvale efter ASUS' ENERGY STAR-målinger. Zenbook 14 OLED bruger 4,9–5,2 W i tomgang.",
    },
    {
      question: "Hvad koster det at bruge en Zenbook 14 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger UX3480 med Intel omkring 11,6 kWh om året, svarende til {{kr 11,6}}. AMD-udgaven bruger omkring 17,5 kWh.",
    },
    {
      question: "Hvorfor bruger Zenbook 14 med AMD mere strøm?",
      answer:
        "Ikke i brug, men i dvale: 1,2 W mod 0,4 W for Intel-udgaven. Med 18 timer i dvale om dagen bliver det godt 5 kWh mere om året.",
    },
    {
      question: "Hvad koster det at oplade en Zenbook 14?",
      answer:
        "En fuld opladning af et batteri på 70 Wh trækker omkring 0,08 kWh fra stikket, regnet med et typisk ladetab. Det koster {{oere 0,080}} ved månedens elpris.",
    },
    {
      question: "Er ASUS' tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige lidt, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — ASUS UX3480A (Zenbook 14, Intel)", url: es("4670494") },
    { name: "ENERGY STAR — ASUS UX3480Q (Zenbook 14, Snapdragon)", url: es("4655794") },
    { name: "ENERGY STAR — ASUS UX3480G (Zenbook 14, AMD)", url: es("4662994") },
    { name: "ENERGY STAR — ASUS UM3406G (Zenbook 14 OLED, AMD, 2026)", url: es("4510823") },
    { name: "ENERGY STAR — ASUS UM3406K (Zenbook 14 OLED, AMD, 2025)", url: es("4012710") },
    { name: "ENERGY STAR — ASUS UX3405C (Zenbook 14 OLED, Intel, 2025)", url: es("4439077") },
    { name: "ASUS — Zenbook 14 OLED (UM3406), tekniske specifikationer", url: "https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-14-oled-um3406/techspec/" },
  ],
  variants: [
    { name: "UX3480 Intel Core Ultra 9 (2026)", watts: { off: 0.3, sleep: 0.4, idle: 4.1 }, adapterW: 68, batteryWh: 70, source: 0 },
    { name: "UX3480 Snapdragon X Plus (2026)", watts: { off: 0.2, sleep: 0.5, idle: 4.3 }, adapterW: 68, batteryWh: 50, source: 1 },
    { name: "UX3480 AMD Ryzen AI 9 (2026)", watts: { off: 0.2, sleep: 1.2, idle: 4.4 }, adapterW: 68, batteryWh: 70, source: 2 },
    { name: "OLED UM3406 AMD Ryzen AI 7 (2026)", watts: { off: 0.2, sleep: 0.5, idle: 5.0 }, adapterW: 68, batteryWh: 75, source: 3 },
    { name: "OLED UM3406 AMD Ryzen AI 7 (2025)", watts: { off: 0.3, sleep: 0.6, idle: 5.2 }, adapterW: 65, batteryWh: 75, source: 4 },
    { name: "OLED UX3405 Intel Core Ultra 9 (2025)", watts: { off: 0.4, sleep: 0.8, idle: 4.9 }, adapterW: 65, batteryWh: 75, source: 5 },
  ],
  publishDate: "2026-12-23",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (ASUS' egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er ASUS' egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, ASUS har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse og opladeren er fra samme certificering, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra ASUS. Kilderne står nederst på siden.",
};

export default asusZenbook14;
