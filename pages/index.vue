<template>
  <div class="home">
    <Presentation />
    <Prioridades />
    <v-img max-height="500" src="img/parallax.gif">
      <v-container>
        <v-row
          no-gutters
          justify="center"
          align-content="center"
          align="center"
          style="height: 450px"
        >
          <v-col class="text-center" align-self="center" cols="12">
            <h1 class="white--text font-weight-bold display-3">
              JUEGA COMO UN PROFESIONAL
            </h1>
          </v-col>
        </v-row>
      </v-container></v-img
    >
    <Testimonios />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from '@/components/Inicio/Presentation.vue'
import Prioridades from '@/components/Inicio/Prioridades.vue'
import Testimonios from '@/components/Inicio/Testimonios.vue'
export default {
  components: {
    Presentation,
    Prioridades,
    Testimonios,
  },
  data: () => ({
    fab: false,
  }),
  head() {
    return {
      title: 'Sube ELO',
    }
  },
  layout: 'home',
}
</script>
