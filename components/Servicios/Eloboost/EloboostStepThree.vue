<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="auto">
        <v-checkbox
          v-model="player.options.quickService"
          color="accent3"
          label="Servicio rápido"
        ></v-checkbox>
      </v-col>
      <v-col cols="auto">
        <v-checkbox
          v-model="player.options.streaming"
          color="accent3"
          label="Streaming"
        ></v-checkbox>
      </v-col>
      <v-col cols="auto">
        <v-checkbox
          v-model="player.options.hiddenChat"
          color="accent3"
          label="Servicio de chat desactivado"
        ></v-checkbox>
      </v-col>
      <v-col cols="auto">
        <RolePicker @changed="pickRole" />
      </v-col>
      <v-col cols="auto">
        <ChampionsPicker @changed="pickChampions" />
      </v-col>
    </v-row>
    <v-row align="center" justify="end">
      <v-col cols="auto" align-self="end">
        <v-btn @click="passForm()">Siguiente</v-btn>
      </v-col>
      <v-col cols="auto" align-self="end">
        <v-btn outlined @click="$emit('back')">Volver</v-btn>
      </v-col>
      {{ player.options }}
    </v-row>
  </v-form>
</template>

<script>
import ChampionsPicker from '@/components/Servicios/ChampionsPicker.vue'
import RolePicker from '@/components/Servicios/RolePicker'
export default {
  components: {
    ChampionsPicker,
    RolePicker,
  },
  data: () => ({
    valid: true,
    checkbox: true,
    player: {
      options: {
        quickService: false,
        streaming: false,
        hiddenChat: false,
        role: '',
        champions: [],
      },
    },
  }),
  methods: {
    passForm() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$emit('clicked', this.player)
      }
    },
    pickChampions(e) {
      this.player.options.champions = e
    },
    pickRole(role) {
      this.player.options.role = role
    },
  },
}
</script>
