<template>
  <div class="ingresar">
    <v-content>
      <v-container>
        <v-card>
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
              <v-btn :disabled="!valid" @click="signUp(userInfo)">
                Registrarse</v-btn
              >
            </v-container>
          </v-form>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import validations from '@/utils/validations'
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      dialog: false,
      userInfo: {
        username: '',
        password: '',
      },
      ...validations,
    }
  },
  methods: {
    async signUp(loginInfo) {
      try {
        await this.$axios.post('/auth/signup', {
          username: loginInfo.username,
          password: loginInfo.password,
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
