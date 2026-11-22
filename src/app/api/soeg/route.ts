import { buildSearchIndex } from "@/lib/search-index";

/** Søgeindekset til SearchBox — bygges sammen med siderne og hentes først, når nogen klikker i søgefeltet. */
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  return Response.json(buildSearchIndex(), {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
