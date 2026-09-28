import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CircleDot,
  MapPinned,
  MessagesSquare,
  SearchCheck,
} from "lucide-react";
import { SignalHero } from "@/components/site/SignalHero";
import { QueryAtlas } from "@/components/site/QueryAtlas";
import { TerritoryMap } from "@/components/site/TerritoryMap";
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
  "Consultant SEO, GEO & Data Web — MIC SIGNAL",
  "Consultant SEO, GEO et data web : audit technique, stratégie de contenu, SEO local, visibilité dans ChatGPT et mesure GA4 pour les entreprises en France.",
  "/",
);

const faq = [
  [
    "Quelle différence entre SEO, GEO et LLMO ?",
    "Le SEO vise la visibilité dans les résultats des moteurs de recherche. Le GEO et le LLMO travaillent la compréhension, la citation et la recommandation d’une marque dans les réponses générées par ChatGPT, Claude, Gemini ou Perplexity. Le socle reste commun : pages accessibles, informations précises, preuves, sources et identité cohérente.",
  ],
  [
    "Comment apparaître dans ChatGPT ou Claude ?",
    "Il n’existe pas de bouton de soumission ni de garantie. Le travail consiste à rendre vos informations accessibles et vérifiables, à publier des réponses originales, à renforcer les sources qui parlent de votre marque et à observer un panel de questions stable sur plusieurs moteurs.",
  ],
  [
    "Est-ce utile de créer une page pour chaque ville ?",
    "Seulement si chaque page correspond à un marché réellement servi et apporte des informations propres : concurrence, zone, secteurs, contraintes et preuve locale. Remplacer le nom de la ville dans un texte dupliqué crée des pages faibles et peut diluer le site.",
  ],
  [
    "Intervenez-vous uniquement à Marseille et Paris ?",
    "Non. L’accompagnement est réalisé à distance dans toute la France. Les pages locales décrivent les marchés étudiés et les zones couvertes ; elles ne revendiquent pas d’adresse ou d’établissement fictif.",
  ],
  [
    "Peut-on garantir une première position ou une citation IA ?",
    "Non. Aucun consultant ne contrôle le classement de Google ni la réponse d’un LLM. L’engagement porte sur une méthode, des livrables, une mise en œuvre mesurable et une lecture transparente des résultats.",
  ],
  [
    "Pourquoi réunir SEO, GEO et data web ?",
    "Le SEO crée la visibilité, le GEO observe la présence dans les réponses générées et la data web relie les visites aux demandes, appels ou ventes. Les traiter ensemble évite de produire du trafic sans savoir ce qu’il rapporte et de suivre des citations IA sans mesurer leur effet commercial.",
  ],
] as const;

const offers = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Audit SEO & concurrence",
    copy: "Identifier les blocages techniques, les requêtes rentables et les espaces déjà occupés par vos concurrents.",
    details: [
      "Crawl & indexation",
      "Requêtes de décision",
      "Concurrents SEO et IA",
      "Feuille de route priorisée",
    ],
    href: "/audit-seo",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "GEO & visibilité IA",
    copy: "Faire de votre marque une entité claire et de vos contenus des sources vérifiables.",
    details: [
      "Panel de prompts",
      "Audit ChatGPT & Claude",
      "Architecture de réponses",
      "Preuves et citations",
    ],
    href: "/geo-referencement-ia",
  },
  {
    number: "03",
    icon: MapPinned,
    title: "SEO local & Google Maps",
    copy: "Relier vos zones, vos services et vos preuves pour gagner les recherches de proximité.",
    details: [
      "Google Business Profile",
      "Pages locales utiles",
      "Avis & cohérence NAP",
      "Mesure des contacts",
    ],
    href: "/seo-local",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data web & analytics",
    copy: "Relier Search Console, GA4, GTM et vos conversions pour décider sur des données exploitables.",
    details: [
      "Plan de marquage GA4",
      "Google Tag Manager",
      "Conversions & attribution",
      "Tableaux de bord utiles",
    ],
    href: "/data-web",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(person(), website(), professionalService(), faqPage(faq))}
      />
      <SignalHero />

      <section
        className="pressure-strip"
        aria-label="Évolution des parcours de recherche"
      >
        <div className="wrap pressure-strip__grid">
          <p className="atlas-label">LE PROBLÈME / 2026</p>
          <h2>
            Vos clients ne cherchent plus au même endroit. Votre stratégie ne
            peut plus vivre dans une seule colonne Google.
          </h2>
          <div className="pressure-strip__stats">
            <span>
              <strong>01</strong> Ils cherchent
            </span>
            <span>
              <strong>02</strong> Ils interrogent
            </span>
            <span>
              <strong>03</strong> Ils comparent
            </span>
            <span>
              <strong>04</strong> Ils choisissent
            </span>
          </div>
        </div>
      </section>

      <section className="semantic-core" id="expertises">
        <div className="wrap semantic-core__head">
          <p className="atlas-label">01 / CONSULTANT SEO · GEO · DATA</p>
          <div>
            <h2>Trois métiers reliés par une seule question : qu’est-ce qui crée une demande ?</h2>
            <p>
              Une stratégie de visibilité ne s’arrête pas à une position Google.
              Elle doit capter une intention, rendre l’offre vérifiable dans les
              moteurs de réponse et attribuer les contacts obtenus. C’est le rôle
              de MIC SIGNAL : relier référencement naturel, GEO et data web.
            </p>
          </div>
        </div>
        <div className="wrap semantic-core__grid">
          <article>
            <span>SEO / 01</span>
            <h3>Consultant SEO technique et éditorial</h3>
            <p>
              L’audit SEO contrôle le crawl, l’indexation, les canonicals, les
              performances, le maillage interne et les migrations. L’analyse
              sémantique relie ensuite chaque intention à une page de service,
              un guide, une comparaison ou une preuve capable de convertir.
            </p>
            <Link href="/seo">Expertise SEO <ArrowUpRight size={16} /></Link>
          </article>
          <article>
            <span>GEO / 02</span>
            <h3>Consultant GEO et référencement LLM</h3>
            <p>
              Un panel de prompts observe la présence de votre marque dans
              ChatGPT, Claude, Gemini et Perplexity. Le travail porte sur les
              sources citées, les contenus propriétaires, les entités et les
              preuves qui rendent une réponse fiable, sans promesse magique.
            </p>
            <Link href="/audit-visibilite-ia">Audit visibilité IA <ArrowUpRight size={16} /></Link>
          </article>
          <article>
            <span>DATA / 03</span>
            <h3>Consultant data web, GA4 et GTM</h3>
            <p>
              Le plan de marquage distingue un clic d’une conversion réelle.
              Google Analytics 4, Google Tag Manager et Search Console sont
              configurés pour suivre formulaires, appels, ventes et trafic issu
              des moteurs IA, avec des définitions comprises par l’équipe.
            </p>
            <Link href="/data-web">Expertise data web <ArrowUpRight size={16} /></Link>
          </article>
          <article>
            <span>LOCAL / 04</span>
            <h3>SEO local, Google Maps et multi-villes</h3>
            <p>
              La stratégie locale relie Google Business Profile, pages de ville,
              avis, cohérence des informations et mesure des appels. Chaque zone
              doit être réellement servie et apporter une preuve distincte, sans
              fabriquer des dizaines de pages presque identiques.
            </p>
            <Link href="/seo-local">Expertise SEO local <ArrowUpRight size={16} /></Link>
          </article>
        </div>
      </section>

      <section className="visibility-system">
        <div className="wrap visibility-system__intro">
          <p className="atlas-label">02 / SYSTÈME DE VISIBILITÉ</p>
          <div>
            <h2>
              Un site qui occupe les recherches, les réponses et le local.
            </h2>
            <p>
              Le sujet n’est plus de publier “du contenu SEO”. Il faut
              construire un réseau de pages capables d’être trouvées, extraites,
              citées et reliées à une action commerciale.
            </p>
          </div>
        </div>
        <div className="wrap">
          <QueryAtlas />
        </div>
      </section>

      <section className="offers-section">
        <div className="wrap">
          <div className="offers-heading">
            <p className="atlas-label">03 / MISSIONS</p>
            <h2>Quatre façons de remettre votre visibilité en mouvement.</h2>
          </div>
          <div className="offers-grid">
            {offers.map((offer) => (
              <article key={offer.number}>
                <div className="offers-card__head">
                  <span>{offer.number}</span>
                  <offer.icon size={29} />
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.copy}</p>
                <ul>
                  {offer.details.map((detail) => (
                    <li key={detail}>
                      <Check size={16} />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link href={offer.href}>
                  Voir la mission <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TerritoryMap />

      <section className="home-lab">
        <div className="wrap home-lab__grid">
          <div className="home-lab__copy">
            <p className="atlas-label">04 / MIC LAB</p>
            <h2>Ne devinez plus ce qu’il faut publier.</h2>
            <p>
              Construisez votre panel de prompts, comparez les preuves visibles
              de trois marques et générez un brief local qui refuse les pages
              dupliquées. Chaque résultat est lisible, modifiable et exportable.
            </p>
            <Link href="/outils-seo" className="signal-button signal-button--text">
              Ouvrir le laboratoire <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="home-lab__console" aria-label="Aperçu du MIC Lab">
            <div><span>MIC LAB / 04</span><span>LOCAL · PRIVATE</span></div>
            {[
              ["Panel LLM", "12 prompts stables", "READY"],
              ["Matrice rivale", "8 signaux comparés", "INPUT"],
              ["Brief local", "preuve requise", "CHECK"],
              ["Robots IA", "search ≠ training", "POLICY"],
            ].map(([name, detail, state], index) => (
              <section key={name}>
                <i>0{index + 1}</i><strong>{name}</strong><small>{detail}</small><b>{state}</b>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="answer-engine">
        <div className="wrap answer-engine__grid">
          <div className="answer-engine__copy">
            <p className="atlas-label">05 / MOTEURS DE RÉPONSE</p>
            <h2>
              Quand une IA répond, votre marque doit être facile à vérifier.
            </h2>
            <p>
              ChatGPT, Claude, Perplexity et Gemini ne lisent pas une page comme
              un prospect. Ils assemblent des fragments, comparent des sources
              et évaluent la cohérence de l’entité. La stratégie GEO travaille
              ces trois conditions sans inventer de balisage magique.
            </p>
            <Link href="/geo" className="signal-button signal-button--text">
              Comprendre le GEO / LLMO <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="answer-engine__pipeline">
            {[
              ["A", "ACCESSIBLE", "Le contenu peut être exploré et rendu."],
              [
                "C",
                "COMPRÉHENSIBLE",
                "La réponse, l’entité et le contexte sont explicites.",
              ],
              [
                "V",
                "VÉRIFIABLE",
                "Les faits sont datés, sourcés et attribués.",
              ],
              ["C", "CITABLE", "Le passage apporte une information autonome."],
            ].map(([letter, title, text], index) => (
              <div key={`${letter}-${title}`}>
                <span>{letter}</span>
                <i aria-hidden="true">0{index + 1}</i>
                <section>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="method-field">
        <div className="wrap method-field__header">
          <p className="atlas-label">05 / MÉTHODE DE TERRAIN</p>
          <h2>Observer. Cartographier. Occuper. Mesurer.</h2>
        </div>
        <div className="wrap method-field__grid">
          {[
            [
              "01",
              "Observer",
              "Crawl, données Search Console, visibilité IA, concurrence et parcours de conversion.",
            ],
            [
              "02",
              "Cartographier",
              "Intentions, entités, zones, pages existantes et espaces éditoriaux à créer.",
            ],
            [
              "03",
              "Occuper",
              "Corrections techniques, pages de vente, contenus sources, maillage et signaux locaux.",
            ],
            [
              "04",
              "Mesurer",
              "Positions, citations observées, contacts, chiffre d’affaires attribuable et prochain arbitrage.",
            ],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <CircleDot size={20} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="wrap method-field__link">
          <Link href="/methode-seo">
            Voir la méthode et les livrables <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="consultant-section">
        <div className="wrap consultant-section__grid">
          <div className="consultant-section__stamp" aria-hidden="true">
            <strong>MIC</strong>
            <span>
              SEO / GEO
              <br />
              LOCAL / DATA
            </span>
          </div>
          <div>
            <p className="atlas-label">06 / VOTRE INTERLOCUTEUR</p>
            <h2>Med Issam Chaoui, consultant SEO & GEO indépendant.</h2>
            <p>
              On intervient à l’endroit où la technique, l’éditorial et la donnée
              doivent enfin se parler. Vous gardez un interlocuteur du
              diagnostic jusqu’à la recette, avec des recommandations reliées à
              des URL, des responsables et une méthode de vérification.
            </p>
            <div className="consultant-section__proofs">
              <span>SEO technique & migrations</span>
              <span>Stratégie éditoriale</span>
              <span>GEO / LLMO</span>
              <span>SEO local multi-zones</span>
              <span>GA4, GTM & reporting</span>
            </div>
            <Link href="/a-propos">
              Découvrir mon approche <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-atlas">
        <div className="wrap faq-atlas__grid">
          <div>
            <p className="atlas-label">07 / QUESTIONS FRÉQUENTES</p>
            <h2>Les réponses avant le premier échange.</h2>
          </div>
          <div>
            {faq.map(([question, answer], index) => (
              <details key={question}>
                <summary>
                  <span>0{index + 1}</span>
                  {question}
                  <i>+</i>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="war-room-cta">
        <div className="wrap">
          <p className="atlas-label">VOTRE TERRITOIRE EST DÉJÀ OCCUPÉ</p>
          <h2>Voyons par où le reprendre.</h2>
          <p>
            Envoyez votre URL, votre marché et vos priorités. On revient avec
            les premières pistes à vérifier avant toute proposition.
          </p>
          <Link
            href="/contact"
            className="signal-button signal-button--primary"
          >
            Demander un diagnostic <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
