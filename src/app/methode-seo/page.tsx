import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { pageMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "methode-seo")!;
export const metadata = pageMetadata(entry.title, entry.intro, "/methode-seo");
export default function Page() {
  return <ContentPage entry={entry} />;
}
