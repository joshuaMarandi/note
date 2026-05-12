export interface Client {
  id: string
  name: string
  website: string
  category: 'website' | 'webapp' | 'ai' | 'system'
  description?: string
  logoPlaceholder?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  useCases?: string[]
  color: string
}

export interface Project {
  id: string
  clientName: string
  website: string
  category: Client['category']
  description: string
  tags: string[]
}

export interface Testimonial {
  id: string
  author: string
  company: string
  quote: string
  role: string
}

export interface PricingTier {
  id: string
  name: string
  price: string
  currency: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  ctaLabel: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
}

export interface NavLink {
  label: string
  href: string
}
