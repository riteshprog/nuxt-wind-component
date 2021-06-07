export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shopping-site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-formulate', '~/plugins/wind-componets'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/elements/accordians',
        prefix: 'Accordians',
      },
      {
        path: '~/components/elements/tabs',
        prefix: 'WTabs',
      },
      {
        path: '~/components/elements/buttons',
        prefix: 'WButton',
      },
      {
        path: '~/components/elements/links',
        prefix: 'WLink',
      },
      {
        path: '~/components/elements/loading',
        prefix: 'WLoading',
      },
      {
        path: '~/components/elements/slide-overs',
        prefix: 'Slideovers',
      },
      {
        path: '~/components/elements/steps',
        prefix: 'WSteps',
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // '@braid/vue-formulate/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
