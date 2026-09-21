import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BackgroundCanvas from './components/BackgroundCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ClientWork from './components/ClientWork'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ClientWork />
      <Experience />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-700">
      {/* Reset Scroll position on route change */}
      <ScrollToTop />

      {/* Dynamic Interactive Neural Background Canvas */}
      <BackgroundCanvas />

      {/* Floating Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
