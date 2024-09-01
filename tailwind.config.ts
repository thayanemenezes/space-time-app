import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-transparent": "rgba(255,255,255,0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
      },
      backdropBlur: {
        xs: "30px",
      },
      fontSize: {
        xs: "1.85rem",
        xlg: "9rem",
      },
      fontFamily: {
        sans: ["Bellefair", "sans-serif"],
        serif: ["Barlow Condensed", "serif"],
      },
      borderRadius: {
        full: "100%",
      },
      outlineWidth: {
        50: "50px",
      },
    },
  },
  plugins: [],
};
export default config;
