"use client";
import { useState } from "react";
import { Calculator, ScanText, Link2, Check, Download } from "lucide-react";
const checks = [
  "Les pages prioritaires sont indexables et accessibles.",
  "Chaque page répond à une intention distincte.",
  "Les titres et descriptions sont spécifiques.",
  "Les contenus présentent des sources et une expertise identifiable.",
  "Les liens internes relient guides et services.",
  "Les conversions correspondent à des succès réels.",
];
export function Tools() {
  const [tab, setTab] = useState(0);
  const [title, setTitle] = useState("Mobilier durable fabriqué en France — Maison Mistral");
  const [description, setDescription] = useState(
    "Découvrez nos tables et rangements fabriqués à Lyon, configurables en ligne et livrés partout en France.",
  );
  const [url, setUrl] = useState("https://www.exemple.fr");
  const [visits, setVisits] = useState(3000);
  const [rate, setRate] = useState(2);
  const [value, setValue] = useState(150);
  const [source, setSource] = useState("newsletter");
  const [medium, setMedium] = useState("email");
  const [campaign, setCampaign] = useState("lancement");
  const [checked, setChecked] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  let utm = "";
  try {
    const u = new URL(url);
    if (!["https:", "http:"].includes(u.protocol)) throw new Error();
    u.searchParams.set("utm_source", source);
    u.searchParams.set("utm_medium", medium);
    u.searchParams.set("utm_campaign", campaign);
    utm = u.toString();
  } catch {}
  function download() {
    const blob = new Blob(
      [
        checks
          .map((c, i) => `${checked.includes(i) ? "[x]" : "[ ]"} ${c}`)
          .join("\n"),
      ],
      { type: "text/plain;charset=utf-8" },
    );
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = "checklist-seo-geo.txt";
    a.click();
    URL.revokeObjectURL(u);
  }
  return (
    <div className="lab">
      <div className="tool-tabs" aria-label="Choisir un outil">
        {[
          ["Aperçu Google", ScanText],
          ["Simulateur", Calculator],
          ["Liens UTM", Link2],
          ["Checklist", Check],
        ].map(([label, Icon], i) => {
          const I = Icon as typeof Check;
          return (
            <button
              key={i}
              aria-pressed={tab === i}
              className={tab === i ? "active" : ""}
              onClick={() => setTab(i)}
            >
              <I size={17} />
              {label as string}
            </button>
          );
        })}
      </div>
      <div className="tool-body">
        {tab === 0 ? (
          <div className="tool-grid">
            <div>
              <span className="mono green">01 / SERP PREVIEW</span>
              <h3>Travaillez votre première impression.</h3>
              <label>
                Titre de la page <span>{title.length} caractères</span>
                <input
                  value={title}
                  maxLength={200}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                Description <span>{description.length} caractères</span>
                <textarea
                  value={description}
                  maxLength={500}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <p className="fine">
                Aperçu indicatif. Google peut réécrire ou tronquer le titre et
                la description selon la requête et l’écran.
              </p>
            </div>
            <div className="serp-wrap">
              <span className="mono muted">APERÇU DU RÉSULTAT</span>
              <div className="serp">
                <div className="serp-site">
                  <span>i</span>
                  <div>
                    Votre site<small>https://www.exemple.fr</small>
                  </div>
                </div>
                <h4>{title || "Titre de votre page"}</h4>
                <p>{description || "Votre description apparaîtra ici."}</p>
              </div>
              <span className="mono muted">
                VOS TEXTES RESTENT DANS VOTRE NAVIGATEUR.
              </span>
            </div>
          </div>
        ) : tab === 1 ? (
          <div className="tool-grid">
            <div>
              <span className="mono green">02 / SIMULATION</span>
              <h3>Reliez trafic et valeur.</h3>
              <label>
                Visites mensuelles : {visits.toLocaleString("fr-FR")}
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="100"
                  value={visits}
                  onChange={(e) => setVisits(+e.target.value)}
                />
              </label>
              <label>
                Taux de conversion (%)
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={rate}
                  onChange={(e) =>
                    setRate(Math.min(100, Math.max(0, +e.target.value)))
                  }
                />
              </label>
              <label>
                Valeur moyenne par conversion (€)
                <input
                  type="number"
                  min="0"
                  max="1000000"
                  value={value}
                  onChange={(e) =>
                    setValue(Math.min(1000000, Math.max(0, +e.target.value)))
                  }
                />
              </label>
            </div>
            <div className="simulation-result" aria-live="polite">
              <span className="mono">SCÉNARIO MENSUEL</span>
              <strong>
                {Math.round(((visits * rate) / 100) * value).toLocaleString(
                  "fr-FR",
                )}{" "}
                <span>€</span>
              </strong>
              <p>
                {((visits * rate) / 100).toLocaleString("fr-FR")} conversions
                estimées
              </p>
              <p className="fine">
                Simulation arithmétique, sans prévision de trafic ni garantie de
                revenus. Formule : visites × taux de conversion × valeur. Coûts
                non déduits.
              </p>
            </div>
          </div>
        ) : tab === 2 ? (
          <div className="tool-grid">
            <div>
              <span className="mono green">03 / CAMPAIGN BUILDER</span>
              <h3>Des campagnes bien identifiées.</h3>
              <label>
                URL de destination
                <input
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setCopied(false);
                  }}
                />
              </label>
              {[
                ["Source", source, setSource],
                ["Support", medium, setMedium],
                ["Campagne", campaign, setCampaign],
              ].map(([l, v, s]) => (
                <label key={l as string}>
                  {l as string}
                  <input
                    value={v as string}
                    onChange={(e) => {
                      (s as (v: string) => void)(e.target.value);
                      setCopied(false);
                    }}
                  />
                </label>
              ))}
            </div>
            <div className="utm-result">
              <span className="mono">VOTRE LIEN BALISÉ</span>
              <output>
                {utm || "Saisissez une URL http ou https valide."}
              </output>
              <button
                className="button"
                disabled={!utm}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(utm);
                    setCopied(true);
                    setCopyError(false);
                  } catch {
                    setCopied(false);
                    setCopyError(true);
                  }
                }}
              >
                {copied ? "Copié !" : "Copier le lien"}
              </button>
              {copyError && (
                <p role="status" className="fine">
                  La copie automatique est indisponible. Sélectionnez le lien
                  ci-dessus pour le copier.
                </p>
              )}
              <p className="fine">
                Réservez les UTM aux campagnes externes. N’y placez jamais de
                données personnelles.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <span className="mono green">04 / AUTOÉVALUATION</span>
            <h3>Vos fondamentaux, point par point.</h3>
            <p>
              Cette checklist repose sur vos réponses ; elle n’effectue pas de
              crawl de votre site.
            </p>
            <div className="checklist">
              {checks.map((c, i) => (
                <label key={c}>
                  <input
                    type="checkbox"
                    checked={checked.includes(i)}
                    onChange={() =>
                      setChecked(
                        checked.includes(i)
                          ? checked.filter((x) => x !== i)
                          : [...checked, i],
                      )
                    }
                  />
                  {c}
                </label>
              ))}
            </div>
            <div className="check-footer">
              <span aria-live="polite">
                {checked.length} / {checks.length} points vérifiés
              </span>
              <button className="button secondary" onClick={download}>
                <Download size={16} />
                Exporter ma checklist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
