<template>
  <div>
    <v-img
      src="/img/Mundo.jpg"
      gradient="rgba(68,70,91,.5), rgba(183,28,28,.5)"
    >
      <v-container fluid>
        <v-row>
          <v-col>
            <v-row :align="alignment" :justify="justify" style="height: 700px;">
              <v-card color="transparent" outlined>
                <v-card-title class="opposite--text font-weight-bold display-3">
                  ERROR {{ error.statusCode }}</v-card-title
                >
                <v-card-text class="opposite--text display-1"
                  >Página no encontrada</v-card-text
                >
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
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
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

<style scoped>
h1 {
  font-size: 20px;
}
</style>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>
