// Site
export const SITE_NAME = "Issam Chaoui — Consultant SEO Freelance";
export const SITE_DESCRIPTION =
  "Consultant SEO à Marseille et Paris. Audit SEO, contenu optimisé, SEO local, netlinking. Générez du trafic qualifié.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.issam-chaoui.fr";

// Contact
export const CONTACT = {
  email: "issam@issam-chaoui.fr",
  phone: "+33 6 XX XX XX XX",
  address: "Marseille & Paris",
};

// Social / External
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/issam-chaoui",
  twitter: "https://twitter.com/issam_chaoui",
  github: "https://github.com",
};

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/issam-chaoui";

// Navigation
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Cas clients", href: "/etudes-de-cas" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

// Cities
export const CITIES = [
  {
    name: "Marseille",
    slug: "marseille",
    regions: ["13000", "13001", "13002", "13003", "13004", "13005", "13006", "13007", "13008", "13009"],
  },
  {
    name: "Paris",
    slug: "paris",
    regions: ["75001", "75002", "75003", "75004", "75005", "75006", "75007", "75008", "75009", "75010", "75011", "75012", "75013", "75014", "75015", "75016", "75017", "75018", "75019", "75020"],
  },
];

// Services
export const SERVICES = [
  { slug: "audit-seo", name: "Audit SEO" },
  { slug: "seo-local", name: "SEO Local" },
  { slug: "strategie-contenu-seo", name: "Stratégie Contenu SEO" },
  { slug: "netlinking", name: "Netlinking" },
  { slug: "refonte-seo", name: "Refonte SEO" },
];
