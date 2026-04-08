/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Primary
        'near-black': '#141413',
        'terracotta': '#c96442',
        'coral': '#d97757',
        // Surfaces
        'parchment': '#f5f4ed',
        'ivory': '#faf9f5',
        'warm-sand': '#e8e6dc',
        'dark-surface': '#30302e',
        // Neutrals / Text
        'charcoal-warm': '#4d4c48',
        'olive-gray': '#5e5d59',
        'stone-gray': '#87867f',
        'dark-warm': '#3d3d3a',
        'warm-silver': '#b0aea5',
        // Borders
        'border-cream': '#f0eee6',
        'border-warm': '#e8e6dc',
        'border-dark': '#30302e',
        // Rings
        'ring-warm': '#d1cfc5',
        'ring-deep': '#c2c0b6',
        // Semantic
        'error-crimson': '#b53333',
        'focus-blue': '#3898ec',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.10', fontWeight: '500' }],
        'section-heading': ['3.25rem', { lineHeight: '1.20', fontWeight: '500' }],
        'sub-heading-lg': ['2.3rem', { lineHeight: '1.30', fontWeight: '500' }],
        'sub-heading': ['2rem', { lineHeight: '1.10', fontWeight: '500' }],
        'sub-heading-sm': ['1.6rem', { lineHeight: '1.20', fontWeight: '500' }],
        'feature-title': ['1.3rem', { lineHeight: '1.20', fontWeight: '500' }],
        'body-serif': ['1.06rem', { lineHeight: '1.60' }],
        'body-lg': ['1.25rem', { lineHeight: '1.60' }],
        'body': ['1rem', { lineHeight: '1.60' }],
        'body-sm': ['0.94rem', { lineHeight: '1.60' }],
        'caption': ['0.88rem', { lineHeight: '1.43' }],
        'label': ['0.75rem', { lineHeight: '1.60', letterSpacing: '0.12px' }],
        'overline': ['0.63rem', { lineHeight: '1.60', letterSpacing: '0.5px' }],
      },
      borderRadius: {
        'sharp': '4px',
        'sm-round': '6px',
        'comfort': '8px',
        'generous': '12px',
        'very': '16px',
        'highly': '24px',
        'max': '32px',
      },
      boxShadow: {
        'whisper': 'rgba(0,0,0,0.05) 0px 4px 24px',
        'ring-warm': '0px 0px 0px 0px #e8e6dc, 0px 0px 0px 1px #d1cfc5',
        'ring-terracotta': '0px 0px 0px 0px #c96442, 0px 0px 0px 1px #c96442',
        'ring-dark': '0px 0px 0px 0px #30302e, 0px 0px 0px 1px #3d3d3a',
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
