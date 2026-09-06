import { allEntries } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import { pageMetadata } from "@/lib/seo";
const entry = allEntries.find((e) => e.slug === "plan-marquage-ga4")!;
export const metadata = pageMetadata(
  entry.title,
  entry.intro,
  "/plan-marquage-ga4",
);
export default function Page() {
  return <ContentPage entry={entry} />;
}
