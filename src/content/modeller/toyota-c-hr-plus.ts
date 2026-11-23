import type { ModelData } from "@/lib/models";

const toyotaCHrPlus: ModelData = {
  slug: "toyota-c-hr-plus",
  parent: "elbil",
  brand: "Toyota",
  name: "Toyota C-HR+",
  released: "2026-03",
  synonyms: [
    "toyota c-hr+ forbrug",
    "toyota c-hr plus strømforbrug",
    "c-hr+ elbil forbrug",
    "toyota chr+ kwh pr 100 km",
    "c-hr+ awd forbrug",
    "toyota c-hr elektrisk forbrug",
    "c-hr+ rækkevidde vinter",
  ],
  title: "Toyota C-HR+ strømforbrug (2026) → FWD og AWD i kWh pr. km",
  description:
    "Toyota C-HR+ med 77 kWh batteri: Toyotas officielle WLTP-forbrug fra 13,4 til 15,7 kWh pr. 100 km for Active og Executive, kWh om året og ladetider.",
  intro:
    "Den forhjulstrukne C-HR+ bruger 13,4–14,7 kWh pr. 100 km efter WLTP og kører op til 607 km. Med firehjulstræk bliver det 14,4–15,7 kWh, afhængigt af udstyr og fælge.",
  content: `<h2>Hvad bruger en Toyota C-HR+ pr. 100 km?</h2>
<p>C-HR+ er Toyotas elektriske kompakt-SUV med coupé-tag — ikke at forveksle med hybridbilen C-HR, som den deler navn og design med. Den har et batteri på 77 kWh, hvoraf 72 kWh kan bruges, og fås med forhjulstræk og 165 kW (224 hk) eller med firehjulstræk. Toyotas danske modelside opgiver 134–157 Wh pr. km for modellen, og sidens konfigurationer deler det op. Active med forhjulstræk bruger 134–147 Wh/km og kører 560–607 km. Active med firehjulstræk bruger 144–154 Wh/km og kører 511–548 km, og Executive med firehjulstræk 155–157 Wh/km og 501–507 km. Det svarer til 13,4–15,7 kWh pr. 100 km. WLTP-tallet er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger en forhjulstrukket C-HR+ omkring 2.010–2.205 kWh, svarende til {{kr 2010-2205}} ved månedens elpris. Med firehjulstræk bliver det 2.160–2.355 kWh, svarende til {{kr 2160-2355}}. 100 km koster {{kr 13,4-15,7}} ladet hjemme.</p>
<p>C-HR+ kom til Danmark i 2026 og er derfor ikke med i EU's registreringsdata for 2025. Tallene her er Toyotas egne typegodkendte WLTP-tal.</p>

<h2>Forhjulstræk eller firehjulstræk, Active eller Executive?</h2>
<p>Spændet inden for hver version skyldes især fælgene: den laveste værdi gælder bilen med de mindste fælge, den højeste bilen med store fælge og mere udstyr. Det konkrete tal for en bestemt bil står på dens registreringsattest.</p>
<p>Firehjulstrækket koster omkring 1 kWh pr. 100 km. Sammenlignet med de mindste fælge bruger Active med firehjulstræk 14,4 kWh mod 13,4 kWh med forhjulstræk, omkring 150 kWh om året eller {{kr 150}}, og rækkevidden falder fra 607 til 548 km. Executive med firehjulstræk og mere udstyr ligger på 15,5–15,7 kWh, og forskellen til den sparsomste C-HR+ er op til 2,3 kWh pr. 100 km — omkring 345 kWh om året, svarende til {{kr 345}}.</p>
<p>Har du ikke brug for firehjulstræk, er den forhjulstrukne Active den sparsomme vej. Executive giver til gengæld en indbygget lader på 22 kW, som kun hjælper, hvis du har trefaset 32 A eller lader på offentlige AC-ladere.</p>

<h2>Hvad koster det at lade en C-HR+?</h2>
<p>En fuld opladning af de 72 kWh, der kan bruges, koster {{kr 72}} ved månedens elpris på {{pris_kwh}}, lidt mere målt fra stikket, fordi der tabes strøm undervejs. En opladning fra 10 til 80 % fylder omkring 50 kWh og koster omkring {{kr 50}}. Hjemme fylder en nat på en <a href="/ladestander/">ladeboks</a> batteriet op.</p>
<p>På lynlader opgiver Toyota 10–80 % på omkring 28 minutter med 150 kW ved 25 °C — og med batteriforvarmning slået til 40 minutter før kan det samme ifølge Toyota nås ved −10 °C. Ladning på farten koster typisk mere pr. kWh end strøm fra eget stik, og prisen afhænger af operatør og abonnement. Den billige kWh er den, bilen får hjemme om natten, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>C-HR+ mod bZ4X, Urban Cruiser og konkurrenterne</h2>
<p>Den forhjulstrukne C-HR+ på de mindste fælge bruger mindre end Toyotas egen og større <a href="/elbil/toyota-bz4x/">bZ4X</a>, som ligger på 13,9–14,5 kWh pr. 100 km. Den lille <a href="/elbil/toyota-urban-cruiser/">Toyota Urban Cruiser</a> bruger 14,9–16,6 kWh, så C-HR+ med forhjulstræk sparer 0,2–1,7 kWh pr. 100 km mod en forhjulstrukket Urban Cruiser, selv om den er større og hurtigere.</p>
<p>Blandt konkurrenterne ligger C-HR+ på niveau med <a href="/elbil/tesla-model-y/">Tesla Model Y</a> på 13,1–16,2 kWh, og den forhjulstrukne ligger under <a href="/elbil/kia-ev3/">Kia EV3</a> på 14,9–15,8 kWh og <a href="/elbil/skoda-elroq/">Škoda Elroq</a> på 15,1–15,9 kWh. Mod Elroq sparer den forhjulstrukne C-HR+ 0,4–2,5 kWh pr. 100 km, omkring 60–375 kWh om året, svarende til {{kr 60-375}}.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>Om vinteren og ved motorvejsfart ligger forbruget typisk 15–30 % over WLTP. For en forhjulstrukket C-HR+ betyder det 15,4–19,1 kWh pr. 100 km og en rækkevidde på omkring 465–530 km på de mindste fælge. Med firehjulstræk kommer Active ned på 420–475 km. Toyota skriver selv, at især høj hastighed og lave temperaturer reducerer rækkevidden, og at klimaanlægget ikke er med i forbrugstallene.</p>
<ul>
<li>Slå batteriforvarmningen til før lynladning i frost — Toyota oplyser, at det holder ladetiden nede ved −10 °C.</li>
<li>Forvarm kabinen, mens bilen sidder i laderen, og brug sæde- og rattvarme.</li>
<li>Hold 110–120 km/t på langtur, og tjek dæktrykket, når det bliver koldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Toyota C-HR+'s forbrug pr. km?",
      answer:
        "Ifølge Toyotas danske side bruger C-HR+ 134–157 Wh pr. km efter WLTP: 134–147 Wh/km med forhjulstræk og 144–157 Wh/km med firehjulstræk.",
    },
    {
      question: "Hvor langt kører en Toyota C-HR+?",
      answer: "Op til 607 km efter WLTP med forhjulstræk og 501–548 km med firehjulstræk. Om vinteren og på motorvej skal du regne med 15–30 % mindre.",
    },
    {
      question: "Hvad koster det at køre 100 km i en C-HR+?",
      answer: "100 km koster {{kr 13,4-15,7}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af træk, udstyr og fælge.",
    },
    {
      question: "Er C-HR+ det samme som Toyota C-HR?",
      answer: "Nej. C-HR+ er en ren elbil med et batteri på 77 kWh. Den almindelige C-HR er en hybrid- og plugin-hybridbil.",
    },
    {
      question: "Hvor hurtigt lader en Toyota C-HR+?",
      answer: "Toyota opgiver 10–80 % på omkring 28 minutter med 150 kW ved 25 °C. Executive har en indbygget lader på 22 kW til AC-ladning.",
    },
  ],
  sources: [
    {
      name: "Toyota Danmark — C-HR+, modelside med elforbrug, batteri, rækkevidde og ladetider pr. konfiguration",
      url: "https://www.toyota.dk/nye-biler/toyota-c-hr-plus",
    },
  ],
  variants: [
    { name: "77 kWh, forhjulstræk (Active)", watts: {}, whPerKm: 134, source: 0 },
    { name: "77 kWh, firehjulstræk (Active)", watts: {}, whPerKm: 144, source: 0 },
    { name: "77 kWh, firehjulstræk (Executive)", watts: {}, whPerKm: 155, source: 0 },
  ],
  publishDate: "2026-12-21",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Toyotas officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tabellen viser den laveste værdi pr. version (de mindste fælge) fra Toyotas danske side. Modellen kom i 2026 og er derfor ikke med i EU's registreringsdata for 2025. Kilderne står nederst på siden.",
};

export default toyotaCHrPlus;
