/**
 * One-off codemod: rescale every electricity-derived kroner figure from the old
 * hardcoded 2,50 kr./kWh to the computed price in src/lib/pricing.ts.
 *
 * Safety: a kr. figure is NEVER rescaled on its own. It is only touched when a
 * kWh figure proves it was derived — kr ≈ kWh × OLD_PRICE within tolerance —
 * where the kWh anchor comes from the same line, the surrounding lines, or the
 * appliance's own structured kwhRange/typicalKwh. Period scaling (/md., /døgn,
 * /time, /uge) is applied to the anchor before matching.
 *
 * Hardware prices, abonnementer and installation costs have no kWh anchor and
 * are reported as skipped, never rewritten.
 *
 * Usage:
 *   node scripts/rescale-prices.mjs            # dry run, prints the report
 *   node scripts/rescale-prices.mjs --write    # apply
 */
import { readFileSync, writeFileSync, globSync } from "node:fs";

const OLD_PRICE = 2.5;
const NEW_PRICE = 1.86; // keep in step with EL_PRICE_KR_PER_KWH
const REL_TOL = 0.06; // the original figures were hand-rounded
const ABS_TOL = 1.5; // kr. — lets small rounded figures (8 vs 7,50) match
/** Above this, a figure is assumed to be hardware/installation unless the anchor is on the same line */
const HARDWARE_FLOOR = 20000;
const WRITE = process.argv.includes("--write");

/** Lines that talk about buying, not running, the appliance */
const PURCHASE_RE =
  /indkøbspris|købspris|anskaffelse|installation|investering|koster at købe|pris for en ny|monteret|håndværker|tilskud|abonnement|startgebyr/i;

/**
 * Savings measured against another fuel move in the OPPOSITE direction when
 * electricity gets cheaper: if strøm falls, the gap to gas/oil widens. These can
 * never be rescaled by the price ratio — they are recomputed by hand and the
 * audit script checks them. Lines mentioning another heat source are excluded
 * from the inference pass entirely.
 */
const CROSS_FUEL_RE = /gasfyr|oliefyr|fjernvarme|pillefyr|brændeovn|naturgas|olieforbrug/i;

const parseDa = (s) => parseFloat(s.replace(/\./g, "").replace(",", "."));

function formatDa(value, sample) {
  const decimals = sample.includes(",") ? sample.split(",")[1].length : 0;
  const hadThousands = /\d\.\d{3}/.test(sample);
  const out = value.toFixed(decimals);
  let [int, dec] = out.split(".");
  if (hadThousands || (decimals === 0 && value >= 1000)) {
    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return dec ? `${int},${dec}` : int;
}

const NUM = String.raw`\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?`;
const DASH = String.raw`\s*(?:-|–|—)\s*`;
const KWH_RE = new RegExp(String.raw`(${NUM})(?:${DASH}(${NUM}))?\s*kWh`, "g");
const KR_RE = new RegExp(String.raw`(${NUM})(?:${DASH}(${NUM}))?(\s*kr\.?)(?!\s*\/\s*kWh)`, "g");

/** How the kr. figure is scaled relative to a yearly kWh anchor */
function periodDivisor(context) {
  if (/\/\s*md\.|pr\.\s*måned|om måneden|månedlig/i.test(context)) return 12;
  if (/\/\s*døgn|pr\.\s*døgn|om dagen|dagligt|pr\.\s*dag/i.test(context)) return 365;
  if (/\/\s*uge|pr\.\s*uge|om ugen|ugentlig/i.test(context)) return 52;
  return 1;
}

const report = { rescaled: [], inferred: [], priceLabels: [], skipped: [] };
const files = globSync("src/**/*.{ts,tsx}");

for (const file of files) {
  const original = readFileSync(file, "utf8");
  const lines = original.split("\n");
  let changed = false;

  // Structured anchors per appliance block: kwhRange + typicalKwh apply to every
  // line from that appliance's `slug:` until the next one.
  const structural = new Array(lines.length).fill(null);
  let current = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^\s{4}slug:\s*"/.test(lines[i])) current = [];
    const range = lines[i].match(new RegExp(String.raw`kwhRange:\s*\[\s*(\d+)\s*,\s*(\d+)\s*\]`));
    if (range) current.push(+range[1], +range[2]);
    const typical = lines[i].match(/typicalKwh:\s*(\d+)/);
    if (typical) current.push(+typical[1]);
    structural[i] = current;
  }
  // A block's anchors are only known after its data lines are read — do a second
  // pass so prose above kwhRange sees them too.
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^\s{4}slug:\s*"/.test(lines[i])) continue;
    if (structural[i + 1] && structural[i] !== structural[i + 1] && !/^\s{4}slug:\s*"/.test(lines[i + 1] || "")) {
      structural[i] = structural[i].length ? structural[i] : structural[i + 1];
    }
  }

  const out = lines.map((line, idx) => {
    if (!/kr\.?/.test(line)) return line;

    const localAnchors = [];
    for (const m of line.matchAll(KWH_RE)) {
      localAnchors.push(parseDa(m[1]));
      if (m[2]) localAnchors.push(parseDa(m[2]));
    }
    // widen to neighbouring lines for prose that spans a paragraph
    const nearAnchors = [];
    for (let d = -2; d <= 2; d++) {
      const l = lines[idx + d];
      if (!l || d === 0) continue;
      for (const m of l.matchAll(KWH_RE)) {
        nearAnchors.push(parseDa(m[1]));
        if (m[2]) nearAnchors.push(parseDa(m[2]));
      }
    }
    const blockAnchors = structural[idx] || [];
    const divisor = periodDivisor(line);
    const isPurchaseLine = PURCHASE_RE.test(line);
    // A table row inherits its header's meaning: if the nearest <thead> above
    // compares against another fuel, every row in that table is a cross-fuel
    // comparison even though the row itself never says "gasfyr".
    let headerCrossFuel = false;
    for (let d = 1; d <= 12; d++) {
      const l = lines[idx - d];
      if (l === undefined) break;
      if (/<\/table>/.test(l)) break;
      if (/<thead>|<tr>\s*<th/.test(l)) {
        headerCrossFuel = CROSS_FUEL_RE.test(l) || /besparelse|vs\./i.test(l);
        break;
      }
    }
    const isCrossFuel = CROSS_FUEL_RE.test(line) || headerCrossFuel;

    let proven = 0;
    const pending = [];

    let newLine = line.replace(KR_RE, (full, a, b, suffix) => {
      const lo = parseDa(a);
      const hi = b ? parseDa(b) : null;

      const candidates = [
        ...localAnchors.map((k) => ({ k, local: true })),
        ...nearAnchors.map((k) => ({ k, local: false })),
        ...blockAnchors.map((k) => ({ k, local: false })),
      ];

      const provenBy = (value) =>
        candidates.find(({ k, local }) => {
          if (k <= 0) return false;
          if (value >= HARDWARE_FLOOR && !local) return false;
          if (isPurchaseLine && !local) return false;
          if (isCrossFuel && !local) return false;
          for (const div of new Set([divisor, 1, 12, 365, 52])) {
            const expected = (k * OLD_PRICE) / div;
            if (expected <= 0) continue;
            if (Math.abs(value - expected) <= ABS_TOL) return true;
            if (Math.abs(value / expected - 1) <= REL_TOL) return true;
          }
          return false;
        });

      const okLo = provenBy(lo);
      const okHi = hi === null ? okLo : provenBy(hi);
      if (!okLo || !okHi) {
        pending.push({ full, a, b, suffix, lo, hi });
        report.skipped.push({ file, line: idx + 1, text: full.trim() });
        return full;
      }
      proven += 1;

      const newLo = formatDa((lo / OLD_PRICE) * NEW_PRICE, a);
      const newHi = hi === null ? null : formatDa((hi / OLD_PRICE) * NEW_PRICE, b);
      const sepMatch = full.match(new RegExp(DASH));
      const sep = sepMatch ? sepMatch[0] : "-";
      const replacement = newHi === null ? `${newLo}${suffix}` : `${newLo}${sep}${newHi}${suffix}`;
      report.rescaled.push({ file, line: idx + 1, from: full.trim(), to: replacement.trim() });
      changed = true;
      return replacement;
    });

    // Second pass: a line that already contains a proven electricity cost is a
    // consumption line. Remaining kr. figures on it (savings columns, 10-year
    // totals, sums) are derived from the same price — rescale them too, unless
    // they look like hardware or the line mentions buying rather than running.
    if (proven > 0 && pending.length && !isPurchaseLine && !isCrossFuel) {
      for (const p of pending) {
        if (p.lo >= HARDWARE_FLOOR || (p.hi ?? 0) >= HARDWARE_FLOOR) continue;
        const newLo = formatDa((p.lo / OLD_PRICE) * NEW_PRICE, p.a);
        const newHi = p.hi === null ? null : formatDa((p.hi / OLD_PRICE) * NEW_PRICE, p.b);
        const sepMatch = p.full.match(new RegExp(DASH));
        const sep = sepMatch ? sepMatch[0] : "-";
        const replacement = newHi === null ? `${newLo}${p.suffix}` : `${newLo}${sep}${newHi}${p.suffix}`;
        if (!newLine.includes(p.full)) continue;
        newLine = newLine.replace(p.full, replacement);
        report.inferred.push({ file, line: idx + 1, from: p.full.trim(), to: replacement.trim() });
        report.skipped = report.skipped.filter(
          (s) => !(s.file === file && s.line === idx + 1 && s.text === p.full.trim()),
        );
        changed = true;
      }
    }

    const before = newLine;
    newLine = newLine
      .replace(/2,50(\s*kr\.?\s*\/\s*kWh)/g, `${formatDa(NEW_PRICE, "0,00")}$1`)
      .replace(/\(2,50\s*kr\.\)/g, `(${formatDa(NEW_PRICE, "0,00")} kr.)`)
      .replace(/×\s*2,50\s*kr\./g, `× ${formatDa(NEW_PRICE, "0,00")} kr.`)
      .replace(/elpris(en)? på 2,50/g, `elpris$1 på ${formatDa(NEW_PRICE, "0,00")}`);
    if (newLine !== before) {
      report.priceLabels.push({ file, line: idx + 1 });
      changed = true;
    }
    return newLine;
  });

  if (changed && WRITE) writeFileSync(file, out.join("\n"));
}

const byFile = (arr) => {
  const m = {};
  for (const r of arr) m[r.file] = (m[r.file] || 0) + 1;
  return Object.entries(m).sort((a, b) => b[1] - a[1]);
};

console.log(`\n=== RESCALED (proven derived): ${report.rescaled.length} ===`);
for (const [f, n] of byFile(report.rescaled)) console.log(`  ${String(n).padStart(4)}  ${f}`);
console.log(`\n=== INFERRED (same line as a proven cost): ${report.inferred.length} ===`);
for (const [f, n] of byFile(report.inferred)) console.log(`  ${String(n).padStart(4)}  ${f}`);
console.log(`\n  sample:`);
for (const r of report.inferred.slice(0, 20))
  console.log(`    ${r.file.split("/").pop()}:${r.line}  "${r.from}" -> "${r.to}"`);
console.log(`\n=== PRICE LABELS updated: ${report.priceLabels.length} lines ===`);
console.log(`\n=== SKIPPED (no kWh anchor — left alone): ${report.skipped.length} ===`);
const seen = new Set();
for (const r of report.skipped) {
  if (seen.has(r.text)) continue;
  seen.add(r.text);
  if (seen.size > 30) break;
  console.log(`    ${r.file.split("/").pop()}:${r.line}  "${r.text}"`);
}
console.log(WRITE ? "\nWRITTEN.\n" : "\nDry run — pass --write to apply.\n");
