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
};

export function getServiceSales(slug: string): ServiceSales | undefined {
  return servicesSales[slug];
}
