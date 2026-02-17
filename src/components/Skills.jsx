export default function Skills() {
  const technicalSkills = [
    { icon: '💻', title: 'Full Stack Development', description: 'Frontend and backend development with modern frameworks', level: 'Advanced' },
    { icon: '🎨', title: 'UI/UX Design', description: 'User interface and experience design principles', level: 'Proficient' },
    { icon: '📊', title: 'Project Management', description: 'Strategic planning, scheduling, and requirements gathering', level: 'Expert' },
    { icon: '📱', title: 'Social Media Marketing', description: 'Content creation and digital marketing strategy', level: 'Advanced' }
  ]

  const tools = [
    { icon: '📄', title: 'Microsoft Office Suite', description: 'Excel, Word, PowerPoint for professional documentation', level: 'Expert' },
    { icon: '📅', title: 'Social Media Tools', description: 'Scheduling and analytics tools for platform management', level: 'Advanced' },
    { icon: '🔧', title: 'Web Development', description: 'Modern web technologies and responsive design', level: 'Advanced' },
    { icon: '🤝', title: 'Team Collaboration', description: 'Problem-solving and team collaboration skills', level: 'Expert' }
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical and professional skills developed through education, experience, and continuous learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 dark:text-white text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-reveal data-reveal-delay={index * 80}>
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-bold mb-2 dark:text-white">{skill.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{skill.description}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 dark:text-white text-center">Tools & Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" data-reveal data-reveal-delay={index * 80}>
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h4 className="text-lg font-bold mb-2 dark:text-white">{tool.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{tool.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                    {tool.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
