"use client";

import { CheckCircle2, ClipboardCheck, Eye, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReveal } from "@/hooks/useReveal";

const proofItems = [
  {
    icon: ClipboardCheck,
    label: "Diagnostic documenté",
    value: "Constats reliés aux pages, requêtes, erreurs et opportunités.",
  },
  {
    icon: ShieldCheck,
    label: "Priorités justifiées",
    value: "Chaque action porte une raison, un effet attendu et une dépendance.",
  },
  {
    icon: Eye,
    label: "Suivi lisible",
    value: "Les indicateurs utiles sont observés sans noyer la décision.",
  },
  {
    icon: CheckCircle2,
    label: "Exécution claire",
    value: "Les livrables peuvent être transmis à une équipe interne ou un prestataire.",
  },
];

export function ProofSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section proof-system" id="preuve" ref={sectionRef}>
      <div className="container">
        <div className="proof-system__grid">
          <div>
            <div className="reveal">
              <span className="eyebrow kicker">Preuves · approche</span>
            </div>
            <h2 className="t-h2 reveal reveal-d1">
              La crédibilité vient de la méthode, des preuves et du suivi.
            </h2>
            <p className="t-lead reveal reveal-d2">
              L&apos;accompagnement évite les promesses magiques : les décisions reposent sur des constats, des priorités et une mesure continue.
            </p>
            <div className="reveal reveal-d3">
              <MagneticButton href="#contact">Planifier un échange</MagneticButton>
            </div>
          </div>

          <div className="proof-matrix reveal reveal-d2">
            {proofItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="proof-matrix__item" key={item.label}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ProofSection as ProofStrip };
