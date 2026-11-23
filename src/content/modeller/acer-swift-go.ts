import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const acerSwiftGo: ModelData = {
  slug: "acer-swift-go",
  parent: "laptop",
  brand: "Acer",
  name: "Acer Swift Go 14 og 16",
  released: "2026-03",
  synonyms: [
    "acer swift go strømforbrug",
    "acer swift go 14 watt",
    "swift go 16 strømforbrug",
    "acer swift go 14 ai forbrug",
    "sfg14 strømforbrug",
    "acer bærbar strømforbrug",
    "acer swift go batteri wh",
  ],
  title: "Acer Swift Go strømforbrug (2026) → watt for 14 og 16 tommer",
  description:
    "Acer Swift Go 14 og Swift Go 16 med Intel Core Ultra og AMD Ryzen AI: watt i tomgang og dvale fra ENERGY STAR, kWh om året og prisen for en opladning.",
  intro:
    "Swift Go 14 med Intel Core Ultra 7 256V fra 2025 bruger mindst af udgaverne her, 4,3 W i tomgang. 2026-udgaven af samme maskine bruger 6,7 W og 1,0 W i dvale.",
  content: `<h2>Hvor mange watt bruger Acer Swift Go?</h2>
<p>Swift Go er Acers tynde bærbare i mellemklassen, mange af dem med OLED-skærm, et alternativ til Zenbook og Yoga Slim. Serien findes som Swift Go 14 og Swift Go 16, med Intel Core Ultra og AMD Ryzen AI. Acers modelkoder fortæller, hvad du har: SFG14 er Swift Go 14, SFG16 er Swift Go 16, og tallene og bogstaverne bagefter angiver generationen og processoren. Bærbare har ikke et EU-energimærke, men Acer får Swift Go certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>Swift Go 14 SFG14-75 (2025)</td><td>Intel Core Ultra 7 256V</td><td>4,3 W</td><td>0,6 W</td><td>65 Wh</td><td>13,4</td></tr>
<tr><td>Swift Go 16 SFG16-74 (2025)</td><td>Intel Core Ultra 7 258V</td><td>6,5 W</td><td>0,6 W</td><td>65 Wh</td><td>18,2</td></tr>
<tr><td>Swift Go 14 SFG14-64 (2025)</td><td>AMD Ryzen AI 7 350</td><td>7,2 W</td><td>0,5 W</td><td>75 Wh</td><td>19,1</td></tr>
<tr><td>Swift Go 16 SFG16-A71 (2026)</td><td>AMD Ryzen AI 9 465</td><td>6,9 W</td><td>0,7 W</td><td>65 Wh</td><td>19,7</td></tr>
<tr><td>Swift Go 16 SFG16-I71 (2026)</td><td>Intel Core Ultra X7 358H</td><td>6,9 W</td><td>0,7 W</td><td>70 Wh</td><td>19,7</td></tr>
<tr><td>Swift Go 14 SFG14-I71 (2026)</td><td>Intel Core Ultra X7 358H</td><td>6,7 W</td><td>1,0 W</td><td>71 Wh</td><td>21,2</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Den nye generation bruger mere</h2>
<p>Det er usædvanligt, men på Swift Go 14 bruger 2026-udgaven mere strøm end forgængeren. Swift Go 14 AI fra 2025 (SFG14-75) med Intels sparsomme Core Ultra 7 256V bruger 4,3 W i tomgang og 0,6 W i dvale. 2026-udgaven (SFG14-I71) blev certificeret med den kraftigere Core Ultra X7 358H og bruger 6,7 W og 1,0 W. Over et år er det omkring 8 kWh mere, svarende til {{kr 7,8}}.</p>
<p>Forklaringen er processoren. Core Ultra 200V-serien fra 2024–2025 er bygget til lavt forbrug i tynde maskiner, mens H-chippen i 2026-udgaven er lavet til mere ydelse. ENERGY STAR måler kun den konfiguration, Acer har certificeret. Sælges SFG14-I71 med en mindre Core Ultra 5 eller 7, kan den bruge mindre, men det står der ingen officielle tal for.</p>

<h2>Hvad koster et år med en Swift Go?</h2>
<p>Med seks timers brug om dagen bruger den mest sparsomme udgave her, SFG14-75, omkring 13,4 kWh om året, svarende til {{kr 13,4}}. De andre ligger på 18–21 kWh, svarende til {{kr 18}} til {{kr 21}}. Det er i den høje ende for tynde 14"- og 16"-maskiner uden grafikkort, men stadig langt under et <a href="/tv/">tv</a> eller en stationær computer.</p>
<p>En fuld opladning af et batteri på 65–75 Wh trækker omkring 0,07–0,09 kWh fra stikkontakten, regnet med et typisk ladetab på 12 %. Det koster {{oere 0,074}} til {{oere 0,085}} ved {{pris_kwh}}. ENERGY STAR-målingerne er lavet med en 100 W-oplader, så maskinen kan trække en del mere end tomgangstallet, når den arbejder hårdt og lader samtidig.</p>

<h2>Swift Go mod Zenbook 14 og Yoga Slim 7</h2>
<p>Sammenlignet med <a href="/laptop/asus-zenbook-14/">ASUS Zenbook 14</a>, der bruger 4,1–5,2 W i tomgang, ligger de fleste Swift Go-udgaver højere. Kun 2025-udgaven med Core Ultra 7 256V er på niveau. <a href="/laptop/lenovo-yoga-slim-7/">Lenovo Yoga Slim 7</a> bruger 4,5–6,1 W i 2026-udgaverne. Forskellen mellem 4 og 7 W i tomgang svarer til knap 7 kWh om året med vores profil.</p>
<p>Alle tallene er producenternes egne målinger til ENERGY STAR ved 115 V, så de kan sammenlignes indbyrdes. Apples MacBooks er målt af Apple ved 230 V og ligger lavere i tomgang.</p>

<h2>Sådan sparer du strøm på en Swift Go</h2>
<ul>
<li>Brug Windows' strømbesparende tilstand, og har din Swift Go en OLED-skærm, så brug mørk tilstand; OLED bruger mindre på mørke flader.</li>
<li>Sænk skærmens opdateringshastighed fra 120 Hz til 60 Hz, hvis din model har en 120 Hz-skærm og du mest skriver og surfer.</li>
<li>Luk maskinen ned i stedet for dvale, hvis du ikke bruger den i flere dage — særligt på SFG14-I71 med 1,0 W i dvale.</li>
<li>Tag opladeren ud, når batteriet er fuldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Acer Swift Go 14?",
      answer:
        "4,3–7,2 W i tomgang med skærmen tændt og 0,5–1,0 W i dvale efter Acers ENERGY STAR-målinger. 2025-udgaven med Intel Core Ultra 7 256V bruger mindst.",
    },
    {
      question: "Hvad koster det at bruge en Swift Go om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger Swift Go 13–21 kWh om året, svarende til {{kr 13,4}} til {{kr 21,2}} ved månedens elpris.",
    },
    {
      question: "Bruger den nye Swift Go 14 mere strøm end den gamle?",
      answer:
        "Ja, i den certificerede konfiguration. SFG14-I71 med Core Ultra X7 358H bruger 6,7 W i tomgang og 1,0 W i dvale mod 4,3 W og 0,6 W for SFG14-75.",
    },
    {
      question: "Hvad koster det at oplade en Acer Swift Go?",
      answer:
        "En fuld opladning af et batteri på 65–75 Wh trækker omkring 0,07–0,09 kWh fra stikket med et typisk ladetab og koster {{oere 0,074}} til {{oere 0,085}}.",
    },
    {
      question: "Er Acers tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR måler ved 115 V. Ved 230 V kan tallene afvige lidt, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Acer Swift Go 14 SFG14-75", url: es("4049659") },
    { name: "ENERGY STAR — Acer Swift Go 16 SFG16-74", url: es("4020745") },
    { name: "ENERGY STAR — Acer Swift Go 14 SFG14-64", url: es("4514151") },
    { name: "ENERGY STAR — Acer Swift Go 16 SFG16-A71", url: es("4515850") },
    { name: "ENERGY STAR — Acer Swift Go 16 SFG16-I71", url: es("4520726") },
    { name: "ENERGY STAR — Acer Swift Go 14 SFG14-I71", url: es("4572694") },
  ],
  variants: [
    { name: "14\" SFG14-75 Intel Core Ultra 7 (2025)", watts: { off: 0.4, sleep: 0.6, idle: 4.3 }, adapterW: 100, batteryWh: 65, source: 0 },
    { name: "16\" SFG16-74 Intel Core Ultra 7 (2025)", watts: { off: 0.5, sleep: 0.6, idle: 6.5 }, adapterW: 100, batteryWh: 65, source: 1 },
    { name: "14\" SFG14-64 AMD Ryzen AI 7 (2025)", watts: { off: 0.3, sleep: 0.5, idle: 7.2 }, adapterW: 100, batteryWh: 75, source: 2 },
    { name: "16\" SFG16-A71 AMD Ryzen AI 9 (2026)", watts: { off: 0.5, sleep: 0.7, idle: 6.9 }, adapterW: 100, batteryWh: 65, source: 3 },
    { name: "16\" SFG16-I71 Intel Core Ultra X7 (2026)", watts: { off: 0.3, sleep: 0.7, idle: 6.9 }, adapterW: 100, batteryWh: 70, source: 4 },
    { name: "14\" SFG14-I71 Intel Core Ultra X7 (2026)", watts: { off: 0.3, sleep: 1.0, idle: 6.7 }, adapterW: 100, batteryWh: 71, source: 5 },
  ],
  publishDate: "2026-12-25",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Acers egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Acers egne målinger til ENERGY STAR — kort tomgang med skærmen tændt, dvale og slukket — ved 115 V på den konfiguration, Acer har certificeret. Ved 230 V kan tallene afvige lidt. Batteri og oplader er fra samme certificering, og prisen pr. opladning er regnet med et typisk ladetab, ikke et tal fra Acer. Kilderne står nederst på siden.",
};

export default acerSwiftGo;
