import { useState } from 'react'

export default function Navigation({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#achievements' },
    { name: 'Interests', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white flex-shrink-0">Riemar Ligad</a>
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 btn-animated" aria-label="Toggle dark mode">{darkMode ? '☀️' : '🌙'}</button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 btn-animated" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="container mx-auto px-6 py-4 space-y-4 text-center">
            {navLinks.map((link, idx) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300" data-reveal data-reveal-delay={idx * 40}>{link.name}</a>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-left btn-animated">{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
          </div>
        </div>
      )}
    </nav>
  )
}
