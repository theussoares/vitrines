import type { IconName } from '../components/Icon.astro';

export interface Cta {
  label: string;
  href: string;
}

export interface Course {
  title: string;
  area: string;
  icon: IconName;
  blurb: string;
}

export interface Highlight {
  tag: string;
  title: string;
  text: string;
  icon: IconName;
  cta: Cta;
}

export interface LandingPage {
  slug: string;
  seo: { title: string; description: string; ogImage?: string };
  theme: { brand: string; brandDeep: string; glow: string };
  brand: { name: string; city: string; instagram: string; links: Cta };
  whatsapp: { number: string; message: string; display: string };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    text: string;
    primary: Cta;
    secondary: Cta;
    proof: string[];
  };
  marquee: string[];
  stats: { value: number; prefix?: string; suffix?: string; label: string }[];
  method: { title: string; text: string; items: { icon: IconName; title: string; text: string }[] };
  coursesSection: { title: string; text: string };
  courses: Course[];
  graduates?: { title: string; text: string; photos: { src: string; alt: string }[] };
  reviews?: { title: string; source: string; sourceUrl: string; items: { name: string; text: string }[] };
  highlights: Highlight[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  finalCta: { title: string; text: string; button: string };
}

export const whatsappUrl = (lp: Pick<LandingPage, 'whatsapp'>, message?: string): string =>
  `https://wa.me/${lp.whatsapp.number}?text=${encodeURIComponent(message ?? lp.whatsapp.message)}`;
