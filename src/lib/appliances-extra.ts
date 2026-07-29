import type { ApplianceData } from "./types";

export const APPLIANCES_EXTRA: ApplianceData[] = [
  {
    slug: "airfryer",
    name: "Airfryer",
    title: "Airfryer strømforbrug 2026 → Se pris og kWh",
    description:
      "Hvor meget strøm bruger en airfryer? Se typisk elforbrug i kWh, sammenlign modeller og beregn din årlige udgift. Opdateret med 2026-priser.",
    heading: "Hvor meget strøm bruger en airfryer?",
    quickAnswer:
      "En typisk airfryer bruger mellem 800 og 2.000 watt og forbruger 50–150 kWh om året ved daglig brug. Det svarer til en årlig elregning på 125–375 kr. ved en gennemsnitspris på 2,50 kr./kWh. Airfryeren er markant billigere i drift end en traditionel ovn.",
    kwhRange: [50, 150],
    typicalKwh: 100,
    wattage: 1400,
    standbyWatts: 0.5,
    energyLabels: [
      { class: "A", kwhPerYear: 50 },
      { class: "B", kwhPerYear: 75 },
      { class: "C", kwhPerYear: 100 },
      { class: "D", kwhPerYear: 130 },
    ],
    models: [
      { brand: "Philips", model: "Airfryer XXL HD9870", kwh: 85, energyClass: "A" },
      { brand: "Ninja", model: "Foodi MAX AF400EU", kwh: 105, energyClass: "B" },
      { brand: "Tefal", model: "ActiFry Genius XL", kwh: 95, energyClass: "B" },
    ],
    seasonalProfile: [1.1, 1.1, 1.0, 0.9, 0.9, 0.8, 0.8, 0.9, 1.0, 1.1, 1.2, 1.2],
    content: `<h2>Airfryerens strømforbrug i overblik</h2>
<p>En airfryer er et af de mest energieffektive køkkenapparater til tilberedning af mad. Med et typisk effektforbrug på 1.000–2.000 watt og kortere tilberedningstid end en konventionel ovn sparer du både tid og penge på elregningen. I denne guide gennemgår vi det faktiske energiforbrug, sammenligner populære modeller og giver dig konkrete tips til at minimere dit elforbrug.</p>

<h2>Hvor mange kWh bruger en airfryer om året?</h2>
<p>Ved daglig brug i gennemsnitligt 20–30 minutter forbruger en airfryer typisk 50–150 kWh årligt. Det svarer til en årlig udgift på 125–375 kr. ved en elpris på 2,50 kr./kWh. Forbruget afhænger primært af modellens watttal, tilberedningstiden og hvor ofte du bruger den.</p>

<table>
<thead><tr><th>Brugsfrekvens</th><th>Daglig tid</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Sjælden (2-3 gange/uge)</td><td>25 min</td><td>35–55 kWh</td><td>88–138 kr.</td></tr>
<tr><td>Moderat (daglig)</td><td>25 min</td><td>75–110 kWh</td><td>188–275 kr.</td></tr>
<tr><td>Hyppig (daglig, lang tid)</td><td>45 min</td><td>120–150 kWh</td><td>300–375 kr.</td></tr>
</tbody>
</table>

<h2>Airfryer vs. ovn: Hvad bruger mest strøm?</h2>
<p>En konventionel ovn bruger typisk 2.000–3.000 watt og kræver 10–15 minutters forvarmning. Airfryeren når driftstemperatur på 2–3 minutter og bruger dermed markant mindre energi pr. tilberedning. En typisk ovnbrug koster 2–4 kr. pr. gang, mens en airfryer kun koster 0,50–1,50 kr.</p>

<table>
<thead><tr><th>Apparat</th><th>Watt</th><th>Typisk tid</th><th>kWh pr. brug</th><th>Pris pr. brug</th></tr></thead>
<tbody>
<tr><td>Airfryer</td><td>1.400 W</td><td>25 min</td><td>0,35 kWh</td><td>0,88 kr.</td></tr>
<tr><td>Konventionel ovn</td><td>2.500 W</td><td>45 min</td><td>1,50 kWh</td><td>3,75 kr.</td></tr>
<tr><td>Mikroovn</td><td>1.000 W</td><td>5 min</td><td>0,08 kWh</td><td>0,21 kr.</td></tr>
</tbody>
</table>

<p>Hvis du erstatter tre ugentlige ovnbrug med airfryeren, sparer du ca. 180 kWh om året – svarende til 450 kr. Læs mere om <a href="/ovn/">ovnens strømforbrug</a> for en detaljeret sammenligning.</p>

<h2>Populære airfryer-modeller og deres energiforbrug</h2>
<p>De mest solgte airfryere i Danmark har et effektforbrug på 1.200–2.200 watt. Større modeller med højere watttal tilbereder maden hurtigere, så det samlede energiforbrug pr. portion er ofte sammenligneligt med mindre modeller.</p>

<table>
<thead><tr><th>Model</th><th>Watt</th><th>Kapacitet</th><th>kWh/år (daglig brug)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Philips Airfryer XXL HD9870</td><td>2.225 W</td><td>7,3 L</td><td>85 kWh</td><td>213 kr.</td></tr>
<tr><td>Ninja Foodi MAX AF400EU</td><td>2.460 W</td><td>9,5 L</td><td>105 kWh</td><td>263 kr.</td></tr>
<tr><td>Tefal ActiFry Genius XL</td><td>1.350 W</td><td>4,2 L</td><td>95 kWh</td><td>238 kr.</td></tr>
<tr><td>Cosori Pro LE 5.0</td><td>1.800 W</td><td>4,7 L</td><td>90 kWh</td><td>225 kr.</td></tr>
</tbody>
</table>

<h2>Standbyforbrug og skjulte strømtyve</h2>
<p>De fleste airfryere har et minimalt standbyforbrug på under 1 watt, hvilket svarer til under 2 kr. om året. Modeller med digitalt display og WiFi-forbindelse kan dog trække op til 2–3 watt i standby. Du kan slukke helt på kontakten for at eliminere standbyforbruget.</p>

<h2>Sådan reducerer du airfryerens strømforbrug</h2>
<p>Der er flere nemme måder at minimere dit elforbrug uden at gå på kompromis med madkvaliteten. Her er de mest effektive tiltag baseret på reelle besparelser.</p>

<ul>
<li><strong>Undgå forvarmning:</strong> Mange retter kræver ikke forvarmning i en airfryer – det sparer 2–3 minutters strøm pr. tilberedning.</li>
<li><strong>Fyld kurven optimalt:</strong> En halvfyldt airfryer bruger samme energi som en fuld. Tilbered større portioner ad gangen.</li>
<li><strong>Brug den rette størrelse:</strong> En 3-liters airfryer er tilstrækkelig for 1–2 personer og bruger 30 % mindre end en XXL-model.</li>
<li><strong>Reducer tilberedningstiden:</strong> Skær maden i mindre stykker for hurtigere tilberedning.</li>
<li><strong>Rengør regelmæssigt:</strong> Fedt og madrester reducerer varmeoverførslen og forlænger tilberedningstiden.</li>
</ul>

<h2>Hvornår på året bruger airfryeren mest strøm?</h2>
<p>Airfryerens forbrug er relativt jævnt hen over året, men de fleste familier bruger den lidt oftere i vintermånederne, hvor man tilbereder flere varme retter. I sommermånederne falder forbruget typisk 10–20 %, da man oftere griller udendørs.</p>

<h2>Er en airfryer en god investering rent energimæssigt?</h2>
<p>Ja – hvis du erstatter en del af dit ovnforbrug med airfryeren, tjener den sig hurtigt ind. En familie der bruger ovnen dagligt og skifter halvdelen af tilberedningerne til airfryeren, sparer typisk 300–500 kr. om året. Det betyder, at en airfryer til 800–1.500 kr. er betalt hjem på 2–3 år alene i strømbesparelse.</p>

<p>Airfryeren er desuden et godt supplement til andre energieffektive apparater. Læs også om <a href="/vaskemaskine/">vaskemaskinens strømforbrug</a> og <a href="/kummefryser/">kummefryserens elforbrug</a> for at få et samlet overblik over dit husholdningsforbrug.</p>

<h2>Ofte stillede spørgsmål om airfryerens strømforbrug</h2>
<p>Vi har samlet svar på de mest almindelige spørgsmål om airfryerens energiforbrug baseret på danske forbrugeres søgninger og Energistyrelsens data.</p>`,
    faqs: [
      { question: "Hvor meget koster det at bruge en airfryer i timen?", answer: "Med et typisk forbrug på 1.400 watt koster en times brug ca. 3,50 kr. ved en elpris på 2,50 kr./kWh. De fleste tilberedninger tager dog kun 15–30 minutter." },
      { question: "Bruger en airfryer mere strøm end en ovn?", answer: "Nej, en airfryer bruger typisk 50–75 % mindre strøm end en konventionel ovn pr. tilberedning, da den varmer hurtigere op og har kortere tilberedningstid." },
      { question: "Hvad er standbyforbruget på en airfryer?", answer: "De fleste airfryere bruger under 1 watt i standby, hvilket koster under 2 kr. om året. Modeller med WiFi kan bruge 2–3 watt." },
      { question: "Hvor mange kWh bruger en airfryer om måneden?", answer: "Ved daglig brug i 25 minutter bruger en airfryer ca. 7–12 kWh om måneden, svarende til 18–30 kr." },
      { question: "Er det billigere at bruge airfryer end komfur?", answer: "Til de fleste retter ja. En airfryer koster ca. 0,50–1,50 kr. pr. tilberedning mod 2–4 kr. for en ovn og 1–2 kr. for kogeplader." },
      { question: "Bruger en stor airfryer mere strøm end en lille?", answer: "Større modeller har højere watttal, men tilbereder maden hurtigere. Pr. portion er energiforbruget ofte sammenligneligt, men en XXL-model bruger 10–20 % mere pr. tilberedning." },
      { question: "Kan man spare strøm ved at slukke airfryeren på kontakten?", answer: "Ja, men besparelsen er minimal – under 2 kr. om året. Det er dog en god vane for alle apparater med standby." },
      { question: "Hvor meget strøm bruger en airfryer sammenlignet med en mikroovn?", answer: "En mikroovn bruger mindre energi pr. minut, men kan ikke det samme. Til opvarmning er mikroovnen billigst; til tilberedning af friske retter er airfryeren billigere end ovnen." },
    ],
    relatedSlugs: ["ovn", "vaskemaskine", "kummefryser", "elradiator"],
    sources: [
      { name: "Energistyrelsen – Husholdningsapparaters elforbrug", url: "https://ens.dk" },
      { name: "Elsparefondens forbrugsguide", url: "https://sparenergi.dk" },
      { name: "EU Energy Label Regulation 2019/2017" },
    ],
    calculatorConfig: {
      title: "Beregn din airfryers strømforbrug",
      options: [
        { label: "Lille airfryer (1.000 W)", kwhPerUse: 0.25 },
        { label: "Medium airfryer (1.400 W)", kwhPerUse: 0.35 },
        { label: "Stor airfryer (2.000 W)", kwhPerUse: 0.50 },
      ],
      usageLabel: "Antal gange pr. uge",
      usageUnit: "gange/uge",
      usageMin: 1,
      usageMax: 14,
      usageDefault: 5,
      usageStep: 1,
    },
  },
  {
    slug: "kummefryser",
    name: "Kummefryser",
    title: "Kummefryser strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvad bruger en kummefryser i strøm? Se typisk elforbrug i kWh pr. år, sammenlign energimærker og beregn din årlige udgift. Opdateret 2026-data.",
    heading: "Hvor meget strøm bruger en kummefryser?",
    quickAnswer:
      "En kummefryser bruger typisk 150–350 kWh om året afhængigt af størrelse og energiklasse. Det svarer til 375–875 kr. årligt ved 2,50 kr./kWh. Moderne A-mærkede modeller kan nøjes med under 150 kWh, mens ældre frysere nemt bruger over 400 kWh.",
    kwhRange: [150, 400],
    typicalKwh: 250,
    wattage: 80,
    standbyWatts: 0,
    energyLabels: [
      { class: "A", kwhPerYear: 130 },
      { class: "C", kwhPerYear: 200 },
      { class: "E", kwhPerYear: 280 },
      { class: "G", kwhPerYear: 380 },
    ],
    models: [
      { brand: "Liebherr", model: "GTP 2756 Premium", kwh: 145, energyClass: "A" },
      { brand: "Bosch", model: "GCM34VW30", kwh: 210, energyClass: "C" },
      { brand: "Vestfrost", model: "SZ 362 C", kwh: 275, energyClass: "E" },
    ],
    seasonalProfile: [0.9, 0.9, 0.9, 1.0, 1.0, 1.1, 1.2, 1.2, 1.1, 1.0, 0.9, 0.8],
    content: `<h2>Kummefryserens strømforbrug – det skal du vide</h2>
<p>En kummefryser kører 24 timer i døgnet, 365 dage om året, og er dermed et af de apparater i hjemmet, der bidrager mest til den samlede elregning. Med det rette valg af model og korrekt brug kan du dog reducere forbruget markant. I denne guide gennemgår vi alt om kummefryserens energiforbrug.</p>

<h2>Typisk årligt elforbrug for en kummefryser</h2>
<p>En kummefryser bruger mellem 130 og 400 kWh årligt afhængigt af størrelse, alder og energimærke. En ny A-mærket model bruger typisk 130–160 kWh, mens en ældre model fra før 2015 let kan bruge 350–450 kWh. Det er en forskel på over 500 kr. om året.</p>

<table>
<thead><tr><th>Energiklasse</th><th>Størrelse (liter)</th><th>kWh/år</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>A</td><td>200–300 L</td><td>130–160 kWh</td><td>325–400 kr.</td></tr>
<tr><td>C</td><td>200–300 L</td><td>190–230 kWh</td><td>475–575 kr.</td></tr>
<tr><td>E</td><td>200–300 L</td><td>260–300 kWh</td><td>650–750 kr.</td></tr>
<tr><td>G</td><td>200–300 L</td><td>350–420 kWh</td><td>875–1.050 kr.</td></tr>
</tbody>
</table>

<h2>Kummefryser vs. skabsfryser – energiforbrug</h2>
<p>Kummefryser bruger generelt 10–20 % mindre energi end en skabsfryser af samme størrelse. Det skyldes, at kold luft er tungere end varm luft og derfor forbliver i kummen, når låget åbnes. En skabsfryser mister en stor del af den kolde luft, hver gang døren åbnes.</p>

<table>
<thead><tr><th>Type</th><th>Fordel</th><th>Typisk forbrug (300 L)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Kummefryser</td><td>Lavere forbrug, bedre til langtidsopbevaring</td><td>200–250 kWh</td><td>500–625 kr.</td></tr>
<tr><td>Skabsfryser</td><td>Bedre overblik, nemmere adgang</td><td>240–310 kWh</td><td>600–775 kr.</td></tr>
</tbody>
</table>

<p>Har du også et <a href="/koeleskab/">køleskab</a>, kan det samlede køle-/fryseforbrug udgøre 15–25 % af hele husstandens elforbrug.</p>

<h2>Hvad påvirker kummefryserens elforbrug?</h2>
<p>Flere faktorer afgør, hvor mange kWh din kummefryser bruger. De vigtigste er energiklassen, placeringen, fyldsgraden og hvor ofte låget åbnes. Her er en detaljeret gennemgang.</p>

<ul>
<li><strong>Energiklasse:</strong> Forskellen mellem klasse A og G er op til 250 kWh/år (625 kr.).</li>
<li><strong>Placering:</strong> En kummefryser i et uopvarmet rum (garage, udhus) kan bruge 15–25 % mere om sommeren pga. høj omgivelsestemperatur.</li>
<li><strong>Fyldsgrad:</strong> En fyldt fryser er mere energieffektiv end en halvtom, da den frosne masse hjælper med at holde temperaturen.</li>
<li><strong>Rimlag:</strong> 5 mm rim øger forbruget med op til 30 %. Afrim minimum én gang årligt.</li>
<li><strong>Temperatur:</strong> -18°C er tilstrækkeligt. Hver grad koldere øger forbruget med ca. 5 %.</li>
</ul>

<h2>Hvornår kan det betale sig at udskifte kummefryser?</h2>
<p>Hvis din nuværende kummefryser er mere end 10–15 år gammel, bruger den sandsynligvis 300–450 kWh om året. En ny A-mærket model bruger under 160 kWh. Besparelsen er ca. 350–725 kr. om året, hvilket betyder, at en ny fryser til 3.000–5.000 kr. er betalt hjem på 5–8 år.</p>

<table>
<thead><tr><th>Fryserens alder</th><th>Typisk forbrug</th><th>Besparelse ved ny A-model</th><th>Tilbagebetalingstid</th></tr></thead>
<tbody>
<tr><td>0–5 år (C-klasse)</td><td>200–230 kWh</td><td>100–175 kr./år</td><td>17–30 år</td></tr>
<tr><td>5–10 år (E-klasse)</td><td>270–320 kWh</td><td>275–400 kr./år</td><td>8–14 år</td></tr>
<tr><td>10–15 år (G-klasse)</td><td>350–450 kWh</td><td>475–725 kr./år</td><td>4–8 år</td></tr>
</tbody>
</table>

<h2>Tips til at reducere kummefryserens strømforbrug</h2>
<p>Du kan reducere forbruget med 20–40 % ved at følge disse råd. De mest effektive tiltag kræver ingen investering – kun ændrede vaner.</p>

<ul>
<li><strong>Afrim regelmæssigt:</strong> Fjern rim og is mindst én gang om året – det kan spare op til 30 % energi.</li>
<li><strong>Hold fryseren fyldt:</strong> Brug vandflasker eller aviser til at fylde tomme pladser.</li>
<li><strong>Tjek tætningslisten:</strong> En utæt pakning lader varm luft ind og øger forbruget markant.</li>
<li><strong>Placér korrekt:</strong> Hold mindst 5 cm fri luft bag og over fryseren til ventilation.</li>
<li><strong>Sæt termostaten rigtigt:</strong> -18°C er tilstrækkeligt til sikker opbevaring.</li>
<li><strong>Lad mad køle af:</strong> Sæt aldrig varm mad direkte i fryseren.</li>
</ul>

<p>Se også vores guide til <a href="/fryser/">skabsfryserens strømforbrug</a> og <a href="/elradiator/">elradiatorens elforbrug</a> for at optimere hele dit hjem.</p>

<h2>Sæsonvariation i kummefryserens forbrug</h2>
<p>Kummefryserens elforbrug varierer over året. Om sommeren arbejder kompressoren hårdere pga. højere omgivelsestemperatur, hvilket øger forbruget med 10–20 %. Om vinteren, især i uopvarmede rum, falder forbruget tilsvarende. Gennemsnitlig månedlig variation er 15–25 kWh om sommeren mod 12–18 kWh om vinteren.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en kummefryser om måneden?", answer: "En typisk kummefryser bruger 12–30 kWh om måneden afhængigt af model og energiklasse. Det svarer til 30–75 kr. ved en elpris på 2,50 kr./kWh." },
      { question: "Bruger en kummefryser mere strøm end et køleskab?", answer: "Ja, en kummefryser bruger typisk 50–100 % mere end et køleskab, da den skal holde en lavere temperatur (-18°C mod 4–5°C)." },
      { question: "Hvad koster det at have en kummefryser kørende?", answer: "En moderne kummefryser koster 325–625 kr. om året i strøm. En ældre model kan koste over 1.000 kr. årligt." },
      { question: "Er det billigere at have en kummefryser i kælderen?", answer: "Ja, hvis kælderen er kølig (10–15°C). Fryseren bruger mindre energi, jo lavere omgivelsestemperaturen er – dog skal den ikke stå under 5°C." },
      { question: "Hvor meget kan man spare ved at udskifte en gammel kummefryser?", answer: "Ved at skifte en 15 år gammel fryser til en ny A-klasse kan du spare 475–725 kr. om året i strøm." },
      { question: "Bruger en tom kummefryser mere strøm end en fuld?", answer: "Ja, en tom fryser bruger mere strøm, da den frosne masse i en fuld fryser hjælper med at holde temperaturen stabil." },
      { question: "Hvor ofte skal man afrime en kummefryser?", answer: "Mindst én gang om året, eller når rimlaget er over 5 mm. Regelmæssig afrimning kan spare op til 30 % energi." },
      { question: "Kan en kummefryser stå i en uopvarmet garage?", answer: "Ja, men vær opmærksom på at meget høje sommertemperaturer øger forbruget. De fleste moderne frysere fungerer ned til -15°C omgivelsestemperatur." },
    ],
    relatedSlugs: ["fryser", "koeleskab", "elradiator"],
    sources: [
      { name: "Energistyrelsen – Hvidevarer og energimærkning", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Kummefryser", url: "https://sparenergi.dk" },
      { name: "EU Energimærkeforordning 2019/2016" },
    ],
    calculatorConfig: {
      title: "Beregn din kummefryser strømforbrug",
      options: [
        { label: "Ny A-klasse (130–160 kWh)", kwhPerUse: 0.38 },
        { label: "Middel C-klasse (200–230 kWh)", kwhPerUse: 0.59 },
        { label: "Ældre E-klasse (270–320 kWh)", kwhPerUse: 0.80 },
        { label: "Gammel G-klasse (350–420 kWh)", kwhPerUse: 1.05 },
      ],
      usageLabel: "Dage i drift pr. uge",
      usageUnit: "dage/uge",
      usageMin: 7,
      usageMax: 7,
      usageDefault: 7,
      usageStep: 1,
    },
  },
  {
    slug: "ovn",
    name: "Ovn",
    title: "Ovn strømforbrug 2026 → Se kWh-forbrug og pris",
    description:
      "Hvor meget strøm bruger en ovn? Se det typiske elforbrug i kWh for konventionel og varmluftovn, sammenlign modeller og beregn din udgift.",
    heading: "Hvor meget strøm bruger en ovn?",
    quickAnswer:
      "En elektrisk ovn bruger typisk 150–300 kWh om året ved normal brug. Det svarer til 375–750 kr. årligt ved 2,50 kr./kWh. Hver tilberedning koster 1,50–4,00 kr. afhængigt af temperatur, tid og om du bruger varmluft eller over-/undervarme.",
    kwhRange: [150, 350],
    typicalKwh: 220,
    wattage: 2500,
    standbyWatts: 2,
    energyLabels: [
      { class: "A+", kwhPerYear: 140 },
      { class: "A", kwhPerYear: 175 },
      { class: "B", kwhPerYear: 220 },
      { class: "C", kwhPerYear: 280 },
    ],
    models: [
      { brand: "Siemens", model: "iQ700 HB676GBS1", kwh: 155, energyClass: "A+" },
      { brand: "Bosch", model: "Serie 6 HBG5780S6", kwh: 195, energyClass: "A" },
      { brand: "Electrolux", model: "SteamBake EOD6P77WZ", kwh: 175, energyClass: "A" },
    ],
    seasonalProfile: [1.2, 1.1, 1.0, 0.9, 0.9, 0.8, 0.7, 0.8, 1.0, 1.1, 1.2, 1.3],
    content: `<h2>Ovnens strømforbrug – komplet guide</h2>
<p>Den elektriske ovn er et af køkkenets mest energikrævende apparater med et effektforbrug på 2.000–3.500 watt. Med korrekt brug og det rette valg af funktion kan du dog reducere forbruget betydeligt. Denne guide dækker alt fra typisk årsforbrug til konkrete besparelsestips.</p>

<h2>Hvad bruger en ovn i kWh pr. brug og pr. år?</h2>
<p>En typisk ovnbrug på 45–60 minutter ved 200°C forbruger 1,0–1,8 kWh, svarende til 2,50–4,50 kr. Ved brug 4–5 gange om ugen bliver det årlige forbrug 200–350 kWh. Varmluftsfunktionen bruger 15–20 % mindre end konventionel over-/undervarme.</p>

<table>
<thead><tr><th>Funktion</th><th>Temperatur</th><th>Tid</th><th>kWh</th><th>Pris</th></tr></thead>
<tbody>
<tr><td>Varmluft</td><td>180°C</td><td>45 min</td><td>0,9 kWh</td><td>2,25 kr.</td></tr>
<tr><td>Over-/undervarme</td><td>200°C</td><td>45 min</td><td>1,2 kWh</td><td>3,00 kr.</td></tr>
<tr><td>Grill</td><td>250°C</td><td>20 min</td><td>0,8 kWh</td><td>2,00 kr.</td></tr>
<tr><td>Pyrolyse (selvrens)</td><td>500°C</td><td>90 min</td><td>3,5 kWh</td><td>8,75 kr.</td></tr>
</tbody>
</table>

<h2>Varmluft vs. over-/undervarme – hvad er billigst?</h2>
<p>Varmluft er 15–20 % mere energieffektivt end over-/undervarme, fordi varmen fordeles jævnere og du kan sænke temperaturen 20°C. Over et år sparer det typisk 30–60 kWh, svarende til 75–150 kr. Varmluft giver desuden mulighed for at bage på flere hylder samtidig.</p>

<h2>Forvarmning – er det nødvendigt?</h2>
<p>Forvarmning bruger 0,2–0,4 kWh pr. gang og tager 10–15 minutter. For de fleste retter – grøntsager, kød, gryderetter – er forvarmning unødvendig. Det er kun nødvendigt for bagning, hvor præcis starttemperatur er vigtig. Ved at springe forvarmning over 3 gange om ugen sparer du ca. 50–60 kWh årligt (125–150 kr.).</p>

<h2>Sammenligning af ovnmodeller og energiforbrug</h2>
<p>Moderne ovne med A+ energimærke bruger op til 40 % mindre energi end ældre C-klasse modeller. Forskellen kan være over 100 kWh om året. Her er en sammenligning af populære modeller i Danmark.</p>

<table>
<thead><tr><th>Model</th><th>Energiklasse</th><th>kWh/cyklus</th><th>kWh/år (4x/uge)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Siemens iQ700 HB676GBS1</td><td>A+</td><td>0,69</td><td>155 kWh</td><td>388 kr.</td></tr>
<tr><td>Bosch Serie 6 HBG5780S6</td><td>A</td><td>0,87</td><td>195 kWh</td><td>488 kr.</td></tr>
<tr><td>Electrolux SteamBake EOD6P77WZ</td><td>A</td><td>0,80</td><td>175 kWh</td><td>438 kr.</td></tr>
<tr><td>IKEA Raffinerad</td><td>A</td><td>0,90</td><td>200 kWh</td><td>500 kr.</td></tr>
</tbody>
</table>

<h2>Tips til at reducere ovnens strømforbrug</h2>
<p>Med simple ændringer i dine ovnvaner kan du spare 20–30 % på ovnens elforbrug. Her er de mest effektive besparelsestips.</p>

<ul>
<li><strong>Brug varmluft:</strong> Spar 15–20 % energi og brug lavere temperatur.</li>
<li><strong>Spring forvarmning over:</strong> Undtagen ved bagning er det sjældent nødvendigt.</li>
<li><strong>Sluk 5–10 minutter før tid:</strong> Restvarmen fuldfører tilberedningen.</li>
<li><strong>Hold ovndøren lukket:</strong> Hver åbning koster 20–25 % af varmen.</li>
<li><strong>Bag flere ting samtidig:</strong> Udnyt ovnens fulde kapacitet.</li>
<li><strong>Brug en airfryer til små portioner:</strong> Den bruger 50–70 % mindre energi.</li>
</ul>

<p>En <a href="/airfryer/">airfryer</a> er et fremragende alternativ til ovnen ved mindre portioner. Se også <a href="/elradiator/">elradiatorens strømforbrug</a> for at forstå dit samlede varmeforbrug, og <a href="/quooker/">Quooker strømforbrug</a> for et andet køkkenapparat.</p>

<h2>Pyrolyse-selvrensning og energiforbrug</h2>
<p>Pyrolysefunktionen opvarmer ovnen til ca. 500°C og bruger 3–4 kWh pr. cyklus (7,50–10,00 kr.). Brug den maksimalt 3–4 gange om året. Alternativt kan du rengøre ovnen manuelt og spare 10–15 kWh årligt.</p>

<h2>Ovnens standbyforbrug</h2>
<p>Moderne ovne med digitalt ur og display bruger 1–3 watt i standby, svarende til 9–26 kWh om året (23–65 kr.). Ældre ovne uden display har intet standbyforbrug. Hvis du vil eliminere standby, kan du slukke ovnen på sikringsgruppen, men det nulstiller uret.</p>`,
    faqs: [
      { question: "Hvor mange kWh bruger en ovn pr. time?", answer: "En ovn ved 200°C bruger ca. 1,5–2,5 kWh pr. time afhængigt af funktion og isolering. Varmluft bruger ca. 15–20 % mindre end over-/undervarme." },
      { question: "Hvad koster det at tænde ovnen én gang?", answer: "En typisk tilberedning på 45 minutter ved 200°C koster 2,50–4,50 kr. ved en elpris på 2,50 kr./kWh." },
      { question: "Er varmluft billigere end over-/undervarme?", answer: "Ja, varmluft bruger 15–20 % mindre energi, da varmen fordeles mere effektivt og temperaturen kan sænkes 20°C." },
      { question: "Bruger ovnen strøm når den er slukket?", answer: "Ja, ovne med digitalt display bruger 1–3 watt i standby (9–26 kWh/år). Ovne uden display bruger ingenting." },
      { question: "Kan det betale sig at købe en A+ ovn?", answer: "Ja, besparelsen ift. en ældre C-klasse ovn er 60–140 kWh/år (150–350 kr.). En ny ovn er typisk betalt hjem på 5–10 år." },
      { question: "Hvor meget strøm bruger selvrensning (pyrolyse)?", answer: "En pyrolysecyklus bruger 3–4 kWh, svarende til 7,50–10 kr. Brug funktionen sparsomt – 3–4 gange om året er tilstrækkeligt." },
      { question: "Er det bedre at bruge ovn eller airfryer?", answer: "Til små portioner er en airfryer 50–70 % billigere i strøm. Til store retter og bagning er ovnen nødvendig." },
      { question: "Hvor meget sparer man ved at springe forvarmning over?", answer: "Du sparer 0,2–0,4 kWh pr. gang. Ved 3 tilberedninger om ugen uden forvarmning sparer du ca. 50–60 kWh (125–150 kr.) om året." },
    ],
    relatedSlugs: ["airfryer", "elradiator", "quooker", "vaskemaskine"],
    sources: [
      { name: "Energistyrelsen – Ovne og komfurer", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Madlavning", url: "https://sparenergi.dk" },
      { name: "EU Energy Labelling Regulation (EU) 2019/2016" },
    ],
    calculatorConfig: {
      title: "Beregn din ovns strømforbrug",
      options: [
        { label: "Varmluft 180°C, 45 min", kwhPerUse: 0.9 },
        { label: "Over-/undervarme 200°C, 45 min", kwhPerUse: 1.2 },
        { label: "Høj temperatur 220°C, 60 min", kwhPerUse: 1.8 },
      ],
      usageLabel: "Antal gange pr. uge",
      usageUnit: "gange/uge",
      usageMin: 1,
      usageMax: 14,
      usageDefault: 4,
      usageStep: 1,
    },
  },
  {
    slug: "elbil",
    name: "Elbil",
    title: "Elbil strømforbrug 2026 → Se kWh og ladepris",
    description:
      "Hvor meget strøm bruger en elbil? Se typisk forbrug i kWh pr. km og pr. år, sammenlign modeller og beregn din ladeudgift. Opdateret 2026.",
    heading: "Hvor meget strøm bruger en elbil?",
    quickAnswer:
      "En typisk elbil bruger 15–22 kWh pr. 100 km og forbruger 2.500–4.500 kWh om året ved 15.000 km kørsel. Det svarer til en årlig strømudgift på 6.250–11.250 kr. ved 2,50 kr./kWh hjemmeladning – markant billigere end benzin.",
    kwhRange: [2500, 5000],
    typicalKwh: 3500,
    wattage: 7400,
    standbyWatts: 3,
    energyLabels: [
      { class: "A (mest effektiv)", kwhPerYear: 2500 },
      { class: "B", kwhPerYear: 3200 },
      { class: "C", kwhPerYear: 3800 },
      { class: "D (mindst effektiv)", kwhPerYear: 4500 },
    ],
    models: [
      { brand: "Tesla", model: "Model 3 Long Range", kwh: 3000, energyClass: "A" },
      { brand: "Hyundai", model: "IONIQ 6 Long Range", kwh: 2700, energyClass: "A" },
      { brand: "Volkswagen", model: "ID.4 Pro", kwh: 3400, energyClass: "B" },
    ],
    seasonalProfile: [1.3, 1.2, 1.1, 0.9, 0.8, 0.8, 0.8, 0.8, 0.9, 1.0, 1.2, 1.3],
    content: `<h2>Elbilens strømforbrug – komplet oversigt for 2026</h2>
<p>En elbil er den største enkelte strømforbruger i mange danske husstande og kan fordoble elregningen. Til gengæld er driftsomkostningerne markant lavere end for en benzin- eller dieselbil. I denne guide gennemgår vi det faktiske energiforbrug, forskelle mellem modeller og de bedste strategier for billig ladning.</p>

<h2>Hvor mange kWh bruger en elbil pr. 100 km?</h2>
<p>De fleste elbiler bruger mellem 14 og 24 kWh pr. 100 km under normale danske forhold. Mindre biler som Fiat 500e bruger 13–16 kWh, mellemklassebiler som Tesla Model 3 bruger 15–18 kWh, og store SUV'er som BMW iX bruger 20–25 kWh. Vinteren øger forbruget med 20–40 %.</p>

<table>
<thead><tr><th>Biltype</th><th>kWh/100 km (sommer)</th><th>kWh/100 km (vinter)</th><th>Årligt forbrug (15.000 km)</th></tr></thead>
<tbody>
<tr><td>Lille (Fiat 500e, Mini)</td><td>13–16</td><td>18–22</td><td>2.300–2.900 kWh</td></tr>
<tr><td>Mellem (Tesla 3, IONIQ 6)</td><td>15–18</td><td>20–25</td><td>2.700–3.200 kWh</td></tr>
<tr><td>Stor sedan (BMW i4, Mercedes EQE)</td><td>17–20</td><td>22–27</td><td>3.000–3.600 kWh</td></tr>
<tr><td>SUV (VW ID.4, Tesla Y, BMW iX)</td><td>18–24</td><td>24–32</td><td>3.200–4.500 kWh</td></tr>
</tbody>
</table>

<h2>Hvad koster det at lade en elbil hjemme?</h2>
<p>Hjemmeladning koster typisk 2,00–3,50 kr./kWh alt inklusiv (el + transport + afgifter). Ved et forbrug på 3.500 kWh/år bliver den årlige ladeudgift 7.000–12.250 kr. Til sammenligning koster en tilsvarende benzinbil 18.000–25.000 kr. i brændstof årligt.</p>

<table>
<thead><tr><th>Ladetype</th><th>Pris pr. kWh</th><th>Pris pr. 100 km</th><th>Årlig pris (15.000 km)</th></tr></thead>
<tbody>
<tr><td>Hjemmeladning (natstrøm)</td><td>1,80–2,20 kr.</td><td>27–40 kr.</td><td>5.400–7.500 kr.</td></tr>
<tr><td>Hjemmeladning (gennemsnit)</td><td>2,50–3,00 kr.</td><td>38–54 kr.</td><td>7.500–10.800 kr.</td></tr>
<tr><td>Offentlig AC-lader</td><td>3,50–5,00 kr.</td><td>53–90 kr.</td><td>10.500–18.000 kr.</td></tr>
<tr><td>Hurtiglader (DC)</td><td>5,00–8,00 kr.</td><td>75–144 kr.</td><td>15.000–28.800 kr.</td></tr>
</tbody>
</table>

<h2>Vinteren og elbilens merforbrug</h2>
<p>Om vinteren stiger elbilens forbrug med 20–40 % pga. kabineopvarmning, batterikonditionering og højere rullemodstand. En bil der bruger 16 kWh/100 km om sommeren, kan bruge 21–23 kWh/100 km i januar. Varmepumpe reducerer merforbruget til 10–20 %.</p>

<h2>Sammenligning af populære elbilmodeller i Danmark</h2>
<p>De mest solgte elbiler i Danmark har vidt forskelligt energiforbrug. Her er en detaljeret sammenligning baseret på WLTP-tal og reelle danske tests.</p>

<table>
<thead><tr><th>Model</th><th>WLTP kWh/100 km</th><th>Reelt forbrug</th><th>Årligt (15.000 km)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Tesla Model 3 LR</td><td>14,4</td><td>17–20 kWh</td><td>3.000 kWh</td><td>7.500 kr.</td></tr>
<tr><td>Hyundai IONIQ 6 LR</td><td>13,9</td><td>16–18 kWh</td><td>2.700 kWh</td><td>6.750 kr.</td></tr>
<tr><td>Volkswagen ID.4 Pro</td><td>17,0</td><td>19–23 kWh</td><td>3.400 kWh</td><td>8.500 kr.</td></tr>
<tr><td>BMW iX xDrive50</td><td>19,4</td><td>22–26 kWh</td><td>3.900 kWh</td><td>9.750 kr.</td></tr>
</tbody>
</table>

<h2>Tips til at reducere elbilens strømforbrug</h2>
<p>Du kan reducere dit elforbrug med 10–30 % gennem korrekt kørestil og smart ladestrategi. Her er de vigtigste råd.</p>

<ul>
<li><strong>Lad om natten:</strong> Natstrøm er billigst og belaster elnettet mindst.</li>
<li><strong>Brug varmepumpe:</strong> Biler med varmepumpe bruger 10–20 % mindre om vinteren.</li>
<li><strong>Forvarm mens du lader:</strong> Brug forvarme fra app'en mens bilen er tilsluttet – det koster ikke batterikapacitet.</li>
<li><strong>Kør jævnt:</strong> Aggressiv kørsel øger forbruget med 20–30 %. Brug cruisekontrol på motorvej.</li>
<li><strong>Hold korrekt dæktryk:</strong> 0,3 bar for lavt dæktryk øger forbruget med 3–5 %.</li>
<li><strong>Undgå hurtigladning:</strong> DC-ladning er 2–3 gange dyrere og slider mere på batteriet.</li>
</ul>

<p>Elbilens forbrug udgør ofte 50–70 % af en husstands samlede elforbrug. Se også <a href="/varmepumpe/">varmepumpens strømforbrug</a> og <a href="/elradiator/">elradiatorens elforbrug</a> for andre store forbrugere i hjemmet.</p>

<h2>Elbil vs. benzinbil – driftsøkonomi</h2>
<p>En elbil koster typisk 35–55 kr. pr. 100 km mod 85–130 kr. for en benzinbil. Over 15.000 km/år sparer du 7.000–15.000 kr. i brændstofudgifter, selv med de nuværende elpriser. Dertil kommer lavere vedligeholdelsesomkostninger.</p>`,
    faqs: [
      { question: "Hvor meget stiger elregningen med en elbil?", answer: "En elbil øger typisk husstandens elforbrug med 2.500–4.500 kWh/år, svarende til 6.250–11.250 kr. ekstra ved hjemmeladning." },
      { question: "Hvad koster det at lade en elbil til fuld?", answer: "En fuld opladning af et 60 kWh batteri koster ca. 150 kr. hjemme (2,50 kr./kWh) og 300–480 kr. på en hurtiglader." },
      { question: "Hvor mange kWh bruger en elbil pr. km?", answer: "Typisk 0,15–0,22 kWh/km under danske forhold. Om vinteren stiger det til 0,20–0,30 kWh/km." },
      { question: "Er det billigst at lade om natten?", answer: "Ja, natstrøm (kl. 0–6) er typisk 30–50 % billigere end dagstrøm. Mange elselskaber tilbyder specialtariffer for elbilladning." },
      { question: "Hvor meget bruger en elbil i standby?", answer: "En parkeret elbil bruger 1–5 kWh pr. dag til batteristyring og systemer ('vampirtab'). Tesla-modeller er kendt for relativt højt standbyforbrug." },
      { question: "Bruger elbilen mere strøm om vinteren?", answer: "Ja, 20–40 % mere pga. kabineopvarmning og batterikonditionering. Biler med varmepumpe klarer sig bedst (10–20 % merforbrug)." },
      { question: "Hvad er billigst – hjemmelader eller offentlig lader?", answer: "Hjemmeladning er 40–60 % billigere end offentlig ladning og 60–75 % billigere end hurtigladning." },
      { question: "Kan solceller dække elbilens strømforbrug?", answer: "Et 6 kWp solcelleanlæg producerer ca. 5.400 kWh/år – nok til at dække de fleste elbiler. Men tidspunktet passer sjældent, så du har stadig brug for netstrøm." },
    ],
    relatedSlugs: ["varmepumpe", "elradiator", "router"],
    sources: [
      { name: "FDM – Elbiltest og forbrugsdata", url: "https://fdm.dk" },
      { name: "Energistyrelsen – Elbiler og ladning", url: "https://ens.dk" },
      { name: "Dansk Elbil Alliance – Statistik 2026" },
    ],
    calculatorConfig: {
      title: "Beregn din elbils strømforbrug",
      options: [
        { label: "Lille elbil (15 kWh/100 km)", kwhPerUse: 1.5 },
        { label: "Mellemstor elbil (18 kWh/100 km)", kwhPerUse: 1.8 },
        { label: "Stor elbil/SUV (22 kWh/100 km)", kwhPerUse: 2.2 },
      ],
      usageLabel: "Kørte km pr. uge",
      usageUnit: "km/uge",
      usageMin: 50,
      usageMax: 1000,
      usageDefault: 300,
      usageStep: 50,
    },
  },
  {
    slug: "router",
    name: "Router",
    title: "Router strømforbrug 2026 → Se kWh og årlig pris",
    description:
      "Hvor meget strøm bruger en WiFi-router? Se det typiske elforbrug i kWh, sammenlign modeller og beregn din årlige udgift. Opdateret 2026.",
    heading: "Hvor meget strøm bruger en router?",
    quickAnswer:
      "En typisk WiFi-router bruger 5–15 watt og forbruger 40–130 kWh om året, da den kører 24/7. Det svarer til en årlig elregning på 100–325 kr. ved 2,50 kr./kWh. Mesh-systemer med flere enheder bruger samlet 20–40 watt.",
    kwhRange: [40, 130],
    typicalKwh: 70,
    wattage: 8,
    standbyWatts: 8,
    energyLabels: [
      { class: "Energieffektiv", kwhPerYear: 40 },
      { class: "Standard", kwhPerYear: 70 },
      { class: "Mesh-system", kwhPerYear: 100 },
      { class: "Gaming/avanceret", kwhPerYear: 130 },
    ],
    models: [
      { brand: "ASUS", model: "RT-AX86U Pro", kwh: 75, energyClass: "Standard" },
      { brand: "TP-Link", model: "Deco XE75 (3-pak)", kwh: 95, energyClass: "Mesh-system" },
      { brand: "Netgear", model: "Nighthawk RAXE500", kwh: 120, energyClass: "Gaming/avanceret" },
    ],
    seasonalProfile: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    content: `<h2>Routerens strømforbrug – det fulde billede</h2>
<p>Din WiFi-router er et af de få apparater i hjemmet, der kører konstant 24 timer i døgnet, 365 dage om året. Selvom det enkelte wattforbrug er lavt, løber det op over tid. I denne guide gennemgår vi det typiske energiforbrug, forskelle mellem routertyper og hvordan du evt. kan reducere forbruget.</p>

<h2>Hvor mange kWh bruger en router om året?</h2>
<p>En standard WiFi-router bruger 5–12 watt og forbruger dermed 44–105 kWh årligt. Et mesh-system med 3 enheder bruger samlet 15–25 watt (130–220 kWh/år). Gaming-routere med mange antenner kan trække op til 30 watt (260 kWh/år).</p>

<table>
<thead><tr><th>Routertype</th><th>Watt</th><th>kWh/år</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Simpel router (ISP-leveret)</td><td>5–8 W</td><td>44–70 kWh</td><td>110–175 kr.</td></tr>
<tr><td>Standard WiFi 6 router</td><td>8–12 W</td><td>70–105 kWh</td><td>175–263 kr.</td></tr>
<tr><td>Mesh-system (3 enheder)</td><td>15–25 W</td><td>130–220 kWh</td><td>325–550 kr.</td></tr>
<tr><td>Gaming/WiFi 7 router</td><td>20–30 W</td><td>175–260 kWh</td><td>438–650 kr.</td></tr>
</tbody>
</table>

<h2>ISP-router vs. egen router – strømforbrug</h2>
<p>De fleste danske ISP'er (YouSee, Stofa, Fibia) leverer en standard-router der bruger 5–10 watt. Hvis du køber en egen avanceret router, bruger den typisk 10–15 watt mere. Vurder om den ekstra ydeevne retfærdiggør det øgede elforbrug.</p>

<h2>Mesh-systemer og elforbrug</h2>
<p>Mesh-systemer som Google Nest WiFi, TP-Link Deco og ASUS ZenWiFi bruger 5–8 watt pr. enhed. Et typisk system med 3 enheder trækker 15–24 watt samlet, hvilket koster 325–525 kr. om året. Til sammenligning koster en enkelt kraftig router 175–300 kr. årligt.</p>

<table>
<thead><tr><th>Mesh-system</th><th>Antal enheder</th><th>Samlet watt</th><th>kWh/år</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Google Nest WiFi Pro (3-pak)</td><td>3</td><td>18 W</td><td>158 kWh</td><td>395 kr.</td></tr>
<tr><td>TP-Link Deco XE75 (3-pak)</td><td>3</td><td>15 W</td><td>131 kWh</td><td>328 kr.</td></tr>
<tr><td>ASUS ZenWiFi AX (2-pak)</td><td>2</td><td>16 W</td><td>140 kWh</td><td>350 kr.</td></tr>
</tbody>
</table>

<h2>Kan man slukke routeren om natten?</h2>
<p>Ja, du kan spare 30–35 % af routerens elforbrug ved at slukke den 8 timer om natten. Men vær opmærksom på at smarthome-enheder, overvågningskameraer og automatiske opdateringer ikke fungerer. Mange routere har en tidsplanfunktion, der slukker WiFi-radioen men holder netforbindelsen aktiv.</p>

<h2>Routerens forbrug sammenlignet med andre apparater</h2>
<p>I det store billede er routeren en beskeden strømforbruger. Den bruger omtrent det samme som en <a href="/computer/">computer</a> i standby. Til sammenligning bruger en <a href="/elradiator/">elradiator</a> 50–100 gange så meget pr. time. Routeren udgør typisk 1–3 % af husstandens samlede elforbrug.</p>

<h2>Tips til at reducere routerens strømforbrug</h2>
<p>Selvom besparelsen er beskeden i kroner, er der alligevel gode vaner der kan reducere forbruget med 20–40 %.</p>

<ul>
<li><strong>Sluk WiFi om natten:</strong> Brug routerens tidsplan til at slukke radioen kl. 23–06.</li>
<li><strong>Reducer antennekraft:</strong> Hvis du bor i lejlighed, kan du sænke sendestyrken.</li>
<li><strong>Sluk ubrugte funktioner:</strong> Gæstenetværk, USB-porte og LED-lys bruger ekstra strøm.</li>
<li><strong>Vælg energieffektiv model:</strong> Nyere WiFi 6-routere er mere effektive pr. Mbps.</li>
<li><strong>Undgå overkill:</strong> Vælg ikke en gaming-router hvis du kun streamer.</li>
</ul>

<p>Se også vores guide til <a href="/computer/">computerens strømforbrug</a> for andre IT-apparater i hjemmet.</p>

<h2>Router-strøm og smart home</h2>
<p>Hvis du har et smart home med Hue-pærer, smarte stikkontakter og termostater, er routeren kritisk infrastruktur. Disse enheder kræver konstant forbindelse og bruger selv 1–3 watt pr. styk. Et smart home med 15 enheder tilføjer 15–45 watt til dit samlede IT-forbrug.</p>`,
    faqs: [
      { question: "Bruger en router strøm hele tiden?", answer: "Ja, en router kører 24/7 og bruger konstant 5–15 watt, da den skal opretholde netforbindelse og WiFi-signal. Det giver 44–130 kWh/år." },
      { question: "Hvor meget koster det at have en router tændt hele året?", answer: "En standard router koster 110–263 kr./år i strøm. Et mesh-system med 3 enheder koster 325–550 kr./år." },
      { question: "Kan man spare strøm ved at slukke routeren om natten?", answer: "Ja, du kan spare ca. 30–35 % ved at slukke 8 timer dagligt. Men smart home og automatiske opdateringer fungerer ikke i den periode." },
      { question: "Bruger en mesh-router mere strøm end en enkelt router?", answer: "Ja, et 3-enheders mesh-system bruger typisk 2–3 gange så meget som en enkelt router (130–220 vs. 44–105 kWh/år)." },
      { question: "Hvad bruger mest strøm – routeren eller TV'et?", answer: "Pr. time bruger TV'et langt mere (50–150 W vs. 5–15 W). Men routeren kører 24/7, så det årlige forbrug kan være sammenligneligt." },
      { question: "Bruger WiFi 6 mere eller mindre strøm end WiFi 5?", answer: "WiFi 6-routere bruger typisk lidt mere watt, men er mere effektive pr. overført MB data. Det samlede forbrug er omtrent det samme." },
      { question: "Påvirker antallet af tilsluttede enheder strømforbruget?", answer: "Ja, men kun marginalt. En router med 20 aktive enheder bruger ca. 10–15 % mere end med 5 enheder." },
      { question: "Hvor meget strøm bruger en router med indbygget modem?", answer: "En kombineret modem/router (som ISP'er leverer) bruger typisk 8–15 watt – lidt mere end en ren router." },
    ],
    relatedSlugs: ["computer", "tv", "elbil"],
    sources: [
      { name: "Energistyrelsen – Standby og netværksudstyr", url: "https://ens.dk" },
      { name: "EU Code of Conduct on Energy Consumption of Broadband Equipment" },
      { name: "SparEnergi.dk – Elektronik og IT", url: "https://sparenergi.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din routers strømforbrug",
      options: [
        { label: "Simpel ISP-router (6 W)", kwhPerUse: 0.144 },
        { label: "Standard WiFi 6 (10 W)", kwhPerUse: 0.24 },
        { label: "Mesh 3-pak (18 W)", kwhPerUse: 0.432 },
        { label: "Gaming-router (25 W)", kwhPerUse: 0.60 },
      ],
      usageLabel: "Timer tændt pr. dag",
      usageUnit: "timer/dag",
      usageMin: 8,
      usageMax: 24,
      usageDefault: 24,
      usageStep: 1,
    },
  },
  {
    slug: "computer",
    name: "Computer",
    title: "Computer strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en computer? Se typisk elforbrug for stationær og bærbar i kWh, sammenlign og beregn din årlige elregning. 2026-data.",
    heading: "Hvor meget strøm bruger en computer?",
    quickAnswer:
      "En stationær computer bruger typisk 100–500 watt under brug og forbruger 150–800 kWh om året. En bærbar bruger kun 30–65 watt og koster 50–150 kWh årligt. Det svarer til 375–2.000 kr. for stationær og 125–375 kr. for bærbar ved 2,50 kr./kWh.",
    kwhRange: [50, 800],
    typicalKwh: 250,
    wattage: 150,
    standbyWatts: 3,
    energyLabels: [
      { class: "Bærbar (effektiv)", kwhPerYear: 50 },
      { class: "Stationær (standard)", kwhPerYear: 200 },
      { class: "Gaming-PC", kwhPerYear: 500 },
      { class: "Workstation", kwhPerYear: 750 },
    ],
    models: [
      { brand: "Apple", model: "MacBook Air M3", kwh: 40, energyClass: "Bærbar" },
      { brand: "Dell", model: "OptiPlex 7010 SFF", kwh: 120, energyClass: "Stationær" },
      { brand: "Custom", model: "Gaming-PC (RTX 4070, i7)", kwh: 450, energyClass: "Gaming-PC" },
    ],
    seasonalProfile: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    content: `<h2>Computerens strømforbrug – stationær vs. bærbar</h2>
<p>Computerens elforbrug varierer enormt afhængigt af type, hardware og brug. En simpel kontorcomputer bruger under 100 watt, mens en gaming-PC kan trække over 600 watt under belastning. Denne guide giver dig det fulde overblik over strømforbruget og hjælper dig med at beregne din udgift.</p>

<h2>Hvor mange kWh bruger en computer om året?</h2>
<p>Det årlige forbrug afhænger primært af computertypen og den daglige brugstid. En bærbar brugt 6 timer dagligt forbruger ca. 50–100 kWh/år, mens en stationær gaming-PC brugt 4 timer dagligt kan forbruge 400–700 kWh/år. Dertil kommer standbyforbrug.</p>

<table>
<thead><tr><th>Computertype</th><th>Watt (aktiv)</th><th>Watt (idle)</th><th>kWh/år (6 t/dag)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Bærbar (ultrabook)</td><td>20–45 W</td><td>5–10 W</td><td>40–70 kWh</td><td>100–175 kr.</td></tr>
<tr><td>Bærbar (gaming)</td><td>80–150 W</td><td>15–25 W</td><td>150–250 kWh</td><td>375–625 kr.</td></tr>
<tr><td>Stationær (kontor)</td><td>80–150 W</td><td>30–50 W</td><td>120–220 kWh</td><td>300–550 kr.</td></tr>
<tr><td>Stationær (gaming)</td><td>300–600 W</td><td>60–100 W</td><td>400–700 kWh</td><td>1.000–1.750 kr.</td></tr>
<tr><td>Workstation</td><td>400–800 W</td><td>80–150 W</td><td>550–900 kWh</td><td>1.375–2.250 kr.</td></tr>
</tbody>
</table>

<h2>Stationær vs. bærbar – hvad bruger mindst?</h2>
<p>En bærbar computer bruger generelt 60–80 % mindre strøm end en tilsvarende stationær, fordi den er designet til at køre på batteri. En MacBook Air M3 bruger kun 20–30 watt under typisk brug, mens en stationær med tilsvarende ydeevne bruger 100–150 watt. Over et år er besparelsen 200–500 kr.</p>

<h2>Gaming-PC strømforbrug</h2>
<p>En gaming-PC er den mest strømkrævende computertype med et forbrug på 300–600 watt under spil. Grafikkortet alene kan bruge 200–350 watt. En RTX 4090 har et TDP på 450 watt, hvilket gør den til den største enkeltkomponent.</p>

<table>
<thead><tr><th>Komponent</th><th>Typisk forbrug (gaming)</th><th>Årligt (4 t/dag gaming)</th></tr></thead>
<tbody>
<tr><td>Grafikkort (GPU)</td><td>150–350 W</td><td>220–510 kWh</td></tr>
<tr><td>Processor (CPU)</td><td>65–170 W</td><td>95–250 kWh</td></tr>
<tr><td>RAM + SSD + bundkort</td><td>20–40 W</td><td>30–58 kWh</td></tr>
<tr><td>Skærm (27" QHD)</td><td>25–50 W</td><td>36–73 kWh</td></tr>
</tbody>
</table>

<h2>Computerens standbyforbrug</h2>
<p>Selv når computeren er i standby eller sleep-mode, bruger den strøm. En stationær i sleep bruger 2–5 watt, en bærbar 0,5–2 watt. Helt slukket (men med stik i) bruger de 0,5–2 watt. Over et år bliver standbyforbruget 10–40 kWh (25–100 kr.).</p>

<h2>Skærmens andel af strømforbruget</h2>
<p>Skærmen udgør 15–30 % af en stationær computers samlede forbrug. En 24" Full HD-skærm bruger 20–35 watt, en 27" QHD bruger 30–50 watt, og en 32" 4K bruger 40–80 watt. Dobbeltskærme fordobler naturligvis forbruget.</p>

<h2>Tips til at reducere computerens strømforbrug</h2>
<p>Med de rette indstillinger kan du reducere forbruget med 20–50 % uden at miste ydeevne i hverdagen.</p>

<ul>
<li><strong>Aktiver strømsparetilstand:</strong> Reducerer forbrug med 30–50 % under let brug.</li>
<li><strong>Sænk skærmens lysstyrke:</strong> 50 % lysstyrke sparer 20–30 % af skærmens forbrug.</li>
<li><strong>Sluk helt når du ikke bruger den:</strong> Sluk på kontakten – eliminerer standbyforbrug.</li>
<li><strong>Vælg bærbar over stationær:</strong> Sparer 60–80 % energi til samme opgaver.</li>
<li><strong>Undgå overpowered hardware:</strong> Et RTX 4090 til kontorbrug er rent strømspild.</li>
<li><strong>Brug SSD i stedet for HDD:</strong> En SSD bruger 2–5 watt mod HDD'ens 6–15 watt.</li>
</ul>

<p>Computerens forbrug bør ses i sammenhæng med andet IT-udstyr. Læs også om <a href="/router/">routerens strømforbrug</a> og <a href="/tv/">TV'ets elforbrug</a>. Har du hjemmekontor, kan det samlede IT-forbrug udgøre 10–20 % af din elregning.</p>

<h2>Hjemmekontor og elforbrug</h2>
<p>Et typisk hjemmekontor med bærbar, skærm, router og diverse opladere bruger 80–200 watt samlet. Over en 8-timers arbejdsdag bliver det 0,6–1,6 kWh (1,50–4,00 kr./dag). Årligt (230 arbejdsdage) koster hjemmekontoret 350–920 kr. i strøm.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en computer i timen?", answer: "En bærbar bruger 0,02–0,06 kWh/time (5–15 øre), en stationær kontor-PC 0,08–0,15 kWh/time (20–38 øre), og en gaming-PC 0,30–0,60 kWh/time (75 øre–1,50 kr.)." },
      { question: "Bruger en computer strøm i standby?", answer: "Ja, 0,5–5 watt afhængigt af type. Det koster 10–100 kr. om året. Sluk på kontakten for at eliminere det." },
      { question: "Hvad bruger mest strøm – computer eller TV?", answer: "En gaming-PC bruger typisk mere end et TV (300–600 W vs. 50–150 W). En bærbar bruger mindre end de fleste TV'er." },
      { question: "Hvor meget strøm bruger en gaming-PC?", answer: "300–600 watt under spil, svarende til 400–700 kWh/år ved 4 timers daglig gaming. Det koster 1.000–1.750 kr./år." },
      { question: "Er en Mac mere energieffektiv end en Windows-PC?", answer: "Apple Silicon (M1–M4) er ekstremt energieffektiv – en MacBook Air bruger kun 20–30 W. Tilsvarende Windows-bærbare bruger 40–65 W." },
      { question: "Hvor meget koster det at have computeren tændt hele dagen?", answer: "En bærbar: 1–2,50 kr./dag. En stationær kontor-PC: 3–6 kr./dag. En gaming-PC under spil: 8–15 kr./dag." },
      { question: "Bruger computeren mere strøm under opdateringer?", answer: "Ja, opdateringer og virusscans belaster CPU'en og kan øge forbruget med 30–80 % midlertidigt." },
      { question: "Kan man se computerens strømforbrug i realtid?", answer: "Ja, software som HWiNFO (Windows) eller Activity Monitor (Mac) viser forbruget. En stikkontakt med wattmåler er mere præcis." },
    ],
    relatedSlugs: ["router", "tv", "elradiator"],
    sources: [
      { name: "Energistyrelsen – IT-udstyr og elforbrug", url: "https://ens.dk" },
      { name: "EU Energy Star – Computer Efficiency Standards" },
      { name: "SparEnergi.dk – Kontorudstyr", url: "https://sparenergi.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din computers strømforbrug",
      options: [
        { label: "Bærbar (ultrabook, 35 W)", kwhPerUse: 0.035 },
        { label: "Stationær kontor (120 W)", kwhPerUse: 0.12 },
        { label: "Gaming-PC (400 W)", kwhPerUse: 0.40 },
        { label: "Workstation (600 W)", kwhPerUse: 0.60 },
      ],
      usageLabel: "Timer pr. dag",
      usageUnit: "timer/dag",
      usageMin: 1,
      usageMax: 16,
      usageDefault: 6,
      usageStep: 1,
    },
  },
  {
    slug: "elradiator",
    name: "Elradiator",
    title: "Elradiator strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en elradiator? Se typisk elforbrug i kWh, sammenlign typer og beregn din årlige varmeudgift. Opdateret med 2026-priser.",
    heading: "Hvor meget strøm bruger en elradiator?",
    quickAnswer:
      "En elradiator på 1.000–2.000 watt bruger typisk 1.500–4.000 kWh om året som primær varmekilde. Det svarer til 3.750–10.000 kr. årligt ved 2,50 kr./kWh. Elvarme er den dyreste opvarmningsform og 3–4 gange dyrere end en varmepumpe.",
    kwhRange: [500, 4000],
    typicalKwh: 2500,
    wattage: 1500,
    standbyWatts: 0.5,
    energyLabels: [
      { class: "Oliefyldt (effektiv)", kwhPerYear: 1800 },
      { class: "Konvektor", kwhPerYear: 2200 },
      { class: "Blæser/varmeblæser", kwhPerYear: 2800 },
      { class: "Infrarød panel", kwhPerYear: 1500 },
    ],
    models: [
      { brand: "Mill", model: "Generation 3 WiFi 1500W", kwh: 2000, energyClass: "Konvektor" },
      { brand: "DeLonghi", model: "Dragon TRD40820T", kwh: 1800, energyClass: "Oliefyldt" },
      { brand: "Adax", model: "Neo WiFi 1000W", kwh: 1400, energyClass: "Konvektor" },
    ],
    seasonalProfile: [2.0, 1.8, 1.5, 1.0, 0.3, 0.1, 0.0, 0.0, 0.3, 1.0, 1.5, 2.0],
    content: `<h2>Elradiatorens strømforbrug – Danmarks dyreste varmekilde</h2>
<p>Elvarme er den mest udbredte – og dyreste – opvarmningsform i danske sommerhuse og lejligheder. En elradiator konverterer el til varme med næsten 100 % effektivitet, men fordi el er 3–4 gange dyrere pr. kWh end fjernvarme, er det en kostbar løsning. I denne guide gennemgår vi det faktiske forbrug og alternativerne.</p>

<h2>Hvor mange kWh bruger en elradiator om året?</h2>
<p>En enkelt 1.500 W elradiator bruger typisk 1.200–2.500 kWh om året som eneste varmekilde i ét rum. Et helt hus med elvarme bruger 8.000–15.000 kWh årligt til opvarmning. Den nøjagtige mængde afhænger af isolering, rumstørrelse, ønsket temperatur og geografisk placering.</p>

<table>
<thead><tr><th>Scenario</th><th>Watt</th><th>Daglig drift</th><th>kWh/år (okt–apr)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Supplement (badeværelse)</td><td>500 W</td><td>2–3 timer</td><td>200–350 kWh</td><td>500–875 kr.</td></tr>
<tr><td>Ét rum (kontor/soveværelse)</td><td>1.000 W</td><td>8–12 timer</td><td>1.200–2.000 kWh</td><td>3.000–5.000 kr.</td></tr>
<tr><td>Primær varme (lejlighed)</td><td>3.000 W</td><td>10–14 timer</td><td>4.000–7.000 kWh</td><td>10.000–17.500 kr.</td></tr>
<tr><td>Primær varme (hus, 120 m²)</td><td>6.000 W</td><td>10–14 timer</td><td>8.000–15.000 kWh</td><td>20.000–37.500 kr.</td></tr>
</tbody>
</table>

<h2>Typer af elradiatorer og deres effektivitet</h2>
<p>Alle elradiatorer har tæt på 100 % virkningsgrad – al el omdannes til varme. Forskellen ligger i komfort og temperaturjævnhed, som indirekte påvirker forbruget via termostatstyring.</p>

<table>
<thead><tr><th>Type</th><th>Fordel</th><th>Ulempe</th><th>Typisk merforbrug</th></tr></thead>
<tbody>
<tr><td>Oliefyldt radiator</td><td>Jævn varme, støjfri</td><td>Langsom opvarmning</td><td>Referencen (0 %)</td></tr>
<tr><td>Konvektor</td><td>Hurtig opvarmning</td><td>Ujævn temperatur</td><td>+10–15 %</td></tr>
<tr><td>Varmeblæser</td><td>Meget hurtig</td><td>Støjende, tør luft</td><td>+15–25 %</td></tr>
<tr><td>Infrarød panel</td><td>Opvarmer genstande direkte</td><td>Kun retningsbestemt</td><td>-10–15 %</td></tr>
</tbody>
</table>

<h2>Elradiator vs. varmepumpe – driftsøkonomi</h2>
<p>En luft-til-luft varmepumpe leverer 3–4 kWh varme pr. kWh el (COP 3–4). Det gør den 3–4 gange billigere end en elradiator. En husstand der bruger 10.000 kWh elvarme årligt (25.000 kr.) kan reducere udgiften til 6.000–8.000 kr. med en varmepumpe. Installationen koster 15.000–30.000 kr. og er typisk tjent hjem på 1–2 år.</p>

<p>Læs mere i vores guide til <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>

<h2>Termostat og smart styring</h2>
<p>En elradiator uden termostat bruger 20–40 % mere energi end en med præcis termostatstyring. WiFi-termostater (som Mill, Adax, DEVI) kan programmere temperaturprofiler og sænke varmen automatisk, når du er væk. Det sparer typisk 15–25 % af varmeforbruget.</p>

<h2>Tips til at reducere elradiatorens strømforbrug</h2>
<p>Hvis du er afhængig af elvarme, er der flere måder at reducere forbruget markant uden at fryse. Her er de mest effektive tiltag.</p>

<ul>
<li><strong>Sænk temperaturen 1°C:</strong> Hver grad lavere sparer 5–7 % af varmeforbruget.</li>
<li><strong>Brug programmerbar termostat:</strong> Sænk til 17°C om natten og når du er væk – sparer 15–25 %.</li>
<li><strong>Isolér bedre:</strong> Efterisolering af loft og vægge kan reducere varmebehovet med 30–50 %.</li>
<li><strong>Tætningslister på vinduer:</strong> Billigt tiltag der kan spare 10–15 % varme.</li>
<li><strong>Brug infrarøde paneler målrettet:</strong> Opvarm kun der du opholder dig.</li>
<li><strong>Overvej varmepumpe:</strong> Den bedste langsigtede løsning – 60–75 % billigere drift.</li>
</ul>

<p>Se også <a href="/elbil/">elbilens strømforbrug</a> og <a href="/ovn/">ovnens elforbrug</a> for andre store poster på elregningen.</p>

<h2>Sæsonvariation – hvornår bruges elradiatoren?</h2>
<p>Elradiatorer bruges primært fra oktober til april (7 måneder). December–februar er de dyreste måneder med 2–3 gange højere forbrug end gennemsnittet. Juli–august har typisk intet forbrug. Denne markante sæsonvariation gør elvarme uforudsigeligt for budgettet.</p>

<h2>Hvornår giver elvarme mening?</h2>
<p>Elvarme er økonomisk forsvarligt i tre situationer: som supplement i sjældent brugte rum, i sommerhuse med begrænset brug, eller i velsolerede lejligheder med lavt varmebehov. I alle andre tilfælde er en varmepumpe, fjernvarme eller naturgas billigere.</p>`,
    faqs: [
      { question: "Hvor meget koster det at have en elradiator kørende i timen?", answer: "En 1.500 W elradiator koster 3,75 kr./time ved fuld effekt (2,50 kr./kWh). Med termostat kører den typisk 50–70 % af tiden, så den reelle pris er 1,90–2,60 kr./time." },
      { question: "Hvad koster elvarme om måneden?", answer: "Et rum med 1.500 W radiator koster 500–1.200 kr./måned i fyringssæsonen. Et helt hus med elvarme kan koste 3.000–5.000 kr./måned om vinteren." },
      { question: "Er oliefyldte radiatorer billigere i drift end konvektorer?", answer: "Oliefyldte radiatorer bruger typisk 10–15 % mindre energi, da de holder varmen bedre og giver jævnere temperatur, hvilket reducerer termostatcykler." },
      { question: "Hvor meget kan man spare med en varmepumpe i stedet for elvarme?", answer: "En varmepumpe sparer 60–75 % af varmeudgiften. Ved 10.000 kWh elvarme (25.000 kr./år) reduceres udgiften til 6.000–8.000 kr./år." },
      { question: "Bruger en elradiator strøm i standby?", answer: "Moderne WiFi-radiatorer bruger 0,5–2 watt i standby om sommeren. Mekaniske radiatorer bruger ingenting når de er slukket." },
      { question: "Hvor mange watt skal en elradiator være til mit rum?", answer: "Tommelfingerregel: 80–100 watt pr. m² i normal isoleret rum. Et 15 m² rum kræver 1.200–1.500 W." },
      { question: "Er infrarøde paneler billigere end konvektorer?", answer: "Ja, infrarøde paneler kan spare 10–20 % fordi de opvarmer direkte og giver komfortfølelse ved lavere lufttemperatur." },
      { question: "Kan man bruge elradiatorer med solceller?", answer: "Ja, men det matcher dårligt – elvarme bruges mest om vinteren, hvor solceller producerer mindst. Solcellerne dækker typisk kun 10–20 % af vintrens varmebehov." },
    ],
    relatedSlugs: ["varmepumpe", "elbil", "ovn", "quooker"],
    sources: [
      { name: "Energistyrelsen – Opvarmning af boliger", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Elvarme", url: "https://sparenergi.dk" },
      { name: "Bolius – Guide til elvarme", url: "https://bolius.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din elradiators strømforbrug",
      options: [
        { label: "500 W (badeværelse/supplement)", kwhPerUse: 0.35 },
        { label: "1.000 W (lille rum)", kwhPerUse: 0.70 },
        { label: "1.500 W (standard rum)", kwhPerUse: 1.05 },
        { label: "2.000 W (stort rum)", kwhPerUse: 1.40 },
      ],
      usageLabel: "Timer pr. dag (fyringssæson)",
      usageUnit: "timer/dag",
      usageMin: 2,
      usageMax: 24,
      usageDefault: 10,
      usageStep: 1,
    },
  },
  {
    slug: "fryser",
    name: "Fryser",
    title: "Fryser strømforbrug 2026 → Se kWh og årlig pris",
    description:
      "Hvor meget strøm bruger en skabsfryser? Se typisk elforbrug i kWh, sammenlign energiklasser og modeller, og beregn din årlige udgift. 2026-data.",
    heading: "Hvor meget strøm bruger en fryser?",
    quickAnswer:
      "En skabsfryser bruger typisk 170–400 kWh om året afhængigt af størrelse og energiklasse. Det svarer til 425–1.000 kr. årligt ved 2,50 kr./kWh. Moderne A-mærkede frysere bruger under 170 kWh, mens ældre modeller let overstiger 350 kWh.",
    kwhRange: [150, 420],
    typicalKwh: 270,
    wattage: 90,
    standbyWatts: 0,
    energyLabels: [
      { class: "A", kwhPerYear: 140 },
      { class: "C", kwhPerYear: 220 },
      { class: "E", kwhPerYear: 310 },
      { class: "G", kwhPerYear: 410 },
    ],
    models: [
      { brand: "Liebherr", model: "FNf 5207 NoFrost", kwh: 155, energyClass: "A" },
      { brand: "Samsung", model: "RZ32C7600WW", kwh: 230, energyClass: "C" },
      { brand: "Indesit", model: "UI6 F2T W", kwh: 320, energyClass: "E" },
    ],
    seasonalProfile: [0.9, 0.9, 0.9, 1.0, 1.0, 1.1, 1.2, 1.2, 1.1, 1.0, 0.9, 0.8],
    content: `<h2>Skabsfryserens strømforbrug – alt du skal vide</h2>
<p>En skabsfryser kører døgnet rundt og er et af de mest energikrævende hvidevarer i dit hjem. Forskellen mellem en ny og en gammel model kan være over 250 kWh årligt – svarende til 625 kr. på elregningen. Denne guide hjælper dig med at forstå forbruget og vælge rigtigt.</p>

<h2>Typisk elforbrug for en skabsfryser</h2>
<p>En skabsfryser bruger mellem 140 og 420 kWh om året. De nyeste A-mærkede modeller med NoFrost-teknologi bruger 130–170 kWh, mens ældre modeller uden energimærke let kan bruge 350–500 kWh. Forskellen er op til 900 kr. om året.</p>

<table>
<thead><tr><th>Energiklasse</th><th>Kapacitet</th><th>kWh/år</th><th>Årlig pris (2,50 kr.)</th><th>Pris pr. måned</th></tr></thead>
<tbody>
<tr><td>A</td><td>180–240 L</td><td>130–170 kWh</td><td>325–425 kr.</td><td>27–35 kr.</td></tr>
<tr><td>C</td><td>180–240 L</td><td>200–250 kWh</td><td>500–625 kr.</td><td>42–52 kr.</td></tr>
<tr><td>E</td><td>180–240 L</td><td>290–340 kWh</td><td>725–850 kr.</td><td>60–71 kr.</td></tr>
<tr><td>G</td><td>180–240 L</td><td>380–420 kWh</td><td>950–1.050 kr.</td><td>79–88 kr.</td></tr>
</tbody>
</table>

<h2>Skabsfryser vs. kummefryser – hvad bruger mindst?</h2>
<p>En kummefryser bruger typisk 10–20 % mindre energi end en skabsfryser af samme størrelse. Til gengæld giver skabsfryseren bedre overblik og nemmere adgang til maden. Valget afhænger af dine behov og den tilgængelige plads.</p>

<p>Læs vores detaljerede sammenligning i guiden om <a href="/kummefryser/">kummefryserens strømforbrug</a>.</p>

<h2>NoFrost vs. manuel afrimning – energiforbrug</h2>
<p>NoFrost-frysere bruger en ventilator og defrost-cyklus der tilføjer 5–15 % merforbrug sammenlignet med en tilsvarende statisk fryser. Men fordelen er, at du aldrig skal afrime manuelt – og en rimfri fryser er mere effektiv end en med 5 mm rim. I praksis er det derfor ofte lige.</p>

<table>
<thead><tr><th>Teknologi</th><th>Forbrug (ny model)</th><th>Vedligeholdelse</th><th>Reelt forbrug over tid</th></tr></thead>
<tbody>
<tr><td>NoFrost</td><td>+5–15 %</td><td>Ingen afrimning</td><td>Konstant effektivt</td></tr>
<tr><td>Statisk (manuel afrimning)</td><td>Reference</td><td>Afrimning 1–2x/år</td><td>Stiger med rim (+10–30 %)</td></tr>
</tbody>
</table>

<h2>Faktorer der påvirker fryserens elforbrug</h2>
<p>Udover energiklassen er der flere faktorer der afgør dit faktiske forbrug. Her er de vigtigste med angivet påvirkning.</p>

<ul>
<li><strong>Omgivelsestemperatur:</strong> For hver 5°C stigning i rumtemperatur stiger forbruget 15–20 %.</li>
<li><strong>Fyldsgrad:</strong> En fyldt fryser er mere effektiv end en halvtom (frosne varer hjælper).</li>
<li><strong>Dørens tætning:</strong> Utæt pakning øger forbruget med 20–30 %.</li>
<li><strong>Placering:</strong> Undgå direkte sollys og placering ved ovn eller radiator.</li>
<li><strong>Termostatindstilling:</strong> -18°C er tilstrækkeligt. Koldere = dyrere.</li>
<li><strong>Antal døråbninger:</strong> Hver åbning koster energi pga. kold luft der slipper ud.</li>
</ul>

<h2>Hvornår kan det betale sig at købe ny fryser?</h2>
<p>Hvis din fryser er over 10 år gammel, bruger den sandsynligvis 300–450 kWh/år. En ny A-klasse bruger under 170 kWh. Besparelsen er 325–700 kr./år, og en ny fryser til 4.000–7.000 kr. er betalt hjem på 6–12 år i ren strømbesparelse.</p>

<h2>Tips til lavere strømforbrug</h2>
<p>Med disse tips kan du reducere fryserens forbrug med 15–30 % uden at gå på kompromis med frysningen.</p>

<ul>
<li><strong>Hold fryseren fyldt:</strong> Brug vandflasker til at fylde tomme pladser.</li>
<li><strong>Tjek tætningslisten:</strong> Sæt et papir i døren – kan du trække det ud, er listen slidt.</li>
<li><strong>Hold 5 cm afstand til væg:</strong> Sikrer god ventilation af kondensatoren.</li>
<li><strong>Placér i køligt rum:</strong> Kælder eller bryggers er ideelt – undgå varm garage.</li>
<li><strong>Lad mad køle af:</strong> Sæt aldrig varme rester direkte i fryseren.</li>
</ul>

<p>Se også <a href="/koeleskab/">køleskabets strømforbrug</a> og <a href="/kummefryser/">kummefryserens elforbrug</a> for en samlet oversigt over dit køle-/fryseforbrug.</p>

<h2>Samlet køle-/fryseudgift for en dansk husstand</h2>
<p>En typisk dansk husstand med køleskab + fryser bruger samlet 400–700 kWh/år til køling og frysning. Det udgør 10–20 % af det samlede elforbrug og koster 1.000–1.750 kr./år. Ved at opgradere til A-klasse på begge kan du spare 200–400 kr. årligt.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en skabsfryser om måneden?", answer: "En typisk skabsfryser bruger 12–35 kWh/måned afhængigt af model og alder. Det koster 30–88 kr./måned ved 2,50 kr./kWh." },
      { question: "Hvad er forskellen på kummefryser og skabsfryser i strøm?", answer: "En kummefryser bruger typisk 10–20 % mindre pga. bedre kuldeisolering ved åbning. Til gengæld er en skabsfryser nemmere at organisere." },
      { question: "Bruger en NoFrost-fryser mere strøm?", answer: "Ja, 5–15 % mere end statiske modeller. Men da den aldrig danner rim, forbliver den effektiv over tid – i praksis er forbruget ofte det samme." },
      { question: "Hvad koster en fryser i strøm om året?", answer: "Nye A-klasse: 325–425 kr. Middel C-klasse: 500–625 kr. Ældre E/G-klasse: 725–1.050 kr. ved 2,50 kr./kWh." },
      { question: "Kan det betale sig at udskifte en 10 år gammel fryser?", answer: "Ofte ja – besparelsen er typisk 325–700 kr./år, og en ny fryser er betalt hjem på 6–12 år alene i strømbesparelse." },
      { question: "Hvad er den optimale temperatur for en fryser?", answer: "-18°C er tilstrækkeligt til sikker opbevaring. Hver grad koldere øger forbruget med ca. 5 %, så -24°C koster 30 % mere." },
      { question: "Hvor længe holder maden uden strøm i fryseren?", answer: "En fuld fryser holder maden frosset 24–48 timer ved strømafbrydelse. En halvtom fryser kun 12–24 timer." },
      { question: "Bruger en indbygget fryser mere strøm end fritstående?", answer: "Nej, energiforbruget afhænger af energiklassen, ikke af om den er indbygget. Indbyggede modeller har dog ofte lidt dårligere ventilation." },
    ],
    relatedSlugs: ["kummefryser", "koeleskab", "vaskemaskine"],
    sources: [
      { name: "Energistyrelsen – Hvidevarer", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Køl og frys", url: "https://sparenergi.dk" },
      { name: "EU Energimærkeforordning (EU) 2019/2016" },
    ],
    calculatorConfig: {
      title: "Beregn din frysers strømforbrug",
      options: [
        { label: "Ny A-klasse (140–170 kWh)", kwhPerUse: 0.42 },
        { label: "Middel C-klasse (220–250 kWh)", kwhPerUse: 0.63 },
        { label: "Ældre E-klasse (290–340 kWh)", kwhPerUse: 0.86 },
        { label: "Gammel G-klasse (380–420 kWh)", kwhPerUse: 1.10 },
      ],
      usageLabel: "Dage i drift pr. uge",
      usageUnit: "dage/uge",
      usageMin: 7,
      usageMax: 7,
      usageDefault: 7,
      usageStep: 1,
    },
  },
  {
    slug: "quooker",
    name: "Quooker",
    title: "Quooker strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en Quooker? Se det typiske elforbrug i kWh for kogende vandhane, sammenlign med elkedel og beregn din årlige udgift.",
    heading: "Hvor meget strøm bruger en Quooker?",
    quickAnswer:
      "En Quooker kogende vandhane bruger typisk 50–100 kWh om året. Det svarer til 125–250 kr. årligt ved 2,50 kr./kWh. Standbyforbruget er ca. 10 watt for at holde vandet på 110°C i tanken, hvilket udgør størstedelen af det årlige forbrug.",
    kwhRange: [50, 110],
    typicalKwh: 70,
    wattage: 2200,
    standbyWatts: 10,
    energyLabels: [
      { class: "PRO3 (3 L tank)", kwhPerYear: 55 },
      { class: "PRO7 (7 L tank)", kwhPerYear: 75 },
      { class: "COMBI (varm+kogende)", kwhPerYear: 90 },
      { class: "COMBI+ (alt-i-en)", kwhPerYear: 105 },
    ],
    models: [
      { brand: "Quooker", model: "PRO3 Fusion Square", kwh: 55, energyClass: "PRO3" },
      { brand: "Quooker", model: "PRO7 Nordic Round", kwh: 75, energyClass: "PRO7" },
      { brand: "Quooker", model: "COMBI+ Cube", kwh: 105, energyClass: "COMBI+" },
    ],
    seasonalProfile: [1.1, 1.1, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 1.0, 1.0, 1.1, 1.1],
    content: `<h2>Quooker strømforbrug – hvad koster kogende vand fra hanen?</h2>
<p>En Quooker er en kogende vandhane med en vakuumisoleret tank der holder vandet på 110°C. Den bruger strøm konstant for at opretholde temperaturen, men det isolerede design gør forbruget overraskende lavt. I denne guide gennemgår vi det faktiske energiforbrug og sammenligner med alternativer.</p>

<h2>Hvor mange kWh bruger en Quooker om året?</h2>
<p>En Quooker PRO3 med 3-liters tank bruger ca. 55 kWh om året, svarende til 138 kr. Den større PRO7 bruger ca. 75 kWh (188 kr.), og COMBI-modellen med varmt vand bruger 90–105 kWh (225–263 kr.). Det daglige forbrug er ca. 0,15–0,30 kWh.</p>

<table>
<thead><tr><th>Model</th><th>Tankstørrelse</th><th>Standby-watt</th><th>kWh/år</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Quooker PRO3</td><td>3 liter</td><td>8–10 W</td><td>50–60 kWh</td><td>125–150 kr.</td></tr>
<tr><td>Quooker PRO7</td><td>7 liter</td><td>10–12 W</td><td>70–85 kWh</td><td>175–213 kr.</td></tr>
<tr><td>Quooker COMBI</td><td>7 L + varmtvandsforsyning</td><td>12–15 W</td><td>85–100 kWh</td><td>213–250 kr.</td></tr>
<tr><td>Quooker COMBI+ Cube</td><td>7 L + kølet + danskvand</td><td>15–18 W</td><td>95–115 kWh</td><td>238–288 kr.</td></tr>
</tbody>
</table>

<h2>Quooker vs. elkedel – hvad er billigst?</h2>
<p>En elkedel bruger ca. 0,1 kWh pr. kogning (1 liter). Koger du kedlen 4 gange dagligt, bruger den ca. 146 kWh/år (365 kr.). En Quooker PRO3 bruger kun 55 kWh/år (138 kr.) og giver ubegrænset kogende vand. Quookeren er altså billigere i drift ved daglig brug.</p>

<table>
<thead><tr><th>Apparat</th><th>Forbrug pr. kop</th><th>Dagligt (4 kopper)</th><th>kWh/år</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Quooker PRO3</td><td>~0,01 kWh</td><td>~0,15 kWh (inkl. standby)</td><td>55 kWh</td><td>138 kr.</td></tr>
<tr><td>Elkedel (1 L pr. gang)</td><td>~0,025 kWh</td><td>~0,40 kWh</td><td>146 kWh</td><td>365 kr.</td></tr>
<tr><td>Kogeplade (kasserolle)</td><td>~0,05 kWh</td><td>~0,60 kWh</td><td>219 kWh</td><td>548 kr.</td></tr>
</tbody>
</table>

<h2>Standbyforbruget – hoveddelen af Quookerens energiforbrug</h2>
<p>Ca. 85–90 % af Quookerens energiforbrug er standby – at holde vandet varmt i tanken. Det faktiske forbrug pr. tappet liter kogende vand er minimalt (ca. 0,01 kWh), da vandet allerede er varmt. Den vakuumisolerede tank begrænser varmetabet til kun 8–15 watt.</p>

<h2>COMBI-tanken og varmtvandsbesparelse</h2>
<p>Quooker COMBI erstatter din varmtvandsbeholder under vasken og leverer både kogende og varmt vand. Den opvarmer kun det vand du bruger (modsat en centralvarme-beholder). Quooker angiver at COMBI kan spare op til 50 % energi på varmt vand til køkkenvasken sammenlignet med et traditionelt system med cirkulationspumpe.</p>

<h2>Kan man slukke Quookeren om natten?</h2>
<p>Teknisk set ja, men det anbefales ikke. Quookeren bruger ca. 30 minutter og 0,2 kWh på at genopvarme fra kold. Hvis du slukker i 8 timer, sparer du ca. 0,06–0,10 kWh (besparelse: 0,15–0,25 kr./nat). Det er ikke værd at vente 30 minutter på kogende vand om morgenen.</p>

<h2>Tips til lavere Quooker-forbrug</h2>
<p>Quookerens forbrug er allerede lavt, men her er alligevel nogle tips til optimering.</p>

<ul>
<li><strong>Vælg den rette tankstørrelse:</strong> PRO3 er tilstrækkelig for de fleste – den bruger 20–30 % mindre end PRO7.</li>
<li><strong>Brug ferietilstand:</strong> Ved fravær over 3+ dage – reducerer standby til minimum.</li>
<li><strong>Undgå COMBI hvis unødvendig:</strong> Har du allerede effektiv varmtvandsforsyning, er PRO3 tilstrækkelig.</li>
<li><strong>Kalktabletter regelmæssigt:</strong> Kalk i tanken reducerer effektiviteten.</li>
<li><strong>Placér tanken tæt på hanen:</strong> Kortere rør = mindre varmetab.</li>
</ul>

<p>Quookeren er en af køkkenets mere beskedne strømforbrugere. Sammenlign med <a href="/ovn/">ovnens strømforbrug</a> eller <a href="/opvaskemaskine/">opvaskemaskinens elforbrug</a> for perspektiv. Se også <a href="/vaskemaskine/">vaskemaskinens kWh-forbrug</a>.</p>

<h2>Er en Quooker en god investering energimæssigt?</h2>
<p>Rent energimæssigt sparer en Quooker 50–150 kWh/år sammenlignet med gentagne kogninger i elkedel (afhængigt af forbrug). Med en investering på 8.000–15.000 kr. er den dog primært en komfort- og designinvestering. Energibesparelsen er en bonus, ikke hovedargumentet.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en Quooker i standby?", answer: "En Quooker PRO3 bruger ca. 8–10 watt i standby for at holde 3 liter vand på 110°C. Det er ca. 70–88 kWh/år (175–220 kr.)." },
      { question: "Er en Quooker billigere i drift end en elkedel?", answer: "Ja, ved daglig brug. En Quooker bruger ca. 55 kWh/år, mens en elkedel brugt 4 gange dagligt bruger ca. 146 kWh/år." },
      { question: "Hvad koster en kop kogende vand fra Quookeren?", answer: "Under 1 øre pr. kop – det meste af strømmen går til at holde tanken varm, ikke til den enkelte tappning." },
      { question: "Kan man spare strøm ved at slukke Quookeren om natten?", answer: "Teknisk set sparer du 0,15–0,25 kr./nat, men det tager 30 min. at genopvarme. De fleste finder det ikke besværet værd." },
      { question: "Bruger Quooker COMBI mere strøm end PRO3?", answer: "Ja, COMBI bruger ca. 90–105 kWh/år mod PRO3's 55 kWh/år, da den også opvarmer vand til håndevask og opvask." },
      { question: "Hvor mange kWh bruger en Quooker om måneden?", answer: "En PRO3 bruger ca. 4,5 kWh/måned (11 kr.), en PRO7 ca. 6,5 kWh/måned (16 kr.)." },
      { question: "Er Quooker dyr i strøm sammenlignet med andre køkkenapparater?", answer: "Nej, Quookeren bruger 55–105 kWh/år – det er mindre end et køleskab (120–200 kWh) og langt mindre end en ovn (150–300 kWh)." },
      { question: "Hvad sker der med strømforbruget når Quookeren kalker til?", answer: "Kalk reducerer varmeoverførslen og kan øge forbruget med 10–20 %. Afkalk med Quooker-tabletter hver 3.–6. måned." },
    ],
    relatedSlugs: ["ovn", "opvaskemaskine", "vaskemaskine", "airfryer"],
    sources: [
      { name: "Quooker.dk – Officielle energispecifikationer", url: "https://quooker.dk" },
      { name: "Energistyrelsen – Køkkenudstyr", url: "https://ens.dk" },
      { name: "Bolius – Test af kogende vandhaner", url: "https://bolius.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din Quookers strømforbrug",
      options: [
        { label: "PRO3 (3 L, 10 W standby)", kwhPerUse: 0.15 },
        { label: "PRO7 (7 L, 12 W standby)", kwhPerUse: 0.21 },
        { label: "COMBI (7 L + varmt vand)", kwhPerUse: 0.26 },
        { label: "COMBI+ Cube (alt-i-en)", kwhPerUse: 0.30 },
      ],
      usageLabel: "Timer tændt pr. dag",
      usageUnit: "timer/dag",
      usageMin: 12,
      usageMax: 24,
      usageDefault: 24,
      usageStep: 1,
    },
  },
  {
    slug: "vaskemaskine",
    name: "Vaskemaskine",
    title: "Vaskemaskine strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en vaskemaskine? Se typisk elforbrug i kWh pr. vask og pr. år, sammenlign modeller og beregn din udgift. 2026-data.",
    heading: "Hvor meget strøm bruger en vaskemaskine?",
    quickAnswer:
      "En vaskemaskine bruger typisk 100–250 kWh om året ved 4–5 vaske ugentligt. Det svarer til 250–625 kr. årligt ved 2,50 kr./kWh. En 60°C-vask bruger ca. 1,0–1,5 kWh, mens en 40°C-vask kun bruger 0,5–0,8 kWh. Opvarmning af vand udgør 80 % af energiforbruget.",
    kwhRange: [80, 280],
    typicalKwh: 170,
    wattage: 2100,
    standbyWatts: 1,
    energyLabels: [
      { class: "A", kwhPerYear: 85 },
      { class: "B", kwhPerYear: 110 },
      { class: "C", kwhPerYear: 145 },
      { class: "D", kwhPerYear: 190 },
    ],
    models: [
      { brand: "Miele", model: "WED 335 WCS", kwh: 95, energyClass: "A" },
      { brand: "Samsung", model: "WW11BBA046AW", kwh: 115, energyClass: "B" },
      { brand: "Bosch", model: "WGG244A0BY Serie 6", kwh: 130, energyClass: "C" },
    ],
    seasonalProfile: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    content: `<h2>Vaskemaskinens strømforbrug – komplet guide</h2>
<p>Vaskemaskinen er et af de mest brugte hvidevarer i danske hjem, og dens energiforbrug afhænger primært af vasketemperaturen. Opvarmning af vand udgør hele 80–90 % af den energi, maskinen bruger pr. vask. I denne guide gennemgår vi forbruget i detaljer og giver dig konkrete besparelsestips.</p>

<h2>Hvor mange kWh bruger en vaskemaskine pr. vask?</h2>
<p>En typisk vaskemaskine bruger 0,3–1,5 kWh pr. vask afhængigt af temperatur, program og maskinstørrelse. En 40°C-vask bruger ca. 0,5–0,8 kWh, en 60°C-vask bruger 1,0–1,5 kWh, og en 90°C-kogevask bruger 1,8–2,5 kWh.</p>

<table>
<thead><tr><th>Program</th><th>Temperatur</th><th>kWh pr. vask</th><th>Pris pr. vask</th><th>Årligt (5 vaske/uge)</th></tr></thead>
<tbody>
<tr><td>Koldtvask/20°C</td><td>20°C</td><td>0,15–0,30 kWh</td><td>0,38–0,75 kr.</td><td>39–78 kWh</td></tr>
<tr><td>Standardvask</td><td>40°C</td><td>0,50–0,80 kWh</td><td>1,25–2,00 kr.</td><td>130–208 kWh</td></tr>
<tr><td>Standardvask</td><td>60°C</td><td>1,00–1,50 kWh</td><td>2,50–3,75 kr.</td><td>260–390 kWh</td></tr>
<tr><td>Kogevask</td><td>90°C</td><td>1,80–2,50 kWh</td><td>4,50–6,25 kr.</td><td>468–650 kWh</td></tr>
</tbody>
</table>

<h2>Temperaturens enorme betydning for elforbruget</h2>
<p>At sænke vasketemperaturen fra 60°C til 40°C reducerer elforbruget med 40–50 %. Fra 60°C til 30°C spares hele 60–70 %. Moderne vaskemidler er designet til at virke effektivt ved 30–40°C, så der er sjældent behov for 60°C til daglig tøjvask.</p>

<table>
<thead><tr><th>Skift</th><th>Besparelse pr. vask</th><th>Årlig besparelse (5 vaske/uge)</th></tr></thead>
<tbody>
<tr><td>60°C → 40°C</td><td>0,4–0,7 kWh</td><td>104–182 kWh (260–455 kr.)</td></tr>
<tr><td>60°C → 30°C</td><td>0,6–1,0 kWh</td><td>156–260 kWh (390–650 kr.)</td></tr>
<tr><td>40°C → 20°C</td><td>0,3–0,5 kWh</td><td>78–130 kWh (195–325 kr.)</td></tr>
</tbody>
</table>

<h2>Populære vaskemaskinmodeller og energiforbrug</h2>
<p>De nyeste vaskemaskinmodeller i Danmark er markant mere energieffektive end modeller fra for 10 år siden. Her er en sammenligning af populære modeller.</p>

<table>
<thead><tr><th>Model</th><th>Energiklasse</th><th>kWh/100 vaske (60°C)</th><th>kWh/år (5 vaske/uge)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Miele WED 335 WCS</td><td>A</td><td>47</td><td>95 kWh</td><td>238 kr.</td></tr>
<tr><td>Samsung WW11BBA046AW</td><td>B</td><td>52</td><td>115 kWh</td><td>288 kr.</td></tr>
<tr><td>Bosch WGG244A0BY Serie 6</td><td>C</td><td>62</td><td>130 kWh</td><td>325 kr.</td></tr>
<tr><td>AEG L6FBN842G</td><td>B</td><td>55</td><td>120 kWh</td><td>300 kr.</td></tr>
</tbody>
</table>

<h2>Vaskemaskinens standbyforbrug</h2>
<p>De fleste moderne vaskemaskiner bruger 0,5–2 watt i standby (display, WiFi). Det giver 4–18 kWh/år (10–45 kr.). Sluk maskinen på kontakten efter brug for at eliminere dette – det er en god vane, men besparelsen er beskeden.</p>

<h2>Tips til at reducere vaskemaskinens strømforbrug</h2>
<p>Den absolut vigtigste faktor er vasketemperaturen. Men der er flere tiltag, der tilsammen kan halvere dit forbrug.</p>

<ul>
<li><strong>Vask ved 30–40°C:</strong> Det er tilstrækkeligt til daglig tøjvask og sparer 40–70 % energi.</li>
<li><strong>Fyld maskinen helt:</strong> En halvfyldt maskine bruger næsten lige så meget som en fuld.</li>
<li><strong>Brug eco-program:</strong> Vasker længere tid ved lavere temperatur – sparer 20–40 %.</li>
<li><strong>Undgå kogevask (90°C):</strong> Kun nødvendig til håndklæder og sengetøj med bakterier.</li>
<li><strong>Centrifuger med højt omdrejningstal:</strong> Reducerer tørretumblerens arbejde bagefter.</li>
<li><strong>Vask om natten:</strong> Billigere eltariffer i nattetimerne.</li>
</ul>

<p>Vaskemaskinens forbrug hænger tæt sammen med <a href="/toerretumbler/">tørretumblerens strømforbrug</a> – tilsammen kan de udgøre 5–10 % af elregningen. Se også <a href="/opvaskemaskine/">opvaskemaskinens elforbrug</a> og <a href="/airfryer/">airfryerens kWh</a>.</p>

<h2>Vaskemaskine og vandforbrug</h2>
<p>Udover strøm bruger en vaskemaskine 40–60 liter vand pr. vask. Nyere modeller med vægtssensor tilpasser vandmængden og sparer derved både vand og den energi der bruges til at opvarme det. En A-mærket maskine bruger typisk 20–30 % mindre vand end en D-klasse.</p>

<h2>Hvornår bør man udskifte vaskemaskinen?</h2>
<p>En vaskemaskine over 10 år gammel bruger typisk 30–50 % mere energi end en ny A-klasse. Ved 5 vaske/uge er besparelsen 50–100 kWh/år (125–250 kr.). En ny maskine til 5.000–8.000 kr. er primært betalt hjem via vandbesparelse og bedre vaskeresultat – energibesparelsen alene giver lang tilbagebetalingstid.</p>`,
    faqs: [
      { question: "Hvor meget koster én vask i strøm?", answer: "En 40°C-vask koster 1,25–2,00 kr. i strøm. En 60°C-vask koster 2,50–3,75 kr. En koldvask (20°C) koster kun 0,38–0,75 kr." },
      { question: "Bruger vaskemaskinen mest strøm til opvarmning?", answer: "Ja, 80–90 % af energiforbruget går til at opvarme vandet. Derfor er temperaturvalget den vigtigste faktor." },
      { question: "Hvor meget kan man spare ved at vaske ved 30°C i stedet for 60°C?", answer: "Du sparer 0,6–1,0 kWh pr. vask (1,50–2,50 kr.). Ved 5 vaske/uge bliver det 390–650 kr. om året." },
      { question: "Hvor mange kWh bruger en vaskemaskine om måneden?", answer: "Ved 5 vaske/uge på 40°C bruger den ca. 10–17 kWh/måned (25–43 kr.). Ved 60°C stiger det til 17–25 kWh/måned." },
      { question: "Er eco-programmet virkelig billigere?", answer: "Ja, eco bruger 20–40 % mindre energi ved at vaske ved lavere temperatur i længere tid. Resultatet er ofte lige så godt." },
      { question: "Bruger vaskemaskinen strøm i standby?", answer: "Ja, 0,5–2 watt (4–18 kWh/år). Det koster 10–45 kr./år. Sluk på kontakten for at spare." },
      { question: "Hvad bruger mest strøm – vaskemaskine eller opvaskemaskine?", answer: "De bruger omtrent det samme – 100–200 kWh/år. Opvaskemaskinen vasker dog ved 55–65°C og bruger lidt mere pr. cyklus." },
      { question: "Kan man vaske alt tøj ved 30°C?", answer: "Det meste daglige tøj kan vaskes ved 30–40°C med moderne vaskemiddel. Sengetøj og håndklæder bør vaskes ved 60°C for hygiejne." },
    ],
    relatedSlugs: ["toerretumbler", "opvaskemaskine", "airfryer", "quooker"],
    sources: [
      { name: "Energistyrelsen – Vaskemaskiner", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Tøjvask", url: "https://sparenergi.dk" },
      { name: "EU Energimærkning (EU) 2019/2014" },
    ],
    calculatorConfig: {
      title: "Beregn din vaskemaskines strømforbrug",
      options: [
        { label: "Koldvask 20°C (0,2 kWh)", kwhPerUse: 0.2 },
        { label: "Standardvask 40°C (0,6 kWh)", kwhPerUse: 0.6 },
        { label: "Standardvask 60°C (1,2 kWh)", kwhPerUse: 1.2 },
        { label: "Kogevask 90°C (2,0 kWh)", kwhPerUse: 2.0 },
      ],
      usageLabel: "Antal vaske pr. uge",
      usageUnit: "vaske/uge",
      usageMin: 1,
      usageMax: 14,
      usageDefault: 5,
      usageStep: 1,
    },
  },
];
