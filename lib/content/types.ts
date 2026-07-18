/** Shared content types. Every data module below is validated against these. */

export type ProgramPoint = { n: string; text: string };
export type GiftTier = { amt: string; what: string; note: string };

export type Program = {
  slug: string;
  tag: string;
  name: string;
  blurb: string;
  desc: string;
  who: string;
  format: string;
  points: ProgramPoint[];
  quote: string;
  quoteBy: string;
  whyTitle: string;
  why: string;
  tiers: GiftTier[];
  ctaLine: string;
};

export type Story = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  paras: string[];
};

export type TeamMember = { name: string; role: string };

export type Stat = { key: string; value: number; label: string };
export type Milestone = { year: string; title: string; note: string };
export type SpendLine = { label: string; pct: number; tone: "accent" | "tile" | "muted" };
export type Alum = { name: string; cohort: string; now: string };
export type Contribution = { n: string; title: string; note: string };

export type Camp = { tag: string; dates: string; detail: string };

export type SponsorTier = {
  name: string;
  tag: string;
  amt: string;
  note: string;
  featured?: boolean;
};

export type Faq = { q: string; a: string };

export type Testimonial = { quote: string; by: string; tone: "tile" | "surface" };
