import type { ApplianceData } from "@/lib/types";

/**
 * Flaskevarmer — elektrisk opvarmning af sutteflasker med modermælk eller modermælkserstatning. Intet EU-energimærke.
 * Tal: Philips Avent SCF358 (400 W, standby under 0,3 W, slukket 0,24 W, holder varm op til 60 min og slukker selv;
 * eco passport + produktside), SCF355/00 (300 W) og SCF355/08 (275 W) — 150 ml fra 20 °C på 3 min; Beurer BY 52 (80 W,
 * 3-18 min, 100 ml fra køleskab ca. 8 min, 250 ml ca. 14 min, advarer mod lang varmholdning). sundhed.dk: kog vandet de
 * første 4 måneder, lav hver flaske frisk de første 2 måneder. kWh pr. flaske = watt × tid (vores omregning, fuld effekt
 * som loft); tiden for SCF358, seks flasker om dagen og elkedel-/mælkeregnestykket er vores skøn/beregning.
 */
const flaskevarmer: ApplianceData = {
  slug: "flaskevarmer",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "elkedel",
    synonyms: ["flaskevarmer", "sutteflaskevarmer", "flaskevarmer til baby", "babyflaskevarmer", "bottle warmer", "philips avent flaskevarmer", "opvarmning af sutteflaske", "varme modermælk"],
  },
  name: "Flaskevarmer",
  article: "en",
  title: "Flaskevarmer strømforbrug (2026) → watt og kWh pr. flaske",
  description:
    "En flaskevarmer bruger 80-400 watt i få minutter, under 0,03 kWh pr. flaske. Se tallene for kold og stuevarm mælk, varmhold og natflasker på et helt år.",
  heading: "Strømforbrug for en flaskevarmer: kWh, pris pr. flaske og dyreste timer",
  quickAnswer:
    "En flaskevarmer bruger 80-400 W, men kun i 3-15 minutter pr. flaske. Det giver 0,01-0,03 kWh pr. flaske, eller {{kr 0,01}}-{{kr 0,03}} ved {{pris_kwh}}. Seks flasker om dagen i en flaskevarmer på 300 W bliver cirka 33 kWh på et år, svarende til {{kr 33}}. Hold-varm-funktionen kan koste mere end selve opvarmningen, hvis den står tændt længe.",
  kwhRange: [5, 120],
  typicalKwh: 33,
  wattage: 300,
  standbyWatts: 0.3,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Høj effekt, kort tid</h2>
<p>En flaskevarmer varmer sutteflasken op i et lille vandbad eller med damp, så mælken når kropstemperatur uden at blive for varm i den ene ende. Effekten varierer meget fra model til model. Philips Avent SCF358 er mærket 400 W, den ældre SCF355 300 W og den nyeste udgave af SCF355 275 W. Beurers BY 52 bruger kun 80 W og er til gengæld længere tid om det. Fælles for dem er, at varmelegemet kun kører i nogle få minutter.</p>
<table>
<thead><tr><th>Flaskevarmer</th><th>Effekt</th><th>Opvarmning</th><th>kWh pr. flaske</th><th>Pris pr. flaske</th></tr></thead>
<tbody>
<tr><td>Beurer BY 52, 100 ml fra køleskabet</td><td>80 W</td><td>ca. 8 min</td><td>0,011</td><td>{{kr 0,011}}</td></tr>
<tr><td>Beurer BY 52, 250 ml fra køleskabet</td><td>80 W</td><td>ca. 14 min</td><td>0,019</td><td>{{kr 0,019}}</td></tr>
<tr><td>Philips Avent SCF355, 150 ml ved 20 grader</td><td>300 W</td><td>ca. 3 min</td><td>0,015</td><td>{{kr 0,015}}</td></tr>
<tr><td>Philips Avent SCF358, større flaske (vores skøn: 4 min)</td><td>400 W</td><td>ca. 4 min</td><td>0,027</td><td>{{kr 0,027}}</td></tr>
</tbody>
</table>
<p>kWh-tallene er vores omregning: effekt gange tid, med fuld effekt hele tiden. Det er et loft, for varmelegemet slår som regel fra kort før, flasken er færdig. Philips angiver de 3 minutter for 150 ml mælk, der starter ved 20 grader, i en Avent-flaske på 260 ml; kommer mælken direkte fra køleskabet, tager det længere.</p>

<h2>Kold mælk fra køleskabet eller stuevarm erstatning</h2>
<p>Det, der flytter forbruget mest, er, hvor kold mælken er, når den kommer i flaskevarmeren. Beurers brugsanvisning viser det tydeligt: 100 ml mælk fra køleskabet tager cirka 8 minutter at nå 37 grader, 250 ml cirka 14 minutter. Modermælk, der har stået i køleskabet, er den dyreste at varme op. Modermælkserstatning, der blandes med vand, er typisk lunken i forvejen og kræver mindre.</p>
<p>Til sammenligning er selve mælkens energibehov lille. At varme 150 ml mælk fra 5 til 37 grader kræver efter vores beregning omkring 0,005 kWh. Resten går til vandbadet, beholderen og den varme, der forsvinder ud i luften. Flaskevarmeren er altså ikke specielt effektiv, men den er så lille, at det næsten ikke betyder noget i kroner.</p>

<h2>Hold-varm-funktionen</h2>
<p>De fleste flaskevarmere kan holde flasken varm, til barnet er klar. Philips skriver, at SCF358 holder mælken varm i op til 60 minutter og derefter slukker af sig selv. Beurer BY 52 har et hold-varm-trin mellem 35 og 85 grader, og Beurer advarer selv i brugsanvisningen mod at holde mad varm længe, fordi vitaminer går tabt, og bakterier trives ved 32-42 grader.</p>
<p>Ingen af producenterne oplyser, hvor meget strøm hold-varm-funktionen bruger. Termostaten holder vandbadet på temperatur og slår til og fra, så forbruget er lavere end ved opvarmning, men det løber på i en time. Efter vores skøn kan en times varmhold koste lige så meget som én eller to opvarmninger. Det er derfor både billigst og bedst for mælken at varme flasken, lige før den skal bruges.</p>

<h2>Et år med flaske</h2>
<p>Hvor mange flasker et barn får, afhænger af alder, og om det også ammes, så beregneren lader dig selv vælge antallet. Vi regner som eksempel med seks flasker om dagen, hele året.</p>
<table>
<thead><tr><th>Flaskevarmer (seks flasker om dagen)</th><th>kWh om året</th><th>Pris om året</th><th>Pris om måneden</th></tr></thead>
<tbody>
<tr><td>Beurer BY 52, 100 ml</td><td>ca. 24</td><td>{{kr 24}}</td><td>{{kr 24 /md}}</td></tr>
<tr><td>Philips SCF355, 150 ml</td><td>ca. 33</td><td>{{kr 33}}</td><td>{{kr 33 /md}}</td></tr>
<tr><td>Beurer BY 52, 250 ml</td><td>ca. 42</td><td>{{kr 42}}</td><td>{{kr 42 /md}}</td></tr>
<tr><td>Philips SCF358, større flaske</td><td>ca. 59</td><td>{{kr 59}}</td><td>{{kr 59 /md}}</td></tr>
</tbody>
</table>
<p>Philips oplyser, at SCF358 bruger 0,24 W, når den er slukket, og under 0,3 W i standby, som den går i efter under et minut. Står den i stikkontakten hele året, er det cirka 2-3 kWh. Det er ikke meget, men det er mere end mange forventer af et apparat, der kun er tændt ti minutter om dagen.</p>

<h2>Flaskevarmer, elkedel eller mikroovn?</h2>
<p>Den gammeldags metode er at stille flasken i en skål varmt vand fra <a href="/elkedel/">elkedlen</a>. At koge en halv liter vand fra 10 grader kræver efter vores beregning omkring 0,05 kWh, altså mere end en flaskevarmer bruger på en flaske. Metoden er billig i udstyr, men ikke i strøm, og den er langsommere.</p>
<p>En <a href="/mikroovn/">mikroovn</a> er hurtig, men den varmer ujævnt, og der kan opstå varme lommer i mælken. Philips fremhæver netop, at flaskevarmerens optøningsfunktion er sikrere end at tø modermælk op i mikroovnen. Strømmæssigt er forskellen lille; sikkerheden er grunden til at vælge flaskevarmeren.</p>
<p>Har du et barn under fire måneder, skriver sundhed.dk, at vandet til modermælkserstatning skal koges, og at hver flaske skal laves frisk de første to måneder. Det betyder, at elkedlen alligevel er i brug flere gange om dagen. Koger du vand til hele dagens flasker på én gang, sparer du kogninger.</p>

<h2>Bruger flaskevarmeren strøm i de dyre timer?</h2>
<p>Ja, når barnet er sultent — og det kan man ikke flytte. Aftenflasken falder ofte i de dyre timer kl. 17-21, mens natflaskerne ligger i de billige. Forskellen er under en øre pr. flaske, så det er ikke noget, du skal tænke på. Det, der kan spares, er hold-varm-tiden og flasker, der varmes op og ikke bliver drukket.</p>

<h2>Gode råd</h2>
<ul>
<li><strong>Varm lige før brug</strong> og spring hold-varm over, hvis du kan.</li>
<li><strong>Varm kun det, barnet drikker</strong> — en halvfuld flaske, der hældes ud, er spildt strøm og mælk.</li>
<li><strong>Træk stikket</strong> om natten, hvis flaskevarmeren ikke bruges, eller lad det sidde, hvis natflaskerne kommer.</li>
<li><strong>Kog vand til flere flasker ad gangen</strong> i elkedlen.</li>
<li><strong>Rengør og afkalk</strong> efter producentens anvisning; kalk forlænger opvarmningen.</li>
</ul>
<p>Se også, hvad en <a href="/sterilisator/">dampsterilisator</a> til sutteflasker bruger, og hvad en <a href="/babyalarm/">babyalarm</a> bruger om natten.</p>`,
  faqs: [
    { question: "Hvad koster det at varme en sutteflaske?", answer: "En flaskevarmer bruger 0,01-0,03 kWh pr. flaske, svarende til {{kr 0,01}}-{{kr 0,03}} ved {{pris_kwh}}. Kold mælk fra køleskabet tager længst tid." },
    { question: "Hvor mange watt bruger en flaskevarmer?", answer: "Philips Avent SCF358 bruger 400 W, SCF355 275-300 W og Beurer BY 52 80 W. Den lave effekt giver en længere opvarmning, ikke nødvendigvis et lavere forbrug." },
    { question: "Bruger flaskevarmeren strøm, når den holder flasken varm?", answer: "Ja. Producenterne oplyser ikke hvor meget, men en time på hold-varm kan efter vores skøn koste lige så meget som én eller to opvarmninger. Philips SCF358 slukker selv efter 60 minutter." },
    { question: "Er det billigere at varme flasken i vand fra elkedlen?", answer: "Nej. At koge en halv liter vand bruger efter vores beregning omkring 0,05 kWh, mere end flaskevarmeren bruger på en flaske." },
    { question: "Hvad bruger en flaskevarmer på et år?", answer: "Med seks flasker om dagen bruger en flaskevarmer på 300 W cirka 33 kWh om året, svarende til {{kr 33}}." },
  ],
  relatedSlugs: ["sterilisator", "babyalarm", "elkedel", "mikroovn"],
  sources: [
    { name: "Philips — eco passport SCF358", url: "https://www.documents.philips.com/assets/20210104/c4f35affe33248468625aca6010d6a59.pdf" },
    { name: "Philips — Avent hurtig flaskevarmer SCF358/00, produktside", url: "https://www.philips.co.uk/shop/UK_Klarna/mother-child-care/bottle-warmers-sterilisers/avent-fast-bottle-warmer/p/SCF358_00" },
    { name: "Philips — produktblad SCF355/00", url: "https://www.documents.philips.com/assets/20210107/fcc27042dfc8406784bbaca90153732f.pdf" },
    { name: "Philips — SCF355/08, produktside", url: "https://www.philips.com/c-p/SCF355_08/fast-bottle-warmer" },
    { name: "Beurer — brugsanvisning BY 52", url: "https://res.cloudinary.com/beurer/image/upload/v1733379891/stibo-live/95402_BY52_2024-11-21_03_IM2_BEU_EN.pdf" },
    { name: "sundhed.dk — Modermælkserstatning: bland et måltid ad gangen", url: "https://www.sundhed.dk/borger/patienthaandbogen/boern/om-boern/det-nyfoedte-barn/modermaelkserstatning-bland-et-maaltid-ad-gangen/" },
  ],
  calculatorConfig: {
    title: "Beregn flaskevarmerens strømforbrug",
    options: [
      { label: "80 W, 100 ml fra køleskabet (ca. 8 min)", kwhPerUse: 0.011 },
      { label: "300 W, 150 ml ved stuetemperatur (ca. 3 min)", kwhPerUse: 0.015 },
      { label: "80 W, 250 ml fra køleskabet (ca. 14 min)", kwhPerUse: 0.019 },
      { label: "400 W, større flaske (ca. 4 min, vores skøn)", kwhPerUse: 0.027 },
    ],
    usageLabel: "Flasker pr. dag",
    usageUnit: "flasker/dag",
    usageMin: 1,
    usageMax: 12,
    usageDefault: 6,
    usageStep: 1,
    per: "flaske",
    perYear: 365,
  },
  publishDate: "2026-12-20",
  updated: "2026-11-23",
};

export default flaskevarmer;
