import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiLayers, FiMonitor, FiSmartphone } from 'react-icons/fi'
import { fadeUp, staggerContainer, staggerItem } from '../constants/animations'

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
    fglink: 'https://www.figma.com/design/o2xW02CrVRouX89G0bwkGK/Shree-Umiya-Fashion?node-id=0-1&t=FF0znRLdabZJ92cQ-1'
    
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
      case 'Mobile App': return <FiSmartphone size={16} />
      case 'Website':    return <FiMonitor size={16} />
      default:           return <FiLayers size={16} />
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className={`glass-card border ${project.borderColor} overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 group`}
    >
      {/* Thumbnail Section */}
      <div className={`bg-gradient-to-br ${project.color} p-8 border-b border-white/5 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            className="text-6xl"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {project.thumbnail}
          </motion.div>
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
    </motion.div>
  )
}

export default function FigmaDesignProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="figma-designs" className="section-padding bg-dark-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            ref={ref}
            className="text-center mb-12 md:mb-16"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">Design Portfolio</span>
            <h2 className="section-title mt-2">UI/UX & Figma Designs</h2>
            <p className="section-subtitle">
              I design intuitive, user-centered digital experiences with a focus on usability, aesthetics, and modern design principles.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {figmaProjects.map((project, i) => (
              <FigmaProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.4}
          >
            <div className="glass-card inline-flex items-center gap-3 px-6 py-4">
              <FiLayers size={18} className="text-primary" />
              <span className="text-slate-400 text-sm">
                More designs coming soon — exploring new creative possibilities
              </span>
            </div>
          </motion.div>
      </div>
    </section>
  )
}
