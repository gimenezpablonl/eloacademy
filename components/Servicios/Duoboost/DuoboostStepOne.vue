<template>
  <v-form ref="form" v-model="valid">
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <ServerPicker @changed="pickServer" />
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <queuePicker @changed="pickQueue" />
      </v-col>
    </v-row>
    <LeaguePicker @changed="pickLeague" @pickedDivision="pickDivision" />
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <v-text-field
          v-model="player.lp"
          :rules="[(v) => !!v || 'Necesario']"
          required
          type="number"
          color="opposite"
          label="Puntos de liga actuales"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <v-select
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
    player: { league: '', division: 'I', server: '', queue: '' },
  }),
  methods: {
    pickLeague(league) {
      this.player.league = league
    },
    pickDivision(division) {
      this.player.division = division
    },
    pickServer(server) {
      this.player.server = server
    },
    pickQueue(queue) {
      this.player.queue = queue
    },
    passForm() {
      this.$refs.form.validate()
      // if(this.valid){
      this.$emit('clicked', this.player)
      // }
    },
  },
}
</script>
