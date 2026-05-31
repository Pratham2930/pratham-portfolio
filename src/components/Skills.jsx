import React, { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🖥️',
    color: 'from-blue-500/20 to-primary/10',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 82 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: '📊',
    color: 'from-purple-500/20 to-blue-500/10',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Power BI', level: 80 },
      { name: 'Tableau', level: 72 },
      { name: 'Excel', level: 85 },
      { name: 'Data Visualization', level: 78 },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'Python', level: 78 },
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
      { name: 'MySQL', level: 78 },
    ],
  },
]

const techBadges = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Power BI', icon: '📊' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Tableau', icon: '📈' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'UI Design', icon: '✏️' },
  { name: 'AI (Basic)', icon: '🤖' },
  { name: 'ML (Basic)', icon: '🧠' },
]

function SkillBar({ name, level, inView }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-primary text-xs font-mono font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: '0.3s',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">My Skills</span>
            <h2 className="section-title mt-2">Technical Expertise</h2>
            <p className="section-subtitle">
              A comprehensive toolkit for building modern web applications and data solutions
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className={`glass-card p-6 border ${cat.borderColor} hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <SkillBar key={j} name={skill.name} level={skill.level} inView={inView} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="glass-card p-8">
            <h3 className="text-white font-bold text-lg mb-6 text-center">All Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {techBadges.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:text-primary text-slate-300 text-sm font-medium transition-all duration-200 cursor-default"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
