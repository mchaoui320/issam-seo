/**
 * Modèle d'une page de service.
 *
 * Toutes les pages d'expertise partagent la même ossature : il serait absurde
 * d'en réécrire le rendu à chaque fois. Une page se réduit donc à un objet de
 * données, et `ServicePage` s'occupe du reste — schema JSON-LD compris.
 *
 * Les champs optionnels le sont réellement : un service sans tableau
 * comparatif n'affiche pas de tableau vide. Mais `answer`, `faq` et `tarif`
 * sont obligatoires, parce qu'une page de vente sans réponse extractible, sans
 * questions réelles et sans ordre de grandeur de prix n'en est pas une.
 */

export type ServiceData = {
  slug: string;
  /** Famille : SEO, GEO, DATA, IA. Sert au fil d'Ariane et au schema. */
  famille: "SEO" | "GEO" | "DATA" | "IA";
  /** H1. Peut être long et éditorial. */
  titre: string;
  /** Balise title. Sous 47 caractères — le gabarit ajoute « | MIC SIGNAL ». */
  metaTitre: string;
  /** Meta description. Entre 140 et 160 caractères. */
  metaDescription: string;
  /** Chapô sous le H1. */
  intro: string;

  /**
   * Réponse autonome, placée en tête de page. C'est le passage que les moteurs
   * de réponse reprennent tel quel : il doit se comprendre hors contexte, sans
   * pronom renvoyant au titre.
   */
  answer: string;
  /** Points saillants, formulés pour être extraits isolément. */
  takeaways: string[];

  published: string;
  updated: string;
  keywords: string[];

  /** Ce qui ne va pas, formulé comme le prospect le vit. */
  problemes?: { titre: string; texte: string }[];

  /** Chiffres clés. Chacun porte sa source — sinon il ne s'affiche pas. */
  chiffres?: { valeur: string; libelle: string; source: string }[];

  /** Tableau comparatif ou de référence. */
  tableau?: {
    titre: string;
    intro?: string;
    colonnes: { cle: string; titre: string }[];
    lignes: Record<string, string | boolean>[];
    note?: string;
  };

  /** Graphique en barres. */
  graphique?: {
    titre: string;
    intro?: string;
    unite: string;
    barres: { libelle: string; valeur: number; accent?: boolean }[];
    source?: string;
  };

  /** Bloc comparatif « eux / nous ». */
  comparatif?: {
    titre: string;
    intro?: string;
    colonneA: { titre: string; points: string[] };
    colonneB: { titre: string; points: string[] };
  };

  /** Étapes de la méthode. Chacune se termine par son objectif. */
  methode?: {
    titre: string;
    intro?: string;
    etapes: {
      titre: string;
      phrase: string;
      points: string[];
      objectif: string;
    }[];
  };

  /** Livrables remis, décrits concrètement. */
  livrables?: { nom: string; detail: string }[];

  /** Outils nommés. « Nos outils » sans les citer ne vaut rien. */
  outils?: { nom: string; usage: string }[];

  /** Ordre de grandeur de prix, toujours assorti de ce qui le fait varier. */
  tarif: { fourchette: string; variables: string[] };

  /** Questions réellement posées. Affichées et balisées en FAQPage. */
  faq: readonly (readonly [string, string])[];

  /** Pont vers le levier adjacent. */
  pont?: { titre: string; texte: string; lien: string; libelleLien: string };

  /** Maillage contextuel de fin de page. */
  liens?: { href: string; titre: string; texte: string }[];
};
