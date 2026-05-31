"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01", title: "Exploration",
    desc: "L'analyse initiale couvre l'écosystème complet : état technique du site, indexation, architecture des contenus, intentions de recherche couvertes, positionnement concurrentiel, signaux locaux et parcours de conversion existant.",
    livrable: "Cartographie initiale",
    color: "var(--green)",
    tags: ["Technique", "Contenu", "Concurrence", "Local"],
  },
  {
    n: "02", title: "Diagnostic",
    desc: "Chaque dimension est analysée en profondeur pour identifier les blocages réels : pages en cannibalisation, erreurs d'indexation, contenus sans intention claire, maillage interne défaillant et opportunités locales inexploitées.",
    livrable: "Rapport de diagnostic priorisé",
    color: "var(--cyan)",
    tags: ["Indexation", "Sémantique", "Maillage", "GEO"],
  },
  {
    n: "03", title: "Priorisation",
    desc: "Les recommandations sont classées selon quatre critères : impact business attendu, complexité de mise en œuvre, délai avant résultats et dépendances techniques. La feuille de route est structurée en trois horizons : 30, 60 et 90 jours.",
    livrable: "Roadmap SEO 30 / 60 / 90 jours",
    color: "var(--amber)",
    tags: ["Impact", "Effort", "Délai", "Priorités"],
  },
  {
    n: "04", title: "Architecture",
    desc: "La structure des pages est repensée autour de silos thématiques clairs : pages money, pages locales, pages services, contenus de soutien, ressources, preuves et pages de conversion. Chaque URL a un rôle défini.",
    livrable: "Silo SEO + structure URL",
    color: "var(--coral)",
    tags: ["Silos", "Maillage", "URLs", "Hubs"],
  },
  {
    n: "05", title: "Exécution",
    desc: "Les recommandations deviennent des actions concrètes documentées : optimisations techniques, briefs de contenu, corrections à transmettre au développeur, données structurées, CTA, tracking et améliorations UX.",
    livrable: "Backlog d'exécution documenté",
    color: "var(--green)",
    tags: ["Briefs", "Technique", "Schémas", "CTA"],
  },
  {
    n: "06", title: "Mesure & ajustement",
    desc: "La progression est pilotée avec des indicateurs utiles : impressions, clics, positions, pages qui progressent, leads, conversions et signaux locaux. Chaque point de suivi génère des décisions, pas uniquement des rapports.",
    livrable: "Dashboard de suivi mensuel",
    color: "var(--cyan)",
    tags: ["KPIs", "Conversions", "GSC", "GA4"],
  },
];

function StepBlock({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      style={{
        display: "flex", gap: 28, alignItems: "flex-start",
        paddingBottom: index < steps.length - 1 ? 40 : 0,
        position: "relative", zIndex: 2,
      }}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cercle étape */}
      <div style={{
        width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
        background: "var(--bg)",
        border: `2px solid ${step.color}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 0 20px ${step.color}25`,
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: step.color, letterSpacing: "0.08em" }}>
          {step.n}
        </span>
      </div>

      {/* Carte étape */}
      <div className="card" style={{ flex: 1, padding: "24px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 650, letterSpacing: "-0.025em", color: step.color }}>
            {step.title}
          </div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
            padding: "3px 10px", borderRadius: 6, letterSpacing: "0.06em",
            background: `${step.color}15`, color: step.color,
            border: `1px solid ${step.color}25`, whiteSpace: "nowrap",
          }}>
            {step.livrable}
          </span>
        </div>
        <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 16 }}>{step.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {step.tags.map(t => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600,
              padding: "2px 8px", borderRadius: 4,
              background: "var(--surface-2)", color: "var(--muted)",
              border: "1px solid var(--border)", letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SeoCommandRoomMethod() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="methode" style={{ background: "var(--bg)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,232,122,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-eyebrow">Méthode</div>
          <h2 className="display-lg" style={{ maxWidth: 640 }}>
            Une méthode construite autour de la{" "}
            <span style={{ color: "var(--green)" }}>priorisation</span> et de la{" "}
            <span style={{ color: "var(--cyan)" }}>mesure.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 580, marginTop: 20, lineHeight: 1.75 }}>
            La priorité n'est pas de publier plus. La priorité est de structurer ce qui peut générer de la demande — en partant du diagnostic et en suivant chaque décision jusqu'à la conversion.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} style={{ position: "relative", maxWidth: 800 }}>
          {/* Ligne de fond */}
          <div style={{ position: "absolute", left: 25, top: 0, bottom: 0, width: 2, background: "rgba(255,255,255,0.05)", zIndex: 0 }} />
          {/* Ligne animée */}
          <motion.div
            style={{
              position: "absolute", left: 25, top: 0, width: 2, height: "100%",
              background: "linear-gradient(180deg, var(--green) 0%, var(--cyan) 30%, var(--amber) 50%, var(--coral) 70%, var(--green) 85%, var(--cyan) 100%)",
              transformOrigin: "top", zIndex: 1,
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <StepBlock key={s.n} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
