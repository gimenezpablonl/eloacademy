<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].primary }"
  >
    <Navbar />
    <Nuxt />
    <FABIcon />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FABIcon from '@/components/FABIcon.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FABIcon,
  },
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
