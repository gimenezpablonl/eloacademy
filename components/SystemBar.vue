<template>
  <v-system-bar app window absolute color="rgba(0, 0, 0,0.2)">
    <v-lazy v-model="bar" transition="slide-x-transition">
      <v-row no-gutters class="mx-4" align="center">
        <a
          href="https://www.instagram.com/elo_academy/"
          style="text-decoration: none;"
          target="_blank"
          ><v-icon class="mx-1"> mdi-instagram </v-icon>
        </a>
        <a
          href="https://www.facebook.com/EloAcademyLAS/"
          style="text-decoration: none;"
          target="_blank"
          ><v-icon class="mx-1"> mdi-facebook </v-icon>
        </a>
        <a
          href="mailto:eloacademy@gmail.com"
          style="text-decoration: none;"
          target="_blank"
          ><v-icon class="mx-1"> mdi-email </v-icon>
        </a>
        <a
          href="https://wa.me/5493416291344"
          style="text-decoration: none;"
          target="_blank"
          ><v-icon class="mx-1"> mdi-whatsapp </v-icon>
        </a>
      </v-row>
    </v-lazy>
  </v-system-bar>
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
