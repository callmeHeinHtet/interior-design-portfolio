'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ImageLightbox from '@/components/ImageLightbox'

const projectImages = [
  {
    src: '/projects/portfolio/design-1.png',
    alt: 'Portfolio Design - Personal Branding',
  },
  {
    src: '/projects/portfolio/design-2.png',
    alt: 'Portfolio Design - Brand Identity',
  },
]

export default function PortfolioProject() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main className="min-h-screen bg-dk-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/portfolio/design-1.png"
            alt="Portfolio Design"
            fill
            className="object-contain object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dk-black via-dk-black/50 to-transparent" />
        </div>

        {/* Back Button */}
        <Link
          href="/#projects"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-body text-sm tracking-widest uppercase">Back to Projects</span>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-purple-300 mb-4 block">
              Personal Branding
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
              Own Brand <span className="text-gradient italic">Creating</span>
            </h1>
            <p className="font-script text-xl text-white/60 italic max-w-2xl">
              Personal branding and portfolio design with ethereal beauty aesthetic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-purple-300 mb-2">Project Type</h3>
                  <p className="font-display text-xl text-white">Personal Branding</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-purple-300 mb-2">Category</h3>
                  <p className="font-display text-xl text-white">Visual Identity</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-purple-300 mb-2">Style</h3>
                  <p className="font-display text-xl text-white">Ethereal & Dreamy</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-purple-300 mb-2">Brand Keywords</h3>
                  <p className="font-display text-xl text-white">Creative, Elegant, Imaginative, Dreamy, Refined</p>
                </div>
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-3xl text-white mb-6">About the Project</h2>
              <div className="space-y-4 text-white/70 font-body leading-relaxed">
                <p>
                  This personal branding project captures the essence of DK&apos;s design philosophy through
                  a cohesive visual identity system. The ethereal purple aesthetic reflects the dreamy,
                  imaginative approach that defines the portfolio.
                </p>
                <p>
                  The brand identity incorporates elegant typography, soft gradients, and a refined color
                  palette that speaks to creativity and sophistication. Every element is designed to
                  convey the unique artistic vision and professional capabilities.
                </p>
                <p>
                  From the DK monogram logo to the carefully curated imagery, this portfolio design
                  establishes a memorable visual presence that resonates with the target audience
                  while staying true to the designer&apos;s authentic creative voice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-dk-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-white mb-12 text-center"
          >
            Brand <span className="text-gradient italic">Elements</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl text-white mb-8">Design Philosophy</h2>
            <p className="font-script text-2xl text-white/60 italic leading-relaxed">
              &ldquo;Crafting spaces that capture dreams and transform them into
              tangible beauty—where imagination meets elegance.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/projects/home-office-2"
            className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <div>
              <span className="font-body text-xs tracking-widest uppercase block">Previous Project</span>
              <span className="font-display text-lg">Home Office</span>
            </div>
          </Link>

          <Link
            href="/projects/tourist"
            className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors text-right"
          >
            <div>
              <span className="font-body text-xs tracking-widest uppercase block">Next Project</span>
              <span className="font-display text-lg">Tread of Tradition</span>
            </div>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={projectImages[lightboxIndex].src}
        imageAlt={projectImages[lightboxIndex].alt}
        onNext={() => setLightboxIndex((prev) => prev + 1)}
        onPrev={() => setLightboxIndex((prev) => prev - 1)}
        hasNext={lightboxIndex < projectImages.length - 1}
        hasPrev={lightboxIndex > 0}
      />
    </main>
  )
}
