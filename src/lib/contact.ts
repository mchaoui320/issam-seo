/**
 * Coordonnées de contact — source unique.
 *
 * Le nom de domaine n'est pas arbitré. Aucune adresse e-mail ne doit donc être
 * écrite en dur dans une page : une adresse publiée est moissonnée en quelques
 * jours et ne se reprend pas. Tant que `NEXT_PUBLIC_CONTACT_EMAIL` n'est pas
 * renseignée, le site n'affiche aucune adresse et oriente vers le formulaire.
 *
 * Le jour où le domaine est choisi, il suffit de renseigner la variable
 * d'environnement : rien d'autre ne change dans le code.
 */

/** Adresse publique, ou `null` tant qu'elle n'est pas arbitrée. */
export const CONTACT_EMAIL: string | null =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;

/** Lien de prise de rendez-vous, ou `null` si non configuré. */
export const CALENDLY_URL: string | null =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || null;

/** Profil LinkedIn — alimente aussi `sameAs` dans le schema Person. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/chaouissam";

/** Délai de réponse annoncé sur le site. Tenu, donc volontairement prudent. */
export const RESPONSE_TIME = "48 heures ouvrées";

/** Villes d'intervention mises en avant. */
export const BASED_IN = "Marseille et Paris";

export const hasPublicEmail = CONTACT_EMAIL !== null;
export const hasBooking = CALENDLY_URL !== null;
