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
                <v-row justify="space-between" align="center">
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
                    <v-list-item-subtitle>
                      {{ eloboostsDone }} completados
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ eloboostsUnasigned }} sin asignar
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ eloboostsLength - eloboostsDone }} sin completar
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
                    <v-list-item-subtitle>
                      {{ coachingsDone }} completados
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ coachingsUnasigned }} sin asignar
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ coachingsLength - coachingsDone }}
                      sin completar
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `red--text` }"
              color="red lighten-3"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  {{ accountsLength }} CUENTAS
                </v-row>
                <v-row justify="space-between" align="center">
                  <v-col cols="auto">
                    <v-progress-circular
                      :rotate="180"
                      :size="100"
                      :width="10"
                      :value="accountsPercentage"
                      color="red darken-2"
                    >
                      {{ accountsPercentage }}%
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="auto" class="text-center">
                    <v-list-item-subtitle>
                      {{ accountsSold }} vendidas
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ accountsVerified }} en venta
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ accountsLength - accountsSold - accountsVerified }} sin
                      verificar
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `blue--text` }"
              color="blue lighten-3"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  {{ usersLength }} USUARIOS
                </v-row>
                <v-row justify="space-between" align="center">
                  <v-col cols="auto">
                    <v-progress-circular
                      :rotate="180"
                      :size="100"
                      :width="10"
                      :value="usersPercentage"
                      color="blue darken-2"
                    >
                      {{ usersPercentage }}%
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="auto" class="text-center">
                    <v-list-item-subtitle>
                      {{ usersAdmin }} administradores
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ usersBoosters }} boosters
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ usersLength - usersAdmin - usersBoosters }}
                      vendedores
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
  layout: 'admin',
  components: {},
  data() {
    return {
      data: {},
      eloboostsDone: 0,
      eloboostsUnasigned: 0,
      eloboostPercentage: 0,
      coachingsDone: 0,
      coachingsUnasigned: 0,
      coachingPercentage: 0,
      accountsVerified: 0,
      accountsSold: 0,
      accountsPercentage: 0,
      usersPercentage: 0,
      usersAdmin: 0,
      usersBoosters: 0,
      users: 0,
      interval: {},
      value: 0,
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
    accountsLength() {
      if (this.data.accounts) {
        return this.data.accounts.length
      } else {
        return 0
      }
    },
    usersLength() {
      if (this.data.users) {
        return this.data.users.length
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
        this.data.accounts.forEach((e) => {
          if (e.status == 1) {
            this.accountsSold++
          } else if (e.status == 2) {
            this.accountsVerified++
          }
        })
        this.accountsPercentage = this.getPercentage(
          this.accountsSold,
          this.data.accounts.length
        )
        this.data.users.forEach((e) => {
          if (e.role == 1) {
            this.usersBoosters++
          } else if (e.role == 2) {
            this.usersAdmin++
          } else {
            this.users++
          }
        })
        this.usersPercentage = this.getPercentage(
          this.data.users.length - this.usersAdmin - this.usersBoosters,
          this.data.users.length
        )
      })
      this.$axios.get('/boosters/5f449484681c06162c82dccd').then((res) => {
        this.eloboostsUnasigned = res.data.length
      })
      this.$axios.get('/coachs/5f449484681c06162c82dccd').then((res) => {
        this.coachingsUnasigned = res.data.length
      })
    },
    getPercentage(partial, total) {
      return Math.trunc((100 * partial) / total)
    },
  },
  head() {
    return {
      title: 'Panel de administración',
    }
  },
}
</script>
