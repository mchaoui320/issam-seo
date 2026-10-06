import type { ServiceData } from "@/lib/services/types";

export const analyseDeLogs: ServiceData = {
  slug: "analyse-de-logs",
  famille: "SEO",
  titre: "Analyse de logs : voir ce que les moteurs font vraiment sur votre site",
  metaTitre: "Analyse de logs SEO et budget de crawl",
  metaDescription:
    "Analyse des journaux serveur pour savoir ce que Googlebot explore réellement : budget de crawl, pages ignorées, codes d’erreur et robots IA. Oncrawl, Botify, Screaming Frog.",
  intro:
    "Un crawl simule le passage d’un robot. Les journaux serveur enregistrent son passage réel. Entre les deux, l’écart est souvent considérable — et c’est dans cet écart que se trouvent les pages que Google n’a jamais vues.",

  answer:
    "L’analyse de logs consiste à lire les journaux du serveur pour savoir quelles URL les robots des moteurs ont réellement demandées, à quelle fréquence et avec quel code de réponse. Contrairement à un crawl, qui simule ce parcours, elle montre ce qui s’est effectivement passé : les pages explorées, celles ignorées, et le budget de crawl consommé inutilement.",
  takeaways: [
    "Un crawl simule, les logs constatent : sur un site volumineux, l’écart entre les deux dépasse souvent 30 % des URL.",
    "Une page jamais demandée par Googlebot ne sera jamais indexée, quelle que soit sa qualité éditoriale.",
    "Les filtres à facettes et les paramètres de tri absorbent fréquemment la majorité du budget de crawl.",
    "Les logs sont aussi la seule source fiable pour savoir si les robots IA passent sur votre site.",
  ],

  published: "2026-10-06",
  updated: "2026-10-06",
  keywords: [
    "analyse de logs SEO",
    "budget de crawl",
    "logs serveur Googlebot",
    "crawl budget",
  ],

  problemes: [
    {
      titre: "Vous publiez, et rien ne s’indexe",
      texte:
        "Les pages sont en ligne, le sitemap les contient, Search Console les déclare « découvertes mais non indexées ». Les logs montrent généralement la raison : Googlebot n’est jamais venu, parce qu’il a dépensé son budget ailleurs — sur des URL à paramètres, des filtres ou des pages de recherche interne.",
    },
    {
      titre: "Votre crawl est propre, vos résultats non",
      texte:
        "Screaming Frog affiche un site sain parce qu’il explore ce que vous lui demandez d’explorer. Les logs, eux, révèlent les URL que vous ignoriez exister : anciennes versions, redirections en chaîne, variantes générées par un plugin. Le robot, lui, les voit.",
    },
    {
      titre: "Vous ne savez pas si les robots IA passent",
      texte:
        "GPTBot, ClaudeBot, PerplexityBot et OAI-SearchBot laissent une trace dans les journaux et nulle part ailleurs. Aucun outil SEO classique ne vous le dira. C’est pourtant la seule façon de vérifier qu’une autorisation posée dans robots.txt produit un effet réel.",
    },
  ],

  chiffres: [
    {
      valeur: "30 %",
      libelle:
        "Écart courant entre les URL qu’un crawl découvre et celles que les robots demandent réellement",
      source: "Ordre de grandeur observé sur des sites de plus de 10 000 URL",
    },
    {
      valeur: "4",
      libelle:
        "Familles de robots IA repérables uniquement dans les journaux serveur",
      source: "OpenAI, Anthropic, Perplexity, Google-Extended",
    },
    {
      valeur: "7 jours",
      libelle: "Profondeur minimale de journaux pour une lecture exploitable",
      source: "30 jours sont préférables sur un site saisonnier",
    },
    {
      valeur: "0",
      libelle:
        "Outil SEO capable de remplacer les logs pour constater un passage de robot",
      source: "Search Console agrège, elle ne détaille pas par URL",
    },
  ],

  comparatif: {
    titre: "Crawl et logs ne répondent pas à la même question",
    intro:
      "Les deux sont utiles et ne se remplacent pas. Confondre leurs réponses conduit à corriger des problèmes qui n’existent pas.",
    colonneA: {
      titre: "Ce qu’un crawl vous apprend",
      points: [
        "Ce qu’un robot verrait s’il suivait vos liens aujourd’hui",
        "Les erreurs de structure : canonicals, redirections, profondeur",
        "Le contenu rendu, tel qu’un moteur le recevrait",
        "Une photographie à un instant donné",
        "Les URL atteignables depuis votre maillage interne",
        "Rien sur la fréquence réelle de passage",
      ],
    },
    colonneB: {
      titre: "Ce que les logs constatent",
      points: [
        "Les URL que les robots ont réellement demandées",
        "La fréquence de passage, page par page",
        "Les codes de réponse servis au robot, pas au navigateur",
        "L’historique sur plusieurs semaines",
        "Les URL inconnues de votre maillage, mais explorées quand même",
        "Le passage effectif des robots IA",
      ],
    },
  },

  tableau: {
    titre: "Ce que révèle chaque signal dans les journaux",
    intro:
      "Un journal brut est illisible. Voici les signaux qu’on en extrait et ce qu’ils indiquent concrètement.",
    colonnes: [
      { cle: "signal", titre: "Signal observé" },
      { cle: "sens", titre: "Ce que ça veut dire" },
      { cle: "action", titre: "Action habituelle" },
    ],
    lignes: [
      {
        signal: "URL jamais demandée",
        sens: "Le robot ne l’a pas découverte ou ne la juge pas prioritaire",
        action: "Renforcer le maillage interne vers cette page",
      },
      {
        signal: "Fréquence très élevée sur des pages sans valeur",
        sens: "Budget de crawl absorbé par des facettes ou des paramètres",
        action: "Bloquer les motifs d’URL concernés",
      },
      {
        signal: "Codes 5xx servis au robot",
        sens: "Le serveur sature, souvent aux heures de crawl intense",
        action: "Vérifier la capacité et les limites de taux",
      },
      {
        signal: "Redirections en chaîne",
        sens: "Chaque saut consomme du budget et dilue le signal",
        action: "Réécrire les liens internes vers la cible finale",
      },
      {
        signal: "Robot IA absent",
        sens: "L’autorisation dans robots.txt n’a pas l’effet attendu",
        action: "Contrôler la syntaxe et les règles antérieures",
      },
      {
        signal: "Écart desktop / mobile",
        sens: "Le robot mobile ne reçoit pas le même contenu",
        action: "Vérifier le rendu adaptatif côté serveur",
      },
    ],
    note: "Ces lectures supposent des journaux complets. Un hébergement mutualisé qui ne conserve que 48 heures de logs limite fortement l’analyse — c’est à vérifier avant de lancer la mission.",
  },

  graphique: {
    titre: "Où part le budget de crawl sur un e-commerce type",
    intro:
      "Répartition constatée sur un catalogue à facettes avant correction. La part consacrée aux pages qui rapportent est minoritaire.",
    unite: " %",
    barres: [
      { libelle: "Filtres et tris générés", valeur: 41 },
      { libelle: "Pages produits", valeur: 23, accent: true },
      { libelle: "Pagination profonde", valeur: 16 },
      { libelle: "Recherche interne", valeur: 11 },
      { libelle: "Pages catégories", valeur: 6, accent: true },
      { libelle: "Contenu éditorial", valeur: 3, accent: true },
    ],
    source:
      "Cas composite, à visée pédagogique. Les proportions varient fortement d’un site à l’autre.",
  },

  methode: {
    titre: "Comment se déroule l’analyse",
    intro:
      "Quatre temps. Le premier est le plus souvent le plus long, parce qu’obtenir les journaux suppose de passer par l’hébergeur ou l’équipe technique.",
    etapes: [
      {
        titre: "Récupérer les journaux",
        phrase:
          "On définit avec votre équipe technique le format, la profondeur et le mode de transmission.",
        points: [
          "Format attendu : combined, ou équivalent documenté",
          "Profondeur minimale de 7 jours, 30 de préférence",
          "Vérification que l’adresse IP et l’agent sont conservés",
          "Transmission sécurisée, journaux purgés après analyse",
        ],
        objectif:
          "disposer de données complètes. Un journal tronqué produit une analyse fausse, pas une analyse partielle.",
      },
      {
        titre: "Authentifier les robots",
        phrase:
          "Un agent déclaré « Googlebot » ne l’est pas toujours : une part du trafic robot est usurpée.",
        points: [
          "Résolution DNS inverse puis directe sur les adresses",
          "Séparation des robots authentifiés et des usurpateurs",
          "Classement par moteur et par type de robot",
          "Repérage des robots IA et de leur fréquence",
        ],
        objectif:
          "ne pas tirer de conclusions à partir de trafic qui n’émane pas des moteurs.",
      },
      {
        titre: "Croiser avec le crawl et Search Console",
        phrase:
          "C’est le croisement qui produit l’information, pas les logs seuls.",
        points: [
          "URL explorées mais absentes du crawl",
          "URL du crawl jamais explorées",
          "Pages explorées mais non indexées",
          "Corrélation entre fréquence de crawl et positions",
        ],
        objectif:
          "identifier les pages que le moteur ignore, et celles sur lesquelles il perd son temps.",
      },
      {
        titre: "Prioriser les corrections",
        phrase:
          "Chaque recommandation nomme le motif d’URL concerné et la façon de vérifier l’effet.",
        points: [
          "Motifs d’URL à bloquer, avec la directive exacte",
          "Pages à renforcer dans le maillage interne",
          "Chaînes de redirections à écraser",
          "Contrôle de l’effet au prochain relevé",
        ],
        objectif:
          "rendre au crawl le budget dépensé inutilement, et le reporter sur les pages qui rapportent.",
      },
    ],
  },

  livrables: [
    {
      nom: "Rapport d’exploration commenté",
      detail:
        "Volume de hits par robot authentifié, répartition par type de page, codes de réponse servis, évolution sur la période. Avec les exports bruts, réutilisables sans nous.",
    },
    {
      nom: "Liste des URL orphelines au crawl",
      detail:
        "Les adresses que les robots demandent alors qu’aucun lien interne n’y mène. Elles viennent souvent d’anciennes versions du site ou de liens externes oubliés.",
    },
    {
      nom: "Cartographie du budget gaspillé",
      detail:
        "Motifs d’URL qui consomment du crawl sans produire de valeur, classés par volume, avec la directive de blocage correspondante.",
    },
    {
      nom: "Relevé de passage des robots IA",
      detail:
        "Fréquence de GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot et Google-Extended. Seule preuve disponible que vos autorisations produisent un effet.",
    },
    {
      nom: "Feuille de route priorisée",
      detail:
        "Chaque ligne porte le motif d’URL, la correction, le responsable et la méthode de recette.",
    },
  ],

  outils: [
    {
      nom: "Oncrawl",
      usage:
        "Croisement natif entre journaux, crawl et données Search Console sur les sites volumineux",
    },
    {
      nom: "Botify",
      usage:
        "Analyse de budget de crawl et segmentation par type de page sur les très gros catalogues",
    },
    {
      nom: "Screaming Frog Log File Analyser",
      usage:
        "Traitement local des journaux quand les données ne doivent pas sortir de l’entreprise",
    },
    {
      nom: "Python et pandas",
      usage:
        "Parsing des formats non standards, authentification des robots par DNS inverse, agrégations sur mesure",
    },
    {
      nom: "BigQuery",
      usage:
        "Stockage et interrogation des journaux sur plusieurs mois quand le volume dépasse ce qu’un tableur absorbe",
    },
  ],

  tarif: {
    fourchette: "1 800 à 4 500 € pour une analyse complète",
    variables: [
      "Volume de journaux et profondeur d’historique",
      "Nombre d’URL et complexité de la segmentation",
      "Format des journaux : standard ou propriétaire à parser",
      "Croisement ou non avec les données de conversion",
      "Mise en place d’un suivi récurrent après la première analyse",
    ],
  },

  faq: [
    [
      "Qu’est-ce que l’analyse de logs en SEO ?",
      "C’est la lecture des journaux du serveur pour savoir quelles URL les robots des moteurs ont réellement demandées, quand, et avec quel code de réponse. Contrairement à un crawl, qui simule le parcours d’un robot, elle constate ce qui s’est effectivement passé. C’est la seule source qui prouve qu’une page a été vue par Googlebot.",
    ],
    [
      "À partir de quelle taille de site est-ce utile ?",
      "En dessous de quelques milliers d’URL, le budget de crawl est rarement un frein et l’analyse apporte peu. Elle devient déterminante au-delà de 10 000 URL, et indispensable sur un catalogue à facettes, où les combinaisons de filtres peuvent absorber la majorité du crawl sans jamais générer de visite.",
    ],
    [
      "Quels journaux faut-il fournir ?",
      "Les journaux d’accès du serveur web, au format combined ou équivalent, sur 7 jours minimum et 30 de préférence. Ils doivent conserver l’adresse IP, l’agent utilisateur, l’URL demandée, le code de réponse et l’horodatage. Un CDN placé devant le site peut nécessiter de récupérer ses propres journaux.",
    ],
    [
      "Comment savoir si les robots IA passent sur mon site ?",
      "Uniquement par les journaux. GPTBot, ClaudeBot, PerplexityBot et OAI-SearchBot y laissent une trace, et nulle part ailleurs : aucun outil SEO classique ni Search Console ne les rapporte. C’est aussi la seule façon de vérifier qu’une autorisation posée dans robots.txt a bien l’effet attendu.",
    ],
    [
      "Les journaux contiennent-ils des données personnelles ?",
      "Les adresses IP en sont, oui. L’analyse porte sur le trafic robot et n’a pas besoin du trafic humain : les journaux peuvent donc être filtrés avant transmission. Dans tous les cas, ils sont purgés après l’analyse et ne sont pas conservés.",
    ],
    [
      "Faut-il refaire l’analyse régulièrement ?",
      "Après correction, un second relevé permet de vérifier que le budget s’est bien reporté sur les pages visées. Ensuite, un passage semestriel suffit pour la plupart des sites, et trimestriel sur un e-commerce dont le catalogue évolue beaucoup.",
    ],
  ],

  pont: {
    titre: "Les logs ne corrigent rien, ils désignent",
    texte:
      "Une analyse de logs produit un diagnostic d’exploration, pas une amélioration. Les corrections qu’elle désigne — maillage interne, blocage de motifs d’URL, chaînes de redirections, capacité serveur — relèvent du SEO technique. Les deux se traitent dans la foulée, l’une orientant l’autre.",
    lien: "/seo-technique",
    libelleLien: "Voir le SEO technique",
  },

  liens: [
    {
      href: "/audit-seo",
      titre: "Audit SEO complet",
      texte:
        "L’analyse de logs est un volet de l’audit. L’audit complet y ajoute le contenu, le maillage et la popularité.",
    },
    {
      href: "/seo-technique",
      titre: "SEO technique",
      texte:
        "Les corrections que les logs désignent : indexation, redirections, performances, capacité serveur.",
    },
    {
      href: "/geo-referencement-ia",
      titre: "Référencement IA",
      texte:
        "Les journaux prouvent le passage des robots IA. Reste à leur donner quelque chose à citer.",
    },
    {
      href: "/bigquery-seo",
      titre: "BigQuery pour le SEO",
      texte:
        "Quand le volume de journaux dépasse ce qu’un tableur absorbe, l’analyse passe en base.",
    },
  ],
};
