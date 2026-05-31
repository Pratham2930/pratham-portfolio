import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
  FiGithub, FiLinkedin, FiMail, FiPhone,
  FiDownload, FiArrowRight, FiMapPin
} from 'react-icons/fi'

const stats = [
  { value: 2, suffix: '+', label: 'Projects Built' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '', label: 'Certifications' },
  { value: 1, suffix: '+', label: 'Years Experience' },
]

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            {/* Badge */}
           

            {/* Name */}
            <div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Pratham
                <span className="block gradient-text">Raval</span>
              </h1>
            </div>

            {/* Typing animation */}
            <div className="text-xl md:text-2xl font-semibold text-slate-300 h-8">
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'Data Analyst', 2000,
                  'React.js Developer', 2000,
                  'UI/UX Enthusiast', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              MSc IT graduate passionate about building modern web applications and
              solving business problems through data-driven solutions. Based in{' '}
              <span className="text-primary font-medium">Gandhinagar, Gujarat, India</span>.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FiMapPin size={14} className="text-primary" />
              <span>Gandhinagar, Gujarat, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary text-base px-8 py-3.5"
              >
                Hire Me <FiArrowRight size={18} />
              </a>
              <a href="/Pratham-Raval.pdf" download className="btn-outline text-base px-8 py-3.5">
                <FiDownload size={18} /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-slate-500 text-sm">Find me on:</span>
              <div className="flex gap-3">
                <a
                  href="www.linkedin.com/in/prathamraval20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="mailto:ravalpratham29@gmail.com"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Email"
                >
                  <FiMail size={18} />
                </a>
                <a
                  href="tel:+918866346424"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  aria-label="Phone"
                >
                  <FiPhone size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-black gradient-text">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400 text-xs mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs font-medium tracking-widest">SCROLL</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
