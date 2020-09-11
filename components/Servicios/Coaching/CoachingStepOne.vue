<template>
  <v-form ref="form" v-model="valid">
    <LeaguePicker @changed="pickLeague" @pickedDivision="pickDivision" />
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
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
export default {
  components: {
    LeaguePicker,
  },
  data: () => ({
    valid: true,
    player: {
      rank: {
        league: '',
        division: '',
      },
    },
  }),
  methods: {
    pickLeague(league) {
      this.player.rank.league = league
    },
    pickDivision(division) {
      this.player.rank.division = division
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
      title: 'Coaching',
    }
  },
}
</script>
