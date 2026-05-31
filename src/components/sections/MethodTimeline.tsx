"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Diagnostic",   desc: "Je cartographie votre situation : technique, contenus, concurrence, intentions, pages clés, tracking.", color: "var(--green)" },
  { n: "02", title: "Priorisation", desc: "Je classe les actions selon impact business, difficulté, délai et dépendances techniques.", color: "var(--cyan)" },
  { n: "03", title: "Architecture", desc: "Je structure les pages, silos, maillage interne, contenus et parcours de conversion.", color: "var(--coral)" },
  { n: "04", title: "Exécution",    desc: "Je vous accompagne sur les corrections, contenus, briefs, optimisations et publications.", color: "var(--amber)" },
  { n: "05", title: "Mesure",       desc: "On suit les impressions, clics, positions, leads, conversions et pages qui prennent réellement.", color: "var(--green)" },
];

export function MethodTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="methode" style={{ background: "var(--surface)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Décor grid */}
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-eyebrow">Méthode</div>
          <h2 className="display-lg" style={{ maxWidth: 580 }}>
            Trouver ce qui bloque,<br />
            <span style={{ color: "var(--green)" }}>prioriser, exécuter, mesurer.</span>
          </h2>
        </motion.div>

        <div ref={ref} style={{ position: "relative", maxWidth: 720 }}>
          {/* Ligne verticale */}
          <div style={{ position: "absolute", left: 23, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.06)" }} />
          {/* Ligne animée */}
          <motion.div
            style={{
              position: "absolute", left: 23, top: 0, width: 1,
              background: "linear-gradient(180deg, var(--green), var(--cyan), var(--coral), var(--amber), var(--green))",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0, height: "100%" }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                style={{
                  display: "flex", gap: 32, alignItems: "flex-start",
                  paddingBottom: i < steps.length - 1 ? 36 : 0,
                  position: "relative", zIndex: 2,
                }}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Numéro */}
                <div style={{
                  width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
                  background: "var(--surface)",
                  border: `1.5px solid ${s.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 16px ${s.color}30`,
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.08em" }}>
                    {s.n}
                  </span>
                </div>

                {/* Card */}
                <div className="card" style={{ flex: 1, padding: "20px 24px" }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650,
                    marginBottom: 8, letterSpacing: "-0.02em", color: s.color,
                  }}>
                    {s.title}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
