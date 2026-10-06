import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "geo-referencement-ia")!;
export const metadata = entryMetadata(entry, "/geo-referencement-ia");
export default function Page() {
  return <ContentPage entry={entry} />;
}
