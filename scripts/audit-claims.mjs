#!/usr/bin/env node
/**
 * audit-claims — stopper en build, der påstår noget, den ikke kan dokumentere.
 *
 * Portet fra Elpriser.dk (søstersitet) 11. oktober 2026 uden dets sitespecifikke kontroller
 * A–K (sammenligningen, selskabssiderne, badges) — Strømforbrug.dk har ingen af delene.
 * Tilbage er de tre generelle regler plus familiens linkregel:
 *
 * 1. **Superlativer uden omfang.** I Forbrugerombudsmandens sag 20/05642 lovede en
 *    elsammenligningsside "din billigste el-aftale" blandt sine partnere og blev alligevel
 *    målt på den fulde superlativtest. "X er billigst" skal derfor bære sit omfang i SAMME
 *    sætning. Her er superlativerne om den billigste rene, varige aftale og om
 *    marginalprisen, så "uden abonnement", "marginalpris", "i Vestdanmark/Østdanmark" og
 *    "rene, varige" tæller også som omfang.
 *
 * 2. **Generiske grønne påstande.** LOV nr 558 af 27/05/2025 (ECGT) gør "grøn strøm" og
 *    "klimavenlig strøm" vildledende i markedsføring af elprodukter fra 27. september 2026.
 *    Definitioner, spørgsmål og negationer er tilladt.
 *
 * 3. **Negative påstande om et NAVNGIVET selskab** ("frarådes", "dårligst") skal bære deres
 *    kilde i samme sætning (markedsføringslovens § 21). Navnene hentes levende fra feedet.
 *
 * 4. **Ingen »Kilde:«-linje i designet.** Kilderne står i sidens ene kildeliste (data-sources)
 *    — aldrig som en linje under en tabel eller en blok. Et <p>, der kun siger "Kilder", er
 *    listens overskrift og ikke en fejl.
 *
 * 5. **Ingen href til et andet af vores sites.** Sitene holdes adskilt (elselskab.dk,
 *    elselskaber.dk, billigste-elselskab.nu, tjekelregning.dk, elleverandoer.dk,
 *    elselskabdanmark.dk). Elpriser.dk ER tilladt her (ejerens valg 11. oktober 2026,
 *    familiens brand), og elpris.dk er Forsyningstilsynet — ikke vores.
 *
 * Scriptet læser den **byggede** HTML, ikke kilden: route-filer har indhold, som
 * indholdslaget aldrig ser.
 *
 * Kør: npm run audit-claims   (automatisk via postbuild og `npm run audit`)
 */
import "./lib/env.mjs";
import { readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { bodyText, sentenceAt, stripElements, walkHtml } from "./lib/html.mjs";

const ROOT = resolve(import.meta.dirname, "..");
const BUILD = join(ROOT, ".next/server/app");
const failures = [];
const notes = [];
/* Tælles, så et "ok" kan ses at hvile på rigtige kandidater — ikke på filtre, der sluger alt. */
const tally = { superlatives: 0, questions: 0, notSupplier: 0, timeOrTariff: 0, scoped: 0, green: 0, negative: 0, sources: 0 };

const pages = walkHtml(BUILD).filter((f) => !/_global-error|_not-found/.test(f));
if (!pages.length) {
  console.log("audit-claims: ingen bygget HTML fundet — kør efter `next build`.");
  process.exit(0);
}

/**
 * Kun brødteksten — se lib/html.mjs. Før teksten strippes, markeres hvert https-link, så
 * "har en kilde i samme sætning" kan afgøres på ren tekst: et <a href="https://…"> bliver
 * til ordet KILDELINK i teksten.
 */
const text = (html) => bodyText(html.replace(/<a\b[^>]*href="https:\/\/[^"]*"[^>]*>/gi, " KILDELINK "));

/**
 * Selskabsnavne fra feedet — korte former uden A/S, ApS, a.m.b.a., "Danmark".
 *
 * Hentes ved kørsel, så en ny leverandør i markedet automatisk er dækket. Kan feedet ikke
 * nås, kontrolleres de negative påstande ikke, og det står i outputtet — de øvrige regler
 * kører uanset.
 */
const BASE = (process.env.EL_FEED_URL ?? "").trim().replace(/\/$/, "");
let supplierNames = [];
try {
  if (!BASE) throw new Error("EL_FEED_URL mangler");
  const r = await fetch(`${BASE}/api/v1/suppliers`, { signal: AbortSignal.timeout(20_000) });
  const j = await r.json();
  supplierNames = [...new Set(
    (j.items ?? [])
      .map((s) => s.name.replace(/\b(A\/S|ApS|a\.m\.b\.a\.|amba|Danmark|I\/S|P\/S)\b/gi, "").replace(/\s+/g, " ").trim())
      .filter((n) => n.length >= 3),
  )];
} catch {
  notes.push("kunne ikke hente selskabsnavne fra feedet — negative påstande er ikke kontrolleret");
}
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const NAMED = supplierNames.length ? new RegExp(`\\b(${supplierNames.map(escapeRe).join("|")})\\b`, "i") : null;

/**
 * En NEGATIV påstand om et navngivet selskab: "frarådes", "fraråder", "anbefales ikke",
 * "dårligst", "værst". Sætningen skal bære sin kilde selv ("Kilde" eller et https-link),
 * eller stå inde i et element med data-advisory.
 */
const NEGATIVE = /\b(frar(å|aa)des|frar(å|aa)der|anbefales ikke|d(å|aa)rligst(e)?|v(æ|ae)rst(e)?)\b/gi;
const HAS_SOURCE = /\bkilde\b|KILDELINK/i;

/**
 * En PÅSTAND om, at noget er billigst — ikke bare ordet.
 *
 * Det farlige er kopulaen: "X ER billigst", "X HAR den laveste pris". "Billigste elaftale ved
 * 4.000 kWh" (en overskrift) og "find den billigste aftale" er ikke påstande, vi skal
 * dokumentere, og en kontrol, der råber ved alt, bliver slået fra.
 */
const SUPERLATIVE =
  /\b(?:er|har|bliver|blev|forbliver)\s+(?:stadig\s+|klart\s+|absolut\s+)?(?:det\s+|den\s+|de\s+)?(?:\d+\s+)?(billigst(?:e)?|bedst(?:e)?|h(?:ø|oe)jest(?:e)?|lavest(?:e)?|st(?:ø|oe)rst(?:e)?)\b/gi;

/**
 * Det, der gør et superlativ dokumenterbart: hvor mange, hvilket forbrug, hvilket område.
 * Elpriser.dk's liste plus dette sites egne omfang: marginalprisen (uden abonnement),
 * landsdelen og "rene, varige" aftaler (uden introtilbud og betingelser).
 */
const SCOPE =
  /(af (alle )?[\d.]+ ?elaftaler|af de [\d.]+|[\d.]+ elaftaler|[\d.]+ elselskaber|[\d.]+ kWh|netomr(å|aa)de|prisomr(å|aa)de|sammenlign(er|ing|ingen)|vores oversigt|blandt|partnere uden anm(æ|ae)rkning|vi har en aftale med|EPSI Rating|ejet af (sine )?kunder|i hele markedet|uden abonnement|marginalpris|i Vestdanmark|i (Ø|Oe)stdanmark|rene, varige)/i;

/**
 * Negationer og spørgsmål er ikke påstande. "Norlys er ikke nødvendigvis billigst" og
 * "Hvilket elselskab er billigst?" skal ikke fanges.
 */
const NOT_A_CLAIM = /\b(ikke|n(ø|oe)dvendigvis|hvilke[nt]?|hvad|hvorfor|om du|kan du|vil du|find|se )\b/i;

/**
 * Påstanden skal handle om et elselskab eller en elaftale.
 *
 * "Forbruget er højest om vinteren", "en kompressoraffugter er den bedste løsning",
 * "hjemmeopladning er klart billigst" — alle sande, ingen af dem påstande om et selskab.
 * Ordet skal stå på SUBJEKTSIDEN (før kopulaen, i samme sætning) — eller sætningen skal nævne et
 * selskab fra feedet. Elpriser.dk's vindue på ±120 tegn fangede "Hjemmeladning er billigst: 1,42-1,63
 * kr./kWh afhængigt af aftale og landsdel", hvor "aftale" er et forbehold efter påstanden, ikke dens
 * emne.
 */
const ABOUT_A_SUPPLIER = /\b(elselskab|elaftale|aftale|udbyder|leverand(ø|oe)r)/i;

/**
 * …men ikke når sætningen handler om TIDSPUNKTET eller nettariffen.
 *
 * "Nettariffen er lavest om natten", "strøm er billigst kl. 00-06" — sande og uden noget at
 * dokumentere over for et selskab. Elpriser.dk's liste minus de bare "dag/uge/måned/år":
 * her står "om året" i næsten hver sætning ("ved 4.000 kWh om året"), og så ville en påstand
 * om et selskab kunne gemme sig bag forbrugsangivelsen.
 */
const ABOUT_TIME_OR_TARIFF =
  /\b(nettarif|spotpris|om natten|om dagen|om aftenen|om morgenen|midt p(å|aa) dagen|kl\.|timer|timen|tidspunkt|hvorn(å|aa)r|weekend|lavlast|spidslast|h(ø|oe)jlast|kogespids)\b/i;

/**
 * Generiske grønne påstande. Definitioner, spørgsmål og negationer er tilladt, og det
 * samme er selskabernes egne produktnavne — derfor ses der på konteksten.
 */
const GREEN = /\b(gr(ø|oe)n(ne)? str(ø|oe)m|klimavenlig str(ø|oe)m)\b/gi;
const GREEN_OK = /(hvad er|hvad betyder|er ikke|ikke er|betyder ikke|findes ikke|kaldes|ordet|begrebet|\?|oprindelsesgaranti|generelle deklaration|samme net)/i;
/** Produktnavne fra selskaberne selv må stå som de gør. */
const PRODUCT_NAME = /(AURA [A-Za-zÆØÅæøå]+ Gr(ø|oe)n|Gr(ø|oe)n Plus El|vindstr(ø|oe)m|(Fast|Variabel|Tryg) Gr(ø|oe)n Str(ø|oe)m)/i;

/**
 * Vores egne domæner, som dette site aldrig må linke til. Elpriser.dk er bevidst IKKE med
 * (tilladt 11. oktober 2026), og elpris.dk er Forsyningstilsynets — en kilde, ikke et søstersite.
 */
const SISTER_DOMAINS = ["elselskab.dk", "elselskaber.dk", "billigste-elselskab.nu", "tjekelregning.dk", "elleverandoer.dk", "elselskabdanmark.dk"];
const isSister = (host) => SISTER_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));

for (const file of pages) {
  const rel = relative(ROOT, file);
  const html = readFileSync(file, "utf8");

  /* 5. Søsterdomæner — hele dokumentet, også header og footer. */
  for (const m of html.matchAll(/href="(?:https?:)?\/\/([^"/:?#]+)[^"]*"/gi)) {
    const host = m[1].toLowerCase().replace(/^www\./, "");
    if (isSister(host)) failures.push(`link til søstersite — ${rel}: ${m[0].slice(0, 120)}`);
  }

  /*
   * Anmærkninger (data-advisory) er dokumenteret element for element andetsteds. Her klippes
   * de ud, så en "frarådes" inde i en anmærkning ikke tælles som udokumenteret — og så en
   * anmærknings kilde ikke kan lånes af en sætning udenfor.
   */
  const outside = stripElements(html, "data-advisory");
  const body = text(outside);

  /*
   * 4. Kildelinjer i designet. Kildelisten (data-sources) og anmærkningernes evidens
   * (data-advisory-*) er undtaget. Kun formen med kolon rammes: et <p> med teksten "Kilder"
   * er listens overskrift, mens »Kilde: Elpriser.dk« i anførselstegn er en krediteringstekst.
   */
  tally.sources += (outside.match(/\sdata-sources(?=[=\s/>])/g) ?? []).length;
  let design = stripElements(outside, "data-sources");
  for (const attr of new Set([...design.matchAll(/\sdata-advisory[a-z-]*(?==|\s|>)/g)].map((m) => m[0].trim()))) design = stripElements(design, attr);
  const designText = text(design);
  for (const m of designText.matchAll(/(?<![»"“])\bKilder?:/g)) {
    failures.push(`kildelinje i designet — ${rel}: "…${designText.slice(Math.max(0, m.index - 60), m.index + 90).trim()}…"`);
  }

  /* 3. Negative påstande om navngivne selskaber. */
  if (NAMED) {
    for (const m of body.matchAll(NEGATIVE)) {
      const sentence = sentenceAt(body, m.index);
      if (!NAMED.test(sentence)) continue;
      tally.negative++;
      // "Hvilke elselskaber skal man undgå?" og "vi fraråder ikke" er ikke påstande.
      if (/\?/.test(sentence) || /\b(ikke|hvis|hvornår|kan|ville)\b[^.]{0,20}\b(frar|anbefal)/i.test(sentence)) continue;
      if (!HAS_SOURCE.test(sentence)) {
        failures.push(`negativ påstand uden kilde — ${rel}: "…${sentence.trim().slice(0, 140)}…"`);
      }
    }
  }

  /* 1. Superlativer. */
  for (const m of body.matchAll(SUPERLATIVE)) {
    tally.superlatives++;
    const before = body.slice(Math.max(0, m.index - 90), m.index + m[0].length);
    // Et spørgsmålstegn tæt efter betyder, at sætningen spørger frem for at påstå.
    if (NOT_A_CLAIM.test(before) || /\?/.test(body.slice(m.index, m.index + 70))) { tally.questions++; continue; }
    const sentence = sentenceAt(body, m.index);
    const sentenceStart = body.indexOf(sentence, Math.max(0, m.index - sentence.length));
    const subjectSide = sentenceStart === -1 ? body.slice(Math.max(0, m.index - 120), m.index) : body.slice(sentenceStart, m.index);
    if (!ABOUT_A_SUPPLIER.test(subjectSide) && !(NAMED && NAMED.test(sentence))) { tally.notSupplier++; continue; }
    if (ABOUT_TIME_OR_TARIFF.test(sentence)) { tally.timeOrTariff++; continue; }

    /*
     * Omfanget skal stå i SAMME sætning som påstanden. Et vindue på ±260 tegn lod en påstand
     * uden omfang låne et "vi sammenligner 182 elaftaler" fra nabosætningen — det gør
     * sentenceAt ikke.
     */
    if (SCOPE.test(sentence)) tally.scoped++;
    else {
      failures.push(`superlativ uden omfang — ${rel}: "…${body.slice(Math.max(0, m.index - 60), m.index + 60).trim()}…"`);
    }
  }

  /* 2. Grønne påstande. */
  for (const m of body.matchAll(GREEN)) {
    tally.green++;
    const window = body.slice(Math.max(0, m.index - 220), m.index + 220);
    if (GREEN_OK.test(window) || PRODUCT_NAME.test(window)) {
      notes.push(`grøn formulering med kontekst — ${rel}: "${m[0]}"`);
      continue;
    }
    failures.push(`generisk grøn påstand — ${rel}: "…${body.slice(Math.max(0, m.index - 70), m.index + 70).trim()}…"`);
  }
}

console.log(`audit-claims: gennemgik ${pages.length} byggede sider.`);
console.log(
  `  superlativer: ${tally.superlatives} kandidater — ${tally.questions} spørgsmål/negationer, ${tally.notSupplier} ikke om et selskab, ${tally.timeOrTariff} om tidspunkt/tarif, ${tally.scoped} med omfang; grønne ord: ${tally.green}; negative om navngivne selskaber: ${tally.negative}; kildelister (data-sources): ${tally.sources}.`,
);
if (notes.length) for (const n of notes) console.log(`  note: ${n}`);

if (failures.length) {
  const shown = failures.slice(0, 60);
  console.error(`\naudit-claims fandt ${failures.length} problem(er):\n`);
  for (const f of shown) console.error(`  ${f}`);
  if (failures.length > shown.length) console.error(`  … og ${failures.length - shown.length} mere.`);
  process.exit(1);
}
console.log(
  `audit-claims: ok — superlativer med omfang, ingen generiske grønne påstande, ingen kildelinjer i designet, ingen links til søstersites${NAMED ? `, negative påstande om ${supplierNames.length} selskabsnavne bærer deres kilde` : ""}.`,
);
