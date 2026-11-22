import type { ModelData } from "@/lib/models";

const volvoEx40: ModelData = {
  slug: "volvo-ex40",
  parent: "elbil",
  brand: "Volvo",
  name: "Volvo EX40",
  released: "2024-02",
  synonyms: [
    "volvo ex40 forbrug",
    "volvo ex40 strømforbrug",
    "volvo ec40 forbrug",
    "ex40 kwh pr 100 km",
    "xc40 recharge forbrug",
    "volvo ex40 rækkevidde vinter",
    "ex40 twin motor forbrug",
  ],
  title: "Volvo EX40 strømforbrug (2026) → og EC40 i kWh pr. 100 km",
  description:
    "Volvo EX40 og EC40 med Single Motor, Extended Range og Twin Motor: Volvos officielle WLTP-forbrug, kWh om året, pris pr. 100 km og vinterrækkevidde.",
  intro:
    "EX40 bruger 17,1–18,1 kWh pr. 100 km efter WLTP, og coupé-søsteren EC40 0,3–0,5 kWh mindre. Twin Motor med firehjulstræk bruger mest.",
  content: `<h2>Hvad bruger en Volvo EX40 pr. 100 km?</h2>
<p>Volvo EX40 hed tidligere XC40 Recharge. Det er Volvos kompakte el-SUV, og EC40 er den samme bil med lavere, skrånende tag. Begge findes i tre versioner. Single Motor har baghjulstræk, 175 kW (238 hk) og et batteri på 70 kWh. Single Motor Extended Range har 185 kW (252 hk) og 82 kWh. Twin Motor har firehjulstræk, 300 kW (408 hk) og samme 82 kWh-batteri.</p>
<p>Volvos danske specifikationsside opgiver 17,1 kWh pr. 100 km for EX40 Single Motor, 17,2 kWh for Extended Range og 18,1 kWh for Twin Motor efter WLTP. Tallet er målt som strøm fra stikkontakten, så ladetabet er med. Med 15.000 km om året bruger EX40 2.565–2.715 kWh, svarende til {{kr 2565-2715}} ved månedens elpris. 100 km koster {{kr 17,1-18,1}} hjemmeladet.</p>
<p>EU's registreringsdata for 2025 rammer tæt på. Danske EX40 med 185 kW lå i gennemsnit på 17,1 kWh pr. 100 km og Twin Motor på 18,2 kWh.</p>

<h2>EC40: det lavere tag sparer lidt strøm</h2>
<p>EC40 har samme drivlinje, men det lavere tag giver mindre luftmodstand. Ifølge Volvos specifikationsside bruger den 16,8 kWh i Single Motor, 16,7 kWh i Extended Range og 17,7 kWh i Twin Motor. Det er 0,3–0,5 kWh mindre pr. 100 km end EX40, svarende til 45–75 kWh om året med 15.000 km. Rækkevidden er tilsvarende længere: EC40 Extended Range kører 569 km efter WLTP mod 557 km for EX40.</p>
<p>Registreringsdataene bekræfter afstanden. Danske EC40 med 185 kW lå i gennemsnit på 16,5 kWh pr. 100 km, 0,6 kWh under EX40.</p>

<h2>Hvilken version skal man vælge?</h2>
<p>Single Motor og Extended Range bruger næsten det samme, 17,1 mod 17,2 kWh. Det større batteri koster altså stort set ingen ekstra strøm. Det giver 478 km mod 557 km rækkevidde efter WLTP. Twin Motor bruger 0,9 kWh mere pr. 100 km end Extended Range, svarende til omkring 135 kWh om året eller {{kr 135}}. Det er prisen for den ekstra motor og firehjulstrækket, og Twin Motor kører 522 km.</p>
<p>Kører du mest kortere ture med lademulighed hjemme, rækker Single Motor. Skal bilen ofte på langtur, er Extended Range den økonomiske løsning, både i strøm og ved ladestanderen.</p>

<h2>Lading hjemme og på lynlader</h2>
<p>Hjemme på en 3-faset <a href="/ladestander/">ladeboks</a> opgiver Volvo 7 timer fra 0 til 100 % for det mindre batteri og 8 timer for det store. Bilen kan altså lades fuldt på en nat. En opladning fra 10 til 80 % af 82 kWh-batteriet tilfører under 60 kWh og koster under {{kr 60}} ved månedens elpris på {{pris_kwh}}.</p>
<p>På en 200 kW-lynlader tager 10–80 % 26 minutter for Single Motor og 28 minutter for de to versioner med det store batteri. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Natlig hjemmeladning, når elprisen oftest er lavest, holder udgiften nede. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>EX40 mod andre kompakte el-SUV'er</h2>
<p>EX40 er en af de mere strømkrævende i sin klasse. <a href="/elbil/bmw-ix1/">BMW iX1</a> eDrive20 ligger på 15,5–17,1 kWh pr. 100 km, og <a href="/elbil/audi-q4-e-tron/">Audi Q4 e-tron</a> som SUV på 15,7–16,6 kWh. Mod Q4 e-tron med 204 hk bruger EX40 Single Motor 1,4 kWh mere pr. 100 km, omkring 210 kWh om året, svarende til {{kr 210}}.</p>
<p>Den høje, kantede form og den høje vægt er det, der koster. <a href="/elbil/xpeng-g6/">XPeng G6</a> ligger på 16,9–18,4 kWh og er i samme niveau. Den større <a href="/elbil/vw-id-7/">VW ID.7</a> bruger 13,8–16,3 kWh, fordi den er lav og strømlinet.</p>

<h2>Vinter og motorvej</h2>
<p>I dansk frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For EX40 Extended Range betyder det 19,8–22,4 kWh pr. 100 km og en rækkevidde på omkring 430–480 km. Single Motor kommer ned på omkring 370–415 km. Volvo opgiver også et byforbrug efter WLTP på 11,6–12,9 kWh, så i bykørsel med lav fart rækker bilen meget længere end ved motorvejsfart.</p>
<ul>
<li>Forvarm kabinen, mens bilen sidder i laderen, så varmen tages fra nettet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur.</li>
<li>Hold 110–120 km/t på langtur; luftmodstanden vokser hurtigt med farten på en høj SUV.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Volvo EX40's forbrug pr. km?",
      answer:
        "Ifølge Volvo bruger EX40 17,1 kWh pr. 100 km som Single Motor, 17,2 kWh som Extended Range og 18,1 kWh som Twin Motor efter WLTP. Det er 0,171–0,181 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Bruger Volvo EC40 mindre strøm end EX40?",
      answer:
        "Ja, 0,3–0,5 kWh mindre pr. 100 km. EC40 ligger på 16,7–17,7 kWh ifølge Volvo, fordi det lavere tag giver mindre luftmodstand.",
    },
    {
      question: "Hvad koster det at køre 100 km i en EX40?",
      answer:
        "{{kr 17,1-18,1}} ved månedens elpris på {{pris_kwh}}, når du lader hjemme. Med 15.000 km om året er det {{kr 2565-2715}}.",
    },
    {
      question: "Hvor langt kører en EX40 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Extended Range med 557 km efter WLTP kører typisk 430–480 km, Single Motor omkring 370–415 km.",
    },
    {
      question: "Er Volvo EX40 det samme som XC40 Recharge?",
      answer:
        "Ja. Volvo omdøbte den eldrevne XC40 Recharge til EX40 og C40 Recharge til EC40. Bilerne er de samme, men drivlinjerne er opdateret undervejs, så tal for ældre årgange kan afvige.",
    },
  ],
  sources: [
    {
      name: "Volvo Cars Danmark — EX40, specifikationer (arkiveret kopi, 16. januar 2026)",
      url: "https://web.archive.org/web/20260116004048/https://www.volvocars.com/dk/cars/ex40-electric/specifications/",
    },
    {
      name: "Volvo Cars Danmark — EC40, specifikationer (arkiveret kopi, 17. juni 2026)",
      url: "https://web.archive.org/web/20260617215748/https://www.volvocars.com/dk/cars/ec40-electric/specifications/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "EX40 Single Motor (70 kWh)", watts: {}, whPerKm: 171, source: 0 },
    { name: "EX40 Single Motor Extended Range (82 kWh)", watts: {}, whPerKm: 172, source: 0 },
    { name: "EX40 Twin Motor (82 kWh)", watts: {}, whPerKm: 181, source: 0 },
    { name: "EC40 Single Motor (70 kWh)", watts: {}, whPerKm: 168, source: 1 },
    { name: "EC40 Single Motor Extended Range (82 kWh)", watts: {}, whPerKm: 167, source: 1 },
    { name: "EC40 Twin Motor (82 kWh)", watts: {}, whPerKm: 177, source: 1 },
  ],
  publishDate: "2026-12-10",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Volvos officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Volvos danske specifikationssider for EX40 og EC40 — arkiverede kopier fra januar og juni 2026, fordi siderne ikke kunne hentes direkte — med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default volvoEx40;
