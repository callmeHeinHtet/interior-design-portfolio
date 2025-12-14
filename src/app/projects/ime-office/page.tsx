'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ImageLightbox from '@/components/ImageLightbox'

const projectImages = [
  {
    src: '/projects/ime-office/design-1.png',
    title: 'Concept & Target Audience',
    description: 'Understanding the travel company culture with World Connection, Innovation Hub, and Journey Inspiration themes',
  },
  {
    src: '/projects/ime-office/design-2.png',
    title: 'Moodboard & Materials',
    description: 'Global Gateway aesthetic with energetic, modern, and connected core feeling in Modern Nomadic style',
  },
  {
    src: '/projects/ime-office/design-3.png',
    title: 'Floor Plans & Elevations',
    description: 'Two-floor zoning diagram with workstation, meeting room, CEO office, and kitchen areas',
  },
  {
    src: '/projects/ime-office/design-4.png',
    title: 'Perspective Views',
    description: '3D visualization showcasing the vibrant orange and blue color scheme throughout the office',
  },
]

export default function ImeOfficeProjectPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <main className="min-h-screen bg-dk-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/projects/ime-office/design-4.png"
            alt="RatesToGo Office"
            fill
            className="object-cover object-top opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dk-black/60 via-dk-black/40 to-dk-black" />
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 z-20"
        >
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            <span className="font-body text-sm tracking-widest uppercase">Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16 max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-orange-400 mb-4"
          >
            Commercial / Travel Office
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl text-white mb-4"
          >
            RatesToGo{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #F97316 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Office
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-script text-xl md:text-2xl text-white/60 italic max-w-2xl"
          >
            Elevate your journey
          </motion.p>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-body text-xs tracking-widest uppercase text-white/40 mb-2">Client</h3>
            <p className="font-display text-xl text-white">RatesToGo.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="font-body text-xs tracking-widest uppercase text-white/40 mb-2">Type</h3>
            <p className="font-display text-xl text-white">Travel Company Office</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="font-body text-xs tracking-widest uppercase text-white/40 mb-2">Style</h3>
            <p className="font-display text-xl text-white">Modern Nomadic</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-3xl"
        >
          <p className="font-body text-white/70 leading-relaxed mb-6">
            <strong className="text-white">RatesToGo Office</strong> is designed for a hotel booking service
            company, blending technology with the excitement of global exploration. The concept reflects the
            feeling of being in an airport lounge - a digital hub where work, travel inspiration, and
            innovation merge seamlessly.
          </p>
          <p className="font-body text-white/70 leading-relaxed">
            The Modern Nomadic style embraces mobility, freedom, and global identity with open spaces and
            lively atmospheres. The vibrant orange and blue color palette creates an energetic, modern, and
            connected environment that inspires the team to help travelers elevate their journeys.
          </p>
        </motion.div>
      </section>

      {/* Decorative Divider */}
      <div className="px-8 md:px-16 max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </div>

      {/* Image Gallery */}
      <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl text-white mb-12 text-center"
        >
          Design Process
        </motion.h2>

        <div className="space-y-24">
          {projectImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-2/3 relative group">
                <div
                  className="relative overflow-hidden rounded-sm cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: index % 2 === 0
                        ? 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.2) 0%, transparent 70%)'
                        : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />

                  <div className="relative w-full">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={1200}
                      height={1600}
                      className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>

                  {/* Click to expand hint */}
                  <div className="absolute inset-0 flex items-center justify-center bg-dk-black/0 group-hover:bg-dk-black/20 transition-all duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-body text-sm tracking-wider flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Click to expand
                    </span>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-500 rounded-sm" />
                </div>

                {/* Image number */}
                <div className="absolute -top-4 -left-4 font-display text-6xl text-white/5">
                  0{index + 1}
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/3 space-y-4">
                <span className="font-body text-xs tracking-widest uppercase text-orange-400">
                  Step {index + 1}
                </span>
                <h3 className="font-display text-2xl text-white">{image.title}</h3>
                <p className="font-body text-white/60 leading-relaxed">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-16" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm tracking-widest uppercase text-white/40 mb-4 block">
              Continue Exploring
            </span>
            <Link
              href="/#projects"
              className="inline-block font-display text-3xl text-white hover:text-gradient transition-all duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-display text-xl text-white hover:text-gradient transition-all">
            DK
          </Link>
          <span className="font-body text-sm text-white/40">
            &copy; {new Date().getFullYear()} Dookie Interior Design
          </span>
        </div>
      </footer>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        imageSrc={projectImages[currentImageIndex]?.src || ''}
        imageAlt={projectImages[currentImageIndex]?.title || ''}
        onNext={goToNext}
        onPrev={goToPrev}
        hasNext={currentImageIndex < projectImages.length - 1}
        hasPrev={currentImageIndex > 0}
      />
    </main>
  )
}
