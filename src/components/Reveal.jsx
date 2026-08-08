import { motion, useReducedMotion } from 'motion/react'

/* entrance offsets per direction */
const DIR = {
  up: { y: 24 },
  left: { x: -34 },
  right: { x: 34 },
  zoom: { scale: 0.94 },
}

/**
 * Scroll-reveal wrapper powered by Motion (motion.dev).
 * Fades/slides children in when they enter the viewport.
 * Honors prefers-reduced-motion by rendering visible instantly.
 */
export default function Reveal({ children, delay = 0, dir = 'up', as = 'div', className = '', style }) {
  const reduce = useReducedMotion()
  const Comp = motion.create(as)
  return (
    <Comp
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, ...(DIR[dir] || DIR.up) }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -36px 0px' }}
      transition={{ delay: delay / 1000, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
