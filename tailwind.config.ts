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
      offWhite: "#f7f8f8",
      white_a08: "hsla(0,0%,100%,.08)",
      "tertiary-text": "#b4bcd099",
      "secondary-text": "#b4bcd0",
      white: "#ffffff",
      background: "#000212",
      brand: "#5e6ad2",
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
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, .3), transparent)",
    },
  },
  plugins: [],
};
export default config;
