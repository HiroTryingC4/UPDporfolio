export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Full Stack Development',
      description: 'Building responsive and user-friendly websites tailored to client needs with modern technologies.',
      features: ['Frontend Development', 'Backend Integration', 'Responsive Design', 'Database Management']
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'Leading end-to-end development and deployment of complex systems with strategic planning.',
      features: ['Requirements Gathering', 'Project Milestones', 'Team Collaboration', 'Timely Delivery']
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Creating, managing, and scheduling content across multiple platforms to boost engagement.',
      features: ['Content Creation', 'Platform Management', 'Marketing Strategies', 'Analytics Tracking']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Applying branding and visual design principles to maintain professional online presence.',
      features: ['Visual Design', 'User Experience', 'Brand Integration', 'Design Strategy']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-black" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Services Offered</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions combining technical expertise with creative vision to bring your projects to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-reveal
              data-reveal-delay={index * 90}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
