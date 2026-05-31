"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const seoItems = [
  { label: "Audit technique complet", done: true },
  { label: "Recherche de mots-clés", done: true },
  { label: "Optimisation On-page", done: true },
  { label: "Maillage interne", done: true },
  { label: "Backlinks & autorité", done: true },
  { label: "SEO local (GMB)", done: true },
];
const geoItems = [
  { label: "Structuration par entités", done: true },
  { label: "Réponses directes (AIO)", done: true },
  { label: "FAQ ultra-extractibles", done: true },
  { label: "Preuves d'expertise (E-E-A-T)", done: true },
  { label: "Données structurées JSON-LD", done: true },
  { label: "Contenu citable par les LLM", done: true },
];

export function SeoGeoComparison() {
  return (
    <section style={{ background: "var(--bg-soft)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Grid décor */}
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,232,122,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56, textAlign: "center" }}
        >
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>Positionnement</div>
          <h2 className="display-lg" style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{ color: "var(--green)" }}>SEO</span> pour Google.{" "}
            <span style={{ color: "var(--cyan)" }}>GEO</span> pour les moteurs IA.
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 560, margin: "20px auto 0", lineHeight: 1.7 }}>
            Deux disciplines complémentaires. L'une vous positionne dans les résultats classiques,
            l'autre vous fait citer et recommander par ChatGPT, Perplexity et Gemini.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 20, alignItems: "start" }} className="comparison-grid">
          {/* SEO */}
          <motion.div
            className="card"
            style={{ padding: 32 }}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(0,232,122,0.1)",
                border: "1px solid rgba(0,232,122,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--green)" }}>SEO</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 650, letterSpacing: "-0.02em", color: "var(--ink)" }}>Référencement Google</div>
                <div className="label-mono" style={{ color: "var(--green)" }}>RÉSULTATS CLASSIQUES</div>
              </div>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {seoItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--ink-soft)" }}
                >
                  <CheckCircle size={14} color="var(--green)" style={{ flexShrink: 0 }} />
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Separateur VS */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 80 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "var(--surface)",
              border: "1px solid var(--border-bright)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--muted)",
              letterSpacing: "0.1em",
            }}>
              +
            </div>
          </div>

          {/* GEO */}
          <motion.div
            className="card"
            style={{ padding: 32, borderColor: "rgba(0,212,255,0.2)" }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--cyan)" }}>GEO</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 650, letterSpacing: "-0.02em", color: "var(--ink)" }}>Moteurs de réponse IA</div>
                <span className="tag tag-cyan" style={{ marginTop: 4, display: "inline-block" }}>Nouveau</span>
              </div>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {geoItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--ink-soft)" }}
                >
                  <CheckCircle size={14} color="var(--cyan)" style={{ flexShrink: 0 }} />
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          style={{ textAlign: "center", marginTop: 48 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/contact" className="btn btn-green">
            Construire une stratégie SEO + GEO
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .comparison-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
