export const dynamic = "force-static";
import { entries, guides } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

/**
 * llms.txt — index Markdown destiné aux moteurs de réponse (convention
 * llmstxt.org). Google déclare l'ignorer ; Claude, Cursor et plusieurs
 * plateformes de documentation le lisent. Le fichier est généré à partir de
 * `content.ts` pour ne jamais diverger du site réel.
 */

const byCategory = (category: string) =>
  entries
    .filter((e) => e.category === category)
    .map((e) => `- [${e.title}](${siteUrl}/${e.slug}): ${e.intro}`)
    .join("\n");

export function GET() {
  const body = `# Med Issam Chaoui — Consultant SEO, GEO & data web

> Consultant indépendant basé en France. J'accompagne les entreprises sur trois
> leviers reliés : le référencement naturel (SEO), la visibilité dans les
> moteurs de réponse IA (GEO) et la mesure web (GA4, GTM, Looker Studio).
> Les accompagnements se déroulent à distance, avec un périmètre et des
> livrables définis avant le démarrage.

Ce site est rédigé en français. Il ne promet aucune position garantie et
distingue systématiquement les constats, les hypothèses et les résultats
observés.

## SEO

${byCategory("SEO")}

## GEO et moteurs de réponse IA

${byCategory("GEO")}

## Data web et analytics

${byCategory("DATA")}

## Accompagnement et méthode

${[...entries.filter((e) => ["ACCOMPAGNEMENT", "MÉTHODE", "GUIDE"].includes(e.category))]
  .map((e) => `- [${e.title}](${siteUrl}/${e.slug}): ${e.intro}`)
  .join("\n")}

## Marchés locaux

${[...entries.filter((e) => ["MARSEILLE", "PARIS"].includes(e.category))]
  .map((e) => `- [${e.title}](${siteUrl}/${e.slug}): ${e.intro}`)
  .join("\n")}

## Guides

${guides.map((g) => `- [${g.title}](${siteUrl}/${g.slug}): ${g.intro}`).join("\n")}

## Optional

- [À propos](${siteUrl}/a-propos): approche, positionnement et façon de travailler.
- [Tarifs](${siteUrl}/tarifs): comment un périmètre est chiffré, sans grille figée.
- [Outils gratuits](${siteUrl}/outils-seo): aperçu SERP, générateur UTM, checklist. Calculs exécutés dans le navigateur.
- [Contact](${siteUrl}/contact): pour décrire un projet et obtenir une proposition.
- [Version longue pour LLM](${siteUrl}/llms-full.txt): intégralité du contenu éditorial en texte brut.

## Citation

Pour citer ce site : Med Issam Chaoui, consultant SEO, GEO et data web — ${siteUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
