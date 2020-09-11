<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-title>Seleccionar un servicio</v-card-title>
        <ServiciosCarousel @clicked="fun" />
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import ServiciosCarousel from '@/components/Servicios/ServiciosCarousel.vue'
export default {
  components: {
    ServiciosCarousel,
  },
  methods: {
    fun(servicio) {
      if (servicio === 0) {
        this.$router.push('/servicios/eloboost')
      }
      if (servicio === 1) {
        this.$router.push('/servicios/coaching')
      }
      if (servicio === 2) {
        this.$router.push('/servicios/cuentas')
      }
    },
  },
  head() {
    return {
      title: 'Servicios',
    }
  },
}
</script>
