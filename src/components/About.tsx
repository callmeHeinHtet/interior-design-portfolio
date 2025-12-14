'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const stats = [
  { number: '1+', label: 'Year Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '10+', label: 'Concepts Created' },
  { number: '100%', label: 'Passion' },
]

const skills = [
  {
    title: 'Space Planning',
    description: 'Creating functional layouts that maximize flow and comfort in any space.',
  },
  {
    title: 'Color Theory',
    description: 'Harmonizing palettes that evoke emotion and create cohesive atmospheres.',
  },
  {
    title: '3D Visualization',
    description: 'Bringing concepts to life with detailed renderings and mood boards.',
  },
  {
    title: 'Sustainable Design',
    description: 'Incorporating eco-friendly materials and practices into modern interiors.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 152, 0.3) 0%, transparent 60%)',
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
          className="text-center mb-20"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-dk-pink-300 mb-4 block">
            The Designer
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            About{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #9B7DD4 0%, #E85A9B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dookie
            </span>
          </h2>
          <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-dk-lavender to-transparent" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="relative aspect-[2/3] max-w-md mx-auto">
              {/* Glow effect */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(184, 169, 201, 0.2) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)',
                }}
              />

              {/* Frame border */}
              <div className="absolute inset-0 border border-dk-lavender/20 -m-4" />
              <div className="absolute inset-0 border border-dk-lavender/10 -m-8" />

              {/* Designer Photo */}
              <div className="relative w-full h-full overflow-hidden bg-dk-black">
                <Image
                  src="/images/dookie.jpg"
                  alt="Dookie - Interior Designer"
                  fill
                  className="object-contain"
                  priority
                />

                {/* Subtle overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-dk-black/30 via-transparent to-transparent" />

                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-dk-lavender/30" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-dk-pink/30" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-dk-pink to-transparent" />
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-dk-pink to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-dk-purple to-transparent" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-dk-purple to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="font-script text-2xl md:text-3xl text-dk-lavender leading-relaxed italic">
                "Design is not just what it looks like. Design is how it makes you feel."
              </p>

              <p className="font-body text-white/70 leading-relaxed">
                As a passionate Interior Design student, I am dedicated to creating spaces that
                blend aesthetics with functionality. My journey began with a love for transforming
                ordinary rooms into extraordinary experiences, and every project fuels my growth.
              </p>

              <p className="font-body text-white/70 leading-relaxed">
                Currently pursuing my degree in Interior Design, I've had the opportunity to work
                on diverse projects ranging from residential redesigns to concept developments.
                I believe that thoughtful design can transform how we live, work, and feel.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <div className="font-script text-3xl text-gradient italic">Dookie</div>
              <div className="font-body text-sm text-white/40 tracking-widest uppercase mt-2">
                Interior Design Student
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 glass rounded-sm"
            >
              <div className="font-display text-4xl md:text-5xl text-gradient mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm text-white/50 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="font-display text-3xl text-center text-white mb-12"
          >
            Skills
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group p-8 glass glass-hover rounded-sm transition-all duration-500 hover:shadow-dreamy"
              >
                {/* Skill number */}
                <div className="font-display text-5xl text-white/5 mb-4 group-hover:text-gradient-purple transition-all duration-500">
                  0{index + 1}
                </div>

                <h4 className="font-display text-xl text-white mb-3 group-hover:text-dk-lavender transition-colors">
                  {skill.title}
                </h4>

                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-dk-pink to-dk-purple transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
