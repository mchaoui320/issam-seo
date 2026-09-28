import { CityPage } from "@/components/site/CityPage";
import {
  getLocalMarket,
  marketTitle,
  marketDescription,
} from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";
const market = getLocalMarket("marseille")!;
export const metadata = pageMetadata(
  marketTitle(market),
  marketDescription(market),
  "/consultant-seo-marseille",
);
export default function Page() {
  return <CityPage market={market} />;
}
