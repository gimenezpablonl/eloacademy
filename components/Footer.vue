<template>
  <v-footer :app="app" :absolute="absolute" color="transparent">
    <v-card flat tile class="transparent opposite--text text-xs-center flex">
      <v-row align="end" align-content="end" justify="end">
        <v-col>
          <v-row justify="end" class="mx-auto"
            ><v-switch
              v-model="$vuetify.theme.dark"
              label="Modo oscuro"
            ></v-switch>
          </v-row>
          <v-row justify="end" class="mx-auto">Términos y condiciones</v-row>
          <v-row justify="end" class="mx-auto">Politicas de privacidad</v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="opposite--text text-center">
        &copy;{{ new Date().getFullYear() }} - <strong>Elo Academy</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  props: {
    app: {
      type: Boolean,
      default: false,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
}
</script>
