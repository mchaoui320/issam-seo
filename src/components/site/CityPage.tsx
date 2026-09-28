import Link from "next/link";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import type { LocalMarket } from "@/lib/cities";
import { marketPath, keywordVariants, primaryKeyword } from "@/lib/cities";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumb,
  graph,
  person,
  professionalService,
  website,
} from "@/lib/schema";
import { siteUrl } from "@/lib/seo";

export function CityPage({ market }: { market: LocalMarket }) {
  const path = marketPath(market);
  const localService = {
    "@type": "Service",
    name: `Agence SEO et référencement naturel à ${market.city}`,
    serviceType: [
      "Agence SEO",
      "Référencement naturel",
      "Audit SEO",
      "SEO local",
      "Generative Engine Optimization",
      "Audit de visibilité IA",
    ],
    url: `${siteUrl}${path}`,
    areaServed: {
      "@type": "City",
      name: market.city,
      containedInPlace: { "@type": "AdministrativeArea", name: market.region },
    },
    provider: { "@id": `${siteUrl}/#business` },
  };

  return (
    <>
      <JsonLd
        data={graph(
          person(),
          website(),
          professionalService(),
          localService,
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "SEO local", path: "/seo-local" },
            { name: `Consultant SEO ${market.city}`, path },
          ]),
        )}
      />

      <section className="city-hero">
        <div className="wrap city-hero__grid">
          <div>
            <nav className="breadcrumb" aria-label="Fil d’Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <Link href="/seo-local">SEO local</Link>
              <span>/</span>
              <span>{market.city}</span>
            </nav>
            <p className="atlas-label">
              SEO · RÉFÉRENCEMENT NATUREL · LLM · DATA
            </p>
            <h1>
              Agence SEO &amp; référencement naturel à{" "}
              <span>{market.city}.</span>
            </h1>
            <p className="city-hero__lead">
              On construit votre visibilité sur Google et dans les moteurs de
              réponse IA à {market.city} : audit technique, SEO local, contenus
              de décision, puis mesure des contacts réellement générés.
            </p>
            <div className="signal-hero__actions">
              <Link
                href="/contact"
                className="signal-button signal-button--primary"
              >
                Étudier mon marché à {market.city} <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <aside className="city-hero__card">
            <MapPin size={26} />
            <small>{market.region}</small>
            <strong>{market.city}</strong>
            <p>{market.angle}</p>
            <div>
              {market.sectors.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="wrap city-coverage">
        <div className="city-coverage__head">
          <p className="atlas-label">COUVERTURE / REQUÊTES VISÉES</p>
          <h2>Ce que cette page cherche à capter</h2>
          <p>
            La requête principale est «&nbsp;{primaryKeyword(market)}&nbsp;».
            Les variantes ci-dessous sont les formulations réellement tapées
            autour d’elle. Elles guident la structure de la page — elles ne sont
            pas répétées mécaniquement dans le texte, ce que les moteurs
            détectent et dévaluent.
          </p>
        </div>
        <ul className="city-coverage__list">
          {keywordVariants(market).map((kw, i) => (
            <li key={kw} className={i === 0 ? "is-primary" : undefined}>
              <span className="city-coverage__rank">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{kw}</span>
              {i === 0 && <em>principale</em>}
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap city-situation">
        <div>
          <p className="atlas-label">LE TERRAIN</p>
          <h2>Ce qui change vraiment à {market.city}</h2>
        </div>
        <div>
          <p>{market.marketNote}</p>
          <p>{market.approach}</p>
        </div>
      </section>

      <section className="city-query-section">
        <div className="wrap city-query-grid">
          <div>
            <p className="atlas-label">CARTE DES REQUÊTES</p>
            <h2>Être présent du problème jusqu’au choix.</h2>
            <p>
              Les expressions ci-dessous sont des familles d’intention à valider
              dans vos propres données. Elles servent à organiser les pages, pas
              à répéter des mots-clés artificiellement.
            </p>
          </div>
          <div className="city-query-list">
            {market.searchExamples.map((query, index) => (
              <div key={query}>
                <span>0{index + 1}</span>
                <strong>{query}</strong>
                <small>
                  {index < 2
                    ? "INTENTION COMMERCIALE"
                    : "INTENTION D’EXPERTISE"}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap city-work">
        <div>
          <p className="atlas-label">PLAN D’OCCUPATION</p>
          <h2>Le système local que je construis.</h2>
        </div>
        <div className="city-work__grid">
          {[
            [
              "01",
              "Demande",
              "Requêtes, saisonnalité, zones, concurrents et formulations utilisées dans les moteurs IA.",
            ],
            [
              "02",
              "Présence",
              "Pages services, fiche Google, contenus locaux, entités et sources externes cohérentes.",
            ],
            [
              "03",
              "Confiance",
              "Preuves, avis, cas, auteur identifiable et informations vérifiables par un client comme par un LLM.",
            ],
            [
              "04",
              "Conversion",
              "Appels, formulaires, rendez-vous et zone du prospect reliés au canal d’acquisition.",
            ],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap city-challenges">
        <p className="atlas-label">RISQUES À ÉVITER</p>
        <h2>
          Une page ville n’est utile que si elle dit quelque chose d’unique.
        </h2>
        <div>
          {market.challenges.map((challenge) => (
            <p key={challenge}>
              <Check size={19} /> {challenge}
            </p>
          ))}
        </div>
        <p className="city-challenges__note">
          Accompagnement disponible à distance pour les entreprises de{" "}
          {market.city} et de {market.nearby.join(", ")}. Aucune adresse
          d’établissement n’est revendiquée sur cette page.
        </p>
      </section>

      <section className="city-cta">
        <div className="wrap">
          <p className="atlas-label">PROCHAIN MOUVEMENT</p>
          <h2>Cartographions votre marché avant de produire des pages.</h2>
          <p>
            On vous répond avec les premières zones de demande à vérifier et le
            périmètre d’un diagnostic utile.
          </p>
          <Link
            href="/contact"
            className="signal-button signal-button--primary"
          >
            Parler de mon marché à {market.city} <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
