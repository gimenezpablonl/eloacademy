<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].primary }"
  >
    <Navbar />
    <Nuxt />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
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
<style></style>
