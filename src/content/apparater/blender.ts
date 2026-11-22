import type { ApplianceData } from "@/lib/types";

/**
 * Blender — Tænk (juni 2026): blendere i testen har maks. 500–2.400 W, de fleste over 1.000 W, og »Watt siger ikke noget om,
 * hvor god blenderen er«; én blender brugte fem minutter på en suppe. Tænk (dec. 2024): 28 stavblendere på 800–1.200 W.
 * Stiftung Warentest måler energi pr. liter i sin standmixertest (tallene bag betalingsmur). kWh pr. gang er vores skøn
 * (mærkeeffekt × tid som loft, faktisk træk under loftet); suppens varmebehov er fysik (1 l fra 20 til 70 °C ≈ 0,06 kWh).
 * Beregneren: kWh pr. gang, antal pr. uge × 52. Intet EU-energimærke.
 */
const blender: ApplianceData = {
  slug: "blender",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["blender", "standblender", "power blender", "smoothie blender", "stavblender", "smoothiemaker", "nutribullet", "vitamix", "ninja blender", "suppeblender", "minihakker"],
  },
  name: "Blender",
  title: "Blender strømforbrug (2026) → kWh pr. smoothie og suppe",
  description:
    "Se hvor meget strøm en blender bruger pr. smoothie, pr. suppe og om året – standblender, power blender, stavblender og suppeblender – og hvad watt betyder.",
  heading: "Strømforbrug for en blender: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En blender bruger meget lidt strøm, fordi den kun kører i et minut eller to: en smoothie er omkring 0,01–0,02 kWh, eller {{oere 0,012}} ved månedens elpris. Selv med tre smoothies om ugen bliver det kun omkring 2 kWh om året, svarende til {{kr 2}}. Det er først blendere med varmelegeme, der laver suppe i 20–30 minutter, der bruger mærkbart mere – omkring 0,25 kWh pr. suppe.",
  kwhRange: [0.5, 40],
  typicalKwh: 2,
  wattage: 1000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.95, 0.95, 1.0, 1.0, 1.05, 1.1, 1.1, 1.05, 1.0, 0.95, 0.9, 0.95],
  content: `<h2>Mange watt, men få minutter</h2>
<p>En blender har en kraftig motor, der får knivene til at rotere med op til flere tusinde omdrejninger i minuttet. Forbrugerrådet Tænk skriver i sin blendertest fra juni 2026, at blenderne i testen har en maksimal effekt på 500–2.400 W, og at de fleste ligger over 1.000 W. Det lyder af meget, men en smoothie tager typisk 30–60 sekunder, og motoren trækker kun sin fulde effekt, når den arbejder hårdest, fx med frossen frugt eller is. Derfor er forbruget pr. gang lille.</p>
<p>Regner man mærkeeffekten gange tiden, får man et loft: en blender på 1.000 W kan højst bruge 0,017 kWh på et minut. I praksis ligger det lavere. Det er vores skøn, at en almindelig smoothie bruger omkring 0,01–0,02 kWh, svarende til {{oere 0,01-0,02}} ved månedens elpris. Laver du tre smoothies om ugen, bliver det omkring 2 kWh om året, eller {{kr 2}}.</p>
<p>Stiftung Warentest måler energiforbruget pr. liter i sin test af standblendere, men de enkelte tal ligger bag betalingsmur. Producenterne oplyser kun effekten.</p>

<h2>Forbrug pr. gang</h2>
<p>Tallene er vores skøn ud fra effekt og tid. De er beregnet, så de ikke undervurderer forbruget.</p>
<table>
<thead><tr><th>Brug</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Stavblender, suppe eller babymos</td><td>1 min.</td><td>0,008 kWh</td><td>{{oere 0,008}}</td></tr>
<tr><td>Smoothie i standblender</td><td>1 min.</td><td>0,012 kWh</td><td>{{oere 0,012}}</td></tr>
<tr><td>Kraftig blender, nøddesmør eller knust is</td><td>2 min.</td><td>0,03 kWh</td><td>{{oere 0,03}}</td></tr>
<tr><td>Varm suppe i power blender (friktion)</td><td>5–6 min.</td><td>0,12 kWh</td><td>{{kr 0,12}}</td></tr>
<tr><td>Suppe i blender med varmelegeme</td><td>20–30 min.</td><td>0,25 kWh</td><td>{{kr 0,25}}</td></tr>
</tbody>
</table>
<p>De første tre rækker er så små, at selv daglig brug ikke kan ses på elregningen. Det er suppen, der skiller sig ud, fordi den skal varmes op.</p>

<h2>Watt siger ikke, hvor god blenderen er – eller hvad den bruger</h2>
<p>Tænks test viser, at watt ikke siger noget om, hvor god blenderen er: blendere med høj effekt klarede sig både godt og middel. Det samme gælder forbruget. En blender på 2.000 W, der klarer en smoothie på 30 sekunder, bruger ikke mere end en på 1.000 W, der skal køre et minut. Tallet på kassen er motorens maksimale effekt, ikke dens forbrug, og en motor, der kører uden modstand, trækker langt mindre.</p>
<p>Stavblendere ligger typisk på 800–1.200 W ifølge Tænks test af 28 stavblendere. De bruges oftest kort, i en gryde eller et målebæger, og de bruger endnu mindre pr. gang end en standblender. Små smoothieblendere med en enkelt kop har ofte 300–600 W og er færdige på et halvt minut.</p>

<h2>Suppe i blenderen: her bliver det til noget</h2>
<p>Der er to måder at lave varm suppe på i en blender. En kraftig power blender kan varme suppen op ved ren friktion: knivene kører så hurtigt, at gnidningen varmer indholdet. Tænk nævner en blender, der bruger fem minutter på at få suppen klar. Fysikken sætter et minimum: at varme en liter suppe fra 20 til 70 grader kræver omkring 0,06 kWh, og med tab undervejs er det vores skøn, at en suppe i en power blender bruger omkring 0,1–0,15 kWh.</p>
<p>Blendere med indbygget varmelegeme – ofte kaldt suppeblendere – koger grøntsagerne fra rå i 20–30 minutter og blender undervejs. Det bruger efter vores skøn omkring 0,25 kWh pr. suppe, svarende til {{kr 0,25}}. Det er i samme størrelse som at koge suppen i en gryde på komfuret og blende den med en stavblender bagefter. Den store gevinst er bekvemmeligheden, ikke strømmen.</p>

<h2>Hvornår på døgnet bruges blenderen?</h2>
<p>Smoothies laves om morgenen, og suppen om aftenen. Ingen af dem giver mening at flytte for strømmens skyld: en smoothie i den dyreste time koster stadig kun øre. Det eneste sted, tidspunktet betyder lidt, er suppeblenderen med varmelegeme, og også her er det et spørgsmål om få øre. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Standby og display</h2>
<p>En blender med drejeknap bruger intet, når den er slukket. Modeller med touchpanel, programmer og display kan have et lille standbyforbrug, som EU's regler for husholdningsapparater holder under én watt. Det er under 9 kWh om året i værste fald – mere end selve blendingen for mange husstande. Har din blender et display, der lyser, når den står i stikket, så tag stikket ud eller sluk på kontakten.</p>

<h2>Sådan får du mest ud af blenderen</h2>
<ol>
<li><strong>Start langsomt og skru op</strong> – så kommer frugten hurtigere ned til knivene, og blenderen skal køre kortere tid.</li>
<li><strong>Kom væsken i først</strong>, så knivene ikke kører tomme.</li>
<li><strong>Brug pulse til is</strong> i stedet for at køre fuldt i lang tid.</li>
<li><strong>Lad suppen koge i gryden</strong>, hvis du alligevel laver aftensmad på komfuret, og blend den bagefter med en stavblender.</li>
<li><strong>Sluk på kontakten</strong>, hvis blenderen har display eller standby-lys.</li>
</ol>
<p>Skal du lave klar saft i stedet for smoothie, er en <a href="/juicer/">juicer</a> det rigtige apparat. Slush med is laves også i blenderen, men en <a href="/slush-ice-maskine/">slush ice-maskine</a> giver en jævnere slush. Til dej og flødeskum er en <a href="/koekkenmaskine/">køkkenmaskine</a> bedre, fordi den kan arbejde længe ved lav hastighed.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en blender?",
      answer:
        "Meget lidt. En smoothie tager typisk et minut og bruger efter vores skøn 0,01–0,02 kWh, svarende til {{oere 0,01-0,02}} ved månedens elpris. Tre smoothies om ugen bliver til omkring 2 kWh om året.",
    },
    {
      question: "Hvor mange watt bruger en blender?",
      answer:
        "Blenderne i Tænks test har en maksimal effekt på 500–2.400 W, de fleste over 1.000 W. Stavblendere ligger på 800–1.200 W. Den fulde effekt bruges kun, når motoren arbejder hårdt.",
    },
    {
      question: "Bruger en blender på 2.000 W mere strøm end en på 1.000 W?",
      answer:
        "Ikke nødvendigvis. Den kraftige blender er ofte hurtigere færdig, så forbruget pr. smoothie ender omtrent det samme. Watt er motorens maksimale effekt, ikke dens forbrug.",
    },
    {
      question: "Hvor meget strøm bruger en suppeblender?",
      answer:
        "En blender med varmelegeme, der koger suppen i 20–30 minutter, bruger efter vores skøn omkring 0,25 kWh pr. suppe, eller {{kr 0,25}}. En power blender, der varmer suppen ved friktion, bruger omkring 0,1–0,15 kWh.",
    },
    {
      question: "Hvad koster en blender i strøm om året?",
      answer:
        "Med tre smoothies om ugen omkring 2 kWh om året, eller {{kr 2}} ved månedens elpris. Laver du suppe i en blender med varme hver uge, kommer der omkring 13 kWh oveni.",
    },
  ],
  relatedSlugs: ["juicer", "koekkenmaskine", "slush-ice-maskine", "elkedel", "induktion"],
  sources: [
    { name: "Forbrugerrådet Tænk — Blendere: bedst i test (juni 2026)", url: "https://taenk.dk/test/blendere/blender-bedst-i-test" },
    { name: "Forbrugerrådet Tænk — Stavblendere: her er de bedste i test (dec. 2024)", url: "https://taenk.dk/test/stavblendere/stavblendere-her-er-de-bedste-i-test" },
    { name: "Stiftung Warentest — Standmixer im Test, 16 blendere (nov. 2024; energi pr. liter bag betalingsmur)", url: "https://www.test.de/Mixer-Standmixer-im-Test-5073614-detail/320000027830!8/" },
  ],
  calculatorConfig: {
    title: "Blender forbrugsberegner",
    options: [
      { label: "Stavblender, 1 min.", kwhPerUse: 0.008 },
      { label: "Smoothie i standblender, 1 min.", kwhPerUse: 0.012 },
      { label: "Kraftig blender, 2 min. (nøddesmør, is)", kwhPerUse: 0.03 },
      { label: "Suppe i blender med varmelegeme", kwhPerUse: 0.25 },
    ],
    usageLabel: "Antal gange pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 21,
    usageDefault: 3,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-02",
  updated: "2026-11-22",
};

export default blender;
