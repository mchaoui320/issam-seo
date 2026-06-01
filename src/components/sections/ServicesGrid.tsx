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

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
    title: 'Audit SEO',
    desc: 'Analyse complète de la structure, des performances et des opportunités manquées pour établir une roadmap priorisée.',
    bg: 'var(--clay-tint)',
    color: 'var(--clay)',
    badge: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'SEO local',
    desc: 'Optimisation Google Business Profile, cohérence NAP, signaux locaux et positionnement dans le pack Google Maps.',
    bg: 'var(--clay-tint)',
    color: 'var(--clay)',
    badge: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
      </svg>
    ),
    title: 'Stratégie de contenu',
    desc: 'Recherche de mots-clés, cartographie des intentions, briefs EEAT et plan éditorial orienté conversion.',
    bg: 'var(--clay-tint)',
    color: 'var(--clay)',
    badge: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
      </svg>
    ),
    title: 'Maillage interne',
    desc: 'Architecture de liens internes pour concentrer l\'autorité sur les pages prioritaires et faciliter le crawl.',
    bg: 'var(--clay-tint)',
    color: 'var(--clay)',
    badge: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'SEO technique',
    desc: 'Core Web Vitals, structure des URL, données structurées, logs serveur et accessibilité au crawl.',
    bg: 'var(--clay-tint)',
    color: 'var(--clay)',
    badge: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.94 14.66A4 4 0 0 1 5.34 10.06l-1.93-.64a.5.5 0 0 1 0-.84l1.93-.64A4 4 0 0 1 9.94 3.34l.64-1.93a.5.5 0 0 1 .84 0l.64 1.93a4 4 0 0 1 4.6 4.6l1.93.64a.5.5 0 0 1 0 .84l-1.93.64a4 4 0 0 1-4.6 4.6l-.64 1.93a.5.5 0 0 1-.84 0z"/>
      </svg>
    ),
    title: 'GEO · Référencement IA',
    desc: 'Optimisation de la structure de contenu pour être cité dans les réponses générées par les moteurs IA.',
    bg: 'var(--azur-tint)',
    color: 'var(--azur)',
    badge: 'Nouveau',
  },
];

export function ServicesSection() {
  const sectionRef = useReveal();

  return (
    <section className="section section--sand" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Les services</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1">
            Un accompagnement structuré, du diagnostic à l&apos;exécution.
          </h2>
        </div>

        <div className="svc-grid reveal reveal-d2">
          {SERVICES.map((svc, i) => (
            <div key={i} className="svc svc--hover">
              <div className="svc__ic" style={{ background: svc.bg, color: svc.color }}>
                {svc.icon}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h3 className="t-h3">{svc.title}</h3>
                {svc.badge && (
                  <span className="chip chip--ochre" style={{ fontSize: '0.65rem' }}>{svc.badge}</span>
                )}
              </div>
              <p className="t-body" style={{ color: 'var(--ink-2)', flexGrow: 1 }}>{svc.desc}</p>
              <a href="#contact" className="svc__more">
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="center reveal reveal-d3" style={{ marginTop: '2.5rem' }}>
          <a href="#contact" className="btn btn--primary btn--lg">
            Voir les services
          </a>
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias
export { ServicesSection as ServicesGrid };
