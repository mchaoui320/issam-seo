"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const keywords = {
  marseille: ["consultant SEO Marseille", "freelance SEO Marseille", "SEO local Marseille", "audit SEO Marseille", "référencement Google Marseille"],
  paris:     ["consultant SEO Paris", "freelance SEO Paris", "audit SEO Paris", "SEO local Paris", "consultant GEO Paris"],
};

export function LocalMarkets() {
  return (
    <section style={{ background: "var(--bg)", padding: "100px 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-eyebrow">Marchés locaux</div>
          <h2 className="display-lg" style={{ maxWidth: 620 }}>
            Deux marchés, une{" "}
            <span style={{ color: "var(--green)" }}>stratégie locale précise.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="local-grid">
          {/* Marseille */}
          <motion.div
            className="card"
            style={{ padding: 36, borderColor: "rgba(0,232,122,0.2)", position: "relative", overflow: "hidden" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            {/* Left accent */}
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, var(--green), transparent)" }} />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <MapPin size={14} color="var(--green)" />
                <span className="tag tag-green">Marseille · 13</span>
              </div>
              <h3 className="display-md" style={{ marginBottom: 12, color: "var(--ink)" }}>Consultant SEO à Marseille</h3>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 20 }}>
                Pour les entreprises marseillaises, l'enjeu est souvent de capter une demande locale forte :
                services, commerces, professions libérales, immobilier, tourisme, santé, B2B local.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
                {keywords.marseille.map((kw) => (
                  <span key={kw} className="tag tag-green">{kw}</span>
                ))}
              </div>
              <Link href="/consultant-seo-marseille" className="btn btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
                Voir la page Marseille <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* Paris */}
          <motion.div
            className="card"
            style={{ padding: 36, borderColor: "rgba(0,212,255,0.2)", position: "relative", overflow: "hidden" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            {/* Left accent */}
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, var(--cyan), transparent)" }} />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <MapPin size={14} color="var(--cyan)" />
                <span className="tag tag-cyan">Paris · 75</span>
              </div>
              <h3 className="display-md" style={{ marginBottom: 12, color: "var(--ink)" }}>Consultant SEO à Paris</h3>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 20 }}>
                À Paris, la concurrence est plus dense. La stratégie doit être plus précise :
                différenciation, contenu expert, autorité, pages d'arrondissement et preuve business.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
                {keywords.paris.map((kw) => (
                  <span key={kw} className="tag tag-cyan">{kw}</span>
                ))}
              </div>
              <Link href="/consultant-seo-paris" className="btn btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
                Voir la page Paris <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .local-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
