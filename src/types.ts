export type ProjectCategory = 'all' | 'digital-products' | 'brand-systems' | 'mobility';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  client: string;
  image: string;
  keyMetric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
  duration: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  keyOutcome: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  verifiedResult: string;
}
