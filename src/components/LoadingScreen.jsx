import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onDone, 300)
          return 100
        }
        return p + Math.random() * 18
      })
    }, 120)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 bg-dark z-[9999] flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo / Initials */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10" />
            <span className="text-primary font-black text-3xl font-mono relative z-10">PR</span>
          </div>
          {/* Spinning ring */}
          <motion.div
            className="absolute inset-[-8px] rounded-2xl border-2 border-transparent border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-white font-bold text-2xl tracking-wide">Pratham Raval</div>
          <div className="text-primary text-sm font-mono mt-1">Frontend Dev & Data Analyst</div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-slate-500 text-xs font-mono mt-2 text-center">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
