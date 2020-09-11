<template>
  <v-stepper v-model="e6" vertical>
    <v-card-title>Coaching</v-card-title>
    <v-stepper-step :complete="e6 > 1" step="1">Liga actual</v-stepper-step>
    <v-stepper-content step="1">
      <CoachingStepOne @back="goBackCoaching" @clicked="makePlayer" />
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 2" step="2">Servicio</v-stepper-step>
    <v-stepper-content step="2">
      <CoachingStepTwo @back="goBack" @finished="finishForm" />
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import champions from '@/utils/champions'
import CoachingStepOne from '@/components/Servicios/Coaching/CoachingStepOne.vue'
import CoachingStepTwo from '@/components/Servicios/Coaching/CoachingStepTwo.vue'
export default {
  components: {
    CoachingStepOne,
    CoachingStepTwo,
  },
  data: () => ({
    e6: 1,
    url:
      'https://wa.me/5493416291344?text=Hola, estaría interesado en comprar un',
    servicio: 2,
    champions: Object.values(champions),
    player: {
      rank: {
        league: '',
        division: '',
      },
    },
  }),
  methods: {
    getChampionName(key) {
      for (const i in this.champions) {
        if (this.champions[i].key == key) {
          return this.champions[i].name
        }
      }
    },
    makePlayer(form) {
      this.player = Object.assign(this.player, form)
      this.e6++
    },
    finishForm(form) {
      this.player = Object.assign(this.player, form)
      this.payService()
    },
    goBack() {
      this.e6--
    },
    goBackCoaching() {
      this.e6 = 1
    },
    payService() {
      this.url = this.url.concat(' COACHING')
      if (this.player.role.length > 0 && this.player.champions.length == 0) {
        // SI PIDE COACH CON ROLES
        this.url = this.url.concat(` en el rol de ${this.player.role[0]}`)
      } else if (
        this.player.role.length == 0 &&
        this.player.champions.length > 0
      ) {
        // SI PIDE COACH CON CAMPEONES
        this.url = this.url.concat(
          ` con ${this.getChampionName(this.player.champions[0])}`
        )
      } else if (
        this.player.role.length > 0 &&
        this.player.champions.length > 0
      ) {
        // SI PIDE COACH CON ROLES Y CAMPEONES
        this.url = this.url.concat(
          ` en el rol de ${this.player.role[0]} con ${this.getChampionName(
            this.player.champions[0]
          )}`
        )
      }
      this.url = this.url.concat(
        `, actualmente soy ${this.player.rank.league.toUpperCase()} ${
          this.player.rank.division
        }`
      )
      this.url = this.url.concat(' espero su respuesta, muchas gracias.')
      window.open(this.url)
    },
  },
}
</script>
