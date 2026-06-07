"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function LocalSignalMap() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="local-map" aria-hidden="true" data-static={reducedMotion ? "true" : "false"}>
      <svg className="local-map__svg" viewBox="0 0 100 64">
        <defs>
          <linearGradient id="local-flow-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="48%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--mauve)" />
          </linearGradient>
        </defs>
        <path className="local-map__grid" d="M8 50 C22 36 28 38 40 24 S68 18 88 10" />
        <path className="local-map__grid local-map__grid--soft" d="M12 58 C28 48 35 51 48 36 S72 32 92 22" />
        <path className="local-map__flow" d="M22 46 C34 31 48 33 59 24 S75 14 84 18" />
        <circle className="local-map__pulse local-map__pulse--marseille" cx="22" cy="46" r="6" />
        <circle className="local-map__pulse local-map__pulse--paris" cx="84" cy="18" r="6" />
        <circle className="local-map__core" cx="22" cy="46" r="3" />
        <circle className="local-map__core local-map__core--mauve" cx="84" cy="18" r="3" />
        {[18, 30, 42, 57, 69, 78].map((x, index) => (
          <circle
            className="local-map__point"
            cx={x}
            cy={index % 2 ? 24 + index : 42 - index}
            key={x}
            r="1.4"
            style={{ animationDelay: `${index * 0.24}s` }}
          />
        ))}
      </svg>
      <span className="local-map__tag local-map__tag--marseille">Marseille · PACA</span>
      <span className="local-map__tag local-map__tag--paris">Paris · IDF</span>
      <span className="local-map__tag local-map__tag--national">National · distance</span>
    </div>
  );
}
