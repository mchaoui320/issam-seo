import type { Metadata } from "next";
const PRODUCTION_URL = "https://www.issam-chaoui.fr";

/**
 * URL canonique du site.
 *
 * Un `.env.local` pointant sur localhost est normal en développement, mais s'il
 * fuit dans un build de production il empoisonne d'un coup les canonical, le
 * sitemap, les balises Open Graph et llms.txt — une panne SEO silencieuse et
 * difficile à repérer. En production, toute valeur locale est donc ignorée au
 * profit du domaine réel.
 */
function resolveSiteUrl(): string {
  const candidate =
    process.env.SITE_PREVIEW_URL || process.env.NEXT_PUBLIC_SITE_URL;

  if (!candidate) return PRODUCTION_URL;

  const isLocal =
    /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])(:|\/|$)/i.test(
      candidate,
    );

  if (isLocal && process.env.NODE_ENV === "production") return PRODUCTION_URL;

  return candidate;
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      locale: "fr_FR",
      siteName: "MIC SIGNAL",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

/**
 * Métadonnées d'une page de contenu.
 *
 * Utilise `metaTitle` quand il existe, sinon retombe sur le H1. Les deux sont
 * volontairement distincts : un H1 peut être long et éditorial, une balise
 * title doit tenir dans l'affichage des résultats et porter le mot-clé en tête.
 */
export function entryMetadata(
  entry: { title: string; intro: string; metaTitle?: string },
  path: string,
) {
  return pageMetadata(entry.metaTitle ?? entry.title, entry.intro, path);
}
