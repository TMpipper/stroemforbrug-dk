import type { ModelData } from "@/lib/models";

const vwIdBuzz: ModelData = {
  slug: "vw-id-buzz",
  parent: "elbil",
  brand: "Volkswagen",
  name: "VW ID. Buzz",
  released: "2022-09",
  synonyms: [
    "vw id buzz forbrug",
    "id buzz strømforbrug",
    "id. buzz kwh pr 100 km",
    "id buzz lang forbrug",
    "id buzz gtx forbrug",
    "volkswagen id buzz rækkevidde",
    "id buzz forbrug pr km",
  ],
  title: "VW ID. Buzz strømforbrug (2026) → kort, lang og GTX i kWh",
  description:
    "VW ID. Buzz med kort og lang akselafstand: Volkswagens officielle WLTP-forbrug for 190, 286 og 340 hk og GTX, kWh om året, pris pr. 100 km og vinterforbrug.",
  intro:
    "ID. Buzz bruger omkring en femtedel mere strøm end en ID.4 med samme motor, fordi en høj minibus skubber mere luft foran sig — men pr. sæde er regnestykket et andet.",
  content: `<h2>Hvad bruger en VW ID. Buzz pr. 100 km?</h2>
<p>Volkswagen har to danske prislister for ID. Buzz, én for den korte og én for den lange akselafstand, og begge oplyser et officielt WLTP-forbrug pr. version. Tallet er målt som strøm fra stikkontakten, så tabet i laderen er regnet med. Den korte ID. Buzz bruger 19,2 kWh pr. 100 km med 190 hk og det mindre batteri, 19,4 kWh med 286 hk og baghjulstræk og 21,3 kWh med 340 hk og firehjulstræk (4MOTION). Den lange med 286 hk står til 20,2 kWh og med 340 hk til 21,0 kWh. GTX, den sportslige topmodel, ligger på 21,5 kWh som kort og 21,2 kWh som lang.</p>
<p>Tallene i tabellen ovenfor er for Life-udstyret, den billigste udgave med hver motor. Style-udstyret ligger 0,3 kWh højere med 286 hk; med 340 hk har Style samme tal som GTX. Med 15.000 km om året bliver forskellen mellem Life og Style med 286 hk omkring 45 kWh, svarende til {{kr 45}} om året.</p>

<h2>Kort eller lang, baghjulstræk eller 4MOTION?</h2>
<p>Den lange ID. Buzz har plads til syv og et større batteri på 86 kWh brugbart mod 79 kWh i den korte. Med 286 hk koster den ekstra længde 0,8 kWh pr. 100 km, altså 120 kWh om året med vores profil. Med 340 hk og firehjulstræk er det omvendt: Her bruger den lange 21,0 kWh og den korte 21,3 kWh ifølge Volkswagens prislister. Også GTX er en anelse mere sparsom som lang.</p>
<p>Det store spring i forbrug kommer med firehjulstrækket. Kort ID. Buzz med 340 hk og 4MOTION bruger 1,9 kWh mere pr. 100 km end med 286 hk og baghjulstræk — omkring 285 kWh om året eller {{kr 285}}. Den billigste at køre er den korte med 190 hk og 58 kWh brugbart batteri, men den har også den korteste rækkevidde: 355 km efter WLTP mod 455 km for 286 hk og 480 km for den lange.</p>
<p>Med 15.000 km om året bruger en kort ID. Buzz med 286 hk omkring 2.910 kWh og en lang omkring 3.030 kWh. De firehjulstrukne versioner ender på 3.150–3.225 kWh.</p>

<h2>ID. Buzz mod ID.4</h2>
<p>En ID. Buzz er bygget på samme teknik som <a href="/elbil/vw-id-4/">VW ID.4</a> med samme 286 hk-motor og et batteri i næsten samme størrelse, men karrosseriet er højt og fladt foran. Det koster luftmodstand. ID.4 Pro står til 15,9 kWh pr. 100 km og kort ID. Buzz med 286 hk til 19,4 kWh. Forskellen på 3,5 kWh pr. 100 km bliver til 525 kWh om året ved 15.000 km — {{kr 525}} om året. Til gengæld har ID. Buzz plads til fem eller syv personer og langt mere bagage. Kører I ofte fuldt hus, er forbruget pr. passager lavere end i to mindre biler.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet: de danske ID. Buzz med 286 hk lå på 19,1–21,1 kWh pr. 100 km med et gennemsnit på 20,2 kWh, og versionerne med 340 hk på 20,4–21,6 kWh.</p>

<h2>Hvad koster det at lade en ID. Buzz?</h2>
<p>En fuld opladning af den korte ID. Buzz med 79 kWh brugbart batteri koster {{kr 79}} ved månedens elpris på {{pris_kwh}}, den lange med 86 kWh {{kr 86}} og den korte 190 hk-version med 58 kWh {{kr 58}} — lidt mere målt fra stikket. 100 km i en kort ID. Buzz med 286 hk koster {{kr 19,4}}, og en sommerferietur på 1.000 km omkring {{kr 194}} i strøm, hvis al strømmen er ladet hjemme.</p>
<p>Alle versioner lader med 11 kW på vekselstrøm; Volkswagen opgiver 6,5 timer fra 0 til 100 % for det lille batteri, 8,5 timer for det mellemste og 9 timer for den lange. På lynlader tager den korte op til 185 kW og den lange 200 kW, og 10–80 % tager 26–29 minutter. Med et så stort batteri betyder tidspunktet meget: 79–86 kWh ladet om natten i stedet for i aftentimerne mellem 17 og 21, hvor nettariffen er højest, gør en mærkbar forskel på hver opladning. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> time for time, og læs om <a href="/ladestander/">ladeboksen</a>.</p>

<h2>Vinter, motorvej og last</h2>
<p>En høj minibus mærker farten tydeligere end en lav personbil, fordi luftmodstanden vokser med frontfladen. Regn med 15–30 % mere forbrug ved 130 km/t og i frost: kort ID. Buzz med 286 hk går fra 19,4 til 22,3–25,2 kWh pr. 100 km, og 100 km koster så {{kr 22,3-25,2}} hjemmeladet. Rækkevidden på 455 km efter WLTP bliver tilsvarende til omkring 320–385 km. Tagboks, cykelholder og trailer lægger mere oveni.</p>
<p>Sænk farten på motorvejen til 110 km/t, forvarm bilen, mens den er tilsluttet, og planlæg lynladning undervejs med bilens navigation, så batteriet er varmt ved ladestoppet. Flere modeller står på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er VW ID. Buzz' forbrug pr. km?",
      answer:
        "Ifølge Volkswagens danske prislister bruger ID. Buzz 19,2–21,5 kWh pr. 100 km efter WLTP: 19,4 kWh som kort med 286 hk, 20,2 kWh som lang med 286 hk og 21,0–21,5 kWh med 340 hk og firehjulstræk. Det er 0,19–0,22 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en VW ID. Buzz?",
      answer:
        "En fuld opladning koster {{kr 79}} for den korte med 79 kWh brugbart batteri og {{kr 86}} for den lange med 86 kWh ved månedens elpris på {{pris_kwh}}. 100 km i en kort ID. Buzz med 286 hk koster {{kr 19,4}} ved hjemmeladning.",
    },
    {
      question: "Bruger den lange ID. Buzz mere strøm end den korte?",
      answer:
        "Med 286 hk ja: 20,2 mod 19,4 kWh pr. 100 km. Med 340 hk og 4MOTION er den lange en anelse mere sparsom, 21,0 mod 21,3 kWh, ifølge Volkswagens prislister.",
    },
    {
      question: "Hvor meget mere bruger ID. Buzz end en ID.4?",
      answer:
        "Kort ID. Buzz med 286 hk bruger 19,4 kWh pr. 100 km mod 15,9 kWh for ID.4 Pro med samme motor. Med 15.000 km om året er det omkring 525 kWh mere, svarende til {{kr 525}} om året.",
    },
    {
      question: "Hvor langt kører en ID. Buzz om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. Kort ID. Buzz med 286 hk og 455 km WLTP kører typisk 320–385 km, den lange med 480 km WLTP omkring 335–410 km.",
    },
  ],
  sources: [
    { name: "Volkswagen Danmark — ID. Buzz kort, prisliste (forbrug, rækkevidde, batteri), november 2026", url: "https://www.volkswagen.dk/app/da/prisliste/id-buzz-kort/" },
    { name: "Volkswagen Danmark — ID. Buzz lang, prisliste (forbrug, rækkevidde, batteri), november 2026", url: "https://www.volkswagen.dk/app/da/prisliste/id-buzz-lang/" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Kort 190 hk (58 kWh)", watts: {}, whPerKm: 192, source: 0 },
    { name: "Kort 286 hk (79 kWh)", watts: {}, whPerKm: 194, source: 0 },
    { name: "Kort 340 hk 4MOTION", watts: {}, whPerKm: 213, source: 0 },
    { name: "Kort GTX", watts: {}, whPerKm: 215, source: 0 },
    { name: "Lang 286 hk (86 kWh)", watts: {}, whPerKm: 202, source: 1 },
    { name: "Lang 340 hk 4MOTION", watts: {}, whPerKm: 210, source: 1 },
    { name: "Lang GTX", watts: {}, whPerKm: 212, source: 1 },
  ],
  publishDate: "2026-11-29",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Volkswagens officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Volkswagens danske prislister for kort og lang ID. Buzz (Life-udstyr, GTX for sig), med EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default vwIdBuzz;
