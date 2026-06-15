import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { staggerContainer, staggerItem, fadeUp } from '../constants/animations'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🖥️',
    color: 'from-blue-500/20 to-primary/10',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'HTML5',             level: 92 },
      { name: 'CSS3',              level: 88 },
      { name: 'JavaScript',        level: 85 },
      { name: 'React.js',          level: 82 },
      { name: 'Bootstrap',         level: 80 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: '📊',
    color: 'from-purple-500/20 to-blue-500/10',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Power BI',           level: 80 },
      { name: 'Tableau',            level: 72 },
      { name: 'Excel',              level: 85 },
      { name: 'Data Visualization', level: 78 },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'Python',     level: 78 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'from-green-500/20 to-blue-500/10',
    borderColor: 'border-green-500/30',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL',   level: 78 },
    ],
  },
]

const techBadges = [
  { name: 'React.js',    icon: '⚛️' },
  { name: 'JavaScript',  icon: '🟨' },
  { name: 'Python',      icon: '🐍' },
  { name: 'Power BI',    icon: '📊' },
  { name: 'HTML5',       icon: '🌐' },
  { name: 'CSS3',        icon: '🎨' },
  { name: 'MongoDB',     icon: '🍃' },
  { name: 'MySQL',       icon: '🐬' },
  { name: 'Tableau',     icon: '📈' },
  { name: 'Bootstrap',   icon: '🅱️' },
  { name: 'Node.js',     icon: '🟢' },
  { name: 'UI Design',   icon: '✏️' },
  { name: 'AI (Basic)',  icon: '🤖' },
  { name: 'ML (Basic)',  icon: '🧠' },
]

function SkillBar({ name, level, inView, delay = 0 }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-primary text-xs font-mono font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: delay + 0.3 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">My Skills</span>
          <h2 className="section-title mt-2">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern web applications and data solutions
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`glass-card p-6 border ${cat.borderColor} hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300`}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                    delay={j * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          className="glass-card p-8"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.4}
        >
          <h3 className="text-white font-bold text-lg mb-6 text-center">All Technologies</h3>
          <motion.div
            className="flex flex-wrap gap-3 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {techBadges.map((tech, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:text-primary text-slate-300 text-sm font-medium transition-all duration-200 cursor-default"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
