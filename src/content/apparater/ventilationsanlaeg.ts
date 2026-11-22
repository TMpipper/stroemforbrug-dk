import type { ApplianceData } from "@/lib/types";

/**
 * Ventilationsanlæg med varmegenvinding (boligventilation, BVU). Energimærke efter 1254/2014; mærke- og modeltal er
 * AEC = årligt elforbrug pr. 100 m² opvarmet areal (bilag VIII: t_a 8.760 t, q_net 1,3 m³/t pr. m², gennemsnitsklima).
 * Klassetal = EPREL-medianer (udtræk 22. nov. 2026, 4.000 af 9.317 BVU'er); modeltal = EPREL-registreringer.
 * DTU (T. R. Nielsen, 2008): BR-krav SEL 1.200 J/m³, projektets anlæg 600 J/m³; 150 m² hus ved 160 m³/t.
 * Beregneren: kWh pr. døgn (ventilatorer, ikke elvarmeflade) × driftsdage.
 */
const ventilationsanlaeg: ApplianceData = {
  slug: "ventilationsanlaeg",
  article: "et",
  meta: {
    category: "klima",
    usage: "always-on",
    hasEuLabel: true,
    motif: "hus",
    synonyms: ["ventilationsanlæg", "ventilationsanlæg med varmegenvinding", "balanceret ventilation", "mekanisk ventilation", "genvindingsanlæg", "boligventilation", "nilan", "genvex", "komfovent"],
  },
  name: "Ventilationsanlæg",
  title: "Ventilationsanlæg strømforbrug (2026) → kWh om året",
  description:
    "Se hvor meget strøm et ventilationsanlæg med varmegenvinding bruger i døgnet og om året, hvad energimærket betyder, og hvorfor det skal køre om vinteren.",
  heading: "Strømforbrug for et ventilationsanlæg: kWh i døgnet og pris om året",
  quickAnswer:
    "Et ventilationsanlæg med varmegenvinding til et parcelhus på omkring 150 m² bruger typisk 1–1,5 kWh i døgnet, fordi ventilatorerne kører hele tiden. Det bliver omkring 400 kWh om året, svarende til cirka {{kr 400}} ved månedens elpris. Et nyere anlæg med EC-ventilatorer og behovsstyring kan klare sig med under det halve af et ældre anlæg.",
  kwhRange: [250, 900],
  typicalKwh: 400,
  wattage: 45,
  standbyWatts: 0,
  energyLabels: [
    { class: "A+", kwhPerYear: 156 },
    { class: "A", kwhPerYear: 240 },
    { class: "B", kwhPerYear: 423 },
  ],
  models: [
    { brand: "Nilan", model: "Comfort CT150 (pr. 100 m²)", kwh: 192, energyClass: "A+" },
    { brand: "Zehnder", model: "ComfoAir Q350 (pr. 100 m²)", kwh: 199, energyClass: "A+" },
    { brand: "Dantherm", model: "HCV400 P2 (pr. 100 m²)", kwh: 217, energyClass: "A" },
    { brand: "Nilan", model: "Comfort 350 Top (pr. 100 m²)", kwh: 226, energyClass: "A" },
    { brand: "Genvex", model: "ECO 375 TS (pr. 100 m²)", kwh: 263, energyClass: "A" },
  ],
  seasonalProfile: [1.15, 1.12, 1.05, 0.97, 0.92, 0.88, 0.88, 0.88, 0.92, 1.0, 1.08, 1.15],
  content: `<h2>Hvor meget strøm bruger et ventilationsanlæg?</h2>
<p>Et ventilationsanlæg med varmegenvinding suger fugtig, brugt luft ud fra køkken, bad og bryggers og blæser frisk, filtreret udeluft ind i stuer og værelser. På vejen passerer de to luftstrømme hinanden i en varmeveksler, så den friske luft bliver varmet op af den luft, der forlader huset. Det, der bruger strøm, er de to ventilatorer – og de kører døgnet rundt, året rundt.</p>
<p>For et parcelhus på omkring 150 m² trækker et nyere anlæg typisk 30–60 W. Det er ikke meget i sig selv, men 8.760 timer om året gør det til et af husets største faste forbrug. Med 46 W i gennemsnit bliver det 1,1 kWh i døgnet og omkring 400 kWh om året, svarende til {{kr 400}} ved månedens elpris. Et ældre anlæg med vekselstrømsmotorer, et stort hus eller tilstoppede filtre kan let give det dobbelte.</p>
<p>Til sammenligning bruger et moderne <a href="/koeleskab/">køleskab</a> typisk 100–150 kWh om året. Ventilationsanlægget svarer altså til omkring tre køleskabe – men det sparer samtidig en stor del af den varme, der ellers ville forsvinde ud ad vinduerne, når du lufter ud.</p>

<h2>Forbrug efter anlæg og husstørrelse</h2>
<table>
<thead><tr><th>Anlæg</th><th>Gennemsnitlig effekt</th><th>kWh i døgnet</th><th>Pris pr. døgn</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Lejlighed eller lille hus, klasse A+</td><td>Ca. 33 W</td><td>0,8 kWh</td><td>{{kr 0,8}}</td><td>{{kr 292}}</td></tr>
<tr><td>Parcelhus 150 m², nyere anlæg</td><td>Ca. 46 W</td><td>1,1 kWh</td><td>{{kr 1,1}}</td><td>{{kr 402}}</td></tr>
<tr><td>Større hus eller ældre anlæg</td><td>Ca. 68 W</td><td>1,64 kWh</td><td>{{kr 1,64}}</td><td>{{kr 599}}</td></tr>
<tr><td>Ældre anlæg med AC-motorer, stort hus</td><td>Ca. 92 W</td><td>2,2 kWh</td><td>{{kr 2,2}}</td><td>{{kr 803}}</td></tr>
</tbody>
</table>
<p>Tallene gælder ventilatorerne. Har anlægget en elektrisk eftervarmeflade eller forvarmeflade til frostsikring, kommer dens forbrug oven i – se afsnittet om elvarme nedenfor.</p>

<h2>Ventilatorernes effektivitet: SEL og SPI</h2>
<p>Hvor meget strøm ventilatorerne bruger, afhænger af, hvor meget luft de skal flytte, og hvor effektivt de gør det. Det måles som SEL (specifikt elforbrug til lufttransport) i joule pr. kubikmeter luft, eller som SPI i watt pr. kubikmeter luft i timen. Lavere er bedre.</p>
<p>Et DTU-projekt fra 2008 af Toke Rammer Nielsen viste, hvor meget det betyder. Bygningsreglementets krav var dengang højst 1.200 J/m³, mens projektets anlæg nåede 600 J/m³ – det halve. For et hus på 150 m² med en luftmængde på 160 m³ i timen svarer 1.200 J/m³ til omkring 53 W, eller 470 kWh om året, og 600 J/m³ til 27 W, eller 235 kWh. Medianen for boligventilationsanlæg i EU's produktdatabase EPREL er i dag et SPI på 0,27 W pr. m³/t, svarende til omkring 970 J/m³.</p>
<p>De største gevinster kommer fra EC-ventilatorer (elektronisk kommuterede jævnstrømsmotorer), korte og glatte kanaler med få bøjninger, rene filtre og en korrekt indregulering, så anlægget ikke flytter mere luft end nødvendigt.</p>

<h2>Energimærket: kWh pr. 100 m²</h2>
<p>Boligventilationsanlæg har haft EU-energimærke siden 2016 efter forordning 1254/2014. Klassen bygger på det specifikke energiforbrug (SEC), som trækker den sparede varme fra elforbruget – derfor har de bedste anlæg en negativ værdi, og A+ kræver under −42 kWh pr. m² om året i gennemsnitsklima. Klassen siger altså mest om varmegenvindingen og mindre om elforbruget.</p>
<p>Elforbruget står i produktdatabladet som AEC: årligt elforbrug pr. 100 m² opvarmet areal ved en luftmængde på 1,3 m³ i timen pr. m². Energimærke- og modeltabellen længere nede på siden viser netop AEC pr. 100 m². Har dit hus 150 m², skal tallene ganges med 1,5. Medianerne i EPREL er 156 kWh for klasse A+, 240 kWh for klasse A og 423 kWh for klasse B pr. 100 m².</p>
<table>
<thead><tr><th>Klasse (median i EPREL)</th><th>kWh pr. 100 m² om året</th><th>kWh for 150 m²</th><th>Pris om året for 150 m²</th></tr></thead>
<tbody>
<tr><td>A+</td><td>156 kWh</td><td>234 kWh</td><td>{{kr 234}}</td></tr>
<tr><td>A</td><td>240 kWh</td><td>360 kWh</td><td>{{kr 360}}</td></tr>
<tr><td>B</td><td>423 kWh</td><td>635 kWh</td><td>{{kr 635}}</td></tr>
</tbody>
</table>

<h2>Elvarmeflade og frostsikring</h2>
<p>Mange anlæg har en elektrisk varmeflade. En forvarmeflade sikrer, at varmeveksleren ikke fryser til, når det er frostvejr, og en eftervarmeflade kan løfte temperaturen på indblæsningsluften, hvis genvindingen ikke er nok. Bolius skriver, at varmefladen supplerer genvindingen. De kører kun en del af tiden, men med en effekt på flere hundrede watt til over en kilowatt kan de på kolde dage bruge mere strøm end ventilatorerne.</p>
<p>Tjek, om dit anlæg har en elvarmeflade, og hvordan den er indstillet. Står eftervarmen til en høj indblæsningstemperatur, kan den køre det meste af vinteren. Har huset en <a href="/varmepumpe/">varmepumpe</a> eller fjernvarme, er det næsten altid billigere at lade husets varmeanlæg stå for opvarmningen og sætte eftervarmen lavt eller slå den fra.</p>

<h2>Hvad sparer varmegenvindingen?</h2>
<p>Ventilationsanlæggets strømforbrug skal ses i forhold til den varme, det genvinder. Uden genvinding forsvinder al den varme, du har betalt for i den brugte luft, ud gennem udsugningen eller de åbne vinduer. Med en god varmeveksler bliver størstedelen af den varme afleveret til den friske luft. Forordning 1254/2014 regner den sparede varme ud som AHS (annual heating saved) i samme datablad som elforbruget, og for de bedste anlæg er den sparede varme mange gange større end det strøm, ventilatorerne bruger. Det er derfor, energiklassen kan blive negativ.</p>
<p>Om anlægget betaler sig, afhænger af, hvad din varme koster. I et hus med elvarme eller en luft-til-vand-varmepumpe er hver sparet kWh varme mere værd end i et hus med billig fjernvarme. Uanset varmeform giver anlægget et bedre indeklima med mindre fugt og pollen – og det er ofte hovedgrunden til at have det.</p>

<h2>Hvornår på døgnet bruger anlægget strøm?</h2>
<p>Ventilationsanlægget kører døgnet rundt, så der er ikke noget tidspunkt at flytte forbruget til – det er netop meningen, at luften skal skiftes hele tiden. Mange anlæg har dog et boost-trin, der skruer op, når du laver mad eller går i bad, og et lavt trin, når huset er tomt. Behovsstyring med fugt- eller CO2-føler gør det automatisk og kan sænke forbruget mærkbart, fordi ventilatorerne kører langsommere det meste af døgnet.</p>
<p>Om sommeren åbner bypass-spjældet, så den kølige natteluft ikke bliver varmet op i veksleren. Det ændrer ikke ventilatorernes forbrug, men det gør, at anlægget hjælper med at holde huset køligt.</p>

<h2>Skal du slukke ventilationsanlægget om vinteren?</h2>
<p>Nej. Bolius skriver, at anlægget skal køre hele tiden, også om vinteren. Slukker du, får huset ingen frisk luft, fugten fra bad, madlavning og vasketøj bliver i boligen, og der er risiko for kondens og skimmel. Du sparer omkring {{kr 1,1}} om dagen på ventilatorerne, men risikerer fugtskader, der koster langt mere. Er luften for tør om vinteren, er løsningen at skrue lidt ned for luftmængden eller bruge en <a href="/luftfugter/">luftfugter</a> – ikke at slukke.</p>
<p>Skal du på ferie, kan du sætte anlægget på laveste trin. Så skiftes luften stadig, men ventilatorerne bruger mindre.</p>

<h2>Sådan holder du ventilationsanlæggets forbrug nede</h2>
<ol>
<li><strong>Skift filtrene</strong> efter anvisningen, typisk 1–2 gange om året. Tilstoppede filtre får ventilatorerne til at arbejde hårdere.</li>
<li><strong>Få anlægget indreguleret</strong>, så luftmængden passer til huset og ikke er højere end nødvendigt.</li>
<li><strong>Brug behovsstyring</strong> eller lavt trin, når huset er tomt.</li>
<li><strong>Tjek elvarmefladen</strong> – sæt eftervarmen lavt, hvis huset har anden varmekilde.</li>
<li><strong>Rens kanaler og ventiler</strong> med jævne mellemrum.</li>
<li><strong>Vælg EC-ventilatorer</strong>, hvis du skifter anlæg – og sammenlign AEC pr. 100 m² i databladet.</li>
</ol>
<p>Har du en emhætte, der sidder på anlægget, eller en selvstændig <a href="/emhaette/">emhætte</a>, så brug den, når du laver mad – det aflaster anlægget og fjerner fugten, hvor den opstår.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et ventilationsanlæg om året?",
      answer:
        "Et nyere anlæg til et parcelhus på 150 m² bruger typisk omkring 400 kWh om året, svarende til cirka {{kr 400}} ved månedens elpris. Et anlæg i klasse A+ kan klare sig med omkring 230 kWh, mens et ældre anlæg kan bruge 800 kWh eller mere.",
    },
    {
      question: "Hvor mange watt bruger et ventilationsanlæg?",
      answer:
        "Ventilatorerne i et nyere anlæg til et parcelhus bruger typisk 30–60 W i alt. Ældre anlæg med vekselstrømsmotorer bruger op til 90 W eller mere. En elvarmeflade kommer oven i.",
    },
    {
      question: "Hvad koster det at have ventilationsanlægget kørende i et døgn?",
      answer:
        "Omkring 1,1 kWh i døgnet for et typisk parcelhusanlæg, svarende til {{kr 1,1}}. Et lille anlæg i en lejlighed bruger omkring 0,8 kWh, eller {{kr 0,8}}.",
    },
    {
      question: "Kan jeg slukke ventilationsanlægget for at spare strøm?",
      answer:
        "Nej, Bolius anbefaler, at anlægget kører hele tiden, også om vinteren. Ellers bliver fugten i huset, og du risikerer skimmel. Sæt det i stedet på laveste trin, når huset er tomt.",
    },
    {
      question: "Hvad betyder energimærket på et ventilationsanlæg?",
      answer:
        "Klassen bygger på det specifikke energiforbrug, hvor den sparede varme trækkes fra elforbruget. Elforbruget står som AEC i kWh pr. 100 m² om året: medianen er 156 kWh for klasse A+ og 240 kWh for klasse A, svarende til {{kr 156}} og {{kr 240}} pr. 100 m².",
    },
    {
      question: "Bruger elvarmefladen i ventilationsanlægget meget strøm?",
      answer:
        "Den kan. En varmeflade på flere hundrede watt, der kører det meste af vinteren, kan bruge mere end ventilatorerne. Sæt eftervarmen lavt eller slå den fra, hvis huset har varmepumpe eller fjernvarme.",
    },
  ],
  relatedSlugs: ["varmepumpe", "affugter", "emhaette", "luftrenser", "luftfugter"],
  sources: [
    { name: "EPREL — EU's produktdatabase for boligventilationsanlæg, fx Nilan Comfort CT150", url: "https://eprel.ec.europa.eu/screen/product/residentialventilationunits/1824185" },
    { name: "Forordning (EU) nr. 1254/2014, bilag VIII — beregning af AEC og AHS", url: "https://www.legislation.gov.uk/eur/2014/1254/annex/VIII" },
    { name: "DTU, Toke Rammer Nielsen — Energieffektiv ventilation med varmegenvinding (2008)", url: "https://backend.orbit.dtu.dk/ws/files/3032669/FFEM-foredrag%2029%20feb%202008.pdf" },
    { name: "Bolius — Kan jeg slukke for ventilationsanlægget her i vinter for at spare el?", url: "https://www.bolius.dk/kan-jeg-slukke-for-ventilationsanlaegget-her-i-vinter-for-at-spare-el-98467" },
  ],
  calculatorConfig: {
    title: "Ventilationsanlæg forbrugsberegner",
    options: [
      { label: "Lejlighed eller lille hus, klasse A+ (ca. 33 W)", kwhPerUse: 0.8 },
      { label: "Parcelhus 150 m², nyere anlæg (ca. 46 W)", kwhPerUse: 1.1 },
      { label: "Større hus eller ældre anlæg (ca. 68 W)", kwhPerUse: 1.64 },
      { label: "Ældre anlæg med AC-motorer (ca. 92 W)", kwhPerUse: 2.2 },
    ],
    usageLabel: "Dage i drift om året",
    usageUnit: "dage",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-11-28",
  updated: "2026-11-22",
};

export default ventilationsanlaeg;
