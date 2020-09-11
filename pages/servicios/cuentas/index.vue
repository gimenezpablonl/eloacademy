<template>
  <v-content>
    <v-container fluid>
      <AccountCards :accounts="accounts" />
    </v-container>
  </v-content>
</template>

<script>
import AccountCards from '@/components/Servicios/Cuentas/AccountCards'
export default {
  components: {
    AccountCards,
  },
  /*   middleware: 'auth', */
  data() {
    return {
      accounts: [],
    }
  },
  mounted() {
    this.$axios.get('/accountsverified').then((res) => {
      this.accounts = res.data
    })
  },
  head() {
    return {
      title: 'Cuentas',
    }
  },
}
</script>
