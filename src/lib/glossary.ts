/**
 * Glossaire SEO / GEO / data web.
 *
 * Les requêtes définitionnelles (« c'est quoi le crawl budget », « définition
 * EEAT ») sont parmi les plus reprises par les moteurs de réponse, parce
 * qu'elles appellent une réponse courte et vérifiable.
 *
 * Chaque entrée respecte donc la même règle : `short` doit se comprendre seule,
 * sortie de la page, sans pronom qui renvoie au titre. `long` ajoute la nuance
 * ou le contresens fréquent — c'est ce qui distingue une définition utile d'une
 * paraphrase de dictionnaire.
 */
export type Term = {
  term: string;
  slug: string;
  category: "SEO" | "GEO" | "DATA";
  /** Définition autonome, une à deux phrases. Reprise telle quelle par les LLM. */
  short: string;
  /** Nuance, limite ou erreur courante. */
  long: string;
  /** Pages du site qui approfondissent. */
  see?: string[];
  /** Synonymes et variantes réellement tapées. */
  aka?: string[];
};

export const terms: Term[] = [
  // ------------------------------------------------------------------ SEO
  {
    term: "SEO",
    slug: "seo",
    category: "SEO",
    aka: ["référencement naturel", "search engine optimization"],
    short:
      "Le SEO (search engine optimization, ou référencement naturel) désigne l'ensemble des travaux qui rendent un site accessible aux moteurs de recherche, pertinent pour une intention donnée et préférable aux résultats concurrents.",
    long: "Le SEO n'est pas une action ponctuelle mais un équilibre entre trois familles de travaux : la technique, qui conditionne l'accès au contenu ; l'éditorial, qui détermine la pertinence ; la popularité, qui arbitre entre pages comparables. Aucune des trois ne compense durablement l'absence des deux autres.",
    see: ["seo", "audit-seo"],
  },
  {
    term: "SERP",
    slug: "serp",
    category: "SEO",
    aka: ["page de résultats"],
    short:
      "La SERP (search engine results page) est la page de résultats affichée après une recherche. Elle mêle liens organiques, annonces, et blocs enrichis comme les questions associées ou les résumés générés par IA.",
    long: "Analyser une SERP avant d'écrire renseigne davantage qu'un volume de recherche : la nature des résultats déjà classés révèle l'intention que le moteur attribue à la requête. Une SERP remplie de pages de comparaison n'accueillera pas facilement une page de vente.",
    see: ["strategie-contenu-seo"],
  },
  {
    term: "Crawl",
    slug: "crawl",
    category: "SEO",
    aka: ["exploration"],
    short:
      "Le crawl est le parcours automatisé d'un site par un robot de moteur de recherche, qui suit les liens pour découvrir et récupérer les pages.",
    long: "Être exploré ne signifie pas être indexé : une page peut être visitée par un robot puis écartée de l'index si elle est jugée redondante ou de faible valeur. Inversement, une page jamais explorée ne peut pas être indexée.",
    see: ["seo-technique"],
  },
  {
    term: "Budget de crawl",
    slug: "budget-de-crawl",
    category: "SEO",
    aka: ["crawl budget"],
    short:
      "Le budget de crawl est le volume de pages qu'un moteur explore sur un site dans un laps de temps donné, fonction de la capacité du serveur et de l'intérêt estimé du site.",
    long: "C'est une préoccupation réelle sur les sites de plusieurs dizaines de milliers d'URL, et une fausse piste sur un site vitrine. Le gaspiller en laissant explorer des filtres à facettes, des paramètres de tri ou des pages de recherche interne est le cas le plus fréquent.",
    see: ["seo-technique", "audit-seo"],
  },
  {
    term: "Indexation",
    slug: "indexation",
    category: "SEO",
    short:
      "L'indexation est l'enregistrement d'une page dans la base de données d'un moteur de recherche, condition nécessaire pour qu'elle puisse apparaître dans les résultats.",
    long: "Un écart important entre URL soumises et URL indexées dans Search Console est le premier symptôme à examiner lors d'un diagnostic. Les causes fréquentes sont un blocage robots.txt, une balise noindex, une canonical pointant ailleurs, ou un contenu jugé insuffisant.",
    see: ["seo-technique", "audit-seo"],
  },
  {
    term: "Balise canonical",
    slug: "canonical",
    category: "SEO",
    aka: ["rel canonical", "url canonique"],
    short:
      "La balise canonical indique au moteur quelle URL doit être considérée comme la version de référence lorsqu'un même contenu est accessible depuis plusieurs adresses.",
    long: "C'est une indication, pas une directive : le moteur peut choisir une autre URL s'il juge le signal incohérent. Une canonical qui pointe vers une page redirigée, bloquée ou en noindex envoie des signaux contradictoires et se retourne contre le site.",
    see: ["seo-technique", "refonte-seo"],
  },
  {
    term: "robots.txt",
    slug: "robots-txt",
    category: "SEO",
    short:
      "Le fichier robots.txt, placé à la racine d'un domaine, indique aux robots quelles zones du site ils sont autorisés à explorer.",
    long: "Contresens le plus courant : robots.txt contrôle l'exploration, pas l'indexation. Une URL bloquée peut rester indexée si d'autres sites y renvoient, et le blocage empêche justement le moteur de lire la balise noindex qui l'aurait exclue.",
    see: ["seo-technique"],
  },
  {
    term: "noindex",
    slug: "noindex",
    category: "SEO",
    short:
      "La directive noindex demande à un moteur de ne pas conserver une page dans son index, tout en l'autorisant à l'explorer.",
    long: "Pour qu'elle soit prise en compte, la page doit rester explorable : associer noindex et blocage robots.txt annule l'effet recherché. Sur une préproduction, l'oubli du retrait de noindex lors de la mise en ligne est une cause classique de disparition totale du trafic.",
    see: ["seo-technique", "refonte-seo"],
  },
  {
    term: "Redirection 301",
    slug: "redirection-301",
    category: "SEO",
    aka: ["redirection permanente"],
    short:
      "Une redirection 301 signale qu'une URL a définitivement changé d'adresse et transmet l'essentiel de sa valeur de référencement vers la nouvelle.",
    long: "Rediriger en masse d'anciennes pages vers l'accueil est traité comme une page introuvable déguisée et ne transmet rien. Chaque URL doit pointer vers son équivalent le plus proche, et les liens internes doivent viser directement la nouvelle adresse plutôt que la chaîne de redirection.",
    see: ["refonte-seo"],
  },
  {
    term: "Balise title",
    slug: "balise-title",
    category: "SEO",
    aka: ["titre SEO"],
    short:
      "La balise title définit le titre d'une page tel qu'il apparaît dans l'onglet du navigateur et, le plus souvent, comme lien cliquable dans les résultats de recherche.",
    long: "Google réécrit fréquemment le title affiché lorsqu'il le juge peu descriptif ou déconnecté du contenu. Un titre qui décrit précisément la page a plus de chances d'être conservé qu'un titre saturé de mots-clés.",
    see: ["seo"],
  },
  {
    term: "Méta description",
    slug: "meta-description",
    category: "SEO",
    short:
      "La méta description est un résumé de page proposé aux moteurs pour l'extrait affiché sous le lien dans les résultats de recherche.",
    long: "Elle n'est pas un facteur de classement, mais elle influence le taux de clic. Les moteurs la remplacent souvent par un extrait du contenu jugé plus pertinent pour la requête, ce qui rend inutile toute tentative de bourrage.",
    see: ["seo"],
  },
  {
    term: "Maillage interne",
    slug: "maillage-interne",
    category: "SEO",
    aka: ["liens internes"],
    short:
      "Le maillage interne est l'ensemble des liens qui relient les pages d'un même site, guidant à la fois la navigation des visiteurs et la circulation de la valeur entre pages.",
    long: "C'est le levier le plus sous-utilisé, parce qu'il ne dépend d'aucun tiers et peut être déployé immédiatement. Une page sans lien entrant interne — page orpheline — est difficilement découverte, quelle que soit sa qualité.",
    see: ["strategie-contenu-seo", "seo"],
  },
  {
    term: "Backlink",
    slug: "backlink",
    category: "SEO",
    aka: ["lien entrant"],
    short:
      "Un backlink est un lien qu'un site externe fait vers une page de votre site. Il agit comme une recommandation dont le poids dépend du contexte et de la crédibilité de la source.",
    long: "Dix liens issus de pages réellement consultées et thématiquement proches pèsent davantage que des centaines de liens d'annuaires. Les scores d'autorité vendus par les outils sont des estimations propriétaires, pas des notes attribuées par Google.",
    see: ["netlinking"],
  },
  {
    term: "EEAT",
    slug: "eeat",
    category: "SEO",
    aka: ["E-E-A-T", "expérience expertise autorité fiabilité"],
    short:
      "EEAT désigne quatre critères d'évaluation de la qualité employés dans les consignes destinées aux évaluateurs humains de Google : expérience, expertise, autorité et fiabilité.",
    long: "Ce n'est pas un score calculé ni un facteur de classement direct : c'est un cadre d'appréciation. Concrètement, il se traduit par un auteur identifiable, des sources vérifiables, des informations datées et des affirmations que l'on peut recouper.",
    see: ["strategie-contenu-seo", "geo"],
  },
  {
    term: "Intention de recherche",
    slug: "intention-de-recherche",
    category: "SEO",
    aka: ["search intent"],
    short:
      "L'intention de recherche est l'objectif réel poursuivi par la personne qui tape une requête : comprendre un sujet, comparer des options, trouver un site précis ou effectuer un achat.",
    long: "Se positionner sur une requête dont l'intention ne correspond pas à la page génère du trafic sans contact. C'est l'explication la plus fréquente d'une situation où les visites augmentent sans que les demandes suivent.",
    see: ["strategie-contenu-seo", "dashboard-seo"],
  },
  {
    term: "Cannibalisation",
    slug: "cannibalisation",
    category: "SEO",
    short:
      "La cannibalisation survient lorsque plusieurs pages d'un même site visent la même intention de recherche et se concurrencent, empêchant le moteur d'identifier laquelle privilégier.",
    long: "Le symptôme typique est une alternance de pages sur la même requête dans Search Console, avec des positions instables. La correction passe par la fusion, une différenciation nette des intentions, ou le choix explicite d'une page canonique.",
    see: ["strategie-contenu-seo"],
  },
  {
    term: "Longue traîne",
    slug: "longue-traine",
    category: "SEO",
    aka: ["long tail"],
    short:
      "La longue traîne regroupe les requêtes peu recherchées individuellement mais nombreuses, qui représentent souvent la majorité du trafic organique d'un site.",
    long: "Ces requêtes sont généralement plus précises et donc plus qualifiées : une recherche de six mots exprime un besoin plus clair qu'un terme générique. Elles se captent en répondant précisément, pas en multipliant les pages.",
    see: ["strategie-contenu-seo"],
  },
  {
    term: "Featured snippet",
    slug: "featured-snippet",
    category: "SEO",
    aka: ["position zéro", "extrait optimisé"],
    short:
      "Un featured snippet est un extrait de page affiché en haut des résultats de recherche pour répondre directement à une question, accompagné d'un lien vers la source.",
    long: "Il s'obtient en formulant une réponse courte et autonome juste après le titre qui pose la question. Cette même structure est ce qui favorise la reprise par les moteurs de réponse génératifs : le travail sert deux fois.",
    see: ["geo", "strategie-contenu-seo"],
  },
  {
    term: "Données structurées",
    slug: "donnees-structurees",
    category: "SEO",
    aka: ["schema.org", "JSON-LD", "rich snippet"],
    short:
      "Les données structurées sont un balisage normalisé, généralement au format JSON-LD selon le vocabulaire schema.org, qui décrit explicitement le contenu d'une page pour les machines.",
    long: "Elles peuvent rendre éligible à des affichages enrichis, sans jamais les garantir. Règle absolue : ne baliser que ce qui est réellement visible sur la page. Décrire un contenu absent expose à une sanction manuelle.",
    see: ["seo-technique", "geo"],
  },
  {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    category: "SEO",
    aka: ["signaux web essentiels"],
    short:
      "Les Core Web Vitals sont trois mesures de l'expérience de chargement d'une page : le LCP pour l'affichage du contenu principal, l'INP pour la réactivité, le CLS pour la stabilité visuelle.",
    long: "Les seuils recommandés sont 2,5 s pour le LCP, 200 ms pour l'INP et 0,1 pour le CLS, appréciés au 75e percentile des visites réelles. Un score de laboratoire sert à diagnostiquer une cause, jamais à prouver l'expérience vécue.",
    see: ["blog/core-web-vitals", "seo-technique"],
  },
  {
    term: "LCP",
    slug: "lcp",
    category: "SEO",
    aka: ["largest contentful paint"],
    short:
      "Le LCP (Largest Contentful Paint) mesure le délai d'affichage du plus grand élément visible d'une page, généralement une image principale ou un bloc de titre.",
    long: "Les causes les plus fréquentes d'un LCP dégradé sont une image non optimisée, un temps de réponse serveur élevé, des ressources bloquant le rendu, ou un chargement différé appliqué par erreur à l'élément principal.",
    see: ["blog/core-web-vitals"],
  },
  {
    term: "INP",
    slug: "inp",
    category: "SEO",
    aka: ["interaction to next paint"],
    short:
      "L'INP (Interaction to Next Paint) mesure le délai entre une interaction de l'utilisateur et le retour visuel correspondant, sur l'ensemble de la visite.",
    long: "Il a remplacé le FID en mars 2024 et se révèle plus exigeant : il observe toutes les interactions plutôt que la première seulement. Les tâches JavaScript longues en sont la cause principale.",
    see: ["blog/core-web-vitals"],
  },
  {
    term: "CLS",
    slug: "cls",
    category: "SEO",
    aka: ["cumulative layout shift"],
    short:
      "Le CLS (Cumulative Layout Shift) quantifie les déplacements inattendus d'éléments pendant le chargement d'une page.",
    long: "Il se corrige en réservant les dimensions des images, des iframes et des blocs publicitaires avant leur chargement. Les bandeaux de consentement injectés tardivement en sont une cause fréquente et souvent négligée.",
    see: ["blog/core-web-vitals"],
  },
  {
    term: "SEO local",
    slug: "seo-local",
    category: "SEO",
    short:
      "Le SEO local vise la visibilité d'une entreprise sur les recherches associées à une zone géographique, en combinant le site, la fiche d'établissement et la cohérence des informations publiées ailleurs.",
    long: "Les résultats cartographiques obéissent à des signaux distincts des résultats classiques : proximité, pertinence de la catégorie et notoriété locale. Une adresse déclarée sans activité réelle expose à la suspension de la fiche.",
    see: ["seo-local", "consultant-seo-marseille"],
  },
  {
    term: "NAP",
    slug: "nap",
    category: "SEO",
    aka: ["name address phone"],
    short:
      "Le NAP désigne le triplet nom, adresse et téléphone d'une entreprise, dont la cohérence entre le site, la fiche d'établissement et les annuaires renforce la fiabilité du signal local.",
    long: "Les incohérences proviennent le plus souvent d'anciennes fiches oubliées après un déménagement ou un changement de numéro. Un inventaire des mentions existantes précède utilement toute action de nettoyage.",
    see: ["seo-local"],
  },

  // ------------------------------------------------------------------ GEO
  {
    term: "GEO",
    slug: "geo",
    category: "GEO",
    aka: ["generative engine optimization", "référencement IA"],
    short:
      "Le GEO (Generative Engine Optimization) désigne le travail de structure, de clarté et de fiabilité qui rend un contenu exploitable et citable par les moteurs de réponse génératifs comme ChatGPT, Perplexity, Gemini ou les AI Overviews de Google.",
    long: "Le GEO ne remplace pas le SEO : les moteurs de réponse s'appuient sur des pages indexées et accessibles. Il ajoute une couche de lisibilité machine — réponses autonomes, sources, auteur identifiable, informations datées — à un socle qui reste le référencement classique.",
    see: ["geo", "geo-referencement-ia"],
  },
  {
    term: "Moteur de réponse",
    slug: "moteur-de-reponse",
    category: "GEO",
    aka: ["answer engine", "moteur génératif"],
    short:
      "Un moteur de réponse produit une réponse rédigée à partir de plusieurs sources plutôt qu'une liste de liens, en citant tout ou partie des pages utilisées.",
    long: "La conséquence pour un éditeur est double : la visibilité peut augmenter pendant que les visites diminuent, puisque la réponse est consommée sans clic. Mesurer les mentions séparément des visites devient nécessaire.",
    see: ["geo", "blog/seo-vs-geo"],
  },
  {
    term: "AI Overviews",
    slug: "ai-overviews",
    category: "GEO",
    aka: ["aperçus IA", "SGE"],
    short:
      "Les AI Overviews sont les résumés générés par Google affichés en tête de certains résultats de recherche, accompagnés de liens vers les sources utilisées.",
    long: "Google indique qu'aucune optimisation spécifique n'est nécessaire pour y figurer et que ses fondamentaux SEO restent applicables. Leur présence varie selon les requêtes et évolue fréquemment, ce qui rend tout suivi ponctuel peu fiable.",
    see: ["geo", "geo-referencement-ia"],
  },
  {
    term: "LLM",
    slug: "llm",
    category: "GEO",
    aka: ["grand modèle de langage", "large language model"],
    short:
      "Un LLM (large language model) est un modèle entraîné sur de grands volumes de texte pour prédire la suite d'une séquence, ce qui lui permet de produire des réponses en langage naturel.",
    long: "Un LLM ne consulte pas le web par défaut : il restitue ce qu'il a appris, avec une date de connaissance figée. C'est le mécanisme de recherche ajouté par-dessus qui va chercher des pages à jour et permet la citation.",
    see: ["geo"],
  },
  {
    term: "RAG",
    slug: "rag",
    category: "GEO",
    aka: ["retrieval augmented generation"],
    short:
      "Le RAG (retrieval-augmented generation) est la technique qui consiste à récupérer des documents pertinents au moment de la question, puis à demander au modèle de rédiger sa réponse à partir de ces documents.",
    long: "C'est le mécanisme derrière la plupart des citations : la page doit d'abord être trouvée par la couche de recherche, puis jugée exploitable par le modèle. Une page mal structurée peut être récupérée sans jamais être citée.",
    see: ["geo", "geo-referencement-ia"],
  },
  {
    term: "llms.txt",
    slug: "llms-txt",
    category: "GEO",
    short:
      "Le fichier llms.txt est un document Markdown placé à la racine d'un site, qui en résume l'activité et hiérarchise les pages importantes à destination des modèles de langage.",
    long: "La convention a été proposée par Jeremy Howard en septembre 2024 sur llmstxt.org. Elle n'est ni un standard W3C ni une condition d'éligibilité : Google déclare explicitement l'ignorer. Plusieurs outils et assistants le lisent, ce qui en fait un complément peu coûteux — jamais un substitut au contenu.",
    see: ["geo", "blog/seo-vs-geo"],
  },
  {
    term: "GPTBot",
    slug: "gptbot",
    category: "GEO",
    short:
      "GPTBot est le robot d'OpenAI qui collecte des pages web destinées à l'entraînement des modèles. Il se contrôle depuis le fichier robots.txt.",
    long: "Il ne faut pas le confondre avec OAI-SearchBot, qui récupère des pages pour alimenter les réponses de recherche avec citation. Bloquer GPTBot tout en autorisant OAI-SearchBot est une configuration valide : refuser l'entraînement sans renoncer aux citations.",
    see: ["geo-referencement-ia"],
  },
  {
    term: "Entité",
    slug: "entite",
    category: "GEO",
    short:
      "Une entité est une chose identifiable de façon unique — une personne, une organisation, un lieu, un concept — que les moteurs relient à des attributs et à d'autres entités plutôt qu'à une simple chaîne de caractères.",
    long: "Pour une marque ou un indépendant, exister comme entité suppose une cohérence stricte : même nom, même description, mêmes coordonnées partout, et des mentions sur des sources tierces. C'est ce qui permet à un moteur de répondre à « qui est X » avec confiance.",
    see: ["geo"],
  },
  {
    term: "Hallucination",
    slug: "hallucination",
    category: "GEO",
    short:
      "Une hallucination est une affirmation produite par un modèle de langage qui paraît plausible mais ne correspond à aucune source réelle.",
    long: "Le risque concerne directement les entreprises : un modèle peut inventer un tarif, un service ou une coordonnée. Publier des informations explicites, datées et faciles à recouper réduit la probabilité qu'un modèle comble un vide par une invention.",
    see: ["geo", "geo-referencement-ia"],
  },

  // ----------------------------------------------------------------- DATA
  {
    term: "GA4",
    slug: "ga4",
    category: "DATA",
    aka: ["Google Analytics 4"],
    short:
      "GA4 (Google Analytics 4) est la version actuelle de Google Analytics, fondée sur un modèle où chaque interaction est enregistrée comme un événement plutôt que comme une page vue.",
    long: "Le changement de modèle rend les comparaisons avec l'ancien Universal Analytics hasardeuses : les définitions de session, d'utilisateur et de conversion diffèrent. Reprendre un historique sans le préciser produit des écarts qu'on attribue à tort à une baisse d'activité.",
    see: ["data-web", "plan-marquage-ga4"],
  },
  {
    term: "Google Tag Manager",
    slug: "gtm",
    category: "DATA",
    aka: ["GTM", "gestionnaire de balises"],
    short:
      "Google Tag Manager est un gestionnaire de balises qui permet de déployer et modifier des scripts de suivi sans intervention sur le code du site.",
    long: "Il déplace la complexité plutôt qu'il ne la supprime : un conteneur non documenté devient rapidement ingérable. La discipline de nommage et le registre des modifications comptent autant que la configuration elle-même.",
    see: ["plan-marquage-ga4"],
  },
  {
    term: "dataLayer",
    slug: "datalayer",
    category: "DATA",
    aka: ["couche de données"],
    short:
      "Le dataLayer est un objet JavaScript par lequel un site transmet des informations structurées aux outils de mesure, indépendamment de sa structure HTML.",
    long: "Il constitue le contrat entre développeurs et équipe marketing : événements, paramètres et types attendus y sont définis. Aucune donnée personnelle — nom, e-mail, téléphone — ne doit y transiter.",
    see: ["plan-marquage-ga4"],
  },
  {
    term: "Plan de marquage",
    slug: "plan-de-marquage",
    category: "DATA",
    aka: ["plan de taggage", "measurement plan"],
    short:
      "Un plan de marquage est le document qui liste les interactions à mesurer et, pour chacune, son déclencheur, ses paramètres, sa finalité et sa règle de consentement.",
    long: "Il se rédige à partir des décisions que les données doivent permettre de prendre, pas de la liste des interactions techniquement suivables. Cinq événements fiables valent mieux que trente approximatifs que plus personne ne maintient.",
    see: ["plan-marquage-ga4", "data-web"],
  },
  {
    term: "Conversion",
    slug: "conversion",
    category: "DATA",
    short:
      "Une conversion est une action mesurée considérée comme un succès pour l'activité : demande de devis envoyée, achat confirmé, rendez-vous pris.",
    long: "L'erreur la plus répandue consiste à déclencher l'événement sur le clic du bouton d'envoi plutôt que sur la confirmation serveur. Les formulaires en erreur sont alors comptés comme des succès, et le taux de conversion devient inexploitable.",
    see: ["data-web", "blog/plan-mesure-ga4"],
  },
  {
    term: "Attribution",
    slug: "attribution",
    category: "DATA",
    short:
      "L'attribution est la règle qui détermine à quels points de contact revient le mérite d'une conversion lorsque plusieurs canaux sont intervenus.",
    long: "Toute attribution est incomplète par construction : refus des traceurs, parcours sur plusieurs appareils, visites sans référent. Les conversions observées indiquent une corrélation, jamais une preuve causale. Les comparaisons cohérentes valent mieux que les totaux présentés comme exhaustifs.",
    see: ["data-web", "dashboard-seo"],
  },
  {
    term: "Consentement",
    slug: "consentement",
    category: "DATA",
    aka: ["CMP", "RGPD cookies"],
    short:
      "Le consentement est l'accord donné par un visiteur au dépôt de traceurs non essentiels, recueilli par une plateforme de gestion du consentement (CMP) avant toute collecte.",
    long: "Un taux de consentement de soixante pour cent ne rend pas les données fausses, il les rend partielles. Ce taux doit être suivi dans le temps : une variation change le volume mesuré sans qu'aucune évolution réelle ne se soit produite.",
    see: ["data-web"],
  },
  {
    term: "Search Console",
    slug: "search-console",
    category: "DATA",
    aka: ["GSC", "Google Search Console"],
    short:
      "Google Search Console est l'outil gratuit qui expose les données de performance d'un site dans la recherche Google — impressions, clics, positions — ainsi que son état d'indexation.",
    long: "C'est la seule source qui décrit le point de vue du moteur plutôt que celui du navigateur. Ses totaux ne coïncideront jamais avec ceux d'un outil analytics : les deux ne comptent pas la même chose, à des moments différents du parcours.",
    see: ["dashboard-seo", "audit-seo"],
  },
  {
    term: "Impression",
    slug: "impression",
    category: "DATA",
    short:
      "Une impression est comptabilisée lorsqu'un lien vers une page apparaît dans une page de résultats consultée par un utilisateur, qu'il ait été vu ou non.",
    long: "Une hausse d'impressions sans hausse de clics signale généralement un élargissement des requêtes sur lesquelles le site apparaît — souvent en positions basses — plutôt qu'une dégradation de la performance.",
    see: ["dashboard-seo"],
  },
  {
    term: "CTR",
    slug: "ctr",
    category: "DATA",
    aka: ["taux de clic"],
    short:
      "Le CTR (click-through rate) est le rapport entre le nombre de clics et le nombre d'impressions, exprimé en pourcentage.",
    long: "Il n'a de sens que comparé à position équivalente : un CTR de deux pour cent en dixième position n'est pas comparable à un CTR de deux pour cent en deuxième position. Segmenter par requête de marque et hors marque est indispensable.",
    see: ["dashboard-seo"],
  },
];

export const glossaryCategories = ["SEO", "GEO", "DATA"] as const;

export function termsByCategory(category: Term["category"]) {
  return terms.filter((t) => t.category === category);
}
