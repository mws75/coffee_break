import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blueish: {
          DEFAULT: "#39918C",
        },
        lightbrown: {
          DEFAULT: "#D0B49F",
        },
        redbrown: {
          DEFAULT: "#AB6B51",
        },
        darkblue: {
          DEFAULT: "#2F435A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
