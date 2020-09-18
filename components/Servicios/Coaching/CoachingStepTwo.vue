<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="12">
        <p>
          Puedes elegir un rol para orientar el coaching hacia el gameplay
          específico de ese rol o pasar al siguiente paso.
        </p>
        <RolePicker @changed="pickRole" />
      </v-col>
      <v-col cols="auto" md="12">
        <p>
          Puedes elegir un campeón para orientar el coaching hacia el gameplay
          específico de ese campeón o pasar al siguiente paso.
        </p>
        <ChampionsPicker @changed="pickChampions" />
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
        <v-btn color="success" @click="passForm()">
          Solicitar eloboost
          <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import ChampionsPicker from '@/components/Forms/ChampionsPicker.vue'
import RolePicker from '@/components/Forms/RolePicker'
export default {
  components: {
    ChampionsPicker,
    RolePicker,
  },
  data: () => ({
    valid: true,
    checkbox: true,
    player: {
      role: [],
      champions: [],
    },
  }),
  methods: {
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$emit('finished', this.player)
      }
    },
    pickRole(role) {
      this.player.role = role
    },
    pickChampions(e) {
      this.player.champions = e
    },
  },
}
</script>
