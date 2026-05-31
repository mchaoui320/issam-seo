"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp, MapPin, Bot, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1];

/* ── Text scramble (dernier mot uniquement) ── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#";
function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) return;
    let iter = 0;
    const total = text.length * 3;
    const id = setInterval(() => {
      setDisplay(text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i < iter / 3) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(""));
      if (iter >= total) { clearInterval(id); setDisplay(text); }
      iter++;
    }, 30);
    return () => clearInterval(id);
  }, [trigger, text]);
  return display;
}

/* ── Counter animé ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf: number;
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(to * eased) + suffix;
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const credentials = [
  { icon: TrendingUp, label: "+340% trafic organique en 8 mois",     color: "var(--green)" },
  { icon: MapPin,     label: "Pack local Marseille & Paris",          color: "var(--cyan)" },
  { icon: Bot,        label: "Contenus cités par ChatGPT & Perplexity", color: "var(--amber)" },
  { icon: Star,       label: "Prestation SEO en continu sans agence", color: "var(--coral)" },
];

export function HeroHome() {
  const reduced = useReducedMotion();
  const [scrambled, setScrambled] = useState(false);
  const words = ["qualifiées.", "mesurables.", "durables."];
  const [wIdx, setWIdx] = useState(0);
  const word = useScramble(words[wIdx], scrambled);

  useEffect(() => {
    const t = setTimeout(() => setScrambled(true), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!scrambled) return;
    const id = setInterval(() => {
      setScrambled(false);
      setTimeout(() => { setWIdx(p => (p + 1) % words.length); setScrambled(true); }, 120);
    }, 3500);
    return () => clearInterval(id);
  }, [scrambled]);

  return (
    <section style={{
      background: "var(--bg)",
      paddingTop: 80, paddingBottom: 100,
      position: "relative", overflow: "hidden",
      minHeight: "90vh", display: "flex", alignItems: "center",
    }}>
      {/* Grid décor */}
      <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Glow orbs */}
      <motion.div className="glow-green" style={{ width: 800, height: 800, top: "-25%", left: "-20%" }}
        animate={reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="glow-cyan" style={{ width: 500, height: 500, bottom: "-10%", right: "-8%" }}
        animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Compteurs top */}
        <motion.div
          style={{ display: "flex", gap: 40, marginBottom: 52, flexWrap: "wrap" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {[
            { n: 120, suf: "+",  label: "Diagnostics réalisés",  color: "var(--green)" },
            { n: 340, suf: "%",  label: "Trafic moyen généré",   color: "var(--cyan)" },
            { n: 7,   suf: "ans",label: "D'expérience SEO",      color: "var(--amber)" },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.12 }}
              style={{ display: "flex", alignItems: "baseline", gap: 7 }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 600, color: s.color, letterSpacing: "-0.01em" }}>
                <Counter to={s.n} suffix={s.suf} />
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "center" }} className="grid-hero">

          {/* ── LEFT ── */}
          <div>
            <motion.div className="badge" style={{ marginBottom: 32 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", display: "inline-block", boxShadow: "0 0 8px var(--green)" }} />
              Consultant SEO & GEO · Marseille / Paris
            </motion.div>

            {/* H1 — sans "je" */}
            <motion.h1 style={{ marginBottom: 28 }}
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
            >
              <span className="display-xl" style={{ display: "block", color: "var(--ink)", lineHeight: 0.96 }}>
                Consultant SEO & GEO
              </span>
              <span className="display-xl" style={{ display: "block", color: "var(--ink)", lineHeight: 0.96 }}>
                pour générer des demandes
              </span>
              <span className="display-xl" style={{ display: "block", color: "var(--green)", lineHeight: 1 }}>
                {word}
              </span>
            </motion.h1>

            {/* Sous-texte en troisième personne */}
            <motion.p
              style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55, ease }}
            >
              Med Issam Chaoui accompagne les entreprises à Marseille, Paris et à distance sur leurs enjeux de visibilité organique — SEO technique, SEO local, stratégie de contenu, maillage interne et optimisation GEO pour les moteurs de réponse.
            </motion.p>

            {/* CTA */}
            <motion.div
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease }}
            >
              <Link href="/contact" className="btn btn-green">
                Demander un diagnostic SEO
                <ArrowRight size={15} />
              </Link>
              <Link href="/#methode" className="btn btn-outline">
                Découvrir la méthode
              </Link>
            </motion.div>

            {/* Preuves */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {credentials.map((c, i) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--ink-soft)" }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: `${c.color}15`, border: `1px solid ${c.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <c.icon size={13} color={c.color} />
                  </div>
                  {c.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Carte positionnement ── */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.92, x: reduced ? 0 : 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
          >
            <div className="card" style={{ background: "var(--surface-2)", border: "1px solid rgba(0,232,122,0.15)", overflow: "hidden" }}>
              {/* Header carte */}
              <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Positionnement
                </span>
                <span className="tag tag-green">Disponible</span>
              </div>

              {/* Contenu */}
              <div style={{ padding: "24px 24px 0" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 650, color: "var(--ink)", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 6 }}>
                  Med Issam Chaoui
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
                  Consultant SEO & GEO — Freelance
                </div>

                {/* Tags de localisation */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                  {["Marseille · 13", "Paris · 75", "Remote"].map((t, i) => (
                    <span key={t} className={["tag-green", "tag-cyan", "tag-amber"][i].split(" ")[0] + " tag " + ["tag-green", "tag-cyan", "tag-amber"][i]}>{t}</span>
                  ))}
                </div>

                {/* Domaines */}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, marginBottom: 16 }}>
                  {[
                    { label: "SEO technique", pct: 92, color: "var(--green)" },
                    { label: "Stratégie de contenu", pct: 87, color: "var(--cyan)" },
                    { label: "SEO local", pct: 90, color: "var(--green)" },
                    { label: "GEO / IA Search", pct: 78, color: "var(--amber)" },
                    { label: "Netlinking", pct: 83, color: "var(--coral)" },
                  ].map((d, i) => (
                    <div key={d.label} style={{ marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-soft)", letterSpacing: "0.08em" }}>{d.label.toUpperCase()}</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: d.color }}>{d.pct}%</span>
                      </div>
                      <div className="progress">
                        <motion.div
                          className="progress-fill"
                          style={{ background: d.color, width: `${d.pct}%` }}
                          initial={{ scaleX: 0, transformOrigin: "left" }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.8 + i * 0.12, duration: 0.8, ease }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer carte */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid var(--border)" }}>
                {[
                  { v: "6",   l: "Leviers",      color: "var(--green)" },
                  { v: "90j", l: "1ers résultats", color: "var(--cyan)" },
                  { v: "×2.4",l: "ROI moyen",    color: "var(--amber)" },
                ].map((m, i) => (
                  <div key={m.l} style={{
                    textAlign: "center", padding: "14px 8px",
                    borderRight: i < 2 ? "1px solid var(--border)" : "none",
                  }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 700, color: m.color, letterSpacing: "-0.02em" }}>{m.v}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--muted)", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .grid-hero { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
