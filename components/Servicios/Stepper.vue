<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Seleccionar un servicio
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card flat>
        <ServiciosCarousel @clicked="fun" />
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Liga actual</v-stepper-step>
    <v-stepper-content step="2">
      <EloboostStepOne
        v-if="servicio === 0"
        @back="goBack"
        @clicked="makePlayer"
      />
      <DuoboostStepOne
        v-if="servicio === 1"
        @back="goBack"
        @clicked="makePlayer"
      />
      <CoachingStepOne
        v-if="servicio === 2"
        @back="goBack"
        @clicked="makePlayer"
      />
      <EloboostStepOne v-if="servicio === 3" />
      <EloboostStepOne v-if="servicio === 4" />
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Liga deseada</v-stepper-step>
    <v-stepper-content step="3">
      <EloboostStepTwo
        v-if="servicio === 0"
        @back="goBack"
        @clicked="makePlayer"
      />
      <DuoboostStepTwo
        v-if="servicio === 1"
        @back="goBack"
        @clicked="makePlayer"
      />
      <CoachingStepTwo
        v-if="servicio === 2"
        @back="goBack"
        @clicked="makePlayer"
      />
      <EloboostStepTwo v-if="servicio === 3" />
      <EloboostStepTwo v-if="servicio === 4" />
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 4" step="4">Opcional</v-stepper-step>
    <v-stepper-content step="4">
      <EloboostStepThree
        v-if="servicio === 0"
        @back="goBack"
        @clicked="makePlayer"
      />
      <DuoboostStepThree
        v-if="servicio === 1"
        @back="goBack"
        @clicked="makePlayer"
      />
      <CoachingStepThree
        v-if="servicio === 2"
        @back="goBack"
        @clicked="makePlayer"
      />
      <EloboostStepTwo v-if="servicio === 3" />
      <EloboostStepTwo v-if="servicio === 4" />
    </v-stepper-content>
    <v-stepper-step step="5">¡Listo!</v-stepper-step>
  </v-stepper>
</template>

<script>
import ServiciosCarousel from '@/components/Servicios/ServiciosCarousel.vue'
import EloboostStepOne from '@/components/Servicios/Eloboost/EloboostStepOne.vue'
import EloboostStepTwo from '@/components/Servicios/Eloboost/EloboostStepTwo.vue'
import EloboostStepThree from '@/components/Servicios/Eloboost/EloboostStepThree.vue'
import DuoboostStepOne from '@/components/Servicios/Duoboost/DuoboostStepOne.vue'
import DuoboostStepTwo from '@/components/Servicios/Duoboost/DuoboostStepTwo.vue'
import DuoboostStepThree from '@/components/Servicios/Duoboost/DuoboostStepThree.vue'
import CoachingStepOne from '@/components/Servicios/Coaching/CoachingStepOne.vue'
import CoachingStepTwo from '@/components/Servicios/Coaching/CoachingStepTwo.vue'
import CoachingStepThree from '@/components/Servicios/Coaching/CoachingStepThree.vue'
export default {
  components: {
    ServiciosCarousel,
    EloboostStepOne,
    EloboostStepTwo,
    EloboostStepThree,
    DuoboostStepOne,
    DuoboostStepTwo,
    DuoboostStepThree,
    CoachingStepOne,
    CoachingStepTwo,
    CoachingStepThree,
  },
  data: () => ({
    e6: 1,
    servicio: 2,
    player: {},
  }),
  methods: {
    fun(servicio) {
      if (servicio === 3) {
        this.$router.push('/servicios/cuentas')
      } else {
        this.e6 = 2
        this.servicio = servicio
      }
    },
    makePlayer(form) {
      this.player = Object.assign(this.player, form)
      this.e6++
    },
    goBack() {
      this.e6--
    },
  },
}
</script>
