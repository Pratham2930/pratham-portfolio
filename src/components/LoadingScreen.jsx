import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] top-20 right-20" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: [0.9, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative"
        >
          <div className="w-28 h-28 rounded-3xl border border-cyan-400/30 bg-cyan-500/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(0,200,255,0.3)]">
            <span className="text-4xl font-black text-cyan-400">
              PR
            </span>
          </div>

          <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 animate-ping" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-4xl font-bold text-white"
        >
          Pratham Raval
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-cyan-400 tracking-wider"
        >
          Frontend Developer • Data Analyst
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-8 w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="w-32 h-full bg-cyan-400"
          />
        </div>

        <p className="mt-4 text-slate-400 text-sm tracking-[4px]">
          INITIALIZING...
        </p>
      </div>
    </motion.div>
  );
}