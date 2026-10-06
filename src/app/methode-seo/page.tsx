import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "methode-seo")!;
export const metadata = entryMetadata(entry, "/methode-seo");
export default function Page() {
  return <ContentPage entry={entry} />;
}
