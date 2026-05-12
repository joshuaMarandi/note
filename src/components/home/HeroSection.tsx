'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import Button from '@/components/shared/Button'

const headlineWords = ['Powering', "Africa's", 'Digital', 'Future']

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy"
      aria-label="Hero section"
    >
      {/* ── Background video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* ── Single clean overlay — no blur, just enough darkness ── */}
      <div className="absolute inset-0 bg-brand-navy/50 pointer-events-none" />

      {/* ── Bottom fade so content below blends smoothly ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy/60 to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-white shadow-sm mb-10"
        >
          <Star className="w-3.5 h-3.5 text-brand-amber fill-current" />
          Tanzania&apos;s Premier Software Company
          <span className="flex items-center gap-1 bg-brand-green/25 text-brand-green text-xs font-semibold px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Active
          </span>
        </motion.div>

        {/* Main headline — word-by-word stagger */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 tracking-tight">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.13,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={i === 1 || i === 2 ? 'text-brand-amber' : 'text-white'}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Building world-class AI tools, web applications, and the{' '}
          <span className="text-white font-semibold">NOTE Sales System</span> —
          proudly from Tanzania for the world.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/projects" variant="primary" size="lg">
            See Our Work <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </motion.div>

        {/* Floating proof badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, type: 'spring', stiffness: 120 }}
          className="mt-20 inline-flex items-center gap-0 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl overflow-hidden"
        >
          {[
            { value: '49+', label: 'Clients Served', color: 'text-white' },
            { value: '100%', label: 'Satisfaction', color: 'text-brand-amber' },
            { value: '4+', label: 'Years Active', color: 'text-brand-green' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-6 py-4 ${
                i !== 0 ? 'border-l border-white/15' : ''
              }`}
            >
              <span className={`font-display font-extrabold text-2xl ${stat.color}`}>
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-0.5 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
