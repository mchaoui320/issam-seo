"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blocs = [
  {
    n: "01",
    title: "Entités & graphe de connaissance",
    desc: "Identifier clairement les personnes, services, zones, expertises, marques, secteurs et relations entre contenus. Les moteurs de réponse s'appuient sur les entités pour comprendre qui parle, de quoi et avec quelle légitimité.",
    tags: ["Entités nommées", "NER", "Graphe sémantique", "Relations"],
    color: "var(--cyan)",
  },
  {
    n: "02",
    title: "Réponses directes & AIO",
    desc: "Structurer les réponses en formats courts, précis et autonomes facilite leur compréhension par les moteurs de réponse. Chaque question mérite une réponse complète en un seul bloc, sans ambiguïté.",
    tags: ["Réponses courtes", "AIO", "Format Q&R", "Paragraphes autonomes"],
    color: "var(--green)",
  },
  {
    n: "03",
    title: "Preuves d'expertise (E-E-A-T)",
    desc: "Les moteurs IA privilégient les sources crédibles, vérifiables et cohérentes. Ajouter des éléments tangibles : livrables, exemples, méthode documentée, cas clients, sources citées, expérience terrain et résultats mesurables.",
    tags: ["E-E-A-T", "Crédibilité", "Sources", "Expérience"],
    color: "var(--amber)",
  },
  {
    n: "04",
    title: "FAQ ultra-extractibles",
    desc: "Une FAQ bien structurée n'est pas une section décorative. Elle doit répondre aux vraies questions posées sur les moteurs, avec des réponses complètes, précises et différenciées par rapport aux concurrents.",
    tags: ["FAQ ciblée", "Questions réelles", "Format court", "Schema FAQPage"],
    color: "var(--coral)",
  },
  {
    n: "05",
    title: "Données structurées JSON-LD",
    desc: "Les balises schema.org permettent de communiquer explicitement avec les moteurs d'indexation et de réponse : type de contenu, auteur, service, localisation, prix, avis, FAQ, méthode et organisation.",
    tags: ["Schema.org", "JSON-LD", "LocalBusiness", "Service", "FAQPage"],
    color: "var(--cyan)",
  },
];

export function GeoContent() {
  return (
    <section style={{ background: "var(--bg)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Glow droit */}
      <div style={{ position: "absolute", top: "20%", right: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 20, maxWidth: 760 }}
        >
          <div className="section-eyebrow">GEO · IA Search</div>
          <h2 className="display-lg" style={{ marginBottom: 20 }}>
            Rendre le contenu plus clair pour{" "}
            <span style={{ color: "var(--cyan)" }}>les moteurs de réponse.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 640, lineHeight: 1.75, marginBottom: 52 }}>
            Le GEO ne remplace pas le SEO. Il impose une information plus claire, mieux structurée et plus facilement interprétable par les moteurs de réponse. Un contenu bien structuré pour Google l'est aussi pour ChatGPT, Perplexity et Gemini.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {blocs.map((b, i) => (
            <motion.div
              key={b.n}
              className="card"
              style={{
                padding: "28px 32px",
                borderLeft: `3px solid ${b.color}`,
                position: "relative", overflow: "hidden",
              }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${b.color}08 0%, transparent 70%)`, pointerEvents: "none" }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 10 }}>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: b.color, letterSpacing: "0.1em", display: "block", marginBottom: 6 }}>
                    {b.n}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.15 }}>
                    {b.title}
                  </h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, maxWidth: 320, justifyContent: "flex-end" }}>
                  {b.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600,
                      padding: "3px 8px", borderRadius: 5,
                      background: `${b.color}10`, color: b.color,
                      border: `1px solid ${b.color}20`,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.75, maxWidth: 700 }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ marginTop: 40 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/geo-referencement-ia" className="btn btn-outline">
            En savoir plus sur le GEO
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
