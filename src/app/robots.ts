export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * Deux familles de robots IA circulent aujourd'hui :
 *
 *  - entraînement : GPTBot, ClaudeBot, Google-Extended, Applebot-Extended,
 *    Meta-ExternalAgent, CCBot, Bytespider…
 *  - récupération / citation : OAI-SearchBot, ChatGPT-User, Claude-SearchBot,
 *    Claude-User, PerplexityBot, Perplexity-User…
 *
 * Ce site vit de sa citabilité : tout est autorisé, y compris l'entraînement.
 * Les robots sont listés explicitement plutôt que couverts par le `*` afin que
 * la politique reste lisible et facile à restreindre plus tard.
 */
const AI_CRAWLERS = [
  // Récupération et citation — ce sont eux qui produisent des liens entrants.
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-CloudVertexBot",
  // Entraînement.
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Diffbot",
  "Timpibot",
  "Omgilibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
