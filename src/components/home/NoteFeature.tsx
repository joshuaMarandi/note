'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Button from '@/components/shared/Button'

const features = [
  'Real-time sales tracking & pipeline management',
  'Inventory control with automated stock alerts',
  'Customer records & relationship management',
  'Professional invoicing & payment tracking',
  'Analytics dashboard with custom reports',
  'Multi-user access with role permissions',
]

const barHeights = [40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 92]
const transactions = [
  { name: 'Karibu Shop', amount: 'TZS 450K' },
  { name: 'Bora Ltd', amount: 'TZS 220K' },
  { name: 'Nuru Store', amount: 'TZS 890K' },
]

export default function NoteFeature() {
  return (
    <section className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-widest mb-3 font-mono">
              Flagship Product
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-navy leading-tight mb-5">
              Meet the{' '}
              <span className="text-brand-amber">NOTE</span>{' '}
              Sales System
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              An all-in-one sales management platform designed for East African businesses.
              Track sales, manage inventory, invoice clients, and understand your business
              data — all from one elegant dashboard.
            </p>

            <ul className="space-y-3 mb-10" aria-label="NOTE system features">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">{f}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button href="/note" variant="primary" size="md">
                Explore NOTE <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Request Demo
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Browser window mockup */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/30">
              {/* Chrome bar */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-slate-700/80 rounded-md h-6 flex items-center px-3 max-w-xs mx-auto">
                  <span className="text-slate-400 text-xs font-mono">app.note.co.tz/dashboard</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4 bg-slate-900">
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: '4.2M', unit: 'TZS', textColor: 'text-brand-amber' },
                    { label: 'Sales', value: '128', unit: 'orders', textColor: 'text-brand-green' },
                    { label: 'Clients', value: '47', unit: 'active', textColor: 'text-indigo-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-800 rounded-xl p-3 text-center">
                      <div className={`text-lg font-bold font-mono ${stat.textColor}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-slate-400 text-xs mb-3 font-medium">Monthly Sales</div>
                  <div className="flex items-end gap-1 h-16">
                    {barHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          backgroundColor: i === 11 ? '#F59E0B' : '#F59E0B66',
                          height: `${h}%`,
                          transformOrigin: 'bottom',
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.4, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Recent transactions */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-slate-400 text-xs mb-3 font-medium">Recent Transactions</div>
                  <div className="space-y-2">
                    {transactions.map((t) => (
                      <div key={t.name} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                          <span className="text-slate-300 text-xs">{t.name}</span>
                        </div>
                        <span className="text-brand-green text-xs font-mono font-semibold">
                          +{t.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-brand-green text-white rounded-xl px-4 py-2 shadow-lg shadow-brand-green/30 text-sm font-semibold"
            >
              Live Demo Available ✓
            </motion.div>

            {/* Decorative corner glow */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-brand-amber/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
