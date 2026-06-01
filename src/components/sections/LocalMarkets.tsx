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

export function CitiesSection() {
  const sectionRef = useReveal();

  return (
    <section className="section" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Présence locale</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1">
            Marseille &amp; Paris — et à distance.
          </h2>
          <p className="t-lead reveal reveal-d2" style={{ maxWidth: '520px', margin: '0 auto' }}>
            L&apos;accompagnement s&apos;adapte à votre marché géographique : ancrage local fort ou rayonnement national.
          </p>
        </div>

        <div className="cities reveal reveal-d3">
          {/* Marseille */}
          <div className="city">
            <div
              className="city__map"
              style={{
                background: 'linear-gradient(160deg, #E7F0FF, #CFFAFE)',
                borderRadius: 16,
                overflow: 'hidden',
                minHeight: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 320 180" width="100%" height="180" aria-hidden="true">
                {/* Coastal arc — abstract Marseille coastline */}
                <path
                  d="M 20 160 Q 80 120 140 100 Q 200 80 280 50"
                  fill="none" stroke="#2563EB" strokeWidth="2.5" strokeOpacity="0.4" strokeDasharray="6 4"
                />
                <path
                  d="M 40 170 Q 100 130 160 110 Q 220 90 300 60"
                  fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.3"
                />
                {/* Points along coast */}
                {[[140, 100], [200, 80], [260, 58], [80, 130]].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r={i === 0 ? 7 : 4}
                    fill={i === 0 ? '#2563EB' : '#06B6D4'} fillOpacity={i === 0 ? 0.8 : 0.5}
                  />
                ))}
                {/* City label in SVG */}
                <text x="148" y="90" fontSize="11" fontWeight="700" fill="#1D4ED8" fontFamily="inherit" textAnchor="middle">Marseille</text>
              </svg>
            </div>
            <div style={{ padding: '1.25rem 0.25rem' }}>
              <div className="city__tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Marseille · PACA
              </div>
              <h3 className="t-h3" style={{ marginTop: '0.5rem' }}>Ancrage local Méditerranée</h3>
              <p className="t-body" style={{ color: 'var(--ink-2)', marginTop: '0.5rem' }}>
                Connaissance fine du tissu économique local, des habitudes de recherche et des acteurs présents dans le pack Google marseillais.
              </p>
            </div>
          </div>

          {/* Paris */}
          <div className="city">
            <div
              className="city__map"
              style={{
                background: 'linear-gradient(160deg, #F3E8FF, #FCE7F3)',
                borderRadius: 16,
                overflow: 'hidden',
                minHeight: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 320 180" width="100%" height="180" aria-hidden="true">
                {/* Concentric circles — abstract arrondissements */}
                {[60, 45, 30, 18].map((r, i) => (
                  <circle key={i} cx={160} cy={90} r={r}
                    fill="none"
                    stroke={i % 2 === 0 ? '#A855F7' : '#EC4899'}
                    strokeWidth={1.5}
                    strokeOpacity={0.3 + i * 0.1}
                  />
                ))}
                <circle cx={160} cy={90} r={7} fill="#A855F7" fillOpacity={0.8} />
                {/* Radial lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  return (
                    <line key={i}
                      x1={160} y1={90}
                      x2={160 + 60 * Math.cos(rad)}
                      y2={90 + 60 * Math.sin(rad)}
                      stroke="#A855F7" strokeWidth="1" strokeOpacity="0.2"
                    />
                  );
                })}
                <text x="160" y="80" fontSize="11" fontWeight="700" fill="#7C3AED" fontFamily="inherit" textAnchor="middle">Paris</text>
              </svg>
            </div>
            <div style={{ padding: '1.25rem 0.25rem' }}>
              <div className="city__tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Paris · Île-de-France
              </div>
              <h3 className="t-h3" style={{ marginTop: '0.5rem' }}>Marchés compétitifs nationaux</h3>
              <p className="t-body" style={{ color: 'var(--ink-2)', marginTop: '0.5rem' }}>
                Accompagnement d&apos;entreprises parisiennes dans des secteurs à forte concurrence, avec une stratégie SEO adaptée aux volumes de recherche franciliens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias
export { CitiesSection as LocalMarkets };
