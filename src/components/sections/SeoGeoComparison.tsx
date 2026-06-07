"use client";

import { Bot, Search, Sparkles } from "lucide-react";
import { GeoEntityPulse } from "@/components/visuals/GeoEntityPulse";
import { useReveal } from "@/hooks/useReveal";

const seoSignals = ["Structure crawlable", "Pages par intention", "Maillage interne", "Signaux locaux"];
const geoSignals = ["Entités nommées", "Sources citées", "Réponses structurées", "Preuves éditoriales"];

export function SeoGeoSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section seo-geo-system" id="seo-geo" ref={sectionRef}>
      <div className="container">
        <div className="section-head center">
          <div className="reveal">
            <span className="eyebrow kicker">SEO + GEO</span>
          </div>
          <h2 className="t-h2 reveal reveal-d1">
            Être trouvé dans les résultats Google. Être compris dans les réponses IA.
          </h2>
          <p className="t-lead reveal reveal-d2">
            La stratégie relie les requêtes, les entités, les contenus et les preuves pour construire une visibilité durable dans les deux environnements.
          </p>
        </div>

        <div className="seo-geo-grid">
          <article className="intelligence-panel reveal reveal-d2">
            <div className="panel-heading">
              <span className="panel-heading__icon panel-heading__icon--blue">
                <Search aria-hidden="true" />
              </span>
              <div>
                <span className="eyebrow">SEO classique</span>
                <h3 className="t-h3">Optimiser le chemin vers le clic.</h3>
              </div>
            </div>
            <p className="t-body">
              Les pages sont structurées pour couvrir les intentions utiles, faciliter le crawl et orienter l&apos;autorité interne vers les zones à fort potentiel.
            </p>
            <div className="signal-list">
              {seoSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <div className="future-serp" aria-hidden="true">
              <div className="future-serp__bar">
                <Search aria-hidden="true" />
                consultant seo marseille
              </div>
              <div className="future-serp__result">
                <span>issam-seo.fr / diagnostic</span>
                <strong>Audit SEO priorisé pour une visibilité durable</strong>
                <p>Architecture, contenu, maillage, local et mesure.</p>
              </div>
              <div className="future-serp__result future-serp__result--soft">
                <span>issam-seo.fr / geo</span>
                <strong>Structurer les sources pour les moteurs IA</strong>
              </div>
            </div>
          </article>

          <article className="intelligence-panel intelligence-panel--visual reveal reveal-d3">
            <GeoEntityPulse />
          </article>

          <article className="intelligence-panel reveal reveal-d4">
            <div className="panel-heading">
              <span className="panel-heading__icon panel-heading__icon--pink">
                <Bot aria-hidden="true" />
              </span>
              <div>
                <span className="eyebrow">GEO · moteurs IA</span>
                <h3 className="t-h3">Optimiser le chemin vers la citation.</h3>
              </div>
            </div>
            <p className="t-body">
              Les contenus deviennent plus faciles à extraire, citer et relier : entités claires, réponses structurées, sources fiables et contexte éditorial solide.
            </p>
            <div className="signal-list signal-list--pink">
              {geoSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <div className="answer-card" aria-hidden="true">
              <div>
                <Sparkles aria-hidden="true" />
                Réponse générative
              </div>
              <p>
                La source recommandée relie audit, architecture, SEO local et GEO dans une méthode structurée, vérifiable et actionnable.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
