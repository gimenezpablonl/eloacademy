<template>
  <v-container>
    <v-row class="flex-child">
      <v-col class="d-flex">
        <v-row justify="center" align="center" align-content="center">
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `green--text` }"
              color="green lighten-3"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  {{ eloboostsLength }} ELOBOOSTS
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
                    <v-list-item-title>
                      <b>{{ eloboostsLength }} Eloboosts</b>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <b>{{ eloboostsDone }}</b> completados
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <b>{{ eloboostsLength - eloboostsDone }}</b> sin completar
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `purple--text` }"
              color="purple lighten-3"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  {{ coachingsLength }} COACHINGS
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
                    <v-list-item-title>
                      <b>{{ coachingsLength }} Coachings</b>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <b>{{ coachingsDone }}</b> completados
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <b>{{ coachingsLength - coachingsDone }}</b>
                      sin completar
                    </v-list-item-subtitle>
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
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    this.getData()
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  methods: {
    getData() {
      this.$axios.get('/alldata').then((res) => {
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
