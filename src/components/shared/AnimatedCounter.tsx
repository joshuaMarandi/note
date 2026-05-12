'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.floor(v)}${suffix}`
          }
        },
      })
      return controls.stop
    }
  }, [isInView, motionValue, target, duration, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
