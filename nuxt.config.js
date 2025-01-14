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
    { src: '~/plugins/firebase', mode: 'client' },
    { src: '~/plugins/axios' }
  ],

  router: {
    middleware: [
        //'get-current-user',
        'check-auth'
    ]
  },    

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-fontawesome',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },  

  proxy: {
    '/api': {
        target: 'https://COPEI-BACKEND.ben-hurde.repl.co',
        changeOrigin: true,
        ws: true,
        credentials: true,
        xcsrfCookieName: "csrftoken",
        xcsrfHeaderName: "X-CSRFToken"          
    },
  },


 axios: {
      proxy: true,
      prefix: '/api',
      //baseURL: 'http://localhost:8000/api/',
      progress: true,
      credentials: true,
      debug: true,
      xcsrfCookieName: "csrftoken",
      xcsrfHeaderName: "X-CSRFToken"      
  }, 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
