import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink, FiCheckCircle, FiLinkedin, FiX, FiDownload, FiStar, FiTrendingUp, FiCpu } from 'react-icons/fi'


// Helper function to extract provider name from issuer field
const getProviderName = (issuer) => {
  if (!issuer) return 'Unknown'
  
  const lowerIssuer = issuer.toLowerCase()
  
  if (lowerIssuer.includes('deloitte')) return 'Deloitte'
  if (lowerIssuer.includes('aws')) return 'AWS'
  if (lowerIssuer.includes('google')) return 'Google'
  if (lowerIssuer.includes('coursera')) return 'Coursera'
  if (lowerIssuer.includes('simplilearn')) return 'Simplilearn'
  
  // If no specific provider found, return the first word of issuer
  return issuer.split(' ')[0]
}


function FeaturedBadge({ cert, index, onViewCertificate }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group/featured relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Premium Glassmorphism Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-600/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl transition-all duration-500 group-hover/featured:border-blue-400/50" />
      
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/featured:opacity-100 transition-opacity duration-700" />
      
      {/* Header Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 group-hover/featured:scale-x-110 transition-transform duration-700 origin-left" />
      
      {/* Certification Highlight Ribbon */}
      <div className="absolute -top-3 -right-3 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-full" />
          <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-4 py-1.5 rounded-lg shadow-xl shadow-blue-500/30 flex items-center gap-2">
            <FiStar size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-wide">FEATURED</span>
          </div>
        </div>
      </div>
      
      {/* Content relative to glass layers */}
      <div className="relative z-10 p-8 flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex-1 min-w-0">
        {/* Top bar with badges */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-wider uppercase font-extrabold px-3 py-1.5 rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 shadow-lg shadow-blue-500/20">
              {cert.badge}
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
              {cert.level}
            </span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <FiCpu size={16} />
            <span className="text-xs font-mono font-semibold">{cert.category}</span>
          </div>
        </div>

        {/* Google Cloud Branding */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <FiAward size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl leading-tight group-hover/featured:text-transparent group-hover/featured:bg-gradient-to-r group-hover/featured:from-white group-hover/featured:to-cyan-300 group-hover/featured:bg-clip-text transition-all duration-500">
              {cert.title}
            </h3>
            <p className="text-blue-300 text-sm font-semibold mt-1">{cert.issuer}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover/featured:text-slate-200 transition-colors">
          {cert.description}
        </p>

        {/* Skills Gained Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <FiTrendingUp size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Skills Gained</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-blue-500/10 text-blue-200 border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Completion Status */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/40">
            <FiCheckCircle size={16} className="text-green-400" />
          </div>
          <div className="flex-1">
            <div className="text-white text-sm font-semibold">Successfully Completed</div>
            <div className="text-slate-400 text-xs">{cert.date}</div>
          </div>
          <div className="text-right">
            <div className="text-blue-300 text-xs font-mono">Verified</div>
            <div className="text-slate-500 text-[10px]">Google Cloud</div>
          </div>
        </div>
        </div>

        {/* Badge thumbnail */}
        <div className="w-full lg:w-80 shrink-0">
          <div
            onClick={onViewCertificate}
            className="group/thumb relative rounded-2xl overflow-hidden border border-blue-400/30 bg-white cursor-pointer shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
          >
            <img
              src={cert.path}
              alt={`${cert.title} badge`}
              loading="lazy"
              className="w-full h-auto object-contain group-hover/thumb:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover/thumb:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 border border-blue-400/50 text-white px-4 py-2.5 rounded-xl text-xs font-bold">
                <FiExternalLink size={15} />
                View Badge
              </span>
            </div>
          </div>
          <button
            onClick={onViewCertificate}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.97]"
          >
            <FiAward size={16} />
            View Certificate
          </button>
        </div>
      </div>
    </div>
  )
}


const certifications = [
  {
    id: 1,
    title: 'Engineer AI Agents with Agent Development Kit (ADK)',
    issuer: 'Google Cloud',
    date: '2024',
    credentialLink: '/models/engineer-ai-agents-with-agent-development-kit-adk.png',
    badge: 'Google Cloud Certified Skill Badge',
    description:
      'Successfully completed Google\'s Engineer AI Agents with Agent Development Kit (ADK) Skill Badge, demonstrating practical knowledge of AI agent development, agent orchestration, prompt engineering, and modern AI application workflows using Google Cloud technologies.',
    skills: ['AI Agents', 'Agent Development Kit (ADK)', 'Prompt Engineering', 'Artificial Intelligence', 'Google Cloud', 'Agent Orchestration', 'Generative AI'],
    path: '/models/engineer-ai-agents-with-agent-development-kit-adk.png',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'hover:border-blue-500/40',
    accentColor: 'blue',
    featured: true,
    level: 'Intermediate',
    category: 'Artificial Intelligence',
  },
  {
    id: 2,
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte (Forage)',
    date: '2024',
    credentialLink: '/cert-data-analytics.svg',
    badge: 'Completed Successfully',
    description:
      'Completed practical tasks involving data analysis, data visualization, business insights, and analytical problem-solving using real-world business scenarios.',
    skills: ['Data Analytics', 'Power BI', 'Data Visualization', 'Business Insights'],
    path: '/cert-data-analytics.svg',
    color: 'from-blue-600/10 to-primary/5',
    borderColor: 'hover:border-blue-500/40',
    accentColor: 'blue',
  },
  {
    id: 7,
    title: 'Deloitte Cyber Job Simulation',
    issuer: 'Deloitte (Forage)',
    date: '2024',
    credentialLink: '/cert-cyber-security.svg',
    badge: 'Completed Successfully',
    description:
      'Completed cybersecurity-focused tasks involving risk assessment, threat analysis, security awareness, and cyber security best practices.',
    skills: ['Cyber Security', 'Risk Assessment', 'Threat Analysis', 'Security Awareness'],
    path: '/cert-cyber-security.svg',
    color: 'from-blue-600/10 to-indigo-500/5',
    borderColor: 'hover:border-indigo-500/40',
    accentColor: 'indigo',
  },
  {
    id: 3,
    title: 'Fundamentals of Generative AI',
    issuer: 'AWS Training & Certification',
    date: '2024',
    credentialLink: '/Aws Ai Fundamental certificate_page-0001.jpg',
    badge: 'Completed',
    description:
      'Completed comprehensive training on generative AI fundamentals, including machine learning concepts, prompt engineering, and AWS AI/ML services.',
    skills: ['Generative AI', 'Machine Learning', 'AWS AI/ML', 'Prompt Engineering'],
    path: '/Aws Ai Fundamental certificate_page-0001.jpg',
    color: 'from-orange-600/10 to-amber-500/5',
    borderColor: 'hover:border-orange-500/40',
    accentColor: 'orange',
  },
  {
    id: 4,
    title: 'Create a Website with Mailchimp',
    issuer: 'Coursera',
    date: 'September 2025',
    credentialLink: '/create-website-mailchimp.jpeg',
    badge: 'Project Certificate',
    description:
      'Completed a hands-on project building a website using Mailchimp integration, learning email marketing automation, landing page design, and audience management.',
    skills: ['Mailchimp', 'Website Development', 'Email Marketing', 'Landing Pages'],
    path: '/create-website-mailchimp.jpeg',
    color: 'from-green-600/10 to-emerald-500/5',
    borderColor: 'hover:border-green-500/40',
    accentColor: 'green',
  },
  {
    id: 5,
    title: 'Foundations of Data Science',
    issuer: 'Google via Coursera',
    date: 'May 2026',
    credentialLink: '/foundations-data-science.jpeg',
    badge: 'Course Certificate',
    description:
      'Completed comprehensive training on data science fundamentals, including statistical analysis, data visualization, machine learning basics, and real-world data applications.',
    skills: ['Data Science', 'Statistics', 'Machine Learning', 'Data Visualization'],
    path: '/foundations-data-science.jpeg',
    color: 'from-purple-600/10 to-violet-500/5',
    borderColor: 'hover:border-purple-500/40',
    accentColor: 'purple',
  },
  {
    id: 6,
    title: 'AI & Deep Learning Concepts and Applications',
    issuer: 'Simplilearn via Coursera',
    date: 'October 2025',
    credentialLink: '/ai-deep-learning.jpeg',
    badge: 'Course Certificate',
    description:
      'Completed advanced training on artificial intelligence and deep learning concepts, including neural networks, TensorFlow, computer vision, and NLP applications.',
    skills: ['AI', 'Deep Learning', 'Neural Networks', 'TensorFlow'],
    path: '/ai-deep-learning.jpeg',
    color: 'from-pink-600/10 to-rose-500/5',
    borderColor: 'hover:border-pink-500/40',
    accentColor: 'pink',
  },
]

// Premium Modal component to view credentials with rich styling & controls
function CertificateModal({ isOpen, onClose, cert }) {
  if (!isOpen || !cert) return null

  const providerName = getProviderName(cert.issuer)

  // Lock scrolling on main page and handle Escape key close
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Premium dimmed glass background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/90 to-blue-950/90 backdrop-blur-xl transition-opacity duration-500 cursor-pointer animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Card with enhanced glassmorphism */}
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-dark-card/95 to-dark/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 flex flex-col max-h-[90vh] z-10 animate-slide-up backdrop-blur-2xl">
        
        {/* Premium Header with gradient accent */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-gradient-to-r from-dark/80 to-dark-card/80">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-slate-200 text-sm font-semibold truncate max-w-md">{cert.title}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Enhanced SVG Display Viewport */}
        <div className="flex-1 overflow-auto p-6 sm:p-10 bg-gradient-to-br from-slate-950/80 to-dark/80 flex items-center justify-center min-h-[300px]">
          <div className="relative w-full max-w-4xl aspect-[800/560] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#0a0f1e] to-[#0d1526]">
            {/* Ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5 pointer-events-none"></div>
            <img 
              src={cert.path} 
              alt={cert.title} 
              loading="lazy"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        {/* Enhanced Footer controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-white/5 bg-gradient-to-r from-dark/80 to-dark-card/80">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="absolute inset-0 bg-emerald-500/50 blur-md rounded-full animate-pulse"></span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Verified Credential via {providerName}
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a 
              href={cert.credentialLink} 
              download
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-semibold text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
            >
              <FiDownload size={15} />
              Download
            </a>
            <a 
              href={cert.credentialLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-blue-500 hover:from-primary-light hover:to-blue-400 text-white font-semibold text-xs transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <FiExternalLink size={15} />
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function CertCard({ cert, index, onViewCertificate }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const providerName = getProviderName(cert.issuer)

  return (
    <div
      ref={ref}
      className={`group/card relative overflow-hidden flex flex-col h-full transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Premium Glassmorphism Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-card/80 to-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover/card:border-white/20 group-hover/card:border-primary/30" />
      
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
      
      {/* Header Accent Bar with animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary group-hover/card:scale-x-110 transition-transform duration-700 origin-left" />
      
      {/* Content relative to glass layers */}
      <div className="relative z-10 p-6 flex-1 flex flex-col">
        {/* Top bar with badge */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <span className="text-[10px] tracking-wider uppercase font-extrabold px-3 py-1.5 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-primary/10 text-primary-light shadow-lg shadow-blue-500/10">
            {cert.badge}
          </span>
        </div>

        {/* Title with hover effect */}
        <h3 className="text-white group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-primary-light group-hover/card:bg-clip-text transition-all duration-500 font-bold text-lg leading-snug mb-1.5">
          {cert.title}
        </h3>
        <p className="text-slate-500 text-xs font-mono mb-5 group-hover/card:text-slate-400 transition-colors">{cert.issuer}</p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover/card:text-slate-300 transition-colors">
          {cert.description}
        </p>

        {/* Enhanced Thumbnail Preview Area */}
        <div 
          onClick={onViewCertificate}
          className="relative rounded-2xl overflow-hidden border border-white/10 group/thumb aspect-[16/11] bg-gradient-to-br from-slate-950 to-dark flex items-center justify-center cursor-pointer mb-6 shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
        >
          {/* Certificate Image with enhanced hover */}
          <img 
            src={cert.path} 
            alt={`${cert.title} Thumbnail`} 
            loading="lazy"
            className="w-full h-full object-cover opacity-85 group-hover/thumb:opacity-100 group-hover/thumb:scale-[1.05] transition-all duration-700" 
          />
          
          {/* Premium gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-all duration-500" />
          
          {/* Enhanced hover overlay with blur */}
          <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover/thumb:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-gradient-to-r from-primary/30 to-blue-500/30 border border-primary/50 text-white px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transform translate-y-6 group-hover/thumb:translate-y-0 transition-all duration-400 shadow-2xl shadow-primary/30 hover:scale-105">
              <FiExternalLink size={16} />
              <span>Expand Preview</span>
            </div>
          </div>
          
          {/* Corner accent */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-all duration-500 transform scale-0 group-hover/thumb:scale-100">
            <FiAward size={14} className="text-primary-light" />
          </div>
        </div>

        {/* Skills Gained Section */}
        <div className="mt-auto pt-5 border-t border-white/5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3">
            Skills Gained
          </span>
          <div className="flex flex-wrap gap-2 mb-6">
            {cert.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-white/[0.03] text-slate-300 border border-white/10 hover:border-primary/40 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <button 
          onClick={onViewCertificate}
          className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] hover:from-primary hover:to-blue-500 border border-white/15 hover:border-primary text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97] group-hover/card:shadow-primary/20"
        >
          <FiAward size={16} className="group-hover/card:animate-pulse" />
          View Certificate
          <FiExternalLink size={13} className="opacity-60 group-hover/card:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  )
}

function LinkedInCard({ index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group/card relative overflow-hidden flex flex-col h-full transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Premium Glassmorphism Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-card/80 to-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover/card:border-white/20 group-hover/card:border-blue-500/40" />
      
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-[#0a66c2]/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
      
      {/* Header Accent Bar with animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#0a66c2] to-blue-500 group-hover/card:scale-x-110 transition-transform duration-700 origin-left" />
      
      {/* Content relative to glass layers */}
      <div className="relative z-10 p-6 flex-1 flex flex-col">
        {/* Top bar with connect indicator */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="text-slate-400 group-hover/card:text-white transition-colors flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
            <div className="relative">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="absolute inset-0 bg-blue-500/50 blur-md rounded-full animate-pulse"></span>
            </div>
            Professional Link
          </div>
          <span className="text-[10px] tracking-wider uppercase font-extrabold px-3 py-1.5 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-[#0a66c2]/10 text-blue-400 shadow-lg shadow-blue-500/10">
            Active Connection
          </span>
        </div>

        {/* Title with hover effect */}
        <h3 className="text-white group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-blue-400 group-hover/card:bg-clip-text transition-all duration-500 font-bold text-lg leading-snug mb-1.5">
          Connect With Me
        </h3>
        <p className="text-slate-500 text-xs font-mono mb-5 group-hover/card:text-slate-400 transition-colors">linkedin.com/in/pratham-r</p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover/card:text-slate-300 transition-colors">
          Let's build something amazing together! Connect on LinkedIn to discuss frontend development, data analytics, or global career opportunities.
        </p>

        {/* Enhanced Visual Orb Ring Animation Area */}
        <div className="my-auto py-6 flex items-center justify-center relative group/orbit min-h-[180px]">
          {/* Enhanced glowing aura circles */}
          <div className="absolute w-28 h-28 rounded-full bg-blue-500/10 border border-blue-500/20 animate-ping opacity-30"></div>
          <div className="absolute w-32 h-32 rounded-full border border-blue-500/10 animate-spin-slow"></div>
          <div className="absolute w-40 h-40 rounded-full border border-blue-500/5 rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute w-48 h-48 rounded-full border border-blue-500/5 rotate-90 animate-spin-slow" style={{ animationDuration: '12s' }}></div>
          
          {/* Enhanced glowing central orb */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0a66c2]/15 to-blue-500/10 border border-[#0a66c2]/40 flex items-center justify-center shadow-2xl shadow-[#0a66c2]/20 group-hover/orbit:bg-[#0a66c2]/25 group-hover/orbit:border-[#0a66c2]/60 group-hover/orbit:scale-110 transition-all duration-500 backdrop-blur-sm">
            <FiLinkedin size={40} className="text-[#0a66c2] group-hover/orbit:text-blue-400 transition-colors" />
          </div>
          
          {/* Particle effects */}
          <div className="absolute w-2 h-2 rounded-full bg-blue-500/50 animate-pulse" style={{ top: '20%', left: '30%' }}></div>
          <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-pulse" style={{ bottom: '25%', right: '25%', animationDelay: '0.5s' }}></div>
          <div className="absolute w-1 h-1 rounded-full bg-blue-500/30 animate-pulse" style={{ top: '40%', right: '20%', animationDelay: '1s' }}></div>
        </div>

        {/* Global Opportunities & Quick Indicators */}
        <div className="mt-auto pt-5 border-t border-white/5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3">
            Key Highlights
          </span>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-blue-500/5 text-slate-300 border border-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <span className="text-base">🇬🇧</span> UK & International Ready
            </span>
            <span className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-blue-500/5 text-slate-300 border border-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <FiCheckCircle size={12} className="text-blue-400" /> Fast Response
            </span>
          </div>
        </div>

        {/* Enhanced CTA Link Button */}
        <a 
          href="https://www.linkedin.com/in/pratham-r-703220257" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-[#0a66c2] to-blue-600 hover:from-blue-500 hover:via-blue-500 hover:to-blue-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.97] group-hover/card:shadow-blue-500/25"
        >
          <FiLinkedin size={16} className="group-hover/card:animate-bounce" />
          View LinkedIn Profile
          <FiExternalLink size={13} className="opacity-80 group-hover/card:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  )
}

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCert, setActiveCert] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openCertModal = (cert) => {
    setActiveCert(cert)
    setIsModalOpen(true)
  }

  const closeCertModal = () => {
    setIsModalOpen(false)
    setActiveCert(null)
  }

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-dark">
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-mono text-sm font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Credentials & Network
            </span>
            <h2 className="section-title mt-4">Certifications & Professional Links</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
            <p className="section-subtitle">
              Industry-recognized simulation benchmarks and direct connection pathways to expand opportunities.
            </p>
          </div>

          {/* Featured Badge Section */}
          <div className="mb-12">
            <FeaturedBadge 
              cert={certifications[0]} 
              index={0} 
              onViewCertificate={() => openCertModal(certifications[0])} 
            />
          </div>

          {/* Redesigned Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {certifications.slice(1).map((cert, i) => (
              <CertCard 
                key={cert.id} 
                cert={cert} 
                index={i} 
                onViewCertificate={() => openCertModal(cert)} 
              />
            ))}
            
            {/* Third Column: LinkedIn Profile Link Card */}
            <LinkedInCard index={2} />
          </div>

          {/* Interactive Deloitte Badge Overlay */}
          <div className="mt-16 text-center">
            <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-5 border-white/10 hover:border-primary/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <FiAward size={22} className="text-primary-light" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Deloitte Job Simulation Certified</div>
                <div className="text-slate-400 text-xs">2 Modules Successfully Completed via Forage Platform</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{certifications.length}</span>
                <span className="text-slate-500 text-xs font-mono">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Certificate Viewer Modal */}
      <CertificateModal 
        isOpen={isModalOpen} 
        onClose={closeCertModal} 
        cert={activeCert} 
      />
    </section>
  )
}
