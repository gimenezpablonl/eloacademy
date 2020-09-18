<template>
  <div>
    <v-img src="img/landpage.jpg" :gradient="op">
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row :align="alignment" :justify="justify" style="height: 700px">
              <v-lazy v-model="presentationLazy" transition="scale-transition">
                <v-card color="transparent" outlined>
                  <v-card-title
                    class="opposite--text font-weight-bold display-4"
                    >Sube ELO</v-card-title
                  >
                  <v-card-text class="opposite--text display-2"
                    >Asistencia virtual personalizada</v-card-text
                  >
                </v-card>
              </v-lazy>
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
  data() {
    return {
      presentationLazy: false,
      alignment: 'center',
      justify: 'space-around',
    }
  },
  computed: {
    op() {
      return this.$vuetify.theme.dark
        ? 'to right top, rgba(195,126,9,.5), rgba(68,70,91,.5)'
        : 'to right top, rgba(34,159,255,.6), rgba(253,250,119,.6)'
    },
  },
}
</script>
