import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../utils/firebase'
import {
  FiMail, FiLinkedin, FiSend, FiUser, FiMessageSquare,
  FiAlertCircle, FiLoader, FiPhone,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '../constants/animations'

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'ravalpratham29@gmail.com',
    href: 'mailto:ravalpratham29@gmail.com',
    color: 'from-blue-500/20 to-primary/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '+91 8866346424',
    href: 'https://wa.me/918866346424',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    newTab: true,
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Pratham Raval',
    href: 'https://www.linkedin.com/in/pratham-r-703220257',
    color: 'from-blue-600/20 to-blue-500/10',
    borderColor: 'border-blue-600/30',
    newTab: true,
  },
]

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' })
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const validate = () => {
    const e = {}
    if (!formData.name.trim() || formData.name.trim().length < 2)
      e.name = 'Full name is required (min 2 chars)'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Valid email address is required'
    if (!formData.subject.trim() || formData.subject.trim().length < 3)
      e.subject = 'Subject is required (min 3 chars)'
    if (!formData.message.trim() || formData.message.trim().length < 10)
      e.message = 'Message is required (min 10 chars)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.honeypot) return   // bot trap
    if (loading) return
    if (!validate()) return

    setLoading(true)

    try {
      // 1. Send email via EmailJS
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name:    'Pratham Raval',
        from_name:  formData.name,
        from_email: formData.email,
        subject:    formData.subject,
        message:    formData.message,
      })

      if (response.status !== 200) throw new Error('EmailJS failed')

      // 2. Save to Firebase Firestore (best-effort — don't fail UX if Firebase errors)
      try {
        await addDoc(collection(db, 'contacts'), {
          name:      formData.name,
          email:     formData.email,
          subject:   formData.subject,
          message:   formData.message,
          timestamp: serverTimestamp(),
        })
      } catch (fbErr) {
        console.warn('Firestore save failed (non-critical):', fbErr)
      }

      toast.success('Message sent! I\'ll get back to you soon. 🎉', { duration: 5000 })
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
      setErrors({})
    } catch (err) {
      console.error('Contact form error:', err)
      toast.error('Failed to send message. Please try again or email me directly.', { duration: 6000 })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            <h2 className="section-title mt-2">Contact Me</h2>
            <p className="section-subtitle">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left — Contact Info */}
            <motion.div
              className="space-y-6"
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.1}
            >
              <div className="glass-card p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-xl mb-2">Let's Work Together</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    I'm currently open to full-time roles, internships, and freelance projects in
                    Frontend Development and Data Analytics. Whether you're based in India or internationally,
                    I'm ready to contribute and grow with your team.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Open to Work', 'Remote Friendly', 'Relocation Ready', 'Immediate Joiner'].map((tag, i) => (
                      <span key={i} className="skill-badge text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact cards */}
              <motion.div
                className="grid gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.newTab ? '_blank' : undefined}
                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                    variants={staggerItem}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className={`glass-card border ${item.borderColor} p-5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</div>
                        <div className="text-slate-300 text-sm font-medium hover:text-primary transition-colors">{item.value}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Availability */}
              <motion.div
                className="glass-card p-5 border border-green-500/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                  <div>
                    <div className="text-white font-semibold text-sm">Available for Opportunities</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      Actively looking for Frontend Developer & Data Analyst roles
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.2}
            >
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-blue-500/8 pointer-events-none" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

                  {/* Honeypot (invisible to users) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ opacity: 0, position: 'absolute', height: 0, width: 0, zIndex: -1 }}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <FiAlertCircle size={12} />{errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <FiAlertCircle size={12} />{errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Project Collaboration"
                      className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <FiAlertCircle size={12} />{errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare size={16} className="absolute left-3 top-3.5 text-slate-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200 resize-none`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <FiAlertCircle size={12} />{errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={loading ? {} : { scale: 1.02 }}
                    whileTap={loading ? {} : { scale: 0.97 }}
                  >
                    {loading ? (
                      <>
                        <FiLoader size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-slate-600 text-xs text-center">
                    Or reach me via{' '}
                    <a
                      href="https://wa.me/918866346424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      WhatsApp
                    </a>
                    {' '}for a faster response
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
