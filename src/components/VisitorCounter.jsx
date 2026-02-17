import { useEffect, useState } from 'react'

export default function VisitorCounter({ inline = false }) {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const namespace = 'riemar-portfolio'
    const key = 'visitors'
    const hostname = typeof window !== 'undefined' ? window.location.hostname : ''
    const action = (hostname === 'localhost' || hostname.startsWith('127.')) ? 'get' : 'hit'
    const url = `https://api.countapi.xyz/${action}/${namespace}/${key}`
    let cancelled = false

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Count API error')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setCount(typeof data === 'object' && data.value != null ? data.value : data)
      })
      .catch(() => {
        if (!cancelled) setCount(null)
      })

    return () => { cancelled = true }
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
