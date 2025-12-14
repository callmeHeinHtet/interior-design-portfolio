'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', projectType: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'thetmyatnoeee13@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '0636675277',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Bangkok, Thailand',
    },
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'Pinterest', href: '#', icon: 'PT' },
    { name: 'LinkedIn', href: '#', icon: 'LI' },
    { name: 'Behance', href: '#', icon: 'BE' },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Top gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(184, 169, 201, 0.3) 0%, transparent 60%)',
          }}
        />
        {/* Side orbs */}
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] opacity-15">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 152, 0.4) 0%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <div className="absolute top-40 right-10 w-[300px] h-[300px] opacity-15">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-dk-pink-300 mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Let's Create <span className="text-gradient italic">Together</span>
          </h2>
          <p className="font-script text-xl text-white/50 max-w-2xl mx-auto italic">
            Every great space begins with a conversation
          </p>
          <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-dk-lavender to-transparent mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="block font-body text-sm tracking-wider uppercase text-white/50 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-dk-lavender py-3 text-white font-body outline-none transition-colors duration-300 placeholder:text-white/20"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block font-body text-sm tracking-wider uppercase text-white/50 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-dk-lavender py-3 text-white font-body outline-none transition-colors duration-300 placeholder:text-white/20"
                  placeholder="Enter your email"
                />
              </div>

              {/* Project Type */}
              <div className="group">
                <label className="block font-body text-sm tracking-wider uppercase text-white/50 mb-3">
                  Project Type
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-dk-lavender py-3 text-white font-body outline-none transition-colors duration-300 cursor-pointer"
                  style={{ backgroundColor: '#0A0A0A' }}
                >
                  <option value="" className="bg-dk-black">Select project type</option>
                  <option value="residential" className="bg-dk-black">Residential</option>
                  <option value="commercial" className="bg-dk-black">Commercial</option>
                  <option value="hospitality" className="bg-dk-black">Hospitality</option>
                  <option value="consultation" className="bg-dk-black">Consultation</option>
                  <option value="other" className="bg-dk-black">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block font-body text-sm tracking-wider uppercase text-white/50 mb-3">
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-dk-lavender py-3 text-white font-body outline-none transition-colors duration-300 placeholder:text-white/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Info Card */}
            <div className="p-8 glass rounded-sm">
              <h3 className="font-display text-2xl text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 glass rounded-sm text-dk-lavender group-hover:text-dk-pink-300 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-body text-xs tracking-widest uppercase text-white/40 mb-1">
                        {item.label}
                      </div>
                      <div className="font-body text-white/80 group-hover:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-body text-sm tracking-widest uppercase text-white/50 mb-6">
                Follow My Work
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="w-12 h-12 glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-sm"
                    title={social.name}
                  >
                    <span className="font-body text-xs tracking-wider">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="p-6 border border-dk-lavender/20 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-body text-sm text-white/70">Currently accepting new projects</span>
              </div>
              <p className="font-script text-lg text-dk-lavender italic">
                "I'd love to hear about your vision"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
