"use client";

import { useRef, useState, useEffect } from "react";

const M_STEPS = [
  { n: "01", t: "Diagnostic",   d: "Les problèmes SEO sont identifiés et rassemblés à partir de l'audit." },
  { n: "02", t: "Priorisation", d: "Chaque action est classée selon son impact et son effort." },
  { n: "03", t: "Architecture", d: "Les pages se regroupent en silos thématiques cohérents." },
  { n: "04", t: "Maillage",     d: "Le maillage interne relie les pages et diffuse l'autorité." },
  { n: "05", t: "Livrables",   d: "La feuille de route et les livrables sont remis." },
  { n: "06", t: "Suivi",       d: "Les performances sont mesurées et pilotées dans la durée." },
];

const PROBLEMS = [
  "Cannibalisation","Contenu mince","Vitesse mobile","Titles manquants",
  "Maillage faible","404 non gérées","Intentions floues","Pas de pages locales",
];
const SCATTER = [
  { x: 18, y: 18, r: -7 }, { x: 56, y: 14, r: 5 },  { x: 33, y: 38, r: 3 },
  { x: 68, y: 42, r: -5 }, { x: 20, y: 62, r: 6 },  { x: 50, y: 66, r: -4 },
  { x: 74, y: 72, r: 4 },  { x: 38, y: 84, r: -6 },
];
const MATRIX = [
  { x: 26, y: 22, q: "win" }, { x: 68, y: 20, q: "big" }, { x: 33, y: 32, q: "win" },
  { x: 74, y: 64, q: "low" }, { x: 22, y: 42, q: "win" }, { x: 62, y: 72, q: "low" },
  { x: 40, y: 26, q: "win" }, { x: 76, y: 34, q: "big" },
];
const SILOS = [
  { name: "Silo · Audit",   color: "var(--clay)",  pages: ["Audit SEO","Technique","Vitesse"] },
  { name: "Silo · Local",   color: "var(--azur)",  pages: ["SEO local","Marseille","Paris"] },
  { name: "Silo · Contenu", color: "var(--ochre)", pages: ["Stratégie","Briefs EEAT","Clusters"] },
];
const DELIVS = ["Roadmap priorisée","Briefs de contenu","Plan de maillage","Plan de redirections"];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setP(total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [ref]);
  return p;
}

function Stage({ step }: { step: number }) {
  const wrapS: React.CSSProperties = { position: "absolute", inset: 0, padding: "clamp(20px,3vw,40px)", display: "flex", flexDirection: "column" };
  const headS: React.CSSProperties = { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ochre)", marginBottom: 18 };
  const chipS: React.CSSProperties = { position: "absolute", fontFamily: "var(--font-mono)", fontSize: 12, padding: "7px 12px", borderRadius: 8, background: "rgba(251,247,240,0.96)", color: "var(--ink)", boxShadow: "0 6px 16px rgba(0,0,0,0.22)", transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)", whiteSpace: "nowrap" };

  return (
    <div className="method__stage">
      {/* Scenes 0/1 */}
      <div style={{ ...wrapS, opacity: step <= 1 ? 1 : 0, transition: "opacity .5s", pointerEvents: "none" }}>
        <div style={headS}>{step === 0 ? "Problèmes identifiés" : "Matrice impact / effort"}</div>
        <div style={{ position: "relative", flex: 1 }}>
          <div style={{ position: "absolute", inset: 0, opacity: step === 1 ? 1 : 0, transition: "opacity .5s" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.18)" }} />
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.18)" }} />
            <span style={{ position: "absolute", left: 0, top: -2, fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)" }}>↑ IMPACT</span>
            <span style={{ position: "absolute", right: 0, bottom: 2, fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)" }}>EFFORT →</span>
            <span style={{ position: "absolute", left: "8%", top: "8%", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ochre)", fontWeight: 600 }}>QUICK WINS</span>
          </div>
          {PROBLEMS.map((prob, i) => {
            const sc = SCATTER[i], mx = MATRIX[i];
            const pos = step === 0
              ? { left: sc.x + "%", top: sc.y + "%", transform: `translate(-50%,-50%) rotate(${sc.r}deg)` }
              : { left: mx.x + "%", top: mx.y + "%", transform: "translate(-50%,-50%) rotate(0deg)" };
            return <div key={prob} style={{ ...chipS, ...pos, background: step === 1 && mx.q === "win" ? "var(--ochre)" : "rgba(251,247,240,0.96)" }}>{prob}</div>;
          })}
        </div>
      </div>

      {/* Scenes 2/3 */}
      <div style={{ ...wrapS, opacity: step === 2 || step === 3 ? 1 : 0, transition: "opacity .5s", pointerEvents: "none" }}>
        <div style={headS}>{step === 3 ? "Maillage interne activé" : "Regroupement en silos"}</div>
        <div style={{ position: "relative", flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(12px,2vw,28px)", alignItems: "start" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", opacity: step === 3 ? 1 : 0, transition: "opacity .6s" }} preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M18 22 Q50 6 82 22" stroke="var(--ochre)" strokeWidth="0.6" fill="none" strokeDasharray="2 2" />
            <path d="M18 40 Q50 58 82 40" stroke="var(--ochre)" strokeWidth="0.6" fill="none" strokeDasharray="2 2" />
            <path d="M50 24 L50 58" stroke="var(--ochre)" strokeWidth="0.6" fill="none" strokeDasharray="2 2" />
          </svg>
          {SILOS.map((s) => (
            <div key={s.name} style={{ transition: "transform .6s cubic-bezier(0.22,1,0.36,1)", transform: step >= 2 ? "none" : "translateY(16px)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.85)", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color }} />{s.name}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {s.pages.map((pg) => (
                  <div key={pg} style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, padding: "10px 12px", borderRadius: 8, background: "rgba(251,247,240,0.96)", color: "var(--ink)", boxShadow: "0 4px 12px rgba(0,0,0,0.18)", borderLeft: `3px solid ${s.color}` }}>{pg}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scene 4 */}
      <div style={{ ...wrapS, opacity: step === 4 ? 1 : 0, transition: "opacity .5s", pointerEvents: "none" }}>
        <div style={headS}>Livrables remis</div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignContent: "center" }}>
          {DELIVS.map((d, i) => (
            <div key={d} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 12, background: "rgba(251,247,240,0.96)", color: "var(--ink)", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", transform: step === 4 ? "none" : "translateY(12px)", opacity: step === 4 ? 1 : 0, transition: `all .5s cubic-bezier(0.22,1,0.36,1) ${i * 90}ms` }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--clay-tint)", color: "var(--clay-deep)", display: "grid", placeItems: "center", flex: "none" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              </span>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{d}</span>
              <span style={{ marginLeft: "auto", color: "var(--positive)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M20 6 9 17l-5-5"/></svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scene 5 */}
      <div style={{ ...wrapS, opacity: step === 5 ? 1 : 0, transition: "opacity .5s", pointerEvents: "none" }}>
        <div style={headS}>Suivi de performance</div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <svg viewBox="0 0 300 110" style={{ width: "100%", height: "auto", maxHeight: "60%" }}>
            <line x1="6" y1="100" x2="294" y2="100" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <path d="M6 92 L60 80 L114 84 L168 54 L222 40 L294 14" fill="none" stroke="var(--ochre)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ strokeDasharray: 520, strokeDashoffset: step === 5 ? 0 : 520, transition: "stroke-dashoffset 1.1s cubic-bezier(0.22,1,0.36,1)" }} />
            {([[6,92],[60,80],[114,84],[168,54],[222,40],[294,14]] as [number,number][]).map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3.2" fill="var(--paper)" stroke="var(--ochre)" strokeWidth="2" style={{ opacity: step === 5 ? 1 : 0, transition: `opacity .4s ${i*120}ms` }} />
            ))}
          </svg>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            {[["Trafic","+340%"],["Top 10","×4"],["Leads","×4,6"]].map(([l,v]) => (
              <div key={l} style={{ flex: 1, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--ochre)", lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,0.6)", marginTop: 5, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SeoCommandRoomMethod() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const step = Math.min(M_STEPS.length - 1, Math.floor(p * M_STEPS.length));

  return (
    <section className="method" id="methode" ref={ref as React.RefObject<HTMLElement>} style={{ minHeight: "320vh", paddingBlock: 0 }}>
      <div style={{ position: "sticky", top: 0, paddingBlock: "clamp(56px,8vh,90px)", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,64px)", alignItems: "center" }} className="method__layout">
            <div>
              <span className="eyebrow kicker" style={{ marginBottom: 16, display: "inline-block" }}>Méthode · SEO Strategy Table</span>
              <h2 className="t-h2" style={{ color: "var(--ink-inverse)", margin: "0 0 14px" }}>
                Une table stratégique qui se construit, étape par étape.
              </h2>
              <p className="t-body" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "40ch", margin: "0 0 28px" }}>
                La méthode repose sur une progression lisible&nbsp;: du diagnostic brut jusqu&rsquo;au pilotage de la performance.
              </p>
              <div className="method__rail">
                {M_STEPS.map((s, i) => (
                  <div key={s.n} className={`mstep${i === step ? " active" : ""}`}>
                    <span className="mstep__n">{s.n} — {s.t}</span>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <Stage step={step} />
          </div>
        </div>
      </div>
    </section>
  );
}

export { SeoCommandRoomMethod as MethodTimeline };
