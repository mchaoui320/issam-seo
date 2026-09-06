"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Search,
  Sparkles,
  ChartNoAxesCombined,
} from "lucide-react";
const modes = [
  {
    name: "SEO",
    label: "Être trouvé.",
    desc: "Technique · Contenu · Autorité",
    icon: Search,
    detail: "Des pages accessibles qui répondent aux intentions de recherche.",
  },
  {
    name: "GEO",
    label: "Devenir une source.",
    desc: "Entités · Réponses · Citations",
    icon: Sparkles,
    detail:
      "Une expertise claire et des contenus vérifiables pour les moteurs IA.",
  },
  {
    name: "DATA",
    label: "Décider avec précision.",
    desc: "Mesure · Analyse · Conversion",
    icon: ChartNoAxesCombined,
    detail: "Des événements fiables pour relier acquisition et résultats.",
  },
];
export function Orbit() {
  const [active, setActive] = useState(0);
  const mode = modes[active];
  return (
    <div className="orbit-panel">
      <div className="orbit-top mono">
        <span>
          <i className="status-dot" /> VISIBILITY SYSTEM
        </span>
        <span>01 — 03</span>
      </div>
      <div className="orbit-stage">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="orbit-ring ring-three" />
        <div className="orbit-axis" />
        <div className="orbit-core">
          <span className="mono">VOTRE MARQUE</span>
          <strong>
            {mode.name}
            <span>↗</span>
          </strong>
          <small>{mode.label}</small>
        </div>
        {modes.map((m, i) => (
          <button
            key={m.name}
            className={`orbit-node node-${i} ${active === i ? "selected" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <m.icon size={18} />
            {m.name}
            <ArrowUpRight size={12} />
          </button>
        ))}
        <span className="orbit-coordinate mono">
          43°17′ N<br />
          05°22′ E
        </span>
        <span className="orbit-caption mono">
          UN ÉCOSYSTÈME.
          <br />
          TROIS LEVIERS.
        </span>
      </div>
      <div className="orbit-bottom" aria-live="polite">
        <div>
          <span className="mono green">{mode.desc}</span>
          <p>{mode.detail}</p>
        </div>
        <span className="orbit-index">0{active + 1}</span>
      </div>
    </div>
  );
}
