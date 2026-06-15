import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'
import { fadeUp } from '../constants/animations'

const education = [
  {
    id: 1,
    degree: 'Master of Science in Information Technology',
    shortDegree: 'MSc IT',
    institution: 'Charotar University of Science and Technology',
    shortInstitution: 'CHARUSAT',
    location: 'Anand, Gujarat, India',
    period: 'June 2024 – May 2026',
    status: 'Completed',
    icon: '🎓',
    color: 'from-blue-600/20 to-primary/10',
    borderColor: 'border-blue-500/30',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    highlights: [
      'Advanced Web Technologies & React.js',
      'Data Analytics & Business Intelligence',
      'Database Management Systems',
      'Software Engineering & System Design',
      'Machine Learning Fundamentals',
      'Cloud Computing & DevOps',
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications',
    shortDegree: 'BCA',
    institution: 'Kadi Sarva Vishwavidyalaya',
    shortInstitution: 'KSV',
    location: 'Gandhinagar, Gujarat, India',
    period: '2021 – 2024',
    status: 'Completed',
    icon: '🏫',
    color: 'from-purple-600/20 to-blue-500/10',
    borderColor: 'border-purple-500/30',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    highlights: [
      'Programming Fundamentals (C, Java, Python)',
      'Web Development (HTML, CSS, JavaScript)',
      'Database Management (MySQL)',
      'Data Structures & Algorithms',
      'Computer Networks & Security',
      'Software Development Life Cycle',
    ],
  },
]

function EduCard({ edu, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group/card relative transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot (desktop) with enhanced glow */}
      <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/50 blur-md rounded-full animate-pulse"></div>
          <div className="relative w-4 h-4 rounded-full bg-primary border-4 border-dark glow-blue-sm" />
        </div>
      </div>

      {/* Premium Glassmorphism Card */}
      <div className={`relative overflow-hidden border ${edu.borderColor} rounded-2xl hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 group-hover/card:border-white/20`}>
        {/* Glassmorphism background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-card/80 to-dark/80 backdrop-blur-xl" />
        
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
        
        {/* Header Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary group-hover/card:scale-x-110 transition-transform duration-700 origin-left" />
        
        {/* Content relative to glass layers */}
        <div className="relative z-10">
          {/* Header */}
          <div className={`bg-gradient-to-br ${edu.color} p-6 border-b border-white/5`}>
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-3xl flex-shrink-0 border border-white/10 group-hover/card:border-primary/30 transition-colors duration-300">
                  {edu.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${edu.badgeColor} shadow-lg`}>
                    {edu.shortDegree}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    edu.status === 'Pursuing'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10'
                      : 'bg-slate-500/10 text-slate-400 border border-slate-500/30 shadow-lg'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-white group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-primary-light group-hover/card:bg-clip-text transition-all duration-500 font-bold text-lg leading-tight">{edu.degree}</h3>
                <p className="text-primary font-semibold text-sm mt-1 group-hover/card:text-primary-light transition-colors">{edu.institution}</p>
                <p className="text-slate-500 text-xs group-hover/card:text-slate-400 transition-colors">{edu.shortInstitution}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2 group/cal">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full opacity-0 group-hover/cal:opacity-100 transition-opacity duration-300"></div>
                  <FiCalendar size={14} className="text-primary relative z-10" />
                </div>
                <span className="group-hover/cal:text-slate-300 transition-colors">{edu.period}</span>
              </div>
              <div className="flex items-center gap-2 group/loc">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full opacity-0 group-hover/loc:opacity-100 transition-opacity duration-300"></div>
                  <FiMapPin size={14} className="text-primary relative z-10" />
                </div>
                <span className="group-hover/loc:text-slate-300 transition-colors">{edu.location}</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">
                Key Subjects
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-400 group/subject hover:text-slate-300 transition-colors">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/50 blur-sm rounded-full opacity-0 group-hover/subject:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 relative z-10" />
                    </div>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-dark">
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="text-primary font-mono text-sm font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Background
            </span>
            <h2 className="section-title mt-4">Education</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="section-subtitle">
              Academic foundation that drives my technical expertise
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced Timeline line (desktop) with glow */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2">
              <div className="absolute inset-0 bg-primary/30 blur-sm" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {education.map((edu, i) => (
                <div key={edu.id} className={i % 2 === 0 ? 'lg:pr-6' : 'lg:pl-6 lg:mt-8'}>
                  <EduCard edu={edu} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Summary with glassmorphism */}
          <div className="mt-12 relative max-w-2xl mx-auto text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative glass-card p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
                <FiBook size={28} className="text-primary relative z-10" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Academic Journey</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                From BCA foundations to MSc IT specialization — building a strong academic base
                in computer science, web technologies, and data analytics to deliver real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
