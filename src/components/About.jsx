import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, GraduationCap, Trophy, Terminal, Cpu, ShieldCheck, User } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('specs')
  const [terminalCleared, setTerminalCleared] = useState(false)
  const [terminalMinimized, setTerminalMinimized] = useState(false)

  const tabList = ['specs', 'metrics', 'sports']
  const handleCycleTab = () => {
    setTerminalCleared(false)
    const nextIdx = (tabList.indexOf(activeTab) + 1) % tabList.length
    setActiveTab(tabList[nextIdx])
  }

  const stats = [
    { value: '8.50', label: 'Academic CGPA (BCA)', sub: 'Utkal University / LIT', metric: 'Top Tier' },
    { value: '35%+', label: 'Analytics & Query Boost', sub: 'Optimized Data Pipelines & JDBC', metric: 'Measured' },
    { value: '100%', label: 'Test Integrity Verification', sub: 'Zero-Anomaly Validation', metric: 'Verified' },
  ]

  const terminalTabs = {
    specs: [
      { cmd: 'ashish.getRole()', out: 'Aspiring AI/ML & Data Analyst' },
      { cmd: 'ashish.getCoreStack()', out: 'Python (Machine Learning, Neural Networks), Java, SQL' },
      { cmd: 'ashish.getDatabaseEngine()', out: 'MySQL, JDBC Driver, Oracle, Schema Indexing' },
      { cmd: 'ashish.getUndergradSpecs()', out: 'Utkal University / LIT // 8.50/10 CGPA (Top Tier)' },
      { cmd: 'ashish.getTools()', out: 'Git, GitHub, VS Code, Netlify, Pandas, NumPy, Scikit-Learn' },
    ],
    metrics: [
      { cmd: 'ashish.getBenchmark("VehicleRental")', out: '+35% System Efficiency Boost via JDBC' },
      { cmd: 'ashish.getBenchmark("QRVoting")', out: '100% Duplicate-Free Verification in Test Runs' },
      { cmd: 'ashish.getLeadership()', out: 'Team Lead Tech Fest (2nd Prize) // NCC Cadet A-Cert' },
    ],
    sports: [
      { cmd: 'ashish.getSportsHonor()', out: 'State-Level Taekwondo Bronze Medalist (Odisha)' },
      { cmd: 'ashish.getAthletics()', out: 'College Shot Put Champion (1st Prize, 20+ Athletes)' },
      { cmd: 'ashish.getDisciplineIndex()', out: '100+ Hours Leadership & Physical Resilience' },
    ],
  }

  const highlights = [
    'Focused on developing machine learning models, predictive neural networks, and scalable pipelines.',
    'Hands-on expertise in Java backend systems, Exception Handling, OOP, and Collections.',
    'SQL schema design, query optimization, and CRUD operations across MySQL and Oracle.',
    'Built QR-based secure authentication workflows eliminating duplicate operations (100% in tests).',
    'Completed Deloitte Data Analytics virtual experience applying forensic tech to business problems.',
    'State-level Taekwondo Athlete representing Odisha (Bronze Medalist) & NCC Cadet (A Certificate).',
  ]

  const pillars = [
    {
      title: 'AI/ML & Data Analytics',
      desc: 'Developing predictive models, exploratory data pipelines, and machine learning architectures.',
      icon: Cpu,
      metric: 'AI / ML',
    },
    {
      title: 'Database Architecture',
      desc: 'High-performance SQL schema design, indexing, and transactional integrity on MySQL & Oracle.',
      icon: GraduationCap,
      metric: '8.50 CGPA',
    },
    {
      title: 'Discipline & Sportsmanship',
      desc: '100+ hours of NCC leadership training and State-level Bronze Medal in Taekwondo martial arts.',
      icon: Trophy,
      metric: 'MEDALIST',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-transparent relative w-full">
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
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-base md:text-lg px-2">
            Aspiring AI/ML & Data Analyst with strong foundational expertise in Python, Java, relational databases, and machine learning pipelines.
          </p>
        </motion.div>

        {/* Executive Key Metric Cards (Scorecard) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full mb-10 sm:mb-14"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-[#121215]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-white/35 hover:bg-[#181822] transition-all text-center flex flex-col justify-between shadow-xl shadow-black/80 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-2 sm:mb-3">
                  <span>METRIC // 0{index + 1}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-medium">
                    {stat.metric}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1.5 sm:mb-2 tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-semibold mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400 font-mono mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Full-Page Grid Split: Narrative with Dedicated Profile Pic Space + Interactive Cyber Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-12">
          {/* Main Story with Dedicated Profile Picture Space (Left 6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-8 md:p-10 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-colors shadow-xl shadow-black/70"
          >
            <div>
              {/* Header with Dedicated Profile Picture Slot */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 pb-6 border-b border-white/10 text-center sm:text-left">
                {/* Executive Profile Picture Frame */}
                <div className="relative group shrink-0 mx-auto sm:mx-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-[#181822] border-2 border-white/20 overflow-hidden relative shadow-2xl flex items-center justify-center">
                    <img 
                      src="/profile.jpg" 
                      alt="Ashish Ranjan Samal"
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none'; 
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#181824] to-[#0b0b0f] text-gray-400 p-3 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1.5 text-gray-300">
                        <User className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 tracking-wider">PROFILE PIC</span>
                    </div>
                  </div>

                  {/* Online Beacon */}
                  <div className="absolute -bottom-2 -right-1 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#08080a] border border-emerald-500/50 text-[10px] font-mono text-emerald-400 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Identity Text */}
                <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                  <div className="flex items-center justify-center sm:justify-between mb-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-white">Ashish Ranjan Samal</h3>
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-emerald-400 mb-2 font-medium">
                    SYS.ID // ASPIRING AI/ML & DATA ANALYST
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Passionate about building predictive machine learning models, database architectures, and scalable analytics solutions.
                  </p>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                <p>
                  Aspiring AI/ML & Data Analyst with a solid engineering foundation in designing machine learning pipelines, building scalable backend services, and architecting optimized relational databases.
                </p>
                <p className="text-gray-400">
                  Whether training neural models for anomaly detection or optimizing database queries for high-concurrency systems, I approach every challenge with disciplined execution, model evaluation, and a drive to solve complex real-world problems.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-gray-400 pt-5 sm:pt-6 border-t border-white/10 flex-wrap mt-5 sm:mt-6">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-[#18181f] border border-white/10 text-gray-300 text-[11px] sm:text-xs">📍 Bhubaneswar, Odisha</span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-[#18181f] border border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs">⚡ Open for AI/ML & Analytics Roles</span>
            </div>
          </motion.div>

          {/* Interactive Cyber Terminal Simulator (Right 6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-[#101014] border border-white/10 rounded-2xl overflow-hidden font-mono shadow-xl shadow-black/70 flex flex-col justify-between"
          >
            {/* Terminal Chrome Header */}
            <div className="bg-[#181820] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-2 shrink-0">
                {/* Interactive Window Control Three Dots */}
                <div className="flex items-center gap-1.5 py-1">
                  <button
                    type="button"
                    onClick={() => setTerminalCleared(!terminalCleared)}
                    title="Red Dot: Clear / Reset Terminal"
                    aria-label="Clear Terminal"
                    className="w-3 h-3 rounded-full bg-rose-500/85 hover:bg-rose-500 active:scale-75 transition-all cursor-pointer touch-manipulation shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setTerminalMinimized(!terminalMinimized)}
                    title="Yellow Dot: Minimize / Expand Terminal"
                    aria-label="Minimize Terminal"
                    className="w-3 h-3 rounded-full bg-amber-500/85 hover:bg-amber-500 active:scale-75 transition-all cursor-pointer touch-manipulation shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={handleCycleTab}
                    title="Green Dot: Cycle to Next Tab"
                    aria-label="Next Terminal Tab"
                    className="w-3 h-3 rounded-full bg-emerald-500/85 hover:bg-emerald-500 active:scale-75 transition-all cursor-pointer touch-manipulation shadow-sm"
                  />
                </div>

                <span className="text-[11px] sm:text-xs text-gray-400 ml-1 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-gray-300" />
                  ashish-core-v2.sh
                </span>
              </div>

              {/* Segmented Terminal Mode Switcher - Responsive on Mobile */}
              <div className="w-full sm:w-auto flex items-center gap-1 bg-[#121216] p-1 rounded-xl border border-white/10 shrink-0 mt-1 sm:mt-0">
                {['specs', 'metrics', 'sports'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setTerminalCleared(false)
                      setActiveTab(tab)
                    }}
                    className={`flex-1 sm:flex-initial px-3 sm:px-3 py-2 sm:py-1 rounded-lg text-xs sm:text-[11px] font-semibold uppercase transition-all cursor-pointer touch-manipulation active:scale-95 min-h-[36px] sm:min-h-0 flex items-center justify-center ${
                      activeTab === tab && !terminalCleared
                        ? 'bg-white text-black font-bold shadow-sm'
                        : 'text-gray-400 hover:text-white active:bg-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Shell Output Viewport */}
            {!terminalMinimized && (
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-xs sm:text-sm flex-1 bg-[#0b0b0e] overflow-x-auto transition-all">
                <div className="text-gray-500 text-[10px] sm:text-[11px] pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>// System Diagnostics: Active telemetry initialized for Ashish Ranjan Samal</span>
                  <span className="text-[10px] text-zinc-400 uppercase font-mono">[{activeTab}]</span>
                </div>

                {terminalCleared ? (
                  <div className="py-6 text-center text-gray-400 text-xs space-y-2">
                    <p>Terminal output cleared.</p>
                    <button
                      type="button"
                      onClick={() => setTerminalCleared(false)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 text-xs font-semibold cursor-pointer touch-manipulation transition-colors"
                    >
                      Restore Output
                    </button>
                  </div>
                ) : (
                  terminalTabs[activeTab].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-400 break-all sm:break-normal">
                        <span className="text-gray-600">$</span>
                        <span className="text-gray-200">{item.cmd}</span>
                      </div>
                      <div className="text-gray-400 pl-3 sm:pl-4 border-l border-white/10 py-0.5 break-words">
                        → <span className="text-white font-medium">{item.out}</span>
                      </div>
                    </div>
                  ))
                )}

                {!terminalCleared && (
                  <div className="flex items-center gap-2 text-gray-400 pt-2 sm:pt-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-gray-500 text-xs">Ready for execution_</span>
                  </div>
                )}
              </div>
            )}

            {/* Terminal Footer Bar */}
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#14141a] border-t border-white/5 text-[10px] sm:text-[11px] text-gray-400 flex items-center justify-between">
              <span>ACTIVE: ASHISH.AI</span>
              <span>STATUS: ONLINE</span>
            </div>
          </motion.div>
        </div>

        {/* Three Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-7 rounded-2xl hover:border-white/30 transition-all group shadow-lg"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-semibold">
                    {pillar.metric}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{pillar.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Verified Capability Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 shrink-0" />
              <span>Verified Core Competencies & Achievements</span>
            </h3>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline">VERIFIED LEDGER</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2.5 sm:gap-3 group">
                <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
