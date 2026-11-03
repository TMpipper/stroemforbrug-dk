import AppPromo from "@/components/app-promo/AppPromo";
import type { AppPromoContext } from "@/lib/feed/app-promo";
import AppPopup from "./AppPopup";

/**
 * Appens stribe (med bundbjælke og Safaris smart-banner fra kittet) plus laptop-popup'en — sitets ene måde at
 * sætte appen på en side, så hver side med striben også får popup'en (ejeren 3. nov. 2026).
 */
export default function AppStrip({ placement, context, className }: { placement: string; context: AppPromoContext; className?: string }) {
  return (
    <>
      <AppPromo variant="strip" placement={placement} context={context} className={className} />
      <AppPopup context={context} />
    </>
  );
}
