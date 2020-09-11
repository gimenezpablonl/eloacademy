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
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-height="500">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                ><v-icon left>mdi-plus</v-icon>Nuevo coaching</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <BoosterPicker
                        :bstr="editedItem.coach._id"
                        @changed="pickBooster"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.contact"
                        label="Contacto"
                      ></v-text-field>
                    </v-col>
                    <LeaguePicker
                      :def="editedItem.rank"
                      @changed="pickRankLeague"
                      @pickedDivision="pickRankDivision"
                    />
                    <v-col cols="12" sm="6" md="4">
                      <RolePicker @changed="pickRole" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <ChampionsPicker @changed="pickChampions" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.status"
                        :items="options"
                        item-text="name"
                        item-value="code"
                        label="Estado"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
              v-if="!item.status"
              v-bind="attrs"
              small
              v-on="on"
              @click="endItem(item)"
            >
              mdi-check-bold
            </v-icon>
          </template>
          <span>Finalizar coaching</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar este coaching</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <span>Eliminar este coaching</span>
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
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
import BoosterPicker from '@/components/Servicios/BoosterPicker.vue'
import ChampionsPicker from '@/components/Servicios/ChampionsPicker.vue'
import RolePicker from '@/components/Servicios/RolePicker'
export default {
  layout: 'admin',
  components: {
    ChampionDialog,
    BoosterPicker,
    LeaguePicker,
    ChampionsPicker,
    RolePicker,
  },
  data: () => ({
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
    editedItem: {
      status: false,
      coach: {},
      rank: {},
      role: [],
      champions: [],
    },
    defaultItem: {
      status: false,
      coach: {},
      rank: {},
      role: [],
      champions: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo coaching' : 'Editar coaching'
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
    pickRankLeague(league) {
      this.editedItem.rank.league = league
    },
    pickRankDivision(division) {
      this.editedItem.rank.division = division
    },
    pickBooster(coach) {
      this.editedItem.coach = coach
    },
    pickChampions(e) {
      this.editedItem.champions = e
    },
    pickRole(role) {
      this.editedItem.role = role
    },
    editItem(item) {
      this.editedIndex = this.coachings.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      if (confirm('¿Estás seguro de que quieres eliminar este coaching?')) {
        const index = this.coachings.indexOf(item)
        this.deleteCoaching(item._id)
        this.coachings.splice(index, 1)
      }
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        this.editCoaching(this.editedItem._id)
        Object.assign(this.coachings[this.editedIndex], this.editedItem)
      } else {
        this.addCoaching()
        this.coachings.push(this.editedItem)
      }
      this.initialize()
      this.close()
    },
  },
  head() {
    return {
      title: 'Panel de administración',
    }
  },
}
</script>
