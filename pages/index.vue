<template>
  <div class="home">
    <Presentation class="mb-10" />
    <v-lazy
      :options="{
        threshold: 1,
      }"
      transition="scale-transition"
    >
      <Ventajas class="mb-10" />
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 1,
      }"
      transition="scale-transition"
    >
      <Prioridades class="mb-10" />
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 1,
      }"
      transition="scale-transition"
    >
      <Parallax class="mb-10" />
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 1,
      }"
      transition="scale-transition"
    >
      <Testimonios />
    </v-lazy>
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from '@/components/Inicio/Presentation.vue'
import Prioridades from '@/components/Inicio/Prioridades.vue'
import Testimonios from '@/components/Inicio/Testimonios.vue'
import Ventajas from '@/components/Inicio/Ventajas.vue'
import Parallax from '@/components/Inicio/Parallax.vue'
export default {
  components: {
    Presentation,
    Prioridades,
    Testimonios,
    Ventajas,
    Parallax,
  },
  data: () => ({
    parallaxLazy: false,
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
