'use client'

import { motion } from 'framer-motion'
import { BarChart3, ArrowRight, Play } from 'lucide-react'
import Button from '@/components/shared/Button'

const highlights = [
  { value: '500+', label: 'Businesses' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function NoteHero() {
  return (
    <section
      className="bg-brand-navy min-h-[75vh] flex items-center py-28 relative overflow-hidden"
      aria-labelledby="note-hero-heading"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-brand-amber/6 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-brand-green/5 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8"
        >
          <BarChart3 className="w-4 h-4 text-brand-amber" aria-hidden="true" />
          Flagship Product by noteTech
        </motion.div>

        <motion.h1
          id="note-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="font-display font-extrabold text-5xl md:text-7xl text-white leading-[0.95] tracking-tight mb-5"
        >
          The{' '}
          <span className="text-brand-amber">NOTE</span>
          <br />
          Sales System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          The all-in-one sales management platform built for East African businesses.
          Track every sale, manage inventory, and grow your revenue — all from one
          elegant dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href="/contact" variant="primary" size="lg">
            Request Demo <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="#pricing" variant="outline" size="lg">
            View Pricing
          </Button>
        </motion.div>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-0 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
        >
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`flex flex-col items-center px-8 py-4 ${
                i !== 0 ? 'border-l border-white/10' : ''
              }`}
            >
              <span className="font-display font-extrabold text-2xl text-brand-amber">
                {h.value}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">{h.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
