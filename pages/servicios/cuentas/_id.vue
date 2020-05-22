<template>
  <div>
    <v-content>
      <v-container fluid>
        <AccountDetails v-if="account != {}" :account="account" />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import AccountDetails from '@/components/Servicios/Cuentas/AccountDetails'
export default {
  components: {
    AccountDetails,
  },
  data() {
    return {
      account: {},
    }
  },
  mounted() {
    this.$axios
      .get('/accounts/' + this.$router.currentRoute.params.id)
      .then((res) => {
        this.account = res.data.account
      })
  },
}
</script>
