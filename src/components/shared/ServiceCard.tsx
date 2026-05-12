'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: string
  index?: number
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  color = '#F59E0B',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-amber/20 transition-shadow duration-300 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <h3 className="font-display font-bold text-xl text-brand-navy mb-2.5">{title}</h3>
      <p className="text-brand-muted leading-relaxed text-sm">{description}</p>
    </motion.div>
  )
}
