<template>
  <v-parallax class="my-10" src="img/Parallax.jpg" height="400">
    <v-overlay value="true" absolute>
      <v-row>
        <v-col cols="12">
          <h1 class="accent3--text font-weight-regular title-1">
            ¿Tienes alguna pregunta?
          </h1>
          <h1 class="accent3--text subtitle-1">
            Nuestro soporte está activo 24/7 para responder sus dudas acerca de
            nuestro servicio
          </h1>
          <v-btn
            class="mt-4"
            color="accent3"
            href="https://wa.me/5493416291344"
            target="_blank"
            depressed
            >SOPORTE</v-btn
          >
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {}
</script>
