import type { Metadata } from 'next'
import { Target, Eye, Heart, Award } from 'lucide-react'
import CTABanner from '@/components/home/CTABanner'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about noteTech — a Tanzanian software company dedicated to powering Africa\'s digital future through AI, web development, and innovative technology solutions.',
  keywords: [
    'about noteTech',
    'Tanzanian software company',
    'tech company Tanzania',
    'noteTech story',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us — noteTech',
    description: "Tanzania's software company building Africa's digital future.",
    url: 'https://www.note.co.tz/about',
  },
}

const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To empower African businesses with world-class software solutions that are affordable, reliable, and built for local context.',
    color: '#F59E0B',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'A digitally transformed Africa where every business — from street-level SMEs to enterprise — has access to powerful technology.',
    color: '#10B981',
  },
  {
    icon: Heart,
    title: 'Values',
    description:
      'Innovation, integrity, and impact. We build with purpose, serve with care, and measure success by the growth of our clients.',
    color: '#6366F1',
  },
]

const team = [
  { name: 'Joshua M.', role: 'Founder & CEO', initials: 'JM', color: '#0F172A' },
  { name: 'Sarah K.', role: 'Lead Developer', initials: 'SK', color: '#6366F1' },
  { name: 'Ahmed R.', role: 'UI/UX Designer', initials: 'AR', color: '#10B981' },
  { name: 'Grace N.', role: 'AI Engineer', initials: 'GN', color: '#F59E0B' },
]

const milestones = [
  { year: '2020', event: 'noteTech founded in Dar es Salaam, Tanzania' },
  { year: '2021', event: 'First 10 client websites launched; NOTE system prototype built' },
  { year: '2022', event: 'Expanded to web application development; 30+ clients served' },
  { year: '2023', event: 'Launched NOTE v2.0 with full CRM and analytics suite' },
  { year: '2024', event: 'Added AI services; grew to 49+ active clients across East Africa' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-amber/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-green/4 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight mb-5">
            About noteTech
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            A proudly Tanzanian software company on a mission to power Africa&apos;s digital future —
            one exceptional product at a time.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-5 leading-tight">
                Built in Tanzania,
                <br />
                Built for the World
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  noteTech was born in Dar es Salaam with a simple but bold belief: African
                  businesses deserve world-class software — not afterthoughts of global platforms,
                  but tools built specifically for their context, language, and ambition.
                </p>
                <p>
                  Starting with websites for local businesses, we quickly discovered that our
                  clients needed more: reliable systems to track sales, manage inventory, and
                  understand their business data. That insight led to the birth of the{' '}
                  <strong className="text-brand-navy">NOTE Sales System</strong> — our flagship
                  product that today powers dozens of businesses across Tanzania.
                </p>
                <p>
                  Today, noteTech offers a full range of digital services — from AI-powered
                  automation to custom web applications — serving 49+ clients across East Africa
                  and growing.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Work With Us
                </Button>
              </div>
            </div>

            {/* Milestones timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
              <div className="space-y-8 pl-12">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <div className="absolute -left-8 w-4 h-4 rounded-full bg-brand-amber border-4 border-white shadow-sm" />
                    <span className="font-mono font-bold text-brand-amber text-sm">{m.year}</span>
                    <p className="text-brand-dark mt-0.5">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-3">
              What Drives Us
            </span>
            <h2 className="font-display font-bold text-4xl text-brand-navy">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${v.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: v.color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                    {v.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why East Africa */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Fastest growing tech market in Africa', color: 'bg-amber-50 border-amber-100' },
                  { label: 'Mobile-first consumer base', color: 'bg-emerald-50 border-emerald-100' },
                  { label: '60M+ population in Tanzania alone', color: 'bg-indigo-50 border-indigo-100' },
                  { label: 'Growing SME digital adoption', color: 'bg-red-50 border-red-100' },
                  { label: 'Favorable tech startup ecosystem', color: 'bg-purple-50 border-purple-100' },
                  { label: 'Underserved by global SaaS platforms', color: 'bg-sky-50 border-sky-100' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl p-4 border text-sm font-medium text-brand-dark ${item.color}`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-3">
                Why East Africa
              </span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-5 leading-tight">
                The Continent&apos;s Biggest
                <br />
                Digital Opportunity
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                East Africa is one of the fastest-growing digital economies in the world. With
                mobile penetration soaring and businesses racing to digitize, the region
                represents a massive opportunity for technology solutions built for local needs.
              </p>
              <p className="text-brand-muted leading-relaxed">
                noteTech sits at the intersection of this opportunity and deep local knowledge.
                We build in Swahili contexts, understand local business processes, and price for
                East African markets — giving us an edge that global tech companies simply
                cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-3">
              The Team
            </span>
            <h2 className="font-display font-bold text-4xl text-brand-navy">
              The People Behind noteTech
            </h2>
            <p className="text-brand-muted mt-3 max-w-xl mx-auto">
              A small, talented team passionate about building world-class software from East Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-slate-100 text-center shadow-sm"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-brand-navy">{member.name}</h3>
                <p className="text-brand-muted text-sm mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award / recognition strip */}
      <section className="py-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-3 text-slate-300">
            <Award className="w-6 h-6 text-brand-amber" aria-hidden="true" />
            <span className="font-semibold">49+ Satisfied Clients</span>
          </div>
          <div className="w-px h-6 bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-3 text-slate-300">
            <Award className="w-6 h-6 text-brand-amber" aria-hidden="true" />
            <span className="font-semibold">4+ Years of Excellence</span>
          </div>
          <div className="w-px h-6 bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-3 text-slate-300">
            <Award className="w-6 h-6 text-brand-amber" aria-hidden="true" />
            <span className="font-semibold">Proudly Made in Tanzania</span>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
