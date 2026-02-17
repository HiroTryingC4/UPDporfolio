export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-blob" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" style={{ top: '50%', right: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" style={{ bottom: '10%', left: '30%' }}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-6000" style={{ top: '30%', right: '30%' }}></div>
        {/* many subtle rotated tech labels (decorative) */}
        <div className="absolute inset-0 pointer-events-none">
          {(() => {
            const labels = [
              'JS','HTML','PHP','CSS','React','Node','Tailwind','MySQL','MongoDB',
              'Figma','Git','Postman','TypeScript','Bootstrap','Sass','Webpack','Babel','Canvas','Web Audio'
            ]

            const positions = [
              { top: '4%', left: '6%', rot: -20, size: '' },
              { top: '8%', left: '26%', rot: -35, size: 'small' },
              { top: '12%', right: '8%', rot: -70, size: 'xsmall' },
              { top: '18%', left: '50%', rot: -10, size: '' },
              { top: '24%', right: '22%', rot: -55, size: '' },
              { top: '34%', left: '8%', rot: 12, size: 'small' },
              { top: '40%', left: '30%', rot: 6, size: '' },
              { top: '42%', right: '6%', rot: 18, size: 'small' },
              { bottom: '36%', left: '10%', rot: 14, size: '' },
              { bottom: '30%', right: '16%', rot: 72, size: 'xsmall' },
              { bottom: '26%', left: '44%', rot: 8, size: '' },
              { bottom: '20%', right: '34%', rot: 52, size: 'small' },
              { bottom: '16%', left: '6%', rot: -10, size: 'xsmall' },
              { bottom: '10%', left: '26%', rot: 20, size: '' },
              { top: '52%', right: '50%', rot: -40, size: 'small' },
              { top: '6%', right: '46%', rot: -80, size: 'xsmall' },
              { top: '50%', left: '70%', rot: 30, size: '' },
              { bottom: '6%', right: '6%', rot: 60, size: 'small' },
              { top: '30%', left: '78%', rot: -30, size: 'xsmall' }
            ]

            return labels.map((lab, i) => {
              const pos = positions[i % positions.length]
              const style = { transform: `rotate(${pos.rot}deg)` }
              if (pos.top) style.top = pos.top
              if (pos.left) style.left = pos.left
              if (pos.right) style.right = pos.right
              if (pos.bottom) style.bottom = pos.bottom

              const cls = `tech-label ${pos.size || ''}`
              return (
                <div key={`${lab}-${i}`} className={cls} style={style}>{lab}</div>
              )
            })
          })()}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="block text-gray-900 dark:text-white mb-2">
              Riemar Ligad
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up delay-100">
            Web Developer & Project Manager
          </p>
          <div className="mb-8 animate-fade-in-up delay-200" data-reveal data-reveal-delay={120}>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              🟢 Available for Projects
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300">
            A motivated IT student with hands-on experience in project management, web development, and social media marketing. 
            Committed to delivering user-focused technical solutions while building strong brand presence online.
          </p>
          <button 
            onClick={() => scrollToSection('work')}
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-400 btn-animated"
            data-reveal
            data-reveal-delay={240}
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  )
}
