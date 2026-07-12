import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDF6EC",
        "cream-2": "#FFFBF3",
        pink: {
          DEFAULT: "#E6297D",
          50: "#FDE9F1",
          100: "#FBD3E3",
          400: "#EE5C9C",
          500: "#E6297D",
          600: "#C31D68",
          700: "#9E1655",
        },
        green: {
          DEFAULT: "#4C8C3C",
          50: "#EEF6EA",
          100: "#DCEDD4",
          500: "#4C8C3C",
          600: "#3B6E2E",
          700: "#2C5322",
        },
        orange: {
          DEFAULT: "#F5A623",
          50: "#FEF3E0",
          400: "#F7B84D",
          500: "#F5A623",
          600: "#D6890D",
        },
        choc: {
          DEFAULT: "#3A2418",
          light: "#5C3A28",
        },
      },
      fontFamily: {
        script: ["var(--font-script)"],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        pop: "0 8px 24px -8px rgba(58, 36, 24, 0.25)",
        card: "0 4px 14px -4px rgba(58, 36, 24, 0.15)",
      },
      backgroundImage: {
        "splash-pink": "radial-gradient(circle at 30% 20%, rgba(230,41,125,0.15), transparent 60%)",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        drip: {
          "0%": { transform: "translateY(-4px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        pop: "pop 0.35s ease-in-out",
        float: "float 5s ease-in-out infinite",
        drip: "drip 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
