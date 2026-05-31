"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    num: "01",
    title: "Vous êtes invisible sur Google",
    text: "Vos concurrents apparaissent avant vous sur les requêtes qui génèrent vraiment des prospects.",
    tag: "Visibilité",
    color: "var(--green)",
  },
  {
    num: "02",
    title: "Votre trafic ne convertit pas",
    text: "Vous avez des visites, mais peu de demandes sérieuses. Le problème est souvent structurel.",
    tag: "Conversion",
    color: "var(--coral)",
  },
  {
    num: "03",
    title: "Votre contenu part dans tous les sens",
    text: "Articles, pages locales, services : rien n'est relié dans une architecture claire.",
    tag: "Architecture",
    color: "var(--cyan)",
  },
  {
    num: "04",
    title: "Vous arrivez trop tard sur l'IA Search",
    text: "Google évolue, les réponses IA aussi. Votre contenu doit être structuré pour être compris, cité et choisi.",
    tag: "GEO / IA",
    color: "var(--amber)",
  },
];

function TiltCard({ children, color }: { children: React.ReactNode; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="card"
    >
      {children}
    </motion.div>
  );
}

export function ProblemCards() {
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
          <div className="section-eyebrow">Le diagnostic</div>
          <h2 className="display-lg" style={{ maxWidth: 640 }}>
            Votre site n'a pas besoin de<br />
            <span style={{ color: "var(--green)" }}>plus de pages.</span><br />
            Il a besoin d'une stratégie.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard color={p.color}>
                <div style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13, fontWeight: 700,
                      color: p.color, letterSpacing: "0.06em",
                    }}>
                      {p.num}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                      padding: "3px 10px", borderRadius: 6, letterSpacing: "0.06em",
                      background: `${p.color}15`, color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}>
                      {p.tag}
                    </span>
                  </div>
                  <div style={{ width: 28, height: 2, background: p.color, borderRadius: 2, marginBottom: 16 }} />
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600,
                    marginBottom: 10, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--ink)",
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{p.text}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
