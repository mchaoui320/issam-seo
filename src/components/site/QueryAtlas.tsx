"use client";

import { useState } from "react";

const layers = [
  {
    id: "search",
    label: "GOOGLE",
    title: "Être trouvé",
    lead: "Capter une demande déjà formulée.",
    queries: [
      "consultant SEO",
      "audit SEO technique",
      "SEO local",
      "refonte SEO",
    ],
    output: "Architecture · pages services · contenus · maillage",
  },
  {
    id: "answers",
    label: "LLM / GEO",
    title: "Être cité",
    lead: "Devenir une source que l’assistant peut vérifier.",
    queries: [
      "meilleur expert GEO",
      "apparaître dans ChatGPT",
      "référencement Claude",
      "audit LLM",
    ],
    output: "Entités · réponses autonomes · preuves · citations",
  },
  {
    id: "local",
    label: "MAPS / LOCAL",
    title: "Être choisi",
    lead: "Transformer la proximité en préférence.",
    queries: [
      "consultant SEO Marseille",
      "expert SEO Paris",
      "agence GEO Lyon",
      "SEO près de moi",
    ],
    output: "Google Business Profile · zones · avis · conversion",
  },
];

export function QueryAtlas() {
  const [active, setActive] = useState(0);
  const layer = layers[active];

  return (
    <div className="query-atlas">
      <div
        className="query-atlas__tabs"
        role="tablist"
        aria-label="Canaux de visibilité"
      >
        {layers.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="query-atlas__content" role="tabpanel">
        <div>
          <p className="atlas-label">{layer.label}</p>
          <h3>{layer.title}</h3>
          <p>{layer.lead}</p>
        </div>
        <div className="query-atlas__queries">
          {layer.queries.map((query, index) => (
            <span key={query}>
              <small>Q{index + 1}</small>
              {query}
            </span>
          ))}
        </div>
        <footer>
          <span>SYSTÈME PRODUIT</span>
          <strong>{layer.output}</strong>
        </footer>
      </div>
    </div>
  );
}
