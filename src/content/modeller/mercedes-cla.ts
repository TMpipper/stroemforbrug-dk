import type { ModelData } from "@/lib/models";

const mercedesCla: ModelData = {
  slug: "mercedes-cla",
  parent: "elbil",
  brand: "Mercedes-Benz",
  name: "Mercedes CLA (el)",
  released: "2025-03",
  synonyms: [
    "mercedes cla forbrug",
    "mercedes cla el strømforbrug",
    "cla 250+ forbrug",
    "elektrisk cla kwh pr 100 km",
    "mercedes cla 200 elbil forbrug",
    "cla 350 4matic forbrug",
    "mercedes cla rækkevidde vinter",
  ],
  title: "Mercedes CLA strømforbrug (2026) → elbilen i kWh pr. 100 km",
  description:
    "Den eldrevne Mercedes CLA 200, 250+ og 350 4MATIC: Mercedes' officielle WLTP-forbrug fra 12,6 kWh pr. 100 km, kWh om året, pris pr. 100 km og ladning.",
  intro:
    "Den eldrevne CLA er den mest sparsomme bil på vores sider: 12,6 kWh pr. 100 km for CLA 250+ og 772 km rækkevidde efter WLTP.",
  content: `<h2>Hvad bruger en elektrisk Mercedes CLA pr. 100 km?</h2>
<p>Den nye CLA er en lav, firedørs sedan, som Mercedes bygger på en ny platform til både el og hybrid. Her ser vi kun på elbilen. Mercedes' danske side med tekniske data opgiver tre versioner. CLA 200 har baghjulstræk, 165 kW (224 hk) og et nyttigt batteri på 58 kWh. CLA 250+ har baghjulstræk, 200 kW (272 hk) og 85 kWh. CLA 350 4MATIC har firehjulstræk, 260 kW (354 hk) og samme 85 kWh.</p>
<p>Forbruget efter WLTP er 12,7 kWh pr. 100 km for CLA 200, 12,6 kWh for CLA 250+ og 13,1 kWh for CLA 350 4MATIC. Det er målt som strøm fra stikkontakten, så ladetabet er med. Med 15.000 km om året bruger CLA 250+ omkring 1.890 kWh, svarende til {{kr 1890}} ved månedens elpris. 100 km koster {{kr 12,6-13,1}} ladet hjemme, afhængigt af version.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet. De 768 danske CLA med 200 kW-motoren lå mellem 12,2 og 13,7 kWh pr. 100 km med et gennemsnit på 12,7 kWh. Den firehjulstrukne med 260 kW lå på 13,3 kWh i gennemsnit.</p>

<h2>Derfor er CLA så sparsom</h2>
<p>CLA er lav og strømlinet, og den bruger 800 volt-teknik, som Mercedes også nævner i forbindelse med lynladning. Den største forklaring er formen. En lav sedan skubber langt mindre luft foran sig end en SUV, og det betyder mest ved motorvejsfart.</p>
<p>Det store batteri koster næsten intet ekstra. CLA 250+ bruger 0,1 kWh mindre pr. 100 km end CLA 200, selv om den vejer 10 kg mere og er stærkere. Den kører 772 km efter WLTP mod 528 km for CLA 200. Firehjulstrækket i CLA 350 4MATIC koster 0,5 kWh pr. 100 km, svarende til omkring 75 kWh om året eller {{kr 75}}.</p>

<h2>CLA mod Tesla Model 3, ID.7 og SUV'erne</h2>
<p>Den oplagte konkurrent er <a href="/elbil/tesla-model-3/">Tesla Model 3</a>, der bruger 13,0 kWh pr. 100 km med baghjulstræk og 14,3 kWh som Long Range AWD. CLA 250+ bruger 0,4 kWh mindre end den billigste Model 3, svarende til 60 kWh om året. Firehjulstrukne CLA 350 sparer 1,2 kWh pr. 100 km mod Model 3 Long Range AWD, omkring 180 kWh om året eller {{kr 180}}.</p>
<p>Mod <a href="/elbil/vw-id-7/">VW ID.7</a>, der er den mest sparsomme store bil på vores sider med 13,8 kWh i Style S, sparer CLA 250+ 1,2 kWh pr. 100 km. Mod en kompakt SUV som <a href="/elbil/kia-ev3/">Kia EV3</a> på 14,9 kWh er forskellen 2,3 kWh. Det er omkring 345 kWh om året, svarende til {{kr 345}}.</p>

<h2>Hvad koster det at lade en CLA?</h2>
<p>En fuld opladning af 85 kWh-batteriet koster {{kr 85}} ved månedens elpris på {{pris_kwh}}, og CLA 200's 58 kWh koster {{kr 58}} — lidt mere målt fra stikket. Hjemme lader alle versioner med op til 11 kW. Mercedes opgiver 6,5 timer fra 0 til 100 % for CLA 200 og 9 timer for 85 kWh-batteriet, så det klares på en nat på en <a href="/ladestander/">ladeboks</a>.</p>
<p>På lynlader tager CLA 200 op til 200 kW og de to andre op til 320 kW på ladere med 800 volt. Fra 10 til 80 % tager det 20–22 minutter. Mercedes opgiver, at 10 minutter på lynlader giver 285–325 km rækkevidde i CLA 250+. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>, hvis du vil time ladningen efter elprisen.</p>

<h2>Vinter og motorvej</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For CLA 250+ betyder det 14,5–16,4 kWh pr. 100 km, stadig mindre end mange SUV'er bruger om sommeren. Rækkevidden falder fra 772 km til omkring 595–670 km og for CLA 200 til omkring 405–460 km.</p>
<p>CLA har en topfart på 210 km/t, men forbruget vokser hurtigt over 120 km/t. Forvarm kabinen, mens bilen sidder i laderen, brug sædevarme frem for høj kabinetemperatur, og tjek dæktrykket, når det bliver koldt.</p>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er den elektriske Mercedes CLA's forbrug pr. km?",
      answer:
        "Ifølge Mercedes bruger CLA 200 12,7 kWh pr. 100 km, CLA 250+ 12,6 kWh og CLA 350 4MATIC 13,1 kWh efter WLTP. Det er 0,126–0,131 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at køre 100 km i en Mercedes CLA?",
      answer:
        "{{kr 12,6-13,1}} ved månedens elpris på {{pris_kwh}}, når du lader hjemme. Med 15.000 km om året er det omkring 1.890–1.965 kWh, svarende til {{kr 1890-1965}}.",
    },
    {
      question: "Bruger Mercedes CLA mindre strøm end Tesla Model 3?",
      answer:
        "Ja, ifølge de officielle WLTP-tal. CLA 250+ bruger 12,6 kWh pr. 100 km mod 13,0 kWh for Model 3 med baghjulstræk, og CLA 350 4MATIC 13,1 kWh mod 14,3 kWh for Model 3 Long Range AWD.",
    },
    {
      question: "Hvor langt kører en Mercedes CLA om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. CLA 250+ med 772 km efter WLTP kører typisk 595–670 km, CLA 200 omkring 405–460 km.",
    },
    {
      question: "Hvor hurtigt lader den elektriske CLA?",
      answer:
        "Op til 11 kW hjemme og op til 320 kW på lynlader for CLA 250+ og 350 4MATIC (200 kW for CLA 200). Fra 10 til 80 % tager det 20–22 minutter ifølge Mercedes.",
    },
  ],
  sources: [
    {
      name: "Mercedes-Benz Danmark — CLA elektrisk, oversigt og tekniske data (arkiveret kopi, 15. november 2026)",
      url: "https://web.archive.org/web/20261115224436/https://www.mercedes-benz.dk/passengercars/models/saloon/cla-electric/overview.html",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "CLA 200 (58 kWh)", watts: {}, whPerKm: 127, source: 0 },
    { name: "CLA 250+ (85 kWh)", watts: {}, whPerKm: 126, source: 0 },
    { name: "CLA 350 4MATIC (85 kWh)", watts: {}, whPerKm: 131, source: 0 },
  ],
  publishDate: "2026-12-11",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Mercedes-Benz' officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Mercedes-Benz' danske side med tekniske data for den eldrevne CLA — en arkiveret kopi fra november 2026, fordi siden ikke kunne hentes direkte — med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default mercedesCla;
