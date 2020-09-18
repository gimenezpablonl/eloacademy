<template>
  <v-container fluid>
    <v-data-table
      item-key="_id"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="eloboosts"
      :search="search"
      show-expand
      single-expand
      hide-default-footer
      sort-by="status"
      class="elevation-1"
      @page-count="pageCount = $event"
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
          <v-spacer></v-spacer>
          <v-text-field
            :value="itemsPerPage"
            type="number"
            min="1"
            max="100"
            single-line
            hide-details
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-container fluid>
            <v-card flat>
              <RolesList v-if="item.role.length > 0" :roles="item.role" />
              <ChampionsCard
                v-if="item.champions.length > 0"
                :champs="item.champions"
              />
            </v-card>
          </v-container>
        </td>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip v-if="item.bstr == 'Sin asignar'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              small
              v-on="on"
              @click="alert(item, 'realizar')"
            >
              mdi-hand
            </v-icon>
          </template>
          <span>Realizar este eloboost</span>
        </v-tooltip>
        <v-tooltip v-if="!item.status && item.bstr != 'Sin asignar'" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              small
              v-on="on"
              @click="alert(item, 'dar como finalizado')"
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
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        circle
        color="accent3"
        :length="pageCount"
      ></v-pagination>
    </div>
    <v-snackbar v-model="alertDialog" color="error" :timeout="0" bottom>
      <v-icon dark class="mr-3"> mdi-alert </v-icon>
      Estas a punto de {{ warning }} este eloboost
      <v-btn text @click="alertDialog = false">Cancelar</v-btn>
      <v-btn @click="alertConfirm">Confirmar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import ChampionsCard from '@/components/Forms/ChampionsCard'
import RolesList from '@/components/Forms/RolesList.vue'
export default {
  layout: 'booster',
  components: {
    ChampionsCard,
    RolesList,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    dialog: false,
    warning: '',
    itemId: {},
    detailsDialog: false,
    alertDialog: false,
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
      { text: 'Contraseña', value: 'pw' },
      { text: 'Inicio', value: 'start' },
      { text: 'Destino', value: 'dest' },
      { text: 'Estado', value: 'stat' },
      { text: 'Fecha', value: 'creado' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    eloboosts: [],
    booster: {},
  }),
  computed: {
    rule() {
      return [(v) => !!v || 'Necesario']
    },
    getBooster() {
      if (this.$store.state.user != undefined) {
        return this.$store.state.user
      } else {
        return {}
      }
    },
  },
  created() {
    this.booster = this.getBooster
    this.initialize()
  },
  methods: {
    alert(item, action) {
      this.warning = action
      this.itemId = item
      this.alertDialog = true
    },
    alertConfirm() {
      if (this.warning == 'realizar') {
        this.pickEloboost(this.itemId)
      } else if (this.warning == 'dar como finalizado') {
        this.endEloboost(this.itemId)
      }
      this.alertDialog = false
    },
    setup(array) {
      array.forEach((e) => {
        e.bstr = e.booster.username
        if (e.status == true || e.bstr == 'Sin asignar') {
          e.pw = '*************'
        } else {
          e.pw = e.password
        }
        e.stat = e.status == true ? 'Finalizado' : 'Sin finalizar'
        e.q = e.queue == true ? 'Flex' : 'Solo'
        e.start = e.rank.league.toUpperCase()
        if (e.rank.division != undefined) {
          e.start = e.start.concat(' ', e.rank.division)
        }
        if (e.lp !== 0) {
          e.start = e.start.concat(' ', e.lp, 'LP')
        }
        if (e.wins != 0) {
          e.dest = e.wins.toString().concat(' WINS')
        } else {
          e.dest = e.desiredRank.league.toUpperCase()
          if (e.desiredRank.division != undefined) {
            e.dest = e.dest.concat(' ', e.desiredRank.division)
          }
          if (e.desiredLp !== 0) {
            e.dest = e.dest.concat(' ', e.desiredLp, 'LP')
          }
        }
        if (e.createdAt != undefined) {
          const options = {
            year: 'numeric',
            day: 'numeric',
            month: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          }
          e.creado = new Date(e.createdAt)
          e.creado = e.creado.toLocaleString('es-AR', options)
        }
      })
    },
    initialize() {
      if (this.eloboosts.length === 0) {
        this.$axios.get('/boosters/'.concat(this.booster._id)).then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            this.setup(res.data)
            this.eloboosts.push(res.data[i])
          }
          this.$axios.get('/unassignedeloboosts').then((res) => {
            for (let i = 0; i < res.data.length; i++) {
              this.setup(res.data)
              this.eloboosts.push(res.data[i])
            }
          })
        })
      }
    },
    async pickEloboost(eloboost) {
      const path = '/eloboosts/' + eloboost._id
      eloboost.booster = this.booster
      eloboost.bstr = eloboost.booster.username
      eloboost.pw = eloboost.password
      try {
        await this.$axios.put(path, eloboost)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async endEloboost(eloboost) {
      const path = '/eloboosts/' + eloboost._id
      eloboost.status = true
      eloboost.stat = 'Finalizado'
      eloboost.pw = '*************'
      try {
        await this.$axios.put(path, eloboost)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
  head() {
    return {
      title: 'Panel de booster',
    }
  },
}
</script>
