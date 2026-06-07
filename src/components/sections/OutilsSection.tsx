"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { ToolConstellation } from "@/components/visuals/ToolConstellation";
import { useReveal } from "@/hooks/useReveal";

const decisions = [
  "Crawl et indexation",
  "Requêtes et intentions",
  "Contenu et entités",
  "Local et GEO",
  "Suivi acquisition",
];

export function ToolsSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section tools-system" id="outils" ref={sectionRef}>
      <div className="container">
        <div className="tools-system__grid">
          <div className="tools-system__copy">
            <div className="reveal">
              <span className="eyebrow kicker">Outils · données</span>
            </div>
            <h2 className="t-h2 reveal reveal-d1">
              Les outils ne décident pas. Ils alimentent un système de décision.
            </h2>
            <p className="t-lead reveal reveal-d2">
              Les données sont croisées pour éviter les angles morts : crawl, Search Console, analytics, mots-clés, contenu, signaux locaux et visibilité GEO.
            </p>
            <div className="signal-list reveal reveal-d3">
              {decisions.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="reveal reveal-d4">
              <MagneticButton href="#contact" variant="secondary">Structurer la visibilité</MagneticButton>
            </div>
          </div>

          <div className="reveal reveal-d2">
            <ToolConstellation />
          </div>
        </div>
      </div>
    </section>
  );
}

export { ToolsSection as OutilsSection };
