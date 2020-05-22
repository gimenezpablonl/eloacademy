<template>
  <v-content>
    <v-container>
      <v-row>
        <Stepper />
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import Stepper from '@/components/Servicios/Stepper.vue'
export default {
  name: 'Servicios',
  components: {
    Stepper,
  },
  head() {
    return {
      title: 'Servicios',
    }
  },
}
</script>

<style scoped>
.home {
  margin-left: -1px;
}
</style>
