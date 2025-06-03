import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default {
  integrations: [tailwind()],
  output: "static",
  adapter: netlify(),
};