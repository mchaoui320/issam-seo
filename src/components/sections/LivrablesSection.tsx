"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

const DELIVERABLES = [
  {
    title: 'Audit & roadmap priorisée',
    desc: 'Analyse structurelle complète avec recommandations classées par impact et effort, prête à l\'implémentation.',
  },
  {
    title: 'Briefs de contenu EEAT',
    desc: 'Guides de rédaction structurés selon les critères Expertise, Autorité, Fiabilité — pour chaque page prioritaire.',
  },
  {
    title: 'Plan de maillage interne',
    desc: 'Cartographie des liens internes à créer pour concentrer l\'autorité sur les pages à fort potentiel.',
  },
  {
    title: 'Tableau de bord de suivi',
    desc: 'Dashboard Looker Studio connecté à Search Console et GA4 pour suivre les évolutions en temps réel.',
  },
];

export function DeliverablesSection() {
  const sectionRef = useReveal();

  return (
    <section className="section section--sand" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Les livrables</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Des documents de mission clairs, pas un rapport de 80 pages illisible.
          </h2>
        </div>

        <div className="deliv reveal reveal-d2">
          {DELIVERABLES.map((item, i) => (
            <div key={i} className="dfile">
              <div className="dfile__doc">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <div>
                <h3 className="t-h3" style={{ marginBottom: '0.35rem' }}>{item.title}</h3>
                <p className="t-body" style={{ color: 'var(--ink-2)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias
export { DeliverablesSection as LivrablesSection };
