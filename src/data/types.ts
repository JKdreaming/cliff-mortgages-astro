export interface FAQItem {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  path: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: string;
}

export interface ProgramDetails {
  summary: string;
  eligibility: string[];
  benefits: string[];
  howItWorks?: HowItWorksStep[];
}

export interface LoanProgramLink {
  path: string;
  name: string;
  icon: string;
  description: string;
}

export interface LoanProgramMeta {
  path: string;
  name: string;
  description: string;
  h1: string;
  heroKey: string;
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  const gtag = (window as any).gtag;
  if (!gtag) return;

  gtag('event', eventName, params || {});
};

export interface CityRecord {
  city: string;
  state: string;
  stateName: string;
  type: string;
  county: string;
  distanceMiles: number | null;
  populationTier: string;
  citySlug: string;
  stateSlug: string;
  fullPath: string;
  displayName: string;
  isPublished: boolean;
}

export interface PageData {
  path: string;
  title: string;
  h1: string;
  description: string;
  seoDescription?: string;
  seoImageUrl?: string;
  breadcrumbs: Breadcrumb[];
  faqs: FAQItem[];
  imageUrl?: string;
  imageAlt?: string;
  programDetails?: ProgramDetails;
}
