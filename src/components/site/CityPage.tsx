import Link from "next/link";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import type { LocalMarket } from "@/lib/cities";
import { marketPath } from "@/lib/cities";
import { getCitySales, SERVICES } from "@/lib/cities-sales";
import { JsonLd } from "@/components/site/JsonLd";
import { Figure } from "@/components/site/Figure";
import { cityVisuals } from "@/lib/editorial-images";
import {
  breadcrumb,
  faqPage,
  graph,
  person,
  professionalService,
  website,
} from "@/lib/schema";
import { siteUrl } from "@/lib/seo";

export function CityPage({ market }: { market: LocalMarket }) {
  const path = marketPath(market);
  const sales = getCitySales(market.slug);
  const visual = cityVisuals[market.slug];
  const byId = new Map(SERVICES.map((sv) => [sv.id, sv]));
  // Les prestations prioritaires d'abord, le reste du catalogue ensuite :
  // l'ordre porte l'information, chaque marché n'appelle pas le même premier geste.
  const prioritised = [
    ...(sales?.priorities ?? [])
      .map((p) => ({ service: byId.get(p.id), why: p.why }))
      .filter((x): x is { service: (typeof SERVICES)[number]; why: string } =>
        Boolean(x.service),
      ),
    ...SERVICES.filter(
      (sv) => !(sales?.priorities ?? []).some((p) => p.id === sv.id),
    ).map((service) => ({ service, why: "" })),
  ];
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
            { name: `Agence SEO ${market.city}`, path },
          ]),
          // La FAQ n'est balisée que parce qu'elle est rendue plus bas.
          ...(sales?.faq?.length ? [faqPage(sales.faq)] : []),
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

      {visual ? (
        <section className="wrap editorial-visual-section editorial-visual-section--city">
          <Figure image={visual} />
        </section>
      ) : null}

      {/* Prestations. C'est ce qui fait d'une page locale une page de vente :
          le visiteur doit voir ce qu'on vend. Les intitulés portent les entités
          attendues sur une requête d'agence — audit, technique, local,
          netlinking, contenu, mesure — et chacun renvoie vers sa page de
          service, ce qui construit le maillage interne. */}
      <section className="wrap city-services" id="prestations">
        <div className="city-services__head">
          <p className="atlas-label">PRESTATIONS</p>
          <h2>Nos services SEO à {market.city}</h2>
          <p>
            Le même socle partout, mais pas dans le même ordre : {market.city}{" "}
            n’appelle pas le premier geste qu’appellerait un autre marché. Les
            trois premières lignes sont celles par lesquelles on commencerait
            ici.
          </p>
        </div>
        <div className="city-services__grid">
          {prioritised.map(({ service, why }, i) => (
            <article
              key={service.id}
              className={why ? "is-priority" : undefined}
            >
              <span className="city-services__rank">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>
                <Link href={service.href}>{service.name}</Link>
              </h3>
              <p className="city-services__text">{service.text}</p>
              {why && (
                <p className="city-services__why">
                  <strong>Sur ce marché :</strong> {why}
                </p>
              )}
              <p className="city-services__deliverable">
                <Check size={14} aria-hidden="true" />
                {service.deliverable}
              </p>
            </article>
          ))}
        </div>
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
          <h2>Le système local qu’on met en place.</h2>
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

      {sales && (
        <>
          <section className="wrap city-serp">
            <div>
              <p className="atlas-label">LA CONCURRENCE LOCALE</p>
              <h2>À quoi ressemble la recherche à {market.city}</h2>
            </div>
            <p>{sales.serpNote}</p>
          </section>

          <section className="wrap city-cases">
            <p className="atlas-label">SITUATIONS RENCONTRÉES</p>
            <h2>Deux cas fréquents sur ce marché</h2>
            <div className="city-cases__grid">
              {sales.cases.map((c) => (
                <article key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
            <p className="city-cases__note">
              Ces situations sont pédagogiques et composites. Elles décrivent
              une démarche de diagnostic, pas des résultats clients revendiqués.
            </p>
          </section>

          <section className="wrap city-zones">
            <div>
              <p className="atlas-label">ZONE COUVERTE</p>
              <h2>
                Référencement local à {market.city} et dans son agglomération
              </h2>
              <p>
                L’accompagnement se fait à distance. La zone à travailler
                dépend de l’endroit où se trouvent vos clients, pas de notre
                implantation.
              </p>
            </div>
            <ul>
              {sales.zones.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </section>

          <section className="wrap city-faq" id="questions">
            <p className="atlas-label">QUESTIONS FRÉQUENTES</p>
            <h2>Agence SEO à {market.city} : vos questions</h2>
            {sales.faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <h3>{q}</h3>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </section>

          <section className="wrap city-links">
            <p className="atlas-label">POUR ALLER PLUS LOIN</p>
            <div className="city-links__grid">
              <Link href="/audit-seo">Audit SEO : ce que contient le diagnostic</Link>
              <Link href="/seo-local">Méthode SEO local</Link>
              <Link href="/tarifs">Tarifs et périmètres</Link>
              <Link href="/methode-seo">Notre méthode en quatre temps</Link>
              <Link href="/glossaire">Glossaire SEO, GEO et data</Link>
              <Link href="/strategie-seo-local-multi-villes">
                Stratégie multi-villes
              </Link>
            </div>
          </section>
        </>
      )}

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
