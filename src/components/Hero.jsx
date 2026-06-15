import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import AnimatedCounter from './AnimatedCounter'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, floatAnimation } from '../constants/animations'

const stats = [
  { label: 'Projects Built', value: 5, suffix: '+' },
  { label: 'Certifications', value: 7, suffix: '' },
  { label: 'Technologies', value: 14, suffix: '+' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-dark overflow-hidden animated-gradient-bg"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl pointer-events-none"
        animate={{ x: [-20, 20, -20], y: [-15, 15, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              variants={staggerItem}
            >
              Pratham{' '}
              <span className="gradient-text">Raval</span>
            </motion.h1>

            {/* Type animation */}
            <motion.div
              className="text-xl md:text-2xl font-semibold text-slate-300 h-8"
              variants={staggerItem}
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer',  2000,
                  'Data Analyst',        2000,
                  'React.js Developer',  2000,
                  'UI/UX Enthusiast',    2000,
                  'Problem Solver',      2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
              variants={staggerItem}
            >
              MSc IT graduate passionate about building modern web applications and solving
              business problems through data-driven solutions. Based in{' '}
              <span className="text-primary font-medium">Gandhinagar, Gujarat, India</span>.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-slate-500 text-sm"
              variants={staggerItem}
            >
              <FiMapPin size={14} className="text-primary" />
              <span>Gandhinagar, Gujarat, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              variants={staggerItem}
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary text-base px-8 py-3.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me <FiArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/Pratham-Raval.pdf"
                download
                className="btn-outline text-base px-8 py-3.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload size={18} /> Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              variants={staggerItem}
            >
              <span className="text-slate-500 text-sm">Find me on:</span>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.linkedin.com/in/pratham-r-703220257', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                  { href: 'mailto:ravalpratham29@gmail.com', icon: <FiMail size={18} />, label: 'Email' },
                  { href: 'https://wa.me/918866346424', icon: <FaWhatsapp size={18} />, label: 'WhatsApp', newTab: true },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.newTab || s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5"
              variants={staggerItem}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-primary">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating decorative panel */}
          <motion.div
            className="flex items-center justify-center relative"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 rounded-3xl backdrop-blur-sm border border-white/5" />

            {/* Floating card 1 */}
            <motion.div
              className="absolute top-8 -left-6 glass-card px-4 py-3 flex items-center gap-3 z-10 shadow-xl"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-sm">✓</span>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Open to Work</div>
                <div className="text-slate-500 text-[10px]">Immediate Joiner</div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              className="absolute bottom-8 -right-6 glass-card px-4 py-3 flex items-center gap-3 z-10 shadow-xl"
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm">⚛️</span>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">React Developer</div>
                <div className="text-slate-500 text-[10px]">MSc IT Graduate</div>
              </div>
            </motion.div>

            {/* Center logo / avatar area */}
            <motion.div
              className="relative z-10 w-56 h-56 flex items-center justify-center"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-blue-500/10 border border-primary/30 flex items-center justify-center animate-pulse-glow">
                <div className="text-center">
                  <div className="text-5xl mb-2">👨‍💻</div>
                  <div className="text-primary font-mono font-bold text-lg">PR</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative orbs */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl"
              animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
      </motion.div>
    </section>
  )
}
