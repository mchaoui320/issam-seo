"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Audit complet",          mono: "TECHNIQUE + SÉMANTIQUE + LOCAL", color: "var(--green)" },
  { label: "Priorisation business",  mono: "IMPACT / DIFFICULTÉ / DÉLAI",    color: "var(--cyan)" },
  { label: "Plan 30 / 60 / 90 jours",mono: "FEUILLE DE ROUTE CLAIRE",        color: "var(--amber)" },
  { label: "Reporting lisible",      mono: "SEARCH CONSOLE + GA4",           color: "var(--coral)" },
];

export function ProofStrip() {
  return (
    <section style={{
      background: "var(--surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "0",
      overflow: "hidden",
    }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="proof-grid">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                padding: "20px 24px",
                borderRight: i < items.length - 1 ? "1px solid var(--border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Barre couleur top */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: item.color, opacity: 0.6 }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>
                {item.label}
              </div>
              <div className="label-mono">{item.mono}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .proof-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .proof-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
