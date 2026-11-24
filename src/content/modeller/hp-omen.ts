import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const hpOmen: ModelData = {
  slug: "hp-omen",
  parent: "laptop",
  brand: "HP",
  name: "HP OMEN 16, 17 og Transcend 14",
  released: "2025-01",
  synonyms: [
    "hp omen strømforbrug",
    "hp omen 16 watt",
    "hp omen 17 strømforbrug",
    "omen transcend 14 watt",
    "hp omen 16-am strømforbrug",
    "hp gaming laptop strømforbrug",
    "hp omen batteri wh",
  ],
  title: "HP OMEN strømforbrug (2026) → OMEN 16, 17 og Transcend 14",
  description:
    "HP OMEN 16, OMEN 17 og OMEN Transcend 14: watt i tomgang og dvale fra ENERGY STAR, kWh om året, prisen for en opladning og hvad gaming koster i strøm.",
  intro:
    "HP's OMEN-bærbare bruger 6,8–9,4 W i tomgang og 0,9–1,2 W i dvale. OMEN 16 med Intel fra 2025 er den sparsomme af de fire udgaver, OMEN 17 den mest strømkrævende.",
  content: `<h2>Hvor mange watt bruger HP OMEN?</h2>
<p>OMEN er HP's gamingserie, over den billigere Victus-serie. Bærbare har ikke et EU-energimærke, men HP får maskinerne certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket. HP registrerer maskinerne under produktnavn og en kort kode, for eksempel OMEN 16 (16-am), og samme kode står i det fulde modelnummer på maskinen. Vi har fundet fire OMEN-udgaver i ENERGY STAR: OMEN 16 med Intel, OMEN 16 med AMD, OMEN 17 og den tynde OMEN Transcend 14.</p>
<p>Victus-serien står ikke i ENERGY STAR-databasen, så for den har vi ingen officielle forbrugstal. Har du en Victus, er OMEN 16 det nærmeste sammenligningsgrundlag her, men tallene kan ikke overføres direkte.</p>
<table>
<thead><tr><th>Model</th><th>Processor (målt)</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>OMEN 16 (16-am, 2025)</td><td>Intel Core Ultra 9 255H</td><td>6,8 W</td><td>1,0 W</td><td>83 Wh</td><td>21,5</td></tr>
<tr><td>OMEN Transcend 14 (14t-fb)</td><td>Intel Core Ultra 9 285H</td><td>7,1 W</td><td>0,9 W</td><td>71 Wh</td><td>21,5</td></tr>
<tr><td>OMEN 16 (16-ap, 2026)</td><td>AMD Ryzen AI 5 340</td><td>8,4 W</td><td>1,2 W</td><td>83 Wh</td><td>26,3</td></tr>
<tr><td>OMEN 17 (17-db)</td><td>AMD Ryzen 7 8845H</td><td>9,4 W</td><td>1,1 W</td><td>83 Wh</td><td>27,8</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>OMEN 16: Intel eller AMD</h2>
<p>OMEN 16 med Intel (16-am) bruger 6,8 W i tomgang og 1,0 W i dvale. Den nyere AMD-udgave (16-ap) bruger 8,4 og 1,2 W. Med vores profil er forskellen omkring 5 kWh om året, svarende til {{kr 4,8}}. ENERGY STAR-posten for 16-ap dækker også HP's arbejdsstation ZBook 6 G2a, som er bygget på samme platform, og den målte konfiguration har en Ryzen AI 5 340. Har din OMEN 16 en kraftigere processor, kan tomgangstallet ligge lidt anderledes.</p>
<p>Posten for 16-am dækker også OMEN 16 Slim (16-an). Begge OMEN 16-udgaver har et batteri på 83 Wh ifølge ENERGY STAR og et separat grafikkort, der kan slå over på processorens grafik, når der ikke spilles. Sådan leverer HP dem, og det er en del af forklaringen på, at tomgangstallene ikke er højere.</p>

<h2>OMEN 17 og Transcend 14</h2>
<p>OMEN 17 har en 17,3"-skærm og bruger 9,4 W i tomgang, den højeste værdi af de fire OMEN-udgaver her. Det er omkring 28 kWh om året med vores profil, svarende til {{kr 28}}. Den har også den største skærm af de fire.</p>
<p>OMEN Transcend 14 er en tynd 14"-maskine med en skærm på 2880 × 1800 pixel og et batteri på 71 Wh. Den bruger 7,1 W i tomgang og 0,9 W i dvale, næsten det samme som OMEN 16 med Intel. Over et år ender de to på samme forbrug, omkring 21,5 kWh, svarende til {{kr 21,5}}.</p>

<h2>Hvad koster gaming og opladning?</h2>
<p>Tomgangstallene siger ikke, hvad en OMEN trækker under spil. Under tung last kan maskinen trække op til opladerens effekt, som står på selve opladeren; HP's ENERGY STAR-poster oplyser den ikke. Loftet regner du selv ud som opladerens watt gange timerne. Til sammenligning har <a href="/laptop/asus-tuf-gaming/">ASUS TUF Gaming</a> A14 en oplader på 200 W ifølge ENERGY STAR, og to timers spil ved fuld effekt på den er højst 0,4 kWh, svarende til {{kr 0,4}}. De fleste spil bruger mindre end opladerens maksimum.</p>
<p>En fuld opladning af batteriet på 83 Wh trækker omkring 0,09 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,094}} ved {{pris_kwh}}.</p>

<h2>OMEN mod andre gamingbærbare på siden</h2>
<p>OMEN-udgaverne ligger tæt på <a href="/laptop/asus-tuf-gaming/">ASUS TUF Gaming</a>, der bruger 6,1–8,8 W i tomgang. De bruger markant mindre end de udgaver af <a href="/laptop/lenovo-loq-15/">Lenovo LOQ 15</a>, hvor grafikkortet kører med i tomgang (14,1–14,4 W): OMEN 16 med Intel bruger omkring 18 kWh mindre om året end LOQ 15IRH11E. Mod en almindelig bærbar som <a href="/laptop/hp-omnibook/">HP OmniBook 5</a> med 3,2–7,5 W bruger OMEN dog stadig mere.</p>
<p>HP's tal er målt til ENERGY STAR ved 115 V og på én bestemt konfiguration af hver model. Ved dansk 230 V og med et andet grafikkort eller en anden skærm kan tallene ligge lidt over eller under.</p>

<h2>Sådan sparer du strøm på en OMEN</h2>
<ul>
<li>Brug en stille eller balanceret ydelsestilstand i HP's OMEN-app, når du ikke spiller.</li>
<li>Lad grafikken skifte automatisk i stedet for at låse den til grafikkortet.</li>
<li>Lås billedhastigheden i spil til skærmens opdateringshastighed.</li>
<li>Luk maskinen ned om natten i stedet for dvale; dvalen er 0,9–1,2 W.</li>
</ul>
<p>Se flere modeller og regn din egen ud på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger HP OMEN 16?",
      answer:
        "Efter HP's ENERGY STAR-målinger 6,8 W i tomgang og 1,0 W i dvale med Intel (16-am) og 8,4 og 1,2 W med AMD (16-ap).",
    },
    {
      question: "Hvad koster det at bruge en HP OMEN om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger OMEN-udgaverne her 21,5–27,8 kWh om året, svarende til {{kr 21,5-27,8}}. Spil trækker mere.",
    },
    {
      question: "Hvad bruger HP OMEN 17?",
      answer:
        "9,4 W i tomgang og 1,1 W i dvale efter HP's ENERGY STAR-måling. Det er omkring 28 kWh om året med seks timer tændt om dagen.",
    },
    {
      question: "Hvad koster det at oplade en HP OMEN?",
      answer:
        "En fuld opladning af batteriet på 83 Wh trækker omkring 0,09 kWh fra stikket, regnet med et typisk ladetab. Det koster {{oere 0,094}} ved månedens elpris.",
    },
    {
      question: "Findes der officielle tal for HP Victus?",
      answer:
        "Vi har ikke fundet Victus-bærbarene i ENERGY STAR-databasen, og bærbare har ikke et EU-energimærke. Derfor viser vi kun OMEN-modellerne her.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — HP OMEN 16 Gaming Laptop (16-am)", url: es("4510608") },
    { name: "ENERGY STAR — HP OMEN Transcend 14 Gaming Laptop (14t-fb)", url: es("4497516") },
    { name: "ENERGY STAR — HP OMEN 16 Gaming Laptop (16-ap)", url: es("4481151") },
    { name: "ENERGY STAR — HP OMEN 17 Gaming Laptop (17-db)", url: es("4481150") },
  ],
  variants: [
    { name: "OMEN 16 (16-am) Intel Core Ultra 9 (2025)", watts: { off: 0.2, sleep: 1.0, idle: 6.8 }, batteryWh: 83, source: 0 },
    { name: "OMEN Transcend 14 (14t-fb) Intel Core Ultra 9", watts: { off: 0.4, sleep: 0.9, idle: 7.1 }, batteryWh: 71, source: 1 },
    { name: "OMEN 16 (16-ap) AMD Ryzen AI 5 (2026)", watts: { off: 0.4, sleep: 1.2, idle: 8.4 }, batteryWh: 83, source: 2 },
    { name: "OMEN 17 (17-db) AMD Ryzen 7", watts: { off: 0.4, sleep: 1.1, idle: 9.4 }, batteryWh: 83, source: 3 },
  ],
  publishDate: "2027-01-02",
  updated: "2026-11-24",
  measuredBy: "efter ENERGY STAR (HP's egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er HP's egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, HP har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse er fra samme certificering, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra HP. Kilderne står nederst på siden.",
};

export default hpOmen;
