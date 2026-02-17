export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center" data-reveal data-reveal-delay={80}>
            <img 
              src="/personalImage/b3b411ef-3618-4c3c-a091-5b40ed4c9b92.jpg" 
              alt="Riemar Ligad" 
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
          
          <div className="space-y-6" data-reveal data-reveal-delay={160}>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a motivated and passionate Bachelor of Science in Information Technology student at Quezon City University 
              with hands-on experience in project management, web development, and social media marketing. I'm skilled at 
              delivering user-focused technical solutions while building strong brand presence online.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I demonstrate leadership, collaboration, and strategic thinking to achieve both technical and marketing goals. 
              I'm committed to continuous growth, innovation, and making a positive impact through technology and digital media.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['Web Developer', 'Project Manager', 'System Analyst', 'Social Media Marketing', 'UI/UX Design', 'SEO Specialist', 'Client / Stakeholder Management'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
