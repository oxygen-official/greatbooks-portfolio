import { CaseStudy, ServiceItem, ProcessStep, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_studio_space_1794326390150.jpg';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'quantum-analytics',
    title: 'Quantum Analytics',
    subtitle: 'Institutional asset monitoring and high-frequency portfolio dashboard',
    category: 'digital-products',
    categoryLabel: 'Digital Products',
    year: '2026',
    client: 'Quantum Capital Partners',
    image: '/src/assets/images/project_fintech_design_1794326389770.jpg',
    keyMetric: '+142%',
    metricLabel: 'Inbound Client Retention in 6 Months',
    summary: 'A sub-50ms latency institutional portfolio dashboard designed for complex multi-asset fund managers navigating real-time market data.',
    challenge: 'Fund managers were overwhelmed by fractured terminals and disparate spreadsheets, requiring a unified, dense yet calm operational workspace.',
    solution: 'Designed and built a modular canvas with tactile typography, custom canvas-rendered SVG charting, and keyboard-first navigation.',
    technologies: ['React 19', 'TypeScript', 'Web Workers', 'Tailwind CSS', 'Highcharts Engine'],
    deliverables: ['Custom UI Component System', 'Interactive Data Visualizations', 'End-to-End Design Tokens', 'WCAG AA Accessibility Audit']
  },
  {
    id: 'solis-botanical',
    title: 'Solis Botanicals',
    subtitle: 'E-commerce platform and visual architecture for regenerative luxury apothecary',
    category: 'brand-systems',
    categoryLabel: 'Brand Systems',
    year: '2025',
    client: 'Solis Apothecary Group',
    image: '/src/assets/images/project_sustainable_brand_1794326391625.jpg',
    keyMetric: '$3.8M',
    metricLabel: 'Direct-to-Consumer First-Quarter Volume',
    summary: 'Tactile digital flagship and brand architecture celebrating regenerative agricultural ingredients with artisanal material depth.',
    challenge: 'Traditional e-commerce templates failed to communicate the craftsmanship, soil origin certifications, and sensory value of premium botanicals.',
    solution: 'Engineered an editorial storefront with bespoke ingredient transparency modules, seamless checkout, and custom sensory micro-interactions.',
    technologies: ['Headless Storefront', 'TypeScript', 'Tailwind CSS', 'Edge SSR', 'Stripe Elements'],
    deliverables: ['E-Commerce Digital Flagship', 'Packaging Identity Guidelines', 'Ingredient Provenance Engine', 'Subscription Architecture']
  },
  {
    id: 'aether-mobility',
    title: 'Aether Mobility',
    subtitle: 'Next-generation in-cabin console and spatial telemetry interface for luxury EVs',
    category: 'mobility',
    categoryLabel: 'Spatial & Mobility',
    year: '2026',
    client: 'Aether Automotive Technologies',
    image: '/src/assets/images/project_mobility_platform_1794326390720.jpg',
    keyMetric: '0.18s',
    metricLabel: 'Glance Interaction Response Target',
    summary: 'Minimalist driver cockpit interface designed to reduce cognitive load while providing instant tactile feedback and precision climate telemetry.',
    challenge: 'Automotive touchscreens have become dangerously cluttered with nested menus and bright distraction layers that distract drivers.',
    solution: 'Created an ergonomic spatial interaction framework with high-contrast typography, haptic rotary synchronization, and context-aware glance modes.',
    technologies: ['Embedded React', 'WebGL Shaders', 'CAN Bus Protocol Bridge', 'Motion Framer'],
    deliverables: ['Automotive HMI Architecture', 'Haptic Sync Design System', 'Driver Ergonomics Simulation', 'Hardware Integration Spec']
  }
];

export const STUDIO_METRICS = [
  { value: '$180M+', label: 'Client Pipeline Generated', period: 'Past 3 Years' },
  { value: '48ms', label: 'Average Interaction Latency', period: 'Production P95' },
  { value: '26', label: 'International Design Awards', period: 'Awwwards & Red Dot' },
  { value: '100%', label: 'On-Time Project Delivery', period: 'Audited Track Record' }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Digital Product Strategy & Architecture',
    description: 'We translate ambitious business models into crisp functional roadmaps, technical specifications, and system architectures that scale effortlessly.',
    features: ['Technical Feasibility Sprints', 'Information Architecture & Schemas', 'Competitive Gap Analysis', 'Product Spec Documentation'],
    duration: '2–4 Weeks'
  },
  {
    number: '02',
    title: 'High-Performance Web & Full-Stack Apps',
    description: 'Bespoke web applications built with modern frontend frameworks, strict accessibility, lightning load times, and rock-solid code maintainability.',
    features: ['React & Next.js Platforms', 'Strict TypeScript Typings', 'Sub-second First Paint', 'Design Token Automation'],
    duration: '4–12 Weeks'
  },
  {
    number: '03',
    title: 'Design Systems & Brand Governance',
    description: 'Comprehensive, tokenized UI libraries and brand guidelines that enable enterprise engineering teams to ship cohesive experiences 3x faster.',
    features: ['Tokenized Component Libraries', 'Figma to Code Pipeline', 'Dark/Light Theme Matrix', 'Component Documentation'],
    duration: '3–6 Weeks'
  },
  {
    number: '04',
    title: 'Interaction Engineering & Spatial UX',
    description: 'Fluid micro-interactions, canvas-driven data visualizations, and ergonomic interfaces crafted with obsessive attention to latency and frame rates.',
    features: ['60fps Compositor Animations', 'Custom Data Visualizations', 'Hardware & Display Interfaces', 'Tactile Motion Tuning'],
    duration: '2–6 Weeks'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnostic Discovery & Research',
    duration: 'Week 1–2',
    description: 'We interrogate assumptions, analyze customer friction points, audit existing infrastructure, and align on measurable business benchmarks.',
    deliverables: ['Problem Definition Dossier', 'Technical Architecture Map', 'Design Direction Moodboard', 'Project Roadmap & Milestones'],
    keyOutcome: 'Zero ambiguity on scope, technical dependencies, and commercial goals.'
  },
  {
    number: '02',
    title: 'Architecture & High-Fidelity Prototyping',
    duration: 'Week 3–5',
    description: 'We craft the exact visual language, responsive component matrix, and clickable prototypes tested against real users and stakeholders.',
    deliverables: ['Clickable Web Prototype', 'Design Token Specifications', 'Interactive State Flowcharts', 'Accessibility Compliance Matrix'],
    keyOutcome: 'A validated interactive model of the entire user journey.'
  },
  {
    number: '03',
    title: 'Production Engineering & QA Sprints',
    duration: 'Week 6–10',
    description: 'We write production-grade, tested TypeScript code with clean component boundaries, automated linting, and rigorous cross-browser verification.',
    deliverables: ['Fully Integrated Codebase', 'Unit & End-to-End Test Suite', 'Performance Optimization Report', 'Staging Preview Environment'],
    keyOutcome: 'Clean, production-ready software ready for launch.'
  },
  {
    number: '04',
    title: 'Launch, Verification & Knowledge Transfer',
    duration: 'Week 11–12',
    description: 'We execute zero-downtime deployment, monitor live metrics, deliver engineering documentation, and train your internal product team.',
    deliverables: ['Production Cloud Deployment', 'Comprehensive Developer Hand-off', '30-Day Post-Launch Warranty', 'System Maintenance Guide'],
    keyOutcome: 'A stress-free launch backed by real metrics and self-sufficient handover.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Kroma redesigned our core trading platform in 8 weeks. Our institutional onboarding cycle dropped by 45%, and clients consistently praise the calm precision of the interface.',
    author: 'Elena Vance',
    role: 'Chief Technology Officer',
    company: 'Quantum Capital Partners',
    verifiedResult: '45% Reduction in User Onboarding Friction'
  },
  {
    quote: 'They did not just build a website; they established a design system that our internal engineers continue to build on every single day. The craftsmanship is world-class.',
    author: 'Julian Thorne',
    role: 'Founder & Managing Director',
    company: 'Solis Botanicals Ltd.',
    verifiedResult: '+$3.8M Direct Revenue in Q1'
  },
  {
    quote: 'In automotive design, every millisecond of driver reaction counts. Kroma delivered an interface architecture that passed every single road-safety cognitive benchmark on the first pass.',
    author: 'Dr. Marcus Lindqvist',
    role: 'Head of Human-Machine Interface',
    company: 'Aether Mobility Systems',
    verifiedResult: '100% Safety Compliance Certification'
  }
];
