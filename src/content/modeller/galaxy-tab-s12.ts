import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const galaxyTabS12: ModelData = {
  slug: "galaxy-tab-s12",
  parent: "ipad",
  brand: "Samsung",
  name: "Samsung Galaxy Tab S12",
  released: "2026-10",
  synonyms: [
    "galaxy tab s12 strømforbrug",
    "galaxy tab s12 ultra strømforbrug",
    "galaxy tab s12+ watt",
    "galaxy tab s12 plus forbrug",
    "sm-x840 strømforbrug",
    "sm-x940 watt",
    "galaxy tab s12 opladning",
    "galaxy tab s12 batteri wh",
  ],
  title: "Galaxy Tab S12 strømforbrug (2026) → S12+ og S12 Ultra",
  description:
    "Galaxy Tab S12+ og S12 Ultra fra oktober 2026: watt i tomgang og dvale efter ENERGY STAR, batteriets Wh, prisen for én opladning og forbruget om året.",
  intro:
    "S12 Ultra har samme batteri som S11 Ultra, men bruger 4,1 W i tomgang mod forgængerens 2,4 W. Over et år koster de to det samme at lade, fordi det er batteriet, der tæller.",
  content: `<h2>Hvor mange watt bruger Galaxy Tab S12?</h2>
<p>Galaxy Tab S12-serien kom i oktober 2026 og består af to modeller: Galaxy Tab S12+ med 12,6" skærm (Wi-Fi-modellen hedder SM-X840) og Galaxy Tab S12 Ultra med 14,6" skærm (SM-X940). Der er ingen almindelig S12 i 11" denne gang; den mindste topmodel fra Samsung er stadig <a href="/ipad/galaxy-tab-s11/">Galaxy Tab S11</a>. Samsung har fået begge S12-modeller certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles med skærmen tændt i kort tomgang, i dvale og slukket.</p>
<p>Ifølge certificeringen bruger S12+ 3,5 W i tomgang og 0,3 W i dvale, og S12 Ultra 4,1 W i tomgang og 0,4 W i dvale. ENERGY STAR-tallet for S12+ er registreret under den amerikanske udgave SM-X848U, som Samsung oplyser er identisk med SM-X840 bortset fra modelnummeret.</p>
<table>
<thead><tr><th>Model</th><th>Skærm</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>Batteritid i EU's test</th></tr></thead>
<tbody>
<tr><td>Galaxy Tab S12+ (SM-X840)</td><td>12,6"</td><td>3,5 W</td><td>0,3 W</td><td>40,5 Wh</td><td>80,6 timer</td></tr>
<tr><td>Galaxy Tab S12 Ultra (SM-X940)</td><td>14,6"</td><td>4,1 W</td><td>0,4 W</td><td>44,4 Wh</td><td>88,9 timer</td></tr>
<tr><td>Galaxy Tab S11 Ultra (SM-X930, 2025)</td><td>14,6"</td><td>2,4 W</td><td>0,4 W</td><td>44,4 Wh</td><td>94,9 timer</td></tr>
</tbody>
</table>

<h2>Bruger den nye Ultra mere end den gamle?</h2>
<p>I tomgang, ja. S12 Ultra bruger 4,1 W med skærmen tændt, hvor S11 Ultra bruger 2,4 W i den samme type måling. EU's batteritest peger samme vej: S12 Ultra holder 88,9 timer pr. opladning mod knap 95 timer for forgængeren, selvom batteriet er lige stort. Den nye model har en kraftigere chip og en lysere skærm, og det koster lidt på batteriet.</p>
<p>For elregningen gør det dog næsten ingen forskel. En tablet lades op, når batteriet er brugt, og batteriet er det samme. Bruger du S12 Ultra lige så mange timer som S11 Ultra, skal du lade den lidt oftere — omkring 7 % flere opladninger — men hver opladning koster få øre. Over et år er forskellen under 1 kWh med normal brug.</p>

<h2>Hvad koster det at oplade en Galaxy Tab S12?</h2>
<p>S12+ har et batteri på 40,5 Wh og S12 Ultra på 44,4 Wh ifølge Samsungs oplysninger til ENERGY STAR; i EPREL står de som 10.392 og 11.374 mAh. Regnet med et typisk ladetab på 12 % trækker en fuld opladning omkring 0,046 kWh for S12+ og 0,050 kWh for S12 Ultra, svarende til {{oere 0,046}} og {{oere 0,050}} ved {{pris_kwh}}.</p>
<p>Med fire fulde opladninger om ugen bruger S12+ omkring 9,6 kWh om året og S12 Ultra omkring 10,5 kWh, svarende til {{kr 9,6}} og {{kr 10,5}}. Begge ligger i den høje ende blandt tablets på siden, fordi batterierne er store, men langt under en <a href="/laptop/">bærbar computer</a>, som ofte bruger 10–20 kWh om året med seks timers brug om dagen.</p>

<h2>Energimærke og levetid</h2>
<p>Begge S12-modeller har energiklasse G på EU's energimærke for tablets, ligesom S11-serien. Klassen afspejler energien pr. time i EU's standardtest, og store, lyse skærme trækker ned. EPREL oplyser reparationsklasse C, vandtæthed efter IP68 og mindst fem års softwareopdateringer. Samsung angiver en oplader på mindst 20 W til begge, og ENERGY STAR-målingen er lavet med en 45 W-oplader.</p>
<p>En tablet i denne prisklasse er en investering, og det er levetiden, der betyder noget for både økonomien og miljøet. Har du en S11 Ultra eller en S10 Ultra, der fungerer, er der ingen strømgrund til at skifte.</p>

<h2>S12 sammenlignet med iPad Air og iPad Pro</h2>
<p>Apples største tablets har mindre batterier end S12-serien: <a href="/ipad/ipad-air-m4/">iPad Air M4</a> 13" har 36,59 Wh og bruger 3,5 W i tomgang, og iPad Pro M5 13" har 38,99 Wh. Med vores profil bruger de 8,7 og 9,2 kWh om året mod 9,6 kWh for S12+ og 10,5 kWh for S12 Ultra. Apple måler ved 230 V og Samsung ved de 115 V, som ENERGY STAR kræver, så sammenligningen er ikke helt præcis, men størrelsesordenen holder.</p>
<ul>
<li>Brug automatisk lysstyrke og mørk tilstand; AMOLED-skærmen bruger mindre på mørke flader.</li>
<li>Slå batteribeskyttelse til, så opladningen stopper før 100 %.</li>
<li>Lad, når det passer dig — en opladning koster få øre uanset timen.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Galaxy Tab S12 Ultra?",
      answer:
        "4,1 W i tomgang med skærmen tændt og 0,4 W i dvale ifølge Samsungs målinger til ENERGY STAR. S12+ bruger 3,5 W og 0,3 W.",
    },
    {
      question: "Hvad koster det at oplade en Galaxy Tab S12?",
      answer:
        "En fuld opladning trækker omkring 0,046 kWh for S12+ og 0,050 kWh for S12 Ultra, regnet med et typisk ladetab — {{oere 0,046}} og {{oere 0,050}} ved månedens elpris.",
    },
    {
      question: "Bruger Galaxy Tab S12 Ultra mere strøm end S11 Ultra?",
      answer:
        "I tomgang ja, 4,1 mod 2,4 W, og den holder lidt kortere i EU's batteritest. Batteriet er lige stort, så prisen pr. opladning er den samme.",
    },
    {
      question: "Hvor meget strøm bruger en Galaxy Tab S12 om året?",
      answer:
        "Med fire fulde opladninger om ugen omkring 9,6 kWh for S12+ og 10,5 kWh for S12 Ultra, svarende til {{kr 9,6}} og {{kr 10,5}}.",
    },
    {
      question: "Findes der en almindelig Galaxy Tab S12?",
      answer:
        "Nej. Serien består af S12+ (12,6 tommer) og S12 Ultra (14,6 tommer). Den mindste Samsung-topmodel er stadig Galaxy Tab S11 i 11 tommer.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Samsung SM-X848U / SM-X840 (Galaxy Tab S12+)", url: es("4654474") },
    { name: "ENERGY STAR — Samsung SM-X940 (Galaxy Tab S12 Ultra)", url: es("4654934") },
    { name: "EPREL — Samsung SM-X840 (Galaxy Tab S12+), EU's energimærke for tablets", url: epreltab("2690295") },
    { name: "EPREL — Samsung SM-X940 (Galaxy Tab S12 Ultra), EU's energimærke for tablets", url: epreltab("2690290") },
    { name: "EPREL — Samsung SM-X930 (Galaxy Tab S11 Ultra), EU's energimærke for tablets", url: epreltab("2409889") },
  ],
  variants: [
    { name: "12,6\" S12+ (SM-X840)", watts: { off: 0.2, sleep: 0.3, idle: 3.5 }, adapterW: 45, batteryWh: 40.5, energyClass: "G", source: 0 },
    { name: "14,6\" S12 Ultra (SM-X940)", watts: { off: 0.2, sleep: 0.4, idle: 4.1 }, adapterW: 45, batteryWh: 44.4, energyClass: "G", source: 1 },
  ],
  publishDate: "2026-12-24",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Samsungs egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Watt, batteriets Wh og opladeren er Samsungs egne oplysninger til ENERGY STAR, målt ved 115 V; S12+ er certificeret under den amerikanske SM-X848U, som Samsung oplyser er identisk med SM-X840. Energiklasse og batteritid er fra EU's database EPREL. Prisen pr. opladning er regnet med et typisk ladetab på 12 %, ikke Samsungs tal. Kilderne står nederst på siden.",
};

export default galaxyTabS12;
