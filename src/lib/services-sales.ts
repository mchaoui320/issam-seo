/**
 * Contenu commercial des pages de service.
 *
 * `content.ts` porte l'explication du métier. Ici on ajoute ce qui transforme
 * une page explicative en page de vente : ce qu'on livre, comment on procède,
 * avec quels outils, ce que ça coûte, et les objections réelles.
 *
 * Règle tenue : chaque bloc doit être intransposable. Si un paragraphe
 * fonctionne aussi bien sur une autre page en changeant trois mots, il est à
 * réécrire — c'est le test appliqué en revue (`docs/REVUE.md`).
 */

export type Livrable = {
  nom: string;
  detail: string;
};

export type Etape = {
  titre: string;
  duree: string;
  texte: string;
  produit: string;
};

export type Outil = {
  nom: string;
  usage: string;
};

export type ServiceSales = {
  /** Ce qui ne va pas, formulé comme le prospect le vit. */
  problemes: { titre: string; texte: string }[];
  /** Ce qu'on remet, concrètement. */
  livrables: Livrable[];
  /** Déroulé de la mission. */
  etapes: Etape[];
  /** Outils nommés — c'est ce qui distingue d'un généraliste. */
  outils: Outil[];
  /** Repère de prix. Toujours assorti de ce qui le fait varier. */
  tarif: { fourchette: string; variables: string[] };
  /** Objections réelles, pas des questions de confort. */
  objections?: { question: string; reponse: string }[];
};

export const servicesSales: Record<string, ServiceSales> = {
  // ------------------------------------------------------------------ GEO
  geo: {
    problemes: [
      {
        titre: "Vos concurrents sont cités, vous non",
        texte:
          "Quand un prospect demande à ChatGPT ou Perplexity quel prestataire choisir dans votre secteur, trois ou quatre noms reviennent. Si le vôtre n'en fait pas partie, vous êtes absent d'une étape de décision qui se déroule entièrement sans vous, et sans laisser la moindre trace dans vos statistiques.",
      },
      {
        titre: "Votre trafic baisse alors que vos positions tiennent",
        texte:
          "Les résumés générés répondent directement dans la page de résultats. Une requête qui amenait une visite peut désormais être traitée sans clic. Les positions restent bonnes, les impressions aussi, et les sessions reculent — un écart que seul un suivi séparé des deux permet de constater.",
      },
      {
        titre: "Un modèle raconte des choses fausses sur vous",
        texte:
          "Un moteur de réponse qui ne trouve pas d'information explicite comble le vide. Il peut inventer un tarif, attribuer un service que vous ne proposez pas, ou donner une zone d'intervention erronée. Publier des informations précises, datées et faciles à recouper réduit fortement ce risque.",
      },
    ],
    livrables: [
      {
        nom: "Panel de requêtes documenté",
        detail:
          "30 à 80 questions représentatives de votre marché, figées par écrit, avec leur langue, leur intention et le moteur interrogé. C'est le point de référence : sans lui, aucune observation ultérieure n'est comparable.",
      },
      {
        nom: "Relevé initial horodaté",
        detail:
          "Pour chaque question et chaque moteur : la réponse obtenue, les sources citées, les concurrents mentionnés, la date et l'heure. Conservé tel quel, captures comprises.",
      },
      {
        nom: "Analyse des sources reprises",
        detail:
          "Quels domaines les moteurs citent sur votre marché, à quelle fréquence, et ce que ces pages ont en commun. C'est ce qui indique le niveau à atteindre, bien mieux qu'une liste de bonnes pratiques génériques.",
      },
      {
        nom: "Plan de restructuration éditoriale",
        detail:
          "Page par page : où placer la réponse autonome, quelles questions traiter en FAQ, quelles données structurées ajouter, quelles informations dater. Chaque ligne précise l'URL, la modification et le contrôle attendu.",
      },
      {
        nom: "Protocole de suivi reproductible",
        detail:
          "La procédure pour rejouer les relevés à intervalle régulier, à conditions constantes, et savoir distinguer une évolution réelle d'une variation de session.",
      },
    ],
    etapes: [
      {
        titre: "Constituer le panel",
        duree: "3 à 5 jours",
        texte:
          "On part de vos requêtes commerciales, de vos questions avant-vente et des formulations réellement employées par vos prospects. Les questions sont écrites une fois pour toutes : un panel qui change d'une session à l'autre ne mesure rien.",
        produit: "Panel figé, validé avec vous",
      },
      {
        titre: "Relever l'état initial",
        duree: "2 à 4 jours",
        texte:
          "Chaque question est posée à chaque moteur retenu, dans des conditions consignées. On note mention de marque, lien effectivement cité et sources concurrentes. Plusieurs passages sont nécessaires : les réponses varient d'une session à l'autre.",
        produit: "Relevé horodaté avec captures",
      },
      {
        titre: "Analyser ce qui est cité",
        duree: "3 à 5 jours",
        texte:
          "On examine les pages reprises par les moteurs : structure, présence d'une réponse autonome en tête, données chiffrées, sources, fraîcheur, auteur identifiable. L'écart avec vos propres pages devient alors chiffrable plutôt qu'impressionniste.",
        produit: "Analyse comparative et écarts",
      },
      {
        titre: "Restructurer",
        duree: "selon le volume",
        texte:
          "Mise en place des formats extractibles sur les pages prioritaires, enrichissement des données structurées, datation des contenus, clarification de l'entité. Les modifications sont faites par vos équipes ou avec elles.",
        produit: "Pages modifiées et contrôlées",
      },
      {
        titre: "Rejouer et comparer",
        duree: "mensuel",
        texte:
          "Le panel est rejoué à conditions identiques. On compare l'évolution des mentions, des citations et du trafic référent. Une hausse sur un seul relevé ne prouve rien : c'est la tendance sur plusieurs mois qui est lisible.",
        produit: "Rapport d'évolution commenté",
      },
    ],
    outils: [
      {
        nom: "ChatGPT, Claude, Gemini, Perplexity, Mistral",
        usage:
          "Relevés directs sur chaque moteur, avec les conditions consignées à chaque passage",
      },
      {
        nom: "Scripts Python maison",
        usage:
          "Interrogation en série via les API, normalisation des réponses et extraction des sources citées — ce qui rend le relevé reproductible plutôt qu'artisanal",
      },
      {
        nom: "Google Search Console",
        usage:
          "Séparation des impressions et des clics pour détecter les requêtes où la visibilité tient alors que le trafic recule",
      },
      {
        nom: "Schema.org et validateur de résultats enrichis",
        usage:
          "Contrôle des données structurées réellement interprétées, pas seulement présentes dans le code",
      },
      {
        nom: "Screaming Frog",
        usage:
          "Vérification que les robots de récupération accèdent aux pages et lisent le contenu rendu",
      },
    ],
    tarif: {
      fourchette: "Audit initial 3 000 à 7 000 € · suivi mensuel 800 à 2 500 €",
      variables: [
        "Nombre de moteurs suivis et taille du panel de questions",
        "Nombre de langues et de marchés à couvrir",
        "Volume de pages à restructurer",
        "Fréquence des relevés",
      ],
    },
    objections: [
      {
        question: "Vous garantissez d'être cité par ChatGPT ?",
        reponse:
          "Non, et personne ne le peut. Une réponse générée varie selon le modèle, sa version, la date, la formulation et parfois l'utilisateur. Ce sur quoi on s'engage est la méthode : un panel documenté, des relevés reproductibles et des contenus qui réunissent les caractéristiques des pages effectivement citées sur votre marché.",
      },
      {
        question: "Est-ce que ça ne va pas disparaître dans six mois ?",
        reponse:
          "Les interfaces changeront, le mécanisme non : un système qui répond à partir de sources choisies doit toujours choisir ces sources. Par ailleurs, l'essentiel du travail — réponses claires, informations datées, sources citées, structure lisible — sert aussi le référencement classique. Il n'y a pas d'investissement perdu si le paysage évolue.",
      },
      {
        question: "On nous a dit qu'un fichier llms.txt suffisait.",
        reponse:
          "Il ne suffit pas, et il n'est pas une condition. Google déclare explicitement l'ignorer, et aucun moteur n'en fait un critère d'éligibilité. Certains outils le lisent, ce qui en fait un complément à coût quasi nul. Le présenter comme la solution revient à vendre un fichier texte à la place d'un travail éditorial.",
      },
      {
        question: "Comment savoir si ça a servi à quelque chose ?",
        reponse:
          "Par trois mesures distinctes qu'il ne faut pas confondre : l'évolution des mentions dans le panel, l'évolution des citations avec lien, et le trafic référent effectivement arrivé depuis ces moteurs. La troisième est la seule qui se rattache à une conversion ; les deux premières se dégradent ou progressent souvent avant elle.",
      },
    ],
  },

  "geo-referencement-ia": {
    problemes: [
      {
        titre: "Chaque moteur se comporte différemment",
        texte:
          "Perplexity pondère la fraîcheur beaucoup plus fortement que la recherche classique. ChatGPT en mode recherche s'appuie sur un index tiers et privilégie les formats structurés. Les AI Overviews de Google reprennent les signaux du référencement classique. Appliquer la même recette aux trois produit des résultats très inégaux.",
      },
      {
        titre: "Vous ne savez pas si vous progressez",
        texte:
          "Sans protocole fixé, chaque relevé est incomparable au précédent : la question a changé d'un mot, la session n'est pas la même, la date n'a pas été notée. On se retrouve avec une impression, pas une mesure — et l'impression suit généralement l'humeur de celui qui regarde.",
      },
      {
        titre: "Votre contenu est bon mais illisible pour une machine",
        texte:
          "Un texte qui ouvre sur une accroche, développe en paragraphes longs et place la réponse au milieu est parfaitement lisible pour un humain, et très mal repris par un modèle. Ce n'est pas une question de qualité : c'est une question de place de l'information.",
      },
    ],
    livrables: [
      {
        nom: "Fiche par moteur",
        detail:
          "Pour ChatGPT, Gemini, Perplexity, Claude et Mistral : son mode de récupération, ce qu'il privilégie, ses robots et comment il cite. Ce qui s'optimise pour l'un ne vaut pas forcément pour l'autre.",
      },
      {
        nom: "Protocole de relevé écrit",
        detail:
          "Les questions, la langue, le moteur, la fréquence et la façon de consigner. Rédigé pour être exécuté par quelqu'un d'autre que son auteur — c'est le test d'un protocole réel.",
      },
      {
        nom: "Grille de restructuration par gabarit",
        detail:
          "Où placer la réponse autonome, comment formuler les intertitres en questions, quelles données chiffrées ajouter, quelles sources citer, où faire apparaître les dates.",
      },
      {
        nom: "Configuration des robots IA",
        detail:
          "Arbitrage explicite entre robots d'entraînement et robots de récupération, avec les conséquences de chaque choix. Bloquer GPTBot tout en restant éligible aux citations de ChatGPT Search est une configuration valide, encore faut-il la poser sciemment.",
      },
      {
        nom: "Tableau de suivi des trois mesures",
        detail:
          "Mentions de marque, citations avec lien, et trafic référent. Les trois évoluent rarement ensemble, et les confondre conduit à surestimer les résultats.",
      },
    ],
    etapes: [
      {
        titre: "Choisir les moteurs qui comptent",
        duree: "1 à 2 jours",
        texte:
          "Tous ne méritent pas le même effort. Le choix dépend de l'usage réel de vos prospects, pas de la notoriété du moteur. Sur un marché B2B technique, Perplexity pèse souvent plus que son audience générale ne le laisserait croire.",
        produit: "Périmètre arbitré et justifié",
      },
      {
        titre: "Écrire le protocole",
        duree: "2 à 3 jours",
        texte:
          "Les questions sont rédigées, la fréquence fixée, le mode de consignation défini. Une fois écrit, le protocole ne change plus : toute modification casse la comparabilité avec les relevés antérieurs.",
        produit: "Protocole exécutable par un tiers",
      },
      {
        titre: "Restructurer les gabarits",
        duree: "selon le volume",
        texte:
          "Le travail porte sur les modèles de page plutôt que sur les pages une à une : corriger le gabarit d'article corrige tous les articles. La réponse autonome passe en tête, les intertitres deviennent des questions, les dates apparaissent.",
        produit: "Gabarits modifiés et contrôlés",
      },
      {
        titre: "Relever et ajuster",
        duree: "mensuel",
        texte:
          "Le protocole est rejoué à conditions constantes. On compare les trois mesures séparément et on ajuste les pages qui n'ont pas bougé, plutôt que de tout reprendre.",
        produit: "Rapport mensuel commenté",
      },
    ],
    outils: [
      {
        nom: "API OpenAI, Anthropic, Google et Mistral",
        usage:
          "Interrogation en série à conditions identiques, ce qui supprime la variabilité introduite par une saisie manuelle",
      },
      {
        nom: "Scripts Python de normalisation",
        usage:
          "Extraction des sources citées, détection des mentions de marque et mise en forme comparable d'une vague à l'autre",
      },
      {
        nom: "Google Search Console",
        usage:
          "Détection des requêtes où les impressions tiennent alors que les clics reculent — signature d'une réponse consommée sans visite",
      },
      {
        nom: "GA4 et journaux serveur",
        usage:
          "Isolation du trafic référent venu des moteurs de réponse et observation du passage des robots quand les journaux sont accessibles",
      },
      {
        nom: "Screaming Frog et validateur Schema.org",
        usage:
          "Contrôle que le contenu est bien rendu pour les robots de récupération et que le balisage est effectivement interprété",
      },
    ],
    tarif: {
      fourchette:
        "Mise en place 2 500 à 6 000 € · suivi mensuel 600 à 2 000 €",
      variables: [
        "Nombre de moteurs retenus",
        "Taille du panel et fréquence des relevés",
        "Nombre de gabarits à restructurer",
        "Langues et marchés couverts",
      ],
    },
    objections: [
      {
        question: "Combien de temps avant d'être cité ?",
        reponse:
          "Il n'y a pas de délai fiable à annoncer. Cela dépend de l'indexation, de la notoriété du domaine et surtout de l'existence d'une meilleure réponse ailleurs. Les observations se font sur plusieurs semaines à conditions constantes avant d'en tirer une tendance. Tout prestataire qui annonce un délai précis sur ce sujet invente.",
      },
      {
        question: "Faut-il bloquer les robots d'entraînement ?",
        reponse:
          "C'est un arbitrage, pas une évidence. Les bloquer protège le contenu d'un usage d'entraînement mais réduit la probabilité d'être connu du modèle. Pour une activité qui vit de sa visibilité, l'ouverture est généralement le bon choix. Pour un média dont le contenu est le produit, la réponse est souvent inverse.",
      },
      {
        question: "Vos relevés sont-ils opposables ?",
        reponse:
          "Non, et c'est à dire clairement. Une réponse générée n'est pas reproductible à l'identique : elle dépend du modèle, de sa version, de la date et parfois de l'utilisateur. Un relevé documente ce qui a été observé à un moment donné, dans des conditions consignées. C'est une base de comparaison, pas une preuve.",
      },
    ],
  },
};

export function getServiceSales(slug: string): ServiceSales | undefined {
  return servicesSales[slug];
}
