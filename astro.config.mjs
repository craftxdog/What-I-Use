import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://craftxdog.io",
  integrations: [
    sitemap(),
    react(),
    image({ entryPoint: "/_image" }),
    tailwind(),
  ],
});
