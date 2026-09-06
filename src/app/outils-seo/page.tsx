import { Tools } from "@/components/site/Tools";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Outils SEO gratuits : aperçu Google, UTM et simulateur",
  "Testez vos titres et descriptions, construisez vos liens UTM, simulez la valeur du trafic et vérifiez vos fondamentaux SEO. Sans inscription.",
  "/outils-seo",
);
export default function Page() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <span className="eyebrow">LE LAB / OUTILS GRATUITS</span>
        <h1>
          De l’idée
          <br />à l’action.
        </h1>
        <p className="lead">
          Quatre outils à explorer librement. Les calculs s’exécutent dans votre
          navigateur, sans inscription et sans envoi de données.
        </p>
      </section>
      <div className="section-bottom">
        <Tools />
      </div>
    </div>
  );
}
