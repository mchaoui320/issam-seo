import Link from "next/link";
import { ArrowRight, TrendingUp, MapPin, Bot, Search, BarChart3, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// ─── Stat pill ───
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl px-5 py-4 shadow-[var(--shadow-sm)]">
      <div
        className="font-display text-2xl font-black tracking-tight"
        style={{ color: "var(--accent)" }}
      >
        {value}
      </div>
      <div className="text-xs font-medium mt-0.5" style={{ color: "var(--fg-muted)" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Service card ───
function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  tag,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="group glass rounded-3xl p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1 block"
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-[0_2px_8px_rgba(79,70,229,0.2)]"
          style={{ background: "rgba(79,70,229,0.1)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
        </div>
        {tag && (
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(79,70,229,0.1)",
              color: "var(--accent)",
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-bold mb-2" style={{ color: "var(--fg-primary)" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
        {description}
      </p>
      <div
        className="mt-5 flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: "var(--accent)" }}
      >
        En savoir plus
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

// ─── Metric row (SEO animation placeholder) ───
function MetricRow({
  label,
  before,
  after,
  unit,
}: {
  label: string;
  before: string;
  after: string;
  unit: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[var(--fg-primary)]/5 last:border-0">
      <span className="text-sm font-medium" style={{ color: "var(--fg-secondary)" }}>
        {label}
      </span>
      <div className="flex items-center gap-3 text-sm font-bold">
        <span style={{ color: "var(--fg-muted)" }}>{before} {unit}</span>
        <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
        <span style={{ color: "var(--success)" }}>{after} {unit}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Section variant="mesh" py="xl">
        <Container>
          <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium mb-8 shadow-[var(--shadow-xs)]">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              <span style={{ color: "var(--fg-secondary)" }}>
                Disponible · Marseille & Paris
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Visibilité SEO{" "}
              <span
                className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-violet)] to-[var(--accent-sky)] bg-clip-text text-transparent"
              >
                & GEO
              </span>
              <br />
              qui génère des leads
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "var(--fg-secondary)" }}>
              Audit SEO, stratégie locale, optimisation pour les moteurs IA.
              Une méthode claire, mesurable, orientée résultats business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" href="/contact">
                Demander un audit gratuit
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="secondary" href="/etudes-de-cas">
                Voir les résultats
              </Button>
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--fg-muted)" }}>
              Réponse sous 24h ouvrées · Sans engagement
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16 max-w-2xl mx-auto">
            <StatPill value="+340%" label="Trafic organique moyen" />
            <StatPill value="48h" label="Délai de premier retour" />
            <StatPill value="Top 3" label="Positions clés obtenues" />
            <StatPill value="GEO" label="Optimisation IA incluse" />
          </div>
        </Container>
      </Section>

      {/* ── SERVICES ── */}
      <Section variant="subtle" py="lg" id="services">
        <Container>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              SEO classique + GEO : deux leviers,<br className="hidden sm:block" /> une stratégie cohérente
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard
              icon={Search}
              title="Audit SEO"
              description="Analyse technique, sémantique et de performance. Livrables priorisés, actionnables sous 48h."
              href="/audit-seo"
            />
            <ServiceCard
              icon={MapPin}
              title="SEO Local"
              description="Positionnement sur votre zone. Google Business Profile, pack local, pages locales Marseille et Paris."
              href="/seo-local"
            />
            <ServiceCard
              icon={BarChart3}
              title="Stratégie Contenu"
              description="Intent mapping, clusters sémantiques, briefs EEAT. Contenu qui convertit, pas juste du trafic."
              href="/strategie-contenu-seo"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Netlinking"
              description="Profil de liens sain, RP digitales, signaux locaux. Autorité construite durablement."
              href="/netlinking"
            />
            <ServiceCard
              icon={Bot}
              title="GEO — Moteurs IA"
              description="Optimisation pour ChatGPT, Perplexity, Gemini. Votre marque citée dans les réponses IA."
              href="/geo"
              tag="Nouveau"
            />
            <ServiceCard
              icon={Globe}
              title="Refonte SEO"
              description="Migration sans perte de trafic. Audit pré-refonte, mapping URLs, plan de redirections, QA."
              href="/refonte-seo"
            />
          </div>

          <div className="text-center mt-8">
            <Button variant="ghost" href="/tarifs">
              Voir les tarifs
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── RÉSULTATS BEFORE/AFTER ── */}
      <Section variant="mesh" py="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
                Preuve
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Des résultats<br />mesurables, pas des promesses
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "var(--fg-secondary)" }}>
                Chaque mission démarre par un audit priorisé et se termine par des métriques vérifiables.
                Pas de jargon, pas de rapport de 80 pages illisible.
              </p>
              <Button href="/etudes-de-cas">
                Voir les études de cas
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Right — glass card avec metrics */}
            <div className="glass rounded-3xl p-8 shadow-[var(--shadow-lg)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold" style={{ color: "var(--fg-secondary)" }}>
                  Exemple · PME Marseille
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(16,185,129,0.1)", color: "var(--success)" }}
                >
                  +6 mois
                </span>
              </div>
              <MetricRow label="Trafic organique mensuel" before="420" after="1 840" unit="visites" />
              <MetricRow label="Positions top 10" before="8" after="34" unit="kw" />
              <MetricRow label="Leads générés / mois" before="3" after="14" unit="" />
              <MetricRow label="Pack local Google" before="Absent" after="Top 3" unit="" />
              <p className="mt-5 text-xs" style={{ color: "var(--fg-muted)" }}>
                * Données anonymisées. Résultats variables selon secteur et marché.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── GEO TEASER ── */}
      <Section variant="subtle" py="lg">
        <Container>
          <div className="glass rounded-3xl p-10 sm:p-14 shadow-[var(--shadow-md)] overflow-hidden relative">
            {/* Background gradient orb */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--accent-violet), transparent)" }}
            />
            <div className="relative max-w-xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <Bot className="w-5 h-5" style={{ color: "var(--accent-violet)" }} />
                <span className="text-sm font-bold" style={{ color: "var(--accent-violet)" }}>
                  GEO — Generative Engine Optimization
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Votre marque dans les réponses IA,<br className="hidden sm:block" />
                pas juste dans Google
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "var(--fg-secondary)" }}>
                ChatGPT, Perplexity, Gemini répondent à des milliers de questions chaque jour
                dans votre secteur. Être cité dans ces réponses, ça s'optimise.
              </p>
              <Button href="/geo">
                Découvrir le GEO
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section variant="base" py="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
              Prêt à dominer votre marché local<br className="hidden sm:block" /> et les moteurs IA ?
            </h2>
            <p className="mb-8" style={{ color: "var(--fg-secondary)" }}>
              Un appel de 30 minutes pour comprendre votre situation et voir si on peut travailler ensemble.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" href="/contact">
                Réserver un appel gratuit
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="secondary" href="/tarifs">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
