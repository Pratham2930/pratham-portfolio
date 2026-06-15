import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiCode, FiDatabase, FiTrendingUp,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '../constants/animations'
import AnimatedCounter from './AnimatedCounter'

const highlights = [
  {
    icon: <FiCode size={22} />,
    title: 'Frontend Development',
    desc: 'Building responsive, modern web apps with React.js, JavaScript, and CSS frameworks.',
    color: 'from-blue-500/20 to-primary/10',
  },
  {
    icon: <FiDatabase size={22} />,
    title: 'Data Analytics',
    desc: 'Transforming raw data into actionable insights using Power BI, Python, and SQL.',
    color: 'from-purple-500/20 to-blue-500/10',
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Problem Solving',
    desc: 'Applying analytical thinking to solve complex business and technical challenges.',
    color: 'from-cyan-500/20 to-blue-500/10',
  },
]

const personalInfo = [
  { icon: <FiUser size={15} />,    label: 'Name',     value: 'Pratham Raval' },
  { icon: <FiMail size={15} />,    label: 'Email',    value: 'ravalpratham29@gmail.com',           href: 'mailto:ravalpratham29@gmail.com' },
  { icon: <FaWhatsapp size={15} />, label: 'WhatsApp', value: '+91 8866346424',                     href: 'https://wa.me/918866346424', newTab: true },
  { icon: <FiMapPin size={15} />,  label: 'Location', value: 'Gandhinagar, Gujarat, India' },
  { icon: <FiLinkedin size={15} />, label: 'LinkedIn', value: 'linkedin.com/in/prathamraval20',    href: 'https://www.linkedin.com/in/pratham-r-703220257', newTab: true },
]

const quickStats = [
  { value: 5, suffix: '+', label: 'Projects' },
  { value: 7, suffix: '',  label: 'Certifications' },
  { value: 14, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '+', label: 'Years Learning' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding bg-dark-card/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">About Me</span>
          <h2 className="section-title mt-2">Who I Am</h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {quickStats.map((s, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="glass-card p-5 text-center hover:border-primary/30 transition-colors duration-300"
            >
              <div className="text-3xl font-black text-primary">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — Bio */}
          <motion.div
            className="space-y-6"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Professional Summary</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm a <span className="text-primary font-semibold">MSc Information Technology</span> graduate
                from CHARUSAT with a strong foundation in both frontend development and data analytics.
                I specialize in building modern, responsive web applications and deriving meaningful insights
                from complex datasets.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With hands-on experience in{' '}
                <span className="text-primary font-semibold">React.js, Python, Power BI</span>, and database
                technologies, I bridge the gap between beautiful user interfaces and data-driven decision
                making. I've completed industry-recognized simulations from{' '}
                <span className="text-primary font-semibold">Deloitte</span> in both Data Analytics and Cyber Security.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I'm actively seeking opportunities where I can contribute my skills in frontend development
                and data analysis to build impactful products for global teams.
              </p>
            </div>

            {/* Personal Info */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Personal Details</h3>
              <div className="space-y-3">
                {personalInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">{item.label}</span>
                      <div className="mt-0.5">
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.newTab ? '_blank' : undefined}
                            rel={item.newTab ? 'noopener noreferrer' : undefined}
                            className="text-slate-300 text-sm hover:text-primary transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-slate-300 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            className="space-y-5"
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card-hover p-6"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-primary/20 flex items-center justify-center text-primary flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick facts */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🎓', text: 'MSc IT Graduate' },
                  { emoji: '💼', text: 'Open to Work' },
                  { emoji: '🌍', text: 'India Based' },
                  { emoji: '🚀', text: 'Fast Learner' },
                  { emoji: '📊', text: 'Data Driven' },
                  { emoji: '⚛️', text: 'React Expert' },
                ].map((fact, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-400"
                    whileHover={{ x: 4, color: '#e2e8f0' }}
                  >
                    <span>{fact.emoji}</span>
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
