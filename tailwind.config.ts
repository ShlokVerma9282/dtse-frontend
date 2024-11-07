import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        neo_bold: ["neo_bold", "sans-serif"],
        neo_extrabold: ["neo_extrabold", "sans-serif"],
        neo_medium: ["neo_medium", "sans-serif"],
        neo_thin: ["neo_thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
