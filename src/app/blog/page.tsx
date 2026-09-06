import { ResourceList } from "@/components/site/ResourceList";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Guides SEO, GEO & analytics",
  "Des guides pratiques pour comprendre le référencement naturel, la visibilité IA et la mesure web, avec des liens vers les sources officielles.",
  "/blog",
);
export default function Page() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <span className="eyebrow">RESSOURCES / NOTES DE TERRAIN</span>
        <h1>
          Comprendre.
          <br />
          Puis avancer.
        </h1>
        <p className="lead">
          Des explications concrètes sur le SEO, les moteurs IA et vos données.
          À lire, à tester et à appliquer.
        </p>
      </section>
      <div className="section-bottom">
        <ResourceList />
      </div>
    </div>
  );
}
