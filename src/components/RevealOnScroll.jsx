import { useEffect } from 'react'

export default function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!els.length) return

    // Trigger slightly earlier and use smaller threshold for snappier reveals
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        if (entry.isIntersecting) {
          const raw = parseInt(el.dataset.revealDelay || '0', 10)
          // globally scale down configured delays (60% of original)
          const scaled = Math.round(raw * 0.6)
          el.style.setProperty('--reveal-delay', `${scaled}ms`)
          el.classList.add('reveal-visible')
          // if you want one-time reveal, unobserve
          io.unobserve(el)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' })

    els.forEach((el) => {
      // ensure initial hidden class present
      if (!el.classList.contains('reveal')) el.classList.add('reveal')
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
