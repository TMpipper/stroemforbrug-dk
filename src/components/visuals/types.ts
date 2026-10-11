import type { ReactNode } from "react";
import type { VisualPalette } from "@/lib/visuals/palette";

export interface MotifProps {
  /** Farverne — VISUAL i HTML og OG, MONO til vandmærket. */
  p: VisualPalette;
}

/** Et motiv tegner KUN sit indhold (et <g>) i boksen 0 0 200 200; wrapperen ejer <svg>, størrelse, rolle og titel. */
export type MotifComponent = (props: MotifProps) => ReactNode;
