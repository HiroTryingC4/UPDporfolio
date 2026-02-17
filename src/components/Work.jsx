import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projects'

export default function Work() {
  const navigate = useNavigate()

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in web development, design, and system management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="bg-gray-50 dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              data-reveal
              data-reveal-delay={idx * 120}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
