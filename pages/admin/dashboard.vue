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
                    <v-list-item-title>
                      <b>{{ eloboostsDone }}</b> completados
                    </v-list-item-title>
                    <v-list-item-title>
                      <b>{{ eloboostsUnassigned }}</b> sin asignar
                    </v-list-item-title>
                    <v-list-item-title>
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
                      <b>{{ coachingsUnassigned }}</b> sin asignar
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
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `red--text` }"
              color="red lighten-4"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  <p class="red--text">
                    <b>{{ accountsLength }} CUENTAS</b>
                  </p>
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
                    <v-list-item-title class="red--text">
                      <b>{{ accountsSold }}</b> vendidas
                    </v-list-item-title>
                    <v-list-item-title class="red--text">
                      <b>{{ accountsVerified }}</b> en venta
                    </v-list-item-title>
                    <v-list-item-title class="red--text">
                      <b>{{
                        accountsLength - accountsSold - accountsVerified
                      }}</b>
                      sin verificar
                    </v-list-item-title>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              v-ripple="{ class: `blue--text` }"
              color="blue lighten-4"
              class="d-inline-block"
            >
              <v-container>
                <v-row justify="center" class="title">
                  <p class="blue--text">
                    <b>{{ usersLength }} USUARIOS</b>
                  </p>
                </v-row>
                <v-row justify="space-between" align="center">
                  <v-col cols="auto" class="text-center">
                    <v-list-item-title class="blue--text">
                      <b>{{ usersAdmin }}</b> administradores
                    </v-list-item-title>
                    <v-list-item-title class="blue--text">
                      <b>{{ usersBoosters }}</b> boosters
                    </v-list-item-title>
                    <v-list-item-title class="blue--text">
                      <b>{{ usersLength - usersAdmin - usersBoosters }}</b>
                      vendedores
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
  layout: 'admin',
  components: {},
  data() {
    return {
      data: {},
      unassignedBoosterId: '',
      eloboostsDone: 0,
      eloboostsUnassigned: 0,
      eloboostPercentage: 0,
      coachingsDone: 0,
      coachingsUnassigned: 0,
      coachingPercentage: 0,
      accountsVerified: 0,
      accountsSold: 0,
      accountsPercentage: 0,
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
  created() {
    this.booster = this.getBooster
  },
  mounted() {
    this.getData()
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
      })
      this.$axios.get('/unassignedbooster').then((res) => {
        this.unassignedBoosterId = res.data._id
        this.$axios.get(`/coachs/${this.unassignedBoosterId}`).then((res) => {
          this.coachingsUnassigned = res.data.length
        })
        this.$axios.get(`/boosters/${this.unassignedBoosterId}`).then((res) => {
          this.eloboostsUnassigned = res.data.length
        })
      })
    },
    getPercentage(partial, total) {
      if (total === 0 || total === undefined) {
        return 0
      }
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
