'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

const stats = [
  { label: 'Clients Served', value: 49, suffix: '+', emoji: '🤝' },
  { label: 'Projects Delivered', value: 80, suffix: '+', emoji: '🚀' },
  { label: 'Years Active', value: 4, suffix: '+', emoji: '📅' },
  { label: 'Technologies Used', value: 20, suffix: '+', emoji: '⚡' },
]

export default function StatsBar() {
  return (
    <section className="bg-brand-navy py-16" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-3" aria-hidden="true">
                {stat.emoji}
              </div>
              <div className="font-display font-extrabold text-4xl md:text-5xl text-brand-amber">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2.2} />
              </div>
              <div className="mt-1.5 text-slate-400 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
