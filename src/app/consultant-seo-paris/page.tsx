import { CityPage } from "@/components/site/CityPage";
import { getLocalMarket } from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Consultant SEO Paris — SEO B2B, GEO & visibilité ChatGPT",
  "Consultant SEO pour les entreprises à Paris : audit, stratégie B2B, SEO local et optimisation de votre visibilité dans ChatGPT, Claude et Perplexity.",
  "/consultant-seo-paris",
);
export default function Page() {
  return <CityPage market={getLocalMarket("paris")!} />;
}
