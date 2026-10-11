/**
 * Codemod: hvert kr.-beløb, der er afledt af den gamle marginalpris 1,86 kr./kWh, bliver til
 * noget beregnet — et {{kr …}}-token i indholdsstrenge (apparatfiler, FAQ-svar) og et
 * {formatKr(… * t.dk)}-udtryk i JSX-prosa. Afløser rescale-prices.mjs (2,50 → 1,86), som
 * viste, at skalering ikke er holdbar: prisen flytter sig nu hver dag.
 *
 * Et beløb røres kun, når det er BEVIST afledt:
 *  - et kWh-tal på samme linje, ±2 linjer eller i apparatets kwhRange/typicalKwh matcher
 *    kWh × 1,86 (evt. ÷ 12/365/52 efter periodeord) inden for tolerancen, eller
 *  - (inferens) beløbet ÷ 1,86 giver et "rundt" kWh-tal (10'ere under 1.000, 50'ere over)
 *    inden for 0,6 %, og linjen ikke handler om køb, installation eller et andet brændsel.
 * Alt andet rapporteres som sprunget over. Dry-run uden --write; læs rapporten først.
 */
import { readFileSync, writeFileSync, globSync } from "node:fs";

const OLD = 1.86;
const REL_TOL = 0.03;
/** Absolut tolerance skalerer med beløbet: 1,5 kr. på 1.000 kr. er fint, på 1 kr. er det alt. */
const absTol = (value) => (value < 20 ? Math.max(0.05, value * 0.03) : 1.5);
const HARDWARE_FLOOR = 20000;
const WRITE = process.argv.includes("--write");
const ONLY = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
const SHOW = process.argv.find((a) => a.startsWith("--show="))?.slice(7);

const PURCHASE_RE = /indkøbspris|købspris|anskaffelse|installation|investering|koster at købe|pris for en ny|monteret|håndværker|tilskud|abonnement|startgebyr|wallbox|hjemmelader|koster fra|holder \d/i;
const CROSS_FUEL_RE = /gasfyr|oliefyr|fjernvarme|pillefyr|brændeovn|naturgas|olieforbrug|benzin|diesel|offentlig|hurtiglad|lynlad|AC-ladning|DC|\bgas\b|\(gas\)|ækvivalent/i;

const parseDa = (s) => parseFloat(s.replace(/\./g, "").replace(",", "."));
const NUM = String.raw`\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?`;
const DASH = String.raw`\s*(?:-|–|—)\s*`;
const KWH_RE = new RegExp(String.raw`(${NUM})(?:${DASH}(${NUM}))?\s*kWh`, "g");
const KR_RE = new RegExp(String.raw`(${NUM})(?:${DASH}(${NUM}))?(\s*kr\.?)(?!\s*\/\s*kWh)(?!\s*pr\.\s*kWh)`, "g");

function periodDivisor(context) {
  if (/\/\s*md\.|pr\.\s*måned|om måneden|månedlig/i.test(context)) return 12;
  if (/\/\s*døgn|pr\.\s*døgn|om dagen|dagligt|pr\.\s*dag|\/\s*dag/i.test(context)) return 365;
  if (/\/\s*uge|pr\.\s*uge|om ugen|ugentlig/i.test(context)) return 52;
  return 1;
}
const perSuffix = { 12: " /md", 365: " /dag", 52: " /uge" };

/** Rundt kWh-tal, hvis beløbet er 1,86 × noget rundt. */
function roundKwhFor(value, divisor) {
  if (value >= HARDWARE_FLOOR || value < 2) return null;
  const kwh = (value * divisor) / OLD;
  const step = kwh < 5 ? 0.1 : kwh < 50 ? 1 : kwh < 1000 ? 10 : kwh < 10000 ? 100 : 500;
  const r = Math.round(Math.round(kwh / step) * step * 10) / 10;
  if (r <= 0) return null;
  // Et årsforbrug over 30.000 kWh findes ikke i en bolig; et ugentligt/dagligt beløb, der
  // kun giver mening som et kæmpe årstal, er et årstal på en linje med et periodeord.
  if (r > 30000 || (divisor === 1 && r > 25000)) return null;
  const back = (r * OLD) / divisor;
  const ok = Math.abs(back - value) <= Math.max(kwh < 5 ? 0.03 : kwh < 50 ? 0.3 : 1.0, value * (kwh < 5 ? 0.03 : 0.003));
  return ok ? r : null;
}
const fmtKwh = (k) => (Number.isInteger(k) ? String(k) : String(k).replace(".", ","));

const report = { proven: [], inferred: [], labels: [], skipped: [], files: new Set() };
const files = globSync("src/{lib,app}/**/*.{ts,tsx}").filter((f) => !/src\/lib\/(feed|format|tokens|prices|cost|pages|partners|prices-updated)/.test(f) && !/opengraph-image|\/go\//.test(f) && (!ONLY || f.includes(ONLY)));

for (const file of files) {
  const isTsx = file.endsWith(".tsx");
  const original = readFileSync(file, "utf8");
  const lines = original.split("\n");
  let changed = false;

  // Strukturelle ankre pr. apparatblok (kwhRange + typicalKwh).
  const structural = new Array(lines.length).fill(null);
  let current = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^\s{4}slug:\s*"/.test(lines[i])) current = [];
    const range = lines[i].match(/kwhRange:\s*\[\s*(\d+)\s*,\s*(\d+)\s*\]/);
    if (range) current.push(+range[1], +range[2]);
    const typical = lines[i].match(/typicalKwh:\s*(\d+)/);
    if (typical) current.push(+typical[1]);
    structural[i] = current;
  }
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^\s{4}slug:\s*"/.test(lines[i])) continue;
    if (structural[i + 1] && structural[i] !== structural[i + 1] && !/^\s{4}slug:\s*"/.test(lines[i + 1] || "")) {
      structural[i] = structural[i].length ? structural[i] : structural[i + 1];
    }
  }

  const out = lines.map((line, idx) => {
    if (!/kr\.?/.test(line) && !/1,86|1,76|1,95/.test(line)) return line;
    // Metadata-beskrivelser må ikke bære en pris; de rettes i hånden.
    if (/^\s*description:/.test(line) || /^\s*"[^"]*\.",?\s*$/.test(line) && /^\s*description:/.test(lines[idx - 1] || "")) {
      if (/\d\s*kr/.test(line) || /1,86/.test(line)) report.skipped.push({ file, line: idx + 1, text: "DESCRIPTION MED PRIS — ret i hånden" });
      return line;
    }
    // Hvor står vi? JSX-tekst, en "…"-streng (FAQ-svar) eller en `…`-skabelon?
    const inString = isTsx && /^\s*(?:\{\s*question:|answer:|"|\{ question)/.test(line) || (!isTsx && /answer:|quickAnswer:/.test(line));
    const jsx = isTsx && !inString;
    // Udtryk afhængigt af kontekst
    const exprKr = (kwhStr, per) => {
      const mul = per === 12 ? " / 12" : per === 365 ? " / 365" : per === 52 ? " / 52" : "";
      const num = kwhStr.replace(",", ".");
      return isTsx ? (jsx ? `{formatKr(${num} * t.dk${mul})}` : `\${formatKr(${num} * t.dk${mul})}`) : `{{kr ${kwhStr}${perSuffix[per] ?? ""}}}`;
    };
    const exprPrice = isTsx ? (jsx ? `{formatPrice(t.dk)}` : `\${formatPrice(t.dk)}`) : `{{pris_kwh_tal}}`;

    const localAnchors = [];
    for (const m of line.matchAll(KWH_RE)) { localAnchors.push(parseDa(m[1])); if (m[2]) localAnchors.push(parseDa(m[2])); }
    const nearAnchors = [];
    for (let d = -2; d <= 2; d++) {
      const l = lines[idx + d];
      if (!l || d === 0) continue;
      for (const m of l.matchAll(KWH_RE)) { nearAnchors.push(parseDa(m[1])); if (m[2]) nearAnchors.push(parseDa(m[2])); }
    }
    const blockAnchors = structural[idx] || [];
    const divisor = periodDivisor(line);
    const isPurchaseLine = PURCHASE_RE.test(line);
    let headerCrossFuel = false;
    for (let d = 1; d <= 12; d++) {
      const l = lines[idx - d];
      if (l === undefined || /<\/table>/.test(l)) break;
      if (/<thead>|<tr>\s*<th/.test(l)) { headerCrossFuel = CROSS_FUEL_RE.test(l) || /besparelse|vs\./i.test(l); break; }
    }
    const isCrossFuel = CROSS_FUEL_RE.test(line) || headerCrossFuel;

    const candidates = [...localAnchors.map((k) => ({ k, local: true })), ...nearAnchors.map((k) => ({ k, local: false })), ...blockAnchors.map((k) => ({ k, local: false }))];
    const provenBy = (value) => {
      for (const { k, local } of candidates) {
        if (k <= 0) continue;
        if ((value >= HARDWARE_FLOOR || isPurchaseLine || isCrossFuel) && !local) continue;
        for (const div of divisor === 1 ? [1] : [divisor, 1]) {
          const expected = (k * OLD) / div;
          const tol = local ? Math.max(1.0, value * 0.08) : absTol(value);
          const rel = local ? 0.08 : REL_TOL;
          if (expected > 0 && (Math.abs(value - expected) <= tol || Math.abs(value / expected - 1) <= rel)) return { k, div };
        }
      }
      return null;
    };

    let newLine = line
      .replace(/1,86(\s*kr\.?\s*(?:\/|pr\.\s*)\s*kWh)/g, `${exprPrice}$1`)
      .replace(/\(1,86\s*kr\.\)/g, `(${exprPrice} kr.)`)
      .replace(/×\s*1,86\s*kr\./g, `× ${exprPrice} kr.`)
      .replace(/(elpris(?:en)?|pris(?:en)?|gennemsnit(?:tet)?|med|ved|på) 1,86(\s*kr\b)/g, `$1 ${exprPrice}$2`)
      .replace(/(elpris(?:en)?|pris(?:en)?|gennemsnit(?:tet)?) på 1,86\b/g, `$1 på ${exprPrice}`);
    if (newLine !== line) { report.labels.push({ file, line: idx + 1 }); changed = true; }
    newLine = newLine.replace(KR_RE, (full, a, b, suffix) => {
      const lo = parseDa(a), hi = b ? parseDa(b) : null;
      // 1,76 (billigste) og 1,95 (typisk all-in) er altid konstanter; 1,86 er kun en konstant, når
      // der ikke står et kWh-tal på linjen (så er det "1 kWh koster 1,86 kr.").
      const constant = [1.76, 1.95, 1.87, 2.02].includes(lo) || (hi !== null && [1.76, 1.95].includes(hi)) || ((lo === 1.86 || hi === 1.86) && !localAnchors.length);
      if (constant) { report.skipped.push({ file, line: idx + 1, text: `KONSTANT ${full.trim()} — ret i hånden` }); return full; }
      let pLo = provenBy(lo), pHi = hi === null ? pLo : provenBy(hi);
      let kind = "proven";
      if (!pLo || (hi !== null && !pHi) || (hi !== null && pLo.div !== pHi.div)) {
        if (isPurchaseLine || isCrossFuel) { report.skipped.push({ file, line: idx + 1, text: full.trim() }); return full; }
        let div = divisor;
        let rLo = roundKwhFor(lo, div), rHi = hi === null ? null : roundKwhFor(hi, div);
        if ((!rLo || (hi !== null && !rHi)) && div !== 1) { div = 1; rLo = roundKwhFor(lo, 1); rHi = hi === null ? null : roundKwhFor(hi, 1); }
        if (!rLo || (hi !== null && !rHi)) { report.skipped.push({ file, line: idx + 1, text: full.trim() }); return full; }
        pLo = { k: rLo, div }; pHi = hi === null ? pLo : { k: rHi, div }; kind = "inferred";
      }
      const sep = (full.match(new RegExp(DASH)) || ["-"])[0];
      const rep = hi === null ? `${exprKr(fmtKwh(pLo.k), pLo.div)}${suffix}` : `${exprKr(fmtKwh(pLo.k), pLo.div)}${sep}${exprKr(fmtKwh(pHi.k), pHi.div)}${suffix}`;
      // JSX: "{…}-{…} kr." er fint. Strenge: skal være skabelon — markeres og rettes nedenfor.
      report[kind].push({ file, line: idx + 1, from: full.trim(), to: rep.trim() });
      changed = true;
      return rep;
    });


    // En streng med ${…} skal være en skabelon: "…" → `…` på samme linje.
    if (isTsx && inString && newLine.includes("${") && !/`/.test(newLine)) {
      newLine = newLine.replace(/answer:\s*"((?:[^"\\]|\\.)*)"/, (m, body) => `answer: \`${body.replace(/`/g, "\\`")}\``);
    }
    return newLine;
  });

  // Sidste pas (kun indholdsfiler): en tabelrække med et kWh-tal og et kr.-beløb, der stadig står
  // skrevet, er et beløb forfatteren selv regnede som kWh × 1,86 (sæson, pr. år ved en brugsfrekvens,
  // besparelse). Ankeret er beløbet ÷ 1,86 — samme vej, bare synligt og beregnet fremover.
  let text = out.join("\n");
  if (!isTsx) {
    const KWH_ANY = /\d[\d.]*(?:,\d+)?\s*kWh/;
    const KR_CELL = new RegExp(String.raw`(${NUM})(?:(${DASH})(${NUM}))?(\s*kr\.?)(?!\s*\/\s*kWh)(?!\s*pr\.\s*kWh)`, "g");
    const PRICE_WORDS = /\(gas\)|\bgas\b|ækvivalent|benzin|diesel|købspris|indkøb|installation|inkl\. inst|anskaff|investering|tilskud|abonnement/i;
    text = text.replace(/<tr>[\s\S]*?<\/tr>/g, (row) => {
      if (!KWH_ANY.test(row) || PRICE_WORDS.test(row)) return row;
      const firstKwh = row.search(KWH_ANY), firstKr = row.search(KR_CELL);
      if (firstKr >= 0 && firstKr < firstKwh) return row; // produktpris før besparelse
      const theadIdx = text.lastIndexOf("<thead>", text.indexOf(row));
      const thead = theadIdx >= 0 ? text.slice(theadIdx, theadIdx + 600) : "";
      if (/besparelse vs|vs\. gas|inkl\. inst|købspris|anskaff/i.test(thead)) return row;
      return row.replace(KR_CELL, (full, a, dash, b, suffix) => {
        const toK = (v) => { const k = v / OLD; const r = k < 50 ? Math.round(k * 10) / 10 : Math.round(k); return r > 0 && v < HARDWARE_FLOOR ? r : null; };
        const lo = parseDa(a), hi = b ? parseDa(b) : null;
        const kLo = toK(lo), kHi = hi === null ? null : toK(hi);
        if (!kLo || (hi !== null && !kHi)) return full;
        report.inferred.push({ file, line: 0, from: full.trim(), to: "(række) " + full.trim() });
        changed = true;
        return hi === null ? `{{kr ${fmtKwh(kLo)}}}${suffix}` : `{{kr ${fmtKwh(kLo)}}}${dash}{{kr ${fmtKwh(kHi)}}}${suffix}`;
      });
    });
  }
  if (changed) report.files.add(file);
  if (changed && WRITE) writeFileSync(file, text);
}

const byFile = (arr) => { const m = {}; for (const r of arr) m[r.file] = (m[r.file] || 0) + 1; return Object.entries(m).sort((a, b) => b[1] - a[1]); };
if (SHOW) {
  for (const kind of ["proven", "inferred"]) for (const r of report[kind]) if (r.file.includes(SHOW)) console.log(`${kind.padEnd(8)} ${r.file.split("/").pop()}:${r.line}  "${r.from}" → "${r.to}"`);
  for (const r of report.skipped) if (r.file.includes(SHOW)) console.log(`skipped  ${r.file.split("/").pop()}:${r.line}  "${r.text}"`);
}
console.log(`\n=== BEVIST (kWh-anker): ${report.proven.length} ===`);
for (const [f, n] of byFile(report.proven)) console.log(`  ${String(n).padStart(4)}  ${f}`);
console.log(`\n=== INFERERET (rundt kWh-tal): ${report.inferred.length} ===`);
for (const [f, n] of byFile(report.inferred)) console.log(`  ${String(n).padStart(4)}  ${f}`);
for (const r of report.inferred.slice(0, 40)) console.log(`    ${r.file.split("/").pop()}:${r.line}  "${r.from}" → "${r.to}"`);
console.log(`\n=== PRIS-ETIKETTER (1,86 kr./kWh): ${report.labels.length} linjer ===`);
console.log(`\n=== SPRUNGET OVER: ${report.skipped.length} ===`);
const seen = new Set();
for (const r of report.skipped) { const k = `${r.file}:${r.text}`; if (seen.has(k)) continue; seen.add(k); if (seen.size > 60) break; console.log(`    ${r.file.split("/").pop()}:${r.line}  "${r.text}"`); }
console.log(WRITE ? `\nSKREVET: ${report.files.size} filer.\n` : `\nTørkørsel — ${report.files.size} filer ville ændres; kør med --write.\n`);
