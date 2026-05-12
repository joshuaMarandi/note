'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

const categoryColors: Record<string, string> = {
  website: 'bg-blue-50 text-blue-700 border-blue-100',
  webapp: 'bg-purple-50 text-purple-700 border-purple-100',
  ai: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  system: 'bg-amber-50 text-amber-700 border-amber-100',
}

const categoryLabels: Record<string, string> = {
  website: 'Website',
  webapp: 'Web App',
  ai: 'AI',
  system: 'System',
}

const categoryInitialColors: Record<string, string> = {
  website: 'bg-blue-600',
  webapp: 'bg-purple-600',
  ai: 'bg-emerald-600',
  system: 'bg-amber-500',
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0 ${
            categoryInitialColors[project.category]
          }`}
        >
          {project.clientName.slice(0, 2).toUpperCase()}
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}
        >
          {categoryLabels[project.category]}
        </span>
      </div>

      <h3 className="font-display font-bold text-brand-navy text-lg mb-1.5">
        {project.clientName}
      </h3>
      <p className="text-brand-muted text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-md font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`https://${project.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-brand-amber font-semibold text-sm hover:gap-2.5 transition-all duration-200"
      >
        {project.website}
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  )
}
