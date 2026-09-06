"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { guides } from "@/lib/content";
export function ResourceList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");
  const found = guides.filter(
    (g) =>
      (category === "Tous" || g.category === category) &&
      `${g.title} ${g.intro}`
        .toLocaleLowerCase("fr")
        .includes(query.toLocaleLowerCase("fr")),
  );
  return (
    <>
      <div className="resource-filters">
        <div className="filter-buttons">
          {["Tous", "SEO", "GEO", "DATA"].map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={18} />
          <span className="sr-only">Rechercher un guide</span>
          <input
            placeholder="Rechercher un sujet…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="resource-grid">
        {found.map((g, i) => (
          <Link href={`/${g.slug}`} className="resource-card" key={g.slug}>
            <div
              className={`resource-art art-${g.category.toLowerCase()}`}
              aria-hidden="true"
            >
              <span>
                {g.category === "GEO" ? "✳" : g.category === "SEO" ? "↗" : "▥"}
              </span>
              <small className="mono">FIELD NOTES / 0{i + 1}</small>
            </div>
            <div className="resource-copy">
              <span className="mono green">{g.category} · GUIDE PRATIQUE</span>
              <h3>{g.title}</h3>
              <p>{g.intro}</p>
              <span className="read-link">
                Lire le guide <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!found.length && (
        <p role="status" className="empty">
          Aucun guide pour cette recherche. Essayez « SEO », « GEO » ou « GA4 ».
        </p>
      )}
    </>
  );
}
