import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Revenue Blue palette
          primary: "#1e40af", // blue-700 - Trust, professionalism
          secondary: "#6366f1", // indigo-500 - Innovation, technology  
          accent: "#10b981", // emerald-500 - Growth, revenue, success
          warning: "#f59e0b", // amber-500 - Attention, urgency
          
          // Supporting semantic colors
          success: "#059669", // emerald-600 - Conversion, achievement
          danger: "#dc2626", // red-600 - Risk, critical actions
          info: "#3b82f6", // blue-500 - Information, guidance
          
          // Light variants for backgrounds
          "primary-light": "#dbeafe", // blue-100
          "secondary-light": "#e0e7ff", // indigo-100
          "accent-light": "#d1fae5", // emerald-100
          "warning-light": "#fef3c7", // amber-100
          
          // Dark variants for text
          "primary-dark": "#1e3a8a", // blue-800
          "secondary-dark": "#4f46e5", // indigo-600
          "accent-dark": "#047857", // emerald-700
          "warning-dark": "#d97706", // amber-600
          
          // Semantic aliases for better UX
          trust: "#1e40af", // Same as primary
          revenue: "#10b981", // Same as accent
          conversion: "#059669", // Same as success
          growth: "#16a34a", // green-600
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
