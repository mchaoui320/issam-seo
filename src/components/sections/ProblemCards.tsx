"use client";

import { AlertTriangle, Cable, Crosshair, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const problems = [
  {
    icon: AlertTriangle,
    title: "Priorités invisibles",
    desc: "Les sujets, erreurs techniques et opportunités se mélangent. Le diagnostic transforme ce bruit en séquence d'actions lisible.",
    tag: "Signal brut",
  },
  {
    icon: Crosshair,
    title: "Intentions dispersées",
    desc: "Les pages répondent à des thèmes, mais pas toujours aux intentions qui déclenchent la recherche, le clic ou la citation IA.",
    tag: "Intent mapping",
  },
  {
    icon: Cable,
    title: "Maillage sous-exploité",
    desc: "Les pages clés ne reçoivent pas assez de liens internes, ce qui limite le crawl, l'autorité transmise et la compréhension du site.",
    tag: "Architecture",
  },
  {
    icon: MapPin,
    title: "Signaux locaux faibles",
    desc: "Marseille, Paris ou un marché national demandent des preuves géographiques cohérentes, pas seulement une mention dans un titre.",
    tag: "Local layer",
  },
];

export function ProblemSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section section--soft problem-system" ref={sectionRef}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Problèmes · opportunités</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1">
            Un site ne devient pas visible par hasard. Il devient lisible par système.
          </h2>
          <p className="t-lead reveal reveal-d2">
            Le diagnostic identifie les frictions qui empêchent Google, les utilisateurs et les moteurs IA de comprendre pourquoi une page mérite d&apos;être visible.
          </p>
        </div>

        <div className="problem-grid reveal reveal-d3">
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="problem-card card--hover" key={item.title}>
                <div className="problem-card__top">
                  <span className="problem-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="chip chip--glass">{item.tag}</span>
                </div>
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-body">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
