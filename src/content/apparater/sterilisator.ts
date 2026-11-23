import type { ApplianceData } from "@/lib/types";

/**
 * Sterilisator — elektrisk dampsterilisator til sutteflasker (med og uden tørring), mikrobølgesterilisator og UV-C.
 * Intet EU-energimærke.
 * Tal: Philips Avent SCF291 (650 W, 10 min, steril 24 timer) og SCF293 (650 W; ca. 4 min opvarmning + 6 min sterilisering,
 * tørring ca. 30 min, hele cyklussen ca. 40 min, 130 ml vand, standby under 0,3 W, op til seks flasker, steril 24 timer med
 * låg); Beurer BY 76 (500 W, 7 min, steril 3 timer); Philips SCF281/282/283 til mikroovn (2-6 min efter mikroovnens effekt,
 * 200 ml vand, steril op til 24 timer); Tommee Tippee Ultra UV (seks flasker på 35 min, John Lewis); Reer UV-C (10 min,
 * gentager 3 min hver 3. time). Hygiejne: Region Nordjylland (kog 5 min eller opvask ved mindst 65 °C med tørreprogram),
 * Aarhus Kommunes sundhedspleje, NHS (Storbritannien: steriliser til 12 måneder). kWh pr. gang = watt × tid og
 * fordampningsregnestykket er vores omregning; tørringens, mikroovnens og gryde-kogningens forbrug er vores skøn.
 */
const sterilisator: ApplianceData = {
  slug: "sterilisator",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "elkedel",
    synonyms: ["sterilisator", "dampsterilisator", "flaskesterilisator", "sterilisator til sutteflasker", "sterilisering af sutteflasker", "mikrobølgesterilisator", "uv-sterilisator", "philips avent sterilisator", "sterilisator med tørrefunktion"],
  },
  name: "Sterilisator",
  article: "en",
  title: "Sterilisator strømforbrug (2026) → damp, tørring og kWh",
  description:
    "En dampsterilisator til sutteflasker bruger cirka 0,1 kWh pr. gang, med tørring mere. Se watt og tid for damp, mikroovn og UV, og hvornår opvasken er nok.",
  heading: "Strømforbrug for en sterilisator: kWh, pris pr. gang og billigste tidspunkt",
  quickAnswer:
    "En elektrisk dampsterilisator til sutteflasker bruger 500-650 W i 7-10 minutter, svarende til cirka 0,06-0,1 kWh pr. gang, eller {{kr 0,06}}-{{kr 0,1}} ved {{pris_kwh}}. Med tørrefunktion bliver det efter vores skøn cirka 0,25 kWh. Én sterilisering om dagen i et år giver omkring 36 kWh, svarende til {{kr 36}}.",
  kwhRange: [5, 220],
  typicalKwh: 36,
  wattage: 650,
  standbyWatts: 0.3,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Damp på ti minutter</h2>
<p>En elektrisk dampsterilisator er en lille beholder med et varmelegeme i bunden. Du hælder en afmålt mængde vand i, stiller flasker, sutter og låg i kurven og trykker på knappen. Vandet koger, og dampen dræber bakterier og svampe. Når vandet er fordampet, slukker sterilisatoren selv. Philips skriver i brugsanvisningen til Avent SCF293, at opvarmningen tager cirka 4 minutter og selve steriliseringen cirka 6, i alt omkring 10 minutter med 130 ml vand og plads til seks flasker.</p>
<table>
<thead><tr><th>Sterilisator</th><th>Effekt</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Beurer BY 76, damp</td><td>500 W</td><td>7 min</td><td>0,058</td><td>{{kr 0,058}}</td></tr>
<tr><td>Philips Avent SCF291, damp</td><td>650 W</td><td>10 min</td><td>0,108</td><td>{{kr 0,108}}</td></tr>
<tr><td>Philips Avent SCF293, damp og tørring</td><td>650 W</td><td>ca. 40 min</td><td>ca. 0,25 (vores skøn)</td><td>{{kr 0,25}}</td></tr>
</tbody>
</table>
<p>Tallene for damp er vores omregning: effekt gange tid, med fuld effekt hele tiden. De passer fint med fysikken. At varme 130 ml vand op til kogepunktet og fordampe det kræver efter vores beregning omkring 0,09 kWh, så en dampsterilisator på 650 W i 10 minutter er tæt på det, det teoretisk kræver. Det er ikke apparatet, der er ineffektivt; det er dampen, der kræver energi.</p>

<h2>Tørrefunktionen</h2>
<p>Sterilisatorer med tørring blæser varm luft gennem kurven bagefter, så flaskerne er tørre og klar til at stille væk. Philips oplyser, at tørringen på SCF293 tager cirka 30 minutter, og at en hel cyklus med sterilisering og tørring tager omkring 40 minutter. Philips oplyser ikke, hvor meget tørringen bruger. Tørreluften kræver langt mindre effekt end kogningen, og vi skønner, at tørringen lægger omkring 0,15 kWh oveni, så hele cyklussen bliver cirka 0,25 kWh. Lader du i stedet flaskerne lufttørre på et rent stativ, sparer du det meste af det.</p>
<p>Philips skriver, at indholdet holder sig sterilt i op til 24 timer, hvis låget ikke åbnes; Beurer angiver 3 timer for BY 76. Har du en sterilisator, der holder 24 timer, kan du nøjes med én omgang om dagen og tage flaskerne ud efterhånden.</p>

<h2>Mikroovn, gryde eller opvaskemaskine</h2>
<p>En mikrobølgesterilisator er en plastbeholder med vand, som du stiller i <a href="/mikroovn/">mikroovnen</a>. Philips skriver i brugsanvisningen til SCF281/282/283, at den skal have 2 minutter i en mikroovn på 1.200-1.850 W, 4 minutter ved 850-1.100 W og 6 minutter ved 500-800 W, og at indholdet holder sig sterilt i op til 24 timer. Mikroovnens effekt er den effekt, den sender ind i maden; fra stikkontakten trækker den mere. Efter vores skøn bruger en omgang derfor omkring 0,1 kWh, altså det samme som en elektrisk dampsterilisator.</p>
<p>Den gamle metode er at koge flasker og sutter i en gryde. Region Nordjylland anbefaler at koge dem i 5 minutter. At bringe to liter vand i kog og holde det kogende i 5 minutter bruger efter vores skøn omkring 0,3 kWh på en kogeplade, altså tre gange så meget som en dampsterilisator, fordi der skal varmes langt mere vand op.</p>
<table>
<thead><tr><th>Metode (vores skøn)</th><th>kWh pr. gang</th><th>Én gang om dagen, et år</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Dampsterilisator, ingen tørring</td><td>ca. 0,1</td><td>ca. 36 kWh</td><td>{{kr 36}}</td></tr>
<tr><td>Mikrobølgesterilisator</td><td>ca. 0,1</td><td>ca. 36 kWh</td><td>{{kr 36}}</td></tr>
<tr><td>Dampsterilisator med tørring</td><td>ca. 0,25</td><td>ca. 91 kWh</td><td>{{kr 91}}</td></tr>
<tr><td>Kogning i gryde, 5 minutter</td><td>ca. 0,3</td><td>ca. 110 kWh</td><td>{{kr 110}}</td></tr>
</tbody>
</table>
<p>Region Nordjylland og Aarhus Kommunes sundhedspleje skriver begge, at flaskerne også kan vaskes i <a href="/opvaskemaskine/">opvaskemaskinen</a> ved mindst 65 grader med tørreprogram. Kører opvaskemaskinen alligevel, koster flaskerne næsten ingenting ekstra. Det britiske sundhedsvæsen NHS anbefaler derimod at sterilisere alt flaskeudstyr, indtil barnet er 12 måneder, og skriver, at en opvaskemaskine ikke steriliserer. Følg de danske råd fra din sundhedsplejerske.</p>

<h2>UV-sterilisatorer</h2>
<p>En nyere type bruger ultraviolet UV-C-lys i stedet for damp. Tommee Tippees Ultra UV steriliserer og tørrer seks flasker på 35 minutter, og Reers UV-C-apparat desinficerer på 10 minutter og gentager det i 3 minutter hver tredje time, når flaskerne står i opbevaringstilstand. Ingen af producenterne oplyser effekten på de sider, vi har kunnet læse, så vi kan ikke sætte et sikkert kWh-tal på dem. UV-lyset selv bruger lidt, men de fleste UV-sterilisatorer har også en tørrefunktion med varm luft, og det er den, der bruger mest.</p>

<h2>Hvornår er det billigst at sterilisere?</h2>
<p>En sterilisator er et af de få apparater i et hjem med et lille barn, hvor du selv vælger tidspunktet. Holder flaskerne sig sterile i 24 timer med låget på, kan du lade sterilisatoren køre om aftenen efter kl. 21 eller om natten, hvor timeprisen ofte er lavere end i spidstimerne kl. 17-21, og tage flaskerne ud i løbet af næste dag. Beregneren ovenfor og oversigten over dagens timer viser, hvornår strømmen er billigst i dag.</p>
<p>Gevinsten er lille i kroner, fordi en omgang kun bruger omkring 0,1 kWh, men det koster heller ikke noget at flytte den. Har du en model med tørring, er det værd at gøre det til en vane: så kører de 40 minutter, mens du sover.</p>

<h2>Gode råd</h2>
<ul>
<li><strong>Brug den afmålte mængde vand</strong> — mere vand betyder længere kogning og mere strøm.</li>
<li><strong>Fyld kurven</strong>, så du steriliserer alle dagens flasker i én omgang.</li>
<li><strong>Lufttør</strong> på et rent stativ i stedet for at bruge tørrefunktionen.</li>
<li><strong>Kør den om aftenen eller natten</strong>, hvis flaskerne holder sig sterile til næste dag.</li>
<li><strong>Spørg sundhedsplejersken</strong>, om opvaskemaskinen er nok, når barnet bliver ældre.</li>
</ul>
<p>Se også, hvad en <a href="/flaskevarmer/">flaskevarmer</a> bruger pr. flaske.</p>`,
  faqs: [
    { question: "Hvad koster det at sterilisere sutteflasker?", answer: "En elektrisk dampsterilisator bruger 0,06-0,1 kWh pr. gang, svarende til {{kr 0,06}}-{{kr 0,1}} ved {{pris_kwh}}. Med tørrefunktion er det efter vores skøn omkring 0,25 kWh." },
    { question: "Hvor mange watt bruger en dampsterilisator?", answer: "Philips Avent SCF291 og SCF293 bruger 650 W, Beurer BY 76 500 W. En sterilisering tager 7-10 minutter." },
    { question: "Er det billigere at koge sutteflasker i en gryde?", answer: "Nej. At koge to liter vand i 5 minutter bruger efter vores skøn omkring 0,3 kWh, cirka tre gange så meget som en dampsterilisator." },
    { question: "Kan jeg vaske sutteflasker i opvaskemaskinen i stedet?", answer: "Region Nordjylland og Aarhus Kommunes sundhedspleje skriver, at flasker kan vaskes i opvaskemaskinen ved mindst 65 grader med tørreprogram. Følg din sundhedsplejerskes råd." },
    { question: "Hvor længe holder flaskerne sig sterile?", answer: "Philips oplyser op til 24 timer med låget på for SCF291 og SCF293, Beurer 3 timer for BY 76. Så kan steriliseringen lægges i de billige timer." },
    { question: "Bruger en mikrobølgesterilisator mindre strøm?", answer: "Næsten det samme. 4 minutter i en mikroovn på omkring 1.000 W bruger efter vores skøn cirka 0,1 kWh, fordi mikroovnen trækker mere fra stikket, end den er mærket med." },
  ],
  relatedSlugs: ["flaskevarmer", "opvaskemaskine", "mikroovn", "babyalarm", "elkedel"],
  sources: [
    { name: "Philips — produktblad SCF291/01", url: "https://www.documents.philips.com/assets/20210107/dfbfc8bc49274d7e8b6caca900bc2cdc.pdf" },
    { name: "Philips — produktblad SCF293/01", url: "https://www.documents.philips.com/assets/20210106/f57560dccb264ad5bf46aca801540fa9.pdf" },
    { name: "Philips — brugsanvisning SCF293", url: "https://www.documents.philips.com/assets/20220418/11e8d82dd46b4f4c985eae7b003d6475.pdf" },
    { name: "Philips — brugsanvisning SCF281/282/283 til mikroovn", url: "https://www.documents.philips.com/assets/20201021/e19e88bd7eaa45db8f67ac5b0115ac60.pdf" },
    { name: "Beurer — datablad BY 76", url: "https://res.cloudinary.com/beurer/image/upload/v1705113963/stibo-live/95308_BY76_2020-07-21_01_DS_EN_BEU.pdf" },
    { name: "John Lewis — Tommee Tippee Ultra UV 3-in-1, produktside", url: "https://www.johnlewis.com/tommee-tippee-ultra-uv-3-in-1-electric-steriliser-and-dryer/p5860616" },
    { name: "Reer — UV-C-desinfektionsapparat med tørrefunktion", url: "https://www.reer.de/en/UVC-disinfecting-device-with-drying-function" },
    { name: "Region Nordjylland — Gode råd om flaskeernæring", url: "https://rhnordjylland.rn.dk/-/media/SXI/KBUV31-312-Gode-raad-om-flaskeernaering/KBUV31-312-pdf.pdf" },
    { name: "Aarhus Kommune, Sundhedsplejen — Mad på flaske til spædbørn", url: "https://sundhedspleje.aarhus.dk/media/1yab4a3z/mad-paa-flaske-til-spaedboern-februar-2023.pdf" },
    { name: "NHS — Sterilising baby bottles", url: "https://www.nhs.uk/baby/breastfeeding-and-bottle-feeding/bottle-feeding/sterilising-baby-bottles/" },
  ],
  calculatorConfig: {
    title: "Beregn sterilisatorens strømforbrug",
    options: [
      { label: "Dampsterilisator 500 W, 7 min", kwhPerUse: 0.058 },
      { label: "Dampsterilisator 650 W, 10 min", kwhPerUse: 0.1 },
      { label: "Mikrobølgesterilisator, 4 min (vores skøn)", kwhPerUse: 0.1 },
      { label: "Dampsterilisator med tørring, ca. 40 min (vores skøn)", kwhPerUse: 0.25 },
      { label: "Kogning i gryde, 5 min (vores skøn)", kwhPerUse: 0.3 },
    ],
    usageLabel: "Steriliseringer pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 7,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-20",
  updated: "2026-11-23",
};

export default sterilisator;
