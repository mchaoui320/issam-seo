import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Glossary } from "@/components/site/Glossary";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { terms } from "@/lib/glossary";
import { breadcrumb, graph, person, website } from "@/lib/schema";

const PATH = "/glossaire";

export const metadata = pageMetadata(
  "Glossaire SEO, GEO et data web",
  `${terms.length} définitions de référence sur le référencement naturel, les moteurs de réponse IA et la mesure web. Chaque terme est expliqué avec sa nuance et ses contresens fréquents.`,
  PATH,
);

/**
 * `DefinedTermSet` décrit un glossaire et `DefinedTerm` chacune de ses entrées.
 * Chaque terme porte une ancre stable, ce qui permet à un moteur de réponse de
 * pointer directement la définition citée plutôt que la page entière.
 */
function definedTermSet() {
  return {
    "@type": "DefinedTermSet",
    "@id": `${siteUrl}${PATH}#glossaire`,
    name: "Glossaire SEO, GEO et data web",
    url: `${siteUrl}${PATH}`,
    inLanguage: "fr-FR",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${siteUrl}${PATH}#${t.slug}`,
      name: t.term,
      description: t.short,
      inDefinedTermSet: { "@id": `${siteUrl}${PATH}#glossaire` },
      ...(t.aka?.length ? { alternateName: t.aka } : {}),
    })),
  };
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph(
          person(),
          website(),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Glossaire", path: PATH },
          ]),
          definedTermSet(),
        )}
      />

      <div className="wrap">
        <section className="page-hero">
          <nav className="breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>GLOSSAIRE</span>
          </nav>
          <span className="eyebrow">
            <span /> RÉFÉRENCE / {terms.length} DÉFINITIONS
          </span>
          <h1>
            Le vocabulaire,
            <br />
            sans le jargon.
          </h1>
          <p className="lead">
            Les termes du SEO, des moteurs de réponse IA et de la mesure web,
            définis en une phrase autonome — puis nuancés, parce que la plupart
            des erreurs viennent d’une définition à moitié juste.
          </p>
          <Link href="/contact" className="button">
            Un terme manque ? Dites-le <ArrowUpRight size={18} />
          </Link>
        </section>

        <div className="section-bottom">
          <Glossary />
        </div>
      </div>
    </>
  );
}
