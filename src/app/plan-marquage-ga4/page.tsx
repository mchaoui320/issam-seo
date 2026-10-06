import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "plan-marquage-ga4")!;
export const metadata = entryMetadata(entry, "/plan-marquage-ga4");
export default function Page() {
  return <ContentPage entry={entry} />;
}
