import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Layers, BarChart2 } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [projectTabs, setProjectTabs] = useState({
    'vehicle-rental': 'highlights',
    'qr-voting': 'highlights',
    'deloitte-analytics': 'highlights',
  })

  const setTab = (projectId, tab) => {
    setProjectTabs((prev) => ({ ...prev, [projectId]: tab }))
  }

  const categories = ['All', 'Java & Backend', 'Security', 'Data Analytics']

  const projects = [
    {
      id: 'vehicle-rental',
      title: 'Vehicle Rental System',
      category: 'Java & Backend',
      description: 'Engineered a Java-based Vehicle Rental System managing booking, availability, and returns for 100+ users.',
      highlights: [
        'Implemented CRUD operations and optimized database queries.',
        'Reduced manual record handling by 45%.',
        'Enhanced system efficiency by 35% via optimized backend logic and secure authentication.',
      ],
      metrics: [
        { label: 'Manual Effort Reduction', val: '-45%' },
        { label: 'System Efficiency Boost', val: '+35%' },
        { label: 'Concurrency Capacity', val: '100+ Users' },
      ],
      technologies: ['Java', 'JDBC', 'MySQL', 'HTML5', 'CSS3', 'OOP'],
      github: 'https://github.com/1MRGD/Vehicle_Rental_System',
    },
    {
      id: 'qr-voting',
      title: 'QR Code–Based Secure Online Voting System',
      category: 'Security',
      description: 'Built and deployed a Java-based secure online voting system with QR code authentication.',
      highlights: [
        'Implemented QR verification, secure vote casting, and result management.',
        'Enhanced voting security and eliminated duplicate voting (100% in test cases).',
      ],
      metrics: [
        { label: 'Duplicate Prevention', val: '100% Verified' },
        { label: 'Auth Method', val: 'QR Encryption' },
        { label: 'Data Integrity', val: 'ACID Compliant' },
      ],
      technologies: ['Java', 'JDBC', 'MySQL', 'QR Code API', 'HTML5', 'CSS3'],
      github: 'https://github.com/1MRGD/QR-Code-Based-Secure-Online-Voting-System-Using-Java',
    },
    {
      id: 'deloitte-analytics',
      title: 'Data Analytics Virtual Experience – Deloitte',
      category: 'Data Analytics',
      description: 'Worked on real-world data analysis tasks, applying forensic technology concepts to solve business problems.',
      highlights: [
        'Applied forensic technology and statistical analysis for anomaly detection.',
        'Structured complex business data into executive-ready visual decision reports.',
      ],
      metrics: [
        { label: 'Domain', val: 'Forensic Tech' },
        { label: 'Case Studies', val: 'Enterprise Grade' },
        { label: 'Deliverables', val: 'Insights & Reports' },
      ],
      technologies: ['Python', 'Data Analytics', 'Forensic Tech', 'Excel', 'Statistics'],
      github: 'https://github.com/1MRGD',
    },
  ]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-transparent relative w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-base md:text-lg px-2">
            Production-grade backend architectures, secure authentication engines, and analytics simulations.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-8 sm:mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer touch-manipulation active:scale-95 min-h-[38px] flex items-center justify-center ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-md font-bold'
                  : 'bg-[#121215] text-gray-400 hover:text-white border border-white/10 active:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Full-Width Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const currentTab = projectTabs[project.id] || 'highlights'
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#121215]/90 backdrop-blur-md border border-white/10 p-5 sm:p-7 rounded-2xl hover:border-white/30 hover:bg-[#181820] transition-all flex flex-col justify-between shadow-xl shadow-black/80"
                >
                  <div>
                    {/* Header with Title & Category */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1e1e24] border border-white/10 text-gray-300 text-[10px] sm:text-xs font-medium whitespace-nowrap shrink-0">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Interactive Card View 3 Tabs */}
                    <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10 mb-4 text-xs sm:text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setTab(project.id, 'highlights')}
                        className={`flex-1 py-2 sm:py-1.5 min-h-[36px] sm:min-h-0 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer touch-manipulation active:scale-95 ${
                          currentTab === 'highlights' ? 'bg-white text-black font-bold shadow-sm' : 'text-gray-400 hover:text-white active:bg-white/10'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Highlights</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab(project.id, 'metrics')}
                        className={`flex-1 py-2 sm:py-1.5 min-h-[36px] sm:min-h-0 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer touch-manipulation active:scale-95 ${
                          currentTab === 'metrics' ? 'bg-white text-black font-bold shadow-sm' : 'text-gray-400 hover:text-white active:bg-white/10'
                        }`}
                      >
                        <BarChart2 className="w-3.5 h-3.5" />
                        <span>Metrics</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab(project.id, 'stack')}
                        className={`flex-1 py-2 sm:py-1.5 min-h-[36px] sm:min-h-0 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer touch-manipulation active:scale-95 ${
                          currentTab === 'stack' ? 'bg-white text-black font-bold shadow-sm' : 'text-gray-400 hover:text-white active:bg-white/10'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Stack</span>
                      </button>
                    </div>

                    {/* Tab Content Display */}
                    <div className="min-h-[100px] sm:min-h-[110px] mb-4 sm:mb-5">
                      {currentTab === 'highlights' && (
                        <div className="space-y-2">
                          {project.highlights.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {currentTab === 'metrics' && (
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                          {project.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="p-2 sm:p-2.5 rounded-xl bg-black/80 border border-white/5 text-center flex flex-col justify-center">
                              <span className="text-xs sm:text-sm font-bold text-white mb-0.5 truncate">{m.val}</span>
                              <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase leading-tight">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {currentTab === 'stack' && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-gray-200 text-[11px] sm:text-xs font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase">REPO // VERIFIED</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-gray-300 cursor-pointer p-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
