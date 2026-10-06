import { allEntries } from "@/lib/content";
import { SalesServicePage } from "@/components/site/SalesServicePage";
import { seoTechniquePage } from "@/lib/sales-pages/seo-technique";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "seo-technique")!;
export const metadata = entryMetadata(entry, "/seo-technique");
export default function Page() {
  return <SalesServicePage entry={entry} data={seoTechniquePage} />;
}
