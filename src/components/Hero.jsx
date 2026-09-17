import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-14 px-4 sm:px-8 lg:px-12 text-center bg-transparent w-full overflow-hidden">
      <div className="max-w-5xl w-full mx-auto z-10 flex flex-col items-center">
        
        {/* Top Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-status-pill inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#121215]/90 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs md:text-sm font-mono text-gray-300 mb-2.5 sm:mb-5 shadow-lg hover:border-white/30 transition-all cursor-default max-w-full text-center"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="tracking-wide truncate">OPEN FOR ROLES // AI/ML & DATA ANALYTICS</span>
        </motion.div>

        {/* Big Fluid Grand Hero Name */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)', scale: 0.98 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative select-none w-full flex justify-center mb-0.5 group px-2"
        >
          <h1 className="grand-hero-name text-[clamp(1.6rem,5.6vw,5.5rem)] font-black uppercase tracking-tight sm:tracking-normal leading-[1.08] select-none text-center">
            ASHISH RANJAN SAMAL
          </h1>
        </motion.div>

        {/* Dedicated Viewport Gap for the Central Plasma Core between Name and Content */}
        <div id="sun-anchor" className="h-28 sm:h-32 md:h-36 w-full flex items-center justify-center pointer-events-none my-1 sm:my-2" />

        {/* Subtitle - Aspiring AI/ML & Data Analyst */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hero-subtitle text-base sm:text-2xl md:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-300 mb-2 sm:mb-4 px-2 transition-all"
        >
          Aspiring AI/ML & Data Analyst
        </motion.h2>

        {/* High-Contrast Focused Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hero-description text-xs sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-5 sm:mb-8 font-normal px-2 transition-all"
        >
          Building predictive machine learning models, forensic data analytics solutions, and high-performance database architectures with Python, Java, and SQL.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none px-4"
        >
          <a
            href="#projects"
            className="hero-btn-primary w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm md:text-base hover:bg-zinc-200 transition-all shadow-xl hover:shadow-white/20 flex items-center justify-center gap-2 cursor-pointer group active:scale-98 touch-manipulation"
          >
            <span>Explore Projects & Analytics</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
          </a>

          <a
            href="#contact"
            className="hero-btn-secondary w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-[#121215]/95 text-white border border-white/20 hover:bg-[#1c1c24] hover:border-white/40 font-semibold text-xs sm:text-sm md:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 touch-manipulation"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 shrink-0" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Downward Chevron Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-scroll-chevron mt-4 sm:mt-8 flex justify-center text-gray-500 transition-colors"
        >
          <a href="#about" aria-label="Scroll Down" className="p-2 touch-manipulation">
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
