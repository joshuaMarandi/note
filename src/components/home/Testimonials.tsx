'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const testimonials = [
  {
    id: '1',
    quote:
      'noteTech transformed how we manage our sales. The NOTE system is intuitive, powerful, and perfectly tailored for the Tanzanian market. Our team adopted it within days.',
    author: 'Amina Salim',
    role: 'CEO',
    company: 'Binti House',
    rating: 5,
  },
  {
    id: '2',
    quote:
      "Their web development expertise is world-class. They built our platform on time, on budget, and it handles our users seamlessly. Truly exceptional work by a talented team.",
    author: 'David Mwangi',
    role: 'Founder',
    company: 'SK Smart King',
    rating: 5,
  },
  {
    id: '3',
    quote:
      "Working with noteTech felt like having a real tech partner, not just a vendor. They understood our vision and delivered a website that perfectly captures our brand's spirit.",
    author: 'Grace Njoku',
    role: 'Marketing Director',
    company: 'Cycling Tanzania',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Real results from real businesses across East Africa who trusted noteTech to power their digital journey."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-bg border border-slate-100 rounded-2xl p-7 relative flex flex-col"
              aria-label={`Testimonial from ${t.author}`}
            >
              <Quote
                className="w-8 h-8 text-brand-amber/20 absolute top-5 right-5"
                aria-hidden="true"
              />

              {/* Star rating */}
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-brand-amber fill-current" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-brand-dark leading-relaxed mb-6 flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-brand-navy text-sm">
                    {t.author}
                  </cite>
                  <p className="text-brand-muted text-xs">
                    {t.role} &middot; {t.company}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
