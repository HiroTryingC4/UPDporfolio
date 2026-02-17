import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div id="root-content" className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Work />
      <Experience />
      <Skills />
      <Hobbies />
      <FAQ />
      <Contact />
    </div>
  )
}

export default App
