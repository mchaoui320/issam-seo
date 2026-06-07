"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

const entities = [
  { label: "Marque", x: 50, y: 28, tone: "blue" },
  { label: "Services", x: 27, y: 44, tone: "cyan" },
  { label: "Expertise", x: 70, y: 46, tone: "mauve" },
  { label: "Sources", x: 38, y: 68, tone: "pink" },
  { label: "Réponses", x: 63, y: 72, tone: "cyan" },
];

const links = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [1, 4],
];

export function GeoEntityPulse() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="geo-pulse" aria-hidden="true" data-static={reducedMotion ? "true" : "false"}>
      <svg viewBox="0 0 100 100" className="geo-pulse__svg">
        <defs>
          <linearGradient id="geo-link-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="100%" stopColor="var(--mauve)" />
          </linearGradient>
        </defs>
        {links.map(([a, b], index) => (
          <path
            className="geo-pulse__link"
            d={`M ${entities[a].x} ${entities[a].y} C 50 ${entities[a].y}, 50 ${entities[b].y}, ${entities[b].x} ${entities[b].y}`}
            key={`${a}-${b}`}
            style={{ animationDelay: `${index * 0.28}s` }}
          />
        ))}
        {entities.map((entity, index) => (
          <g
            className={`geo-pulse__entity geo-pulse__entity--${entity.tone}`}
            key={entity.label}
            style={{ animationDelay: `${index * 0.24}s` }}
            transform={`translate(${entity.x} ${entity.y})`}
          >
            <circle className="geo-pulse__halo" r="8" />
            <circle className="geo-pulse__dot" r="3.2" />
          </g>
        ))}
      </svg>
      {entities.map((entity, index) => (
        <span
          className={`geo-pulse__label geo-pulse__label--${entity.tone}`}
          key={entity.label}
          style={{ left: `${entity.x}%`, top: `${entity.y}%`, animationDelay: `${index * 0.18}s` }}
        >
          {entity.label}
        </span>
      ))}
      <div className="geo-pulse__answer">
        <span>Réponse structurée</span>
        <p>Entités, citations et intentions reliées dans un signal lisible.</p>
      </div>
    </div>
  );
}
