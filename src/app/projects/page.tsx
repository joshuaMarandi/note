import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectsFilter from '@/components/shared/ProjectsFilter'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Browse noteTech's portfolio of websites, web applications, and digital systems built for clients across East Africa.",
  keywords: [
    'noteTech portfolio',
    'web projects Tanzania',
    'software projects East Africa',
    'website portfolio Tanzania',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects — noteTech',
    description:
      'Portfolio of websites, web apps, and digital systems built for East African businesses.',
    url: 'https://www.note.co.tz/projects',
  },
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-amber/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/4 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight mb-5">
            Projects
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            {projects.length}+ projects delivered for businesses, institutions, and organizations
            across East Africa.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsFilter projects={projects} />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
