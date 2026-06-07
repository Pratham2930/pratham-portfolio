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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
    >
      {/* background layers */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] max-w-[120vw] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] max-w-[110vw] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-20 text-center">
        {/* availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </div>

        {/* name */}
        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
          Pratham{' '}
          <span className="bg-gradient-to-r from-primary via-primary-light to-blue-400 bg-clip-text text-transparent">
            Raval
          </span>
        </h1>

        {/* rotating role */}
        <div className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 h-9">
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

        {/* description */}
        <p className="mt-6 mx-auto max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
          MSc IT graduate passionate about building modern web applications and solving
          business problems through data-driven solutions. Based in{' '}
          <span className="text-primary font-medium">Gandhinagar, Gujarat, India</span>.
        </p>

        {/* location */}
        <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <FiMapPin size={14} className="text-primary" />
          <span>Gandhinagar, Gujarat, India</span>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary w-full sm:w-auto justify-center text-base px-8 py-3.5"
          >
            Hire Me <FiArrowRight size={18} />
          </a>
          <a
            href="/Pratham-Raval.pdf"
            download
            className="btn-outline w-full sm:w-auto justify-center text-base px-8 py-3.5"
          >
            <FiDownload size={18} /> Download CV
          </a>
        </div>

        {/* socials */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/prathamraval20"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:ravalpratham29@gmail.com"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href="tel:+918866346424"
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            aria-label="Phone"
          >
            <FiPhone size={18} />
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs font-medium tracking-widest">SCROLL</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
