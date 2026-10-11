import type { ReactNode } from "react";

/** Det direkte svar øverst på siden — familiens tip-box (mint, afrundet, ingen kant). */
export default function QuickAnswer({ children }: { children: ReactNode }) {
  return <div className="tip-box text-[1.0625rem] leading-relaxed [&_p]:m-0">{children}</div>;
}
