"use client";
import { useMemo, useState, useId } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { terms, glossaryCategories, type Term } from "@/lib/glossary";
import { allEntries } from "@/lib/content";

const titleBySlug = new Map(allEntries.map((e) => [e.slug, e.title]));

/** Insensible à la casse et aux accents : « référencement » doit sortir sur « referencement ». */
function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matches(term: Term, query: string) {
  if (!query) return true;
  const haystack = normalize(
    [term.term, term.short, term.long, ...(term.aka ?? [])].join(" "),
  );
  // Chaque mot de la requête doit apparaître, dans n'importe quel ordre.
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

export function Glossary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Term["category"] | "TOUT">("TOUT");
  const searchId = useId();

  const visible = useMemo(
    () =>
      terms.filter(
        (t) =>
          (category === "TOUT" || t.category === category) && matches(t, query),
      ),
    [query, category],
  );

  return (
    <>
      <div className="glossary-controls">
        <div className="glossary-search">
          <Search size={16} aria-hidden="true" />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un terme…"
            aria-label="Rechercher un terme dans le glossaire"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Effacer la recherche"
            >
              <X size={15} />
            </button>
          )}
        </div>
        <div
          className="glossary-filters"
          role="group"
          aria-label="Filtrer par domaine"
        >
          {(["TOUT", ...glossaryCategories] as const).map((c) => (
            <button
              key={c}
              type="button"
              className={category === c ? "active" : undefined}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="glossary-count mono" role="status" aria-live="polite">
        {visible.length} terme{visible.length > 1 ? "s" : ""}
        {query || category !== "TOUT" ? " correspondant" : ""}
        {(query || category !== "TOUT") && visible.length > 1 ? "s" : ""}
      </p>

      {visible.length === 0 ? (
        <p className="empty">
          Aucun terme ne correspond. Essayez une autre formulation, ou{" "}
          <Link href="/contact">posez directement la question</Link>.
        </p>
      ) : (
        <dl className="glossary-list">
          {visible.map((t) => (
            <div key={t.slug} id={t.slug} className="glossary-item">
              <dt>
                <span className="mono green">{t.category}</span>
                <h2>{t.term}</h2>
                {t.aka?.length ? (
                  <span className="glossary-aka">
                    Aussi appelé : {t.aka.join(", ")}
                  </span>
                ) : null}
              </dt>
              <dd>
                <p className="glossary-short">{t.short}</p>
                <p className="glossary-long">{t.long}</p>
                {t.see?.length ? (
                  <div className="glossary-see">
                    {t.see.map((slug) => (
                      <Link key={slug} href={`/${slug}`}>
                        {titleBySlug.get(slug) ?? slug}
                        <ArrowUpRight size={13} />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}
