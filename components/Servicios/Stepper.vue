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
      <CoachingStepOne
        v-if="servicio === 1"
        @back="goBack"
        @clicked="makePlayer"
      />
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Liga deseada</v-stepper-step>
    <v-stepper-content step="3">
      <EloboostStepTwo
        v-if="servicio === 0 && player.service == 'Divisiones'"
        @back="goBack"
        @clicked="makePlayer"
      />
      <EloboostStepTwoMatches
        v-if="servicio === 0 && player.service == 'Victorias'"
        @back="goBack"
        @clicked="makePlayer"
      />
      <EloboostStepTwoMatches
        v-if="servicio === 0 && player.service == 'Partidas de posicionamiento'"
        placements
        @back="goBack"
        @clicked="makePlayer"
      />
      <CoachingStepTwo
        v-if="servicio === 1"
        @back="goBack"
        @clicked="makePlayer"
      />
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 4" step="4">Opcional</v-stepper-step>
    <v-stepper-content step="4">
      <EloboostStepThree
        v-if="servicio === 0"
        @back="goBack"
        @clicked="makePlayer"
      />
      <CoachingStepThree
        v-if="servicio === 1"
        @back="goBack"
        @clicked="makePlayer"
      />
    </v-stepper-content>
    <v-stepper-step step="5">¡Listo!</v-stepper-step>
    <v-stepper-content step="5">
      <v-btn @click="payService">
        PAGAR
      </v-btn>
      <v-btn @click="goBack">
        ATRAS
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import ServiciosCarousel from '@/components/Servicios/ServiciosCarousel.vue'
import EloboostStepOne from '@/components/Servicios/Eloboost/EloboostStepOne.vue'
import EloboostStepTwo from '@/components/Servicios/Eloboost/EloboostStepTwo.vue'
import EloboostStepTwoMatches from '@/components/Servicios/Eloboost/EloboostStepTwoMatches.vue'
import EloboostStepThree from '@/components/Servicios/Eloboost/EloboostStepThree.vue'
import CoachingStepOne from '@/components/Servicios/Coaching/CoachingStepOne.vue'
import CoachingStepTwo from '@/components/Servicios/Coaching/CoachingStepTwo.vue'
import CoachingStepThree from '@/components/Servicios/Coaching/CoachingStepThree.vue'
export default {
  components: {
    ServiciosCarousel,
    EloboostStepOne,
    EloboostStepTwo,
    EloboostStepThree,
    EloboostStepTwoMatches,
    CoachingStepOne,
    CoachingStepTwo,
    CoachingStepThree,
  },
  data: () => ({
    e6: 1,
    servicio: 2,
    player: {
      username: '',
      password: '',
      email: '',
      phone: '',
      rank: {
        league: '',
        division: '',
      },
      service: '',
    },
  }),
  methods: {
    fun(servicio) {
      if (servicio === 2) {
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
    async payService() {
      try {
        await this.$axios.post('/eloboosts', {
          username: this.player.username,
          password: this.player.password,
          email: this.player.email,
          phone: this.player.phone,
          rank: this.player.rank,
          server: this.player.server,
          queue: this.player.queue,
          service: this.player.service,
          boost: this.player.eloboost,
          lpGains: this.player.lpGains,
          desiredLeague: this.player.desiredLeague,
          desiredDivision: this.player.desiredDivision,
          wins: this.player.wins,
          options: this.player.options,
        })
        this.$router.push('/eloboostpagado')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
