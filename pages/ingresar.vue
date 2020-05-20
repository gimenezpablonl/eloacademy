<template>
  <div class="ingresar">
    <v-content>
      <v-container fluid>
        <UserAuthForm button-text="Ingresar" :submit-form="loginUser" />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm,
  },
  methods: {
    loginUser(loginInfo) {
      this.$store
        .dispatch('login', loginInfo)
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err))
    },
  },
}
</script>
