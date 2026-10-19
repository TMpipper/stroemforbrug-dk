import type { AppPromoSite } from "@/lib/feed/app-promo";

/** Strømforbrug.dk's nøgle til Elpriser.dk-appens promo (el-feed components/app-promo, ejerens beslutning 19. okt. 2026). */
export const APP_PROMO_SITE = { key: "stroemforbrug", domain: "stroemforbrug.dk", appPage: "/app/" } satisfies AppPromoSite;
