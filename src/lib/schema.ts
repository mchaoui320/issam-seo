import { siteUrl } from "@/lib/seo";

/**
 * Bibliothèque JSON-LD.
 *
 * Règle appliquée partout : on ne balise que ce qui est réellement visible et
 * vérifiable sur la page. Aucun schema « décoratif » qui décrirait un contenu
 * absent — c'est une consigne Google et c'est aussi ce que le site promet à ses
 * lecteurs.
 */

export const PERSON_ID = `${siteUrl}/#person`;
export const SITE_ID = `${siteUrl}/#website`;
export const BUSINESS_ID = `${siteUrl}/#business`;

export const PERSON_NAME = "Med Issam Chaoui";
export const BUSINESS_NAME = "Med Issam Chaoui — SEO, GEO & data web";

/** Profils externes confirmés. Le schema `sameAs` ne doit lister que des URL réelles. */
export const SAME_AS: string[] = [];

type Json = Record<string, unknown>;

export function person(): Json {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    url: `${siteUrl}/a-propos`,
    jobTitle: "Consultant SEO, GEO et data web",
    description:
      "Consultant indépendant : référencement naturel, visibilité dans les moteurs de réponse IA et mesure web.",
    knowsAbout: [
      "Référencement naturel",
      "SEO technique",
      "Generative Engine Optimization",
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Search Console",
      "Looker Studio",
      "SEO local",
      "Stratégie de contenu",
    ],
    knowsLanguage: ["fr-FR", "en"],
    ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
  };
}

export function website(): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteUrl,
    name: "Issam Chaoui",
    inLanguage: "fr-FR",
    publisher: { "@id": PERSON_ID },
  };
}

/**
 * ProfessionalService plutôt que LocalBusiness : l'accompagnement se fait à
 * distance et il n'y a pas d'établissement recevant du public. Déclarer une
 * adresse physique fictive serait faux et contre-productif.
 */
export function professionalService(): Json {
  return {
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    url: siteUrl,
    founder: { "@id": PERSON_ID },
    priceRange: "€€",
    availableLanguage: ["fr-FR"],
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "City", name: "Marseille" },
      { "@type": "City", name: "Paris" },
    ],
    serviceType: [
      "Audit SEO",
      "SEO technique",
      "SEO local",
      "Stratégie de contenu SEO",
      "Generative Engine Optimization",
      "Plan de marquage GA4",
      "Tableau de bord analytics",
    ],
  };
}

export function breadcrumb(
  trail: { name: string; path: string }[],
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqPage(entries: readonly (readonly [string, string])[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: entries.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function service(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Json {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: `${siteUrl}${opts.path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "France" },
  };
}

export function article(opts: {
  headline: string;
  description: string;
  path: string;
  published: string;
  modified: string;
  section: string;
  keywords?: string[];
}): Json {
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${siteUrl}${opts.path}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}${opts.path}` },
    datePublished: opts.published,
    dateModified: opts.modified,
    articleSection: opts.section,
    inLanguage: "fr-FR",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(", ") } : {}),
  };
}

export function howTo(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}): Json {
  return {
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    inLanguage: "fr-FR",
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Enveloppe plusieurs nœuds dans un `@graph` unique. */
export function graph(...nodes: Json[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  }).replace(/</g, "\\u003c");
}
