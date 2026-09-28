export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { allEntries } from "@/lib/content";
import { localMarkets, marketPath } from "@/lib/cities";
import { siteUrl } from "@/lib/seo";

/**
 * `lastModified` est renseigné depuis la date de mise à jour réelle du contenu.
 * C'est un signal de fraîcheur qui compte pour l'exploration, et davantage
 * encore pour les moteurs de réponse : Perplexity pondère la fraîcheur bien
 * plus fortement que la recherche classique.
 *
 * Les pages sans contenu daté (outils, contact) n'en déclarent pas plutôt que
 * d'annoncer une fausse date de modification à chaque déploiement.
 */
type Row = {
  path: string;
  lastModified?: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticPages: Row[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "glossaire", changeFrequency: "monthly", priority: 0.8 },
  { path: "outils-seo", changeFrequency: "monthly", priority: 0.7 },
  { path: "contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  {
    path: "politique-confidentialite",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  { path: "cookies", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const contentPages: Row[] = allEntries.map((entry) => ({
    path: entry.slug,
    lastModified: entry.updated ?? entry.published,
    changeFrequency: "monthly",
    priority: entry.slug.startsWith("blog/") ? 0.7 : 0.8,
  }));

  const knownPaths = new Set([
    ...staticPages.map((row) => `/${row.path}`),
    ...contentPages.map((row) => `/${row.path}`),
  ]);
  const localPages: Row[] = localMarkets
    .map((market) => ({
      path: marketPath(market).replace(/^\//, ""),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
    .filter((row) => !knownPaths.has(`/${row.path}`));

  return [...staticPages, ...contentPages, ...localPages].map((row) => ({
    url: row.path ? `${siteUrl}/${row.path}` : siteUrl,
    ...(row.lastModified ? { lastModified: new Date(row.lastModified) } : {}),
    changeFrequency: row.changeFrequency,
    priority: row.priority,
  }));
}
