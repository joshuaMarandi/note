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
        brand: {
          navy: '#0F172A',
          'navy-light': '#1E2D40',
          amber: '#F59E0B',
          'amber-light': '#FCD34D',
          green: '#10B981',
          'green-light': '#34D399',
          bg: '#FAFAFA',
          dark: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'sans-serif'],
        display: ['var(--font-figtree)', 'sans-serif'],
        body: ['var(--font-figtree)', 'sans-serif'],
        mono: ['var(--font-figtree)', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 3.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
