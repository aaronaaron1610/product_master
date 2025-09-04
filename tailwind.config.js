// import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb", // Light gray (customize as needed)
        background: "#ffffff", // White (customize as needed)
        foreground: "#111827", // Dark (customize as needed)
      },
    },
  },
  plugins: [],
};
