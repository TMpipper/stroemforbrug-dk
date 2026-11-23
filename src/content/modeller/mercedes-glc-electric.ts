import type { ModelData } from "@/lib/models";

const mercedesGlcElectric: ModelData = {
  slug: "mercedes-glc-electric",
  parent: "elbil",
  brand: "Mercedes-Benz",
  name: "Mercedes GLC elektrisk",
  released: "2026-04",
  synonyms: [
    "mercedes glc elektrisk forbrug",
    "mercedes glc el strømforbrug",
    "glc ev forbrug",
    "glc 250 electric forbrug",
    "glc 400 4matic forbrug",
    "mercedes glc elbil kwh pr 100 km",
    "elektrisk glc rækkevidde vinter",
  ],
  title: "Mercedes GLC elektrisk strømforbrug (2026) → GLC 250 til 400",
  description:
    "Den elektriske Mercedes GLC som GLC 250, 300 4MATIC og 400 4MATIC: officielt WLTP-forbrug fra 15,1 til 16,0 kWh pr. 100 km, kWh om året og ladetider.",
  intro:
    "Den elektriske GLC bruger 15,1–16,0 kWh pr. 100 km efter WLTP. Topmodellen GLC 400 4MATIC med det store batteri bruger mindre end GLC 300 4MATIC og kører længst: 673 km.",
  content: `<h2>Hvad bruger en elektrisk Mercedes GLC pr. 100 km?</h2>
<p>Den elektriske GLC er Mercedes' nye el-SUV i mellemklassen, konstrueret som elbil med 800 volt-teknik og ikke en ombygget udgave af GLC med forbrændingsmotor. Mercedes' danske side med tekniske data opgiver tre versioner. GLC 250 har baghjulstræk og 260 kW (354 hk) og bruger 15,1 kWh pr. 100 km efter WLTP. GLC 300 4MATIC har firehjulstræk og 310 kW (421 hk) og bruger 16,0 kWh. Begge har et batteri med 85 kWh nyttig kapacitet. GLC 400 4MATIC med 360 kW (489 hk) og 94 kWh bruger 15,8 kWh. Rækkevidden er 647, 613 og 673 km. Tallene er målt fra stikkontakten, så ladetabet er regnet med.</p>
<p>Med 15.000 km om året bruger GLC 250 omkring 2.265 kWh, svarende til {{kr 2265}} ved månedens elpris. GLC 300 4MATIC bruger omkring 2.400 kWh, svarende til {{kr 2400}}, og GLC 400 4MATIC omkring 2.370 kWh, svarende til {{kr 2370}}. 100 km koster {{kr 15,1-16}} ladet hjemme.</p>
<p>Den elektriske GLC kom på markedet i 2026 og er derfor ikke med i EU's registreringsdata for 2025. Tallene er Mercedes' egne for den konfiguration, siden viser; fælge og udstyr kan flytte dem lidt, og det konkrete tal for en bestemt bil står på dens registreringsattest.</p>

<h2>GLC 250, 300 eller 400?</h2>
<p>Den baghjulstrukne GLC 250 er den sparsomme. Firehjulstrækket i GLC 300 4MATIC koster 0,9 kWh pr. 100 km, omkring 135 kWh om året eller {{kr 135}}, og rækkevidden falder fra 647 til 613 km. Til gengæld går GLC 300 fra 0 til 100 km/t på 4,7 sekunder mod 5,9 og må trække 2.400 kg mod 2.200 kg.</p>
<p>Det usædvanlige er GLC 400 4MATIC. Selv om den er kraftigst og tungest (2.535 kg mod 2.485 kg for GLC 300), bruger den 0,2 kWh mindre pr. 100 km end GLC 300 og kører 60 km længere. Det større batteri på 94 kWh giver rækkevidden, og efter Mercedes' WLTP-tal koster den ekstra kraft intet ekstra forbrug. Skal du have firehjulstræk og kører langt, er GLC 400 altså ikke dyrere i strøm.</p>

<h2>Hvad koster det at lade en elektrisk GLC?</h2>
<p>En fuld opladning af 85 kWh-batteriet koster {{kr 85}} ved månedens elpris på {{pris_kwh}}, af 94 kWh-batteriet {{kr 94}} — lidt mere målt fra stikket, fordi der tabes strøm undervejs. Hjemme lader GLC med 11 kW, og Mercedes opgiver 9 timer fra 0 til 100 % for 85 kWh og 10,5 timer for 94 kWh. En nat på en <a href="/ladestander/">ladeboks</a> fylder altså det meste af batteriet.</p>
<p>På lynlader er GLC hurtig: op til 320 kW for GLC 250 og 300 og 330 kW for GLC 400, og Mercedes opgiver 22 minutter fra 10 til 80 %. Efter 10 minutters lynladning har bilen ifølge Mercedes 215–305 km mere rækkevidde efter WLTP, afhængigt af version. Den hurtige ladning har sin pris: offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, afhængigt af operatør og abonnement. Lad derfor helst hjemme om natten, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>GLC mod iX3, EQA og de andre store SUV'er</h2>
<p>Den nærmeste konkurrent er den nye <a href="/elbil/bmw-ix3/">BMW iX3</a>, der bruger 14,6 kWh som baghjulstrukket iX3 40 og 15,1–17,9 kWh som firehjulstrukket 50 xDrive. GLC 400 4MATIC og iX3 50 xDrive ligger altså tæt, og forskellen afhænger mest af fælgene.</p>
<p>Mercedes' egen og mindre <a href="/elbil/mercedes-eqa/">EQA</a> bruger 14,6 kWh som EQA 250+ og 17,1 kWh som EQA 350 4MATIC. Den firehjulstrukne GLC 400 bruger altså 1,3 kWh mindre pr. 100 km end en firehjulstrukket EQA, omkring 195 kWh om året, svarende til {{kr 195}} — i en større og hurtigere bil. <a href="/elbil/polestar-4/">Polestar 4</a> ligger på 17,8–21,7 kWh, og <a href="/elbil/tesla-model-y/">Tesla Model Y</a> på 13,1–16,2 kWh.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For GLC 250 betyder det 17,4–19,6 kWh pr. 100 km og en rækkevidde på omkring 500–565 km. GLC 400 4MATIC kommer ned på 520–585 km og GLC 300 4MATIC på 470–535 km.</p>
<ul>
<li>Forvarm kabinen og batteriet via appen, mens bilen sidder i laderen.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur.</li>
<li>Hold 110–120 km/t på langtur: en høj SUV mærker luftmodstanden.</li>
<li>Tjek dæktrykket, når det bliver koldt — lavt tryk koster rækkevidde.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er den elektriske Mercedes GLC's forbrug pr. km?",
      answer:
        "Ifølge Mercedes' danske tekniske data bruger GLC 250 151 Wh pr. km, GLC 300 4MATIC 160 Wh pr. km og GLC 400 4MATIC 158 Wh pr. km efter WLTP.",
    },
    {
      question: "Hvor langt kører en elektrisk GLC?",
      answer: "647 km for GLC 250, 613 km for GLC 300 4MATIC og 673 km for GLC 400 4MATIC efter WLTP. Om vinteren og på motorvej skal du regne med 15–30 % mindre.",
    },
    {
      question: "Hvad koster det at lade en elektrisk GLC?",
      answer: "En fuld opladning koster {{kr 85}} for 85 kWh-batteriet og {{kr 94}} for 94 kWh ved månedens elpris på {{pris_kwh}} plus lidt ladetab. 100 km koster {{kr 15,1-16}}.",
    },
    {
      question: "Bruger GLC 400 4MATIC mere strøm end GLC 300?",
      answer: "Nej. Ifølge Mercedes bruger GLC 400 4MATIC 15,8 kWh pr. 100 km mod 16,0 kWh for GLC 300 4MATIC, og den kører 60 km længere.",
    },
    {
      question: "Hvor hurtigt lader en elektrisk Mercedes GLC?",
      answer: "Op til 320–330 kW på lynlader, og Mercedes opgiver 22 minutter fra 10 til 80 %. Hjemme lader den med 11 kW.",
    },
  ],
  sources: [
    {
      name: "Mercedes-Benz Danmark — GLC elektrisk, oversigt og tekniske data (arkiveret kopi, 18. november 2026)",
      url: "https://web.archive.org/web/20261118055701/https://www.mercedes-benz.dk/passengercars/models/suv/glc-electric/overview.html",
    },
  ],
  variants: [
    { name: "GLC 250 (85 kWh, baghjulstræk)", watts: {}, whPerKm: 151, source: 0 },
    { name: "GLC 300 4MATIC (85 kWh)", watts: {}, whPerKm: 160, source: 0 },
    { name: "GLC 400 4MATIC (94 kWh)", watts: {}, whPerKm: 158, source: 0 },
  ],
  publishDate: "2026-12-22",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Mercedes' officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Mercedes' danske side kunne ikke hentes direkte, så tallene er fra en arkiveret kopi af siden (18. november 2026). Modellen kom i 2026 og er derfor ikke med i EU's registreringsdata for 2025. Kilderne står nederst på siden.",
};

export default mercedesGlcElectric;
