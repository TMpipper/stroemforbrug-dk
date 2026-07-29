import type { ApplianceData } from "./types";

export const APPLIANCES_PHASE2B: ApplianceData[] = [
  {
    slug: "laptop",
    name: "Laptop",
    title: "Laptop strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en laptop? Se typisk elforbrug i kWh, sammenlign modeller og beregn din årlige udgift. Opdateret med danske 2026-priser.",
    heading: "Hvor meget strøm bruger en laptop?",
    quickAnswer:
      "En typisk laptop bruger mellem 15 og 80 kWh om året afhængigt af model og brug. Det svarer til en årlig elregning på 38–200 kr. ved 2,50 kr./kWh. Laptops er langt mere energieffektive end stationære computere og bruger typisk 30–65 watt under normal brug.",
    kwhRange: [15, 80],
    typicalKwh: 40,
    wattage: 50,
    standbyWatts: 0.5,
    energyLabels: [
      { class: "A", kwhPerYear: 15 },
      { class: "B", kwhPerYear: 30 },
      { class: "C", kwhPerYear: 50 },
      { class: "D", kwhPerYear: 75 },
    ],
    models: [
      { brand: "Apple", model: "MacBook Air M3", kwh: 18, energyClass: "A" },
      { brand: "Lenovo", model: "ThinkPad X1 Carbon Gen 12", kwh: 35, energyClass: "B" },
      { brand: "ASUS", model: "ROG Zephyrus G16 (2024)", kwh: 72, energyClass: "D" },
    ],
    seasonalProfile: [1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.9, 0.9, 1.0, 1.1, 1.1, 1.1],
    content: `<h2>Laptoppens strømforbrug i overblik</h2>
<p>En laptop er et af de mest energieffektive elektroniske apparater i hjemmet. Selv ved daglig brug i 6–8 timer bruger en gennemsnitlig laptop kun 15–80 kWh om året, hvilket gør den markant billigere i drift end en stationær computer. I denne guide gennemgår vi det faktiske energiforbrug for forskellige laptoptyper, sammenligner populære modeller og giver dig konkrete tips til at reducere elforbruget.</p>

<h2>Hvor mange kWh bruger en laptop om året?</h2>
<p>En laptop bruger typisk 15–80 kWh årligt afhængigt af processortype, skærmstørrelse, brug og ladevaner. En ultrabook til kontorarbejde ligger i den lave ende, mens en gaming-laptop med dedikeret grafikkort kan bruge 60–80 kWh. Forbruget svarer til en årlig udgift på 38–200 kr. ved en elpris på 2,50 kr./kWh.</p>

<table>
<thead><tr><th>Laptoptype</th><th>Typisk wattforbrug</th><th>Daglig brug</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Ultrabook (kontorarbejde)</td><td>15–30 W</td><td>6 timer</td><td>15–30 kWh</td><td>38–75 kr.</td></tr>
<tr><td>Standard laptop</td><td>30–50 W</td><td>6 timer</td><td>30–55 kWh</td><td>75–138 kr.</td></tr>
<tr><td>Gaming-laptop</td><td>80–180 W</td><td>4 timer</td><td>60–80 kWh</td><td>150–200 kr.</td></tr>
<tr><td>Workstation-laptop</td><td>60–120 W</td><td>8 timer</td><td>50–70 kWh</td><td>125–175 kr.</td></tr>
</tbody>
</table>

<h2>Laptop vs. stationær computer – energiforbrug</h2>
<p>En stationær computer bruger typisk 3–5 gange mere strøm end en laptop med tilsvarende ydelse. Det skyldes laptoppens optimerede komponenter, der er designet til at køre på batteri. Skifter du fra stationær til laptop, kan du spare 200–600 kr. om året på elregningen.</p>

<table>
<thead><tr><th>Enhed</th><th>Typisk wattforbrug</th><th>Årligt kWh (6 t/dag)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Laptop (kontorarbejde)</td><td>30 W</td><td>35 kWh</td><td>88 kr.</td></tr>
<tr><td>Stationær PC + skærm</td><td>150 W</td><td>165 kWh</td><td>413 kr.</td></tr>
<tr><td>Gaming-laptop</td><td>120 W</td><td>70 kWh</td><td>175 kr.</td></tr>
<tr><td>Gaming-PC + skærm</td><td>400 W</td><td>290 kWh</td><td>725 kr.</td></tr>
</tbody>
</table>

<p>Læs mere om <a href="/computer/">stationær computers strømforbrug</a> for en detaljeret sammenligning.</p>

<h2>Populære laptopmodeller og deres elforbrug</h2>
<p>Der er stor forskel på elforbruget mellem forskellige laptopmodeller. Apple Silicon-chips (M-serien) er blandt de mest energieffektive, mens high-end gaming-laptops med NVIDIA-grafikkort bruger markant mere. Her er en oversigt over populære modeller i Danmark.</p>

<table>
<thead><tr><th>Model</th><th>Processor</th><th>Typisk forbrug</th><th>kWh/år (6 t/dag)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>MacBook Air M3</td><td>Apple M3</td><td>10–25 W</td><td>18 kWh</td><td>45 kr.</td></tr>
<tr><td>Lenovo ThinkPad X1 Carbon</td><td>Intel Core Ultra 7</td><td>20–45 W</td><td>35 kWh</td><td>88 kr.</td></tr>
<tr><td>ASUS ROG Zephyrus G16</td><td>Intel + RTX 4070</td><td>60–180 W</td><td>72 kWh</td><td>180 kr.</td></tr>
<tr><td>HP Spectre x360 14</td><td>Intel Core Ultra 5</td><td>15–35 W</td><td>28 kWh</td><td>70 kr.</td></tr>
</tbody>
</table>

<h2>Standbyforbrug og ladervaner</h2>
<p>En laptop i dvale bruger typisk 0,5–2 watt, mens en oplader der sidder i stikkontakten uden laptop trækker 0,1–0,5 watt. Det årlige standbyforbrug er under 5 kWh. Lader du laptppen natten over (8 timer), bruger du mere strøm end nødvendigt – de fleste laptops er fuldt opladet på 1,5–3 timer.</p>

<table>
<thead><tr><th>Tilstand</th><th>Wattforbrug</th><th>Timer/dag</th><th>Årligt kWh</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Aktiv brug</td><td>30–50 W</td><td>6</td><td>33–55 kWh</td><td>83–138 kr.</td></tr>
<tr><td>Dvale/sleep</td><td>0,5–2 W</td><td>16</td><td>3–12 kWh</td><td>7–30 kr.</td></tr>
<tr><td>Slukket (lader tilsluttet)</td><td>0,1–0,5 W</td><td>24</td><td>0,9–4,4 kWh</td><td>2–11 kr.</td></tr>
<tr><td>Oplader uden laptop</td><td>0,1–0,3 W</td><td>24</td><td>0,9–2,6 kWh</td><td>2–7 kr.</td></tr>
</tbody>
</table>

<h2>Hvad påvirker laptoppens strømforbrug?</h2>
<p>Flere faktorer afgør, hvor mange kWh din laptop bruger. Processortypen er den vigtigste, men også skærmens lysstyrke, antal åbne programmer og tilsluttet periferiudstyr spiller en rolle.</p>

<ul>
<li><strong>Processor:</strong> ARM-baserede chips (Apple M-serien) bruger 30–50 % mindre end Intel/AMD-baserede.</li>
<li><strong>Grafikkort:</strong> En dedikeret GPU (NVIDIA/AMD) kan tredoble wattforbruget under belastning.</li>
<li><strong>Skærmens lysstyrke:</strong> 100 % lysstyrke bruger 20–30 % mere end 50 %. Aktiver automatisk lysstyrke.</li>
<li><strong>Antal åbne programmer:</strong> Tunge programmer (videoredigering, spil) øger CPU-belastningen markant.</li>
<li><strong>WiFi og Bluetooth:</strong> Trådløse forbindelser bruger 1–3 W ekstra. Slå fra, når de ikke bruges.</li>
<li><strong>Ekstern skærm:</strong> En tilsluttet ekstern skærm øger laptoppens forbrug med 5–15 W via USB-C/HDMI.</li>
</ul>

<h2>Sådan reducerer du laptoppens strømforbrug</h2>
<p>Du kan reducere din laptops elforbrug med 20–40 % ved at ændre et par enkle indstillinger og vaner. De fleste tiltag påvirker ikke din oplevelse eller ydelse mærkbart.</p>

<ul>
<li><strong>Aktivér strømsparetilstand:</strong> Reducerer CPU-hastigheden og skærmens lysstyrke automatisk.</li>
<li><strong>Reducer skærmens lysstyrke:</strong> Sæt den til 50–60 % indendørs – det sparer 15–25 % energi.</li>
<li><strong>Luk unødvendige programmer:</strong> Programmer i baggrunden bruger CPU-tid og dermed strøm.</li>
<li><strong>Undgå overnatoplading:</strong> Tag laderen ud, når batteriet er fuldt – det sparer unødvendigt energiforbrug.</li>
<li><strong>Brug den integrerede GPU:</strong> Indstil tunge applikationer til at bruge den dedikerede GPU, resten den integrerede.</li>
</ul>

<p>En laptop er i forvejen et af hjemmets mindst strømkrævende apparater. Sammenlign med <a href="/tv/">tv'ets strømforbrug</a> eller <a href="/router/">routerens elforbrug</a> for at få perspektiv på dit samlede elektronikforbrug.</p>

<h2>Laptoppens strømforbrug over året</h2>
<p>Laptoppens elforbrug er relativt stabilt hen over året. I vintermånederne ses en lille stigning på 5–10 %, da mange bruger laptppen mere indendørs. Om sommeren falder forbruget tilsvarende, da mere tid bruges udendørs. Arbejder du hjemmefra, er forbruget mere jævnt fordelt.</p>

<h2>Ofte stillede spørgsmål om laptoppens strømforbrug</h2>
<p>Her er svar på de mest almindelige spørgsmål om laptoppens energiforbrug baseret på danske forbrugeres søgninger.</p>`,
    faqs: [
      { question: "Hvor meget koster det at lade en laptop op?", answer: "En fuld opladning koster typisk 0,10–0,25 kr. afhængigt af batteriets størrelse (50–100 Wh). Ved daglig opladning bliver det 36–91 kr. om året." },
      { question: "Bruger en laptop strøm, når den er slukket?", answer: "Ja, hvis laderen sidder i stikkontakten, trækker den 0,1–0,5 watt. Det koster under 5 kr. om året, men du kan spare det ved at tage laderen ud." },
      { question: "Hvad bruger mest strøm på en laptop?", answer: "Skærmen og processoren er de to største strømforbrugere. En dedikeret GPU kan dog overhale begge under gaming eller videoredigering." },
      { question: "Bruger en gaming-laptop meget strøm?", answer: "Ja, en gaming-laptop kan bruge 80–180 watt under spil, svarende til 60–80 kWh om året ved 4 timers daglig brug – ca. 150–200 kr." },
      { question: "Er det billigere at bruge laptop end stationær PC?", answer: "Ja, en laptop bruger typisk 3–5 gange mindre strøm end en stationær PC med skærm. Du sparer 200–600 kr. om året ved at skifte." },
      { question: "Bruger en MacBook mindre strøm end en Windows-laptop?", answer: "Generelt ja. Apple Silicon-chips (M1–M3) er meget energieffektive og bruger 30–50 % mindre end tilsvarende Intel/AMD-processer." },
      { question: "Hvor mange watt bruger en laptop under opladning?", answer: "En standard laptop-oplader er typisk 45–65 W, gaming-laptops 120–240 W. Den faktiske effekt varierer med batteriets ladeniveau." },
      { question: "Skal man tage laderen ud, når batteriet er fuldt?", answer: "Moderne laptops stopper automatisk opladningen ved 100 %. Men laderen trækker stadig 0,5–2 W i standby, så tag den ud for at spare lidt strøm og forlænge batteriets levetid." },
    ],
    relatedSlugs: ["computer", "tv", "router"],
    sources: [
      { name: "Energistyrelsen – Elektronik og elforbrug", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Forbrugerguide", url: "https://sparenergi.dk" },
      { name: "EU Energy Star-specifikationer for computere" },
    ],
    calculatorConfig: {
      title: "Beregn din laptops strømforbrug",
      options: [
        { label: "Ultrabook (15–30 W)", kwhPerUse: 0.02 },
        { label: "Standard laptop (30–50 W)", kwhPerUse: 0.04 },
        { label: "Gaming-laptop (80–180 W)", kwhPerUse: 0.12 },
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
    slug: "playstation",
    name: "PlayStation",
    title: "PlayStation strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en PlayStation? Se elforbrug for PS5 og PS4 i kWh, sammenlign tilstande og beregn din årlige udgift. Opdateret 2026-data.",
    heading: "Hvor meget strøm bruger en PlayStation?",
    quickAnswer:
      "En PlayStation 5 bruger typisk 100–200 kWh om året ved 3–4 timers daglig brug. Det svarer til 250–500 kr. årligt ved 2,50 kr./kWh. Under gaming trækker en PS5 ca. 100–200 watt, mens standbyforbruget er 1–3 watt afhængigt af indstillinger.",
    kwhRange: [60, 200],
    typicalKwh: 130,
    wattage: 150,
    standbyWatts: 1.5,
    energyLabels: [],
    models: [
      { brand: "Sony", model: "PlayStation 5 (Slim)", kwh: 120 },
      { brand: "Sony", model: "PlayStation 5 Digital Edition", kwh: 105 },
      { brand: "Sony", model: "PlayStation 4 Pro", kwh: 140 },
    ],
    seasonalProfile: [1.1, 1.1, 1.0, 0.9, 0.8, 0.8, 0.9, 0.9, 1.0, 1.1, 1.2, 1.2],
    content: `<h2>PlayStations strømforbrug i overblik</h2>
<p>En PlayStation er en af de mest strømkrævende former for underholdningselektronik i hjemmet. Med et forbrug på 100–200 watt under gaming og et standby-forbrug der kan løbe op, er det vigtigt at forstå, hvad din konsol koster i drift. I denne guide gennemgår vi det faktiske energiforbrug for PS5 og PS4, sammenligner tilstande og giver dig konkrete sparetips.</p>

<h2>Hvor mange kWh bruger en PlayStation om året?</h2>
<p>En PlayStation 5 bruger typisk 60–200 kWh årligt afhængigt af, hvor meget du spiller, og hvilke tilstande konsollen bruger mest tid i. Ved 3 timers daglig gaming og 21 timers standby/rest mode ligger det typiske årsforbrug på 120–150 kWh svarende til 300–375 kr.</p>

<table>
<thead><tr><th>Brugsscenarie</th><th>Timer gaming/dag</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Let brug (casual)</td><td>1–2 timer</td><td>60–90 kWh</td><td>150–225 kr.</td></tr>
<tr><td>Moderat brug</td><td>3–4 timer</td><td>120–160 kWh</td><td>300–400 kr.</td></tr>
<tr><td>Hardcore gamer</td><td>5–8 timer</td><td>170–250 kWh</td><td>425–625 kr.</td></tr>
</tbody>
</table>

<h2>Strømforbrug i forskellige tilstande</h2>
<p>PlayStations elforbrug varierer enormt mellem tilstandene. Under gaming bruger en PS5 op til 200 watt, mens den i rest mode kun trækker 1–3 watt. Streaming af video bruger omkring halvdelen af gaming-forbruget. Det er vigtigt at kende forskellen for at optimere dit elforbrug.</p>

<table>
<thead><tr><th>Tilstand</th><th>PS5 (watt)</th><th>PS5 Digital (watt)</th><th>PS4 Pro (watt)</th></tr></thead>
<tbody>
<tr><td>Gaming (krævende spil)</td><td>180–200 W</td><td>150–175 W</td><td>140–165 W</td></tr>
<tr><td>Gaming (lette spil)</td><td>80–120 W</td><td>70–100 W</td><td>80–110 W</td></tr>
<tr><td>Streaming (Netflix/Disney+)</td><td>40–60 W</td><td>35–55 W</td><td>70–90 W</td></tr>
<tr><td>Menu/dashboard</td><td>50–70 W</td><td>45–65 W</td><td>75–95 W</td></tr>
<tr><td>Rest mode (USB-opladning til)</td><td>2–3 W</td><td>2–3 W</td><td>3–8 W</td></tr>
<tr><td>Rest mode (USB-opladning fra)</td><td>1–1,5 W</td><td>1–1,5 W</td><td>3–5 W</td></tr>
<tr><td>Helt slukket</td><td>0,3–0,5 W</td><td>0,3–0,5 W</td><td>0,3–0,5 W</td></tr>
</tbody>
</table>

<h2>PS5 vs. PS4 – hvad bruger mest strøm?</h2>
<p>PS5 bruger overraskende nok ikke nødvendigvis mere strøm end PS4 Pro i alle tilfælde. Under gaming bruger PS5 mere ved krævende spil, men den er markant mere effektiv til streaming og i rest mode. Samlet set kan en PS5 faktisk bruge færre kWh end en PS4 Pro, hvis du bruger konsollen meget til streaming.</p>

<table>
<thead><tr><th>Aktivitet</th><th>PS5 kWh/år</th><th>PS4 Pro kWh/år</th><th>Forskel</th></tr></thead>
<tbody>
<tr><td>3 t gaming/dag</td><td>95–110 kWh</td><td>85–100 kWh</td><td>PS5 bruger lidt mere</td></tr>
<tr><td>2 t streaming/dag</td><td>18–22 kWh</td><td>25–33 kWh</td><td>PS5 sparer 25–35 %</td></tr>
<tr><td>Standby 20 t/dag</td><td>7–11 kWh</td><td>22–58 kWh</td><td>PS5 sparer op til 80 %</td></tr>
</tbody>
</table>

<h2>Standbyforbrug og rest mode</h2>
<p>Rest mode er en af de største skjulte strømtyve på en PlayStation. En PS4 Pro i rest mode med USB-opladning bruger op til 8 watt – det er 70 kWh om året bare i standby. PS5 er markant bedre med kun 1–3 watt. Sluk altid konsollen helt, hvis du ikke bruger downloadfunktionen i rest mode.</p>

<p>Sammenlignet med andre elektroniske apparater som <a href="/tv/">tv'et</a> eller <a href="/router/">routeren</a> er PlayStations standbyforbrug relativt højt, især for ældre modeller.</p>

<h2>PlayStation som medieafspiller – strømforbrug</h2>
<p>Mange bruger PlayStation til streaming af Netflix, HBO Max og Disney+. Til dette formål er konsollen ikke den mest energieffektive løsning – et Smart TV eller en Chromecast bruger kun 5–15 watt mod PlayStations 40–90 watt til samme opgave.</p>

<table>
<thead><tr><th>Streamingenhed</th><th>Watt ved streaming</th><th>Årligt kWh (2 t/dag)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Chromecast/Apple TV</td><td>3–8 W</td><td>2–6 kWh</td><td>5–15 kr.</td></tr>
<tr><td>Smart TV (indbygget)</td><td>60–100 W</td><td>44–73 kWh</td><td>110–183 kr.</td></tr>
<tr><td>PlayStation 5</td><td>40–60 W</td><td>29–44 kWh</td><td>73–110 kr.</td></tr>
<tr><td>PlayStation 4 Pro</td><td>70–90 W</td><td>51–66 kWh</td><td>128–165 kr.</td></tr>
</tbody>
</table>

<h2>Sådan reducerer du PlayStations strømforbrug</h2>
<p>Du kan spare 50–100 kr. om året ved at optimere dine indstillinger og vaner. Her er de mest effektive tiltag.</p>

<ul>
<li><strong>Sluk helt i stedet for rest mode:</strong> Spar 5–60 kWh om året afhængigt af model og rest mode-indstillinger.</li>
<li><strong>Deaktivér USB-opladning i rest mode:</strong> Reducerer rest mode-forbruget med 30–50 %.</li>
<li><strong>Sæt automatisk slukning:</strong> Indstil konsollen til at slukke efter 1–2 timers inaktivitet.</li>
<li><strong>Brug Smart TV til streaming:</strong> Dit tv bruger allerede strøm – brug dets indbyggede apps i stedet for PlayStation.</li>
<li><strong>Opdatér firmware:</strong> Sony optimerer løbende strømforbruget via softwareopdateringer.</li>
</ul>

<h2>Sæsonvariation i gaming-forbrug</h2>
<p>PlayStations elforbrug følger et tydeligt sæsonmønster. I vintermånederne (november–februar) stiger forbruget med 10–20 % pga. længere mørke aftener indendørs og store spiludgivelser i juleperioden. Om sommeren falder forbruget tilsvarende, da folk bruger mere tid udendørs.</p>

<h2>Ofte stillede spørgsmål om PlayStations strømforbrug</h2>
<p>Her er svar på de mest almindelige spørgsmål om PlayStations energiforbrug baseret på danske gameres søgninger.</p>`,
    faqs: [
      { question: "Hvor meget koster det at game på PlayStation i timen?", answer: "Med et forbrug på ca. 150 watt koster en times gaming på PS5 ca. 0,38 kr. ved en elpris på 2,50 kr./kWh. Over en hel aften (4 timer) bliver det ca. 1,50 kr." },
      { question: "Bruger PS5 mere strøm end PS4?", answer: "Under krævende spil ja – PS5 bruger op til 200 W mod PS4 Pros 165 W. Men PS5 er markant mere effektiv i rest mode og til streaming." },
      { question: "Hvad koster det at have PlayStation i rest mode?", answer: "PS5 i rest mode koster 2–7 kr. om året. PS4 Pro kan koste op til 50–145 kr. om året i rest mode med USB-opladning aktiveret." },
      { question: "Bruger PlayStation strøm, når den er slukket?", answer: "Ja, selv helt slukket trækker den 0,3–0,5 watt. Det koster under 4 kr. om året og er praktisk talt ubemærkeligt." },
      { question: "Er det billigere at spille på PlayStation end på gaming-PC?", answer: "Ja, en PS5 bruger typisk 150–200 W mod en gaming-PC's 300–500 W. Du sparer ca. 200–400 kr. om året i strøm." },
      { question: "Hvor meget strøm bruger en PlayStation om måneden?", answer: "Ved 3 timers daglig brug bruger en PS5 ca. 10–14 kWh om måneden, svarende til 25–35 kr." },
      { question: "Bruger PlayStation mere strøm med 4K eller HDR?", answer: "Ja, 4K-gaming øger GPU-belastningen og dermed strømforbruget med 10–25 % sammenlignet med 1080p." },
      { question: "Skal man slukke PlayStation helt eller bruge rest mode?", answer: "Helt sluk sparer mest strøm. Brug kun rest mode, hvis du har brug for download af spil/opdateringer natten over." },
    ],
    relatedSlugs: ["tv", "computer", "router"],
    sources: [
      { name: "Sony – PlayStation 5 tekniske specifikationer", url: "https://www.playstation.com" },
      { name: "Eurogamer – PS5 Power Consumption Tests" },
      { name: "Energistyrelsen – Elektronik og standby", url: "https://ens.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din PlayStations strømforbrug",
      options: [
        { label: "PS5 (gaming)", kwhPerUse: 0.15 },
        { label: "PS5 Digital (gaming)", kwhPerUse: 0.13 },
        { label: "PS4 Pro (gaming)", kwhPerUse: 0.14 },
      ],
      usageLabel: "Timer gaming pr. dag",
      usageUnit: "timer/dag",
      usageMin: 1,
      usageMax: 12,
      usageDefault: 3,
      usageStep: 1,
    },
  },
  {
    slug: "robotstoevsuger",
    name: "Robotstøvsuger",
    title: "Robotstøvsuger strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en robotstøvsuger? Se elforbrug i kWh, sammenlign modeller og beregn din årlige udgift. Opdateret med 2026-elpriser.",
    heading: "Hvor meget strøm bruger en robotstøvsuger?",
    quickAnswer:
      "En robotstøvsuger bruger typisk 20–50 kWh om året ved daglig kørsel. Det svarer til en årlig udgift på kun 50–125 kr. ved 2,50 kr./kWh. Robotstøvsugere er markant mere energieffektive end traditionelle støvsugere med et effektforbrug på 25–70 watt under rengøring.",
    kwhRange: [15, 50],
    typicalKwh: 30,
    wattage: 40,
    standbyWatts: 3,
    energyLabels: [],
    models: [
      { brand: "iRobot", model: "Roomba j7+", kwh: 28 },
      { brand: "Roborock", model: "S8 MaxV Ultra", kwh: 35 },
      { brand: "Ecovacs", model: "Deebot X2 Omni", kwh: 32 },
    ],
    seasonalProfile: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    content: `<h2>Robotstøvsugerens strømforbrug i overblik</h2>
<p>En robotstøvsuger er et af de mest energieffektive rengøringsapparater, du kan eje. Med et typisk effektforbrug på blot 25–70 watt under kørsel og en daglig rengøringstid på 1–2 timer bruger den en brøkdel af, hvad en traditionel støvsuger koster i drift. I denne guide gennemgår vi det faktiske energiforbrug, sammenligner modeller og beregner de reelle driftsomkostninger.</p>

<h2>Hvor mange kWh bruger en robotstøvsuger om året?</h2>
<p>En robotstøvsuger bruger typisk 15–50 kWh årligt afhængigt af model, boligens størrelse og hvor ofte den kører. Det inkluderer både selve rengøringen og ladestationens standby-forbrug. Ladestationen alene bruger typisk 3–5 watt døgnet rundt, hvilket udgør en væsentlig del af det samlede forbrug.</p>

<table>
<thead><tr><th>Boligstørrelse</th><th>Rengøringstid/dag</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Lejlighed (60 m²)</td><td>45 min</td><td>18–25 kWh</td><td>45–63 kr.</td></tr>
<tr><td>Rækkehus (100 m²)</td><td>75 min</td><td>25–35 kWh</td><td>63–88 kr.</td></tr>
<tr><td>Villa (150+ m²)</td><td>90–120 min</td><td>35–50 kWh</td><td>88–125 kr.</td></tr>
</tbody>
</table>

<h2>Robotstøvsuger vs. traditionel støvsuger</h2>
<p>En traditionel støvsuger bruger typisk 700–2.000 watt under brug – det er 15–50 gange mere end en robotstøvsuger. Selvom du kun støvsuger manuelt 2–3 gange om ugen i 30 minutter, bruger den traditionelle støvsuger markant mere energi samlet set. Robotstøvsugeren vinder klart på energieffektivitet.</p>

<table>
<thead><tr><th>Støvsugertype</th><th>Wattforbrug</th><th>Ugentlig brug</th><th>Årligt kWh</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Robotstøvsuger</td><td>25–70 W</td><td>Daglig (1 t)</td><td>20–35 kWh</td><td>50–88 kr.</td></tr>
<tr><td>Traditionel med pose</td><td>700–1.400 W</td><td>3x30 min</td><td>55–110 kWh</td><td>138–275 kr.</td></tr>
<tr><td>Traditionel uden pose</td><td>800–2.000 W</td><td>3x30 min</td><td>62–156 kWh</td><td>155–390 kr.</td></tr>
<tr><td>Ledningsfri stavstøvsuger</td><td>100–500 W</td><td>3x20 min</td><td>16–78 kWh</td><td>40–195 kr.</td></tr>
</tbody>
</table>

<p>Læs mere om <a href="/stoevsuger/">traditionelle støvsugeres strømforbrug</a> for en detaljeret sammenligning.</p>

<h2>Populære robotstøvsugermodeller og elforbrug</h2>
<p>De mest populære robotstøvsugere i Danmark varierer fra simple modeller med begrænset sugestyrke til avancerede modeller med selvtømning og moppefunktion. Effektforbruget stiger med sugestyrken, men de avancerede modeller har ofte smartere navigation, der reducerer rengøringstiden.</p>

<table>
<thead><tr><th>Model</th><th>Sugeeffekt (W)</th><th>Funktioner</th><th>kWh/år (daglig brug)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>iRobot Roomba j7+</td><td>30 W</td><td>Selvtømning, Smart Map</td><td>28 kWh</td><td>70 kr.</td></tr>
<tr><td>Roborock S8 MaxV Ultra</td><td>55 W</td><td>Moppe, selvtømning, AI</td><td>35 kWh</td><td>88 kr.</td></tr>
<tr><td>Ecovacs Deebot X2 Omni</td><td>45 W</td><td>Moppe, selvtømning, LiDAR</td><td>32 kWh</td><td>80 kr.</td></tr>
<tr><td>Dreame L20 Ultra</td><td>50 W</td><td>Moppe, varmtvandsrens</td><td>38 kWh</td><td>95 kr.</td></tr>
</tbody>
</table>

<h2>Ladestationens standby-forbrug</h2>
<p>Det skjulte strømforbrug ved en robotstøvsuger er ladestationen. Den står tilsluttet døgnet rundt og trækker typisk 3–5 watt – selv når robotten ikke lader. Over et år bliver det 26–44 kWh, hvilket faktisk kan udgøre mere end halvdelen af det samlede forbrug. Modeller med selvtømningsstation bruger op til 8–12 watt i standby.</p>

<table>
<thead><tr><th>Stationstype</th><th>Standby (watt)</th><th>Årligt standby-kWh</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Simpel ladestation</td><td>2–4 W</td><td>18–35 kWh</td><td>45–88 kr.</td></tr>
<tr><td>Selvtømningsstation</td><td>4–8 W</td><td>35–70 kWh</td><td>88–175 kr.</td></tr>
<tr><td>Alt-i-en station (moppe + tømning)</td><td>5–12 W</td><td>44–105 kWh</td><td>110–263 kr.</td></tr>
</tbody>
</table>

<h2>Hvad påvirker robotstøvsugerens elforbrug?</h2>
<p>Flere faktorer spiller ind på, hvor mange kWh din robotstøvsuger bruger. Her er de vigtigste parametre og deres indvirkning på det samlede forbrug.</p>

<ul>
<li><strong>Sugestyrke:</strong> Turbo-tilstand bruger 30–50 % mere energi end standard-tilstand.</li>
<li><strong>Boligens størrelse:</strong> Større bolig = længere rengøringstid = højere forbrug.</li>
<li><strong>Tæpper vs. hårde gulve:</strong> Tæpper kræver højere sugestyrke og dermed mere energi.</li>
<li><strong>Navigation:</strong> LiDAR-baserede modeller rengør mere effektivt og bruger mindre tid end tilfældig-navigation.</li>
<li><strong>Moppefunktion:</strong> Modeller med moppe bruger ekstra energi til vandopvarmning og vibration.</li>
<li><strong>Rengøringsfrekvens:</strong> Daglig kørsel giver jævnt forbrug, mens sjældnere kørsel kræver længere sessioner.</li>
</ul>

<h2>Sådan reducerer du robotstøvsugerens strømforbrug</h2>
<p>Selvom en robotstøvsuger allerede er energieffektiv, kan du optimere forbruget yderligere med disse enkle tiltag.</p>

<ul>
<li><strong>Brug standard-tilstand:</strong> Turbo-tilstand er sjældent nødvendig til daglig vedligeholdelse.</li>
<li><strong>Indstil zoner:</strong> Lad robotten kun rengøre de rum, der har brug for det, i stedet for hele boligen.</li>
<li><strong>Sluk ladestationen ved ferie:</strong> Spar standbyforbruget, når robotten ikke bruges i længere perioder.</li>
<li><strong>Ryd gulvet:</strong> Færre forhindringer = hurtigere rengøring = lavere forbrug.</li>
<li><strong>Vedligehold regelmæssigt:</strong> Rene børster og filtre sikrer optimal sugestyrke uden ekstra energiforbrug.</li>
</ul>

<h2>Robotstøvsugerens forbrug over året</h2>
<p>Robotstøvsugerens elforbrug er meget stabilt hen over året. Der er ingen sæsonvariation som ved opvarmnings- eller køleapparater. Forbruget er primært bestemt af dine rengøringsvaner, som typisk er ensartede året rundt. Eventuelle udsving skyldes ferie og ændrede vaner.</p>

<h2>Ofte stillede spørgsmål om robotstøvsugerens strømforbrug</h2>
<p>Her finder du svar på de hyppigste spørgsmål om robotstøvsugeres energiforbrug.</p>`,
    faqs: [
      { question: "Hvor meget koster det at køre en robotstøvsuger dagligt?", answer: "En daglig rengøring koster typisk 5–15 øre i strøm for selve rengøringen. Ladestationens standby koster dog yderligere 12–30 øre pr. dag." },
      { question: "Bruger en robotstøvsuger mere strøm end en normal støvsuger?", answer: "Nej, markant mindre. En robotstøvsuger bruger 25–70 W mod en traditionel støvsugers 700–2.000 W. Årligt bruger robotten 20–50 kWh mod 55–156 kWh." },
      { question: "Hvor meget strøm bruger ladestationen i standby?", answer: "En simpel ladestation bruger 2–4 W i standby, en selvtømningsstation 4–8 W. Det bliver 18–70 kWh om året – ofte mere end selve rengøringen." },
      { question: "Skal man slukke ladestationen om natten?", answer: "Det er ikke nødvendigt, men du kan spare 45–175 kr. om året ved at sætte ladestationen på en timer, der kun giver strøm i rengøringstiden." },
      { question: "Hvor mange kWh bruger en Roomba om måneden?", answer: "En iRobot Roomba bruger typisk 2–4 kWh om måneden inklusiv ladestationens standby, svarende til 5–10 kr." },
      { question: "Bruger turbo-tilstand meget mere strøm?", answer: "Ja, turbo-tilstand øger effektforbruget med 30–50 % og forkorter batteritiden. Brug kun turbo på tæpper med dyrehår." },
      { question: "Hvad bruger mest strøm – robotten eller ladestationen?", answer: "Overraskende nok kan ladestationens standby-forbrug udgøre 50–70 % af det samlede årlige elforbrug, især for modeller med selvtømning." },
      { question: "Er en robotstøvsuger en god investering rent energimæssigt?", answer: "Ja, du sparer typisk 50–200 kr. om året i strøm sammenlignet med en traditionel støvsuger – plus tiden du sparer på manuel rengøring." },
    ],
    relatedSlugs: ["stoevsuger", "robotplaeneklipper", "vaskemaskine"],
    sources: [
      { name: "Energistyrelsen – Husholdningsapparater", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Rengøringsapparater", url: "https://sparenergi.dk" },
      { name: "iRobot – Roomba tekniske specifikationer" },
    ],
    calculatorConfig: {
      title: "Beregn din robotstøvsugers strømforbrug",
      options: [
        { label: "Simpel model (25 W)", kwhPerUse: 0.025 },
        { label: "Mellem model (40 W)", kwhPerUse: 0.04 },
        { label: "Premium model med moppe (55 W)", kwhPerUse: 0.055 },
      ],
      usageLabel: "Rengøringer pr. uge",
      usageUnit: "gange/uge",
      usageMin: 1,
      usageMax: 14,
      usageDefault: 7,
      usageStep: 1,
    },
  },
  {
    slug: "elkedel",
    name: "Elkedel",
    title: "Elkedel strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en elkedel? Se elforbrug pr. kogning i kWh, sammenlign modeller og beregn din årlige udgift. Opdateret 2026-priser.",
    heading: "Hvor meget strøm bruger en elkedel?",
    quickAnswer:
      "En typisk elkedel bruger 2.000–3.000 watt og forbruger 0,10–0,15 kWh pr. kogning af 1 liter vand. Ved 3–4 daglige kogninger svarer det til 110–220 kWh om året og en årlig udgift på 275–550 kr. ved 2,50 kr./kWh. Elkedlen er det mest energieffektive redskab til at koge vand.",
    kwhRange: [70, 220],
    typicalKwh: 140,
    wattage: 2200,
    standbyWatts: 0.5,
    energyLabels: [],
    models: [
      { brand: "Bosch", model: "TWK8613P DesignLine", kwh: 130 },
      { brand: "Russell Hobbs", model: "Colours Plus 20415-70", kwh: 145 },
      { brand: "KitchenAid", model: "Artisan 5KEK1522", kwh: 160 },
    ],
    seasonalProfile: [1.1, 1.1, 1.0, 1.0, 0.9, 0.8, 0.8, 0.8, 0.9, 1.0, 1.1, 1.2],
    content: `<h2>Elkedlens strømforbrug i overblik</h2>
<p>Elkedlen er et af de mest brugte køkkenapparater i danske hjem og samtidig et af de mest effektive til at koge vand. Med et typisk effektforbrug på 2.000–3.000 watt kan den koge 1 liter vand på blot 2–4 minutter. I denne guide gennemgår vi det faktiske kWh-forbrug, sammenligner elkedler med alternativer og giver dig tips til at minimere dit elforbrug.</p>

<h2>Hvor mange kWh bruger en elkedel om året?</h2>
<p>En elkedel bruger typisk 70–220 kWh om året afhængigt af, hvor ofte du koger vand, og hvor meget du koger ad gangen. En gennemsnitlig dansk husstand koger vand 3–4 gange dagligt og bruger ca. 140 kWh årligt. Det svarer til en årlig udgift på 350 kr. ved en elpris på 2,50 kr./kWh.</p>

<table>
<thead><tr><th>Forbrug</th><th>Kogninger/dag</th><th>Liter/kogning</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Let (1 person)</td><td>1–2</td><td>0,5 L</td><td>35–70 kWh</td><td>88–175 kr.</td></tr>
<tr><td>Moderat (2 personer)</td><td>3–4</td><td>0,75 L</td><td>100–160 kWh</td><td>250–400 kr.</td></tr>
<tr><td>Højt (familie)</td><td>5–7</td><td>1,0 L</td><td>160–260 kWh</td><td>400–650 kr.</td></tr>
</tbody>
</table>

<h2>Hvad koster én kogning?</h2>
<p>Prisen pr. kogning afhænger af vandmængden og elkedlens effekt. En typisk kogning af 1 liter vand med en 2.200 W elkedel tager ca. 3,5 minutter og bruger 0,13 kWh, hvilket koster ca. 33 øre. En kop te koster altså blot 8–10 øre i strøm.</p>

<table>
<thead><tr><th>Vandmængde</th><th>Kogetid (2.200 W)</th><th>kWh pr. kogning</th><th>Pris pr. kogning</th></tr></thead>
<tbody>
<tr><td>250 ml (1 kop)</td><td>55 sek.</td><td>0,034 kWh</td><td>0,08 kr.</td></tr>
<tr><td>500 ml (2 kopper)</td><td>1 min 50 sek.</td><td>0,067 kWh</td><td>0,17 kr.</td></tr>
<tr><td>750 ml (3 kopper)</td><td>2 min 40 sek.</td><td>0,098 kWh</td><td>0,25 kr.</td></tr>
<tr><td>1,0 L (4 kopper)</td><td>3 min 30 sek.</td><td>0,128 kWh</td><td>0,32 kr.</td></tr>
<tr><td>1,5 L (fuld kedel)</td><td>5 min 15 sek.</td><td>0,193 kWh</td><td>0,48 kr.</td></tr>
</tbody>
</table>

<h2>Elkedel vs. komfur vs. Quooker</h2>
<p>Elkedlen er det mest energieffektive redskab til at koge vand. En gryde på komfuret bruger 50–100 % mere energi pga. varmetab, mens en Quooker har et konstant standby-forbrug. Den eneste situation, hvor en Quooker kan betale sig energimæssigt, er ved mange små portioner vand i løbet af dagen.</p>

<table>
<thead><tr><th>Metode</th><th>kWh for 1 L kogende vand</th><th>Tid</th><th>Pris pr. liter</th></tr></thead>
<tbody>
<tr><td>Elkedel (2.200 W)</td><td>0,13 kWh</td><td>3,5 min</td><td>0,32 kr.</td></tr>
<tr><td>Induktionskomfur</td><td>0,15 kWh</td><td>4–5 min</td><td>0,38 kr.</td></tr>
<tr><td>Gaskomfur</td><td>0,21 kWh (ækvivalent)</td><td>6–8 min</td><td>0,25 kr. (gas)</td></tr>
<tr><td>Keramisk komfur</td><td>0,20 kWh</td><td>7–9 min</td><td>0,50 kr.</td></tr>
<tr><td>Quooker (standby + brug)</td><td>0,03 kWh (brug) + standby</td><td>Instant</td><td>Se standby</td></tr>
</tbody>
</table>

<p>Læs mere om <a href="/quooker/">Quookerens strømforbrug</a> og <a href="/induktion/">induktionskomfurets elforbrug</a> for detaljerede sammenligninger.</p>

<h2>Populære elkedler og deres energiforbrug</h2>
<p>De mest solgte elkedler i Danmark varierer i effekt fra 1.850 til 3.000 watt. Højere watttal betyder hurtigere kogning, men ikke nødvendigvis højere samlet energiforbrug – den bruger bare energien over kortere tid. Temperaturregulering og isolering kan dog gøre en reel forskel.</p>

<table>
<thead><tr><th>Model</th><th>Effekt (W)</th><th>Kapacitet</th><th>Kogetid 1 L</th><th>kWh/år (3 kogninger/dag)</th></tr></thead>
<tbody>
<tr><td>Bosch TWK8613P</td><td>2.400 W</td><td>1,5 L</td><td>3 min</td><td>130 kWh</td></tr>
<tr><td>Russell Hobbs 20415-70</td><td>2.200 W</td><td>1,7 L</td><td>3,5 min</td><td>145 kWh</td></tr>
<tr><td>KitchenAid 5KEK1522</td><td>2.400 W</td><td>1,5 L</td><td>3 min</td><td>160 kWh</td></tr>
<tr><td>Philips HD9350/90</td><td>2.200 W</td><td>1,7 L</td><td>3,5 min</td><td>135 kWh</td></tr>
</tbody>
</table>

<h2>Hvad påvirker elkedlens strømforbrug?</h2>
<p>Flere faktorer afgør, hvor mange kWh din elkedel bruger om året. De vigtigste er vandmængden pr. kogning og antallet af daglige kogninger.</p>

<ul>
<li><strong>Vandmængde:</strong> Kog kun den mængde, du har brug for. At koge 1,5 L når du kun skal bruge 0,5 L tredobler forbruget.</li>
<li><strong>Kalkaflejringer:</strong> Et lag kalk i kedlen reducerer varmeoverførslen og kan øge kogetiden med 10–20 %.</li>
<li><strong>Effekt (watt):</strong> Højere effekt = hurtigere kogning, men det samlede kWh-forbrug er næsten det samme.</li>
<li><strong>Isolering:</strong> Dobbeltvæggede elkedler holder vandet varmt længere og reducerer behovet for gen-kogning.</li>
<li><strong>Temperaturregulering:</strong> Modeller med variabel temperatur (70–100°C) sparer energi til te, der ikke kræver kogende vand.</li>
</ul>

<h2>Sådan reducerer du elkedlens strømforbrug</h2>
<p>De mest effektive besparelser kræver kun ændrede vaner – ingen investering. Du kan typisk reducere forbruget med 30–50 % ved at følge disse råd.</p>

<ul>
<li><strong>Kog kun det du skal bruge:</strong> Den største enkeltbesparelse. Markér vandniveauet til 1–2 kopper.</li>
<li><strong>Afkalk regelmæssigt:</strong> Brug eddike eller citronsyre hver 4–6 uge for at holde varmeelementet rent.</li>
<li><strong>Brug temperaturregulering:</strong> Grøn te kræver kun 70–80°C – spar 20–30 % energi ved lavere temperatur.</li>
<li><strong>Isolerede kedler:</strong> Dobbelvæggede kedler holder vandet varmt i op til 30 minutter og reducerer gen-kogning.</li>
<li><strong>Brug termokande:</strong> Kog én gang og hæld op i en termokande i stedet for at koge flere gange.</li>
</ul>

<p>Elkedlen er blot ét af mange køkkenapparater, der bidrager til din elregning. Se også <a href="/kaffemaskine/">kaffemaskiner</a> og <a href="/mikroovn/">mikroovnens strømforbrug</a> for at optimere hele dit køkkens energiforbrug.</p>

<h2>Sæsonvariation i elkedlens forbrug</h2>
<p>Elkedlens forbrug følger et tydeligt sæsonmønster. Om vinteren koges der mere vand til te, kaffe og varme drikke, hvilket øger forbruget med 10–20 % i november–februar. Om sommeren falder forbruget tilsvarende, da kolde drikke foretrækkes. Julemåneden er typisk den mest forbrugstunge pga. ekstra gæster og brug.</p>

<h2>Ofte stillede spørgsmål om elkedlens strømforbrug</h2>
<p>Her er svar på de mest almindelige spørgsmål om elkedlens energiforbrug baseret på danske forbrugeres søgninger.</p>`,
    faqs: [
      { question: "Hvad koster det at koge en kop vand i elkedlen?", answer: "At koge 250 ml vand (én kop) koster ca. 8 øre i strøm ved en elpris på 2,50 kr./kWh. En fuld kedel på 1,5 liter koster ca. 48 øre." },
      { question: "Bruger en elkedel mere strøm end et komfur?", answer: "Nej, en elkedel er 30–50 % mere effektiv end et keramisk komfur til at koge vand. Kun induktion kommer tæt på elkedlens effektivitet." },
      { question: "Er det billigere at bruge Quooker end elkedel?", answer: "Nej, en Quooker bruger typisk 800–1.200 kWh om året i standby alene. En elkedel bruger 70–220 kWh årligt og er langt billigere i drift." },
      { question: "Hvor mange kWh bruger en elkedel pr. kogning?", answer: "En typisk kogning af 1 liter vand bruger 0,10–0,15 kWh afhængigt af elkedlens effekt og starttemperatur." },
      { question: "Bruger en hurtigere elkedel mere strøm?", answer: "Nej, en 3.000 W kedel bruger næsten samme kWh som en 2.000 W kedel – den koger bare hurtigere. Energien til at varme vandet er den samme." },
      { question: "Hvor meget koster det at bruge en elkedel om måneden?", answer: "Ved 3–4 daglige kogninger koster elkedlen ca. 20–45 kr. om måneden i strøm." },
      { question: "Betyder kalk i elkedlen højere strømforbrug?", answer: "Ja, kalkaflejringer reducerer varmeoverførslen og kan øge energiforbruget med 10–20 %. Afkalk regelmæssigt for optimal effektivitet." },
      { question: "Er det bedre at koge vand i elkedel eller mikrobølgeovn?", answer: "Elkedlen er mere effektiv til at koge vand – den bruger ca. 0,13 kWh for 1 liter mod mikroovnens ca. 0,18 kWh. Elkedlen er også hurtigere." },
    ],
    relatedSlugs: ["quooker", "kaffemaskine", "induktion", "mikroovn"],
    sources: [
      { name: "Energistyrelsen – Husholdningsapparater", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Køkkenudstyr", url: "https://sparenergi.dk" },
      { name: "Which? UK – Kettle Energy Testing" },
    ],
    calculatorConfig: {
      title: "Beregn din elkedels strømforbrug",
      options: [
        { label: "Lille kogning (0,5 L)", kwhPerUse: 0.065 },
        { label: "Medium kogning (1,0 L)", kwhPerUse: 0.13 },
        { label: "Fuld kedel (1,5 L)", kwhPerUse: 0.19 },
      ],
      usageLabel: "Kogninger pr. dag",
      usageUnit: "gange/dag",
      usageMin: 1,
      usageMax: 10,
      usageDefault: 3,
      usageStep: 1,
    },
  },
  {
    slug: "varmtvandsbeholder",
    name: "Varmtvandsbeholder",
    title: "Varmtvandsbeholder strømforbrug 2026 → Se kWh",
    description:
      "Hvor meget strøm bruger en varmtvandsbeholder? Se elforbrug i kWh for 60–300 liter, beregn din udgift og find besparelsestips. Opdateret 2026.",
    heading: "Hvor meget strøm bruger en varmtvandsbeholder?",
    quickAnswer:
      "En elektrisk varmtvandsbeholder bruger typisk 1.500–4.000 kWh om året afhængigt af størrelse og forbrug. Det svarer til 3.750–10.000 kr. årligt ved 2,50 kr./kWh og er ofte den største enkeltpost på elregningen. En 120-liters beholder til en gennemsnitlig familie bruger ca. 2.500 kWh.",
    kwhRange: [1500, 4000],
    typicalKwh: 2500,
    wattage: 2000,
    standbyWatts: 50,
    energyLabels: [
      { class: "A", kwhPerYear: 1200 },
      { class: "B", kwhPerYear: 1800 },
      { class: "C", kwhPerYear: 2500 },
      { class: "D", kwhPerYear: 3500 },
    ],
    models: [
      { brand: "Bosch", model: "Tronic 6000 T 120L", kwh: 2200, energyClass: "B" },
      { brand: "Metro Therm", model: "Cabinet 110L", kwh: 2500, energyClass: "C" },
      { brand: "OSO", model: "Hotwater S 200L", kwh: 3200, energyClass: "C" },
    ],
    seasonalProfile: [1.2, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.7, 0.9, 1.0, 1.2, 1.3],
    content: `<h2>Varmtvandsbeholderens strømforbrug i overblik</h2>
<p>En elektrisk varmtvandsbeholder er typisk det mest strømkrævende apparat i en dansk husstand. Den varmer og holder vand på 55–65°C døgnet rundt, og det konstante energitab gør den til en stor post på elregningen. I denne guide gennemgår vi det faktiske forbrug for forskellige størrelse, sammenligner med alternativer og giver konkrete tips til at reducere dit elforbrug markant.</p>

<h2>Hvor mange kWh bruger en varmtvandsbeholder om året?</h2>
<p>En varmtvandsbeholder bruger typisk 1.500–4.000 kWh om året afhængigt af størrelse, isolering, temperaturindstilling og husstandens vandforbrug. En gennemsnitlig dansk familie med en 120-liters beholder bruger ca. 2.500 kWh årligt. Det svarer til 6.250 kr. ved en elpris på 2,50 kr./kWh.</p>

<table>
<thead><tr><th>Beholder</th><th>Husstand</th><th>Typisk forbrug</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>60 L</td><td>1 person</td><td>Lavt</td><td>1.200–1.800 kWh</td><td>3.000–4.500 kr.</td></tr>
<tr><td>120 L</td><td>2–3 personer</td><td>Middel</td><td>2.000–2.800 kWh</td><td>5.000–7.000 kr.</td></tr>
<tr><td>200 L</td><td>4–5 personer</td><td>Højt</td><td>2.800–3.800 kWh</td><td>7.000–9.500 kr.</td></tr>
<tr><td>300 L</td><td>5+ personer</td><td>Meget højt</td><td>3.500–4.500 kWh</td><td>8.750–11.250 kr.</td></tr>
</tbody>
</table>

<h2>Standbytab – den skjulte energisluge</h2>
<p>Selv uden at tappe varmt vand mister en varmtvandsbeholder energi gennem rørene og beholderens vægge. Det såkaldte standbytab udgør typisk 30–50 % af det samlede forbrug. En dårligt isoleret beholder kan tabe 3–5 kWh pr. dag bare i varmetab, svarende til 1.100–1.825 kWh om året.</p>

<table>
<thead><tr><th>Isoleringstype</th><th>Standbytab pr. dag</th><th>Årligt standbytab</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>God isolering (ny model)</td><td>1,0–1,5 kWh</td><td>365–548 kWh</td><td>913–1.370 kr.</td></tr>
<tr><td>Middel isolering</td><td>2,0–3,0 kWh</td><td>730–1.095 kWh</td><td>1.825–2.738 kr.</td></tr>
<tr><td>Dårlig isolering (gammel)</td><td>3,5–5,0 kWh</td><td>1.278–1.825 kWh</td><td>3.195–4.563 kr.</td></tr>
</tbody>
</table>

<h2>Varmtvandsbeholder vs. varmepumpe til varmt vand</h2>
<p>En varmepumpe-vandvarmer (brugsvandsvarmepumpe) bruger typisk 60–70 % mindre strøm end en traditionel el-varmtvandsbeholder. Investeringen er højere (15.000–25.000 kr.), men besparelsen på 3.000–5.000 kr. årligt gør den rentabel inden for 3–5 år for de fleste familier.</p>

<table>
<thead><tr><th>Type</th><th>Årligt kWh (familie)</th><th>Årlig pris</th><th>Investering</th><th>Tilbagebetalingstid</th></tr></thead>
<tbody>
<tr><td>El-varmtvandsbeholder</td><td>2.500 kWh</td><td>6.250 kr.</td><td>3.000–8.000 kr.</td><td>—</td></tr>
<tr><td>Varmepumpe-vandvarmer</td><td>800–1.000 kWh</td><td>2.000–2.500 kr.</td><td>15.000–25.000 kr.</td><td>3–5 år</td></tr>
<tr><td>Solvarme + beholder</td><td>1.000–1.500 kWh</td><td>2.500–3.750 kr.</td><td>30.000–50.000 kr.</td><td>8–12 år</td></tr>
</tbody>
</table>

<p>Læs mere om <a href="/varmepumpe/">varmepumpens strømforbrug</a> for at forstå, hvordan en luft-til-vand-varmepumpe kan erstatte din varmtvandsbeholder.</p>

<h2>Hvad påvirker varmtvandsbeholderens elforbrug?</h2>
<p>Flere faktorer har stor indflydelse på, hvor mange kWh din varmtvandsbeholder bruger. De vigtigste er temperaturindstillingen, beholderens størrelse og isolering samt husstandens varmt-vandforbrug.</p>

<ul>
<li><strong>Temperaturindstilling:</strong> Hver grad over 55°C øger forbruget med ca. 3–5 %. 55°C er tilstrækkeligt og sikkert mod legionella.</li>
<li><strong>Isolering:</strong> En ny beholder med PU-skum har 50–70 % mindre varmetab end en gammel med glasuld.</li>
<li><strong>Størrelse:</strong> En 200-liters beholder bruger 30–50 % mere end en 120-liters, selv med samme vandforbrug pga. større overflade.</li>
<li><strong>Brugsvaneforbrug:</strong> Et brusebad bruger 40–60 liter varmt vand. Lange bade øger forbruget markant.</li>
<li><strong>Rørføring:</strong> Lange, uisolerede vandrør mister energi. Isolér synlige rør med rørskåle.</li>
<li><strong>Cirkulation:</strong> En cirkulationspumpe holder vandet varmt i rørene, men øger energiforbruget med 500–1.000 kWh årligt.</li>
</ul>

<h2>Sådan reducerer du varmtvandsbeholderens strømforbrug</h2>
<p>Du kan reducere forbruget med 20–40 % ved at optimere temperatur, isolering og brugevaner. Her er de mest effektive tiltag.</p>

<ul>
<li><strong>Sænk temperaturen til 55°C:</strong> Spar 10–20 % ved at sænke fra 65°C til 55°C.</li>
<li><strong>Tidsur på beholderen:</strong> Sluk beholderen om natten (23–05) og spar 10–15 % af standby-tabet.</li>
<li><strong>Isolér beholderen:</strong> En isoleringskappe reducerer varmetabet med 25–40 % og koster under 500 kr.</li>
<li><strong>Isolér vandrør:</strong> Rørskåle på synlige varmt-vandsrør sparer 50–100 kWh om året.</li>
<li><strong>Kortere brusebade:</strong> Reducér badetiden med 2 minutter og spar 200–400 kWh årligt.</li>
<li><strong>Sparebrusehoved:</strong> Et vandbesparende brusehoved bruger 6–8 L/min mod 12–15 L/min og halverer vandforbruget.</li>
</ul>

<p>Varmtvandsbeholderen er ofte den største enkeltpost på elregningen. Sammenlignet med <a href="/elradiator/">elradiatorer</a> og <a href="/gulvvarme/">elgulvvarme</a> er det her, du kan spare mest.</p>

<h2>Sæsonvariation i varmtvandsbeholderens forbrug</h2>
<p>Varmtvandsbeholderens elforbrug varierer markant over året. Om vinteren er det tilløbende vand koldere (4–8°C), og det kræver mere energi at opvarme til 55°C. Om sommeren er tilløbsvandet 12–18°C, hvilket reducerer opvarmningsbehovet med 20–30 %. Desuden bruger de fleste mindre varmt vand om sommeren.</p>

<h2>Hvornår skal man udskifte sin varmtvandsbeholder?</h2>
<p>En varmtvandsbeholder har en levetid på 10–20 år. Hvis din beholder er mere end 15 år gammel, bruger den sandsynligvis 30–50 % mere end en ny model. Overvej at skifte til en varmepumpe-vandvarmer, der reducerer forbruget med op til 70 % og typisk er betalt hjem på 3–5 år.</p>

<h2>Ofte stillede spørgsmål om varmtvandsbeholderens strømforbrug</h2>
<p>Her er svar på de hyppigste spørgsmål om varmtvandsbeholderens energiforbrug.</p>`,
    faqs: [
      { question: "Hvor meget strøm bruger en varmtvandsbeholder om måneden?", answer: "En typisk 120-liters beholder bruger 170–230 kWh om måneden, svarende til 425–575 kr. ved 2,50 kr./kWh. Om vinteren kan det være op til 280 kWh." },
      { question: "Er en varmepumpe-vandvarmer bedre end en el-beholder?", answer: "Ja, en varmepumpe-vandvarmer bruger 60–70 % mindre strøm. En familie kan spare 3.000–5.000 kr. om året, og investeringen er betalt hjem på 3–5 år." },
      { question: "Hvad koster et brusebad i strøm?", answer: "Et 8-minutters brusebad med 10 L/min bruger ca. 3–4 kWh varmt vand, svarende til 7,50–10 kr. i strøm med en el-varmtvandsbeholder." },
      { question: "Skal man slukke varmtvandsbeholderen om natten?", answer: "Ja, et tidsur kan spare 10–15 % af standby-tabet. Vandet holder temperaturen i mange timer pga. isoleringen, så du har stadig varmt vand om morgenen." },
      { question: "Hvilken temperatur skal varmtvandsbeholderen stå på?", answer: "55°C er det anbefalede minimum for at undgå legionella. Hver grad over 55°C øger forbruget med 3–5 %, så sæt den ikke højere end nødvendigt." },
      { question: "Hvor stor varmtvandsbeholder har jeg brug for?", answer: "Tommelfingerregel: 30–50 liter pr. person. En familie på 4 klarer sig typisk med 120–160 liter. En for stor beholder spilder energi på at holde ubrugt vand varmt." },
      { question: "Hvad er standbytabet på en varmtvandsbeholder?", answer: "Standbytab udgør 30–50 % af det samlede forbrug. En ny, velisoleret beholder taber 1–1,5 kWh pr. dag, en gammel taber 3–5 kWh pr. dag." },
      { question: "Kan solceller betale for varmtvandsbeholderen?", answer: "Ja, et 6 kW solcelleanlæg producerer ca. 6.000 kWh årligt. Med smart styring kan en stor del bruges til varmt vand og eliminere udgiften i sommerhalvåret." },
    ],
    relatedSlugs: ["varmepumpe", "elradiator", "gulvvarme", "sauna"],
    sources: [
      { name: "Energistyrelsen – Varmt brugsvand", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Varmtvandsbeholder", url: "https://sparenergi.dk" },
      { name: "Bolius – Varmtvandsbeholder guide", url: "https://www.bolius.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din varmtvandsbeholders strømforbrug",
      options: [
        { label: "60 L beholder (1 person)", kwhPerUse: 4.0 },
        { label: "120 L beholder (2–3 personer)", kwhPerUse: 6.8 },
        { label: "200 L beholder (4–5 personer)", kwhPerUse: 9.0 },
        { label: "300 L beholder (5+ personer)", kwhPerUse: 11.5 },
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
    slug: "varmeblaeser",
    name: "Varmeblæser",
    title: "Varmeblæser strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en varmeblæser? Se elforbrug i kWh, sammenlign med elradiatorer og beregn din udgift. Opdateret med 2026-priser.",
    heading: "Hvor meget strøm bruger en varmeblæser?",
    quickAnswer:
      "En varmeblæser bruger typisk 1.000–3.000 watt og forbruger 200–1.500 kWh om året afhængigt af brug. Det svarer til 500–3.750 kr. årligt ved 2,50 kr./kWh. Varmeblæsere er effektive til hurtig opvarmning, men dyre i drift ved langvarig brug sammenlignet med varmepumper.",
    kwhRange: [200, 1500],
    typicalKwh: 600,
    wattage: 2000,
    standbyWatts: 0.5,
    energyLabels: [],
    models: [
      { brand: "Dyson", model: "Hot+Cool AM09", kwh: 500 },
      { brand: "DeLonghi", model: "HVA 3220", kwh: 650 },
      { brand: "Dimplex", model: "DXFF30TSN", kwh: 550 },
    ],
    seasonalProfile: [1.8, 1.7, 1.4, 0.8, 0.3, 0.0, 0.0, 0.0, 0.3, 0.8, 1.5, 1.8],
    content: `<h2>Varmeblæserens strømforbrug i overblik</h2>
<p>En varmeblæser er et populært supplement til opvarmning i danske hjem, især i overgangsperioder og kolde rum. Med et effektforbrug på typisk 1.000–3.000 watt er den dog en af de mest strømhungrende apparater, du kan bruge til opvarmning. I denne guide gennemgår vi det faktiske energiforbrug, sammenligner med alternative opvarmningsformer og giver dig tips til at bruge varmeblæseren økonomisk.</p>

<h2>Hvor mange kWh bruger en varmeblæser om året?</h2>
<p>En varmeblæsers årlige forbrug varierer enormt afhængigt af, hvor ofte og hvor længe du bruger den. Ved lejlighedsvis brug (1–2 timer om dagen i vinterhalvåret) bruger den 200–400 kWh. Som primær varmekilde i et rum kan den bruge over 1.500 kWh årligt og koste mere end 3.750 kr. i strøm.</p>

<table>
<thead><tr><th>Brugsscenarie</th><th>Timer/dag</th><th>Måneder i brug</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Lejlighedsvis (supplement)</td><td>1–2</td><td>4 mdr.</td><td>120–240 kWh</td><td>300–600 kr.</td></tr>
<tr><td>Daglig brug (vinterhalvår)</td><td>3–4</td><td>6 mdr.</td><td>360–720 kWh</td><td>900–1.800 kr.</td></tr>
<tr><td>Primær varmekilde (ét rum)</td><td>6–8</td><td>7 mdr.</td><td>840–1.680 kWh</td><td>2.100–4.200 kr.</td></tr>
</tbody>
</table>

<h2>Hvad koster det at bruge en varmeblæser i timen?</h2>
<p>En 2.000 W varmeblæser koster 5 kr. pr. time ved en elpris på 2,50 kr./kWh. Det lyder måske overkommeligt, men ved daglig brug i 4 timer løber det hurtigt op til 20 kr. pr. dag eller 600 kr. pr. måned i vinterhalvåret. Her er prisen for de mest almindelige effektniveauer.</p>

<table>
<thead><tr><th>Effekt</th><th>Pris pr. time</th><th>Pris pr. dag (4 timer)</th><th>Pris pr. måned</th></tr></thead>
<tbody>
<tr><td>1.000 W</td><td>2,50 kr.</td><td>10,00 kr.</td><td>300 kr.</td></tr>
<tr><td>1.500 W</td><td>3,75 kr.</td><td>15,00 kr.</td><td>450 kr.</td></tr>
<tr><td>2.000 W</td><td>5,00 kr.</td><td>20,00 kr.</td><td>600 kr.</td></tr>
<tr><td>3.000 W</td><td>7,50 kr.</td><td>30,00 kr.</td><td>900 kr.</td></tr>
</tbody>
</table>

<h2>Varmeblæser vs. elradiator vs. varmepumpe</h2>
<p>En varmeblæser omdanner 100 % af strømmen til varme – ligesom en elradiator. Forskellen er, at varmeblæseren giver hurtig, retningsbestemt varme, mens elradiatoren afgiver jævn varme over længere tid. En varmepumpe er markant billigere i drift, da den leverer 3–5 kWh varme pr. kWh strøm.</p>

<table>
<thead><tr><th>Opvarmning</th><th>COP/effektivitet</th><th>kWh/år (20 m² rum)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Varmeblæser (2.000 W)</td><td>1,0 (100 %)</td><td>600–1.200 kWh</td><td>1.500–3.000 kr.</td></tr>
<tr><td>Elradiator (1.500 W)</td><td>1,0 (100 %)</td><td>600–1.200 kWh</td><td>1.500–3.000 kr.</td></tr>
<tr><td>Luft-luft varmepumpe</td><td>3,0–4,5</td><td>150–400 kWh</td><td>375–1.000 kr.</td></tr>
<tr><td>Fjernvarme</td><td>—</td><td>—</td><td>600–1.200 kr.</td></tr>
</tbody>
</table>

<p>Læs mere om <a href="/elradiator/">elradiatorens strømforbrug</a> og <a href="/varmepumpe/">varmepumpens elforbrug</a> for at finde den bedste løsning til dit hjem.</p>

<h2>Populære varmeblæsere og deres effektforbrug</h2>
<p>De mest solgte varmeblæsere i Danmark har typisk to eller tre effekttrin, så du kan tilpasse varmen efter behov. Modeller med termostat slukker automatisk, når den ønskede temperatur er nået, hvilket kan reducere det faktiske forbrug med 30–50 %.</p>

<table>
<thead><tr><th>Model</th><th>Effekttrin</th><th>Termostat</th><th>kWh/år (3 t/dag, 5 mdr.)</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>Dyson Hot+Cool AM09</td><td>1.000/2.000 W</td><td>Ja (digital)</td><td>500 kWh</td><td>1.250 kr.</td></tr>
<tr><td>DeLonghi HVA 3220</td><td>1.000/2.200 W</td><td>Ja</td><td>650 kWh</td><td>1.625 kr.</td></tr>
<tr><td>Dimplex DXFF30TSN</td><td>1.500/3.000 W</td><td>Ja</td><td>550 kWh</td><td>1.375 kr.</td></tr>
<tr><td>Adax VV23T</td><td>1.000/2.000 W</td><td>Ja</td><td>480 kWh</td><td>1.200 kr.</td></tr>
</tbody>
</table>

<h2>Hvad påvirker varmeblæserens strømforbrug?</h2>
<p>Flere faktorer afgør, hvor dyrt det bliver at bruge en varmeblæser. De vigtigste er brugsvarigheden, effekttrinnet og rummets isolering.</p>

<ul>
<li><strong>Effekttrin:</strong> Brug altid det laveste trin, der giver tilstrækkelig varme. Halv effekt halverer forbruget.</li>
<li><strong>Termostat:</strong> En model med termostat slukker automatisk og kan spare 30–50 % af energien.</li>
<li><strong>Rummets isolering:</strong> Et velisoleret rum holder bedre på varmen og kræver mindre opvarmningstid.</li>
<li><strong>Placering:</strong> Placér blæseren lavt og rettet mod opholdszonen for mest effektiv opvarmning.</li>
<li><strong>Vinduer og døre:</strong> Træk fra utætte vinduer kan fordoble opvarmningsbehovet.</li>
</ul>

<h2>Sådan reducerer du varmeblæserens strømforbrug</h2>
<p>Den mest effektive måde at spare på er at begrænse brugen – men der er også andre tiltag, der kan reducere forbruget uden at gå på kompromis med komforten.</p>

<ul>
<li><strong>Brug termostat:</strong> Indstil en ønsket temperatur og lad blæseren regulere selv.</li>
<li><strong>Tidsur:</strong> Sæt blæseren på et tidsur, så den slukker automatisk efter 1–2 timer.</li>
<li><strong>Supplement, ikke primær:</strong> Brug varmeblæseren som supplement til centralvarme – ikke som eneste varmekilde.</li>
<li><strong>Vælg lavere effekttrin:</strong> 1.000 W er ofte tilstrækkeligt til et soveværelse eller kontor.</li>
<li><strong>Overvej en varmepumpe:</strong> Til længerevarende opvarmning er en luft-luft varmepumpe 3–4 gange billigere i drift.</li>
</ul>

<h2>Sæsonvariation i varmeblæserens forbrug</h2>
<p>Varmeblæserens forbrug har den mest markante sæsonvariation af alle husholdningsapparater. Næsten alt forbrug sker i perioden oktober–marts, med toppunkt i januar–februar. Om sommeren (juni–august) er forbruget nul. Overgangsmånederne marts–april og september–oktober bidrager med et moderat forbrug.</p>

<h2>Ofte stillede spørgsmål om varmeblæserens strømforbrug</h2>
<p>Her er svar på de hyppigste spørgsmål om varmeblæserens energiforbrug.</p>`,
    faqs: [
      { question: "Hvad koster det at bruge en varmeblæser i timen?", answer: "Ved 2.000 W koster den 5,00 kr. pr. time ved en elpris på 2,50 kr./kWh. Ved 1.000 W koster den 2,50 kr." },
      { question: "Er en varmeblæser dyr i drift?", answer: "Ja, sammenlignet med alternativer. 4 timers daglig brug ved 2.000 W koster ca. 600 kr./måned. En varmepumpe leverer samme varme for 150–200 kr./måned." },
      { question: "Bruger en varmeblæser mere strøm end en elradiator?", answer: "Nej, begge omdanner strøm til varme med 100 % effektivitet. Men varmeblæseren har ofte højere watttal og bruges mere intensivt." },
      { question: "Kan en varmeblæser opvarme et helt rum?", answer: "Ja, en 2.000 W varmeblæser kan opvarme et rum på 15–20 m², men det er dyrt. For større rum eller langvarig brug er en varmepumpe langt billigere." },
      { question: "Er det farligt at have en varmeblæser kørende om natten?", answer: "Det anbefales ikke pga. brandrisiko. Moderne modeller har overvågning mod overophedning, men brug altid et tidsur og lad den aldrig stå tildækket." },
      { question: "Hvor meget strøm bruger en varmeblæser om måneden?", answer: "Ved 3 timers daglig brug på 2.000 W bruger den ca. 180 kWh om måneden, svarende til 450 kr. i strøm." },
      { question: "Er en varmeblæser billigere end fjernvarme?", answer: "Nej, fjernvarme koster typisk 0,50–0,80 kr./kWh mod 2,50 kr./kWh for el. En varmeblæser er 3–5 gange dyrere pr. kWh varme." },
      { question: "Kan en varmeblæser erstatte centralvarme?", answer: "Ikke anbefalet for hele boligen. En 2.000 W varmeblæser i ét rum koster 1.500–3.000 kr./år i strøm. For hele boligen vil det koste 10.000+ kr." },
    ],
    relatedSlugs: ["elradiator", "varmepumpe", "gulvvarme"],
    sources: [
      { name: "Energistyrelsen – Elopvarmning", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Varmeblæsere", url: "https://sparenergi.dk" },
      { name: "Bolius – Elopvarmning guide", url: "https://www.bolius.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din varmeblæsers strømforbrug",
      options: [
        { label: "1.000 W (lavt trin)", kwhPerUse: 1.0 },
        { label: "1.500 W (medium trin)", kwhPerUse: 1.5 },
        { label: "2.000 W (højt trin)", kwhPerUse: 2.0 },
        { label: "3.000 W (max)", kwhPerUse: 3.0 },
      ],
      usageLabel: "Timer pr. dag",
      usageUnit: "timer/dag",
      usageMin: 1,
      usageMax: 12,
      usageDefault: 3,
      usageStep: 1,
    },
  },
  {
    slug: "lyskaede",
    name: "Lyskæde",
    title: "Lyskæde strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en lyskæde? Se elforbrug for LED og glødepærer i kWh, beregn din udgift for hele julen. Opdateret med 2026-data.",
    heading: "Hvor meget strøm bruger en lyskæde?",
    quickAnswer:
      "En LED-lyskæde bruger typisk 2–10 watt og koster kun 5–25 kr. for en hel julemåned. Ældre glødepærelyskæder bruger 20–100 watt og koster 50–250 kr. for samme periode. Over et helt år bruger en LED-lyskæde blot 3–15 kWh hvis den bruges til udendørs dekoration året rundt.",
    kwhRange: [1, 50],
    typicalKwh: 8,
    wattage: 6,
    standbyWatts: 0.3,
    energyLabels: [],
    models: [
      { brand: "Philips", model: "LED Lyskæde 200 LED (20m)", kwh: 5 },
      { brand: "Konstsmide", model: "LED Lyskæde 120 LED (12m)", kwh: 4 },
      { brand: "Nordic Winter", model: "LED Lyskæde 300 LED (30m)", kwh: 8 },
    ],
    seasonalProfile: [0.5, 0.3, 0.2, 0.1, 0.1, 0.2, 0.3, 0.3, 0.5, 1.0, 3.5, 5.0],
    content: `<h2>Lyskædens strømforbrug i overblik</h2>
<p>Lyskæder er en uundværlig del af den danske jul og bruges i stigende grad også året rundt til dekoration. Med overgangen fra glødepærer til LED er strømforbruget faldet drastisk – men mange danskere har stadig gamle lyskæder liggende. I denne guide gennemgår vi det faktiske energiforbrug for alle typer lyskæder og beregner, hvad det koster at holde julen lysende.</p>

<h2>Hvor mange kWh bruger en lyskæde om året?</h2>
<p>En moderne LED-lyskæde bruger typisk 1–15 kWh om året afhængigt af længde, antal LED'er og antal brugstimer. Bruges den kun i december (6 timer/dag i 30 dage), er forbruget blot 0,4–2,7 kWh. Bruges den hele året som udendørs dekoration, stiger det til 3–15 kWh. Det er i begge tilfælde meget beskedent.</p>

<table>
<thead><tr><th>Type lyskæde</th><th>Watt</th><th>Kun december (6 t/dag)</th><th>Halvåret (6 t/dag)</th><th>Hele året (6 t/dag)</th></tr></thead>
<tbody>
<tr><td>LED 100 pærer (10m)</td><td>3 W</td><td>0,5 kWh</td><td>3,3 kWh</td><td>6,6 kWh</td></tr>
<tr><td>LED 200 pærer (20m)</td><td>6 W</td><td>1,1 kWh</td><td>6,6 kWh</td><td>13,1 kWh</td></tr>
<tr><td>LED 300 pærer (30m)</td><td>9 W</td><td>1,6 kWh</td><td>9,9 kWh</td><td>19,7 kWh</td></tr>
<tr><td>Glødepære 100 pærer</td><td>40 W</td><td>7,2 kWh</td><td>43,8 kWh</td><td>87,6 kWh</td></tr>
<tr><td>Glødepære 200 pærer</td><td>80 W</td><td>14,4 kWh</td><td>87,6 kWh</td><td>175,2 kWh</td></tr>
</tbody>
</table>

<h2>LED vs. glødepærer – strømforbrug</h2>
<p>LED-lyskæder bruger 80–95 % mindre strøm end traditionelle glødepærelyskæder. En 200-pæres glødekæde bruger 80 watt – en tilsvarende LED-kæde bruger blot 6 watt. Over en hel december sparer du ca. 13 kWh og 33 kr. pr. lyskæde ved at skifte til LED.</p>

<table>
<thead><tr><th>Parameter</th><th>LED-lyskæde</th><th>Glødepærelyskæde</th><th>Besparelse</th></tr></thead>
<tbody>
<tr><td>Watt (200 pærer)</td><td>4–8 W</td><td>60–100 W</td><td>90–95 %</td></tr>
<tr><td>kWh december (6 t/dag)</td><td>0,7–1,4 kWh</td><td>10,8–18,0 kWh</td><td>10–17 kWh</td></tr>
<tr><td>Pris december</td><td>2–4 kr.</td><td>27–45 kr.</td><td>25–43 kr.</td></tr>
<tr><td>Levetid</td><td>25.000–50.000 timer</td><td>1.000–2.000 timer</td><td>15–25x længere</td></tr>
<tr><td>Brandrisiko</td><td>Meget lav (ingen varme)</td><td>Moderat (varmeudvikling)</td><td>Sikkerhed</td></tr>
</tbody>
</table>

<p>Læs også om <a href="/led-paere/">LED-pærers strømforbrug</a> for at optimere belysningen i hele boligen.</p>

<h2>Hvad koster julelyset i strøm?</h2>
<p>En typisk dansk julebelysning med 3–5 LED-lyskæder indendørs og 1–2 udendørs koster 15–50 kr. for hele december ved 6 timers daglig brug. Med glødepærer kan den samme opsætning koste 150–400 kr. Forskellen er endnu større, hvis du bruger lys fra november til januar.</p>

<table>
<thead><tr><th>Juleopsætning</th><th>LED – pris/december</th><th>Gløde – pris/december</th></tr></thead>
<tbody>
<tr><td>Lille (2 lyskæder inde)</td><td>3–6 kr.</td><td>30–55 kr.</td></tr>
<tr><td>Middel (4 inde + 1 ude)</td><td>10–20 kr.</td><td>90–180 kr.</td></tr>
<tr><td>Stor (6 inde + 3 ude + figurer)</td><td>25–50 kr.</td><td>200–400 kr.</td></tr>
</tbody>
</table>

<h2>Udendørs lyskæder og helårsbrug</h2>
<p>Mange danskere lader udendørs lyskæder hænge hele året med et skumringsrelæ eller tidsur. En LED-lyskæde med 200 pærer og et skumringsrelæ, der giver 4–8 timers lys afhængigt af sæsonen, bruger ca. 8–16 kWh om året – svarende til 20–40 kr. Det er en meget billig dekoration.</p>

<h2>Hvad påvirker lyskædens strømforbrug?</h2>
<p>Flere faktorer bestemmer, hvor mange kWh dine lyskæder bruger. De vigtigste er teknologien (LED vs. glødepærer) og brugstiden.</p>

<ul>
<li><strong>LED vs. glødepærer:</strong> Den absolut vigtigste faktor. LED sparer 80–95 % strøm.</li>
<li><strong>Antal pærer:</strong> Flere pærer = højere forbrug. Men 200 LED-pærer bruger stadig mindre end 20 glødepærer.</li>
<li><strong>Brugstimer:</strong> Brug tidsur eller skumringsrelæ for at undgå unødvendig drift om natten.</li>
<li><strong>Transformator:</strong> Billige transformatorer bruger 0,3–1 W i standby – tag dem ud af stikkontakten.</li>
<li><strong>Farve:</strong> Hvide LED'er bruger marginalt mindre end farvede (RGB), men forskellen er minimal.</li>
</ul>

<h2>Sådan reducerer du lyskædens strømforbrug</h2>
<p>Lyskæder er allerede et af de billigste apparater i hjemmet, men du kan stadig optimere. De vigtigste tiltag handler om at skifte teknologi og styre brugstiden.</p>

<ul>
<li><strong>Skift til LED:</strong> Har du stadig glødepærelyskæder, er det den bedste investering. LED-kæder koster fra 50 kr.</li>
<li><strong>Brug tidsur:</strong> Sæt lyskæderne til 16–22 (6 timer) i stedet for hele aftenen/natten.</li>
<li><strong>Skumringsrelæ:</strong> Tænder automatisk ved mørke og sikrer, at lyset kun er tændt, når det giver mening.</li>
<li><strong>Tag transformatoren ud:</strong> Når sæsonen er slut, spar standbyforbruget ved at tage stikket ud.</li>
<li><strong>Solcelle-lyskæder:</strong> Til udendørs brug koster de 0 kr. i drift og er nemme at installere.</li>
</ul>

<h2>Sæsonvariation i lyskæders forbrug</h2>
<p>Lyskæder har den mest ekstreme sæsonvariation af alle husholdningsapparater. November og december står for 70–80 % af det årlige forbrug pga. julebelysning. Resten af året er forbruget minimalt, med mindre du bruger lyskæder til helårsdekoration. September–oktober markerer starten, når mørket kommer.</p>

<h2>Ofte stillede spørgsmål om lyskædens strømforbrug</h2>
<p>Her er svar på de mest stillede spørgsmål om lyskæders energiforbrug.</p>`,
    faqs: [
      { question: "Hvad koster det at have en lyskæde tændt hele december?", answer: "En LED-lyskæde med 200 pærer (6 W) koster ca. 2–3 kr. for hele december ved 6 timers daglig brug. En glødepærekæde koster 30–45 kr." },
      { question: "Bruger LED-lyskæder meget strøm?", answer: "Nej, LED-lyskæder er ekstremt energieffektive. En typisk 200-pæres kæde bruger kun 4–8 watt – mindre end en enkelt gammel glødepære." },
      { question: "Hvad koster julebelysning i strøm?", answer: "Med LED-lyskæder koster en typisk dansk julebelysning (4–6 kæder) kun 15–40 kr. for hele december. Med glødepærer kan det koste 150–400 kr." },
      { question: "Skal man skifte gamle lyskæder til LED?", answer: "Absolut. LED-lyskæder sparer 80–95 % strøm, holder 15–25x længere og har ingen brandrisiko pga. varme. Prisen er fra 50 kr. for en kvalitetskæde." },
      { question: "Bruger en lyskæde strøm, når den er slukket?", answer: "Ja, transformatoren bruger typisk 0,3–1 W i standby. Tag den ud af stikkontakten for at spare. Over et år koster det 2–8 kr." },
      { question: "Hvad bruger mest strøm – lyskæder eller juletræslys?", answer: "Rigtige stearinlys bruger naturligvis ingen strøm. Elektrisk juletræsbelysning (LED) bruger typisk 3–10 W – sammenligneligt med en lyskæde." },
      { question: "Er solcelle-lyskæder et godt alternativ?", answer: "Ja, til udendørs brug. De koster 0 kr. i drift, er nemme at installere og giver typisk 6–8 timers lys efter en dags opladning om sommeren, mindre om vinteren." },
      { question: "Hvor mange lyskæder kan man have tændt uden problemer?", answer: "Med LED kan du nemt have 20–30 lyskæder uden at belaste el-installationen mærkbart. Det samlede forbrug er under 100 W – som én glødepære." },
    ],
    relatedSlugs: ["led-paere", "tv", "router"],
    sources: [
      { name: "Energistyrelsen – Belysning", url: "https://ens.dk" },
      { name: "SparEnergi.dk – Julebelysning", url: "https://sparenergi.dk" },
      { name: "Dansk Energi – LED-belysning guide" },
    ],
    calculatorConfig: {
      title: "Beregn dine lyskæders strømforbrug",
      options: [
        { label: "LED 100 pærer (3 W)", kwhPerUse: 0.003 },
        { label: "LED 200 pærer (6 W)", kwhPerUse: 0.006 },
        { label: "LED 300 pærer (9 W)", kwhPerUse: 0.009 },
        { label: "Glødepære 100 pærer (40 W)", kwhPerUse: 0.04 },
      ],
      usageLabel: "Timer tændt pr. dag",
      usageUnit: "timer/dag",
      usageMin: 1,
      usageMax: 12,
      usageDefault: 6,
      usageStep: 1,
    },
  },
  {
    slug: "akvarium",
    name: "Akvarium",
    title: "Akvarium strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger et akvarium? Se elforbrug for filter, varme og lys i kWh, og beregn din årlige udgift. Opdateret 2026-priser.",
    heading: "Hvor meget strøm bruger et akvarium?",
    quickAnswer:
      "Et typisk ferskvandsakvarium på 100–200 liter bruger 200–500 kWh om året, svarende til 500–1.250 kr. ved 2,50 kr./kWh. De tre største strømforbrugere er varmelegemet (60 %), belysningen (25 %) og filterpumpen (15 %). Saltvandsakvarier bruger typisk 50–100 % mere.",
    kwhRange: [150, 800],
    typicalKwh: 350,
    wattage: 100,
    standbyWatts: 0,
    energyLabels: [],
    models: [
      { brand: "Juwel", model: "Rio 180 LED", kwh: 300 },
      { brand: "Fluval", model: "Flex 123L", kwh: 250 },
      { brand: "Eheim", model: "Vivaline 240 LED", kwh: 380 },
    ],
    seasonalProfile: [1.2, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.7, 0.8, 1.0, 1.1, 1.2],
    content: `<h2>Akvariets strømforbrug i overblik</h2>
<p>Et akvarium er en fascinerende hobby, men det kører 24 timer i døgnet, 365 dage om året – og strømforbruget kan overraske mange. Mellem varmeapparat, belysning, filterpumpe og eventuelt CO₂-anlæg bidrager akvariet markant til din elregning. I denne guide gennemgår vi det faktiske energiforbrug for de mest almindelige akvarietyper og giver dig tips til at reducere omkostningerne.</p>

<h2>Hvor mange kWh bruger et akvarium om året?</h2>
<p>Et akvarium bruger typisk 150–800 kWh om året afhængigt af størrelse, type (ferskvand/saltvand), og udstyr. Et standard ferskvandsakvarium på 100–200 liter bruger ca. 250–400 kWh. Et saltvandsakvarium med ekstra pumper, protein skimmer og metalhalogenlamper kan bruge 500–800+ kWh.</p>

<table>
<thead><tr><th>Akvarietype</th><th>Størrelse</th><th>Udstyr</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Lille ferskvand</td><td>50–80 L</td><td>Varme, filter, LED</td><td>150–250 kWh</td><td>375–625 kr.</td></tr>
<tr><td>Medium ferskvand</td><td>100–200 L</td><td>Varme, filter, LED</td><td>250–400 kWh</td><td>625–1.000 kr.</td></tr>
<tr><td>Stort ferskvand</td><td>300–500 L</td><td>Varme, filter, LED, CO₂</td><td>400–650 kWh</td><td>1.000–1.625 kr.</td></tr>
<tr><td>Saltvand (rev)</td><td>200–400 L</td><td>Varme, pumper, skimmer, LED</td><td>500–800+ kWh</td><td>1.250–2.000+ kr.</td></tr>
</tbody>
</table>

<h2>Strømforbrugere i akvariet – hvad bruger mest?</h2>
<p>Akvariets samlede elforbrug fordeler sig typisk på tre hovedelementer: varmelegemet, belysningen og filterpumpen. Varmelegemet er klart den største post og kan alene stå for over halvdelen af det samlede forbrug, især om vinteren, hvor rumtemperaturen er lavere.</p>

<table>
<thead><tr><th>Komponent</th><th>Typisk watt</th><th>Driftstimer/dag</th><th>Andel af forbrug</th><th>Årligt kWh (200 L)</th></tr></thead>
<tbody>
<tr><td>Varmelegeme (200 W)</td><td>50–200 W*</td><td>8–16 t (termostat)</td><td>50–65 %</td><td>150–260 kWh</td></tr>
<tr><td>Belysning (LED)</td><td>15–40 W</td><td>8–10 t</td><td>15–25 %</td><td>44–146 kWh</td></tr>
<tr><td>Filterpumpe</td><td>5–15 W</td><td>24 t</td><td>10–15 %</td><td>44–131 kWh</td></tr>
<tr><td>Luftpumpe</td><td>3–8 W</td><td>24 t</td><td>3–5 %</td><td>26–70 kWh</td></tr>
<tr><td>CO₂-magnetventil</td><td>3–5 W</td><td>8–10 t</td><td>2–3 %</td><td>9–18 kWh</td></tr>
</tbody>
</table>

<p>*Varmelegemet styres af termostat og kører kun, når temperaturen falder. Det faktiske forbrug er 30–60 % af den nominelle effekt.</p>

<h2>Belysning: LED vs. T5/T8 lysstofrør</h2>
<p>Overgangen fra lysstofrør til LED har halveret belysningsforbruget i de fleste akvarier. Et T5-rør til et 120 cm akvarium bruger typisk 50–80 watt, mens en tilsvarende LED-ramme bruger 20–35 watt og giver bedre lysspektrum til plantevækst.</p>

<table>
<thead><tr><th>Belysningstype</th><th>Watt (120 cm akvarium)</th><th>Timer/dag</th><th>Årligt kWh</th><th>Årlig pris</th></tr></thead>
<tbody>
<tr><td>LED-ramme (ny)</td><td>20–35 W</td><td>8–10 t</td><td>58–128 kWh</td><td>145–320 kr.</td></tr>
<tr><td>T5 lysstofrør (2 rør)</td><td>50–80 W</td><td>8–10 t</td><td>146–292 kWh</td><td>365–730 kr.</td></tr>
<tr><td>T8 lysstofrør (2 rør)</td><td>60–100 W</td><td>8–10 t</td><td>175–365 kWh</td><td>438–913 kr.</td></tr>
<tr><td>Metalhalogen (saltvand)</td><td>150–250 W</td><td>6–8 t</td><td>329–730 kWh</td><td>823–1.825 kr.</td></tr>
</tbody>
</table>

<p>Belysningen påvirker også dit samlede elforbrug i hjemmet. Læs om <a href="/led-paere/">LED-pærers strømforbrug</a> for at optimere belysningen i hele boligen.</p>

<h2>Varmelegemets forbrug og rummets temperatur</h2>
<p>Varmelegemet i akvariet styres af en termostat og kører kun, når vandtemperaturen falder under den indstillede værdi (typisk 24–26°C). Jo koldere rummet er, jo oftere tænder varmelegemet. Om vinteren i et uopvarmet rum kan det køre næsten konstant og forbruge op til 250 kWh alene.</p>

<ul>
<li><strong>Rumtemperatur 22–24°C:</strong> Varmelegemet kører 4–8 timer/dag – forbrug 50–120 kWh/år.</li>
<li><strong>Rumtemperatur 18–20°C:</strong> Varmelegemet kører 10–16 timer/dag – forbrug 120–250 kWh/år.</li>
<li><strong>Rumtemperatur under 16°C:</strong> Varmelegemet kører næsten konstant – forbrug 200–350 kWh/år.</li>
</ul>

<h2>Sådan reducerer du akvariets strømforbrug</h2>
<p>Du kan typisk reducere akvariets elforbrug med 20–40 % uden at kompromittere fiskenes velbefindende. De mest effektive tiltag handler om belysning og isolering.</p>

<ul>
<li><strong>Skift til LED:</strong> Hvis du stadig bruger lysstofrør, kan LED halvere belysningsforbruget.</li>
<li><strong>Isolér akvariet:</strong> En isoleringsplade bagpå og under akvariet reducerer varmetabet med 15–25 %.</li>
<li><strong>Placér i varmt rum:</strong> Jo tættere rumtemperaturen er på vandtemperaturen, jo mindre kører varmelegemet.</li>
<li><strong>Brug tidsur til lys:</strong> 8–10 timers belysning er tilstrækkeligt – længere giver algevækst, ikke bedre plantevækst.</li>
<li><strong>Vælg energieffektiv pumpe:</strong> Nye DC-pumper bruger 30–50 % mindre end ældre AC-pumper.</li>
<li><strong>Overspecificér ikke varmelegemet:</strong> Et 100 W varmelegeme i et 100 L akvarium i et varmt rum er tilstrækkeligt.</li>
</ul>

<p>Et akvarium er en hobby, der kører døgnet rundt – ligesom dit <a href="/koeleskab/">køleskab</a>. Begge apparater kan optimeres med relativt simple tiltag.</p>

<h2>Sæsonvariation i akvariets forbrug</h2>
<p>Akvariets elforbrug varierer 20–40 % over året, primært pga. varmelegemet. Om sommeren, når rumtemperaturen er 22–25°C, kører varmelegemet meget lidt. Om vinteren, især i uopvarmede rum, kan forbruget stige markant. Belysningsforbruget er stabilt året rundt.</p>

<h2>Ofte stillede spørgsmål om akvariets strømforbrug</h2>
<p>Her er svar på de mest stillede spørgsmål om akvariets energiforbrug.</p>`,
    faqs: [
      { question: "Hvad koster det at have et akvarium kørende?", answer: "Et standard ferskvandsakvarium på 100–200 liter koster typisk 625–1.000 kr. om året i strøm. Et saltvandsakvarium kan koste 1.250–2.000+ kr." },
      { question: "Hvad bruger mest strøm i et akvarium?", answer: "Varmelegemet er den største forbruger (50–65 %), efterfulgt af belysning (15–25 %) og filterpumpe (10–15 %)." },
      { question: "Bruger et saltvandsakvarium mere strøm end ferskvand?", answer: "Ja, typisk 50–100 % mere pga. ekstra strømpumper, protein skimmer og ofte kraftigere belysning til koraller." },
      { question: "Hvor meget strøm bruger et akvarium om måneden?", answer: "Et 200 L ferskvandsakvarium bruger ca. 20–35 kWh om måneden, svarende til 50–88 kr. Om vinteren kan det være 30–50 kWh." },
      { question: "Kan man spare strøm ved at slukke lyset om natten?", answer: "Ja, men lyset skal være slukket om natten uanset – fiskene har brug for en dag-nat-cyklus. Brug tidsur til 8–10 timers belysning." },
      { question: "Bruger et lille akvarium mindre strøm?", answer: "Ja, men ikke proportionelt. Et 50 L akvarium bruger typisk 60–70 % af, hvad et 200 L akvarium bruger, fordi varmelegeme og filter stadig kører." },
      { question: "Er LED-lys bedre for akvariet end lysstofrør?", answer: "Ja, LED bruger 50–60 % mindre strøm, har bedre lysspektrum for planter, holder 5–10x længere og afgiver mindre varme til vandet." },
      { question: "Kan jeg bruge solceller til mit akvarium?", answer: "Ikke direkte, men solceller på taget reducerer din samlede elregning. Et akvarium på 350 kWh/år kræver ca. 0,5 kW solcellekapacitet." },
    ],
    relatedSlugs: ["led-paere", "koeleskab", "varmtvandsbeholder"],
    sources: [
      { name: "Energistyrelsen – Hobbyudstyr", url: "https://ens.dk" },
      { name: "Practical Fishkeeping – Energy Efficiency Guide" },
      { name: "Juwel Aquarium – Tekniske specifikationer", url: "https://www.juwel-aquarium.de" },
    ],
    calculatorConfig: {
      title: "Beregn dit akvariums strømforbrug",
      options: [
        { label: "Lille ferskvand (50–80 L)", kwhPerUse: 0.55 },
        { label: "Medium ferskvand (100–200 L)", kwhPerUse: 0.95 },
        { label: "Stort ferskvand (300–500 L)", kwhPerUse: 1.5 },
        { label: "Saltvand/rev (200–400 L)", kwhPerUse: 1.8 },
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
    slug: "pool",
    name: "Pool",
    title: "Pool strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en pool? Se elforbrug for pumpe, opvarmning og rensning i kWh, og beregn din årlige udgift. Opdateret 2026-priser.",
    heading: "Hvor meget strøm bruger en pool?",
    quickAnswer:
      "En typisk villahavepool bruger 3.000–8.000 kWh om året for pumpe, opvarmning og rensning. Det svarer til 7.500–20.000 kr. årligt ved 2,50 kr./kWh. Poolopvarmning med varmepumpe udgør den største post, mens filterpumpen kører 8–12 timer dagligt i sæsonen.",
    kwhRange: [2000, 10000],
    typicalKwh: 5000,
    wattage: 1500,
    standbyWatts: 5,
    energyLabels: [],
    models: [
      { brand: "Intex", model: "Ultra XTR Frame 549x274 cm", kwh: 3500 },
      { brand: "Starline", model: "Nova 8x4 m (nedgravet)", kwh: 5500 },
      { brand: "Compass", model: "Aqua 6x3 m + varmepumpe", kwh: 4500 },
    ],
    seasonalProfile: [0.1, 0.1, 0.2, 0.5, 1.5, 2.5, 3.0, 2.8, 1.5, 0.5, 0.1, 0.1],
    content: `<h2>Poolens strømforbrug i overblik</h2>
<p>En privat pool er en af de mest energikrævende installationer i en dansk bolig. Mellem filterpumpe, opvarmning, belysning og eventuelt saltelektrolyse kan det årlige elforbrug nemt nå 3.000–10.000 kWh. I denne guide gennemgår vi alle energiposterne, sammenligner opvarmningsmetoder og giver dig konkrete tips til at reducere poolens driftsomkostninger markant.</p>

<h2>Hvor mange kWh bruger en pool om året?</h2>
<p>En typisk villahavepool (4x8 meter, opvarmet til 26–28°C) bruger 3.000–8.000 kWh om året i den danske sæson (maj–september). Opvarmning tegner sig for 50–70 % af forbruget, filterpumpen for 20–30 % og øvrige systemer (belysning, robotrenser, saltanlæg) for 10–20 %.</p>

<table>
<thead><tr><th>Pooltype</th><th>Størrelse</th><th>Opvarmning</th><th>Årligt kWh</th><th>Årlig pris (2,50 kr.)</th></tr></thead>
<tbody>
<tr><td>Overground (Intex)</td><td>5,5 x 2,7 m</td><td>Solvarme</td><td>1.500–2.500 kWh</td><td>3.750–6.250 kr.</td></tr>
<tr><td>Nedgravet (lille)</td><td>6 x 3 m</td><td>Varmepumpe</td><td>3.000–4.500 kWh</td><td>7.500–11.250 kr.</td></tr>
<tr><td>Nedgravet (standard)</td><td>8 x 4 m</td><td>Varmepumpe</td><td>4.500–7.000 kWh</td><td>11.250–17.500 kr.</td></tr>
<tr><td>Nedgravet (stor)</td><td>10 x 5 m</td><td>Varmepumpe</td><td>6.500–10.000 kWh</td><td>16.250–25.000 kr.</td></tr>
</tbody>
</table>

<h2>Filterpumpens strømforbrug</h2>
<p>Filterpumpen er poolens hjerte og kører typisk 8–12 timer dagligt i sæsonen for at holde vandet rent. En standard pumpe bruger 750–1.500 watt, men moderne inverter-pumper med variabel hastighed bruger kun 200–500 watt det meste af tiden og er 60–70 % billigere i drift.</p>

<table>
<thead><tr><th>Pumpetype</th><th>Effekt</th><th>Timer/dag</th><th>kWh/sæson (5 mdr.)</th><th>Pris/sæson</th></tr></thead>
<tbody>
<tr><td>Standard (single-speed)</td><td>750 W</td><td>10</td><td>1.125 kWh</td><td>2.813 kr.</td></tr>
<tr><td>Standard (kraftig)</td><td>1.500 W</td><td>10</td><td>2.250 kWh</td><td>5.625 kr.</td></tr>
<tr><td>Inverter (variabel)</td><td>200–500 W</td><td>10</td><td>450–750 kWh</td><td>1.125–1.875 kr.</td></tr>
</tbody>
</table>

<h2>Poolopvarmning – metoder og elforbrug</h2>
<p>Opvarmning er den absolut største energipost for en pool. En pool-varmepumpe er den mest udbredte løsning i Danmark og leverer typisk 4–6 kWh varme pr. kWh strøm (COP 4–6). Elpatron er billigst i anskaffelse, men 4–6 gange dyrere i drift. Solvarme er gratis i drift, men afhænger af vejret.</p>

<table>
<thead><tr><th>Opvarmningsmetode</th><th>COP</th><th>kWh/sæson (8x4 m pool)</th><th>Pris/sæson</th><th>Investering</th></tr></thead>
<tbody>
<tr><td>Pool-varmepumpe</td><td>4–6</td><td>2.000–3.500 kWh</td><td>5.000–8.750 kr.</td><td>15.000–35.000 kr.</td></tr>
<tr><td>Elpatron (3 kW)</td><td>1,0</td><td>8.000–14.000 kWh</td><td>20.000–35.000 kr.</td><td>3.000–8.000 kr.</td></tr>
<tr><td>Solvarme (paneler)</td><td>Gratis</td><td>0 kWh (el)</td><td>0 kr. (el)</td><td>10.000–25.000 kr.</td></tr>
<tr><td>Hybrid (varmepumpe + sol)</td><td>—</td><td>1.000–2.000 kWh</td><td>2.500–5.000 kr.</td><td>20.000–45.000 kr.</td></tr>
</tbody>
</table>

<p>Poolens varmepumpe fungerer på samme princip som en luft-til-vand-varmepumpe. Læs om <a href="/varmepumpe/">varmepumpens strømforbrug</a> for at forstå teknologien bedre.</p>

<h2>Poolafdækning – den billigste besparelse</h2>
<p>En poolafdækning (overdækning eller termisk cover) er den mest effektive enkeltinvestering til at reducere poolens strømforbrug. Den reducerer varmetabet med 50–80 % om natten og i blæsevejr, og sænker fordampningen med op til 95 %. En termisk cover koster fra 1.000 kr. og sparer 1.500–3.000 kWh årligt.</p>

<table>
<thead><tr><th>Afdækningstype</th><th>Varmtabsreduktion</th><th>Investering</th><th>Årlig besparelse</th></tr></thead>
<tbody>
<tr><td>Termisk bobleplast</td><td>50–60 %</td><td>500–2.000 kr.</td><td>1.500–2.500 kWh</td></tr>
<tr><td>Termocover (fast)</td><td>60–75 %</td><td>3.000–8.000 kr.</td><td>2.000–3.500 kWh</td></tr>
<tr><td>Automatisk lamelcover</td><td>70–85 %</td><td>30.000–80.000 kr.</td><td>2.500–4.000 kWh</td></tr>
<tr><td>Poolhus/overdækning</td><td>80–95 %</td><td>50.000–200.000 kr.</td><td>3.000–5.000 kWh</td></tr>
</tbody>
</table>

<h2>Hvad påvirker poolens strømforbrug?</h2>
<p>Poolens elforbrug afhænger af mange faktorer. De vigtigste er vandtemperatur, poolens størrelse, afdækning og vejrforhold.</p>

<ul>
<li><strong>Vandtemperatur:</strong> Hver grad varmere øger energiforbruget med 10–15 %. Sænk temperaturen 1–2 grader, når poolen ikke bruges.</li>
<li><strong>Poolstørrelse:</strong> Dobbelt overflade = dobbelt varmetab. En 10x5 m pool bruger ca. 50 % mere end en 8x4 m.</li>
<li><strong>Afdækning:</strong> Uden afdækning mistes 50–80 % af varmen via fordampning og stråling.</li>
<li><strong>Vindforhold:</strong> Vind øger fordampningen dramatisk. En vindskærm kan spare 15–25 % energi.</li>
<li><strong>Pumpestørrelse:</strong> En oversized pumpe spilder energi. Vælg den mindste pumpe, der kan filtrere hele volumenet i 6–8 timer.</li>
<li><strong>Sæsonlængde:</strong> Forlæng du sæsonen til april–oktober, stiger forbruget med 50–80 %.</li>
</ul>

<h2>Sådan reducerer du poolens strømforbrug</h2>
<p>Du kan spare 30–50 % af poolens elforbrug med relativt simple tiltag. De mest effektive investeringer betaler sig hjem på 1–3 sæsoner.</p>

<ul>
<li><strong>Brug altid afdækning:</strong> En termisk bobleplast koster fra 500 kr. og sparer 1.500–2.500 kWh/år.</li>
<li><strong>Skift til inverter-pumpe:</strong> Spar 50–70 % på pumpedrift – betalt hjem på 2–3 sæsoner.</li>
<li><strong>Sænk temperaturen:</strong> 26°C i stedet for 28°C sparer 20–30 % opvarmningsenergi.</li>
<li><strong>Reducér pumptiden:</strong> 6–8 timer er ofte tilstrækkeligt – test med vandkvaliteten.</li>
<li><strong>Tilføj solvarme:</strong> Solpaneler på taget eller ved poolen supplerer varmepumpen gratis.</li>
<li><strong>Vind-skærmning:</strong> Hæk, hegn eller mur reducerer fordampning og dermed varmetab.</li>
</ul>

<h2>Sæsonvariation i poolens forbrug</h2>
<p>Poolens elforbrug er stærkt sæsonafhængigt. I Danmark er poolsæsonen typisk maj–september, med toppunkt i juni–august. Om vinteren (oktober–marts) er forbruget minimalt – blot en frostsikringspumpe og eventuelt belysning. Juli er den mest forbrugstunge måned pga. lang brugstid og høje temperaturer.</p>

<h2>Ofte stillede spørgsmål om poolens strømforbrug</h2>
<p>Her er svar på de hyppigste spørgsmål om poolens energiforbrug i Danmark.</p>`,
    faqs: [
      { question: "Hvor meget koster det at drive en pool om året?", answer: "En typisk villahavepool (8x4 m) med varmepumpe koster 7.500–17.500 kr. om året i strøm. Med afdækning og inverter-pumpe kan du reducere det til 5.000–10.000 kr." },
      { question: "Hvad bruger mest strøm i en pool?", answer: "Opvarmning (50–70 %) er den største post, efterfulgt af filterpumpen (20–30 %). Belysning, robotrenser og saltanlæg udgør de resterende 10–20 %." },
      { question: "Er en pool-varmepumpe bedre end elpatron?", answer: "Ja, markant. En varmepumpe med COP 5 leverer 5 kWh varme pr. kWh strøm. En elpatron leverer kun 1 kWh pr. kWh. Du sparer 60–80 % på opvarmningen." },
      { question: "Hvor mange kWh bruger en poolpumpe om måneden?", answer: "En standard 750 W pumpe ved 10 timers daglig drift bruger ca. 225 kWh/måned (563 kr.). En inverter-pumpe bruger 60–112 kWh/måned (150–280 kr.)." },
      { question: "Kan solceller betale for poolens strømforbrug?", answer: "Ja, et 6–10 kW solcelleanlæg producerer nok strøm til at dække det meste af poolens forbrug i sæsonen, da sol og poolbrug falder sammen." },
      { question: "Hvor meget sparer en poolafdækning?", answer: "En termisk bobleplast reducerer varmetabet med 50–60 % og sparer typisk 1.500–2.500 kWh/år, svarende til 3.750–6.250 kr." },
      { question: "Hvad koster det at opvarme en pool til 28°C?", answer: "Med en varmepumpe koster det typisk 5.000–8.750 kr. for en 8x4 m pool i en dansk sæson. Med elpatron kan det koste 20.000–35.000 kr." },
      { question: "Bruger en pool strøm om vinteren?", answer: "Minimalt. En frostsikringspumpe bruger 50–100 kWh over vinteren (125–250 kr.). Uden frostsikring: 0 kWh, men risiko for frostskader." },
    ],
    relatedSlugs: ["varmepumpe", "varmtvandsbeholder", "sauna"],
    sources: [
      { name: "Energistyrelsen – Swimmingpools", url: "https://ens.dk" },
      { name: "Bolius – Pool og energiforbrug", url: "https://www.bolius.dk" },
      { name: "Poolmagasinet – Driftsomkostninger 2025" },
    ],
    calculatorConfig: {
      title: "Beregn din pools strømforbrug",
      options: [
        { label: "Overground pool + solvarme", kwhPerUse: 10 },
        { label: "Nedgravet pool (6x3 m) + varmepumpe", kwhPerUse: 18 },
        { label: "Nedgravet pool (8x4 m) + varmepumpe", kwhPerUse: 28 },
        { label: "Stor pool (10x5 m) + varmepumpe", kwhPerUse: 40 },
      ],
      usageLabel: "Uger i drift pr. sæson",
      usageUnit: "uger/sæson",
      usageMin: 8,
      usageMax: 26,
      usageDefault: 18,
      usageStep: 1,
    },
  },
  {
    slug: "sauna",
    name: "Sauna",
    title: "Sauna strømforbrug 2026 → Se kWh og pris",
    description:
      "Hvor meget strøm bruger en sauna? Se elforbrug pr. session og årligt i kWh, sammenlign ovntyper og beregn din udgift. Opdateret 2026-data.",
    heading: "Hvor meget strøm bruger en sauna?",
    quickAnswer:
      "En typisk hjemmesauna med en 6–9 kW ovn bruger 6–12 kWh pr. session (inkl. opvarmning). Ved 2–3 ugentlige sessioner svarer det til 600–1.800 kWh om året og en udgift på 1.500–4.500 kr. ved 2,50 kr./kWh. Opvarmningstiden er 30–60 minutter og udgør halvdelen af energiforbruget.",
    kwhRange: [300, 2000],
    typicalKwh: 1000,
    wattage: 7500,
    standbyWatts: 0,
    energyLabels: [],
    models: [
      { brand: "Harvia", model: "Vega BC60 (6 kW)", kwh: 850 },
      { brand: "Tylö", model: "Sense Combi 8 (8 kW)", kwh: 1100 },
      { brand: "Narvi", model: "Minex 3 kW (infrarød)", kwh: 450 },
    ],
    seasonalProfile: [1.3, 1.3, 1.2, 1.0, 0.8, 0.6, 0.5, 0.6, 0.8, 1.0, 1.3, 1.4],
    content: `<h2>Saunaens strømforbrug i overblik</h2>
<p>En hjemmesauna er en luksus, der koster mærkbart på elregningen. Med ovne på typisk 4,5–9 kW og sessioner der varer 1–2 timer, er energiforbruget sammenligneligt med at køre en stor varmeblæser. I denne guide gennemgår vi det faktiske kWh-forbrug for forskellige saunatyper, sammenligner finske saunaer med infrarøde og giver dig konkrete tips til at reducere driftsomkostningerne.</p>

<h2>Hvor mange kWh bruger en sauna pr. session?</h2>
<p>En saunasession bruger typisk 6–12 kWh afhængigt af ovnens størrelse, kabinens isolering og sessionens varighed. Opvarmning til 80–90°C tager 30–60 minutter og bruger 3–6 kWh. Vedligeholdelse af temperaturen under selve saunabadet bruger yderligere 2–5 kWh. En gennemsnitlig session koster 15–30 kr. i strøm.</p>

<table>
<thead><tr><th>Saunatype</th><th>Ovneffekt</th><th>Opvarmning</th><th>Session (1,5 t total)</th><th>Pris pr. session</th></tr></thead>
<tbody>
<tr><td>Lille finsk (2–3 pers.)</td><td>4,5 kW</td><td>3,0 kWh</td><td>5,5 kWh</td><td>14 kr.</td></tr>
<tr><td>Standard finsk (4–5 pers.)</td><td>6–8 kW</td><td>4,5 kWh</td><td>8,5 kWh</td><td>21 kr.</td></tr>
<tr><td>Stor finsk (6+ pers.)</td><td>9 kW</td><td>6,0 kWh</td><td>11,5 kWh</td><td>29 kr.</td></tr>
<tr><td>Infrarød (2 pers.)</td><td>1,5–3 kW</td><td>0,5 kWh</td><td>3,0 kWh</td><td>8 kr.</td></tr>
</tbody>
</table>

<h2>Finsk sauna vs. infrarød sauna</h2>
<p>En infrarød sauna bruger 50–70 % mindre strøm end en traditionel finsk sauna. Den opvarmer kroppen direkte med infrarødt lys i stedet for at varme luften op til 80–100°C. Opvarmningstiden er kun 10–15 minutter mod 30–60 minutter for en finsk sauna. Til gengæld giver den en anderledes oplevelse med lavere lufttemperatur (40–60°C).</p>

<table>
<thead><tr><th>Parameter</th><th>Finsk sauna</th><th>Infrarød sauna</th></tr></thead>
<tbody>
<tr><td>Temperatur</td><td>80–100°C</td><td>40–60°C</td></tr>
<tr><td>Opvarmningstid</td><td>30–60 min</td><td>10–15 min</td></tr>
<tr><td>Ovneffekt</td><td>4,5–9 kW</td><td>1,5–3 kW</td></tr>
<tr><td>kWh pr. session</td><td>6–12 kWh</td><td>2–4 kWh</td></tr>
<tr><td>Pris pr. session</td><td>15–30 kr.</td><td>5–10 kr.</td></tr>
<tr><td>Årligt kWh (2x/uge)</td><td>600–1.250 kWh</td><td>200–400 kWh</td></tr>
<tr><td>Årlig pris</td><td>1.500–3.125 kr.</td><td>500–1.000 kr.</td></tr>
</tbody>
</table>

<h2>Årligt strømforbrug for en hjemmesauna</h2>
<p>Det årlige forbrug afhænger primært af, hvor ofte du bruger saunaen. De fleste danske saunaejere bruger den 1–3 gange om ugen, med hyppigere brug om vinteren og sjældnere om sommeren. Her er en oversigt over det forventede årlige forbrug.</p>

<table>
<thead><tr><th>Brugsfrekvens</th><th>Finsk sauna (6 kW)</th><th>Infrarød sauna (2 kW)</th><th>Finsk – årlig pris</th><th>Infrarød – årlig pris</th></tr></thead>
<tbody>
<tr><td>1 gang/uge</td><td>350–550 kWh</td><td>100–200 kWh</td><td>875–1.375 kr.</td><td>250–500 kr.</td></tr>
<tr><td>2 gange/uge</td><td>700–1.100 kWh</td><td>200–400 kWh</td><td>1.750–2.750 kr.</td><td>500–1.000 kr.</td></tr>
<tr><td>3 gange/uge</td><td>1.050–1.650 kWh</td><td>300–600 kWh</td><td>2.625–4.125 kr.</td><td>750–1.500 kr.</td></tr>
<tr><td>Daglig</td><td>2.200–3.650 kWh</td><td>730–1.460 kWh</td><td>5.500–9.125 kr.</td><td>1.825–3.650 kr.</td></tr>
</tbody>
</table>

<h2>Populære saunaovne og elforbrug</h2>
<p>De mest populære saunaovne i Danmark er fra finske og svenske producenter. Ovnens størrelse skal matche kabinens volumen – en for lille ovn bruger mere energi, fordi den kører konstant. Tommelfingerregel: 1 kW pr. 1–1,5 m³ kabinevolumen.</p>

<table>
<thead><tr><th>Model</th><th>Effekt</th><th>Kabine (m³)</th><th>kWh/session</th><th>Årligt kWh (2x/uge)</th></tr></thead>
<tbody>
<tr><td>Harvia Vega BC60</td><td>6 kW</td><td>5–8 m³</td><td>7 kWh</td><td>730 kWh</td></tr>
<tr><td>Tylö Sense Combi 8</td><td>8 kW</td><td>8–12 m³</td><td>10 kWh</td><td>1.040 kWh</td></tr>
<tr><td>Narvi Minex (infrarød)</td><td>3 kW</td><td>3–5 m³</td><td>3,5 kWh</td><td>365 kWh</td></tr>
<tr><td>EOS 34A (compact)</td><td>4,5 kW</td><td>3–6 m³</td><td>5,5 kWh</td><td>572 kWh</td></tr>
</tbody>
</table>

<h2>Hvad påvirker saunaens strømforbrug?</h2>
<p>Flere faktorer bestemmer, hvor mange kWh din sauna bruger pr. session. De vigtigste er ovnens størrelse i forhold til kabinen, isoleringen og dine brugevaner.</p>

<ul>
<li><strong>Kabineisolering:</strong> Vellisolerede kabiner (100 mm mineraluld + dampspærre) opvarmes 30–40 % hurtigere.</li>
<li><strong>Ovnstørrelse vs. kabine:</strong> En for lille ovn kører 100 % af tiden og bruger mere energi totalt.</li>
<li><strong>Opvarmningstid:</strong> Udgør 40–60 % af det samlede forbrug. Reducér ved bedre isolering.</li>
<li><strong>Temperaturindstilling:</strong> 80°C kræver 15–20 % mindre energi end 100°C.</li>
<li><strong>Sten i ovnen:</strong> Mange sten giver bedre varmelagring, men længere opvarmning.</li>
<li><strong>Sessionslængde:</strong> Hver ekstra 30 min koster 2–4 kWh i en finsk sauna.</li>
</ul>

<h2>Sådan reducerer du saunaens strømforbrug</h2>
<p>Du kan spare 20–35 % af saunaens elforbrug uden at kompromittere oplevelsen. Her er de mest effektive tiltag.</p>

<ul>
<li><strong>Isolér kabinen ordentligt:</strong> 100 mm mineraluld + aluminiumsdampspærre kan halvere opvarmningstiden.</li>
<li><strong>Tænd kun 30 min før brug:</strong> Undgå at lade saunaen stå og holde temperatur i tomgang.</li>
<li><strong>Sænk temperaturen:</strong> 80°C er fuldt tilstrækkeligt for de fleste. Spar 15–20 % energi.</li>
<li><strong>Vælg den rette ovnstørrelse:</strong> En optimalt dimensioneret ovn er den mest energieffektive.</li>
<li><strong>Overvej infrarød:</strong> Bruger du primært saunaen for sundhed og afslapning (ikke traditionelt gus), sparer du 50–70 %.</li>
<li><strong>Sauna om aftenen:</strong> Benyt lavere elpriser (timepriser) ved at planlægge sessioner til billige timer.</li>
</ul>

<p>Saunaens elforbrug er sammenligneligt med andre store varmegeneratorer. Se også <a href="/varmeblaeser/">varmeblæserens strømforbrug</a> og <a href="/varmtvandsbeholder/">varmtvandsbeholderens elforbrug</a> for perspektiv.</p>

<h2>Sæsonvariation i saunaforbrug</h2>
<p>Saunaforbruget varierer markant over året. De fleste bruger saunaen hyppigere i vinterhalvåret (oktober–marts), hvor forbruget typisk er 50–100 % højere end om sommeren. Julen og nytår er typisk den mest intensive periode, mens juli–august ofte er de roligste måneder.</p>

<h2>El-krav og installation</h2>
<p>En saunaovn over 4,5 kW kræver 400V (trefaset) strøm og skal installeres af en autoriseret elektriker. Ovne under 4,5 kW kan tilsluttes en almindelig 230V stikkontakt. Husk at sikringsgruppen skal dimensioneres korrekt – en 9 kW ovn kræver en 16A trefaset sikring.</p>

<h2>Ofte stillede spørgsmål om saunaens strømforbrug</h2>
<p>Her er svar på de hyppigste spørgsmål om saunaens energiforbrug.</p>`,
    faqs: [
      { question: "Hvad koster en saunasession i strøm?", answer: "En typisk session i en finsk sauna (1,5 time inkl. opvarmning) koster 15–30 kr. i strøm. En infrarød sauna koster 5–10 kr. pr. session." },
      { question: "Hvor meget strøm bruger en sauna om måneden?", answer: "Ved 2 sessioner pr. uge bruger en finsk sauna ca. 60–100 kWh om måneden, svarende til 150–250 kr. Om vinteren kan det være 80–130 kWh." },
      { question: "Er en infrarød sauna billigere i drift?", answer: "Ja, markant. En infrarød sauna bruger 50–70 % mindre strøm end en finsk sauna og har kun 10–15 minutters opvarmningstid." },
      { question: "Kan en sauna køre på en almindelig stikkontakt?", answer: "Kun ovne under 4,5 kW (230V). De fleste finske saunaovne kræver 400V (trefaset) og installation af autoriseret elektriker." },
      { question: "Hvor lang tid tager det at opvarme en sauna?", answer: "En finsk sauna: 30–60 minutter til 80–90°C. En infrarød sauna: 10–15 minutter til 40–60°C. God isolering kan reducere opvarmningstiden med 30–40 %." },
      { question: "Er det dyrt at have sauna i hjemmet?", answer: "Ved 2 ugentlige sessioner koster en finsk sauna 1.500–2.750 kr. om året i strøm. Det svarer til 125–230 kr./måned – billigere end de fleste fitnessabonnementer." },
      { question: "Bruger en sauna strøm, når den er slukket?", answer: "Nej, en saunaovn har intet standbyforbrug. Den bruger kun strøm, når den er tændt. Husk at slukke helt efter brug." },
      { question: "Hvilken ovnstørrelse skal jeg vælge til min sauna?", answer: "Tommelfingerregel: 1 kW pr. 1–1,5 m³ kabinevolumen. En 6 m³ kabine kræver en 4,5–6 kW ovn. En for lille ovn bruger mere energi totalt." },
    ],
    relatedSlugs: ["varmeblaeser", "varmtvandsbeholder", "varmepumpe", "pool"],
    sources: [
      { name: "Harvia – Saunaovn specifikationer", url: "https://www.harvia.com" },
      { name: "Energistyrelsen – Elopvarmning", url: "https://ens.dk" },
      { name: "Bolius – Sauna i hjemmet", url: "https://www.bolius.dk" },
    ],
    calculatorConfig: {
      title: "Beregn din saunas strømforbrug",
      options: [
        { label: "Infrarød sauna (1,5–3 kW)", kwhPerUse: 3.0 },
        { label: "Lille finsk sauna (4,5 kW)", kwhPerUse: 5.5 },
        { label: "Standard finsk sauna (6–8 kW)", kwhPerUse: 8.5 },
        { label: "Stor finsk sauna (9 kW)", kwhPerUse: 11.5 },
      ],
      usageLabel: "Sessioner pr. uge",
      usageUnit: "gange/uge",
      usageMin: 1,
      usageMax: 7,
      usageDefault: 2,
      usageStep: 1,
    },
  },
];
