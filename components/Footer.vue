<template>
  <v-footer class="pt-10" color="transparent">
    <v-row>
      <v-col cols="12" sm="4">
        <v-img src="/isologotype.svg"></v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <v-row class="mx-auto">Términos y condiciones</v-row>
        <v-row class="mx-auto">Politicas de privacidad</v-row>
      </v-col>
      <v-col cols="12" sm="4">
        <v-row class="mx-auto">Soporte</v-row>
        <v-row class="mx-auto">
          <v-switch
            v-model="$vuetify.theme.dark"
            hide-details
            color="secondary"
            label="Tema oscuro"
          ></v-switch
        ></v-row>
      </v-col>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Elo Academy</strong>
      </v-col>
      <v-col>
        <p class="overline">
          Elo Academy isn’t endorsed by Riot Games and doesn’t reflect the views
          or opinions of Riot Games or anyone officially involved in producing
          or managing League of Legends. League of Legends and Riot Games are
          trademarks or registered trademarks of Riot Games, Inc. League of
          Legends © Riot Games, Inc.
        </p></v-col
      >
    </v-row>
  </v-footer>
</template>

<script>
export default {}
</script>
