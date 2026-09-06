import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { allEntries, sourceLinks, type Entry } from "@/lib/content";
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

const SERVICE_CATEGORIES = ["SEO", "GEO", "DATA", "ACCOMPAGNEMENT"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ContentPage({ entry }: { entry: Entry }) {
  const related = allEntries.filter((e) => entry.related?.includes(e.slug));
  const path = `/${entry.slug}`;
  const isGuide = entry.slug.startsWith("blog/");

  const nodes = [
    person(),
    website(),
    professionalService(),
    breadcrumb([
      { name: "Accueil", path: "/" },
      ...(isGuide ? [{ name: "Guides", path: "/blog" }] : []),
      { name: entry.title, path },
    ]),
  ];

  // Article seulement si la page est datée : sans datePublished le balisage
  // n'apporte rien et Google le signale comme incomplet.
  if (entry.published && entry.updated) {
    nodes.push(
      article({
        headline: entry.title,
        description: entry.intro,
        path,
        published: entry.published,
        modified: entry.updated,
        section: entry.category,
        keywords: entry.keywords,
      }),
    );
  }

  if (SERVICE_CATEGORIES.includes(entry.category)) {
    nodes.push(
      service({
        name: entry.title,
        description: entry.intro,
        path,
        serviceType: entry.category,
      }),
    );
  }

  // La FAQ n'est balisée que parce qu'elle est rendue juste en dessous.
  if (entry.faq?.length) nodes.push(faqPage(entry.faq));

  return (
    <>
      <JsonLd data={graph(...nodes)} />

      <section className="page-hero wrap">
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <span>/</span>
          {isGuide && (
            <>
              <Link href="/blog">Guides</Link>
              <span>/</span>
            </>
          )}
          <span>{entry.category}</span>
        </nav>
        <span className="eyebrow">
          <span /> {entry.category} / EXPERTISE & MÉTHODE
        </span>
        <h1>{entry.title}</h1>
        <p className="lead">{entry.intro}</p>

        {(entry.published || entry.updated) && (
          <p className="page-dates mono">
            {entry.published && (
              <time dateTime={entry.published}>
                Publié le {formatDate(entry.published)}
              </time>
            )}
            {entry.updated && (
              <>
                {entry.published && <span aria-hidden="true"> · </span>}
                <time dateTime={entry.updated}>
                  Mis à jour le {formatDate(entry.updated)}
                </time>
              </>
            )}
          </p>
        )}

        <Link href="/contact" className="button">
          Discuter de votre projet <ArrowUpRight size={18} />
        </Link>
      </section>

      <div className="wrap article-layout">
        <aside>
          <span className="mono muted">DANS CETTE PAGE</span>
          <nav aria-label="Sommaire">
            {entry.answer && <a href="#en-bref">00 — En bref</a>}
            {entry.sections.map((s, i) => (
              <a key={s.title} href={`#section-${i}`}>
                {String(i + 1).padStart(2, "0")} — {s.title}
              </a>
            ))}
            {entry.faq?.length ? (
              <a href="#questions">
                {String(entry.sections.length + 1).padStart(2, "0")} — Questions
                fréquentes
              </a>
            ) : null}
          </nav>
          <div className="author-note">
            Par Med Issam Chaoui
            <br />
            <span>SEO · GEO · Data web</span>
            <Link href="/a-propos">
              Découvrir l’approche <ArrowUpRight size={13} />
            </Link>
          </div>
        </aside>

        <article className="article-body">
          {/* Bloc « en bref » : réponse autonome placée avant tout
              développement. C'est le passage repris par les moteurs de
              réponse, il doit se comprendre sorti de son contexte. */}
          {entry.answer && (
            <div className="answer-block" id="en-bref">
              <span className="mono green">EN BREF</span>
              <p>{entry.answer}</p>
              {entry.takeaways?.length ? (
                <ul>
                  {entry.takeaways.map((t) => (
                    <li key={t}>
                      <Check size={16} aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}

          {entry.sections.map((s, i) => (
            <section id={`section-${i}`} key={s.title}>
              <span className="mono green">0{i + 1}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}

          {entry.faq?.length ? (
            <section className="article-faq" id="questions">
              <h2>Questions fréquentes</h2>
              {entry.faq.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    <h3>{q}</h3>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </section>
          ) : null}

          {["SEO", "GEO", "DATA"].includes(entry.category) && (
            <div className="sources">
              <h2>Pour approfondir</h2>
              {sourceLinks
                .filter((_, i) =>
                  entry.category === "DATA"
                    ? i === 3
                    : entry.category === "SEO"
                      ? i !== 3
                      : i < 2,
                )
                .map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
            </div>
          )}

          <p className="citation-note mono">
            Citer cette page : Med Issam Chaoui, «&nbsp;{entry.title}&nbsp;»,{" "}
            {siteUrl}
            {path}
          </p>
        </article>
      </div>

      {related.length > 0 && (
        <section className="wrap section-block">
          <div className="section-heading">
            <div>
              <span className="eyebrow">POUR ALLER PLUS LOIN</span>
              <h2>Reliez les sujets.</h2>
            </div>
          </div>
          <div className="related-grid">
            {related.map((e) => (
              <Link href={`/${e.slug}`} key={e.slug}>
                <span className="mono green">{e.category}</span>
                <h3>{e.title}</h3>
                <ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
