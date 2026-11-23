import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const lenovoTab: ModelData = {
  slug: "lenovo-tab",
  parent: "ipad",
  brand: "Lenovo",
  name: "Lenovo Tab, Tab M11 og Tab Plus",
  released: "2026-06",
  synonyms: [
    "lenovo tab strømforbrug",
    "lenovo tab m11 strømforbrug",
    "lenovo tab plus gen 2 watt",
    "lenovo tab one strømforbrug",
    "lenovo tab m11 opladning",
    "billig lenovo tablet forbrug",
    "tb330fu strømforbrug",
  ],
  title: "Lenovo Tab strømforbrug (2026) → Tab, Tab M11 og Tab Plus",
  description:
    "Lenovos billige tablets Lenovo Tab, Tab One, Tab M11 og Tab Plus Gen 2: watt efter ENERGY STAR, batteriets Wh, prisen pr. opladning og energiklassen.",
  intro:
    "Tab Plus Gen 2 har det største batteri af modellerne her, men bruger kun 1,6 W i tomgang og holder 139 timer i EU's batteritest — længst af alle de tablets, vi har EU-tal for.",
  content: `<h2>Hvor mange watt bruger en Lenovo Tab?</h2>
<p>Lenovos tablets uden »Idea« og »Yoga« i navnet er de billige modeller til streaming, lektier og videoopkald. Her ser vi på fire af dem: den lille Lenovo Tab One på 8,7" (TB305FU), Lenovo Tab på 10,1" (TB311FU), Tab M11 på 11" (TB330FU) og Tab Plus Gen 2 på 12,1" (TB355FU) fra juni 2026, der er bygget til musik og film med ekstra højttalere. Lenovo har fået alle fire certificeret efter den amerikanske ENERGY STAR. Målingerne viser forbruget med skærmen tændt i tomgang, i dvale og slukket.</p>
<table>
<thead><tr><th>Model</th><th>Skærm</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>Energiklasse</th><th>Batteritid i EU's test</th></tr></thead>
<tbody>
<tr><td>Tab One (TB305FU)</td><td>8,7"</td><td>1,3 W</td><td>0,1 W</td><td>19,6 Wh</td><td>D</td><td>81 timer</td></tr>
<tr><td>Lenovo Tab (TB311FU)</td><td>10,1"</td><td>2,0 W</td><td>0,2 W</td><td>19,6 Wh</td><td>D</td><td>82 timer</td></tr>
<tr><td>Tab M11 (TB330FU)</td><td>11"</td><td>2,8 W</td><td>0,2 W</td><td>26,7 Wh</td><td>F</td><td>76 timer</td></tr>
<tr><td>Tab Plus Gen 2 (TB355FU)</td><td>12,1"</td><td>1,6 W</td><td>0,2 W</td><td>39,1 Wh</td><td>E</td><td>139 timer</td></tr>
</tbody>
</table>
<p>Tallene er små. Selv Tab M11, der bruger mest i tomgang af de fire, bruger 2,8 W, hvor en almindelig computerskærm ofte bruger 15–25 W. Det er batteriets størrelse og hvor tit du lader, der afgør forbruget over et år.</p>

<h2>Hvad koster det at oplade en Lenovo Tab?</h2>
<p>Tab One og Lenovo Tab har et batteri på 19,6 Wh (5.000 mAh), Tab M11 på 26,7 Wh (6.820 mAh) og Tab Plus Gen 2 på 39,1 Wh (10.000 mAh) ifølge Lenovos oplysninger til ENERGY STAR og EPREL. Regnet med et typisk ladetab på 12 % trækker en fuld opladning omkring 0,022 kWh for de små, 0,030 kWh for Tab M11 og 0,044 kWh for Tab Plus Gen 2. Det svarer til {{oere 0,022}}, {{oere 0,030}} og {{oere 0,044}} ved månedens elpris på {{pris_kwh}}.</p>
<p>Med fire fulde opladninger om ugen bliver det omkring 4,6 kWh om året for Tab One og Lenovo Tab, 6,3 kWh for Tab M11 og 9,2 kWh for Tab Plus Gen 2, svarende til {{kr 4,6}}, {{kr 6,3}} og {{kr 9,2}}. Men profilen er den samme for alle, og i virkeligheden lades Tab Plus Gen 2 sjældnere: med 139 timers batteritid i EU's test mod 76 for Tab M11 rækker en opladning næsten dobbelt så langt.</p>

<h2>Batteritid og energiklasse</h2>
<p>Tab Plus Gen 2 skiller sig ud. Den har det største batteri af Lenovos billige tablets her, men samtidig det laveste forbrug i tomgang efter Tab One, og den holder 139 timer pr. opladning i EU's standardtest — længere end Idea Tab Pro og alle de iPads og Galaxy Tabs, vi har modelsider for. Den har energiklasse E. Tab M11 fra december 2023 er den ældste model her og har klasse F; den bruger mere strøm pr. time og holder kortest.</p>
<p>Alle fire har reparationsklasse A i EPREL og mindst syv års softwareopdateringer ifølge Lenovo. For en billig tablet er det usædvanligt, og det er godt nyt for dem, der vil bruge den længe. En tablet, der bliver brugt i mange år, sparer mere end nogen strømindstilling.</p>

<h2>Lenovo Tab sammenlignet med andre tablets</h2>
<p>Lenovo Tab og Tab One svarer i batteri til <a href="/ipad/ipad-mini/">iPad mini</a> og Samsungs lille Galaxy Tab A9 (18,9–19,6 Wh) og koster det samme at lade. Tab M11 har samme batteri som den almindelige <a href="/ipad/lenovo-idea-tab/">Lenovo Idea Tab</a>, men bruger mindre i dvale: 0,2 mod 0,8 W. Tab Plus Gen 2 har samme batteri som Idea Tab Pro og koster derfor lige så meget pr. opladning, men bruger halvt så meget i tomgang.</p>
<p>Vil du sammenligne med Samsung, så har <a href="/ipad/galaxy-tab-a/">Galaxy Tab A11+</a> et batteri på 26,3 Wh og bruger 2,1 W i tomgang — tæt på Tab M11. Lenovos og Samsungs tal er begge målt til ENERGY STAR ved 115 V, så de kan sammenlignes direkte; Apple måler selv ved 230 V.</p>

<h2>Gode råd til en billig tablet</h2>
<ul>
<li>Lad tabletten ligge i dvale frem for at slukke den; i dvale bruger de fire modeller 0,1–0,2 W, under 2 kWh om året.</li>
<li>Undgå at lade den i varme omgivelser; varme slider mere på batteriet end selve opladningen.</li>
<li>Brug en oplader fra producenten eller et kendt mærke. ENERGY STAR-målingerne er lavet med opladere på 10–45 W, og en kraftigere oplader lader hurtigere uden at bruge flere kWh.</li>
<li>Skru ned for lysstyrken, når tabletten bruges til film om aftenen.</li>
</ul>
<p>Læs mere om <a href="/ipad/">tablets og iPads generelt</a>, eller se, hvad <a href="/mobil-opladning/">opladning af en mobil</a> koster.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo Tab M11?",
      answer:
        "2,8 W i tomgang med skærmen tændt og 0,2 W i dvale ifølge Lenovos målinger til ENERGY STAR. Lenovo Tab (TB311FU) bruger 2,0 W og 0,2 W.",
    },
    {
      question: "Hvad koster det at oplade en Lenovo Tab?",
      answer:
        "En fuld opladning af Lenovo Tab eller Tab One trækker omkring 0,022 kWh og koster {{oere 0,022}} ved månedens elpris. Tab M11 koster {{oere 0,030}} og Tab Plus Gen 2 {{oere 0,044}}.",
    },
    {
      question: "Hvor længe holder batteriet i Lenovo Tab Plus Gen 2?",
      answer:
        "139 timer pr. opladning i EU's standardiserede batteritest ifølge EPREL. Batteriet er på 39,1 Wh (10.000 mAh), og tabletten bruger 1,6 W i tomgang.",
    },
    {
      question: "Hvilken energiklasse har Lenovo Tab M11?",
      answer:
        "Energiklasse F og reparationsklasse A i EU's database EPREL. Lenovo Tab og Tab One har klasse D, Tab Plus Gen 2 klasse E.",
    },
    {
      question: "Hvor meget strøm bruger en Lenovo Tab om året?",
      answer:
        "Med fire fulde opladninger om ugen omkring 4,6 kWh for Lenovo Tab og Tab One, 6,3 kWh for Tab M11 og 9,2 kWh for Tab Plus Gen 2.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo TB305FU (Tab One)", url: es("4431328") },
    { name: "ENERGY STAR — Lenovo TB311FU (Lenovo Tab)", url: es("4429436") },
    { name: "ENERGY STAR — Lenovo TB330FU (Tab M11)", url: es("4429434") },
    { name: "ENERGY STAR — Lenovo TB355FU (Tab Plus Gen 2)", url: es("4586621") },
    { name: "EPREL — Lenovo Tab One (TB305FU), EU's energimærke for tablets", url: epreltab("2344005") },
    { name: "EPREL — Lenovo Tab (TB311FU), EU's energimærke for tablets", url: epreltab("2226205") },
    { name: "EPREL — Lenovo Tab M11 (TB330FU), EU's energimærke for tablets", url: epreltab("2230554") },
    { name: "EPREL — Lenovo Tab Plus Gen 2 (TB355FU), EU's energimærke for tablets", url: epreltab("2705434") },
  ],
  variants: [
    { name: "8,7\" Tab One (TB305FU)", watts: { off: 0, sleep: 0.1, idle: 1.3 }, adapterW: 20, batteryWh: 19.6, energyClass: "D", source: 0 },
    { name: "10,1\" Lenovo Tab (TB311FU)", watts: { off: 0.1, sleep: 0.2, idle: 2.0 }, adapterW: 10, batteryWh: 19.6, energyClass: "D", source: 1 },
    { name: "11\" Tab M11 (TB330FU)", watts: { off: 0.1, sleep: 0.2, idle: 2.8 }, adapterW: 10, batteryWh: 26.7, energyClass: "F", source: 2 },
    { name: "12,1\" Tab Plus Gen 2 (TB355FU)", watts: { off: 0.2, sleep: 0.2, idle: 1.6 }, adapterW: 45, batteryWh: 39.1, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-27",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Watt, batteriets Wh og opladeren er Lenovos egne oplysninger til ENERGY STAR, målt ved 115 V; handelsnavne, mAh, energiklasse og batteritid er fra EU's database EPREL. Prisen pr. opladning er regnet med et typisk ladetab på 12 %, ikke Lenovos tal. Kilderne står nederst på siden.",
};

export default lenovoTab;
