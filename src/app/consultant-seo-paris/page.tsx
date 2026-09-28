import { CityPage } from "@/components/site/CityPage";
import {
  getLocalMarket,
  marketTitle,
  marketDescription,
} from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";
const market = getLocalMarket("paris")!;
export const metadata = pageMetadata(
  marketTitle(market),
  marketDescription(market),
  "/consultant-seo-paris",
);
export default function Page() {
  return <CityPage market={market} />;
}
