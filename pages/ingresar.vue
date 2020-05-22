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
  head() {
    return {
      title: 'Iniciar sesión',
    }
  },
}
</script>
