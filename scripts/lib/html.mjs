/**
 * Hjælpere til kontroller, der læser den BYGGEDE HTML.
 *
 * Fælles for audit-claims og audit-advisories, så de to ikke hver har deres egen
 * udgave af "kun brødteksten" og "hele elementet med den her attribut".
 */
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/** Alle .html-filer under en mappe, rekursivt. */
export function walkHtml(dir) {
  if (!statSync(dir, { throwIfNoEntry: false })) return [];
  return readdirSync(dir).flatMap((n) => {
    const full = join(dir, n);
    return statSync(full).isDirectory() ? walkHtml(full) : full.endsWith(".html") ? [full] : [];
  });
}

/**
 * Kun brødteksten.
 *
 * Header, nav og footer er de samme på alle sider, og de indeholder linknavne som
 * "Største elselskaber" og "Billigste elselskab" — sidetitler, ikke påstande. Tælles de
 * med, fejler hver eneste side på den samme menu, og så drukner de rigtige fund.
 */
export function bodyText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ");
}

/** Tekst uden tags, uden at fjerne header/nav/footer. */
export function innerText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Hvert element med en given attribut, som den fulde, balancerede HTML-streng.
 *
 * Et regex kan ikke finde slutningen af et element, der har børn af samme slags. Derfor
 * tælles åbne- og luk-tags af elementets egen type fra starttagget og frem, indtil
 * dybden er nul igen. Void-elementer (img, br, input…) tæller ikke.
 *
 * `attr` er attributnavnet, fx "data-advisory". Returnerer { attr: værdien, tag, html }.
 */
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

export function elementsWith(html, attr) {
  const out = [];
  // Lookahead efter navnet: "data-advisory" må ikke også ramme "data-advisory-note".
  const open = new RegExp(`<([a-zA-Z][a-zA-Z0-9-]*)\\b[^>]*\\s${attr}(?=[=\\s/>])(?:=("[^"]*"|'[^']*'|[^\\s>]+))?[^>]*>`, "g");
  for (const m of html.matchAll(open)) {
    const tag = m[1].toLowerCase();
    const raw = m[2] ?? "";
    const value = raw.replace(/^["']|["']$/g, "");
    if (VOID.has(tag)) { out.push({ attr: value, tag, html: m[0] }); continue; }
    // matchAll kopierer regexens lastIndex — den skal være 0, for slice() starter ved elementet.
    const tagRe = new RegExp(`<(/?)${tag}\\b[^>]*?(/?)>`, "gi");
    let depth = 0;
    let end = -1;
    for (const t of html.slice(m.index).matchAll(tagRe)) {
      if (t[2] === "/") continue; // selvlukkende
      depth += t[1] === "/" ? -1 : 1;
      if (depth === 0) { end = m.index + t.index + t[0].length; break; }
    }
    out.push({ attr: value, tag, html: end === -1 ? html.slice(m.index) : html.slice(m.index, end) });
  }
  return out;
}

/** Sætningen omkring et sted i teksten. Grænser: punktum, spørgsmålstegn, udråbstegn. */
export function sentenceAt(body, at) {
  const start = Math.max(body.lastIndexOf(". ", at), body.lastIndexOf("? ", at), body.lastIndexOf("! ", at));
  const rest = body.slice(at);
  const endRel = Math.min(
    ...[". ", "? ", "! "].map((p) => {
      const i = rest.indexOf(p);
      return i === -1 ? rest.length : i + 1;
    }),
  );
  return body.slice(start === -1 ? 0 : start + 1, at + endRel);
}
