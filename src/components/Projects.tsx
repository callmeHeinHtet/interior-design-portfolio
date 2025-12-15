'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Tread of Tradition',
    category: 'Commercial',
    description: 'A Thai cultural tourist center celebrating traditional textiles at Sanam Luang, Bangkok',
    image: '/projects/tourist/textiles.png',
    color: 'from-dk-purple-600/40',
    size: 'large',
    hasDetail: true,
    slug: 'tourist',
  },
  {
    id: 2,
    title: 'LinkedIn Office',
    category: 'Commercial',
    description: 'A corporate office design for LinkedIn Thailand with modern professional warmth',
    image: '/projects/office/design-2.png',
    color: 'from-dk-pink-600/40',
    size: 'medium',
    hasDetail: true,
    slug: 'office',
  },
  {
    id: 3,
    title: 'Vacation House',
    category: 'Residential',
    description: 'A modern home office for content creators blending Asian and Western influences',
    image: '/projects/home-office/design-1.png',
    color: 'from-dk-lavender/40',
    size: 'medium',
    hasDetail: true,
    slug: 'home-office',
  },
  {
    id: 4,
    title: 'RatesToGo Office',
    category: 'Commercial',
    description: 'A modern nomadic workspace for a travel company inspired by global exploration',
    image: '/projects/ime-office/design-4.png',
    color: 'from-orange-500/40',
    size: 'medium',
    hasDetail: true,
    slug: 'ime-office',
  },
  {
    id: 5,
    title: 'Home Office',
    category: 'Residential',
    description: 'A sustainable home office for creatives in Worcester with eco-friendly design',
    image: '/projects/home-office-2/design-2.png',
    color: 'from-amber-700/40',
    size: 'medium',
    hasDetail: true,
    slug: 'home-office-2',
  },
  {
    id: 6,
    title: 'Portfolio Design',
    category: 'Commercial',
    description: 'Personal branding and portfolio design with ethereal beauty aesthetic',
    image: '/projects/portfolio/design-1.png',
    color: 'from-purple-500/40',
    size: 'medium',
    hasDetail: true,
    slug: 'portfolio',
  },
  {
    id: 7,
    title: 'Arts',
    category: 'Residential',
    description: 'Miniature art studio dioramas with handcrafted details and cozy aesthetics',
    image: '/projects/models/7.jpg',
    color: 'from-pink-500/40',
    size: 'large',
    hasDetail: true,
    slug: 'models',
  },
]

const categories = ['All', 'Residential', 'Commercial']

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  const cardContent = (
    <div className="relative h-full min-h-[300px] md:min-h-[400px] overflow-hidden">
      {/* Background - Image or gradient */}
      {project.image && project.hasDetail ? (
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} to-dk-black transition-all duration-700`}
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />
          </div>
        </div>
      )}

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${
              index % 2 === 0 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(236, 72, 152, 0.2)'
            } 0%, transparent 60%)`,
          }}
        />

        {/* Border glow on hover */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-500" />

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dk-black via-dk-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Category */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
            className="font-body text-xs tracking-[0.2em] uppercase text-dk-lavender mb-3"
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-gradient transition-all duration-500"
          >
            {project.title}
          </motion.h3>

          {/* Description - shows on hover */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.4 }}
            className="font-script text-lg text-white/60 italic max-w-sm"
          >
            {project.description}
          </motion.p>

          {/* View Project Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6"
          >
            <span className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-white/80 group-hover:text-dk-pink-300 transition-colors">
              View Project
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C12 2 14 6 18 8C14 10 12 14 12 14C12 14 10 10 6 8C10 6 12 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Project number */}
        <div className="absolute top-4 left-4 font-display text-6xl text-white/5 group-hover:text-white/10 transition-all duration-500">
          {String(project.id).padStart(2, '0')}
        </div>
      </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`relative group cursor-pointer ${
        project.size === 'large'
          ? 'md:col-span-2 md:row-span-2'
          : project.size === 'medium'
          ? 'md:col-span-1 md:row-span-2'
          : 'md:col-span-1 md:row-span-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.hasDetail && project.slug ? (
        <Link href={`/projects/${project.slug}`} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] opacity-15">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 152, 0.4) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />
        </div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] opacity-15">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
              filter: 'blur(100px)',
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
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-dk-purple-300 mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Featured <span className="text-gradient italic">Projects</span>
          </h2>
          <p className="font-script text-xl text-white/50 max-w-2xl mx-auto italic">
            A curated collection of spaces where dreams take form
          </p>
          <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-dk-lavender to-transparent mt-8" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-16 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-sm tracking-widest uppercase transition-all duration-300 pb-2 ${
                activeCategory === category
                  ? 'text-white border-b border-dk-lavender'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
