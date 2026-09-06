import type { Entry } from "@/lib/content";

/**
 * Couche GEO du contenu.
 *
 * Les moteurs de réponse extraient mal un texte purement narratif. Ils reprennent
 * en revanche très bien : une réponse autonome en tête, des points saillants
 * courts, et des questions formulées comme les utilisateurs les posent.
 *
 * Tout ce qui est déclaré ici est affiché sur la page correspondante. Rien n'est
 * balisé sans être visible.
 */
export type Enrichment = Pick<
  Entry,
  "answer" | "takeaways" | "faq" | "keywords" | "published" | "updated"
>;

export const enrichment: Record<string, Enrichment> = {
  seo: {
    answer:
      "Le référencement naturel consiste à rendre un site accessible aux moteurs, pertinent pour une intention de recherche et suffisamment utile pour être préféré aux alternatives. Il repose sur trois piliers indissociables : la technique, le contenu et la mesure.",
    takeaways: [
      "Une position ne vaut rien si la requête ne correspond pas à une intention commerciale réelle.",
      "Un blocage d'indexation passe toujours avant une optimisation de présentation.",
      "Le maillage interne guide le lecteur du guide vers la prestation correspondante.",
      "Le suivi sépare requêtes de marque et hors marque, sinon les variations sont illisibles.",
    ],
    faq: [
      [
        "Combien de temps avant de voir des résultats en SEO ?",
        "Les corrections techniques peuvent produire un effet en quelques semaines. Un travail de contenu et d'autorité s'apprécie plutôt sur six à douze mois. Le délai dépend de l'état initial du site, de la concurrence sur les requêtes visées et de la vitesse de mise en production côté client.",
      ],
      [
        "Le SEO est-il encore utile avec les réponses générées par IA ?",
        "Oui. Les moteurs de réponse s'appuient sur des pages indexables et compréhensibles. Google indique que ses fondamentaux SEO restent pertinents pour ses fonctionnalités génératives. Une base SEO saine est la condition d'entrée du GEO, pas une alternative.",
      ],
      [
        "Faut-il publier beaucoup de contenu pour progresser ?",
        "Non. Publier davantage sans répondre mieux fragmente l'autorité et crée de la concurrence interne entre vos propres pages. Consolider une page de référence produit généralement plus qu'ajouter trois pages faibles sur le même sujet.",
      ],
      [
        "Peut-on garantir une position sur Google ?",
        "Non, et toute garantie de ce type doit alerter. Le classement dépend de facteurs hors de contrôle du prestataire, dont la concurrence et les évolutions du moteur. L'engagement porte sur un périmètre, des actions et une mesure transparente.",
      ],
    ],
    keywords: [
      "consultant SEO",
      "référencement naturel",
      "stratégie SEO",
      "améliorer son SEO",
    ],
    published: "2025-11-18",
    updated: "2026-08-24",
  },

  "audit-seo": {
    answer:
      "Un audit SEO inventorie ce qui empêche un site d'être exploré, indexé et choisi par les moteurs, puis classe les corrections par impact et par effort. Le livrable attendu n'est pas une liste de constats mais une feuille de route dont chaque ligne est vérifiable.",
    takeaways: [
      "L'audit croise crawl, Search Console et données de conversion : les trois ensemble, sinon on confond problème technique et problème d'intention.",
      "Chaque recommandation nomme les URL concernées, la correction et la méthode de recette.",
      "Sans accès analytics, le diagnostic reste possible mais ne peut pas hiérarchiser par valeur commerciale.",
      "Un audit sans restitution orale finit dans un dossier partagé.",
    ],
    faq: [
      [
        "Combien coûte un audit SEO ?",
        "Le prix dépend du nombre de templates, du volume d'URL, des données disponibles et de la profondeur attendue. Un site vitrine de vingt pages et un e-commerce de cinquante mille références ne demandent pas le même travail. Le devis précise le périmètre analysé avant d'annoncer un montant.",
      ],
      [
        "Quels accès faut-il fournir ?",
        "Search Console en lecture seule, l'accès analytics et, si possible, les données de conversion. Un accès au CMS ou au dépôt de code aide à évaluer la faisabilité des corrections. L'audit peut se faire sans, au prix d'une priorisation moins fine.",
      ],
      [
        "Combien de temps dure un audit ?",
        "Généralement deux à quatre semaines entre le lancement et la restitution, selon la taille du site et le délai d'obtention des accès. La restitution est suivie d'une phase de questions et d'arbitrage avec vos équipes.",
      ],
      [
        "Que se passe-t-il après l'audit ?",
        "Vous disposez d'une feuille de route priorisée exploitable par vos équipes. Un accompagnement de mise en œuvre est possible mais pas obligatoire. Après correction, un nouveau crawl et des contrôles ciblés permettent de vérifier ce qui a réellement été traité.",
      ],
    ],
    keywords: [
      "audit SEO",
      "audit référencement",
      "diagnostic SEO",
      "audit technique site",
    ],
    published: "2025-11-22",
    updated: "2026-07-30",
  },

  "seo-technique": {
    answer:
      "Le SEO technique garantit que les moteurs peuvent découvrir, charger, rendre et indexer les bonnes pages. Il traite l'exploration, l'indexation, le rendu JavaScript et les Core Web Vitals — soit tout ce qui conditionne l'accès au contenu avant même qu'il soit évalué.",
    takeaways: [
      "Une URL bloquée dans robots.txt empêche la lecture de son propre noindex : les deux directives se contredisent souvent.",
      "Le contenu essentiel et les liens de navigation doivent exister dans le HTML rendu, pas seulement après hydratation.",
      "Les seuils Core Web Vitals s'apprécient au 75e percentile sur données de terrain, pas sur un test local.",
      "Une refonte peut casser canonicals, titres et redirections sans qu'aucune alerte ne se déclenche.",
    ],
    faq: [
      [
        "Quels sont les seuils Core Web Vitals à respecter ?",
        "LCP inférieur ou égal à 2,5 secondes, INP inférieur ou égal à 200 millisecondes, CLS inférieur ou égal à 0,1. Ces valeurs s'apprécient au 75e percentile des visites réelles. Un bon score en laboratoire ne prouve pas que les visiteurs vivent la même expérience.",
      ],
      [
        "Un site en JavaScript peut-il bien se référencer ?",
        "Oui, à condition que le contenu principal et les liens soient présents dans le HTML rendu reçu par le moteur. Le rendu côté serveur ou la génération statique évitent la plupart des problèmes. Ce qu'il faut contrôler, c'est la page réellement reçue par le robot, pas son apparence dans un navigateur.",
      ],
      [
        "Faut-il un sitemap XML ?",
        "Il aide sur les sites volumineux ou dont le maillage interne est incomplet. Il doit contenir uniquement des URL canoniques, accessibles, sans redirection ni erreur. Un sitemap rempli d'URL mortes envoie un mauvais signal et gaspille du budget de crawl.",
      ],
      [
        "Comment savoir si mon site a un problème technique ?",
        "Les symptômes typiques sont des pages absentes de l'index malgré leur publication, un écart important entre URL soumises et indexées dans Search Console, ou une chute de trafic après une mise en production. Un crawl complet confronté aux données Search Console permet de trancher.",
      ],
    ],
    keywords: [
      "SEO technique",
      "Core Web Vitals",
      "indexation Google",
      "crawl budget",
    ],
    published: "2025-12-02",
    updated: "2026-08-11",
  },

  geo: {
    answer:
      "Le GEO (Generative Engine Optimization) rend un contenu compréhensible, vérifiable et citable par les moteurs de réponse comme ChatGPT, Perplexity, Gemini ou les AI Overviews de Google. Il ne remplace pas le SEO : il en prolonge les fondamentaux vers un mode de découverte où l'utilisateur lit une synthèse plutôt qu'une liste de liens.",
    takeaways: [
      "Aucune optimisation ne garantit une citation : les réponses générées varient d'une session à l'autre.",
      "Une réponse autonome en tête de page est ce qui s'extrait le mieux.",
      "La cohérence de l'entité — nom, expertise, coordonnées — compte autant que le texte.",
      "Un protocole de suivi fige la question, la langue, la date et le moteur, sinon les observations ne sont pas comparables.",
    ],
    faq: [
      [
        "Qu'est-ce que le GEO exactement ?",
        "Le Generative Engine Optimization désigne le travail de clarté, de structure et de fiabilité qui rend un contenu exploitable par les moteurs de réponse génératifs. Concrètement : des réponses directes, des sources, un auteur identifiable, des informations datées et une structure que la machine peut découper.",
      ],
      [
        "Le GEO remplace-t-il le SEO ?",
        "Non. Les moteurs de réponse s'appuient sur des pages indexées et accessibles. Sans base SEO saine, il n'y a rien à citer. Le GEO ajoute une couche de lisibilité machine à un socle qui reste le référencement classique.",
      ],
      [
        "Le fichier llms.txt est-il obligatoire ?",
        "Non. Google déclare explicitement l'ignorer, et aucun moteur n'en fait une condition d'éligibilité. Certains outils et assistants le lisent, ce qui en fait un complément peu coûteux — jamais un prérequis, et sûrement pas un substitut à du contenu de qualité.",
      ],
      [
        "Comment savoir si mon site est cité par les IA ?",
        "En constituant un panel de questions représentatives et en les rejouant à intervalle régulier, à protocole constant : même formulation, même langue, date consignée, moteur identifié. On distingue ensuite mention de marque, lien réellement cité et visite référente arrivée sur le site.",
      ],
    ],
    keywords: [
      "GEO",
      "Generative Engine Optimization",
      "référencement IA",
      "être cité par ChatGPT",
    ],
    published: "2025-12-10",
    updated: "2026-09-01",
  },

  "geo-referencement-ia": {
    answer:
      "Se rendre visible dans ChatGPT, Gemini et Perplexity demande trois choses : une base SEO indexable, des contenus qui apportent une information qu'on ne trouve pas ailleurs, et un protocole d'observation stable pour mesurer les citations sans se raconter d'histoires.",
    takeaways: [
      "Perplexity pondère fortement la fraîcheur : une page datée et mise à jour a un avantage mesurable.",
      "Les éléments difficiles à remplacer — méthode détaillée, données originales, protocole — sont ce qui se cite.",
      "Aucun fichier spécial ni balisage magique n'assure une présence dans les réponses générées.",
      "Une visibilité déclarée par un outil n'est pas un revenu attribué.",
    ],
    faq: [
      [
        "Comment apparaître dans les réponses de ChatGPT ?",
        "Il n'existe aucune procédure de soumission. Les modèles s'appuient sur des sources indexées et, en mode recherche, sur des pages récupérées en direct. Ce qui augmente les chances : autoriser les robots concernés, publier des informations précises et datées, structurer les réponses de façon autonome et être cohérent sur son identité d'auteur.",
      ],
      [
        "Faut-il bloquer les robots d'entraînement IA ?",
        "C'est un arbitrage. Les bloquer protège le contenu d'un usage d'entraînement mais réduit la probabilité d'être connu du modèle. Pour une activité qui vit de sa visibilité, l'ouverture est généralement le bon choix. Pour un média dont le contenu est le produit, la réponse peut être inverse.",
      ],
      [
        "Quelle différence entre GPTBot et OAI-SearchBot ?",
        "GPTBot collecte des données d'entraînement. OAI-SearchBot récupère des pages pour alimenter les réponses de recherche avec citation. On peut autoriser l'un et refuser l'autre : bloquer GPTBot tout en restant éligible aux citations de ChatGPT Search est une configuration parfaitement valide.",
      ],
      [
        "Combien de temps pour être cité par une IA ?",
        "Il n'y a pas de délai fiable à annoncer. Cela dépend de l'indexation, de la notoriété du domaine et de l'existence d'une réponse meilleure ailleurs. Les observations doivent se faire sur plusieurs semaines, à protocole constant, avant d'en tirer une tendance.",
      ],
    ],
    keywords: [
      "référencement IA",
      "apparaître dans ChatGPT",
      "visibilité Perplexity",
      "citation IA",
    ],
    published: "2026-01-15",
    updated: "2026-09-02",
  },

  "data-web": {
    answer:
      "La mesure web relie ce que font les visiteurs à ce qui compte pour l'entreprise. GA4, Google Tag Manager et Looker Studio ne produisent de la valeur que si les événements collectés correspondent à des succès réels et si les limites de l'attribution sont explicites.",
    takeaways: [
      "Une conversion doit correspondre à un succès confirmé, pas à un clic sur « Envoyer ».",
      "Search Console et GA4 ont des définitions différentes : leurs totaux n'ont aucune raison de coïncider.",
      "Le refus des traceurs et les parcours multi-appareils rendent toute mesure incomplète par construction.",
      "Un tableau de bord se termine par une décision, pas par un graphique.",
    ],
    faq: [
      [
        "Pourquoi mes chiffres GA4 et Search Console ne correspondent-ils pas ?",
        "Parce qu'ils mesurent des choses différentes. Search Console compte des clics depuis les résultats de recherche, côté moteur. GA4 compte des sessions déclenchées côté navigateur, après acceptation des traceurs. Un écart de vingt à quarante pour cent est courant et ne signale pas nécessairement une erreur.",
      ],
      [
        "Qu'est-ce qu'un plan de marquage ?",
        "C'est le document qui liste les interactions à suivre, et pour chacune : le déclencheur, les paramètres transmis, leur type, la finalité et la règle de consentement applicable. Il sert de contrat entre le marketing et les développeurs, et de référence quand un indicateur devient incohérent après une mise en production.",
      ],
      [
        "Le consentement fausse-t-il mes données ?",
        "Il les rend incomplètes, ce qui n'est pas la même chose que fausses. L'important est de connaître le taux de consentement, de le suivre dans le temps et de comparer des périodes de même nature. Les décisions se prennent sur des tendances cohérentes, pas sur des totaux présentés comme exhaustifs.",
      ],
      [
        "Faut-il passer à un suivi côté serveur ?",
        "Cela peut améliorer la fiabilité et le contrôle des données transmises, au prix d'une infrastructure à maintenir. La question ne se pose utilement qu'une fois le plan de marquage propre : un suivi serveur mal spécifié reproduit les mêmes erreurs, en plus coûteux.",
      ],
    ],
    keywords: [
      "GA4",
      "Google Tag Manager",
      "plan de marquage",
      "analytics web",
      "Looker Studio",
    ],
    published: "2025-12-18",
    updated: "2026-08-19",
  },

  "plan-marquage-ga4": {
    answer:
      "Un plan de marquage GA4 traduit des objectifs commerciaux en événements testables. Il documente, pour chaque interaction suivie, son déclencheur, ses paramètres, sa finalité et sa règle de consentement — avant qu'une seule balise ne soit créée.",
    takeaways: [
      "Une convention de nommage évite que les variantes fragmentent les rapports six mois plus tard.",
      "Les identifiants techniques ne doivent jamais contenir nom, e-mail ou téléphone.",
      "La recette teste aussi les parcours d'échec : erreur de formulaire, double clic, refus des traceurs.",
      "Chaque modification est datée et attribuée, sinon les variations deviennent ininterprétables.",
    ],
    faq: [
      [
        "Par quoi commencer un plan de marquage ?",
        "Par la question métier, pas par l'outil. Quelles décisions les données doivent-elles permettre de prendre ? Quelles pages apportent des demandes qualifiées ? Une fois ces questions écrites, la liste des événements à suivre se réduit d'elle-même et devient beaucoup plus courte que prévu.",
      ],
      [
        "Combien d'événements faut-il suivre ?",
        "Le moins possible, et chacun doit correspondre à une décision. Suivre trente interactions dont personne ne consulte les rapports coûte du temps de recette et fragilise la collecte. Cinq événements fiables valent mieux que trente approximatifs.",
      ],
      [
        "Comment tester que la collecte fonctionne ?",
        "Avec le mode aperçu de Tag Manager, le DebugView de GA4 et l'onglet réseau du navigateur. Il faut rejouer le parcours complet : succès, erreur, double soumission, navigation mobile, acceptation puis refus des traceurs. Ce sont les parcours d'échec qui révèlent les doublons.",
      ],
    ],
    keywords: [
      "plan de marquage GA4",
      "Google Tag Manager",
      "dataLayer",
      "tracking GA4",
    ],
    published: "2026-01-08",
    updated: "2026-07-22",
  },

  "dashboard-seo": {
    answer:
      "Un tableau de bord SEO utile rassemble visibilité, acquisition et conversions avec des définitions stables, des segments cohérents et un commentaire qui explique les variations. Sans ce commentaire, un graphique n'est pas une recommandation.",
    takeaways: [
      "Impressions, clics, sessions et demandes qualifiées mesurent quatre choses distinctes.",
      "Une hausse d'impressions sans clics signale souvent un élargissement des requêtes, pas une dégradation.",
      "Annoter les mises en production rend les variations interprétables des mois plus tard.",
      "Chaque rapport se termine par ce qui a changé, ce qui reste incertain et la prochaine action.",
    ],
    faq: [
      [
        "Quels indicateurs suivre en SEO ?",
        "Au minimum : impressions et clics par groupe de requêtes, sessions organiques, et demandes qualifiées ou ventes attribuées. Le partage marque / hors marque est indispensable, sans quoi une campagne de notoriété peut masquer une stagnation complète du référencement.",
      ],
      [
        "À quelle fréquence consulter son reporting ?",
        "Mensuellement pour les décisions, hebdomadairement pour la surveillance d'incidents. Analyser le SEO au jour le jour produit surtout du bruit : les variations quotidiennes sont rarement significatives et poussent à des réactions prématurées.",
      ],
      [
        "Looker Studio ou un autre outil ?",
        "Looker Studio suffit dans la majorité des cas et se connecte nativement à Search Console et GA4. La difficulté n'est jamais l'outil mais la définition des indicateurs et la cohérence des segments d'une période à l'autre.",
      ],
    ],
    keywords: [
      "dashboard SEO",
      "reporting SEO",
      "Looker Studio",
      "KPI référencement",
    ],
    published: "2026-02-03",
    updated: "2026-08-05",
  },

  "seo-local": {
    answer:
      "Le SEO local rend une entreprise visible dans la zone qu'elle dessert réellement. Il articule trois éléments : une fiche d'établissement exacte, des pages locales qui apportent une information distincte, et un suivi des contacts par zone.",
    takeaways: [
      "Dupliquer un texte en changeant le nom de la ville ne crée aucune valeur et peut nuire.",
      "Les coordonnées doivent être identiques entre le site, la fiche et les annuaires.",
      "Un clic sur un numéro indique une intention, pas un appel abouti.",
      "Les avis se sollicitent sans achat ni contrepartie — c'est une règle, pas une précaution.",
    ],
    faq: [
      [
        "Faut-il une page par ville ?",
        "Uniquement si chaque page apporte une information réellement distincte : conditions d'intervention, délais, contraintes du marché, références locales. Un annuaire de pages quasi identiques dilue l'autorité et n'apporte généralement aucun positionnement supplémentaire.",
      ],
      [
        "Comment améliorer sa fiche d'établissement ?",
        "Catégorie principale exacte, horaires tenus à jour, services réellement proposés, photos récentes et réponses aux avis. La cohérence avec les informations du site compte davantage que le remplissage exhaustif de tous les champs disponibles.",
      ],
      [
        "Peut-on se positionner sans adresse physique ?",
        "C'est plus difficile pour les résultats cartographiques, qui reposent sur une présence vérifiable. Une zone de service peut être déclarée sans adresse affichée. En revanche, déclarer une adresse fictive expose à une suspension de la fiche.",
      ],
    ],
    keywords: [
      "SEO local",
      "référencement local",
      "fiche établissement Google",
      "visibilité locale",
    ],
    published: "2026-01-28",
    updated: "2026-07-15",
  },

  "strategie-contenu-seo": {
    answer:
      "Une stratégie de contenu SEO regroupe les requêtes qui appellent la même réponse, leur associe une page de référence unique et définit ce que chaque page doit prouver. Elle évite ainsi que plusieurs pages du même site se disputent la même intention.",
    takeaways: [
      "La longueur découle de la réponse à apporter : un quota de mots ne garantit rien.",
      "Un brief exploitable précise le lecteur, la question principale, les preuves et la structure.",
      "Fusionner deux pages concurrentes produit souvent plus que d'en écrire une troisième.",
      "Les guides répondent aux questions ; les pages de service aident à choisir.",
    ],
    faq: [
      [
        "Comment éviter la cannibalisation entre pages ?",
        "En attribuant une intention unique à chaque page et en cartographiant les requêtes avant d'écrire. Si deux pages remontent alternativement sur la même requête dans Search Console, c'est le signal qu'il faut fusionner, différencier nettement, ou choisir laquelle est canonique.",
      ],
      [
        "Combien d'articles publier par mois ?",
        "Aucun chiffre n'a de sens hors contexte. Un article qui répond mieux que tout ce qui existe déjà vaut mieux que quatre articles moyens, qui se concurrenceront entre eux et diront la même chose. La cadence utile est celle que vous pouvez tenir sans baisser le niveau d'exigence.",
      ],
      [
        "Faut-il mettre à jour les anciens contenus ?",
        "Oui, c'est souvent le meilleur rapport effort / résultat. Les pages qui reçoivent des impressions sans clics, ou qui contiennent des informations périmées, sont prioritaires sur la création de nouveaux contenus. La fraîcheur compte aussi beaucoup pour les moteurs de réponse IA.",
      ],
    ],
    keywords: [
      "stratégie contenu SEO",
      "ligne éditoriale",
      "cocon sémantique",
      "brief rédactionnel",
    ],
    published: "2026-02-12",
    updated: "2026-08-01",
  },

  netlinking: {
    answer:
      "Le netlinking développe la popularité d'un site par des liens obtenus dans des contextes pertinents. L'analyse doit privilégier la cohérence éditoriale et le trafic réel des pages liantes plutôt qu'un score d'autorité propriétaire.",
    takeaways: [
      "Un indicateur d'autorité vendu par un outil n'est pas une note attribuée par Google.",
      "Une ressource originale — étude, outil, données — attire des liens sans démarchage.",
      "Les liens sponsorisés doivent être signalés selon les règles des moteurs.",
      "L'attribution reste prudente : contenus et concurrence évoluent en même temps que les liens.",
    ],
    faq: [
      [
        "Faut-il acheter des liens ?",
        "L'achat de liens contrevient aux consignes de Google et expose à une dévaluation ou à une action manuelle. Les partenariats éditoriaux sponsorisés sont possibles s'ils sont signalés correctement. Le risque se juge au regard de la dépendance du site à son trafic organique.",
      ],
      [
        "Combien de liens faut-il ?",
        "La question est mal posée : dix liens depuis des sites pertinents et réellement consultés pèsent davantage que trois cents liens d'annuaires. Ce qui compte est la cohérence thématique, le trafic de la page liante et le caractère naturel de l'ancre.",
      ],
      [
        "Comment analyser un profil de liens existant ?",
        "En regardant les domaines référents, la répartition des ancres et les pages ciblées. Une concentration anormale d'ancres exactes ou une majorité de domaines sans trafic sont des signaux d'alerte. Le désaveu ne s'utilise qu'en cas de problème avéré, pas par précaution.",
      ],
    ],
    keywords: [
      "netlinking",
      "backlinks",
      "popularité SEO",
      "acquisition de liens",
    ],
    published: "2026-02-20",
    updated: "2026-06-28",
  },

  "refonte-seo": {
    answer:
      "Une refonte protège les acquis SEO quand elle commence avant le design : export des URL utiles, mapping vers la nouvelle structure, redirections permanentes et recette après mise en ligne. La perte de trafic après refonte vient presque toujours d'un mapping incomplet.",
    takeaways: [
      "Exporter URL, performances, liens entrants et contenus avant toute décision de structure.",
      "Les redirections pointent vers l'équivalent pertinent, jamais en masse vers la page d'accueil.",
      "Retirer les blocages de préproduction uniquement sur le site public — l'oubli est classique.",
      "Une baisse temporaire s'examine, elle ne se décrète pas comme normale.",
    ],
    faq: [
      [
        "Pourquoi mon trafic a-t-il chuté après la refonte ?",
        "Les causes fréquentes sont : URL supprimées sans redirection, redirections massives vers l'accueil, balise noindex de préproduction laissée en place, contenu réduit lors du redesign, ou maillage interne appauvri. Un crawl comparatif avant / après identifie généralement la cause en quelques heures.",
      ],
      [
        "Faut-il conserver les anciennes URL ?",
        "Quand c'est possible, oui : c'est l'option la moins risquée. Si la structure doit changer, chaque ancienne URL utile doit recevoir une redirection permanente vers son équivalent le plus proche, et les liens internes doivent pointer directement vers la nouvelle adresse.",
      ],
      [
        "Combien de temps avant de retrouver son niveau ?",
        "Sur une migration bien préparée, quelques semaines. Sur une migration mal préparée, la question n'est pas le délai mais la correction du mapping. Tant que les redirections sont incomplètes, le temps ne répare rien.",
      ],
    ],
    keywords: [
      "refonte SEO",
      "migration site",
      "redirections 301",
      "changement de domaine",
    ],
    published: "2026-03-04",
    updated: "2026-07-08",
  },

  "consultant-seo-freelance": {
    answer:
      "Un consultant SEO freelance est l'interlocuteur unique qui conçoit la stratégie de visibilité et suit son exécution. Le format convient quand le périmètre est défini et que les ressources de production — développement, rédaction — peuvent être mobilisées séparément.",
    takeaways: [
      "Le tarif journalier moyen constaté en France se situe autour de 570 € en 2025, avec de fortes variations selon la séniorité.",
      "L'avantage du freelance est la continuité : la personne qui vend est celle qui exécute.",
      "La limite est la capacité de production : un freelance ne remplace pas une équipe éditoriale.",
      "Le périmètre écrit — livrables, responsabilités, mesure — évite les malentendus.",
    ],
    faq: [
      [
        "Quel est le tarif d'un consultant SEO freelance ?",
        "Le tarif journalier moyen constaté en France tourne autour de 570 € en 2025, avec un écart important entre profils juniors et séniors. Un accompagnement annuel se situe fréquemment entre 10 000 € et 50 000 € selon la complexité. Le prix se déduit d'un périmètre, jamais l'inverse.",
      ],
      [
        "Freelance ou agence SEO ?",
        "Le freelance offre un interlocuteur direct et une continuité stratégique, pour un périmètre défini. L'agence réunit plusieurs métiers et absorbe une production importante. La bonne question à poser à une agence est simple : qui travaille réellement sur le compte, et combien de temps par mois ?",
      ],
      [
        "Comment se déroule une mission ?",
        "Un cadrage des objectifs et contraintes, un diagnostic, une feuille de route priorisée, puis un accompagnement de mise en œuvre avec un point régulier. Les arbitrages sont visibles pour éviter la liste d'actions sans suivi qui caractérise les missions qui s'enlisent.",
      ],
      [
        "Travaillez-vous à distance ?",
        "Oui. Diagnostics, restitutions et suivis se font à distance, pour des projets à Marseille, Paris et partout en France. La proximité géographique n'a pas d'incidence sur la qualité du travail ; la disponibilité et la clarté des échanges, si.",
      ],
    ],
    keywords: [
      "consultant SEO freelance",
      "freelance référencement",
      "tarif consultant SEO",
      "expert SEO indépendant",
    ],
    published: "2025-11-12",
    updated: "2026-09-01",
  },

  "consultant-seo-marseille": {
    answer:
      "L'accompagnement SEO à Marseille cible les entreprises dont les clients se trouvent dans la métropole et sa zone d'influence. Le travail porte sur la qualification des requêtes locales, la cohérence des informations d'établissement et les parcours de contact.",
    takeaways: [
      "Les requêtes locales mêlent proximité, urgence et comparaison de prestataires : trois intentions à traiter séparément.",
      "Décrire les communes réellement desservies vaut mieux qu'un annuaire de pages par quartier.",
      "Les adresses artificielles exposent à une suspension de fiche.",
      "Diagnostic et restitutions se font à distance.",
    ],
    faq: [
      [
        "Intervenez-vous uniquement à Marseille ?",
        "Non. Marseille est un marché que je connais, mais l'accompagnement se fait à distance partout en France. Ce qui détermine la stratégie n'est pas ma localisation mais la zone où vos clients se trouvent réellement.",
      ],
      [
        "Comment se positionner sur des requêtes locales à Marseille ?",
        "En distinguant les intentions : une recherche urgente, une comparaison de prestataires et une recherche de proximité n'appellent pas la même page ni le même parcours de contact. S'ajoutent une fiche d'établissement exacte et des informations locales vérifiables.",
      ],
      [
        "Faut-il être marseillais pour référencer une entreprise marseillaise ?",
        "Non. Ce qui compte est la compréhension du marché, de la concurrence locale et des intentions de recherche. Les échanges à distance conviennent à la quasi-totalité des missions.",
      ],
    ],
    keywords: [
      "consultant SEO Marseille",
      "référencement Marseille",
      "agence SEO Marseille",
      "SEO local Marseille",
    ],
    published: "2025-12-05",
    updated: "2026-08-14",
  },

  "consultant-seo-paris": {
    answer:
      "À Paris, la densité concurrentielle rend les requêtes génériques coûteuses à conquérir. La stratégie efficace consiste à croiser service, segment de clientèle et zone réellement desservie plutôt qu'à viser une expression large.",
    takeaways: [
      "Cibler « consultant SEO Paris » est environ dix fois plus difficile que le même métier dans une ville moyenne.",
      "Une page par arrondissement n'a de sens que si elle apporte une information distincte.",
      "Le travail porte d'abord sur les preuves et les parcours de conversion.",
      "Les échanges et restitutions s'organisent à distance.",
    ],
    faq: [
      [
        "Le SEO à Paris est-il plus difficile ?",
        "Oui, sur les requêtes génériques : le volume attire davantage de concurrents disposant de moyens importants. La contrepartie est qu'une spécialisation nette — secteur, type de client, expertise précise — permet souvent d'obtenir des contacts plus qualifiés pour un effort moindre.",
      ],
      [
        "Faut-il créer une page par arrondissement ?",
        "Rarement. Vingt pages différant uniquement par un numéro d'arrondissement n'apportent aucune information nouvelle et se concurrencent entre elles. Mieux vaut une page solide sur le service et la zone desservie.",
      ],
      [
        "Travaillez-vous avec des entreprises parisiennes à distance ?",
        "Oui, c'est le mode de fonctionnement habituel. Les restitutions se font en visioconférence et les livrables sont partagés en ligne. Un déplacement ponctuel reste envisageable pour un atelier de cadrage.",
      ],
    ],
    keywords: [
      "consultant SEO Paris",
      "référencement Paris",
      "expert SEO Paris",
      "freelance SEO Paris",
    ],
    published: "2025-12-05",
    updated: "2026-08-14",
  },

  "methode-seo": {
    answer:
      "La méthode suit un cycle court en quatre temps : comprendre le contexte et les données, prioriser par impact et effort, déployer avec vos équipes, mesurer et réajuster. Chaque recommandation est reliée à un problème observable.",
    takeaways: [
      "Un état initial documenté est la condition pour interpréter toute variation ultérieure.",
      "La priorisation croise impact attendu, effort et dépendances techniques.",
      "Chaque action a un responsable nommé et une méthode de validation.",
      "La mesure s'appuie sur les conversions quand elles existent, pas seulement sur le trafic.",
    ],
    faq: [
      [
        "Comment sont priorisées les actions ?",
        "Par croisement de l'impact attendu, de l'effort estimé et des dépendances. Un blocage d'indexation passe avant une optimisation de balise. Une action dont l'impact est incertain mais le coût faible peut passer avant une action lourde à l'impact théorique élevé.",
      ],
      [
        "Que se passe-t-il si mes équipes n'ont pas le temps d'exécuter ?",
        "C'est un cas fréquent, qui doit être posé au cadrage. Les recommandations sont alors adaptées aux ressources réellement disponibles. Une feuille de route de cinquante actions dont trois seront réalisées ne sert à personne.",
      ],
      [
        "À quelle fréquence se fait le suivi ?",
        "Un point mensuel pour les décisions et les arbitrages, avec un reporting qui distingue actions réalisées, résultats observés et hypothèses restantes. Une surveillance plus rapprochée est mise en place lors des mises en production sensibles.",
      ],
    ],
    keywords: [
      "méthode SEO",
      "processus référencement",
      "feuille de route SEO",
      "accompagnement SEO",
    ],
    published: "2025-11-25",
    updated: "2026-07-19",
  },

  "livrables-seo": {
    answer:
      "Les livrables sont des documents exploitables par vos équipes : un rapport de diagnostic avec exemples d'URL, une feuille de route avec responsables et critères de recette, des briefs éditoriaux et un reporting mensuel qui se termine par des décisions.",
    takeaways: [
      "Un rapport comporte une synthèse pour décideur et un détail technique séparé.",
      "La feuille de route est un tableau : action, périmètre, impact, effort, responsable, statut.",
      "Les critères de recette permettent de vérifier objectivement ce qui est terminé.",
      "Un brief précise l'intention, la structure et les preuves attendues — pas un nombre de mots.",
    ],
    faq: [
      [
        "Sous quel format sont fournis les livrables ?",
        "Documents partagés en ligne pour les rapports et briefs, tableur ou outil de gestion de projet pour la feuille de route. Le format s'adapte à vos outils existants : l'objectif est que le document soit utilisé, pas qu'il soit beau.",
      ],
      [
        "Les livrables sont-ils réutilisables sans vous ?",
        "Oui, c'est la condition d'un travail honnête. Chaque document est rédigé pour être compris et exécuté par vos équipes, y compris après la fin de la mission. Aucune dépendance n'est créée artificiellement.",
      ],
    ],
    keywords: [
      "livrables SEO",
      "rapport SEO",
      "feuille de route SEO",
      "brief rédactionnel SEO",
    ],
    published: "2026-01-20",
    updated: "2026-06-30",
  },

  "consultant-seo-ou-agence": {
    answer:
      "Le choix entre consultant freelance et agence dépend du périmètre, des ressources internes disponibles et du besoin de coordination entre métiers. Un freelance offre continuité et interlocuteur direct ; une agence apporte volume de production et pluralité de compétences.",
    takeaways: [
      "Avec une agence, la question décisive est : qui travaille réellement sur le compte, et combien d'heures ?",
      "Avec un freelance, la limite est la capacité de production, pas la compétence.",
      "Comparez des périmètres concrets, jamais des promesses de position.",
      "Vérifiez que vous conservez les accès à vos propres outils et données.",
    ],
    faq: [
      [
        "Quelles questions poser avant de choisir ?",
        "Qui réalise concrètement les actions ? Quels livrables sont inclus, et sous quel format ? Comment se déroule la restitution ? Quels accès conservez-vous à la fin ? Comment les résultats sont-ils mesurés, et avec quelles limites annoncées ?",
      ],
      [
        "Une agence est-elle plus fiable qu'un freelance ?",
        "Pas mécaniquement. Une agence apporte une continuité de structure ; un freelance apporte une continuité de personne. Le risque réel, dans les deux cas, est un écart entre le profil qui vend la mission et celui qui l'exécute.",
      ],
      [
        "Peut-on combiner les deux ?",
        "Oui, et c'est courant : un consultant définit la stratégie et pilote la qualité, une agence ou des rédacteurs assurent la production de volume. Cela suppose de clarifier qui arbitre en cas de désaccord.",
      ],
    ],
    keywords: [
      "consultant SEO ou agence",
      "choisir prestataire SEO",
      "freelance vs agence",
    ],
    published: "2026-02-26",
    updated: "2026-07-11",
  },

  tarifs: {
    answer:
      "Un tarif SEO se déduit d'un périmètre : taille du site, complexité technique, marchés ciblés et niveau d'exécution attendu. En France, le tarif journalier moyen d'un consultant se situe autour de 570 €, et un accompagnement annuel se situe fréquemment entre 10 000 € et 50 000 €.",
    takeaways: [
      "Une grille tarifaire fixe affichée sans périmètre est presque toujours trompeuse.",
      "Un audit ponctuel, un accompagnement régulier et un projet de refonte ne se chiffrent pas de la même façon.",
      "Le devis précise les livrables, les responsabilités et ce qui n'est pas inclus.",
      "Une proposition sérieuse demande votre URL et vos objectifs avant d'annoncer un chiffre.",
    ],
    faq: [
      [
        "Combien coûte un accompagnement SEO ?",
        "Cela dépend du périmètre. À titre de repère marché, le tarif journalier moyen d'un consultant SEO en France est d'environ 570 € en 2025, et un accompagnement annuel se situe fréquemment entre 10 000 € et 50 000 € selon la complexité. Le chiffre exact découle d'un cadrage.",
      ],
      [
        "Pourquoi n'y a-t-il pas de grille de prix affichée ?",
        "Parce qu'un même intitulé recouvre des réalités très différentes. Un audit sur un site vitrine de vingt pages et un audit sur un e-commerce multilingue n'ont en commun que le nom. Afficher un prix unique obligerait soit à surfacturer les petits périmètres, soit à bâcler les grands.",
      ],
      [
        "Proposez-vous un paiement au résultat ?",
        "Non. Le classement dépend de facteurs hors du contrôle du prestataire, et ce modèle pousse structurellement aux raccourcis risqués. L'engagement porte sur un périmètre, des livrables et une mesure transparente.",
      ],
      [
        "Comment obtenir un devis ?",
        "En décrivant votre site, vos objectifs et vos contraintes via la page contact. Un premier échange permet de qualifier le besoin, puis une proposition écrite précise le périmètre, les livrables et le calendrier.",
      ],
    ],
    keywords: [
      "tarif SEO",
      "prix consultant SEO",
      "coût référencement",
      "devis SEO",
    ],
    published: "2026-01-05",
    updated: "2026-09-01",
  },

  "a-propos": {
    answer:
      "Med Issam Chaoui est consultant indépendant en SEO, GEO et mesure web. Son approche relie ces trois disciplines plutôt que de les traiter en silos, avec des recommandations qui distinguent explicitement les constats, les hypothèses et les résultats observés.",
    takeaways: [
      "Une page doit être découverte, répondre à une intention et permettre une action utile : les trois, ou rien.",
      "Les outils aident à diagnostiquer ; les priorités dépendent du contexte de l'entreprise.",
      "Accompagnement à distance, pour des projets à Marseille, Paris et partout en France.",
    ],
    faq: [
      [
        "Sur quels types de projets intervenez-vous ?",
        "Sites de services, e-commerce, plateformes éditoriales. Le point commun des missions utiles est un besoin de visibilité organique relié à un objectif commercial identifiable, et des interlocuteurs capables de mettre en œuvre les recommandations.",
      ],
      [
        "Travaillez-vous avec des agences en marque blanche ?",
        "Ce n'est pas le format privilégié. La valeur de l'accompagnement tient beaucoup à l'échange direct avec les décideurs et les équipes techniques, ce que la marque blanche rend difficile.",
      ],
    ],
    keywords: [
      "Med Issam Chaoui",
      "consultant SEO GEO",
      "expert data web",
    ],
    published: "2025-11-10",
    updated: "2026-09-01",
  },

  "etudes-de-cas": {
    answer:
      "Ces scénarios illustrent une démarche de diagnostic face à trois situations fréquentes : une baisse après refonte, du trafic sans demandes, et une marque absente des réponses IA. Ce sont des cas pédagogiques, pas des résultats clients revendiqués.",
    takeaways: [
      "Chaque cas part d'une hypothèse explicite, puis liste les vérifications qui la confirment ou l'infirment.",
      "Une baisse après refonte oriente d'abord vers le mapping de redirections.",
      "Du trafic sans demandes oriente vers l'intention des pages et la fiabilité du suivi.",
      "Une absence des réponses IA se constate à protocole constant, pas sur une observation isolée.",
    ],
    faq: [
      [
        "Pourquoi n'y a-t-il pas de résultats clients chiffrés ?",
        "Parce que publier des chiffres sans le contexte complet — état initial, actions parallèles, saisonnalité, budget média — donne une impression de preuve sans en être une. Des références détaillées peuvent être présentées lors d'un échange, avec l'accord des clients concernés.",
      ],
      [
        "Ces cas correspondent-ils à des missions réelles ?",
        "Ce sont des situations composites, construites à partir de problèmes récurrents. Elles servent à montrer une méthode de diagnostic, pas à revendiquer une performance.",
      ],
    ],
    keywords: [
      "cas pratique SEO",
      "exemple audit SEO",
      "diagnostic SEO exemple",
    ],
    published: "2026-03-12",
    updated: "2026-08-08",
  },

  // ---------------------------------------------------------------- guides

  "blog/seo-vs-geo": {
    answer:
      "Le SEO optimise l'accès à vos contenus dans les moteurs de recherche ; le GEO optimise leur compréhension et leur reprise dans les réponses générées. Les deux reposent sur les mêmes fondamentaux techniques : une page inaccessible n'est ni classée, ni citée.",
    takeaways: [
      "La recherche classique propose des liens ; l'expérience générative synthétise des sources.",
      "Google indique qu'aucune optimisation spéciale n'est requise pour ses fonctionnalités IA.",
      "Un fichier llms.txt n'est pas une condition d'éligibilité Google.",
      "Commencer par les blocages d'indexation, puis élargir la mesure aux moteurs de réponse.",
    ],
    faq: [
      [
        "Quelle est la différence entre SEO et GEO ?",
        "Le SEO vise le classement d'une page parmi des liens proposés à l'utilisateur. Le GEO vise la reprise du contenu dans une réponse rédigée par un modèle, avec ou sans citation. Le premier optimise une position, le second une extraction.",
      ],
      [
        "Faut-il abandonner le SEO pour le GEO ?",
        "Non. Les moteurs de réponse récupèrent des pages indexées et accessibles. Sans SEO, il n'y a simplement rien à citer. Le GEO est une couche supplémentaire, pas un remplacement.",
      ],
      [
        "Comment mesurer sa visibilité GEO ?",
        "En fixant un panel de questions, une langue et une fréquence d'observation, puis en consignant les réponses obtenues. On distingue mention de marque, lien effectivement cité et visite référente. Les réponses varient : un échantillon n'est pas une mesure exhaustive.",
      ],
    ],
    keywords: [
      "SEO vs GEO",
      "différence SEO GEO",
      "référencement IA",
    ],
    published: "2026-01-22",
    updated: "2026-09-02",
  },

  "blog/core-web-vitals": {
    answer:
      "Les Core Web Vitals mesurent trois dimensions de l'expérience : le LCP pour le chargement du contenu principal, l'INP pour la réactivité aux interactions, le CLS pour la stabilité visuelle. Les seuils recommandés sont 2,5 s, 200 ms et 0,1 au 75e percentile.",
    takeaways: [
      "LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1, appréciés au 75e percentile des visites réelles.",
      "Les données de terrain priment sur les tests de laboratoire pour juger l'expérience.",
      "Réserver les dimensions des images et des blocs intégrés supprime la majorité des décalages.",
      "Un bon score ne promet pas une position : c'est un critère parmi d'autres.",
    ],
    faq: [
      [
        "Les Core Web Vitals influencent-ils le classement ?",
        "Ils font partie des signaux d'expérience de page, avec un poids modéré. Ils départagent surtout des contenus de qualité comparable. Améliorer un LCP catastrophique a un intérêt évident ; passer de 2,4 s à 2,1 s pour espérer gagner des positions est rarement un bon usage du temps.",
      ],
      [
        "Comment mesurer ses Core Web Vitals ?",
        "Search Console fournit les données de terrain agrégées, issues des visites réelles. PageSpeed Insights et Lighthouse donnent un diagnostic de laboratoire utile pour identifier les causes. Les deux sont complémentaires : le terrain constate, le laboratoire explique.",
      ],
      [
        "Qu'est-ce qui dégrade le plus le LCP ?",
        "Le plus souvent : une image principale trop lourde ou non optimisée, un temps de réponse serveur élevé, des polices ou scripts bloquant le rendu, et le chargement différé appliqué par erreur à l'élément principal de la page.",
      ],
    ],
    keywords: [
      "Core Web Vitals",
      "LCP INP CLS",
      "performance web SEO",
      "PageSpeed",
    ],
    published: "2026-02-08",
    updated: "2026-08-11",
  },

  "blog/plan-mesure-ga4": {
    answer:
      "Un plan de mesure GA4 part d'une question métier, pas d'une liste d'événements. Il définit ce qu'est un succès réel, documente les paramètres attendus et prévoit la recette des parcours d'échec autant que des parcours nominaux.",
    takeaways: [
      "Un événement de conversion correspond à une confirmation serveur, pas à un clic sur un bouton.",
      "Tester les erreurs, le double clic, le mobile et le refus des traceurs révèle les doublons.",
      "Aucune donnée personnelle ne doit transiter par les paramètres ou les URL.",
      "Chaque modification est datée et annotée dans le reporting.",
    ],
    faq: [
      [
        "Quels événements suivre en priorité dans GA4 ?",
        "Ceux qui correspondent à une décision commerciale : demande de devis confirmée, achat validé, prise de rendez-vous. Les micro-interactions n'ont d'intérêt que si quelqu'un consulte réellement le rapport correspondant et agit dessus.",
      ],
      [
        "Comment éviter les conversions comptées en double ?",
        "En déclenchant l'événement sur la confirmation serveur plutôt que sur le clic, et en testant explicitement le double clic et le rechargement de la page de remerciement. Le DebugView de GA4 montre les envois en temps réel.",
      ],
      [
        "Faut-il tout suivre ?",
        "Non. Chaque événement ajouté augmente le coût de recette et le risque d'incohérence après une refonte. Un plan court et fiable vaut mieux qu'un plan exhaustif que plus personne ne maintient au bout de six mois.",
      ],
    ],
    keywords: [
      "plan de mesure GA4",
      "événements GA4",
      "conversion GA4",
      "tracking analytics",
    ],
    published: "2026-02-18",
    updated: "2026-07-22",
  },
};

/** Applique la couche GEO à une entrée brute. */
export function enrich(entry: Entry): Entry {
  const extra = enrichment[entry.slug];
  return extra ? { ...entry, ...extra } : entry;
}
