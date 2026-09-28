"use client";
import { useDeferredValue, useMemo, useState, useId } from "react";
import { analyse } from "@/lib/citability";

const SAMPLE = `Qu'est-ce qu'un audit SEO ?

Un audit SEO inventorie ce qui empêche un site d'être exploré, indexé et choisi par les moteurs, puis classe les corrections par impact et par effort. Il combine un crawl complet, les données Search Console et les données de conversion.

Combien de temps dure un audit ?

Comptez deux à quatre semaines entre le lancement et la restitution, selon la taille du site.

- Inventaire des URL et statuts HTTP
- Analyse des directives robots et des canonicals
- Contrôle des Core Web Vitals sur données de terrain

Selon le baromètre Malt 2025, le tarif journalier moyen d'un consultant SEO en France atteint 570 €.`;

function band(score: number) {
  if (score >= 75) return { label: "Très extractible", tone: "high" };
  if (score >= 50) return { label: "Partiellement extractible", tone: "mid" };
  if (score >= 25) return { label: "Peu extractible", tone: "low" };
  return { label: "Difficilement citable", tone: "none" };
}

export function CitabilityAnalyzer() {
  const [raw, setRaw] = useState("");
  const textareaId = useId();
  // L'analyse est synchrone mais peut porter sur plusieurs milliers de mots :
  // la version différée évite de bloquer la saisie.
  const deferred = useDeferredValue(raw);
  const result = useMemo(
    () => (deferred.trim().length > 40 ? analyse(deferred) : null),
    [deferred],
  );

  return (
    <div className="citability">
      <div className="citability__input">
        <div className="citability__head">
          <label htmlFor={textareaId}>
            <span className="atlas-label">VOTRE CONTENU</span>
            Collez le texte d’une page — titres compris.
          </label>
          <div className="citability__actions">
            <button type="button" onClick={() => setRaw(SAMPLE)}>
              Charger un exemple
            </button>
            {raw && (
              <button type="button" onClick={() => setRaw("")}>
                Effacer
              </button>
            )}
          </div>
        </div>
        <textarea
          id={textareaId}
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          rows={12}
          spellCheck={false}
          placeholder="Collez ici le contenu d’une page, intertitres inclus. Rien n’est envoyé : le calcul se fait dans votre navigateur."
        />
      </div>

      <div className="citability__output" aria-live="polite">
        {!result ? (
          <p className="citability__empty">
            Collez au moins quelques phrases pour lancer l’analyse.
          </p>
        ) : (
          <>
            <div className={`citability__score is-${band(result.score).tone}`}>
              <div className="citability__gauge">
                <strong>{result.score}</strong>
                <span>/100</span>
              </div>
              <div>
                <p className="citability__band">{band(result.score).label}</p>
                <p className="citability__stats">
                  {result.stats.words} mots · {result.stats.sentences} phrases ·{" "}
                  {result.stats.headings} intertitres ·{" "}
                  {result.stats.avgSentenceWords} mots/phrase
                </p>
              </div>
            </div>

            <ul className="citability__list">
              {result.criteria.map((c) => (
                <li key={c.id} className={`is-${band(c.score).tone}`}>
                  <div className="citability__row">
                    <span className="citability__label">{c.label}</span>
                    <span className="citability__value">{c.score}</span>
                  </div>
                  <div
                    className="citability__bar"
                    role="img"
                    aria-label={`${c.label} : ${c.score} sur 100`}
                  >
                    <i style={{ width: `${c.score}%` }} />
                  </div>
                  <p className="citability__finding">{c.finding}</p>
                  {c.score < 60 && (
                    <p className="citability__advice">{c.advice}</p>
                  )}
                </li>
              ))}
            </ul>

            <p className="citability__caveat">
              Cet outil mesure des <strong>formes</strong> : réponse autonome,
              titres interrogatifs, chiffres, sources, longueur de phrase. Il ne
              prédit pas une citation et ne mesure ni votre autorité ni la
              qualité de la concurrence sur le sujet. Un texte bien noté sur une
              question déjà mieux traitée ailleurs ne sera pas repris pour
              autant.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
