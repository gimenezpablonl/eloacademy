<template>
  <v-container fluid>
    <v-data-table
      item-key="_id"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="coachings"
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
          <v-card-title>Coachings</v-card-title>
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
        <v-tooltip v-if="item.cch == 'Sin asignar'" bottom>
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
          <span>Realizar coaching</span>
        </v-tooltip>
        <v-tooltip v-if="!item.status && item.cch != 'Sin asignar'" bottom>
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
          <span>Finalizar coaching</span>
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
      Estas a punto de {{ warning }} este coaching
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
      { text: 'Coach', value: 'cch' },
      { text: 'Contacto', value: 'contact' },
      { text: 'Inicio', value: 'start' },
      { text: 'Estado', value: 'stat' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    coachings: [],
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
        this.pickCoaching(this.itemId)
      } else if (this.warning == 'dar como finalizado') {
        this.endCoaching(this.itemId)
      }
      this.alertDialog = false
    },
    setup(array) {
      array.forEach((e) => {
        e.cch = e.coach.username
        e.stat = e.status == true ? 'Finalizado' : 'Sin finalizar'
        e.start = e.rank.league.toUpperCase()
        if (e.rank.division != undefined) {
          e.start = e.start.concat(' ', e.rank.division)
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
      if (this.coachings.length === 0) {
        this.$axios.get('/coachs/'.concat(this.booster._id)).then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            this.setup(res.data)
            this.coachings.push(res.data[i])
          }
          this.$axios.get('/unassignedcoachings').then((res) => {
            for (let i = 0; i < res.data.length; i++) {
              this.setup(res.data)
              this.coachings.push(res.data[i])
            }
          })
        })
      }
    },
    async pickCoaching(coaching) {
      const path = '/coachings/' + coaching._id
      coaching.coach = this.booster
      coaching.cch = coaching.coach.username
      try {
        await this.$axios.put(path, coaching)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async endCoaching(coaching) {
      const path = '/coachings/' + coaching._id
      coaching.status = true
      coaching.stat = 'Finalizado'
      try {
        await this.$axios.put(path, coaching)
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
