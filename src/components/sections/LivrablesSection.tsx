"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const livrables = [
  {
    num: "01", title: "Rapport d'audit complet",
    desc: "Document structuré qui distingue les problèmes critiques, les optimisations secondaires et les actions à faible impact. Format Notion ou PDF.",
    color: "var(--green)", tag: "tag-green",
  },
  {
    num: "02", title: "Roadmap 30 / 60 / 90 jours",
    desc: "Plan d'action organisé selon l'impact business, la difficulté, les dépendances techniques et le délai estimé.",
    color: "var(--cyan)", tag: "tag-cyan",
  },
  {
    num: "03", title: "Mapping mots-clés / intentions",
    desc: "Cartographie des requêtes par intention, page cible, priorité et rôle dans le tunnel de conversion.",
    color: "var(--green)", tag: "tag-green",
  },
  {
    num: "04", title: "Architecture SEO",
    desc: "Proposition de silos, pages mères, pages filles, URLs, breadcrumbs et logique éditoriale complète.",
    color: "var(--amber)", tag: "tag-amber",
  },
  {
    num: "05", title: "Plan de maillage interne",
    desc: "Structure de liens internes avec pages sources, pages cibles, ancres, priorité et objectif SEO de chaque lien.",
    color: "var(--coral)", tag: "tag-coral",
  },
  {
    num: "06", title: "Briefs de contenu",
    desc: "Briefs actionnables pour produire des pages optimisées sans tomber dans le contenu générique.",
    color: "var(--cyan)", tag: "tag-cyan",
  },
  {
    num: "07", title: "Recommandations techniques",
    desc: "Liste claire des corrections à transmettre au développeur : performance, HTML, indexation, schema, duplication, maillage, tracking.",
    color: "var(--green)", tag: "tag-green",
  },
  {
    num: "08", title: "Dashboard de suivi",
    desc: "Tableau de bord pour suivre clics, impressions, pages stratégiques, conversions et signaux locaux — sur GSC + GA4.",
    color: "var(--amber)", tag: "tag-amber",
  },
];

export function LivrablesSection() {
  return (
    <section style={{ background: "var(--bg-soft)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 16 }}
        >
          <div className="section-eyebrow">Livrables</div>
          <h2 className="display-lg" style={{ maxWidth: 640, marginBottom: 20 }}>
            Des livrables exploitables,{" "}
            <span style={{ color: "var(--green)" }}>pas des rapports décoratifs.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 600, lineHeight: 1.75, marginBottom: 48 }}>
            Chaque mission produit des éléments utilisables immédiatement : décisions priorisées, architecture claire, recommandations techniques, briefs, maillage, suivi et plan d'exécution.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {livrables.map((l, i) => (
            <motion.div
              key={l.num}
              className="card"
              style={{ padding: 24, position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Barre top animée au hover */}
              <motion.div
                style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: l.color, transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: l.color, letterSpacing: "0.1em" }}>
                  {l.num}
                </span>
                <span className={`tag ${l.tag}`}>{l.title.split(" ")[0]}</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.25 }}>
                {l.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.65 }}>{l.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ marginTop: 40 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <Link href="/livrables-seo" className="btn btn-outline">
            Voir les livrables d'une mission SEO
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
