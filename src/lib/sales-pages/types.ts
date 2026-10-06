export type SalesPageImage = {
  src: string;
  alt: string;
  caption: string;
};

export type SalesPageSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type SalesPageData = {
  code: string;
  primaryKeyword: string;
  lede: string;
  proofLine: string;
  highlights: { value: string; label: string }[];
  image: SalesPageImage;
  answer: string;
  takeaways: string[];
  sections: SalesPageSection[];
  tools: { name: string; role: string }[];
  deliverables: { title: string; detail: string }[];
  process: { step: string; title: string; detail: string }[];
  scopes: { title: string; context: string; includes: string }[];
  faq: readonly (readonly [string, string])[];
  sources?: { label: string; href: string }[];
};
