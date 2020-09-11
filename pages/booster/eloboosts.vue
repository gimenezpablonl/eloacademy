<template>
  <v-container fluid>
    <v-data-table
      single-expand
      item-key="_id"
      show-expand
      expand-icon="mdi-arrow-expand-down"
      :headers="headers"
      :items="eloboosts"
      :search="search"
      sort-by="Usuario"
      class="elevation-3"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-card-title>Eloboosts</v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <ChampionDialog
            v-if="item.champions.length > 0"
            :champs="item.champions"
          />
          <v-chip v-for="rol in item.role" :key="rol" cols="auto">
            {{ rol }}
          </v-chip>
        </td>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-if="item.bstr == 'Sin asignar'"
              v-bind="attrs"
              small
              v-on="on"
              @click="pickEloboost(item)"
            >
              mdi-hand
            </v-icon>
          </template>
          <span>Boostear esta cuenta</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-if="item.bstr != 'Sin asignar' && !item.status"
              v-bind="attrs"
              small
              v-on="on"
              @click="endEloboost(item)"
            >
              mdi-check-bold
            </v-icon>
          </template>
          <span>Finalizar eloboost</span>
        </v-tooltip>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import ChampionDialog from '@/components/Admin/ChampionDialog'
export default {
  layout: 'booster',
  components: {
    ChampionDialog,
  },
  data: () => ({
    url: '/boosters/',
    search: '',
    headers: [
      { text: 'Ver', value: 'data-table-expand' },
      { text: 'Booster', value: 'bstr' },
      { text: 'Servidor', value: 'server' },
      { text: 'Cola', value: 'q' },
      {
        text: 'Usuario',
        value: 'username',
      },
      { text: 'Contraseña', value: 'password' },
      { text: 'Inicio', value: 'start' },
      { text: 'Destino', value: 'dest' },
      { text: 'Estado', value: 'stat' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    eloboosts: [],
  }),

  computed: {
    booster() {
      if (this.$store.state.user != undefined) {
        return this.$store.state.user
      } else {
        return {}
      }
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.$axios.get(this.url.concat(this.booster._id)).then((res) => {
        this.eloboosts = res.data
        this.$axios.get('/boosters/5f449484681c06162c82dccd').then((res) => {
          res.data.forEach((e) => {
            this.eloboosts.push(e)
          })
          this.eloboosts.forEach((e) => {
            if (e.booster == '5f449484681c06162c82dccd') {
              e.bstr = 'Sin asignar'
            } else {
              e.bstr = this.booster.username
            }
            e.server = e.server.toUpperCase()
            e.stat = e.status == true ? 'Finalizado' : 'En proceso'
            if (e.status) {
              e.password = '********'
            }
            e.q = e.queue == true ? 'Flex' : 'Solo'
            if (e.rank.division != undefined) {
              e.start = e.rank.league.toUpperCase().concat(' ', e.rank.division)
            } else {
              e.start = e.rank.league.toUpperCase()
            }
            e.start = e.start.concat(' ', e.lp, 'LP')
            if (e.wins != 0) {
              e.dest = e.wins.toString().concat(' WINS')
            } else {
              if (e.desiredRank.division != undefined) {
                e.dest = e.desiredRank.league
                  .toUpperCase()
                  .concat(' ', e.desiredRank.division)
              } else {
                e.dest = e.desiredRank.league.toUpperCase()
              }
              e.dest = e.dest.concat(' ', e.desiredLp, 'LP')
            }
          })
        })
      })
    },
    async pickEloboost(eloboost) {
      if (confirm('¿Estás seguro de que quieres realizar este eloboost?')) {
        const path = '/eloboosts/' + eloboost._id
        eloboost.booster = this.booster._id
        delete eloboost.createdAt
        try {
          await this.$axios.put(path, eloboost)
          this.initialize()
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
    async endEloboost(eloboost) {
      if (confirm('¿Estás seguro de que quieres finalizar este eloboost?')) {
        const path = '/eloboosts/' + eloboost._id
        eloboost.status = true
        try {
          await this.$axios.put(path, eloboost)
          this.initialize()
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
  },
}
</script>
