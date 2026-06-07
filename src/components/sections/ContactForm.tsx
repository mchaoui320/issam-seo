"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReveal } from "@/hooks/useReveal";

const needs = ["Audit SEO", "SEO local", "Stratégie contenu", "GEO · IA", "Refonte"];
const markets = ["Marseille", "Paris", "National", "À distance"];

export function ContactForm() {
  const sectionRef = useReveal<HTMLElement>();
  const [need, setNeed] = useState(needs[0]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section className="section contact-system" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-system__copy">
            <div className="reveal">
              <span className="eyebrow kicker">Contact</span>
            </div>
            <h2 className="t-h2 reveal reveal-d1">Transmettre la demande.</h2>
            <p className="t-lead reveal reveal-d2">
              L&apos;échange commence par la situation actuelle : site, marché, objectifs, contraintes et priorités visibles.
            </p>
            <ul className="contact-system__checks reveal reveal-d3">
              {[
                "Analyse initiale avant proposition commerciale",
                "Retour sous 24 h ouvrées",
                "Recommandations adaptées au marché et aux moyens",
              ].map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-panel reveal reveal-d2">
            {submitted ? (
              <div className="contact-success">
                <span>
                  <Check aria-hidden="true" />
                </span>
                <h3 className="t-h3">Demande reçue</h3>
                <p className="t-body">
                  Med Issam Chaoui reviendra vers vous sous 24 h ouvrées pour cadrer le diagnostic.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="nom">Nom</label>
                  <input id="nom" name="nom" placeholder="Nom et prénom" required type="text" />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" placeholder="adresse@email.fr" required type="email" />
                </div>

                <div className="field field--full">
                  <label htmlFor="site">Site web</label>
                  <input id="site" name="site" placeholder="https://votre-site.fr" type="url" />
                </div>

                <div className="field">
                  <label htmlFor="marche">Marché</label>
                  <select id="marche" name="marche" required>
                    <option value="">Sélectionner</option>
                    {markets.map((market) => (
                      <option key={market} value={market}>{market}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="budget">Cadre</label>
                  <select id="budget" name="budget">
                    <option value="">À préciser</option>
                    <option>Mission ponctuelle</option>
                    <option>Accompagnement mensuel</option>
                    <option>Refonte ou migration</option>
                  </select>
                </div>

                <div className="field field--full">
                  <label>Besoin principal</label>
                  <div className="seg" role="group" aria-label="Besoin principal">
                    {needs.map((item) => (
                      <button
                        aria-pressed={need === item}
                        key={item}
                        onClick={() => setNeed(item)}
                        type="button"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <input name="besoin" type="hidden" value={need} />
                </div>

                <div className="field field--full">
                  <label htmlFor="contexte">Contexte</label>
                  <textarea
                    id="contexte"
                    name="contexte"
                    placeholder="Marché ciblé, problèmes observés, objectifs, contraintes techniques ou calendrier."
                    rows={5}
                  />
                </div>

                <MagneticButton
                  className="form-submit"
                  disabled={sending}
                  type="submit"
                >
                  {sending ? "Transmission en cours" : "Transmettre la demande"}
                </MagneticButton>

                <p className="t-caption form-note">
                  Les informations sont utilisées uniquement pour répondre à la demande.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <Send className="contact-system__watermark" aria-hidden="true" />
    </section>
  );
}
