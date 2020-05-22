<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Panel de administración</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical color="accent3">
      <v-tab>
        <v-icon left>mdi-gamepad-variant</v-icon>
        Eloboost
      </v-tab>
      <v-tab>
        <v-icon left>mdi-chart-line</v-icon>
        Cuentas
      </v-tab>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Usuarios
      </v-tab>

      <v-tab-item>
        <EloboostCards class="mx-10" />
      </v-tab-item>
      <v-tab-item>
        <AccountCards class="mx-10" />
      </v-tab-item>
      <v-tab-item>
        <UsersCards class="mx-10" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import EloboostCards from '@/components/Admin/EloboostCards'
import AccountCards from '@/components/Admin/AccountCards'
import UsersCards from '@/components/Admin/UsersCards'
export default {
  components: {
    EloboostCards,
    AccountCards,
    UsersCards,
  },
}
</script>
