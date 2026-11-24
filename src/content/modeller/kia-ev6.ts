import type { ModelData } from "@/lib/models";

const kiaEv6: ModelData = {
  slug: "kia-ev6",
  parent: "elbil",
  brand: "Kia",
  name: "Kia EV6",
  released: "2024-09",
  synonyms: [
    "kia ev6 forbrug",
    "ev6 strømforbrug",
    "kia ev6 kwh pr 100 km",
    "ev6 long range forbrug",
    "ev6 gt-line forbrug",
    "ev6 gt forbrug",
    "kia ev6 rækkevidde vinter",
  ],
  title: "Kia EV6 strømforbrug (2026) → WLTP pr. 100 km og pris",
  description:
    "Kia EV6 med 63 og 84 kWh batteri: officielt WLTP-forbrug fra Kias danske prisliste for alle seks varianter, kWh om året, pris pr. 100 km og vinterrækkevidde.",
  intro:
    "EV6 Long Range med baghjulstræk bruger 15,9 kWh pr. 100 km efter WLTP — mindre end Standard Range med det lille batteri. GT med 650 hk bruger 20,9 kWh.",
  content: `<h2>Hvad bruger en Kia EV6 pr. 100 km?</h2>
<p>Kias danske prisliste for EV6 (modelår 2027) opgiver forbruget for hver variant. Standard Range med 63 kWh-batteri og 170 hk bruger 164 Wh pr. km. Long Range med 84 kWh og 229 hk bruger 159 Wh/km i Access, Prestige og Upgrade og 169 Wh/km i GT-Line. Long Range Performance med firehjulstræk og 325 hk bruger 170 Wh/km som Upgrade og 177 Wh/km som GT-Line, og den sportslige GT med 650 hk bruger 209 Wh/km. Det svarer til 15,9–20,9 kWh pr. 100 km. WLTP er målt som strøm fra stikkontakten, så ladetabet er med.</p>
<p>Med 15.000 km om året bruger en EV6 Long Range med baghjulstræk omkring 2.385 kWh, svarende til {{kr 2385}} ved månedens elpris. Standard Range bruger omkring 2.460 kWh ({{kr 2460}}), firehjulstrukket Upgrade omkring 2.550 kWh ({{kr 2550}}) og GT omkring 3.135 kWh ({{kr 3135}}). 100 km koster {{kr 15,9-20,9}} ladet hjemme.</p>
<p>EU's registreringsdata for 2025 viser samme spænd: de danske EV6 lå på 159–209 Wh/km efter WLTP.</p>

<h2>Det store batteri bruger mindre</h2>
<p>Det lyder bagvendt, men Standard Range bruger 0,5 kWh mere pr. 100 km end Long Range med baghjulstræk, selv om batteriet er mindre og bilen lettere. Med 15.000 km om året er det omkring 75 kWh, svarende til {{kr 75}}. Long Range kører samtidig 582 km efter WLTP mod 428 km, og den lader hurtigere: op til 258 kW på lynlader mod 195 kW. Skal du vælge mellem de to, taler både forbrug og rækkevidde for Long Range.</p>
<p>GT-Line koster 1,0 kWh ekstra pr. 100 km i forhold til de andre Long Range-versioner med baghjulstræk, omkring 150 kWh om året. Tallet svarer til det, prislisten opgiver for Long Range på 20-tommers fælge (560 km). Firehjulstrækket i Upgrade koster 1,1 kWh ekstra pr. 100 km, omkring 165 kWh om året, svarende til {{kr 165}}. GT er en klasse for sig: 5,0 kWh mere pr. 100 km end Long Range med baghjulstræk, omkring 750 kWh om året, svarende til {{kr 750}}.</p>

<h2>EV6 mod Ioniq 5 og andre elbiler</h2>
<p>EV6 bygger på samme elbilplatform som <a href="/elbil/hyundai-ioniq-5/">Hyundai Ioniq 5</a>, og forbruget er næsten ens med det store batteri: Ioniq 5 Long Range med baghjulstræk bruger 16,0 kWh pr. 100 km mod EV6's 15,9 kWh. Med det lille batteri er Ioniq 5 den sparsomme af de to med 15,6 mod 16,4 kWh, omkring 120 kWh mindre om året.</p>
<p>Kias mindre <a href="/elbil/kia-ev3/">EV3</a> bruger 14,9–15,8 kWh pr. 100 km, så en EV3 Long Range sparer omkring 1,0 kWh pr. 100 km i forhold til en EV6 Long Range, eller omkring 150 kWh om året, svarende til {{kr 150}}. <a href="/elbil/cupra-tavascan/">Cupra Tavascan</a> Endurance ligger på 16,1 kWh og dermed lige over EV6 Long Range med baghjulstræk.</p>

<h2>Hvad koster det at lade en EV6?</h2>
<p>En opladning fra 10 til 80 % fylder omkring 44 kWh på 63 kWh-batteriet og 59 kWh på 84 kWh-batteriet, svarende til {{kr 44}} og {{kr 59}} ved månedens elpris på {{pris_kwh}}, plus lidt ladetab. Hjemme lader EV6 med op til 11 kW, og Kia opgiver en fuld opladning fra 10 til 100 % på 5 timer og 50 minutter med det lille batteri og 7 timer og 35 minutter med det store. En nat på en <a href="/ladestander/">ladeboks</a> fylder bilen.</p>
<p>På lynlader tager 10–80 % omkring 18 minutter for begge batterier ifølge prislisten, med højst 195 kW for Standard Range og 258 kW for Long Range. Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm hjemme, og prisen afhænger af operatør og abonnement. Den billige måde at køre EV6 på er at lade hjemme om natten, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For en EV6 Long Range med baghjulstræk betyder det 18,3–20,7 kWh pr. 100 km og en rækkevidde på omkring 450–505 km. Standard Range kommer ned på omkring 330–370 km og GT på omkring 345–390 km. Kia skriver selv i prislisten, at især høj hastighed og lave temperaturer reducerer rækkevidden.</p>
<ul>
<li>Forvarm kabinen og batteriet, mens bilen sidder i laderen, så varmen kommer fra nettet og ikke fra batteriet.</li>
<li>Brug sæde- og rattvarme frem for høj kabinetemperatur på korte ture.</li>
<li>Hold 110–120 km/t på langtur — luftmodstanden vokser hurtigt med farten.</li>
<li>Tjek dæktrykket, når det bliver koldt, og vælg de mindre fælge, hvis rækkevidden betyder mest.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Kia EV6s forbrug pr. km?",
      answer:
        "Ifølge Kias danske prisliste 159–209 Wh pr. km efter WLTP: 159 Wh/km for Long Range med baghjulstræk, 164 Wh/km for Standard Range, 169–177 Wh/km for GT-Line og firehjulstræk og 209 Wh/km for GT.",
    },
    {
      question: "Hvad koster det at køre 100 km i en EV6?",
      answer: "100 km koster {{kr 15,9}} til {{kr 20,9}} ladet hjemme ved månedens elpris på {{pris_kwh}}, afhængigt af batteri, træk og udstyr.",
    },
    {
      question: "Bruger EV6 Standard Range mindre strøm end Long Range?",
      answer:
        "Nej. Standard Range bruger 16,4 kWh pr. 100 km mod 15,9 kWh for Long Range med baghjulstræk ifølge Kia, og Long Range kører 582 km mod 428 km efter WLTP.",
    },
    {
      question: "Hvor langt kører en Kia EV6 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. En Long Range med baghjulstræk kører typisk 450–505 km, Standard Range 330–370 km.",
    },
    {
      question: "Hvor hurtigt lader en Kia EV6?",
      answer:
        "Omkring 18 minutter fra 10 til 80 % på lynlader ifølge Kia, med op til 258 kW for Long Range. Hjemme med 11 kW tager det 5 timer og 50 minutter til 7 timer og 35 minutter fra 10 til 100 %.",
    },
  ],
  sources: [
    {
      name: "Kia Danmark — EV6, prisliste modelår 2027 med rækkevidde, forbrug og ladetider",
      url: "https://www.kia.com/dk/modeller/ev6/prisliste/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Standard Range 63 kWh, baghjulstræk (Access, Prestige)", watts: {}, whPerKm: 164, source: 0 },
    { name: "Long Range 84 kWh, baghjulstræk (Access, Prestige, Upgrade)", watts: {}, whPerKm: 159, source: 0 },
    { name: "Long Range 84 kWh, baghjulstræk, GT-Line", watts: {}, whPerKm: 169, source: 0 },
    { name: "Long Range Performance AWD, Upgrade", watts: {}, whPerKm: 170, source: 0 },
    { name: "Long Range Performance AWD, GT-Line", watts: {}, whPerKm: 177, source: 0 },
    { name: "GT, 650 hk AWD", watts: {}, whPerKm: 209, source: 0 },
  ],
  publishDate: "2026-12-31",
  updated: "2026-11-24",
  measuredBy: "efter WLTP-normen (Kias officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Kias danske prisliste for modelår 2027 med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default kiaEv6;
