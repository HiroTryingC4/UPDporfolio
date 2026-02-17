import { useState } from 'react'

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work')

  const workExperience = [
    {
      role: 'Project Manager & Full Stack Developer',
      company: 'Archivision - Student Information System',
      location: 'Trinity Polytechnic College, Inc.',
      period: 'Present',
      description: 'Leading the end-to-end development and deployment of the Student Information System.',
      achievements: [
        'Collaborated with stakeholders to define requirements',
        'Established project milestones',
        'Ensured timely delivery and optimized system functionality'
      ]
    },
    {
      role: 'Social Media Manager / Manager',
      company: 'Y&Y Twins Staycation / Sandy\'s Place / Staycations',
      period: 'Present',
      description: 'Creating, managing, and scheduling content across multiple social media platforms.',
      achievements: [
        'Increased engagement, reach, and followers',
        'Applied branding and visual design principles',
        'Maintained professional online presence'
      ]
    },
    {
      role: 'Freelance Web Developer & Social Media Strategist',
      company: 'Independent Contractor',
      period: 'Present',
      description: 'Developing responsive and user-friendly websites tailored to client needs.',
      achievements: [
        'Combined web design with social media integration',
        'Offered strategy, content creation, and analytics tracking',
        'Improved digital performance for clients'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Quezon City University',
      period: 'Present',
      description: 'Currently pursuing comprehensive IT education covering software development, system analysis, and project management.',
      skills: ['Software Development', 'System Analysis', 'Project Management']
    },
    {
      degree: 'Senior High School - ICT Track',
      school: 'Trinity Polytechnic College',
      period: '2021 - 2023',
      description: 'Graduated with High Honors, specializing in Information and Communications Technology.',
      skills: ['ICT Fundamentals', 'Programming', 'High Honors']
    },
    {
      degree: 'Junior High School',
      school: 'Sauyo High School',
      period: '2017 - 2021',
      description: 'Completed secondary education with strong foundation in academics and technology.',
      skills: ['Academic Excellence', 'Technology Foundation', 'Leadership']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black" data-reveal>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'work'
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
            className="btn-animated"
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
            className="btn-animated"
          >
            Education
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'work' && (
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg" data-reveal data-reveal-delay={index * 100}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold dark:text-white">{exp.role}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                      {exp.location && <p className="text-gray-500 dark:text-gray-500">{exp.location}</p>}
                    </div>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg" data-reveal data-reveal-delay={index * 100}>
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.school}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm mb-4">
                    {edu.period}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
