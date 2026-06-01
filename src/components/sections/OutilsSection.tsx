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

const TOOLS = [
  {
    name: 'Search Console',
    cat: 'Indexation',
    color: '#2563EB',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    name: 'GA4',
    cat: 'Analytics',
    color: '#EC4899',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
      </svg>
    ),
  },
  {
    name: 'Screaming Frog',
    cat: 'Crawl',
    color: '#A855F7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
  },
  {
    name: 'Ahrefs',
    cat: 'Backlinks',
    color: '#06B6D4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    name: 'Semrush',
    cat: 'Mots-clés',
    color: '#2563EB',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Looker Studio',
    cat: 'Reporting',
    color: '#EC4899',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
      </svg>
    ),
  },
  {
    name: 'PageSpeed',
    cat: 'Performance',
    color: '#A855F7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>
      </svg>
    ),
  },
  {
    name: 'Moteurs IA',
    cat: 'GEO',
    color: '#06B6D4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/><path d="M20 14h2"/>
        <path d="M15 13v2"/><path d="M9 13v2"/>
      </svg>
    ),
  },
];

export function ToolsSection() {
  const sectionRef = useReveal();

  return (
    <section className="section" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Stack d&apos;analyse</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1" style={{ maxWidth: '620px', margin: '0 auto' }}>
            Une stack d&apos;analyse rigoureuse, pas de boîte noire.
          </h2>
          <p className="t-lead reveal reveal-d2" style={{ maxWidth: '540px', margin: '0 auto' }}>
            Les décisions s&apos;appuient sur des données vérifiables, croisées entre plusieurs sources de référence.
          </p>
        </div>

        <div className="tools reveal reveal-d3">
          {TOOLS.map((tool, i) => (
            <div key={i} className="tool">
              <div className="tool__ic" style={{ color: tool.color, background: `${tool.color}18` }}>
                {tool.icon}
              </div>
              <span className="tool__name">{tool.name}</span>
              <span className="tool__cat">{tool.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias
export { ToolsSection as OutilsSection };
