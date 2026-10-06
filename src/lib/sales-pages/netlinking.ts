import type { SalesPageData } from "@/lib/sales-pages/types";

export const netlinkingPage: SalesPageData = {
  code: "LINK / 01",
  primaryKeyword: "Netlinking",
  lede:
    "Le netlinking organise l’acquisition de liens éditoriaux capables de renforcer la découverte, la crédibilité et la popularité des pages qui comptent. Nous auditons le profil existant, sélectionnons des contextes cohérents et mesurons chaque action sans confondre un score d’outil avec une évaluation de Google.",
  proofLine:
    "Périmètre explicite · supports examinés un par un · aucun volume de backlinks promis",
  highlights: [
    { value: "Profil", label: "domaines, ancres, pages cibles" },
    { value: "Contexte", label: "pertinence avant métrique" },
    { value: "Risque", label: "sponsorisation signalée" },
    { value: "Mesure", label: "trafic référent et visibilité" },
  ],
  image: {
    src: "/images/piliers/netlinking.avif",
    alt: "Comparaison qualitative entre un profil éditorial cohérent et une accumulation de liens faibles",
    caption:
      "Un profil se lit comme un ensemble : origine des citations, variété des ancres et répartition vers les pages stratégiques.",
  },
  answer:
    "Le netlinking consiste à obtenir des recommandations cliquables depuis des pages tierces pertinentes. Une stratégie sérieuse commence par l’audit des domaines référents, des ancres et des pages de destination, puis recherche des occasions éditoriales qui ont un sens pour le lecteur. Elle documente aussi les contreparties, les attributs de lien et les risques : aucune quantité mensuelle ne garantit une progression.",
  takeaways: [
    "La cohérence entre le sujet de la page source et celui de la page citée compte davantage qu’une métrique isolée.",
    "Une ancre de marque, une URL nue et une formulation descriptive n’envoient pas le même signal ; la diversité se pilote sans recette mécanique.",
    "Un placement payé doit être qualifié comme sponsorisé ; masquer la contrepartie déplace le risque vers le site bénéficiaire.",
    "Le désaveu répond à un problème documenté ou à une action manuelle, jamais à la simple peur d’un score toxique.",
  ],
  sections: [
    {
      id: "audit-profil",
      eyebrow: "POINT DE DÉPART",
      title: "Auditer le profil de liens avant toute acquisition",
      paragraphs: [
        "La première étape ne consiste pas à dresser une liste de sites à contacter. On consolide les domaines référents repérés par Ahrefs, Semrush et Majestic, puis on rapproche ces exports des pages réellement visitées dans l’analytics. Cette vue montre quelles URL concentrent déjà la popularité, lesquelles restent isolées et si la marque dépend d’une poignée de sources. Elle complète l’[[audit SEO|/audit-seo]] : une page techniquement inaccessible ne profitera pas correctement d’une nouvelle citation.",
        "L’examen porte sur le contexte de publication, la langue, la thématique, l’emplacement du lien, l’indexabilité de la page source et la destination choisie. On repère aussi les redirections, les pages disparues et les backlinks qui aboutissent en erreur. Une récupération de citation perdue peut être plus rationnelle qu’une nouvelle campagne : elle rétablit un signal déjà mérité, sans inventer un partenariat.",
        "Le rapport sépare les observations des décisions. Un pic de nouveaux domaines n’est pas automatiquement une attaque, pas plus qu’une baisse d’un indicateur propriétaire ne prouve une pénalité. Nous cherchons des motifs répétitifs, leur chronologie et leurs effets observables avant de recommander une action.",
      ],
      bullets: [
        "Inventaire dédupliqué des domaines, pages sources, ancres et destinations.",
        "Détection des backlinks cassés, des redirections inutiles et des pages orphelines qui reçoivent de la popularité.",
        "Lecture par groupe de pages : offre, catégorie, guide, page locale et page de marque.",
      ],
    },
    {
      id: "qualite-support",
      eyebrow: "SÉLECTION",
      title: "Évaluer un support sans croire à une note magique",
      paragraphs: [
        "Domain Rating, Authority Score, Trust Flow et autres indices facilitent le tri, mais aucun ne constitue une note Google. Chaque éditeur calcule son score avec son propre index et sa propre formule. Deux outils peuvent donc donner des lectures très différentes du même domaine. Nous utilisons ces métriques comme signaux de recherche, puis revenons à la page : reçoit-elle du trafic, publie-t-elle encore, traite-t-elle le sujet avec précision, et le placement serait-il utile sans moteur de recherche ?",
        "La qualité se juge au niveau de l’URL, pas seulement du domaine. Un média reconnu peut héberger une page profonde, non maillée et sans audience. À l’inverse, un site métier de taille modeste peut toucher exactement les décideurs recherchés. On vérifie la proximité éditoriale, la fraîcheur, la présence d’un auteur identifiable, la densité publicitaire et l’historique des publications sponsorisées.",
        "Cette lecture évite les achats guidés par un tableau de scores. Elle sert aussi la [[stratégie de contenu SEO|/strategie-contenu-seo]] : les sujets qui obtiennent spontanément des citations indiquent souvent les formats à développer, comme une méthode, un jeu de données ou un outil réellement utilisable.",
      ],
      note:
        "Limite assumée : aucune analyse externe ne révèle l’ensemble des signaux utilisés par Google. La décision reste probabiliste et doit être réévaluée dans le temps.",
    },
    {
      id: "ancres-destinations",
      eyebrow: "RÉPARTITION",
      title: "Diversifier les ancres et choisir les bonnes pages cibles",
      paragraphs: [
        "Une stratégie saine ne répète pas le mot-clé commercial dans chaque ancre. Les mentions de marque, URL nues, intitulés de ressource et formulations contextuelles créent un profil plus proche de citations éditoriales naturelles. Nous comparons la répartition actuelle à l’histoire du site et au type de source, sans appliquer un pourcentage universel. Une jeune marque, un média et une boutique installée n’ont pas le même point de départ.",
        "La destination doit prolonger la promesse de la phrase source. Une étude renvoie vers sa méthodologie ; une comparaison vers la page qui détaille les critères ; une citation de service vers une page de vente capable de répondre. Envoyer toutes les recommandations vers l’accueil dilue l’intention et laisse les pages profondes sans soutien. Le [[maillage et le socle SEO|/seo]] redistribuent ensuite cette popularité vers les contenus liés.",
        "On surveille enfin les concentrations inhabituelles : même formulation répétée, même groupe de sites, rythme artificiellement régulier ou destination unique. Ces motifs ne déclenchent pas une conclusion automatique. Ils ouvrent une vérification et, si nécessaire, une réduction du risque avant la prochaine vague d’acquisition.",
      ],
    },
    {
      id: "sponsorisation-risques",
      eyebrow: "CONFORMITÉ",
      title: "Liens sponsorisés, achat et attributs : traiter le risque franchement",
      paragraphs: [
        "Acheter un placement qui transmet des signaux de classement entre dans la définition du spam par liens de Google. Un contenu sponsorisé peut exister, mais la relation commerciale doit être signalée avec l’attribut approprié, généralement rel=\"sponsored\". L’attribut rel=\"nofollow\" reste possible lorsque les conditions techniques l’imposent. Ce balisage n’annule pas l’intérêt marketing d’une publication : audience, notoriété et trafic référent peuvent rester utiles.",
        "Le risque dépend du mode opératoire. Un catalogue massif, des textes standardisés et des ancres exactes répétées exposent davantage qu’un partenariat ponctuel, transparent et pertinent. Nous présentons ce risque avant engagement, y compris lorsque cela réduit le volume vendable. Le netlinking n’est pas une assurance de position et ne doit jamais devenir l’unique moteur d’acquisition.",
        "Les supports sont consignés avec la nature de la contrepartie, l’URL prévue, l’ancre, la destination et la règle de qualification. Cette traçabilité permet de contrôler ce qui a réellement été publié et d’éviter qu’un intermédiaire remplace un accord éditorial par un réseau de faible qualité.",
      ],
      bullets: [
        "Contrepartie et mode de publication consignés avant validation.",
        "Attribut sponsorisé vérifié dans le HTML rendu, pas seulement dans une capture d’écran.",
        "Refus des packs opaques qui ne permettent pas d’examiner les pages avant publication.",
      ],
    },
    {
      id: "actifs-citables",
      eyebrow: "ACQUISITION",
      title: "Créer des actifs que des sources ont une raison de citer",
      paragraphs: [
        "La prospection fonctionne mieux lorsqu’elle apporte une ressource précise : un benchmark avec méthode, un calculateur, une carte, un guide opérationnel ou une donnée issue du terrain. On identifie les publications qui couvrent déjà le sujet, puis on propose un complément vérifiable. Cette approche demande davantage de préparation qu’un achat de catalogue, mais elle construit une relation éditoriale réutilisable.",
        "Les données originales doivent expliquer leur collecte, leur période et leurs limites. La couche [[data web et analytics|/data-web]] aide à produire des observations que l’on peut défendre : segmentation, définitions stables et fichier source documenté. Pour la visibilité dans les moteurs de réponse, une ressource citée et méthodologiquement claire renforce aussi le travail [[GEO et référencement IA|/geo]].",
        "Toutes les idées ne méritent pas une campagne. On estime l’intérêt du sujet, la capacité de production, la liste réaliste de relais et la durée de vie de l’actif. Si l’organisation ne peut ni maintenir la ressource ni répondre aux questions des éditeurs, un format plus simple est préférable.",
      ],
    },
    {
      id: "suivi-attribution",
      eyebrow: "MESURE",
      title: "Mesurer l’effet sans attribuer chaque hausse au dernier backlink",
      paragraphs: [
        "Le suivi conserve la date de publication, l’état de l’URL source, la destination, l’ancre et le trafic référent. On observe ensuite l’exploration, les impressions et les clics des pages soutenues, tout en annotant les autres changements : contenu, technique, saisonnalité et mises à jour du moteur. Le [[dashboard SEO|/dashboard-seo]] présente ces événements sur la même chronologie pour éviter les récits faciles.",
        "Une progression après une campagne ne prouve pas à elle seule la causalité. Nous comparons des groupes de pages, regardons la stabilité dans le temps et vérifions si les visites référentes produisent des actions utiles. La mesure inclut aussi les liens disparus ou modifiés, car un rapport figé masque rapidement la réalité du profil.",
        "Sur les requêtes très concurrentielles, le SEA peut tester le message, la page de destination et la valeur commerciale pendant que le référencement naturel se construit. Cette synergie ne transforme pas l’achat média en facteur de classement. Elle réduit l’incertitude sur l’intention avant d’investir dans des contenus et des relations éditoriales plus longs à produire.",
      ],
    },
    {
      id: "desaveu",
      eyebrow: "LIMITES",
      title: "Réserver le désaveu aux problèmes réellement documentés",
      paragraphs: [
        "L’outil de désaveu n’est pas un nettoyage de routine. Google indique qu’il s’adresse surtout aux sites confrontés à de nombreux backlinks artificiels et à une action manuelle, ou à un risque sérieux d’en recevoir une. Désavouer à partir d’un simple indicateur de toxicité peut supprimer des recommandations légitimes sans bénéfice démontrable.",
        "Avant toute action, on vérifie l’origine, le motif, l’historique et l’éventuelle notification dans Search Console. Si le site a participé à des schémas artificiels, la suppression directe auprès des éditeurs est documentée en priorité. Le fichier de désaveu, lorsqu’il est justifié, est relu, versionné et limité aux éléments concernés.",
        "Cette prudence protège le site contre une intervention irréversible menée pour rassurer un tableau de bord. Elle rappelle aussi la règle générale : le netlinking soutient un système éditorial et technique solide ; il ne corrige ni une page inutile ni un problème d’[[indexation technique|/seo-technique]].",
      ],
    },
  ],
  tools: [
    { name: "Ahrefs", role: "Explorer les domaines référents, les pages les plus citées, les ancres et les citations perdues." },
    { name: "Semrush", role: "Croiser le profil avec les concurrents et repérer les sources qui couvrent déjà le marché." },
    { name: "Majestic", role: "Comparer les proximités thématiques et disposer d’un second index pour réduire les angles morts." },
    { name: "SEObserver", role: "Observer l’historique de visibilité et replacer une acquisition dans la chronologie d’un domaine." },
    { name: "Monitorank", role: "Suivre les groupes de requêtes et annoter les changements sans confondre corrélation et causalité." },
  ],
  deliverables: [
    { title: "Cartographie du profil", detail: "Domaines, pages sources, ancres, destinations, état HTTP et catégories de risque dans un fichier filtrable." },
    { title: "Écart concurrentiel", detail: "Sources partagées, occasions manquantes et formats qui obtiennent déjà des citations sur le marché." },
    { title: "Liste qualifiée", detail: "Supports examinés avec justification éditoriale, contraintes, mode de contact et décision de validation." },
    { title: "Registre d’acquisition", detail: "Publication, contrepartie, attribut, destination, statut et date de contrôle pour chaque opération." },
    { title: "Tableau de suivi", detail: "Trafic référent, visibilité des pages soutenues, citations perdues et annotations des autres changements." },
  ],
  process: [
    { step: "01", title: "Cadrer les pages prioritaires", detail: "On relie les objectifs commerciaux aux pages qui peuvent réellement convertir et aux ressources capables d’être citées." },
    { step: "02", title: "Auditer puis comparer", detail: "Les exports de plusieurs outils sont dédupliqués, classés et confrontés aux profils concurrents." },
    { step: "03", title: "Produire et approcher", detail: "On prépare l’actif, l’angle et la liste de relais avant tout contact ou négociation." },
    { step: "04", title: "Contrôler et apprendre", detail: "Chaque publication est vérifiée, suivie puis réévaluée avec le trafic, la visibilité et les changements du site." },
  ],
  scopes: [
    { title: "Diagnostic ponctuel", context: "Pour comprendre un profil existant, une baisse ou un héritage d’anciennes campagnes.", includes: "Audit, restitution et plan de réduction du risque — sur devis." },
    { title: "Stratégie d’acquisition", context: "Pour choisir les pages, les actifs citables, les supports et le rythme réaliste.", includes: "Plan éditorial, qualification et protocole de suivi — sur devis." },
    { title: "Pilotage continu", context: "Pour coordonner contenus, relations éditoriales, contrôle des publications et mesure.", includes: "Capacité mensuelle définie après validation des ressources — sur devis." },
  ],
  faq: [
    ["Faut-il acheter des liens pour être visible ?", "Non. L’achat n’est ni obligatoire ni sans risque. Google considère comme spam les placements payés qui transmettent des signaux de classement. Une publication sponsorisée peut avoir un intérêt marketing si la contrepartie est déclarée et le lien correctement qualifié. Nous comparons ce choix à des actifs éditoriaux, des partenariats et des récupérations de citations avant de recommander un budget."],
    ["Combien de backlinks faut-il chaque mois ?", "Il n’existe pas de quota valable pour tous les sites. Le besoin dépend du profil actuel, du marché, des pages à soutenir et de la capacité à produire des ressources dignes d’être citées. Promettre un nombre fixe encourage souvent l’achat de supports médiocres. Le plan retient une capacité de contrôle, pas une cadence artificielle."],
    ["Quand une stratégie de netlinking produit-elle un effet ?", "L’exploration d’une nouvelle citation peut être rapide, mais son effet éventuel sur une page se juge sur plusieurs semaines ou mois. La concurrence, les changements de contenu et les mises à jour des moteurs brouillent l’attribution. Le suivi annote ces événements et évite de conclure sur une variation de quelques jours."],
    ["Un lien toxique impose-t-il un désaveu ?", "Non. Une métrique de toxicité n’est pas une décision Google. On recherche d’abord une action manuelle, un historique de schémas artificiels ou un volume réellement préoccupant. Le désaveu est réservé aux cas documentés et relu avant envoi, car il peut neutraliser des recommandations légitimes."],
    ["Le netlinking aide-t-il aussi la visibilité dans les IA ?", "Indirectement, oui : les citations éditoriales renforcent la découverte d’une marque et peuvent conduire vers des ressources reprises par des moteurs de réponse. Elles ne garantissent jamais une mention dans ChatGPT, Claude, Gemini ou Perplexity. Le travail GEO exige en plus des contenus extractibles, une entité cohérente et un protocole de mesure."],
  ],
  sources: [
    { label: "Google Search Central — règles relatives au spam par liens", href: "https://developers.google.com/search/docs/essentials/spam-policies#link-spam" },
    { label: "Google Search Central — qualifier les liens sortants", href: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links" },
    { label: "Aide Search Console — outil de désaveu", href: "https://support.google.com/webmasters/answer/2648487?hl=fr" },
  ],
};
