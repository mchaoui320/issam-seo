"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "Technique",  angle: 0,   color: "#00E87A" },
  { label: "Contenu",    angle: 60,  color: "#00D4FF" },
  { label: "Autorité",   angle: 120, color: "#FF6B4A" },
  { label: "Local",      angle: 180, color: "#00E87A" },
  { label: "GEO / IA",   angle: 240, color: "#FFB547" },
  { label: "Conversion", angle: 300, color: "#00D4FF" },
];

const R1 = 120; // orbit 1
const R2 = 75;  // orbit 2

function toXY(angle: number, r: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
}

export function SeoOrbitMap() {
  const reduced = useReducedMotion();
  const cx = 210;
  const cy = 210;

  return (
    <div style={{ position: "relative" }}>
      {/* Glow derrière */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(0,232,122,0.08) 0%, transparent 65%)",
        pointerEvents: "none", borderRadius: 24,
      }} />

      <div
        className="card"
        style={{
          padding: 0,
          background: "var(--surface)",
          overflow: "hidden",
          border: "1px solid rgba(0,232,122,0.15)",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "14px 20px",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "var(--surface-2)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-soft)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Cartographie SEO
            </span>
          </div>
          <span className="tag tag-green">Live</span>
        </div>

        {/* SVG */}
        <div style={{ padding: "8px 8px 0" }}>
          <svg viewBox="0 0 420 420" style={{ width: "100%", display: "block" }}>
            <defs>
              {/* Glows */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E87A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00E87A" stopOpacity="0" />
              </radialGradient>
              <filter id="nodeBlur">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Orbite extérieure rotative */}
            <motion.circle
              cx={cx} cy={cy} r={R1}
              fill="none"
              stroke="rgba(0,232,122,0.1)"
              strokeWidth="1"
              strokeDasharray="4 8"
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            {/* Orbite intérieure contra-rotative */}
            <motion.circle
              cx={cx} cy={cy} r={R2}
              fill="none"
              stroke="rgba(0,212,255,0.08)"
              strokeWidth="1"
              strokeDasharray="2 6"
              animate={reduced ? {} : { rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />

            {/* Cercle glow central */}
            <circle cx={cx} cy={cy} r={70} fill="url(#centerGlow)" />

            {/* Lignes de connexion animées */}
            {nodes.map((n, i) => {
              const pos = toXY(n.angle, R1);
              return (
                <motion.line
                  key={n.label + "-line"}
                  x1={cx} y1={cy}
                  x2={cx + pos.x} y2={cy + pos.y}
                  stroke={n.color}
                  strokeWidth="1"
                  strokeOpacity="0"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.7 }}
                />
              );
            })}

            {/* Nœuds orbitaux */}
            {nodes.map((n, i) => {
              const pos = toXY(n.angle, R1);
              return (
                <motion.g
                  key={n.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.45, type: "spring", stiffness: 220 }}
                >
                  <motion.g
                    animate={reduced ? {} : {
                      y: [0, -5, 0, 5, 0],
                    }}
                    transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    {/* Halo */}
                    <circle
                      cx={cx + pos.x} cy={cy + pos.y} r={22}
                      fill={n.color} fillOpacity="0.08"
                    />
                    {/* Cercle principal */}
                    <circle
                      cx={cx + pos.x} cy={cy + pos.y} r={16}
                      fill="var(--surface-2)"
                      stroke={n.color}
                      strokeWidth="1.5"
                      filter="url(#nodeBlur)"
                    />
                    {/* Texte */}
                    <text
                      x={cx + pos.x} y={cy + pos.y + 4}
                      textAnchor="middle"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "8px", fontWeight: 600, fill: n.color, letterSpacing: "0.02em" }}
                    >
                      {n.label.split(" ")[0]}
                    </text>
                  </motion.g>
                </motion.g>
              );
            })}

            {/* Nœud central */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 160 }}
            >
              {/* Pulse rings */}
              {[0, 1, 2].map((k) => (
                <motion.circle
                  key={k}
                  cx={cx} cy={cy} r={38}
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="1"
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={reduced ? {} : { scale: [1, 1.8, 1.8], opacity: [0.4, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: k * 0.8 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              ))}
              {/* Fond */}
              <circle cx={cx} cy={cy} r={38} fill="var(--green)" opacity="0.1" />
              <circle cx={cx} cy={cy} r={30} fill="var(--surface-2)" stroke="var(--green)" strokeWidth="2" />
              <text x={cx} y={cy - 5} textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, fill: "var(--green)", letterSpacing: "0.08em" }}>
                VOTRE
              </text>
              <text x={cx} y={cy + 8} textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, fill: "var(--green)", letterSpacing: "0.08em" }}>
                SITE
              </text>
            </motion.g>

            {/* Inner nodes */}
            {[
              { label: "On-page", angle: 30, color: "#00E87A" },
              { label: "Crawl", angle: 150, color: "#FFB547" },
              { label: "UX", angle: 270, color: "#00D4FF" },
            ].map((n, i) => {
              const pos = toXY(n.angle, R2);
              return (
                <motion.g key={n.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                >
                  <circle cx={cx + pos.x} cy={cy + pos.y} r={10} fill="var(--surface-3)" stroke={n.color} strokeWidth="1" strokeOpacity="0.6" />
                  <text x={cx + pos.x} y={cy + pos.y + 3.5} textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "7px", fill: n.color, opacity: 0.8 }}>
                    {n.label}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* Bottom metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "12px 16px 16px", gap: 8 }}>
          {[
            { v: "6",    l: "Leviers",         color: "var(--green)" },
            { v: "90j",  l: "1ers résultats",  color: "var(--cyan)" },
            { v: "×2.4", l: "ROI moyen",       color: "var(--amber)" },
          ].map((m) => (
            <div key={m.l} style={{
              textAlign: "center", padding: "10px 6px",
              background: "var(--surface-3)", borderRadius: 10,
              border: "1px solid var(--border)",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 700, color: m.color, letterSpacing: "-0.02em" }}>
                {m.v}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--muted)", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
