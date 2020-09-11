<template>
  <v-form ref="form" v-model="valid">
    <LeaguePicker
      v-if="service === 'Divisiones'"
      @changed="pickLeague"
      @pickedDivision="pickDivision"
    />
    <v-row v-if="service === 'Victorias'" align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <v-text-field
          v-model="player.wins"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="opposite"
          label="Victorias"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" justify="end">
      <v-col cols="auto" align-self="end">
        <v-btn color="secondary" @click="$emit('back')">
          Volver
          <v-icon dark right>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
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
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
export default {
  components: {
    LeaguePicker,
  },
  props: {
    service: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data: () => ({
    valid: true,
    lpGains: ['1-10', '10-14', '15-17', '18-24+'],
    player: {
      wins: 0,

      desiredRank: {
        league: '',
        division: '',
      },
    },
  }),
  methods: {
    pickLeague(league) {
      this.player.desiredRank.league = league
    },
    pickDivision(division) {
      this.player.desiredRank.division = division
    },
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$emit('clicked', this.player)
      }
    },
  },
}
</script>
