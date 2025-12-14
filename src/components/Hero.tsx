'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Sparkle component
function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/80">
        <path
          d="M12 0C12 0 12 8 12 12C12 8 12 0 12 0Z"
          fill="currentColor"
        />
        <path
          d="M0 12C8 12 12 12 12 12C12 12 8 12 0 12Z"
          fill="currentColor"
        />
        <path
          d="M12 24C12 16 12 12 12 12C12 12 12 16 12 24Z"
          fill="currentColor"
        />
        <path
          d="M24 12C16 12 12 12 12 12C12 12 16 12 24 12Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; style: React.CSSProperties }>>([])

  useEffect(() => {
    // Generate random sparkle positions
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      },
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dk-black">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 152, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(184, 169, 201, 0.5) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} style={sparkle.style} />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* 4-Point Star Sparkle - Like in the logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-dk-lavender"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* 4-point star */}
            <path
              d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
              fill="currentColor"
            />
          </motion.svg>
        </motion.div>

        {/* Main DK Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mb-4"
        >
          {/* Curved line across DK - positioned on top */}
          <motion.svg
            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[480px] z-10"
            viewBox="0 0 400 40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 30 Q100 10 200 25 Q300 40 400 20"
              fill="none"
              stroke="rgba(107, 114, 128, 0.5)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.svg>

          <h1
            className="relative font-display text-[120px] md:text-[180px] font-light tracking-[0.1em] leading-none"
            style={{
              background: 'linear-gradient(90deg, #9B7DD4 0%, #9B7DD4 35%, #E85A9B 65%, #E85A9B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            DK
          </h1>
        </motion.div>

        {/* Designer Name - with gradient like "About Dookie" */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-script text-4xl md:text-5xl tracking-wide mb-4 italic"
        >
          <span
            style={{
              background: 'linear-gradient(90deg, #9B7DD4 0%, #E85A9B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Dookie
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-lg md:text-xl text-white/60 tracking-[0.3em] uppercase mb-12"
        >
          Interior Design
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-dk-lavender to-transparent mb-12"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-script text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Transforming spaces into dreams, where elegance meets imagination
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="btn-primary inline-block"
        >
          View Portfolio
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest uppercase text-white/40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-dk-lavender/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
