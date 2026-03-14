import React from 'react'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0, ...props }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={cn('opacity-0', isVisible && 'animate-fade-in-up', className)}
      {...props}
    >
      {children}
    </div>
  )
}
