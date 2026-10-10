/**
 * Indlæser .env.local i scripts, der kører uden Next (prebuild/postbuild lokalt).
 * På Vercel og i GitHub Actions er variablerne allerede sat; filen rører dem ikke.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

try {
  const text = readFileSync(join(process.cwd(), ".env.local"), "utf8");
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m || process.env[m[1]] !== undefined) continue;
    process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {
  /* ingen .env.local — fint i CI */
}
