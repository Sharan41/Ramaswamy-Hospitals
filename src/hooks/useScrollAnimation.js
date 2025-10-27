import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll animation hook using Intersection Observer
 * Adds 'animate-in' class when element enters viewport
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    // Detect mobile/tablet devices
    const isMobile = window.innerWidth <= 768
    
    // On mobile, trigger animations much earlier and with lower threshold
    const threshold = options.threshold || (isMobile ? 0.05 : 0.1)
    const rootMargin = options.rootMargin || (isMobile ? '0px 0px 100px 0px' : '0px 0px 50px 0px')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            // Optionally unobserve after animation to improve performance
            if (options.once !== false) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    )
    
    observer.observe(element)
    
    // Check immediately if element is already in viewport (for hero sections)
    // This ensures elements visible on page load animate immediately
    const rect = element.getBoundingClientRect()
    const isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
    
    if (isInViewport) {
      // Element is already visible, trigger animation immediately
      element.classList.add('animate-in')
    }
    
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])
  
  return ref
}

