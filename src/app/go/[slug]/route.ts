import { redirect } from "next/navigation";

const TRACKING_URLS: Record<string, string> = {
  "altid-energi": "https://aceconversions.go2cloud.org/aff_c?offer_id=30&aff_id=1043",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const url = TRACKING_URLS[slug];

  if (!url) {
    redirect("/");
  }

  redirect(url);
}
