// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://brun0stan0.github.io",
  base: "/AstroPortfolioBrunoStano",
  vite: {
    plugins: [tailwindcss()],
  },
});