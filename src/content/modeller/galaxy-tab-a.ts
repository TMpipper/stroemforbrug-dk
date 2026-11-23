import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const galaxyTabA: ModelData = {
  slug: "galaxy-tab-a",
  parent: "ipad",
  brand: "Samsung",
  name: "Samsung Galaxy Tab A11+ og A9",
  released: "2025-10",
  synonyms: [
    "galaxy tab a11 strømforbrug",
    "galaxy tab a11+ strømforbrug",
    "galaxy tab a9 strømforbrug",
    "galaxy tab a9+ watt",
    "samsung tab a opladning pris",
    "billig android tablet strømforbrug",
    "sm-x230 strømforbrug",
    "børnetablet strømforbrug",
  ],
  title: "Galaxy Tab A strømforbrug (2026) → A11+, A9+ og A9 i watt",
  description:
    "Samsungs billige tablets Galaxy Tab A11+, A9+ og A9: watt i tomgang og dvale fra ENERGY STAR, batteriets Wh, prisen pr. opladning og EU-mærket for A11.",
  intro:
    "Den lille Galaxy Tab A9 bruger kun 1,3 W i tomgang og er den mest sparsomme i tomgang af de Samsung-tablets, vi har ENERGY STAR-tal for. A11+ og A9+ har samme batteri, men A11+ bruger lidt mindre med skærmen tændt.",
  content: `<h2>Hvor mange watt bruger en Galaxy Tab A?</h2>
<p>Galaxy Tab A er Samsungs billige tablet-serie, som mange køber til børnene, til køkkenet eller til avis og streaming i sofaen. Serien findes i to størrelser: en lille på 8,7" (Galaxy Tab A9 og A11) og en større på 11" (Galaxy Tab A9+ og A11+). Samsung har fået Wi-Fi-udgaverne af A11+, A9+ og A9 certificeret efter den amerikanske ENERGY STAR, som måler forbruget med skærmen tændt i tomgang, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Skærm</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th></tr></thead>
<tbody>
<tr><td>Galaxy Tab A11+ (SM-X230, 2025)</td><td>11"</td><td>2,1 W</td><td>0,3 W</td><td>26,3 Wh</td></tr>
<tr><td>Galaxy Tab A9+ (SM-X210, 2023)</td><td>11"</td><td>2,5 W</td><td>0,3 W</td><td>26,3 Wh</td></tr>
<tr><td>Galaxy Tab A9 (SM-X110, 2023)</td><td>8,7"</td><td>1,3 W</td><td>0,2 W</td><td>19,0 Wh</td></tr>
</tbody>
</table>
<p>ENERGY STAR-tallet for A11+ er registreret under den amerikanske udgave SM-X238U, som ifølge certificeringen dækker SM-X230. Forskellen mellem A11+ og A9+ er lille: samme batteri og samme skærmstørrelse, men den nye chip i A11+ bruger 0,4 W mindre i tomgang.</p>

<h2>Hvad koster det at oplade en Galaxy Tab A?</h2>
<p>A11+ og A9+ har begge et batteri på 26,3 Wh, og A9 et på 19,0 Wh, ifølge Samsungs oplysninger til ENERGY STAR. Regnet med et typisk ladetab på 12 % trækker en fuld opladning omkring 0,030 kWh for de store modeller og 0,022 kWh for A9. Det svarer til {{oere 0,030}} og {{oere 0,022}} ved månedens elpris på {{pris_kwh}}.</p>
<p>Med fire fulde opladninger om ugen bliver det omkring 6,2 kWh om året for A11+ og A9+ og 4,5 kWh for A9, svarende til {{kr 6,2}} og {{kr 4,5}}. Har familien tre tablets, der hver lades fire gange om ugen, er det stadig under 20 kWh om året. Ladetabet er vores skøn, ikke et tal fra Samsung.</p>

<h2>Galaxy Tab A11: EU-mærket, men ingen Wh</h2>
<p>Den lille Galaxy Tab A11 på 8,7" (SM-X130) fra september 2025 er ikke certificeret efter ENERGY STAR, og Samsung oplyser ikke batteriets størrelse i Wh. Derfor står den ikke i tabellen ovenfor, og vi regner ikke en pris pr. opladning for den. I EU's produktdatabase EPREL står den med et batteri på 4.980 mAh, en batteritid på godt 103 timer i EU's standardtest og energiklasse C.</p>
<p>Klasse C er bedre end A11+, der har klasse E, og langt bedre end Samsungs dyre S-modeller, som har klasse G. Energiklassen måler energien pr. time i testen, og en lille skærm med lav opløsning bruger lidt. Batteriet i A11 er mindre end i A9, der har 19,0 Wh, så en opladning koster højst det samme som for A9, {{oere 0,022}} ved månedens elpris.</p>

<h2>Galaxy Tab A sammenlignet med iPad</h2>
<p>Den store A11+ ligger lidt under Apples <a href="/ipad/ipad-a16/">iPad (A16)</a>, som har et batteri på 28,93 Wh og bruger 2,89 W i tomgang. A11+ har 26,3 Wh og bruger 2,1 W. Med vores profil bliver det 6,2 mod 6,9 kWh om året — en forskel på omkring {{kr 0,7}} om året. Den lille A9 svarer til <a href="/ipad/ipad-mini/">iPad mini</a>, der har et batteri på 18,9 Wh og bruger 1,52–1,89 W i tomgang.</p>
<p>Husk, at Apple måler ved 230 V, mens Samsungs tal er målt til ENERGY STAR ved 115 V. For tablets med små opladere er forskellen normalt lille. Vil du se de dyrere Samsung-modeller, så kig på <a href="/ipad/galaxy-tab-s11/">Galaxy Tab S11</a>, som har et batteri på 31,7 Wh i 11" udgaven og derfor koster lidt mere pr. opladning.</p>

<h2>Gode råd til en billig tablet</h2>
<ul>
<li>Lad tabletten i et køligt rum, ikke under en dyne eller i solen. Varme slider mere på batteriet end selve opladningen.</li>
<li>Brug batteribeskyttelsen i Samsungs indstillinger, så opladningen stopper ved 80–85 %. Det er især nyttigt på en børnetablet, der står i opladeren hver nat.</li>
<li>En ældre A9 eller A9+, der stadig fungerer, er der ingen strømgrund til at udskifte; A11+ sparer under 1 kWh om året.</li>
<li>Opladeren må gerne sidde i stikket; en moderne USB-C-oplader bruger meget lidt uden last.</li>
</ul>
<p>Strømmen til en tablet er en af de mindste poster i hjemmet. Læs mere om <a href="/ipad/">tablets og iPads generelt</a>, eller se, hvad <a href="/standby/">standby i hjemmet</a> koster til sammenligning.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en Galaxy Tab A11+?",
      answer:
        "2,1 W i tomgang med skærmen tændt og 0,3 W i dvale ifølge Samsungs målinger til ENERGY STAR. Forgængeren A9+ bruger 2,5 W og 0,3 W.",
    },
    {
      question: "Hvad koster det at oplade en Galaxy Tab A?",
      answer:
        "En fuld opladning trækker omkring 0,030 kWh for A11+ og A9+ og 0,022 kWh for A9, regnet med et typisk ladetab. Det koster {{oere 0,030}} og {{oere 0,022}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger Galaxy Tab A11?",
      answer:
        "Samsung oplyser ikke batteriets Wh for den lille A11, men EPREL viser et batteri på 4.980 mAh og energiklasse C. Batteriet er mindre end i A9, så en opladning koster højst {{oere 0,022}}.",
    },
    {
      question: "Hvor meget strøm bruger en Galaxy Tab A om året?",
      answer:
        "Med fire fulde opladninger om ugen omkring 6,2 kWh for A11+ og A9+ og 4,5 kWh for A9, svarende til {{kr 6,2}} og {{kr 4,5}}.",
    },
    {
      question: "Bruger Galaxy Tab A mindre strøm end en iPad?",
      answer:
        "Lidt. A11+ bruger 2,1 W i tomgang og har et batteri på 26,3 Wh; iPad (A16) bruger 2,89 W og har 28,93 Wh. Over et år er forskellen under 1 kWh.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Samsung SM-X238U / SM-X230 (Galaxy Tab A11+)", url: es("4510313") },
    { name: "ENERGY STAR — Samsung SM-X210 (Galaxy Tab A9+)", url: es("4499000") },
    { name: "ENERGY STAR — Samsung SM-X110 (Galaxy Tab A9)", url: es("4510123") },
    { name: "EPREL — Samsung SM-X230 (Galaxy Tab A11+), EU's energimærke for tablets", url: epreltab("2472907") },
    { name: "EPREL — Samsung SM-X130 (Galaxy Tab A11), EU's energimærke for tablets", url: epreltab("2417657") },
  ],
  variants: [
    { name: "11\" A11+ (SM-X230)", watts: { off: 0.3, sleep: 0.3, idle: 2.1 }, batteryWh: 26.3, energyClass: "E", source: 0 },
    { name: "11\" A9+ (SM-X210)", watts: { off: 0.2, sleep: 0.3, idle: 2.5 }, adapterW: 15, batteryWh: 26.3, source: 1 },
    { name: "8,7\" A9 (SM-X110)", watts: { off: 0.2, sleep: 0.2, idle: 1.3 }, adapterW: 15, batteryWh: 19, source: 2 },
  ],
  publishDate: "2026-12-25",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Samsungs egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Watt, batteriets Wh og opladeren er Samsungs egne oplysninger til ENERGY STAR, målt ved 115 V på Wi-Fi-udgaverne; A11+ er certificeret under den amerikanske SM-X238U, som dækker SM-X230. Energiklassen for A11+ er fra EU's database EPREL. Prisen pr. opladning er regnet med et typisk ladetab på 12 %, ikke Samsungs tal. Kilderne står nederst på siden.",
};

export default galaxyTabA;
