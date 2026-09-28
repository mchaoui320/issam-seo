"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const signals = [
  {
    code: "SEO",
    query: "canapé modulable fabriqué en France",
    channel: "Google",
    intent: "DEMANDE",
    output: "PAGE DE DÉCISION",
    signal: "INTENTION FORTE",
  },
  {
    code: "GEO",
    query: "quel logiciel RH pour une PME de 50 salariés ?",
    channel: "ChatGPT",
    intent: "RÉPONSE",
    output: "SOURCE À CITER",
    signal: "SHORTLIST",
  },
  {
    code: "LOCAL",
    query: "meilleur hôtel spa près du Vieux-Port",
    channel: "Google Maps",
    intent: "PROXIMITÉ",
    output: "FICHE + PREUVES",
    signal: "ZONE ACTIVE",
  },
  {
    code: "DATA",
    query: "compare trois solutions de facturation pour artisans",
    channel: "Claude",
    intent: "CHOIX",
    output: "LEAD MESURÉ",
    signal: "CONVERSION",
  },
];

export function SignalHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % signals.length),
      3750,
    );
    return () => window.clearInterval(id);
  }, []);

  const signal = signals[active];

  return (
    <section className="motion-hero">
      <div className="motion-hero__aurora" aria-hidden="true" />
      <div className="motion-hero__grid wrap">
        <div className="motion-hero__copy">
          <p className="motion-hero__overline">
            <span /> CONSULTANT INDÉPENDANT / FRANCE
          </p>
          <h1>
            Consultant SEO,
            <em>GEO & data web.</em>
            <small>La recherche devient un canal de vente.</small>
          </h1>
          <p className="motion-hero__intro">
            On aide les entreprises à gagner les requêtes utiles sur Google, à
            devenir des sources dans ChatGPT, Claude, Gemini et Perplexity, puis
            à mesurer les contacts dans GA4. SEO technique, visibilité IA, SEO
            local et analytics avancent dans un même système.
          </p>
          <div className="motion-hero__actions">
            <Link
              href="/contact"
              className="future-button future-button--primary"
            >
              Cadrer mon projet <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#expertises"
              className="future-button future-button--ghost"
            >
              Voir les expertises <ArrowDown size={17} />
            </Link>
          </div>
          <div className="motion-hero__proof">
            <span>SEO TECH</span>
            <i />
            <span>GEO / LLMO</span>
            <i />
            <span>LOCAL</span>
            <i />
            <span>DATA</span>
          </div>
        </div>

        <div className="motion-stage motion-stage--reel" aria-live="polite">
          <div className="motion-stage__head">
            <span>MIC / SIGNAL MOTION INDEX</span>
            <span>15 SEC LOOP</span>
          </div>
          <div className="motion-stage__canvas" aria-hidden="true">
            <div className="motion-stage__kinetic">
              <span>SEARCH</span><span>ANSWER</span><span>LOCAL</span><span>MEASURE</span>
            </div>
            <div className="motion-stage__radar">
              <i /><i /><i /><i />
              <b />
            </div>
            <div className="motion-stage__title">
              <strong key={signal.code}>{signal.code}</strong>
              <span>
                {signal.signal}<br />{signal.output}
              </span>
            </div>
            <div className="motion-stage__scene" key={`${active}-${signal.query}`}>
              <small>{signal.channel} / {signal.intent}</small>
              <strong>{signal.query}</strong>
              <div>
                <span>REQUÊTE</span><i /><span>PREUVE</span><i /><span>CONTACT</span>
              </div>
            </div>
            <div className="motion-stage__rows">
              {signals.map((item, index) => (
                <div
                  key={item.query}
                  className={index === active ? "is-active" : ""}
                >
                  <span>0{index + 1}</span>
                  <strong>{item.query}</strong>
                  <small>{item.code}</small>
                </div>
              ))}
            </div>
            <div className="motion-stage__scan" />
            <div className="motion-stage__coordinates">
              <span>SEO / GEO</span>
              <span>LOCAL / DATA</span>
              <span>FRAME 0{active + 1} / 04</span>
            </div>
          </div>
          <div className="motion-stage__hud">
            <div className="motion-stage__topline">
              <span>LIVE SIGNAL</span>
              <span>0{active + 1} / 04</span>
            </div>
            <small>INTENT DETECTED</small>
            <strong>“{signal.query}”</strong>
            <div className="motion-stage__route">
              <span>{signal.channel}</span>
              <i aria-hidden="true" />
              <span>{signal.output}</span>
            </div>
          </div>
          <div className="motion-stage__switcher">
            {signals.map((item, index) => (
              <button
                key={item.query}
                type="button"
                aria-label={`Afficher la requête ${item.query}`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                0{index + 1}
              </button>
            ))}
          </div>
          <div className="motion-stage__timeline" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>

      <div className="motion-hero__rail" aria-label="Canaux couverts">
        <div className="wrap">
          <span>SEARCH SYSTEM ONLINE</span>
          <span>GOOGLE</span>
          <i />
          <span>CHATGPT</span>
          <i />
          <span>CLAUDE</span>
          <i />
          <span>PERPLEXITY</span>
          <i />
          <span>MAPS</span>
        </div>
      </div>
    </section>
  );
}
