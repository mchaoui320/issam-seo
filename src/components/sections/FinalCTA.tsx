"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReveal } from "@/hooks/useReveal";

export function FinalCTA() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section section--deep final-system" ref={sectionRef}>
      <div className="container">
        <div className="final-system__inner center">
          <div className="reveal">
            <span className="eyebrow kicker">Prochaine étape</span>
          </div>
          <h2 className="t-h1 reveal reveal-d1">
            Structurer une visibilité qui reste compréhensible, mesurable et activable.
          </h2>
          <p className="t-lead reveal reveal-d2">
            Un échange permet de qualifier la situation actuelle, les priorités SEO/GEO et la meilleure trajectoire d&apos;exécution.
          </p>
          <div className="final-system__cta reveal reveal-d3">
            <MagneticButton href="#contact" variant="light">Planifier un échange</MagneticButton>
            <MagneticButton href="#services" variant="secondary">Voir les services</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
