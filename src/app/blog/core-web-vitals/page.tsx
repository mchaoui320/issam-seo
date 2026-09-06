import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { pageMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "blog/core-web-vitals")!;
export const metadata = pageMetadata(
  entry.title,
  entry.intro,
  "/blog/core-web-vitals",
);
export default function Page() {
  return <ContentPage entry={entry} />;
}
