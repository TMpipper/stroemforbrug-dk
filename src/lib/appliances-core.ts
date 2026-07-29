import type { ApplianceData } from "./types";

export const APPLIANCES_CORE: ApplianceData[] = [
  {
    slug: "varmepumpe",
    name: "Varmepumpe",
    title: "Varmepumpe strømforbrug 2026 → Se kWh og pris pr. type",
    description: "En varmepumpe bruger 2.000-6.000 kWh/år afhængigt af type. Se præcist forbrug for luft-til-luft, luft-til-vand og jordvarme — og beregn din årlige udgift.",
    heading: "Hvor meget strøm bruger en varmepumpe?",
    quickAnswer: "En varmepumpe bruger typisk mellem 2.000 og 6.000 kWh strøm om året. En luft-til-luft model bruger mindst (2.000-4.000 kWh), mens luft-til-vand bruger mest (4.000-6.000 kWh). Med en gennemsnitspris på 2,50 kr./kWh koster det 5.000-15.000 kr. årligt — men du får 3-4 gange så meget varme ud.",
    kwhRange: [2000, 6000],
    typicalKwh: 4000,
    wattage: 1500,
    standbyWatts: 5,
    energyLabels: [
      { class: "A+++", kwhPerYear: 2200 },
      { class: "A++", kwhPerYear: 3500 },
      { class: "A+", kwhPerYear: 4500 },
      { class: "A", kwhPerYear: 5500 },
    ],
    models: [
      { brand: "Mitsubishi", model: "Ecodan PUZ-WM85", kwh: 3800, energyClass: "A++" },
      { brand: "Vaillant", model: "aroTHERM plus", kwh: 4200, energyClass: "A++" },
      { brand: "Daikin", model: "Altherma 3 H HT", kwh: 4500, energyClass: "A++" },
    ],
    seasonalProfile: [1.8, 1.6, 1.3, 0.9, 0.5, 0.3, 0.2, 0.3, 0.6, 1.0, 1.5, 2.0],
    content: `<h2>Varmepumpe strømforbrug — samlet oversigt</h2>
<p>En varmepumpes strømforbrug afhænger primært af typen, din boligs størrelse og isoleringsgrad. Tabellen nedenfor viser de tre mest populære typer i Danmark og deres typiske årsforbrug for et 130 m² parcelhus med normal isolering.</p>
<table>
<thead><tr><th>Varmepumpe type</th><th>Årligt forbrug</th><th>Årlig pris (2,50 kr./kWh)</th><th>COP-faktor</th></tr></thead>
<tbody>
<tr><td><strong>Luft-til-luft</strong></td><td>2.000-4.000 kWh</td><td>5.000-10.000 kr.</td><td>3,0-4,0</td></tr>
<tr><td><strong>Luft-til-vand</strong></td><td>4.000-6.000 kWh</td><td>10.000-15.000 kr.</td><td>3,0-3,5</td></tr>
<tr><td><strong>Jordvarme</strong></td><td>3.500-5.500 kWh</td><td>8.750-13.750 kr.</td><td>3,5-4,5</td></tr>
</tbody>
</table>
<p><em>COP-faktoren viser effektiviteten: COP 3,5 betyder, at du får 3,5 kWh varme for hver 1 kWh strøm du bruger. Priser beregnet med gennemsnitspris 2,50 kr./kWh inkl. afgifter og transport.</em></p>

<h2>Hvad er COP-faktoren, og hvorfor er den vigtig?</h2>
<p>COP (Coefficient of Performance) er det tal, der gør varmepumper til en af de mest effektive opvarmningsformer i Danmark. En COP på 3,5 betyder, at du for hver 1 kWh strøm får 3,5 kWh varme ud — altså 3,5 gange mere effektivt end en <a href="/elradiator/">elradiator</a>, der giver præcis 1 kWh varme pr. 1 kWh strøm.</p>
<p>COP-faktoren varierer med udetemperaturen. Jo koldere det er, desto lavere COP. Om vinteren (0 til -10°C) falder en luft-til-vand-pumpes COP typisk til 2,5-3,0, mens den om sommeren kan nå 4,0-5,0. Jordvarmepumper har mere stabil COP, da jordtemperaturen er relativt konstant på 8-10°C året rundt.</p>

<h2>Luft-til-luft varmepumpe — forbrug og pris</h2>
<p>En luft-til-luft varmepumpe er den billigste og mest populære type i Danmark med et typisk strømforbrug på 2.000-4.000 kWh om året. Den bruges primært som supplerende opvarmning og kan reducere din varmeregning med 30-50%.</p>
<table>
<thead><tr><th>Boligstørrelse</th><th>Forbrug/år</th><th>Pris/år</th></tr></thead>
<tbody>
<tr><td>50-80 m² (lejlighed)</td><td>1.500-2.500 kWh</td><td>3.750-6.250 kr.</td></tr>
<tr><td>80-130 m² (rækkehus)</td><td>2.500-3.500 kWh</td><td>6.250-8.750 kr.</td></tr>
<tr><td>130-200 m² (parcelhus)</td><td>3.000-4.500 kWh</td><td>7.500-11.250 kr.</td></tr>
</tbody>
</table>

<h2>Luft-til-vand varmepumpe — forbrug og pris</h2>
<p>En luft-til-vand varmepumpe er den mest udbredte type til fuld opvarmning af parcelhuse. Den bruger mere strøm end luft-til-luft (4.000-6.000 kWh/år), men erstatter dit gasfyr eller oliefyr fuldstændigt. Sammenlignet med et gasfyr sparer du typisk 6.000-14.000 kr. om året.</p>
<table>
<thead><tr><th>Boligstørrelse</th><th>Forbrug/år</th><th>Pris/år</th><th>vs. gasfyr besparelse</th></tr></thead>
<tbody>
<tr><td>100 m²</td><td>3.500-4.500 kWh</td><td>8.750-11.250 kr.</td><td>~6.000 kr./år</td></tr>
<tr><td>150 m²</td><td>4.500-5.500 kWh</td><td>11.250-13.750 kr.</td><td>~8.000 kr./år</td></tr>
<tr><td>200 m²</td><td>5.500-7.000 kWh</td><td>13.750-17.500 kr.</td><td>~10.000 kr./år</td></tr>
</tbody>
</table>

<h2>Sæsonvariation — hvornår bruger varmepumpen mest?</h2>
<p>Ca. 70% af varmepumpens strømforbrug ligger i perioden oktober-marts. I december og januar er forbruget typisk 3-4 gange højere end i juni-august, hvor varmepumpen primært bruges til opvarmning af brugsvand.</p>
<ul>
<li><strong>Vinter (dec-feb):</strong> 600-1.200 kWh/md. — varmepumpen arbejder på fuld kraft</li>
<li><strong>Forår/efterår (mar-maj, sep-nov):</strong> 200-500 kWh/md. — moderat behov</li>
<li><strong>Sommer (jun-aug):</strong> 50-150 kWh/md. — kun varmt brugsvand</li>
</ul>

<h2>Hvad påvirker varmepumpens strømforbrug?</h2>
<p>Der er fem hovedfaktorer, der bestemmer hvor meget strøm din varmepumpe bruger. Ved at optimere disse kan du reducere forbruget med op til 20-30% uden at gå på kompromis med komforten.</p>
<ul>
<li><strong>Boligens størrelse</strong> — et 200 m² hus bruger ca. 50% mere end et 120 m² hus</li>
<li><strong>Isolering</strong> — et dårligt isoleret hus kan fordoble forbruget vs. et velisoleret</li>
<li><strong>Termostatindstilling</strong> — hver grad over 20°C øger forbruget ca. 5%</li>
<li><strong>Udetemperatur</strong> — koldere vintre = højere forbrug (COP falder)</li>
<li><strong>Varmepumpens alder og vedligehold</strong> — service hvert 2. år bevarer effektiviteten</li>
</ul>

<h2>Varmepumpe vs. andre opvarmningsformer</h2>
<p>Varmepumpen er den mest økonomiske opvarmningsform i Danmark i 2026, især efter at elafgiften blev sænket markant. Her sammenligner vi den årlige udgift til opvarmning af et typisk 130 m² parcelhus.</p>
<table>
<thead><tr><th>Opvarmning</th><th>Årlig pris (2026)</th><th>CO₂-udledning</th></tr></thead>
<tbody>
<tr><td>Luft-til-vand varmepumpe</td><td>10.000-14.000 kr.</td><td>Lav (grøn strøm)</td></tr>
<tr><td>Jordvarme</td><td>8.000-12.000 kr.</td><td>Lav (grøn strøm)</td></tr>
<tr><td>Gasfyr</td><td>18.000-24.000 kr.</td><td>Høj (fossil)</td></tr>
<tr><td>Oliefyr</td><td>22.000-30.000 kr.</td><td>Meget høj (fossil)</td></tr>
<tr><td><a href="/elradiator/">Elradiatorer</a></td><td>25.000-40.000 kr.</td><td>Lav (grøn strøm)</td></tr>
<tr><td>Fjernvarme</td><td>12.000-18.000 kr.</td><td>Varierer</td></tr>
</tbody>
</table>

<h2>7 tips til at spare på varmepumpens strømforbrug</h2>
<p>Med disse syv konkrete tips kan du reducere din varmepumpes elforbrug med 15-30% — det svarer til 2.000-5.000 kr. sparet om året for en gennemsnitlig husstand.</p>
<ol>
<li><strong>Sænk temperaturen 1-2 grader</strong> — Hver grad sparer ca. 5% på forbruget</li>
<li><strong>Brug nattedsænkning</strong> — Sænk til 18-19°C om natten (men max 2-3 grader, ellers bruger genopvarmning ekstra energi)</li>
<li><strong>Service hvert 2. år</strong> — Rens filtre, tjek kølemiddel og optimer indstillinger</li>
<li><strong>Isolér bedre</strong> — Efterisolering af loft giver ofte den bedste investering</li>
<li><strong>Undgå supplerende elvarme</strong> — Lad varmepumpen klare det meste alene</li>
<li><strong>Kør med lavere fremløbstemperatur</strong> — Gulvvarme kræver kun 30-35°C (vs. 55-70°C for radiatorer)</li>
<li><strong>Udnyt spotpriser</strong> — Med et fleksibelt elselskab kan du lade varmepumpen oplade om natten når strømmen er billigst</li>
</ol>

<h2>Hvad koster det at installere en varmepumpe?</h2>
<p>Ud over strømforbruget er investeringen en vigtig faktor. Prisen afhænger af typen og boligens størrelse. I 2026 er priserne faldet markant sammenlignet med 2022-2023.</p>
<table>
<thead><tr><th>Type</th><th>Pris inkl. installation</th><th>Tilbagebetalingstid</th></tr></thead>
<tbody>
<tr><td>Luft-til-luft</td><td>15.000-35.000 kr.</td><td>2-4 år</td></tr>
<tr><td>Luft-til-vand</td><td>80.000-140.000 kr.</td><td>5-8 år</td></tr>
<tr><td>Jordvarme</td><td>120.000-200.000 kr.</td><td>7-12 år</td></tr>
</tbody>
</table>
<p>Tilbagebetalingstiden er beregnet i forhold til et gasfyr med gasudgifter på 18.000-24.000 kr./år.</p>

<h2>Varmepumpe strømforbrug i døgnet</h2>
<p>Et typisk døgnforbrug for en luft-til-vand varmepumpe i et 130 m² hus varierer kraftigt med årstiden. Om vinteren bruger den 20-30 kWh/døgn (50-75 kr.), mens sommerforbruget kun er 3-5 kWh/døgn (8-13 kr.) til varmt brugsvand.</p>
<p>Fordelingen over døgnet er relativt jævn for <a href="/koeleskab/">apparater der kører 24/7</a>, men varmepumpen arbejder hårdest om morgenen (6-9) når boligen skal varmes op efter nattedsænkning, og om aftenen (17-21) når familien er hjemme.</p>`,
    faqs: [
      { question: "Hvor mange kWh bruger en varmepumpe om året?", answer: "En varmepumpe bruger typisk 2.000-6.000 kWh om året. Luft-til-luft bruger 2.000-4.000 kWh, luft-til-vand bruger 4.000-6.000 kWh, og jordvarme bruger 3.500-5.500 kWh. Det afhænger af boligens størrelse og isolering." },
      { question: "Hvad koster en varmepumpe i strøm om måneden?", answer: "En varmepumpe koster gennemsnitligt 700-1.250 kr./md. i strøm (ved 2,50 kr./kWh). Om vinteren er det 1.500-3.000 kr./md., mens det om sommeren kun er 75-375 kr./md." },
      { question: "Bruger en varmepumpe meget strøm om vinteren?", answer: "Ja, ca. 70% af det årlige forbrug ligger i vinterhalvåret (oktober-marts). I december-januar bruger varmepumpen typisk 600-1.200 kWh pr. måned, svarende til 1.500-3.000 kr." },
      { question: "Er en varmepumpe billigere end gasfyr?", answer: "Ja, markant. En varmepumpe koster typisk 10.000-15.000 kr./år i strøm for et 130 m² hus, mens et gasfyr koster 18.000-24.000 kr./år. Besparelsen er 6.000-14.000 kr. årligt." },
      { question: "Hvad er COP på en varmepumpe?", answer: "COP (Coefficient of Performance) angiver effektiviteten. En COP på 3,5 betyder, at du får 3,5 kWh varme for 1 kWh strøm. Typisk COP er 3,0-4,5 afhængigt af type og udetemperatur." },
      { question: "Hvor meget strøm bruger en luft-til-luft varmepumpe?", answer: "En luft-til-luft varmepumpe bruger typisk 2.000-4.000 kWh om året, svarende til 5.000-10.000 kr. ved 2,50 kr./kWh. Den er billigst i drift, men opvarmer kun luften (ikke brugsvand)." },
      { question: "Kan jeg spare på varmepumpens strømforbrug?", answer: "Ja, du kan spare 15-30% ved at: sænke temperaturen 1-2 grader, bruge nattedsænkning, servicere pumpen hvert 2. år, efterisolere boligen og køre med lavere fremløbstemperatur." },
      { question: "Hvor meget bruger en varmepumpe i standby?", answer: "En varmepumpe bruger typisk 3-8 watt i standby, svarende til 26-70 kWh/år eller 65-175 kr./år. Det er minimalt sammenlignet med driftsforbruget." },
    ],
    relatedSlugs: ["elradiator", "elbil", "koeleskab"],
    sources: [
      { name: "Energistyrelsen — Varmepumper i Danmark", url: "https://ens.dk" },
      { name: "Bolius — Varmepumpe guide" },
      { name: "EU Energy Label regulation" },
    ],
    calculatorConfig: {
      title: "Varmepumpe forbrugsberegner",
      options: [
        { label: "Luft-til-luft (COP 3,5)", kwhPerUse: 8.2 },
        { label: "Luft-til-vand (COP 3,2)", kwhPerUse: 13.7 },
        { label: "Jordvarme (COP 4,0)", kwhPerUse: 12.3 },
      ],
      usageLabel: "Timer i drift pr. dag",
      usageUnit: "timer/dag",
      usageMin: 2,
      usageMax: 24,
      usageDefault: 10,
      usageStep: 1,
    },
  },
  {
    slug: "opvaskemaskine",
    name: "Opvaskemaskine",
    title: "Opvaskemaskine strømforbrug 2026 → Se kWh og pris",
    description: "En opvaskemaskine bruger 150-300 kWh/år. Se strømforbrug pr. vask, sammenlign energimærkninger og beregn din årlige udgift med vores beregner.",
    heading: "Hvor meget strøm bruger en opvaskemaskine?",
    quickAnswer: "En opvaskemaskine bruger typisk 0,8-1,5 kWh pr. vask, svarende til 150-300 kWh om året ved daglig brug. Med en elpris på 2,50 kr./kWh koster det 375-750 kr. årligt. Et eco-program bruger ca. 30% mindre end et normalprogram.",
    kwhRange: [150, 300],
    typicalKwh: 230,
    wattage: 1800,
    standbyWatts: 1,
    energyLabels: [
      { class: "A", kwhPerYear: 150 },
      { class: "B", kwhPerYear: 180 },
      { class: "C", kwhPerYear: 220 },
      { class: "D", kwhPerYear: 270 },
    ],
    models: [
      { brand: "Bosch", model: "SMV6ZCX42E", kwh: 156, energyClass: "A" },
      { brand: "Siemens", model: "SN65ZX07CE", kwh: 165, energyClass: "A" },
      { brand: "Miele", model: "G 7310 SCi", kwh: 176, energyClass: "B" },
    ],
    seasonalProfile: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 1.0, 1.0, 1.0, 1.1],
    content: `<h2>Opvaskemaskine strømforbrug — oversigt</h2>
<p>En opvaskemaskine bruger mellem 0,8 og 1,5 kWh pr. vask afhængigt af model, program og alder. Det svarer til en årlig udgift på 375-750 kr. ved daglig brug og en elpris på 2,50 kr./kWh. Med eco-programmet kan du spare op til 30% strøm pr. vask.</p>
<table>
<thead><tr><th>Program</th><th>kWh pr. vask</th><th>Pris pr. vask</th><th>Temperatur</th></tr></thead>
<tbody>
<tr><td><strong>Eco 50°C</strong></td><td>0,7-0,9 kWh</td><td>1,75-2,25 kr.</td><td>45-50°C</td></tr>
<tr><td><strong>Normal 65°C</strong></td><td>1,0-1,3 kWh</td><td>2,50-3,25 kr.</td><td>60-65°C</td></tr>
<tr><td><strong>Intensiv 70°C</strong></td><td>1,3-1,8 kWh</td><td>3,25-4,50 kr.</td><td>70°C+</td></tr>
<tr><td><strong>Hurtigprogram</strong></td><td>0,8-1,1 kWh</td><td>2,00-2,75 kr.</td><td>55-60°C</td></tr>
</tbody>
</table>

<h2>Eco-program vs. normalprogram — hvad sparer du?</h2>
<p>Eco-programmet er det mest energieffektive valg og bruges til at teste maskinens energimærkning. Det vasker ved lavere temperatur i længere tid, hvilket bruger 25-35% mindre strøm end et normalprogram — selvom det tager 3-4 timer mod normalens 1,5-2 timer.</p>
<p>Over et år med daglig opvask sparer eco-programmet dig typisk 100-150 kr. i strøm. Kombineret med et billigere elselskab er den samlede besparelse endnu større.</p>

<h2>Ny vs. gammel opvaskemaskine — forbrugsforskel</h2>
<p>Har du en opvaskemaskine der er over 10 år gammel, bruger den typisk 30-50% mere strøm end en ny model. Et skifte fra en gammel D-mærket maskine til en ny A-mærket model sparer ca. 100 kWh/år — svarende til 250 kr./år i strøm alene.</p>
<table>
<thead><tr><th>Maskinens alder</th><th>Energimærke</th><th>kWh/år</th><th>Pris/år</th></tr></thead>
<tbody>
<tr><td>0-3 år</td><td>A-B</td><td>150-180 kWh</td><td>375-450 kr.</td></tr>
<tr><td>3-7 år</td><td>C-D</td><td>200-250 kWh</td><td>500-625 kr.</td></tr>
<tr><td>7-12 år</td><td>D-E (gammel skala)</td><td>250-320 kWh</td><td>625-800 kr.</td></tr>
<tr><td>12+ år</td><td>E-G (gammel skala)</td><td>300-400 kWh</td><td>750-1.000 kr.</td></tr>
</tbody>
</table>

<h2>Opvaskemaskine vs. håndopvask — hvad er billigst?</h2>
<p>En moderne opvaskemaskine bruger faktisk mindre vand og energi end håndopvask. Mens en maskine bruger 9-12 liter vand pr. opvask, bruger du typisk 40-60 liter ved håndopvask — plus energi til opvarmning af vandet. Konklusionen er klar: opvaskemaskinen er billigst.</p>
<table>
<thead><tr><th>Metode</th><th>Vand pr. gang</th><th>Energi pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Opvaskemaskine (eco)</td><td>9-12 liter</td><td>0,7-0,9 kWh</td><td>~2,50 kr.</td></tr>
<tr><td>Håndopvask (korrekt)</td><td>40-60 liter</td><td>1,5-2,5 kWh</td><td>~5,00 kr.</td></tr>
</tbody>
</table>

<h2>Standby-forbrug — hvad bruger maskinen når den er slukket?</h2>
<p>De fleste moderne opvaskemaskiner bruger 0,5-2 watt i standby. Det lyder minimalt, men over et helt år svarer det til 4-18 kWh — altså 10-45 kr. I forhold til det samlede forbrug er standby-forbruget under 5%, men det kan stadig betale sig at slukke helt på kontakten hvis maskinen ikke kører dagligt.</p>
<p>Sammenligner du med et <a href="/tv/">tv på standby</a> eller en <a href="/router/">router der kører 24/7</a>, er opvaskemaskinen en af de apparater med lavest standby-forbrug i husstanden.</p>

<h2>5 tips til at spare strøm på opvaskemaskinen</h2>
<p>Med disse fem tips kan du reducere opvaskemaskinens strømforbrug med 20-35% uden at gå på kompromis med rene tallerkener. Det svarer til en besparelse på 75-250 kr. om året.</p>
<ol>
<li><strong>Brug eco-programmet</strong> — det er designet til at bruge mindst mulig energi og vasker lige så rent til daglig brug</li>
<li><strong>Fyld maskinen helt</strong> — en halvfyldt maskine bruger næsten lige så meget som en fuld</li>
<li><strong>Skip skylning</strong> — moderne maskiner og opvaskemidler kræver ikke forskylning</li>
<li><strong>Brug korrekt dosering</strong> — for meget sæbe kræver ekstra skylning</li>
<li><strong>Kør om natten</strong> — med time-for-time afregning er strømmen billigst kl. 0-6</li>
</ol>

<h2>Hvad koster en opvask i strøm?</h2>
<p>En enkelt opvask koster mellem 1,75 og 4,50 kr. i strøm afhængigt af program og maskinens energimærke. Med 365 opvaske om året bliver det samlede strømforbrug den næststørste post efter <a href="/koeleskab/">køleskabet</a> og <a href="/toerretumbler/">tørretumbleren</a> i køkkenet.</p>
<p>Den gode nyhed er, at opvaskemaskinen er et af de apparater med lavest energimærkning — nye modeller med A-mærke bruger under 0,8 kWh pr. vask og er dermed meget økonomiske at køre.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en opvaskemaskine pr. vask?", answer: "En opvaskemaskine bruger 0,8-1,5 kWh pr. vask afhængigt af program. Eco-programmet bruger 0,7-0,9 kWh, normalprogrammet 1,0-1,3 kWh og intensivprogrammet 1,3-1,8 kWh." },
      { question: "Hvad koster det at køre opvaskemaskinen?", answer: "Det koster 1,75-4,50 kr. pr. vask i strøm (ved 2,50 kr./kWh). Med eco-programmet og daglig brug koster det ca. 600-800 kr./år." },
      { question: "Hvor mange kWh bruger en opvaskemaskine om året?", answer: "En moderne opvaskemaskine bruger 150-300 kWh/år ved daglig brug. En ny A-mærket model bruger ca. 150-180 kWh, mens ældre modeller bruger 250-400 kWh." },
      { question: "Er eco-programmet billigere end normalprogrammet?", answer: "Ja, eco-programmet bruger 25-35% mindre strøm. Du sparer ca. 100-150 kr./år ved at bruge eco i stedet for normal — selvom eco-programmet tager længere tid." },
      { question: "Bruger opvaskemaskinen strøm på standby?", answer: "Ja, de fleste opvaskemaskiner bruger 0,5-2 watt i standby, svarende til 4-18 kWh/år (10-45 kr.). Det er minimalt i forhold til driftsforbruget." },
      { question: "Er det billigere at vaske op i hånden?", answer: "Nej, en opvaskemaskine bruger typisk mindre energi og vand end håndopvask. Maskinen bruger 9-12 liter/gang vs. 40-60 liter ved håndopvask." },
      { question: "Hvor gammel skal min opvaskemaskine være før det kan betale sig at skifte?", answer: "Er din maskine over 10 år gammel, bruger den typisk 30-50% mere strøm. En ny A-mærket model sparer ca. 250 kr./år i strøm — så med 10+ års levetid betaler den sig selv hjem." },
      { question: "Hvornår er det billigst at køre opvaskemaskinen?", answer: "Med fleksibel elpris (spotpris) er strømmen billigst om natten kl. 0-6 og dyrest kl. 17-20. Brug maskinens timer-funktion til at starte kl. 2-3 om natten." },
    ],
    relatedSlugs: ["koeleskab", "vaskemaskine", "toerretumbler"],
    sources: [
      { name: "Energistyrelsen — Husholdningsapparater" },
      { name: "EU Energimærkning 2021 (forordning 2019/2022)" },
    ],
    calculatorConfig: {
      title: "Opvaskemaskine forbrugsberegner",
      options: [
        { label: "Eco 50°C (ny A-model)", kwhPerUse: 0.8 },
        { label: "Normal 65°C (ny B-model)", kwhPerUse: 1.1 },
        { label: "Normal 65°C (ældre model)", kwhPerUse: 1.4 },
        { label: "Intensiv 70°C", kwhPerUse: 1.7 },
      ],
      usageLabel: "Antal opvaske pr. uge",
      usageUnit: "pr. uge",
      usageMin: 1,
      usageMax: 14,
      usageDefault: 7,
      usageStep: 1,
    },
  },
  {
    slug: "tv",
    name: "TV",
    title: "TV strømforbrug 2026 → Se hvad dit tv koster i strøm",
    description: "Et tv bruger 50-200 kWh/år afhængigt af størrelse. Se strømforbrug for 43\", 55\" og 65\" tv — og hvad standby koster dig om året.",
    heading: "Hvor meget strøm bruger et tv?",
    quickAnswer: "Et moderne tv bruger typisk 50-200 kWh om året ved 4-5 timers daglig brug. Et 55\" LED-tv bruger ca. 80-100 kWh/år (200-250 kr.), mens et 65\" OLED bruger 130-180 kWh/år (325-450 kr.). Standby koster ekstra 15-50 kr./år.",
    kwhRange: [50, 200],
    typicalKwh: 100,
    wattage: 80,
    standbyWatts: 3,
    energyLabels: [
      { class: "A", kwhPerYear: 55 },
      { class: "B", kwhPerYear: 75 },
      { class: "C", kwhPerYear: 100 },
      { class: "D", kwhPerYear: 130 },
      { class: "E", kwhPerYear: 170 },
    ],
    models: [
      { brand: "Samsung", model: "QE55Q80D (55\")", kwh: 92, energyClass: "C" },
      { brand: "LG", model: "OLED55C4 (55\")", kwh: 108, energyClass: "D" },
      { brand: "Sony", model: "XR-65X90L (65\")", kwh: 145, energyClass: "D" },
    ],
    seasonalProfile: [1.1, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 1.0, 1.0, 1.1, 1.3],
    content: `<h2>TV strømforbrug — hvad bruger dit tv?</h2>
<p>Et moderne tv bruger mellem 50 og 200 kWh strøm om året, afhængigt af størrelse, teknologi og hvor mange timer du ser tv dagligt. Den største faktor er skærmstørrelsen — et 65" tv bruger typisk dobbelt så meget som et 43" tv. OLED-tv'er bruger generelt lidt mere end LED/QLED ved samme størrelse.</p>
<table>
<thead><tr><th>Skærmstørrelse</th><th>Watt (drift)</th><th>kWh/år (4 timer/dag)</th><th>Pris/år (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>32" LED</td><td>25-35 W</td><td>35-50 kWh</td><td>88-125 kr.</td></tr>
<tr><td>43" LED/QLED</td><td>45-65 W</td><td>65-95 kWh</td><td>163-238 kr.</td></tr>
<tr><td>55" LED/QLED</td><td>70-100 W</td><td>100-145 kWh</td><td>250-363 kr.</td></tr>
<tr><td>55" OLED</td><td>80-120 W</td><td>115-175 kWh</td><td>288-438 kr.</td></tr>
<tr><td>65" LED/QLED</td><td>90-130 W</td><td>130-190 kWh</td><td>325-475 kr.</td></tr>
<tr><td>65" OLED</td><td>100-150 W</td><td>145-220 kWh</td><td>363-550 kr.</td></tr>
<tr><td>75" LED/QLED</td><td>120-170 W</td><td>175-250 kWh</td><td>438-625 kr.</td></tr>
</tbody>
</table>

<h2>TV på standby — hvad koster det?</h2>
<p>Et tv på standby bruger typisk 1-5 watt, svarende til 9-44 kWh om året. Det koster 22-110 kr./år — altså ikke alverden, men over 10 år bliver det 220-1.100 kr. for ét apparat. Har du 3-4 tv'er i hjemmet plus tilhørende Apple TV, soundbar og spillekonsol, løber standby-forbruget op.</p>
<table>
<thead><tr><th>Udstyr</th><th>Standby watt</th><th>kWh/år</th><th>Pris/år</th></tr></thead>
<tbody>
<tr><td>Nyt tv (2020+)</td><td>0,5-2 W</td><td>4-18 kWh</td><td>10-45 kr.</td></tr>
<tr><td>Ældre tv (før 2015)</td><td>3-8 W</td><td>26-70 kWh</td><td>65-175 kr.</td></tr>
<tr><td>Soundbar</td><td>2-5 W</td><td>18-44 kWh</td><td>45-110 kr.</td></tr>
<tr><td>Apple TV / Chromecast</td><td>2-4 W</td><td>18-35 kWh</td><td>45-88 kr.</td></tr>
<tr><td>Spillekonsol (PS5/Xbox)</td><td>1-3 W</td><td>9-26 kWh</td><td>23-65 kr.</td></tr>
</tbody>
</table>

<h2>LED vs. OLED vs. QLED — strømforskel</h2>
<p>OLED-tv'er bruger generelt 10-30% mere strøm end LED/QLED ved samme størrelse, fordi hvert pixel lyser individuelt. Dog afhænger det af billedindholdet — mørke scener bruger mindre på OLED end på LED, hvor baggrundslyset altid er tændt.</p>
<p>I praksis er forskellen 20-50 kWh/år, svarende til 50-125 kr. — ikke en afgørende faktor i købsbeslutningen sammenlignet med billedkvaliteten.</p>

<h2>Hvad påvirker tv'ets strømforbrug?</h2>
<p>Disse fem faktorer bestemmer hvad dit tv koster i strøm. Lysstyrke og skærmstørrelse er de to vigtigste parametre — resten er fintuning.</p>
<ul>
<li><strong>Skærmstørrelse</strong> — den absolut største faktor. Hvert trin op i størrelse øger forbruget 30-50%</li>
<li><strong>Lysstyrke</strong> — HDR-peak brightness kan fordoble forbruget momentant</li>
<li><strong>Antal timer</strong> — 6 timer dagligt vs. 3 timer fordobler den årlige udgift</li>
<li><strong>Billedtilstand</strong> — "Vivid/Dynamic" bruger mest, "Cinema/Film" bruger mindst</li>
<li><strong>Streaming vs. broadcast</strong> — streaming bruger også strøm til <a href="/router/">router</a> og set-top-boks</li>
</ul>

<h2>Tips til at spare strøm på tv'et</h2>
<p>Du kan spare 20-40% på tv'ets strømforbrug med disse enkle justeringer. For de fleste familier svarer det til 50-150 kr. om året — mest for dem med store tv'er.</p>
<ol>
<li><strong>Sænk lysstyrken</strong> — de fleste tv'er leveres med for høj lysstyrke. Sænk til 50-70% for normalt rum</li>
<li><strong>Brug eco-tilstand</strong> — de fleste Samsung og LG-tv'er har en strømbesparende billedtilstand</li>
<li><strong>Sluk helt (ikke standby)</strong> — brug en stikdåse med afbryder til hele underholdningscenteret</li>
<li><strong>Aktivér auto-sluk</strong> — mange tv'er kan slukke automatisk efter inaktivitet</li>
<li><strong>Vælg 55" i stedet for 65"</strong> — ved køb af nyt tv sparer du 30-40% strøm</li>
</ol>

<h2>TV strømforbrug i timen</h2>
<p>Et typisk 55" tv bruger 70-120 watt i timen (0,07-0,12 kWh). Det koster 18-30 øre pr. time ved 2,50 kr./kWh. Sammenligner du med andre aktiviteter i hjemmet, er tv-kigning en af de billigste — en <a href="/ovn/">ovn på 200 grader</a> bruger 10 gange så meget pr. time.</p>

<h2>Hvor meget strøm bruger et tv om måneden?</h2>
<p>Ved 4 timers daglig brug bruger et 55" tv ca. 8-12 kWh pr. måned, svarende til 20-30 kr. Et 65" tv bruger 11-16 kWh/md. (28-40 kr.). Med familiens samlede tv-tid (inkl. børnenes skærme) kan det totale tv-relaterede forbrug nå 30-50 kWh/md. inklusive tilhørende streaming-enheder og <a href="/computer/">computere</a>.</p>`,
    faqs: [
      { question: "Hvor mange kWh bruger et tv om året?", answer: "Et typisk 55\" tv bruger 80-145 kWh/år ved 4 timers daglig brug. Et 43\" bruger 65-95 kWh, og et 65\" bruger 130-220 kWh afhængigt af teknologi (LED/OLED)." },
      { question: "Hvad koster det at have tv'et tændt i timen?", answer: "Et 55\" tv koster ca. 18-30 øre pr. time i strøm (0,07-0,12 kWh × 2,50 kr.). Et 65\" tv koster ca. 23-38 øre pr. time." },
      { question: "Bruger et tv meget strøm på standby?", answer: "Nye tv'er (2020+) bruger 0,5-2 watt i standby, svarende til 10-45 kr./år. Ældre tv'er kan bruge op til 8 watt (175 kr./år). Sluk på kontakten for at spare." },
      { question: "Bruger OLED mere strøm end LED?", answer: "Ja, OLED bruger typisk 10-30% mere end LED/QLED ved samme størrelse. Forskellen er ca. 20-50 kWh/år (50-125 kr.), men varierer med billedindhold." },
      { question: "Hvor meget strøm bruger et 65\" tv?", answer: "Et 65\" LED/QLED-tv bruger ca. 90-130 watt i drift og 130-190 kWh/år (325-475 kr.) ved 4 timers daglig brug. Et 65\" OLED bruger 145-220 kWh/år." },
      { question: "Hvad bruger mest strøm — tv eller computer?", answer: "En stationær gaming-pc bruger typisk 2-3 gange så meget som et tv (200-500W vs. 70-150W). En laptop bruger dog mindre end de fleste tv'er (30-65W)." },
      { question: "Kan jeg spare strøm ved at sænke lysstyrken?", answer: "Ja, lysstyrke er den næststørste faktor efter skærmstørrelse. Sænker du fra 100% til 60% kan du spare 15-25% strøm." },
      { question: "Hvor meget strøm bruger Netflix/streaming?", answer: "Streaming bruger ingen ekstra strøm på selve tv'et. Men din router (5-12W) og evt. Apple TV/Chromecast (2-5W) bruger også strøm — tilsammen ca. 30-50 kWh/år ekstra." },
    ],
    relatedSlugs: ["computer", "router", "koeleskab"],
    sources: [
      { name: "EU Energy Label for Electronic Displays (2021)" },
      { name: "Elsparefondens test af tv-apparater" },
    ],
    calculatorConfig: {
      title: "TV forbrugsberegner",
      options: [
        { label: "32\" LED", kwhPerUse: 0.03 },
        { label: "43\" LED/QLED", kwhPerUse: 0.055 },
        { label: "55\" LED/QLED", kwhPerUse: 0.085 },
        { label: "55\" OLED", kwhPerUse: 0.1 },
        { label: "65\" LED/QLED", kwhPerUse: 0.11 },
        { label: "65\" OLED", kwhPerUse: 0.13 },
        { label: "75\" LED/QLED", kwhPerUse: 0.145 },
      ],
      usageLabel: "Timer tv dagligt",
      usageUnit: "timer/dag",
      usageMin: 1,
      usageMax: 12,
      usageDefault: 4,
      usageStep: 1,
    },
  },
  {
    slug: "koeleskab",
    name: "Køleskab",
    title: "Køleskab strømforbrug 2026 → Se kWh og årlig pris",
    description: "Et køleskab bruger 100-400 kWh/år og kører 24/7. Se forbrug for køle/fryseskab, amerikanerkøleskab og vinkøleskab — og hvornår det kan betale sig at skifte.",
    heading: "Hvor meget strøm bruger et køleskab?",
    quickAnswer: "Et køleskab bruger typisk 100-400 kWh strøm om året — det kører 24 timer i døgnet, 365 dage om året. Et nyt A-mærket køleskab bruger ca. 100-130 kWh/år (250-325 kr.), mens et 15+ år gammelt køleskab let bruger 350-500 kWh/år (875-1.250 kr.).",
    kwhRange: [100, 400],
    typicalKwh: 200,
    wattage: 100,
    standbyWatts: 0,
    energyLabels: [
      { class: "A", kwhPerYear: 100 },
      { class: "B", kwhPerYear: 130 },
      { class: "C", kwhPerYear: 170 },
      { class: "D", kwhPerYear: 220 },
      { class: "E", kwhPerYear: 280 },
    ],
    models: [
      { brand: "Bosch", model: "KGN39AIAT", kwh: 114, energyClass: "A" },
      { brand: "Samsung", model: "RB38C7B6AS9", kwh: 126, energyClass: "A" },
      { brand: "Liebherr", model: "CNsfd 5743", kwh: 135, energyClass: "B" },
    ],
    seasonalProfile: [0.9, 0.9, 0.9, 1.0, 1.0, 1.1, 1.2, 1.2, 1.1, 1.0, 0.9, 0.8],
    content: `<h2>Køleskab strømforbrug — det skal du vide</h2>
<p>Køleskabet er det apparat i dit hjem der bruger mest strøm over tid, fordi det kører 24 timer i døgnet, 365 dage om året. Et typisk køle/fryseskab bruger 100-280 kWh/år (250-700 kr.), mens et amerikanerkøleskab bruger 200-400 kWh/år (500-1.000 kr.). Alderen er den afgørende faktor — et 20 år gammelt køleskab bruger ofte 3 gange så meget som et nyt.</p>
<table>
<thead><tr><th>Type køleskab</th><th>kWh/år (nyt)</th><th>kWh/år (10+ år)</th><th>Pris/år (nyt)</th></tr></thead>
<tbody>
<tr><td>Køleskab uden fryser</td><td>70-110 kWh</td><td>150-250 kWh</td><td>175-275 kr.</td></tr>
<tr><td>Køle/fryseskab (standard)</td><td>100-170 kWh</td><td>250-400 kWh</td><td>250-425 kr.</td></tr>
<tr><td>Amerikanerkøleskab (side-by-side)</td><td>200-300 kWh</td><td>350-500 kWh</td><td>500-750 kr.</td></tr>
<tr><td><a href="/fryser/">Kummefryser</a> (separat)</td><td>120-200 kWh</td><td>250-400 kWh</td><td>300-500 kr.</td></tr>
</tbody>
</table>

<h2>Gammelt vs. nyt køleskab — er det værd at skifte?</h2>
<p>Et 15-20 år gammelt køleskab bruger typisk 350-500 kWh om året, mens et nyt A-mærket model bruger 100-130 kWh. Forskellen er 220-370 kWh/år — svarende til 550-925 kr./år i strøm. Over køleskabets levetid (15-20 år) sparer du 8.000-18.000 kr. ved at skifte nu.</p>
<table>
<thead><tr><th>Køleskabets alder</th><th>Typisk forbrug</th><th>Årlig pris</th><th>Besparelse vs. nyt</th></tr></thead>
<tbody>
<tr><td>0-5 år (A-B)</td><td>100-170 kWh</td><td>250-425 kr.</td><td>—</td></tr>
<tr><td>5-10 år (C-D)</td><td>170-280 kWh</td><td>425-700 kr.</td><td>175-275 kr./år</td></tr>
<tr><td>10-15 år</td><td>280-400 kWh</td><td>700-1.000 kr.</td><td>450-575 kr./år</td></tr>
<tr><td>15-20 år</td><td>350-500 kWh</td><td>875-1.250 kr.</td><td>625-825 kr./år</td></tr>
<tr><td>20+ år</td><td>400-600 kWh</td><td>1.000-1.500 kr.</td><td>750-1.075 kr./år</td></tr>
</tbody>
</table>

<h2>Sæsonvariation — bruger køleskabet mere om sommeren?</h2>
<p>Ja, køleskabet bruger 10-25% mere strøm om sommeren end om vinteren. Det skyldes den højere omgivelsestemperatur — kompressoren skal arbejde hårdere for at holde de 4-5°C i køleskabet og -18°C i fryseren. I juni-august kan forbruget stige med 2-5 kWh/md. ekstra.</p>
<p>Placering betyder også meget: et køleskab der står ved siden af ovnen eller i direkte sollys bruger op til 20% mere end et der står køligt. Sørg for mindst 5 cm luft bag køleskabet til ventilation.</p>

<h2>Watt-forbrug i køleskabet — hvad trækker kompressoren?</h2>
<p>Et køleskab trækker ikke strøm konstant. Kompressoren kører i cyklusser: den starter, køler ned, og slukker igen. Et typisk nyt køleskab trækker 80-150 watt når kompressoren kører, men den kører kun 30-50% af tiden. Det gennemsnitlige forbrug er derfor kun 11-23 watt (0,27-0,55 kWh/døgn).</p>

<h2>Køleskab strømforbrug i watt og kWh pr. døgn</h2>
<p>For at beregne dit køleskabs daglige forbrug skal du kende den gennemsnitlige effekt. Her er typiske værdier for forskellige typer køleskabe, beregnet som gennemsnit over et helt døgn.</p>
<table>
<thead><tr><th>Type</th><th>Gns. watt (24h)</th><th>kWh/døgn</th><th>Kr./døgn</th></tr></thead>
<tbody>
<tr><td>Køleskab alene (nyt)</td><td>8-13 W</td><td>0,19-0,30 kWh</td><td>0,48-0,75 kr.</td></tr>
<tr><td>Køle/fryseskab (nyt)</td><td>12-20 W</td><td>0,27-0,47 kWh</td><td>0,68-1,18 kr.</td></tr>
<tr><td>Amerikanerkøleskab (nyt)</td><td>23-35 W</td><td>0,55-0,82 kWh</td><td>1,37-2,05 kr.</td></tr>
<tr><td>Køle/fryseskab (gammelt)</td><td>30-55 W</td><td>0,68-1,37 kWh</td><td>1,71-3,42 kr.</td></tr>
</tbody>
</table>

<h2>Tips til at reducere køleskabets strømforbrug</h2>
<p>Køleskabet kan du ikke slukke, men du kan optimere dets drift og spare 10-20% på det årlige forbrug — svarende til 25-85 kr./år for et nyt køleskab og 100-250 kr./år for et ældre.</p>
<ol>
<li><strong>Indstil korrekt temperatur</strong> — 4-5°C i køleskabet, -18°C i fryseren. Hver grad koldere øger forbruget 5%</li>
<li><strong>Hold tætningslisten ren</strong> — en utæt dør kan øge forbruget 10-20%</li>
<li><strong>Afrim fryseren regelmæssigt</strong> — 5mm is på væggene øger forbruget op til 30%</li>
<li><strong>Lad ikke mad afkøle i køleskabet</strong> — sæt varme rester i vinduet først</li>
<li><strong>Placér køligt</strong> — mindst 5 cm luft bag, væk fra <a href="/ovn/">ovn</a> og direkte sol</li>
<li><strong>Fyld køleskabet</strong> — et halvtomt køleskab bruger mere end et fyldt (varme stiger hurtigere i luft end i mad)</li>
</ol>

<h2>Hvad koster et køleskab i strøm over 10 år?</h2>
<p>Over et køleskabs typiske levetid (15-20 år) bruger du mere på strøm end selve køleskabet kostede at købe. Et nyt A-mærket køle/fryseskab til 5.000-8.000 kr. bruger strøm for ca. 3.500-6.500 kr. over 15 år. Et billigt D-mærket køleskab til 3.000 kr. bruger derimod strøm for 8.000-14.000 kr. i samme periode.</p>
<p>Konklusion: det kan altid betale sig at vælge et energieffektivt køleskab, selvom det koster mere i indkøb. Du tjener merudgiften hjem på 3-5 år i sparede strømudgifter — og køleskabet holder i 15+ år. Se også vores guide til <a href="/opvaskemaskine/">opvaskemaskine strømforbrug</a> for lignende beregninger.</p>`,
    faqs: [
      { question: "Hvor mange kWh bruger et køleskab om året?", answer: "Et nyt køle/fryseskab bruger 100-170 kWh/år. Et 10+ år gammelt bruger 250-400 kWh/år. Et amerikanerkøleskab bruger 200-400 kWh/år." },
      { question: "Hvad koster et køleskab i strøm om måneden?", answer: "Et nyt køleskab koster ca. 21-35 kr./md. i strøm (ved 2,50 kr./kWh). Et gammelt køleskab kan koste 58-100+ kr./md." },
      { question: "Bruger et køleskab strøm hele tiden?", answer: "Køleskabet er tilsluttet 24/7, men kompressoren kører kun 30-50% af tiden. Den gennemsnitlige effekt er 11-35 watt afhængigt af model og alder." },
      { question: "Hvornår skal jeg skifte køleskab?", answer: "Er dit køleskab over 15 år gammelt, bruger det typisk 3x mere strøm end et nyt. Skiftet sparer 550-925 kr./år i strøm og tjener sig hjem på 3-5 år." },
      { question: "Bruger køleskabet mere strøm om sommeren?", answer: "Ja, 10-25% mere pga. højere omgivelsestemperatur. Placér køleskabet køligt og væk fra ovn/sol for at minimere ekstraforbruget." },
      { question: "Hvor mange watt bruger et køleskab?", answer: "Kompressoren trækker 80-150 watt når den kører, men gennemsnittet over døgnet er kun 11-35 watt fordi den kører i cyklusser." },
      { question: "Er amerikanerkøleskab dyrere i drift?", answer: "Ja, et amerikanerkøleskab bruger ca. dobbelt så meget som et standard køle/fryseskab — typisk 200-400 kWh/år (500-1.000 kr.) vs. 100-170 kWh/år." },
      { question: "Hvad koster et køleskab i strøm over 10 år?", answer: "Et nyt A-mærket køleskab koster ca. 2.500-4.250 kr. i strøm over 10 år. Et gammelt køleskab koster 6.250-10.000 kr. Besparelsen ved at skifte er 3.750-5.750 kr. over 10 år." },
    ],
    relatedSlugs: ["fryser", "opvaskemaskine", "vaskemaskine"],
    sources: [
      { name: "Energistyrelsen — Køleskabe og frysere" },
      { name: "EU Energimærkning (forordning 2019/2016)" },
      { name: "Bolius — Test af køle/fryseskabe" },
    ],
    calculatorConfig: {
      title: "Køleskab forbrugsberegner",
      options: [
        { label: "Køleskab alene (nyt, A-mærket)", kwhPerUse: 0.34 },
        { label: "Køle/fryseskab (nyt, A-B)", kwhPerUse: 0.45 },
        { label: "Køle/fryseskab (5-10 år, C-D)", kwhPerUse: 0.7 },
        { label: "Amerikanerkøleskab (nyt)", kwhPerUse: 0.75 },
        { label: "Køle/fryseskab (15+ år, gammelt)", kwhPerUse: 1.1 },
      ],
      usageLabel: "Timer tændt pr. dag",
      usageUnit: "timer/dag",
      usageMin: 24,
      usageMax: 24,
      usageDefault: 24,
      usageStep: 1,
    },
  },
  {
    slug: "toerretumbler",
    name: "Tørretumbler",
    title: "Tørretumbler strømforbrug 2026 → Se kWh pr. tørring",
    description: "En tørretumbler bruger 1,5-5,0 kWh pr. tørring. Se forskel på varmepumpe, kondens og aftræk — og beregn din årlige strømudgift.",
    heading: "Hvor meget strøm bruger en tørretumbler?",
    quickAnswer: "En tørretumbler bruger 1,5-5,0 kWh pr. tørring afhængigt af type. En moderne varmepumpetumbler (A+++) bruger kun 1,5-2,0 kWh, mens en gammel aftrækstumbler bruger 4,0-5,0 kWh. Med 3 tørringer/uge koster det 585-1.950 kr./år.",
    kwhRange: [200, 750],
    typicalKwh: 350,
    wattage: 2500,
    standbyWatts: 1,
    energyLabels: [
      { class: "A+++", kwhPerYear: 175 },
      { class: "A++", kwhPerYear: 235 },
      { class: "A+", kwhPerYear: 280 },
      { class: "B", kwhPerYear: 500 },
      { class: "C", kwhPerYear: 650 },
    ],
    models: [
      { brand: "Miele", model: "TEJ675 WP", kwh: 171, energyClass: "A+++" },
      { brand: "Bosch", model: "WQG233D2BY", kwh: 194, energyClass: "A+++" },
      { brand: "Samsung", model: "DV90T8240SH", kwh: 211, energyClass: "A+++" },
    ],
    seasonalProfile: [1.2, 1.2, 1.1, 1.0, 0.8, 0.7, 0.6, 0.7, 0.9, 1.1, 1.3, 1.4],
    content: `<h2>Tørretumbler strømforbrug — oversigt pr. type</h2>
<p>Tørretumbleren er et af hjemmets mest strømkrævende apparater — men forskellen mellem typerne er enorm. En moderne varmepumpetumbler bruger under halvdelen af strømmen sammenlignet med en gammel kondenstumbler. Hvis du har en tumbler der er over 8-10 år gammel, kan et skifte spare dig 500-1.000 kr./år i strøm.</p>
<table>
<thead><tr><th>Type tørretumbler</th><th>kWh pr. tørring</th><th>Pris pr. tørring</th><th>Pris/år (3×/uge)</th></tr></thead>
<tbody>
<tr><td><strong>Varmepumpe (A+++)</strong></td><td>1,5-2,0 kWh</td><td>3,75-5,00 kr.</td><td>585-780 kr.</td></tr>
<tr><td><strong>Varmepumpe (A+)</strong></td><td>2,0-2,5 kWh</td><td>5,00-6,25 kr.</td><td>780-975 kr.</td></tr>
<tr><td><strong>Kondenstumbler (B)</strong></td><td>3,0-3,8 kWh</td><td>7,50-9,50 kr.</td><td>1.170-1.482 kr.</td></tr>
<tr><td><strong>Aftrækstumbler (C)</strong></td><td>3,5-4,5 kWh</td><td>8,75-11,25 kr.</td><td>1.365-1.755 kr.</td></tr>
<tr><td><strong>Gammel model (10+ år)</strong></td><td>4,0-5,5 kWh</td><td>10,00-13,75 kr.</td><td>1.560-2.145 kr.</td></tr>
</tbody>
</table>

<h2>Varmepumpetumbler vs. kondenstumbler — besparelse</h2>
<p>Forskellen mellem en varmepumpetumbler og en gammel kondenstumbler er dramatisk. En varmepumpe genbruger varmen i processen, mens en kondenstumbler bare udleder den. Ved 3 tørringer om ugen sparer varmepumpemodellen dig 600-1.200 kr./år i strøm — merudgiften ved køb (2.000-4.000 kr.) er tjent hjem på 2-4 år.</p>

<h2>Gammel tørretumbler — hvad koster den virkelig?</h2>
<p>En gammel tørretumbler (10+ år, C-mærket) er en af de dyreste strømslugere i hjemmet. Med 3 tørringer om ugen bruger den ca. 625-860 kWh/år — over dobbelt så meget som en ny varmepumpemodel. Over 5 år koster forskellen 3.000-6.000 kr. i strøm alene.</p>
<p>Har du en gammel tumbler? Overvej at skifte nu — nye varmepumpetumblere fås fra 4.000-5.000 kr. og betaler sig selv hjem på 3-4 år i sparede strømudgifter.</p>

<h2>Sæsonvariation — hvornår bruger du tumbleren mest?</h2>
<p>Tørretumblerens forbrug varierer kraftigt med årstiden. Om sommeren (juni-august) bruger de fleste familier tumbleren sjældnere, fordi tøjet tørrer udenfor. Om vinteren (november-februar) kan forbruget fordobles, da alt tøj skal i tumbleren. En typisk dansk familie bruger tumbleren 1-2 gange/uge om sommeren og 4-6 gange/uge om vinteren.</p>

<h2>Tips til at spare strøm på tørretumbleren</h2>
<p>Disse tips kan reducere dit årlige tørretumblerforbrug med 20-40%, svarende til 150-500 kr./år afhængigt af din nuværende model. Centrifugeringshastigheden i <a href="/vaskemaskine/">vaskemaskinen</a> er overraskende vigtig.</p>
<ol>
<li><strong>Centrifugér på max i vaskemaskinen</strong> — 1.400 omdr./min. fjerner langt mere vand end 1.000 omdr. og forkorter tørretiden 20-30%</li>
<li><strong>Fyld tumbleren korrekt</strong> — ikke overfyldt (tørrer dårligt) men heller ikke halvtom (spilder energi)</li>
<li><strong>Brug fugtighedssensor</strong> — stop tumbleren når tøjet er tørt i stedet for at køre på tid</li>
<li><strong>Rens filteret efter hver tørring</strong> — et tilstoppet filter øger tørretiden og forbruget 10-15%</li>
<li><strong>Tør udendørs om sommeren</strong> — helt gratis og skåner tøjet</li>
<li><strong>Opdel tøj efter tykkelse</strong> — tungt og tyndt tøj sammen giver ujævn tørring og længere tid</li>
</ol>

<h2>Tørretumbler vs. tørresnor — hvad sparer du?</h2>
<p>En tørresnor koster 0 kr. i strøm. Med 3 tørringer/uge à 2 kWh sparer du ca. 780 kr./år ved at tørre udendørs. Om vinteren er det dog ikke altid praktisk i Danmark, og mange lejligheder har ikke mulighed for udendørs tørring. En god kombination er tumbler om vinteren + tørresnor om sommeren, hvilket halverer det årlige forbrug.</p>

<h2>Hvad koster en tørring i strøm?</h2>
<p>En enkelt tørring koster mellem 3,75 og 13,75 kr. i strøm afhængigt af maskinens type og alder. Tørringstype (bomuldstør, skabstør, strygetør) påvirker også — bomuldstør bruger 15-20% mere end skabstør, da tøjet skal være helt tørt. Sammenligner du med <a href="/opvaskemaskine/">opvaskemaskinen</a> (1,75-4,50 kr./gang), er tumbleren klart det dyrere apparat at køre.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en tørretumbler pr. tørring?", answer: "En varmepumpetumbler (A+++) bruger 1,5-2,0 kWh pr. tørring. En kondenstumbler (B) bruger 3,0-3,8 kWh, og en gammel model bruger 4,0-5,5 kWh." },
      { question: "Hvad koster det at køre tørretumbleren?", answer: "Det koster 3,75-13,75 kr. pr. tørring afhængigt af type. En ny varmepumpemodel koster ca. 4-5 kr., mens en gammel model koster 10-14 kr. pr. gang." },
      { question: "Bruger en gammel tørretumbler meget strøm?", answer: "Ja, en 10+ år gammel tumbler bruger typisk 4-5,5 kWh pr. tørring — over dobbelt så meget som en ny varmepumpemodel. Det koster 600-1.200 kr./år ekstra." },
      { question: "Er en varmepumpetumbler billigere i drift?", answer: "Ja, markant. En varmepumpetumbler bruger 40-60% mindre strøm end en kondenstumbler — besparelsen er 600-1.200 kr./år ved 3 tørringer/uge." },
      { question: "Hvor mange kWh bruger en tørretumbler om året?", answer: "Med 3 tørringer/uge: varmepumpe (A+++) ca. 235-310 kWh/år, kondenstumbler (B) ca. 470-590 kWh/år, gammel model 625-860 kWh/år." },
      { question: "Hvornår kan det betale sig at skifte tørretumbler?", answer: "Er din tumbler 8+ år gammel og C-mærket eller dårligere, sparer du 600-1.200 kr./år ved at skifte. En ny varmepumpemodel (4.000-6.000 kr.) tjener sig hjem på 3-5 år." },
      { question: "Bruger tørretumbleren strøm på standby?", answer: "Ja, ca. 0,5-2 watt i standby — svarende til 4-18 kWh/år (10-45 kr.). Det er minimalt i forhold til driftsforbruget." },
      { question: "Hvad bruger mest strøm — vaskemaskine eller tørretumbler?", answer: "Tørretumbleren bruger 3-5 gange mere strøm end vaskemaskinen. En vask koster ca. 1-2 kr. i strøm, mens en tørring koster 4-14 kr." },
    ],
    relatedSlugs: ["vaskemaskine", "opvaskemaskine", "koeleskab"],
    sources: [
      { name: "EU Energimærkning for tørretumblere (2019/2014)" },
      { name: "Energistyrelsen — Tørretumblere" },
    ],
    calculatorConfig: {
      title: "Tørretumbler forbrugsberegner",
      options: [
        { label: "Varmepumpe (A+++)", kwhPerUse: 1.7 },
        { label: "Varmepumpe (A+)", kwhPerUse: 2.2 },
        { label: "Kondenstumbler (B)", kwhPerUse: 3.5 },
        { label: "Aftrækstumbler (C)", kwhPerUse: 4.0 },
        { label: "Gammel model (10+ år)", kwhPerUse: 4.8 },
      ],
      usageLabel: "Antal tørringer pr. uge",
      usageUnit: "pr. uge",
      usageMin: 1,
      usageMax: 10,
      usageDefault: 3,
      usageStep: 1,
    },
  },
];
