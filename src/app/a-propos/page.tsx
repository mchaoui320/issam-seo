import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "a-propos")!;
export const metadata = entryMetadata(entry, "/a-propos");
export default function Page() {
  return <ContentPage entry={entry} />;
}
