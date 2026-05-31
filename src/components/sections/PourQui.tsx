"use client";

import { motion } from "framer-motion";
import { Building2, User, ShoppingBag, Briefcase, RotateCcw } from "lucide-react";

const segments = [
  {
    icon: Building2,
    title: "PME locales",
    desc: "Entreprises de services, commerces, cabinets et acteurs locaux qui veulent capter une demande qualifiée sur Marseille, Paris ou une zone précise.",
    besoins: ["Pages locales optimisées", "Google Business Profile", "Visibilité secteur de niche"],
    color: "var(--green)",
    tag: "tag-green",
  },
  {
    icon: Briefcase,
    title: "B2B & services",
    desc: "Entreprises avec des cycles de décision plus longs qui ont besoin de contenus experts, de pages services fortes et d'un parcours de conversion clair.",
    besoins: ["Contenu d'expertise", "Tunnel d'acquisition long", "Autorité thématique"],
    color: "var(--cyan)",
    tag: "tag-cyan",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Sites avec des enjeux de catégories, fiches produits, maillage, contenu transactionnel, indexation et performance technique.",
    besoins: ["Catégories SEO", "Fiches produits", "Maillage e-commerce"],
    color: "var(--amber)",
    tag: "tag-amber",
  },
  {
    icon: User,
    title: "Professions libérales",
    desc: "Cabinets, experts, consultants, avocats, santé non réglementée, immobilier, formation et services spécialisés.",
    besoins: ["Personal branding SEO", "Réputation locale", "Contenu d'autorité"],
    color: "var(--coral)",
    tag: "tag-coral",
  },
  {
    icon: RotateCcw,
    title: "Sites en refonte",
    desc: "Projets où l'enjeu est de ne pas perdre l'existant tout en améliorant structure, performance, contenus et conversion.",
    besoins: ["Migration SEO sécurisée", "Redirections", "Suivi post-lancement"],
    color: "var(--green)",
    tag: "tag-green",
  },
];

export function PourQui() {
  return (
    <section style={{ background: "var(--bg-soft)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 52 }}
        >
          <div className="section-eyebrow">Pour qui</div>
          <h2 className="display-lg" style={{ maxWidth: 620 }}>
            Pour les entreprises qui veulent une{" "}
            <span style={{ color: "var(--green)" }}>acquisition organique structurée.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              className="card"
              style={{ padding: 28 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${s.color}15`, border: `1px solid ${s.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <s.icon size={18} color={s.color} />
                </div>
                <span className={`tag ${s.tag}`}>{s.title}</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 650, marginBottom: 10, letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 16 }}>
                {s.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {s.besoins.map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
