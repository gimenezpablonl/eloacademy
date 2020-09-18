<template>
  <v-app
    id="main"
    :style="{
      backgroundColor: $vuetify.theme.themes[theme].primary,
      background: background,
    }"
  >
    <Systembar />
    <Navbar />
    <Nuxt />
    <FABIcon />
    <Footer />
  </v-app>
</template>

<script>
import Systembar from '@/components/SystemBar'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FABIcon from '@/components/FABIcon.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FABIcon,
    Systembar,
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    background() {
      if (this.theme === 'dark') {
        return 'linear-gradient(to right top, rgba(195,126,9), rgba(68,70,91)'
      } else {
        return 'linear-gradient(to right top, rgba(34,159,255,.3), rgba(253,250,119,.3))'
      }
    },
  },
  mounted() {
    this.storeToken(
      localStorage.getItem('token'),
      JSON.parse(localStorage.getItem('user'))
    )
  },
  methods: {
    storeToken(token, user) {
      if (process.browser) {
        this.$store.commit('update', { token, user })
      }
    },
  },
}
</script>

<style>
body {
  overflow: hidden;
  -ms-overflow-style: none;
}

body::-webkit-scrollbar {
  width: 0 !important;
}
body {
  overflow: -moz-scrollbars-none;
}
</style>
