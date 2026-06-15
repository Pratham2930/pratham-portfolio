import { FiMail, FiLinkedin, FiMapPin, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education',      href: '#education' },
  { label: 'Contact',        href: '#contact' },
]

const socialLinks = [
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/pratham-r-703220257', label: 'LinkedIn' },
  { icon: <FiMail size={18} />,     href: 'mailto:ravalpratham29@gmail.com',                 label: 'Email' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/918866346424',                      label: 'WhatsApp' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark-card/50 border-t border-white/5">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo-mark.png"
                alt="Pratham Raval logo"
                className="h-10 w-auto drop-shadow-[0_0_12px_rgba(0,212,255,0.35)]"
              />
              <div>
                <div className="text-white font-bold text-lg">Pratham Raval</div>
                <div className="text-primary text-xs font-medium">Frontend Dev & Data Analyst</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              MSc IT graduate passionate about building modern web applications and
              solving business problems through data-driven solutions.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FiMapPin size={13} className="text-primary" />
              <span>Gandhinagar, Gujarat, India</span>
            </div>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-slate-400 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:ravalpratham29@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-primary text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <FiMail size={14} />
                </div>
                ravalpratham29@gmail.com
              </a>
              <a
                href="https://wa.me/918866346424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-primary text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <FaWhatsapp size={14} />
                </div>
                +91 8866346424 (WhatsApp)
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-r-703220257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-primary text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <FiLinkedin size={14} />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <p className="text-slate-500 text-sm">
            © 2026 Pratham Raval
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors"
          >
            Back to top <FiArrowUp size={14} />
          </button>
        </div>
      </div>

    </footer>
  )
}
