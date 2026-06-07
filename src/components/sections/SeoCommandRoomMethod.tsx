"use client";

import { useEffect, useRef, useState } from "react";
import { SeoFlowEngine } from "@/components/visuals/SeoFlowEngine";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    n: "01",
    t: "Signals",
    d: "Mots-clés, pages, erreurs, entités et signaux locaux sont collectés sans les confondre avec des priorités.",
  },
  {
    n: "02",
    t: "Prioritization",
    d: "Les actions entrent dans une matrice impact, effort, dépendance et risque pour construire une séquence réaliste.",
  },
  {
    n: "03",
    t: "Architecture",
    d: "Les pages se regroupent en silos et clusters qui clarifient l'intention, le crawl et la profondeur du site.",
  },
  {
    n: "04",
    t: "Internal Linking",
    d: "Le maillage interne active les parcours, renforce les pages stratégiques et transmet les signaux utiles.",
  },
  {
    n: "05",
    t: "GEO Layer",
    d: "Les entités, réponses structurées et sources éditoriales rendent le contenu plus exploitable par les moteurs IA.",
  },
  {
    n: "06",
    t: "Measurement",
    d: "Les impressions, clics, leads et conversions sont suivis pour ajuster la stratégie sans inventer de faux chiffres.",
  },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>, disabled: boolean) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (disabled) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [disabled, ref]);

  return progress;
}

export function SeoCommandRoomMethod() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const progress = useScrollProgress(ref, reducedMotion);
  const step = reducedMotion ? 0 : Math.min(steps.length - 1, Math.floor(progress * steps.length));

  return (
    <section className="method method--flow" id="methode" ref={ref}>
      <div className="method__sticky">
        <div className="container">
          <div className="method__layout">
            <div className="method__copy">
              <span className="eyebrow kicker">Méthode · SEO Flow Engine</span>
              <h2 className="t-h2">
                Les signaux deviennent une stratégie exécutable.
              </h2>
              <p className="t-body">
                La méthode repose sur un flux clair : collecter, prioriser, structurer, relier, enrichir pour le GEO, puis mesurer les effets.
              </p>
              <div className="method__rail">
                {steps.map((item, index) => (
                  <article className={`mstep${index === step ? " active" : ""}`} key={item.n}>
                    <span className="mstep__n">{item.n} · {item.t}</span>
                    <p>{item.d}</p>
                  </article>
                ))}
              </div>
            </div>
            <SeoFlowEngine step={step} />
          </div>
        </div>
      </div>
    </section>
  );
}

export { SeoCommandRoomMethod as MethodTimeline };
