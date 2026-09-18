import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHover, setActiveHover] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Ensure day-mode class is completely removed
    document.documentElement.classList.remove('day-mode')
    document.body.classList.remove('day-mode')

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (!href || href === '#') {
      if (location.pathname !== '/') {
        navigate('/')
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }
    const targetId = href.replace('#', '')
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          const yOffset = -72
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 150)
    } else {
      const el = document.getElementById(targetId)
      if (el) {
        const yOffset = -72
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* Top Subtle Border Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Main Glass Chassis */}
      <div className={`w-full transition-all duration-300 border-b border-white/10 ${
        scrolled
          ? 'bg-[#08080a]/95 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.95)] py-2.5 sm:py-3 text-white'
          : 'bg-[#08080a]/80 backdrop-blur-xl border-white/10 py-3 sm:py-4 text-white'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Clean AI Engineering Brand */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 cursor-pointer touch-manipulation"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#121215] border border-white/20 flex items-center justify-center text-white group-hover:border-white/50 group-hover:bg-[#181820] transition-all shadow-md">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-white">
                  ASHISH.AI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono line-clamp-1">
                Aspiring AI/ML & Data Analyst
              </span>
            </div>
          </Link>

          {/* Center: Sleek Segmented Navigation Dock */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121216]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative px-3.5 lg:px-4 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group z-10 cursor-pointer touch-manipulation"
              >
                <span>{link.name}</span>

                {activeHover === idx && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right: Connect CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 lg:px-5 py-2 rounded-xl bg-white text-black text-xs font-bold tracking-wide hover:bg-zinc-200 transition-all shadow-md flex items-center gap-1.5 cursor-pointer touch-manipulation active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-[#121215] border border-white/15 text-gray-300 hover:text-white active:scale-95 transition-transform flex items-center justify-center cursor-pointer touch-manipulation"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-4 sm:px-8 pt-3 pb-5 border-t border-white/10 bg-[#08080a]/98 backdrop-blur-2xl space-y-2 overflow-hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 active:bg-white/20 active:scale-[0.98] transition-all flex items-center justify-between cursor-pointer touch-manipulation min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-3 rounded-xl bg-white text-black font-bold text-sm shadow-md active:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
