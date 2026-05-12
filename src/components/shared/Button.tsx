'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variants = {
  primary:
    'bg-brand-amber text-brand-navy hover:bg-amber-400 focus:ring-brand-amber shadow-lg shadow-amber-500/20',
  secondary:
    'bg-brand-navy text-white hover:bg-slate-800 focus:ring-brand-navy',
  ghost:
    'bg-transparent text-brand-dark hover:bg-slate-100 focus:ring-slate-300',
  outline:
    'bg-transparent border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-navy focus:ring-brand-amber',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold font-body rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
