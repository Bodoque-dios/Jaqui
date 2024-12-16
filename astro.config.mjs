import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
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
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es", // All urls that don't contain `en` after `https://screwfast.uk/` will be treated as default locale, i.e. `es`
        locales: {
          es: "es", // The `defaultLocale` value must present in `locales` keys
          en: "en",
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  experimental: {
    clientPrerender: true,
  },
});
