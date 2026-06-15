import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiLinkedin, FiMail, FiMapPin, FiDownload } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { staggerContainer, staggerItem } from '../constants/animations'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/pratham-r-703220257',
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    color: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10',
  },
  {
    href: 'mailto:ravalpratham29@gmail.com',
    icon: <FiMail size={20} />,
    label: 'Email',
    color: 'hover:text-primary hover:border-primary/50 hover:bg-primary/10',
  },
  {
    href: 'https://wa.me/918866346424',
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    newTab: true,
    color: 'hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden animated-gradient-bg"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Ambient background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Main content — centered */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          className="flex flex-col items-center gap-8 w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Location pill */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
              <FiMapPin size={13} className="text-primary" />
              Gandhinagar, Gujarat, India
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
            variants={staggerItem}
          >
            Pratham{' '}
            <span className="gradient-text">Raval</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            className="text-xl sm:text-2xl font-semibold h-8"
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
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            variants={staggerItem}
          >
            MSc IT graduate passionate about building modern web applications and solving
            business problems through data-driven solutions.
          </motion.p>

          {/* Email address — prominent */}
          <motion.a
            href="mailto:ravalpratham29@gmail.com"
            className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            variants={staggerItem}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <FiMail size={17} />
            </div>
            <span className="text-slate-200 font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
              ravalpratham29@gmail.com
            </span>
          </motion.a>

          {/* Divider */}
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            variants={staggerItem}
          />

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-4"
            variants={staggerItem}
          >
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.newTab || s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200 ${s.color}`}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Download CV */}
          <motion.a
            href="/Pratham-Raval.pdf"
            download
            className="btn-outline text-sm px-6 py-2.5 mt-2"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={16} />
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-primary/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
      </motion.div>
    </section>
  )
}
