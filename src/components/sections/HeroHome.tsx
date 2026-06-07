"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { FutureSearchHeroVisual } from "@/components/visuals/FutureSearchHeroVisual";
import { useReveal } from "@/hooks/useReveal";

const signals = [
  { value: "SEO + GEO", label: "Google et moteurs de réponse" },
  { value: "Architecture", label: "Pages, entités, maillage" },
  { value: "Marseille · Paris", label: "Local, national, distance" },
  { value: "Roadmap", label: "Actions priorisées et suivies" },
];

export function HeroHome() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="hero hero--future" ref={sectionRef}>
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container">
        <div className="hero__row">
          <div className="hero__left">
            <div className="hero__avail reveal">
              <span className="hero__dot" />
              Future Search Intelligence · SEO & GEO
            </div>

            <h1 className="t-display hero__title reveal reveal-d1">
              Future Search Intelligence.
            </h1>

            <p className="t-lead hero__lead reveal reveal-d2">
              Visibilité organique premium pour Google et les moteurs IA. Med Issam Chaoui accompagne les entreprises dans la construction d&apos;un système SEO & GEO clair :
              audit priorisé, architecture de contenu, maillage interne, signaux locaux et optimisation pour les réponses génératives.
            </p>

            <div className="hero__cta reveal reveal-d3">
              <MagneticButton href="#contact">Demander un diagnostic SEO</MagneticButton>
              <MagneticButton href="#methode" variant="secondary">Explorer la méthode</MagneticButton>
            </div>

            <p className="t-caption hero__note reveal reveal-d4">
              Diagnostic initial, priorités actionnables, trajectoire mesurable. Sans promesse artificielle ni jargon inutile.
            </p>
          </div>

          <div className="hero__visual reveal reveal-d2">
            <FutureSearchHeroVisual />
          </div>
        </div>

        <div className="hero__stats reveal reveal-d5" aria-label="Axes de l'accompagnement">
          {signals.map((signal) => (
            <div className="hero__stat" key={signal.value}>
              <span className="hero__stat-v">{signal.value}</span>
              <span className="hero__stat-l">{signal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
