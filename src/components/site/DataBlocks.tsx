import Link from "next/link";
import { ArrowUpRight, Check, Minus, X } from "lucide-react";

/**
 * Composants de données des pages de vente.
 *
 * Une page d'agence ne se lit pas, elle se parcourt. Les concurrents sérieux
 * alternent texte, chiffres, tableaux et schémas — la page netlinking
 * d'Eskimoz compte 60 images, 19 SVG et 6 blocs de chiffres pour 2 200 mots.
 *
 * Tout est rendu en HTML et SVG inline plutôt qu'en images : le contenu reste
 * lisible par les moteurs de réponse, sélectionnable, accessible, et ne coûte
 * aucune requête réseau supplémentaire.
 */

/* ------------------------------------------------------------------ chiffres */

export type Stat = {
  valeur: string;
  libelle: string;
  /** D'où vient le chiffre. Un chiffre sans source n'a pas sa place ici. */
  source?: string;
};

export function StatRow({ stats, titre }: { stats: Stat[]; titre?: string }) {
  return (
    <section className="wrap data-stats">
      {titre && <h2>{titre}</h2>}
      <div className="data-stats__grid">
        {stats.map((s) => (
          <div key={s.libelle}>
            <strong>{s.valeur}</strong>
            <span>{s.libelle}</span>
            {s.source && <small>{s.source}</small>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ tableau */

export type Colonne = { cle: string; titre: string };
export type Ligne = Record<string, string | boolean>;

export function DataTable({
  titre,
  intro,
  colonnes,
  lignes,
  note,
}: {
  titre: string;
  intro?: string;
  colonnes: Colonne[];
  lignes: Ligne[];
  note?: string;
}) {
  const cell = (v: string | boolean) => {
    if (v === true)
      return <Check size={16} className="is-oui" aria-label="oui" />;
    if (v === false) return <X size={16} className="is-non" aria-label="non" />;
    if (v === "") return <Minus size={14} className="is-na" aria-label="non applicable" />;
    return v;
  };
  return (
    <section className="wrap data-table">
      <h2>{titre}</h2>
      {intro && <p className="data-table__intro">{intro}</p>}
      <div className="data-table__scroll">
        <table>
          <thead>
            <tr>
              {colonnes.map((c) => (
                <th key={c.cle} scope="col">
                  {c.titre}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i}>
                {colonnes.map((c, j) =>
                  j === 0 ? (
                    <th key={c.cle} scope="row">
                      {cell(l[c.cle])}
                    </th>
                  ) : (
                    <td key={c.cle}>{cell(l[c.cle])}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="data-table__note">{note}</p>}
    </section>
  );
}

/* ------------------------------------------------- graphique en barres (SVG) */

export type Barre = { libelle: string; valeur: number; accent?: boolean };

/**
 * Barres horizontales en SVG inline.
 *
 * Les valeurs sont aussi écrites en texte : un lecteur d'écran, un moteur de
 * réponse ou un visiteur dont le CSS n'a pas chargé doivent pouvoir lire les
 * données sans dépendre du rendu graphique.
 */
export function BarChart({
  titre,
  intro,
  unite,
  barres,
  source,
}: {
  titre: string;
  intro?: string;
  unite: string;
  barres: Barre[];
  source?: string;
}) {
  const max = Math.max(...barres.map((b) => b.valeur), 1);
  return (
    <section className="wrap data-chart">
      <h2>{titre}</h2>
      {intro && <p className="data-chart__intro">{intro}</p>}
      <ol className="data-chart__barres">
        {barres.map((b) => (
          <li key={b.libelle} className={b.accent ? "is-accent" : undefined}>
            <span className="data-chart__libelle">{b.libelle}</span>
            <span className="data-chart__piste" aria-hidden="true">
              <span
                className="data-chart__remplissage"
                style={{ width: `${(b.valeur / max) * 100}%` }}
              />
            </span>
            <span className="data-chart__valeur">
              {b.valeur}
              {unite}
            </span>
          </li>
        ))}
      </ol>
      {source && <p className="data-chart__source">{source}</p>}
    </section>
  );
}

/* -------------------------------------------------------- schéma de processus */

export type EtapeSchema = { titre: string; detail: string };

export function ProcessDiagram({
  titre,
  intro,
  etapes,
}: {
  titre: string;
  intro?: string;
  etapes: EtapeSchema[];
}) {
  return (
    <section className="wrap data-process">
      <h2>{titre}</h2>
      {intro && <p className="data-process__intro">{intro}</p>}
      <ol className="data-process__flux">
        {etapes.map((e, i) => (
          <li key={e.titre}>
            <span className="data-process__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{e.titre}</h3>
            <p>{e.detail}</p>
            {i < etapes.length - 1 && (
              <span className="data-process__fleche" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------- prestations en détail */

export type Prestation = {
  nom: string;
  texte: string;
  inclus: string[];
  href?: string;
};

export function PrestationList({
  titre,
  intro,
  prestations,
}: {
  titre: string;
  intro?: string;
  prestations: Prestation[];
}) {
  return (
    <section className="wrap data-prestations">
      <h2>{titre}</h2>
      {intro && <p className="data-prestations__intro">{intro}</p>}
      <div className="data-prestations__grid">
        {prestations.map((p, i) => (
          <article key={p.nom}>
            <span className="data-prestations__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{p.nom}</h3>
            <p>{p.texte}</p>
            <ul>
              {p.inclus.map((x) => (
                <li key={x}>
                  <Check size={13} aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            {p.href && (
              <Link href={p.href}>
                En savoir plus <ArrowUpRight size={13} />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ grille de prix */

export type Offre = {
  nom: string;
  prix: string;
  pour: string;
  inclus: string[];
  misEnAvant?: boolean;
};

export function PriceTable({
  titre,
  intro,
  offres,
  note,
}: {
  titre: string;
  intro?: string;
  offres: Offre[];
  note?: string;
}) {
  return (
    <section className="wrap data-prix">
      <h2>{titre}</h2>
      {intro && <p className="data-prix__intro">{intro}</p>}
      <div className="data-prix__grid">
        {offres.map((o) => (
          <article key={o.nom} className={o.misEnAvant ? "is-avant" : undefined}>
            <h3>{o.nom}</h3>
            <p className="data-prix__montant">{o.prix}</p>
            <p className="data-prix__pour">{o.pour}</p>
            <ul>
              {o.inclus.map((x) => (
                <li key={x}>
                  <Check size={13} aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="button">
              Demander un chiffrage <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
      {note && <p className="data-prix__note">{note}</p>}
    </section>
  );
}
