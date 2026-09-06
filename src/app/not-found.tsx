import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap page-hero">
      <span className="eyebrow">ERREUR 404</span>
      <h1>
        Cette piste
        <br />
        s’arrête ici.
      </h1>
      <p className="lead">
        La page demandée n’existe pas ou a changé d’adresse.
      </p>
      <Link href="/" className="button">
        Retour à l’accueil ↗
      </Link>
    </section>
  );
}
