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

export function ProblemSection() {
  const sectionRef = useReveal();

  return (
    <section className="section section--sand" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">Le constat</span>
          </div>

          <h1 className="t-display reveal reveal-d1" style={{ maxWidth: '780px', margin: '0 auto' }}>
            La plupart des sites publient du contenu sans{' '}
            <span className="t-italic">système</span>.
          </h1>

          <p className="t-lead reveal reveal-d2" style={{ maxWidth: '620px', margin: '0 auto' }}>
            Le diagnostic identifie les points de friction : cannibalisation, maillage faible, intentions mal couvertes, signaux locaux absents.
          </p>
        </div>

        <div className="reveal reveal-d3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginTop: '3rem',
        }}>
          {[
            {
              title: 'Cannibalisation',
              desc: 'Plusieurs pages ciblent les mêmes requêtes, se neutralisent et perdent du potentiel de classement.',
            },
            {
              title: 'Maillage absent',
              desc: 'Les pages importantes ne reçoivent pas de liens internes suffisants pour concentrer l\'autorité.',
            },
            {
              title: 'Intentions mal couvertes',
              desc: 'Le contenu répond à des sujets mais ne correspond pas à ce que cherche réellement l\'utilisateur.',
            },
            {
              title: 'Signaux locaux insuffisants',
              desc: 'La cohérence NAP, les avis et la structure locale sont insuffisants pour le pack Google.',
            },
          ].map((item, i) => (
            <div key={i} className="card card--hover" style={{ padding: '1.75rem' }}>
              <h3 className="t-h3" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
              <p className="t-body" style={{ color: 'var(--ink-2)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
