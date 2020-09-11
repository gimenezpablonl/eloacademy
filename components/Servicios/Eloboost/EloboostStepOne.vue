<template>
  <v-form ref="form" v-model="valid">
    <v-row align="center" justify="space-between" no-gutters>
      <v-col class="d-flex" cols="5" md="5" sm="10">
        <ServerPicker @defchange="pickServer" />
      </v-col>
      <v-col class="d-flex" cols="5" md="5" sm="10">
        <QueuePicker @defchange="pickQueue" />
      </v-col>
    </v-row>
    <LeaguePicker @changed="pickLeague" @pickedDivision="pickDivision" />
    <v-row>
      <v-col
        v-if="player.rank.league !== 'Unranked'"
        class="d-flex"
        cols="5"
        md="5"
        sm="10"
      >
        <v-text-field
          v-model="player.lp"
          :rules="[(v) => !!v || 'Necesario', (v) => v <= maxLp || 'Inválido']"
          type="number"
          color="opposite"
          label="Puntos de liga actuales"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="5" md="5" sm="10">
        <v-select
          v-if="player.rank.league !== 'Unranked' && player.rank.league"
          v-model="player.lpGain"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="opposite"
          item-color="accent3"
          :items="lpGains"
          label="Puntos de liga por victoria"
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" justify="end">
      <v-col cols="auto" align-self="end">
        <v-btn :disabled="!valid" color="accent2" @click="passForm()">
          Siguiente
          <v-icon dark right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import ServerPicker from '@/components/Servicios/ServerPicker.vue'
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
import QueuePicker from '@/components/Servicios/QueuePicker.vue'
export default {
  components: {
    ServerPicker,
    LeaguePicker,
    QueuePicker,
  },
  data: () => ({
    valid: true,
    lpGains: ['1-10', '10-14', '15-17', '18-24+'],
    maxLp: 100,
    player: {
      server: '',
      queue: false,
      rank: {
        league: '',
        division: '',
      },
      lp: 0,
      lpGain: 0,
    },
  }),
  methods: {
    pickLeague(league) {
      this.player.rank.league = league
      this.maximazeLp()
    },
    pickDivision(division) {
      this.player.rank.division = division
    },
    pickServer(server) {
      this.player.server = server
    },
    pickQueue(queue) {
      if (queue == 'true') {
        this.player.queue = true
      } else {
        this.player.queue = false
      }
    },
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$emit('clicked', this.player)
      }
    },
    maximazeLp() {
      if (
        this.player.rank.league == 'Challenger' ||
        this.player.rank.league == 'Master' ||
        this.player.rank.league == 'Grandmaster'
      ) {
        this.maxLp = 2000
      } else {
        this.maxLp = 100
      }
    },
  },
  head() {
    return {
      title: 'Eloboost',
    }
  },
}
</script>
