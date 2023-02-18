// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', "@nuxt/content"],
    content: {
      markdown: {
        anchorLinks: false,
      },
    },
  });