"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const signals = [
  { query: "canapé modulable fabriqué en France", channel: "Google", intent: "CAPTURE" },
  {
    query: "quel logiciel RH pour une PME de 50 salariés ?",
    channel: "ChatGPT",
    intent: "ANSWER",
  },
  { query: "meilleur hôtel spa près du Vieux-Port", channel: "Perplexity", intent: "LOCAL" },
  { query: "compare trois solutions de facturation pour artisans", channel: "Claude", intent: "TRUST" },
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
            <span /> MIC SIGNAL / ORGANIC SEARCH INTELLIGENCE
          </p>
          <h1>
            Devenez la marque
            <em>que les moteurs</em>
            recommandent.
          </h1>
          <p className="motion-hero__intro">
            Google classe. ChatGPT recommande. Claude synthétise. Maps décide du
            local. MIC SIGNAL construit le système qui rend votre marque trouvable,
            compréhensible et choisissable partout où la décision commence.
          </p>
          <div className="motion-hero__actions">
            <Link
              href="/contact"
              className="future-button future-button--primary"
            >
              Scanner mon territoire <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#territoires"
              className="future-button future-button--ghost"
            >
              Explorer le système <ArrowDown size={17} />
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

        <div className="motion-stage" aria-live="polite">
          <div className="motion-stage__head">
            <span>SEARCH TERRITORY / FR</span>
            <span>LIVE INDEX 2026</span>
          </div>
          <div className="motion-stage__canvas" aria-hidden="true">
            <div className="motion-stage__title">
              <strong>MIC</strong>
              <span>
                VISIBILITY
                <br />
                OPERATING SYSTEM
              </span>
            </div>
            <div className="motion-stage__rows">
              {signals.map((item, index) => (
                <div
                  key={item.query}
                  className={index === active ? "is-active" : ""}
                >
                  <span>0{index + 1}</span>
                  <strong>{item.query}</strong>
                  <small>{item.channel}</small>
                </div>
              ))}
            </div>
            <div className="motion-stage__scan" />
            <div className="motion-stage__coordinates">
              <span>43.2965° N</span>
              <span>2.3522° E</span>
              <span>DATA / INTENT / LOCAL</span>
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
              <span>{signal.intent}</span>
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
