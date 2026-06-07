# Image Generation Prompts

These assets are planned for `/public/generated/`. Export final files as optimized `.webp`, keep file sizes low, and use CSS/SVG fallbacks when an image is not present.

## Image 1 — Hero Background

File: `future-search-network.webp`

Prompt:

```txt
Abstract futuristic search intelligence network, bright clean background, cyan blue pink mauve light trails, interconnected nodes, semantic graph, SEO architecture, generative engine optimization, glassmorphism, premium digital interface, soft depth, elegant luminous gradients, no dark cyberpunk, no people, no laptop, no stock photo, high-end web design background, 16:9, ultra clean, 2026 aesthetic.
```

Usage: hero background with controlled opacity so text remains readable.

## Image 2 — GEO Entity Map

File: `geo-entity-map.webp`

Prompt:

```txt
Futuristic entity map for generative search optimization, floating semantic nodes, structured knowledge graph, cyan and violet connections, soft white background, premium UI, abstract data visualization, AI search visibility, clean glass surfaces, editorial technology style, no text, no logo, no humans, high-end digital consulting aesthetic.
```

Usage: SEO + GEO section.

## Image 3 — Internal Linking System

File: `internal-linking-system.webp`

Prompt:

```txt
Abstract internal linking architecture, website pages represented as floating translucent panels, glowing cyan and pink connection lines, SEO silos, content clusters, search intent nodes, clean futuristic interface, premium bright background, soft shadows, modern 2026 web design, no dark background, no generic dashboard.
```

Usage: method and internal linking visuals.

## Image 4 — Tools Ecosystem

File: `seo-tools-ecosystem.webp`

Prompt:

```txt
Premium futuristic SEO tools ecosystem, abstract tool modules, crawl data, analytics signals, keyword clusters, local SEO map points, GEO entities, clean white and light blue interface, cyan pink mauve accents, glassmorphism panels, high-end creative technology visual, no real brand logos, no text.
```

Usage: tools ecosystem section.

## Image 5 — Marseille / Paris Local Search

File: `local-search-marseille-paris.webp`

Prompt:

```txt
Abstract premium local search map connecting Marseille and Paris, luminous cyan and mauve paths, city signals, local SEO visibility, search points, elegant light background, modern geographic data visualization, no literal tourist landmarks, no people, no stock photo, high-end futuristic consulting website visual.
```

Usage: Marseille / Paris section.

## Image 6 — Method System

File: `seo-flow-engine.webp`

Prompt:

```txt
Futuristic SEO strategy engine, signals entering a luminous system, priorities sorted, pages structured into clusters, links activated, performance indicators, cyan blue pink mauve light, premium clean interface, abstract 3D data flow, bright background, elegant motion-ready composition, no text, no humans.
```

Usage: SEO Flow Engine method section.

## Implementation Notes

- Convert final exports to `.webp`.
- Keep hero imagery non-blocking unless it is promoted deliberately for LCP.
- Use `next/image` for final raster integrations where the image carries meaning.
- Use empty `alt` text for decorative assets.
- Keep CSS gradients and SVG visuals as fallbacks when generated images are absent.
