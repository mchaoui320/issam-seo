import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { pageMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "blog/seo-vs-geo")!;
export const metadata = pageMetadata(
  entry.title,
  entry.intro,
  "/blog/seo-vs-geo",
);
export default function Page() {
  return <ContentPage entry={entry} />;
}
