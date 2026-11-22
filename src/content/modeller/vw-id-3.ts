import type { ModelData } from "@/lib/models";

const vwId3: ModelData = {
  slug: "vw-id-3",
  parent: "elbil",
  brand: "Volkswagen",
  name: "VW ID.3",
  released: "2026-04",
  synonyms: [
    "vw id 3 forbrug",
    "vw id3 strømforbrug",
    "id.3 neo forbrug",
    "volkswagen id.3 forbrug",
    "id3 forbrug pr km",
    "id.3 kwh pr 100 km",
    "id 3 neo rækkevidde",
  ],
  title: "VW ID.3 strømforbrug (2026) → ID.3 Neo i kWh pr. 100 km",
  description:
    "VW ID.3 Neo med 170, 190 og 231 hk: Volkswagens officielle WLTP-forbrug fra den danske prisliste, kWh om året, pris pr. 100 km og hvad en opladning koster.",
  intro:
    "Den opdaterede ID.3 Neo er en af de mest sparsomme elbiler fra Volkswagen-koncernen — og versionen med 190 hk bruger en anelse mindre end den svageste med 170 hk.",
  content: `<h2>Hvad bruger en VW ID.3 pr. 100 km?</h2>
<p>Volkswagen sælger i dag ID.3 i Danmark under navnet ID.3 Neo, og den danske prisliste oplyser et officielt WLTP-forbrug for hver motor og hvert udstyrsniveau. WLTP-tallet er målt som strøm fra stikkontakten, så tabet i bilens lader er med. Neo med 170 hk og 50 kWh brugbart batteri står til 14,1 kWh pr. 100 km, Neo med 190 hk og 58 kWh til 14,0 kWh, og Neo med 231 hk og det store 79 kWh batteri til 14,4 kWh.</p>
<p>Tallene i tabellen ovenfor er for det billigste udstyrsniveau, hvor motoren findes: Trend for 170 hk og Life for 190 og 231 hk. Style-udstyret ligger 0,1 kWh højere for hver motor, fx 14,5 kWh med 231 hk. Det er småting — 0,1 kWh pr. 100 km er 15 kWh om året med 15.000 km kørsel, svarende til {{kr 15}}.</p>

<h2>Den stærkere motor bruger ikke mere</h2>
<p>Det overraskende ved ID.3 Neo er, at mere effekt ikke betyder mere forbrug. 190 hk-versionen bruger 14,0 kWh og altså 0,1 kWh mindre end 170 hk-versionen, og den kører 490 km på en opladning mod 415 km. Selv topversionen med 231 hk bruger kun 0,3 kWh mere pr. 100 km end den svageste, men har et batteri, der er over halvanden gang så stort, og 626 km WLTP-rækkevidde.</p>
<p>Med 15.000 km om året bruger ID.3 Neo omkring 2.100–2.160 kWh. Forskellen mellem den mest og den mindst sparsomme version er 60 kWh om året, svarende til {{kr 60}}. Vælg derfor batteri efter, hvor langt du kører på en dag og på ferien — ikke efter strømregningen, som næsten er den samme.</p>

<h2>ID.3 Neo mod den ældre ID.3 og ID.4</h2>
<p>EU's registreringsdata viser, at de ID.3, der blev indregistreret i Danmark i 2025, havde et gennemsnitligt WLTP-forbrug på 15,3 kWh pr. 100 km med 170 hk og 15,7 kWh med 231 hk. Neo-versionerne ligger altså 1,2–1,3 kWh lavere. For den store version er det omkring 195 kWh mindre om året med vores profil, svarende til {{kr 195}}. Har du en brugt ID.3, står det tal, der gælder for netop din bil, på registreringsattesten.</p>
<p>Sammenlignet med den større <a href="/elbil/vw-id-4/">VW ID.4</a> er ID.3 Neo markant mere sparsom. ID.4 Pro med 286 hk og 77 kWh brugbart batteri står til 15,9 kWh pr. 100 km, ID.3 Neo med 231 hk og 79 kWh til 14,4 kWh. Forskellen på 1,5 kWh pr. 100 km bliver til 225 kWh om året — {{kr 225}}. Den mindre bil med lavere front skubber simpelthen mindre luft foran sig. Kun en sedan som <a href="/elbil/tesla-model-3/">Tesla Model 3</a> ligger lavere, med 13,0 kWh for baghjulstrukket RWD.</p>

<h2>Hvad koster det at lade en ID.3?</h2>
<p>En fuld opladning af det mindste batteri på 50 kWh brugbar kapacitet koster {{kr 50}} ved månedens elpris på {{pris_kwh}}, mellembatteriet på 58 kWh {{kr 58}} og det store på 79 kWh {{kr 79}} — lidt mere målt fra stikket på grund af ladetabet. 100 km i en ID.3 Neo med 190 hk koster {{kr 14}}, og en uge med 300 km pendling omkring {{kr 42}} i strøm.</p>
<p>Alle versioner lader med 11 kW på vekselstrøm. Volkswagen opgiver 5,5 timer fra 0 til 100 % for det lille batteri, 6,5 timer for mellembatteriet og 8,5 timer for det store, så en nat på en <a href="/ladestander/">ladeboks</a> fylder bilen. På lynlader tager det lille batteri op til 100 kW, mellembatteriet 105 kW og det store 183 kW, og 10–80 % tager 24–29 minutter. Til hverdag bør bilen lades hjemme om natten, hvor timepriserne typisk er lavest; læs om <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> time for time.</p>

<h2>Forbrug i virkeligheden</h2>
<p>WLTP er en laboratoriemåling med blandet by- og landevejskørsel. I praksis trækker kulde og motorvej mest. Regn med 15–30 % mere i dansk vintervejr og ved 130 km/t: 14,0 kWh bliver til 16,1–18,2 kWh pr. 100 km, og 100 km koster så {{kr 16,1-18,2}} hjemmeladet. WLTP-rækkevidden på 490 km for 190 hk-versionen bliver tilsvarende til omkring 345–415 km. Om sommeren i bykørsel kan du til gengæld komme under WLTP-tallet, fordi bilen genvinder energi ved hver opbremsning.</p>
<p>Gode vaner i en ID.3: Forvarm kabinen, mens bilen er tilsluttet, kør i B-tilstand i byen, og hold farten nede på motorvejen — 110 km/t i stedet for 130 km/t sparer mærkbart. Flere modeller står på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er VW ID.3's forbrug pr. km?",
      answer:
        "Ifølge Volkswagens danske prisliste bruger ID.3 Neo 14,1 kWh pr. 100 km med 170 hk, 14,0 kWh med 190 hk og 14,4 kWh med 231 hk efter WLTP. Det er 0,140–0,144 kWh pr. km, målt fra stikkontakten. Style-udstyret ligger 0,1 kWh højere.",
    },
    {
      question: "Hvad koster det at lade en VW ID.3?",
      answer:
        "En fuld opladning koster {{kr 50}} for det lille batteri på 50 kWh, {{kr 58}} for 58 kWh og {{kr 79}} for det store på 79 kWh ved månedens elpris på {{pris_kwh}}. 100 km koster {{kr 14}} ved hjemmeladning.",
    },
    {
      question: "Bruger ID.3 Neo mindre strøm end den gamle ID.3?",
      answer:
        "Ja. De ID.3, der blev indregistreret i Danmark i 2025, havde i gennemsnit 15,3–15,7 kWh pr. 100 km ifølge EU's registreringsdata. ID.3 Neo står til 14,0–14,4 kWh på Volkswagens prisliste.",
    },
    {
      question: "Hvilken ID.3 bruger mindst strøm?",
      answer:
        "ID.3 Neo med 190 hk og 58 kWh batteri: 14,0 kWh pr. 100 km. Det er 0,1 kWh mindre end 170 hk-versionen, og den kører 490 km på en opladning efter WLTP.",
    },
    {
      question: "Hvor langt kører en ID.3 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. Med 190 hk og 490 km WLTP er det typisk 345–415 km, med 231 hk og 626 km WLTP omkring 440–530 km.",
    },
  ],
  sources: [
    { name: "Volkswagen Danmark — ID.3 Neo prisliste (forbrug, rækkevidde, batteri), november 2026", url: "https://www.volkswagen.dk/app/da/prisliste/id3-neo/" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Neo 170 hk (50 kWh)", watts: {}, whPerKm: 141, source: 0 },
    { name: "Neo 190 hk (58 kWh)", watts: {}, whPerKm: 140, source: 0 },
    { name: "Neo 231 hk (79 kWh)", watts: {}, whPerKm: 144, source: 0 },
  ],
  publishDate: "2026-11-28",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Volkswagens officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Volkswagens danske prisliste for det billigste udstyr pr. motor, med EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default vwId3;
