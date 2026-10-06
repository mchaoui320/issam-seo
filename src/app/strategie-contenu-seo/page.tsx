import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "strategie-contenu-seo")!;
export const metadata = entryMetadata(entry, "/strategie-contenu-seo");
export default function Page() {
  return <ContentPage entry={entry} />;
}
