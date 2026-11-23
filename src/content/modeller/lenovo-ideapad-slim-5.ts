import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const lenovoIdeapadSlim5: ModelData = {
  slug: "lenovo-ideapad-slim-5",
  parent: "laptop",
  brand: "Lenovo",
  name: "Lenovo IdeaPad Slim 5",
  released: "2026-09",
  synonyms: [
    "lenovo ideapad slim 5 strømforbrug",
    "ideapad slim 5 watt",
    "ideapad slim 5 ultra strømforbrug",
    "ideapad slim 5 14 forbrug",
    "ideapad slim 5 16 strømforbrug",
    "lenovo ideapad strømforbrug",
    "ideapad slim 5 batteri wh",
  ],
  title: "Lenovo IdeaPad Slim 5 strømforbrug (2026) → watt og kWh",
  description:
    "Lenovo IdeaPad Slim 5 og Slim 5 Ultra i 13, 14, 15 og 16 tommer med Intel, AMD og Snapdragon: watt fra ENERGY STAR, kWh om året og prisen for en opladning.",
  intro:
    "IdeaPad Slim 5 Ultra 14IWC11 med Intel Core 5 bruger mindst af Slim 5-udgaverne her, 2,5 W i tomgang. 16\"-udgaven med AMD Ryzen AI 7 bruger 6,9 W, næsten tre gange så meget.",
  content: `<h2>Hvor mange watt bruger Lenovo IdeaPad Slim 5?</h2>
<p>IdeaPad Slim 5 er Lenovos tynde hverdagsbærbare i mellemklassen, et trin over <a href="/laptop/lenovo-ideapad-slim-3/">IdeaPad Slim 3</a> og under Yoga. Serien er bred: 13", 14", 15" og 16" skærme, en tyndere Slim 5 Ultra og processorer fra Intel, AMD og Qualcomm. Lenovos koder fortæller, hvad du har: tallet først er skærmstørrelsen, bogstaverne processoren (I for Intel, A for AMD, Q for Snapdragon) og 11 generationen. Bærbare har ikke et EU-energimærke, men Lenovo får IdeaPad certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>Slim 5 Ultra 14IWC11 (sep. 2026)</td><td>Intel Core 5 320</td><td>2,5 W</td><td>0,6 W</td><td>65 Wh</td><td>9,4</td></tr>
<tr><td>Slim 5 13IWC11 (2026)</td><td>Intel Core 7 350</td><td>2,7 W</td><td>0,6 W</td><td>54,7 Wh</td><td>9,9</td></tr>
<tr><td>Slim 5 13Q8Y11 (2026)</td><td>Snapdragon X2 Plus</td><td>3,0 W</td><td>0,8 W</td><td>54,7 Wh</td><td>11,8</td></tr>
<tr><td>Slim 5 Ultra 14ILL11 (2026)</td><td>Intel Core Ultra 7 258V</td><td>5,3 W</td><td>0,5 W</td><td>65 Wh</td><td>14,9</td></tr>
<tr><td>Slim 5 15IWC11 (2026)</td><td>Intel Core 7 350</td><td>5,4 W</td><td>0,6 W</td><td>70 Wh</td><td>15,8</td></tr>
<tr><td>Slim 5 14AGP11 (dec. 2025)</td><td>AMD Ryzen AI 7 450</td><td>6,2 W</td><td>0,7 W</td><td>58,9 Wh</td><td>18,2</td></tr>
<tr><td>Slim 5 14IPH11 (dec. 2025)</td><td>Intel Core Ultra 7</td><td>6,3 W</td><td>0,8 W</td><td>58,9 Wh</td><td>19,1</td></tr>
<tr><td>Slim 5 16AGP11 (dec. 2025)</td><td>AMD Ryzen AI 7 450</td><td>6,9 W</td><td>0,8 W</td><td>78,5 Wh</td><td>20,4</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Samme navn, meget forskelligt forbrug</h2>
<p>IdeaPad Slim 5 spænder bredt under ét navn. Den mest sparsomme Slim 5 her bruger 2,5 W i tomgang, den mest strømkrævende 6,9 W. Med vores profil er det forskellen på 9,4 og 20,4 kWh om året, svarende til {{kr 9,4}} og {{kr 20,4}}. Forskellen skyldes især processoren og skærmen. De nye udgaver med Intels Core 5 320 og Core 7 350 (koden IWC11) er bygget til lavt forbrug, mens udgaverne fra december 2025 med Core Ultra 7 og AMD Ryzen AI 7 450 har mere ydelse og bruger mere med skærmen tændt.</p>
<p>Det betyder, at du ikke kan nøjes med at se på navnet, hvis strømforbruget betyder noget for dig. Se efter koden i specifikationerne: står der IWC11, er det den nye, sparsomme Intel-generation.</p>

<h2>Skærmen på 15" trækker op</h2>
<p>Med den samme Core 7 350 bruger Slim 5 13" 2,7 W i tomgang, men Slim 5 15" bruger 5,4 W — det dobbelte. Den større skærm skal have mere lys, og 15"-udgaven har også et større batteri på 70 Wh. Over et år er forskellen omkring 6 kWh med vores profil, svarende til {{kr 5,9}}. Har du brug for en stor skærm ved skrivebordet, kan en lille bærbar med en ekstern skærm dog ende med at bruge mere, fordi en 27"-skærm ofte bruger 20 W eller mere.</p>

<h2>Hvad koster en opladning?</h2>
<p>En fuld opladning af et batteri på 65 Wh trækker omkring 0,074 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,074}} ved {{pris_kwh}}. Slim 5 13" med 54,7 Wh koster {{oere 0,062}}, og 16"-udgaven med 78,5 Wh koster {{oere 0,089}}. De fleste udgaver er certificeret med en 65 W-oplader, 16"-udgaverne med 100 W.</p>

<h2>Slim 5 mod Slim 3, Yoga Slim 7 og Dell 14</h2>
<p>De nye IWC11-udgaver af Slim 5 ligger på niveau med de mest sparsomme <a href="/laptop/lenovo-ideapad-slim-3/">IdeaPad Slim 3</a> med Snapdragon (2,8–2,9 W) og under <a href="/laptop/lenovo-yoga-slim-7/">Lenovo Yoga Slim 7</a>, der bruger 4,5–6,1 W i 2026-udgaverne. <a href="/laptop/dell-14/">Dell 14 og Dell 15</a> fra august 2026 bruger 3,2–4,9 W. Alle tal er producenternes egne målinger til ENERGY STAR ved 115 V, så de kan sammenlignes indbyrdes.</p>
<ul>
<li>Vælg den nyeste processorgeneration; den gør den største forskel.</li>
<li>Slå Lenovos batteribeskyttelse til, så opladningen stopper før 100 %, når maskinen står ved skrivebordet.</li>
<li>Luk maskinen ned i stedet for dvale, hvis den skal stå ubrugt i flere dage.</li>
<li>Tag opladeren ud, når batteriet er fuldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo IdeaPad Slim 5?",
      answer:
        "2,5–6,9 W i tomgang med skærmen tændt og 0,5–0,8 W i dvale efter Lenovos ENERGY STAR-målinger. De nye udgaver med Intel Core 5 320 og Core 7 350 bruger mindst.",
    },
    {
      question: "Hvad koster det at bruge en IdeaPad Slim 5 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger Slim 5 9–20 kWh om året, svarende til {{kr 9,4}} til {{kr 20,4}} ved månedens elpris.",
    },
    {
      question: "Hvilken IdeaPad Slim 5 bruger mindst strøm?",
      answer:
        "Af de certificerede udgaver her bruger Slim 5 Ultra 14IWC11 med Intel Core 5 320 mindst, 2,5 W i tomgang, efterfulgt af Slim 5 13IWC11 med 2,7 W.",
    },
    {
      question: "Hvad koster det at oplade en IdeaPad Slim 5?",
      answer:
        "En fuld opladning af et batteri på 65 Wh trækker omkring 0,074 kWh fra stikket med et typisk ladetab og koster {{oere 0,074}} ved månedens elpris.",
    },
    {
      question: "Er Lenovos tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR måler ved 115 V. Ved 230 V kan tallene afvige lidt, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 Ultra 14IWC11", url: es("4699154") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 13IWC11", url: es("4586781") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 13Q8Y11", url: es("4528801") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 Ultra 14ILL11", url: es("4586830") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 15IWC11", url: es("4586782") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 14AGP11", url: es("4517944") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 14IPH11", url: es("4520392") },
    { name: "ENERGY STAR — Lenovo IdeaPad Slim 5 16AGP11", url: es("4517925") },
  ],
  variants: [
    { name: "14\" Ultra 14IWC11 Intel Core 5 (2026)", watts: { off: 0.1, sleep: 0.6, idle: 2.5 }, adapterW: 65, batteryWh: 65, source: 0 },
    { name: "13\" 13IWC11 Intel Core 7 (2026)", watts: { off: 0.2, sleep: 0.6, idle: 2.7 }, adapterW: 65, batteryWh: 54.7, source: 1 },
    { name: "13\" 13Q8Y11 Snapdragon X2 Plus (2026)", watts: { off: 0.2, sleep: 0.8, idle: 3.0 }, adapterW: 65, batteryWh: 54.7, source: 2 },
    { name: "14\" Ultra 14ILL11 Intel Core Ultra 7 (2026)", watts: { off: 0.2, sleep: 0.5, idle: 5.3 }, adapterW: 65, batteryWh: 65, source: 3 },
    { name: "15\" 15IWC11 Intel Core 7 (2026)", watts: { off: 0.2, sleep: 0.6, idle: 5.4 }, adapterW: 65, batteryWh: 70, source: 4 },
    { name: "14\" 14AGP11 AMD Ryzen AI 7 (2025)", watts: { off: 0.1, sleep: 0.7, idle: 6.2 }, adapterW: 65, batteryWh: 58.9, source: 5 },
    { name: "14\" 14IPH11 Intel Core Ultra 7 (2025)", watts: { off: 0.3, sleep: 0.8, idle: 6.3 }, adapterW: 65, batteryWh: 58.9, source: 6 },
    { name: "16\" 16AGP11 AMD Ryzen AI 7 (2025)", watts: { off: 0.2, sleep: 0.8, idle: 6.9 }, adapterW: 100, batteryWh: 78.5, source: 7 },
  ],
  publishDate: "2026-12-28",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Lenovos egne målinger til ENERGY STAR — kort tomgang med skærmen tændt, dvale og slukket — ved 115 V på den konfiguration, Lenovo har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteri og oplader er fra samme certificering, og prisen pr. opladning er regnet med et typisk ladetab, ikke Lenovos tal. Kilderne står nederst på siden.",
};

export default lenovoIdeapadSlim5;
