"use client";

import { motion } from "framer-motion";
import { Search, FileText, MapPin, Bot, TrendingUp } from "lucide-react";
import Link from "next/link";

const analyses = [
  {
    num: "01",
    icon: Search,
    title: "Analyse technique",
    desc: "Indexation, crawl, structure HTML, performance, Core Web Vitals, erreurs bloquantes, profondeur des pages, canonicals et données structurées.",
    color: "var(--green)",
    tag: "tag-green",
    tagLabel: "Fondation",
  },
  {
    num: "02",
    icon: FileText,
    title: "Analyse sémantique",
    desc: "Mots-clés, intentions, clusters, pages manquantes, cannibalisation, angles éditoriaux et opportunités de longue traîne.",
    color: "var(--cyan)",
    tag: "tag-cyan",
    tagLabel: "Contenu",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Analyse locale",
    desc: "Pages Marseille / Paris, Google Business Profile, signaux de proximité, cohérence NAP, contenus localisés et requêtes géographiques.",
    color: "var(--green)",
    tag: "tag-green",
    tagLabel: "Local",
  },
  {
    num: "04",
    icon: Bot,
    title: "Analyse GEO / IA",
    desc: "Entités, réponses extractibles, clarté des contenus, preuves d'expertise, structuration des informations et capacité à être compris par les moteurs de réponse.",
    color: "var(--amber)",
    tag: "tag-amber",
    tagLabel: "GEO",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Analyse conversion",
    desc: "CTA, formulaires, parcours utilisateur, messages de réassurance, objections, preuves, frictions UX et cohérence entre trafic et demande commerciale.",
    color: "var(--coral)",
    tag: "tag-coral",
    tagLabel: "Acquisition",
  },
];

export function DiagnosticStrategique() {
  return (
    <section style={{ background: "var(--surface)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 20, maxWidth: 760 }}
        >
          <div className="section-eyebrow">Diagnostic</div>
          <h2 className="display-lg" style={{ marginBottom: 20 }}>
            Un diagnostic stratégique avant toute recommandation SEO
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.75, maxWidth: 680 }}>
            Avant de produire du contenu ou de modifier une page, le site doit être analysé comme un système : structure technique, indexation, intentions de recherche, pages business, maillage interne, concurrence, signaux locaux, contenus existants et parcours de conversion.
          </p>
        </motion.div>

        <motion.p
          style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, maxWidth: 620, marginBottom: 52, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          L'objectif n'est pas d'obtenir un score décoratif. L'objectif est d'identifier les actions qui peuvent réellement améliorer la visibilité, la compréhension du site par Google et la génération de demandes qualifiées.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
          {analyses.map((a, i) => (
            <motion.div
              key={a.num}
              className="card"
              style={{ padding: 28, position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow discret */}
              <div style={{ position: "absolute", top: -40, right: -40, width: 150, height: 150, borderRadius: "50%", background: `radial-gradient(circle, ${a.color}10 0%, transparent 70%)`, pointerEvents: "none" }} />

              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${a.color}15`, border: `1px solid ${a.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <a.icon size={17} color={a.color} />
                  </div>
                  <span className={`tag ${a.tag}`}>{a.tagLabel}</span>
                </div>

                <div style={{ width: 24, height: 2, background: a.color, borderRadius: 2, marginBottom: 14, opacity: 0.7 }} />

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 650, marginBottom: 10, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ marginTop: 40 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/contact" className="btn btn-green">
            Demander un diagnostic stratégique
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
