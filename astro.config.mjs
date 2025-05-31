// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon"; // Import astro-icon

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()] // Add icon() to integrations
});
