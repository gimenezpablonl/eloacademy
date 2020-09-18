<template>
  <v-lazy v-model="bar">
    <v-system-bar height="30" app absolute dark lights-out>
      <v-card-title class="mx-2 body-2">Nuestras redes</v-card-title>
      <a
        href="https://www.instagram.com/eloboost_academy/"
        style="text-decoration: none"
        target="_blank"
        class="mx-1"
        ><v-icon> mdi-instagram </v-icon>
      </a>
      <a
        href="https://www.facebook.com/EloAcademyLAS/"
        style="text-decoration: none"
        target="_blank"
        class="mx-1"
        ><v-icon> mdi-facebook </v-icon>
      </a>
      <a
        href="https://discord.gg/cvNcX36"
        style="text-decoration: none"
        target="_blank"
        class="mx-1"
        ><v-icon> mdi-discord </v-icon>
      </a>
      <a
        href="https://wa.me/5493416291344"
        style="text-decoration: none"
        target="_blank"
        class="mx-1"
        ><v-icon> mdi-whatsapp </v-icon>
      </a>
      <v-spacer></v-spacer>
      <v-menu v-if="isLoggedIn" offset-y>
        <template v-slot:activator="{ on }">
          <v-tab optional v-on="on">
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
      <UserAuthForm v-if="!isLoggedIn" button-text="Ingresar" />
    </v-system-bar>
  </v-lazy>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm,
  },
  props: {
    color: {
      type: String,
      default: 'accent3',
    },
  },
  data() {
    return {
      bar: false,
    }
  },
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
