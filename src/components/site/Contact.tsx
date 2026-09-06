"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export function Contact() {
  const [body, setBody] = useState("");
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        setBody(
          `Bonjour Issam,\n\nJe m’appelle ${f.get("name")}.\nSite : ${f.get("website") || "Non renseigné"}\nBesoin : ${f.get("need")}\n\n${f.get("message")}\n\nMon e-mail : ${f.get("email")}`,
        );
      }}
    >
      <div className="form-columns">
        <label>
          Votre nom
          <input name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label>
          Votre e-mail
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
          />
        </label>
      </div>
      <label>
        Votre site <span>facultatif</span>
        <input
          name="website"
          type="url"
          placeholder="https://votre-site.fr"
          maxLength={500}
        />
      </label>
      <label>
        Votre besoin
        <select name="need">
          <option>Audit SEO</option>
          <option>Accompagnement SEO</option>
          <option>GEO & visibilité IA</option>
          <option>Data web & analytics</option>
          <option>Refonte de site</option>
        </select>
      </label>
      <label>
        Votre projet
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          placeholder="Vos objectifs, votre situation et les difficultés rencontrées…"
        />
      </label>
      <p className="fine">
        Ce formulaire prépare un e-mail dans votre navigateur. Aucune
        information n’est transmise avant votre envoi depuis votre messagerie.
      </p>
      <button className="button" type="submit">
        Préparer ma demande <ArrowUpRight size={17} />
      </button>
      {body && (
        <div className="email-draft" role="status">
          <h3>Votre demande est prête</h3>
          <p>Relisez-la puis ouvrez votre messagerie pour l’envoyer.</p>
          <pre>{body}</pre>
          <a
            className="button"
            href={`mailto:issam@issam-chaoui.fr?subject=${encodeURIComponent("Projet SEO, GEO & data web")}&body=${encodeURIComponent(body)}`}
          >
            Ouvrir ma messagerie <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </form>
  );
}
