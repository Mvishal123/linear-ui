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
      white_a08: "hsla(0,0%,100%,.08)",
      "tertiary-text": "#b4bcd099",
      "secondary-text": "#b4bcd0",
      white: "#ffffff",
      background: "#000212",
      brand: "#5e6ad2",
    },
    fontSize: {
      "5xl": ["8rem", "1"],
      "4xl": ["4.4rem", "1"],
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      sm: "1.4rem",
      xs: "1.3rem",
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
  },
  plugins: [],
};
export default config;
