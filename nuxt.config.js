export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Copei - 2022',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/copeilogo' }
    ]
  },

  server: {
      host: '0.0.0.0',
      port: 8080,
  },  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://copei-backend.ben-hurde.repl.co/', // Used as fallback if no runtime config is provided
  },  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
