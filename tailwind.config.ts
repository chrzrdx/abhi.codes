import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import radixColors from "tailwindcss-radix-colors";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Recursive Variable", ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }: { theme: (a: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gold.12"),
            "--tw-prose-headings": theme("colors.gold.12"),
            "--tw-prose-lead": theme("colors.gold.11"),
            "--tw-prose-links": theme("colors.gold.11"),
            "--tw-prose-bold": theme("colors.gold.12"),
            "--tw-prose-counters": theme("colors.gold.9"),
            "--tw-prose-bullets": theme("colors.gold.6"),
            "--tw-prose-hr": theme("colors.gold.5"),
            "--tw-prose-quotes": theme("colors.gold.12"),
            "--tw-prose-quote-borders": theme("colors.gold.6"),
            "--tw-prose-captions": theme("colors.gold.11"),
            "--tw-prose-code": theme("colors.gold.12"),
            "--tw-prose-pre-code": theme("colors.gold.2"),
            "--tw-prose-pre-bg": theme("colors.gold.12"),
            "--tw-prose-kbd": theme("colors.gold.12"),
            "--tw-prose-th-borders": theme("colors.gold.6"),
            "--tw-prose-td-borders": theme("colors.gold.4"),
            "--tw-prose-invert-body": theme("colors.golddark.12"),
            "--tw-prose-invert-headings": theme("colors.golddark.11"),
            "--tw-prose-invert-lead": theme("colors.golddark.11"),
            "--tw-prose-invert-links": theme("colors.golddark.11"),
            "--tw-prose-invert-bold": theme("colors.golddark.12"),
            "--tw-prose-invert-counters": theme("colors.golddark.9"),
            "--tw-prose-invert-bullets": theme("colors.golddark.6"),
            "--tw-prose-invert-hr": theme("colors.golddark.5"),
            "--tw-prose-invert-quotes": theme("colors.golddark.12"),
            "--tw-prose-invert-quote-borders": theme("colors.golddark.6"),
            "--tw-prose-invert-captions": theme("colors.golddark.11"),
            "--tw-prose-invert-code": theme("colors.golddark.12"),
            "--tw-prose-invert-pre-code": theme("colors.golddark.1"),
            "--tw-prose-invert-pre-bg": theme("colors.golddark.11"),
            "--tw-prose-invert-kbd": theme("colors.golddark.12"),
            "--tw-prose-invert-th-borders": theme("colors.golddark.6"),
            "--tw-prose-invert-td-borders": theme("colors.golddark.4"),
          },
        },
      }),
      keyframes: {
        progress: {
          "0%": { transform: " translateX(0%) scaleX(0)" },
          "40%": { transform: "translateX(0%) scaleX(0.4)" },
          "100%": { transform: "translateX(100%) scaleX(0.5)" },
        },
      },
      animation: {
        progress: "progress 1s infinite linear",
      },
    },
  },
  plugins: [
    radixColors,
    typography,
    forms,
    plugin(({ addUtilities }) =>
      addUtilities({
        ".decoration-skip-ink": {
          "text-decoration-skip-ink": "none",
        },
      }),
    ),
  ],
} satisfies Config;
