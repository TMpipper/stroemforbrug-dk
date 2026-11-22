import type { ModelData } from "@/lib/models";

const kiaEv3: ModelData = {
  slug: "kia-ev3",
  parent: "elbil",
  brand: "Kia",
  name: "Kia EV3",
  released: "2024-10",
  synonyms: [
    "kia ev3 forbrug",
    "kia ev3 strømforbrug",
    "ev3 kwh pr 100 km",
    "kia ev3 long range forbrug",
    "kia ev3 rækkevidde vinter",
    "ev3 gt-line forbrug",
    "kia ev3 forbrug pr km",
  ],
  title: "Kia EV3 strømforbrug (2026) → Standard og Long Range i kWh",
  description:
    "Kia EV3 med 58,3 og 81,4 kWh batteri: Kias officielle WLTP-forbrug for alle udstyrsvarianter, kWh om året, pris pr. 100 km og en fuld opladning.",
  intro:
    "Kia EV3 bruger 14,9–15,8 kWh pr. 100 km efter WLTP. Det store batteri koster ingen ekstra strøm i Access, mens udstyr og firehjulstræk løfter forbruget lidt.",
  content: `<h2>Hvad bruger en Kia EV3 pr. 100 km?</h2>
<p>Kia EV3 er Kias kompakte el-SUV, mindre end EV6 og med forhjulstræk som udgangspunkt. Kias danske prisliste for modelår 2027 opgiver forbruget i Wh pr. km for hver udstyrsvariant. Standard Range med 58,3 kWh-batteri bruger 149 Wh/km, svarende til 14,9 kWh pr. 100 km. Long Range med 81,4 kWh bruger 149–156 Wh/km med forhjulstræk og 158 Wh/km som firehjulstrukket Performance. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger en EV3 Access eller Prestige omkring 2.235–2.250 kWh, svarende til {{kr 2235-2250}} ved månedens elpris. Den firehjulstrukne Performance bruger omkring 2.370 kWh, svarende til {{kr 2370}}. 100 km koster {{kr 14,9-15,8}} ladet hjemme.</p>
<p>EU's registreringsdata for 2025 bekræfter tallene. De danske EV3 med 150 kW-motoren lå mellem 14,9 og 15,6 kWh pr. 100 km med et gennemsnit på 15,2 kWh.</p>

<h2>Standard eller Long Range, Access eller GT-Line?</h2>
<p>I EV3 betaler du ikke ekstra i strøm for det store batteri. Access bruger 149 Wh/km med begge batterier, men rækkevidden stiger fra 436 til 604 km efter WLTP. Det er usædvanligt, for normalt koster de ekstra kilo lidt forbrug.</p>
<p>Udstyret gør til gengæld en forskel. Med Long Range bruger Prestige 150 Wh/km, Upgrade 155 og GT-Line 156 Wh/km, især på grund af større fælge og ekstra udstyr. Forskellen mellem Access og GT-Line er 0,7 kWh pr. 100 km, svarende til omkring 105 kWh om året eller {{kr 105}}. Rækkevidden falder fra 604 til 583 km.</p>
<p>Performance med firehjulstræk og 265 hk ligger på 158 Wh/km og 572 km. Den ekstra motor koster 0,2–0,3 kWh pr. 100 km mod den forhjulstrukne Upgrade og GT-Line.</p>

<h2>Hvad koster det at lade en EV3?</h2>
<p>En fuld opladning af det store batteri koster {{kr 81,4}} ved månedens elpris på {{pris_kwh}}, det lille {{kr 58,3}} — lidt mere målt fra stikket, fordi der tabes strøm undervejs. Hjemme lader alle versioner med 11 kW. Kia opgiver 5 timer og 20 minutter fra 10 til 100 % for Standard Range og 7 timer og 15 minutter for Long Range, så en nat på en <a href="/ladestander/">ladeboks</a> er nok.</p>
<p>På lynlader tager Standard Range op til 101 kW og Long Range op til 128 kW. Fra 10 til 80 % tager det 29 og 31 minutter ifølge Kia. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Lader du om natten, hvor elprisen oftest er lavest, holder du årsregningen nede. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>EV3 mod andre kompakte elbiler</h2>
<p>EV3 er blandt de sparsomme kompakte SUV'er. <a href="/elbil/skoda-elroq/">Škoda Elroq</a> ligger på 15,1–15,9 kWh pr. 100 km og <a href="/elbil/bmw-ix1/">BMW iX1</a> på 15,5–18,1 kWh. <a href="/elbil/volvo-ex40/">Volvo EX40</a> bruger 17,1–18,1 kWh. Mod EX40 Single Motor sparer EV3 Access 2,2 kWh pr. 100 km, omkring 330 kWh om året, svarende til {{kr 330}}.</p>
<p>Mindre biler som <a href="/elbil/renault-5/">Renault 5</a> med 14,5–14,9 kWh er kun en anelse mere sparsomme, selv om EV3 er en større og højere bil. Den lille <a href="/elbil/citroen-e-c3/">Citroën ë-C3</a> bruger faktisk mere, 16,8–17,3 kWh.</p>

<h2>Vinter, motorvej og varmepumpe</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For en EV3 Long Range betyder det 17,1–19,4 kWh pr. 100 km og en rækkevidde på omkring 465–525 km. Standard Range kommer ned på 335–380 km.</p>
<p>Ifølge prislisten er varmepumpe standard fra Prestige og ekstraudstyr på Access. En varmepumpe henter varme fra udeluften og bruger mindre strøm på at varme kabinen end et almindeligt varmelegeme. Det betyder mest på korte ture i frost. Kia gør desuden opmærksom på, at fabriksmonteret ekstraudstyr kan påvirke forbrug og rækkevidde.</p>
<ul>
<li>Forvarm kabinen og batteriet, mens bilen sidder i laderen.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur.</li>
<li>Hold 110–120 km/t på langtur, og tjek dæktrykket, når det bliver koldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Kia EV3's forbrug pr. km?",
      answer:
        "Ifølge Kias danske prisliste bruger EV3 149–158 Wh pr. km efter WLTP, svarende til 14,9–15,8 kWh pr. 100 km, målt fra stikkontakten.",
    },
    {
      question: "Bruger EV3 Long Range mere strøm end Standard Range?",
      answer:
        "Nej, ikke i Access, hvor begge bruger 149 Wh/km. Long Range kører til gengæld 604 km mod 436 km efter WLTP. I de højere udstyrsvarianter stiger forbruget op til 156 Wh/km.",
    },
    {
      question: "Hvad koster det at lade en Kia EV3?",
      answer:
        "En fuld opladning koster {{kr 81,4}} for Long Range og {{kr 58,3}} for Standard Range ved månedens elpris på {{pris_kwh}} plus lidt ladetab. 100 km koster {{kr 14,9}} i Access.",
    },
    {
      question: "Hvor langt kører en Kia EV3 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Long Range kører typisk 465–525 km og Standard Range 335–380 km.",
    },
    {
      question: "Har Kia EV3 varmepumpe?",
      answer:
        "Ifølge Kias prisliste er varmepumpe standard fra Prestige og ekstraudstyr på Access. Den sparer mest strøm på korte ture i frost.",
    },
  ],
  sources: [
    {
      name: "Kia Danmark — EV3, prisliste modelår 2027 med rækkevidde, forbrug og ladetider",
      url: "https://www.kia.com/dk/modeller/ev3/prisliste/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard Range 58,3 kWh (Access, Prestige)", watts: {}, whPerKm: 149, source: 0 },
    { name: "Long Range 81,4 kWh, Access", watts: {}, whPerKm: 149, source: 0 },
    { name: "Long Range 81,4 kWh, Prestige", watts: {}, whPerKm: 150, source: 0 },
    { name: "Long Range 81,4 kWh, Upgrade", watts: {}, whPerKm: 155, source: 0 },
    { name: "Long Range 81,4 kWh, GT-Line", watts: {}, whPerKm: 156, source: 0 },
    { name: "Long Range Performance AWD", watts: {}, whPerKm: 158, source: 0 },
  ],
  publishDate: "2026-12-11",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Kias officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Kias danske prisliste for modelår 2027 med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default kiaEv3;
