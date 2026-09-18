/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zatil: {
          orange: {
            DEFAULT: '#F26522',
            hover: '#D95314',
            light: '#FFF0EA',
            dark: '#B84107',
          },
          green: {
            DEFAULT: '#7CB342',
            hover: '#689F38',
            light: '#F1F8E9',
            dark: '#558B2F',
          },
          gold: {
            DEFAULT: '#D4A373',
            dark: '#A67C52',
            light: '#F8F1E9',
          },
          dark: {
            DEFAULT: '#0D0F12',
            surface: '#151921',
            card: '#1C222D',
            border: '#2A3241',
          },
          charcoal: '#1A1D20',
          cream: '#FAF8F5',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
