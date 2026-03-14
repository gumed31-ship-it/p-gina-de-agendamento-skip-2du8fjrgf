import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
  delay?: number
  duration?: number
}

export function ScrollReveal({
  children,
  className,
  animation = 'slide-up',
  delay = 0,
  duration = 700,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getAnimationClasses = () => {
    switch (animation) {
      case 'slide-up':
        return 'translate-y-12 opacity-0'
      case 'slide-down':
        return '-translate-y-12 opacity-0'
      case 'slide-left':
        return 'translate-x-12 opacity-0'
      case 'slide-right':
        return '-translate-x-12 opacity-0'
      case 'fade-in':
      default:
        return 'opacity-0'
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        !isVisible && getAnimationClasses(),
        isVisible && 'translate-y-0 translate-x-0 opacity-100',
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}
