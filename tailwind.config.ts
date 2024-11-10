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
      13: "5.2rem",
      14: "5.6rem",
      "nav-height": "var(--nav-height)",
    },
    backgroundImage: {
      "radial-gradient":
        "linear-gradient(92.88deg, #455eb5 20%, #5643cc 50%, #673fd7 70%)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, .3), transparent)",
      "hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, .1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, .15), transparent)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
      "glow-line":
        "linear-gradient(var(--direction),#9d9bf2 .43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      "radial-faded":
        "radial-gradient(circle at center bottom,var(--color),transparent 70%)",
      "glass-gradient":
        "linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,.05))",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: "0", transform: "translateY(-10px)" },
        to: { opacity: "1", transform: "none" },
      },
      "hero-rotate": {
        "0%": {
          scale: "1",
          transform: "rotateX(25deg)",
        },
        "50%": {
          scale: "0.8",
          transform: "rotateX(25deg)",
        },
        "60%": {
          transform: "rotateX(25deg)",
          scale: "0.8",
        },
        "100%": {
          transform: "rotateX(0deg)",
          scale: "1",
        },
      },
      "hero-image": {
        "0%,75%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      "hero-glow": {
        "0%": {
          opacity: "0",
        },
        "25%": {
          opacity: "1",
          inset: "-10px",
        },
        "100%": {
          opacity: "1",
          inset: "100px",
        },
      },
      "hero-sketch": {
        "0%": {
          strokeDashoffset: "1",
        },
        "50%": {
          strokeDashoffset: "0",
        },
        "99%": {
          strokeDashoffset: "0",
        },
        "100%": {
          visibility: "hidden",
        },
      },
      "glow-lines-horizontal": {
        "0%": {
          transform: "translateX(0)",
          opacity: "1",
        },
        "98%": {
          transform: "translateX(55rem)",
          opacity: "1",
        },
        "100%": {
          transform: "translateX(55rem)",
          opacity: "0",
        },
      },
      "glow-lines-vertical": {
        "0%": {
          transform: "translateY(0)",
          opacity: "1",
        },
        "90%": {
          transform: "translateY(30rem)",
          opacity: "1",
        },
        "100%": {
          transform: "translateY(30rem)",
          opacity: "0",
        },
      },
      zap: {
        "0%, 11%, 9%, 100%": {
          fill: "transparent",
        },
        "10%": {
          fill: "#fff",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 1s var(--animation-delay) ease forwards",
      "hero-rotate": "hero-rotate  1400ms ease forwards",
      "hero-image": "hero-image 600ms 400ms ease forwards",
      "hero-glow": "hero-glow 4s 800ms ease-out forwards",
      "hero-sketch": "hero-sketch 800ms ease-out forwards",
      "glow-lines-horizontal": "glow-lines-horizontal var(--duration) ease-in",
      "glow-lines-vertical": "glow-lines-vertical var(--duration) ease-in",
      "zap": "zap 2.5s calc((var(--index) - 1) * 20ms) linear infinite",
    },
  },
  plugins: [],
};
export default config;
