import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/spaceheaters/${reg}`;

const panasonicAquareaL: ModelData = {
  slug: "panasonic-aquarea-l",
  parent: "varmepumpe",
  group: "luft-til-vand",
  brand: "Panasonic",
  name: "Panasonic Aquarea L-serie",
  released: "2023-07",
  synonyms: [
    "panasonic aquarea strømforbrug",
    "panasonic aquarea l strømforbrug",
    "panasonic aquarea l-generation",
    "wh-wdg05le5",
    "wh-wdg07le5",
    "wh-wdg09le5",
    "panasonic aquarea all in one strømforbrug",
    "panasonic luft til vand varmepumpe kwh",
  ],
  title: "Panasonic Aquarea L strømforbrug (2026) → kWh om året",
  description:
    "Panasonic Aquarea L-serie luft-til-vand varmepumpe på 5, 7 og 9 kW: energimærkets kWh om året til rumvarme ved 35 og 55 °C, kold vinter og pris.",
  intro:
    "Ved 55 °C har alle tre størrelser A++ og en sæsonvirkningsgrad på 142–144 %; med gulvvarme ved 35 °C bruger de 24–28 % mindre ifølge mærket.",
  content: `<h2>Hvor meget strøm bruger Panasonic Aquarea L?</h2>
<p>Aquarea L er Panasonics generation af luft-til-vand varmepumper med propan (R290) som kølemiddel. Udedelen WH-WDG…LE5 findes i 5, 7 og 9 kW og arbejder sammen med en indedel: enten hydromodulet WH-SDC0509L3E5 til rumvarme eller All in One-indedelen WH-ADC0509L3E5 med indbygget varmtvandsbeholder. Begge kombinationer har de samme tal for rumvarme i EU's produktdatabase EPREL; siden bruger hydromodulet, fordi dets mærke kun dækker rumvarme.</p>
<table>
<thead><tr><th>Udedel</th><th>Ydelse 55 °C</th><th>ηs 55 °C</th><th>kWh om året 55 °C</th><th>Klasse 55 °C</th><th>ηs 35 °C</th><th>kWh om året 35 °C</th><th>Lydeffekt ude</th></tr></thead>
<tbody>
<tr><td>WH-WDG05LE5</td><td>5 kW</td><td>142 %</td><td>2.849</td><td>A++</td><td>200 %</td><td>2.040</td><td>52 dB(A)</td></tr>
<tr><td>WH-WDG07LE5</td><td>7 kW</td><td>142 %</td><td>3.991</td><td>A++</td><td>195 %</td><td>2.916</td><td>53 dB(A)</td></tr>
<tr><td>WH-WDG09LE5</td><td>8 kW</td><td>144 %</td><td>4.499</td><td>A++</td><td>190 %</td><td>3.417</td><td>54 dB(A)</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster mærkets årsforbrug ved 55 °C {{kr 2849}} for 5 kW-udgaven, {{kr 3991}} for 7 kW og {{kr 4499}} for 9 kW-udedelen, som mærket regner til 8 kW ved 55 °C. Varmt brugsvand er ikke med.</p>

<h2>5 kW mod NIBE og Vaillant</h2>
<p>I 5 kW-klassen ved 55 °C bruger Aquarea L 2.849 kWh om året, <a href="/varmepumpe/vaillant-arotherm-plus/">Vaillant aroTHERM plus VWL 35/8.1</a> 2.851 kWh og <a href="/varmepumpe/nibe-s2125/">NIBE S2125-8</a> 2.939 kWh. Panasonic og Vaillant er altså lige, og NIBE bruger 90 kWh mere end Panasonic, svarende til {{kr 90}} om året. Ved 7 kW bruger Aquarea L 3.991 kWh og Vaillant VWL 75/8.1 4.032 kWh, 41 kWh mere. Forskellene er små i forhold til, hvad huset selv betyder, så lyd, placering og service tæller lige så meget, når du vælger. Her har Aquarea L en lydeffekt på 52–54 dB(A) ifølge EPREL, Vaillants små størrelser 44–47 dB(A).</p>

<h2>Gulvvarme sparer en fjerdedel</h2>
<p>Mærket giver tal ved 55 °C fremløb (radiatorer) og 35 °C (gulvvarme), og for Aquarea L er ydelsen den samme ved begge, så tallene kan sammenlignes direkte. 5 kW-udgaven bruger 2.849 kWh ved 55 °C og 2.040 kWh ved 35 °C — 809 kWh mindre med gulvvarme, svarende til {{kr 809}} om året. For 7 kW er forskellen 1.075 kWh og for 9 kW-udedelen 1.082 kWh. Har du radiatorer, behøver de sjældent 55 °C ud over de koldeste dage, så et radiatorhus lander ofte mellem de to tal.</p>

<h2>Hvad tallet forudsætter</h2>
<p>Ydelsen på mærket er den varme, pumpen er dimensioneret til at levere ved −10 °C i EU's gennemsnitlige klima, og årsforbruget forudsætter, at huset har præcis det varmebehov. Dit forbrug følger dit hus: et nyere, velisoleret hus bruger langt mindre varme end et ældre hus med enkeltlagsvinduer og uisoleret loft, selv hvis de er lige store. Er pumpen for lille, tager elpatronen over på de koldeste dage og bruger én kWh strøm pr. kWh varme; er den for stor, kører den i korte intervaller. Begge dele trækker forbruget op over mærket, så en varmetabsberegning før købet betaler sig.</p>
<p>Panasonic har også registreret Aquarea L i EU's kolde referenceklima. Ved 55 °C bruger 5 kW-udgaven her 4.516 kWh, 7 kW 5.241 kWh og 9 kW 5.915 kWh, med ηs på 128–130 %. Danmark ligger tættere på det gennemsnitlige klima, men en lang frostvinter trækker op mod de tal. Erstatter pumpen et oliefyr, et gasfyr eller elvarme, er det dét forbrug, du skal sammenligne med — ikke en luft-til-luft varmepumpe, der kun varmer et par rum. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-vand/">luft-til-vand varmepumper</a>.</p>

<h2>Varm op, når strømmen er billig</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. En luft-til-vand varmepumpe kan forvarme huset ved at hæve fremløbet lidt i de billige timer om natten og midt på dagen og lade det falde i spidsbelastningen. Gulvvarme i beton er velegnet, fordi gulvet holder varmen i mange timer. Har du All in One-indedelen med varmtvandsbeholder, kan brugsvandet varmes op i de billige timer, så pumpen ikke skal lave varmt vand om aftenen. Se, hvordan varmepumper generelt bruger strøm, på siden om <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Panasonic Aquarea L på 7 kW?",
      answer:
        "3.991 kWh om året til rumvarme ved 55 °C og 2.916 kWh ved 35 °C ifølge energimærket i EU's gennemsnitlige klima. Ved 55 °C svarer det til {{kr 3991}} om året ved månedens elpris.",
    },
    {
      question: "Har Aquarea All in One et andet forbrug end hydromodulet?",
      answer:
        "Ikke til rumvarme. WH-ADC0509L3E5 (All in One) og WH-SDC0509L3E5 har de samme tal for rumvarme med de tre udedele i EPREL. All in One laver også varmt brugsvand, og det forbrug kommer oveni.",
    },
    {
      question: "Hvilken energiklasse har Panasonic Aquarea L?",
      answer: "A++ ved 55 °C og A+++ ved 35 °C for alle tre størrelser ifølge EPREL.",
    },
    {
      question: "Hvor meget bruger Aquarea L i en kold vinter?",
      answer:
        "I EU's kolde referenceklima ved 55 °C bruger 5 kW-udgaven 4.516 kWh, 7 kW 5.241 kWh og 9 kW 5.915 kWh om året. Danske vintre ligger tættere på det gennemsnitlige klima.",
    },
    {
      question: "Bruger Aquarea L mindre end NIBE S2125-8?",
      answer:
        "Ved 5 kW og 55 °C ja, en smule: 2.849 mod 2.939 kWh om året ifølge de to energimærker, 90 kWh til forskel. Vaillant aroTHERM plus VWL 35/8.1 ligger på 2.851 kWh.",
    },
  ],
  sources: [
    { name: "EPREL — Panasonic WH-SDC0509L3E5 / WH-WDG05LE5, EU's energimærke", url: eprel("1791525") },
    { name: "EPREL — Panasonic WH-SDC0509L3E5 / WH-WDG07LE5, EU's energimærke", url: eprel("1791526") },
    { name: "EPREL — Panasonic WH-SDC0509L3E5 / WH-WDG09LE5, EU's energimærke", url: eprel("1791527") },
    { name: "EPREL — Panasonic WH-ADC0509L3E5 / WH-WDG05LE5 (All in One), EU's energimærke", url: eprel("1833989") },
    { name: "EPREL — Panasonic WH-ADC0509L3E5 / WH-WDG07LE5 (All in One), EU's energimærke", url: eprel("1833990") },
    { name: "EPREL — Panasonic WH-ADC0509L3E5 / WH-WDG09LE5 (All in One), EU's energimærke", url: eprel("1833991") },
  ],
  variants: [
    { name: "WH-WDG05LE5, 5 kW", watts: {}, annualKwh: 2849, energyClass: "A++", source: 0 },
    { name: "WH-WDG07LE5, 7 kW", watts: {}, annualKwh: 3991, energyClass: "A++", source: 1 },
    { name: "WH-WDG09LE5, 8 kW", watts: {}, annualKwh: 4499, energyClass: "A++", source: 2 },
  ],
  publishDate: "2027-01-06",
  updated: "2026-11-26",
  measuredBy: "til rumvarme ved 55 °C ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til rumvarme ved 55 °C fremløb (radiatorer) i EU's gennemsnitlige klima og ved pumpens dimensionerende ydelse, som producenten har registreret i EPREL. Varmt brugsvand er ikke med. Kilderne står nederst på siden.",
};

export default panasonicAquareaL;
