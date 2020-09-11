<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].primary }"
  >
    <v-navigation-drawer permanent fixed app color="primary" mini-variant>
      <v-list dense nav>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            nuxt-link
            :color="item.color"
            :to="{ name: item.route }"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </template>
              <span> {{ item.tooltip }} </span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Navbar />
    <v-content>
      <Nuxt />
    </v-content>
    <Footer class="px-10" />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Panel de control',
        icon: 'mdi-view-dashboard',
        route: 'admin',
        color: 'black lighten-3',
        tooltip: 'Dashboard',
      },
      {
        title: 'Eloboosts',
        icon: 'mdi-account-reactivate',
        route: 'admin-eloboosts',
        color: 'green lighten-3',
        tooltip: 'Eloboosts',
      },
      {
        title: 'Coachings',
        icon: 'mdi-school',
        route: 'admin-coachings',
        color: 'purple lighten-3',
        tooltip: 'Coachings',
      },
      {
        title: 'Cuentas',
        icon: 'mdi-store',
        route: 'admin-cuentas',
        color: 'red lighten-3',
        tooltip: 'Cuentas',
      },
      {
        title: 'Usuarios',
        icon: 'mdi-account-multiple',
        route: 'admin-usuarios',
        color: 'blue lighten-3',
        tooltip: 'Usuarios',
      },
    ],
    right: null,
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  watch: {
    group() {
      this.drawer = false
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
