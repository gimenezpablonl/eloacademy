<template>
  <v-container fluid>
    <v-data-table
      single-expand
      item-key="_id"
      show-expand
      expand-icon="mdi-arrow-expand-down"
      :headers="headers"
      :items="coachings"
      :search="search"
      sort-by="Usuario"
      class="elevation-3"
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
              v-if="item.cch == 'Sin asignar'"
              v-bind="attrs"
              small
              v-on="on"
              @click="pickCoaching(item)"
            >
              mdi-hand
            </v-icon>
          </template>
          <span>Coachear esta cuenta</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-if="item.cch != 'Sin asignar' && !item.status"
              v-bind="attrs"
              small
              v-on="on"
              @click="endCoaching(item)"
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
    url: '/coachs/',
    dialog: false,
    search: '',
    options: [
      { name: 'Finalizado', code: true },
      { name: 'En proceso', code: false },
    ],
    headers: [
      { text: 'Ver', value: 'data-table-expand' },
      { text: 'Coach', value: 'cch' },
      { text: 'Contacto', value: 'contact' },
      { text: 'Inicio', value: 'start' },
      { text: 'Estado', value: 'stat' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    coachings: [],
    editedIndex: -1,
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
    async editCoaching(id) {
      const path = '/coachings/' + id
      try {
        delete this.editedItem.createdAt
        await this.$axios.put(path, this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async addCoaching() {
      try {
        await this.$axios.post('/coachings', this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async deleteCoaching(id) {
      try {
        const path = '/coachings/' + id
        await this.$axios.delete(path)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    initialize() {
      this.$axios.get('/coachings').then((res) => {
        this.coachings = res.data
        this.coachings.forEach((e) => {
          e.cch = e.coach.username
          e.stat = e.status == true ? 'Finalizado' : 'En proceso'
          e.start = e.rank.league.toUpperCase()
          if (e.rank.division != undefined) {
            e.start = e.start.concat(' ', e.rank.division)
          }
        })
      })
    },
    async pickCoaching(coaching) {
      if (confirm('¿Estás seguro de que quieres realizar este coaching?')) {
        const path = '/coachings/' + coaching._id
        coaching.coach = this.booster._id
        delete coaching.createdAt
        try {
          await this.$axios.put(path, coaching)
          this.initialize()
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
    async endCoaching(coaching) {
      if (confirm('¿Estás seguro de que quieres finalizar este coaching?')) {
        const path = '/coachings/' + coaching._id
        coaching.status = true
        try {
          await this.$axios.put(path, coaching)
          this.initialize()
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
  },
}
</script>
