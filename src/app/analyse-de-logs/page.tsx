import { ServicePage } from "@/components/site/ServicePage";
import { analyseDeLogs } from "@/lib/services/analyse-de-logs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  analyseDeLogs.metaTitre,
  analyseDeLogs.metaDescription,
  `/${analyseDeLogs.slug}`,
);

export default function Page() {
  return <ServicePage data={analyseDeLogs} />;
}
