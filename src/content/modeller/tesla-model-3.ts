import type { ModelData } from "@/lib/models";

const teslaModel3: ModelData = {
  slug: "tesla-model-3",
  parent: "elbil",
  brand: "Tesla",
  name: "Tesla Model 3",
  released: "2023-09",
  synonyms: [
    "tesla model 3 forbrug",
    "tesla model 3 strømforbrug",
    "model 3 kwh pr 100 km",
    "tesla model 3 forbrug pr km",
    "model 3 highland forbrug",
    "model 3 long range forbrug",
    "model 3 performance forbrug",
  ],
  title: "Tesla Model 3 strømforbrug (2026) → kWh pr. 100 km og pris",
  description:
    "Tesla Model 3 (Highland): Teslas officielle WLTP-forbrug for RWD, Long Range og Performance, kWh om året, pris pr. 100 km og rækkevidde om vinteren.",
  intro:
    "Den lave sedan bruger mindre strøm end de fleste høje familie-SUV'er — over et år svarer forskellen til omkring 3.000 km ekstra kørsel for den samme strøm.",
  content: `<h2>Hvad bruger en Tesla Model 3 pr. 100 km?</h2>
<p>Tesla opgiver ét officielt strømforbrug for hver version af Model 3 på den danske modelside, målt efter WLTP, EU's fælles testcyklus. Tallet er målt som strøm fra stikkontakten, så tabet i bilens lader er regnet med. Den nuværende Model 3, der kom i september 2023 under kodenavnet Highland, bruger 13,0 kWh pr. 100 km med baghjulstræk, 13,6 kWh som Premium Long Range med baghjulstræk, 14,3 kWh som Premium Long Range med firehjulstræk og 16,5 kWh som Performance.</p>
<p>Det placerer Model 3 lavt blandt elbilerne på det danske marked: I EU's registreringsdata for 2025 lå de danske Model 3 på 125–167 Wh/km med et gennemsnit på 135, mens de store familie-SUV'er typisk ligger på 150–170 Wh/km. Forklaringen er først og fremmest formen. En lav sedan har mindre frontareal og luftmodstand end en høj SUV, og luftmodstanden er det, der koster mest ved landevejs- og motorvejsfart.</p>

<h2>RWD, Long Range eller Performance?</h2>
<p>Baghjulstræk med det mindste batteri er den mest sparsomme version på 13,0 kWh pr. 100 km — over 15.000 km om året omkring 1.950 kWh, svarende til {{kr 1950}} om året. Premium Long Range med baghjulstræk bruger 0,6 kWh mere pr. 100 km, men kører væsentligt længere på en opladning; med firehjulstræk lægges yderligere 0,7 kWh til for den ekstra motor foran. Performance med 20" fælge og den kraftigste motor bag ligger på 16,5 kWh — 3,5 kWh over RWD, eller omkring 525 kWh mere om året, svarende til {{kr 525}} ved månedens elpris.</p>
<p>Teslas tal for RWD gælder 18" fælge, og Long Range kan fås med 18" eller 19". De større hjul koster lidt ekstra, fordi bredere dæk har mere rullemodstand. Den ældre Model 3 fra 2017–2023 brugte mere: Tesla opgiver selv 14,4 kWh for den gamle RWD og 14,7 kWh for den gamle Long Range. Highland er altså også en strømforbedring, når du sammenligner årgange på brugtmarkedet.</p>

<h2>Hvad koster det at lade en Tesla Model 3 hjemme?</h2>
<p>Med hjemmeladning koster 100 km i en Model 3 RWD {{kr 13}} og i en Premium Long Range AWD {{kr 14,3}} ved månedens elpris på {{pris_kwh}}. En typisk pendlerdag på 40 km bruger 5,2–5,7 kWh i de almindelige versioner, svarende til {{kr 5,2-5,7}} om dagen. Tesla oplyser ikke batteriets brugbare kapacitet, så vi regner pr. kilometer — det passer også bedre til virkeligheden, hvor de fleste lader op til 80 eller 90 % og aldrig kører batteriet helt tomt.</p>
<p>En <a href="/ladestander/">ladeboks</a> på 11 kW fylder bilen på en nat, og Tesla-appen kan planlægge opladningen efter en afgangstid, så den lander i nattens billigste timer. Læs mere om <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>, og hvordan timeprisen påvirker din regning.</p>

<h2>Supercharger og lynladning</h2>
<p>På langture lader Model 3 hurtigt på Teslas Superchargere og på andre lynladere med CCS-stik. Prisen pr. kWh er typisk to-tre gange så høj som hjemme og afhænger af tidspunkt og abonnement, og lynladning har et lidt større tab, fordi batteriet skal holdes køligt. Da Model 3 bruger få kWh pr. kilometer, mærker du prisforskellen mindre end i en større bil — men til den daglige kørsel er hjemmeladningen stadig det, der holder årsregningen nede.</p>

<h2>Rækkevidde om vinteren og varmepumpen</h2>
<p>Model 3 har varmepumpe, der henter varme fra udeluften og fra batteriets og motorens spildvarme. Den skåner rækkevidden i frost, men den fjerner ikke kuldens effekt: Kold luft og kolde dæk giver mere modstand, og batteri og kabine skal varmes. Regn med 15–30 % mere forbrug i dansk vinterkørsel og ved 130 km/t. For en Premium Long Range AWD betyder det, at 14,3 kWh pr. 100 km bliver til 16,5–18,5 kWh, og at 100 km koster {{kr 16,5-18,5}} hjemme.</p>
<p>Den enkleste gevinst er at forvarme bilen, mens den er tilsluttet laderen. Så kommer varmen fra nettet, og batteriet starter turen ved en temperatur, hvor det både kører og genvinder energi mere effektivt.</p>

<h2>Model 3 eller en familie-SUV?</h2>
<p>Står valget mellem Model 3 og en højere bil, er strømforbruget et reelt argument for sedanen. En Model 3 RWD bruger 13,0 kWh pr. 100 km, en <a href="/elbil/tesla-model-y/">Tesla Model Y</a> Standard 13,1 kWh, en <a href="/elbil/vw-id-4/">VW ID.4</a> Pro 15,9 kWh og en <a href="/elbil/skoda-enyaq/">Skoda Enyaq</a> 85 15,3 kWh. Over 15.000 km om året er forskellen mellem Model 3 RWD og ID.4 Pro omkring 435 kWh, svarende til {{kr 435}} om året. Pladsen, bagagerummet og trækket er selvfølgelig vigtigere for mange familier — men vil du holde forbruget nede, taler den lave form for sedanen. Se alle modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Tesla Model 3's forbrug pr. km?",
      answer:
        "Ifølge Tesla bruger Model 3 (Highland) 13,0 kWh pr. 100 km med baghjulstræk, 13,6 kWh som Premium Long Range RWD, 14,3 kWh som Premium Long Range AWD og 16,5 kWh som Performance efter WLTP. Det er 0,13–0,165 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en Tesla Model 3?",
      answer:
        "Ved hjemmeladning koster 100 km i en Model 3 RWD {{kr 13}} ved månedens elpris på {{pris_kwh}}. Med 15.000 km om året bliver det omkring {{kr 1950}} i strøm. Lynladning koster typisk to-tre gange så meget pr. kWh.",
    },
    {
      question: "Hvor langt kører en Tesla Model 3 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. Varmepumpen og forvarmning ved laderen hjælper, men kulde, kolde dæk og høj fart koster altid rækkevidde.",
    },
    {
      question: "Bruger Model 3 mindre strøm end Model Y?",
      answer:
        "Lidt i de sammenlignelige versioner: Model 3 Premium Long Range AWD står til 14,3 kWh pr. 100 km mod 15,9 kWh for Model Y Premium Long Range AWD ifølge Tesla. Over 15.000 km er det omkring 240 kWh om året, svarende til {{kr 240}} ved månedens elpris.",
    },
    {
      question: "Bruger Highland mindre strøm end den gamle Model 3?",
      answer:
        "Ja. Tesla opgiver 13,0 kWh pr. 100 km for den nye RWD mod 14,4 kWh for RWD fra 2017–2023 — omkring 210 kWh mindre om året ved 15.000 km.",
    },
  ],
  sources: [
    { name: "Tesla Danmark — Model 3, specifikationer og officielt strømforbrug", url: "https://www.tesla.com/da_dk/model3" },
    { name: "Tesla — Køretøjets strømforbrug (WLTP-tabel for alle modeller)", url: "https://www.tesla.com/da_dk/support/power-consumption" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "RWD", watts: {}, whPerKm: 130, source: 0 },
    { name: "Premium Long Range RWD", watts: {}, whPerKm: 136, source: 0 },
    { name: "Premium Long Range AWD", watts: {}, whPerKm: 143, source: 0 },
    { name: "Performance AWD", watts: {}, whPerKm: 165, source: 0 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Teslas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Teslas danske modelside og EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default teslaModel3;
