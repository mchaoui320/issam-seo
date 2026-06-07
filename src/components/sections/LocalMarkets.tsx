"use client";

import { LocalSignalMap } from "@/components/visuals/LocalSignalMap";
import { useReveal } from "@/hooks/useReveal";

const markets = [
  {
    title: "Marseille · PACA",
    desc: "Ancrer les pages, les entités locales et les signaux business dans un marché méditerranéen très concurrentiel.",
  },
  {
    title: "Paris · Île-de-France",
    desc: "Structurer une présence dans des environnements à forte densité concurrentielle avec des signaux clairs et vérifiables.",
  },
  {
    title: "National · à distance",
    desc: "Déployer la méthode sur des marchés plus larges lorsque l'enjeu dépasse la ville ou la zone de chalandise.",
  },
];

export function CitiesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section local-system" ref={sectionRef}>
      <div className="container">
        <div className="local-system__grid">
          <div className="local-system__visual reveal">
            <LocalSignalMap />
          </div>

          <div className="local-system__copy">
            <div className="reveal">
              <span className="eyebrow kicker">Marseille · Paris</span>
            </div>
            <h2 className="t-h2 reveal reveal-d1">
              Les signaux locaux doivent former une carte cohérente.
            </h2>
            <p className="t-lead reveal reveal-d2">
              L&apos;accompagnement s&apos;adapte au territoire ciblé : visibilité locale, marché parisien, rayonnement national ou pilotage à distance.
            </p>
            <div className="local-market-list reveal reveal-d3">
              {markets.map((market) => (
                <article key={market.title}>
                  <h3>{market.title}</h3>
                  <p>{market.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CitiesSection as LocalMarkets };
