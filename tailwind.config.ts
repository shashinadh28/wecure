import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flowbite/**/*.js', // Added flowbite path for Tailwind content
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        // Existing fade-down keyframe
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // New slideUp keyframe added here
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        // Existing fade-down animations
        'fade-down': 'fade-down 1s ease-out',
        'once': 'none',
        'normal': 'fade-down 1.5s ease-in-out',
        // New slideUp animation added here
        slideUp: 'slideUp 1s ease-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Added flowbite plugin
  ],
};

export default config;
