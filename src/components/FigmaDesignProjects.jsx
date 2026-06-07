import React from 'react'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiLayers, FiMonitor, FiSmartphone } from 'react-icons/fi'

const figmaProjects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    description: 'A modern mobile shopping experience with intuitive navigation, product discovery, and seamless checkout flow designed for fashion retail.',
    category: 'Mobile App',
    tools: ['Figma'],
    thumbnail: '🛍️',
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/30',
    
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'Clean and professional dashboard interface for analytics platform with data visualization, user management, and real-time metrics.',
    category: 'Dashboard',
    tools: ['Figma'],
    thumbnail: '📊',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
   
  },
  {
    id: 3,
    title: 'Travel Booking Website',
    description: 'Inspiring travel platform with immersive imagery, easy booking flow, and personalized recommendations for adventure seekers.',
    category: 'Website',
    tools: ['Figma'],
    thumbnail: '✈️',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'border-green-500/30',
   
  },
  {
    id: 4,
    title: 'Fitness App Landing Page',
    description: 'High-energy landing page design for fitness application with motivational visuals, clear CTAs, and feature highlights.',
    category: 'Landing Page',
    tools: ['Figma'],
    thumbnail: '💪',
    color: 'from-orange-500/20 to-red-500/10',
    borderColor: 'border-orange-500/30',

  },
  {
    id: 5,
    title: 'Banking Mobile App',
    description: 'Secure and user-friendly banking interface with easy transactions, account overview, and financial management features.',
    category: 'Mobile App',
    tools: ['Figma'],
    thumbnail: '🏦',
    color: 'from-indigo-500/20 to-violet-500/10',
    borderColor: 'border-indigo-500/30',
    
  },
  {
    id: 6,
    title: 'Restaurant Website',
    description: 'Elegant restaurant website design with menu showcase, reservation system, and atmospheric imagery for fine dining.',
    category: 'Website',
    tools: ['Figma'],
    thumbnail: '🍽️',
    color: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'border-amber-500/30',
    
  },
]

function FigmaProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile App':
        return <FiSmartphone size={16} />
      case 'Website':
        return <FiMonitor size={16} />
      default:
        return <FiLayers size={16} />
    }
  }

  return (
    <div
      ref={ref}
      className={`glass-card border ${project.borderColor} overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail Section */}
      <div className={`bg-gradient-to-br ${project.color} p-8 border-b border-white/5 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 flex items-center justify-center">
          <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {project.thumbnail}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-mono text-white/80 font-medium uppercase tracking-wider bg-white/10 backdrop-blur rounded-full border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tools Used */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FiLayers size={13} className="text-primary" />
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Tools Used</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span key={i} className="skill-badge text-xs">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* View Design Button */}
        
      </div>
    </div>
  )
}

export default function FigmaDesignProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="figma-designs" className="section-padding bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">Design Portfolio</span>
            <h2 className="section-title mt-2">UI/UX & Figma Designs</h2>
            <p className="section-subtitle">
              I design intuitive, user-centered digital experiences with a focus on usability, aesthetics, and modern design principles.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {figmaProjects.map((project, i) => (
              <FigmaProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="glass-card inline-flex items-center gap-3 px-6 py-4">
              <FiLayers size={18} className="text-primary" />
              <span className="text-slate-400 text-sm">
                More designs coming soon — exploring new creative possibilities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
