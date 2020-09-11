<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-card width="500">
          <v-form ref="form" v-model="valid">
            <v-container class="px-10">
              <v-row class="px-5" align="center" justify="center" no-gutters>
                <v-col cols="12" class="px-0">
                  <v-alert
                    v-model="error"
                    dismissible
                    type="error"
                    @input="close"
                  >
                    {{ errorMessage }}
                  </v-alert>
                </v-col>
                <v-col cols="12">
                  <v-card-title class="justify-center"
                    >Registrarse</v-card-title
                  >
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newuser.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newuser.username"
                    :rules="usernameRules"
                    label="Nombre de usuario"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newuser.password"
                    label="Contraseña"
                    type="password"
                    :rules="passwordRules"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="acceptTerms"
                    :rules="[(v) => !!v || '']"
                    required
                    color="opposite"
                  >
                    <span slot="label"
                      >He leído y acepto los
                      <a
                        class="opposite--text"
                        href="/terminos-y-condiciones"
                        target="_blank"
                        @click.stop
                        >Términos y Condiciones de uso</a
                      ></span
                    >
                  </v-checkbox>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="acceptPolicies"
                    :rules="[(v) => !!v || '']"
                    required
                    color="opposite"
                  >
                    <span slot="label"
                      >He leído y acepto las
                      <a
                        class="opposite--text"
                        href="/politicas-de-privacidad"
                        target="_blank"
                        @click.stop
                        >Políticas de privacidad</a
                      ></span
                    >
                  </v-checkbox>
                </v-col>
                <v-col cols="auto" class="my-3">
                  <v-btn
                    :disabled="!valid"
                    :loading="loading"
                    class="text-center"
                    color="accent2"
                    @click="register()"
                  >
                    <v-icon left>mdi-checkbox-marked-circle</v-icon>
                    Registrarse
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    loading: false,
    acceptPolicies: false,
    acceptTerms: false,
    usernames: [],
    newuser: {
      username: '',
      email: '',
      password: '',
    },
    error: false,
    errorMessage: '',
    emailRules: [
      (v) => !!v || 'El email es necesario',
      (v) => /.+@.+\..+/.test(v) || 'El email tiene que ser válido',
    ],
    usernameRules: [],
    passwordRules: [
      (v) => !!v || 'La contraseña es necesaria',
      (v) => {
        return (
          v.length > 7 ||
          'La contraseña tiene que tener por lo menos 8 carácteres'
        )
      },
    ],
  }),
  created() {
    this.initialize()
  },
  methods: {
    async register() {
      this.loading = true
      this.$refs.form.validate()
      try {
        await this.$axios.post('/users', this.newuser)
        this.$router.push('/')
      } catch (e) {
        this.error = true
        this.errorMessage = e
      }
    },
    initialize() {
      this.$axios.get('/usernames').then((res) => {
        this.usernames = res.data
        this.usernameRules = [
          (v) => !!v || 'El nombre de usuario es necesario',
          (v) => {
            return (
              v.length > 4 || 'El nombre tiene que tener más de 4 carácteres'
            )
          },
          (v) => {
            for (let i = 0; i < this.usernames.length; i++) {
              if (v == this.usernames[i]) {
                return 'El nombre de usuario ya está ocupado'
              }
            }
            return true
          },
        ]
      })
    },
    close() {
      this.loading = false
    },
  },
}
</script>

<style></style>
