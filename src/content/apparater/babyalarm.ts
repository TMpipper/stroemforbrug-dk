import type { ApplianceData } from "@/lib/types";

/**
 * Babyalarm — lydalarm (DECT), videoalarm med forældreenhed og wifi-kamera. Intet EU-energimærke.
 * Tal: Philips Avent SCD831/833/835 (adapter 5 V/1 A = 5 W, tomgang 0,1 W; forældreenhed Li-ion 2.600 mAh, ca. 10 timer i
 * ECO efter 3 timers opladning), Philips Avent SCD7xx (adapter 6 V/0,5 A; NiMH 1.300/1.800 mAh), Motorola VM65 Connect
 * (to adaptere 5 V/1.000 mA; 3,8 V 2.000 mAh, op til 5 timer), Motorola PIP1610 HD Connect (5 V/1.500 mA; 3,8 V 2.800 mAh,
 * op til 6 timer), Tænk (test af 32 babyalarmer, feb. 2025; batteritid vægter 10 %). Adapterværdier er maksimum.
 * Gennemsnitseffekterne (1-3,5 W i alt) er vores skøn ud fra batteri-Wh ÷ driftstid; ingen kilde har målt watt.
 */
const babyalarm: ApplianceData = {
  slug: "babyalarm",
  meta: {
    category: "hobby",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["babyalarm", "babyalarm med kamera", "videobabyalarm", "babyphone", "baby monitor", "babykamera", "dect babyalarm", "philips avent babyalarm", "motorola babyalarm", "wifi babyalarm"],
  },
  name: "Babyalarm",
  article: "en",
  title: "Babyalarm strømforbrug (2026) → watt, opladning og kWh/år",
  description:
    "En babyalarm bruger få watt, også med kamera og skærm. Se watt for lyd- og videoalarmer, hvad en opladning af forældreenheden koster, og kWh på et år.",
  heading: "Strømforbrug for en babyalarm: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En videobabyalarm bruger efter vores skøn omkring 3-4 W i alt for kamera og forældreenhed, og en ren lydalarm omkring 1 W. Står videoalarmen tændt 14 timer i døgnet, bliver det cirka 18 kWh om året, svarende til {{kr 18}} ved {{pris_kwh}}. En opladning af forældreenheden koster under {{oere 0,01}}.",
  kwhRange: [2, 90],
  typicalKwh: 18,
  wattage: 3.5,
  standbyWatts: 0.1,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>To enheder, to adaptere</h2>
<p>En babyalarm består af en babyenhed, der står ved sengen, og en forældreenhed, du har med dig. På en ren lydalarm er babyenheden en lille mikrofon og en radio; på en videoalarm er den et kamera med infrarødt nattesyn. Forældreenheden har højttaler, ofte en skærm og et genopladeligt batteri. Babyenheden står næsten altid i stikkontakten, og forældreenheden lader i en holder eller via et USB-kabel.</p>
<p>Producenterne oplyser ikke, hvad enhederne bruger, mens de kører, men de oplyser adapternes maksimale effekt og batteriernes størrelse. Det giver et loft og en ret god idé om det faktiske forbrug.</p>
<table>
<thead><tr><th>Babyalarm</th><th>Adapter (maks.)</th><th>Batteri i forældreenhed</th><th>Batteritid</th></tr></thead>
<tbody>
<tr><td>Philips Avent SCD7xx, lyd (DECT)</td><td>6 V, 0,5 A (3 W)</td><td>NiMH, 1.300-1.800 mAh</td><td>—</td></tr>
<tr><td>Philips Avent SCD831/833/835, video</td><td>5 V, 1 A (5 W)</td><td>Li-ion, 2.600 mAh</td><td>ca. 10 timer i ECO</td></tr>
<tr><td>Motorola VM65 Connect, video og wifi</td><td>5 V, 1 A pr. enhed</td><td>3,8 V, 2.000 mAh</td><td>op til 5 timer</td></tr>
<tr><td>Motorola PIP1610 HD Connect</td><td>5 V, 1,5 A</td><td>3,8 V, 2.800 mAh</td><td>op til 6 timer</td></tr>
</tbody>
</table>
<p>Adapterens tal er det højeste, den kan levere, ikke det, alarmen bruger. En adapter på 5 W, der lader et fladt batteri og samtidig driver skærmen, kan nærme sig de 5 W, men det meste af tiden bruger enheden langt mindre.</p>

<h2>Hvad bruger alarmen i timen?</h2>
<p>Batteriet afslører forældreenhedens forbrug. Motorolas VM65 har et batteri på 3,8 V og 2.000 mAh, altså cirka 7,6 Wh, og det holder op til 5 timer med skærmen tændt. Det svarer efter vores omregning til omkring 1,5 W. PIP1610 med 10,6 Wh på 6 timer giver cirka 1,8 W. Philips oplyser omkring 10 timer i ECO-tilstand, hvor skærmen slukker, når der er stille, så her er forbruget lavere. Kameraet ved sengen har ingen batteri, og der har vi ingen målt værdi; vi regner med omkring 2 W for et kamera med nattesyn.</p>
<table>
<thead><tr><th>Babyalarm (vores skøn)</th><th>Watt i alt</th><th>kWh i timen</th><th>14 timer om dagen, et år</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Lydalarm (DECT)</td><td>ca. 1 W</td><td>0,001</td><td>ca. 5 kWh</td><td>{{kr 5}}</td></tr>
<tr><td>Wifi-kamera, mobilen som skærm</td><td>ca. 2 W</td><td>0,002</td><td>ca. 10 kWh</td><td>{{kr 10}}</td></tr>
<tr><td>Videoalarm med forældreenhed</td><td>ca. 3,5 W</td><td>0,0035</td><td>ca. 18 kWh</td><td>{{kr 18}}</td></tr>
<tr><td>Øvre grænse: begge adaptere fuldt udnyttet</td><td>10 W</td><td>0,01</td><td>ca. 51 kWh</td><td>{{kr 51}}</td></tr>
</tbody>
</table>
<p>De 14 timer er et eksempel: en nat på 11-12 timer plus lur om dagen. Står alarmen tændt døgnet rundt, så gang med 24 i stedet. Selv da bruger en videoalarm efter vores skøn kun omkring 30 kWh om året, svarende til {{kr 30}}.</p>

<h2>Opladning af forældreenheden</h2>
<p>Et batteri på 7,6 Wh rummer under 0,01 kWh. Regner vi med et tab på 15 procent i opladeren, koster en fuld opladning cirka 0,009 kWh, svarende til {{oere 0,009}}. Lader du hver dag i et år, bliver det godt 3 kWh, eller {{kr 3,3}}. Philips skriver, at forældreenheden til SCD83x skal lade i 3 timer for at holde cirka 10 timer i ECO-tilstand, og Motorola anbefaler at lade VM65 i 16 timer første gang.</p>
<p>Opladningen er altså ikke en post, du skal bekymre dig om. Det, der fylder mest, er, at kamera og skærm er tændt mange timer, og selv det er en lille udgift sammenlignet med de fleste andre apparater i et hjem med et lille barn. En <a href="/flaskevarmer/">flaskevarmer</a> eller en dampsterilisator bruger mere på et år, selv om de kun kører få minutter ad gangen.</p>

<h2>Standby: når alarmen ikke er i brug</h2>
<p>Philips oplyser, at adapteren til SCD83x bruger 0,1 W uden belastning. Står den i stikkontakten hele året uden at være i brug, bliver det under 1 kWh. Det er småt, men det er god vane at trække adaptere ud, når de ikke bruges — især hvis der er flere i huset. Læs mere om småforbrug i guiden om <a href="/standby/">standby</a>.</p>
<p>Wifi-kameraer er en undtagelse. De står ofte tændt hele tiden, fordi de også bruges som overvågning af hjemmet. Så ligner forbruget et <a href="/overvaagningskamera/">overvågningskamera</a>, der kører døgnet rundt, og årsforbruget bliver efter vores skøn omkring 15-20 kWh pr. kamera.</p>

<h2>Lyd eller video: hvad betyder det for strømmen?</h2>
<p>En lydalarm bruger efter vores skøn omkring en tredjedel af en videoalarm, og batteriet i forældreenheden holder ofte flere dage. Videoalarmer bruger mere, fordi kameraet har infrarøde lysdioder til nattesyn, og fordi skærmen er tændt. Mange har en ECO- eller VOX-tilstand, hvor skærmen slukker, når der er stille, og tænder ved lyd. Det sparer mest på batteriet og forlænger tiden mellem opladningerne.</p>
<p>Forbrugerrådet Tænk testede 32 babyalarmer i 2025 og lod batteritiden i forældreenheden tælle med 10 procent i den samlede vurdering. Strømforbruget indgik ikke som et selvstændigt punkt, og det er forståeligt: forskellen mellem modellerne er nogle få kWh om året. Vælg alarmen efter rækkevidde, lyd, billede og batteritid; strømmen er en bisag.</p>

<h2>Bruger babyalarmen strøm i de dyre timer?</h2>
<p>En del af tiden. Babyalarmen er tændt om aftenen fra puttetid, og det er netop i timerne kl. 17-21, at strømmen er dyrest. Men med 1-4 W er forskellen mellem en billig og en dyr time under en øre. Der er ingen grund til at flytte noget, og alarmen skal selvfølgelig være tændt, når barnet sover. Oplad gerne forældreenheden om natten eller i løbet af dagen — ikke for prisens skyld, men så den er fuld, når aftenen begynder.</p>

<h2>Gode råd</h2>
<ul>
<li><strong>Brug ECO- eller VOX-tilstand</strong>, så skærmen kun tænder ved lyd.</li>
<li><strong>Træk adapterne ud</strong>, når alarmen ikke bruges i længere tid.</li>
<li><strong>Vælg efter batteritid</strong>, hvis du vil undgå at lade hver dag.</li>
<li><strong>Glem ikke wifi-kameraet</strong> — det kører ofte døgnet rundt.</li>
</ul>`,
  faqs: [
    { question: "Hvor mange watt bruger en babyalarm?", answer: "Efter vores skøn bruger en lydalarm omkring 1 W og en videoalarm med kamera og forældreenhed omkring 3-4 W i alt. Adapterne er mærket 3-5 W, men det er maksimum." },
    { question: "Hvad koster en babyalarm i strøm om året?", answer: "En videoalarm, der er tændt 14 timer i døgnet, bruger efter vores skøn cirka 18 kWh om året, svarende til {{kr 18}} ved {{pris_kwh}}." },
    { question: "Hvad koster det at oplade forældreenheden?", answer: "Et batteri på 7,6 Wh koster med tab i opladeren cirka 0,009 kWh at lade op, svarende til {{oere 0,009}}. Hver dag i et år er det godt 3 kWh." },
    { question: "Bruger en babyalarm strøm, når den ikke er i brug?", answer: "Adapteren bruger lidt. Philips oplyser 0,1 W uden belastning for SCD83x, hvilket bliver under 1 kWh om året." },
    { question: "Bruger en videobabyalarm mere strøm end en lydalarm?", answer: "Ja, omkring tre gange så meget efter vores skøn, fordi kamera, nattesyn og skærm bruger strøm. Forskellen er dog kun nogle få kWh om året." },
  ],
  relatedSlugs: ["overvaagningskamera", "flaskevarmer", "sterilisator", "router"],
  sources: [
    { name: "Philips Avent — brugsanvisning SCD831/833/835", url: "https://www.documents.philips.com/assets/20220421/f2c37674fa52468893b1ae7e00507c8b.pdf" },
    { name: "Philips Avent — brugsanvisning SCD7xx (DECT)", url: "https://www.documents.philips.com/assets/20201021/771f25ef83e643c98fd0ac5b01580400.pdf" },
    { name: "Motorola Nursery — brugervejledning VM65 Connect", url: "https://motorolanursery.com/media/docdzjji/vm65-connect_ug_en_v5.pdf" },
    { name: "Motorola Nursery — brugervejledning PIP1610 HD Connect", url: "https://www.motorolanursery.com/media/fysn25te/pip1610-hd-connect_um_en_v2.pdf" },
    { name: "Forbrugerrådet Tænk — Sådan har vi testet babyalarmer", url: "https://taenk.dk/test-og-forbrugerliv/boern/babyalarmer/saadan-har-vi-testet-babyalarmer" },
  ],
  calculatorConfig: {
    title: "Beregn babyalarmens strømforbrug",
    options: [
      { label: "Lydalarm, ca. 1 W i alt (vores skøn)", kwhPerUse: 0.001 },
      { label: "Wifi-kamera med mobilen som skærm, ca. 2 W", kwhPerUse: 0.002 },
      { label: "Videoalarm med forældreenhed, ca. 3,5 W", kwhPerUse: 0.0035 },
      { label: "Øvre grænse: adaptere fuldt udnyttet, 10 W", kwhPerUse: 0.01 },
    ],
    usageLabel: "Timer tændt pr. døgn",
    usageUnit: "timer/dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 14,
    usageStep: 1,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-12-19",
  updated: "2026-11-23",
};

export default babyalarm;
