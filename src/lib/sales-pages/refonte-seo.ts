import type { SalesPageData } from "@/lib/sales-pages/types";

export const refonteSeoPage: SalesPageData = {
  code: "MOVE / 04",
  primaryKeyword: "Refonte SEO",
  lede:
    "Une refonte SEO protège les pages, les liens, les contenus et les données qui créent déjà de la valeur pendant un changement de CMS, de design, de domaine ou d’architecture. Nous préparons l’inventaire, le mapping, la recette et la surveillance avant le lancement, quand les décisions sont encore réversibles.",
  proofLine:
    "Une ancienne URL utile reçoit une destination précise · aucune redirection massive vers l’accueil",
  highlights: [
    { value: "Export", label: "URL, trafic, liens, contenus" },
    { value: "Mapping", label: "ancienne vers nouvelle route" },
    { value: "Recette", label: "templates et cas limites" },
    { value: "Watch", label: "logs, indexation, conversions" },
  ],
  image: {
    src: "/images/schemas/plan-redirections.avif",
    alt: "Plan de migration reliant l’inventaire des anciennes URL au mapping des redirections 301 et à la nouvelle architecture",
    caption:
      "Le mapping associe chaque ancienne URL à une destination utile, puis contrôle les chaînes, les boucles et les pages orphelines.",
  },
  answer:
    "Une refonte SEO est un protocole de conservation et de contrôle appliqué à un changement de site. Il inventorie les anciennes URL, décide lesquelles conserver, fusionner, rediriger ou supprimer, prépare une correspondance vers les nouvelles routes, compare les templates en préproduction et surveille le lancement. Le risque zéro n’existe pas, mais un mapping explicite et une recette mesurée évitent la plupart des pertes évitables.",
  takeaways: [
    "Le chantier commence avant les maquettes finales, car l’architecture et les URL sont déjà des décisions de référencement.",
    "Une redirection 301 vise l’équivalent le plus proche ; l’accueil n’est pas une destination par défaut.",
    "La préproduction doit rester protégée tout en étant accessible aux outils de recette autorisés.",
    "Les clics, conversions, logs et groupes de pages sont suivis ensemble après la mise en ligne.",
  ],
  offer: {
    title: "Nous sécurisons votre refonte avant, pendant et après le lancement.",
    intro:
      "Nous travaillons avec le produit, le contenu, la data et le développement dès que l’arborescence et les URL commencent à changer. Notre rôle est de conserver ce qui crée déjà de la valeur, de rendre chaque décision traçable et de détecter rapidement les écarts en production. La prestation couvre le changement graphique, la migration de CMS, le changement de domaine ou la fusion de sites.",
    items: [
      {
        title: "Inventaire et décisions URL",
        detail:
          "Nous rassemblons crawl, CMS, Search Console, analytics et backlinks, puis nous qualifions chaque route à conserver, fusionner ou retirer.",
        deliverable: "l’inventaire de référence avec décision cible, données utiles et justification.",
      },
      {
        title: "Mapping des redirections",
        detail:
          "Nous relions chaque ancienne URL utile à son équivalent le plus proche et testons les règles, paramètres, chaînes et cas limites.",
        deliverable: "un mapping 301 versionné, prêt à implémenter et à recetter.",
      },
      {
        title: "Recette de préproduction",
        detail:
          "Nous comparons les templates, contenus, directives, données structurées, liens, performances et événements de conversion.",
        deliverable: "la liste des écarts bloquants et la checklist partagée du lancement.",
      },
      {
        title: "Surveillance post-lancement",
        detail:
          "Nous suivons erreurs serveur, redirections, logs, indexation, clics et conversions par groupe de pages.",
        deliverable: "un tableau de surveillance et des corrections priorisées pendant la phase sensible.",
      },
    ],
    forWho: [
      "vous changez de CMS, de domaine, d’arborescence ou de technologie de rendu ;",
      "des pages qui génèrent des demandes risquent d’être fusionnées, déplacées ou supprimées ;",
      "vous avez besoin d’un interlocuteur qui coordonne la conservation SEO avec plusieurs équipes.",
    ],
  },
  sections: [
    {
      id: "inventaire-avant-refonte",
      eyebrow: "AVANT LES MAQUETTES FINALES",
      title: "Exporter tout ce qui peut disparaître",
      paragraphs: [
        "La refonte SEO commence par un inventaire plus large qu’un crawl. On rassemble les URL accessibles, les sitemaps, les exports du CMS, Search Console, les pages de destination analytics et les backlinks. Cette consolidation retrouve les pages orphelines, les anciennes campagnes et les ressources encore citées mais absentes de la navigation. Chaque source est conservée pour expliquer pourquoi une route a été retenue.",
        "Les colonnes utiles décrivent le statut, le template, la canonical, le trafic, les requêtes, les conversions, les liens entrants et la place dans le parcours. Le volume ne décide pas seul. Une page peu visitée peut soutenir une vente complexe, répondre à une obligation ou recevoir une recommandation éditoriale rare. L’[[audit SEO|/audit-seo]] fournit les preuves nécessaires avant toute suppression.",
        "Nous ajoutons la décision cible : conserver, améliorer, fusionner, rediriger ou retirer. Chaque choix a un propriétaire et une justification. Cette table devient la source commune du SEO, du produit, du contenu et du développement ; elle évite que chaque équipe travaille avec sa propre liste d’URL.",
      ],
      bullets: [
        "Crawler l’ancien site et archiver les sitemaps avant modification.",
        "Exporter pages de destination, clics Search Console, conversions et backlinks.",
        "Identifier les contenus, fichiers et images qui possèdent encore une URL publique utile.",
      ],
    },
    {
      id: "architecture-contenus",
      eyebrow: "CONCEPTION",
      title: "Décider l’architecture et le contenu avant les redirections",
      paragraphs: [
        "Le nouveau menu ne suffit pas à définir l’architecture. Nous cartographions les intentions, les pages piliers, les services, les catégories et les guides, puis vérifions les chemins de navigation. Une fusion peut renforcer une réponse ; elle peut aussi mélanger deux besoins incompatibles. Une nouvelle route doit avoir une finalité, un contenu et une place dans le maillage.",
        "Les gabarits sont spécifiés avec leurs éléments stables : titre, H1, texte principal, navigation, données structurées visibles, canonical, directives, pagination et blocs associés. Le travail de [[stratégie de contenu|/strategie-contenu-seo]] traite les réécritures ; le dossier de migration garantit que les informations déjà utiles ne disparaissent pas au profit d’une maquette plus courte.",
        "Les changements de domaine, protocole, sous-domaine, langue ou structure de dossiers sont isolés. Cumuler toutes les transformations augmente le nombre de causes possibles en cas de baisse. Lorsque le calendrier le permet, on séquence les changements et on conserve un état de référence mesuré.",
      ],
    },
    {
      id: "mapping-redirections",
      eyebrow: "CORRESPONDANCE URL",
      title: "Construire un plan de redirections 301 précis",
      paragraphs: [
        "Le mapping relie chaque ancienne URL utile à son équivalent fonctionnel le plus proche. Une fiche remplacée par une nouvelle fiche, une catégorie fusionnée vers la catégorie résultante, un guide renommé vers sa nouvelle adresse. Lorsque aucun équivalent n’existe, conserver un statut 404 ou 410 peut être plus honnête qu’une redirection vers l’accueil, souvent traitée comme une erreur douce.",
        "Les règles génériques sont testées sur des cas réels avant déploiement. Une expression régulière trop large peut créer une boucle, écraser un chemin ou envoyer toutes les anciennes routes vers une destination unique. Nous contrôlons aussi les chaînes existantes : la source historique doit atteindre directement la destination finale lorsque cela est possible.",
        "Le fichier contient source, destination, motif, statut attendu, propriétaire et état de test. Les backlinks prioritaires sont signalés pour une vérification spécifique. Après lancement, les logs confirment que les anciennes adresses sont encore demandées et que la réponse reste stable. Le [[SEO technique|/seo-technique]] intervient sur l’implémentation lorsque le routeur, le CDN ou le CMS ajoutent leurs propres règles.",
      ],
      bullets: [
        "Une seule destination pertinente par ancienne URL.",
        "Aucune boucle et aucune chaîne évitable.",
        "Paramètres, casse, slash final et variantes de protocole inclus dans les tests.",
        "404 ou 410 assumée lorsqu’aucune page ne remplace réellement la ressource.",
      ],
    },
    {
      id: "recette-preproduction",
      eyebrow: "AVANT LANCEMENT",
      title: "Crawler la préproduction et comparer les templates",
      paragraphs: [
        "La préproduction doit empêcher l’indexation publique sans bloquer l’équipe de recette. Authentification, liste d’accès et directives temporaires sont documentées, puis retirées selon une checklist de lancement. Nous crawlons l’environnement autorisé et comparons les anciennes et nouvelles pages sur un échantillon représentatif.",
        "La comparaison couvre les statuts, titres, descriptions, H1, canonicals, meta robots, hreflang, données structurées, contenus, liens internes, images et sitemaps. Elle vérifie aussi les éléments invisibles dans une maquette : en-têtes HTTP, rendu JavaScript, réponses mobiles, pagination et événements analytics. Les écarts sont classés en bloquants, importants ou acceptés.",
        "Les parcours commerciaux sont rejoués avec le [[plan de marquage GA4|/plan-marquage-ga4]]. Une demande de devis doit être comptée après confirmation, pas au clic. Sans cette recette, une refonte peut sembler préserver le trafic tout en cassant la mesure ou le formulaire qui permet d’en estimer la valeur.",
      ],
      note:
        "Aucune mise en ligne n’est recommandée avec un blocage global résiduel, un mapping non testé ou des événements de conversion non recettés.",
    },
    {
      id: "checklist-lancement",
      eyebrow: "JOUR J",
      title: "Exécuter une checklist de migration partagée",
      paragraphs: [
        "Le lancement suit un ordre connu par les équipes : sauvegarde, déploiement, retrait des protections de préproduction, activation des redirections, contrôle DNS et certificats, publication des sitemaps, vérification des canonicals et test des parcours. Les responsables et moyens de retour arrière sont fixés avant la fenêtre de mise en ligne.",
        "Un premier échantillon couvre l’accueil, les pages qui génèrent des conversions, les principaux templates, les langues et les anciennes URL les plus citées. Ensuite, un crawl global détecte les motifs : 5xx, boucles, 404 internes, canonicals vers l’ancien domaine, noindex résiduels et ressources bloquées. Les corrections critiques ne doivent pas attendre le rapport du lendemain.",
      ],
      bullets: [
        "Vérifier robots.txt, meta robots, X-Robots-Tag et canonicals sur le domaine public.",
        "Tester anciennes URL prioritaires, règles génériques, erreurs 404 et réponses serveur.",
        "Mettre à jour liens internes, hreflang, sitemaps, outils tiers et propriétés Search Console.",
        "Recetter formulaires, paiements, rendez-vous et consentement sur mobile comme sur ordinateur.",
        "Lancer le crawl de contrôle et annoter l’heure exacte du déploiement dans les tableaux de bord.",
      ],
    },
    {
      id: "surveillance-post-lancement",
      eyebrow: "APRÈS MISE EN LIGNE",
      title: "Surveiller les groupes de pages, pas seulement le trafic total",
      paragraphs: [
        "La surveillance commence immédiatement avec la disponibilité, les 5xx, les redirections et les conversions. Les jours suivants, les logs montrent le passage sur les anciennes et nouvelles routes. Search Console renseigne progressivement l’exploration, l’indexation et les clics. Nous comparons des groupes homogènes : services, catégories, produits, guides, marque et hors marque.",
        "Un total peut masquer une perte concentrée sur les pages qui convertissent. Le [[dashboard SEO|/dashboard-seo]] conserve l’état de référence, les dates de mise en production et les changements simultanés de campagne ou de tracking. Les écarts sont étudiés avec la saisonnalité et les jours comparables, sans promettre qu’une courbe restera parfaitement stable.",
        "Les redirections restent actives aussi longtemps que les anciennes adresses continuent d’être demandées et citées. Elles ne sont pas supprimées après quelques semaines pour alléger une configuration. Le registre du mapping devient un actif de maintenance, avec les routes ajoutées lors des corrections post-lancement.",
      ],
    },
    {
      id: "gouvernance-risques",
      eyebrow: "RESPONSABILITÉS",
      title: "Donner un propriétaire à chaque risque de refonte",
      paragraphs: [
        "Le référencement n’est pas un contrôle ajouté à la fin. Le produit décide des parcours, le contenu des réponses, le développement du comportement des routes, la data de la mesure et l’infrastructure de la disponibilité. Nous transformons les risques en décisions attribuées, avec une date et un critère d’acceptation.",
        "Les arbitrages sont explicites. Si une page performante est supprimée pour simplifier l’offre, la conséquence est documentée. Si une redirection n’est pas techniquement possible, une alternative est choisie avant lancement. Si la mesure change, une période de rupture est annotée. Cette transparence évite de présenter toute baisse comme une surprise technique.",
        "La [[méthode SEO|/methode-seo]] garde la feuille de route courte et vérifiable. À la fin de la phase renforcée, les équipes reçoivent le mapping final, les contrôles récurrents, les anomalies restantes et la procédure à suivre lors des prochains changements d’URL.",
      ],
    },
  ],
  tools: [
    { name: "Screaming Frog", role: "Exporter l’ancien site, crawler la préproduction, comparer les éléments et valider les redirections." },
    { name: "Oncrawl", role: "Segmenter les grands patrimoines et suivre le passage des robots avant puis après lancement." },
    { name: "Search Console", role: "Conserver l’état de référence, soumettre les sitemaps et suivre indexation, clics et erreurs observées." },
    { name: "Analytics & BigQuery", role: "Comparer pages de destination, conversions et cohortes avec des définitions stables." },
    { name: "Logs serveur", role: "Voir quelles anciennes routes restent demandées, les codes servis et la découverte des nouvelles pages." },
  ],
  deliverables: [
    { title: "Inventaire de référence", detail: "Anciennes URL, sources, performances, backlinks, template, décision cible et justification." },
    { title: "Mapping de redirections", detail: "Source, destination, motif, règle, statut de test et propriétaire dans un fichier versionné." },
    { title: "Comparatif de templates", detail: "Écarts ancien/nouveau pour contenu, directives, rendu, données structurées et mesure." },
    { title: "Checklist de lancement", detail: "Ordre, responsables, tests prioritaires, critères bloquants et solution de retour arrière." },
    { title: "Tableau de surveillance", detail: "Groupes de pages, logs, erreurs, indexation, clics, conversions et annotations de déploiement." },
  ],
  process: [
    { step: "01", title: "Préserver", detail: "On exporte les URL, données et signaux avant que l’ancien environnement ne change." },
    { step: "02", title: "Décider", detail: "Chaque route reçoit une action cible et les nouvelles pages sont reliées à une intention." },
    { step: "03", title: "Recetter", detail: "Préproduction, mapping, templates, parcours et mesure sont testés sur des cas représentatifs." },
    { step: "04", title: "Lancer et observer", detail: "Les contrôles critiques sont immédiats, puis la surveillance suit les groupes de pages dans le temps." },
  ],
  scopes: [
    { title: "Refonte graphique", context: "URL globalement stables, mais nouveaux composants, contenus, navigation et performance.", includes: "Comparatif de templates, recette et surveillance — sur devis." },
    { title: "Migration de CMS", context: "Routes, rendu, données, taxonomies et outils de mesure peuvent changer ensemble.", includes: "Inventaire, mapping, spécifications, recette et lancement — sur devis." },
    { title: "Domaine ou architecture", context: "Changement de domaine, sous-domaines, langues, dossiers ou fusion de plusieurs sites.", includes: "Cadrage renforcé, logs, mapping complet et surveillance prolongée — sur devis." },
  ],
  faq: [
    ["Quand faut-il intégrer le SEO dans une refonte ?", "Avant de figer l’arborescence, les URL et les templates. À ce stade, les décisions restent réversibles et le mapping peut influencer la conception. Intervenir la veille du lancement permet seulement de signaler les risques, rarement de corriger une architecture déjà développée."],
    ["Toutes les anciennes URL doivent-elles être redirigées ?", "Non. Les routes utiles, citées ou remplacées reçoivent un équivalent pertinent. Une URL sans contenu de remplacement peut rester en 404 ou 410. Rediriger massivement vers l’accueil crée des erreurs douces et trompe le visiteur ; chaque décision doit pouvoir être justifiée."],
    ["Une migration provoque-t-elle toujours une baisse ?", "Une volatilité temporaire peut exister pendant la réexploration, mais aucune baisse précise n’est inévitable ou quantifiable à l’avance. La préparation réduit les pertes évitables. Nous suivons les groupes de pages, les conversions, les logs et l’indexation pour distinguer une transition d’un défaut réel."],
    ["Combien de temps faut-il surveiller après lancement ?", "Les contrôles techniques sont immédiats, puis la surveillance renforcée se poursuit plusieurs semaines selon le volume et la fréquence de crawl. Les redirections restent actives bien plus longtemps lorsque les anciennes URL sont encore demandées ou liées. Le devis précise la période et les indicateurs suivis."],
    ["Que faut-il fournir pour préparer la migration ?", "Accès à Search Console et analytics, exports du CMS, sitemaps, liste des environnements, nouvelle arborescence, planning de déploiement et responsables techniques. Les logs et les backlinks améliorent la couverture. Une préproduction crawlable par l’équipe de recette est indispensable avant le lancement."],
  ],
  sources: [
    { label: "Google Search Central — migrations avec changement d’URL", href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    { label: "Google Search Central — redirections et recherche", href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects" },
    { label: "Google Search Central — codes HTTP et erreurs réseau", href: "https://developers.google.com/search/docs/crawling-indexing/http-network-errors" },
  ],
};
