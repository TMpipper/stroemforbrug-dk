/**
 * Kopiér til hvert el-site: app/api/revalidate/route.ts
 *
 * el-feed kalder den, når data er ændret, med de cache-tags der er blevet forældede.
 *
 * To ting, der har kostet tid før:
 *  - Sitet kører med `trailingSlash: true`. Feedet skal derfor kalde `/api/revalidate/`
 *    MED skråstreg; uden bliver det et 308-redirect, og headere følger ikke med.
 *  - Sammenligningen er tidskonstant, så en angriber ikke kan gætte hemmeligheden
 *    tegn for tegn på svartiden.
 *
 * Filen oversættes IKKE af el-feeds egen `npm run typecheck` (se tsconfig `exclude`):
 * `revalidateTag` har forskellig signatur alt efter, om det modtagende site kører med
 * Next'"'"'s cacheComponents. Den skal oversætte i det site, den kopieres ind i.
 */
import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

function secretMatches(given: string | null): boolean {
  const expected = process.env.REVALIDATE_SECRET?.trim();
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  if (!secretMatches(req.headers.get("x-revalidate-secret"))) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  let tags: unknown;
  try {
    ({ tags } = (await req.json()) as { tags?: unknown });
  } catch {
    return Response.json({ error: "ugyldig JSON" }, { status: 400 });
  }
  const list = Array.isArray(tags) ? tags.filter((t): t is string => typeof t === "string") : [];
  // Next 16 med cacheComponents kræver en cache-profil; ældre udgaver tager kun tagget.
  // Billigste-elselskab.nu kører 16.2.7, hvor to argumenter er påkrævet.
  for (const tag of list) revalidateTag(tag, "max");
  return Response.json({ revalidated: list.length, tags: list });
}
