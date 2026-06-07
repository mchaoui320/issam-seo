"use client";

import { Braces, FileSearch, Gauge, Map, Network, PenLine } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: FileSearch,
    title: "Audit SEO priorisé",
    desc: "Identifier les blocages techniques, structurels et éditoriaux, puis classer les actions selon l'impact, l'effort et le risque.",
    meta: "Diagnostic",
  },
  {
    icon: PenLine,
    title: "Stratégie de contenu",
    desc: "Cartographier les intentions, créer des clusters utiles et produire des briefs capables de guider l'exécution sans dilution.",
    meta: "Intentions",
  },
  {
    icon: Network,
    title: "Maillage interne",
    desc: "Relier les pages prioritaires, guider le crawl et transmettre l'autorité avec une architecture lisible pour Google et les utilisateurs.",
    meta: "Architecture",
  },
  {
    icon: Gauge,
    title: "SEO technique",
    desc: "Travailler l'indexation, les performances, les données structurées, les templates et les signaux qui conditionnent la découverte.",
    meta: "Crawl",
  },
  {
    icon: Map,
    title: "SEO local",
    desc: "Structurer les signaux géographiques pour Marseille, Paris ou un marché national : pages locales, entités, cohérence et preuves.",
    meta: "Local",
  },
  {
    icon: Braces,
    title: "GEO · Référencement IA",
    desc: "Préparer les contenus à être compris, cités et reliés dans les réponses génératives via entités, sources et formats structurés.",
    meta: "Answer engines",
  },
];

export function ServicesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section section--soft services-system" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Services</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1">
            Les problèmes SEO sont traités comme un système, pas comme une liste de tâches.
          </h2>
          <p className="t-lead reveal reveal-d2">
            Chaque levier renforce les autres : structure technique, intentions, contenu, maillage, local et GEO s&apos;alignent autour des objectifs d&apos;acquisition.
          </p>
        </div>

        <div className="svc-grid reveal reveal-d3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="svc svc--hover" key={service.title}>
                <div className="svc__meta">
                  <span>{service.meta}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="t-h3">{service.title}</h3>
                <p className="t-body">{service.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="center reveal reveal-d4" style={{ marginTop: 40 }}>
          <MagneticButton href="#contact">Étudier le projet</MagneticButton>
        </div>
      </div>
    </section>
  );
}

export { ServicesSection as ServicesGrid };
