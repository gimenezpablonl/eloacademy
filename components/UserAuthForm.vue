<template>
  <v-dialog v-model="dialog" width="500" overlay-color="primary">
    <template v-slot:activator="{ on }">
      <v-tab color="opposite" class="font-weight-bold" v-on="on">{{
        buttonText
      }}</v-tab>
    </template>
    <v-card>
      <v-alert v-model="error" dismissible type="error">
        {{ errorMessage }}
      </v-alert>
      <v-card-title>{{ buttonText }}</v-card-title>
      <v-form v-model="valid">
        <v-container fluid>
          <v-text-field
            v-model="userInfo.username"
            label="Email"
            :rules="[required('email'), emailFormat()]"
          />
          <v-text-field
            v-model="userInfo.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            counter="true"
            :rules="[required('password'), minLength('password', 8)]"
            @click:append="showPassword = !showPassword"
          />
          <v-row no-gutters class="d-flex justify-space-between">
            <v-btn :disabled="!valid" @click="loginUser(userInfo)">
              {{ buttonText }}</v-btn
            >
            <v-btn
              color="accent2"
              nuxt-link
              to="/registro"
              @click="dialog = false"
              >Registrarse</v-btn
            >
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import validations from '@/utils/validations'
export default {
  props: { buttonText: { type: String, default: null } },
  data() {
    return {
      valid: false,
      showPassword: false,
      dialog: false,
      userInfo: {
        username: '',
        password: '',
      },
      error: false,
      errorMessage: '',
      ...validations,
    }
  },
  methods: {
    loginUser(loginInfo) {
      this.$store
        .dispatch('login', loginInfo)
        .then(() => this.$router.push('/'))
        .catch((err) => {
          this.error = true
          this.errorMessage = err
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
