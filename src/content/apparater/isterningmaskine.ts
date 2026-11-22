import type { ApplianceData } from "@/lib/types";

/**
 * Isterningmaskine (bordmodel med kompressor) — Tek.no's samletest (opdateret 18. juni 2025, 10 nye maskiner testet i 2024):
 * mærkeeffekt 100–150 W, 10–15 kg is i døgnet ifølge producenterne, en omgang tager ca. 8–9 min. (Wilfa ICE-12S 100 W: 8 min. ved
 * 21–22 °C; Rubicson 150 W: ca. 9 min. og 65–68 g; F&B 150 W: drøje 20 min.; Kulz 105 W: ca. ½ kg is efter en time).
 * Ingen uafhængig kWh-måling fundet: forbrug pr. time = mærkeeffekten (kompressoren kører uafbrudt, mens den laver is) — vores
 * skøn; fysikken (334 kJ/kg at fryse vand) er regnet. Beregneren: kWh pr. time, timer pr. uge i sommerhalvåret × 26.
 */
const isterningmaskine: ApplianceData = {
  slug: "isterningmaskine",
  meta: {
    category: "koekken",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: true,
    motif: "koeleskab",
    synonyms: ["isterningmaskine", "isterning maskine", "ismaskine isterninger", "isterningemaskine", "ice maker", "isbitmaskine", "isterninger", "is maskine", "isterningmaskine strømforbrug"],
  },
  name: "Isterningmaskine",
  article: "en",
  title: "Isterningmaskine strømforbrug (2026) → watt og kWh i timen",
  description:
    "Se hvor meget strøm en isterningmaskine bruger i timen og pr. kilo is, hvad en sommer med fest og iskaffe koster, og hvorfor den bør slukkes efter brug.",
  heading: "Strømforbrug for en isterningmaskine: kWh, pris i timen og billigste tidspunkt",
  quickAnswer:
    "En isterningmaskine bruger typisk 100–150 W, så længe den er tændt, altså 0,1–0,15 kWh i timen. Det koster {{oere 0,1-0,15}} i timen ved månedens elpris. Bruger du den fire timer om ugen i sommerhalvåret, bliver det omkring 12 kWh om året, eller {{kr 12}}.",
  kwhRange: [2, 100],
  typicalKwh: 12,
  wattage: 120,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.4, 0.4, 0.5, 0.8, 1.3, 1.8, 2.1, 1.9, 1.1, 0.7, 0.4, 0.6],
  content: `<h2>Sådan laver en isterningmaskine is</h2>
<p>En isterningmaskine til køkkenbordet er et lille fryseanlæg med en kompressor. Vandet pumpes op over en række kolde metalpinde, og efter otte-ni minutter sidder der et lag is rundt om dem. Så varmes pindene kortvarigt op, isen falder ned i kurven, og en ny omgang begynder. Maskinen har ingen frost, der holder isen frossen: den smelter langsomt og løber tilbage i vandtanken, hvorefter maskinen laver den om igen.</p>
<p>Det betyder, at kompressoren kører næsten uafbrudt, så længe maskinen er tændt. Forbruget er derfor tæt på mærkeeffekten hele tiden. Norske Tek.no har testet en lang række maskiner, senest ti nye i 2024. De er mærket 100–150 W og lover 10–15 kg is i døgnet. En typisk omgang tog 8–9 minutter og gav 65–80 gram is, mens enkelte modeller brugte over 20 minutter.</p>
<p>Der findes ingen uafhængig måling af forbruget i kWh, og der er ingen EU-energimærkning af isterningmaskiner. Det er derfor vores skøn, at forbruget ligger på 0,1–0,15 kWh i timen – mærkeeffekten ganget med tiden.</p>

<h2>Forbrug pr. time og pr. kilo is</h2>
<table>
<thead><tr><th>Maskine</th><th>kWh pr. time</th><th>Pris pr. time</th><th>kWh pr. kg is (vores skøn)</th></tr></thead>
<tbody>
<tr><td>Lille maskine, 100 W</td><td>0,1 kWh</td><td>{{oere 0,1}}</td><td>0,2 kWh</td></tr>
<tr><td>Almindelig maskine, 120 W</td><td>0,12 kWh</td><td>{{oere 0,12}}</td><td>0,24 kWh</td></tr>
<tr><td>Større maskine, 150 W</td><td>0,15 kWh</td><td>{{oere 0,15}}</td><td>0,25–0,3 kWh</td></tr>
</tbody>
</table>
<p>I testen havde én maskine lavet omkring et halvt kilo is efter en time. Med 100–150 W bliver det 0,2–0,3 kWh pr. kilo is. Rent fysisk skal der fjernes omkring 0,12 kWh varme fra et kilo vand på 20 grader for at gøre det til is, og en god kompressor kan flytte den varme for langt mindre strøm. At maskinen alligevel bruger 0,2–0,3 kWh, skyldes varmetab, opvarmningen, der løsner isen, og den is, der smelter i kurven og skal fryses igen. Et kilo is koster altså cirka {{kr 0,24}} ved månedens elpris.</p>

<h2>Hvad koster en sommer med isterninger?</h2>
<p>De fleste bruger isterningmaskinen til fester, grillaftener og varme sommerdage. Står den tændt fire timer om ugen fra april til september, bliver det omkring 12 kWh om året, svarende til {{kr 12}}. Det er ikke meget, men forbruget stiger hurtigt, hvis maskinen bare står og kører. Tændt hele dagen i en hedebølge på 12 timer bruger den 1,2–1,8 kWh, og lader du den stå tændt hele sommeren, kan det blive over 400 kWh.</p>
<p>Maskinen stopper som regel kun, når kurven er fuld eller vandtanken er tom. Den slukker ikke af sig selv, når isen smelter, fordi smeltevandet blot løber tilbage og laves til ny is. Sluk derfor for den, når du har nok.</p>

<h2>Lav isen i de billige timer og gem den i fryseren</h2>
<p>Isterningmaskinen er et af de få køkkenapparater, hvor forbruget kan flyttes. Isen kan laves om formiddagen eller midt på dagen, når elprisen ofte er lav, og så gemmes i en pose i <a href="/fryser/">fryseren</a> til aftenens fest. Fryseren bruger stort set ikke mere strøm på at holde isen frossen, fordi den allerede er kold. Boksen længere oppe på siden viser dagens billigste timer.</p>
<p>Det sparer også selve isen: i stedet for at maskinen fryser den samme is om og om igen, bliver den gemt. Har du ikke plads i fryseren, er en almindelig isterningbakke i fryseren et alternativ, der kun bruger den strøm, fryseren alligevel bruger for at fryse vandet – efter vores skøn omkring 0,05 kWh pr. kilo.</p>

<h2>Isterningmaskine eller isterningbakke?</h2>
<p>Isterningbakken i fryseren er det billigste. Et moderne <a href="/koeleskab/">køle-fryseskab</a> fjerner varmen fra vandet med en kompressor, der er langt mere effektiv end den lille kompressor i en bordmaskine, og fryseren er godt isoleret. Fordelen ved maskinen er, at den laver is på minutter i stedet for timer og ikke fylder fryseren op. Til en fest med mange gæster er det derfor ofte den, der vinder, selv om hvert kilo is koster mere.</p>
<p>Der findes også køleskabe med indbygget ismaskine. De bruger mere strøm end et skab uden, men det er en anden produktgruppe, som står i køleskabets energimærke.</p>

<h2>Placering og vedligeholdelse</h2>
<p>Kompressoren skal af med varmen gennem ventilationsåbninger på siden eller bagsiden. Står maskinen klemt op ad en væg eller i direkte sol, arbejder den hårdere og laver mindre is pr. time. Wilfas maskine i Tek.no's test lavede en omgang på otte minutter ved 21–22 grader i rummet, og i et varmere rum tager det længere tid. Placér den i skygge med plads omkring.</p>
<p>Afkalk og rengør maskinen efter producentens anvisning. Kalk på frysepindene gør isen langsommere, og en tank med gammelt vand er ikke rar at lave is af. Tøm tanken, når maskinen ikke skal bruges i et stykke tid.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Sluk maskinen</strong>, når kurven er fuld, og du har nok is.</li>
<li><strong>Lav isen i dagens billige timer</strong> og gem den i fryseren.</li>
<li><strong>Fyld kold vand i tanken</strong> – vand fra køleskabet fryser hurtigere end lunkent vand.</li>
<li><strong>Stil den i skygge</strong> med luft omkring ventilationsåbningerne.</li>
<li><strong>Brug isterningbakken</strong> til hverdag og maskinen til fester.</li>
</ol>
<p>Skal du også holde fadøl kolde til festen, kan du sammenligne med vores side om <a href="/fadoelsanlaeg/">fadølsanlægget</a>. Laver du iskaffe, kan en <a href="/maelkeskummer/">mælkeskummer</a> lave koldt skum på få watt.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en isterningmaskine?",
      answer:
        "Typisk 100–150 W, så længe den er tændt, altså 0,1–0,15 kWh i timen. Det koster {{oere 0,1-0,15}} i timen ved månedens elpris.",
    },
    {
      question: "Hvad koster et kilo isterninger i strøm?",
      answer:
        "Efter vores skøn 0,2–0,3 kWh pr. kilo is, fordi en maskine laver omkring et halvt kilo i timen. Det svarer til cirka {{kr 0,24}} pr. kilo ved månedens elpris.",
    },
    {
      question: "Skal isterningmaskinen stå tændt hele tiden?",
      answer:
        "Nej. Isen smelter tilbage i tanken, og maskinen fryser den så igen. Tændt hele sommeren kan den bruge over 400 kWh. Lav isen, sluk maskinen og gem isen i fryseren.",
    },
    {
      question: "Er det billigere at lave isterninger i fryseren?",
      answer:
        "Ja. Fryseren er bedre isoleret og har en mere effektiv kompressor, så det er vores skøn, at et kilo is i en bakke koster omkring en femtedel af et kilo fra maskinen. Maskinen er bare hurtigere.",
    },
    {
      question: "Hvad koster en isterningmaskine i strøm om året?",
      answer:
        "Bruger du den fire timer om ugen i sommerhalvåret, bliver det omkring 12 kWh om året, eller cirka {{kr 12}} ved månedens elpris.",
    },
  ],
  relatedSlugs: ["fryser", "koeleskab", "fadoelsanlaeg", "vandkoeler", "maelkeskummer"],
  sources: [
    { name: "Tek.no — Samletest: Beste isbitmaskin (mærkeeffekt, kg pr. døgn, minutter pr. omgang; opdateret juni 2025)", url: "https://www.tek.no/samletest/i/PoMKGJ/beste-isbitmaskin" },
  ],
  calculatorConfig: {
    title: "Isterningmaskine forbrugsberegner",
    options: [
      { label: "Lille maskine, 100 W", kwhPerUse: 0.1 },
      { label: "Almindelig maskine, 120 W", kwhPerUse: 0.12 },
      { label: "Større maskine, 150 W", kwhPerUse: 0.15 },
    ],
    usageLabel: "Timer tændt pr. uge (april–september)",
    usageUnit: "timer pr. uge",
    usageMin: 1,
    usageMax: 60,
    usageDefault: 4,
    usageStep: 1,
    per: "time",
    perYear: 26,
  },
  publishDate: "2026-12-04",
  updated: "2026-11-22",
};

export default isterningmaskine;
