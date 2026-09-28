export const dynamic = "force-static";
import { entries, guides } from "@/lib/content";
import { terms } from "@/lib/glossary";
import { localMarkets, marketPath } from "@/lib/cities";
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
  const body = `# MIC SIGNAL — SEO, GEO, LLMO & data web

> Agence indépendante basée en France. Nous accompagnons les entreprises sur trois
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

${[
  ...entries.filter((e) =>
    ["ACCOMPAGNEMENT", "MÉTHODE", "GUIDE"].includes(e.category),
  ),
]
  .map((e) => `- [${e.title}](${siteUrl}/${e.slug}): ${e.intro}`)
  .join("\n")}

## Marchés locaux

${localMarkets
  .map(
    (market) =>
      `- [Consultant SEO à ${market.city}](${siteUrl}${marketPath(market)}): ${market.marketNote}`,
  )
  .join("\n")}

## Guides

${guides.map((g) => `- [${g.title}](${siteUrl}/${g.slug}): ${g.intro}`).join("\n")}

## Glossaire

${terms.length} définitions de référence, chacune accessible par une ancre stable.

${terms.map((t) => `- [${t.term}](${siteUrl}/glossaire#${t.slug}): ${t.short}`).join("\n")}

## Optional

- [À propos](${siteUrl}/a-propos): approche, positionnement et façon de travailler.
- [Tarifs](${siteUrl}/tarifs): comment un périmètre est chiffré, sans grille figée.
- [MIC Lab](${siteUrl}/outils-seo): panel de prompts LLM, matrice concurrentielle, brief local, contrôle des robots IA, aperçu SERP, UTM et checklist. Calculs exécutés dans le navigateur, sans faux crawl.
- [Audit visibilité IA](${siteUrl}/audit-visibilite-ia): protocole multi-moteurs, citations, sources et mesure des visites référentes.
- [Analyse concurrentielle SEO & GEO](${siteUrl}/analyse-concurrentielle-seo-geo): territoires de requêtes, preuves, sources, pages et opportunités défendables.
- [Stratégie SEO local multi-villes](${siteUrl}/strategie-seo-local-multi-villes): carte de potentiel, pages distinctes, profils locaux et mesure des contacts.
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
