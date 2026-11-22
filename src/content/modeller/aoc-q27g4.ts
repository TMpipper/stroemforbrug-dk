import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;
const aoc = (model: string) => `https://www.aoc.com/dk/gaming/monitors/${model}`;

const aocQ27g4: ModelData = {
  slug: "aoc-q27g4",
  parent: "skaerm",
  brand: "AOC",
  name: "AOC Q27G4",
  released: "2023-12",
  synonyms: ["aoc q27g4x", "aoc q27g4 strømforbrug", "q27g4xn watt", "aoc q27g4zd forbrug", "aoc q27g4zdr", "aoc 27 tommer gaming skærm forbrug", "q27g4xf strømforbrug"],
  title: "AOC Q27G4 strømforbrug (2026) → watt for IPS, VA og OLED",
  description:
    "AOC Q27G4X, XN, XF, ZR, ZD og ZDR: watt tændt og i standby fra EU's energimærke, kWh om året, HDR-forbrug og forskellen på IPS-, VA- og OLED-udgaverne.",
  intro:
    "Alle seks Q27G4-udgaver bruger 21–26 W i standardbilledet. Den sparsomme ende er VA-udgaven XN, den billige IPS XF og OLED-udgaven ZDR med 21 W.",
  content: `<h2>Hvor mange watt bruger AOC Q27G4?</h2>
<p>Q27G4 er AOC's familie af 27"-gamingskærme med 2560 × 1440 pixel. Bogstaverne bag navnet dækker over forskellige paneler. Q27G4X, Q27G4XF og Q27G4ZR har et hurtigt IPS-panel, Q27G4XN et VA-panel, og Q27G4ZD og Q27G4ZDR er QD-OLED med et synligt billede på 26,5". Opdateringshastigheden er 180 Hz for X-modellerne, 240 Hz for ZR og ZDR og 280 Hz for ZD.</p>
<p>Ifølge EU's energimærke bruger de 21–26 W i standardbilledet (SDR). Standby er 0,3–0,5 W og slukket 0,3 W. Med seks timer tændt om dagen og standby resten af døgnet bruger den mest strømkrævende, Q27G4X, omkring 59 kWh om året, svarende til {{kr 59}}. Den mest sparsomme, Q27G4ZDR, bruger omkring 48 kWh, svarende til {{kr 48}}.</p>
<table>
<thead><tr><th>Model</th><th>Panel</th><th>SDR</th><th>HDR</th><th>Standby</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>Q27G4X</td><td>IPS, 180 Hz</td><td>26 W</td><td>46 W</td><td>0,3 W</td><td>F</td></tr>
<tr><td>Q27G4XN</td><td>VA, 180 Hz</td><td>21 W</td><td>32 W</td><td>0,5 W</td><td>E</td></tr>
<tr><td>Q27G4XF</td><td>IPS, 180 Hz</td><td>21 W</td><td>32 W</td><td>0,5 W</td><td>E</td></tr>
<tr><td>Q27G4ZR</td><td>IPS, 240 Hz</td><td>25 W</td><td>48 W</td><td>0,3 W</td><td>F</td></tr>
<tr><td>Q27G4ZD</td><td>QD-OLED, 280 Hz</td><td>24 W</td><td>24 W</td><td>0,5 W</td><td>F</td></tr>
<tr><td>Q27G4ZDR</td><td>QD-OLED, 240 Hz</td><td>21 W</td><td>21 W</td><td>0,3 W</td><td>E</td></tr>
</tbody>
</table>

<h2>IPS, VA eller OLED: hvad koster lysstyrken?</h2>
<p>Forskellen mellem de tre LCD-udgaver med 180 Hz handler mest om lysstyrke. Q27G4X er den lysstærke med op til 450 nit og HDR400. Den bruger 26 W mod 21 W for den mindre lysstærke XF med 300 nit og for VA-udgaven XN. De 5 W giver omkring 11 kWh om året med vores profil, svarende til {{kr 11}}. Det er ikke meget, men det viser, at baggrundslyset er den største forbruger på en LCD-skærm.</p>
<p>OLED-udgaverne har intet baggrundslys. Hver pixel lyser selv, så forbruget afhænger af, hvor lyst billedet er. I energimærkets måling ligger ZD og ZDR på 21–24 W, altså på niveau med LCD-udgaverne.</p>

<h2>Energimærket og AOC's egne tal er ikke ens</h2>
<p>På AOC's danske produktsider står et »typisk« strømforbrug, som ikke svarer til energimærket. For LCD-udgaverne er det 23–32 W, for OLED-udgaverne 63 W (ZDR) og 78 W (ZD). AOC oplyser ikke, hvordan de typiske tal er målt. Energimærket er derimod målt efter EU's fælles metode med et standardiseret videosignal, så det er det tal, vi bruger.</p>
<p>Forskellen er størst for OLED, og det giver mening. En OLED-skærm bruger lidt strøm på et mørkt billede, men meget på en hvid flade. Arbejder du mest i lyse programmer som regneark, mail og hvide hjemmesider, vil en OLED-skærm i praksis bruge mere end energimærkets 21–24 W. Spiller du mørke spil eller bruger mørk tilstand, kommer du tættere på.</p>

<h2>HDR og høj opdateringshastighed</h2>
<p>I HDR stiger forbruget for LCD-udgaverne til 32–48 W, fordi baggrundslyset skrues op. Q27G4ZR med HDR400 går fra 25 til 48 W, næsten det dobbelte. OLED-udgaverne bruger det samme i HDR som i SDR ifølge energimærket. Høj opdateringshastighed koster lidt i selve skærmen, men den store forskel ligger i computeren: 240 eller 280 billeder i sekundet kræver meget mere af grafikkortet end 60. Se hvad en <a href="/gaming-pc/">gaming-pc</a> bruger.</p>

<h2>Standby, USB og gode vaner</h2>
<p>Ingen af Q27G4-udgaverne har USB-C med opladning. Q27G4ZD har fire USB-A-porte, og Q27G4ZDR har to USB-A-porte. Lader du telefonen fra skærmens USB, mens skærmen er i standby, bruger den mere end energimærkets 0,3–0,5 W. Strømmen til telefonen kommer jo fra skærmens strømforsyning.</p>
<ul>
<li>Skru lysstyrken ned til 120–200 nit på kontorarbejde; fabriksindstillingen er ofte lysere end nødvendigt.</li>
<li>Lad computeren slukke skærmen efter få minutter uden brug.</li>
<li>Sluk på stikkontakten, hvis skærmen står ubrugt i længere tid; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Til sammenligning bruger en <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 3,63 W i tomgang med sin egen skærm tændt. En ekstern 27"-skærm bruger altså mere end mange bærbare. Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger AOC Q27G4X?",
      answer:
        "26 W i standardbilledet og 46 W i HDR ifølge EU's energimærke. Standby er 0,3 W. Med seks timer om dagen er det omkring 59 kWh om året, svarende til {{kr 59}}.",
    },
    {
      question: "Hvilken Q27G4 bruger mindst strøm?",
      answer:
        "Q27G4XN (VA), Q27G4XF (IPS) og Q27G4ZDR (QD-OLED) bruger alle 21 W i standardbilledet. ZDR har lavest standby, 0,3 W, og bruger omkring 48 kWh om året.",
    },
    {
      question: "Bruger OLED-udgaven Q27G4ZD mere strøm end IPS?",
      answer:
        "Ikke ifølge energimærket, hvor ZD bruger 24 W mod 26 W for Q27G4X. AOC's eget »typiske« tal for ZD er dog 78 W, og på lyse billeder som hvide dokumenter bruger en OLED-skærm mere.",
    },
    {
      question: "Hvad bruger AOC Q27G4 i standby?",
      answer:
        "0,3–0,5 W afhængigt af udgave og 0,3 W slukket. Det er 2–3 kWh om året med vores profil.",
    },
  ],
  sources: [
    { name: "EPREL — AOC Q27G4X, EU's energimærke", url: eprel("1852121") },
    { name: "EPREL — AOC Q27G4XN, EU's energimærke", url: eprel("1969592") },
    { name: "EPREL — AOC Q27G4XF, EU's energimærke", url: eprel("2056297") },
    { name: "EPREL — AOC Q27G4ZR, EU's energimærke", url: eprel("2310386") },
    { name: "EPREL — AOC Q27G4ZD, EU's energimærke", url: eprel("2401828") },
    { name: "EPREL — AOC Q27G4ZDR, EU's energimærke", url: eprel("2458808") },
    { name: "AOC Danmark — Q27G4X, specifikationer", url: aoc("q27g4x") },
    { name: "AOC Danmark — Q27G4ZD, specifikationer", url: aoc("q27g4zd") },
    { name: "AOC Danmark — Q27G4ZDR, specifikationer", url: aoc("q27g4zdr") },
  ],
  variants: [
    { name: "Q27G4X (IPS, 180 Hz)", watts: { off: 0.3, standby: 0.3, on: 26 }, energyClass: "F", source: 0 },
    { name: "Q27G4XN (VA, 180 Hz)", watts: { off: 0.3, standby: 0.5, on: 21 }, energyClass: "E", source: 1 },
    { name: "Q27G4XF (IPS, 180 Hz)", watts: { off: 0.3, standby: 0.5, on: 21 }, energyClass: "E", source: 2 },
    { name: "Q27G4ZR (IPS, 240 Hz)", watts: { off: 0.3, standby: 0.3, on: 25 }, energyClass: "F", source: 3 },
    { name: "Q27G4ZD (QD-OLED, 280 Hz)", watts: { off: 0.3, standby: 0.5, on: 24 }, energyClass: "F", source: 4 },
    { name: "Q27G4ZDR (QD-OLED, 240 Hz)", watts: { off: 0.3, standby: 0.3, on: 21 }, energyClass: "E", source: 5 },
  ],
  publishDate: "2026-12-07",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er AOC's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. AOC's produktsider oplyser et andet »typisk« forbrug; vi bruger energimærket. Kilderne står nederst på siden.",
};

export default aocQ27g4;
