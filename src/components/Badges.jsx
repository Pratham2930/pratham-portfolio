import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer, staggerItem } from '../constants/animations'

const badges = [
  {
    id: 1,
    title: 'Google Cloud Innovator',
    description: 'Recognized as a Google Cloud Innovator for contributions and expertise in Google Cloud technologies.',
    image: '/Google Cloud Innovator.svg',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'hover:shadow-blue-500/20',
    accentColor: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Google Skills',
    description: 'Demonstrated proficiency across Google tools, platforms, and developer ecosystems.',
    image: '/Google Skills.svg',
    color: 'from-primary/20 to-blue-500/10',
    borderColor: 'border-primary/30',
    glowColor: 'hover:shadow-primary/20',
    accentColor: 'text-primary',
  },
  {
    id: 3,
    title: 'Google Developer Group Member',
    description: 'Active member of the global Google Developer Groups community promoting innovation and learning.',
    image: '/Google Developer Group member.svg',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    glowColor: 'hover:shadow-green-500/20',
    accentColor: 'text-green-400',
  },
  {
    id: 4,
    title: 'GDG Ahmedabad Member',
    description: 'Member of GDG Ahmedabad — a vibrant tech community in Gujarat fostering developer growth.',
    image: '/GDG Ahmedabad Member.svg',
    color: 'from-orange-500/20 to-amber-500/10',
    borderColor: 'border-orange-500/30',
    glowColor: 'hover:shadow-orange-500/20',
    accentColor: 'text-orange-400',
  },
  {
    id: 5,
    title: 'GDG Vancouver Member',
    description: 'Member of GDG Vancouver — connecting with developers and tech enthusiasts across Canada.',
    image: '/GDG Vancouver Member.svg',
    color: 'from-red-500/20 to-rose-500/10',
    borderColor: 'border-red-500/30',
    glowColor: 'hover:shadow-red-500/20',
    accentColor: 'text-red-400',
  },
  {
    id: 6,
    title: 'GDG Lleida Member',
    description: 'Member of GDG Lleida — engaging with the Spanish developer community on Google technologies.',
    image: '/GDG Lleida Member.svg',
    color: 'from-purple-500/20 to-violet-500/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'hover:shadow-purple-500/20',
    accentColor: 'text-purple-400',
  },
  {
    id: 7,
    title: 'Cloud Shell in Cloud Documentation',
    description: 'Recognized for contributions to Cloud Shell usage and Google Cloud documentation practices.',
    image: '/Cloud Shell in Cloud documentation.svg',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    glowColor: 'hover:shadow-cyan-500/20',
    accentColor: 'text-cyan-400',
  },
]

function BadgeCard({ badge, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group relative glass-card border ${badge.borderColor} overflow-hidden transition-shadow duration-300 hover:shadow-xl ${badge.glowColor} flex flex-col`}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${badge.accentColor}`} />

      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

      {/* Badge image area */}
      <div className="relative z-10 flex items-center justify-center p-6 pb-4">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Glow behind image */}
          <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${badge.color}`} />
          <motion.img
            src={badge.image}
            alt={badge.title}
            loading="lazy"
            className="relative z-10 w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
            whileHover={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 px-5 pb-6 flex flex-col gap-2 flex-1">
        {/* Badge label */}
        <span className={`text-[10px] font-bold uppercase tracking-widest ${badge.accentColor} font-mono`}>
          Google Badge
        </span>

        {/* Title */}
        <h3 className="text-white font-bold text-base leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
          {badge.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
          {badge.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Badges() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="badges" className="section-padding relative overflow-hidden bg-dark-card/30">
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="text-primary font-mono text-sm font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Achievements
          </span>
          <h2 className="section-title mt-4">Google &amp; Community Badges</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          <p className="section-subtitle">
            Professional recognitions, Google Cloud achievements, certifications, and community memberships.
          </p>
        </motion.div>

        {/* Badges grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {badges.map((badge, i) => (
            <BadgeCard key={badge.id} badge={badge} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.4}
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4">
            <span className="text-lg">🏅</span>
            <span className="text-slate-400 text-sm">
              Earned through active participation in Google Cloud programs and developer communities
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
