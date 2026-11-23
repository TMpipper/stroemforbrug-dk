import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const lenovoIdeaTab: ModelData = {
  slug: "lenovo-idea-tab",
  parent: "ipad",
  brand: "Lenovo",
  name: "Lenovo Idea Tab",
  released: "2026-03",
  synonyms: [
    "lenovo idea tab pro strømforbrug",
    "lenovo idea tab strømforbrug",
    "idea tab pro gen 2 watt",
    "idea tab plus strømforbrug",
    "lenovo tablet opladning pris",
    "tb373fu strømforbrug",
    "lenovo idea tab batteri wh",
  ],
  title: "Lenovo Idea Tab strømforbrug (2026) → Pro, Plus og Idea Tab",
  description:
    "Lenovo Idea Tab Pro, Idea Tab Pro Gen 2, Idea Tab Plus og Idea Tab: watt efter ENERGY STAR, batteriets Wh, prisen for én opladning og EU-energimærket.",
  intro:
    "De tre store Idea Tab-modeller har samme batteri på 39,1 Wh, så de koster det samme at lade. Idea Tab Pro Gen 2 bruger mindst af dem i tomgang, 2,8 W.",
  content: `<h2>Hvor mange watt bruger Lenovo Idea Tab?</h2>
<p>Idea Tab er Lenovos serie af Android-tablets i mellemklassen og et populært alternativ til en iPad. Serien består af den store Idea Tab Pro på 12,7" (TB373FU) og efterfølgeren Idea Tab Pro Gen 2 fra marts 2026 (TB390FU), Idea Tab Plus på 12,1" (TB361FU) og den almindelige Idea Tab på 11" (TB336FU). Lenovo har fået alle fire certificeret efter den amerikanske ENERGY STAR, der måler forbruget med skærmen tændt i tomgang, i dvale og slukket. I EU's produktdatabase EPREL står de med deres handelsnavne, så det er let at se, hvilken model tallene hører til.</p>
<table>
<thead><tr><th>Model</th><th>Skærm</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>Energiklasse</th><th>Batteritid i EU's test</th></tr></thead>
<tbody>
<tr><td>Idea Tab Pro Gen 2 (TB390FU, 2026)</td><td>12,95"</td><td>2,8 W</td><td>0,2 W</td><td>39,1 Wh</td><td>F</td><td>105 timer</td></tr>
<tr><td>Idea Tab Pro (TB373FU)</td><td>12,7"</td><td>3,4 W</td><td>0,5 W</td><td>39,1 Wh</td><td>F</td><td>113 timer</td></tr>
<tr><td>Idea Tab Plus (TB361FU)</td><td>12,1"</td><td>3,4 W</td><td>0,2 W</td><td>39,1 Wh</td><td>F</td><td>108 timer</td></tr>
<tr><td>Idea Tab (TB336FU)</td><td>11"</td><td>3,5 W</td><td>0,8 W</td><td>26,7 Wh</td><td>E</td><td>94 timer</td></tr>
</tbody>
</table>
<p>Idea Tab Pro er certificeret to gange, med to forskellige opladere. Med 45 W-opladeren, som EPREL angiver som den anbefalede, bruger den 0,5 W i dvale; med en 20 W-oplader 0,2 W. Tomgangen er 3,4 W i begge målinger. Vi bruger målingen med 45 W-opladeren her.</p>

<h2>Hvad koster det at oplade en Idea Tab?</h2>
<p>Idea Tab Pro, Pro Gen 2 og Plus har alle et batteri på 39,1 Wh (10.000 mAh), og den almindelige Idea Tab et på 26,7 Wh (6.820 mAh) ifølge Lenovos oplysninger til ENERGY STAR og EPREL. Regnet med et typisk ladetab på 12 % trækker en fuld opladning omkring 0,044 kWh for de tre store og 0,030 kWh for Idea Tab, svarende til {{oere 0,044}} og {{oere 0,030}} ved månedens elpris på {{pris_kwh}}.</p>
<p>Med fire fulde opladninger om ugen bliver det omkring 9,2 kWh om året for de store modeller og 6,3 kWh for Idea Tab — {{kr 9,2}} og {{kr 6,3}}. Fordi batteriet er det samme, koster Pro, Pro Gen 2 og Plus det samme at lade. Forskellen i tomgang betyder, at Pro Gen 2 holder lidt længere mellem opladningerne ved almindelig brug, ikke at hver opladning er billigere.</p>

<h2>Lang batteritid, energiklasse F</h2>
<p>De store Idea Tab-modeller holder over 100 timer pr. opladning i EU's standardtest, Idea Tab Pro hele 113 timer. Alligevel har de energiklasse F. Klassen beregnes ud fra energien pr. time i testen, og et stort batteri, der varer længe, bruger stadig mange watt-timer. Den mindre Idea Tab har klasse E, fordi den bruger mindre energi pr. time, selvom den holder kortere.</p>
<p>EPREL oplyser også reparationsklasse A for alle fire — bedre end Samsungs Galaxy Tab-modeller og iPad mini, der har klasse C — og mindst syv års softwareopdateringer. En tablet, der kan få et nyt batteri og holde i mange år, er den største besparelse, både i kroner og i miljø.</p>

<h2>Idea Tab sammenlignet med iPad og Galaxy Tab</h2>
<p>Idea Tab Pro er på størrelse med de store iPads, og batteriet ligger i samme størrelsesorden som iPad Pro M5 13" (38,99 Wh). Over et år bruger de det samme med vores profil, cirka 9,2 kWh. Sammenlignet med <a href="/ipad/galaxy-tab-s12/">Galaxy Tab S12+</a>, der har et batteri på 40,5 Wh og bruger 3,5 W i tomgang, er Idea Tab Pro Gen 2 lidt mere sparsom med skærmen tændt.</p>
<p>Den almindelige Idea Tab ligger på niveau med <a href="/ipad/galaxy-tab-a/">Galaxy Tab A11+</a> med 26,7 mod 26,3 Wh, men bruger mere i tomgang og i dvale: 3,5 W og 0,8 W mod 2,1 W og 0,3 W. Over et år betyder det næsten intet for elregningen, men det betyder lidt for, hvor længe batteriet holder, hvis tabletten ligger i dvale det meste af tiden. Lenovos tal er målt til ENERGY STAR ved 115 V, Apples ved 230 V.</p>

<h2>Gode råd</h2>
<ul>
<li>Slå batteribeskyttelse til i tablettens indstillinger, hvis din model har den, så opladningen stopper før 100 %.</li>
<li>Bruger du tabletten med tastatur som arbejdsmaskine, kan det betale sig at slukke den helt om natten frem for dvale på den almindelige Idea Tab.</li>
<li>Lad, når det passer dig; en opladning koster få øre.</li>
</ul>
<p>Læs mere om <a href="/ipad/">tablets og iPads generelt</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo Idea Tab Pro?",
      answer:
        "3,4 W i tomgang med skærmen tændt og 0,5 W i dvale ifølge Lenovos målinger til ENERGY STAR med 45 W-opladeren. Idea Tab Pro Gen 2 bruger 2,8 W og 0,2 W.",
    },
    {
      question: "Hvad koster det at oplade en Lenovo Idea Tab?",
      answer:
        "En fuld opladning af Idea Tab Pro, Pro Gen 2 eller Plus trækker omkring 0,044 kWh, regnet med et typisk ladetab — {{oere 0,044}} ved månedens elpris. Den almindelige Idea Tab koster {{oere 0,030}}.",
    },
    {
      question: "Hvor stort er batteriet i Idea Tab Pro?",
      answer:
        "39,1 Wh, eller 10.000 mAh ifølge EPREL. Det samme batteri sidder i Idea Tab Pro Gen 2 og Idea Tab Plus. Den almindelige Idea Tab har 26,7 Wh (6.820 mAh).",
    },
    {
      question: "Hvilken energiklasse har Lenovo Idea Tab?",
      answer:
        "Idea Tab Pro, Pro Gen 2 og Plus har energiklasse F, den almindelige Idea Tab klasse E. Alle fire har reparationsklasse A i EU's database EPREL.",
    },
    {
      question: "Hvor meget strøm bruger en Idea Tab om året?",
      answer:
        "Med fire fulde opladninger om ugen omkring 9,2 kWh for de store modeller og 6,3 kWh for Idea Tab, svarende til {{kr 9,2}} og {{kr 6,3}}.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo TB390FU (Idea Tab Pro Gen 2)", url: es("4520682") },
    { name: "ENERGY STAR — Lenovo TB373FU (Idea Tab Pro), 45 W-oplader", url: es("4431321") },
    { name: "ENERGY STAR — Lenovo TB361FU (Idea Tab Plus)", url: es("4470548") },
    { name: "ENERGY STAR — Lenovo TB336FU (Idea Tab)", url: es("4015586") },
    { name: "ENERGY STAR — Lenovo TB373FU (Idea Tab Pro), 20 W-oplader", url: es("4499001") },
    { name: "EPREL — Lenovo Idea Tab Pro Gen 2 (TB390FU), EU's energimærke for tablets", url: epreltab("2583821") },
    { name: "EPREL — Lenovo Idea Tab Pro (TB373FU), EU's energimærke for tablets", url: epreltab("2283933") },
    { name: "EPREL — Lenovo Idea Tab Plus (TB361FU), EU's energimærke for tablets", url: epreltab("2402485") },
    { name: "EPREL — Lenovo Idea Tab (TB336FU), EU's energimærke for tablets", url: epreltab("2303425") },
  ],
  variants: [
    { name: "12,95\" Idea Tab Pro Gen 2 (TB390FU)", watts: { off: 0.2, sleep: 0.2, idle: 2.8 }, adapterW: 45, batteryWh: 39.1, energyClass: "F", source: 0 },
    { name: "12,7\" Idea Tab Pro (TB373FU)", watts: { off: 0.3, sleep: 0.5, idle: 3.4 }, adapterW: 45, batteryWh: 39.1, energyClass: "F", source: 1 },
    { name: "12,1\" Idea Tab Plus (TB361FU)", watts: { off: 0.2, sleep: 0.2, idle: 3.4 }, adapterW: 20, batteryWh: 39.1, energyClass: "F", source: 2 },
    { name: "11\" Idea Tab (TB336FU)", watts: { off: 0.2, sleep: 0.8, idle: 3.5 }, adapterW: 20, batteryWh: 26.7, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-26",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Watt, batteriets Wh og opladeren er Lenovos egne oplysninger til ENERGY STAR, målt ved 115 V; handelsnavne, mAh, energiklasse og batteritid er fra EU's database EPREL. Prisen pr. opladning er regnet med et typisk ladetab på 12 %, ikke Lenovos tal. Kilderne står nederst på siden.",
};

export default lenovoIdeaTab;
