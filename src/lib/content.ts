import { enrich } from "@/lib/enrichment";

export type Entry = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  sections: { title: string; text: string }[];
  related?: string[];
  /**
   * Réponse directe à la question principale de la page, en une ou deux
   * phrases autonomes. Placée en tête de page et reprise telle quelle par les
   * moteurs de réponse : elle doit se comprendre hors contexte.
   */
  answer?: string;
  /** Points saillants, formulés pour être extraits isolément. */
  takeaways?: string[];
  /** Questions réellement posées, affichées ET balisées en FAQPage. */
  faq?: readonly (readonly [string, string])[];
  /** Requêtes visées par la page. Sert au maillage et au suivi, pas au balisage. */
  keywords?: string[];
  /** Format ISO. Alimente datePublished / dateModified. */
  published?: string;
  updated?: string;
};
const rawEntries: Entry[] = [
  {
    slug: "seo",
    title: "Consultant SEO : une visibilité qui crée de la valeur",
    category: "SEO",
    intro:
      "Le référencement naturel relie une demande exprimée sur Google à une réponse utile sur votre site. Mon accompagnement associe technique, contenu et mesure pour attirer les bonnes visites et les transformer en opportunités.",
    sections: [
      {
        title: "Partir de vos objectifs, puis des requêtes",
        text: "Une position ne vaut rien sans intention pertinente. Nous distinguons les recherches de découverte, de comparaison et de prise de contact. Chaque groupe de requêtes est associé à une page, un objectif et un indicateur : demandes qualifiées, ventes ou inscriptions.",
      },
      {
        title: "Construire une base technique exploitable",
        text: "Le crawl révèle les pages inaccessibles, les chaînes de redirections et les signaux contradictoires. L’analyse croise les URL du sitemap avec celles indexées dans Search Console. Les corrections sont classées selon leur impact, leur coût et les dépendances de développement.",
      },
      {
        title: "Développer des contenus qui méritent leur place",
        text: "Les pages doivent résoudre une question mieux que les alternatives : explications concrètes, limites, exemples et preuves vérifiables. Le maillage interne accompagne la progression du lecteur, du guide vers la prestation correspondante.",
      },
      {
        title: "Mesurer et réajuster",
        text: "Le suivi distingue les requêtes de marque et hors marque, les variations saisonnières et les effets des mises en production. Un reporting utile explique les changements observés et les décisions du mois suivant.",
      },
    ],
    related: [
      "audit-seo",
      "seo-technique",
      "strategie-contenu-seo",
      "netlinking",
    ],
  },
  {
    slug: "audit-seo",
    title: "Audit SEO : identifiez ce qui freine votre croissance",
    category: "SEO",
    intro:
      "Un audit SEO analyse l’exploration, l’indexation, les contenus et la popularité de votre site. Le résultat attendu est un plan de correction priorisé, avec des actions compréhensibles et vérifiables.",
    sections: [
      {
        title: "Ce que comprend le diagnostic",
        text: "Inventaire des URL, statuts HTTP, règles robots, canonicals, profondeur de clic, performances et duplications. L’analyse des requêtes et des pages de destination complète le crawl pour distinguer un problème technique d’un problème d’intention.",
      },
      {
        title: "Les accès utiles",
        text: "Search Console en lecture seule, statistiques de conversion et accès aux données de crawl permettent une analyse plus précise. Sans accès analytics, le diagnostic reste possible mais ne permet pas d’attribuer une valeur commerciale aux pages.",
      },
      {
        title: "Une priorisation actionnable",
        text: "Chaque recommandation comporte les URL concernées, le problème observé, la correction proposée, la personne responsable et une méthode de recette. Les blocages d’indexation passent avant les ajustements de présentation.",
      },
      {
        title: "Après la restitution",
        text: "L’audit est présenté en réunion et accompagné d’une feuille de route. Après correction, un nouveau crawl et des contrôles ciblés permettent de vérifier le résultat. L’indexation et l’évolution du trafic nécessitent ensuite un suivi dans le temps.",
      },
    ],
    related: ["seo-technique", "methode-seo", "livrables-seo"],
  },
  {
    slug: "seo-technique",
    title: "SEO technique : rendez votre site accessible aux moteurs",
    category: "SEO",
    intro:
      "La technique permet aux moteurs de découvrir, comprendre et indexer les bonnes pages. Elle doit aussi offrir une navigation rapide et stable aux visiteurs.",
    sections: [
      {
        title: "Exploration et indexation",
        text: "Vérifier robots.txt, les codes HTTP et les directives noindex. Une URL bloquée à l’exploration peut empêcher la lecture de son noindex. Les sitemaps contiennent les URL canoniques accessibles, sans redirection ni erreur.",
      },
      {
        title: "JavaScript et rendu du contenu",
        text: "Les informations essentielles et les liens de navigation doivent être disponibles dans le HTML rendu. Les interactions s’ajoutent à ce contenu. On contrôle les pages réellement reçues par les moteurs, pas seulement leur apparence dans le navigateur.",
      },
      {
        title: "Core Web Vitals",
        text: "Le LCP mesure le chargement du principal élément visible, l’INP la réactivité et le CLS la stabilité visuelle. Les données de terrain, quand elles existent, priment pour apprécier l’expérience réelle. Un score de laboratoire sert à diagnostiquer, pas à promettre une position.",
      },
      {
        title: "Recette et surveillance",
        text: "Les déploiements doivent préserver les canonicals, titres, redirections et liens internes. Les contrôles incluent les erreurs serveur, les changements de templates et les pages orphelines.",
      },
    ],
    related: ["refonte-seo", "audit-seo", "blog/core-web-vitals"],
  },
  {
    slug: "geo",
    title: "GEO : être compris dans les réponses des IA",
    category: "GEO",
    intro:
      "Le Generative Engine Optimization travaille la clarté, l’accessibilité et la fiabilité de vos contenus pour les expériences de recherche avec IA. Il complète une base SEO solide.",
    sections: [
      {
        title: "Ce que le GEO peut réellement apporter",
        text: "Les moteurs de réponse peuvent citer des pages pour expliquer un sujet ou comparer des solutions. L’objectif est de rendre votre expertise identifiable : réponses précises, sources, auteur, contexte et informations à jour. Aucune optimisation ne garantit une citation.",
      },
      {
        title: "Structurer des réponses autonomes",
        text: "Une définition courte, suivie d’une méthode, d’exemples et de limites aide le lecteur à comprendre. Les titres descriptifs et les tableaux comparatifs apportent de la structure sans répéter artificiellement des mots-clés.",
      },
      {
        title: "Consolider votre identité",
        text: "Votre nom, vos domaines d’expertise et vos coordonnées doivent être cohérents. Les données structurées décrivent uniquement ce qui est visible et vérifiable sur la page. Elles ne remplacent ni les preuves ni un contenu original.",
      },
      {
        title: "Observer sans surinterpréter",
        text: "Un protocole de suivi fixe les questions, la langue, la date et le moteur. On distingue mention de marque, lien cité et visite référente. Les réponses sont variables et un échantillon ne représente pas tout le marché.",
      },
    ],
    related: ["geo-referencement-ia", "blog/seo-vs-geo", "data-web"],
  },
  {
    slug: "geo-referencement-ia",
    title: "Référencement IA : une méthode pour ChatGPT, Gemini et Perplexity",
    category: "GEO",
    intro:
      "Développez des contenus utiles aux personnes comme aux moteurs de réponse. La méthode combine audit de visibilité, sources originales et mesure des citations.",
    sections: [
      {
        title: "Établir un point de départ",
        text: "Définissez un ensemble de questions commerciales et informationnelles. Conservez le texte exact, la date, la langue et le moteur interrogé. Relevez les sources citées et la façon dont les offres sont décrites.",
      },
      {
        title: "Créer des éléments difficiles à remplacer",
        text: "Méthodes détaillées, données originales accompagnées de leur protocole, exemples documentés et réponses issues du terrain apportent une valeur distincte. Les comparaisons doivent préciser leurs critères et leurs limites.",
      },
      {
        title: "Assurer une base SEO saine",
        text: "Google indique que ses fondamentaux SEO restent pertinents pour ses fonctionnalités génératives. Les pages doivent être accessibles et éligibles à l’indexation. Aucun fichier spécial ni balisage magique n’assure une présence dans les réponses.",
      },
      {
        title: "Suivre les résultats utiles",
        text: "Comparez les observations à protocole constant et mesurez les visites puis les conversions quand elles sont identifiables. Ne confondez pas visibilité déclarée par un outil et revenus réellement attribués.",
      },
    ],
    related: ["geo", "blog/seo-vs-geo", "strategie-contenu-seo"],
  },
  {
    slug: "data-web",
    title: "Data web & analytics : transformez vos données en décisions",
    category: "DATA",
    intro:
      "Un plan de mesure relie votre site à vos objectifs commerciaux. GA4, Google Tag Manager et Looker Studio deviennent utiles lorsque les événements sont fiables et les indicateurs compris.",
    sections: [
      {
        title: "Définir un plan de marquage",
        text: "Lister les interactions qui comptent : demande de devis réellement envoyée, achat confirmé, prise de rendez-vous. Pour chaque événement, documenter le déclencheur, les paramètres, la finalité et la règle de consentement. Éviter les données personnelles dans les URL et paramètres.",
      },
      {
        title: "Configurer et vérifier les événements",
        text: "La recette contrôle les doublons, les déclenchements prématurés et les parcours mobiles. Une conversion doit correspondre à un succès réel, pas à un simple clic sur Envoyer. Les règles sont documentées pour rester compréhensibles après une refonte.",
      },
      {
        title: "Construire un tableau de bord utile",
        text: "Croiser les impressions et clics Search Console avec les sessions et conversions analytics. Ces systèmes ont des définitions différentes : leurs totaux ne doivent pas nécessairement correspondre. Le tableau de bord présente les tendances, les limites et les décisions.",
      },
      {
        title: "Comprendre les limites de l’attribution",
        text: "Le refus des traceurs, les parcours sur plusieurs appareils et les visites sans référent rendent les mesures incomplètes. Les conversions observées ne sont pas une preuve causale. On privilégie les comparaisons cohérentes et les expérimentations documentées.",
      },
    ],
    related: ["plan-marquage-ga4", "dashboard-seo", "blog/plan-mesure-ga4"],
  },
  {
    slug: "plan-marquage-ga4",
    title: "Plan de marquage GA4 et Google Tag Manager",
    category: "DATA",
    intro:
      "Construisez une collecte compréhensible, testable et limitée aux informations nécessaires pour piloter votre activité.",
    sections: [
      {
        title: "Traduire les objectifs en événements",
        text: "Un site de services peut suivre la validation d’un formulaire et la prise de rendez-vous. Un commerce suit les étapes du panier et les achats confirmés. Une convention de nommage évite les variantes qui fragmentent les rapports.",
      },
      {
        title: "Documenter le dataLayer",
        text: "Définir les événements, paramètres et types attendus avec les développeurs. Les montants utilisent une devise explicite. Les identifiants techniques ne doivent pas contenir de nom, d’adresse e-mail ou de téléphone.",
      },
      {
        title: "Tester les parcours et le consentement",
        text: "Vérifier le parcours avec acceptation et refus des traceurs ainsi que les erreurs de formulaire. Les outils de prévisualisation et les requêtes réseau permettent d’observer ce qui est réellement transmis.",
      },
      {
        title: "Maintenir la qualité des données",
        text: "Conserver un registre des changements. Lorsqu’un formulaire, un tunnel ou une CMP évolue, rejouer la recette pour détecter les événements manquants ou envoyés deux fois.",
      },
    ],
    related: ["data-web", "dashboard-seo", "blog/plan-mesure-ga4"],
  },
  {
    slug: "dashboard-seo",
    title: "Dashboard SEO : un reporting qui aide à décider",
    category: "DATA",
    intro:
      "Rassemblez visibilité, acquisition et conversions dans un tableau de bord avec des définitions stables et des commentaires exploitables.",
    sections: [
      {
        title: "Choisir les bons indicateurs",
        text: "Séparer impressions, clics, sessions et demandes qualifiées. Une hausse d’impressions avec peu de clics peut provenir d’un élargissement des requêtes plutôt que d’une dégradation générale.",
      },
      {
        title: "Segmenter pour comprendre",
        text: "Comparer marque et hors marque, mobile et ordinateur, pages de service et guides. Pour un site local, isoler les marchés réellement desservis. Éviter de mélanger des groupes dont les intentions diffèrent.",
      },
      {
        title: "Comparer des périodes pertinentes",
        text: "Tenir compte des jours ouvrés, de la saisonnalité et des changements de suivi. Annoter les mises en production et campagnes importantes pour rendre les variations interprétables.",
      },
      {
        title: "Terminer par une décision",
        text: "Chaque rapport résume ce qui a changé, ce qui est incertain et les actions prévues. Un graphique sans contexte n’est pas une recommandation.",
      },
    ],
    related: ["data-web", "methode-seo", "outils-seo"],
  },
  {
    slug: "seo-local",
    title: "SEO local : soyez visible là où vous intervenez",
    category: "SEO",
    intro:
      "Le référencement local associe votre site, votre fiche d’établissement et les informations qui décrivent votre activité dans une zone réellement desservie.",
    sections: [
      {
        title: "Une fiche d’établissement exacte",
        text: "Choisir les catégories adaptées, tenir les horaires à jour et décrire les services réellement proposés. Les coordonnées doivent être cohérentes avec celles du site. Les avis se sollicitent sans achat ni contrepartie.",
      },
      {
        title: "Des pages locales utiles",
        text: "Une page locale explique votre périmètre, vos conditions d’intervention et les questions propres au marché. Décliner le même texte en remplaçant uniquement la ville crée peu de valeur et ne justifie pas un annuaire de pages.",
      },
      {
        title: "Mesurer les contacts",
        text: "Suivre les demandes qualifiées et la zone d’intervention. Les clics sur un téléphone indiquent une intention, pas nécessairement un appel abouti. Leur interprétation doit rester distincte des ventes.",
      },
    ],
    related: ["consultant-seo-marseille", "consultant-seo-paris", "audit-seo"],
  },
  {
    slug: "strategie-contenu-seo",
    title: "Stratégie de contenu SEO : répondez aux bonnes intentions",
    category: "SEO",
    intro:
      "Une stratégie éditoriale organise les sujets autour des besoins de vos clients, de votre expertise et de votre offre.",
    sections: [
      {
        title: "Cartographier les intentions",
        text: "Regrouper les requêtes qui appellent la même réponse et choisir une page de référence. Les guides répondent aux questions de compréhension ; les pages de service aident à choisir un accompagnement.",
      },
      {
        title: "Rédiger un brief exploitable",
        text: "Préciser le lecteur, la question principale, les preuves disponibles, la structure et les liens utiles. La longueur découle de la réponse à apporter. Un quota de mots ne garantit pas la qualité.",
      },
      {
        title: "Entretenir les contenus",
        text: "Identifier les informations obsolètes, les pages concurrentes entre elles et les questions sans réponse. Fusionner ou mettre à jour lorsque cela améliore réellement la ressource, en préservant les URL utiles.",
      },
    ],
    related: ["seo", "geo", "blog/seo-vs-geo"],
  },
  {
    slug: "netlinking",
    title: "Netlinking : développez une autorité crédible",
    category: "SEO",
    intro:
      "La popularité se construit avec des ressources utiles et des relations éditoriales pertinentes. L’analyse des liens doit privilégier le contexte et la qualité.",
    sections: [
      {
        title: "Analyser le profil existant",
        text: "Observer les domaines référents, pages liées et ancres. Un indicateur propriétaire d’autorité ne correspond pas à une note attribuée par Google. Les liens suspects s’analysent avant toute décision.",
      },
      {
        title: "Mériter des citations",
        text: "Une étude documentée, un outil ou un guide original peut être repris par des publications pertinentes. Les partenariats éditoriaux doivent avoir du sens pour le lecteur et respecter les règles des moteurs sur les liens sponsorisés.",
      },
      {
        title: "Évaluer les effets",
        text: "Suivre les nouvelles citations et le trafic référent, puis les évolutions des pages concernées. L’attribution reste prudente car les contenus et la concurrence évoluent simultanément.",
      },
    ],
    related: ["strategie-contenu-seo", "audit-seo"],
  },
  {
    slug: "refonte-seo",
    title: "Refonte SEO : faites évoluer le site en protégeant ses acquis",
    category: "SEO",
    intro:
      "Une migration réussie se prépare avant le design. Elle identifie les pages utiles et organise le passage vers la nouvelle structure.",
    sections: [
      {
        title: "Avant la refonte",
        text: "Exporter les URL, performances, liens entrants et contenus. Identifier les pages qui génèrent des contacts. Définir un mapping entre anciennes et nouvelles adresses avant de supprimer des routes.",
      },
      {
        title: "Au lancement",
        text: "Déployer les redirections permanentes vers les équivalents pertinents, actualiser les liens internes et le sitemap, puis vérifier les canonicals. Retirer les restrictions de préproduction uniquement sur le site public.",
      },
      {
        title: "Après le lancement",
        text: "Contrôler les erreurs 404 et 5xx, les redirections en chaîne et l’indexation. Comparer le trafic à un historique pertinent. Les variations temporaires doivent être examinées plutôt que considérées automatiquement comme un échec.",
      },
    ],
    related: ["seo-technique", "audit-seo", "dashboard-seo"],
  },
  {
    slug: "consultant-seo-freelance",
    title: "Consultant SEO freelance : un interlocuteur pour votre stratégie",
    category: "ACCOMPAGNEMENT",
    intro:
      "Med Issam Chaoui vous accompagne sur le SEO, le GEO et la mesure web, du diagnostic à la mise en œuvre des priorités.",
    sections: [
      {
        title: "Un périmètre défini ensemble",
        text: "L’accompagnement commence par vos objectifs, vos moyens et vos contraintes. Audit ponctuel, soutien à la refonte ou suivi régulier : le périmètre précise les livrables et les responsabilités.",
      },
      {
        title: "Travailler avec vos équipes",
        text: "Les recommandations sont adaptées aux ressources éditoriales et techniques disponibles. Les tickets décrivent les changements et les contrôles attendus. Les arbitrages sont visibles pour éviter une liste d’actions sans suivi.",
      },
      {
        title: "Une mesure transparente",
        text: "Le reporting distingue les actions effectuées, les résultats observés et les hypothèses. Une hausse de position ne remplace pas une analyse des contacts générés.",
      },
    ],
    related: ["tarifs", "methode-seo", "contact"],
  },
  {
    slug: "consultant-seo-marseille",
    title: "Consultant SEO à Marseille : développez votre visibilité locale",
    category: "MARSEILLE",
    intro:
      "Accompagnement SEO pour les entreprises qui souhaitent toucher des clients à Marseille et dans leur zone d’intervention réelle.",
    sections: [
      {
        title: "Qualifier la demande marseillaise",
        text: "Les requêtes peuvent exprimer une proximité, un besoin urgent ou une comparaison de prestataires. La stratégie distingue ces intentions pour construire les pages et les parcours de contact appropriés.",
      },
      {
        title: "Relier présence locale et site",
        text: "Vérifier la cohérence des informations d’établissement et décrire les quartiers ou communes réellement desservis. Éviter les adresses artificielles et les déclinaisons de pages sans information locale utile.",
      },
      {
        title: "Organiser le projet",
        text: "Le diagnostic et les restitutions peuvent être réalisés à distance. Le devis précise le périmètre géographique, les pages prioritaires et les données nécessaires au suivi.",
      },
    ],
    related: ["seo-local", "audit-seo", "contact"],
  },
  {
    slug: "consultant-seo-paris",
    title: "Consultant SEO pour les entreprises à Paris",
    category: "PARIS",
    intro:
      "Une stratégie de référencement pour les entreprises qui ciblent Paris, avec un accompagnement à distance et des priorités adaptées à la concurrence.",
    sections: [
      {
        title: "Choisir un positionnement précis",
        text: "Sur un marché dense, une requête générique peut être moins utile qu’un besoin spécialisé. L’analyse associe service, segment de clientèle et zone réellement desservie pour choisir les pages à développer.",
      },
      {
        title: "Éviter la multiplication artificielle des pages",
        text: "Une page par arrondissement n’a de sens que si elle apporte des informations distinctes et utiles. Le travail porte d’abord sur la qualité de l’offre, les preuves et les parcours de conversion.",
      },
      {
        title: "Coordonner les actions",
        text: "Les échanges et restitutions s’organisent à distance avec les équipes parisiennes. L’audit fixe les livrables et permet de répartir les corrections entre contenu, développement et acquisition.",
      },
    ],
    related: ["consultant-seo-freelance", "seo-local", "contact"],
  },
  {
    slug: "methode-seo",
    title: "Une méthode claire, du diagnostic à la décision",
    category: "MÉTHODE",
    intro:
      "Un cycle court : comprendre, prioriser, déployer et mesurer. Chaque recommandation est reliée à un problème observable.",
    sections: [
      {
        title: "01 — Comprendre",
        text: "Recueillir les objectifs, l’historique, les contraintes et les données disponibles. Établir un état initial et identifier les points qui nécessitent une vérification.",
      },
      {
        title: "02 — Prioriser",
        text: "Évaluer l’impact attendu, l’effort et les dépendances. Partager une feuille de route avec un responsable par action et une méthode de validation.",
      },
      {
        title: "03 — Déployer",
        text: "Accompagner la production éditoriale et les corrections techniques. Contrôler les changements en préproduction puis sur le site accessible.",
      },
      {
        title: "04 — Mesurer",
        text: "Observer les résultats, documenter les limites et ajuster les priorités. Le suivi s’appuie sur les conversions quand elles sont disponibles, pas uniquement sur le trafic.",
      },
    ],
    related: ["livrables-seo", "audit-seo", "data-web"],
  },
  {
    slug: "livrables-seo",
    title: "Des livrables que votre équipe peut utiliser",
    category: "MÉTHODE",
    intro:
      "Les analyses prennent la forme de documents structurés, lisibles et associés aux prochaines actions.",
    sections: [
      {
        title: "Rapport de diagnostic",
        text: "Constats, exemples d’URL, captures nécessaires et conséquences. Une synthèse permet au décideur de comprendre les priorités sans parcourir tous les détails techniques.",
      },
      {
        title: "Feuille de route",
        text: "Un tableau réunit action, périmètre, impact attendu, effort estimé, responsable et statut. Les critères de recette permettent de vérifier ce qui est terminé.",
      },
      {
        title: "Briefs et suivi",
        text: "Les briefs éditoriaux décrivent intention, structure et preuves attendues. Le reporting mensuel reprend les actions réalisées, les indicateurs observés et les décisions à venir.",
      },
    ],
    related: ["methode-seo", "tarifs", "contact"],
  },
  {
    slug: "consultant-seo-ou-agence",
    title: "Consultant SEO ou agence : comment choisir ?",
    category: "GUIDE",
    intro:
      "Le bon format dépend de votre périmètre, de vos ressources internes et du besoin de coordination entre métiers.",
    sections: [
      {
        title: "Quand choisir un freelance",
        text: "Un interlocuteur direct facilite les échanges et la continuité de la stratégie. Ce format convient lorsque le périmètre est défini et que les ressources de développement ou de rédaction peuvent être mobilisées séparément.",
      },
      {
        title: "Quand choisir une agence",
        text: "Une agence peut réunir plusieurs métiers et absorber une production importante. Il faut vérifier qui travaille réellement sur le compte, le temps disponible et le niveau de détail des livrables.",
      },
      {
        title: "Les questions à poser",
        text: "Qui réalise les actions ? Quels livrables sont inclus ? Comment se déroule la restitution ? Quels accès conservez-vous ? Comment sont mesurés les résultats ? Comparez un périmètre concret plutôt qu’une promesse de position.",
      },
    ],
    related: ["consultant-seo-freelance", "tarifs", "livrables-seo"],
  },
  {
    slug: "tarifs",
    title: "Tarifs SEO & GEO : un périmètre avant un prix",
    category: "ACCOMPAGNEMENT",
    intro:
      "Le coût dépend de la taille du site, de sa complexité, des marchés ciblés et du niveau d’exécution attendu. Chaque proposition précise les livrables et les conditions.",
    sections: [
      {
        title: "Audit ponctuel",
        text: "Pour comprendre une baisse, préparer une stratégie ou débloquer un site. Le devis tient compte du nombre de templates, des données disponibles et de la profondeur de l’analyse.",
      },
      {
        title: "Accompagnement régulier",
        text: "Pour avancer sur une feuille de route et mesurer les effets. Le volume d’intervention, les réunions et la répartition de la production sont définis avant le démarrage.",
      },
      {
        title: "Projet de refonte ou de mesure",
        text: "Pour une migration, un plan de marquage ou un tableau de bord. Le périmètre inclut les environnements à tester, les parcours et la recette. Demandez une proposition avec votre URL et vos objectifs.",
      },
    ],
    related: ["contact", "audit-seo", "consultant-seo-ou-agence"],
  },
  {
    slug: "a-propos",
    title: "Med Issam Chaoui — SEO, GEO & data web",
    category: "À PROPOS",
    intro:
      "Mon approche relie la visibilité organique à ce qui compte pour votre activité : des contenus utiles, un site accessible et une mesure compréhensible.",
    sections: [
      {
        title: "Une approche transversale",
        text: "Le SEO technique, la stratégie de contenu et la mesure web ne fonctionnent pas en silos. Une page doit être découverte, répondre à une intention et permettre une action utile.",
      },
      {
        title: "Des recommandations explicites",
        text: "Chaque proposition distingue les constats, les hypothèses et les résultats observés. Les outils aident à diagnostiquer ; les priorités dépendent de votre contexte.",
      },
      {
        title: "Échanger sur votre projet",
        text: "L’accompagnement se construit autour de vos objectifs et de vos ressources, avec des échanges à distance pour les projets à Marseille, Paris et ailleurs en France.",
      },
    ],
    related: ["methode-seo", "contact"],
  },
  {
    slug: "etudes-de-cas",
    title: "Cas pratiques : comprendre les décisions SEO",
    category: "RESSOURCES",
    intro:
      "Ces scénarios pédagogiques illustrent une démarche de diagnostic. Ils ne constituent pas des résultats clients ni des performances revendiquées.",
    sections: [
      {
        title: "Une baisse après une refonte",
        text: "Hypothèse : des URL utiles ont été supprimées. Vérifier le mapping de redirections, comparer les anciennes pages de destination et tester les liens entrants. Corriger les redirections pertinentes puis suivre les erreurs et l’indexation.",
      },
      {
        title: "Du trafic, mais peu de demandes",
        text: "Hypothèse : les contenus répondent surtout à une intention informative. Segmenter les pages, vérifier la fiabilité du suivi et étudier les passages vers les pages de service avant d’ajouter des appels à l’action.",
      },
      {
        title: "Une marque absente des réponses IA",
        text: "Constituer un panel de questions et observer les sources. Vérifier l’accessibilité et la précision des contenus, puis enrichir les réponses avec des informations originales et sourcées. Répéter les observations à protocole constant.",
      },
    ],
    related: ["audit-seo", "data-web", "geo"],
  },
];
const rawGuides: Entry[] = [
  {
    slug: "blog/seo-vs-geo",
    title: "SEO et GEO : quelles différences et quelles priorités ?",
    category: "GEO",
    intro:
      "Le SEO améliore l’accès à vos contenus dans les moteurs de recherche. Le GEO s’intéresse à leur compréhension et à leur utilisation dans les réponses générées. Les deux partagent des fondamentaux.",
    sections: [
      {
        title: "Deux modes de découverte",
        text: "La recherche classique propose des liens parmi lesquels le lecteur choisit. Une expérience générative peut synthétiser plusieurs sources et proposer des citations. Ces formats peuvent coexister dans le même moteur.",
      },
      {
        title: "La même base technique",
        text: "Une page accessible, un contenu rendu et une structure claire restent essentiels. Google précise qu’aucune optimisation spéciale n’est nécessaire pour ses fonctionnalités IA. Un fichier llms.txt n’est pas une condition d’éligibilité Google.",
      },
      {
        title: "Ce qu’il faut mesurer",
        text: "Pour le SEO, examiner clics, pages et conversions. Pour les observations GEO, fixer un panel de questions et distinguer mentions, citations et visites. Les réponses varient et les mesures ne sont pas exhaustives.",
      },
      {
        title: "Par quoi commencer ?",
        text: "Corriger les blocages d’indexation, consolider les pages qui répondent à des besoins réels et documenter les preuves. Ensuite seulement, élargir la mesure aux moteurs de réponse.",
      },
    ],
    related: ["seo", "geo", "geo-referencement-ia"],
  },
  {
    slug: "blog/core-web-vitals",
    title: "Core Web Vitals : comprendre LCP, INP et CLS",
    category: "SEO",
    intro:
      "Les Core Web Vitals décrivent trois dimensions de l’expérience : chargement, interaction et stabilité visuelle. Ils servent à guider des corrections concrètes.",
    sections: [
      {
        title: "LCP : afficher le contenu principal",
        text: "Le Largest Contentful Paint mesure le moment où le plus grand élément de contenu visible est rendu. Une image trop lourde, une réponse serveur lente ou des ressources bloquantes peuvent retarder ce moment.",
      },
      {
        title: "INP : répondre aux interactions",
        text: "Interaction to Next Paint observe la réactivité des interactions pendant la visite. Réduire le travail JavaScript et découper les tâches longues peut améliorer la réponse de l’interface.",
      },
      {
        title: "CLS : éviter les déplacements",
        text: "Cumulative Layout Shift mesure les décalages inattendus. Réserver les dimensions des images et des espaces intégrés évite de faire bouger le contenu pendant la lecture.",
      },
      {
        title: "Laboratoire et terrain",
        text: "Les seuils recommandés sont LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1 au 75e percentile. Un test local ne prouve pas ces valeurs pour les visiteurs réels : consulter les données de terrain lorsqu’elles sont disponibles.",
      },
    ],
    related: ["seo-technique", "refonte-seo", "audit-seo"],
  },
  {
    slug: "blog/plan-mesure-ga4",
    title: "Comment construire un plan de mesure GA4 utile ?",
    category: "DATA",
    intro:
      "Avant de créer des balises, définissez les décisions que les données doivent permettre. Le plan de mesure documente les événements et leurs conditions de collecte.",
    sections: [
      {
        title: "Partir d’une question métier",
        text: "Quelles pages apportent des demandes qualifiées ? Où le parcours s’interrompt-il ? Une question précise aide à éviter la collecte de clics sans utilité.",
      },
      {
        title: "Définir le succès réel",
        text: "Un événement de demande correspond à une confirmation serveur, pas au clic sur un bouton. Documenter les paramètres nécessaires, leurs types et les exclusions.",
      },
      {
        title: "Vérifier la collecte",
        text: "Tester erreurs, succès, double clic, navigation mobile et choix de consentement. Vérifier que les informations personnelles ne passent pas dans les paramètres ou URL.",
      },
      {
        title: "Maintenir le plan",
        text: "Associer chaque modification à une date et à un responsable. Les évolutions du site peuvent modifier le sens des indicateurs : annoter ces changements dans le reporting.",
      },
    ],
    related: ["data-web", "plan-marquage-ga4", "dashboard-seo"],
  },
];
export const entries: Entry[] = rawEntries.map(enrich);
export const guides: Entry[] = rawGuides.map(enrich);
export const allEntries = [...entries, ...guides];

/** Recherche par slug, enrichissement inclus. Lève si le slug n'existe pas. */
export function getEntry(slug: string): Entry {
  const found = allEntries.find((e) => e.slug === slug);
  if (!found) throw new Error(`Contenu introuvable pour le slug « ${slug} »`);
  return found;
}

export const sourceLinks = [
  {
    label: "Google Search Central — fondamentaux SEO et recherche IA",
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
  },
  {
    label: "Google — créer des contenus utiles et fiables",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
  },
  { label: "web.dev — Web Vitals", url: "https://web.dev/articles/vitals" },
  {
    label: "Google Analytics — événements",
    url: "https://developers.google.com/analytics/devguides/collection/ga4/events",
  },
  {
    label: "OpenAI — robots de recherche et d’entraînement",
    url: "https://developers.openai.com/api/docs/bots",
  },
  {
    label: "OpenAI — informations pour les éditeurs et mesure des références",
    url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
  },
];
