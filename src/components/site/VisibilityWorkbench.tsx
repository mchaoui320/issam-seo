"use client";

import { useMemo, useState } from "react";
import {
  Bot,
  Check,
  Clipboard,
  Download,
  MapPinned,
  Radar,
  RotateCcw,
} from "lucide-react";

const dimensions = [
  ["Pages de décision", "Services, secteurs et cas d’usage distincts"],
  ["Preuves propriétaires", "Cas, données, captures ou méthode observable"],
  ["Empreinte locale", "GBP, zones servies, avis et pages locales utiles"],
  ["Entité cohérente", "Nom, offre, auteurs et informations concordantes"],
  ["Sources tierces", "Presse, partenaires, annuaires et citations fiables"],
  ["Réponses expertes", "Contenus précis qui dépassent la synthèse générique"],
  ["Mesure SEO + IA", "Conversions, prompts stables et trafic référent"],
  ["Architecture interne", "Relations explicites entre services, guides et preuves"],
] as const;

const engines = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

function saveFile(name: string, content: string, type = "text/plain") {
  const blob = new Blob([content], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="lab-field">
      <span>{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function VisibilityWorkbench() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState("");
  const [brand, setBrand] = useState("Maison Mistral");
  const [offer, setOffer] = useState("mobilier durable fabriqué en France");
  const [city, setCity] = useState("Lyon");
  const [rivals, setRivals] = useState("Tikamoon, Made in Meubles");
  const [names, setNames] = useState(["Maison Mistral", "Tikamoon", "Made in Meubles"]);
  const [matrix, setMatrix] = useState<number[][]>(
    dimensions.map(() => [0, 0, 0]),
  );
  const [localService, setLocalService] = useState("rénovation énergétique");
  const [localAudience, setLocalAudience] = useState("propriétaires de maisons anciennes");
  const [localZones, setLocalZones] = useState("Villeurbanne, Bron, Caluire-et-Cuire");
  const [localProof, setLocalProof] = useState("");
  const [robots, setRobots] = useState(
    "User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /",
  );
  const [training, setTraining] = useState(false);

  const rivalList = rivals
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const prompts = useMemo(
    () => [
      ["DÉCOUVERTE", `Quelles entreprises proposent ${offer} à ${city} ?`],
      ["DÉCOUVERTE", `Quelles solutions de ${offer} conviennent à ${localAudience} ?`],
      ["COMPARAISON", `Compare ${brand} avec ${rivalList[0] || "ses principaux concurrents"}.`],
      ["COMPARAISON", `Quelles alternatives à ${brand} pour ${offer} ?`],
      ["PREUVE", `Que sait-on de la méthode et des résultats de ${brand} ?`],
      ["PREUVE", `Quelles sources permettent de vérifier l’expertise de ${brand} ?`],
      ["LOCAL", `Recommande une entreprise de ${offer} disponible à ${city}.`],
      ["LOCAL", `Quelles marques de ${offer} livrent ou interviennent autour de ${city} ?`],
      ["PROBLÈME", `Quels critères permettent d’évaluer la qualité de ${offer} ?`],
      ["PROBLÈME", `Quels risques ou compromis faut-il connaître avant d’acheter ${offer} ?`],
      ["DÉCISION", `Quels critères utiliser pour choisir une offre de ${offer} ?`],
      ["DÉCISION", `Prépare une shortlist de marques pour ${offer} à ${city}, avec leurs différences.`],
    ],
    [brand, city, localAudience, offer, rivalList],
  );

  const promptMarkdown = `# Panel de prompts — ${brand}\n\nContexte : ${offer}, ${city}\nConcurrents observés : ${rivalList.join(", ") || "à renseigner"}\nCadence conseillée : même panel, même langue et même contexte, une fois par mois.\n\n${prompts
    .map(([type, prompt], index) => `${index + 1}. [${type}] ${prompt}`)
    .join("\n")}\n\n## Grille de relevé\n\nPour chaque moteur (${engines.join(", ")}), relever : marque mentionnée, position dans la réponse, URL citée, tonalité, concurrents présents, date et capture.\n`;

  const scores = names.map((_, column) =>
    Math.round(
      (matrix.reduce((total, row) => total + row[column], 0) /
        (dimensions.length * 2)) *
        100,
    ),
  );
  const gaps = dimensions
    .map(([label, detail], row) => ({
      label,
      detail,
      delta: Math.max(matrix[row][1], matrix[row][2]) - matrix[row][0],
    }))
    .filter((gap) => gap.delta > 0)
    .sort((a, b) => b.delta - a.delta);

  const matrixCsv = [
    ["Dimension", ...names, "Action prioritaire"].join(";"),
    ...dimensions.map(([label, detail], row) =>
      [
        label,
        ...matrix[row].map((value) => ["Absent", "Partiel", "Solide"][value]),
        matrix[row][0] < Math.max(matrix[row][1], matrix[row][2]) ? detail : "Maintenir",
      ].join(";"),
    ),
  ].join("\n");

  const localBrief = `# Brief local — ${localService} à ${city}\n\n## Angle\nUne page de décision pour ${localAudience}, centrée sur les réalités de ${city} et les zones réellement servies : ${localZones}.\n\n## Proposition de titre\n${localService.charAt(0).toUpperCase() + localService.slice(1)} à ${city} — diagnostic, priorités et mesure\n\n## H1\n${localService.charAt(0).toUpperCase() + localService.slice(1)} à ${city} : transformer la visibilité locale en demandes qualifiées\n\n## Structure recommandée\n1. Situation du marché et problèmes propres à ${city}\n2. Services et cas d’usage pour ${localAudience}\n3. Méthode : diagnostic, territoire, exécution, mesure\n4. Zones réellement couvertes : ${localZones}\n5. Preuves locales et éléments vérifiables\n6. Livrables, calendrier et façon de travailler\n7. Questions fréquentes propres au marché local\n8. Appel à l’action avec prochaine étape précise\n\n## Preuve fournie\n${localProof || "À documenter : cas, connaissance du marché, intervention, partenaire ou donnée de première main. Ne pas inventer d’adresse ni de client."}\n\n## Questions à traiter\n- Quel est le niveau de concurrence sur ${city} ?\n- Intervenez-vous dans ${localZones} ?\n- Quels signaux locaux seront travaillés ?\n- Comment les contacts et appels seront-ils mesurés ?\n- Quelle différence entre une page locale utile et une page dupliquée ?\n\n## Contrôle avant publication\n- La page contient au moins une information impossible à répliquer sur une autre ville.\n- La zone est réellement servie et aucune adresse fictive n’est affichée.\n- Les preuves sont attribuées, datées ou expliquées.\n- Le contenu visible correspond au balisage structuré.\n- Les liens internes relient service, preuve, guide et contact.\n`;

  function crawlerState(agent: string) {
    const blocks = robots
      .split(/\n\s*\n/)
      .filter((block) =>
        new RegExp(`user-agent:\\s*(\\*|${agent})`, "i").test(block),
      );
    const exact = blocks.find((block) =>
      new RegExp(`user-agent:\\s*${agent}`, "i").test(block),
    );
    const block = exact || blocks[0] || "";
    if (/disallow:\s*\/\s*$/im.test(block)) return "Bloqué";
    if (/allow:\s*\/\s*$/im.test(block)) return "Autorisé";
    return "À vérifier";
  }

  const policy = `# Recherche ChatGPT : autorisée\nUser-agent: OAI-SearchBot\nAllow: /\n\n# Entraînement des modèles : ${training ? "autorisé" : "refusé"}\nUser-agent: GPTBot\n${training ? "Allow" : "Disallow"}: /\n`;

  async function copy(label: string, content: string) {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  }

  const tabs = [
    ["Panel LLM", Radar],
    ["Matrice rivale", Clipboard],
    ["Brief local", MapPinned],
    ["Robots IA", Bot],
  ] as const;

  return (
    <section className="workbench" aria-label="Laboratoire de visibilité SEO et IA">
      <div className="workbench-tabs" role="tablist" aria-label="Outils du laboratoire">
        {tabs.map(([label, Icon], index) => (
          <button
            type="button"
            role="tab"
            aria-selected={tab === index}
            aria-controls={`workbench-panel-${index}`}
            id={`workbench-tab-${index}`}
            onClick={() => setTab(index)}
            key={label}
          >
            <span>0{index + 1}</span>
            <Icon size={19} />
            {label}
          </button>
        ))}
      </div>

      <div
        className="workbench-panel"
        role="tabpanel"
        id={`workbench-panel-${tab}`}
        aria-labelledby={`workbench-tab-${tab}`}
      >
        {tab === 0 && (
          <div className="lab-layout">
            <div className="lab-controls">
              <p className="atlas-label">PROTOCOLE / 12 REQUÊTES</p>
              <h2>Construisez un panel stable, puis observez les réponses.</h2>
              <p>
                Les moteurs varient d’une session à l’autre. Ce protocole ne
                prétend pas les interroger en direct : il crée une base répétable
                pour relever mentions, citations et concurrents dans le temps.
              </p>
              <Field label="Marque" value={brand} onChange={setBrand} />
              <Field label="Métier ou offre" value={offer} onChange={setOffer} />
              <Field label="Ville ou marché" value={city} onChange={setCity} />
              <Field
                label="Concurrents, séparés par une virgule"
                value={rivals}
                onChange={setRivals}
              />
              <div className="lab-actions">
                <button type="button" onClick={() => copy("prompts", promptMarkdown)}>
                  <Clipboard size={16} /> {copied === "prompts" ? "Copié" : "Copier"}
                </button>
                <button
                  type="button"
                  onClick={() => saveFile("panel-prompts-llm.md", promptMarkdown)}
                >
                  <Download size={16} /> Exporter .md
                </button>
              </div>
            </div>
            <div className="prompt-sheet" aria-live="polite">
              <div className="prompt-sheet-head">
                <span>PANEL / {brand || "VOTRE MARQUE"}</span>
                <span>{prompts.length} PROMPTS · 4 INTENTIONS</span>
              </div>
              <ol>
                {prompts.map(([type, prompt]) => (
                  <li key={prompt}>
                    <small>{type}</small>
                    <p>{prompt}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="matrix-lab">
            <div className="matrix-intro">
              <div>
                <p className="atlas-label">ÉCARTS / PREUVES OBSERVABLES</p>
                <h2>Comparez la profondeur, pas le nombre de mots.</h2>
              </div>
              <p>
                Cliquez sur chaque cellule : absent, partiel, solide. Le score
                est une simple couverture sur 16 points, calculée à partir de
                vos observations — jamais depuis une métrique cachée.
              </p>
            </div>
            <div className="matrix-scroll">
              <table className="rival-matrix">
                <thead>
                  <tr>
                    <th>Signal comparé</th>
                    {names.map((name, column) => (
                      <th key={column}>
                        <input
                          aria-label={`Nom de la marque ${column + 1}`}
                          value={name}
                          onChange={(event) =>
                            setNames(
                              names.map((item, itemColumn) =>
                                itemColumn === column ? event.target.value : item,
                              ),
                            )
                          }
                        />
                        <strong>{scores[column]}%</strong>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dimensions.map(([label, detail], row) => (
                    <tr key={label}>
                      <th scope="row">
                        {label}<small>{detail}</small>
                      </th>
                      {matrix[row].map((value, column) => (
                        <td key={column}>
                          <button
                            type="button"
                            data-value={value}
                            aria-label={`${names[column]}, ${label} : ${["absent", "partiel", "solide"][value]}. Cliquer pour changer.`}
                            onClick={() =>
                              setMatrix(
                                matrix.map((line, lineIndex) =>
                                  lineIndex === row
                                    ? line.map((cell, cellIndex) =>
                                        cellIndex === column ? (cell + 1) % 3 : cell,
                                      )
                                    : line,
                                ),
                              )
                            }
                          >
                            {value === 0 ? "—" : value === 1 ? "◐" : "●"}
                            <span>{["Absent", "Partiel", "Solide"][value]}</span>
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="matrix-result" aria-live="polite">
              <div>
                <span className="atlas-label">PRIORITÉS DÉTECTÉES</span>
                {gaps.length ? (
                  <ol>
                    {gaps.slice(0, 4).map((gap) => (
                      <li key={gap.label}>
                        <strong>{gap.label}</strong>
                        <span>{gap.detail}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p>Renseignez les cellules pour faire apparaître les écarts.</p>
                )}
              </div>
              <div className="lab-actions">
                <button type="button" onClick={() => saveFile("matrice-concurrents.csv", matrixCsv, "text/csv")}>
                  <Download size={16} /> Exporter .csv
                </button>
                <button type="button" onClick={() => setMatrix(dimensions.map(() => [0, 0, 0]))}>
                  <RotateCcw size={16} /> Réinitialiser
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === 2 && (
          <div className="lab-layout">
            <div className="lab-controls">
              <p className="atlas-label">LOCAL / BRIEF ANTI-DUPLICATION</p>
              <h2>Une page locale doit prouver sa raison d’exister.</h2>
              <p>
                Le générateur impose une ville réellement servie, une audience,
                des zones et une preuve. Le résultat reste un brief à enrichir,
                pas une page prête à publier aveuglément.
              </p>
              <Field label="Ville principale" value={city} onChange={setCity} />
              <Field label="Service" value={localService} onChange={setLocalService} />
              <Field label="Audience" value={localAudience} onChange={setLocalAudience} />
              <Field label="Zones réellement servies" value={localZones} onChange={setLocalZones} />
              <label className="lab-field">
                <span>Preuve locale disponible</span>
                <textarea
                  value={localProof}
                  placeholder="Intervention, cas, partenaire, donnée ou connaissance de terrain vérifiable…"
                  onChange={(event) => setLocalProof(event.target.value)}
                />
              </label>
              <div className="lab-actions">
                <button type="button" onClick={() => copy("brief", localBrief)}>
                  <Clipboard size={16} /> {copied === "brief" ? "Copié" : "Copier"}
                </button>
                <button type="button" onClick={() => saveFile(`brief-local-${city.toLowerCase().replace(/\s+/g, "-")}.md`, localBrief)}>
                  <Download size={16} /> Exporter .md
                </button>
              </div>
            </div>
            <div className="brief-preview">
              <div className="brief-preview__meta">
                <span>BRIEF / {city.toUpperCase()}</span><span>VERSION 01</span>
              </div>
              <h3>{localService} à {city}</h3>
              <p>Pour {localAudience} · zones couvertes : {localZones}</p>
              {["Situation du marché", "Services et cas d’usage", "Preuves locales", "Méthode et livrables", "FAQ de décision"].map((section, index) => (
                <div className="brief-line" key={section}>
                  <span>0{index + 1}</span><strong>{section}</strong><Check size={16} />
                </div>
              ))}
              <aside className={localProof ? "has-proof" : ""}>
                <small>POINT DE CONTRÔLE</small>
                <strong>{localProof ? "Preuve renseignée" : "Preuve locale manquante"}</strong>
                <p>{localProof || "Ajoutez un élément vérifiable avant de produire la page."}</p>
              </aside>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div className="lab-layout crawler-lab">
            <div className="lab-controls">
              <p className="atlas-label">CRAWL / POLITIQUE IA</p>
              <h2>Distinguez recherche ChatGPT et entraînement.</h2>
              <p>
                OAI-SearchBot sert à faire apparaître des pages dans la recherche
                ChatGPT. GPTBot concerne l’entraînement. Collez un robots.txt pour
                lire les règles simples, puis validez la politique avec votre équipe.
              </p>
              <label className="lab-field">
                <span>Contenu de robots.txt</span>
                <textarea className="robots-input" value={robots} onChange={(event) => setRobots(event.target.value)} />
              </label>
              <label className="training-switch">
                <input type="checkbox" checked={training} onChange={(event) => setTraining(event.target.checked)} />
                <span>Autoriser aussi GPTBot pour l’entraînement</span>
              </label>
              <div className="lab-actions">
                <button type="button" onClick={() => copy("robots", policy)}>
                  <Clipboard size={16} /> {copied === "robots" ? "Copié" : "Copier la politique"}
                </button>
              </div>
            </div>
            <div className="crawler-report">
              <div className="crawler-report__head"><span>LECTURE INDICATIVE</span><span>RÈGLES RACINE</span></div>
              {["OAI-SearchBot", "GPTBot", "Googlebot", "PerplexityBot"].map((agent) => {
                const state = crawlerState(agent);
                return (
                  <div className="crawler-row" key={agent}>
                    <Bot size={19} /><strong>{agent}</strong><span data-state={state}>{state}</span>
                  </div>
                );
              })}
              <pre>{policy}</pre>
              <p className="fine">
                Analyse volontairement limitée aux règles Allow/Disallow à la
                racine. Les groupes complexes, jokers et conflits doivent être
                vérifiés dans un outil technique dédié.
              </p>
              <div className="crawler-links">
                <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noreferrer">Documentation officielle OpenAI ↗</a>
                <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noreferrer">Guide IA de Google Search ↗</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
