import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, staggerContainer, staggerItem } from '../constants/animations'

const contactCards = [
  {
    icon: <FiMail size={24} />,
    label: 'Email',
    value: 'ravalpratham29@gmail.com',
    href: 'mailto:ravalpratham29@gmail.com',
    description: 'Send me an email anytime',
    color: 'from-blue-500/20 to-primary/10',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-primary/60',
    hoverGlow: 'hover:shadow-primary/20',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10 group-hover:bg-primary/20',
    external: false,
  },
  {
    icon: <FaWhatsapp size={24} />,
    label: 'WhatsApp',
    value: '+91 8866346424',
    href: 'https://wa.me/918866346424',
    description: 'Chat with me on WhatsApp',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    hoverBorder: 'hover:border-green-400/60',
    hoverGlow: 'hover:shadow-green-500/20',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10 group-hover:bg-green-500/20',
    external: true,
  },
  {
    icon: <FiLinkedin size={24} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pratham-r',
    href: 'https://www.linkedin.com/in/pratham-r-703220257',
    description: 'Connect with me professionally',
    color: 'from-blue-600/20 to-blue-500/10',
    borderColor: 'border-blue-600/30',
    hoverBorder: 'hover:border-[#0a66c2]/60',
    hoverGlow: 'hover:shadow-[#0a66c2]/20',
    iconColor: 'text-[#0a66c2]',
    iconBg: 'bg-[#0a66c2]/10 group-hover:bg-[#0a66c2]/20',
    external: true,
  },
  {
    icon: <FiMapPin size={24} />,
    label: 'Location',
    value: 'Gandhinagar, Gujarat, India',
    href: null,
    description: 'Available for remote & on-site',
    color: 'from-purple-500/20 to-violet-500/10',
    borderColor: 'border-purple-500/30',
    hoverBorder: 'hover:border-purple-400/60',
    hoverGlow: 'hover:shadow-purple-500/20',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
    external: false,
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[140px] pointer-events-none"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="section-title mt-2">Contact Me</h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Feel free to reach out via any of the channels below — I'm always open to new opportunities and conversations.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {contactCards.map((card, i) => {
            const Wrapper = card.href ? motion.a : motion.div

            const wrapperProps = card.href
              ? {
                  href: card.href,
                  target: card.external ? '_blank' : undefined,
                  rel: card.external ? 'noopener noreferrer' : undefined,
                }
              : {}

            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                variants={staggerItem}
                whileHover={card.href ? { y: -5, scale: 1.01 } : {}}
                className={`group relative glass-card border ${card.borderColor} ${card.hoverBorder} p-6 overflow-hidden transition-all duration-300 hover:shadow-xl ${card.hoverGlow} ${card.href ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center ${card.iconColor} flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    {card.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                        {card.label}
                      </span>
                      {card.external && (
                        <FiExternalLink size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" />
                      )}
                    </div>
                    <p className={`font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 truncate text-sm sm:text-base`}>
                      {card.value}
                    </p>
                    <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-400 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.5}
        >
          <div className="glass-card border border-green-500/20 px-6 py-4 flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Available for Opportunities</div>
              <div className="text-slate-400 text-xs mt-0.5">
                Actively looking for Frontend Developer & Data Analyst roles — remote or on-site
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
