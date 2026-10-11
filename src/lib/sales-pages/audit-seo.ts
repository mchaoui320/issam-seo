import type { SalesPageData } from "@/lib/sales-pages/types";

export const auditSeoPage: SalesPageData = {
  code: "AUDIT / 02",
  primaryKeyword: "Audit SEO",
  lede:
    "Un audit SEO explique pourquoi des pages ne sont pas explorées, indexées, comprises ou choisies, puis transforme les constats en corrections vérifiables. Nous croisons le crawl, les journaux serveur, Search Console et les conversions pour livrer une feuille de route utilisable par les équipes techniques, éditoriales et produit.",
  proofLine:
    "Inventaire d’URL · preuves par exemple · priorité · responsable · critère de recette",
  highlights: [
    { value: "Crawl", label: "inventaire et architecture" },
    { value: "Index", label: "directives et canonicals" },
    { value: "Logs", label: "passage réel des robots" },
    { value: "Roadmap", label: "impact, effort, recette" },
  ],
  image: {
    src: "/images/piliers/audit-seo.avif",
    alt: "Entonnoir montrant la réduction entre URL découvertes, explorées, indexables, indexées et positionnées",
    caption:
      "Le diagnostic localise la perte à chaque étape, de la découverte d’une URL à sa capacité à répondre dans les résultats.",
  },
  answer:
    "Un audit SEO est une investigation documentée de l’exploration, de l’indexation, de l’architecture, des contenus, de la popularité et de la mesure d’un site. Son résultat n’est pas un score global : c’est un inventaire des problèmes avec les URL concernées, leur preuve, leur impact probable, l’effort de correction, le responsable et le test qui permettra de fermer chaque action.",
  takeaways: [
    "Le crawl montre ce qu’un robot peut atteindre ; Search Console montre ce que Google connaît ; les logs montrent ce qu’il visite réellement.",
    "Une recommandation sans exemple d’URL, propriétaire et critère de recette ne constitue pas une action.",
    "Les blocages d’exploration et d’indexation passent avant les ajustements de balises ou de formulation.",
    "La valeur commerciale sert à départager deux corrections techniquement comparables.",
  ],
  offer: {
    title: "Nous réalisons l’audit SEO complet de votre site.",
    intro:
      "Nous prenons en charge la collecte, l’analyse et la priorisation. Vous n’achetez pas un export automatique : vous recevez un diagnostic expliqué, une feuille de route compatible avec vos ressources et des critères précis pour vérifier les corrections. La mission s’adapte au site vitrine, au catalogue, à l’e-commerce ou au grand patrimoine éditorial.",
    items: [
      {
        title: "Collecte multi-source",
        detail:
          "Nous réunissons crawl, sitemaps, CMS, Search Console, analytics, backlinks et logs disponibles dans un inventaire dédupliqué.",
        deliverable: "la base URL complète, segmentée par template et par finalité.",
      },
      {
        title: "Diagnostic technique et éditorial",
        detail:
          "Nous investiguons exploration, indexation, rendu, architecture, contenus, popularité, performance et qualité de la mesure.",
        deliverable: "un rapport illustré par des URL, des preuves et les causes probables.",
      },
      {
        title: "Priorisation avec vos équipes",
        detail:
          "Nous croisons impact, effort, valeur métier et dépendances pour transformer les constats en décisions réalisables.",
        deliverable: "une feuille de route ordonnée avec responsable et niveau de priorité.",
      },
      {
        title: "Restitution et recette",
        detail:
          "Nous présentons les arbitrages, répondons aux équipes puis définissons le test qui permettra de fermer chaque action.",
        deliverable: "les tickets de référence et un plan de validation après déploiement.",
      },
    ],
    forWho: [
      "votre trafic ou vos demandes stagnent et les causes restent difficiles à isoler ;",
      "vos équipes accumulent des recommandations sans ordre commun ni méthode de validation ;",
      "vous préparez une feuille de route, une refonte ou un investissement éditorial important.",
    ],
  },
  sections: [
    {
      id: "inventaire-url",
      eyebrow: "CRAWL & ARCHITECTURE",
      title: "Construire un inventaire d’URL fiable",
      paragraphs: [
        "L’audit SEO démarre par plusieurs sources : crawl interne, sitemap XML, exports du CMS, URL connues de Search Console, pages de destination analytics et backlinks. Aucune liste ne suffit seule. Une page orpheline peut recevoir du trafic sans être reliée ; une route présente dans le sitemap peut rediriger ; une URL explorée peut ne plus exister dans le CMS. La consolidation produit une table unique, dédupliquée et traçable.",
        "Chaque adresse reçoit des attributs observables : code HTTP, profondeur de clic, type de page, canonical déclarée, indexabilité, présence dans le sitemap, nombre de liens internes, titre, H1, contenu et dernière activité connue. Nous distinguons les paramètres utiles des variantes générées par le tri, la recherche interne, les facettes ou le tracking. Sur un grand catalogue, cette classification révèle souvent le volume que les équipes ne voyaient pas.",
        "La visualisation de l’architecture montre ensuite les zones profondes, les branches sans issue et les pages importantes éloignées de la navigation. Elle prépare les arbitrages de [[SEO technique|/seo-technique]] et de maillage : déplacer une catégorie, fusionner des doublons ou rétablir une page orpheline demande des décisions différentes.",
      ],
      bullets: [
        "URL découvertes par crawl, sitemap, CMS, Search Console, analytics et backlinks.",
        "Statuts HTTP, chaînes de redirection, canonicals, profondeur et liens entrants internes.",
        "Segmentation par template et finalité pour éviter une liste de milliers de lignes sans lecture métier.",
      ],
    },
    {
      id: "exploration-indexation",
      eyebrow: "DIRECTIVES",
      title: "Séparer exploration, rendu, indexabilité et indexation",
      paragraphs: [
        "Une URL peut être découverte sans être explorée, explorée sans être rendue correctement, rendue sans être indexable ou indexable sans être retenue. Le diagnostic attribue chaque cas à la bonne étape. Nous contrôlons robots.txt, directives meta robots et en-têtes X-Robots-Tag, canonicals, réponses serveur, sitemaps et liens internes. Une règle qui semble correcte isolément peut contredire une autre règle du template.",
        "Le rapport d’indexation Search Console est rapproché de l’inventaire. Les catégories « explorée, actuellement non indexée » ou « autre page avec balise canonique correcte » ne se traitent pas par automatisme. On examine la qualité, la duplication, la demande, le maillage et la cohérence de la canonical. Le but n’est pas d’indexer toutes les routes : il est de rendre accessibles les pages qui méritent une place et d’assumer l’exclusion des autres.",
        "Pour les applications JavaScript, nous comparons la réponse initiale, le HTML rendu et ce qui apparaît dans les outils d’inspection. Les liens, textes et données essentielles ne doivent pas dépendre d’une interaction que le robot n’effectuera pas. Ce contrôle rejoint l’analyse [[Core Web Vitals et rendu|/blog/core-web-vitals]], mais reste centré sur l’accès au contenu.",
      ],
    },
    {
      id: "logs-budget-crawl",
      eyebrow: "PASSAGE RÉEL DES ROBOTS",
      title: "Lire les logs pour vérifier le budget de crawl",
      paragraphs: [
        "Les journaux serveur répondent à une question que le crawl ne peut pas trancher : quelles URL les robots demandent-ils réellement, à quelle fréquence et avec quel statut ? Nous filtrons les user-agents, validons les robots lorsque le contexte l’exige, normalisons les routes et regroupons les requêtes par template. Cette vue fait apparaître les boucles, les paramètres sur-explorés et les sections stratégiques rarement visitées.",
        "Le budget de crawl devient un sujet prioritaire quand le volume, la fréquence de changement ou la génération de variantes dépassent la capacité utile d’exploration. Sur un petit site vitrine, parler de budget peut détourner l’attention d’un maillage faible ou d’un contenu peu distinct. Le livrable explique donc si le problème existe, au lieu d’appliquer le même diagnostic à tous les sites.",
        "Les logs sont rapprochés des dates de publication et de modification. Une fiche régulièrement mise à jour mais rarement revisitée suggère un problème de découverte ou de priorité interne. Une route sans valeur demandée en continu indique au contraire une fuite à réduire. Nous traduisons ces motifs en règles testables : paramètres à bloquer, liens à corriger, sitemap à nettoyer ou architecture à simplifier.",
      ],
      note:
        "Accès utile : un export de logs bruts ou agrégés couvrant une période représentative. Sans logs, le crawl et Search Console restent exploitables, mais la lecture du passage réel des robots est moins précise.",
    },
    {
      id: "contenus-intentions",
      eyebrow: "CONTENU & DEMANDE",
      title: "Relier chaque page à une intention et à une preuve",
      paragraphs: [
        "L’analyse éditoriale ne consiste pas à compter des mots. Elle vérifie si chaque page répond à une intention distincte, si le titre annonce la bonne promesse, si les informations importantes sont visibles et si les preuves sont accessibles. Nous regroupons les requêtes Search Console, observons les pages qui se relaient sur le même besoin et repérons la cannibalisation, les angles manquants et les contenus obsolètes.",
        "Les pages de vente sont examinées avec le parcours de décision : problème reconnu, méthode, livrable, limites, prix ou mode de chiffrage, questions fréquentes et appel à l’action. Les guides doivent pouvoir être compris sans transformer chaque paragraphe en argument commercial. Cette séparation aide la [[stratégie de contenu SEO|/strategie-contenu-seo]] et crée un maillage qui accompagne le lecteur au lieu d’empiler des mots-clés.",
        "Nous cherchons aussi les contenus difficiles à remplacer : processus documenté, données originales, exemples vérifiables, outils et arbitrages issus du terrain. Ces éléments renforcent la qualité pour les visiteurs et la citabilité dans les moteurs de réponse. L’[[audit de visibilité IA|/audit-visibilite-ia]] peut prolonger ce travail avec un panel de questions, sans prétendre qu’un balisage garantit une citation.",
      ],
    },
    {
      id: "popularite-concurrence",
      eyebrow: "AUTORITÉ & MARCHÉ",
      title: "Examiner la popularité et l’écart concurrentiel",
      paragraphs: [
        "Le volet popularité inventorie les domaines référents, les pages citées, les ancres, les recommandations perdues et les backlinks qui aboutissent sur une erreur. Il ne transforme pas un indicateur d’autorité en verdict. Nous observons le contexte éditorial, la pertinence et le trafic référent avant de conclure qu’une source mérite une action.",
        "La comparaison concurrentielle porte sur les formats et les sujets qui gagnent, pas seulement sur un nombre de domaines. Un concurrent peut obtenir des citations grâce à un baromètre, une documentation ou un outil. Un autre peut dépendre d’anciennes acquisitions difficiles à reproduire. Le rapport distingue ce qui constitue une occasion réaliste de ce qui relève d’un historique inaccessible.",
        "Les recommandations renvoient vers une [[stratégie de netlinking|/netlinking]] séparée lorsque le sujet demande une campagne. Dans l’audit, nous réparons d’abord les pertes évidentes : redirections absentes, liens internes insuffisants, ressources déplacées et pages stratégiques incapables de recevoir la popularité.",
      ],
    },
    {
      id: "mesure-conversion",
      eyebrow: "DONNÉES",
      title: "Hiérarchiser avec les conversions et la qualité de mesure",
      paragraphs: [
        "Deux problèmes de même gravité technique ne portent pas la même valeur. Une route qui soutient les demandes qualifiées passe généralement avant une archive sans audience. Nous rapprochons Search Console, analytics et données métier disponibles, en documentant leurs différences de définition. Les clics, sessions et conversions ne se superposent pas automatiquement.",
        "Avant de classer les pages, on vérifie que la conversion correspond à un succès réel : formulaire confirmé, rendez-vous finalisé ou transaction enregistrée. Un clic sur le bouton Envoyer n’est pas une demande. Si le plan de mesure est fragile, le rapport le signale et renvoie vers le [[plan de marquage GA4|/plan-marquage-ga4]] plutôt que de produire une priorité faussement précise.",
        "Le tableau final sépare l’impact SEO attendu, la valeur métier, l’effort et les dépendances. Une action à faible coût et forte certitude peut précéder un chantier potentiellement important mais incertain. Cette matrice reste modifiable avec les équipes : elle sert à décider, pas à imposer un classement opaque.",
      ],
    },
    {
      id: "roadmap-recette",
      eyebrow: "LIVRABLE ACTIONNABLE",
      title: "Passer du constat à une feuille de route recettable",
      paragraphs: [
        "Chaque recommandation contient un intitulé, le problème observé, des exemples d’URL, la règle concernée, la correction proposée, l’impact, l’effort, les dépendances, le propriétaire et le critère de validation. Les cas complexes reçoivent une capture, un extrait de réponse HTTP ou un exemple avant/après. Les équipes peuvent ainsi transformer la ligne en ticket sans deviner l’intention de l’auditeur.",
        "La restitution distingue les décisions dirigeantes des détails d’implémentation. Elle commence par les pertes majeures, les risques et les trois à cinq chantiers qui changent réellement la trajectoire. Le fichier complet reste disponible pour les développeurs, rédacteurs et responsables acquisition. Le format des [[livrables SEO|/livrables-seo]] est adapté aux outils déjà utilisés : tableur, gestionnaire de tickets ou document partagé.",
        "Après mise en production, la recette rejoue le crawl et vérifie un échantillon représentatif dans le navigateur, les en-têtes et Search Console. Une action n’est pas fermée parce qu’un ticket passe à « terminé ». Elle est fermée lorsque le comportement attendu est observé et que les éventuels effets secondaires ont été contrôlés.",
      ],
      bullets: [
        "Problème et preuve accessibles à une personne qui n’a pas assisté à la restitution.",
        "Responsable et dépendances identifiés avant l’entrée en sprint.",
        "Critère de recette objectif : statut, HTML, directive, mesure ou comportement attendu.",
      ],
    },
  ],
  tools: [
    { name: "Screaming Frog", role: "Crawler les URL, extraire les directives, comparer les sitemaps et produire des échantillons reproductibles." },
    { name: "Oncrawl", role: "Segmenter un grand site, croiser crawl, logs et données de performance à l’échelle des templates." },
    { name: "Botify", role: "Analyser l’exploration et la performance organique sur des patrimoines volumineux lorsque la licence existe déjà." },
    { name: "Search Console", role: "Confronter l’inventaire aux URL connues de Google, aux requêtes, aux clics et aux motifs d’indexation." },
    { name: "Analyse de logs", role: "Observer le passage réel des robots, les codes servis et la fréquence par groupe de pages." },
  ],
  deliverables: [
    { title: "Inventaire maître", detail: "Table d’URL dédupliquée avec sources de découverte, statut, canonical, indexabilité, profondeur et template." },
    { title: "Rapport de diagnostic", detail: "Constats regroupés par exploration, indexation, contenu, popularité, performance et mesure, avec preuves." },
    { title: "Feuille de route", detail: "Actions ordonnées par impact, effort, valeur métier et dépendances, avec responsable et statut." },
    { title: "Tickets de référence", detail: "Exemples prêts à adapter pour les correctifs récurrents, accompagnés des règles et cas limites." },
    { title: "Plan de recette", detail: "Contrôles avant et après déploiement, échantillons d’URL et résultat attendu pour fermer chaque chantier." },
  ],
  process: [
    { step: "01", title: "Cadrage et accès", detail: "Objectifs, périmètre, migrations récentes, templates, marchés et données disponibles sont consignés." },
    { step: "02", title: "Collecte croisée", detail: "Crawl, Search Console, analytics, CMS, backlinks et logs sont normalisés dans un même inventaire." },
    { step: "03", title: "Investigation", detail: "Les motifs sont vérifiés sur des exemples, regroupés et reliés à une cause probable sans automatisme." },
    { step: "04", title: "Restitution et arbitrage", detail: "Les décisions sont prises avec les équipes, puis transformées en séquence de mise en œuvre et de recette." },
  ],
  scopes: [
    { title: "Site vitrine", context: "Peu de templates, volume limité, objectifs de génération de demandes et accès standards.", includes: "Crawl complet, Search Console, contenu, popularité, restitution et roadmap — sur devis." },
    { title: "Catalogue ou e-commerce", context: "Facettes, pagination, stocks, nombreuses catégories et dépendances avec le catalogue produit.", includes: "Segmentation par template, échantillonnage renforcé, logs si disponibles et atelier technique — sur devis." },
    { title: "Grand site ou migration", context: "Plusieurs environnements, historique de refontes, langues, sous-domaines ou millions d’URL.", includes: "Cadrage spécifique, capacité de crawl, analyse de logs et recette progressive — sur devis." },
  ],
  faq: [
    ["Combien coûte un audit SEO ?", "Le prix dépend du nombre d’URL utiles, des templates, des langues, de l’accès aux logs et de la profondeur attendue. Un site vitrine et un catalogue à facettes ne mobilisent pas la même collecte. Le devis sépare diagnostic, restitution et éventuel accompagnement de mise en œuvre ; aucun montant n’est inventé avant d’avoir vu le périmètre."],
    ["Combien de temps faut-il prévoir ?", "Une mission standard demande généralement plusieurs semaines entre la réception des accès, la collecte, l’investigation et la restitution. Le délai exact dépend surtout du volume, des environnements et de la disponibilité des équipes pour répondre aux questions. Une migration urgente peut être traitée par lots, avec les risques critiques en premier."],
    ["Quels accès faut-il fournir ?", "Search Console en lecture seule, analytics, CMS ou documentation des templates, sitemaps et historique des changements. Les logs serveur améliorent l’analyse du crawl sur les sites volumineux. Un accès au dépôt ou à la préproduction aide à vérifier la faisabilité, mais il n’est pas obligatoire pour commencer."],
    ["Que se passe-t-il après la restitution ?", "Les équipes disposent d’une feuille de route et de critères de validation. Elles peuvent exécuter seules, demander une assistance ponctuelle ou organiser un pilotage continu. Après déploiement, un nouveau crawl et des contrôles ciblés vérifient les correctifs ; l’indexation et les résultats organiques se suivent ensuite dans le temps."],
    ["Un audit garantit-il une hausse de trafic ?", "Non. Il réduit l’incertitude, corrige des obstacles et priorise les occasions, mais le résultat dépend aussi de la demande, de la concurrence et de la qualité d’exécution. L’engagement porte sur la profondeur du diagnostic, les preuves, les livrables et la recette, jamais sur une position ou un volume de trafic garanti."],
  ],
  sources: [
    { label: "Google Search Central — guide de l’exploration et de l’indexation", href: "https://developers.google.com/search/docs/crawling-indexing/overview" },
    { label: "Google Search Central — comprendre le fichier robots.txt", href: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
    { label: "Google Search Central — consolidation des URL canoniques", href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" },
  ],
};
