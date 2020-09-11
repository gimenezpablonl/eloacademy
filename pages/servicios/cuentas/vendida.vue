<template>
  <div>
    <v-img src="/img/tf.jpg" gradient="rgba(68,70,255,.5), rgba(10,238,28,.5)">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row align="center" justify="center" style="height: 700px">
              <v-card color="transparent" outlined>
                <v-card-title class="white--text font-weight-bold display-1">
                  TU CUENTA HA SIDO INGRESADA CORRECTAMENTE</v-card-title
                >
                <v-card-text class="white--text title">
                  Ahora solo debes esperar a que verifiquemos la información, ya
                  puedes quedarte tranquilo :)
                </v-card-text>
              </v-card>
              <v-card color="transparent" outlined max-width="400">
                <v-sheet color="transparent">
                  <p class="transparent--text">
                    ELOBOOST ELOBOOST ELOBOOST ELOBOOST ELOBOOST ELOBOOST
                  </p></v-sheet
                >
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Cuenta vendida',
    }
  },
}
</script>

<style></style>
