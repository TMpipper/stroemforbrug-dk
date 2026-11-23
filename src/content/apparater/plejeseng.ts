import type { ApplianceData } from "@/lib/types";

/**
 * Plejeseng — el-regulerbar pleje-/hospitalsseng i hjemmet, elevationsseng og vekseltryksmadras. Intet EU-energimærke.
 * Tal: LINAK CA30/CA40 styreboks (standby ca. 0,5 W ved 230 V, arbejdscyklus 10 % — 2 min til/18 min fra, op til 120 W),
 * LINAK SMPS006 til komfortsenge (under 0,1 W i standby), Burmeier Dali II 24 V (LINAK SMPS 4, maks. 0,8 A ved 230 V, udgang
 * 24 V/4,6 A, 2/18 min), Burmeier Regia (SMPS 15, maks. 1,5 A), Invacare Soft Tilt SB 755 (maks. 1,5 A, 10 %, nødbatteri),
 * Huntleigh Alpha Relief ALR01 vekseltrykspumpe (14 VA, cyklus 10 min), sundhed.dk (hjælpemidler efter servicelovens § 112).
 * Motortid pr. døgn (højst 5 min) er vores skøn; pumpens 14 VA er brugt som øvre grænse for watt.
 */
const plejeseng: ApplianceData = {
  slug: "plejeseng",
  meta: {
    category: "pleje",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["plejeseng", "el-plejeseng", "elplejeseng", "hospitalsseng", "elevationsseng", "regulerbar seng", "el-seng", "sygeseng", "vekseltryksmadras", "trykaflastende madras", "madraspumpe"],
  },
  name: "Plejeseng",
  article: "en",
  title: "Plejeseng strømforbrug (2026) → motor, standby og madras",
  description:
    "En el-plejeseng bruger under 10 kWh om året, fordi motoren kun kører få minutter. Se standby, motorens watt og hvad en vekseltryksmadras lægger oveni.",
  heading: "Strømforbrug for en plejeseng: kWh i døgnet og pris om året",
  quickAnswer:
    "En el-plejeseng bruger meget lidt strøm: styreboksen bruger omkring 0,5 W i standby, og motoren kører kun nogle minutter om dagen. Efter vores skøn bliver det cirka 8 kWh om året, svarende til {{kr 8}} ved {{pris_kwh}}. Har sengen en vekseltryksmadras med pumpe, der kører døgnet rundt, kan pumpen alene bruge op til 120 kWh om året, eller {{kr 120}}.",
  kwhRange: [3, 135],
  typicalKwh: 8,
  wattage: 120,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>En seng med motor — men motoren holder mest pause</h2>
<p>En el-plejeseng har to eller flere motorer, der hæver og sænker sengen, rygdelen og bendelen. Motorerne er lineære aktuatorer, og de får strøm fra en styreboks, der omsætter 230 volt til lavspænding, typisk 24 volt. Den danske producent LINAK laver styrebokse og aktuatorer til mange plejesenge, og deres datablad for styreboksene CA30 og CA40 viser de to tal, der betyder noget for strømforbruget: effekten, når motorerne kører, og standbyforbruget, når de ikke gør.</p>
<table>
<thead><tr><th>Plejeseng eller del</th><th>Tal fra producenten</th><th>Hvad det betyder</th></tr></thead>
<tbody>
<tr><td>LINAK CA30/CA40, styreboks</td><td>ca. 0,5 W i standby, op til 120 W</td><td>Lavt forbrug i hvile</td></tr>
<tr><td>LINAK CA30/CA40, arbejdscyklus</td><td>10 % — 2 min til, 18 min fra</td><td>Motoren må ikke køre længe ad gangen</td></tr>
<tr><td>Burmeier Dali II, 24 V</td><td>Strømforsyning LINAK SMPS 4, maks. 0,8 A ved 230 V</td><td>Højst cirka 184 VA, når motorerne kører</td></tr>
<tr><td>Burmeier Regia</td><td>Strømforsyning SMPS 15, maks. 1,5 A</td><td>Højere spidseffekt, samme korte drift</td></tr>
<tr><td>LINAK SMPS006 til komfortsenge</td><td>under 0,1 W i standby</td><td>Næsten intet forbrug i hvile</td></tr>
</tbody>
</table>
<p>Arbejdscyklussen er nøglen. Både LINAK, Burmeier og Invacare angiver, at motorerne højst må køre 2 minutter og derefter holde 18 minutters pause. Motorerne er altså bygget til korte bevægelser, ikke til at køre i timevis. Selv en seng, der justeres mange gange om dagen, kommer efter vores skøn sjældent over 5 minutters motortid i døgnet.</p>

<h2>Hvad bruger sengen på et døgn og et år?</h2>
<p>Med 0,5 W i standby bruger styreboksen 0,012 kWh i døgnet, og sengen er tilsluttet hele året. Lægger vi højst 5 minutters motortid på 120 W oveni, er det yderligere 0,01 kWh. Tallene for motortiden er vores skøn.</p>
<table>
<thead><tr><th>Plejeseng (vores skøn)</th><th>kWh i døgnet</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Komfort- eller elevationsseng med under 0,1 W standby</td><td>0,012</td><td>ca. 4,5</td><td>{{kr 4,5}}</td></tr>
<tr><td>Plejeseng med 0,5 W standby</td><td>0,022</td><td>ca. 8</td><td>{{kr 8}}</td></tr>
<tr><td>Plejeseng + vekseltryksmadras (14 VA, øvre grænse)</td><td>0,36</td><td>ca. 130</td><td>{{kr 130}}</td></tr>
</tbody>
</table>
<p>Selve sengen er altså et af de mindste forbrug i et hjem. Den bruger mindre end en router, og det meste af forbruget er <a href="/standby/">standby</a>. Ældre senge med en almindelig transformer i stedet for en moderne strømforsyning kan bruge mere i hvile; en stikmåler viser det på et døgn.</p>

<h2>Vekseltryksmadrassen er den store post</h2>
<p>En del plejesenge i hjemmet har en trykaflastende madras, hvor en lille luftpumpe skiftevis fylder og tømmer madrassens luftceller, så trykket på huden flytter sig og forebygger tryksår. Den pumpe kører hele døgnet. Huntleigh oplyser for vekseltrykspumpen Alpha Relief en mærkeeffekt på 14 VA og en cyklus på 10 minutter. Fordi watt aldrig er større end voltampere, er 14 W den øvre grænse: 0,34 kWh i døgnet og cirka 120 kWh om året, svarende til {{kr 120}}.</p>
<p>Det er femten gange så meget som sengen selv. Har den, der ligger i sengen, en vekseltryksmadras, er det derfor pumpen og ikke sengen, der fylder på elregningen. Pumpen må ikke slukkes for at spare strøm; den er en del af behandlingen, og det er sygeplejersken eller terapeuten, der afgør, hvornår den skal bruges.</p>

<h2>Nødbatteri og strømsvigt</h2>
<p>Flere plejesenge har et lille nødbatteri, så sengen kan sænkes eller sættes i en sikker stilling, hvis strømmen går. Invacare oplyser et backupbatteri på 12 V og 0,8 Ah til Soft Tilt-funktionen på SB 755. Batteriet holdes opladet af styreboksen og bidrager kun med en lille del af standbyforbruget. Det er ikke et batteri, sengen kører på til daglig, og det skal ikke lades separat.</p>
<p>Vil du spare de sidste watt, kan det være fristende at trække stikket ud om natten. Gør det ikke på en plejeseng, der er i brug: sengen skal kunne justeres, hvis der opstår behov, og en vekseltryksmadras skal køre konstant. Besparelsen er under {{kr 4,4}} om året for styreboksens standby.</p>

<h2>Hvem betaler sengen — og strømmen?</h2>
<p>Har du brug for en plejeseng i hjemmet, kan kommunen bevilge den som hjælpemiddel. Sundhed.dk skriver, at hjælpemidler bevilges efter servicelovens § 112, og nævner særlige senge som et eksempel. Sengen udlånes typisk af kommunens hjælpemiddeldepot og bliver vedligeholdt af kommunen.</p>
<p>Vi har ikke fundet regler, der siger, at kommunen også dækker strømmen til en udlånt seng. For sengen alene er beløbet så lille, at det sjældent betyder noget. Står der en vekseltrykspumpe, iltapparat eller andet udstyr, der kører hele døgnet, så spørg kommunen, hvordan udgiften håndteres i dit tilfælde.</p>

<h2>Bruger plejesengen strøm i de dyre timer?</h2>
<p>Sengen bruger strøm hele døgnet, fordi styreboksen er tilsluttet, men forbruget er så lille, at det ikke giver mening at flytte noget. Motoren kører, når der er brug for det, og den korte drift giver kun en brøkdel af en øre pr. justering. Vekseltrykspumpen kører konstant og bruger lige meget i billige og dyre timer. Der er altså intet at flytte til nattens billigere timer, og det er heller ikke dér, besparelsen ligger.</p>

<h2>Gode råd om plejesengens strøm</h2>
<ul>
<li><strong>Lad sengen være tilsluttet</strong> — standbyforbruget er under {{kr 4,4}} om året.</li>
<li><strong>Kend pumpens forbrug</strong>, hvis der er en vekseltryksmadras; den er den store post.</li>
<li><strong>Brug en stikmåler</strong> på en ældre seng for at se, hvad den bruger i hvile.</li>
<li><strong>Kold seng?</strong> Et <a href="/varmetaeppe/">varmetæppe</a> bruger lidt strøm, men tal med plejepersonalet, før det bruges i en plejeseng.</li>
<li><strong>Trappe i huset?</strong> Se også, hvad en <a href="/trappelift/">trappelift</a> bruger.</li>
</ul>`,
  faqs: [
    { question: "Hvad koster det at have en el-plejeseng i strøm?", answer: "Efter vores skøn bruger sengen cirka 8 kWh om året, svarende til {{kr 8}} ved {{pris_kwh}}. Det meste er styreboksens standby på omkring 0,5 W." },
    { question: "Hvor mange watt bruger motoren i en plejeseng?", answer: "LINAKs styrebokse til plejesenge leverer op til 120 W, når motorerne kører. Motorerne må højst køre 2 minutter ad gangen efterfulgt af 18 minutters pause." },
    { question: "Hvad bruger en vekseltryksmadras i strøm?", answer: "Huntleighs pumpe Alpha Relief er mærket 14 VA. Kører den døgnet rundt, er det højst 0,34 kWh i døgnet og cirka 120 kWh om året, svarende til {{kr 120}}." },
    { question: "Skal jeg trække stikket til plejesengen om natten?", answer: "Nej. Sengen skal kunne justeres, og besparelsen på standby er under {{kr 4,4}} om året. En vekseltryksmadras må aldrig slukkes for at spare." },
    { question: "Betaler kommunen for en plejeseng?", answer: "Kommunen kan bevilge en plejeseng som hjælpemiddel efter servicelovens § 112. Vi har ikke fundet regler om, at strømmen også dækkes." },
  ],
  relatedSlugs: ["varmetaeppe", "trappelift", "router", "luftfugter"],
  sources: [
    { name: "LINAK — datablad styreboks CA30/CA40", url: "https://cdn.linak.com/-/media/files/data-sheet-source/en/control-box-ca30-ca40-data-sheet-eng.pdf" },
    { name: "LINAK — SMPS006 strømforsyning", url: "https://www.linak.com/products/accessories/smps006" },
    { name: "Burmeier — brugsanvisning Dali II 24 V", url: "https://mc-seniorenprodukte.de/media/pdf/7e/45/2d/burmeier-dali-ii-24v-bedienungsanleitung.pdf" },
    { name: "Burmeier — brugsanvisning Regia", url: "https://rehashop.de/media/pdf/66/e3/d4/BURMEIER-Pflegebett-Regia-Gebrauchsanweisung.pdf" },
    { name: "Invacare — brugsanvisning Soft Tilt til SB 755", url: "https://finnhjelpemiddel.nav.no/imageproxy/file/brugsvejl/64605.pdf" },
    { name: "Huntleigh — brugsanvisning Alpha Relief", url: "https://www.arjo.com/globalassets/localisation/au-site/pdf/rental-ifu-pdf/alpha-relief-user-manual.pdf" },
    { name: "sundhed.dk — Hjælpemidler, forbrugsgoder og boligændringer", url: "https://www.sundhed.dk/borger/patienthaandbogen/sociale-ydelser/tilskuds-og-stoettemuligheder-efter-serviceloven-mv/hjaelpemidler-forbrugsgoder-og-boligaendringer/" },
  ],
  calculatorConfig: {
    title: "Beregn plejesengens strømforbrug",
    options: [
      { label: "Komfort- eller elevationsseng, under 0,1 W standby", kwhPerUse: 0.012 },
      { label: "Plejeseng, 0,5 W standby og højst 5 min motor", kwhPerUse: 0.022 },
      { label: "Plejeseng med vekseltryksmadras (14 VA, øvre grænse)", kwhPerUse: 0.36 },
    ],
    usageLabel: "Døgn i brug pr. år",
    usageUnit: "døgn/år",
    usageMin: 1,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 1,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-18",
  updated: "2026-11-23",
};

export default plejeseng;
