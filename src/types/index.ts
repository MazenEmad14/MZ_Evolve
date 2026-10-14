export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  keyCapabilities: {
    title: string;
    description: string;
  }[];
  architectureHighlights: string[];
  idealFor: string[];
  techStack: string[];
}

export interface Principle {
  id: string;
  title: string;
  summary: string;
  description: string;
  iconName: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface TechnologyDemonstration {
  id: string;
  title: string;
  category: string;
  status: 'Prototype' | 'Proof of Concept' | 'Interactive Blueprint';
  summary: string;
  architectureDetails: string;
  highlights: string[];
  techStack: string[];
  disclaimer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  serviceInterest: string;
  timeline?: string;
  budgetRange?: string;
  projectDescription: string;
  privacyConsent: boolean;
  honeypot?: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  inquiryId?: string;
  errors?: Record<string, string>;
}
