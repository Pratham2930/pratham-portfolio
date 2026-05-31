import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink, FiCheckCircle, FiLinkedin, FiX, FiDownload } from 'react-icons/fi'

// High-fidelity typographic Deloitte wordmark with brand precision
const DeloitteLogo = ({ className = "h-5 w-auto" }) => (
  <svg viewBox="0 0 450 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Deloitte Logo">
    <path d="M37.6 22.4v75.2h28.2c27.1 0 44.5-16.7 44.5-37.6S92.9 22.4 65.8 22.4H37.6zm19.8 17.6h7.6c14.6 0 24.3 8.7 24.3 20s-9.7 20-24.3 20h-7.6V40zm73.9 31.8c0-18.7 13.9-31.2 32.7-31.2 18.5 0 31.5 12.5 31.5 30.5v2.8h-44.5c1.4 10.1 8.7 15.6 19.1 15.6 7.6 0 13.5-3.5 15.6-7.3h19.1c-3.8 13.9-16.3 24.3-34.7 24.3-20.5 0-33.8-13.9-33.8-34.7zm44.5-6.6c-.7-8.3-6.6-13.2-12.8-13.2-6.6 0-11.8 4.9-12.5 13.2h25.3zM218 19.3v78.3h19.1V19.3H218zm27.8 41.3c0-20.5 14.2-34.7 34-34.7 19.8 0 34 14.2 34 34.7 0 20.5-14.2 34.7-34 34.7-19.8 0-34-14.2-34-34.7zm48.7 0c0-10.8-6.3-17.7-14.6-17.7s-14.6 6.9-14.6 17.7 6.3 17.7 14.6 17.7 14.6-6.9 14.6-17.7zm45.9-16.7v53.7h19.1V43.9h-19.1zm0-17.7v10.8h19.1V26.2h-19.1zm27.1 27.8V43.9h-10.8v-10h10.8V19.3h19.1v14.6h14.9v10h-14.9v28.8c0 5.6 2.8 8.3 8.3 8.3.7 0 1.4 0 2.1-.3v10.8c-1.7.3-3.8.3-5.6.3-13.9.4-23.9-6.9-23.9-20.8zm39.6 0V43.9H394v-10h10.8V19.3h19.1v14.6h14.9v10h-14.9v28.8c0 5.6 2.8 8.3 8.3 8.3.7 0 1.4 0 2.1-.3v10.8c-1.7.3-3.8.3-5.6.3-13.9.4-23.9-6.9-23.9-20.8zm45.1 7.3c0-18.7 13.9-31.2 32.7-31.2 18.5 0 31.5 12.5 31.5 30.5v2.8H410c1.4 10.1 8.7 15.6 19.1 15.6 7.6 0 13.5-3.5 15.6-7.3H464c-3.8 13.9-16.3 24.3-34.7 24.3-20.5.4-33.8-13.5-33.8-34.3zm44.5-6.6c-.7-8.3-6.6-13.2-12.8-13.2-6.6 0-11.8 4.9-12.5 13.2h25.3z" fill="currentColor" />
    <circle cx="478.5" cy="85.5" r="12.5" fill="#86BC25" />
  </svg>
)

const certifications = [
  {
    id: 1,
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte (Forage)',
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
    id: 2,
    title: 'Deloitte Cyber Job Simulation',
    issuer: 'Deloitte (Forage)',
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
    badge: 'Completed',
    description:
      'Completed comprehensive training on generative AI fundamentals, including machine learning concepts, prompt engineering, and AWS AI/ML services.',
    skills: ['Generative AI', 'Machine Learning', 'AWS AI/ML', 'Prompt Engineering'],
    path: '/cert-aws-genai.svg',
    color: 'from-orange-600/10 to-amber-500/5',
    borderColor: 'hover:border-orange-500/40',
    accentColor: 'orange',
  },
]

// Premium Modal component to view credentials with rich styling & controls
function CertificateModal({ isOpen, onClose, cert }) {
  if (!isOpen || !cert) return null

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
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-50"></div>
              <div className="relative text-white max-w-[120px] flex items-center">
                <DeloitteLogo className="h-5 w-auto" />
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-slate-600 text-sm">|</span>
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
              Verified Credential via Deloitte x Forage platform
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a 
              href={cert.path} 
              download
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-semibold text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
            >
              <FiDownload size={15} />
              Download SVG
            </a>
            <a 
              href={cert.path} 
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
        {/* Top bar with logo and badge */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            <div className="relative text-slate-400 group-hover/card:text-white transition-colors max-w-[110px] flex items-center">
              <DeloitteLogo className="h-5 w-auto" />
            </div>
          </div>
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

          {/* Redesigned Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {certifications.map((cert, i) => (
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
                <span className="text-3xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">2</span>
                <span className="text-slate-500 text-xs font-mono">Job Simulations</span>
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
