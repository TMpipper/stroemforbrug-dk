import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/spaceheaters/${reg}`;

const daikinAltherma3R: ModelData = {
  slug: "daikin-altherma-3-r",
  parent: "varmepumpe",
  group: "luft-til-vand",
  brand: "Daikin",
  name: "Daikin Altherma 3 R",
  released: "2020-11",
  synonyms: [
    "daikin altherma 3 strømforbrug",
    "daikin altherma 3 r strømforbrug",
    "daikin erga04eav3",
    "daikin erga06eav3",
    "daikin erga08eav3",
    "daikin ehbh08ea6v",
    "daikin altherma kwh om året",
    "daikin luft til vand varmepumpe strømforbrug",
  ],
  title: "Daikin Altherma 3 R strømforbrug (2026) → kWh om året",
  description:
    "Daikin Altherma 3 R luft-til-vand varmepumpe (ERGA04, 06 og 08 med EHBH): energimærkets kWh om året til rumvarme ved 35 og 55 °C, kold vinter og pris.",
  intro:
    "Alle tre størrelser har A++ ved 55 °C og A+++ ved 35 °C. Ved samme ydelse bruger Altherma 3 R 409–873 kWh mere om året end de nyere propanpumper fra Panasonic, NIBE og Vaillant.",
  content: `<h2>Hvor meget strøm bruger Daikin Altherma 3 R?</h2>
<p>Altherma 3 R er Daikins split-varmepumpe til luft-til-vand: udedelen ERGA…EAV3 og indedelen er forbundet med kølemiddelrør, og indedelen laver det varme vand til radiatorer eller gulvvarme. Siden dækker de tre udedele ERGA04, ERGA06 og ERGA08 med den vægmonterede indedel EHBH til rumvarme, som Daikin har registreret i EU's produktdatabase EPREL. Indedelene EHBH…EA6V og EHBH…EF6V har de samme tal. Daikin viser Altherma 3 R på sin danske side.</p>
<table>
<thead><tr><th>Udedel + indedel</th><th>Ydelse 55 °C</th><th>ηs 55 °C</th><th>kWh om året 55 °C</th><th>Klasse 55 °C</th><th>ηs 35 °C</th><th>kWh om året 35 °C</th><th>Lydeffekt ude</th></tr></thead>
<tbody>
<tr><td>ERGA04 + EHBH04</td><td>6 kW</td><td>127 %</td><td>3.806</td><td>A++</td><td>176 %</td><td>2.766</td><td>58 dB(A)</td></tr>
<tr><td>ERGA06 + EHBH08</td><td>7 kW</td><td>127 %</td><td>4.441</td><td>A++</td><td>176 %</td><td>3.233</td><td>60 dB(A)</td></tr>
<tr><td>ERGA08 + EHBH08</td><td>8 kW</td><td>130 %</td><td>4.975</td><td>A++</td><td>179 %</td><td>3.625</td><td>62 dB(A)</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster mærkets årsforbrug ved 55 °C {{kr 3806}} for ERGA04, {{kr 4441}} for ERGA06 og {{kr 4975}} for ERGA08. Varmt brugsvand er ikke med; laver pumpen også brugsvand via en beholder, kommer det forbrug oveni.</p>

<h2>Altherma 3 R mod de nyere propanpumper</h2>
<p>Altherma 3 R kom på markedet i 2020 og har en sæsonvirkningsgrad på 127–130 % ved 55 °C. De nyere pumper med propan (R290) ligger højere. Ved 7 kW og 55 °C bruger ERGA06 4.441 kWh om året, <a href="/varmepumpe/panasonic-aquarea-l/">Panasonic Aquarea L</a> 3.991 kWh og <a href="/varmepumpe/vaillant-arotherm-plus/">Vaillant aroTHERM plus VWL 75/8.1</a> 4.032 kWh. Altherma bruger altså 409–450 kWh mere, svarende til {{kr 409}}–{{kr 450}} om året ved månedens elpris. Ved 8 kW bruger ERGA08 4.975 kWh og <a href="/varmepumpe/nibe-s2125/">NIBE S2125-12</a> 4.102 kWh — 873 kWh til forskel.</p>
<p>Det betyder ikke, at en eksisterende Altherma 3 R skal skiftes. Forskellen er lille i forhold til et oliefyr, et gasfyr eller elvarme, og den afhænger af, hvor meget varme huset bruger. Men står du foran at vælge, er energimærkets kWh ved den ydelse, dit hus har brug for, den enkleste måde at sammenligne driften på. Udedelens lydeffekt er også højere: 58–62 dB(A) ifølge EPREL mod 44–54 dB(A) for de tre andre mærker i samme størrelser.</p>

<h2>Radiatorer eller gulvvarme</h2>
<p>Mærket giver tal ved 55 °C fremløb (radiatorer) og 35 °C (gulvvarme), og for Altherma 3 R er ydelsen den samme ved begge temperaturer. ERGA04 bruger 3.806 kWh ved 55 °C og 2.766 kWh ved 35 °C — 1.040 kWh mindre med gulvvarme, svarende til {{kr 1040}} om året. For ERGA06 er forskellen 1.208 kWh og for ERGA08 1.350 kWh. Har du radiatorer, så hold fremløbet så lavt, at huset stadig bliver varmt; pumpens vejrkompensering sænker det automatisk, når det er mildt.</p>

<h2>Dit hus og den danske vinter</h2>
<p>Mærkets ydelse er den varme, pumpen er dimensioneret til ved −10 °C i EU's gennemsnitlige klima, og årsforbruget forudsætter netop det varmebehov. Et velisoleret hus bruger langt mindre varme end et ældre hus af samme størrelse, og forbruget følger huset. En for lille pumpe får hjælp af elpatronen på de koldeste dage, og den bruger én kWh strøm pr. kWh varme.</p>
<p>Daikin har også registreret Altherma 3 R i EU's kolde referenceklima. Ved 55 °C bruger ERGA04 her 4.468 kWh, ERGA06 5.300 kWh og ERGA08 6.886 kWh, med ηs på 107–112 %. Danmark ligger tættere på det gennemsnitlige klima, men en lang frostvinter trækker op mod de tal. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-vand/">luft-til-vand varmepumper</a>.</p>

<h2>Forvarm i de billige timer</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. En luft-til-vand varmepumpe kan hæve fremløbet lidt i de billige timer om natten og midt på dagen og lade det falde i spidsbelastningen, så huset fungerer som lager. Gulvvarme i beton holder varmen længst. Har du en varmtvandsbeholder, kan brugsvandet varmes op, når strømmen er billig. Med Daikins Onecta-app kan du sætte et ugeprogram op. Se, hvordan varmepumper generelt bruger strøm, på siden om <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Daikin Altherma 3 R ERGA06?",
      answer:
        "Med indedelen EHBH08 bruger ERGA06 4.441 kWh om året til rumvarme ved 55 °C og 3.233 kWh ved 35 °C ifølge energimærket i EU's gennemsnitlige klima. Ved 55 °C svarer det til {{kr 4441}} om året ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Daikin Altherma 3 R?",
      answer: "A++ ved 55 °C og A+++ ved 35 °C for ERGA04, ERGA06 og ERGA08 med indedelen EHBH ifølge EPREL.",
    },
    {
      question: "Bruger Altherma 3 R mere strøm end en NIBE S2125?",
      answer:
        "Ved 8 kW og 55 °C ja: ERGA08 bruger 4.975 kWh om året og NIBE S2125-12 4.102 kWh ifølge de to energimærker. Forskellen er 873 kWh, svarende til {{kr 873}} ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger Altherma 3 R i en kold vinter?",
      answer:
        "I EU's kolde referenceklima ved 55 °C bruger ERGA04 4.468 kWh, ERGA06 5.300 kWh og ERGA08 6.886 kWh om året. Danske vintre ligger tættere på det gennemsnitlige klima.",
    },
    {
      question: "Er varmt brugsvand med i tallene?",
      answer:
        "Nej. Kombinationerne med den vægmonterede indedel EHBH er mærket til rumvarme alene. Varmt brugsvand via en beholder kommer oveni.",
    },
  ],
  sources: [
    { name: "EPREL — Daikin EHBH04EA6V / ERGA04EAV3, EU's energimærke", url: eprel("471285") },
    { name: "EPREL — Daikin EHBH08EA6V / ERGA06EAV3, EU's energimærke", url: eprel("475037") },
    { name: "EPREL — Daikin EHBH08EA6V / ERGA08EAV3, EU's energimærke", url: eprel("1691167") },
    { name: "EPREL — Daikin EHBH04EF6V / ERGA04EAV3, EU's energimærke", url: eprel("1691156") },
    { name: "EPREL — Daikin EHBH08EF6V / ERGA06EAV3, EU's energimærke", url: eprel("2574203") },
    { name: "EPREL — Daikin EHBH08EF6V / ERGA08EAV3, EU's energimærke", url: eprel("2574204") },
    {
      name: "Daikin — Altherma 3 R, dansk produktside",
      url: "https://www.daikin.dk/dk_dk/produktgrupper/Luft-til-vand-varmepumper-lavtemperatur/daikin-altherma-3-r-lt.html",
    },
  ],
  variants: [
    { name: "ERGA04 + EHBH04, 6 kW", watts: {}, annualKwh: 3806, energyClass: "A++", source: 0 },
    { name: "ERGA06 + EHBH08, 7 kW", watts: {}, annualKwh: 4441, energyClass: "A++", source: 1 },
    { name: "ERGA08 + EHBH08, 8 kW", watts: {}, annualKwh: 4975, energyClass: "A++", source: 2 },
  ],
  publishDate: "2027-01-07",
  updated: "2026-11-26",
  measuredBy: "til rumvarme ved 55 °C ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til rumvarme ved 55 °C fremløb (radiatorer) i EU's gennemsnitlige klima og ved pumpens dimensionerende ydelse, som producenten har registreret i EPREL. Varmt brugsvand er ikke med. Kilderne står nederst på siden.",
};

export default daikinAltherma3R;
