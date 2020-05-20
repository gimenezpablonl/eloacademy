module.exports = {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    /* '@nuxtjs/auth', */
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8000/api',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#e2dfce',
          secondary: '#b0bec5',
          accent: '#fdfa77',
          accent2: '#229fe1',
          accent3: '#c37e09',
          error: '#b71c1c',
          opposite: '#44465b',
          light: '#e2dfce',
          dark: '#44465b',
        },
        dark: {
          primary: '#44465b',
          secondary: '#b0bec5',
          accent: '#fdfa77',
          accent2: '#229fe1',
          accent3: '#c37e09',
          error: '#b71c1c',
          opposite: '#e2dfce',
          light: '#e2dfce',
          dark: '#44465b',
        },
      },
      light: true,
    },
  },
  /*
   ** Build configuration
   */
  /*   auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/signin',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: '/auth/logout', method: 'get' },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        globalToken: false,
        autoFetchUser: false,
      },
    },
  }, */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}
