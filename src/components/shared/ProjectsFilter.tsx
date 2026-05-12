'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/shared/ProjectCard'
import { Project } from '@/types'

type Category = 'all' | 'website' | 'webapp' | 'ai' | 'system'

const tabs: { label: string; value: Category }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Websites', value: 'website' },
  { label: 'Web Apps', value: 'webapp' },
  { label: 'AI', value: 'ai' },
  { label: 'Systems', value: 'system' },
]

interface ProjectsFilterProps {
  projects: Project[]
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [active, setActive] = useState<Category>('all')

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === tab.value
                ? 'text-brand-navy'
                : 'text-brand-muted hover:text-brand-dark hover:bg-slate-100'
            }`}
          >
            {active === tab.value && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-brand-amber rounded-full"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {tab.label}
            <span
              className={`ml-1.5 text-xs font-normal ${
                active === tab.value ? 'text-brand-navy/70' : 'text-brand-muted'
              }`}
            >
              (
              {tab.value === 'all'
                ? projects.length
                : projects.filter((p) => p.category === tab.value).length}
              )
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-brand-muted">
          No projects in this category yet.
        </div>
      )}
    </div>
  )
}
