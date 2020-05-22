<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].primary }"
  >
    <Navbar />
    <SystemBar color="transparent" />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
import SystemBar from '@/components/SystemBar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    SystemBar,
  },

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
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
#main {
  margin-left: -1px;
}
</style>
