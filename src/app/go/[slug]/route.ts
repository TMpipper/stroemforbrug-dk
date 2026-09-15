// /go/[slug] → central redirector go.tjekelregning.dk/c/stroemforbrug/<slug>
// The redirector decides the affiliate URL (site_tracking_links), stamps our click id +
// site on the network link (source/aff_sub2 or epi2) and logs the click. This route
// only validates the slug and forwards ad attribution from the URL or the `_att` / `tk_ref` cookies (no consent bar since 2026-09-15).
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SITE = "stroemforbrug";
const TRACK_BASE = process.env.TRACK_BASE_URL ?? "https://go.tjekelregning.dk";
const FORWARD = ["gclid", "gbraid", "wbraid", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "lp", "pl", "ref"];
const SAFE = /^[A-Za-z0-9_./-]{1,200}$/;

function decodeAtt(raw: string | undefined): Record<string, string> {
  if (!raw) return {};
  try {
    const b64 = raw.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((raw.length + 3) % 4);
    const obj = JSON.parse(Buffer.from(b64, "base64").toString("utf8")) as Record<string, unknown>;
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(obj)) if (typeof v === "string" && SAFE.test(v)) out[k] = v;
    return out;
  } catch {
    return {};
  }
}

const SLUGS = new Set(["altid-energi", "ok", "aura", "dcc-energi", "sef-energi", "ewii", "norlys"]);
async function isKnownSlug(slug: string): Promise<boolean> { return SLUGS.has(slug); }

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!/^[a-z0-9-]{1,80}$/.test(slug) || !(await isKnownSlug(slug))) return NextResponse.redirect(new URL("/", request.url), 302);

  const target = new URL(`${TRACK_BASE}/c/${SITE}/${slug}`);
  const cookieAtt = decodeAtt(request.cookies.get("_att")?.value);
  for (const k of FORWARD) {
    const v = request.nextUrl.searchParams.get(k) ?? cookieAtt[k] ?? (k === "ref" ? request.cookies.get("tk_ref")?.value : undefined);
    if (v && SAFE.test(v)) target.searchParams.set(k, v);
  }
  if (!target.searchParams.has("lp")) {
    const ref = request.headers.get("referer");
    try { if (ref) target.searchParams.set("lp", new URL(ref).pathname); } catch { /* ignore */ }
  }
  target.searchParams.set("consent", "1");
  return NextResponse.redirect(target, { status: 302, headers: { "cache-control": "private, no-store, max-age=0" } });
}
