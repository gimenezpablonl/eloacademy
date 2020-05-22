<template>
  <div>
    <v-lazy
      v-model="parallaxLazy"
      :options="{
        threshold: 1,
      }"
      transition="slide-x-transition"
    >
      <ParallaxSeparator
        :src="'Galio.jpg'"
        :text="'NUESTROS SERVICIOS'"
      ></ParallaxSeparator>
    </v-lazy>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="(servicio, idx) in servicios" :key="idx" cols="12" sm="4">
          <template>
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: 1,
              }"
              transition="scale-transition"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  color="primary"
                  flat
                  :to="servicio.url"
                  class="mx-auto ma-5"
                  max-width="250"
                >
                  <v-img
                    contain
                    class="opposite--text align-end"
                    height="400px"
                    :src="servicio.img"
                  >
                    <v-card-title class="text-center">{{
                      servicio.nombre
                    }}</v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out accent3 darken-2 v-card--reveal title dark--text"
                        style="height: 100%;"
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-lazy>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ParallaxSeparator from '@/components/ParallaxSeparator.vue'
export default {
  components: {
    ParallaxSeparator,
  },
  data: () => ({
    parallaxLazy: false,
    isActive: false,
    servicios: [
      {
        nombre: 'Divisiones',
        url: 'servicios/eloboost',
        descripcion: 'dd',
        img: 'img/challenger.png',
      },
      {
        nombre: 'Victorias',
        url: 'servicios/eloboost/victorias',
        descripcion: 'Ranked wins',
        img: 'img/challenger.png',
      },
      {
        nombre: 'Duo Boost',
        url: 'servicios/duoboost',
        descripcion: 'Duoboost',
        img: 'img/challenger.png',
      },
      {
        nombre: 'Primeras 10',
        url: 'servicios/posicionamientos',
        descripcion: 'Placements',
        img: 'img/unranked.png',
      },
      {
        nombre: 'Coaching',
        url: 'servicios/coaching',
        descripcion: 'Coaching',
        img: 'img/challenger.png',
      },
      {
        nombre: 'Cuentas',
        url: 'servicios/cuentas',
        descripcion:
          'Consigue tu cuenta smurf o nueva main con email sin verificar',
        img: 'img/challenger.png',
      },
    ],
  }),
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.6;
  position: absolute;
  width: 100%;
}
</style>
