'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dk-black/80 backdrop-blur-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-3">
              <div className="relative">
                <span className="font-display text-2xl font-light tracking-wider text-white group-hover:text-gradient transition-all duration-300">
                  DK
                </span>
                {/* Decorative flourish */}
                <svg
                  className="absolute -right-3 -top-1 w-4 h-4 text-dk-lavender opacity-60 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C12 2 14 6 18 8C14 10 12 14 12 14C12 14 10 10 6 8C10 6 12 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="hidden sm:block font-script text-lg text-dk-lavender tracking-wide">
                Dookie
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative font-body text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 animated-underline"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <span className={`w-6 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-dk-black/95 backdrop-blur-xl">
              {/* Decorative orbs */}
              <div className="orb orb-purple w-64 h-64 top-20 -right-20 animate-float opacity-30" />
              <div className="orb orb-pink w-48 h-48 bottom-40 -left-10 animate-float-delayed opacity-30" />

              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-3xl tracking-wider text-white/80 hover:text-gradient transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
