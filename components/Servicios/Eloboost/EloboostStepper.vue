<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">Liga actual</v-stepper-step>
    <v-stepper-content step="1">
      <EloboostStepOne @back="goBack" @clicked="makePlayer" />
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 2" step="2">Servicio</v-stepper-step>
    <v-stepper-content step="2">
      <EloboostStepTwo
        :league="player.rank.league"
        @back="goBack"
        @clicked="makePlayer"
      />
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 3" step="3">Destino</v-stepper-step>
    <v-stepper-content step="3">
      <EloboostStepThree
        :service="player.service"
        @back="goBack"
        @clicked="makePlayer"
      />
    </v-stepper-content>
    <v-stepper-step :complete="e6 > 4" step="4">Extras</v-stepper-step>
    <v-stepper-content step="4">
      <EloboostStepFour @back="goBack" @finished="finishForm" />
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import champions from '@/utils/champions'
import EloboostStepOne from '@/components/Servicios/Eloboost/EloboostStepOne.vue'
import EloboostStepTwo from '@/components/Servicios/Eloboost/EloboostStepTwo.vue'
import EloboostStepThree from '@/components/Servicios/Eloboost/EloboostStepThree.vue'
import EloboostStepFour from '@/components/Servicios/Eloboost/EloboostStepFour.vue'
export default {
  components: {
    EloboostStepOne,
    EloboostStepTwo,
    EloboostStepThree,
    EloboostStepFour,
  },
  data: () => ({
    e6: 1,
    url: '',
    servicio: 2,
    champions: Object.values(champions),
    player: {
      rank: {},
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
    goBack() {
      this.e6--
    },
    finishForm(form) {
      this.player = Object.assign(this.player, form)
      this.payService()
    },
    payService() {
      // SI ES ELOBOOST
      this.url =
        'https://wa.me/5493416291344?text=Hola, estaría interesado en comprar un'
      this.url = this.url.concat(
        ` ELOBOOST, actualmente soy ${this.player.rank.league.toUpperCase()} `
      )
      if (
        this.player.rank.league !== 'Unranked' &&
        this.player.rank.league !== 'Master' &&
        this.player.rank.league !== 'Grandmaster' &&
        this.player.rank.league !== 'Challenger'
      ) {
        this.url = this.url.concat(`${this.player.rank.division}`)
      }
      if (this.player.rank.league !== 'Unranked') {
        this.url = this.url.concat(`${this.player.lp}LP`)
      }
      this.url = this.url.concat(` en el servidor de ${this.player.server}`)
      if (!this.player.queue) {
        this.url = this.url.concat(` en SOLO QUEUE`)
      } else {
        this.url = this.url.concat(` en FLEX`)
      }
      if (this.player.service == 'Divisiones') {
        // SI SON DIVISIONES
        this.url = this.url.concat(
          ` actualmente recibo ${
            this.player.lpGain
          } LP por win y quisiera llegar a ${this.player.desiredRank.league.toUpperCase()} ${
            this.player.desiredRank.division
          } a través de un`
        )
      } else {
        // SI SON VICTORIAS
        this.url = this.url.concat(
          ` y quisiera recibir ${this.player.wins} VICTORIAS, a través de un`
        )
      }
      if (!this.player.eloboost) {
        // SI ES BOOST NORMAL
        this.url = this.url.concat(` eloboost normal`)
        if (this.player.role.length > 0 && this.player.champions.length == 0) {
          this.url = this.url.concat(` en los roles de`)
          this.player.role.forEach((e) => {
            this.url = this.url.concat(` ${e}`)
          })
        } else if (
          this.player.role.length == 0 &&
          this.player.champions.length > 0
        ) {
          this.url = this.url.concat(` con`)
          this.player.champions.forEach((e) => {
            this.url = this.url.concat(` ${this.getChampionName(e)},`)
          })
        } else if (
          this.player.role.length > 0 &&
          this.player.champions.length > 0
        ) {
          this.url = this.url.concat(` en los roles de`)
          this.player.role.forEach((e) => {
            this.url = this.url.concat(` ${e},`)
          })
          this.url = this.url.concat(` con`)
          this.player.champions.forEach((e) => {
            this.url = this.url.concat(` ${this.getChampionName(e)},`)
          })
        }
      } else {
        // SI ES DUOBOOST
        this.url = this.url.concat(` duoboost`)
      }
      this.url = this.url.concat(' espero respuesta muchas gracias.')
      window.open(this.url)
    },
  },
}
</script>
