import type { Metadata } from "next";
import { allModels } from "@/lib/models";
import ModelPage, { generateMetadata as modelMetadata } from "../../[apparat]/[model]/page";

/**
 * Varmepumpernes modelsider: /varmepumpe/<model>/. `/varmepumpe/` er sin egen rute (ikke `[apparat]`), så modelsiderne
 * bygges her med samme skabelon som alle andre modelsider; de statiske typer (luft-til-luft, luft-til-vand) går forud.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return allModels()
    .filter((m) => m.parent === "varmepumpe")
    .map((m) => ({ model: m.slug }));
}

type Params = Promise<{ model: string }>;
const withParent = async (params: Params) => ({ apparat: "varmepumpe", model: (await params).model });

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return modelMetadata({ params: withParent(params) });
}

export default async function VarmepumpeModelPage({ params }: { params: Params }) {
  return ModelPage({ params: withParent(params) });
}
