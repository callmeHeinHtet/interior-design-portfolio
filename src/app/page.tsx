'use client'

import { Navigation, Hero, About, Projects, Contact, Footer } from '@/components'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-dk-pink via-dk-lavender to-dk-purple origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Transition gradient */}
        <div className="h-32 bg-gradient-to-b from-transparent to-dk-black-light" />

        {/* About/Personal Section */}
        <About />

        {/* Decorative divider */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-center gap-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-dk-lavender/30" />
              <div className="flex items-center gap-4">
                <span className="font-script text-xl text-dk-lavender/50 italic">dreams</span>
                <svg className="w-6 h-6 text-dk-lavender/30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C12 2 14 6 18 8C14 10 12 14 12 14C12 14 10 10 6 8C10 6 12 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-script text-xl text-dk-lavender/50 italic">reality</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-dk-lavender/30" />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <Projects />

        {/* Transition */}
        <div className="h-20" />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating decorative elements */}
      <FloatingElements />
    </main>
  )
}

// Floating decorative sparkles throughout the page
function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static sparkles at fixed positions */}
      {[
        { top: '15%', left: '5%', delay: 0 },
        { top: '25%', right: '8%', delay: 0.5 },
        { top: '45%', left: '3%', delay: 1 },
        { top: '55%', right: '5%', delay: 1.5 },
        { top: '75%', left: '7%', delay: 2 },
        { top: '85%', right: '4%', delay: 2.5 },
      ].map((pos, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pos.delay,
            ease: 'easeInOut',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-dk-lavender/40">
            <path
              d="M12 0L13.5 9L22 12L13.5 15L12 24L10.5 15L2 12L10.5 9L12 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
