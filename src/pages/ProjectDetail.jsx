import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  UserCheck,
  Sparkles,
  Database,
  Terminal,
  Code2,
  ChevronRight,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { projectsData } from '../data/projectsData'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const currentIndex = projectsData.findIndex((p) => p.id === id)
  const project = projectsData[currentIndex]

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-[#121215]/90 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-gray-400 text-sm mb-6">
            The project you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    )
  }

  // Previous and Next project calculation
  const prevProject =
    currentIndex > 0
      ? projectsData[currentIndex - 1]
      : projectsData[projectsData.length - 1]
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : projectsData[0]

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28 relative w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-6xl w-full">
        {/* Top Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <Link
              to="/#projects"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                setTimeout(() => {
                  const el = document.getElementById('projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>

          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              setTimeout(() => {
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121215] border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all text-xs font-medium cursor-pointer active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#121215]/90 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl mb-10 sm:mb-14 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 relative z-10">
            <span className="px-3 py-1 rounded-full bg-white text-black font-bold text-xs shadow-sm">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1e1e24] border border-white/10 text-gray-300 text-xs font-mono">
              {project.timeline}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {project.status}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 relative z-10">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-6 font-light relative z-10">
            {project.subtitle}
          </p>

          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5 border-y border-white/10 mb-8 relative z-10 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                  Role
                </span>
                <span className="font-semibold text-white">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                  Timeline
                </span>
                <span className="font-semibold text-white">{project.timeline}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                  Verification
                </span>
                <span className="font-semibold text-white">{project.status}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 relative z-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            )}

            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                setTimeout(() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="px-5 py-2.5 rounded-xl bg-[#1e1e24] text-white border border-white/15 font-semibold text-xs sm:text-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Discuss This Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Quantifiable Impact & Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Zap className="w-5 h-5 text-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Quantifiable Impact & Verified Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#121215]/85 border border-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-md hover:border-white/30 hover:bg-[#181820] transition-all flex flex-col justify-between shadow-xl shadow-black/60"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white block mb-1">
                    {m.val}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-200 mb-2">
                    {m.label}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Problem vs Solution Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {/* Problem Statement Card */}
          <div className="bg-[#121215]/85 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[10px] sm:text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  The Problem Space
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                Legacy Inefficiencies & Architectural Gaps
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10">
              <span className="text-[11px] text-gray-400 font-mono">
                Focus: Bottleneck Elimination & Data Integrity
              </span>
            </div>
          </div>

          {/* Solution & Engineering Response Card */}
          <div className="bg-[#121215]/85 border border-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  The Engineering Solution
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                Modern Relational Design & Optimized Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10">
              <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Production / Simulation Tests</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* System Architecture & Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="w-5 h-5 text-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              System Architecture & Multi-Tier Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.architecture.map((layer, idx) => (
              <div
                key={idx}
                className="bg-[#121215]/85 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md relative hover:border-white/30 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      Tier 0{idx + 1}
                    </span>
                    <Cpu className="w-4 h-4 text-gray-400" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                    {layer.tier}
                  </h4>
                  <span className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300 mb-3">
                    {layer.tech}
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {layer.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Features Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Key Features & Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#121215]/85 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-white/30 hover:bg-[#181820] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Highlights & Code Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#121215]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Terminal className="w-5 h-5 text-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Engineering Deep-Dive & Robustness
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.engineeringHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/40 border border-white/5 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Database className="w-5 h-5 text-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Technology Stack Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.techStackDetails.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#121215]/85 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md flex items-start gap-3.5 hover:border-white/30 transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {tech.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-10 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Prev Project */}
            <Link
              to={`/project/${prevProject.id}`}
              className="bg-[#121215]/80 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:bg-[#181820] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors shrink-0">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                  Previous Project
                </span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              to={`/project/${nextProject.id}`}
              className="bg-[#121215]/80 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:bg-[#181820] transition-all flex items-center justify-between gap-4 group text-right"
            >
              <div className="overflow-hidden w-full">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                  Next Project
                </span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-[#121215] via-[#1a1a24] to-[#121215] border border-white/15 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Interested in Collaborating or Exploring More Code?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            I am actively seeking software engineering, backend, and AI/ML opportunities. Let's discuss how my skills can contribute to your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                setTimeout(() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-95"
            >
              Get In Touch
            </Link>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                setTimeout(() => {
                  const el = document.getElementById('projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="px-6 py-2.5 rounded-xl bg-transparent border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all active:scale-95"
            >
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
