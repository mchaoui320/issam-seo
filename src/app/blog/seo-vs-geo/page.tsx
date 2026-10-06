import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "blog/seo-vs-geo")!;
export const metadata = entryMetadata(entry, "/blog/seo-vs-geo");
export default function Page() {
  return <ContentPage entry={entry} />;
}
