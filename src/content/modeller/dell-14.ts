import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const dell14: ModelData = {
  slug: "dell-14",
  parent: "laptop",
  brand: "Dell",
  name: "Dell 14 og Dell 15",
  released: "2026-08",
  synonyms: [
    "dell 14 strømforbrug",
    "dell 15 strømforbrug",
    "dell bærbar strømforbrug",
    "dell 15 watt",
    "dell 14 d14261 forbrug",
    "dell inspiron strømforbrug",
    "dell 15 batteri wh",
  ],
  title: "Dell 14 og Dell 15 strømforbrug (2026) → watt og kWh om året",
  description:
    "Dells almindelige bærbare Dell 14 og Dell 15 med Intel og AMD: watt i tomgang og dvale fra Dells ENERGY STAR-målinger, kWh om året og prisen for en opladning.",
  intro:
    "Dell 14 med Intel fra august 2026 bruger mindst af Dell-udgaverne her, 3,2 W i tomgang. Den første Dell 15 med Intel Core Ultra 7 fra februar 2026 bruger 6,6 W, dobbelt så meget.",
  content: `<h2>Hvor mange watt bruger Dell 14 og Dell 15?</h2>
<p>I 2025 lagde Dell sine gamle navne som Inspiron og Vostro sammen til tre serier: Dell, Dell Plus og Dell Premium for private, og Dell Pro for virksomheder. Dell 14 og Dell 15 er de almindelige hverdagsmodeller i den billigste af dem og afløseren for Inspiron 14 og 15. Begge findes med Intel og AMD og i to generationer i 2026: en fra februar og en ny fra august. Dell får dem certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>Dell 14 D14261 (aug. 2026)</td><td>Intel</td><td>3,2 W</td><td>0,9 W</td><td>54 Wh</td><td>12,9</td></tr>
<tr><td>Dell 15 D15261 (aug. 2026)</td><td>Intel</td><td>3,5 W</td><td>0,7 W</td><td>54 Wh</td><td>12,3</td></tr>
<tr><td>Dell 15 D15266 (aug. 2026)</td><td>AMD Ryzen 7</td><td>4,6 W</td><td>0,5 W</td><td>54 Wh</td><td>13,4</td></tr>
<tr><td>Dell 14 D14265 (aug. 2026)</td><td>AMD Ryzen 7</td><td>4,9 W</td><td>0,6 W</td><td>54 Wh</td><td>14,7</td></tr>
<tr><td>Dell 14 D14260 (feb. 2026)</td><td>Intel Core Ultra 7 255U</td><td>5,0 W</td><td>0,6 W</td><td>64 Wh</td><td>14,9</td></tr>
<tr><td>Dell 15 D15265 (feb. 2026)</td><td>AMD Ryzen 7</td><td>5,4 W</td><td>0,6 W</td><td>54 Wh</td><td>15,8</td></tr>
<tr><td>Dell 15 D15260 (feb. 2026)</td><td>Intel Core Ultra 7</td><td>6,6 W</td><td>0,5 W</td><td>54 Wh</td><td>17,7</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>
<p>Modelkoden fortæller, hvilken udgave du har: D14 og D15 er skærmstørrelsen, og cifrene bagefter generationen og processoren. I certificeringerne ender Intel-udgavernes koder på 0 eller 1 og AMD-udgavernes på 5 eller 6. Koden står i maskinens specifikationer.</p>

<h2>Augustgenerationen bruger mindre i tomgang</h2>
<p>Den nye generation fra august 2026 bruger mindre med skærmen tændt end den fra februar. Dell 15 med Intel er gået fra 6,6 W (D15260) til 3,5 W (D15261), og AMD-udgaven fra 5,4 W (D15265) til 4,6 W (D15266). Skærmen er samtidig gået fra 15,6" til 15,3". Over et år sparer den nye Dell 15 med Intel omkring 5 kWh med vores profil, svarende til {{kr 5,4}}.</p>
<p>Til gengæld bruger den nye Dell 14 med Intel 0,9 W i dvale, mod 0,6 W for februarudgaven. Med 18 timer i dvale om dagen fylder dvalen 5,9 kWh om året — næsten halvdelen af maskinens forbrug med vores profil. Derfor ender den nye Dell 14 på 12,9 kWh om året, selvom den har det laveste forbrug i tomgang af Dell-udgaverne her.</p>

<h2>Hvad koster en opladning?</h2>
<p>De fleste udgaver har et batteri på 54 Wh, februarudgaven af Dell 14 med Intel et på 64 Wh. En fuld opladning af et batteri på 54 Wh trækker omkring 0,061 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,061}} ved {{pris_kwh}}. Alle certificeringer er lavet med en 65 W USB-C-oplader, og maskinen kan trække op mod den effekt, når den arbejder hårdt og lader samtidig. Over et år ligger alle syv udgaver på 12–18 kWh, svarende til {{kr 12,3}} til {{kr 17,7}}.</p>

<h2>Dell 14 mod Aspire, OmniBook og IdeaPad</h2>
<p>Den nye Dell 14 og Dell 15 med Intel ligger på niveau med <a href="/laptop/acer-aspire/">Acer Aspire</a> med Intel Core 7 350 (3,3–3,6 W) og <a href="/laptop/hp-omnibook/">HP OmniBook 5</a> 14" med Intel Core 7 (3,2 W). De billigste maskiner fra de store mærker bruger altså omtrent det samme, når processoren er af samme generation. Lenovos IdeaPad Slim 3 med Snapdragon ligger lavere med 2,8–2,9 W.</p>
<p>Alle tallene er producenternes egne målinger til ENERGY STAR ved 115 V og kan sammenlignes indbyrdes. De er målt på én konfiguration pr. model; en anden skærm eller mere RAM kan flytte tallene lidt.</p>

<h2>Gode råd til en Dell 14 eller Dell 15</h2>
<ul>
<li>Køb den nyeste generation, hvis du står mellem to ellers ens maskiner; tomgangen er faldet tydeligt fra februar til august 2026.</li>
<li>Luk maskinen ned om natten i stedet for at lukke låget, hvis du har den nye Dell 14 med Intel og 0,9 W i dvale.</li>
<li>Skru ned for lysstyrken, og lad skærmen slukke efter få minutter uden aktivitet.</li>
<li>Tag opladeren ud af stikket, når maskinen er fuldt opladet.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Dell 15?",
      answer:
        "Dell 15 fra august 2026 bruger 3,5 W i tomgang med Intel og 4,6 W med AMD efter Dells ENERGY STAR-målinger. Februarudgaven bruger 5,4–6,6 W. Dvale ligger på 0,5–0,7 W.",
    },
    {
      question: "Hvor mange watt bruger en Dell 14?",
      answer:
        "Dell 14 D14261 med Intel bruger 3,2 W i tomgang og 0,9 W i dvale. AMD-udgaven D14265 bruger 4,9 W og 0,6 W, og februarudgaven D14260 5,0 W og 0,6 W.",
    },
    {
      question: "Hvad koster det at bruge en Dell 14 eller Dell 15 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger de 12–18 kWh om året, svarende til {{kr 12,3}} til {{kr 17,7}} ved månedens elpris.",
    },
    {
      question: "Hvad koster det at oplade en Dell 15?",
      answer:
        "En fuld opladning af batteriet på 54 Wh trækker omkring 0,061 kWh fra stikket med et typisk ladetab og koster {{oere 0,061}} ved månedens elpris.",
    },
    {
      question: "Er Dell 15 det samme som Inspiron 15?",
      answer:
        "Dell 15 er afløseren for Inspiron 15 efter Dells navneskifte i 2025. Tallene her gælder de nye Dell 15-modeller, ikke ældre Inspiron-udgaver.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Dell 14 D14261", url: es("4667754") },
    { name: "ENERGY STAR — Dell 15 D15261", url: es("4667794") },
    { name: "ENERGY STAR — Dell 15 D15266", url: es("4667734") },
    { name: "ENERGY STAR — Dell 14 D14265", url: es("4667674") },
    { name: "ENERGY STAR — Dell 14 D14260", url: es("4528609") },
    { name: "ENERGY STAR — Dell 15 D15265", url: es("4520766") },
    { name: "ENERGY STAR — Dell 15 D15260", url: es("4520765") },
  ],
  variants: [
    { name: "14\" D14261 Intel (aug. 2026)", watts: { off: 0.2, sleep: 0.9, idle: 3.2 }, adapterW: 65, batteryWh: 54, source: 0 },
    { name: "15,3\" D15261 Intel (aug. 2026)", watts: { off: 0.2, sleep: 0.7, idle: 3.5 }, adapterW: 65, batteryWh: 54, source: 1 },
    { name: "15,3\" D15266 AMD Ryzen 7 (aug. 2026)", watts: { off: 0.2, sleep: 0.5, idle: 4.6 }, adapterW: 65, batteryWh: 54, source: 2 },
    { name: "14\" D14265 AMD Ryzen 7 (aug. 2026)", watts: { off: 0.2, sleep: 0.6, idle: 4.9 }, adapterW: 65, batteryWh: 54, source: 3 },
    { name: "14\" D14260 Intel Core Ultra 7 (feb. 2026)", watts: { off: 0.3, sleep: 0.6, idle: 5.0 }, adapterW: 65, batteryWh: 64, source: 4 },
    { name: "15,6\" D15265 AMD Ryzen 7 (feb. 2026)", watts: { off: 0.2, sleep: 0.6, idle: 5.4 }, adapterW: 65, batteryWh: 54, source: 5 },
    { name: "15,6\" D15260 Intel Core Ultra 7 (feb. 2026)", watts: { off: 0.2, sleep: 0.5, idle: 6.6 }, adapterW: 65, batteryWh: 54, source: 6 },
  ],
  publishDate: "2026-12-27",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Dells egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Dells egne målinger til den amerikanske ENERGY STAR-certificering — kort tomgang med skærmen tændt, dvale og slukket — ved 115 V på den konfiguration, Dell har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteri og oplader er fra samme certificering; prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra Dell. Kilderne står nederst på siden.",
};

export default dell14;
