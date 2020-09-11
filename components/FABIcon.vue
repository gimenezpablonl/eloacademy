<template>
  <v-speed-dial
    v-model="fab"
    fixed
    direction="top"
    translate="slide-y-reverse-transition"
    bottom
    right
  >
    <template v-slot:activator>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-model="fab"
            v-bind="attrs"
            x-large
            color="accent3"
            dark
            fab
            v-on="on"
          >
            <v-icon v-if="fab" large>mdi-close</v-icon>
            <v-icon v-else large>mdi-message</v-icon>
          </v-btn>
        </template>
        <span>¡Chatea con nosotros!</span>
      </v-tooltip>
    </template>

    <v-btn
      href="https://wa.me/5493416291344"
      target="_blank"
      fab
      dark
      large
      color="whatsapp"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn
      href="https://www.instagram.com/eloboost_academy/"
      target="_blank"
      fab
      dark
      large
      color="instagram"
    >
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <v-btn
      href="https://www.facebook.com/EloAcademyLAS/"
      target="_blank"
      fab
      dark
      large
      color="facebook"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      href="https://discord.gg/cvNcX36"
      target="_blank"
      fab
      dark
      large
      color="discord"
    >
      <v-icon>mdi-discord</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: 'FABIcon',
  data: () => ({
    fab: false,
  }),
}
</script>
