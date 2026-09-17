import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java (OOP, Collections, Exceptions)', level: 90 },
        { name: 'Python (Scripting & Logic Building)', level: 85 },
        { name: 'SQL (Structured Query Language)', level: 88 },
      ],
    },
    {
      title: 'Database Management & JDBC',
      skills: [
        { name: 'MySQL & Query Optimization', level: 90 },
        { name: 'JDBC (Java Database Connectivity)', level: 88 },
        { name: 'Oracle Database', level: 75 },
        { name: 'SQLite', level: 80 },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML5 & CSS3', level: 85 },
        { name: 'QR Code API Integration', level: 88 },
        { name: 'Responsive Web Design', level: 82 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Netlify Deployment', level: 80 },
        { name: 'Microsoft Excel', level: 82 },
      ],
    },
  ]

  const softSkills = [
    'Team Leadership (Led 4-member Tech Fest team to 2nd Prize)',
    'Cross-functional Collaboration & Peer Mentoring',
    'Structured Task Execution & Problem Decomposition',
    'High Discipline (State-level Taekwondo Athlete & NCC Cadet)',
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-transparent relative w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Skills & Technical Stack
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-base md:text-lg px-2">
            Technical proficiencies in core programming, relational databases, and developer environments.
          </p>
        </motion.div>

        {/* 4-Column Responsive Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-white/30 hover:bg-[#18181f] transition-all flex flex-col justify-between shadow-lg shadow-black/60"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-5 pb-2.5 sm:pb-3 border-b border-white/10">
                  {category.title}
                </h3>

                <div className="space-y-3.5 sm:space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-gray-200">{skill.name}</span>
                        <span className="text-gray-400 font-mono text-[11px] sm:text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#1e1e24] rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + skillIdx * 0.1 }}
                          className="h-full rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Full Width Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-2xl w-full shadow-lg shadow-black/60"
        >
          <h3 className="text-base sm:text-lg font-bold text-white mb-3.5 sm:mb-4">Leadership & Operational Methodologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#18181f] border border-white/10 text-xs sm:text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                <span className="leading-snug">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
