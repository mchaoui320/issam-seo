import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "livrables-seo")!;
export const metadata = entryMetadata(entry, "/livrables-seo");
export default function Page() {
  return <ContentPage entry={entry} />;
}
