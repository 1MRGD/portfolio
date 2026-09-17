import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy } from 'lucide-react'

export default function Experience() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sikkim Manipal University (SMU)',
      location: 'Gangtok, Sikkim',
      period: 'Pursuing (Current)',
      grade: 'In Progress',
      current: true,
      desc: 'Advanced software engineering, database management systems, and enterprise application architectures.',
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Utkal University / Lakshya Institute of Technology (LIT)',
      location: 'BBSR, Odisha',
      period: 'Graduated (2023 - 2026)',
      grade: 'CGPA: 8.50 / 10',
      current: false,
      desc: 'Core Java OOP, Data Structures, Relational Databases (MySQL/JDBC), Web Technologies, and Python.',
    },
    {
      degree: 'Intermediate (PCM - Physics, Chem, Math)',
      institution: 'Bridgewell Global School',
      location: 'BBSR, Odisha',
      period: '2021 - 2023',
      grade: 'Score: 60%',
      current: false,
      desc: 'CBSE Curriculum with foundation in analytical mathematics, physical sciences, and computing basics.',
    },
    {
      degree: 'High School Matriculation',
      institution: "St. Xavier's High School",
      location: 'Dhenkanal, Odisha',
      period: '2021 - 2022',
      grade: 'Score: 76.2%',
      current: false,
      desc: 'CBSE Board with distinction in mathematics, sciences, and athletic competitions.',
    },
  ]

  const certifications = [
    {
      title: 'Core Java Training',
      issuer: 'Lakshya Institute of Technology',
      details: 'Completed comprehensive training covering OOP concepts, exception handling, multithreading, and Java collections.',
    },
    {
      title: 'Core Python Training',
      issuer: 'Lakshya Institute of Technology',
      details: 'Gained hands-on experience in Python fundamentals, scripting, automation, and logic building.',
    },
    {
      title: 'Data Analytics Virtual Experience',
      issuer: 'Deloitte (Forage)',
      details: 'Worked on real-world data analysis tasks, applying forensic technology concepts to solve business problems.',
    },
  ]

  const honors = [
    {
      title: 'State-Level Taekwondo Athlete (Bronze Medalist)',
      desc: 'Represented Odisha at state-level competition among 50+ participants, won Bronze Medal.',
    },
    {
      title: 'NCC Cadet (A Certificate Holder)',
      desc: 'Completed 100+ hours of structured training focused on leadership, discipline, and teamwork.',
    },
    {
      title: 'Content Creation Award (Tech Fest)',
      desc: 'Led a 4-member college content creation team as Team Lead, secured Second Prize among 15+ teams.',
    },
    {
      title: 'Shot Put Champion (College Level)',
      desc: 'Won First Prize in annual college sports event, outperforming 20+ participants.',
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 bg-transparent relative w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Education & Experience
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-base md:text-lg px-2">
            Academic qualifications, verified credentials, and extracurricular leadership.
          </p>
        </motion.div>

        {/* Academic Education - Responsive 2-Column Grid */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Academic Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {education.map((item, idx) => (
              <div
                key={idx}
                className={`bg-[#121215]/85 backdrop-blur-md border p-5 sm:p-7 md:p-8 rounded-2xl flex flex-col justify-between hover:bg-[#181820] transition-all shadow-xl shadow-black/70 ${
                  item.current
                    ? 'border-white/35 shadow-[0_0_25px_rgba(255,255,255,0.08)]'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                    <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider">{item.period}</span>
                    <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide shrink-0 ${
                      item.current ? 'bg-white text-black shadow-md' : 'bg-[#1e1e24] text-gray-300'
                    }`}>
                      {item.grade}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2 leading-snug">{item.degree}</h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4">{item.institution} • {item.location}</p>
                  <p className="text-xs text-gray-400 leading-relaxed pt-2.5 sm:pt-3 border-t border-white/5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Responsive 3-Column Grid */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Certifications & Training</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-7 md:p-8 rounded-2xl flex flex-col justify-between hover:border-white/30 hover:bg-[#181820] transition-all shadow-lg shadow-black/60"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mb-3 sm:mb-4 font-mono">{cert.issuer}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{cert.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities - Responsive 4-Column Grid */}
        <div>
          <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Extracurricular Activities & Achievements</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {honors.map((honor, idx) => (
              <div
                key={idx}
                className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-white/30 hover:bg-[#181820] transition-colors shadow-lg shadow-black/60"
              >
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 sm:mb-2 leading-snug">{honor.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{honor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
