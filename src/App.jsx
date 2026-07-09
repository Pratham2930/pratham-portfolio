import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FigmaDesignProjects from './components/FigmaDesignProjects'
import Certifications from './components/Certifications'
import Badges from './components/Badges'
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
      {/* Cursor glow */}
      <CursorGlow />

      {/* Loading screen — AnimatePresence drives the exit animation */}
      <AnimatePresence>
        {loading && <LoadingScreen onDone={handleLoadDone} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-dark text-white overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <FigmaDesignProjects />
            <Certifications />
            <Badges />
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
