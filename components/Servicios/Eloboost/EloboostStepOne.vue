<template>
  <v-form ref="form" v-model="valid">
    <v-row align="center" justify="space-between" no-gutters>
      <v-col class="d-flex" cols="6" md="5" sm="10">
        <ServerPicker @changed="pickServer" />
      </v-col>
      <v-col class="d-flex" cols="6" md="5" sm="10">
        <queuePicker @changed="pickQueue" />
      </v-col>
    </v-row>
    <LeaguePicker @changed="pickLeague" @pickedDivision="pickDivision" />
    <v-row align="center" justify="space-between" no-gutters>
      <v-col class="d-flex" cols="6" md="5" sm="10">
        <v-select
          v-model="player.service"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="opposite"
          item-color="accent3"
          :items="services"
          label="Tipo de Servicio"
          solo
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="6" md="5" sm="10">
        <v-select
          v-model="player.eloboost"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="opposite"
          item-color="accent3"
          :items="eloboosts"
          label="Tipo de eloboost"
          solo
        ></v-select>
      </v-col>
      <v-col
        v-if="player.service != 'Partidas de posicionamiento'"
        class="d-flex"
        cols="6"
        md="5"
        sm="10"
      >
        <v-text-field
          v-if="player.service != 'Victorias'"
          v-model="player.lp"
          :rules="[
            (v) => !!v || 'Necesario',
            (v) => v <= 100 || 'No puedes tener más de 100PDL.',
          ]"
          required
          type="number"
          color="opposite"
          label="Puntos de liga actuales"
          solo
        ></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="6" md="5" sm="10">
        <v-select
          v-if="
            player.service != 'Partidas de posicionamiento' &&
            player.service != 'Victorias'
          "
          v-model="player.lpGain"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="opposite"
          item-color="accent3"
          :items="lpGains"
          label="Puntos de liga por victoria"
          solo
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" justify="end">
      <v-col cols="auto" align-self="end">
        <v-btn @click="passForm()">Siguiente</v-btn>
      </v-col>
      <v-col cols="auto" align-self="end">
        <v-btn outlined @click="$emit('back')">Volver</v-btn>
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
    eloboosts: ['Soloboost', 'Duoboost'],
    services: ['Divisiones', 'Victorias'],
    player: {
      rank: {
        league: '',
        division: '',
      },
      server: '',
      queue: '',
      service: '',
      eloboost: '',
    },
  }),
  methods: {
    pickLeague(league) {
      this.player.rank.league = league
      if (league === 'unranked') {
        this.services = ['Partidas de posicionamiento']
        this.player.service = 'Partidas de posicionamiento'
      } else {
        this.services = ['Divisiones', 'Victorias']
      }
    },
    pickDivision(division) {
      this.player.rank.division = division
    },
    pickServer(server) {
      this.player.server = server
    },
    pickQueue(queue) {
      this.player.queue = queue
    },
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$emit('clicked', this.player)
      }
    },
  },
  head() {
    return {
      title: 'Sube ELO',
    }
  },
}
</script>
