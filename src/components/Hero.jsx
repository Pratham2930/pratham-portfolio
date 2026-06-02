import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
  FiLinkedin,
  FiMail,
  FiPhone,
  FiDownload,
  FiArrowRight,
  FiMapPin,
} from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="max-w-3xl min-h-[calc(100vh-80px)] flex items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Pratham Raval
              <span className="block gradient-text"></span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold text-slate-300 h-8">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Data Analyst',
                  2000,
                  'React.js Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              MSc IT graduate passionate about building modern web applications and solving
              business problems through data-driven solutions. Based in{' '}
              <span className="text-primary font-medium">Gandhinagar, Gujarat, India</span>.
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FiMapPin size={14} className="text-primary" />
              <span>Gandhinagar, Gujarat, India</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary text-base px-8 py-3.5"
              >
                Hire Me <FiArrowRight size={18} />
              </a>
              <a
                href="/Pratham-Raval.pdf"
                download
                className="btn-outline text-base px-8 py-3.5"
              >
                <FiDownload size={18} /> Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-slate-500 text-sm">Find me on:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/prathamraval20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="mailto:ravalpratham29@gmail.com"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Email"
                >
                  <FiMail size={18} />
                </a>
                <a
                  href="tel:+918866346424"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Phone"
                >
                  <FiPhone size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs font-medium tracking-widest">SCROLL</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
