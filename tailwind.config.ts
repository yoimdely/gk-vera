import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ivory: "#F6F1EA",
        graphite: "#1C1B19",
        gold: "#C4A267",
        sage: "#8F9A86",
        moss: "#5E655C",
        sand: "#E3D8C7",
        cloud: "#FAF7F2",
        ink: "#141310",
        champagne: "#EAD9B8",
        stone: "#D3C8B6",
        smoke: "#EEE6DA",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(24, 27, 24, 0.08)",
        card: "0 24px 70px rgba(18, 20, 18, 0.14)",
        glow: "0 0 60px rgba(201, 169, 106, 0.25)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        glow: "radial-gradient(circle at 20% 20%, rgba(201,169,106,0.22), transparent 55%)",
        linen: "linear-gradient(180deg, #FBFAF8 0%, #F2EDE3 100%)",
        veil: "linear-gradient(140deg, rgba(251,250,248,0.92), rgba(231,223,210,0.65))",
      },
    },
  },
  plugins: [],
}

export default config
