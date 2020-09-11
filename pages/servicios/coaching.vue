<template>
  <v-content>
    <v-container>
      <CoachingStepper />
    </v-container>
  </v-content>
</template>

<script>
import CoachingStepper from '@/components/Servicios/Coaching/CoachingStepper.vue'
export default {
  name: 'Coaching',
  components: {
    CoachingStepper,
  },
  head() {
    return {
      title: 'Coaching',
    }
  },
}
</script>
