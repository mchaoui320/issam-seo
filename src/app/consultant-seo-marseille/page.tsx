import { CityPage } from "@/components/site/CityPage";
import { getLocalMarket } from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Consultant SEO Marseille — SEO local, GEO & ChatGPT",
  "Consultant SEO à Marseille : audit, référencement local, stratégie GEO et visibilité dans ChatGPT pour entreprises de Marseille et sa métropole.",
  "/consultant-seo-marseille",
);
export default function Page() {
  return <CityPage market={getLocalMarket("marseille")!} />;
}
