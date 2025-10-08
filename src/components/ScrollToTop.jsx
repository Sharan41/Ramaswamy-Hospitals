import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Force scroll to top immediately on route change
    // This overrides the smooth scroll behavior in CSS
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      // Also scroll the document element and body for better browser compatibility
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    
    // Execute immediately
    scrollToTop()
    
    // Also execute after a tiny delay to catch any delayed renders
    const timeoutId = setTimeout(scrollToTop, 0)
    
    return () => clearTimeout(timeoutId)
  }, [pathname])
  
  return null
}


