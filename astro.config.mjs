import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://famago.cl",
  image: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "es", // All urls that don't contain `en` after `https://screwfast.uk/` will be treated as default locale, i.e. `es`
      locales: {
        es: "es", // The `defaultLocale` value must present in `locales` keys
        en: "en",
      },
    },
  }), compressor({
    gzip: false,
    brotli: true,
  }), sanity({
    projectId: 'kck1gtnu',
    dataset: 'production',
    useCdn: true, // See note on using the CDN
    apiVersion: "2024-12-21", // insert the current date to access the latest version of the API
  })],
  experimental: {
    clientPrerender: true,
  },
});