import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import {
  FiMail, FiLinkedin, FiSend, FiUser, FiMessageSquare,
  FiCheckCircle, FiAlertCircle, FiLoader
} from 'react-icons/fi'


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
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Pratham Raval',
    href: 'https://www.linkedin.com/in/prathamraval20',
    color: 'from-blue-600/20 to-blue-500/10',
    borderColor: 'border-blue-600/30',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [avatarEmotion, setAvatarEmotion] = useState('sleep')

  // Update avatar emotion based on form state
  useEffect(() => {
    if (inView) {
      setAvatarEmotion('friendly')
    }
  }, [inView])

  useEffect(() => {
    if (status === 'success') {
      setAvatarEmotion('success')
      setTimeout(() => setAvatarEmotion('sleep'), 3000)
    } else if (loading) {
      setAvatarEmotion('thinking')
    }
  }, [status, loading])

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check - if filled, it's a bot
    //if (formData.honeypot) {
      //console.log('Bot detected via honeypot')
      //return
    //}

    // Prevent duplicate submissions
    if (isSubmitting) return

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setLoading(true)
    setStatus(null)

    try {
      const templateParams = {
        to_name: 'Pratham Raval',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        setStatus('success')
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
      setIsSubmitting(false)
    }
  }

  const handleSendAnother = () => {
    setSubmitted(false)
    setStatus(null)
    setErrors({})
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-mono text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            <h2 className="section-title mt-2">Contact Me</h2>
            <p className="section-subtitle">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left — Contact Info & Avatar */}
            <div className="space-y-6">
              {/* AI Avatar Display */}
              

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

              <div className="grid sm:grid-cols-1 gap-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`glass-card border ${item.borderColor} p-5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden`}
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
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="glass-card p-5 border border-green-500/20 relative overflow-hidden">
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
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />
              <div className="absolute inset-0 border border-gradient-to-r from-primary/20 via-transparent to-blue-500/20 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                {submitted && status === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center holographic">
                      <FiCheckCircle size={40} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-2">Message Sent Successfully!</h3>
                      <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you! Your message has been sent successfully. I will get back to you soon.
                      </p>
                    </div>
                    <button
                      onClick={handleSendAnother}
                      className="btn-outline text-sm py-2.5 px-6 hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : submitted && status === 'error' ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                      <FiAlertCircle size={40} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-2">Something Went Wrong</h3>
                      <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Something went wrong. Please try again later.
                      </p>
                    </div>
                    <button
                      onClick={handleSendAnother}
                      className="btn-outline text-sm py-2.5 px-6 hover:shadow-lg hover:shadow-primary/20"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

                    {/* Honeypot field - hidden from users but visible to bots */}
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
                            className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <FiAlertCircle size={12} />
                            {errors.name}
                          </p>
                        )}
                      </div>
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
                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <FiAlertCircle size={12} />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

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
                        className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200`}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <FiAlertCircle size={12} />
                          {errors.subject}
                        </p>
                      )}
                    </div>

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
                          className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 focus:shadow-lg focus:shadow-primary/10 transition-all duration-200 resize-none`}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <FiAlertCircle size={12} />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
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
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
