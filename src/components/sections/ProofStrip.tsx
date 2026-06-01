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

const METRICS = [
  {
    label: 'Trafic organique mensuel',
    before: '420 visites',
    after: '1 840 visites',
  },
  {
    label: 'Positions top 10',
    before: '8 mots-clés',
    after: '34 mots-clés',
  },
  {
    label: 'Leads générés / mois',
    before: '3',
    after: '14',
  },
  {
    label: 'Pack local Google',
    before: 'Absent',
    after: 'Top 3',
  },
];

export function ProofSection() {
  const sectionRef = useReveal();

  return (
    <section className="section section--paper2" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="split" style={{ alignItems: 'center', gap: '4rem' }}>

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="reveal">
              <span className="eyebrow kicker">Résultats</span>
            </div>
            <h2 className="t-h2 reveal reveal-d1" style={{ maxWidth: '440px' }}>
              Des résultats mesurables, pas des promesses.
            </h2>
            <p className="t-lead reveal reveal-d2" style={{ maxWidth: '400px' }}>
              La méthode repose sur des indicateurs concrets, suivis mois après mois, avec un tableau de bord partagé en temps réel.
            </p>
            <div className="reveal reveal-d3">
              <a href="#contact" className="btn btn--primary btn--lg">
                Demander un diagnostic
              </a>
            </div>
            <p className="t-caption reveal reveal-d4" style={{ color: 'var(--ink-3)', maxWidth: '380px' }}>
              * Données anonymisées. Résultats variables selon secteur et marché.
            </p>
          </div>

          {/* Right: metrics card */}
          <div className="card reveal reveal-d2" style={{ padding: '2rem', flexShrink: 0, width: '100%', maxWidth: 420 }}>
            <div className="metrics">
              {METRICS.map((m, i) => (
                <div key={i} className="mrow">
                  <span className="mrow__l t-small" style={{ color: 'var(--ink-2)' }}>{m.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="mrow__before">{m.before}</span>
                    <span className="mrow__arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--positive)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </span>
                    <span className="mrow__after mrow__v" style={{ color: 'var(--positive)', fontWeight: 700 }}>{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias
export { ProofSection as ProofStrip };
