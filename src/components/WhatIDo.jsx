import Navigation from './Navigation'
import { useState, useEffect } from 'react'

export default function WhatIDo() {
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

  const services = [
    {
      icon: '💻',
      title: 'Full Stack Web Development',
      description: 'Building complete web applications from front-end to back-end, creating responsive and user-friendly interfaces with robust server-side functionality.',
      skills: ['Frontend Development', 'Backend Development', 'API Integration', 'Database Design']
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'Leading software development projects from conception to deployment, ensuring timely delivery and quality results through effective planning and team coordination.',
      skills: ['Agile Methodology', 'Team Leadership', 'Requirements Analysis', 'Quality Assurance']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement through thoughtful design principles.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Developing and executing social media strategies to build brand presence, engage audiences, and drive business growth across multiple platforms.',
      skills: ['Content Creation', 'Analytics', 'Strategy Planning', 'Community Management']
    },
    {
      icon: '🔧',
      title: 'System Analysis & Design',
      description: 'Analyzing business requirements and designing efficient system architectures that solve real-world problems and improve operational efficiency.',
      skills: ['Requirements Gathering', 'System Architecture', 'Documentation', 'Process Optimization']
    },
    {
      icon: '🚀',
      title: 'Web Optimization',
      description: 'Improving website performance, SEO, and user experience through technical optimization and best practices implementation.',
      skills: ['Performance Tuning', 'SEO', 'Accessibility', 'Security']
    }
  ]

  const technologies = {
    'Frontend': [
      { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
      { name: 'React', level: 85, color: 'from-cyan-500 to-blue-500' },
      { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-cyan-500' },
      { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-pink-500' }
    ],
    'Backend': [
      { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
      { name: 'PHP', level: 75, color: 'from-indigo-500 to-purple-500' },
      { name: 'Express.js', level: 78, color: 'from-gray-600 to-gray-800' },
      { name: 'MySQL', level: 82, color: 'from-blue-600 to-cyan-600' },
      { name: 'MongoDB', level: 75, color: 'from-green-600 to-teal-600' }
    ],
    'Tools & Others': [
      { name: 'Git & GitHub', level: 85, color: 'from-gray-700 to-black' },
      { name: 'VS Code', level: 90, color: 'from-blue-600 to-blue-800' },
      { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-500' },
      { name: 'Postman', level: 75, color: 'from-orange-500 to-red-500' },
      { name: 'npm/yarn', level: 85, color: 'from-red-600 to-pink-600' }
    ]
  }

  const projectStats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from_gray-800 dark:to-gray-900" data-reveal>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">What I Do</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a versatile developer and project manager who brings ideas to life through code, design, and strategic planning. 
              Here's a comprehensive look at my skills and the technologies I work with.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900" data-reveal>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {projectStats.map((stat, idx) => (
              <div key={idx} className="text-center" data-reveal data-reveal-delay={idx*80}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">My Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                      <span className="text-green-500">✓</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Technologies & Tools</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Programming languages, frameworks, and tools I use to build amazing projects
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold mb-6 dark:text-white">{category}</h3>
                <div className="space-y-6">
                  {techs.map((tech, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                        <span className="text-gray-500 dark:text-gray-500">{tech.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">My Development Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description: 'Understanding your requirements, goals, and target audience to create a solid project foundation.'
                },
                {
                  step: '02',
                  title: 'Design & Prototyping',
                  description: 'Creating wireframes and mockups to visualize the final product before development begins.'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Writing clean, efficient code using modern technologies and best practices.'
                },
                {
                  step: '04',
                  title: 'Testing & Quality Assurance',
                  description: 'Rigorous testing to ensure everything works perfectly across all devices and browsers.'
                },
                {
                  step: '05',
                  title: 'Deployment & Launch',
                  description: 'Deploying your project to production and ensuring a smooth launch.'
                },
                {
                  step: '06',
                  title: 'Maintenance & Support',
                  description: 'Ongoing support, updates, and improvements to keep your project running smoothly.'
                }
              ].map((process, idx) => (
                <div key={idx} className="flex gap-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 dark:text-white">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's bring your ideas to life with modern technology and creative solutions.
            </p>
            <a 
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
