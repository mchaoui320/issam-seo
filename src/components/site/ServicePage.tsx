import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceData } from "@/lib/services/types";
import { JsonLd } from "@/components/site/JsonLd";
import {
  BarChart,
  DataTable,
  PriceTable,
  StatRow,
} from "@/components/site/DataBlocks";
import {
  BridgeBlock,
  ComparisonBlock,
  MethodSteps,
} from "@/components/site/SalesBlocks";
import {
  article,
  breadcrumb,
  faqPage,
  graph,
  person,
  professionalService,
  service,
  website,
} from "@/lib/schema";
import { siteUrl } from "@/lib/seo";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const PILIER: Record<ServiceData["famille"], { nom: string; path: string }> = {
  SEO: { nom: "SEO", path: "/seo" },
  GEO: { nom: "GEO & IA", path: "/geo" },
  DATA: { nom: "Data web", path: "/data-web" },
  IA: { nom: "IA & automatisation", path: "/geo" },
};

/**
 * Rendu complet d'une page de service à partir de ses seules données.
 *
 * L'ordre des blocs n'est pas arbitraire : le visiteur doit rencontrer le
 * constat, puis l'offre et son prix, et seulement ensuite les questions. La
 * FAQ placée avant le tarif fait fuir — on l'a constaté en relisant une page
 * déjà livrée.
 */
export function ServicePage({ data }: { data: ServiceData }) {
  const path = `/${data.slug}`;
  const pilier = PILIER[data.famille];

  return (
    <>
      <JsonLd
        data={graph(
          person(),
          website(),
          professionalService(),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: pilier.nom, path: pilier.path },
            { name: data.titre, path },
          ]),
          service({
            name: data.titre,
            description: data.intro,
            path,
            serviceType: data.famille,
          }),
          article({
            headline: data.titre,
            description: data.intro,
            path,
            published: data.published,
            modified: data.updated,
            section: data.famille,
            keywords: data.keywords,
          }),
          faqPage(data.faq),
        )}
      />

      <section className="page-hero wrap">
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <Link href={pilier.path}>{pilier.nom}</Link>
          <span>/</span>
          <span>{data.metaTitre}</span>
        </nav>
        <span className="eyebrow">
          <span /> {data.famille} / EXPERTISE
        </span>
        <h1>{data.titre}</h1>
        <p className="lead">{data.intro}</p>
        <p className="page-dates mono">
          <time dateTime={data.published}>
            Publié le {formatDate(data.published)}
          </time>
          <span aria-hidden="true"> · </span>
          <time dateTime={data.updated}>
            Mis à jour le {formatDate(data.updated)}
          </time>
        </p>
        <Link href="/contact" className="button">
          Discuter de votre projet <ArrowUpRight size={18} />
        </Link>
      </section>

      <section className="wrap svc-answer">
        <div className="answer-block" id="en-bref">
          <span className="mono green">EN BREF</span>
          <p>{data.answer}</p>
          <ul>
            {data.takeaways.map((t) => (
              <li key={t}>
                <Check size={16} aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {data.problemes?.length ? (
        <section className="svc-problemes wrap">
          <p className="atlas-label">LE CONSTAT</p>
          <h2>Ce qui vous échappe aujourd’hui</h2>
          <div className="svc-problemes__grid">
            {data.problemes.map((p) => (
              <article key={p.titre}>
                <h3>{p.titre}</h3>
                <p>{p.texte}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {data.chiffres?.length ? (
        <StatRow titre="Les ordres de grandeur" stats={data.chiffres} />
      ) : null}

      {data.comparatif && <ComparisonBlock {...data.comparatif} />}

      {data.tableau && <DataTable {...data.tableau} />}

      {data.graphique && <BarChart {...data.graphique} />}

      {data.methode && <MethodSteps {...data.methode} />}

      {data.livrables?.length ? (
        <section className="svc-livrables wrap">
          <div className="svc-livrables__head">
            <p className="atlas-label">CE QU’ON REMET</p>
            <h2>Les livrables</h2>
            <p>
              Des documents exploitables par vos équipes, y compris après la fin
              de la mission. Aucune dépendance n’est créée artificiellement.
            </p>
          </div>
          <ol className="svc-livrables__liste">
            {data.livrables.map((l, i) => (
              <li key={l.nom}>
                <span className="svc-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{l.nom}</h3>
                  <p>{l.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {data.outils?.length ? (
        <section className="svc-outils wrap">
          <div>
            <p className="atlas-label">OUTILLAGE</p>
            <h2>Les outils utilisés</h2>
            <p>
              Nommés plutôt qu’évoqués : un prestataire qui parle de « ses
              outils » sans les citer n’a généralement rien de particulier à
              montrer.
            </p>
          </div>
          <dl className="svc-outils__liste">
            {data.outils.map((o) => (
              <div key={o.nom}>
                <dt>{o.nom}</dt>
                <dd>{o.usage}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <PriceTable
        titre="Combien ça coûte"
        intro="Une fourchette n’est pas un devis. Le chiffrage se fait après un premier échange, et la proposition précise le périmètre, les livrables et ce qui n’est pas inclus."
        offres={[
          {
            nom: data.metaTitre,
            prix: data.tarif.fourchette,
            pour: "Ce qui fait varier le montant est listé ci-contre.",
            inclus: data.tarif.variables,
            misEnAvant: true,
          },
        ]}
        note="Repère marché : le tarif journalier moyen d’un consultant SEO en France s’établit autour de 570 € en 2025 (baromètre Malt)."
      />

      <section className="article-faq wrap" id="questions">
        <h2>Questions fréquentes</h2>
        {data.faq.map(([q, a]) => (
          <details key={q}>
            <summary>
              <h3>{q}</h3>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>

      {data.pont && <BridgeBlock {...data.pont} />}

      {data.liens?.length ? (
        <section className="wrap netlinking-liens">
          <h2>Pour aller plus loin</h2>
          <div className="netlinking-liens__grid">
            {data.liens.map((l) => (
              <Link key={l.href} href={l.href}>
                <strong>{l.titre}</strong>
                <span>{l.texte}</span>
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <p className="wrap citation-note mono">
        Citer cette page : MIC SIGNAL, «&nbsp;{data.titre}&nbsp;», {siteUrl}
        {path}
      </p>
    </>
  );
}
