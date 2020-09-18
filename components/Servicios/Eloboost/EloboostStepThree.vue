<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col v-if="service === 'Divisiones'" cols="12">
        <LeaguePicker required @rankChanged="pickRank" />
      </v-col>
      <v-col v-if="service === 'Victorias'" cols="12">
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
import LeaguePicker from '@/components/Forms/LeaguePicker.vue'
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
    pickRank(rank) {
      this.player.desiredRank = rank
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
