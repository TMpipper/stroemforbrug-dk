import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const galaxyTabS11: ModelData = {
  slug: "galaxy-tab-s11",
  parent: "ipad",
  brand: "Samsung",
  name: "Samsung Galaxy Tab S11",
  released: "2025-09",
  synonyms: [
    "galaxy tab s11 strømforbrug",
    "samsung galaxy tab s11 watt",
    "galaxy tab s11 ultra strømforbrug",
    "galaxy tab s11 opladning pris",
    "sm-x730 strømforbrug",
    "sm-x930 watt",
    "samsung tablet strømforbrug",
    "galaxy tab s11 batteri wh",
  ],
  title: "Galaxy Tab S11 strømforbrug (2026) → watt og opladning",
  description:
    "Galaxy Tab S11 og S11 Ultra: watt i tomgang og dvale fra Samsungs ENERGY STAR-målinger, batteriets Wh, hvad én opladning koster og kWh om året.",
  intro:
    "Den store S11 Ultra bruger mindre i tomgang end den almindelige S11, 2,4 mod 2,8 W, men har et batteri, der er 40 % større, og koster derfor mere at lade op.",
  content: `<h2>Hvor mange watt bruger Galaxy Tab S11?</h2>
<p>Galaxy Tab S11 er Samsungs Android-tablet i topklassen fra september 2025. Den findes i to størrelser: Galaxy Tab S11 med 11" skærm (Wi-Fi-modellen hedder SM-X730) og Galaxy Tab S11 Ultra med 14,6" skærm (SM-X930). Samsung har fået begge certificeret efter den amerikanske ENERGY STAR, som også dækker tablets. Her måles forbruget med skærmen tændt i kort tomgang, i dvale og slukket.</p>
<p>Ifølge certificeringen bruger S11 2,8 W i tomgang og 0,4 W i dvale. S11 Ultra bruger 2,4 W i tomgang og også 0,4 W i dvale. Det kan virke bagvendt, at den store skærm bruger mindst, men begge har AMOLED-skærme, hvor lyset kommer fra hver enkelt pixel, og målingen sker med en fast lysstyrke. Tallene siger altså noget om, hvor effektivt panelet og chippen arbejder, ikke om hvor meget lys du skruer op for derhjemme.</p>
<table>
<thead><tr><th>Model</th><th>Skærm</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>EU-energiklasse</th></tr></thead>
<tbody>
<tr><td>Galaxy Tab S11 (SM-X730)</td><td>11"</td><td>2,8 W</td><td>0,4 W</td><td>31,7 Wh</td><td>G</td></tr>
<tr><td>Galaxy Tab S11 Ultra (SM-X930)</td><td>14,6"</td><td>2,4 W</td><td>0,4 W</td><td>44,4 Wh</td><td>G</td></tr>
</tbody>
</table>

<h2>Hvad koster det at oplade en Galaxy Tab S11?</h2>
<p>For en tablet er det batteriet, der afgør forbruget fra stikkontakten, for tabletten bruger strøm fra batteriet og henter den igen ved opladningen. S11 har et batteri på 31,7 Wh og S11 Ultra på 44,4 Wh ifølge Samsungs oplysninger til ENERGY STAR. I EU's produktdatabase EPREL står de samme batterier som 8.160 og 11.374 mAh.</p>
<p>Regnet med et typisk ladetab på 12 % trækker en fuld opladning omkring 0,036 kWh for S11 og 0,050 kWh for S11 Ultra. Det koster {{oere 0,036}} og {{oere 0,050}} ved månedens elpris på {{pris_kwh}}. Med fire fulde opladninger om ugen, som er profilen for alle tablets på siden, bliver det omkring 7,5 kWh om året for S11 og 10,5 kWh for S11 Ultra, svarende til {{kr 7,5}} og {{kr 10,5}}. Ladetabet er vores skøn, ikke Samsungs tal.</p>

<h2>Energiklasse G trods lang batteritid</h2>
<p>Siden juni 2025 skal tablets, der sælges i EU, have et energimærke. Begge S11-modeller har energiklasse G, den nederste klasse på skalaen A–G. Samtidig holder de længe på en opladning i EU's standardiserede brugstest: 81 timer for S11 og knap 95 timer for S11 Ultra. Det hænger sammen med, at energiklassen ikke kun belønner lang batteritid, men måler, hvor meget energi tabletten bruger pr. time i testen. En stor, lys skærm og en kraftig chip trækker klassen ned, selv når batteriet er stort.</p>
<p>For din elregning betyder klassen meget lidt. Forskellen mellem klasse C og G på en tablet er nogle få kWh om året. Mærket er mere nyttigt til at se, hvor længe tabletten holder mellem opladningerne, og hvor robust den er: EPREL oplyser reparationsklasse C, vandtæthed efter IP68 og mindst fem års softwareopdateringer for begge modeller.</p>

<h2>S11 sammenlignet med iPad</h2>
<p>Den almindelige S11 ligger tæt på Apples <a href="/ipad/ipad-pro-m5/">iPad Pro M5</a> i 11" udgaven, som har et batteri på 31,29 Wh og bruger 2,48 W i tomgang. Over et år ender de to på omtrent samme forbrug med vores profil, omkring 7,4–7,5 kWh. S11 Ultra er større end nogen iPad og har et batteri, der rummer 5 Wh mere end iPad Pro 13" — derfor koster den lidt mere at lade.</p>
<p>Husk, at målingerne ikke er lavet på samme måde. Apple måler selv ved 230 volt, mens Samsungs tal er målt til den amerikanske certificering ved 115 volt. For en tablet, der lades med en lille oplader, er forskellen typisk lille, men tallene er ikke helt sammenlignelige på decimalen. Se også de mindre <a href="/ipad/ipad-a16/">iPad (A16)</a>, hvis du mest skal bruge tabletten til video og avis.</p>

<h2>Gode råd til en Galaxy Tab S11</h2>
<ul>
<li>Skru ned for lysstyrken, eller brug automatisk lysstyrke. Skærmen er den største forbruger, og en AMOLED-skærm sparer ekstra på mørke baggrunde.</li>
<li>Slå batteribeskyttelse til i indstillingerne, så tabletten stopper ved 80–85 %. Det skåner batteriet og sparer en smule strøm.</li>
<li>Bruger du tabletten som tegnebræt med S Pen hele dagen, lades den oftere, men en ekstra opladning koster stadig kun få øre.</li>
<li>Opladeren må gerne blive siddende i stikket; en moderne USB-C-oplader bruger meget lidt uden last.</li>
</ul>
<p>Strømmen er ikke det, der koster med en tablet til denne pris. Den gør langt mere forskel for økonomien, at tabletten holder mange år. Læs mere om <a href="/ipad/">tablets og iPads generelt</a>, eller sammenlign med en <a href="/laptop/">bærbar computer</a>, hvis tabletten skal erstatte den.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Galaxy Tab S11?",
      answer:
        "Galaxy Tab S11 bruger 2,8 W i tomgang med skærmen tændt og 0,4 W i dvale, og S11 Ultra bruger 2,4 W og 0,4 W, ifølge Samsungs målinger til ENERGY STAR.",
    },
    {
      question: "Hvad koster det at oplade en Galaxy Tab S11?",
      answer:
        "En fuld opladning trækker omkring 0,036 kWh for S11 og 0,050 kWh for S11 Ultra, regnet med et typisk ladetab. Det koster {{oere 0,036}} og {{oere 0,050}} ved månedens elpris.",
    },
    {
      question: "Hvor stort er batteriet i Galaxy Tab S11?",
      answer:
        "31,7 Wh i S11 og 44,4 Wh i S11 Ultra ifølge Samsungs oplysninger til ENERGY STAR. EU's database EPREL oplyser 8.160 og 11.374 mAh.",
    },
    {
      question: "Hvilken energiklasse har Galaxy Tab S11?",
      answer:
        "Begge modeller har energiklasse G på EU's energimærke for tablets. Batteritiden i EU's test er 81 timer for S11 og knap 95 timer for S11 Ultra.",
    },
    {
      question: "Hvor meget strøm bruger en Galaxy Tab S11 om året?",
      answer:
        "Med fire fulde opladninger om ugen omkring 7,5 kWh for S11 og 10,5 kWh for S11 Ultra, svarende til {{kr 7,5}} og {{kr 10,5}} om året.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Samsung SM-X730 (Galaxy Tab S11)", url: es("4470479") },
    { name: "ENERGY STAR — Samsung SM-X930 (Galaxy Tab S11 Ultra)", url: es("4479389") },
    { name: "EPREL — Samsung SM-X730 (Galaxy Tab S11), EU's energimærke for tablets", url: epreltab("2410085") },
    { name: "EPREL — Samsung SM-X930 (Galaxy Tab S11 Ultra), EU's energimærke for tablets", url: epreltab("2409889") },
  ],
  variants: [
    { name: "11\" S11 (SM-X730)", watts: { off: 0.1, sleep: 0.4, idle: 2.8 }, batteryWh: 31.7, energyClass: "G", source: 0 },
    { name: "14,6\" S11 Ultra (SM-X930)", watts: { off: 0.2, sleep: 0.4, idle: 2.4 }, batteryWh: 44.4, energyClass: "G", source: 1 },
  ],
  publishDate: "2026-12-23",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Samsungs egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Watt-tallene og batteriets Wh er Samsungs egne oplysninger til den amerikanske ENERGY STAR-certificering, målt ved 115 V på Wi-Fi-modellerne; energiklassen er fra EU's database EPREL. Prisen pr. opladning er regnet med et typisk ladetab på 12 %, ikke et tal fra Samsung. Kilderne står nederst på siden.",
};

export default galaxyTabS11;
