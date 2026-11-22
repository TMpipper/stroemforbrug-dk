import type { ModelData } from "@/lib/models";

const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const ipadAirM4: ModelData = {
  slug: "ipad-air-m4",
  parent: "ipad",
  brand: "Apple",
  name: "iPad Air M4",
  released: "2026-03",
  synonyms: ["ipad air 2026", "ipad air m4 11", "ipad air m4 13", "ipad air 11 tommer", "ipad air 13 tommer", "ipad air a3459", "ipad air a3461"],
  title: "iPad Air M4 strømforbrug (2026) → watt og pris pr. opladning",
  description:
    "iPad Air M4 i 11 og 13 tommer: Apples egne watt-tal ved 230 V, hvad én fuld opladning koster, kWh om året, og hvad den store skærm koster ekstra.",
  intro:
    "13 tommer har et batteri, der er en fjerdedel større end 11 tommer, og bruger lidt mere i tomgang — men forskellen er under 2 kWh om året.",
  content: `<h2>Hvor mange watt bruger en iPad Air M4?</h2>
<p>Apple har målt iPad Air M4's forbrug ved 230 volt, samme spænding som i en dansk stikkontakt, og offentliggjort tallene i miljørapporten fra marts 2026. Tændt med skærmen tændt i tomgang bruger 11 tommer 3,01 W og 13 tommer 3,5 W. I dvale bruger de 0,31 og 0,29 W, og slukket 0,89 og 0,87 W. Målingen følger ENERGY STAR-metoden med fuldt opladet batteri og iPad'en tilsluttet Apples 20 W USB-C-oplader; lysstyrken er låst, og automatisk lysstyrke er slået fra.</p>
<p>At slukket ligger højere end dvale, skyldes, at begge tal er målt med opladeren tilsluttet. Begge er under 1 W og betyder næsten intet for regningen. Det, der koster, er at fylde batteriet op igen.</p>

<h2>Hvad koster det at oplade en iPad Air M4?</h2>
<p>Batteriet rummer 28,93 Wh i 11 tommer og 36,59 Wh i 13 tommer ifølge Apples tekniske specifikationer. Apples 20 W-oplader omsætter 87,8 % af strømmen fra stikket til strøm i batteriet ved 230 V. En fuld opladning fra tomt til fuldt trækker derfor omkring 0,033 kWh for 11 tommer og 0,042 kWh for 13 tommer, svarende til {{oere 0,033}} og {{oere 0,042}}.</p>
<p>Med fire fulde opladninger om ugen, som er profilen for alle tablets på siden, bliver det knap 7 kWh om året for 11 tommer og knap 9 kWh for 13 tommer. Forskellen er under 2 kWh om året, svarende til {{kr 1,8}}. Vælg størrelsen efter, hvad du skal bruge iPad'en til; strømmen er ikke et argument.</p>

<h2>11 eller 13 tommer — hvad betyder størrelsen?</h2>
<p>Den store skærm bruger omkring en halv watt mere i tomgang: 3,5 W mod 3,01 W. Til gengæld rækker det større batteri længere. I EU's produktdatabase EPREL har 11 tommer (A3459 og A3460) en batteritid på 62 timer pr. fuld opladning i EU's standardiserede brugstest, og 13 tommer (A3461 og A3462) 72 timer. Begge har energiklasse G på EU's energimærke for tablets, som har gældt siden juni 2025. Klassen bygger på den standardiserede batteritest og siger ikke, hvad det koster at oplade.</p>
<p>Begge størrelser har også reparationsklasse C, og Apple har oplyst mindst fem års softwareopdateringer til EPREL. I EPREL står både batteri og skærm som reservedele.</p>

<h2>iPad Air M4 sammenlignet med andre iPads</h2>
<p>Den almindelige <a href="/ipad/ipad-a16/">iPad (A16)</a> har samme batteri på 28,93 Wh som iPad Air 11 tommer og koster derfor præcis det samme at oplade. I tomgang bruger den 2,89 W mod 3,01 W for Air 11 tommer — så tæt, at det ikke betyder noget. M4-chippen i iPad Air er langt hurtigere, men ved let brug som læsning, video og mail er det skærmen, der bruger mest, ikke chippen.</p>
<p>Sammenlignet med en bærbar er iPad Air stadig meget sparsom. En <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> har et batteri på 53,8 Wh i 13 tommer og bruger 3,63 W i tomgang. En iPad Air 13 tommer har altså kun to tredjedele af batteriet og et lavere tomgangsforbrug.</p>

<h2>Opladeren og standby</h2>
<p>Apples 20 W-oplader bruger 0,05 W uden last ved 230 V, altså under 0,5 kWh om året, hvis den sidder i stikket hele tiden. Bruger du en anden oplader, kan tabet være lidt anderledes — men forskellen er brøkdele af en kWh om året. En kraftigere oplader lader hurtigere, så længe iPad'en kan tage imod, men ikke billigere. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a> og om <a href="/ipad/">iPads og tablets generelt</a>.</p>
<p>Det er ligegyldigt for prisen, hvornår på døgnet du lader. En fuld opladning koster øre, og selv i de dyreste timer bliver det ikke til kroner. Vil du alligevel lade, når strømmen er billigst, er natten typisk det bedste tidspunkt.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug automatisk lysstyrke — skærmen er den største forbruger.</li>
<li>Vælg størrelse efter brug, ikke efter strøm.</li>
<li>Lad, når det passer dig; prisen er få øre.</li>
<li>Pas på batteriet, så iPad'en holder mange år.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iPad Air M4?",
      answer: "Ifølge Apples egne målinger ved 230 V bruger 11 tommer 3,01 W og 13 tommer 3,5 W tændt i tomgang med skærmen tændt. I dvale bruger de 0,29–0,31 W.",
    },
    {
      question: "Hvad koster det at oplade en iPad Air M4?",
      answer: "En fuld opladning trækker omkring 0,033 kWh for 11 tommer og 0,042 kWh for 13 tommer, når opladerens tab er medregnet. Det koster ca. {{oere 0,033}} og {{oere 0,042}}.",
    },
    {
      question: "Hvor meget strøm bruger en iPad Air M4 om året?",
      answer: "Med fire fulde opladninger om ugen knap 7 kWh for 11 tommer og knap 9 kWh for 13 tommer, svarende til {{kr 6,9}} og {{kr 8,7}} om året.",
    },
    {
      question: "Hvor stort er batteriet i iPad Air M4?",
      answer: "28,93 Wh i 11 tommer og 36,59 Wh i 13 tommer ifølge Apples tekniske specifikationer. EPREL oplyser 7.606 og 9.720 mAh.",
    },
    {
      question: "Bruger iPad Air M4 mere strøm end den almindelige iPad?",
      answer: "Næsten ikke. iPad Air 11 tommer og iPad (A16) har samme batteri på 28,93 Wh, og i tomgang bruger de 3,01 W og 2,89 W.",
    },
  ],
  sources: [
    { name: "Apple — iPad Air 11-inch og 13-inch (M4) Product Environmental Report, marts 2026", url: "https://www.apple.com/environment/pdf/products/ipad/iPad_Air_11-inch_and_13-inch_M4_PER_Mar2026.pdf" },
    { name: "Apple Support — iPad Air 11-inch (M4), tekniske specifikationer", url: "https://support.apple.com/en-gb/126471" },
    { name: "Apple Support — iPad Air 13-inch (M4), tekniske specifikationer", url: "https://support.apple.com/en-gb/126472" },
    { name: "EPREL — Apple A3459 (iPad Air 11-inch M4), EU's energimærke for tablets", url: epreltab("2556298") },
    { name: "EPREL — Apple A3461 (iPad Air 13-inch M4), EU's energimærke for tablets", url: epreltab("2556300") },
  ],
  variants: [
    { name: "11\" M4", watts: { off: 0.89, sleep: 0.31, idle: 3.01 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 28.93, source: 0 },
    { name: "13\" M4", watts: { off: 0.87, sleep: 0.29, idle: 3.5 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 36.59, source: 0 },
  ],
  publishDate: "2026-12-03",
  updated: "2026-11-22",
  figuresNote:
    "Målt af Apple ved 230 V — samme spænding som en dansk stikkontakt — med fuldt batteri og Apples 20 W USB-C-oplader tilsluttet; batteriets Wh er fra Apples tekniske specifikationer. Kilderne står nederst på siden.",
};

export default ipadAirM4;
