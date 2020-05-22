<template>
  <v-form ref="form" v-model="valid">
    <LeaguePicker @changed="pickLeague" @pickedDivision="pickDivision" />
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <v-text-field
          v-model="player.desiredLp"
          :rules="[(v) => !!v || 'Necesario']"
          required
          value="0"
          type="number"
          color="opposite"
          label="Puntos de liga deseados"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
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
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
export default {
  components: {
    LeaguePicker,
  },
  data: () => ({
    valid: true,
    lpGains: ['1-10', '10-14', '15-17', '18-24+'],
    player: { desiredLeague: '', desiredDivision: 'I' },
  }),
  methods: {
    pickLeague(league) {
      this.player.desiredLeague = league
    },
    pickDivision(division) {
      this.player.desiredDivision = division
    },
    passForm() {
      this.$refs.form.validate()
      this.$emit('clicked', this.player)
    },
  },
}
</script>
