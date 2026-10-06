import type { SalesPageData } from "@/lib/sales-pages/types";

export const seoTechniquePage: SalesPageData = {
  code: "TECH / 03",
  primaryKeyword: "SEO technique",
  lede:
    "Le SEO technique rend les pages importantes découvrables, chargeables, interprétables et indexables sans gaspiller les ressources du site ni celles des moteurs. Nous relions crawl, rendu JavaScript, logs serveur, Core Web Vitals et déploiements pour corriger les causes plutôt que les symptômes.",
  proofLine:
    "HTML reçu · directives cohérentes · performance terrain · surveillance après mise en production",
  highlights: [
    { value: "Crawl", label: "découverte et profondeur" },
    { value: "Render", label: "HTML et JavaScript" },
    { value: "CWV", label: "LCP, INP, CLS terrain" },
    { value: "Logs", label: "robots et erreurs serveur" },
  ],
  image: {
    src: "/images/schemas/core-web-vitals.avif",
    alt: "Chronologie des Core Web Vitals montrant le chargement du contenu principal, la réponse à l’interaction et la stabilité visuelle",
    caption:
      "LCP, INP et CLS décrivent trois expériences différentes : voir le contenu, obtenir une réponse et garder une interface stable.",
  },
  answer:
    "Le SEO technique couvre les mécanismes qui permettent aux moteurs de découvrir une URL, d’obtenir une réponse serveur, de rendre son contenu, de comprendre ses directives et de choisir une version canonique. Il inclut aussi la performance réelle, les données structurées visibles, les migrations et la surveillance. Son rôle est de fiabiliser l’accès au contenu, pas de promettre un classement.",
  takeaways: [
    "Robots.txt contrôle l’exploration ; noindex contrôle l’indexation. Les confondre produit des directives impossibles à lire.",
    "Le HTML essentiel et les liens doivent être disponibles sans attendre une interaction utilisateur.",
    "Les Core Web Vitals se jugent au 75e percentile sur des données de terrain lorsque celles-ci existent.",
    "Une correction technique n’est terminée qu’après recette sur les templates et surveillance en production.",
  ],
  offer: {
    title: "Nous fiabilisons le socle technique de votre référencement.",
    intro:
      "Nous intervenons avec vos développeurs et responsables produit pour identifier les blocages, spécifier les correctifs et vérifier leur comportement réel. La prestation peut cibler un incident précis, couvrir tout le socle technique ou accompagner une évolution sensible. Chaque recommandation est reliée à des URL, des templates et un test de recette.",
    items: [
      {
        title: "Investigation crawl et indexation",
        detail:
          "Nous analysons architecture, profondeur, statuts, directives, canonicals, sitemaps et comportement observé dans Search Console.",
        deliverable: "une matrice des règles attendues et la liste des anomalies par template.",
      },
      {
        title: "Audit rendu et performance",
        detail:
          "Nous comparons HTML initial, rendu JavaScript, données terrain et laboratoire pour isoler les causes des problèmes de contenu ou de CWV.",
        deliverable: "des tickets techniques avec exemples, dépendances et résultat attendu.",
      },
      {
        title: "Accompagnement des développements",
        detail:
          "Nous relisons les choix d’implémentation, les cas limites et les environnements avant la mise en production.",
        deliverable: "un cahier de recette applicable en préproduction puis en production.",
      },
      {
        title: "Surveillance des régressions",
        detail:
          "Nous définissons les contrôles sur les erreurs, directives, templates, performance, crawl et passages robots.",
        deliverable: "un plan d’alertes avec seuils, fréquence et procédure de traitement.",
      },
    ],
    forWho: [
      "votre site génère beaucoup d’URL, utilise fortement JavaScript ou dépend de plusieurs templates ;",
      "des pages restent absentes de l’index ou les équipes ne savent pas si le problème vient du rendu ;",
      "vous voulez des spécifications directement utilisables par les développeurs, puis réellement recettées.",
    ],
  },
  sections: [
    {
      id: "crawl-architecture",
      eyebrow: "DÉCOUVERTE",
      title: "Organiser le crawl et la profondeur de clic",
      paragraphs: [
        "Un moteur découvre les pages par les liens, les sitemaps et des URL déjà connues. Nous commençons par cartographier la navigation, les liens contextuels, les paginations et les routes générées automatiquement. Une page stratégique située à cinq clics de l’accueil, absente des menus et reliée par une seule ancre générique reçoit un signal très différent d’une page intégrée au parcours.",
        "Le crawl est segmenté par template : catégories, fiches, filtres, contenus, comptes, recherche interne et paramètres. On mesure la profondeur, les liens entrants internes, les réponses HTTP et les chemins qui conduisent aux doublons. Les visualisations aident à voir les branches ; l’[[audit SEO complet|/audit-seo]] fournit ensuite l’inventaire et la priorité métier nécessaires pour décider quelles routes conserver.",
        "Le budget de crawl n’est pas un argument automatique. Sur un site réduit, l’enjeu vient plus souvent d’un maillage insuffisant ou de directives contradictoires. Sur un grand catalogue, les combinaisons de facettes, calendriers infinis et identifiants de session peuvent absorber une part réelle de l’exploration. Nous quantifions le motif avant de proposer robots.txt, règles de liens, canonicals ou suppression de routes.",
      ],
      bullets: [
        "Sitemaps réservés aux URL canoniques, accessibles et destinées à l’index.",
        "Liens internes en HTML, descriptifs et dirigés vers une réponse utile.",
        "Paramètres classés par fonction avant toute règle de blocage globale.",
      ],
    },
    {
      id: "indexation-canonicals",
      eyebrow: "DIRECTIVES",
      title: "Rendre les signaux d’indexation cohérents",
      paragraphs: [
        "Robots.txt, meta robots, X-Robots-Tag, canonical, hreflang et sitemap répondent à des questions différentes. Bloquer une URL dans robots.txt peut empêcher le moteur de lire son noindex. Déclarer une canonical vers une page qui redirige ou renvoie une erreur affaiblit la consigne. Nous construisons une matrice par template et vérifions le HTML ainsi que les en-têtes réellement servis.",
        "La canonical sert à consolider des versions similaires ; elle ne remplace ni une redirection lors d’un déplacement ni une décision d’architecture. Les variantes de suivi, de tri ou de pagination demandent des traitements distincts. Le diagnostic compare la canonical déclarée, la version choisie dans Search Console et les liens internes. Lorsque ces trois signaux divergent, la correction commence généralement par le maillage et la cohérence des réponses.",
        "L’indexation n’est pas un objectif de volume. Une recherche interne vide, un filtre sans demande et une fiche expirée n’ont pas besoin d’apparaître. Nous définissons les règles de conservation, d’exclusion, de redirection et de statut en fonction de la valeur utilisateur. Cette discipline réduit les pages faibles sans masquer les contenus que l’on souhaite réellement positionner.",
      ],
    },
    {
      id: "javascript-rendering",
      eyebrow: "RENDU",
      title: "Tester le JavaScript comme le reçoit un moteur",
      paragraphs: [
        "Une interface peut sembler complète dans le navigateur alors que sa réponse initiale contient peu d’informations. Nous comparons le code source, le DOM rendu et le résultat d’outils d’inspection. Le titre, le contenu principal, les liens, les données structurées et les canonicals doivent rester cohérents après hydratation. Une erreur JavaScript ou un appel API lent ne devrait pas faire disparaître le sens de la page.",
        "Le rendu côté serveur, la génération statique et le streaming répondent à des contraintes différentes. Le choix dépend de la fraîcheur, du volume, de la personnalisation et de l’infrastructure. Nous n’imposons pas une technologie à toute l’application : on choisit le mode le plus fiable pour chaque groupe de routes, puis on documente les caches et les mécanismes de revalidation.",
        "Les liens créés uniquement après un clic, les contenus chargés au défilement sans URL stable et les états pilotés par fragment peuvent limiter la découverte. La recette vérifie la navigation au clavier, l’absence d’action utilisateur et les réponses sans JavaScript. Sur un projet Next.js ou React, ce travail se mène avec les développeurs pour éviter une correction SEO qui dégrade le produit.",
      ],
      note:
        "Limite : le rendu de Google évolue et n’est pas identique à un navigateur utilisateur. On multiplie les observations au lieu de déduire tout le comportement d’un seul outil.",
    },
    {
      id: "core-web-vitals",
      eyebrow: "PERFORMANCE TERRAIN",
      title: "Améliorer LCP, INP et CLS sans courir après un score",
      paragraphs: [
        "Les Core Web Vitals évaluent trois dimensions : le Largest Contentful Paint pour l’affichage du principal élément, l’Interaction to Next Paint pour la réactivité et le Cumulative Layout Shift pour la stabilité. Les seuils « bons » sont LCP inférieur ou égal à 2,5 secondes, INP inférieur ou égal à 200 millisecondes et CLS inférieur ou égal à 0,1, évalués au 75e percentile.",
        "Les données de terrain issues de Chrome UX Report ou de la mesure réelle priment pour décrire l’expérience des visiteurs. Lighthouse sert à reproduire un scénario et à identifier les causes : image principale trop lourde, ressource bloquante, longues tâches JavaScript, police tardive ou espace non réservé. Un score de laboratoire peut varier selon la machine et ne constitue ni un résultat commercial ni une garantie de position.",
        "Les corrections sont reliées au propriétaire : redimensionnement et priorité de l’image LCP, découpage du JavaScript, réduction des scripts tiers, cache, CSS critique, dimensions réservées et gestion des polices. Le guide [[Core Web Vitals|/blog/core-web-vitals]] explique les métriques ; la mission technique produit les tickets et la recette sur les templates réellement touchés.",
      ],
      bullets: [
        "LCP ≤ 2,5 s au 75e percentile.",
        "INP ≤ 200 ms au 75e percentile.",
        "CLS ≤ 0,1 au 75e percentile.",
      ],
    },
    {
      id: "logs-serveur",
      eyebrow: "OBSERVABILITÉ",
      title: "Croiser les logs serveur avec le crawl",
      paragraphs: [
        "Le crawler simule un parcours ; les logs montrent les requêtes réellement reçues. Nous isolons les robots, les codes, les temps de réponse et les groupes d’URL, puis comparons cette activité avec les pages indexables. Des 5xx concentrées sur un template, des redirections demandées chaque jour ou une section importante presque absente deviennent alors visibles.",
        "Les user-agents seuls peuvent être usurpés. Lorsque la décision l’exige, la validation réseau et la documentation du fournisseur complètent le filtrage. Les données sont minimisées et agrégées selon le besoin : l’objectif est de comprendre l’exploration, pas de conserver des informations inutiles sur les visiteurs.",
        "Les résultats alimentent un [[dashboard SEO|/dashboard-seo]] technique : part des requêtes par template, erreurs, fréquence de passage, temps de réponse et évolution après correction. Les annotations de déploiement permettent de vérifier qu’un changement a réduit la fuite sans déplacer le problème vers une autre route.",
      ],
    },
    {
      id: "migrations-deploiements",
      eyebrow: "CHANGEMENT SANS ANGLE MORT",
      title: "Sécuriser migrations, refontes et mises en production",
      paragraphs: [
        "Une migration touche simultanément les URL, les templates, le contenu, le maillage et la mesure. Le SEO technique intervient avant le gel des écrans pour inventorier les routes, fixer les règles de conservation et préparer le mapping. Attendre la veille du lancement transforme des décisions d’architecture en correctifs d’urgence.",
        "La préproduction est crawlée avec une méthode compatible avec sa protection. Nous comparons les éléments essentiels entre ancien et nouveau site : statuts, titres, H1, canonicals, directives, données structurées, liens, hreflang, images et événements analytics. Le plan de [[refonte SEO|/refonte-seo]] détaille les redirections et la surveillance ; la recette technique fournit les tests reproductibles.",
        "Au lancement, on vérifie un échantillon prioritaire puis les motifs globaux. Les erreurs serveur, boucles, chaînes, blocages résiduels et sitemaps sont contrôlés immédiatement. Search Console, logs et analytics prennent le relais sur plusieurs semaines. Une variation temporaire peut exister, mais elle doit être expliquée plutôt que normalisée sans preuve.",
      ],
    },
    {
      id: "monitoring",
      eyebrow: "RECETTE CONTINUE",
      title: "Installer des contrôles qui survivent au projet",
      paragraphs: [
        "Le meilleur correctif finit par régresser si aucune règle ne le protège. Nous définissons des contrôles par template et par événement : nouvelles pages noindex, canonical hors domaine, hausse des 404, disparition d’un H1, sitemap indisponible ou chute d’un groupe d’URL. Les seuils évitent l’alerte permanente et sont adaptés au rythme de publication.",
        "Les tests automatiques complètent une revue humaine. Ils détectent une forme connue, pas un changement d’intention. Une page peut passer tous les contrôles techniques et ne plus répondre au besoin. La surveillance associe donc alertes, crawl périodique et revue des données Search Console.",
        "Chaque ticket contient la règle attendue, les templates concernés, les cas limites et la méthode de validation. Cette structure rend les arbitrages accessibles aux développeurs et aux responsables produit. Elle rejoint notre [[méthode SEO|/methode-seo]] : observer, prioriser, déployer, mesurer, puis documenter ce qui doit rester stable.",
      ],
    },
  ],
  tools: [
    { name: "Botify", role: "Croiser crawl, logs et performance organique sur des patrimoines volumineux déjà équipés." },
    { name: "Oncrawl", role: "Segmenter les templates, analyser le maillage et rapprocher exploration, indexation et trafic." },
    { name: "Lighthouse", role: "Reproduire un scénario de laboratoire et identifier les ressources qui ralentissent ou déstabilisent la page." },
    { name: "PageSpeed Insights", role: "Lire ensemble les données de terrain disponibles et le diagnostic de laboratoire." },
    { name: "Logs serveur", role: "Observer les robots, codes HTTP, fréquences et temps de réponse réellement enregistrés en production." },
  ],
  deliverables: [
    { title: "Matrice de directives", detail: "Règles attendues par template pour robots, indexation, canonical, sitemap et hreflang." },
    { title: "Carte de crawl", detail: "Profondeur, liens internes, branches, pages orphelines et routes générées sans valeur." },
    { title: "Dossier de performance", detail: "Mesures terrain et laboratoire, causes par template, tickets et ordre d’intervention." },
    { title: "Cahier de recette", detail: "URL témoins, comportements attendus, cas limites et contrôles avant puis après déploiement." },
    { title: "Plan de surveillance", detail: "Indicateurs, seuils, fréquence, destinataires et procédure en cas d’alerte." },
  ],
  process: [
    { step: "01", title: "Segmenter", detail: "Les routes et templates sont classés avec leurs finalités, volumes et propriétaires." },
    { step: "02", title: "Observer", detail: "Crawl, rendu, en-têtes, terrain, laboratoire, Search Console et logs sont rapprochés." },
    { step: "03", title: "Spécifier", detail: "Chaque correctif décrit la règle, les exemples, les dépendances et le test de validation." },
    { step: "04", title: "Déployer et surveiller", detail: "La recette couvre préproduction et production, puis des contrôles suivent les régressions." },
  ],
  scopes: [
    { title: "Diagnostic ciblé", context: "Un symptôme précis : indexation, rendu JavaScript, CWV, logs ou incident après déploiement.", includes: "Investigation, preuve, correctifs et recette — sur devis." },
    { title: "Socle complet", context: "Plusieurs templates et dépendances entre crawl, rendu, performance et architecture.", includes: "Audit transversal, ateliers techniques, backlog et plan de surveillance — sur devis." },
    { title: "Migration", context: "Changement de CMS, domaine, URL, rendu, infrastructure ou organisation internationale.", includes: "Inventaire, spécifications, recette avant lancement et surveillance renforcée — sur devis." },
  ],
  faq: [
    ["Quels Core Web Vitals faut-il respecter ?", "Les seuils « bons » sont LCP inférieur ou égal à 2,5 secondes, INP inférieur ou égal à 200 millisecondes et CLS inférieur ou égal à 0,1, au 75e percentile. Les données de terrain décrivent l’expérience réelle ; Lighthouse aide à diagnostiquer. Atteindre ces seuils améliore l’expérience, sans garantir une position."],
    ["Un site JavaScript peut-il être bien indexé ?", "Oui, si les moteurs reçoivent un contenu et des liens fiables, si les ressources nécessaires sont accessibles et si les directives restent cohérentes après rendu. Nous testons la réponse initiale, le DOM rendu et les outils d’inspection. Le rendu serveur ou statique réduit souvent les dépendances, mais le bon choix dépend du produit."],
    ["Faut-il bloquer les filtres dans robots.txt ?", "Pas avant d’avoir classé les paramètres. Une règle globale peut empêcher l’exploration de pages utiles ou masquer une directive noindex. On analyse la demande, les liens, les volumes et les combinaisons, puis on choisit entre architecture, canonical, noindex, blocage ou suppression de route."],
    ["À quoi servent les logs serveur en SEO ?", "Ils montrent quelles URL les robots demandent réellement, avec quels codes et à quelle fréquence. Ils révèlent les boucles, erreurs, anciennes routes encore explorées et sections rarement visitées. Sur un petit site, ils peuvent être secondaires ; sur un grand catalogue, ils deviennent souvent décisifs."],
    ["Combien de temps dure une mission de SEO technique ?", "Un diagnostic ciblé peut être court ; un socle complet ou une migration suit plusieurs cycles de développement. Le devis dépend des templates, environnements, volumes et accès. La mission inclut toujours une restitution et des critères de recette, car produire un rapport sans valider l’exécution laisse le risque intact."],
  ],
  sources: [
    { label: "web.dev — seuils des Core Web Vitals", href: "https://web.dev/articles/vitals" },
    { label: "Google Search Central — principes du JavaScript SEO", href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
    { label: "Google Search Central — gestion du budget d’exploration", href: "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget" },
  ],
};
