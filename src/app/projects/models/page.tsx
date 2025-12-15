'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ImageLightbox from '@/components/ImageLightbox'

const projectImages = [
  { src: '/projects/models/1.jpg', alt: 'Art Diorama 1' },
  { src: '/projects/models/2.jpg', alt: 'Art Diorama 2' },
  { src: '/projects/models/3.jpg', alt: 'Art Diorama 3' },
  { src: '/projects/models/4.jpg', alt: 'Art Diorama 4' },
  { src: '/projects/models/5.jpg', alt: 'Art Diorama 5' },
  { src: '/projects/models/6.jpg', alt: 'Art Diorama 6' },
  { src: '/projects/models/7.jpg', alt: 'Art Diorama 7' },
  { src: '/projects/models/8.jpg', alt: 'Art Diorama 8' },
  { src: '/projects/models/9.jpg', alt: 'Art Diorama 9' },
  { src: '/projects/models/10.jpg', alt: 'Art Diorama 10' },
  { src: '/projects/models/11.jpg', alt: 'Art Diorama 11' },
  { src: '/projects/models/12.jpg', alt: 'Art Diorama 12' },
  { src: '/projects/models/13.jpg', alt: 'Art Diorama 13' },
  { src: '/projects/models/14.jpg', alt: 'Art Diorama 14' },
  { src: '/projects/models/15.jpg', alt: 'Art Diorama 15' },
  { src: '/projects/models/16.jpg', alt: 'Art Diorama 16' },
  { src: '/projects/models/17.jpg', alt: 'Art Diorama 17' },
  { src: '/projects/models/18.jpg', alt: 'Art Diorama 18' },
]

export default function ArtsProject() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main className="min-h-screen bg-dk-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/models/7.jpg"
            alt="Arts"
            fill
            className="object-cover object-top"
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
            <span className="font-body text-sm tracking-[0.3em] uppercase text-dk-pink-300 mb-4 block">
              Miniature Art
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
              <span className="text-gradient italic">Arts</span>
            </h1>
            <p className="font-script text-xl text-white/60 italic max-w-2xl">
              Miniature art studio dioramas with handcrafted details and cozy aesthetics
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
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-dk-pink-300 mb-2">Project Type</h3>
                  <p className="font-display text-xl text-white">Miniature Diorama</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-dk-pink-300 mb-2">Category</h3>
                  <p className="font-display text-xl text-white">Art & Craft</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-dk-pink-300 mb-2">Style</h3>
                  <p className="font-display text-xl text-white">Cozy & Handcrafted</p>
                </div>
                <div>
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-dk-pink-300 mb-2">Collection</h3>
                  <p className="font-display text-xl text-white">18 Photos</p>
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
                  This miniature diorama collection brings to life a cozy art studio space
                  with incredible attention to detail. Each element is handcrafted to create
                  a warm, inviting atmosphere.
                </p>
                <p>
                  The diorama features an artist&apos;s workspace complete with an easel,
                  paintings, comfortable seating, and decorative string lights that add
                  a magical glow to the scene.
                </p>
                <p>
                  From the textured rugs to the miniature furniture and plants, every piece
                  demonstrates the art of creating scaled-down worlds that feel alive
                  and full of character.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-dk-black to-dk-pink-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-white mb-12 text-center"
          >
            Art <span className="text-gradient italic">Gallery</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dk-pink-900/0 group-hover:bg-dk-pink-900/20 transition-colors duration-500" />
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

      {/* Navigation */}
      <section className="py-12 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/projects/portfolio"
            className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <div>
              <span className="font-body text-xs tracking-widest uppercase block">Previous Project</span>
              <span className="font-display text-lg">Portfolio Design</span>
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
