import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Designs',        href: '#figma-designs' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Badges',         href: '#badges' },
  { label: 'Education',      href: '#education' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center"
          >
            <span className="font-bold text-white text-lg">
              Pratham<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`nav-link pb-1 text-xs font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary after:w-full'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Resume button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/Pratham-Raval.pdf"
              download
              className="btn-outline text-sm py-2 px-4"
            >
              <FiDownload size={15} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/5">
            <a
              href="/Pratham-Raval.pdf"
              download
              className="btn-outline text-sm py-2.5 w-full justify-center"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
