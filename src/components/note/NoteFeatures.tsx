'use client'

import { motion } from 'framer-motion'
import {
  ShoppingCart,
  Package,
  Users,
  FileText,
  BarChart3,
  Shield,
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const features = [
  {
    icon: ShoppingCart,
    title: 'Sales Tracking',
    description:
      'Monitor every sale in real time. Set revenue targets, track team performance, and visualize your entire sales pipeline.',
    color: '#F59E0B',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Keep stock levels accurate with automated low-stock alerts, supplier management, and purchase order tracking.',
    color: '#10B981',
  },
  {
    icon: Users,
    title: 'Customer Records (CRM)',
    description:
      'Maintain detailed customer profiles, full purchase history, interaction logs, and smart follow-up reminders.',
    color: '#6366F1',
  },
  {
    icon: FileText,
    title: 'Invoicing & Billing',
    description:
      'Generate professional invoices instantly. Track payments, send reminders, and monitor outstanding balances.',
    color: '#EF4444',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description:
      'Make confident data-driven decisions with rich dashboards covering sales trends, revenue KPIs, and team metrics.',
    color: '#0EA5E9',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    description:
      'Control exactly who sees what. Assign roles to your team with granular permission settings and audit logs.',
    color: '#8B5CF6',
  },
]

export default function NoteFeatures() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Everything Your Business Needs"
          subtitle="NOTE is packed with the tools East African businesses need to sell smarter, faster, and more profitably."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-brand-bg rounded-2xl p-7 border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${f.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2.5">
                  {f.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-sm">{f.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
