import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultant SEO ou agence SEO — lequel choisir ?",
  description: "Différences entre consultant SEO indépendant et agence SEO : interlocuteur, réactivité, coût, capacité d'exécution et niveau d'accompagnement.",
};

const consultantAvantages = [
  "Interlocuteur unique — vous savez qui travaille sur votre site",
  "Réactivité plus élevée sur les décisions stratégiques",
  "Vision globale sans silos entre SEO technique et contenu",
  "Coût maîtrisé sans frais de structure",
  "Accompagnement adapté à votre maturité",
  "Transmission directe des recommandations à votre équipe",
];

const agenceAvantages = [
  "Équipe multi-compétences disponible en parallèle",
  "Capacité de production plus importante",
  "Structure formelle rassurante pour les grands groupes",
  "Processus documentés et délégation interne",
  "Résilience si un consultant change",
];

const casConsultant = [
  { title: "PME avec une stratégie SEO à structurer", desc: "Un consultant peut définir, prioriser et superviser l'ensemble sans overhead." },
  { title: "Site en refonte avec enjeux SEO", desc: "La réactivité d'un consultant permet d'intervenir rapidement sur des décisions critiques." },
  { title: "Budget maîtrisé avec vision stratégique", desc: "Moins de frais de structure — plus investi directement dans l'expertise." },
  { title: "Besoin d'une vision transversale", desc: "Un consultant couvre technique, contenu, local et GEO sans fragmenter la stratégie." },
];

export default function ConsultantOuAgencePage() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Comparatif</div>
          <h1 className="display-xl" style={{ maxWidth: 780, marginBottom: 24 }}>
            Consultant SEO indépendant ou agence SEO : lequel choisir pour votre projet ?
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 640, lineHeight: 1.75 }}>
            Les deux modèles ont leurs forces. Le choix dépend de votre structure, de vos objectifs, de votre budget et du niveau d'accompagnement dont vous avez besoin.
          </p>
        </div>
      </section>

      {/* Comparatif */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="comp-grid">
            {/* Consultant */}
            <div className="card" style={{ padding: 36, borderColor: "rgba(0,232,122,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,232,122,0.1)", border: "1px solid rgba(0,232,122,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--green)", letterSpacing: "0.06em" }}>INDEP.</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Consultant SEO</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Interlocuteur unique</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {consultantAvantages.map((a) => (
                  <li key={a} style={{ display: "flex", gap: 10, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", marginTop: 7, flexShrink: 0 }} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agence */}
            <div className="card" style={{ padding: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--cyan)", letterSpacing: "0.06em" }}>AGENCE</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Agence SEO</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Équipe dédiée</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {agenceAvantages.map((a) => (
                  <li key={a} style={{ display: "flex", gap: 10, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", marginTop: 7, flexShrink: 0 }} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas où un consultant est le bon choix */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Cas d'usage</div>
          <h2 className="display-md" style={{ maxWidth: 620, marginBottom: 48 }}>
            Quand un consultant SEO est le bon choix
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {casConsultant.map((c, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", marginBottom: 14 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {c.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn btn-green">
              Étudier la faisabilité de votre projet
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 680px) { .comp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
