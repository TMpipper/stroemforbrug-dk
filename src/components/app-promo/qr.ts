// Fælles komponent fra el-feed (examples/site/components/app-promo/) — ret den dér, ikke her. Ordret kopi af elpriser-dk src/components/app/qr.ts.
/**
 * QR-koder uden afhængigheder.
 *
 * Butikslinkene på /app/ skal kunne scannes fra en skærm, og en QR-kode er ren matematik —
 * ISO/IEC 18004, byte-tilstand, fejlkorrektion M, version 1–10 (op til 213 tegn). Koden
 * regnes ved build og tegnes som inline SVG, så der hverken er en npm-pakke eller et
 * eksternt billede i spil. Maske vælges efter standardens fire strafregler.
 *
 * Kontrolleret mod `qrcode@1.5.4` modul for modul (scripts/audit-app-links.mjs beskriver
 * hvordan). Ikke bygget til andet end korte URL'er: ingen alfanumerisk/kanji-tilstand,
 * ingen struktureret sammenkædning, ingen ECI.
 */

type Ecl = "M";

/** Fejlkorrektion M, version 1–10: [EC-kodeord pr. blok, blokke i gruppe 1, datakodeord i gruppe 1, blokke i gruppe 2, datakodeord i gruppe 2]. */
const BLOCKS_M: ReadonlyArray<readonly [number, number, number, number, number]> = [
  [10, 1, 16, 0, 0],
  [16, 1, 28, 0, 0],
  [26, 1, 44, 0, 0],
  [18, 2, 32, 0, 0],
  [24, 2, 43, 0, 0],
  [16, 4, 27, 0, 0],
  [18, 4, 31, 0, 0],
  [22, 2, 38, 2, 39],
  [22, 3, 36, 2, 37],
  [26, 4, 43, 1, 44],
];

/** Justeringsmønstrenes centre pr. version (version 1 har ingen). */
const ALIGNMENT: ReadonlyArray<readonly number[]> = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
];

/* ---- GF(256) med det primitive polynomium 0x11D ---------------------------------- */
const EXP = new Uint8Array(512);
const LOG = new Uint8Array(256);
(() => {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255]!;
})();

const gfMul = (a: number, b: number): number => (a === 0 || b === 0 ? 0 : EXP[LOG[a]! + LOG[b]!]!);

/** Generatorpolynomiet af grad n: ∏ (x − α^i), i = 0..n−1. Højeste grad først. */
function generator(n: number): number[] {
  let g = [1];
  for (let i = 0; i < n; i++) {
    const next = new Array<number>(g.length + 1).fill(0);
    for (let j = 0; j < g.length; j++) {
      next[j] ^= g[j]!;
      next[j + 1] ^= gfMul(g[j]!, EXP[i]!);
    }
    g = next;
  }
  return g;
}

/** Reed-Solomon-kodeordene for én blok. */
function ecCodewords(data: number[], n: number): number[] {
  const g = generator(n);
  const rem = new Array<number>(n).fill(0);
  for (const byte of data) {
    const factor = byte ^ rem.shift()!;
    rem.push(0);
    if (factor === 0) continue;
    for (let j = 0; j < n; j++) rem[j] ^= gfMul(g[j + 1]!, factor);
  }
  return rem;
}

/* ---- Bitstrøm --------------------------------------------------------------------- */
class Bits {
  readonly bits: number[] = [];
  push(value: number, length: number) {
    for (let i = length - 1; i >= 0; i--) this.bits.push((value >>> i) & 1);
  }
}

function dataCapacity(version: number): number {
  const [, g1, d1, g2, d2] = BLOCKS_M[version - 1]!;
  return g1 * d1 + g2 * d2;
}

/** Mindste version, teksten kan være i (byte-tilstand). */
function pickVersion(byteLength: number): number {
  for (let v = 1; v <= 10; v++) {
    const cci = v < 10 ? 8 : 16;
    if (4 + cci + byteLength * 8 <= dataCapacity(v) * 8) return v;
  }
  throw new Error(`qr: teksten er for lang til version 10 (${byteLength} bytes)`);
}

function encodeData(bytes: Uint8Array, version: number): number[] {
  const capacityBits = dataCapacity(version) * 8;
  const b = new Bits();
  b.push(0b0100, 4);
  b.push(bytes.length, version < 10 ? 8 : 16);
  for (const byte of bytes) b.push(byte, 8);
  b.push(0, Math.min(4, capacityBits - b.bits.length));
  while (b.bits.length % 8) b.bits.push(0);
  const out: number[] = [];
  for (let i = 0; i < b.bits.length; i += 8) {
    let v = 0;
    for (let j = 0; j < 8; j++) v = (v << 1) | b.bits[i + j]!;
    out.push(v);
  }
  for (let pad = 0xec; out.length < dataCapacity(version); pad ^= 0xec ^ 0x11) out.push(pad);
  return out;
}

/** Blokdeling, RS-kodning og sammenfletning — den endelige kodeordsrække. */
function finalCodewords(data: number[], version: number): number[] {
  const [ec, g1, d1, g2, d2] = BLOCKS_M[version - 1]!;
  const blocks: number[][] = [];
  const ecs: number[][] = [];
  let offset = 0;
  for (let i = 0; i < g1 + g2; i++) {
    const len = i < g1 ? d1 : d2;
    const block = data.slice(offset, offset + len);
    offset += len;
    blocks.push(block);
    ecs.push(ecCodewords(block, ec));
  }
  const out: number[] = [];
  const longest = Math.max(d1, d2);
  for (let i = 0; i < longest; i++) for (const block of blocks) if (i < block.length) out.push(block[i]!);
  for (let i = 0; i < ec; i++) for (const e of ecs) out.push(e[i]!);
  return out;
}

/* ---- Matrix ----------------------------------------------------------------------- */
type Matrix = { size: number; dark: Uint8Array; reserved: Uint8Array };

function setModule(m: Matrix, r: number, c: number, dark: boolean, reserve = true) {
  const i = r * m.size + c;
  m.dark[i] = dark ? 1 : 0;
  if (reserve) m.reserved[i] = 1;
}

function placeFinder(m: Matrix, top: number, left: number) {
  for (let r = -1; r <= 7; r++) {
    for (let c = -1; c <= 7; c++) {
      const rr = top + r;
      const cc = left + c;
      if (rr < 0 || cc < 0 || rr >= m.size || cc >= m.size) continue;
      const onRing = r === 0 || r === 6 || c === 0 || c === 6;
      const inCore = r >= 2 && r <= 4 && c >= 2 && c <= 4;
      const inside = r >= 0 && r <= 6 && c >= 0 && c <= 6;
      setModule(m, rr, cc, inside && (onRing || inCore));
    }
  }
}

function placeAlignment(m: Matrix, row: number, col: number) {
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      const ring = Math.max(Math.abs(r), Math.abs(c));
      setModule(m, row + r, col + c, ring !== 1);
    }
  }
}

/** BCH(15,5) formatinformation med masken 0x5412. */
function formatBits(mask: number): number {
  const data = (0b00 << 3) | mask; // fejlkorrektion M = 00
  let rem = data;
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) & 1 ? 0x537 : 0);
  return ((data << 10) | rem) ^ 0x5412;
}

/** BCH(18,6) versionsinformation (kun version 7 og op). */
function versionBits(version: number): number {
  let rem = version;
  for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) & 1 ? 0x1f25 : 0);
  return (version << 12) | rem;
}

function placeFormat(m: Matrix, mask: number) {
  const bits = formatBits(mask);
  const n = m.size;
  const bit = (i: number) => ((bits >>> i) & 1) === 1;
  // Første kopi omkring det øverste venstre søgemønster: bit 0–5 ned ad kolonne 8, bit 6–7
  // under timingrækken, bit 8–14 ud ad række 8 mod venstre (uden (6,8)/(8,6), som er timing).
  for (let i = 0; i <= 5; i++) setModule(m, i, 8, bit(i));
  setModule(m, 7, 8, bit(6));
  setModule(m, 8, 8, bit(7));
  setModule(m, 8, 7, bit(8));
  for (let i = 9; i <= 14; i++) setModule(m, 8, 14 - i, bit(i));
  // Anden kopi: bit 0–7 under det øverste højre søgemønster, bit 8–14 til højre for det nederste venstre.
  for (let i = 0; i < 8; i++) setModule(m, 8, n - 1 - i, bit(i));
  for (let i = 8; i < 15; i++) setModule(m, n - 15 + i, 8, bit(i));
  setModule(m, n - 8, 8, true); // det mørke modul
}

function placeVersion(m: Matrix, version: number) {
  if (version < 7) return;
  const bits = versionBits(version);
  const n = m.size;
  for (let i = 0; i < 18; i++) {
    const dark = ((bits >>> i) & 1) === 1;
    const a = Math.floor(i / 3);
    const b = n - 11 + (i % 3);
    setModule(m, a, b, dark);
    setModule(m, b, a, dark);
  }
}

function buildFunctionPatterns(version: number): Matrix {
  const size = version * 4 + 17;
  const m: Matrix = { size, dark: new Uint8Array(size * size), reserved: new Uint8Array(size * size) };
  placeFinder(m, 0, 0);
  placeFinder(m, 0, size - 7);
  placeFinder(m, size - 7, 0);
  for (let i = 8; i < size - 8; i++) {
    setModule(m, 6, i, i % 2 === 0);
    setModule(m, i, 6, i % 2 === 0);
  }
  const centres = ALIGNMENT[version - 1]!;
  for (const r of centres) {
    for (const c of centres) {
      const nearFinder = (r <= 8 && c <= 8) || (r <= 8 && c >= size - 9) || (r >= size - 9 && c <= 8);
      if (!nearFinder) placeAlignment(m, r, c);
    }
  }
  // Reservér format- og versionsfelterne, så data ikke lægges dér; den rigtige værdi skrives efter maskevalget.
  placeFormat(m, 0);
  placeVersion(m, version);
  return m;
}

/** Data i zigzag fra nederste højre hjørne, to kolonner ad gangen, uden om kolonne 6. */
function placeData(m: Matrix, codewords: number[]) {
  const n = m.size;
  const bits: number[] = [];
  for (const cw of codewords) for (let i = 7; i >= 0; i--) bits.push((cw >>> i) & 1);
  let k = 0;
  let upward = true;
  for (let right = n - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let step = 0; step < n; step++) {
      const r = upward ? n - 1 - step : step;
      for (const c of [right, right - 1]) {
        const i = r * n + c;
        if (m.reserved[i]) continue;
        m.dark[i] = k < bits.length ? bits[k]! : 0;
        k++;
      }
    }
    upward = !upward;
  }
}

const MASKS: ReadonlyArray<(r: number, c: number) => boolean> = [
  (r, c) => (r + c) % 2 === 0,
  (r) => r % 2 === 0,
  (_r, c) => c % 3 === 0,
  (r, c) => (r + c) % 3 === 0,
  (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
  (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
  (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
  (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
];

function applyMask(m: Matrix, mask: number): Uint8Array {
  const out = new Uint8Array(m.dark);
  const f = MASKS[mask]!;
  for (let r = 0; r < m.size; r++) {
    for (let c = 0; c < m.size; c++) {
      const i = r * m.size + c;
      if (!m.reserved[i] && f(r, c)) out[i] = out[i] ? 0 : 1;
    }
  }
  return out;
}

/** Standardens fire strafregler (N1 = 3, N2 = 3, N3 = 40, N4 = 10). */
function penalty(dark: Uint8Array, n: number): number {
  let score = 0;
  const at = (r: number, c: number) => dark[r * n + c]!;
  // N1: løb af fem eller flere ens moduler i rækker og kolonner.
  for (let i = 0; i < n; i++) {
    let runR = 1;
    let runC = 1;
    for (let j = 1; j < n; j++) {
      if (at(i, j) === at(i, j - 1)) { runR++; if (runR === 5) score += 3; else if (runR > 5) score++; } else runR = 1;
      if (at(j, i) === at(j - 1, i)) { runC++; if (runC === 5) score += 3; else if (runC > 5) score++; } else runC = 1;
    }
  }
  // N2: 2×2-blokke i én farve.
  for (let r = 0; r < n - 1; r++) {
    for (let c = 0; c < n - 1; c++) {
      const v = at(r, c);
      if (v === at(r, c + 1) && v === at(r + 1, c) && v === at(r + 1, c + 1)) score += 3;
    }
  }
  // N3: 1011101 med fire lyse på den ene side, i rækker og kolonner.
  const finderLike = (get: (k: number) => number, len: number) => {
    let hits = 0;
    for (let k = 0; k + 7 <= len; k++) {
      const core = get(k) && !get(k + 1) && get(k + 2) && get(k + 3) && get(k + 4) && !get(k + 5) && get(k + 6);
      if (!core) continue;
      const before = k >= 4 && !get(k - 1) && !get(k - 2) && !get(k - 3) && !get(k - 4);
      const after = k + 10 < len && !get(k + 7) && !get(k + 8) && !get(k + 9) && !get(k + 10);
      if (before || after) hits++;
    }
    return hits;
  };
  for (let i = 0; i < n; i++) {
    score += 40 * finderLike((k) => at(i, k), n);
    score += 40 * finderLike((k) => at(k, i), n);
  }
  // N4: andel mørke moduler væk fra 50 %.
  let darkCount = 0;
  for (let i = 0; i < dark.length; i++) darkCount += dark[i]!;
  const pct = (darkCount * 100) / dark.length;
  score += 10 * Math.floor(Math.abs(pct - 50) / 5);
  return score;
}

export interface QrCode {
  version: number;
  size: number;
  mask: number;
  ecl: Ecl;
  /** Række-major, 1 = mørkt modul. */
  modules: Uint8Array;
}

/** Kod en tekst (UTF-8) som QR-kode. Kaster, hvis den ikke kan være i version 10. */
export function encodeQr(text: string, forceMask?: number): QrCode {
  const bytes = new TextEncoder().encode(text);
  const version = pickVersion(bytes.length);
  const m = buildFunctionPatterns(version);
  placeData(m, finalCodewords(encodeData(bytes, version), version));
  let best = { mask: 0, score: Number.POSITIVE_INFINITY, modules: m.dark };
  const candidates = forceMask === undefined ? [0, 1, 2, 3, 4, 5, 6, 7] : [forceMask];
  for (const mask of candidates) {
    placeFormat(m, mask);
    const masked = applyMask(m, mask);
    const score = penalty(masked, m.size);
    if (score < best.score) best = { mask, score, modules: masked };
  }
  return { version, size: m.size, mask: best.mask, ecl: "M", modules: best.modules };
}

/**
 * SVG-stien for koden: ét `M x y h<n> v1 h-<n> z` pr. vandret løb af mørke moduler (17. okt. 2026:
 * ét rektangel pr. modul vejede 6 KB pr. kode, og prissiderne bærer nu to koder), i et
 * koordinatsystem med fire modulers stillezone omkring (standardens krav). `viewBox` = `0 0 size+8 size+8`.
 */
export function qrPath(code: QrCode, quiet = 4): { d: string; viewBox: string } {
  const parts: string[] = [];
  for (let r = 0; r < code.size; r++) {
    let c = 0;
    while (c < code.size) {
      if (!code.modules[r * code.size + c]) { c++; continue; }
      let n = 1;
      while (c + n < code.size && code.modules[r * code.size + c + n]) n++;
      parts.push(`M${c + quiet} ${r + quiet}h${n}v1h-${n}z`);
      c += n;
    }
  }
  const extent = code.size + quiet * 2;
  return { d: parts.join(""), viewBox: `0 0 ${extent} ${extent}` };
}
