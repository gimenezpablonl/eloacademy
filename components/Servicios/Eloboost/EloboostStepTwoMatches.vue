<template>
  <v-form ref="form" v-model="valid">
    <v-row align="center" no-gutters>
      <v-col class="d-flex" cols="auto" md="5" sm="10">
        <v-text-field
          v-model="player.wins"
          :rules="[(v) => !!v || 'Necesario']"
          required
          color="opposite"
          :label="label"
          type="number"
          solo
        ></v-text-field>
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
export default {
  props: {
    placements: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    valid: true,
    label: '',
    player: {},
  }),
  created() {
    this.label = this.placements
      ? 'Partidas de posicionamiento restantes'
      : 'Victorias'
  },
  methods: {
    passForm() {
      this.$refs.form.validate()
      this.$emit('clicked', this.player)
    },
  },
}
</script>
