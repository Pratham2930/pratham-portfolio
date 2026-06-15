import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Floating particle positions — fixed so they don't shift on re-render
const PARTICLES = [
  { w: 3, h: 3, top: '15%', left: '10%',  delay: 0,    dur: 3.2 },
  { w: 2, h: 2, top: '25%', left: '80%',  delay: 0.5,  dur: 2.8 },
  { w: 4, h: 4, top: '70%', left: '15%',  delay: 1.0,  dur: 3.6 },
  { w: 2, h: 2, top: '60%', left: '85%',  delay: 0.3,  dur: 2.5 },
  { w: 3, h: 3, top: '40%', left: '5%',   delay: 0.8,  dur: 4.0 },
  { w: 2, h: 2, top: '80%', left: '60%',  delay: 1.4,  dur: 3.0 },
  { w: 3, h: 3, top: '10%', left: '55%',  delay: 0.6,  dur: 2.7 },
  { w: 2, h: 2, top: '50%', left: '92%',  delay: 1.1,  dur: 3.4 },
  { w: 4, h: 4, top: '88%', left: '30%',  delay: 0.2,  dur: 3.8 },
  { w: 2, h: 2, top: '35%', left: '45%',  delay: 1.6,  dur: 2.6 },
]

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0f1e] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >

      {/* ── Background: subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Background: large glowing orbs ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480, height: 480,
          top: '50%', left: '50%',
          x: '-50%', y: '-55%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 360, height: 360,
          bottom: '10%', right: '5%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280, height: 280,
          bottom: '20%', left: '5%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/40 pointer-events-none"
          style={{ width: p.w, height: p.h, top: p.top, left: p.left }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Main card ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-8"
        initial={{ opacity: 0, scale: 0.85, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >

        {/* Logo badge — floating */}
        <motion.div
          className="relative"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Glow aura */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ filter: 'blur(18px)', background: 'rgba(14,165,233,0.35)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Pulsing ring */}
          <motion.div
            className="absolute rounded-2xl border border-primary/50 pointer-events-none"
            style={{ inset: '-6px' }}
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.06, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Spinning arc */}
          <motion.div
            className="absolute rounded-2xl border-2 border-transparent border-t-primary pointer-events-none"
            style={{ inset: '-10px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />

          {/* Badge body */}
          <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(56,189,248,0.08) 100%)', border: '1px solid rgba(14,165,233,0.35)' }}
          >
            {/* Inner shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-primary font-black text-3xl font-mono relative z-10 select-none"
              style={{ textShadow: '0 0 20px rgba(14,165,233,0.8)' }}
            >
              PR
            </span>
          </div>
        </motion.div>

        {/* Name & subtitle */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1
            className="text-white font-black text-3xl tracking-wide"
            style={{ textShadow: '0 0 30px rgba(14,165,233,0.3)' }}
          >
            Pratham Raval
          </h1>
          <p className="text-sm font-mono tracking-widest"
            style={{ color: 'rgba(14,165,233,0.85)' }}
          >
            Frontend Developer&nbsp;•&nbsp;Data Analyst
          </p>
        </motion.div>

        {/* Status text + loading bar */}
        <motion.div
          className="flex flex-col items-center gap-3 w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-slate-500 text-xs font-mono tracking-widest">
            Initializing Portfolio...
          </p>

          {/* Track */}
          <div className="w-full h-[3px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {/* Animated fill */}
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #0ea5e9, #38bdf8, #0ea5e9)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.3, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
