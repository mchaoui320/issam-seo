import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CircleDot } from "lucide-react";
import type { Entry } from "@/lib/content";
import type { SalesPageData } from "@/lib/sales-pages/types";
import { siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/site/JsonLd";
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

const INTERNAL_LINK = /\[\[([^|]+)\|(\/[^\]]+)\]\]/g;

function RichText({ children }: { children: string }) {
  const parts: (string | React.ReactNode)[] = [];
  let cursor = 0;

  for (const match of children.matchAll(INTERNAL_LINK)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push(children.slice(cursor, index));
    parts.push(
      <Link key={`${match[2]}-${index}`} href={match[2]}>
        {match[1]}
      </Link>,
    );
    cursor = index + match[0].length;
  }

  if (cursor < children.length) parts.push(children.slice(cursor));
  return <>{parts}</>;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function SalesServicePage({
  entry,
  data,
}: {
  entry: Entry;
  data: SalesPageData;
}) {
  const path = `/${entry.slug}`;
  const nodes = [
    person(),
    website(),
    professionalService(),
    breadcrumb([
      { name: "Accueil", path: "/" },
      { name: entry.title, path },
    ]),
    service({
      name: entry.title,
      description: data.lede,
      path,
      serviceType: data.primaryKeyword,
    }),
    faqPage(data.faq),
  ];

  if (entry.published && entry.updated) {
    nodes.push(
      article({
        headline: entry.title,
        description: data.lede,
        path,
        published: entry.published,
        modified: entry.updated,
        section: entry.category,
        keywords: entry.keywords,
      }),
    );
  }

  return (
    <>
      <JsonLd data={graph(...nodes)} />
      <main className="sales-service">
        <section className="sales-service__hero">
          <div className="wrap sales-service__hero-grid">
            <div className="sales-service__hero-copy">
              <nav className="breadcrumb" aria-label="Fil d’Ariane">
                <Link href="/">Accueil</Link>
                <span>/</span>
                <span>{entry.category}</span>
              </nav>
              <p className="sales-service__code">{data.code} / MIC SIGNAL</p>
              <h1>{entry.title}</h1>
              <p className="sales-service__lede">{data.lede}</p>
              <div className="sales-service__actions">
                <Link href="/contact" className="sales-service__primary">
                  Cadrer le besoin <ArrowUpRight size={18} />
                </Link>
                <Link href="/methode-seo" className="sales-service__secondary">
                  Voir la méthode <ArrowRight size={17} />
                </Link>
              </div>
              <p className="sales-service__proof">{data.proofLine}</p>
            </div>

            <div className="sales-service__signal" aria-label="Repères de la mission">
              {data.highlights.map((item, index) => (
                <div key={item.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap sales-service__visual" aria-labelledby="visual-caption">
          <figure>
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={1600}
              height={900}
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 92vw, 1180px"
            />
            <figcaption id="visual-caption">
              <span>{data.code} / SCHÉMA DE LECTURE</span>
              {data.image.caption}
            </figcaption>
          </figure>
        </section>

        <nav className="sales-service__toc" aria-label="Sommaire de la page">
          <div className="wrap">
            <a href="#en-bref">En bref</a>
            <a href="#prestation">Notre prestation</a>
            {data.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
            <a href="#livrables">Livrables</a>
            <a href="#questions">FAQ</a>
          </div>
        </nav>

        <section className="wrap sales-service__answer" id="en-bref">
          <div>
            <p className="sales-service__label">RÉPONSE DIRECTE</p>
            <h2>{data.primaryKeyword}, en bref</h2>
          </div>
          <div>
            <p>{data.answer}</p>
            <ul>
              {data.takeaways.map((takeaway) => (
                <li key={takeaway}>
                  <Check size={17} aria-hidden="true" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sales-service__offer" id="prestation">
          <div className="wrap">
            <header>
              <p className="sales-service__label">NOTRE PRESTATION</p>
              <h2>{data.offer.title}</h2>
              <p>{data.offer.intro}</p>
            </header>
            <div className="sales-service__offer-grid">
              {data.offer.items.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <strong>Vous recevez — {item.deliverable}</strong>
                </article>
              ))}
            </div>
            <div className="sales-service__fit">
              <p>Cette mission est faite pour vous si</p>
              <ul>
                {data.offer.forWho.map((item) => (
                  <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <Link href="/contact">
                Vérifier l’adéquation <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <div className="wrap sales-service__body">
          {data.sections.map((section, index) => (
            <section id={section.id} key={section.id} className="sales-service__section">
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{section.eyebrow}</p>
              </header>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText>{paragraph}</RichText>
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="sales-service__bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CircleDot size={15} aria-hidden="true" />
                        <span><RichText>{bullet}</RichText></span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? <p className="sales-service__note">{section.note}</p> : null}
              </div>
            </section>
          ))}
        </div>

        <section className="sales-service__mid-cta">
          <div className="wrap">
            <p>{data.code} / POINT DE DÉPART</p>
            <h2>Un échange court suffit pour qualifier le périmètre, les accès et la décision attendue.</h2>
            <Link href="/contact">
              Exposer le contexte <ArrowUpRight size={19} />
            </Link>
          </div>
        </section>

        <section className="wrap sales-service__tools" id="outils">
          <header>
            <p className="sales-service__label">OUTILS NOMMÉS, USAGE EXPLIQUÉ</p>
            <h2>La donnée utile derrière chaque outil.</h2>
          </header>
          <div>
            {data.tools.map((tool, index) => (
              <article key={tool.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{tool.name}</h3>
                <p>{tool.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sales-service__deliverables" id="livrables">
          <div className="wrap">
            <header>
              <p className="sales-service__label">CE QUI EST REMIS</p>
              <h2>Des livrables faits pour être exécutés.</h2>
            </header>
            <div className="sales-service__deliverables-grid">
              {data.deliverables.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <Link href="/livrables-seo" className="sales-service__inline-link">
              Examiner les formats de livrables <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="wrap sales-service__process" id="methode">
          <header>
            <p className="sales-service__label">SÉQUENCE DE TRAVAIL</p>
            <h2>Une méthode visible, du cadrage à la recette.</h2>
          </header>
          <ol>
            {data.process.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap sales-service__scope" id="budget">
          <header>
            <p className="sales-service__label">PÉRIMÈTRE & CHIFFRAGE</p>
            <h2>Le prix suit le volume réel à analyser.</h2>
            <p>
              Aucun montant n’est inventé avant le cadrage. La proposition distingue
              le diagnostic, la restitution et l’accompagnement de mise en œuvre.
            </p>
          </header>
          <div>
            {data.scopes.map((scope) => (
              <article key={scope.title}>
                <h3>{scope.title}</h3>
                <p>{scope.context}</p>
                <strong>{scope.includes}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap sales-service__faq" id="questions">
          <header>
            <p className="sales-service__label">QUESTIONS AVANT DÉCISION</p>
            <h2>Ce qu’un devis doit clarifier.</h2>
          </header>
          <div>
            {data.faq.map(([question, answer]) => (
              <details key={question}>
                <summary><h3>{question}</h3><span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {data.sources?.length ? (
          <section className="wrap sales-service__sources">
            <p className="sales-service__label">SOURCES DE RÉFÉRENCE</p>
            <div>
              {data.sources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                  {source.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <section className="sales-service__closing">
          <div className="wrap">
            <p>{data.code} / PROCHAINE DÉCISION</p>
            <h2>Transformer le diagnostic en feuille de route, avec un ordre et des critères de validation.</h2>
            <Link href="/contact">
              Demander un cadrage <ArrowUpRight size={20} />
            </Link>
            <small>
              Par Med Issam Chaoui · SEO, GEO & data web · {entry.updated ? `mis à jour le ${formatDate(entry.updated)}` : siteUrl}
            </small>
          </div>
        </section>
      </main>
    </>
  );
}
