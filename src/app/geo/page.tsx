import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "geo")!;
export const metadata = entryMetadata(entry, "/geo");
export default function Page() {
  return <ContentPage entry={entry} />;
}
