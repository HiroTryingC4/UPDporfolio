export default function Hobbies() {
  const hobbies = [
    {
      icon: '💻',
      title: 'Coding & Programming',
      description: 'Exploring new programming languages, frameworks, and technologies to stay current with industry trends.'
    },
    {
      icon: '🎨',
      title: 'Digital Design',
      description: 'Creating visual content, experimenting with design tools, and developing creative solutions for digital media.'
    },
    {
      icon: '🚀',
      title: 'Technology Innovation',
      description: 'Following the latest tech trends, exploring emerging technologies, and understanding their impact on society.'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Taking online courses, reading tech blogs, and participating in developer communities to expand knowledge.'
    }
  ]

  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-black" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Personal Interests</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond work, these interests fuel my creativity and keep me inspired in both personal and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              data-reveal
              data-reveal-delay={index * 90}
            >
              <div className="text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{hobby.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
