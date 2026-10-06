import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { entryMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "blog/plan-mesure-ga4")!;
export const metadata = entryMetadata(entry, "/blog/plan-mesure-ga4");
export default function Page() {
  return <ContentPage entry={entry} />;
}
