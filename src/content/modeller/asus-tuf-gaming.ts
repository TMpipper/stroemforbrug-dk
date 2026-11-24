import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const asusTufGaming: ModelData = {
  slug: "asus-tuf-gaming",
  parent: "laptop",
  brand: "ASUS",
  name: "ASUS TUF Gaming A14 og A16",
  released: "2026-01",
  synonyms: [
    "asus tuf gaming strømforbrug",
    "asus tuf a16 watt",
    "asus tuf a14 strømforbrug",
    "tuf gaming fa608 watt",
    "tuf gaming fa607 strømforbrug",
    "tuf gaming fa401 forbrug",
    "asus gaming laptop strømforbrug",
  ],
  title: "ASUS TUF Gaming strømforbrug (2026) → watt for A14 og A16",
  description:
    "ASUS TUF Gaming A14 (FA401) og A16 (FA607, FA608): watt i tomgang og dvale fra ENERGY STAR, kWh om året, prisen for en opladning og loftet under spil.",
  intro:
    "TUF Gaming A14 og A16 bruger 6,1–8,8 W i tomgang og 0,7–1,2 W i dvale. Det er omkring dobbelt så meget som en almindelig kontorbærbar, men langt fra det, de trækker under spil.",
  content: `<h2>Hvor mange watt bruger ASUS TUF Gaming?</h2>
<p>TUF Gaming er ASUS' gamingbærbare i den billige ende, under ROG-serien. A-modellerne har AMD-processor: A14 er 14" og A16 er 16". Bærbare har ikke et EU-energimærke, men ASUS får maskinerne certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket. ENERGY STAR kender kun maskinerne på deres modelkoder, for eksempel FA608UMI, mens ASUS sælger dem som TUF Gaming A16 med koden i parentes. Skærmstørrelsen i ENERGY STAR-posterne passer med navnene: 14" for FA401 og 16" for FA607 og FA608.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>A14 FA401E (2026)</td><td>AMD Ryzen AI Max+ 392</td><td>6,7 W</td><td>0,7 W</td><td>73 Wh</td><td>19,3</td></tr>
<tr><td>A14 FA401</td><td>AMD Ryzen 7</td><td>8,8 W</td><td>0,8 W</td><td>73 Wh</td><td>24,5</td></tr>
<tr><td>A16 FA608UMI</td><td>AMD Ryzen 7</td><td>8,0 W</td><td>1,0 W</td><td>70 Wh</td><td>24,1</td></tr>
<tr><td>A16 FA607NUQ</td><td>AMD Ryzen 7</td><td>6,1 W</td><td>0,9 W</td><td>56 Wh</td><td>19,3</td></tr>
<tr><td>A16 FA607N</td><td>AMD Ryzen 7</td><td>8,6 W</td><td>1,2 W</td><td>56 Wh</td><td>26,7</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>A14 fra 2026 uden separat grafikkort</h2>
<p>Den nye TUF Gaming A14 med koden FA401EA har AMD's Ryzen AI Max+ 392 med indbygget Radeon 8060S-grafik ifølge ASUS. Der er altså ikke et separat grafikkort, der skal holdes i gang, og det kan ses i tomgang: 6,7 W mod 8,8 W for den tidligere FA401 med separat grafikkort. Med vores profil sparer den nye omkring 5 kWh om året, svarende til {{kr 5,2}}.</p>
<p>Den ældre FA401 har ifølge ENERGY STAR-posten en MUX-kontakt, der lader grafikkortet sende billedet direkte til skærmen i spil. Det giver flere billeder i sekundet, men står den kontakt på »kun grafikkort«, kører grafikkortet også, når du skriver mail. Brug standardindstillingen, hvor maskinen selv skifter, når du ikke spiller.</p>

<h2>A16: tre udgaver med næsten samme forbrug</h2>
<p>De tre A16-udgaver bruger 6,1–8,6 W i tomgang. FA607NUQ er den sparsomme af dem med 6,1 W, mens FA607N med 8,6 W og den nyere FA608UMI med 8,0 W ligger højere. Forskellen er op til 7 kWh om året med vores profil, svarende til {{kr 7,4}}. ASUS' tal er målt på én bestemt konfiguration af hver kode; med et andet grafikkort eller en anden skærm kan tallene ligge over eller under. ENERGY STAR-posten for FA608UMI dækker også FA608UHI.</p>
<p>Batteriet er 56 Wh i FA607 og 70 Wh i den målte FA608, ifølge ASUS' tekniske specifikationer. Nogle FA608-udgaver har et batteri på 90 Wh. En fuld opladning af 70 Wh trækker omkring 0,08 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,080}} ved {{pris_kwh}}.</p>

<h2>Hvad koster det at spille?</h2>
<p>Tomgangstallene siger ikke, hvad maskinen trækker, når du spiller. Under tung last kan den trække op til opladerens effekt, som er 180–240 W for udgaverne her ifølge ENERGY STAR-posterne. To timers spil ved fuld effekt på en 200 W-oplader er højst 0,4 kWh, svarende til {{kr 0,4}}. Spiller du to timer hver dag, er loftet omkring 146 kWh om året, svarende til {{kr 146}}, men de fleste spil bruger mindre end opladerens maksimum.</p>

<h2>TUF Gaming mod andre bærbare på siden</h2>
<p>I tomgang bruger TUF Gaming mere end almindelige bærbare. <a href="/laptop/asus-vivobook/">ASUS Vivobook</a> bruger 3,2–6,1 W og <a href="/laptop/asus-zenbook-14/">ASUS Zenbook 14</a> 4,1–5,2 W. Mod de mest strømslugende udgaver af <a href="/laptop/lenovo-loq-15/">Lenovo LOQ 15</a> med 14,1–14,4 W klarer TUF Gaming sig derimod godt: FA608UMI bruger omkring 15 kWh mindre om året end LOQ 15IRH11E med vores profil. De sparsomme LOQ-udgaver uden aktivt grafikkort bruger 3,7–4,9 W og dermed mindre end alle TUF-udgaverne her.</p>
<p>ASUS' tal er målt til ENERGY STAR ved 115 V. Ved dansk 230 V kan tallene afvige lidt.</p>

<h2>Sådan sparer du strøm på en TUF Gaming</h2>
<ul>
<li>Vælg en stille eller sparsom ydelsestilstand i ASUS' app, når du ikke spiller.</li>
<li>Lad grafikken stå på automatisk skift i stedet for kun grafikkort.</li>
<li>Skru ned for skærmens opdateringshastighed til kontorarbejde.</li>
<li>Luk maskinen ned om natten; dvalen er 0,7–1,2 W.</li>
</ul>
<p>Se flere modeller og regn din egen ud på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger ASUS TUF Gaming A16?",
      answer:
        "6,1–8,6 W i tomgang med skærmen tændt og 0,9–1,2 W i dvale efter ASUS' ENERGY STAR-målinger, afhængigt af udgaven. Under spil kan den trække op til opladerens effekt.",
    },
    {
      question: "Hvad koster det at bruge en TUF Gaming om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger udgaverne her 19–27 kWh om året, svarende til {{kr 19-27}}. Spil trækker mere.",
    },
    {
      question: "Bruger TUF Gaming A14 fra 2026 mindre strøm?",
      answer:
        "Ja, i tomgang: FA401E bruger 6,7 W mod 8,8 W for den tidligere FA401. Den nye har ikke et separat grafikkort.",
    },
    {
      question: "Hvad koster det at oplade en TUF Gaming A16?",
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
    { name: "ENERGY STAR — ASUS FA401E (TUF Gaming A14, 2026)", url: es("4517795") },
    { name: "ENERGY STAR — ASUS FA401 (TUF Gaming A14)", url: es("4046719") },
    { name: "ENERGY STAR — ASUS FA608UMI (TUF Gaming A16)", url: es("4572734") },
    { name: "ENERGY STAR — ASUS FA607NUQ (TUF Gaming A16)", url: es("4528913") },
    { name: "ENERGY STAR — ASUS FA607N (TUF Gaming A16)", url: es("4479671") },
    { name: "ASUS — TUF Gaming A14 (2026) FA401EA, tekniske specifikationer", url: "https://www.asus.com/us/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a14-2026-fa401ea/techspec/" },
    { name: "ASUS — TUF Gaming A16 (2025) FA608, tekniske specifikationer", url: "https://www.asus.com/us/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a16-2025/techspec/" },
    { name: "ASUS — TUF Gaming A16 (FA607), tekniske specifikationer", url: "https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a16-2024/techspec/" },
  ],
  variants: [
    { name: "A14 FA401E Ryzen AI Max+ 392 (2026)", watts: { off: 0.2, sleep: 0.7, idle: 6.7 }, adapterW: 200, batteryWh: 73, source: 0 },
    { name: "A14 FA401 Ryzen 7", watts: { off: 0.4, sleep: 0.8, idle: 8.8 }, adapterW: 200, batteryWh: 73, source: 1 },
    { name: "A16 FA608UMI Ryzen 7", watts: { off: 0.3, sleep: 1.0, idle: 8.0 }, adapterW: 200, batteryWh: 70, source: 2 },
    { name: "A16 FA607NUQ Ryzen 7", watts: { off: 0.3, sleep: 0.9, idle: 6.1 }, adapterW: 180, batteryWh: 56, source: 3 },
    { name: "A16 FA607N Ryzen 7", watts: { off: 0.3, sleep: 1.2, idle: 8.6 }, adapterW: 240, batteryWh: 56, source: 4 },
  ],
  publishDate: "2027-01-01",
  updated: "2026-11-24",
  measuredBy: "efter ENERGY STAR (ASUS' egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er ASUS' egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, ASUS har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse og opladerens effekt er fra samme certificering og ASUS' tekniske specifikationer, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra ASUS. Kilderne står nederst på siden.",
};

export default asusTufGaming;
