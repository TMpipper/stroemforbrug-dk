import type { ApplianceData } from "@/lib/types";

/**
 * El-scooter / el-knallert (knallert 30 og 45). Intet EU-energimærke.
 * Tal (producentens data): NIU NQi Sport (1.560 Wh / 45 km og 2.100 Wh / 65 km i specifikationstabellen, 7 t, 4 A —
 * NIUs egen side nævner også 70-77 km), Askoll eS2 EVOlution (2,8 kWh, 81 km, 6 t), Vespa Primavera Elettrica 45
 * (2,3 kWh, 68 km WMTC, 500 W lader, ca. 4 t til 80 %), Super Soco CUx (60 V 30 Ah, 75 km ved 45 km/t og 75 kg rytter,
 * 8 t), Notebookcheck-test af NIU MQi+ Sport (2.016 Wh; 36 km brugte 43 % af batteriet, 9 t opladning).
 * Wh/km = batteri ÷ rækkevidde (vores omregning); opladningstab ca. 10-15 % og »med passager/kulde« er vores skøn.
 */
const elScooter: ApplianceData = {
  slug: "el-scooter",
  meta: {
    category: "transport",
    usage: "per-km",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["el-scooter", "elscooter", "el-knallert", "elknallert", "elektrisk knallert", "knallert 45 el", "knallert 30 el", "niu", "vespa elettrica", "el-moped"],
  },
  name: "El-scooter",
  article: "en",
  title: "El-scooter strømforbrug (2026) → kWh pr. 100 km og knallert",
  description:
    "Se hvor meget strøm en el-scooter eller el-knallert bruger pr. km og pr. opladning: 1,5-2,8 kWh batterier, 25-35 Wh pr. km og hvad et år på knallert koster.",
  heading: "Strømforbrug for en el-scooter: kWh pr. km, pris pr. opladning og billigste tidspunkt",
  quickAnswer:
    "En el-knallert bruger efter vores omregning af producenternes tal omkring 25-35 Wh pr. km fra batteriet og cirka 3,5 kWh pr. 100 km fra stikkontakten. Det koster {{kr 3,5}} pr. 100 km ved {{pris_kwh}}, og 3.000 km om året bliver omkring 105 kWh, eller {{kr 105}}. En fuld opladning af et batteri på 2,8 kWh koster cirka {{kr 3,1}}.",
  kwhRange: [15, 400],
  typicalKwh: 105,
  wattage: 500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.5, 0.55, 0.8, 1.1, 1.3, 1.4, 1.35, 1.3, 1.2, 1.05, 0.75, 0.7],
  content: `<h2>Batteriet viser forbruget</h2>
<p>En el-scooter eller el-knallert har et batteri, der typisk rummer 1,5-3 kWh — ti gange så meget som en elcykel, men kun en brøkdel af en elbils. Producenterne oplyser batteriets kapacitet og en rækkevidde, og ved at dele det ene med det andet får man forbruget pr. kilometer. Det er den måde, vi har regnet tallene på denne side ud på.</p>
<p>Askoll oplyser et batteri på 2,8 kWh og en rækkevidde på op til 81 km for eS2 EVOlution, der kører 45 km/t. Vespa oplyser 2,3 kWh og 68 km målt efter den europæiske WMTC-cyklus for Primavera Elettrica i 45-udgaven. NIU oplyser i specifikationerne for NQi Sport 1.560 Wh og 45 km for standardbatteriet og 2.100 Wh og 65 km for det store batteri. Super Soco oplyser 60 V og 30 Ah — det vil sige 1.800 Wh — og 75 km ved 45 km/t med en rytter på 75 kg for CUx.</p>

<h2>Strømforbrug pr. kilometer</h2>
<table>
<thead><tr><th>Model</th><th>Batteri</th><th>Rækkevidde</th><th>Wh pr. km fra batteriet</th></tr></thead>
<tbody>
<tr><td>Super Soco CUx</td><td>1.800 Wh</td><td>75 km</td><td>24</td></tr>
<tr><td>NIU NQi Sport, stort batteri</td><td>2.100 Wh</td><td>65 km</td><td>32</td></tr>
<tr><td>Vespa Primavera Elettrica 45</td><td>2.300 Wh</td><td>68 km</td><td>34</td></tr>
<tr><td>Askoll eS2 EVOlution</td><td>2.800 Wh</td><td>81 km</td><td>35</td></tr>
<tr><td>NIU NQi Sport, standardbatteri</td><td>1.560 Wh</td><td>45 km</td><td>35</td></tr>
</tbody>
</table>
<p>Tallene er vores omregning af producenternes oplysninger. NIUs side nævner flere rækkevidder for samme model; vi har brugt tallene fra specifikationstabellen. Rækkevidderne er målt under gode forhold, så i hverdagen med stop, start, kulde og en tung rytter bliver forbruget pr. km højere.</p>
<p>Teknikmediet Notebookcheck har testet NIU MQi+ Sport med et batteri på 2.016 Wh. På en tur på 36 km brugte scooteren 43 procent af batteriet, hvilket svarer til omkring 24 Wh pr. km — tæt på den lette ende af tabellen.</p>

<h2>Pris pr. kilometer og pr. år</h2>
<table>
<thead><tr><th>Kørsel</th><th>kWh pr. km (fra stikkontakten)</th><th>Pris pr. 100 km</th><th>3.000 km om året</th></tr></thead>
<tbody>
<tr><td>Let model, jævn kørsel</td><td>0,027</td><td>{{kr 2,7}}</td><td>{{kr 81}}</td></tr>
<tr><td>Typisk knallert 45</td><td>0,035</td><td>{{kr 3,5}}</td><td>{{kr 105}}</td></tr>
<tr><td>Passager, bakker eller kulde (vores skøn)</td><td>0,045</td><td>{{kr 4,5}}</td><td>{{kr 135}}</td></tr>
</tbody>
</table>
<p>Vi har lagt omkring 10-15 procent til batteritallene for tabet i laderen og batteriet. Det er vores skøn; vil du kende dit eget tal, kan du sætte en stikmåler foran laderen og dele de kWh, den viser, med de kilometer, du har kørt siden sidste opladning.</p>

<h2>Strøm pr. opladning og ladetid</h2>
<p>En fuld opladning af et batteri på 2,8 kWh bruger efter vores omregning omkring 3,1 kWh fra stikkontakten og koster cirka {{kr 3,1}}. Et batteri på 1,56 kWh bruger omkring 1,7 kWh og koster cirka {{kr 1,7}}. Ladetiden er lang, fordi laderne er små: Vespa oplyser en lader på 500 W og cirka fire timer fra 0 til 80 procent, NIU syv timer med en lader på 4 ampere til NQi Sport, Askoll seks timer og Super Soco otte timer med standardladeren. Notebookcheck målte ni timer for en fuld opladning af MQi+ Sport.</p>
<p>En lader på 250-500 W trækker ikke mere end en almindelig stikkontakt kan klare, og der er ikke brug for en <a href="/ladestander/">ladestander</a>. Til gengæld tager det en nat at lade helt op.</p>

<h2>Hvornår skal du lade?</h2>
<p>En el-scooter er nem at lade, når strømmen er billig. En opladning tager nogle timer, og de fleste kører om dagen og står parkeret om natten. Sæt laderen i om aftenen, og lad en timer eller en smart-stikdåse starte den efter kl. 21, når den dyre periode med højere nettarif er slut. Oversigten over dagens billigste timer længere oppe på siden viser, hvornår prisen er lavest i dag.</p>
<p>Forskellen er større end for en elcykel, fordi batteriet er større: på en fuld opladning af 3 kWh kan forskellen mellem den dyreste og den billigste time løbe op i nogle kroner. Over et år med to-tre opladninger om ugen bliver det mærkbart, men stadig små beløb.</p>

<h2>Knallert 30 eller 45?</h2>
<p>I Danmark må en lille knallert køre højst 30 km/t, og en stor knallert højst 45 km/t. Begge findes på el, og forbruget pr. km er lavere ved 30 km/t, fordi luftmodstanden vokser hurtigt med farten. Mange elektriske modeller sælges i begge udgaver med samme batteri, og så rækker et batteri længere på 30-udgaven. Vil du sammenligne med andre køretøjer, bruger en <a href="/elcykel/">elcykel</a> omkring en fjerdedel af strømmen pr. km, fordi du selv træder og kører langsommere, og et <a href="/el-loebehjul/">el-løbehjul</a> under halvdelen. En <a href="/elbil/">elbil</a> bruger omkring fem gange så meget pr. km, men kan også have fire personer og bagage med.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Fart</strong> — den vigtigste faktor. Fra 30 til 45 km/t stiger luftmodstanden mere end dobbelt.</li>
<li><strong>Vægt</strong> — en passager eller en fyldt topboks øger forbruget, især ved start og op ad bakke.</li>
<li><strong>Kørselsmodus</strong> — de fleste el-scootere har et eco- og et sportsprogram. Eco giver længere rækkevidde.</li>
<li><strong>Kulde</strong> — et koldt batteri leverer mindre, så rækkevidden falder om vinteren.</li>
<li><strong>Dæktryk</strong> — for lavt tryk øger rullemodstanden.</li>
</ul>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Kør i eco-modus, når du ikke har travlt.</li>
<li>Hold dækkene pumpede.</li>
<li>Lad i de billige timer om natten.</li>
<li>Kan batteriet tages ud, så lad og opbevar det indendørs om vinteren.</li>
<li>Lad helst til omkring 80 procent til daglig, hvis du ikke skal langt.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad dine kilometer koster om året.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en el-scooter pr. km?",
      answer:
        "Efter vores omregning af producenternes tal 24-35 Wh pr. km fra batteriet og cirka 0,027-0,045 kWh pr. km fra stikkontakten. 100 km koster derfor omkring {{kr 2,7}}-{{kr 4,5}}.",
    },
    {
      question: "Hvad koster det at lade en el-knallert?",
      answer:
        "En fuld opladning af et batteri på 2,8 kWh bruger omkring 3,1 kWh fra stikkontakten og koster cirka {{kr 3,1}}. Et batteri på 1,56 kWh koster omkring {{kr 1,7}}.",
    },
    {
      question: "Hvor lang tid tager det at lade en el-scooter?",
      answer:
        "Typisk 4-9 timer. Vespa oplyser cirka fire timer til 80 procent med en lader på 500 W, NIU syv timer for NQi Sport og Super Soco otte timer for CUx med standardladeren.",
    },
    {
      question: "Hvad koster en el-knallert i strøm om året?",
      answer:
        "Med 3.000 km om året og 0,035 kWh pr. km bliver det omkring 105 kWh, svarende til {{kr 105}}. Med passager og meget vinterkørsel kan det blive en tredjedel mere.",
    },
    {
      question: "Kræver en el-scooter en ladestander?",
      answer:
        "Nej. Laderne trækker typisk 250-500 W og kan sættes i en almindelig stikkontakt. Vespa oplyser for eksempel en lader på 500 W.",
    },
    {
      question: "Hvornår er det billigst at lade el-scooteren?",
      answer:
        "Om natten, efter den dyre periode fra kl. 17 til 21. En timer eller en smart-stikdåse kan starte laderen, når timeprisen er lav.",
    },
  ],
  relatedSlugs: ["elcykel", "el-loebehjul", "elbil", "ladestander", "motorvarmer"],
  sources: [
    { name: "NIU — NQi Sport (batteri, rækkevidde, ladetid)", url: "https://global.niu.com/product/NQi-Sport" },
    { name: "Askoll — eS2 EVOlution", url: "https://www.askollelectric.com/modelli/es2-evolution/" },
    { name: "Piaggio — Vespa Primavera Elettrica, teknisk datablad", url: "https://asset.moto.it/pricelist/moto/7ef2be1244ff52c499a4813fff70477c/scheda-tecnica.pdf" },
    { name: "Vmoto Super Soco — CUx, tekniske data", url: "https://shop.vmotosoco.com/Pages/info-tecniche-CUx?lang=5" },
    { name: "Notebookcheck — Niu MQi+ Sport reviewed", url: "https://www.notebookcheck.net/Niu-Mqi-Sport-electric-scooter-reviewed-Silently-through-the-city.731619.0.html" },
  ],
  calculatorConfig: {
    title: "Beregn el-scooterens strømforbrug",
    options: [
      { label: "Let model, jævn kørsel (ca. 27 Wh/km)", kwhPerUse: 0.027 },
      { label: "Typisk knallert 45 (ca. 35 Wh/km)", kwhPerUse: 0.035 },
      { label: "Passager, bakker eller kulde (ca. 45 Wh/km)", kwhPerUse: 0.045 },
    ],
    usageLabel: "Kilometer pr. år",
    usageUnit: "km/år",
    usageMin: 200,
    usageMax: 12000,
    usageDefault: 3000,
    usageStep: 100,
    per: "km",
    perYear: 1,
  },
  publishDate: "2026-12-17",
  updated: "2026-11-22",
};

export default elScooter;
