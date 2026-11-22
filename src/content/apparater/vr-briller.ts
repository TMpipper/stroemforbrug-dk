import type { ApplianceData } from "@/lib/types";

const vrBriller: ApplianceData = {
  slug: "vr-briller",
  meta: {
    category: "underholdning",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["vr-briller", "vr briller", "vr-headset", "meta quest", "quest 3", "quest 3s", "quest 2", "pc-vr", "virtual reality"],
  },
  name: "VR-headset",
  article: "et",
  title: "VR-briller strømforbrug (2026) → Meta Quest og pc-VR i kWh",
  description: "Et Meta Quest 3 har et batteri på knap 20 Wh, så en fuld opladning koster en brøkdel af en krone. Se pris pr. opladning, kWh om året, og hvad pc-VR koster.",
  heading: "Strømforbrug for et VR-headset: kWh og pris",
  quickAnswer:
    "Et Meta Quest 3 har et batteri på 19,44 Wh, og en fuld opladning bruger efter vores skøn cirka 0,023 kWh fra stikkontakten. Det koster {{oere 0,023}} ved {{pris_kwh}}. Lader du headsettet fem gange om ugen hele året, er det omkring 6 kWh, svarende til {{kr 6}}. Spiller du VR gennem en gaming-pc, er det pc'en, der bruger strømmen — og den bruger langt mere.",
  kwhRange: [1, 15],
  typicalKwh: 6,
  wattage: 18,
  standbyWatts: 0.2,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.0, 0.95, 0.85, 0.8, 0.95, 0.9, 0.95, 1.05, 1.1, 1.2],
  content: `<h2>Hvor meget strøm bruger VR-briller?</h2>
<p>De fleste VR-briller i danske hjem er i dag selvstændige headset som Meta Quest, der har computer, skærme og batteri indbygget. Når du spiller, kommer strømmen fra batteriet, og det eneste, der koster noget på elregningen, er opladningen. Derfor er det batteriets størrelse, der afgør forbruget — ikke hvor længe du spiller ad gangen.</p>
<p>Meta oplyser ikke selv batteriernes størrelse i watt-timer, men de er målt ved adskillelser af headsettene: Quest 3 har et batteri på 19,44 Wh, Quest 3S på 17,06 Wh og den ældre Quest 2 på 14 Wh. Ved opladning går en del af strømmen tabt som varme i laderen og batteriet. Regner vi med, at omkring 85 % når frem til batteriet, bliver forbruget fra stikkontakten pr. fuld opladning som i tabellen. Den antagelse er vores skøn.</p>
<table>
<thead><tr><th>Headset</th><th>Batteri</th><th>Fra stikkontakten pr. opladning (vores skøn)</th><th>Pris pr. opladning</th></tr></thead>
<tbody>
<tr><td>Meta Quest 3</td><td>19,44 Wh</td><td>ca. 0,023 kWh</td><td>{{oere 0,023}}</td></tr>
<tr><td>Meta Quest 3S</td><td>17,06 Wh</td><td>ca. 0,020 kWh</td><td>{{oere 0,02}}</td></tr>
<tr><td>Meta Quest 2</td><td>14 Wh</td><td>ca. 0,016 kWh</td><td>{{oere 0,016}}</td></tr>
</tbody>
</table>
<p>Meta skriver, at en fuld opladning med den medfølgende lader tager omkring to og en halv time. Quest 3 og 3S kræver en lader på 18 watt, Quest 2 en på 10 watt, mens den dyrere Quest Pro skal bruge 45 watt. Laderens watt fortæller, hvor hurtigt den kan lade — ikke hvor meget strøm opladningen bruger i alt. Det er stadig batteriets størrelse, der sætter grænsen.</p>

<h2>Hvad koster et år med VR?</h2>
<p>Et batteri i et VR-headset holder typisk et par timer, så hvor ofte du lader, følger af, hvor meget du spiller. Selv en flittig spiller, der lader hver dag, ender på et lille årsforbrug. Tabellen viser Quest 3 med vores skøn på 0,023 kWh pr. opladning.</p>
<table>
<thead><tr><th>Opladninger</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>2 gange om ugen</td><td>2,4 kWh</td><td>{{kr 2,4}}</td></tr>
<tr><td>5 gange om ugen</td><td>6 kWh</td><td>{{kr 6}}</td></tr>
<tr><td>Hver dag</td><td>8,4 kWh</td><td>{{kr 8,4}}</td></tr>
<tr><td>To gange om dagen</td><td>16,8 kWh</td><td>{{kr 16,8}}</td></tr>
</tbody>
</table>
<p>Til sammenligning bruger en <a href="/nintendo-switch/">Nintendo Switch 2</a> i docken 19 watt, så to timers spil om dagen giver cirka 14 kWh om året. Et selvstændigt VR-headset er altså i samme lave størrelsesorden som en håndholdt konsol.</p>

<h2>Pc-VR: her ligger det store forbrug</h2>
<p>Mange spiller også VR gennem en computer — enten med et kabel eller trådløst fra en <a href="/gaming-pc/">gaming-pc</a>. Så er det computeren, der laver grafikken, og headsettet bliver i praksis en skærm. VR stiller store krav, fordi billedet skal tegnes to gange og med høj billedfrekvens, så grafikkortet arbejder hårdt hele tiden.</p>
<p>En gaming-pc med et kraftigt grafikkort bruger let flere hundrede watt i et krævende spil. Regner vi med omkring 450 W under VR-spil, bliver en times pc-VR cirka 0,45 kWh, svarende til {{oere 0,45}} — omkring tyve gange så meget som en hel opladning af en Quest 3. Tallet er vores skøn og svinger meget med computerens dele. To timers pc-VR om dagen bliver til omkring 330 kWh om året, svarende til {{kr 330}}.</p>
<p>Skærmen ved siden af pc'en tæller også, hvis den står tændt imens. Spiller du på headsettets egen computer i stedet, forsvinder det meste af forbruget.</p>

<h2>Opladning i de billige timer</h2>
<p>Opladning er et af de få forbrug, der uden besvær kan flyttes. Headsettet behøver ikke at blive ladet, lige når du har spillet — det kan sagtens vente til natten eller de timer, hvor strømmen er billigst. Forskellen i kroner er lille for et enkelt headset, fordi forbruget er så lavt, men vanen er den samme som for andre ting, der lades op. Oversigten over dagens timer længere oppe på siden viser, hvornår prisen er lavest.</p>
<p>Én ting er værd at kende: står headsettet i dvale med fuldt batteri i laderen, trækker det stadig lidt for at holde batteriet fuldt. Det er et lille forbrug, men det løber hele døgnet. Tag laderen ud af stikket, når headsettet er ladet op og skal ligge et stykke tid.</p>

<h2>Hvad bestemmer, hvor meget strøm dit VR-headset bruger?</h2>
<ul>
<li><strong>Batteriets størrelse</strong> — et større batteri bruger mere pr. opladning, men holder også længere.</li>
<li><strong>Hvor meget du spiller</strong> — antallet af opladninger over et år er det, der flytter forbruget.</li>
<li><strong>Selvstændig eller pc-VR</strong> — med en gaming-pc ved siden af stiger forbruget mange gange.</li>
<li><strong>Laderen</strong> — en ældre eller billig lader har større tab og kan bruge lidt strøm, selv når intet er tilsluttet.</li>
<li><strong>Tilbehør</strong> — controllerne bruger batterier eller lades separat, og et ekstra batteri i hovedremmen skal også lades.</li>
</ul>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Spil på headsettets egen computer</strong>, når spillet findes til det — det er langt billigere end pc-VR.</li>
<li><strong>Sluk pc'en helt</strong> efter en VR-session i stedet for at lade den stå i dvale.</li>
<li><strong>Lad om natten</strong> eller i de billige timer, når du alligevel ikke spiller.</li>
<li><strong>Tag laderen ud</strong>, når headsettet er fuldt opladet.</li>
<li><strong>Brug genopladelige batterier</strong> i controllerne i stedet for engangsbatterier — de lades for en brøkdel af en øre.</li>
</ol>
<p>Kort sagt: et selvstændigt VR-headset er en af de mindste poster i et gamerhjem. Er der en stor computer med i billedet, er det den, du skal holde øje med.</p>`,
  faqs: [
    { question: "Hvad koster det at oplade et Meta Quest 3?", answer: "En fuld opladning bruger efter vores skøn cirka 0,023 kWh fra stikkontakten. Det koster {{oere 0,023}} ved {{pris_kwh}}." },
    { question: "Hvor stort er batteriet i Quest 3 og Quest 3S?", answer: "Quest 3 har et batteri på 19,44 Wh og Quest 3S på 17,06 Wh ifølge målinger ved adskillelse af headsettene. Quest 2 har 14 Wh." },
    { question: "Hvor lang tid tager det at lade et Quest-headset?", answer: "Meta oplyser omkring to og en halv time med den medfølgende lader. Quest 3 og 3S kræver en lader på 18 W." },
    { question: "Bruger pc-VR meget strøm?", answer: "Ja, fordi gaming-pc'en arbejder hårdt. Med omkring 450 W i spil (vores skøn) koster en time cirka {{oere 0,45}} — omtrent tyve gange en fuld opladning af et Quest 3." },
    { question: "Hvad koster VR-briller om året?", answer: "Lader du et Quest 3 fem gange om ugen, er det cirka 6 kWh om året, svarende til {{kr 6}}. Med pc-VR kan det blive flere hundrede kWh." },
  ],
  relatedSlugs: ["gaming-pc", "nintendo-switch", "playstation", "smartwatch", "ipad", "mobil-opladning"],
  sources: [
    { name: "Meta — Opladning af Meta Quest-headset (ladetid og laderens effekt)", url: "https://www.meta.com/help/quest/3482884435359892/" },
    { name: "UploadVR — Quest 3 teardown: batteriets kapacitet (19,44 Wh)", url: "https://www.uploadvr.com/quest-3-teardown-battery" },
    { name: "Mixed News — Meta Quest 3S iFixit-teardown (batteri 17,06 Wh)", url: "https://mixed-news.com/en/meta-quest-3s-ifixit-teardown/" },
  ],
  calculatorConfig: {
    title: "Beregn dit VR-headsets strømforbrug",
    options: [
      { label: "Meta Quest 3 (19,44 Wh batteri)", kwhPerUse: 0.023 },
      { label: "Meta Quest 3S (17,06 Wh batteri)", kwhPerUse: 0.02 },
      { label: "Meta Quest 2 (14 Wh batteri)", kwhPerUse: 0.016 },
    ],
    usageLabel: "Opladninger pr. uge",
    usageUnit: "gange/uge",
    usageMin: 1,
    usageMax: 21,
    usageDefault: 5,
    usageStep: 1,
    per: "opladning",
    perYear: 52,
  },
  publishDate: "2026-12-10",
  updated: "2026-11-22",
};

export default vrBriller;
