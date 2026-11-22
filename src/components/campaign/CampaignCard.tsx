import CampaignArticleCard from "@/components/featured/CampaignArticleCard";

/**
 * Kampagnekortet (el-feeds CampaignArticleCard) med Strømforbrug.dk's indstillinger: /go/ok/ og logoet gennem sitets
 * egen proxy (/api/logo/, feedets logoer blokeres af ORB fra en anden oprindelse). Tegnes kun, mens feedets OK-plads har
 * en aktiv kampagne (Black Week 23.–29. nov. 2026) — ellers intet. Kortet står efter sidens korte svar (eller under
 * sidehovedet); slutningen af siden bærer kampagnen i forvejen (PartnerCta i layoutet), så der er intet slutkort.
 * `layout="column"`: kortet står uden for en tekstspalte og får sitets egen spalte omkring sig.
 */
export default function CampaignCard({ layout }: { layout?: "column" }) {
  return (
    <CampaignArticleCard
      siteName="Strømforbrug.dk"
      goPath="/go/ok/"
      placement="article"
      logoSrc="/api/logo/ok.png"
      wrapperClassName={layout === "column" ? "container-text" : undefined}
    />
  );
}
