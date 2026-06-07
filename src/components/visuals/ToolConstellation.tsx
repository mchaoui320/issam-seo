"use client";

import { useState } from "react";
import { Activity, BarChart3, Bot, FileSearch, MapPin, PenLine, Radar } from "lucide-react";

const modules = [
  { label: "Crawl", usage: "Explorer la structure, les statuts, la profondeur et les freins techniques.", x: 20, y: 26, tone: "cyan", icon: FileSearch },
  { label: "Data", usage: "Croiser Search Console, analytics, logs et signaux de conversion.", x: 50, y: 16, tone: "blue", icon: BarChart3 },
  { label: "Keywords", usage: "Cartographier les intentions, volumes utiles et requêtes à potentiel.", x: 78, y: 30, tone: "pink", icon: Radar },
  { label: "Content", usage: "Transformer les intentions en briefs, clusters et pages éditoriales.", x: 28, y: 58, tone: "mauve", icon: PenLine },
  { label: "Local", usage: "Piloter les signaux géographiques, zones de chalandise et pages locales.", x: 63, y: 54, tone: "cyan", icon: MapPin },
  { label: "GEO", usage: "Structurer entités, sources, citations et réponses pour les moteurs IA.", x: 86, y: 66, tone: "mauve", icon: Bot },
  { label: "Tracking", usage: "Mesurer impressions, clics, leads et conversions sans faux raccourcis.", x: 47, y: 83, tone: "blue", icon: Activity },
];

export function ToolConstellation() {
  const [active, setActive] = useState(modules[0]);

  return (
    <div className="tool-constellation">
      <svg className="tool-constellation__links" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="tool-link-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="100%" stopColor="var(--pink)" />
          </linearGradient>
        </defs>
        {modules.slice(1).map((module, index) => (
          <path
            className="tool-constellation__link"
            d={`M ${modules[0].x} ${modules[0].y} C 44 42, 56 44, ${module.x} ${module.y}`}
            key={module.label}
            style={{ animationDelay: `${index * 0.18}s` }}
          />
        ))}
      </svg>

      {modules.map((module) => {
        const Icon = module.icon;
        const isActive = active.label === module.label;

        return (
          <button
            className={`tool-constellation__module tool-constellation__module--${module.tone}${isActive ? " is-active" : ""}`}
            key={module.label}
            onFocus={() => setActive(module)}
            onMouseEnter={() => setActive(module)}
            style={{ left: `${module.x}%`, top: `${module.y}%` }}
            type="button"
          >
            <Icon aria-hidden="true" />
            <span>{module.label}</span>
          </button>
        );
      })}

      <div className="tool-constellation__readout" aria-live="polite">
        <span>{active.label}</span>
        <p>{active.usage}</p>
      </div>
    </div>
  );
}
