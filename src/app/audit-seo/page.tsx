import { allEntries } from "@/lib/content";
import { SalesServicePage } from "@/components/site/SalesServicePage";
import { auditSeoPage } from "@/lib/sales-pages/audit-seo";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "audit-seo")!;
export const metadata = entryMetadata(entry, "/audit-seo");
export default function Page() {
  return <SalesServicePage entry={entry} data={auditSeoPage} />;
}
