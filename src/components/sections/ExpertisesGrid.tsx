"use client";

import { motion } from "framer-motion";

const expertises = [
  { title: "SEO technique",       desc: "Indexation, crawl, CWV, HTML, canonicals, logs et Core Web Vitals.",          color: "var(--green)" },
  { title: "SEO local",           desc: "GBP, pages locales, signaux de proximité, avis et cohérence NAP.",            color: "var(--cyan)" },
  { title: "Stratégie de contenu",desc: "Clusters, intentions, briefs, pages services et contenus de soutien.",        color: "var(--green)" },
  { title: "Maillage interne",    desc: "Relations entre pages, ancres, profondeur, hubs et pages money.",             color: "var(--amber)" },
  { title: "Refonte SEO",         desc: "Préservation du trafic, mapping, redirections, migration et suivi.",          color: "var(--coral)" },
  { title: "GEO / IA Search",     desc: "Entités, réponses structurées, preuves et contenus pour moteurs IA.",        color: "var(--cyan)" },
  { title: "Netlinking",          desc: "Autorité thématique, liens locaux, citations et partenariats RP.",            color: "var(--green)" },
  { title: "CRO & SEO",           desc: "CTA, formulaires, parcours et conversion du trafic organique en demandes.",   color: "var(--amber)" },
  { title: "Tracking & analytics",desc: "GA4, Search Console, événements, conversions et dashboards.",                 color: "var(--coral)" },
  { title: "Stratégie éditoriale",desc: "Plan de contenu, refresh, consolidation et briefs actionnables.",             color: "var(--cyan)" },
];

export function ExpertisesGrid() {
  return (
    <section style={{ background: "var(--surface)", padding: "100px 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 52 }}
        >
          <div className="section-eyebrow">Expertises</div>
          <h2 className="display-lg" style={{ maxWidth: 660 }}>
            Un accompagnement SEO qui couvre toute la{" "}
            <span style={{ color: "var(--green)" }}>chaîne de visibilité.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
          {expertises.map((e, i) => (
            <motion.div
              key={e.title}
              className="card"
              style={{ padding: "20px 22px" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: e.color, marginBottom: 12, boxShadow: `0 0 8px ${e.color}60` }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 650, marginBottom: 6, letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.25 }}>
                {e.title}
              </div>
              <p style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.6 }}>{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
