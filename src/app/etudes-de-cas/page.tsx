import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "etudes-de-cas")!;
export const metadata = entryMetadata(entry, "/etudes-de-cas");
export default function Page() {
  return <ContentPage entry={entry} />;
}
