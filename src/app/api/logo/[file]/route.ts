/**
 * Selskabernes logoer — feedets bytes, serveret fra vores eget domæne.
 *
 *   /api/logo/altid-energi.png?v=<hash>  →  ${EL_FEED_URL}/api/v1/logo/altid-energi.png?v=<hash>
 *
 * Kilden er stadig KUN feedet (spejlet fra elpris.dk); ingen lokal fil. Omvejen findes, fordi
 * Chromium (ORB) blokerer billedet, når det hentes direkte fra el-feed som fremmed oprindelse.
 * `v` er indholdets hash, så svaret må caches i et år; en ændret fil får en ny adresse.
 */
export const dynamic = "force-dynamic";

const SLUG = /^[a-z0-9-]{1,80}\.(png|jpg|jpeg|gif|webp|svg)$/;

export async function GET(req: Request, ctx: { params: Promise<{ file: string }> }) {
  const { file } = await ctx.params;
  if (!SLUG.test(file)) return new Response("ikke fundet", { status: 404 });
  const base = (process.env.EL_FEED_URL ?? "").trim().replace(/\/$/, "");
  if (!base) return new Response("feed mangler", { status: 503 });
  const v = new URL(req.url).searchParams.get("v") ?? "";
  if (!/^[a-f0-9]{0,64}$/i.test(v)) return new Response("ugyldig v", { status: 400 });
  const upstream = await fetch(`${base}/api/v1/logo/${file}${v ? `?v=${v}` : ""}`, { next: { revalidate: 86400 } }).catch(() => null);
  if (!upstream || !upstream.ok) return new Response("ikke fundet", { status: upstream?.status === 404 ? 404 : 502 });
  const type = upstream.headers.get("content-type") ?? "image/png";
  if (!type.startsWith("image/")) return new Response("ikke et billede", { status: 502 });
  return new Response(await upstream.arrayBuffer(), {
    headers: {
      "content-type": type,
      "cache-control": v ? "public, max-age=31536000, immutable" : "public, max-age=3600, s-maxage=86400",
      "x-logo-source": "el-feed",
    },
  });
}
