import { useState } from 'react'
import VisitorCounter from './VisitorCounter'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'ligad.riemar.bondoc@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      const ta = document.createElement('textarea')
      ta.value = email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's work together on your next project. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${email}`}
              className="bg-gray-50 dark:bg-black p-8 rounded-xl shadow-lg flex flex-col gap-4 hover:shadow-2xl transition-all duration-200"
              data-reveal
              data-reveal-delay={80}
              aria-label={`Send email to ${email}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">{email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); copyEmail() }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-sm rounded-lg shadow btn-animated"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm btn-animated"
                >
                  Send Email
                </a>
              </div>
            </a>

            <div className="bg-gray-50 dark:bg-black p-8 rounded-xl shadow-lg" data-reveal data-reveal-delay={160}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Social Media</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with me online</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white text-center" data-reveal data-reveal-delay={240}>
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="mb-6">I'm currently available for freelance work and new opportunities.</p>
            <a
              href={`mailto:${email}`}
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:scale-105 transition-transform btn-animated"
              aria-label="Contact via email"
            >
              Send Message
            </a>
          </div>
          <VisitorCounter inline />
        </div>
      </div>
    </section>
  )
}
