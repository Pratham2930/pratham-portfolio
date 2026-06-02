import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin,
  FiSend, FiUser, FiMessageSquare, FiCheckCircle
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
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '+91 8866346424',
    href: 'tel:+918866346424',
    color: 'from-green-500/20 to-blue-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'pratham-r-703220257',
    href: 'www.linkedin.com/in/prathamraval20',
    color: 'from-blue-600/20 to-blue-500/10',
    borderColor: 'border-blue-600/30',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Gandhinagar, Gujarat, India',
    href: null,
    color: 'from-red-500/20 to-orange-500/10',
    borderColor: 'border-red-500/30',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
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
            {/* Left — Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-6">
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

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className={`glass-card border ${item.borderColor} p-4 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-primary mb-3`}>
                      {item.icon}
                    </div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-300 text-sm hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-300 text-sm">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="glass-card p-5 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
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
            <div className="glass-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <FiCheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm py-2 px-5"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <FiUser size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
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
                      required
                      placeholder="Job Opportunity / Project Collaboration"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare size={15} className="absolute left-3 top-3.5 text-slate-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
