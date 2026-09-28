import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CityPage } from "@/components/site/CityPage";
import {
  getLocalMarket,
  localMarkets,
  marketPath,
  marketTitle,
  marketDescription,
} from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return localMarkets
    .filter((market) => market.slug !== "marseille" && market.slug !== "paris")
    .map((market) => ({ city: market.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const market = getLocalMarket(city);
  if (!market) return {};
  return pageMetadata(
    marketTitle(market),
    marketDescription(market),
    marketPath(market),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const market = getLocalMarket(city);
  if (!market || market.slug === "marseille" || market.slug === "paris")
    notFound();
  return <CityPage market={market} />;
}
