import type { Metadata } from "next";
import { OutilsSection } from "@/components/sections/OutilsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils SEO utilisés — Stack technique & sémantique",
  description: "Crawl, audit, recherche sémantique, suivi de performance, SEO local et GEO : présentation des outils utilisés dans les missions SEO.",
};

export default function OutilsSeoPage() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", paddingBottom: 0, position: "relative", overflow: "hidden" }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Outillage</div>
          <h1 className="display-xl" style={{ maxWidth: 720, marginBottom: 24 }}>
            Outils SEO, GEO et analytics utilisés dans les missions
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 620, lineHeight: 1.75, marginBottom: 36 }}>
            Les outils sélectionnés couvrent l'ensemble du spectre d'une mission SEO : crawl technique, recherche sémantique, analyse de la concurrence, suivi de performance, SEO local et optimisation pour les moteurs de réponse.
          </p>
          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 600, lineHeight: 1.7, fontStyle: "italic" }}>
            Les outils détectent des signaux. La stratégie consiste à décider lesquels traiter, dans quel ordre, avec quel objectif business et sur quelles pages.
          </p>
        </div>
      </section>

      <OutilsSection />

      {/* Section complémentaire */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-eyebrow">Pourquoi les outils ne suffisent pas</div>
          <h2 className="display-md" style={{ marginBottom: 20, marginTop: 8 }}>
            Un outil donne des données. Une stratégie décide quoi en faire.
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 16 }}>
            Screaming Frog peut identifier 400 problèmes techniques. L'enjeu est de savoir lesquels bloquer le crawl, lesquels impactent l'indexation des pages business et lesquels sont négligeables. Cette hiérarchisation dépend de la connaissance du site, du secteur et des objectifs business — pas de l'outil seul.
          </p>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 36 }}>
            De la même façon, un outil de recherche sémantique peut suggérer 2 000 mots-clés. La valeur n'est pas dans la liste — elle est dans la capacité à identifier les 12 requêtes qui méritent une page dédiée, les 30 qui renforcent une page existante et les 50 qui alimentent une stratégie éditoriale.
          </p>
          <Link href="/contact" className="btn btn-green">
            Demander un diagnostic SEO
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
