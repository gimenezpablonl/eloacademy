<template>
  <v-footer color="dark">
    <v-card flat tile class="transparent opposite--text flex">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center" class="py-10">
            <v-btn
              href="https://wa.me/5493416291344"
              target="_blank"
              fab
              class="mr-2"
              dark
              small
              color="whatsapp"
            >
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn
              href="https://www.instagram.com/eloboost_academy/"
              target="_blank"
              fab
              class="mr-2"
              dark
              small
              color="instagram"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              href="https://www.facebook.com/EloAcademyLAS/"
              target="_blank"
              fab
              dark
              class="mr-2"
              small
              color="facebook"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              href="https://discord.gg/cvNcX36"
              target="_blank"
              fab
              dark
              class="mr-2"
              small
              color="discord"
            >
              <v-icon>mdi-discord</v-icon>
            </v-btn>
            <v-btn fab dark small color="accent3">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center" align="center">
            <h6 class="subtitle-1 accent3--text mx-5">Nosotros</h6>
            <h6 class="subtitle-1 accent3--text mx-5">
              Términos de condiciones
            </h6>
            <h6 class="subtitle-1 accent3--text mx-5">
              Políticas de privacidad
            </h6>
            <h6 class="subtitle-1 accent3--text mx-5">
              <v-switch
                v-model="$vuetify.theme.dark"
                inset
                class="accent3--text"
                color="accent3"
              >
                <template v-slot:label>
                  <span class="accent3--text">{{
                    `Modo oscuro ${
                      $vuetify.theme.dark === true ? 'activado' : 'desactivado'
                    }`
                  }}</span>
                </template>
              </v-switch>
            </h6>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="accent3--text text-center">
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
