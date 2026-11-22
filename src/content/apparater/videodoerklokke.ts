import type { ApplianceData } from "@/lib/types";

const videodoerklokke: ApplianceData = {
  slug: "videodoerklokke",
  meta: {
    category: "hobby",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "hus",
    synonyms: ["videodørklokke", "videodoerklokke", "dørklokke med kamera", "ring dørklokke", "nest doorbell", "smart dørklokke", "ringeklokketransformator", "dørklokke strøm"],
  },
  name: "Videodørklokke",
  article: "en",
  title: "Videodørklokke strømforbrug (2026) → kablet og batteri",
  description: "En kablet videodørklokke bruger omkring 2 watt døgnet rundt, 14-17 kWh om året. Se Googles målinger, batterimodellernes forbrug og transformerens tab.",
  heading: "Strømforbrug for en videodørklokke: kWh og pris",
  quickAnswer:
    "En kablet videodørklokke som Google Nest Doorbell (3. gen.) bruger 2,19 watt om dagen og 1,78 watt om natten, og Google opgiver selv et årsforbrug på 17,4 kWh. Det svarer til {{kr 17,4}} om året. En batterimodel bruger kun strøm, når den lades — cirka 1 kWh om året. Transformeren i eltavlen, der leverer strømmen til en kablet dørklokke, har sit eget tab oven i.",
  kwhRange: [1, 40],
  typicalKwh: 17.4,
  wattage: 2.2,
  standbyWatts: 0.9,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Hvor meget strøm bruger en videodørklokke?</h2>
<p>En videodørklokke er et lille kamera med mikrofon, højttaler og wifi, der sidder ved hoveddøren og sender besked til telefonen, når nogen ringer eller går forbi. Den kablede udgave får strøm fra den gamle ringeklokkeledning og står tændt hele døgnet. Batterimodellen klarer sig på et indbygget batteri, som du lader op med mellemrum. Google har målt sine dørklokker og oplyser forbruget i hver tilstand.</p>
<table>
<thead><tr><th>Dørklokke og tilstand</th><th>Watt</th><th>Pris i døgnet</th></tr></thead>
<tbody>
<tr><td>Nest Doorbell (kablet, 3. gen.), dag</td><td>2,19 W</td><td>{{oere 0,053}}</td></tr>
<tr><td>Nest Doorbell (kablet, 3. gen.), nat</td><td>1,78 W</td><td>{{oere 0,043}}</td></tr>
<tr><td>Nest Doorbell (kablet, 3. gen.), kamera slået fra</td><td>0,94 W</td><td>{{oere 0,023}}</td></tr>
<tr><td>Nest Doorbell (kablet, 2. gen.), dag</td><td>1,66 W</td><td>{{oere 0,04}}</td></tr>
<tr><td>Nest Doorbell (kablet, 2. gen.), nat</td><td>1,51 W</td><td>{{oere 0,036}}</td></tr>
<tr><td>Nest Doorbell (batteri), i laderen med fuldt batteri</td><td>0,27 W</td><td>under en halv øre</td></tr>
</tbody>
</table>
<p>Tallene for de kablede modeller er målt ved 20-24 volt vekselspænding — altså efter transformeren — og årsforbruget er beregnet med 12 timer i dagtilstand og 12 timer i nattilstand. Batterimodellens tal er målt ved 230 volt, mens den står i laderen.</p>

<h2>Hvad koster en videodørklokke om året?</h2>
<p>Google opgiver selv årsforbruget for hver model. Fordi dørklokken aldrig slukker, ligger forbruget næsten fast fra måned til måned, uanset hvor mange der ringer på. For de kablede modeller kommer transformerens tab oven i — det er beskrevet i næste afsnit.</p>
<table>
<thead><tr><th>Dørklokke</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Nest Doorbell (kablet, 3. gen.)</td><td>17,4 kWh</td><td>{{kr 17,4}}</td></tr>
<tr><td>Nest Doorbell (kablet, 2. gen.)</td><td>14 kWh</td><td>{{kr 14}}</td></tr>
<tr><td>Nest Doorbell (batteri)</td><td>1 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Kablet dørklokke med transformertab på ca. 1 W (vores skøn)</td><td>26 kWh</td><td>{{kr 26}}</td></tr>
</tbody>
</table>
<p>Den nye generation bruger lidt mere end den forrige, men forskellen er under {{kr 4}} om året.</p>

<h2>Transformeren: det skjulte tab</h2>
<p>En kablet videodørklokke tåler ikke 230 volt. Den får strøm fra en ringeklokketransformator i eltavlen, der sætter spændingen ned til typisk 8-24 volt. Transformeren står tændt hele døgnet og taber lidt strøm som varme, også når dørklokken bruger meget lidt. Hager oplyser et samlet effekttab på 1,8 watt ved fuld belastning for en lille ringeklokketransformator på 4 VA. Ved en dørklokke på et par watt er tabet efter vores skøn omkring 1 watt — det er knap 9 kWh om året, svarende til {{kr 9}}, oven i dørklokkens eget forbrug.</p>
<p>Ældre ringeklokketransformatorer er bygget til en klokke, der kun ringer i få sekunder. Doepke skriver i databladet for sin RK-transformator, at den kun er beregnet til kortvarig belastning, og at en sikkerhedstransformator anbefales til vedvarende belastning. Skal du have en kablet videodørklokke, er det derfor en god idé at lade en elinstallatør se på transformeren. En nyere og passende transformer giver både stabil drift og et lavere tab.</p>

<h2>Kablet eller batteri</h2>
<p>Batterimodellen er den sparsomme, fordi den kun vågner, når den registrerer bevægelse eller nogen ringer på. Over et år bruger den omkring 1 kWh til opladning. Til gengæld skal batteriet lades. Den kablede model er altid tændt og klar, men den koster efter vores skøn 23-26 kWh om året inklusive transformeren. Forskellen er omkring {{kr 25}} om året — så valget handler mere om bekvemmelighed end om strøm.</p>
<p>Har du også <a href="/overvaagningskamera/">overvågningskameraer</a> rundt om huset, er dørklokken ofte det mindste af dem. Dørklokken er afhængig af et stabilt wifi-signal ved hoveddøren, og en <a href="/router/">router</a> eller et mesh-punkt i nærheden er derfor en del af regnestykket.</p>

<h2>Klokken indenfor</h2>
<p>Mange videodørklokker kan stadig ringe på den gamle klokke indenfor, og den bruger kun strøm i de sekunder, den ringer. Andre bruger en separat trådløs klokke, der sidder i en stikkontakt og står klar hele døgnet; den har sit eget lille forbrug. Kobler du dørklokken til en smart højttaler, der alligevel er tændt, kommer der ikke noget ekstra forbrug til. Batterimodellen lades indenfor med et almindeligt USB-kabel, og selve opladningen er en lille brøkdel af en kWh.</p>

<h2>Hvad bestemmer, hvor meget strøm din videodørklokke bruger?</h2>
<ul>
<li><strong>Kablet eller batteri</strong> — den kablede kører hele døgnet, batterimodellen kun ved hændelser.</li>
<li><strong>Funktioner</strong> — pakkegenkendelse, optagelse hele tiden og bredt kamerafelt kræver mere strøm.</li>
<li><strong>Transformeren</strong> — tabet i transformeren kan være på størrelse med halvdelen af dørklokkens eget forbrug.</li>
<li><strong>Nattesyn</strong> — infrarødt lys tænder om natten; på Nest-modellerne bruger klokken alligevel lidt mindre om natten.</li>
<li><strong>Wifi-signalet</strong> — et svagt signal får radioen til at arbejde hårdere og kan give afbrudte videoopkald.</li>
</ul>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Vælg batteri</strong>, hvis du ikke har brug for optagelse hele døgnet.</li>
<li><strong>Brug en passende transformer</strong> — ikke større end nødvendigt, og beregnet til vedvarende belastning.</li>
<li><strong>Slå kameraet fra</strong> i perioder, hvor du ikke har brug for det — Nest Doorbell (3. gen.) falder til 0,94 watt.</li>
<li><strong>Sørg for godt wifi</strong> ved hoveddøren.</li>
<li><strong>Lad batteriet op i de billige timer</strong>, hvis du har en batterimodel.</li>
</ol>
<p>Læs mere om de små døgnforbrug i guiden om <a href="/standby/">standby</a>.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en videodørklokke?", answer: "Google Nest Doorbell (kablet, 3. gen.) bruger 2,19 W om dagen og 1,78 W om natten. Google opgiver 17,4 kWh om året, svarende til {{kr 17,4}}." },
    { question: "Bruger en batteridørklokke strøm?", answer: "Kun til opladning. Google opgiver cirka 1 kWh om året for Nest Doorbell (batteri), svarende til {{kr 1}}." },
    { question: "Bruger transformeren til dørklokken strøm?", answer: "Ja, den står tændt hele døgnet og taber lidt som varme. Hager oplyser 1,8 W tab ved fuld belastning for en lille transformer. Ved en videodørklokke er tabet efter vores skøn omkring 1 W, knap 9 kWh om året eller {{kr 9}}." },
    { question: "Kan jeg sætte en videodørklokke på 230 volt?", answer: "Nej. Kablede videodørklokker skal have lav spænding fra en ringeklokketransformator. Lad en elinstallatør tjekke, at transformeren passer." },
    { question: "Er en kablet eller en batteridørklokke billigst i strøm?", answer: "Batterimodellen. Den bruger omkring 1 kWh om året mod 23-26 kWh for en kablet model med transformer (vores skøn) — en forskel på omkring {{kr 25}} om året." },
  ],
  relatedSlugs: ["overvaagningskamera", "router", "nas", "ladestander", "mobil-opladning", "tv"],
  sources: [
    { name: "Google — Nest Doorbell (kablet, 3. gen.) Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/google-nest-doorbell-wired-3rd-gen-product-environmental-report.pdf" },
    { name: "Google — Nest Doorbell (kablet, 2. gen.) Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/nest-doorbell-wired-2nd-gen-product-environmental-report.pdf" },
    { name: "Google — Nest Doorbell (batteri) Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/nest-doorbell-battery-product-enviromental-report.pdf" },
    { name: "Hager — ST301 ringeklokketransformator 4 VA, datablad (effekttab ved mærkestrøm)", url: "https://assets.cef.co.uk/downloads/pdg/hager_st301_datasheet/hager_st301_datasheet.pdf" },
    { name: "Doepke — RK 12 S ringeklokketransformator, datablad", url: "https://www.doepke.de/uploads/tx_doepkeproducts/datenblatt/doepke_09980034_dbl_en.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn din videodørklokkes strømforbrug",
    options: [
      { label: "Batterimodel, opladning (ca. 1 kWh/år)", kwhPerUse: 0.003 },
      { label: "Kablet, ældre model (Nest 2. gen.: 14 kWh/år)", kwhPerUse: 0.0384 },
      { label: "Kablet, ny model (Nest 3. gen.: 17,4 kWh/år)", kwhPerUse: 0.0477 },
      { label: "Kablet, ny model med transformertab (vores skøn)", kwhPerUse: 0.072 },
    ],
    usageLabel: "Dage tændt pr. år",
    usageUnit: "dage/år",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-13",
  updated: "2026-11-22",
};

export default videodoerklokke;
