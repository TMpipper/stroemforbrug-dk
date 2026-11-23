import type { ApplianceData } from "@/lib/types";

/**
 * Varmetæppe — el-underlagstæppe (varmedyne), overtæppe/plaid og varmepude. Intet EU-energimærke.
 * Tal: Beurer UB 60 Green Planet (60 W, 150 × 80 cm, 4 trin, 12 timers sluk, trin 3-4 → 2 efter 3 timer, forvarm ca. 30 min),
 * Beurer UB 90/UB 100 (kWh-visning: begge zoner på trin 9 → 0,01 kWh på ca. 8 min, dvs. ca. 75 W), Beurer TS 26 XXL
 * (2 × 60 W, katalog 2025), Beurer HD 75 Cosy Nordic plaid (100 W, sluk efter ca. 3 timer), Beurer HK 25 varmepude (100 W,
 * sluk efter ca. 90 min), CHOICE (de fleste el-tæpper 100-150 W), Which? (el-tæppe 2-6 p i timen mod 8-76 p for en elvarmer).
 * Gennemsnitseffekten på lave trin og kWh pr. nat er vores skøn.
 */
const varmetaeppe: ApplianceData = {
  slug: "varmetaeppe",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["varmetæppe", "varmetaeppe", "el-tæppe", "eltæppe", "elektrisk tæppe", "varmedyne", "elektrisk varmedyne", "underlagstæppe", "varmeplaid", "varmepude", "elektrisk varmepude", "beurer varmetæppe"],
  },
  name: "Varmetæppe",
  article: "et",
  title: "Varmetæppe strømforbrug (2026) → watt, nat og varmepude",
  description:
    "Et el-varmetæppe bruger 60-150 watt, mens det varmer. Se kWh pr. nat for tæppe, plaid og varmepude, og hvad det sparer mod at varme soveværelset op.",
  heading: "Strømforbrug for et varmetæppe: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "Et varmetæppe til en enkeltseng bruger typisk 60 W på højeste trin. Forvarmer du sengen i en halv time og lader det køre et par timer på et lavt trin, bliver det efter vores skøn cirka 0,09 kWh pr. nat, svarende til {{kr 0,09}} ved {{pris_kwh}}. 150 nætter om året giver omkring 14 kWh, eller {{kr 13,5}}. En elradiator bruger mere på én time.",
  kwhRange: [2, 120],
  typicalKwh: 14,
  wattage: 60,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.9, 1.7, 1.4, 0.8, 0.3, 0.1, 0, 0.1, 0.4, 1.0, 1.6, 2.0],
  content: `<h2>Tre slags varmetæpper</h2>
<p>Et varmetæppe er et tæppe med tynde varmetråde, der bliver lune, når der går strøm igennem dem. De findes i tre hovedtyper. Underlagstæppet, også kaldet en varmedyne, ligger på madrassen under lagenet og bruges til at varme sengen op, før du går i seng. Overtæppet eller plaiden ligger ovenpå, typisk i sofaen. Varmepuden er lille og bruges mod ømme muskler eller kolde fødder. Fælles for dem alle er en lav effekt sammenlignet med de apparater, der varmer et helt rum.</p>
<table>
<thead><tr><th>Varmetæppe</th><th>Størrelse</th><th>Effekt (højeste trin)</th><th>Pris i timen på højeste trin</th></tr></thead>
<tbody>
<tr><td>Beurer UB 60, underlagstæppe til enkeltseng</td><td>150 × 80 cm</td><td>60 W</td><td>{{oere 0,06}}</td></tr>
<tr><td>Beurer TS 26 XXL, til dobbeltseng, to zoner</td><td>150 × 140 cm</td><td>2 × 60 W</td><td>{{oere 0,12}}</td></tr>
<tr><td>Beurer HD 75 Cosy Nordic, plaid</td><td>180 × 130 cm</td><td>100 W</td><td>{{oere 0,1}}</td></tr>
<tr><td>Beurer HK 25, varmepude</td><td>40 × 30 cm</td><td>100 W</td><td>{{oere 0,1}}</td></tr>
</tbody>
</table>
<p>Den australske forbrugerorganisation CHOICE skriver, at de fleste el-tæpper ligger omkring 100-150 W. De tyske Beurer-modeller ligger i den lave ende, og det er højeste trin, der står på typeskiltet. På de lave trin bruger tæppet mindre, fordi elektronikken kun sender strøm igennem en del af tiden.</p>

<h2>Hvad bruger tæppet på en nat?</h2>
<p>Beurer anbefaler i brugsanvisningen til UB 60 at tænde tæppet omkring 30 minutter før sengetid, og tæppet slukker selv efter 12 timer. Står det på trin 3 eller 4, skifter det automatisk ned på trin 2 efter 3 timer. Det tætteste, vi har fundet på et målt tal, er Beurers egen kWh-visning på modellerne UB 90 og UB 100: står begge zoner på det højeste trin, tager det omkring 8 minutter at bruge 0,01 kWh. Det svarer til cirka 75 W.</p>
<p>Ingen producent oplyser forbruget på de lave trin, så tallene nedenfor er vores skøn. Vi regner med fuld effekt under forvarmningen og omkring halv effekt på et mellemtrin.</p>
<table>
<thead><tr><th>Brug (vores skøn)</th><th>kWh pr. gang</th><th>Pris pr. gang</th><th>150 gange om året</th></tr></thead>
<tbody>
<tr><td>Enkelt tæppe, 30 min forvarmning, slukket ved sengetid</td><td>0,03</td><td>{{kr 0,03}}</td><td>{{kr 4,5}}</td></tr>
<tr><td>Enkelt tæppe, forvarmning + 2 timer på mellemtrin</td><td>0,09</td><td>{{kr 0,09}}</td><td>{{kr 13,5}}</td></tr>
<tr><td>Enkelt tæppe, hele natten på lavt trin (ca. 20 W i 8 timer)</td><td>0,19</td><td>{{kr 0,19}}</td><td>{{kr 28,5}}</td></tr>
<tr><td>Dobbelt tæppe, begge zoner, forvarmning + 2 timer</td><td>0,18</td><td>{{kr 0,18}}</td><td>{{kr 27}}</td></tr>
<tr><td>Plaid 100 W i sofaen, 3 timer på mellemtrin</td><td>0,15</td><td>{{kr 0,15}}</td><td>{{kr 22,5}}</td></tr>
</tbody>
</table>
<p>Selv den dyreste brug i tabellen ender på under 30 kWh om året. Det er langt mindre end et køleskab, der kører hele året.</p>

<h2>Varmetæppe eller varme i soveværelset?</h2>
<p>Det interessante ved et varmetæppe er ikke, hvad det bruger, men hvad det kan erstatte. Den britiske forbrugerorganisation Which? har regnet på, hvad det koster at holde sig varm i sengen, og fandt, at et el-tæppe kostede 2-6 pence i timen, og at flere af de testede kun kostede 1,8 pence i timen på højeste trin. En elektrisk varmer til rummet kostede efter samme regnestykke 8-76 pence i timen, altså flere gange så meget og i den dyre ende mere end ti gange.</p>
<p>En <a href="/elradiator/">elradiator</a> på 1.000 W bruger 1 kWh i timen, svarende til {{kr 1}}. Det er mere, end et enkelt varmetæppe bruger på ti nætter efter vores skøn. Sover du gerne i et køligt soveværelse men vil have en varm seng, er tæppet derfor den billige løsning: du varmer sengen og ikke luften. Bruger du en <a href="/varmeblaeser/">varmeblæser</a> til at tage kulden af soveværelset om aftenen, kan tæppet ofte gøre arbejdet for en brøkdel af strømmen. Det forudsætter selvfølgelig, at resten af huset er opvarmet nok til at undgå fugt og kondens i soveværelset.</p>

<h2>Varmepuden og plaiden</h2>
<p>Varmepuden har den højeste effekt i forhold til sin størrelse. Beurer HK 25 bruger 100 W på en flade på 40 × 30 cm, men slukker selv efter cirka 90 minutter. Bruger du den en time om aftenen, bliver det højst 0,1 kWh, svarende til {{kr 0,1}}. Plaiden HD 75 bruger også 100 W på højeste trin og har seks trin og automatisk sluk efter cirka 3 timer.</p>
<p>Plaiden er en god erstatning for at skrue op for varmen i stuen en kold aften. En grad mindre i stuen sparer langt mere, end plaiden bruger, men det afhænger af, hvordan huset varmes op. Har huset fjernvarme eller en varmepumpe, er forskellen mindre end i et hus med elvarme.</p>

<h2>Bruger varmetæppet strøm i de dyre timer?</h2>
<p>Lidt. Forvarmningen sker typisk kl. 21-23, lige efter de dyreste timer kl. 17-21, og natten er normalt billigere end aftenen. Plaiden i sofaen bruges derimod ofte i den dyre tidlige aften. Fordi effekten er så lav, er prisforskellen mellem en billig og en dyr time dog kun få øre på en hel aften. Det, der tæller, er, om tæppet erstatter rigtig opvarmning.</p>
<p>Tænder du tæppet tidligt og glemmer det, slukker det selv efter 12 timer på Beurers underlagstæpper. Det svarer efter vores skøn til en ekstra udgift på højst omkring 0,3-0,7 kWh, alt efter trinnet. Tidsbegrænsningen er der først og fremmest af sikkerhedshensyn.</p>

<h2>Sikkerhed og levetid</h2>
<p>Et varmetæppe er et elektrisk apparat, der ligger tæt på kroppen hele natten, så følg brugsanvisningen. Beurer skriver i brugsanvisningen til UB 60, at underlagstæppet ikke må bruges sammenfoldet eller krøllet, og at det ikke må bruges af børn under 3 år, fordi de ikke kan reagere på overophedning. Tjek ledningen og tæppet for slid og skader hver vinter; Beurer skriver, at et tæppe med tegn på slid, eller som ikke længere varmer, skal tjekkes af producenten, før det tændes igen. Lad heller ikke personer, der ikke selv kan slukke, ligge på et tændt tæppe uden opsyn. Til en <a href="/plejeseng/">plejeseng</a> findes der særlige løsninger, som plejepersonalet kan rådgive om.</p>

<h2>Gode råd til et varmetæppe</h2>
<ul>
<li><strong>Forvarm og sluk</strong> — en halv time på højeste trin varmer sengen, og din egen krop holder varmen.</li>
<li><strong>Brug lave trin om natten</strong>, hvis du vil have tæppet tændt længe.</li>
<li><strong>Lad tæppet erstatte varme</strong> — det er dér, besparelsen ligger.</li>
<li><strong>Vælg et tæppe med timer og to zoner</strong> til en dobbeltseng, så kun den ene side varmes, når kun én vil have det.</li>
<li><strong>Mål det</strong> med en stikmåler en uge, hvis du vil kende dit eget forbrug.</li>
</ul>`,
  faqs: [
    { question: "Hvor mange watt bruger et el-varmetæppe?", answer: "Et underlagstæppe til en enkeltseng bruger typisk 60 W på højeste trin, et dobbelt 2 × 60 W, og en plaid eller varmepude omkring 100 W. CHOICE skriver, at de fleste el-tæpper ligger på 100-150 W." },
    { question: "Hvad koster det at have varmetæppe på om natten?", answer: "Efter vores skøn bruger et enkelt tæppe cirka 0,09 kWh, når det forvarmer en halv time og kører to timer på mellemtrin, svarende til {{kr 0,09}} ved {{pris_kwh}}. Hele natten på lavt trin er det omkring 0,19 kWh." },
    { question: "Er et varmetæppe billigere end at varme soveværelset op?", answer: "Ja, langt. Which? fandt, at et el-tæppe kostede 2-6 pence i timen mod 8-76 pence for en elektrisk varmer. En elradiator på 1.000 W bruger 1 kWh i timen, svarende til {{kr 1}}." },
    { question: "Slukker et varmetæppe selv?", answer: "Beurers underlagstæpper slukker efter 12 timer, plaiden HD 75 efter cirka 3 timer og varmepuden HK 25 efter cirka 90 minutter. Tjek brugsanvisningen for din model." },
    { question: "Hvad bruger en varmepude?", answer: "Beurer HK 25 bruger 100 W på højeste trin. En time om aftenen er højst 0,1 kWh, svarende til {{kr 0,1}}." },
  ],
  relatedSlugs: ["elradiator", "varmeblaeser", "plejeseng", "haandklaedetoerrer", "infraroedt-varmepanel"],
  sources: [
    { name: "Beurer — datablad UB 60 Green Planet", url: "https://res.cloudinary.com/beurer/image/upload/v1705114616/stibo-live/30036_UB60-GP_2023-07-07_02_DS-EN_BEU.pdf" },
    { name: "Beurer — brugsanvisning UB 60/UB 68 XXL", url: "https://res.cloudinary.com/beurer/image/upload/v1744511992/stibo-live/UB60-68XXL_2021-08-20_01_IM2_BEU_EN.pdf" },
    { name: "Beurer — brugsanvisning UB 90/UB 100", url: "https://res.cloudinary.com/beurer/image/upload/v1762447349/stibo-live/UB90-100_2025-07-11_03_IM2_BEU_EN.pdf" },
    { name: "Beurer — produktkatalog 2025 (TS 26 XXL)", url: "https://www.beurer.com/web/flippingbook/beurer-product-catalogue-2025-gb/114-115/" },
    { name: "Beurer — datablad HD 75 Cosy Nordic", url: "https://cdn.shopify.com/s/files/1/0150/2930/files/Beurer-Heated-Throw-Blanket-Datasheet-RR.pdf" },
    { name: "Beurer — datablad HK 25", url: "https://cdn.shopify.com/s/files/1/0570/4794/1315/files/Beurer_HK_25_Data_Sheet.pdf" },
    { name: "Which? — Hot water bottle or electric blanket: what is best and cheapest", url: "https://www.which.co.uk/news/article/hot-water-bottle-or-electric-blanket-whats-best-and-cheapest-at-keeping-you-warm-in-bed-alwIf3N5e4G5" },
    { name: "CHOICE — Electric blankets buying guide", url: "https://www.choice.com.au/home-and-living/bedroom/electric-blankets/buying-guides/electric-blankets" },
  ],
  calculatorConfig: {
    title: "Beregn varmetæppets strømforbrug",
    options: [
      { label: "Enkelt tæppe, kun forvarmning 30 min (60 W)", kwhPerUse: 0.03 },
      { label: "Enkelt tæppe, forvarmning + 2 timer på mellemtrin", kwhPerUse: 0.09 },
      { label: "Enkelt tæppe hele natten på lavt trin", kwhPerUse: 0.19 },
      { label: "Dobbelt tæppe, begge zoner, forvarmning + 2 timer", kwhPerUse: 0.18 },
      { label: "Plaid 100 W, 3 timer på mellemtrin", kwhPerUse: 0.15 },
    ],
    usageLabel: "Gange pr. år",
    usageUnit: "gange/år",
    usageMin: 10,
    usageMax: 365,
    usageDefault: 150,
    usageStep: 5,
    per: "gang",
    perYear: 1,
  },
  publishDate: "2026-12-18",
  updated: "2026-11-23",
};

export default varmetaeppe;
