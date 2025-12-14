'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useCallback } from 'react'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ImageLightboxProps) {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev()
    },
    [onClose, onNext, onPrev, hasNext, hasPrev]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dk-black/95 backdrop-blur-sm" />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 text-white/60 hover:text-white transition-colors group"
          >
            <svg
              className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Navigation - Previous */}
          {hasPrev && onPrev && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="absolute left-4 md:left-8 z-10 p-3 text-white/60 hover:text-white transition-colors group"
            >
              <svg
                className="w-10 h-10 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}

          {/* Navigation - Next */}
          {hasNext && onNext && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-4 md:right-8 z-10 p-3 text-white/60 hover:text-white transition-colors group"
            >
              <svg
                className="w-10 h-10 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}

          {/* Image container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90vw] h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>

          {/* Hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 font-body text-sm tracking-wider"
          >
            Press ESC to close {(hasNext || hasPrev) && '• Use arrows to navigate'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
