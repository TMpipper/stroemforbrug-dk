import type { ModelData } from "@/lib/models";

const xpengG6: ModelData = {
  slug: "xpeng-g6",
  parent: "elbil",
  brand: "Xpeng",
  name: "Xpeng G6",
  released: "2025-07",
  synonyms: [
    "xpeng g6 forbrug",
    "xpeng g6 strømforbrug",
    "xpeng g6 kwh pr 100 km",
    "xpeng g6 long range forbrug",
    "xpeng g6 awd forbrug",
    "new g6 forbrug",
    "xpeng g6 rækkevidde vinter",
  ],
  title: "Xpeng G6 strømforbrug (2026) → kWh, ladepris og rækkevidde",
  description:
    "Den nye Xpeng G6: Xpengs officielle WLTP-forbrug for Standard Range, Long Range og AWD Performance, kWh om året, pris pr. 100 km og hvad en opladning koster.",
  intro:
    "G6 er bygget til hurtig lynladning snarere end til lavt forbrug: med 16,9–18,4 kWh pr. 100 km bruger den mere end både Tesla Model Y og Audi Q4 Sportback.",
  content: `<h2>Hvad bruger en Xpeng G6 pr. 100 km?</h2>
<p>Den opdaterede G6, som Xpeng kalder New G6, sælges i Danmark i tre versioner, og Xpengs danske konfigurator oplyser et officielt WLTP-forbrug for hver af dem. Tallet er målt som strøm fra stikkontakten, så ladetabet er med. RWD Standard Range med 252 hk og et LFP-batteri på 68,5 kWh brutto står til 16,9 kWh pr. 100 km. RWD Long Range med 296 hk og 80,8 kWh brutto bruger 17,9 kWh, og den firehjulstrukne AWD Performance med 487 hk og samme batteri 18,4 kWh.</p>
<p>Alle tre tal er oplyst med 20-tommer fælge. Long Range kan også fås med 18-tommer fælge, og Xpeng oplyser da en WLTP-rækkevidde på 535 km mod 525 km med 20-tommer — de mindre hjul sparer altså lidt, men Xpeng har ikke offentliggjort et særskilt forbrugstal for dem. Tabellen ovenfor bruger derfor 20-tommer-tallene for alle versioner.</p>

<h2>Standard Range, Long Range eller AWD?</h2>
<p>Standard Range er den sparsomste og bruger 1,0 kWh mindre pr. 100 km end Long Range. Med 15.000 km om året er det 150 kWh, svarende til {{kr 150}} om året. Til gengæld kører den 470 km efter WLTP mod 525 km. Det mindre batteri er lettere, og motoren er svagere, og begge dele trækker forbruget ned.</p>
<p>AWD Performance med 487 hk og 4,1 sekunder fra 0 til 100 km/t bruger kun 0,5 kWh mere end Long Range — omkring 75 kWh om året eller {{kr 75}}. Det er en lille merpris for den ekstra motor og næsten 200 hk mere. Med 15.000 km om året bruger G6 omkring 2.535 kWh som Standard Range, 2.685 kWh som Long Range og 2.760 kWh som AWD Performance.</p>

<h2>New G6 mod den første G6</h2>
<p>Den første G6, der kom til Danmark i 2024, stod ifølge Xpeng til 17,5–17,9 kWh pr. 100 km. EU's registreringsdata for 2025 viser de danske G6 med 190 og 210 kW (de første baghjulstrukne versioner) på 17,5 kWh pr. 100 km og den firehjulstrukne med 350 kW på 17,9 kWh, mens den nye AWD Performance med 358 kW ligger på 18,4 kWh. Den nye Standard Range bruger altså mindre end den gamle, mens den nye Long Range og AWD bruger 0,4–0,5 kWh mere end forgængerne. Det store spring i den nye G6 er ikke forbruget, men ladningen: 10–80 % på 12 minutter ved op til 451 kW mod omkring 20 minutter tidligere.</p>

<h2>G6 mod Tesla Model Y og Audi Q4 Sportback</h2>
<p>G6 er en coupé-SUV på størrelse med <a href="/elbil/tesla-model-y/">Tesla Model Y</a>, og her er forskellen tydelig. Model Y Premium Long Range RWD står til 14,2 kWh pr. 100 km, G6 Long Range til 17,9 kWh. Over 15.000 km er de 3,7 kWh pr. 100 km omkring 555 kWh om året, svarende til {{kr 555}}. Også <a href="/elbil/audi-q4-e-tron/">Audi Q4 Sportback</a> performance med 15,8 kWh bruger mindre, omkring 315 kWh om året. Har du lang pendling og kører mange kilometer, er det en reel forskel; kører du typisk 10.000 km om året, er den omkring to tredjedele så stor.</p>

<h2>Hvad koster det at lade en Xpeng G6?</h2>
<p>Xpeng oplyser kun batteriernes bruttokapacitet. Den brugbare del er lidt mindre, men tabet ved opladningen kommer oveni, så bruttotallet er et rimeligt overslag over, hvad en opladning fra næsten tom koster: omkring {{kr 80,8}} for det store batteri og {{kr 68,5}} for det lille ved månedens elpris på {{pris_kwh}}. 100 km i en G6 Long Range koster {{kr 17,9}} hjemmeladet, og en arbejdsuge med 250 km omkring {{kr 44,8}}.</p>
<p>På vekselstrøm lader G6 med 11 kW, og Xpeng opgiver 7,3–9,2 timer fra 0 til 100 %. Det passer til en nat på en <a href="/ladestander/">ladeboks</a>, hvor bilen kan lade i de billigste timer. Den meget hurtige lynladning er mest værd på langture; til hverdag er hjemmeladning langt billigere pr. kWh end offentlige lynladere. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a> time for time.</p>

<h2>Rækkevidde om vinteren</h2>
<p>LFP-batterier er typisk mere følsomme for kulde end andre battericeller, og en stor SUV mærker motorvejsfart. Regn med 15–30 % mere forbrug i dansk frost og ved 130 km/t: Long Range-versionens 17,9 kWh bliver til 20,6–23,3 kWh pr. 100 km, og 100 km koster så {{kr 20,6-23,3}} hjemmeladet. WLTP-rækkevidden på 525 km bliver til omkring 365–445 km. Forvarm bilen via appen, mens den er tilsluttet, så batteri og kabine er varme, før turen starter, og brug navigationens planlægning af lynladning, så batteriet varmes op inden ladestoppet. Flere modeller står på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Xpeng G6's forbrug pr. km?",
      answer:
        "Ifølge Xpengs danske konfigurator bruger den nye G6 16,9 kWh pr. 100 km som RWD Standard Range, 17,9 kWh som RWD Long Range og 18,4 kWh som AWD Performance efter WLTP med 20-tommer fælge. Det er 0,169–0,184 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en Xpeng G6?",
      answer:
        "Det store batteri på 80,8 kWh brutto koster omkring {{kr 80,8}} at lade fra næsten tom ved månedens elpris på {{pris_kwh}}, det lille på 68,5 kWh omkring {{kr 68,5}}. 100 km i en G6 Long Range koster {{kr 17,9}} ved hjemmeladning.",
    },
    {
      question: "Bruger Xpeng G6 mere strøm end Tesla Model Y?",
      answer:
        "Ja. G6 Long Range bruger 17,9 kWh pr. 100 km og Model Y Premium Long Range RWD 14,2 kWh efter producenternes WLTP-tal. Med 15.000 km om året er forskellen omkring 555 kWh, svarende til {{kr 555}}.",
    },
    {
      question: "Hvor meget mere bruger G6 AWD Performance?",
      answer:
        "AWD Performance bruger 18,4 kWh pr. 100 km mod 17,9 kWh for Long Range med baghjulstræk. Med 15.000 km om året er det omkring 75 kWh mere, svarende til {{kr 75}}.",
    },
    {
      question: "Hvor langt kører en Xpeng G6 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. G6 Long Range med 525 km WLTP kører typisk 365–445 km på en opladning en kold vinterdag, Standard Range med 470 km omkring 330–400 km.",
    },
  ],
  sources: [
    { name: "Xpeng Danmark — New G6, konfigurator (forbrug, rækkevidde, batteri pr. version)", url: "https://store.xpeng.com/dk/configurator/NEW_G6" },
    { name: "Xpeng Danmark — G6, modelside og specifikationer", url: "https://www.xpeng.com/dk/model/g6" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "RWD Standard Range", watts: {}, whPerKm: 169, source: 0 },
    { name: "RWD Long Range", watts: {}, whPerKm: 179, source: 0 },
    { name: "AWD Performance", watts: {}, whPerKm: 184, source: 0 },
  ],
  publishDate: "2026-11-30",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Xpengs officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Xpengs danske konfigurator med 20-tommer fælge, med EU's registreringsdata (EEA) som krydstjek — kilderne står nederst på siden.",
};

export default xpengG6;
