import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://fahadalhamed.netlify.app",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
