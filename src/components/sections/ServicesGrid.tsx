"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01", title: "Audit SEO",
    desc: "Analyse technique, sémantique, contenu, local, maillage, indexation et priorisation des actions à fort impact.",
    href: "/audit-seo", tagClass: "tag-green", tagLabel: "Fondation",
    color: "var(--green)",
  },
  {
    num: "02", title: "SEO local",
    desc: "Optimisation de votre visibilité sur Marseille, Paris, Google Business Profile, pages locales et requêtes géolocalisées.",
    href: "/seo-local", tagClass: "tag-cyan", tagLabel: "Local",
    color: "var(--cyan)",
  },
  {
    num: "03", title: "Stratégie de contenu",
    desc: "Silos, clusters, briefs SEO, pages business et contenus informationnels qui soutiennent vos pages money.",
    href: "/strategie-contenu-seo", tagClass: "tag-green", tagLabel: "Éditorial",
    color: "var(--green)",
  },
  {
    num: "04", title: "SEO technique",
    desc: "Performance, indexation, structure HTML, Core Web Vitals, données structurées, logs, crawl et corrections prioritaires.",
    href: "/seo-technique", tagClass: "tag-cyan", tagLabel: "Technique",
    color: "var(--cyan)",
  },
  {
    num: "05", title: "Netlinking & autorité",
    desc: "Stratégie d'autorité progressive, liens locaux, relations presse, citations business et backlinks thématiques.",
    href: "/netlinking", tagClass: "tag-coral", tagLabel: "Autorité",
    color: "var(--coral)",
  },
  {
    num: "06", title: "GEO / Référencement IA",
    desc: "Structuration des contenus pour les moteurs de réponse, entités, FAQ, données, sources et signaux d'expertise.",
    href: "/geo-referencement-ia", tagClass: "tag-amber", tagLabel: "Nouveau",
    color: "var(--amber)",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" style={{ background: "var(--bg)", padding: "100px 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-eyebrow">Prestations</div>
          <h2 className="display-lg" style={{ maxWidth: 620 }}>
            Des prestations SEO pensées pour{" "}
            <span style={{ color: "var(--green)" }}>l'acquisition</span>,<br />
            pas pour remplir un rapport.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={s.href}
                className="card"
                style={{
                  display: "block", padding: 28,
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent */}
                <motion.div
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: s.color, transformOrigin: "left",
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                    color: s.color, letterSpacing: "0.1em", opacity: 0.8,
                  }}>
                    {s.num}
                  </span>
                  <span className={`tag ${s.tagClass}`}>{s.tagLabel}</span>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 650,
                  marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--ink)",
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 20 }}>
                  {s.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 700, color: s.color }}>
                  En savoir plus <ArrowUpRight size={13} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
