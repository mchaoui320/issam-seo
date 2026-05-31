import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        dark: {
          bg: "rgb(15, 23, 42)", // #0F172A
        },
        light: {
          bg: "rgb(248, 250, 252)", // #F8FAFC
        },
        accent: {
          primary: "rgb(79, 70, 229)", // #4F46E5
          sky: "rgb(14, 165, 233)", // #0EA5E9
        },
        success: {
          DEFAULT: "rgb(16, 185, 129)", // #10B981
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
