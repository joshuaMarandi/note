'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '49,000',
    currency: 'TZS',
    period: '/month',
    description: 'Perfect for small businesses getting started with digital sales.',
    features: [
      'Up to 3 users',
      'Sales tracking',
      'Basic inventory management',
      '50 invoices / month',
      'Customer records (up to 200)',
      'Email support',
    ],
    highlighted: false,
    ctaLabel: 'Get Started',
  },
  {
    id: 'business',
    name: 'Business',
    price: '129,000',
    currency: 'TZS',
    period: '/month',
    description: 'For growing businesses that need the full power of NOTE.',
    features: [
      'Up to 15 users',
      'Full sales pipeline & CRM',
      'Advanced inventory & alerts',
      'Unlimited invoices',
      'Analytics dashboard',
      'Custom reports',
      'WhatsApp notifications',
      'Priority support',
    ],
    highlighted: true,
    ctaLabel: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: '',
    description: 'For large organizations with custom requirements and scale.',
    features: [
      'Unlimited users',
      'Custom API integrations',
      'Dedicated account manager',
      'On-premise deployment option',
      'SLA guarantees',
      'Team training & onboarding',
      'White-label option',
      '24/7 phone support',
    ],
    highlighted: false,
    ctaLabel: 'Contact Sales',
  },
]

export default function NotePricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your business. No hidden fees — upgrade or downgrade anytime."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-brand-navy text-white shadow-2xl shadow-brand-navy/30 md:scale-[1.03]'
                  : 'bg-white border border-slate-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-amber text-brand-navy text-xs font-bold px-3.5 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`font-display font-bold text-xl mb-1 ${
                  tier.highlighted ? 'text-white' : 'text-brand-navy'
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? 'text-slate-400' : 'text-brand-muted'
                }`}
              >
                {tier.description}
              </p>

              <div className="mb-7">
                <span
                  className={`font-display font-extrabold text-4xl ${
                    tier.highlighted ? 'text-brand-amber' : 'text-brand-navy'
                  }`}
                >
                  {tier.price === 'Custom'
                    ? 'Custom'
                    : `${tier.currency} ${tier.price}`}
                </span>
                {tier.period && (
                  <span
                    className={`text-sm ml-1 ${
                      tier.highlighted ? 'text-slate-400' : 'text-brand-muted'
                    }`}
                  >
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8" aria-label={`${tier.name} plan features`}>
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? 'text-brand-amber' : 'text-brand-green'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? 'text-slate-300' : 'text-brand-dark'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.highlighted ? 'primary' : 'outline'}
                className="w-full justify-center"
                size="md"
              >
                {tier.ctaLabel}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-brand-muted text-sm mt-10"
        >
          All plans include a <strong className="text-brand-navy">14-day free trial</strong>.
          No credit card required to start.
        </motion.p>
      </div>
    </section>
  )
}
