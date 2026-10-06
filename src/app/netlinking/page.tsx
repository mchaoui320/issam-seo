import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "netlinking")!;
export const metadata = entryMetadata(entry, "/netlinking");
export default function Page() {
  return <ContentPage entry={entry} />;
}
