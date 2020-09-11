<template>
  <v-content>
    <v-container>
      <EloboostStepper />
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import EloboostStepper from '@/components/Servicios/Eloboost/EloboostStepper.vue'
export default {
  name: 'Eloboost',
  components: {
    EloboostStepper,
  },
  head() {
    return {
      title: 'Eloboost',
    }
  },
}
</script>
