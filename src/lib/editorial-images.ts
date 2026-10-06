export type EditorialImage = {
  src: string;
  alt: string;
  caption: string;
  code: string;
};

const pillar = (name: string) => `/images/piliers/${name}.avif`;

export const contentVisuals: Record<string, EditorialImage> = {
  seo: {
    src: pillar("seo"),
    alt: "Architecture SEO reliant une page pilier, des pages de services et des guides spécialisés sur trois niveaux",
    caption:
      "Une architecture éditoriale relie chaque intention à une page utile et évite la concurrence entre vos propres contenus.",
    code: "SEO / ARCHITECTURE",
  },
  geo: {
    src: pillar("geo"),
    alt: "Parcours d’une question vers des sources vérifiables, des passages utiles puis une réponse citée par un moteur IA",
    caption:
      "La visibilité dans les moteurs de réponse se construit par des sources accessibles, des passages extractibles et une entité cohérente.",
    code: "GEO / CITATION",
  },
  "geo-referencement-ia": {
    src: pillar("geo"),
    alt: "Chaîne de sélection des sources utilisée pour produire une réponse citée dans ChatGPT, Claude ou Perplexity",
    caption:
      "On travaille ce que les assistants peuvent trouver, comprendre, vérifier puis citer dans une réponse.",
    code: "LLM / SOURCES",
  },
  "data-web": {
    src: pillar("data-web"),
    alt: "Pipeline de données reliant un site, GA4, BigQuery et Looker Studio avec des contrôles de qualité",
    caption:
      "La mesure devient exploitable quand collecte, qualité, transformation et restitution forment une seule chaîne.",
    code: "DATA / PIPELINE",
  },
  "plan-marquage-ga4": {
    src: pillar("data-web"),
    alt: "Flux d’événements web depuis le site vers GA4 puis BigQuery et un tableau de bord Looker Studio",
    caption:
      "Un plan de marquage relie chaque interaction à une décision métier avant d’alimenter les rapports.",
    code: "GA4 / MESURE",
  },
  "dashboard-seo": {
    src: pillar("data-web"),
    alt: "Chaîne de collecte et de transformation qui alimente un tableau de bord SEO orienté décisions",
    caption:
      "Un tableau de bord utile expose les signaux qui déclenchent une action, pas une accumulation de courbes.",
    code: "DASHBOARD / DÉCISION",
  },
  "seo-local": {
    src: pillar("seo-local"),
    alt: "Écosystème de référencement local reliant recherche géolocalisée, fiche d’établissement, avis et pages de service",
    caption:
      "La visibilité locale vient de la cohérence entre zone servie, offre, preuves, avis et données d’établissement.",
    code: "LOCAL / PRÉSENCE",
  },
  "strategie-contenu-seo": {
    src: pillar("seo"),
    alt: "Cocon sémantique organisé autour d’une page pilier, de services et de guides répondant à des intentions distinctes",
    caption:
      "La stratégie répartit les intentions dans une architecture lisible avant de produire le moindre contenu.",
    code: "CONTENU / COCON",
  },
  "consultant-seo-freelance": {
    src: "/images/editorial/signal-system.avif",
    alt: "Système de visibilité reliant fondations techniques, contenus, réponses IA, recherche locale et données de conversion",
    caption:
      "Une mission pilotée de bout en bout relie l’analyse, l’exécution et la mesure au même endroit.",
    code: "MISSION / SYSTÈME",
  },
  "consultant-seo-ou-agence": {
    src: "/images/editorial/signal-system.avif",
    alt: "Vue d’ensemble des expertises et données à coordonner pour choisir entre consultant SEO et agence",
    caption:
      "Le bon modèle dépend du niveau de pilotage, des compétences déjà présentes et de la vitesse d’exécution attendue.",
    code: "CHOIX / ORGANISATION",
  },
  "methode-seo": {
    src: "/images/editorial/signal-system.avif",
    alt: "Méthode de visibilité reliant audit du site, contenus, moteurs de réponse, présence locale et mesure",
    caption:
      "Chaque recommandation doit relier un signal observé, une action responsable et une mesure de résultat.",
    code: "MÉTHODE / SIGNAL",
  },
  "livrables-seo": {
    src: "/images/editorial/signal-system.avif",
    alt: "Ensemble de livrables SEO reliant analyse technique, plan éditorial, visibilité locale et tableau de mesure",
    caption:
      "Les livrables servent à décider, prioriser et exécuter ; ils restent compréhensibles par les équipes qui les utilisent.",
    code: "LIVRABLES / ACTION",
  },
  tarifs: {
    src: "/images/editorial/signal-system.avif",
    alt: "Composants d’une prestation SEO, GEO et data web reliés dans un système de travail mesurable",
    caption:
      "Le périmètre et le prix dépendent du terrain à analyser, du volume à traiter et du niveau d’exécution attendu.",
    code: "BUDGET / PÉRIMÈTRE",
  },
  "a-propos": {
    src: "/images/editorial/about-expertise.avif",
    alt: "Portrait éditorial abstrait composé de recherches, données, code et notes stratégiques autour d’un consultant",
    caption:
      "Une pratique construite au croisement du référencement, des moteurs de réponse et de l’analyse de données.",
    code: "PROFIL / EXPERTISE",
  },
  "etudes-de-cas": {
    src: "/images/editorial/signal-system.avif",
    alt: "Lecture croisée d’un site, de ses contenus, de sa présence locale et de ses données avant une décision SEO",
    caption:
      "Les cas montrent le raisonnement, les arbitrages et les limites des données sans inventer de résultats.",
    code: "CAS / DIAGNOSTIC",
  },
  "blog/seo-vs-geo": {
    src: pillar("geo"),
    alt: "Sources web sélectionnées pour répondre à une question et produire une citation dans un moteur de réponse IA",
    caption:
      "SEO et GEO partagent des fondations, mais la citation d’une source ajoute une nouvelle surface de visibilité.",
    code: "GUIDE / SEO + GEO",
  },
  "blog/core-web-vitals": {
    src: "/images/schemas/core-web-vitals.avif",
    alt: "Chronologie illustrant le chargement du contenu principal, la réponse à une interaction et la stabilité de la mise en page",
    caption:
      "Les Core Web Vitals s’interprètent avec le contexte technique, les modèles de page et les données réelles d’usage.",
    code: "GUIDE / PERFORMANCE",
  },
  "blog/plan-mesure-ga4": {
    src: pillar("data-web"),
    alt: "Pipeline de mesure depuis les événements du site jusqu’à GA4, BigQuery et Looker Studio",
    caption:
      "Le plan de mesure part des décisions métier, puis traduit les interactions utiles en événements contrôlables.",
    code: "GUIDE / ANALYTICS",
  },
};

export const insightVisuals: Record<string, EditorialImage> = {
  "/audit-visibilite-ia": {
    ...contentVisuals.geo,
    alt: "Audit de visibilité IA suivant une question, les sources retenues, les passages repris et la réponse finale",
    code: "AUDIT IA / TRAÇABILITÉ",
  },
  "/analyse-concurrentielle-seo-geo": {
    ...contentVisuals.geo,
    alt: "Comparaison des sources et passages mobilisés par les moteurs de réponse pour citer plusieurs concurrents",
    code: "CONCURRENCE / SOURCES",
  },
  "/strategie-seo-local-multi-villes": {
    ...contentVisuals["seo-local"],
    alt: "Système de référencement local reliant plusieurs zones, pages de service, établissements, avis et conversions",
    code: "MULTI-VILLES / GOUVERNANCE",
  },
};

export const cityVisuals: Record<string, EditorialImage> = Object.fromEntries(
  [
    [
      "marseille",
      "Logistique, commerces de proximité et parcours de conversion dans le marché marseillais",
    ],
    [
      "paris",
      "Écosystème dense de contenus, entreprises et signaux de recherche dans le marché parisien",
    ],
    [
      "lyon",
      "Industrie, santé, logiciels et données de décision dans le marché lyonnais",
    ],
    [
      "bordeaux",
      "Saisonnalité, commerce, tourisme et demande internationale dans le marché bordelais",
    ],
    [
      "lille",
      "Réseaux de points de vente, logistique et flux transfrontaliers dans le marché lillois",
    ],
    [
      "toulouse",
      "Aéronautique, ingénierie, documentation technique et demande B2B dans le marché toulousain",
    ],
    [
      "nice",
      "Demandes internationales, saisonnalité et services premium dans le marché niçois",
    ],
    [
      "montpellier",
      "Santé, formation, startups et services locaux dans le marché montpelliérain",
    ],
    [
      "nantes",
      "Industrie, création, transition environnementale et commerce dans le marché nantais",
    ],
    [
      "strasbourg",
      "Contenus multilingues, institutions et échanges transfrontaliers dans le marché strasbourgeois",
    ],
  ].map(([slug, alt]) => [
    slug,
    {
      src: `/images/villes/${slug}.avif`,
      alt,
      caption:
        "Le visuel synthétise les forces économiques qui modifient les intentions, les preuves attendues et les parcours de recherche locaux.",
      code: `TERRAIN / ${slug.toUpperCase()}`,
    },
  ]),
);

export const standaloneVisuals = {
  signal: {
    src: "/images/editorial/signal-system.avif",
    alt: "Système de visibilité reliant site, contenus, réponses IA, présence locale et données de conversion",
    caption:
      "MIC SIGNAL relie les fondations techniques, les contenus, les sources et la mesure dans un seul système de croissance.",
    code: "MIC SIGNAL / SYSTÈME",
  },
  contact: {
    src: "/images/editorial/signal-system.avif",
    alt: "Vue des signaux SEO, GEO, locaux et data à examiner pour cadrer un projet de visibilité",
    caption:
      "Le premier échange sert à isoler le terrain, les contraintes et le prochain mouvement qui crée de la valeur.",
    code: "PROJET / CADRAGE",
  },
  glossary: {
    src: pillar("seo"),
    alt: "Architecture de connaissances reliant concepts principaux, services spécialisés et définitions de référence",
    caption:
      "Chaque définition s’inscrit dans un système plus large : technique, contenu, autorité, moteurs de réponse et mesure.",
    code: "GLOSSAIRE / REPÈRES",
  },
  privacy: {
    src: "/images/editorial/signal-system.avif",
    alt: "Architecture d’un site montrant la circulation contrôlée des contenus, interactions et données de mesure",
    caption:
      "Cette version privilégie des outils exécutés dans le navigateur et décrit clairement les traitements activés.",
    code: "SITE / TRANSPARENCE",
  },
} satisfies Record<string, EditorialImage>;
