import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ai',
    title: 'AI Services',
    description:
      'Harness the power of artificial intelligence to automate tasks, gain insights, and create intelligent user experiences tailored for your business.',
    icon: 'Bot',
    color: '#10B981',
    features: [
      'Custom AI chatbots for customer support & sales',
      'Document analysis & intelligent data extraction',
      'Predictive analytics & business forecasting',
      'Natural language processing (NLP) APIs',
      'Computer vision & image recognition',
      'AI integration with your existing systems',
      'Automated workflow & business process automation',
    ],
    useCases: [
      'A retail chain deploying an AI chatbot to handle 80% of customer inquiries',
      'A logistics company using AI to predict demand and optimize inventory',
      'A finance firm automating document review with AI extraction tools',
    ],
  },
  {
    id: 'webapp',
    title: 'Web App Development',
    description:
      'Full-stack web applications engineered for scale, performance, and business impact — from concept to production deployment.',
    icon: 'Globe',
    color: '#6366F1',
    features: [
      'Custom SaaS platform development',
      'Admin dashboards & internal portals',
      'E-commerce & marketplace solutions',
      'RESTful & GraphQL API design',
      'Database architecture & optimization',
      'Cloud deployment & DevOps (AWS, Vercel, Railway)',
      'Progressive Web Apps (PWA)',
    ],
    useCases: [
      'A startup needing a full-featured SaaS dashboard for their customers',
      'A business automating internal workflows with a custom admin portal',
      'A marketplace connecting buyers and sellers across East Africa',
    ],
  },
  {
    id: 'website',
    title: 'Website Creation',
    description:
      'Professional, fast, and SEO-optimized websites that establish your digital presence and convert visitors into loyal customers.',
    icon: 'Monitor',
    color: '#F59E0B',
    features: [
      'Corporate & business websites',
      'High-converting landing pages',
      'Portfolio & showcase sites',
      'NGO & nonprofit websites',
      'WordPress & CMS development',
      'On-page SEO & performance optimization',
      'Mobile-first responsive design',
    ],
    useCases: [
      'A law firm wanting a credible, professional online presence',
      'An NGO needing a donation-enabled website with impact storytelling',
      'A school launching a website for admissions and news updates',
    ],
  },
  {
    id: 'note',
    title: 'NOTE System',
    description:
      'Our flagship sales management platform combining CRM, inventory control, professional invoicing, and powerful analytics in one system.',
    icon: 'BarChart3',
    color: '#EF4444',
    features: [
      'Full sales pipeline & performance tracking',
      'Inventory management with stock alerts',
      'Customer relationship management (CRM)',
      'Professional invoicing & payment tracking',
      'Custom reports & analytics dashboard',
      'Multi-user access with role permissions',
      'WhatsApp & SMS notifications',
    ],
    useCases: [
      'A distributor tracking 500+ product SKUs and 100+ monthly transactions',
      'A services company managing proposals, invoices, and client records',
      'A retail business monitoring revenue trends with real-time dashboards',
    ],
  },
]
