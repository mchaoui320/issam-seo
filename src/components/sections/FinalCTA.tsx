"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section style={{ background: "var(--bg)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <motion.div
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,232,122,0.06) 0%, transparent 65%)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ position: "absolute", bottom: "-20%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <div className="badge">
              <Zap size={11} color="var(--green)" fill="var(--green)" />
              Passons à l'action
            </div>
          </div>

          <h2 className="display-lg" style={{ maxWidth: 700, margin: "0 auto 24px" }}>
            Transformer votre site en{" "}
            <span style={{ color: "var(--green)" }}>actif d'acquisition</span> ?
          </h2>

          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.75 }}>
            Partagez votre URL. Med Issam Chaoui analyse votre situation et identifie les priorités à traiter avant toute production de contenu supplémentaire.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green" style={{ fontSize: 16, padding: "16px 36px" }}>
              Demander un diagnostic stratégique
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ fontSize: 16, padding: "16px 36px" }}>
              Poser une question
            </Link>
          </div>

          <motion.div
            style={{ display: "flex", gap: 28, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {["Réponse sous 24h", "Première orientation offerte", "Sans engagement"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, color: "var(--muted)" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)" }} />
                {t}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
