import { allEntries } from "@/lib/content";
import { SalesServicePage } from "@/components/site/SalesServicePage";
import { refonteSeoPage } from "@/lib/sales-pages/refonte-seo";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "refonte-seo")!;
export const metadata = entryMetadata(entry, "/refonte-seo");
export default function Page() {
  return <SalesServicePage entry={entry} data={refonteSeoPage} />;
}
