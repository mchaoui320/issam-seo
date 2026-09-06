export const dynamic = "force-static";
import { allEntries, sourceLinks } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

/**
 * llms-full.txt — intégralité du contenu éditorial en un seul fichier texte.
 * Utile aux moteurs de réponse qui préfèrent un contexte complet à une série de
 * requêtes HTTP. Généré depuis `content.ts`, donc toujours à jour.
 */
export function GET() {
  const header = `# Med Issam Chaoui — Consultant SEO, GEO & data web
# Source : ${siteUrl}
# Langue : fr-FR
# Contenu intégral du site, en texte brut.
#
# Ce site ne promet aucune position garantie sur Google et ne revendique aucun
# résultat client chiffré. Les cas décrits sont pédagogiques et signalés comme
# tels.

`;

  const body = allEntries
    .map((entry) => {
      const sections = entry.sections
        .map((s) => `### ${s.title}\n\n${s.text}`)
        .join("\n\n");
      return [
        `## ${entry.title}`,
        `URL : ${siteUrl}/${entry.slug}`,
        `Catégorie : ${entry.category}`,
        "",
        entry.intro,
        "",
        sections,
      ].join("\n");
    })
    .join("\n\n---\n\n");

  const sources = `\n\n---\n\n## Sources officielles citées sur le site\n\n${sourceLinks
    .map((s) => `- ${s.label} — ${s.url}`)
    .join("\n")}\n`;

  return new Response(header + body + sources, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
