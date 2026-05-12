'use client'

import { Bot, Globe, Monitor, BarChart3 } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import ServiceCard from '@/components/shared/ServiceCard'
import Button from '@/components/shared/Button'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Bot,
    title: 'AI Services',
    description:
      'Intelligent automation, chatbots, and AI-powered integrations that transform how your business operates and serves customers.',
    color: '#10B981',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description:
      'Custom SaaS platforms, dashboards, and full-stack applications built for scale, performance, and business impact.',
    color: '#6366F1',
  },
  {
    icon: Monitor,
    title: 'Website Creation',
    description:
      'Professional, fast, and SEO-optimized websites that establish your digital presence and convert visitors into customers.',
    color: '#F59E0B',
  },
  {
    icon: BarChart3,
    title: 'NOTE System',
    description:
      'Our flagship all-in-one sales management platform: CRM, inventory, invoicing, and analytics in one powerful system.',
    color: '#EF4444',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Services Built for Growth"
          subtitle="From AI automation to beautiful websites — we build the digital infrastructure that drives African businesses forward."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button href="/services" variant="secondary" size="md">
            Explore All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
