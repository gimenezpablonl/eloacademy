<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="12">
        <RolePicker @changed="pickRole" />
      </v-col>
      <v-col cols="12">
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
    pickChampions(e) {
      this.player.champions = e
    },
    pickRole(role) {
      this.player.role = role
    },
  },
}
</script>
