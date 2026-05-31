"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const etapes = [
  {
    n: "01", title: "Cadrage",
    desc: "Objectifs, marché, zone ciblée, offres, contraintes, ressources disponibles et niveau de maturité SEO. Ce premier échange permet de définir le périmètre d'intervention.",
    color: "var(--green)",
    duree: "30 min",
  },
  {
    n: "02", title: "Diagnostic",
    desc: "Analyse du site, des concurrents, des intentions, des contenus, du local, de la technique et de la conversion. Le rapport est priorisé par impact business.",
    color: "var(--cyan)",
    duree: "1 à 2 semaines",
  },
  {
    n: "03", title: "Stratégie",
    desc: "Définition des pages prioritaires, silos, contenus, optimisations techniques, maillage et actions court terme. La feuille de route est structurée en 30 / 60 / 90 jours.",
    color: "var(--amber)",
    duree: "1 semaine",
  },
  {
    n: "04", title: "Production",
    desc: "Création ou amélioration des pages, briefs actionnables, recommandations développeur, données structurées et mise en place du tracking.",
    color: "var(--coral)",
    duree: "En continu",
  },
  {
    n: "05", title: "Suivi mensuel",
    desc: "Mesure des résultats, ajustements, refresh des contenus, renforcement des pages et reporting structuré autour des indicateurs business.",
    color: "var(--green)",
    duree: "Mensuel",
  },
  {
    n: "06", title: "Croissance",
    desc: "Extension vers de nouvelles pages locales, nouveaux clusters, nouveaux contenus et signaux d'autorité additionnels.",
    color: "var(--cyan)",
    duree: "Trimestriel",
  },
];

export function ProcessusCollaboration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--surface)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-eyebrow">Processus</div>
          <h2 className="display-lg" style={{ maxWidth: 620 }}>
            Un cadre de mission{" "}
            <span style={{ color: "var(--green)" }}>clair dès le départ.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 560, marginTop: 20, lineHeight: 1.75 }}>
            Chaque accompagnement est structuré autour d'étapes prévisibles, de livrables définis et d'indicateurs business mesurables.
          </p>
        </motion.div>

        <div ref={ref} style={{ position: "relative", maxWidth: 800 }}>
          {/* Ligne fond */}
          <div style={{ position: "absolute", left: 25, top: 0, bottom: 0, width: 2, background: "rgba(255,255,255,0.05)", zIndex: 0 }} />
          {/* Ligne animée */}
          <motion.div
            style={{
              position: "absolute", left: 25, top: 0, width: 2, height: "100%",
              background: "linear-gradient(180deg, var(--green), var(--cyan), var(--amber), var(--coral), var(--green), var(--cyan))",
              transformOrigin: "top", zIndex: 1,
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {etapes.map((e, i) => (
              <motion.div
                key={e.n}
                style={{
                  display: "flex", gap: 28, alignItems: "flex-start",
                  paddingBottom: i < etapes.length - 1 ? 36 : 0,
                  position: "relative", zIndex: 2,
                }}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                  background: "var(--bg-soft)", border: `2px solid ${e.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 16px ${e.color}20`,
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: e.color, letterSpacing: "0.08em" }}>
                    {e.n}
                  </span>
                </div>

                <div className="card" style={{ flex: 1, padding: "20px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: e.color }}>
                      {e.title}
                    </div>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10,
                      color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                      {e.duree}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
