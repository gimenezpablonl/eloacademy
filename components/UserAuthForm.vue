<template>
  <v-dialog v-model="dialog" width="500" overlay-color="primary">
    <template v-slot:activator="{ on }">
      <v-tab color="opposite" class="font-weight-bold" v-on="on">{{
        buttonText
      }}</v-tab>
    </template>
    <v-card :loading="loading" shaped width="500">
      <v-form ref="form" v-model="valid">
        <v-container class="px-10">
          <v-row class="px-5" align="center" justify="center" no-gutters>
            <v-col cols="12" class="px-0">
              <v-alert v-model="error" dismissible type="error" @input="close">
                {{ errorMessage }}
              </v-alert>
            </v-col>
            <v-col cols="12">
              <v-card-title class="justify-center">Iniciar sesión</v-card-title>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="userInfo.username"
                label="Nombre de usuario"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="userInfo.password"
                label="Contraseña"
                type="password"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="auto" class="my-3">
              <v-btn
                :disabled="!valid"
                :loading="loading"
                class="text-center"
                color="accent2"
                @click="login(userInfo)"
              >
                Iniciar sesión
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <a href="/registro" class="opposite--text"
                >No tengo cuenta, quiero registrarme</a
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: { buttonText: { type: String, default: null } },
  data() {
    return {
      valid: false,
      showPassword: false,
      dialog: false,
      loading: false,
      userInfo: {
        username: '',
        password: '',
      },
      error: false,
      errorMessage: '',
    }
  },
  methods: {
    login(loginInfo) {
      this.loading = true
      this.$store
        .dispatch('login', loginInfo)
        .then(() => this.$router.push('/'))
        .catch((err) => {
          this.error = true
          this.errorMessage = err
        })
    },
    close() {
      this.loading = false
    },
  },
}
</script>
