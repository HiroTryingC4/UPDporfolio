import { useParams, useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projects'
import Navigation from './Navigation'
import { useState, useEffect } from 'react'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === id)
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <div className="pt-8">
        <div className="container mx-auto px-6 py-12">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to Portfolio
        </button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl" data-reveal data-reveal-delay={80}>
          <img src={project.mainImage} alt={project.title} className="w-full h-auto" />
        </div>

        {/* Project Overview */}
        <section className="mb-16" data-reveal data-reveal-delay={120}>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Project Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {project.overview.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Design Process */}
        {project.designProcess && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">Design Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.designProcess.map((step, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-black p-6 rounded-xl" data-reveal data-reveal-delay={idx * 80}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Brand Elements */}
        {project.brandElements && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">Brand Elements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.brandElements.map((element, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-black p-6 rounded-xl" data-reveal data-reveal-delay={idx * 80}>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{element.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{element.description}</p>
                  {element.details && (
                    <div className="mt-4 space-y-2">
                      {element.details.map((detail, i) => (
                        <div key={i} className="text-sm text-gray-500 dark:text-gray-500">
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-50 dark:bg-black p-4 rounded-lg">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        {project.results && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Results & Impact</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.results}
              </p>
            </div>
          </section>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 border-t dark:border-gray-800">
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            ← Previous Project
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            View More Projects
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
