import type { ModelData } from "@/lib/models";

const skodaElroq: ModelData = {
  slug: "skoda-elroq",
  parent: "elbil",
  brand: "Skoda",
  name: "Skoda Elroq",
  released: "2024-10",
  synonyms: [
    "skoda elroq forbrug",
    "skoda elroq strømforbrug",
    "elroq 60 forbrug",
    "elroq 85 forbrug",
    "elroq rs forbrug",
    "elroq kwh pr 100 km",
    "elroq forbrug pr km",
  ],
  title: "Skoda Elroq strømforbrug (2026) → 60, 85, 85x og RS",
  description:
    "Skoda Elroq 60, 85, 85x og RS: Škodas officielle WLTP-forbrug fra den danske prisliste, kWh om året, pris pr. 100 km og hvad en fuld opladning koster.",
  intro:
    "Forskellen mellem det lille og det store batteri er under en halv kWh pr. 100 km — valget handler om rækkevidde, ikke om strømregningen.",
  content: `<h2>Hvad bruger en Skoda Elroq pr. 100 km?</h2>
<p>Škoda opgiver forbruget for hver Elroq-version på den danske prisliste, målt efter WLTP, EU's fælles testcyklus. Tallet er målt som strøm fra stikkontakten, så tabet i bilens lader er regnet med. Med de nuværende biler ligger Elroq 60 på 15,1 kWh pr. 100 km, Elroq 85 på 15,5 kWh, firehjulstrukne 85x på 15,7 kWh og sportsmodellen RS på 15,9 kWh. Tallene gælder grundudstyret; Sportline-udgaverne med større fælge ligger 0,2–0,5 kWh højere.</p>
<p>De nyeste tal er lavere end dem, du finder i EU's registreringsdata for 2025, hvor de danske Elroq 60 i snit stod til 16,1 kWh og Elroq 85 til 15,7 kWh. Škoda har siden opdateret software og drivlinje, og bilerne fra produktionen i slutningen af 2025 er typegodkendt med et lavere forbrug. Har du en Elroq fra det første år, så tjek tallet på registreringsattesten — det er dét, der gælder for netop din bil.</p>

<h2>Elroq 60, 85, 85x eller RS — hvad betyder valget for strømmen?</h2>
<p>Elroq 60 har et batteri på 58 kWh brugbar kapacitet og baghjulstræk med 190 hk. Elroq 85 har 77 kWh og 286 hk, men bruger kun 0,4 kWh mere pr. 100 km — det tungere batteri koster mindre, end man skulle tro. Med 15.000 km om året er forskellen omkring 60 kWh — svarende til {{kr 60}} om året. Firehjulstrækket i 85x lægger yderligere 0,2 kWh til, og RS med 340 hk lander på 15,9 kWh, så hele familien ligger inden for 0,8 kWh pr. 100 km.</p>
<p>Den tidligere Elroq 50 med det mindste batteri står ikke længere på den danske prisliste. I Škodas tekniske data fra maj 2025 havde den 15,7 kWh pr. 100 km — samme niveau som Elroq 60 dengang. Køber du brugt, er der altså ingen strømgevinst ved det lille batteri; det giver blot kortere rækkevidde.</p>

<h2>Hvad koster det at lade en Skoda Elroq?</h2>
<p>En fuld opladning af Elroq 85's 77 kWh batteri koster {{kr 77}} ved månedens elpris på {{pris_kwh}} — og lidt mere målt fra stikket, fordi der tabes strøm undervejs i opladningen. Elroq 60's 58 kWh koster {{kr 58}} at fylde. I praksis lader de fleste fra omkring 20 til 80 %, og så er det snarere en tredjedel af beløbet pr. gang. Pr. kilometer er regnestykket enklere: 100 km i en Elroq 60 koster {{kr 15,1}} hjemme, og et helt år med 15.000 km omkring {{kr 2265}} i strøm.</p>
<p>Bilen lader med op til 11 kW på vekselstrøm. Hjemme svarer det til en almindelig <a href="/ladestander/">ladeboks</a> på tre faser, og Škoda opgiver 6,5 timer fra 0 til 100 % for Elroq 60 og 8,5 timer for Elroq 85. Det passer til en nat i indkørslen, og flytter du opladningen til de billigste timer om natten, falder prisen yderligere. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> time for time.</p>

<h2>Lynladning på farten</h2>
<p>Elroq 85, 85x og RS lader med op til 165 kW på jævnstrøm og kommer fra 10 til 80 % på 29 minutter ifølge Škoda; Elroq 60 med op til 105 kW på 26 minutter. Lynladerne langs motorvejen er praktiske på langture, men prisen pr. kWh er typisk to-tre gange så høj som hjemme og afhænger af operatør, tidspunkt og abonnement. Batteriet lader hurtigst, når det er varmt, så brug navigationens forvarmning, før du kører ind til en lynlader om vinteren.</p>

<h2>Rækkevidde om vinteren og på motorvejen</h2>
<p>Elroq 85 har en WLTP-rækkevidde på 572 km og Elroq 60 på 453 km. Regn med 15–30 % mindre i dansk vinterkørsel, når kabinen og batteriet skal varmes, og dækkene ruller tungere i kulden. Det giver omkring 400–485 km for Elroq 85 og 315–385 km for Elroq 60 en kold dag. På motorvejen ved 130 km/t trækker luftmodstanden forbruget op på samme måde: 15–30 % over WLTP giver 18–20 kWh pr. 100 km for Elroq 85, og 100 km koster så {{kr 18-20}} hjemmeladet.</p>
<p>En varmepumpe henter varme fra udeluften og drivlinjens spildvarme og skåner rækkevidden mest i temperaturer omkring frysepunktet. Tjek udstyrslisten for den konkrete Elroq, om den har varmepumpe, hvis du kører langt om vinteren.</p>

<h2>Fem råd til et lavere forbrug</h2>
<p>Forvarm bilen, mens den er tilsluttet laderen, så varmen kommer fra nettet. Hold dæktrykket på Škodas anbefaling, og tjek det igen, når frosten kommer. Brug sædevarme og rattvarme frem for høj kabinetemperatur. Kør i bilens B-tilstand i byen, så mere energi genvindes ved opbremsning. Og vælg fælgstørrelse med omtanke: Sportline-hjulene ser godt ud, men koster op til en halv kWh pr. 100 km. Sammenlign Elroq med Teslas familie-SUV på siden om <a href="/elbil/tesla-model-y/">Tesla Model Y</a>, eller se hvordan en <a href="/elbil/">elbil</a> påvirker husstandens samlede forbrug.</p>`,
  faqs: [
    {
      question: "Hvad er Skoda Elroq's forbrug pr. km?",
      answer:
        "Ifølge Škodas danske prisliste bruger Elroq 60 15,1 kWh pr. 100 km, Elroq 85 15,5 kWh, 85x 15,7 kWh og RS 15,9 kWh efter WLTP. Det er 0,151–0,159 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en Skoda Elroq?",
      answer:
        "En fuld opladning af Elroq 85's 77 kWh batteri koster {{kr 77}} ved månedens elpris på {{pris_kwh}}, Elroq 60's 58 kWh {{kr 58}} ved samme pris. Pr. 100 km koster en Elroq 60 {{kr 15,1}} ved hjemmeladning.",
    },
    {
      question: "Bruger Elroq 85 mere strøm end Elroq 60?",
      answer:
        "Kun lidt: 15,5 mod 15,1 kWh pr. 100 km ifølge Škoda. Med 15.000 km om året er forskellen omkring 60 kWh, svarende til {{kr 60}} om året. Elroq 85 kører til gengæld omkring 120 km længere på en opladning.",
    },
    {
      question: "Hvor langt kører en Skoda Elroq om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost. Elroq 85 med 572 km WLTP kører typisk 400–485 km, Elroq 60 med 453 km omkring 315–385 km. Forvarmning ved laderen hjælper mest.",
    },
    {
      question: "Hvor lang tid tager det at lade en Elroq hjemme?",
      answer:
        "Med 11 kW på en ladeboks opgiver Škoda 6,5 timer fra 0 til 100 % for Elroq 60 og 8,5 timer for Elroq 85, 85x og RS. En almindelig stikkontakt lader langt langsommere og er kun en nødløsning.",
    },
  ],
  sources: [
    { name: "Škoda Danmark — Elroq priser og varianter (forbrug, rækkevidde, batteri)", url: "https://ww4.skoda.dk/prislister/elroq/" },
    { name: "Škoda Storyboard — Elroq, tekniske data (maj 2025)", url: "https://cdn.skoda-storyboard.com/2025/06/Skoda_Elroq_Technical_data_d5686460.pdf" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "60", watts: {}, whPerKm: 151, source: 0 },
    { name: "85", watts: {}, whPerKm: 155, source: 0 },
    { name: "85x", watts: {}, whPerKm: 157, source: 0 },
    { name: "RS", watts: {}, whPerKm: 159, source: 0 },
  ],
  publishDate: "2026-11-24",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Škodas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Škodas danske prisliste og EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default skodaElroq;
