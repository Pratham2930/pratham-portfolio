import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  // Auto-dismiss after 2.5 s — gives animations time to play
  useEffect(() => {
    const t = setTimeout(onDone, 2500)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
    >
      {/* Ambient glow blob */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(14,165,233,0.13) 0%, rgba(14,165,233,0.04) 55%, transparent 75%)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-7"
        initial={{ opacity: 0, scale: 0.88, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo badge */}
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ boxShadow: '0 0 0 0 rgba(14,165,233,0.6)' }}
            animate={{ boxShadow: ['0 0 0 0px rgba(14,165,233,0.5)', '0 0 0 14px rgba(14,165,233,0)'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />

          {/* Badge */}
          <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10" />
            <span className="text-primary font-black text-3xl font-mono relative z-10 select-none">
              PR
            </span>
          </div>

          {/* Spinning arc */}
          <motion.div
            className="absolute rounded-2xl border-2 border-transparent border-t-primary"
            style={{ inset: '-9px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Name + title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <p className="text-white font-bold text-2xl tracking-wide">Pratham Raval</p>
          <p className="text-primary text-sm font-mono mt-1 tracking-wider">
            Frontend Dev &amp; Data Analyst
          </p>
        </motion.div>

        {/* Animated dots */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary/60"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: i * 0.22,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
