"use client";

import { FileText, GitBranch, LayoutList, LineChart } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const deliverables = [
  {
    icon: LayoutList,
    title: "Roadmap priorisée",
    desc: "Actions classées par impact, effort, dépendance et niveau de risque, avec une logique d'exécution claire.",
  },
  {
    icon: FileText,
    title: "Briefs de contenu",
    desc: "Intentions, angles éditoriaux, entités, structure de page et recommandations EEAT pour guider la production.",
  },
  {
    icon: GitBranch,
    title: "Plan de maillage",
    desc: "Cartographie des liens internes, ancres recommandées et pages stratégiques à renforcer.",
  },
  {
    icon: LineChart,
    title: "Cadre de suivi",
    desc: "Indicateurs à observer, sources de données et rythme d'analyse pour piloter sans bruit inutile.",
  },
];

export function DeliverablesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section section--soft deliverable-system" ref={sectionRef}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Livrables</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1">
            Ce qui est remis doit pouvoir être compris, transmis et exécuté.
          </h2>
          <p className="t-lead reveal reveal-d2">
            L&apos;accompagnement produit des supports opérationnels, pas un rapport massif qui reste dans un dossier.
          </p>
        </div>

        <div className="deliv reveal reveal-d3">
          {deliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="dfile" key={item.title}>
                <div className="dfile__doc" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <span className="dfile__index">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="t-h3">{item.title}</h3>
                  <p className="t-body">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { DeliverablesSection as LivrablesSection };
