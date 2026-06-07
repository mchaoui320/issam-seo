"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

const nodes = [
  { id: "entity", label: "Entités", x: 50, y: 18, tone: "cyan" },
  { id: "intent", label: "Intentions", x: 24, y: 34, tone: "blue" },
  { id: "pages", label: "Pages", x: 68, y: 36, tone: "pink" },
  { id: "geo", label: "GEO", x: 43, y: 55, tone: "mauve" },
  { id: "links", label: "Maillage", x: 18, y: 68, tone: "cyan" },
  { id: "local", label: "Local", x: 77, y: 68, tone: "blue" },
  { id: "measure", label: "Mesure", x: 52, y: 82, tone: "pink" },
];

const edges = [
  ["entity", "intent"],
  ["entity", "pages"],
  ["intent", "geo"],
  ["pages", "geo"],
  ["geo", "links"],
  ["geo", "local"],
  ["links", "measure"],
  ["local", "measure"],
  ["intent", "links"],
  ["pages", "local"],
];

const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

export function FutureSearchHeroVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="future-hero-visual" aria-hidden="true" data-static={reducedMotion ? "true" : "false"}>
      <div className="future-hero-visual__field" />
      <svg className="future-hero-visual__graph" viewBox="0 0 100 100" role="img">
        <defs>
          <linearGradient id="future-edge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="52%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--pink)" />
          </linearGradient>
          <filter id="future-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([from, to], index) => {
          const a = nodeById[from];
          const b = nodeById[to];
          return (
            <line
              className="future-hero-visual__edge"
              key={`${from}-${to}`}
              style={{ animationDelay: `${index * 0.34}s` }}
              x1={a.x}
              x2={b.x}
              y1={a.y}
              y2={b.y}
            />
          );
        })}

        {nodes.map((node, index) => (
          <g
            className={`future-hero-visual__node future-hero-visual__node--${node.tone}`}
            key={node.id}
            style={{ animationDelay: `${index * 0.22}s` }}
            transform={`translate(${node.x} ${node.y})`}
          >
            <circle className="future-hero-visual__node-halo" r="7.6" />
            <circle className="future-hero-visual__node-core" r="3.6" />
          </g>
        ))}
      </svg>

      {nodes.map((node, index) => (
        <div
          className={`future-hero-visual__tag future-hero-visual__tag--${node.tone}`}
          key={node.id}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDelay: `${index * 0.28 + 0.4}s`,
          }}
        >
          {node.label}
        </div>
      ))}

      <div className="future-hero-visual__panel future-hero-visual__panel--top">
        <span>Search graph</span>
        <strong>Architecture active</strong>
      </div>
      <div className="future-hero-visual__panel future-hero-visual__panel--bottom">
        <span>Answer engines</span>
        <strong>Sources structurées</strong>
      </div>
    </div>
  );
}
