<template>
  <div class="home">
    <Presentation />
    <Servicios ref="servicios" />
    <Prioridades />
    <Testimonios />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from '@/components/Inicio/Presentation.vue'
import Servicios from '@/components/Inicio/Servicios.vue'
import Prioridades from '@/components/Inicio/Prioridades.vue'
import Testimonios from '@/components/Inicio/Testimonios.vue'
export default {
  name: 'Home',
  components: {
    Presentation,
    Servicios,
    Prioridades,
    Testimonios,
  },
  head() {
    return {
      title: 'Sube ELO',
    }
  },
  layout: 'home',
}
</script>

<style scoped>
.home {
  margin-left: -1px;
}
</style>
