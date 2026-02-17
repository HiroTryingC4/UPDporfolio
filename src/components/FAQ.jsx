import { useState } from 'react'
import { projectsData } from '../data/projects'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  // build unique tech list from projects data and include common tools
  const techSet = new Set()
  projectsData.forEach(p => {
    if (Array.isArray(p.technologies)) p.technologies.forEach(t => techSet.add(t))
  })
  const extraTools = ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'npm/yarn']
  extraTools.forEach(t => techSet.add(t))

  // build a frequency map for sorting by usage
  const freq = {}
  projectsData.forEach(p => {
    if (Array.isArray(p.technologies)) p.technologies.forEach(t => {
      const key = String(t)
      freq[key] = (freq[key] || 0) + 1
    })
  })

  const techList = Array.from(techSet)
    .sort((a, b) => {
      const ca = freq[a] || 0
      const cb = freq[b] || 0
      if (ca !== cb) return cb - ca // most used first
      return String(a).localeCompare(String(b))
    })

  // color mapping per tech (Tailwind classes)
  const colorMap = {
    'react': 'from-cyan-400 to-blue-500 text-white',
    'node.js': 'from-green-400 to-green-600 text-white',
    'node': 'from-green-400 to-green-600 text-white',
    'express': 'from-gray-600 to-gray-800 text-white',
    'mongodb': 'from-emerald-500 to-green-600 text-white',
    'mysql': 'from-blue-600 to-cyan-600 text-white',
    'php': 'from-indigo-600 to-indigo-400 text-white',
    'tailwind css': 'from-teal-400 to-cyan-500 text-white',
    'tailwind': 'from-teal-400 to-cyan-500 text-white',
    'bootstrap': 'from-purple-500 to-pink-500 text-white',
    'javascript': 'from-yellow-300 to-yellow-400 text-black',
    'html': 'from-orange-400 to-red-400 text-white',
    'css': 'from-blue-400 to-indigo-500 text-white',
    'jwt': 'from-gray-400 to-gray-600 text-white',
    'html5 canvas': 'from-gray-300 to-gray-500 text-black',
    'web audio api': 'from-gray-300 to-gray-500 text-black',
    'git & github': 'from-gray-700 to-black text-white',
    'vs code': 'from-blue-600 to-blue-800 text-white',
    'figma': 'from-pink-400 to-purple-500 text-white',
    'postman': 'from-orange-400 to-red-400 text-white',
    'npm/yarn': 'from-red-500 to-pink-500 text-white'
  }

  const makeBadge = (s) => {
    const key = String(s).toLowerCase()
    const cls = colorMap[key] || 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
    const isGradient = cls.startsWith('from-')
    const base = 'px-3 py-1 rounded-full text-sm font-medium'
    // add subtle dark-mode tweaks: gradients keep text-white; non-gradients keep dark:bg
    const classes = isGradient
      ? `${base} bg-gradient-to-r ${cls}`
      : `${base} ${cls}`

    return (
      <span key={s} className={classes}>
        {s}
      </span>
    )
  }

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer full stack web development, project management, social media management, and UI/UX design services. I specialize in building responsive websites, managing complex projects, and creating engaging digital content."
    },
    {
      question: "What technologies do you work with?",
      answer: "I work with modern web technologies including React, JavaScript, HTML/CSS, Tailwind CSS, Node.js, and various database systems. I'm also experienced with project management tools and social media platforms."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and requirements. A simple website can take 2-4 weeks, while more complex systems may take 2-3 months. I always provide detailed timelines during the planning phase."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes! I work with clients both locally and remotely. I use modern collaboration tools to ensure smooth communication and project delivery regardless of location."
    },
    {
      question: "What is your development process?",
      answer: "I follow a structured approach: requirements gathering, planning, design, development, testing, and deployment. I maintain regular communication throughout the project and provide updates at each milestone."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! I can help maintain, update, or enhance existing websites and systems. I'm experienced in working with legacy code and can provide bug fixes, feature additions, and performance improvements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer ongoing maintenance and support packages for websites and systems I develop. This includes updates, bug fixes, and technical assistance as needed."
    },
    {
      question: "How can I get started?",
      answer: "Simply reach out through the contact section below! We'll schedule a consultation to discuss your project requirements, timeline, and budget. I'll provide a detailed proposal based on your needs."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got questions? Here are answers to some common inquiries about my services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-black rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              data-reveal
              data-reveal-delay={index * 90}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors btn-animated"
              >
                <span className="text-lg font-semibold dark:text-white pr-8">{faq.question}</span>
                <span className="text-2xl text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ease-in-out">
                  <div className="animate-fade-in-up">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
