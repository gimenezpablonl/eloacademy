<template>
  <v-lazy v-model="bar">
    <v-system-bar app window absolute lights-out>
      <v-spacer></v-spacer>
      <a
        href="https://www.instagram.com/eloboost_academy/"
        style="text-decoration: none"
        target="_blank"
        ><v-icon> mdi-instagram </v-icon>
      </a>
      <a
        href="https://www.facebook.com/EloAcademyLAS/"
        style="text-decoration: none"
        target="_blank"
        ><v-icon> mdi-facebook </v-icon>
      </a>
      <a
        href="https://discord.gg/cvNcX36"
        style="text-decoration: none"
        target="_blank"
        ><v-icon> mdi-discord </v-icon>
      </a>
      <a
        href="https://wa.me/5493416291344"
        style="text-decoration: none"
        target="_blank"
        ><v-icon> mdi-whatsapp </v-icon>
      </a>
      <v-spacer></v-spacer>
    </v-system-bar>
  </v-lazy>
</template>

<script>
export default {
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
}
</script>
