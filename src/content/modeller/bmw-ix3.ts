import type { ModelData } from "@/lib/models";

const bmwIx3: ModelData = {
  slug: "bmw-ix3",
  parent: "elbil",
  brand: "BMW",
  name: "BMW iX3",
  released: "2026-03",
  synonyms: [
    "bmw ix3 forbrug",
    "bmw ix3 strømforbrug",
    "ix3 neue klasse forbrug",
    "ix3 50 xdrive forbrug",
    "ix3 40 forbrug",
    "bmw ix3 kwh pr 100 km",
    "ny bmw ix3 rækkevidde",
    "bmw ix3 forbrug motorvej",
  ],
  title: "BMW iX3 strømforbrug (2026) → Neue Klasse 40 og 50 xDrive",
  description:
    "Den nye BMW iX3 (Neue Klasse) som 40 og 50 xDrive: BMWs officielle WLTP- og motorvejsforbrug, kWh om året, pris pr. 100 km og en fuld opladning.",
  intro:
    "Den nye iX3 bruger 14,6 kWh pr. 100 km som baghjulstrukket iX3 40 og 15,1–17,9 kWh som iX3 50 xDrive efter WLTP. BMW oplyser også et motorvejstal: 19,4–22,7 kWh for 50 xDrive.",
  content: `<h2>Hvad bruger en BMW iX3 pr. 100 km?</h2>
<p>Den nye iX3 er den første bil på BMWs nye elbilplatform, Neue Klasse, og afløser den tidligere iX3, der var bygget på en benzin-X3. Den findes i to versioner. iX3 50 xDrive har to motorer, firehjulstræk og 345 kW (469 hk) og et batteri med 108,7 kWh nyttig kapacitet. Ifølge BMWs tekniske data bruger den 15,1–17,9 kWh pr. 100 km efter WLTP og kører 679–805 km. Den baghjulstrukne iX3 40 med 82,6 kWh nyttig kapacitet bruger 14,6 kWh pr. 100 km efter BMWs foreløbige tal og kører op til 636 km. WLTP-forbruget er målt fra stikkontakten med ladetabet regnet ind.</p>
<p>Med 15.000 km om året bruger iX3 40 omkring 2.190 kWh, svarende til {{kr 2190}} ved månedens elpris. iX3 50 xDrive bruger 2.265–2.685 kWh, svarende til {{kr 2265-2685}}. 100 km koster {{kr 14,6}} i iX3 40 og {{kr 15,1-17,9}} i iX3 50 xDrive, ladet hjemme.</p>
<p>Spændet for 50 xDrive skyldes fælge og udstyr. Den laveste værdi gælder bilen med de mindste fælge, den højeste bilen med store fælge og mere udstyr. Det konkrete tal for en bestemt bil står på dens registreringsattest.</p>

<h2>Ny iX3 mod den gamle: en stor forskel</h2>
<p>Den gamle iX3 med 210 kW og baghjulstræk lå i EU's registreringsdata for 2025 på 17,6–18,9 kWh pr. 100 km med et gennemsnit på 17,8 kWh. Det tal kan ikke bruges om den nye bil, men det viser springet. Den nye iX3 40 bruger omkring 3,2 kWh mindre pr. 100 km end gennemsnittet for den gamle, omkring 480 kWh om året eller {{kr 480}} — og det med et større batteri og mere kraft.</p>
<p>Forklaringen er en ny generation af motorer, batterier og elektronik på 800 volt. Neue Klasse er konstrueret som elbil fra begyndelsen, mens den gamle iX3 skulle dele plads og vægt med benzin- og dieselversionerne. Kigger du efter en brugt iX3, er det derfor værd at vide, hvilken generation det er: den gamle bruger tydeligt mere strøm.</p>

<h2>Motorvej: BMWs eget tal</h2>
<p>BMW oplyser ud over WLTP-tallet et særskilt motorvejsforbrug. For iX3 50 xDrive er det 19,4–22,7 kWh pr. 100 km, godt en fjerdedel over WLTP-tallet. På en tur på 300 km motorvej bruger bilen altså 58–68 kWh, svarende til {{kr 58-68}} med strøm hjemmefra. Om vinteren kommer kulden oveni: i frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP, og rækkevidden for 50 xDrive falder til omkring 520–700 km. iX3 40 kommer ned på 490–555 km.</p>
<ul>
<li>Forvarm kabinen og batteriet, mens bilen sidder i laderen.</li>
<li>Hold 110–120 km/t på langtur frem for 130 km/t — på motorvejen er farten den store post.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur, og tjek dæktrykket, når det bliver koldt.</li>
</ul>

<h2>Hvad koster det at lade en iX3?</h2>
<p>En fuld opladning af 50 xDrive-batteriet koster {{kr 108,7}} ved månedens elpris på {{pris_kwh}}, af iX3 40-batteriet {{kr 82,6}} — lidt mere målt fra stikket, fordi der tabes strøm undervejs. Hjemme lader iX3 med 11 kW som standard. BMW opgiver 11 timer fra 0 til 100 % for 50 xDrive, så en nat på en <a href="/ladestander/">ladeboks</a> fylder det meste af batteriet; med den valgfri 22 kW-lader tager det 5 timer og 45 minutter, hvis du har trefaset 32 A.</p>
<p>På lynlader tager iX3 50 xDrive op til 400 kW og iX3 40 op til 300 kW, og BMW opgiver 21 minutter fra 10 til 80 % for begge. En opladning fra 10 til 80 % fylder omkring 76 kWh i 50 xDrive. Lynladning på farten koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Ifølge BMW kan 50 xDrive også levere strøm tilbage til huset eller nettet med op til 11 kW, hvis ladeløsningen understøtter det. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>iX3 mod iX1, Model Y og Enyaq</h2>
<p>Den nye iX3 50 xDrive med de mindste fælge bruger mindre end BMWs egen og mindre <a href="/elbil/bmw-ix1/">iX1</a>, som ligger på 15,5–18,1 kWh pr. 100 km. <a href="/elbil/tesla-model-y/">Tesla Model Y</a> bruger 13,1–16,2 kWh og <a href="/elbil/skoda-enyaq/">Škoda Enyaq</a> 15,0–15,6 kWh. Mod <a href="/elbil/vw-id-4/">VW ID.4</a> på 15,9–16,8 kWh sparer iX3 40 omkring 1,3–2,2 kWh pr. 100 km, svarende til 195–330 kWh om året eller {{kr 195-330}}.</p>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er den nye BMW iX3's forbrug pr. km?",
      answer:
        "Ifølge BMW bruger iX3 50 xDrive 151–179 Wh pr. km efter WLTP, svarende til 15,1–17,9 kWh pr. 100 km. Den baghjulstrukne iX3 40 bruger 146 Wh pr. km efter BMWs foreløbige tal.",
    },
    {
      question: "Hvor meget bruger en iX3 på motorvej?",
      answer: "BMW opgiver selv 19,4–22,7 kWh pr. 100 km på motorvej for iX3 50 xDrive. 100 km på motorvej koster altså {{kr 19,4-22,7}} med strøm hjemmefra.",
    },
    {
      question: "Hvad koster det at lade en BMW iX3?",
      answer:
        "En fuld opladning koster {{kr 108,7}} for 50 xDrive og {{kr 82,6}} for iX3 40 ved månedens elpris på {{pris_kwh}} plus lidt ladetab.",
    },
    {
      question: "Bruger den nye iX3 mindre strøm end den gamle?",
      answer:
        "Ja. Den gamle iX3 lå på 17,8 kWh pr. 100 km i gennemsnit i EU's data for 2025. Den nye iX3 40 bruger 14,6 kWh, omkring 480 kWh mindre om året ved 15.000 km.",
    },
    {
      question: "Hvor hurtigt lader en BMW iX3?",
      answer: "Op til 400 kW for 50 xDrive og 300 kW for iX3 40. BMW opgiver 21 minutter fra 10 til 80 %. Hjemme lader den med 11 kW, som ekstraudstyr 22 kW.",
    },
  ],
  sources: [
    {
      name: "BMW Group — Medieinformation 09/2025, tekniske data for BMW iX3 50 xDrive (WLTP, motorvejsforbrug, batteri, ladning)",
      url: "https://newsroom.bmwgroup.com/global/download/761572de-617e-427f-a786-388f5fac2834/20261020085028517-142.pdf",
    },
    {
      name: "BMW Group — New entry-level BMW iX3 added to the range (iX3 40, foreløbige WLTP-tal, 31. marts 2026)",
      url: "https://newsroom.bmwgroup.com/emea/new-entry-level-bmw-ix3-added-to-the-range",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km; den tidligere iX3)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "iX3 40 (82,6 kWh, baghjulstræk)", watts: {}, whPerKm: 146, source: 1 },
    { name: "iX3 50 xDrive (108,7 kWh)", watts: {}, whPerKm: 151, source: 0 },
  ],
  publishDate: "2026-12-19",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (BMWs officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. BMWs danske side kunne ikke hentes, og der findes ingen arkiveret kopi; tallene er derfor fra BMW Groups egne pressematerialer. 50 xDrive vises med den laveste værdi (de mindste fælge), og tallet for iX3 40 er BMWs foreløbige. Kilderne står nederst på siden.",
};

export default bmwIx3;
