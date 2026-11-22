import type { ApplianceData } from "@/lib/types";

/**
 * Køkkenmaskine / røremaskine — Tænk (feb. 2024): 30 køkkenmaskiner, motorer fra under 300 W til 1.750 W; en maskine på 300 W
 * kan ælte og piske bedre end en på 1.750 W; testen måler energi ved æltning af brøddej (500 g mel) og standby (tal bag betalingsmur).
 * Kenwood KMX760BC: 1.000 W (Tænks produktside). Thermomix: GIGA (dec. 2025) referenceværdier — varme ca. 1.000 W, røring
 * 10–100 W, purering 300–500 W, gryderet 15 min. opvarmning + 20 min. simren (≈ 0,4 kWh ud fra deres pris); Vorwerk: 0 W slukket.
 * Æltning, piskning og tung dej er vores skøn (motorens faktiske træk × tid). Beregneren: kWh pr. gang, antal pr. uge × 52.
 */
const koekkenmaskine: ApplianceData = {
  slug: "koekkenmaskine",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["køkkenmaskine", "koekkenmaskine", "røremaskine", "kitchenaid", "kenwood chef", "ankarsrum", "thermomix", "køkkenmaskine med varme", "foodprocessor", "ælte dej", "bosch mum"],
  },
  name: "Køkkenmaskine",
  title: "Køkkenmaskine strømforbrug (2026) → kWh pr. dej og ret",
  description:
    "Se hvor meget strøm en køkkenmaskine bruger på at ælte dej, piske og røre – og hvor meget mere en køkkenmaskine med varme som Thermomix bruger pr. ret.",
  heading: "Strømforbrug for en køkkenmaskine: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En almindelig køkkenmaskine bruger meget lidt strøm: at ælte en brøddej på 500 gram mel i 8–10 minutter er efter vores skøn omkring 0,04 kWh, eller {{oere 0,04}} ved månedens elpris. To gange om ugen bliver det kun omkring 4 kWh om året, svarende til {{kr 4}}. En køkkenmaskine med varmelegeme, der koger en ret, bruger derimod omkring 0,3–0,4 kWh pr. gang.",
  kwhRange: [0.5, 60],
  typicalKwh: 4,
  wattage: 1000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.0, 1.0, 1.0, 0.95, 0.9, 0.85, 0.85, 0.95, 1.05, 1.15, 1.2],
  content: `<h2>Lang tid ved lav hastighed – men et lille forbrug</h2>
<p>En køkkenmaskine eller røremaskine er bygget til at arbejde længe med tunge ting: brøddej, kagedej, flødeskum og æggehvider. Motoren driver en planetbevægelse eller en roterende skål via et gear, og de fleste opgaver foregår ved lav eller middel hastighed. Motoren trækker kun sin fulde effekt, når dejen er tung og sej, og ellers langt mindre. Derfor bruger en køkkenmaskine meget lidt strøm, selv om den kører i ti minutter.</p>
<p>Producenterne oplyser kun motorens maksimale effekt, ikke forbruget. Forbrugerrådet Tænk måler i sin test, hvor meget energi det kræver at ælte en brøddej med 500 gram mel efter brugsanvisningen, men tallene ligger bag betalingsmur. Det er vores skøn, at en almindelig æltning på 8–10 minutter bruger omkring 0,04 kWh, svarende til {{oere 0,04}} ved månedens elpris. Med en brøddej eller en kage to gange om ugen bliver det omkring 4 kWh om året, eller {{kr 4}}.</p>

<h2>Forbrug pr. opgave</h2>
<p>Tallene er vores skøn ud fra effekt og tid, undtagen rækken med varme, som bygger på GIGA's referenceværdier for en Thermomix.</p>
<table>
<thead><tr><th>Opgave</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Piske flødeskum eller æggehvider</td><td>3–5 min.</td><td>0,01 kWh</td><td>{{oere 0,01}}</td></tr>
<tr><td>Kagedej eller småkagedej</td><td>5 min.</td><td>0,02 kWh</td><td>{{oere 0,02}}</td></tr>
<tr><td>Ælte brøddej, 500 g mel</td><td>8–10 min.</td><td>0,04 kWh</td><td>{{oere 0,04}}</td></tr>
<tr><td>Tung dej, fx rugbrød eller dobbelt portion</td><td>12 min.</td><td>0,08 kWh</td><td>{{oere 0,08}}</td></tr>
<tr><td>Køkkenmaskine med varme, gryderet</td><td>15 min. opvarmning + 20 min. simren</td><td>0,35–0,4 kWh</td><td>{{kr 0,35-0,4}}</td></tr>
</tbody>
</table>
<p>Selve brødet bruger langt mere strøm i <a href="/ovn/">ovnen</a> end i køkkenmaskinen: en times bagning ved 200 grader er omkring 1 kWh, altså mere end tyve gange så meget som æltningen.</p>

<h2>300 eller 1.750 W – Tænks test</h2>
<p>Tænk har testet 30 køkkenmaskiner, og motorerne spænder fra under 300 W til 1.750 W. Testens konklusion er, at antallet af watt ikke nødvendigvis siger noget om maskinens kraft: en maskine på 300 W kan sagtens piske æggehvider og ælte kagedej bedre end en på 1.750 W. Det skyldes, at gearet og konstruktionen afgør, hvor meget af motorens kraft der når frem til krogen.</p>
<p>For strømforbruget betyder det, at en lille motor ikke er en sparemaskine, og at en stor ikke er en strømsluger. En maskine, der ælter dejen færdig på seks minutter, bruger mindre end en, der skal arbejde i tolv. Vælg maskinen efter, hvordan den ælter, og glem watt som mål for forbruget.</p>

<h2>Køkkenmaskiner med varme</h2>
<p>En køkkenmaskine med varmelegeme, som Thermomix og de mange lignende maskiner, er noget andet. Den kan hakke, røre, koge, dampe og holde varm i samme skål, og varmelegemet har omkring 1.000 W. Ifølge tech-mediet GIGA's referenceværdier bruger røring ved lav hastighed kun 10–100 W, purering 300–500 W, mens kogning og dampning bruger omkring 1.000 W i opvarmningen. En gryderet med et kvarters opvarmning og 20 minutters simren svarer i deres regnestykke til omkring 0,4 kWh, eller {{kr 0,4}} ved månedens elpris.</p>
<p>Det er i samme størrelse som at lave retten i en gryde på komfuret. På <a href="/induktion/">induktion</a> er en gryde med låg ofte lidt mere sparsom, fordi varmen går direkte i gryden, mens en gammel keramisk plade bruger mere. Bruger du køkkenmaskinen med varme hver dag til aftensmaden, kan det blive til 100–150 kWh om året. Skal der bare koges ris, bruger en <a href="/riskoger/">riskoger</a> 0,14–0,2 kWh pr. kogning ifølge producentens målinger og slukker selv, når risene er færdige.</p>

<h2>Hvornår på døgnet bruges køkkenmaskinen?</h2>
<p>Dej æltes, når der skal bages, og en ret i en køkkenmaskine med varme laves til aftensmaden. Æltningen er så lille, at tidspunktet er ligegyldigt. Køkkenmaskinen med varme bruger mere, og den kører typisk i aftenens dyre timer, men den kan ikke flyttes uden at flytte aftensmaden. Mange bager i weekenden om formiddagen og eftermiddagen, og det ligger ofte uden for de dyreste timer – også for ovnen, der skal bage brødet. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Standby</h2>
<p>En klassisk køkkenmaskine med drejeknap bruger intet, når den er slukket. Tænk måler standbyforbruget i sin test, og det er netop det, der kan løbe op, hvis en maskine med display står i stikket hele året. EU's regler for husholdningsapparater holder standby under én watt, og det er under 9 kWh om året – mere end selve æltningen for mange husstande. Vorwerk oplyser, at Thermomix ikke har en standbytilstand og bruger 0 W, når den er slukket, selv om den sidder i stikket.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Ælt ikke længere end opskriften siger</strong> – overæltet dej bliver ikke bedre, og motoren arbejder hårdest i den tunge dej.</li>
<li><strong>Lav dobbelt portion</strong>, hvis maskinen kan klare det, og frys den ene dej.</li>
<li><strong>Brug en håndmikser til små opgaver</strong> – to æggehvider kræver ikke en stor maskine.</li>
<li><strong>Læg låg på</strong> og brug dampkurven i en køkkenmaskine med varme, så du laver to ting på én opvarmning.</li>
<li><strong>Tag stikket ud</strong>, hvis maskinen har display og ikke slukker helt.</li>
</ol>
<p>Til smoothies og supper er en <a href="/blender/">blender</a> det rigtige apparat; den kører hurtigere og kortere end køkkenmaskinen. Simrende gryderetter i mange timer laves mere sparsomt i en <a href="/slow-cooker/">slow cooker</a> end i en køkkenmaskine med varme.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en køkkenmaskine?",
      answer:
        "Meget lidt. At ælte en brøddej på 500 gram mel i 8–10 minutter bruger efter vores skøn omkring 0,04 kWh, svarende til {{oere 0,04}} ved månedens elpris. Selve bagningen i ovnen bruger over tyve gange så meget.",
    },
    {
      question: "Hvor mange watt har en køkkenmaskine?",
      answer:
        "Motorerne i Tænks test af 30 køkkenmaskiner spænder fra under 300 W til 1.750 W. Watt siger dog ikke meget om kraften: en maskine på 300 W kan ælte bedre end en på 1.750 W.",
    },
    {
      question: "Hvor meget strøm bruger en Thermomix?",
      answer:
        "Varmelegemet har omkring 1.000 W. En gryderet med et kvarters opvarmning og 20 minutters simren svarer til omkring 0,4 kWh, eller {{kr 0,4}}. Røring og æltning bruger langt mindre. Slukket bruger den 0 W ifølge Vorwerk.",
    },
    {
      question: "Bruger en køkkenmaskine med varme mere strøm end en gryde?",
      answer:
        "Omtrent det samme. En gryde med låg på induktion er ofte lidt mere sparsom, mens en ældre keramisk kogeplade bruger mere. Fordelen ved maskinen er, at den rører og holder øje med temperaturen selv.",
    },
    {
      question: "Hvad koster en køkkenmaskine i strøm om året?",
      answer:
        "Med to æltninger eller kagedeje om ugen omkring 4 kWh om året, eller {{kr 4}} ved månedens elpris. En køkkenmaskine med varme, der bruges til aftensmaden hver dag, kan bruge 100–150 kWh om året.",
    },
  ],
  relatedSlugs: ["blender", "ovn", "induktion", "riskoger", "slow-cooker"],
  sources: [
    { name: "Forbrugerrådet Tænk — Det skal du vide, før du vælger køkkenmaskine (30 maskiner, feb. 2024)", url: "https://taenk.dk/forbrugerliv/bolig/det-skal-du-vide-foer-du-vaelger-koekkenmaskine" },
    { name: "Forbrugerrådet Tænk — Kenwood KMX760BC (testens målepunkter: æltning af brøddej og standby)", url: "https://taenk.dk/test/koekkenmaskiner/kenwood-kmx760bc" },
    { name: "GIGA — Thermomix und Stromverbrauch: So viel Energie ziehen die einzelnen Funktionen (dec. 2025)", url: "https://www.giga.de/tech/thermomix-und-stromverbrauch-so-viel-energie-ziehen-die-einzelnen-funktionen--01KCNMFYHNS2NK91J1KV4FAJ4A" },
    { name: "Vorwerk Thermomix — How much electricity does the Thermomix use, and does it have a standby mode?", url: "https://service.thermomix.com/hc/en-us/articles/360014613193-How-much-electricity-does-the-Thermomix-use-and-does-it-have-a-standby-mode" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (ovn ved 200 °C)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
  ],
  calculatorConfig: {
    title: "Køkkenmaskine forbrugsberegner",
    options: [
      { label: "Piske flødeskum eller æggehvider", kwhPerUse: 0.01 },
      { label: "Ælte brøddej, 500 g mel", kwhPerUse: 0.04 },
      { label: "Tung dej, 12 min.", kwhPerUse: 0.08 },
      { label: "Køkkenmaskine med varme, en ret", kwhPerUse: 0.35 },
    ],
    usageLabel: "Antal gange pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 2,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-02",
  updated: "2026-11-22",
};

export default koekkenmaskine;
