import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { pageMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "geo-referencement-ia")!;
export const metadata = pageMetadata(
  entry.title,
  entry.intro,
  "/geo-referencement-ia",
);
export default function Page() {
  return <ContentPage entry={entry} />;
}
