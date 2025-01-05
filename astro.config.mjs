import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://abhi.codes",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
  },
  experimental: {
    svg: {
      mode: "sprite",
    },
  },
});
