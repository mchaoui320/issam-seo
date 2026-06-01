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

const BESOINS = ['Audit SEO', 'SEO local', 'Stratégie', 'GEO · IA', 'Refonte'];
const MARCHES = ['Marseille', 'Paris', 'National', 'À distance'];

export function ContactForm() {
  const sectionRef = useReveal();
  const [besoin, setBesoin] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section className="section" id="contact" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="split" style={{ alignItems: 'flex-start', gap: '4rem' }}>

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="reveal">
              <span className="eyebrow kicker">Contact</span>
            </div>
            <h2 className="t-h2 reveal reveal-d1">Lancer le diagnostic</h2>
            <p className="t-lead reveal reveal-d2" style={{ maxWidth: '380px' }}>
              L&apos;accompagnement commence par une analyse de la situation actuelle — avant toute proposition commerciale.
            </p>

            <ul className="reveal reveal-d3" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                'Audit préliminaire offert lors du premier échange',
                'Réponse sous 24 h ouvrées, sans engagement',
                'Proposition adaptée au budget et aux objectifs',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{
                    flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                    background: 'var(--positive-tint)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 2,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--positive)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  <span className="t-body" style={{ color: 'var(--ink-2)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="card reveal reveal-d2" style={{ padding: '2rem', width: '100%' }}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 0', textAlign: 'center' }}>
                <span style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--positive-tint)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--positive)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </span>
                <h3 className="t-h3">Demande reçue</h3>
                <p className="t-body" style={{ color: 'var(--ink-2)', maxWidth: 320 }}>
                  Med Issam Chaoui reviendra vers vous sous 24 h ouvrées pour organiser un premier échange.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="field">
                    <label className="t-small" htmlFor="nom" style={{ fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>Nom</label>
                    <input id="nom" type="text" name="nom" required placeholder="Votre nom" />
                  </div>
                  <div className="field">
                    <label className="t-small" htmlFor="email" style={{ fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>Email</label>
                    <input id="email" type="email" name="email" required placeholder="votre@email.com" />
                  </div>
                </div>

                <div className="field field--full">
                  <label className="t-small" htmlFor="site" style={{ fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>Site web</label>
                  <input id="site" type="url" name="site" placeholder="https://votre-site.fr" />
                </div>

                <div className="field field--full">
                  <label className="t-small" htmlFor="marche" style={{ fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>Marché</label>
                  <select id="marche" name="marche" required>
                    <option value="">Sélectionner un marché</option>
                    {MARCHES.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div className="field field--full">
                  <label className="t-small" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Besoin principal</label>
                  <div className="seg">
                    {BESOINS.map(b => (
                      <button
                        key={b}
                        type="button"
                        className={besoin === b ? 'active' : ''}
                        onClick={() => setBesoin(b)}
                        style={{
                          background: besoin === b ? 'var(--clay)' : 'transparent',
                          color: besoin === b ? '#fff' : 'var(--ink-2)',
                          border: besoin === b ? '1px solid var(--clay)' : '1px solid var(--line)',
                          borderRadius: 8,
                          padding: '0.4rem 0.85rem',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          fontSize: '0.82rem',
                          fontWeight: besoin === b ? 600 : 400,
                          transition: 'all 0.15s',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="besoin" value={besoin} />
                </div>

                <div className="field field--full">
                  <label className="t-small" htmlFor="contexte" style={{ fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>Contexte</label>
                  <textarea
                    id="contexte"
                    name="contexte"
                    rows={4}
                    placeholder="Décrivez brièvement votre situation actuelle, vos objectifs et les défis rencontrés..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  disabled={sending}
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Envoi en cours…' : 'Envoyer la demande'}
                </button>

                <p className="t-caption" style={{ color: 'var(--ink-3)', textAlign: 'center', marginTop: '0.5rem' }}>
                  Les données ne sont utilisées que pour répondre à la demande.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
