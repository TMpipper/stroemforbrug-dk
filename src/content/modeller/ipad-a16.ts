import type { ModelData } from "@/lib/models";

const ipadA16: ModelData = {
  slug: "ipad-a16",
  parent: "ipad",
  brand: "Apple",
  name: "iPad (A16)",
  released: "2025-03",
  synonyms: ["ipad a16", "ipad 2025", "ipad 11. generation", "ipad 11 tommer", "ipad a3354", "ipad a3355", "almindelig ipad strømforbrug"],
  title: "iPad (A16) strømforbrug (2026) → watt og pris pr. opladning",
  description:
    "iPad (A16) fra 2025: Apples egne watt-tal ved 230 V, hvad én fuld opladning koster, kWh om året, og hvad opladerens tab betyder for regningen.",
  intro:
    "Selv med fire fulde opladninger om ugen hele året bruger den under 7 kWh — mindre end et lille køleskab bruger på en måned.",
  content: `<h2>Hvor mange watt bruger en iPad (A16)?</h2>
<p>Apple oplyser selv i sin miljørapport for iPad (A16), hvad den trækker fra stikkontakten i hver tilstand, målt ved 230 volt som i en dansk stikkontakt. Tændt med skærmen tændt i tomgang bruger den 2,89 W. I dvale bruger den 0,21 W og slukket 0,86 W. Målingen er lavet efter ENERGY STAR-programmets metode med fuldt opladet batteri og iPad'en tilsluttet Apples 20 W USB-C-oplader, skærmens lysstyrke låst og automatisk lysstyrke slået fra.</p>
<p>Det kan se underligt ud, at slukket er højere end dvale. Tallene er målt med opladeren tilsluttet, og forskellen er en del af Apples egen måling; begge tal er under 1 W, så de betyder næsten intet for regningen. Det meste af tiden kører en iPad i øvrigt på batteriet, ikke direkte fra stikket — og det er derfor, opladningen er det rigtige mål for, hvad den koster.</p>

<h2>Hvad koster det at oplade en iPad (A16)?</h2>
<p>Batteriet rummer 28,93 Wh ifølge Apples tekniske specifikationer. Ingen oplader er tabsfri: Apples egen måling viser, at 20 W-opladeren omsætter 87,8 % af strømmen fra stikkontakten til strøm i batteriet ved 230 V. En fuld opladning fra tomt til fuldt trækker derfor omkring 0,033 kWh fra stikket, svarende til {{oere 0,033}}. Det er en udgift i øre — selv hvis du lader helt op hver eneste dag i et år, bliver det omkring 12 kWh, svarende til {{kr 12}}.</p>
<p>Tabellen ovenfor regner med fire fulde opladninger om ugen, som er den samme profil for alle tablets på siden. Det giver knap 7 kWh om året. De fleste lader ikke fra nul, men fra 20–40 %, og så bliver hver opladning tilsvarende billigere. Regnestykket holder alligevel, fordi det, der tæller, er, hvor meget du bruger batteriet i alt.</p>

<h2>Opladeren i stikket</h2>
<p>En oplader, der sidder i væggen uden at være tilsluttet, bruger stadig lidt. Apple har målt 0,05 W for 20 W-opladeren ved 230 V. Over et helt år er det under 0,5 kWh. Det er langt under, hvad gamle opladere af ukendt mærke kan bruge, og ikke en grund til at hive stikket ud hver aften. Har du en skuffe med gamle opladere i stikdåser rundt om i huset, er de mere værd at kigge på. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>
<p>Bruger du en anden oplader end den, Apple har målt med, kan tabet være lidt større eller mindre. En hurtigere oplader på 30 W eller mere lader ikke billigere; den lader bare hurtigere, så længe iPad'en kan tage imod.</p>

<h2>EU's energimærke for tablets</h2>
<p>Siden juni 2025 skal tablets og mobiltelefoner have et EU-energimærke. I EU's produktdatabase EPREL har iPad (A16) — modelnumrene A3354 og A3355 — energiklasse G og en batteritid på 67 timer pr. fuld opladning i EU's standardiserede brugstest. Energiklassen bygger på EU's standardiserede batteritest og siger ikke, hvad det koster at oplade. En iPad med klasse G er derfor ikke dyr i drift; den bruger fortsat kun få kWh om året.</p>
<p>Mærket viser også reparationsklasse C og at iPad'en er testet for faldholdbarhed i klasse E. Apple har oplyst mindst fem års softwareopdateringer til EPREL. En iPad, der holder længe, er godt for både økonomien og miljøet.</p>

<h2>iPad (A16) sammenlignet med en computer</h2>
<p>En iPad er blandt de mest strømøkonomiske skærme, du kan bruge. En <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> bruger 3,63–4,37 W i tomgang og omkring 10–12 kWh om året med seks timers daglig brug. En stationær <a href="/computer/">computer</a> med ekstern skærm bruger typisk mange gange så meget. Erstatter iPad'en noget af tiden ved computeren eller tv'et, sparer du strøm — men det er små beløb, og en ny iPad tjener sig aldrig hjem på strømmen alene.</p>
<p>Siden om <a href="/ipad/">iPads og tablets</a> sammenligner typerne generelt, og <a href="/mobil-opladning/">opladning af mobil</a> viser, hvad telefonen koster.</p>

<h2>Gode råd</h2>
<ul>
<li>Lad iPad'en, når det passer dig — opladningen koster øre, ikke kroner.</li>
<li>Brug automatisk lysstyrke; skærmen er det, der bruger mest.</li>
<li>Saml gamle opladere ud af stikkontakterne.</li>
<li>Pas på batteriet: en iPad, der holder længere, sparer mere end strømmen.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iPad (A16)?",
      answer: "Ifølge Apples egne målinger ved 230 V bruger den 2,89 W tændt i tomgang med skærmen tændt, 0,21 W i dvale og 0,86 W slukket, målt med 20 W-opladeren tilsluttet og fuldt batteri.",
    },
    {
      question: "Hvad koster det at oplade en iPad (A16)?",
      answer: "En fuld opladning trækker omkring 0,033 kWh fra stikket, når opladerens tab er medregnet. Det koster ca. {{oere 0,033}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger en iPad om året?",
      answer: "Med fire fulde opladninger om ugen bruger iPad (A16) knap 7 kWh om året, svarende til {{kr 6,9}}. Lader du helt op hver dag, bliver det omkring 12 kWh.",
    },
    {
      question: "Hvor stort er batteriet i iPad (A16)?",
      answer: "28,93 Wh ifølge Apples tekniske specifikationer. EPREL oplyser 7.606 mAh og en batteritid på 67 timer pr. fuld opladning i EU's test.",
    },
    {
      question: "Hvorfor har iPad (A16) energiklasse G?",
      answer: "Energiklassen for tablets bygger på EU's standardiserede batteritest. Den siger ikke, hvad opladningen koster — og det er under 7 kWh om året.",
    },
  ],
  sources: [
    { name: "Apple — iPad (A16) Product Environmental Report, marts 2025", url: "https://www.apple.com/environment/pdf/products/ipad/iPad_A16_PER_MAR2025.pdf" },
    { name: "Apple Support — iPad (A16), tekniske specifikationer", url: "https://support.apple.com/en-gb/122240" },
    { name: "EPREL — Apple A3354 (iPad A16), EU's energimærke for tablets", url: "https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/2261043" },
  ],
  variants: [
    { name: "11\" A16", watts: { off: 0.86, sleep: 0.21, idle: 2.89 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 28.93, source: 0 },
  ],
  publishDate: "2026-12-02",
  updated: "2026-11-22",
  figuresNote:
    "Målt af Apple ved 230 V — samme spænding som en dansk stikkontakt — med fuldt batteri og Apples 20 W USB-C-oplader tilsluttet; batteriets Wh er fra Apples tekniske specifikationer. Kilderne står nederst på siden.",
};

export default ipadA16;
