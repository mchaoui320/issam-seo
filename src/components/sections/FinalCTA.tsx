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

export function FinalCTA() {
  const sectionRef = useReveal();

  return (
    <section
      className="section section--olive"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ background: 'var(--grad-deep)' }}
    >
      <div className="container">
        <div className="section-head center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>

          <div className="reveal">
            <span className="eyebrow kicker" style={{ color: 'var(--ochre)' }}>Prochaine étape</span>
          </div>

          <h1 className="t-h1 reveal reveal-d1" style={{ color: '#fff', maxWidth: '640px', textAlign: 'center' }}>
            Construire une visibilité durable, sur Google et dans les moteurs IA.
          </h1>

          <p className="t-lead reveal reveal-d2" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px', textAlign: 'center' }}>
            Un échange de 30 minutes pour comprendre la situation et définir les priorités — sans engagement, sans prospectus.
          </p>

          <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" className="btn btn--onolive btn--lg" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4"/><path d="M16 2v4"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
                <path d="M3 10h18"/>
              </svg>
              Réserver un diagnostic
            </a>
            <a href="#services" className="btn btn--linkonolive btn--lg">
              Voir les services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
