<template>
  <v-app-bar id="app-bar" app absolute flat color="transparent">
    <div class="d-flex align-center">
      <template v-if="$vuetify.theme.dark">
        <router-link to="/">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="/isotype-dark.svg"
            transition="scale-transition"
            width="50"
          />
        </router-link>
        <router-link to="/">
          <v-img
            id="logo"
            alt="Elo Academy"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            src="/text-dark.svg"
            transition="scale-transition"
            width="250"
          />
        </router-link>
      </template>
      <template v-else>
        <router-link to="/">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="/isotype.svg"
            transition="scale-transition"
            width="50"
          />
        </router-link>
        <router-link to="/">
          <v-img
            id="logo"
            alt="Elo Academy"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            src="/text.svg"
            transition="scale-transition"
            width="250"
          />
        </router-link>
      </template>
    </div>
    <v-spacer></v-spacer>
    <v-lazy v-model="navBarLazy" transition="slide-x-transition">
      <div class="d-flex flex-row">
        <v-tabs background-color="transparent" color="accent3" hide-slider>
          <v-tab
            class="font-weight-bold"
            nuxt-link
            :to="{
              name: 'servicios',
            }"
            >Servicios</v-tab
          >
          <v-menu v-if="isLoggedIn" offset-y>
            <template v-slot:activator="{ on }">
              <v-tab class="font-weight-bold" optional v-on="on">
                {{ returnName }}
              </v-tab>
            </template>
            <v-list>
              <v-list-item v-if="returnRole == 2" href="/admin">
                Panel de administración
              </v-list-item>
              <v-list-item v-if="returnRole == 1" href="/booster">
                Panel de booster
              </v-list-item>
              <v-list-item @click="logout"> Salir </v-list-item>
            </v-list>
          </v-menu>
          <UserAuthForm v-if="isLoggedIn === false" button-text="Ingresar" />
        </v-tabs>
      </div>
    </v-lazy>
  </v-app-bar>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  name: 'Navbar',
  components: { UserAuthForm },
  data: () => ({
    navBarLazy: false,
    loginError: false,
  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    returnName() {
      return this.$store.state.user.username
    },
    returnRole() {
      return this.$store.state.user.role
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style></style>
