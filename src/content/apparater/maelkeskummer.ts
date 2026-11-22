import type { ApplianceData } from "@/lib/types";

/**
 * Mælkeskummer (elektrisk, med varme — Aeroccino-typen) — lecker.de's test af Nespresso Aeroccino4: 410–490 W, højst 120 ml
 * til skum og 240 ml til varm mælk, 1:20 min. for 120 ml skum (varmt eller koldt), 2:30 min. for 240 ml varm mælk, slukker
 * efter ca. ét minut, uden afbryder. Stiftung Warentest (25.11.2024, danske testere, 8 modeller): de gode bruger ca. 1,5 min.
 * Pr. kop = mærkeeffekt × tid (≈ 10 Wh for skum, ≈ 19 Wh for varm mælk) — vores regnestykke, kontrolleret mod den
 * varme, mælken kræver (120 ml fra 5 til 65 °C ≈ 8 Wh). Koldt skum ≈ 3 Wh er vores skøn. Standby: EU 2023/826 (0,5/0,8 W).
 * Beregneren: kWh pr. kop, kopper pr. dag × 365. Intet EU-energimærke.
 */
const maelkeskummer: ApplianceData = {
  slug: "maelkeskummer",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "elkedel",
    synonyms: ["mælkeskummer", "maelkeskummer", "mælkeskummer elektrisk", "aeroccino", "milk frother", "mælkeopskummer", "skummet mælk", "mælkeskum", "cappuccino skum", "latte"],
  },
  name: "Mælkeskummer",
  article: "en",
  title: "Mælkeskummer strømforbrug (2026) → kWh pr. kop og standby",
  description:
    "Se hvor meget strøm en elektrisk mælkeskummer bruger pr. kop, hvad varm mælk og koldt skum koster, og hvorfor standby kan veje tungere end selve skummet.",
  heading: "Strømforbrug for en mælkeskummer: kWh, pris pr. kop og dyreste timer",
  quickAnswer:
    "En elektrisk mælkeskummer bruger omkring 0,01 kWh pr. kop varmt skum og cirka det dobbelte til en større portion varm mælk. Det koster {{oere 0,01}} pr. kop ved månedens elpris. To kopper om dagen bliver til omkring 7 kWh om året, eller {{kr 7}} – og står skummeren altid i stikket, kan standby lægge op til 4 kWh oveni.",
  kwhRange: [1, 30],
  typicalKwh: 7,
  wattage: 450,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.04, 1.03, 1.01, 0.99, 0.97, 0.95, 0.94, 0.95, 0.99, 1.02, 1.04, 1.07],
  content: `<h2>En mælkeskummer bruger strøm i under to minutter</h2>
<p>En elektrisk mælkeskummer er en lille kande med et varmeelement i bunden og en piskefjeder, der drejes af en magnet. Den varmer mælken op og pisker luft i den på én gang. Effekten er ret høj – Nespressos Aeroccino4 er mærket 410–490 W – men den kører kun i et minut eller to. Derfor er forbruget pr. kop meget lille.</p>
<p>Det tyske madmagasin lecker.de har testet Aeroccino4: 120 ml mælk til varmt eller koldt skum tog 1 minut og 20 sekunder, og 240 ml varm mælk tog 2 minutter og 30 sekunder. Ganger man mærkeeffekten med tiden, bliver det omkring 10 Wh pr. kop skum og 19 Wh til den store portion varm mælk. Det er vores regnestykke, men det passer med fysikken: at varme 120 ml mælk fra køleskabet op til 65 grader kræver i sig selv knap 8 Wh. Resten går til kanden og varmetab.</p>
<p>Stiftung Warentest offentliggjorde i november 2024 en test af otte mælkeskummere, som danske testere havde gennemført. De gode modeller lavede skum på omkring halvanden minut, altså på samme niveau. Én kop koster dermed {{oere 0,01}} ved månedens elpris.</p>

<h2>Forbrug pr. kop og om året</h2>
<table>
<thead><tr><th>Brug</th><th>kWh pr. kop</th><th>Pris pr. kop</th><th>kWh om året ved 2 kopper om dagen</th></tr></thead>
<tbody>
<tr><td>Koldt skum, kun motor (vores skøn)</td><td>0,003 kWh</td><td>{{oere 0,003}}</td><td>2 kWh</td></tr>
<tr><td>Varmt skum, 120 ml</td><td>0,01 kWh</td><td>{{oere 0,01}}</td><td>7 kWh</td></tr>
<tr><td>Varm mælk, 240 ml</td><td>0,02 kWh</td><td>{{oere 0,02}}</td><td>15 kWh</td></tr>
<tr><td>Standby hele året, 0,5 W</td><td>–</td><td>–</td><td>4,4 kWh</td></tr>
</tbody>
</table>
<p>Koldt skum til iskaffe bruger kun motoren. Den trækker få watt, og det er vores skøn, at en portion ligger omkring 3 Wh. Varm mælk til kakao eller en stor latte tager længere tid og koster det dobbelte af en kop skum. Selv den dyreste række er en meget lille udgift: 15 kWh om året svarer til {{kr 15}}.</p>

<h2>Standby: det forbrug, der ikke kan ses</h2>
<p>Mange mælkeskummere har ingen afbryder. Kanden sidder på en sokkel, der står i stikket hele tiden, og så bruger den lidt strøm døgnet rundt. lecker.de bemærker, at Aeroccino4 står i en slags permanent standby og summer svagt, når den er sat i. Hvor meget den bruger, er ikke oplyst, men EU's regler for husholdningsapparater (forordning 2023/826, gældende fra maj 2025) sætter loftet ved 0,5 W i standby og 0,8 W, hvis der lyser et display eller en lampe.</p>
<p>Ved 0,5 W hele året bliver det 4,4 kWh. Det er altså muligt, at standby bruger mere end selve skummet, hvis du kun laver en kop om dagen. I Stiftung Warentests test fik to af de otte modeller netop bemærkningen, at de har et højt standbyforbrug. Har din skummer ingen afbryder, kan du sætte den i en stikdåse med kontakt eller blot trække stikket efter morgenkaffen.</p>

<h2>Mælkeskummer mod damplanse, mikroovn og induktion</h2>
<p>Har du en <a href="/espressomaskine/">espressomaskine</a> med damplanse, laver den også mælkeskum, men den skal først varme kedlen op til damptemperatur. Det kræver mere energi end en lille mælkeskummer, især hvis maskinen ellers er slukket. Står espressomaskinen alligevel tændt til kaffen, er damplansen derimod billig at bruge, fordi varmen allerede er der.</p>
<p>Mikroovnen kan varme mælken, og en håndpisker med batteri kan skumme den. Det bruger omtrent lige så lidt strøm som en mælkeskummer, men skummet bliver sjældent lige så fint. Der findes også mælkeskummere med induktion, hvor kanden varmes direkte. Der er ikke fundet uafhængige målinger af dem, men da mælken skal varmes lige meget op, er det vores skøn, at de bruger det samme pr. kop.</p>
<p>Laver din <a href="/kaffemaskine/">kaffemaskine</a> kaffe med kapsler, er skummet sjældent det, der koster. En schweizisk måling, som Øko-Test har gengivet, regner en kapselmaskine til omkring 35 kWh om året for en halv liter kaffe om dagen inklusive standby og opvarmning – omkring fem gange så meget som to kopper skum om dagen.</p>

<h2>Hvornår bruges mælkeskummeren?</h2>
<p>De fleste laver skum til morgenkaffen mellem klokken 6 og 9, hvor elprisen ofte stiger. Det kan ikke flyttes, fordi kaffen skal drikkes, når den er lavet, og forbruget er så lille, at det heller ikke er umagen værd. Boksen længere oppe på siden viser alligevel, hvilke timer der er dyrest i dag, så du kan se, hvor forbruget på resten af døgnet bør ligge.</p>

<h2>Sådan holder du mælkeskummerens forbrug nede</h2>
<ol>
<li><strong>Brug koldt skum</strong> til iskaffe – det sparer varmen helt.</li>
<li><strong>Skum kun den mælk, du skal bruge</strong>; en fyldt kande til én kop er dobbelt forbrug.</li>
<li><strong>Træk stikket</strong> eller brug en stikdåse med kontakt, hvis skummeren ikke har en afbryder.</li>
<li><strong>Rengør kanden efter hver brug</strong> – en belægning af brændt mælk i bunden gør opvarmningen langsommere.</li>
<li><strong>Lav skum til hele husstanden på én gang</strong>, hvis kanden kan rumme det.</li>
</ol>
<p>Laver du te med vand fra en vanddispenser med varmt vand, kan du sammenligne med vores side om <a href="/vandkoeler/">vandkøleren</a>, der holder vandet varmt hele døgnet.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en mælkeskummer pr. kop?",
      answer:
        "Omkring 0,01 kWh til en kop varmt skum og 0,02 kWh til en stor portion varm mælk. Det koster {{oere 0,01}} pr. kop skum ved månedens elpris.",
    },
    {
      question: "Hvor mange watt bruger en Aeroccino?",
      answer:
        "Nespresso Aeroccino4 er mærket 410–490 W. Den kører kun i 1–2,5 minutter pr. portion, så forbruget pr. kop bliver lille.",
    },
    {
      question: "Bruger en mælkeskummer strøm, når den står i stikket?",
      answer:
        "Ja, mange har ingen afbryder og står på standby. EU's regler tillader højst 0,5 W, eller 0,8 W med display. Det er op til 4,4 kWh om året ved 0,5 W – mere end selve skummet, hvis du kun laver en kop om dagen.",
    },
    {
      question: "Er koldt skum billigere end varmt?",
      answer:
        "Ja. Koldt skum bruger kun motoren, og det er vores skøn, at en portion ligger omkring 3 Wh mod 10 Wh for varmt skum.",
    },
    {
      question: "Hvad koster en mælkeskummer i strøm om året?",
      answer:
        "Med to kopper varmt skum om dagen bruger den omkring 7 kWh om året, hvilket koster cirka {{kr 7}} ved månedens elpris. Standby kan lægge op til 4 kWh oveni.",
    },
  ],
  relatedSlugs: ["espressomaskine", "kaffemaskine", "elkedel", "mikroovn", "vandkoeler"],
  sources: [
    { name: "lecker.de — Nespresso Aeroccino4 im Test (effekt, tider, standby)", url: "https://www.lecker.de/nespresso-aeroccino4-test-was-kann-der-milchaufschaeumer-129179.html" },
    { name: "Stiftung Warentest — Milchaufschäumer im Test: Gute und schlechte Schaumschläger (november 2024)", url: "https://www.test.de/Milchaufschaeumer-im-Test-Gute-und-schlechte-Schaumschlaeger-6166383-0/" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (kapselmaskine pr. år)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
    { name: "EUR-Lex — Forordning (EU) 2023/826 om standby og slukket tilstand", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0826" },
  ],
  calculatorConfig: {
    title: "Mælkeskummer forbrugsberegner",
    options: [
      { label: "Koldt skum", kwhPerUse: 0.003 },
      { label: "Varmt skum, 120 ml", kwhPerUse: 0.01 },
      { label: "Varm mælk, 240 ml", kwhPerUse: 0.02 },
    ],
    usageLabel: "Kopper pr. dag",
    usageUnit: "pr. dag",
    usageMin: 1,
    usageMax: 10,
    usageDefault: 2,
    usageStep: 1,
    per: "kop",
    perYear: 365,
  },
  publishDate: "2026-12-03",
  updated: "2026-11-22",
};

export default maelkeskummer;
