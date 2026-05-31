import type { Metadata } from "next";
import { LivrablesSection } from "@/components/sections/LivrablesSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livrables SEO — Audit, roadmap, briefs, maillage et dashboard",
  description: "Les livrables d'une mission SEO : rapport d'audit priorisé, roadmap, mapping sémantique, architecture, briefs de contenu, recommandations techniques et dashboard.",
};

export default function LivrablesSeoPage() {
  return (
    <main style={{ paddingTop: 100 }}>
      <section style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Livrables</div>
          <h1 className="display-xl" style={{ maxWidth: 720, marginBottom: 24 }}>
            Des livrables SEO conçus pour être utilisés, pas seulement lus
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 620, lineHeight: 1.75 }}>
            Chaque livrable est structuré pour permettre une prise de décision claire : quoi faire, pourquoi, dans quel ordre et avec quel résultat attendu. Le format est adapté aux équipes techniques, marketing et direction.
          </p>
        </div>
      </section>

      <LivrablesSection />

      {/* Format de livraison */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-eyebrow">Format & délais</div>
          <h2 className="display-md" style={{ marginBottom: 24, marginTop: 8 }}>
            Comment les livrables sont transmis
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="format-grid">
            {[
              { title: "Notion", desc: "Espace partagé pour les audits, roadmaps, briefs et suivis. Accessible en temps réel, commentable et exportable." },
              { title: "PDF structuré", desc: "Format synthétique pour les rapports d'audit et les recommandations techniques à transmettre à un développeur." },
              { title: "Looker Studio", desc: "Dashboard de suivi automatique connecté à Search Console et GA4. Mis à jour en temps réel." },
              { title: "Tableur structuré", desc: "Pour le mapping sémantique, le plan de maillage et le suivi des positions par page." },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{f.title}</div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn btn-green">
              Identifier les livrables adaptés à votre situation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 600px) { .format-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
