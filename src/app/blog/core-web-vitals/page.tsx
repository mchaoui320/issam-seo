import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "blog/core-web-vitals")!;
export const metadata = entryMetadata(entry, "/blog/core-web-vitals");
export default function Page() {
  return <ContentPage entry={entry} />;
}
