import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section py="lg" className="relative">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Consultant SEO pour Marseille et Paris
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              J'aide les entreprises à transformer leur trafic Google en demandes qualifiées, avec une
              méthode claire, locale et orientée résultats.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Demander un audit stratégique</Button>
              <Button variant="outline" href="#services">
                Voir les services
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              Réponse sous 24h ouvrées. Sans engagement.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section id="services" py="lg" background="dark">
        <Container>
          <h2 className="text-center text-3xl font-bold">Services</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Audit SEO", description: "Analyse complète et priorisée de votre site" },
              { title: "SEO Local", description: "Visibilité optimale sur votre zone géographique" },
              { title: "Stratégie Contenu", description: "Contenu orienté conversion et autorité" },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section py="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Prêt à augmenter votre visibilité ?</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Parlons de vos objectifs et de comment je peux vous aider.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Prendre rendez-vous
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
