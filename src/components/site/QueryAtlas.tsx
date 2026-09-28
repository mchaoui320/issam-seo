"use client";

import { useState } from "react";

const layers = [
  {
    id: "search",
    label: "GOOGLE",
    title: "Être trouvé",
    lead: "Capter une demande déjà formulée.",
    queries: [
      "logiciel planning chantier",
      "mutuelle TNS comparatif",
      "rénovation appartement Lyon",
      "chaussures trail femme",
    ],
    output: "Architecture · pages services · contenus · maillage",
  },
  {
    id: "answers",
    label: "LLM / GEO",
    title: "Être cité",
    lead: "Devenir une source que l’assistant peut vérifier.",
    queries: [
      "quel CRM pour une PME industrielle ?",
      "compare Sellsy, Axonaut et HubSpot",
      "quelle banque pro pour un restaurant ?",
      "solution SIRH conforme en France",
    ],
    output: "Entités · réponses autonomes · preuves · citations",
  },
  {
    id: "local",
    label: "MAPS / LOCAL",
    title: "Être choisi",
    lead: "Transformer la proximité en préférence.",
    queries: [
      "avocat droit du travail Nantes",
      "restaurant végétarien Marseille",
      "architecte intérieur Lille",
      "dentiste urgent près de moi",
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
