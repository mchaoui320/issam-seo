"use client";

import { useEffect, useRef, useState } from "react";

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

const NODES = [
  { id: 'pilier', label: 'PILIER', x: 200, y: 180 },
  { id: 'audit', label: 'Audit', x: 80, y: 80 },
  { id: 'local', label: 'Local', x: 320, y: 80 },
  { id: 'geo', label: 'GEO', x: 360, y: 200 },
  { id: 'contenu', label: 'Contenu', x: 300, y: 310 },
  { id: 'liens', label: 'Liens', x: 100, y: 310 },
  { id: 'technique', label: 'Tech', x: 40, y: 200 },
  { id: 'kw', label: 'KW', x: 200, y: 340 },
];

const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
  [1, 6], [2, 3], [4, 7], [5, 7], [3, 4],
];

export function HeroHome() {
  const sectionRef = useReveal();
  const [litEdges, setLitEdges] = useState<number[]>([]);

  useEffect(() => {
    let idx = 0;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    function light() {
      if (idx < EDGES.length) {
        const t = setTimeout(() => {
          setLitEdges(prev => [...prev, idx]);
          idx++;
          light();
        }, 560);
        timeouts.push(t);
      } else {
        const reset = setTimeout(() => {
          setLitEdges([]);
          idx = 0;
          light();
        }, 900);
        timeouts.push(reset);
      }
    }

    light();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="section" ref={sectionRef as React.RefObject<HTMLElement>} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="split" style={{ alignItems: 'center', gap: '4rem' }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Badge disponibilité */}
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%', background: 'var(--positive)',
                display: 'inline-block',
                boxShadow: '0 0 0 0 var(--positive)',
                animation: 'pulse-dot 2s infinite',
              }} />
              <span className="t-small" style={{ color: 'var(--positive)', fontWeight: 600 }}>Disponible pour nouveaux projets</span>
            </div>

            <h1 className="t-h1 reveal reveal-d1">
              Le SEO comme{' '}
              <span className="t-italic">architecture</span>{' '}
              d&apos;acquisition.
            </h1>

            <p className="t-lead reveal reveal-d2">
              Med Issam Chaoui accompagne les entreprises dans la construction d&apos;une visibilité organique durable — sur Google et dans les réponses des moteurs IA.
            </p>

            <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn--primary btn--lg">
                Réserver un diagnostic
              </a>
              <a href="#methode" className="btn btn--ghost btn--lg">
                Découvrir la méthode
              </a>
            </div>

            <p className="t-small reveal reveal-d4" style={{ color: 'var(--ink-3)' }}>
              Réponse sous 24 h ouvrées · Diagnostic sans engagement
            </p>

            {/* Stats strip */}
            <div className="reveal reveal-d5" style={{
              display: 'flex', gap: '2rem', flexWrap: 'wrap',
              borderTop: '1px solid var(--line)',
              paddingTop: '1.5rem',
              marginTop: '0.5rem',
            }}>
              {[
                { v: 'SEO + GEO', l: 'Double levier' },
                { v: 'Marseille', l: 'Ancrage local' },
                { v: '48 h', l: 'Délai de retour' },
                { v: 'Mesurable', l: 'Impact tracé' },
              ].map(s => (
                <div key={s.v} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <span className="t-mono" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--clay)' }}>{s.v}</span>
                  <span className="t-caption" style={{ color: 'var(--ink-3)' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: LinkGraph */}
          <div className="reveal reveal-d2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg
              viewBox="0 0 400 420"
              width="100%"
              style={{ maxWidth: 420, overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--azur)" />
                  <stop offset="55%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="var(--mauve)" />
                </linearGradient>
                <radialGradient id="gPilier" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--clay-tint)" />
                  <stop offset="100%" stopColor="#E8F0FF" />
                </radialGradient>
              </defs>

              {/* Edges */}
              {EDGES.map(([a, b], i) => {
                const na = NODES[a], nb = NODES[b];
                const isLit = litEdges.includes(i);
                return (
                  <line
                    key={i}
                    x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                    stroke={isLit ? 'url(#gEdge)' : 'var(--line)'}
                    strokeWidth={isLit ? 2 : 1}
                    strokeOpacity={isLit ? 1 : 0.5}
                    style={{ transition: 'stroke 0.4s, stroke-width 0.4s, stroke-opacity 0.4s' }}
                  />
                );
              })}

              {/* Nodes */}
              {NODES.map((n, i) => {
                const isPilier = i === 0;
                return (
                  <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
                    <circle
                      r={isPilier ? 36 : 24}
                      fill={isPilier ? 'url(#gPilier)' : 'var(--paper)'}
                      stroke={isPilier ? 'var(--clay)' : 'var(--line)'}
                      strokeWidth={isPilier ? 2 : 1}
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={isPilier ? 11 : 10}
                      fontWeight={isPilier ? 700 : 500}
                      fill={isPilier ? 'var(--clay)' : 'var(--ink-2)'}
                      fontFamily="inherit"
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
      `}</style>
    </section>
  );
}
