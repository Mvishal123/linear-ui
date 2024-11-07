import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif',
    },
    colors: {
      transparent: "transparent",
      grey: "#858699",
      white: "#ffffff",
      background: "#000212",
      brand: "#5e6ad2",
      "off-white": "#f7f8f8",
      "transparent-white": "hsla(0,0%,100%,.08)",
      "tertiary-text": "#b4bcd099",
      "secondary-text": "#b4bcd0",
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.2rem",
      "5xl": "4rem",
      "6xl": ["4.4rem", "1.1"],
      "7xl": ["4.8rem", "1.1"],
      "8xl": ["8rem", "1.1"],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      "nav-height": "var(--nav-height)",
    },
    backgroundImage: {
      "radial-gradient":
        "linear-gradient(92.88deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, .3), transparent)",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: "0", transform: "translateY(-10px)" },
        to: { opacity: "1", transform: "none" },
      },
    },

    animation: {
      "fade-in": "fade-in 1s var(--animation-delay) ease forwards",
    },
  },
  plugins: [],
};
export default config;
