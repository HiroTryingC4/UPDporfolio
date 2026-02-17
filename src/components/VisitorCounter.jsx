import { useEffect, useState } from 'react'

export default function VisitorCounter({ inline = false }) {
  const [count, setCount] = useState(null)

  useEffect(() => {
    // Using GoatCounter API (free alternative to countapi.xyz)
    // You'll need to sign up at https://www.goatcounter.com/ and replace 'YOUR_CODE' with your site code
    
    // For now, using a simple localStorage counter as fallback
    try {
      const storageKey = 'portfolio-visitor-count'
      const hasVisited = localStorage.getItem('portfolio-visited')
      
      if (!hasVisited) {
        // First time visitor
        localStorage.setItem('portfolio-visited', 'true')
        const currentCount = parseInt(localStorage.getItem(storageKey) || '0', 10)
        const newCount = currentCount + 1
        localStorage.setItem(storageKey, newCount.toString())
        setCount(newCount)
      } else {
        // Returning visitor
        const currentCount = parseInt(localStorage.getItem(storageKey) || '0', 10)
        setCount(currentCount)
      }
    } catch (error) {
      console.error('Visitor counter error:', error)
      setCount(null)
    }
  }, [])

  if (inline) {
    return (
      <div className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
        {count === null ? 'Visitors: — visited this website' : `${count} visited this website`}
      </div>
    )
  }

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-black/60 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm shadow-lg pointer-events-none z-50">
      {count === null ? 'Visitors: —' : `Visitors: ${count}`}
    </div>
  )
}
