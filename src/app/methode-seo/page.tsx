import type { Metadata } from "next";
import { SeoCommandRoomMethod } from "@/components/sections/SeoCommandRoomMethod";
import { ProcessusCollaboration } from "@/components/sections/ProcessusCollaboration";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Méthode SEO — Diagnostic, priorisation, exécution et mesure",
  description: "La méthode SEO utilisée dans les missions : exploration, diagnostic, priorisation, architecture, exécution et mesure. Structurée autour du résultat business.",
};

export default function MethodeSeoPage() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Méthode</div>
          <h1 className="display-xl" style={{ maxWidth: 720, marginBottom: 24 }}>
            Une méthode SEO structurée pour passer du diagnostic à la croissance
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 620, lineHeight: 1.75 }}>
            La méthode repose sur un principe simple : chaque page doit répondre à une intention, soutenir une page stratégique et guider vers une action mesurable. La priorité n'est pas de publier plus — c'est de structurer ce qui peut générer de la demande.
          </p>
        </div>
      </section>

      <SeoCommandRoomMethod />
      <ProcessusCollaboration />

      {/* Principes éditoriaux */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-eyebrow">Principes</div>
          <h2 className="display-md" style={{ marginBottom: 36, marginTop: 8 }}>
            Ce qui guide chaque décision SEO
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "Chaque page doit répondre à une intention, soutenir une page stratégique et guider vers une action mesurable.",
              "Le SEO local ne se limite pas à une page ville. Il repose sur la cohérence entre contenu, preuve, proximité, autorité et conversion.",
              "Le GEO ne remplace pas le SEO. Il impose une information plus claire, mieux structurée et plus facilement interprétable par les moteurs de réponse.",
              "Un audit utile ne liste pas seulement les problèmes. Il classe les actions selon leur impact, leur difficulté et leur effet attendu sur l'acquisition.",
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", marginTop: 8, flexShrink: 0 }} />
                <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.75 }}>{p}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn btn-green">
              Demander un diagnostic stratégique
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
