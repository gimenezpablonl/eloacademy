<template>
  <div>
    <ParallaxSeparator
      :src="'Galio.jpg'"
      :text="'NUESTROS SERVICIOS'"
    ></ParallaxSeparator>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="(servicio, idx) in servicios" :key="idx" cols="12" sm="4">
          <template>
            <v-hover v-slot:default="{ hover }">
              <v-card
                :to="servicio.url"
                raised
                class="mx-auto ma-5"
                max-width="250"
              >
                <v-img
                  class="white--text align-end"
                  height="400px"
                  src="/img/ahri.jpg"
                >
                  <v-card-title display-4>{{ servicio.nombre }}</v-card-title>
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out opposite darken-2 v-card--reveal title white--text"
                      style="height: 100%;"
                    >
                      {{ servicio.descripcion }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
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
    servicios: [
      {
        nombre: 'Divisiones',
        url: 'servicios/eloboost',
        descripcion: 'dd',
      },
      {
        nombre: 'Victorias',
        url: 'servicios/eloboost/victorias',
        descripcion: 'Ranked wins',
      },
      {
        nombre: 'Duo Boost',
        url: 'servicios/duoboost',
        descripcion: 'Duoboost',
      },
      {
        nombre: 'Primeras 10',
        url: 'servicios/posicionamientos',
        descripcion: 'Placements',
      },
      {
        nombre: 'Coaching',
        url: 'servicios/coaching',
        descripcion: 'Coaching',
      },
      {
        nombre: 'Mastery Boost',
        url: 'servicios/masteryboost',
        descripcion: 'Mastery boost',
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
