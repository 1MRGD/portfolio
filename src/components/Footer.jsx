import React from 'react'
import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#08080a] border-t border-white/10 py-8 sm:py-10 relative z-10 w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="font-bold text-white text-sm sm:text-base">
            Ashish Ranjan Samal
          </span>
          <p className="text-[11px] sm:text-xs text-gray-500 font-mono">Aspiring AI/ML & Data Analyst • © {new Date().getFullYear()}</p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="https://github.com/1MRGD"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-gray-400 hover:text-white transition-colors active:scale-95"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ashishranjansamal/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-gray-400 hover:text-white transition-colors active:scale-95"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer active:scale-95"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
