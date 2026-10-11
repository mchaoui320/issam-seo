import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceSales as Data } from "@/lib/services-sales";

/**
 * Blocs commerciaux d'une page de service : problèmes, livrables, méthode,
 * outils, tarif, objections.
 *
 * Les intitulés de section portent les variantes de la requête principale —
 * c'est ce qui construit le champ sémantique d'une page d'agence, bien plus
 * que la répétition du mot-clé.
 */
export function ServiceSales({
  data,
  sujet,
}: {
  data: Data;
  /** Nom du service, inséré dans les intertitres. Ex. « GEO ». */
  sujet: string;
}) {
  return (
    <>
      <section className="svc-problemes wrap">
        <p className="atlas-label">LE CONSTAT</p>
        <h2>Ce qui vous échappe aujourd’hui</h2>
        <div className="svc-problemes__grid">
          {data.problemes.map((p) => (
            <article key={p.titre}>
              <h3>{p.titre}</h3>
              <p>{p.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="svc-livrables wrap">
        <div className="svc-livrables__head">
          <p className="atlas-label">CE QU’ON REMET</p>
          <h2>Les livrables d’une mission {sujet}</h2>
          <p>
            Des documents exploitables par vos équipes, y compris après la fin
            de la mission. Aucune dépendance n’est créée artificiellement.
          </p>
        </div>
        <ol className="svc-livrables__liste">
          {data.livrables.map((l, i) => (
            <li key={l.nom}>
              <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{l.nom}</h3>
                <p>{l.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="svc-etapes wrap">
        <p className="atlas-label">DÉROULÉ</p>
        <h2>Comment se passe une mission {sujet}</h2>
        <div className="svc-etapes__liste">
          {data.etapes.map((e, i) => (
            <article key={e.titre}>
              <header>
                <span className="svc-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{e.titre}</h3>
                <span className="svc-duree">{e.duree}</span>
              </header>
              <p>{e.texte}</p>
              <p className="svc-produit">
                <Check size={14} aria-hidden="true" />
                {e.produit}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="svc-outils wrap">
        <div>
          <p className="atlas-label">OUTILLAGE</p>
          <h2>Les outils utilisés</h2>
          <p>
            Nommés plutôt qu’évoqués : un prestataire qui parle de « ses outils
            » sans les citer n’a généralement rien de particulier à montrer.
          </p>
        </div>
        <dl className="svc-outils__liste">
          {data.outils.map((o) => (
            <div key={o.nom}>
              <dt>{o.nom}</dt>
              <dd>{o.usage}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="svc-tarif wrap">
        <div>
          <p className="atlas-label">BUDGET</p>
          <h2>Combien coûte une mission {sujet}</h2>
          <p className="svc-tarif__montant">{data.tarif.fourchette}</p>
          <p className="svc-tarif__note">
            Une fourchette n’est pas un devis. Le chiffrage se fait après un
            premier échange, et la proposition précise le périmètre, les
            livrables et ce qui n’est pas inclus.
          </p>
          <Link href="/contact" className="button">
            Demander un chiffrage <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="svc-tarif__variables">
          <p className="mono muted">CE QUI FAIT VARIER LE PRIX</p>
          <ul>
            {data.tarif.variables.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <p className="svc-tarif__source">
            Repère marché : le tarif journalier moyen d’un consultant SEO en
            France s’établit autour de 570 € en 2025 (baromètre Malt).
          </p>
        </div>
      </section>

      {data.objections?.length ? (
        <section className="svc-objections wrap">
          <p className="atlas-label">LES VRAIES QUESTIONS</p>
          <h2>Ce qu’on nous demande avant de signer</h2>
          <div className="svc-objections__liste">
            {data.objections.map((o) => (
              <article key={o.question}>
                <h3>{o.question}</h3>
                <p>{o.reponse}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
