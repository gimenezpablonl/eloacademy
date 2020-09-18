<template>
  <v-container>
    <v-row class="flex-child">
      <v-col class="d-flex">
        <v-row justify="center" align="center" align-content="center">
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `green--text` }"
              color="green lighten-4"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  <p class="green--text">
                    <b>{{ eloboostsLength }} ELOBOOSTS</b>
                  </p>
                </v-row>
                <v-row justify="center" align="center">
                  <v-col cols="auto">
                    <v-progress-circular
                      :rotate="180"
                      :size="100"
                      :width="10"
                      :value="eloboostPercentage"
                      color="green darken-2"
                    >
                      {{ eloboostPercentage }}%
                    </v-progress-circular>
                  </v-col>

                  <v-col cols="auto" class="text-center">
                    <v-list-item-title class="green--text">
                      <b>{{ eloboostsDone }}</b> completados
                    </v-list-item-title>
                    <v-list-item-title class="green--text">
                      <b>{{ eloboostsLength - eloboostsDone }}</b> sin completar
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `purple--text` }"
              color="purple lighten-4"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  <p class="purple--text">
                    <b>{{ coachingsLength }} COACHINGS</b>
                  </p>
                </v-row>
                <v-row justify="space-between" align="center">
                  <v-col cols="auto">
                    <v-progress-circular
                      :rotate="180"
                      :size="100"
                      :width="10"
                      :value="coachingPercentage"
                      color="purple darken-2"
                    >
                      {{ coachingPercentage }}%
                    </v-progress-circular>
                  </v-col>

                  <v-col cols="auto" class="text-center">
                    <v-list-item-title class="purple--text">
                      <b>{{ coachingsDone }}</b> completados
                    </v-list-item-title>
                    <v-list-item-title class="purple--text">
                      <b>{{ coachingsLength - coachingsDone }}</b>
                      sin completar
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'booster',
  components: {},
  data() {
    return {
      data: {},
      eloboostsDone: 0,
      eloboostPercentage: 0,
      coachingsDone: 0,
      coachingPercentage: 0,
    }
  },
  computed: {
    getBooster() {
      if (this.$store.state.user != undefined) {
        return this.$store.state.user
      } else {
        return {}
      }
    },
    eloboostsLength() {
      if (this.data.eloboosts) {
        return this.data.eloboosts.length
      } else {
        return 0
      }
    },
    coachingsLength() {
      if (this.data.coachings) {
        return this.data.coachings.length
      } else {
        return 0
      }
    },
  },
  mounted() {
    this.getData()
  },
  created() {
    this.booster = this.getBooster
  },
  methods: {
    getData() {
      this.$axios.get('/userdata/'.concat(this.booster._id)).then((res) => {
        this.data = res.data
        this.data.eloboosts.forEach((e) => {
          if (e.status == 1) {
            this.eloboostsDone++
          }
        })
        this.eloboostPercentage = this.getPercentage(
          this.eloboostsDone,
          this.data.eloboosts.length
        )
        this.data.coachings.forEach((e) => {
          if (e.status == 1) {
            this.coachingsDone++
          }
        })
        this.coachingPercentage = this.getPercentage(
          this.coachingsDone,
          this.data.coachings.length
        )
      })
    },
    getPercentage(partial, total) {
      return Math.trunc((100 * partial) / total)
    },
  },
  head() {
    return {
      title: 'Panel de booster',
    }
  },
}
</script>
