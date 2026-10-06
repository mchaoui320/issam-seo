import { allEntries } from "@/lib/content";
import { SalesServicePage } from "@/components/site/SalesServicePage";
import { netlinkingPage } from "@/lib/sales-pages/netlinking";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "netlinking")!;
export const metadata = entryMetadata(entry, "/netlinking");
export default function Page() {
  return <SalesServicePage entry={entry} data={netlinkingPage} />;
}
