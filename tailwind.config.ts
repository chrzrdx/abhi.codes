import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import radixColors from "tailwindcss-radix-colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Recursive Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    radixColors({}),
    typography({}),
    forms({}),
    plugin(({ addUtilities }) =>
      addUtilities({
        ".decoration-skip-ink": {
          "text-decoration-skip-ink": "none",
        },
      }),
    ),
  ],
} satisfies Config;
