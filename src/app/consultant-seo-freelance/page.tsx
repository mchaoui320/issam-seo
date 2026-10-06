import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "consultant-seo-freelance")!;
export const metadata = entryMetadata(entry, "/consultant-seo-freelance");
export default function Page() {
  return <ContentPage entry={entry} />;
}
