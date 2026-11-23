import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const acerAspire: ModelData = {
  slug: "acer-aspire",
  parent: "laptop",
  brand: "Acer",
  name: "Acer Aspire",
  released: "2026-09",
  synonyms: [
    "acer aspire strømforbrug",
    "acer aspire lite strømforbrug",
    "acer aspire go watt",
    "acer aspire 14 ai strømforbrug",
    "acer aspire lite 15 forbrug",
    "billig bærbar strømforbrug",
    "acer aspire batteri wh",
  ],
  title: "Acer Aspire strømforbrug (2026) → Aspire Lite, Go og 14 AI",
  description:
    "Acer Aspire Lite, Aspire Go og Aspire 14 AI: watt i tomgang og dvale fra Acers ENERGY STAR-målinger, kWh om året og prisen for at lade en billig bærbar op.",
  intro:
    "Aspire Lite 15 med Intel Core 7 350 fra 2026 bruger mindst af Aspire-udgaverne her, 3,3 W i tomgang. Den ældre Aspire Lite 15 med AMD Ryzen 5 bruger 5,5 W.",
  content: `<h2>Hvor mange watt bruger en Acer Aspire?</h2>
<p>Aspire er Acers serie af billige og mellemdyre bærbare til hjemmet og studiet. Under navnet ligger flere linjer: Aspire Lite (AL), der er den billigste, Aspire Go (AG) og Aspire 14 AI og 16 AI (A14 og A16) med de nyeste processorer. Bærbare har ikke et EU-energimærke, men Acer får de fleste Aspire-modeller certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket. Vi har valgt udgaver, der er kommet på markedet i 2026 ifølge certificeringen.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>Aspire Lite 15 AL15-58P (2026)</td><td>Intel Core 7 350</td><td>3,3 W</td><td>0,6 W</td><td>58,1 Wh</td><td>11,2</td></tr>
<tr><td>Aspire Go 15 AG15-I51P (2026)</td><td>Intel Core 7 350</td><td>3,5 W</td><td>0,6 W</td><td>45 Wh</td><td>11,6</td></tr>
<tr><td>Aspire 14 AI A14-I51M (2026)</td><td>Intel Core 7 350</td><td>3,6 W</td><td>0,6 W</td><td>45 Wh</td><td>11,8</td></tr>
<tr><td>Aspire Lite 16 AL16-63P (2026)</td><td>Intel Core Ultra 7 258V</td><td>3,9 W</td><td>0,8 W</td><td>58,1 Wh</td><td>13,8</td></tr>
<tr><td>Aspire Go 15 AG15-I31P (2026)</td><td>Intel Core i3</td><td>5,0 W</td><td>0,4 W</td><td>47,3 Wh</td><td>13,6</td></tr>
<tr><td>Aspire Lite 15 AL15-42 (2026)</td><td>AMD Ryzen 5 7430U</td><td>5,5 W</td><td>0,6 W</td><td>62,7 Wh</td><td>16,0</td></tr>
<tr><td>Aspire Lite 14 AL14-53P (2026)</td><td>Intel Core Ultra 7 155U</td><td>4,4 W</td><td>1,1 W</td><td>50,7 Wh</td><td>16,9</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Processoren betyder mere end prisen</h2>
<p>Det er ikke de dyreste Aspire-modeller, der bruger mindst strøm. De tre udgaver med Intels Core 7 350 fra 2026 — Aspire Lite 15, Aspire Go 15 og Aspire 14 AI — bruger alle 3,3–3,6 W i tomgang. Aspire Lite 15 med den ældre AMD Ryzen 5 7430U bruger 5,5 W, og Aspire Go 15 med Core i3 bruger 5,0 W. Ældre og billigere processorer er ikke nødvendigvis mere sparsomme; ofte er det omvendt, fordi nye chips er lavet med en mere effektiv produktionsproces.</p>
<p>Forskellen mellem 3,3 og 5,5 W i tomgang svarer til knap 5 kWh om året med vores profil, eller {{kr 4,8}}. Det er ikke afgørende for, hvilken maskine du skal købe, men det er en god tommelfingerregel at vælge den nyeste processorgeneration, når to maskiner ellers koster det samme.</p>

<h2>Dvale på Aspire Lite 14</h2>
<p>De fleste Aspire-udgaver bruger 0,4–0,8 W med låget lukket. Aspire Lite 14 (AL14-53P) bruger 1,1 W i dvale og 1,0 W slukket ifølge certificeringen. Med 18 timer i dvale om dagen bliver det 7,2 kWh om året alene i dvale, over 40 % af maskinens samlede forbrug med vores profil. Bruger du den kun et par gange om ugen, er det en god idé at lukke den helt ned og tage opladeren ud af stikket.</p>

<h2>Hvad koster en opladning?</h2>
<p>Aspire-modellerne har batterier på 45–62,7 Wh ifølge certificeringen. En fuld opladning af et batteri på 58 Wh trækker omkring 0,066 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,066}} ved månedens elpris på {{pris_kwh}}. En Aspire Go 15 med 45 Wh koster {{oere 0,051}} at lade helt op. Over et år med seks timers brug om dagen ligger de sparsomme 2026-udgaver på omkring 11–12 kWh, svarende til {{kr 11,2}} til {{kr 11,8}}.</p>

<h2>Aspire mod IdeaPad Slim 3 og Vivobook</h2>
<p>De billige maskiner fra de store mærker ligger tæt. <a href="/laptop/lenovo-ideapad-slim-3/">Lenovo IdeaPad Slim 3</a> bruger 2,8–4,6 W i 2026-udgaverne, og <a href="/laptop/asus-vivobook/">ASUS Vivobook 14 og 16</a> bruger 3,2–4,0 W i de nye udgaver. Aspire med Core 7 350 er på samme niveau. Tallene er alle producenternes egne målinger til ENERGY STAR ved 115 V, så de kan sammenlignes indbyrdes, men hver model er kun målt i én konfiguration.</p>
<ul>
<li>Skru ned for lysstyrken; skærmen er den største forbruger i tomgang.</li>
<li>Brug Windows' strømbesparende tilstand, når du arbejder på batteri.</li>
<li>Tungt arbejde trækker langt mere end tomgang, op til opladerens 65 W.</li>
<li>Tag opladeren ud, når batteriet er fuldt og maskinen ikke bruges.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Acer Aspire Lite 15?",
      answer:
        "Aspire Lite 15 AL15-58P med Intel Core 7 350 fra 2026 bruger 3,3 W i tomgang og 0,6 W i dvale efter Acers ENERGY STAR-målinger. AL15-42 med AMD Ryzen 5 bruger 5,5 W og 0,6 W.",
    },
    {
      question: "Hvad koster det at bruge en Acer Aspire om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger de sparsomme 2026-udgaver omkring 11–12 kWh om året, svarende til {{kr 11,2}} til {{kr 11,8}}. De ældre udgaver bruger op til 17 kWh.",
    },
    {
      question: "Hvad koster det at oplade en Acer Aspire?",
      answer:
        "En fuld opladning af et batteri på 58 Wh trækker omkring 0,066 kWh fra stikket med et typisk ladetab og koster {{oere 0,066}} ved månedens elpris.",
    },
    {
      question: "Bruger Aspire Go mindre strøm end Aspire Lite?",
      answer:
        "Det afhænger af processoren, ikke af serien. Aspire Go 15 med Core 7 350 bruger 3,5 W i tomgang, med Core i3 5,0 W. Aspire Lite 15 med Core 7 350 bruger 3,3 W.",
    },
    {
      question: "Er Acers tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR måler ved 115 V. Ved 230 V kan tallene afvige lidt, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Acer Aspire Lite 15 AL15-58P", url: es("4708134") },
    { name: "ENERGY STAR — Acer Aspire Go 15 AG15-I51P", url: es("4586650") },
    { name: "ENERGY STAR — Acer Aspire 14 AI A14-I51M", url: es("4586651") },
    { name: "ENERGY STAR — Acer Aspire Lite 16 AL16-63P", url: es("4653114") },
    { name: "ENERGY STAR — Acer Aspire Go 15 AG15-I31P", url: es("4689794") },
    { name: "ENERGY STAR — Acer Aspire Lite AL15-42", url: es("4611294") },
    { name: "ENERGY STAR — Acer Aspire Lite 14 AL14-53P", url: es("4576810") },
  ],
  variants: [
    { name: "15,6\" Aspire Lite 15 AL15-58P Intel Core 7", watts: { off: 0.4, sleep: 0.6, idle: 3.3 }, adapterW: 65, batteryWh: 58.1, source: 0 },
    { name: "15,6\" Aspire Go 15 AG15-I51P Intel Core 7", watts: { off: 0.3, sleep: 0.6, idle: 3.5 }, adapterW: 65, batteryWh: 45, source: 1 },
    { name: "14\" Aspire 14 AI A14-I51M Intel Core 7", watts: { off: 0.3, sleep: 0.6, idle: 3.6 }, adapterW: 65, batteryWh: 45, source: 2 },
    { name: "16\" Aspire Lite 16 AL16-63P Intel Core Ultra 7", watts: { off: 0.1, sleep: 0.8, idle: 3.9 }, adapterW: 65, batteryWh: 58.1, source: 3 },
    { name: "15\" Aspire Go 15 AG15-I31P Intel Core i3", watts: { off: 0.4, sleep: 0.4, idle: 5.0 }, batteryWh: 47.3, source: 4 },
    { name: "15,6\" Aspire Lite 15 AL15-42 AMD Ryzen 5", watts: { off: 0.5, sleep: 0.6, idle: 5.5 }, adapterW: 65, batteryWh: 62.7, source: 5 },
    { name: "14\" Aspire Lite 14 AL14-53P Intel Core Ultra 7", watts: { off: 1.0, sleep: 1.1, idle: 4.4 }, adapterW: 65, batteryWh: 50.7, source: 6 },
  ],
  publishDate: "2026-12-26",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Acers egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Acers egne målinger til den amerikanske ENERGY STAR-certificering — kort tomgang med skærmen tændt, dvale og slukket — ved 115 V på den konfiguration, Acer har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteri og oplader er fra samme certificering; prisen for en opladning er regnet med et typisk ladetab, ikke Acers tal. Kilderne står nederst på siden.",
};

export default acerAspire;
