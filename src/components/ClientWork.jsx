import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight, 
  Database, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Clock, 
  Server,
  Building2,
  Sparkles
} from 'lucide-react'

export default function ClientWork() {
  const [activeCard, setActiveCard] = useState(null)

  const clientProjects = [
    {
      id: 'logistics-inventory',
      title: 'Enterprise Inventory & Stock Audit Engine',
      client: 'Regional Logistics & Supply Distributor',
      domain: 'Supply Chain & ERP',
      icon: Server,
      accentColor: 'from-cyan-500/20 via-transparent to-transparent',
      borderColor: 'group-hover:border-cyan-500/40',
      status: 'Delivered & In Production',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description:
        'Engineered a high-throughput inventory auditing backend with transactional integrity, replacing manual spreadsheet reconciliation with real-time stock sync and automated discrepancy alerts.',
      metrics: [
        { label: 'Reconciliation', value: '-85% Time' },
        { label: 'Audit Accuracy', value: '99.9%' },
        { label: 'Daily SKU Volume', value: '10K+' },
      ],
      deliverables: [
        'Relational database architecture in MySQL with indexed query optimization and ACID guarantees',
        'Automated batch reconciliation cron scripts with instant discrepancy flag notifications',
        'Role-Based Access Control (RBAC) preventing unauthorized stock and price modifications',
        'Scheduled export engine producing daily executive reports in Excel and PDF formats',
      ],
      tech: ['Java', 'MySQL', 'JDBC', 'RESTful APIs', 'Docker', 'Linux'],
    },
    {
      id: 'analytics-pipeline',
      title: 'Automated Sales Analytics & Forecast Pipeline',
      client: 'Retail & Multi-Store Consultancy',
      domain: 'Business Intelligence & Data',
      icon: TrendingUp,
      accentColor: 'from-blue-500/20 via-transparent to-transparent',
      borderColor: 'group-hover:border-blue-500/40',
      status: 'Production Active',
      statusColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      description:
        'Architected an automated end-to-end data pipeline that extracts multi-store point-of-sale transactions, cleans and aggregates records, and serves real-time performance KPI metrics.',
      metrics: [
        { label: 'Report Generation', value: '<45s' },
        { label: 'Batch Processing', value: '50K+ rows' },
        { label: 'Hours Saved/Wk', value: '6+ hrs' },
      ],
      deliverables: [
        'Automated ETL ingestion script utilizing Python & Pandas for automated schema validation',
        'FastAPI microservice endpoints serving cached aggregation payloads to client dashboards',
        'Trend forecasting module identifying low-velocity products and sales seasonal spikes',
        'Containerized deployment pipeline configured for automated nightly database backups',
      ],
      tech: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'Docker', 'Chart.js'],
    },
    {
      id: 'qr-access-system',
      title: 'Secure QR Access & Attendance Verification API',
      client: 'Academy & Institutional Facility',
      domain: 'Security & Access Control',
      icon: ShieldCheck,
      accentColor: 'from-purple-500/20 via-transparent to-transparent',
      borderColor: 'group-hover:border-purple-500/40',
      status: 'Delivered & Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description:
        'Constructed a low-latency tokenized verification backend allowing contactless QR code check-ins with anti-passback security measures and instant administrative attendance logs.',
      metrics: [
        { label: 'Verification Latency', value: '<300ms' },
        { label: 'Daily Check-ins', value: '500+' },
        { label: 'Duplicate Entry Rate', value: '0.0%' },
      ],
      deliverables: [
        'Cryptographically signed, time-decaying dynamic QR tokens preventing duplicate check-ins',
        'Anti-passback double-scan security middleware ensuring single-entry compliance',
        'Administrative analytics portal displaying real-time facility occupancy statistics',
        'High-compatibility REST endpoints supporting low-spec Android scanner hardware',
      ],
      tech: ['Python', 'FastAPI', 'SQLite/PostgreSQL', 'JWT', 'REST', 'Linux'],
    },
  ]

  const stats = [
    { label: 'Client Satisfaction', value: '100%', sub: 'Across Delivered Engagements' },
    { label: 'Core Specialization', value: 'Backend & Data', sub: 'Java, Python, Databases' },
    { label: 'Production Uptime', value: '99.9%', sub: 'Zero High-Severity Incidents' },
  ]

  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) {
      const yOffset = -72
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="client-work" className="py-16 sm:py-20 md:py-24 bg-transparent relative w-full scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONTRACT & FREELANCE SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Client Work
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-base md:text-lg px-2">
            Production-ready backend architectures, automated data pipelines, and custom software systems engineered for commercial clients and institutions.
          </p>
        </motion.div>

        {/* Quick Highlights Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#121215]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:border-white/20 transition-all shadow-lg shadow-black/40"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Client Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-14">
          {clientProjects.map((project, idx) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveCard(project.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-[#121215]/90 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/80 hover:bg-[#181820] ${project.borderColor}`}
              >
                {/* Top Subtle Gradient Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Domain & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-gray-400" />
                      {project.domain}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border shrink-0 ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Client Name */}
                  <div className="text-xs sm:text-sm text-gray-400 font-medium mb-3 flex items-center gap-1.5">
                    <span className="text-gray-500">Client:</span>
                    <span className="text-gray-300">{project.client}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 bg-black/50 p-2.5 rounded-xl border border-white/10 mb-5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-white font-mono">
                          {m.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-gray-400 leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Deliverables */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Deliverables & Scope
                    </h4>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills Footer */}
                <div className="relative z-10 pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] sm:text-xs text-gray-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Client Engagement CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#121216] via-[#161620] to-[#121216] border border-white/15 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMISSION & CONTRACT WORK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Have a Project or System to Build?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Available for freelance engagements, custom backend architecture, automated Python pipelines, and database optimization.
            </p>
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-lg active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer touch-manipulation"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
