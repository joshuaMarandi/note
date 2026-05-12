import type { Metadata } from 'next'
import { Bot, Globe, Monitor, BarChart3, Check, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import CTABanner from '@/components/home/CTABanner'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'noteTech offers AI services, web application development, professional website creation, and the NOTE sales management system for businesses across East Africa.',
  keywords: [
    'AI services Tanzania',
    'web development Tanzania',
    'website creation Tanzania',
    'software services East Africa',
  ],
  openGraph: {
    title: 'Services — noteTech',
    description:
      'AI services, web apps, websites, and the NOTE system — built for East African businesses.',
    url: 'https://www.note.co.tz/services',
  },
}

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Globe,
  Monitor,
  BarChart3,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-amber/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-green/4 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight mb-5">
            Our Services
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            From AI automation to custom platforms — we build the digital tools that
            power East African business growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Bot
            const isEven = i % 2 === 0

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                  isEven ? '' : 'lg:[&>*:first-child]:order-2'
                }`}
              >
                {/* Text side */}
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}18` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-brand-muted text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h3 className="font-semibold text-brand-navy mb-4">What&apos;s included:</h3>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-brand-dark">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button href="/contact" variant="primary" size="md">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Use Cases side */}
                {service.useCases && (
                  <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-6">
                      Real-World Use Cases
                    </h3>
                    <div className="space-y-5">
                      {service.useCases.map((uc, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white mt-0.5"
                            style={{ backgroundColor: service.color }}
                          >
                            {idx + 1}
                          </div>
                          <p className="text-brand-dark leading-relaxed">{uc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <p className="text-brand-muted text-sm">
                        Ready to discuss your project?
                      </p>
                      <a
                        href="https://wa.me/255748415599"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm mt-2 hover:underline"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                          <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0012.05 0zm0 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
                        </svg>
                        WhatsApp us now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
