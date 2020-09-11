const development = process.env.NODE_ENV !== 'production'

module.exports = {
  server: {
    port: process.env.PORT ? process.env.PORT : 8000, // default: 3000 SI NO FUNCIONA ES ESTO
    host: process.env.PORT ? '0.0.0.0' : 'localhost', // default: localhost SI NO FUNCIONA ES ESTO
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Eloboost Academy',
    title: 'Eloboost Academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
      { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.css' },
    ],
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
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
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
    '@nuxtjs/proxy',
  ],
  proxy: {
    '/api': {
      target: 'https://lucid-northcutt-6441d8.netlify.app',
      pathRewrite: {
        '^/api' : '/'
        }
      }
    },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: development
      ? 'http://localhost:8000/api'
      : 'https://lucid-northcutt-6441d8.netlify.app/api',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#e2dfce',
          secondary: '#b0bec5',
          accent: '#fdfa77',
          accent2: '#229fe1',
          accent3: '#c37e09',
          instagram: '#C13584',
          discord: '#7289da',
          facebook: '#3b5998',
          twitter: '#0084b4',
          whatsapp: '#128C7E',
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
          instagram: '#C13584',
          discord: '#7289da',
          facebook: '#3b5998',
          twitter: '#0084b4',
          whatsapp: '#128C7E',
          error: '#b71c1c',
          opposite: '#e2dfce',
          light: '#e2dfce',
          dark: '#44465b',
        },
      },
      light: true,
    },
  },
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
        }),
          config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          })
      }
    },
  },
}
