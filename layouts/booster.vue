<template>
  <v-app
    id="main"
    :style="{
      backgroundColor: $vuetify.theme.themes[theme].primary,
      background: background,
    }"
  >
    <v-navigation-drawer permanent fixed app color="secondary" expand-on-hover>
      <v-list nav dense light>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ booster.username }}
              </v-list-item-title>
              <v-list-item-subtitle> Booster oficial </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            nuxt-link
            :to="{ name: item.route }"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon light>{{ item.icon }}</v-icon>
                  <v-badge
                    v-if="item.unassigneds > 0"
                    color="accent2"
                    bottom
                    overlap
                  >
                    <template v-slot:badge>
                      <span class="black--text"> {{ item.unassigneds }} </span>
                    </template>
                  </v-badge>
                </v-list-item-icon>
              </template>
              <span> {{ item.tooltip }} </span>
            </v-tooltip>
            <v-list-item-content>
              <v-list-item-title class="black--text">{{
                item.title
              }}</v-list-item-title>
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
    booster: {},
    drawer: false,
    mv: false,
    items: [
      {
        title: 'Panel de control',
        icon: 'mdi-view-dashboard',
        route: 'booster-dashboard',
        tooltip: 'Dashboard',
      },
      {
        title: 'Eloboosts',
        icon: 'mdi-rocket-launch',
        route: 'booster-eloboosts',
        tooltip: 'Eloboosts',
        unassigneds: 0,
      },
      {
        title: 'Coachings',
        icon: 'mdi-school',
        route: 'booster-coachings',
        tooltip: 'Coachings',
        unassigneds: 0,
      },
    ],
    right: null,
  }),
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
    getBooster() {
      if (this.$store.state.user != undefined) {
        return this.$store.state.user
      } else {
        return {}
      }
    },
  },
  created() {
    this.booster = this.getBooster
    this.$axios.get('/unassignedeloboosts').then((res) => {
      this.items[1].unassigneds = res.data.length
    })
    this.$axios.get('/unassignedcoachings').then((res) => {
      this.items[2].unassigneds = res.data.length
    })
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
