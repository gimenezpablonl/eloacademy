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
        <v-tabs background-color="transparent" hide-slider color="accent3">
          <v-tab
            class="font-weight-bold"
            exact
            nuxt-link
            :to="{
              name: 'index',
            }"
          >
            Inicio
          </v-tab>
          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on }">
              <v-tab
                class="font-weight-bold"
                exact
                nuxt-link
                :to="{
                  name: 'servicios-eloboost',
                }"
                v-on="on"
              >
                Eloboost
              </v-tab>
            </template>
          </v-menu>
          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on }">
              <v-tab
                class="font-weight-bold"
                exact
                nuxt-link
                :to="{
                  name: 'servicios-coaching',
                }"
                v-on="on"
              >
                Coaching
              </v-tab>
            </template>
          </v-menu>
          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on }">
              <v-tab
                class="font-weight-bold"
                exact
                nuxt-link
                :to="{
                  name: 'servicios-cuentas',
                }"
                v-on="on"
              >
                Cuentas
              </v-tab>
            </template>
          </v-menu>
        </v-tabs>
      </div>
    </v-lazy>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    navBarLazy: false,
  }),
}
</script>

<style></style>
