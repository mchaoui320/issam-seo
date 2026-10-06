import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "seo-local")!;
export const metadata = entryMetadata(entry, "/seo-local");
export default function Page() {
  return <ContentPage entry={entry} />;
}
