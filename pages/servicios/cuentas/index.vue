<template>
  <div>
    <v-content>
      <v-container>
        <v-sheet elevation="20">
          <AccountCards :accounts="accounts" />
        </v-sheet>
      </v-container>
    </v-content>
  </div>
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
    this.$axios.get('/accounts').then((res) => {
      this.accounts = res.data
    })
  },
  head() {
    return {
      title: 'Venta de cuentas',
    }
  },
}
</script>
