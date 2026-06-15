import React, { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FigmaDesignProjects from './components/FigmaDesignProjects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoadDone = useCallback(() => setLoading(false), [])

  return (
    <>
      {/* Global toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0d1526',
            color: '#e2e8f0',
            border: '1px solid rgba(14,165,233,0.3)',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#0d1526' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#0d1526' },
          },
        }}
      />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Loading screen with AnimatePresence for exit animation */}
      <AnimatePresence>
        {loading && <LoadingScreen onDone={handleLoadDone} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-dark text-white overflow-x-hidden">
          {/* Scroll progress indicator */}
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <FigmaDesignProjects />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  )
}

export default App
