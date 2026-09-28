"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { localMarkets, marketPath } from "@/lib/cities";

export function TerritoryMap() {
  const [activeSlug, setActiveSlug] = useState("marseille");
  const active = localMarkets.find((market) => market.slug === activeSlug)!;

  return (
    <section className="territory-section" id="territoires">
      <div className="wrap territory-heading">
        <p className="atlas-label">03 / TERRITOIRES DE RECHERCHE</p>
        <h2>
          Le local n’est pas une page ville.
          <span>C’est une géographie de décisions.</span>
        </h2>
      </div>

      <div className="wrap territory-board">
        <div
          className="territory-plot"
          aria-label="Carte interactive des marchés locaux"
        >
          <div className="territory-axis territory-axis--x" />
          <div className="territory-axis territory-axis--y" />
          <span className="territory-coordinate territory-coordinate--top">
            NORD / 51.0
          </span>
          <span className="territory-coordinate territory-coordinate--bottom">
            SUD / 43.0
          </span>
          {localMarkets.map((market, index) => (
            <button
              key={market.slug}
              type="button"
              className={market.slug === activeSlug ? "is-active" : ""}
              style={{ left: `${market.x}%`, top: `${market.y}%` }}
              aria-pressed={market.slug === activeSlug}
              onClick={() => setActiveSlug(market.slug)}
            >
              <i aria-hidden="true" />
              <span>{market.city}</span>
              <small>0{index + 1}</small>
            </button>
          ))}
        </div>

        <article className="territory-card" aria-live="polite">
          <div className="territory-card__index">
            <MapPin size={22} />
            <span>{active.region}</span>
          </div>
          <h3>{active.city}</h3>
          <p className="territory-card__angle">{active.angle}</p>
          <p>{active.marketNote}</p>
          <div className="territory-card__queries">
            <span>REQUÊTES À TRAVAILLER</span>
            {active.searchExamples.slice(0, 3).map((query) => (
              <code key={query}>{query}</code>
            ))}
          </div>
          <Link href={marketPath(active)}>
            Ouvrir le terrain {active.city} <ArrowUpRight size={18} />
          </Link>
        </article>
      </div>

      <div
        className="wrap territory-list"
        aria-label="Toutes les villes couvertes"
      >
        {localMarkets.map((market, index) => (
          <Link href={marketPath(market)} key={market.slug}>
            <span>0{index + 1}</span>
            {market.city}
            <ArrowUpRight size={15} />
          </Link>
        ))}
      </div>
    </section>
  );
}
