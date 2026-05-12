'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/shared/Button'

export default function CTABanner() {
  return (
    <section className="bg-brand-navy py-24 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-amber/6 blur-3xl" />
        <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] rounded-full bg-brand-green/5 blur-3xl" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-4">
            Ready to Start?
          </span>

          <h2
            id="cta-heading"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
          >
            Ready to build your{' '}
            <br className="hidden md:block" />
            <span className="text-brand-amber">digital future?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you need a website, a custom app, AI automation, or the NOTE
            system — let&apos;s talk about how noteTech can help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Talk to Us <ArrowRight className="w-5 h-5" />
            </Button>
            <a
              href="https://wa.me/255748415599?text=Hello%20noteTech!%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-green-400 hover:text-green-300 font-semibold transition-colors text-lg"
              aria-label="Chat with us on WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0zm0 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
