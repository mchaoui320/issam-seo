import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Sparkles,
  ChartNoAxesCombined,
  Crosshair,
  Layers3,
  Fingerprint,
  ChevronRight,
} from "lucide-react";
import { Orbit } from "@/components/site/Orbit";
import { Tools } from "@/components/site/Tools";
import { ResourceList } from "@/components/site/ResourceList";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  faqPage,
  graph,
  person,
  professionalService,
  website,
} from "@/lib/schema";
export const metadata = pageMetadata(
  "Consultant SEO, GEO & Data web — une visibilité qui compte",
  "Med Issam Chaoui relie référencement naturel, visibilité dans les moteurs IA et analytics. Explorez les expertises, guides et outils SEO gratuits.",
  "/",
);
const services = [
  {
    n: "01",
    name: "SEO",
    title: "Soyez trouvé.",
    desc: "Transformez les intentions de recherche en visites qualifiées. De la technique au contenu, chaque page a un rôle.",
    tags: ["Audit & technique", "Contenu", "SEO local"],
    href: "/seo",
    icon: Search,
  },
  {
    n: "02",
    name: "GEO & IA",
    title: "Devenez une source.",
    desc: "Rendez votre expertise claire, accessible et vérifiable pour les nouvelles expériences de recherche.",
    tags: ["Entités", "Réponses IA", "Citations"],
    href: "/geo",
    icon: Sparkles,
  },
  {
    n: "03",
    name: "DATA WEB",
    title: "Décidez avec précision.",
    desc: "Reliez votre acquisition à vos résultats. Des données fiables, des indicateurs compris et des décisions concrètes.",
    tags: ["GA4 & GTM", "Dashboards", "Conversion"],
    href: "/data-web",
    icon: ChartNoAxesCombined,
  },
];
const faq: readonly (readonly [string, string])[] = [
  [
    "Qu’est-ce qu’un consultant SEO, GEO et data web ?",
    "C’est un interlocuteur unique sur trois leviers reliés : rendre un site visible dans les moteurs de recherche (SEO), le rendre citable par les moteurs de réponse IA (GEO) et mesurer ce que cette visibilité produit réellement (data web). Traiter ces sujets ensemble évite les angles morts entre acquisition, contenu et mesure.",
  ],
  [
    "Quelle différence entre SEO et GEO ?",
    "Le SEO travaille la visibilité dans les moteurs de recherche. Le GEO s’intéresse à la compréhension et à la citation de vos contenus dans les réponses générées par IA. Les deux reposent sur des pages accessibles, utiles et fiables.",
  ],
  [
    "Peut-on garantir une première position sur Google ?",
    "Non. Le classement dépend de nombreux facteurs, dont la concurrence et les systèmes du moteur. L’accompagnement s’engage sur un périmètre, des actions et une mesure transparente, jamais sur une position garantie.",
  ],
  [
    "Faut-il être à Marseille ou à Paris pour travailler ensemble ?",
    "Non. Les audits, restitutions et suivis peuvent être réalisés à distance. Le périmètre géographique de votre stratégie dépend de vos clients et des marchés que vous desservez réellement.",
  ],
  [
    "Les outils du Lab analysent-ils mon site automatiquement ?",
    "Non. Ils proposent un aperçu de résultat Google, une simulation, un générateur UTM et une checklist déclarative. Les calculs restent dans votre navigateur et ne constituent pas un audit automatisé.",
  ],
];
export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(person(), website(), professionalService(), faqPage(faq))}
      />
      <section className="home-hero wrap">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" /> CONSULTANT INDÉPENDANT{" "}
            <span className="kicker-separator">/</span> SEO · GEO · DATA
          </div>
          <h1>
            La recherche
            <br />
            évolue.
            <br />
            <span className="outline-text">Votre visibilité</span>
            <br />
            <span className="green">aussi.</span>
            <span className="hero-star" aria-hidden="true">
              ✳
            </span>
          </h1>
          <p>
            Google. Les moteurs IA. Vos données.
            <br />
            Je connecte les trois pour transformer votre expertise en{" "}
            <strong>visibilité qui compte.</strong>
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button">
              Construisons votre stratégie <ArrowUpRight size={18} />
            </Link>
            <Link href="#expertises" className="text-link">
              Explorer les expertises <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-signature">
            <span className="avatar-letter">IC</span>
            <div>
              <strong>Med Issam Chaoui</strong>
              <span>Un interlocuteur. Une vision d’ensemble.</span>
            </div>
            <span className="signature-line" />
          </div>
        </div>
        <Orbit />
      </section>
      <div className="ecosystem-strip">
        <div className="wrap ecosystem-row">
          <span className="mono">
            UN WEB. PLUSIEURS
            <br />
            POINTS D’ENTRÉE.
          </span>
          {[
            "Google",
            "ChatGPT",
            "Perplexity",
            "Gemini",
            "GA4",
            "Looker Studio",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <section className="wrap section-block" id="expertises">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span /> 01 / EXPERTISES CONNECTÉES
            </span>
            <h2>
              Ne laissez aucun
              <br />
              levier dans l’ombre.
            </h2>
          </div>
          <p>
            Une stratégie cohérente, de la première
            <br />
            recherche à la décision de votre client.
          </p>
        </div>
        <div className="expertise-grid">
          {services.map((s) => (
            <Link className="expertise-card" href={s.href} key={s.n}>
              <div className="card-top">
                <span className="mono">/{s.n}</span>
                <s.icon size={26} />
              </div>
              <span className="mono green">{s.name}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="card-bottom">
                Explorer {s.name.toLowerCase()}
                <ArrowUpRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="approach-section">
        <div className="wrap approach-grid">
          <div>
            <span className="eyebrow">
              <span /> 02 / L’APPROCHE
            </span>
            <h2>
              Moins d’intuition.
              <br />
              <span className="green">Plus de direction.</span>
            </h2>
            <p>
              Pas une liste de recommandations qui finit dans un dossier. Un
              plan clair, des actions priorisées et une mesure qui vous aide à
              avancer.
            </p>
            <Link className="text-link" href="/methode-seo">
              La méthode en détail <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="method-list">
            {[
              {
                icon: Crosshair,
                t: "Comprendre avant d’agir",
                d: "Vos objectifs, votre marché et ce que disent vraiment vos données.",
              },
              {
                icon: Layers3,
                t: "Prioriser ce qui compte",
                d: "L’impact attendu, l’effort et les ressources disponibles.",
              },
              {
                icon: Fingerprint,
                t: "Construire votre différence",
                d: "Une expertise identifiable et des contenus qui apportent une réponse.",
              },
              {
                icon: ChartNoAxesCombined,
                t: "Mesurer pour progresser",
                d: "Des indicateurs utiles, des limites explicites et la prochaine décision.",
              },
            ].map((m, i) => (
              <div key={m.t}>
                <span className="method-number mono">0{i + 1}</span>
                <m.icon size={21} />
                <div>
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section-block" id="lab">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span /> 03 / LE LAB
            </span>
            <h2>
              Explorez. Testez.
              <br />
              Prenez une longueur d’avance.
            </h2>
          </div>
          <div>
            <span className="pill">OUTILS GRATUITS · SANS INSCRIPTION</span>
            <p>
              Des outils simples pour passer
              <br />
              de la réflexion à l’action.
            </p>
          </div>
        </div>
        <Tools />
      </section>
      <section className="wrap section-block resource-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span /> 04 / NOTES DE TERRAIN
            </span>
            <h2>
              Comprendre le web
              <br />
              qui vient.
            </h2>
          </div>
          <Link className="text-link" href="/blog">
            Toutes les ressources <ArrowUpRight size={17} />
          </Link>
        </div>
        <ResourceList />
      </section>
      <section className="wrap section-block faq-section">
        <div>
          <span className="eyebrow">LES BONNES QUESTIONS</span>
          <h2>
            On en parle
            <br />
            simplement.
          </h2>
          <Link href="/contact" className="text-link">
            Une autre question ? <ArrowUpRight size={17} />
          </Link>
        </div>
        <div>
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <ChevronRight size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="wrap closing-cta">
        <div>
          <span className="eyebrow">LA SUITE COMMENCE ICI</span>
          <h2>
            Et si votre prochain client
            <br />
            vous trouvait <span>vraiment ?</span>
          </h2>
          <p>
            Parlons de votre site, de vos ambitions et du chemin pour les
            relier.
          </p>
          <Link className="button dark" href="/contact">
            Parlons de votre projet <ArrowUpRight size={19} />
          </Link>
        </div>
        <span className="cta-symbol" aria-hidden="true">
          ↗
        </span>
      </section>
    </>
  );
}
