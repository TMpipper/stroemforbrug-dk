import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungTheFrame: ModelData = {
  slug: "samsung-the-frame",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung The Frame",
  released: "2026-03",
  synonyms: ["the frame", "samsung frame", "samsung the frame pro", "frame pro", "samsung frame tv", "ls03h", "tq55ls03hau", "samsung kunst tv", "the frame art mode"],
  title: "Samsung The Frame strømforbrug (2026) → watt og Art Mode",
  description:
    "Samsung The Frame og Frame Pro 2026 fra 43 til 85 tommer: watt fra EU's energimærke, kWh og pris om året, og hvad kunsttilstanden betyder for regningen.",
  intro:
    "Det, energimærket ikke viser, er kunsttilstanden: står billedet tændt hele dagen, er det dér, det meste af forbruget kommer fra.",
  content: `<h2>Hvor mange watt bruger Samsung The Frame?</h2>
<p>Samsung har registreret 2026-udgaven af The Frame (LS03H) i EU's produktdatabase EPREL. De nordiske modeller begynder med TQ. Den almindelige The Frame findes i 43", 55" og 65", og The Frame Pro — som ifølge Samsung har Neo QLED med mini-LED og en trådløs One Connect-boks — i 55", 65", 75" og 85". I standardbilledet (SDR) bruger de fra 51 W (43") til 155 W (85"). Standby er 0,5 W og netværksstandby 2 W for alle.</p>
<p>Alle størrelser har energiklasse F. Det interessante er, at The Frame og The Frame Pro bruger præcis det samme i SDR i de størrelser, hvor begge findes: 77 W i 55" og 102 W i 65". Forskellen ligger i HDR, hvor Pro-udgaven i 65" bruger mindre.</p>

<h2>Kunsttilstanden: det energimærket ikke måler</h2>
<p>The Frame er bygget til at hænge på væggen som et billede og vise kunst, når du ikke ser tv. Energimærket måler kun det almindelige tv-billede og standby — Samsung oplyser ikke et EU-tal for kunsttilstanden. Men skærmen lyser, når den viser kunst, og derfor bruger den strøm hele tiden, billedet er fremme.</p>
<p>Skal du have en idé om omfanget, kan du bruge tv-tallet som et loft: viser en 55" kunst seks timer om dagen og bruger lige så meget som i tv-tilstand, bliver det omkring 169 kWh om året, svarende til {{kr 169}}. Det er et loft, ikke en måling — kunsttilstanden kører typisk med lavere lysstyrke. Pointen er, at timerne tæller: seks timers kunst om dagen kan koste mere end selve tv-kiggeriet.</p>
<p>Samsung skriver, at The Frame Pro har sensorer, der skifter til kunsttilstand, når nogen er i nærheden, og slukker for at spare strøm, når man går. Brug den slags indstillinger, og sæt kunsttilstanden til at slukke om natten og når huset er tomt.</p>

<h2>Forbrug og pris for hver størrelse</h2>
<p>Med vores faste profil — fem timers tv om dagen i SDR og standby resten af døgnet — bruger 43" omkring 97 kWh om året, 55" 144 kWh, 65" 190 kWh, 75" 239 kWh og 85" 286 kWh. Det svarer til fra {{kr 97}} til {{kr 286}} om året. Kunsttilstanden kommer oveni.</p>
<p>Springet fra 65" til 75" er 27 W og fra 75" til 85" 26 W. Mellem 43" og 55" er det 26 W. De største Frame Pro-modeller er altså ikke specielt sparsomme for deres størrelse, men heller ikke grådige.</p>

<h2>HDR: Pro-udgaven bruger mindre</h2>
<p>Energimærkets HDR-tal viser, hvad tv'et bruger med film og serier i højt dynamikområde, hvor skærmen må lyse kraftigere:</p>
<table>
<thead><tr><th>Model</th><th>SDR</th><th>HDR</th></tr></thead>
<tbody>
<tr><td>The Frame 43" (TQ43LS03HEU)</td><td>51 W</td><td>108 W</td></tr>
<tr><td>The Frame 55" (TQ55LS03HAU)</td><td>77 W</td><td>182 W</td></tr>
<tr><td>The Frame 65" (TQ65LS03HAU)</td><td>102 W</td><td>226 W</td></tr>
<tr><td>Frame Pro 55" (TQ55LS03HWU)</td><td>77 W</td><td>179 W</td></tr>
<tr><td>Frame Pro 65" (TQ65LS03HWU)</td><td>102 W</td><td>198 W</td></tr>
<tr><td>Frame Pro 75" (TQ75LS03HWU)</td><td>129 W</td><td>252 W</td></tr>
<tr><td>Frame Pro 85" (TQ85LS03HWU)</td><td>155 W</td><td>312 W</td></tr>
</tbody>
</table>
<p>I 65" bruger Frame Pro 28 W mindre end den almindelige Frame i HDR. En film på to timer i HDR på 65" koster {{kr 0,45}} på den almindelige og {{kr 0,40}} på Pro. Det er småpenge pr. film, men ser du mest HDR-indhold, kan årsforbruget blive omkring det dobbelte af tallene ovenfor.</p>

<h2>2026 mod 2025: lidt mindre forbrug, bedre klasse</h2>
<p>Sidste års The Frame (LS03F) havde energiklasse G i alle størrelser. 2026-udgaven er rykket op i F og bruger mindre: 55" er gået fra 82 W til 77 W, 65" fra 108 W til 102 W, og 65" Frame Pro fra 112 W til 102 W. Over et år med fem timers tv om dagen sparer 65" Frame Pro omkring 18 kWh i forhold til sidste års model, svarende til {{kr 18}}.</p>
<p>Sammenlignet med en OLED som <a href="/tv/lg-oled-c6/">LG OLED C6</a> i 65" (84,6 W) bruger The Frame i 65" 17 W mere i SDR — men det er kunsttilstanden, ikke tv-billedet, der afgør, om The Frame bliver dyr i drift.</p>

<h2>Gode råd</h2>
<ul>
<li>Begræns kunsttilstanden til de timer, hvor nogen er hjemme, og sluk den om natten.</li>
<li>Skru ned for lysstyrken i kunsttilstand — et billede på væggen skal ikke lyse som et tv.</li>
<li>Slå netværksstandby fra, hvis du ikke bruger funktionerne: 2 W i stedet for 0,5 W giver omkring 10 kWh mere om året.</li>
</ul>
<p>Siden om <a href="/tv/">tv'ets strømforbrug</a> sammenligner typer og størrelser, og om <a href="/standby/">standby i hjemmet</a> kan du læse, hvad apparater bruger, når de ikke er tændt.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung The Frame 55\"?",
      answer: "Ifølge energimærket bruger TQ55LS03HAU (2026) 77 W i standardbilledet (SDR) og 182 W i HDR. Standby er 0,5 W og netværksstandby 2 W. Energiklassen er F.",
    },
    {
      question: "Hvor meget strøm bruger The Frame i kunsttilstand?",
      answer: "Samsung oplyser ikke et EU-tal for kunsttilstanden — energimærket måler kun tv-billedet og standby. Skærmen lyser i kunsttilstand og bruger derfor strøm hele tiden. Bruger en 55\" lige så meget som i tv-tilstand, koster seks timers kunst om dagen højst omkring {{kr 169}} om året.",
    },
    {
      question: "Hvad koster Samsung The Frame om året i strøm?",
      answer: "Med fem timers tv om dagen og standby resten af døgnet bruger 55\" omkring 144 kWh og 65\" omkring 190 kWh om året, svarende til {{kr 144}} og {{kr 190}}. Kunsttilstanden kommer oveni.",
    },
    {
      question: "Bruger The Frame Pro mere strøm end The Frame?",
      answer: "Nej, i SDR bruger de det samme: 77 W i 55\" og 102 W i 65\". I HDR bruger Frame Pro mindre i 65\": 198 W mod 226 W.",
    },
    {
      question: "Bruger 2026-udgaven af The Frame mindre end 2025?",
      answer: "Ja. 55\" er gået fra 82 W til 77 W og 65\" fra 108 W til 102 W i SDR, og energiklassen er rykket fra G til F.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung TQ43LS03HEU (The Frame 2026), EU's energimærke", url: eprel("2571525") },
    { name: "EPREL — Samsung TQ55LS03HAU (The Frame 2026), EU's energimærke", url: eprel("2571551") },
    { name: "EPREL — Samsung TQ65LS03HAU (The Frame 2026), EU's energimærke", url: eprel("2571572") },
    { name: "EPREL — Samsung TQ55LS03HWU (The Frame Pro 2026), EU's energimærke", url: eprel("2571552") },
    { name: "EPREL — Samsung TQ65LS03HWU (The Frame Pro 2026), EU's energimærke", url: eprel("2571573") },
    { name: "EPREL — Samsung TQ75LS03HWU (The Frame Pro 2026), EU's energimærke", url: eprel("2571594") },
    { name: "EPREL — Samsung TQ85LS03HWU (The Frame Pro 2026), EU's energimærke", url: eprel("2571624") },
    { name: "EPREL — Samsung TQ55LS03FAU (The Frame 2025), EU's energimærke", url: eprel("2204822") },
    { name: "EPREL — Samsung TQ65LS03FAU (The Frame 2025), EU's energimærke", url: eprel("2236341") },
    { name: "EPREL — Samsung TQ65LS03FWU (The Frame Pro 2025), EU's energimærke", url: eprel("2204833") },
    { name: "Samsung — 65\" The Frame Pro LS03HW (2026), produktside", url: "https://www.samsung.com/uk/lifestyle-tvs/the-frame/ls03hw-65-inch-the-frame-pro-qe65ls03hwuxxu/" },
  ],
  variants: [
    { name: "43\" The Frame (TQ43LS03HEU)", watts: { standby: 0.5, on: 51 }, energyClass: "F", source: 0 },
    { name: "55\" The Frame (TQ55LS03HAU)", watts: { standby: 0.5, on: 77 }, energyClass: "F", source: 1 },
    { name: "65\" The Frame (TQ65LS03HAU)", watts: { standby: 0.5, on: 102 }, energyClass: "F", source: 2 },
    { name: "55\" Frame Pro (TQ55LS03HWU)", watts: { standby: 0.5, on: 77 }, energyClass: "F", source: 3 },
    { name: "65\" Frame Pro (TQ65LS03HWU)", watts: { standby: 0.5, on: 102 }, energyClass: "F", source: 4 },
    { name: "75\" Frame Pro (TQ75LS03HWU)", watts: { standby: 0.5, on: 129 }, energyClass: "F", source: 5 },
    { name: "85\" Frame Pro (TQ85LS03HWU)", watts: { standby: 0.5, on: 155 }, energyClass: "F", source: 6 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Kunsttilstanden er ikke målt. Kilderne står nederst på siden.",
};

export default samsungTheFrame;
