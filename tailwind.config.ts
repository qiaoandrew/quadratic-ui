import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: ["class"],
  theme: {
    borderRadius: {},
    fontSize: {},
    lineHeight: {},
    screens: {},
    spacing: {},
    extend: {
      animation: {},
      backgroundImage: {},
      colors: {},
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {},
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
