"use client";

const lanes = [
  {
    label: "Signals",
    items: ["Mots-clés", "Pages", "Erreurs", "Entités", "Local"],
  },
  {
    label: "Prioritization",
    items: ["Impact", "Effort", "Risque", "Dépendances"],
  },
  {
    label: "Architecture",
    items: ["Silos", "Clusters", "Intentions", "Pages piliers"],
  },
  {
    label: "Internal Linking",
    items: ["Ancres", "Profondeur", "Autorité", "Parcours"],
  },
  {
    label: "GEO Layer",
    items: ["Entités", "Sources", "FAQ", "Réponses"],
  },
  {
    label: "Measurement",
    items: ["Impressions", "Clics", "Leads", "Conversions"],
  },
];

export function SeoFlowEngine({ step }: { step: number }) {
  return (
    <div className="seo-flow-engine" aria-hidden="true">
      <div className="seo-flow-engine__core">
        <span>SEO Flow Engine</span>
        <strong>{lanes[step]?.label ?? lanes[0].label}</strong>
      </div>
      <svg className="seo-flow-engine__paths" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="flow-path-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="50%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--pink)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const angle = (index / 6) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 36;
          const y = 50 + Math.sin(angle) * 34;
          return (
            <path
              className={`seo-flow-engine__path${index <= step ? " is-active" : ""}`}
              d={`M 50 50 C ${50 + Math.cos(angle) * 14} ${50 + Math.sin(angle) * 12}, ${50 + Math.cos(angle) * 28} ${50 + Math.sin(angle) * 24}, ${x} ${y}`}
              key={index}
            />
          );
        })}
      </svg>
      {lanes.map((lane, index) => {
        const angle = (index / lanes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 36;
        const y = 50 + Math.sin(angle) * 34;
        const active = index <= step;

        return (
          <div
            className={`seo-flow-engine__lane${active ? " is-active" : ""}`}
            key={lane.label}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{lane.label}</strong>
            <div>
              {lane.items.map((item) => (
                <em key={item}>{item}</em>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
