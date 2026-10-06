import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { JsonLd } from "@/components/site/JsonLd";
import { siteUrl } from "@/lib/seo";

type Item = { title: string; text: string };

export function InsightServicePage({
  code,
  eyebrow,
  title,
  intro,
  outcome,
  tensions,
  diagnostics,
  steps,
  deliverables,
  faq,
  path,
  pricing,
}: {
  code: string;
  eyebrow: string;
  title: string;
  intro: string;
  outcome: string;
  tensions: readonly Item[];
  diagnostics: readonly Item[];
  steps: readonly Item[];
  deliverables: readonly string[];
  faq: readonly (readonly [string, string])[];
  path: string;
  /**
   * Repère de prix. Aucun concurrent du marché n'en affiche : c'est
   * précisément pour ça qu'on le fait.
   */
  pricing?: { fourchette: string; variables: readonly string[] };
}) {
  return (
    <>
      <JsonLd
        data={JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: title,
              description: intro,
              url: `${siteUrl}${path}`,
              provider: {
                "@type": "ProfessionalService",
                name: "MIC SIGNAL",
                url: siteUrl,
              },
              areaServed: { "@type": "Country", name: "France" },
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            },
          ],
        })}
      />
      <main className="insight-page">
        <section className="insight-hero">
          <div className="wrap insight-hero__grid">
            <div>
              <span className="eyebrow">{eyebrow}</span>
              <h1>{title}</h1>
              <p>{intro}</p>
              <div className="insight-hero__actions">
                <Link href="/contact" className="button">
                  Parler du projet <ArrowUpRight size={17} />
                </Link>
                <Link href="/outils-seo">Tester le MIC Lab →</Link>
              </div>
            </div>
            <aside>
              <span>{code} / ISSUE</span>
              <strong>{outcome}</strong>
              <div>
                <small>SORTIE</small>
                <p>Des constats traçables, des priorités ordonnées et un plan que l’équipe peut réellement exécuter.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="insight-tensions">
          <div className="wrap">
            <p className="atlas-label">CE QUE L’AUDIT DOIT TRANCHER</p>
            <div className="insight-tensions__grid">
              {tensions.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="diagnostic-field">
          <div className="wrap diagnostic-field__grid">
            <header>
              <p className="atlas-label">CHAMP D’ANALYSE</p>
              <h2>Une lecture croisée du marché, du site et des sources.</h2>
              <p>
                Une recommandation isolée crée rarement un avantage. Le diagnostic
                relie la demande, les pages accessibles, l’entité, la preuve et la
                mesure pour expliquer pourquoi une marque gagne ou disparaît.
              </p>
            </header>
            <div>
              {diagnostics.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method-sequence">
          <div className="wrap">
            <div className="method-sequence__head">
              <p className="atlas-label">SÉQUENCE DE TRAVAIL</p>
              <h2>Du signal brut à la décision.</h2>
            </div>
            <div className="method-sequence__grid">
              {steps.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="deliverable-ledger">
          <div className="wrap deliverable-ledger__grid">
            <div>
              <p className="atlas-label">LIVRABLE / PAS UN PDF OUBLIÉ</p>
              <h2>Une base de travail utilisable dès le lendemain.</h2>
            </div>
            <ul>
              {deliverables.map((item) => (
                <li key={item}><Check size={18} />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {pricing && (
          <section className="insight-pricing">
            <div className="wrap insight-pricing__grid">
              <div>
                <p className="atlas-label">BUDGET</p>
                <h2>Combien ça coûte</h2>
                <p className="insight-pricing__montant">
                  {pricing.fourchette}
                </p>
                <p className="insight-pricing__note">
                  Une fourchette n’est pas un devis. Le chiffrage se fait après
                  un premier échange, et la proposition précise le périmètre,
                  les livrables et ce qui n’est pas inclus.
                </p>
                <Link href="/contact" className="button">
                  Demander un chiffrage <ArrowUpRight size={17} />
                </Link>
              </div>
              <div className="insight-pricing__variables">
                <p className="mono muted">CE QUI FAIT VARIER LE PRIX</p>
                <ul>
                  {pricing.variables.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
                <p className="insight-pricing__source">
                  Repère marché : le tarif journalier moyen d’un consultant SEO
                  en France s’établit autour de 570 € en 2025 (baromètre Malt).
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="insight-faq">
          <div className="wrap insight-faq__grid">
            <header><p className="atlas-label">QUESTIONS DE DÉCISION</p><h2>Avant de lancer la mission.</h2></header>
            <div>
              {faq.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="insight-cta">
          <div className="wrap insight-cta__grid">
            <p>{code} / NEXT MOVE</p>
            <h2>Vous avez déjà des données, des contenus et des concurrents. Il faut maintenant les faire parler ensemble.</h2>
            <Link href="/contact">Décrire le contexte <ArrowUpRight size={20} /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
