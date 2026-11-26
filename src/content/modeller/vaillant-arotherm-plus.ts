import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/spaceheaters/${reg}`;

const vaillantArothermPlus: ModelData = {
  slug: "vaillant-arotherm-plus",
  parent: "varmepumpe",
  group: "luft-til-vand",
  brand: "Vaillant",
  name: "Vaillant aroTHERM plus",
  released: "2025-04",
  synonyms: [
    "vaillant arotherm plus strømforbrug",
    "vaillant arotherm strømforbrug",
    "vaillant vwl 35/8.1",
    "vaillant vwl 55/8.1",
    "vaillant vwl 75/8.1",
    "vaillant vwl 105/8.1",
    "vaillant vwl 125/8.1",
    "vaillant luft til vand varmepumpe kwh",
  ],
  title: "Vaillant aroTHERM plus strømforbrug (2026) → kWh om året",
  description:
    "Vaillant aroTHERM plus (VWL 35 til 125/8.1) luft-til-vand varmepumpe: energimærkets kWh om året til rumvarme ved 35 og 55 °C, klasse og pris om året.",
  intro:
    "De tre små størrelser har A++ ved 55 °C, de to store A+++; med gulvvarme ved 35 °C har alle fem A+++ og bruger 23–31 % mindre ifølge mærket.",
  content: `<h2>Hvor meget strøm bruger Vaillant aroTHERM plus?</h2>
<p>aroTHERM plus er Vaillants monoblok-varmepumpe til luft-til-vand: hele kølekredsen sidder i udedelen, og varmen føres ind i huset som varmt vand til radiatorer eller gulvvarme. Kølemidlet er propan (R290). Siden dækker den aktuelle generation /8.1 i de fem størrelser, Vaillant viser på sin danske side: VWL 35/8.1, 55/8.1 og 75/8.1 på 230 V og VWL 105/8.1 og 125/8.1 på 400 V, alle i S2-udgaven. Tallene kommer fra EU's produktdatabase EPREL og stemmer med Vaillants danske datablad.</p>
<table>
<thead><tr><th>Model</th><th>Ydelse 55 °C</th><th>ηs 55 °C</th><th>kWh om året 55 °C</th><th>Klasse 55 °C</th><th>ηs 35 °C</th><th>kWh om året 35 °C</th><th>Lydeffekt ude</th></tr></thead>
<tbody>
<tr><td>VWL 35/8.1</td><td>5 kW</td><td>141 %</td><td>2.851</td><td>A++</td><td>192 %</td><td>1.960</td><td>44 dB(A)</td></tr>
<tr><td>VWL 55/8.1</td><td>6 kW</td><td>141 %</td><td>3.237</td><td>A++</td><td>188 %</td><td>2.430</td><td>44 dB(A)</td></tr>
<tr><td>VWL 75/8.1</td><td>7 kW</td><td>141 %</td><td>4.032</td><td>A++</td><td>194 %</td><td>2.928</td><td>47 dB(A)</td></tr>
<tr><td>VWL 105/8.1</td><td>11 kW</td><td>150 %</td><td>6.066</td><td>A+++</td><td>200 %</td><td>4.352</td><td>50 dB(A)</td></tr>
<tr><td>VWL 125/8.1</td><td>12 kW</td><td>150 %</td><td>6.281</td><td>A+++</td><td>200 %</td><td>4.846</td><td>50 dB(A)</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster mærkets årsforbrug ved 55 °C {{kr 2851}} for VWL 35/8.1, {{kr 3237}} for 55/8.1, {{kr 4032}} for 75/8.1, {{kr 6066}} for 105/8.1 og {{kr 6281}} for 125/8.1. Varmt brugsvand er ikke med.</p>

<h2>Gulvvarme eller radiatorer</h2>
<p>EU-mærket giver tal ved 55 °C fremløb, som passer til radiatorer, og ved 35 °C, som passer til gulvvarme. ηs er sæsonvirkningsgraden: jo højere procent, jo mindre strøm for samme varme. For aroTHERM plus er ydelsen den samme ved de to temperaturer i alle fem størrelser, så tallene kan sammenlignes direkte. VWL 35/8.1 bruger 2.851 kWh ved 55 °C og 1.960 kWh ved 35 °C — 891 kWh mindre med gulvvarme, svarende til {{kr 891}} om året ved månedens elpris. For VWL 105/8.1 er forskellen 1.714 kWh.</p>
<p>De fleste radiatoranlæg behøver kun 55 °C på de koldeste dage. Resten af året styrer pumpen fremløbet ned efter udetemperaturen, og hver grad lavere giver lidt bedre virkningsgrad. Derfor lander et radiatorhus ofte mellem de to tal på mærket, tættest på 55 °C-tallet, hvis radiatorerne er små i forhold til rummene.</p>

<h2>aroTHERM plus mod NIBE S2125</h2>
<p>I 5 kW-klassen bruger VWL 35/8.1 2.851 kWh ved 55 °C, og <a href="/varmepumpe/nibe-s2125/">NIBE S2125-8</a> bruger 2.939 kWh — 88 kWh mere om året, svarende til {{kr 88}}. I 11 kW-klassen vender det: VWL 105/8.1 bruger 6.066 kWh, og NIBE S2125-14 bruger 5.598 kWh, altså 468 kWh mindre end Vaillant. Der er ingen fast vinder på tværs af størrelserne; sammenlign den størrelse, dit hus faktisk skal bruge. På lyd har de små Vaillant-størrelser en lydeffekt på 44 dB(A) mod 49 dB(A) for S2125-8 ifølge EPREL, hvilket betyder noget, hvis udedelen står tæt på naboen.</p>

<h2>Dit hus bestemmer forbruget</h2>
<p>Mærkets ydelse er den varme, pumpen er dimensioneret til ved −10 °C i EU's gennemsnitlige klima, og årsforbruget forudsætter, at huset har netop det varmebehov. Et nyere, velisoleret hus bruger langt mindre varme end et ældre hus af samme størrelse, og pumpens forbrug følger med. Er pumpen for lille til huset, hjælper elpatronen til i frost og bruger én kWh strøm pr. kWh varme; er den for stor, kører den i korte intervaller. Begge dele giver mere end mærket.</p>
<p>Vaillant har også registreret aroTHERM plus i EU's kolde referenceklima. Ved 55 °C bruger VWL 35/8.1 her 3.727 kWh og VWL 125/8.1 8.996 kWh, med ηs på 125–139 %. Danmark ligger tættere på det gennemsnitlige klima, men en lang frostvinter trækker i den retning. Bemærk, at den tidligere generation /6 har sine egne registreringer og andre tal; modelnummeret på typeskiltet afgør, hvilke der gælder for dig.</p>

<h2>Forvarm, når strømmen er billig</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. En luft-til-vand varmepumpe kan hæve fremløbet eller rumtemperaturen lidt i de billige timer og lade den falde i spidsbelastningen; gulvvarme i beton holder varmen i mange timer. Varmtvandsbeholderen kan opvarmes, når prisen er lav, så pumpen ikke skal lave brugsvand i de dyre timer. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-vand/">luft-til-vand varmepumper</a> og om varmepumper generelt på <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Vaillant aroTHERM plus VWL 75/8.1?",
      answer:
        "4.032 kWh om året til rumvarme ved 55 °C og 2.928 kWh ved 35 °C ifølge energimærket i EU's gennemsnitlige klima. Ved 55 °C svarer det til {{kr 4032}} om året ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har aroTHERM plus?",
      answer:
        "A+++ ved 35 °C i alle fem størrelser. Ved 55 °C har VWL 35/8.1, 55/8.1 og 75/8.1 A++, mens VWL 105/8.1 og 125/8.1 har A+++.",
    },
    {
      question: "Hvor meget sparer gulvvarme med aroTHERM plus?",
      answer:
        "Ifølge mærket 891 kWh om året for VWL 35/8.1 og 1.714 kWh for VWL 105/8.1, når fremløbet er 35 °C i stedet for 55 °C. Det svarer til {{kr 891}} og {{kr 1714}} om året ved månedens elpris.",
    },
    {
      question: "Er varmt brugsvand med i tallene?",
      answer:
        "Nej. Tallene er udedelens energimærke for rumvarme. Varmt brugsvand kommer oveni og afhænger af husstandens forbrug og beholderen.",
    },
    {
      question: "Gælder tallene for VWL 75/6?",
      answer:
        "Nej. Den tidligere generation /6 har sine egne registreringer i EPREL med andre tal. Siden dækker /8.1 i S2-udgaven, som Vaillant viser på sin danske side.",
    },
  ],
  sources: [
    { name: "EPREL — Vaillant VWL 35/8.1 A 230V S2, EU's energimærke", url: eprel("2693678") },
    { name: "EPREL — Vaillant VWL 55/8.1 A 230V S2, EU's energimærke", url: eprel("2693680") },
    { name: "EPREL — Vaillant VWL 75/8.1 A 230V S2, EU's energimærke", url: eprel("2693681") },
    { name: "EPREL — Vaillant VWL 105/8.1 A 400V S2, EU's energimærke", url: eprel("2693682") },
    { name: "EPREL — Vaillant VWL 125/8.1 A 400V S2, EU's energimærke", url: eprel("2693685") },
    { name: "Vaillant — aroTHERM plus, dansk produktside og tekniske data", url: "https://www.vaillant.dk/produkter/arothermplus/" },
  ],
  variants: [
    { name: "VWL 35/8.1, 5 kW", watts: {}, annualKwh: 2851, energyClass: "A++", source: 0 },
    { name: "VWL 55/8.1, 6 kW", watts: {}, annualKwh: 3237, energyClass: "A++", source: 1 },
    { name: "VWL 75/8.1, 7 kW", watts: {}, annualKwh: 4032, energyClass: "A++", source: 2 },
    { name: "VWL 105/8.1, 11 kW", watts: {}, annualKwh: 6066, energyClass: "A+++", source: 3 },
    { name: "VWL 125/8.1, 12 kW", watts: {}, annualKwh: 6281, energyClass: "A+++", source: 4 },
  ],
  publishDate: "2027-01-05",
  updated: "2026-11-26",
  measuredBy: "til rumvarme ved 55 °C ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til rumvarme ved 55 °C fremløb (radiatorer) i EU's gennemsnitlige klima og ved pumpens dimensionerende ydelse, som producenten har registreret i EPREL. Varmt brugsvand er ikke med. Kilderne står nederst på siden.",
};

export default vaillantArothermPlus;
