import type { Config } from "tailwindcss";
import Colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#1b1421",
        bg2: "#2d2633",
        text1: Colors.slate[400],
      },
    },
  },
  plugins: [],
};
export default config;
