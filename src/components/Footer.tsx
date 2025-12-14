'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative py-16 border-t border-white/5">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(184, 169, 201, 0.4) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-block group">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="font-display text-3xl font-light tracking-wider text-white group-hover:text-gradient transition-all duration-300">
                  DK
                </span>
                <span className="font-script text-xl text-dk-lavender tracking-wide">
                  Dookie
                </span>
              </div>
            </a>
            <p className="font-body text-sm text-white/40 mt-3 max-w-xs mx-auto md:mx-0">
              Transforming spaces into dreams through thoughtful, elegant design.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm tracking-wider uppercase text-white/50 hover:text-white transition-colors animated-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-body text-sm text-white/30">
              &copy; {currentYear} Dookie Interior Design
            </p>
            <p className="font-body text-xs text-white/20 mt-1">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              {/* Decorative elements */}
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-dk-lavender/50" />
              <svg className="w-4 h-4 text-dk-lavender/50" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C12 2 14 6 18 8C14 10 12 14 12 14C12 14 10 10 6 8C10 6 12 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-dk-lavender/50" />
            </motion.div>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <a
            href="#home"
            className="inline-flex flex-col items-center gap-2 text-white/30 hover:text-dk-lavender transition-colors group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
            </svg>
            <span className="font-body text-xs tracking-widest uppercase">Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
