"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    num: "01",
    title: "Crawl & technique",
    desc: "Identifier les problèmes d'indexation, de structure, de performance, de balisage, de profondeur de clic, de duplication et de données structurées.",
    tools: ["Screaming Frog", "Sitebulb", "Search Console", "PageSpeed Insights", "Chrome DevTools", "Rich Results Test"],
    color: "var(--green)",
    tag: "tag-green",
  },
  {
    num: "02",
    title: "Données & performance",
    desc: "Mesurer les impressions, clics, CTR, pages qui progressent, pages qui stagnent, conversions et signaux de performance organique.",
    tools: ["Google Search Console", "GA4", "Looker Studio", "Bing Webmaster Tools", "CrUX Dashboard"],
    color: "var(--cyan)",
    tag: "tag-cyan",
  },
  {
    num: "03",
    title: "Recherche sémantique",
    desc: "Cartographier les requêtes par intention : informationnelle, commerciale, transactionnelle, locale, comparative et longue traîne.",
    tools: ["Semrush", "Ahrefs", "AlsoAsked", "AnswerThePublic", "Google Trends", "Thruuu"],
    color: "var(--amber)",
    tag: "tag-amber",
  },
  {
    num: "04",
    title: "Contenu & sémantique",
    desc: "Structurer les contenus autour des intentions, entités, questions, cooccurrences, preuves, angles différenciants et liens internes.",
    tools: ["YourTextGuru", "1.fr", "Surfer SEO", "NLP / entités", "Briefs maison", "Notion"],
    color: "var(--green)",
    tag: "tag-green",
  },
  {
    num: "05",
    title: "SEO local",
    desc: "Travailler la visibilité locale sur Marseille, Paris, les zones de chalandise, les pages locales, les avis, les catégories et la cohérence NAP.",
    tools: ["Google Business Profile", "Local Falcon", "BrightLocal", "PlePer", "Audit NAP"],
    color: "var(--cyan)",
    tag: "tag-cyan",
  },
  {
    num: "06",
    title: "GEO / Moteurs de réponse",
    desc: "Adapter le contenu aux moteurs de réponse : réponses claires, entités nommées, sources, structure logique, preuves d'expertise et données compréhensibles.",
    tools: ["Analyse entités", "Structure FAQ", "JSON-LD", "Tests IA", "Cartographie sources"],
    color: "var(--amber)",
    tag: "tag-amber",
  },
];

export function OutilsSection() {
  return (
    <section style={{ background: "var(--bg)", padding: "100px 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 16 }}
        >
          <div className="section-eyebrow">Outillage</div>
          <h2 className="display-lg" style={{ maxWidth: 680, marginBottom: 20 }}>
            Des décisions SEO appuyées par des données,{" "}
            <span style={{ color: "var(--muted)" }}>pas par l'intuition.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 620, lineHeight: 1.75, marginBottom: 40 }}>
            L'accompagnement s'appuie sur des outils d'analyse, de crawl, de mesure, de recherche sémantique et de structuration éditoriale. Les outils ne remplacent pas la stratégie — ils servent à objectiver les priorités.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.num}
              className="card"
              style={{ padding: 28, position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: cat.color, opacity: 0.5 }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: cat.color, letterSpacing: "0.1em" }}>
                  {cat.num}
                </span>
                <span className={`tag ${cat.tag}`}>{cat.title.split(" ")[0]}</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 650, marginBottom: 10, letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.2 }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 18 }}>
                {cat.desc}
              </p>

              {/* Tags outils en mono */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {cat.tools.map((tool) => (
                  <span key={tool} style={{
                    fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600,
                    padding: "3px 8px", borderRadius: 5,
                    background: `${cat.color}10`, color: cat.color,
                    border: `1px solid ${cat.color}20`,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ marginTop: 36 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/outils-seo" className="btn btn-outline">
            Voir tous les outils utilisés
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
