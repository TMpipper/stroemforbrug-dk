import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const dellXps: ModelData = {
  slug: "dell-xps",
  parent: "laptop",
  brand: "Dell",
  name: "Dell XPS 13, 14 og 16",
  released: "2026-09",
  synonyms: [
    "dell xps strømforbrug",
    "dell xps 13 strømforbrug",
    "xps 14 watt",
    "xps 16 strømforbrug",
    "dell xps 13 forbrug",
    "xps 16 nvidia strømforbrug",
    "dell xps batteri wh",
  ],
  title: "Dell XPS strømforbrug (2026) → watt for XPS 13, 14 og 16",
  description:
    "Dell XPS 13, XPS 14 og XPS 16 fra 2026 og XPS 13 fra 2024: watt i tomgang og dvale fra Dells ENERGY STAR-målinger, kWh om året og prisen for en opladning.",
  intro:
    "XPS 14 bruger mindst af XPS-modellerne her, 4,0 W i tomgang. XPS 16 med Nvidia-chip bruger 10,4 W og omkring dobbelt så meget strøm om året som de andre.",
  content: `<h2>Hvor mange watt bruger Dell XPS?</h2>
<p>XPS er Dells dyre, tynde bærbare i aluminium. I 2026 består serien af XPS 13 (DX13260), XPS 14 (DA14260) og XPS 16 i to udgaver: med Intel Core Ultra X7 (DA16260) og med Nvidias egen processor N1x (DX16263) fra september 2026. Til sammenligning tager vi forgængeren XPS 13 9350 fra 2024 med. Bærbare har ikke et EU-energimærke, men Dell får XPS certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>XPS 14 DA14260 (2026)</td><td>Intel Core Ultra X7 358H</td><td>4,0 W</td><td>0,9 W</td><td>70 Wh</td><td>14,7</td></tr>
<tr><td>XPS 13 DX13260 (2026)</td><td>Intel</td><td>4,2 W</td><td>1,0 W</td><td>52 Wh</td><td>15,8</td></tr>
<tr><td>XPS 13 9350 (2024)</td><td>Intel Core Ultra 9</td><td>5,2 W</td><td>0,6 W</td><td>55 Wh</td><td>15,3</td></tr>
<tr><td>XPS 16 DA16260 (2026)</td><td>Intel Core Ultra X7 358H</td><td>5,4 W</td><td>0,7 W</td><td>70 Wh</td><td>16,4</td></tr>
<tr><td>XPS 16 DX16263 (2026)</td><td>Nvidia N1x</td><td>10,4 W</td><td>1,2 W</td><td>99 Wh</td><td>30,7</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Dvalen trækker op på de nye XPS</h2>
<p>De nye XPS 13 og XPS 14 bruger mindre end 2024-udgaven med skærmen tændt: 4,2 og 4,0 W mod 5,2 W for XPS 13 9350. Men de bruger mere med låget lukket. XPS 13 fra 2026 bruger 1,0 W i dvale, 2024-udgaven 0,6 W. Med 18 timer i dvale om dagen fylder dvalen 6,6 kWh om året på den nye XPS 13 — mere end 40 % af maskinens forbrug med vores profil. Derfor ender den nye XPS 13 på 15,8 kWh om året, en smule over den gamle.</p>
<p>Lader du maskinen ligge med låget lukket det meste af døgnet, betyder dvalen altså lige så meget som tomgangen. Bruger du den hver dag, er dvale praktisk, fordi den vågner med det samme. Står den ubrugt i weekenden eller i ferien, kan det svare sig at lukke den helt ned.</p>

<h2>XPS 16 med Nvidia: dobbelt forbrug</h2>
<p>XPS 16 med Nvidias N1x er bygget til grafik, video og spil, og det kan ses i målingerne: 10,4 W i tomgang og 1,2 W i dvale. Det giver omkring 30,7 kWh om året med vores profil, svarende til {{kr 30,7}} — knap dobbelt så meget som XPS 16 med Intel, der bruger 16,4 kWh. Den har også det største batteri af XPS-modellerne her, 99 Wh, og ENERGY STAR-målingen er lavet med en 130 W-oplader.</p>
<p>Under tungt arbejde trækker begge XPS 16 langt mere end tomgangstallet. Skal maskinen mest bruges til mails, dokumenter og browsing, er Intel-udgaven den mest sparsomme af de to.</p>

<h2>Hvad koster en opladning?</h2>
<p>En fuld opladning af XPS 14 med 70 Wh trækker omkring 0,08 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,080}} ved {{pris_kwh}}. XPS 13 fra 2026 med 52 Wh koster {{oere 0,059}}, og XPS 16 med Nvidia og 99 Wh koster {{oere 0,113}}. Over et år med seks timers brug om dagen koster XPS 13, 14 og 16 med Intel omkring {{kr 14,7}} til {{kr 16,4}}.</p>

<h2>XPS mod MacBook Air, Zenbook og Surface Laptop</h2>
<p>XPS 13 og XPS 14 ligger tæt på <a href="/laptop/asus-zenbook-14/">ASUS Zenbook 14</a>, der bruger 4,1–5,2 W i tomgang. <a href="/laptop/microsoft-surface-laptop/">Microsoft Surface Laptop</a> 13,8" bruger 2,7–2,9 W i 8. udgave, og <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 13" bruger 3,63 W i tomgang og 0,29 W i dvale ifølge Apples egne målinger ved 230 V. Især dvalen skiller dem ad: en MacBook Air bruger omkring en tredjedel af en ny XPS 13 med låget lukket.</p>
<p>Dells, ASUS' og Microsofts tal er målt til ENERGY STAR ved 115 V, Apples ved 230 V. Forskellen i spænding betyder lidt for en bærbar, men tallene er ikke helt sammenlignelige på decimalen.</p>
<ul>
<li>Brug Windows' strømbesparende tilstand og skru ned for lysstyrken.</li>
<li>Luk maskinen ned, hvis den ikke skal bruges i flere dage.</li>
<li>På XPS 16 med Nvidia: vælg strømbesparende grafik, når du ikke spiller eller redigerer video.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Dell XPS 13?",
      answer:
        "XPS 13 fra 2026 (DX13260) bruger 4,2 W i tomgang og 1,0 W i dvale efter Dells ENERGY STAR-målinger. XPS 13 9350 fra 2024 bruger 5,2 W og 0,6 W.",
    },
    {
      question: "Hvor mange watt bruger Dell XPS 16?",
      answer:
        "XPS 16 med Intel Core Ultra X7 bruger 5,4 W i tomgang og 0,7 W i dvale. Udgaven med Nvidia N1x bruger 10,4 W og 1,2 W.",
    },
    {
      question: "Hvad koster det at bruge en Dell XPS om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger XPS 13, 14 og 16 med Intel 14,7–16,4 kWh om året, svarende til {{kr 14,7}} til {{kr 16,4}}. XPS 16 med Nvidia bruger omkring 30,7 kWh.",
    },
    {
      question: "Hvad koster det at oplade en Dell XPS?",
      answer:
        "En fuld opladning trækker 0,06–0,11 kWh fra stikket med et typisk ladetab: {{oere 0,059}} for XPS 13, {{oere 0,080}} for XPS 14 og {{oere 0,113}} for XPS 16 med Nvidia.",
    },
    {
      question: "Bruger den nye XPS 13 mindre strøm end den gamle?",
      answer:
        "I tomgang ja, 4,2 mod 5,2 W. I dvale nej, 1,0 mod 0,6 W. Med seks timers brug om dagen ender de næsten ens, omkring 15–16 kWh om året.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Dell XPS 14 DA14260", url: es("4519450") },
    { name: "ENERGY STAR — Dell XPS 13 DX13260", url: es("4614634") },
    { name: "ENERGY STAR — Dell XPS 13 9350", url: es("4015631") },
    { name: "ENERGY STAR — Dell XPS 16 DA16260", url: es("4519449") },
    { name: "ENERGY STAR — Dell XPS 16 DX16263", url: es("4667834") },
  ],
  variants: [
    { name: "XPS 14 DA14260 Intel Core Ultra X7 (2026)", watts: { off: 0.2, sleep: 0.9, idle: 4.0 }, adapterW: 100, batteryWh: 70, source: 0 },
    { name: "XPS 13 DX13260 Intel (2026)", watts: { off: 0.2, sleep: 1.0, idle: 4.2 }, adapterW: 65, batteryWh: 52, source: 1 },
    { name: "XPS 13 9350 Intel Core Ultra 9 (2024)", watts: { off: 0.3, sleep: 0.6, idle: 5.2 }, adapterW: 60, batteryWh: 55, source: 2 },
    { name: "XPS 16 DA16260 Intel Core Ultra X7 (2026)", watts: { off: 0.2, sleep: 0.7, idle: 5.4 }, adapterW: 100, batteryWh: 70, source: 3 },
    { name: "XPS 16 DX16263 Nvidia N1x (2026)", watts: { off: 0.3, sleep: 1.2, idle: 10.4 }, adapterW: 130, batteryWh: 99, source: 4 },
  ],
  publishDate: "2026-12-28",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Dells egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Dells egne målinger til ENERGY STAR — kort tomgang med skærmen tændt, dvale og slukket — ved 115 V på den konfiguration, Dell har certificeret. Ved 230 V kan tallene afvige lidt. Batteri og oplader er fra samme certificering, og prisen for en opladning er regnet med et typisk ladetab, ikke Dells tal. Kilderne står nederst på siden.",
};

export default dellXps;
