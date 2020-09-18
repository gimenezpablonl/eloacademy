<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="6">
        <v-select
          v-model="player.service"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="accent3"
          outlined
          item-color="accent3"
          :items="services"
          prepend-inner-icon="mdi-snake"
          label="Tipo de Servicio"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="player.eloboost"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="accent3"
          outlined
          item-color="accent3"
          :items="eloboosts"
          prepend-inner-icon="mdi-shape"
          item-text="text"
          item-value="value"
          label="Tipo de eloboost"
        ></v-select>
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
export default {
  props: {
    league: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data: () => ({
    valid: true,
    eloboosts: [
      {
        text: 'Eloboost normal',
        value: 'false',
      },
      { text: 'Duoboost', value: 'true' },
    ],
    player: {
      service: '',
      eloboost: '',
    },
  }),
  computed: {
    services() {
      if (this.league == 'Unranked' || this.league == 'Challenger') {
        return ['Victorias']
      } else {
        return ['Divisiones', 'Victorias']
      }
    },
  },
  methods: {
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        if (this.player.eloboost == 'true') {
          this.player.eloboost = true
        } else {
          this.player.eloboost = false
        }
        this.$emit('clicked', this.player)
      }
    },
  },
}
</script>

<style></style>
