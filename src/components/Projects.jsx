import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiCode, FiLayers } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Fun2Learn Web Application',
    subtitle: 'Interactive Educational Platform',
    description:
      'An interactive educational platform designed to provide an engaging learning experience through a responsive user interface. Features include course management, interactive quizzes, progress tracking, and a modern dashboard for both students and educators.',
    longDesc:
      'Built with a full-stack architecture using React.js for the frontend, Node.js and Express.js for the backend API, and MongoDB for data persistence. The platform features real-time updates, user authentication, and a responsive design that works seamlessly across all devices.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
    icon: '🎓',
    color: 'from-blue-500/20 to-primary/10',
    borderColor: 'border-blue-500/30',
    category: 'Full Stack',
    highlights: [
      'Responsive UI with React.js',
      'RESTful API with Node.js & Express',
      'MongoDB database integration',
      'Interactive learning modules',
    ],
  },
  {
    id: 2,
    title: 'QR-Based Cafe Management System',
    subtitle: 'Smart Cafe Ordering Solution',
    description:
      'A smart cafe management solution that allows customers to place orders through QR codes, eliminating the need for physical menus. Features real-time order tracking, kitchen dashboard, and seamless payment integration.',
    longDesc:
      'Developed using React.js for the web admin panel, React Native for the mobile customer app, Python for backend services, and MySQL for relational data management. The system streamlines the entire ordering process from QR scan to kitchen notification.',
    tech: ['React.js', 'React Native', 'Python', 'MySQL', 'QR Code API'],
    icon: '☕',
    color: 'from-orange-500/20 to-yellow-500/10',
    borderColor: 'border-orange-500/30',
    category: 'Full Stack',
    highlights: [
      'QR code-based ordering system',
      'React Native mobile app',
      'Real-time order management',
      'MySQL database with Python backend',
    ],
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`glass-card border ${project.borderColor} overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${project.color} p-6 border-b border-white/5`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-3xl">
              {project.icon}
            </div>
            <div>
              <span className="text-xs font-mono text-primary/80 font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-white font-bold text-xl mt-0.5">{project.title}</h3>
              <p className="text-slate-400 text-sm">{project.subtitle}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-slate-400 hover:text-primary transition-all duration-200"
              aria-label="View code"
            >
              <FiGithub size={16} />
            </button>
            <button
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-slate-400 hover:text-primary transition-all duration-200"
              aria-label="Live demo"
            >
              <FiExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-5">
        <p className="text-slate-400 text-sm leading-relaxed">
          {expanded ? project.longDesc : project.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FiLayers size={13} className="text-primary" />
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="skill-badge text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm font-medium hover:text-primary-light transition-colors flex items-center gap-1"
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="section-padding bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">My Work</span>
            <h2 className="section-title mt-2">Featured Projects</h2>
            <p className="section-subtitle">
              Real-world applications built with modern technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="glass-card inline-flex items-center gap-3 px-6 py-4">
              <FiCode size={18} className="text-primary" />
              <span className="text-slate-400 text-sm">
                More projects coming soon — currently working on exciting new ideas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
