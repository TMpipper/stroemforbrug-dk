import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungOdysseyOledG6: ModelData = {
  slug: "samsung-odyssey-oled-g6",
  parent: "skaerm",
  brand: "Samsung",
  name: "Samsung Odyssey OLED G6",
  released: "2024-05",
  synonyms: ["samsung odyssey oled g6", "odyssey oled g6 strømforbrug", "samsung g60sd watt", "samsung g60sf forbrug", "ls27dg602suxen", "ls27fg602suxen", "odyssey g6 500 hz strømforbrug"],
  title: "Samsung Odyssey OLED G6 strømforbrug (2026) → watt og kWh",
  description:
    "Samsung Odyssey OLED G6 i 27 tommer med 360 og 500 Hz: watt tændt og i standby fra EU's energimærke, kWh om året, HDR og sammenligning med andre skærme.",
  intro:
    "Den nye G60SF med 500 Hz bruger 41,4 W i standardbilledet, 10 W mere end forgængeren G60SD med 360 Hz. Begge bruger 0,5 W i standby.",
  content: `<h2>Hvor mange watt bruger Samsung Odyssey OLED G6?</h2>
<p>Odyssey OLED G6 er Samsungs 27"-gamingskærm med QD-OLED-panel og 2560 × 1440 pixel. Den findes i to generationer. G60SD fra 2024 (LS27DG602SUXEN) har 360 Hz, og G60SF fra 2025 (LS27FG602SUXEN) har 500 Hz. Ifølge EU's energimærke bruger G60SD 31 W i standardbilledet (SDR) og G60SF 41,4 W. Begge bruger 0,5 W i standby og 0,3 W slukket, og begge har energiklasse G. Samsungs danske produktsider oplyser de samme typiske tal som energimærket.</p>
<p>Med seks timer tændt om dagen og standby resten af døgnet bruger G60SD omkring 71 kWh om året, svarende til {{kr 71}}. G60SF bruger omkring 94 kWh, svarende til {{kr 94}}.</p>
<table>
<thead><tr><th>Model</th><th>Hz</th><th>SDR</th><th>HDR</th><th>Standby</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>G60SD (S27DG602SU)</td><td>360 Hz</td><td>31 W</td><td>44 W</td><td>0,5 W</td><td>G</td></tr>
<tr><td>G60SF (S27FG602SU)</td><td>500 Hz</td><td>41,4 W</td><td>48 W</td><td>0,5 W</td><td>G</td></tr>
</tbody>
</table>
<p>I EU's database er der også registreret udgaver med andre modelnumre, S27DG600SU og S27FG604SU, med præcis de samme tal.</p>

<h2>500 Hz koster 10 W</h2>
<p>G60SF bruger 10,4 W mere end G60SD i standardbilledet. Over et år med vores profil er det omkring 23 kWh, svarende til {{kr 23}}. Samsung oplyser ikke, hvad forskellen skyldes. G60SF er dog også certificeret til VESA DisplayHDR TrueBlack 500, mens G60SD er angivet med HDR10 og HDR10+.</p>
<p>Den høje opdateringshastighed koster mest i computeren. 500 billeder i sekundet i QHD kræver et meget kraftigt grafikkort, og det bruger langt mere strøm end skærmen. Skal du kun bruge skærmen til kontor, film og enkelte spil, er 500 Hz ikke nødvendigt. Se hvad en <a href="/gaming-pc/">gaming-pc</a> bruger, hvis du vil regne på hele opsætningen.</p>
<p>Du kan selv vælge opdateringshastigheden i Windows. Til kontorarbejde og film er 60 eller 120 Hz rigeligt, og et grafikkort, der skal tegne færre billeder i sekundet, bruger mindre strøm. Hvor meget det sparer i selve skærmen, oplyser Samsung ikke; energimærket er målt ved skærmens standardindstilling.</p>

<h2>OLED G6 mod andre 27"-skærme</h2>
<p>OLED G6 er en af de mere strømkrævende 27"-skærme. <a href="/skaerm/aoc-q27g4/">AOC Q27G4</a> bruger 21–26 W i alle seks udgaver, også OLED-udgaven Q27G4ZDR med 240 Hz, der ligger på 21 W. Mod den bruger G60SF 20 W mere, omkring 45 kWh om året eller {{kr 45}}.</p>
<p>Samsung sælger også en Odyssey G6 G60F uden OLED, med LCD-panel og 350 Hz. Den bruger 25,4 W ifølge energimærket og har klasse F. Navnene ligner hinanden, så tjek, at der står OLED, hvis det er OLED-skærmen, du vil have.</p>
<p>Sammenlignet med et tv er 41 W ikke lidt. 55" <a href="/tv/sony-bravia-7-ii/">Sony Bravia 7 II</a> bruger 60 W i standardbilledet. Men en computerskærm er ofte tændt flere timer om dagen end et tv. Med vores profil på seks timer dagligt bruger G60SF 94 kWh om året, ikke langt fra de 113 kWh, som 55" Bravia 7 II bruger med fem timers tv om dagen.</p>

<h2>HDR, lysstyrke og indhold</h2>
<p>I energimærkets HDR-måling bruger G60SD 44 W og G60SF 48 W. Forskellen mellem SDR og HDR er mindre end på mange LCD-skærme, fordi OLED-pixels lyser selv. Til gengæld afhænger forbruget meget af billedet. En mørk spilscene bruger mindre end standardmålingen, mens en hvid flade i et regneark eller på en hjemmeside bruger mere. Samsungs specifikationer nævner et maksimalt forbrug på 140 W. Det er en øvre grænse og ikke et normalt forbrug.</p>
<ul>
<li>Brug mørk tilstand i Windows og browseren; det sparer strøm på OLED og mindsker risikoen for indbrænding.</li>
<li>Skru lysstyrken ned til kontorarbejde, og gem den høje lysstyrke til HDR-spil.</li>
<li>Lad skærmen gå i dvale efter få minutter uden brug.</li>
</ul>

<h2>Standby og USB</h2>
<p>Ingen af de to har USB-C. G60SD har en USB-hub med to porte. Lader du telefon eller headset fra skærmens USB-porte, mens skærmen er i standby, bruger den mere end energimærkets 0,5 W, fordi strømmen kommer gennem skærmens strømforsyning. Slukker du skærmen helt, bruger den 0,3 W. Står den ubrugt længe, kan du slukke på stikkontakten. Se mere om <a href="/standby/">standbyforbrug</a>.</p>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung Odyssey OLED G6?",
      answer:
        "Ifølge EU's energimærke bruger G60SD med 360 Hz 31 W og G60SF med 500 Hz 41,4 W i standardbilledet. Standby er 0,5 W for begge.",
    },
    {
      question: "Hvad koster det at have en Odyssey OLED G6 tændt?",
      answer:
        "Med seks timer om dagen bruger G60SD omkring 71 kWh om året, svarende til {{kr 71}}, og G60SF omkring 94 kWh, svarende til {{kr 94}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger 500 Hz-udgaven mere strøm end 360 Hz?",
      answer:
        "Ja. G60SF bruger 41,4 W mod 31 W for G60SD i standardbilledet, omkring 23 kWh mere om året med seks timer dagligt.",
    },
    {
      question: "Hvad bruger Odyssey OLED G6 i HDR?",
      answer: "44 W for G60SD og 48 W for G60SF ifølge energimærket. På lyse billeder kan forbruget være højere.",
    },
    {
      question: "Er Odyssey G6 G60F det samme som Odyssey OLED G6?",
      answer:
        "Nej. G60F har et LCD-panel med 350 Hz og bruger 25,4 W ifølge energimærket. OLED G6 er G60SD og G60SF.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung S27DG602SU (Odyssey OLED G6 G60SD), EU's energimærke", url: eprel("1949558") },
    { name: "EPREL — Samsung S27FG602SU (Odyssey OLED G6 G60SF), EU's energimærke", url: eprel("2338408") },
    { name: "EPREL — Samsung S27FG602EU (Odyssey G6 G60F, LCD), EU's energimærke", url: eprel("2338406") },
    {
      name: "Samsung Danmark — Odyssey OLED G6 G60SD 27\" 360 Hz, specifikationer",
      url: "https://www.samsung.com/dk/monitors/gaming/odyssey-oled-g6-g60sd-27-inch-360hz-oled-qhd-ls27dg602suxen/",
    },
    {
      name: "Samsung Danmark — Odyssey OLED G6 G60SF 27\" 500 Hz, specifikationer",
      url: "https://www.samsung.com/dk/monitors/gaming/odyssey-oled-g6-g60sf-27-inch-500hz-oled-qhd-ls27fg602suxen/",
    },
  ],
  variants: [
    { name: "G60SD 27\" 360 Hz (S27DG602SU)", watts: { off: 0.3, standby: 0.5, on: 31 }, energyClass: "G", source: 0 },
    { name: "G60SF 27\" 500 Hz (S27FG602SU)", watts: { off: 0.3, standby: 0.5, on: 41.4 }, energyClass: "G", source: 1 },
  ],
  publishDate: "2026-12-08",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. Kilderne står nederst på siden.",
};

export default samsungOdysseyOledG6;
