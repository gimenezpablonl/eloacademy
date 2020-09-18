<template>
  <div>
    <v-img
      src="/img/Mundo.jpg"
      gradient="rgba(68,70,91,.5), rgba(183,28,28,.5)"
    >
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row :align="alignment" :justify="justify" style="height: 700px">
              <v-card color="transparent" outlined>
                <v-card-title class="opposite--text font-weight-bold display-3">
                  ERROR {{ error.statusCode }}</v-card-title
                >
                <v-card-text class="opposite--text display-1">{{
                  error.statusCode === 404
                    ? 'Página no encontrada'
                    : 'Ocurrió un error inesperado'
                }}</v-card-text>
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
  layout: 'nofb',
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Error 404',
      otherError: 'Oops!',
      alignment: 'center',
      justify: 'space-around',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
<style>
body {
  overflow: hidden;

  -ms-overflow-style: none;
}

body::-webkit-scrollbar {
  width: 0 !important;
}
body {
  overflow: -moz-scrollbars-none;
}
</style>
