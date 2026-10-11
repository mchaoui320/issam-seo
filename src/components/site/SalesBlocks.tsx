import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";

/**
 * Dispositifs éditoriaux relevés sur les pages d'expertise qui convertissent.
 *
 * Trois constats tirés de la lecture de leurs pages, pas de leur apparence :
 *
 * 1. Un bloc confronte « ce que font les autres » à « ce qu'on fait », en deux
 *    colonnes de phrases courtes. C'est leur argument le plus efficace parce
 *    qu'il formule l'objection du lecteur avant lui.
 * 2. Chaque étape de méthode se termine par une ligne « Objectif : … ». Sans
 *    elle, une étape reste une activité ; avec elle, elle devient un résultat.
 * 3. Les expertises sont annoncées à l'impératif et côté bénéfice — « Éliminez
 *    les freins techniques », jamais « nous analysons la technique ».
 */

/* ------------------------------------------------------ bloc comparatif */

export function ComparisonBlock({
  titre,
  intro,
  colonneA,
  colonneB,
}: {
  titre: string;
  intro?: string;
  colonneA: { titre: string; points: string[] };
  colonneB: { titre: string; points: string[] };
}) {
  return (
    <section className="wrap cmp">
      <h2>{titre}</h2>
      {intro && <p className="cmp__intro">{intro}</p>}
      <div className="cmp__grid">
        <article className="cmp__col cmp__col--contre">
          <h3>{colonneA.titre}</h3>
          <ul>
            {colonneA.points.map((p) => (
              <li key={p}>
                <X size={15} aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="cmp__col cmp__col--pour">
          <h3>{colonneB.titre}</h3>
          <ul>
            {colonneB.points.map((p) => (
              <li key={p}>
                <Check size={15} aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

/* ------------------------------------- méthode, avec objectif par étape */

export type EtapeObjectif = {
  titre: string;
  phrase: string;
  points: string[];
  /** Ce que l'étape produit. Sans cette ligne, l'étape reste une activité. */
  objectif: string;
};

export function MethodSteps({
  titre,
  intro,
  etapes,
}: {
  titre: string;
  intro?: string;
  etapes: EtapeObjectif[];
}) {
  return (
    <section className="wrap methode">
      <h2>{titre}</h2>
      {intro && <p className="methode__intro">{intro}</p>}
      <ol className="methode__liste">
        {etapes.map((e, i) => (
          <li key={e.titre}>
            <span className="methode__etape">
              ÉTAPE {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{e.titre}</h3>
            <p className="methode__phrase">{e.phrase}</p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="methode__objectif">
              <strong>Objectif</strong> {e.objectif}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------- grille d'expertises taguée */

export type Expertise = {
  nom: string;
  /** ON-SITE, OFF-SITE, CONTENU, IA, DATA… */
  tag: string;
  /** Formulé à l'impératif, côté bénéfice. Jamais « nous analysons ». */
  benefice: string;
  href: string;
};

export function ExpertiseGrid({
  titre,
  intro,
  expertises,
}: {
  titre: string;
  intro?: string;
  expertises: Expertise[];
}) {
  return (
    <section className="wrap expertises">
      <h2>{titre}</h2>
      {intro && <p className="expertises__intro">{intro}</p>}
      <div className="expertises__grid">
        {expertises.map((e) => (
          <Link key={e.href} href={e.href} className="expertises__carte">
            <span className="expertises__tag">{e.tag}</span>
            <h3>{e.nom}</h3>
            <p>{e.benefice}</p>
            <span className="expertises__lire">
              Lire plus <ArrowUpRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------- pont vers le levier voisin */

export function BridgeBlock({
  titre,
  texte,
  lien,
  libelleLien,
}: {
  titre: string;
  texte: string;
  lien: string;
  libelleLien: string;
}) {
  return (
    <section className="wrap pont">
      <div>
        <h2>{titre}</h2>
        <p>{texte}</p>
        <Link href={lien} className="button">
          {libelleLien} <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
