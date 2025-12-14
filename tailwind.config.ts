import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Pink, Purple, White, Black
        'dk-black': '#0A0A0A',
        'dk-black-light': '#141414',
        'dk-purple': {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        'dk-pink': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        'dk-lavender': '#B8A9C9',
        'dk-rose': '#E8A5B8',
        'dk-cream': '#FAF8F5',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'script': ['Cormorant Garamond', 'serif'],
        'body': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dreamy': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 152, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(184, 169, 201, 0.3) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'blur-in': 'blur-in 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(20px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
      boxShadow: {
        'glow-pink': '0 0 60px rgba(236, 72, 152, 0.3)',
        'glow-purple': '0 0 60px rgba(139, 92, 246, 0.3)',
        'glow-soft': '0 0 100px rgba(184, 169, 201, 0.2)',
        'dreamy': '0 25px 50px -12px rgba(139, 92, 246, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
