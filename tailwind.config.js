/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./agentic-ai-course.html"],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        accent: '#FFAB00',
        dark: '#0D0D0D',
        surface: '#151515',
        card: '#1A1A1A',
        border: '#2A2A2A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,122,255,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,122,255,0.6)' },
        }
      }
    }
  },
  plugins: [],
}
