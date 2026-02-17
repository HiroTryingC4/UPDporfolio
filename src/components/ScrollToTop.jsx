import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Trigger a brief content fade-in animation if root content exists
    const el = document.getElementById('root-content')
    if (el) {
      el.classList.remove('animate-fade-in')
      // force reflow to restart the animation
      void el.offsetWidth
      el.classList.add('animate-fade-in')
    }
  }, [pathname])

  return null
}
