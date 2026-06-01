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

export function SeoGeoSection() {
  const sectionRef = useReveal();

  return (
    <section className="section" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Deux leviers · une stratégie</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1" style={{ maxWidth: '680px', margin: '0 auto' }}>
            SEO classique et GEO : visible dans Google et dans les réponses IA.
          </h2>
        </div>

        <div className="split reveal reveal-d2" style={{ marginTop: '3rem', gap: '2rem', alignItems: 'stretch' }}>

          {/* SEO Card */}
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--clay-tint)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--clay)', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </span>
              <h3 className="t-h3">SEO classique</h3>
            </div>

            <p className="t-body" style={{ color: 'var(--ink-2)' }}>
              Positionnement sur les pages de résultats de Google. Chaque requête ciblée génère un flux de trafic organique récurrent et prévisible.
            </p>

            {/* Mini SERP preview */}
            <div className="serp__bar" style={{
              background: 'var(--paper-2)',
              borderRadius: 10,
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {/* Search bar */}
              <div style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: 8,
                padding: '0.5rem 0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <span className="t-small" style={{ color: 'var(--ink-2)', fontSize: '0.8rem' }}>consultant seo marseille</span>
              </div>

              {/* Result 1 (competitor) */}
              <div className="serp__res" style={{ padding: '0.5rem 0.75rem', borderRadius: 6 }}>
                <div className="serp__url t-small" style={{ color: '#1a73e8', fontSize: '0.72rem' }}>exemple-concurrent.fr › seo</div>
                <div className="serp__title" style={{ fontSize: '0.82rem', color: '#1a0dab', fontWeight: 500 }}>Agence SEO Marseille — Référencement local</div>
                <div className="serp__desc t-small" style={{ color: 'var(--ink-3)', fontSize: '0.72rem' }}>Optimisez votre visibilité locale avec une agence...</div>
              </div>

              {/* Result 2 (you — highlighted) */}
              <div className="serp__res" style={{
                padding: '0.5rem 0.75rem', borderRadius: 6,
                background: 'var(--clay-tint)',
                border: '1px solid var(--clay)',
                position: 'relative',
              }}>
                <div className="serp__rank" style={{
                  position: 'absolute', top: 6, right: 8,
                  fontSize: '0.65rem', fontWeight: 700, color: 'var(--clay)',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>Vous</div>
                <div className="serp__url t-small" style={{ color: '#1a73e8', fontSize: '0.72rem' }}>issam-seo.fr › marseille</div>
                <div className="serp__title" style={{ fontSize: '0.82rem', color: '#1a0dab', fontWeight: 500 }}>Consultant SEO Marseille — Med Issam Chaoui</div>
                <div className="serp__desc t-small" style={{ color: 'var(--ink-3)', fontSize: '0.72rem' }}>Stratégie SEO sur-mesure, audit et accompagnement...</div>
              </div>
            </div>
          </div>

          {/* GEO Card */}
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--azur-tint)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--azur)', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
                </svg>
              </span>
              <h3 className="t-h3">GEO · Référencement IA</h3>
            </div>

            <p className="t-body" style={{ color: 'var(--ink-2)' }}>
              Optimisation pour être cité comme source dans les réponses générées par les moteurs IA — ChatGPT, Perplexity, SGE et leurs successeurs.
            </p>

            {/* AI answer preview */}
            <div className="aians" style={{
              background: 'var(--paper-2)',
              borderRadius: 10,
              padding: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--azur)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
                </svg>
                <span className="t-small" style={{ fontWeight: 600, color: 'var(--azur)', fontSize: '0.78rem' }}>Réponse générée</span>
              </div>

              <p className="t-small" style={{ color: 'var(--ink-2)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Pour une stratégie SEO à Marseille, plusieurs experts recommandent une approche combinant optimisation technique et contenu local.{' '}
                <span className="cite" style={{
                  background: 'var(--azur-tint)',
                  borderRadius: 4,
                  padding: '0 4px',
                  color: 'var(--azur)',
                  fontWeight: 500,
                }}>Med Issam Chaoui</span>{' '}
                est cité pour sa méthode d&apos;audit structurelle et son ancrage Marseille/Paris.
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                <span className="chip chip--azur">Entité reconnue</span>
                <span className="chip chip--azur">Source citée</span>
                <span className="chip chip--azur">Réponse structurée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
