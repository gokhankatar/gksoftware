export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: false
  },
  modules: [
    'vuetify-nuxt-module',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },
  i18n: {
    defaultLocale: "en",
    langDir: "locales",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "tr",
        name: "Türkçe",
        file: "tr.json",
      },
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: 'image/x-icon',
          href: "/favicon.ico"
        }
      ]
    }
  }
});