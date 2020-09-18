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
          <v-dialog v-model="dialog" max-width="700" scrollable>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                ><v-icon left>mdi-plus</v-icon>Nuevo coaching</v-btn
              >
            </template>
            <v-card>
              <vue-scroll :ops="ops">
                <v-container fluid>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-card-title class="justify-center">
                          <span class="title"> {{ formTitle }} </span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="12">
                        <v-card-title class="justify-center py-0">
                          <span class="title">Invocador</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="editedItem.contact"
                          outlined
                          label="Contacto del invocador"
                          auto-grow
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <LeaguePicker
                          required
                          label="Liga"
                          :rank="editedItem.rank"
                          @rankChanged="pickRank"
                        />
                      </v-col>
                      <v-col cols="6">
                        <RolePicker
                          :roles="editedItem.role"
                          @rolesChanged="pickRole"
                        />
                      </v-col>
                      <v-col cols="6">
                        <ChampionsPicker
                          :champions="editedItem.champions"
                          @championsChanged="pickChampions"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-card-title class="justify-center">
                          <span class="title">Coaching</span>
                        </v-card-title>
                      </v-col>
                      <v-col>
                        <BoosterPicker
                          :booster="editedItem.coach"
                          required
                          @boosterChanged="pickBooster"
                        />
                      </v-col>
                      <v-col>
                        <StatusPicker
                          :status="editedItem.status"
                          @statusChanged="pickStatus"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="opposite" text @click="close"
                      >Cancelar
                    </v-btn>
                    <v-btn dark color="accent3" @click="save">
                      <v-icon left>mdi-content-save</v-icon>
                      Guardar
                    </v-btn>
                  </v-card-actions>
                </v-container>
              </vue-scroll>
            </v-card>
          </v-dialog>
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
        <v-tooltip v-if="!item.status" bottom>
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar coaching</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              small
              v-on="on"
              @click="alert(item, 'eliminar para siempre')"
            >
              mdi-delete
            </v-icon>
          </template>
          <span>Eliminar coaching</span>
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
import LeaguePicker from '@/components/Forms/LeaguePicker.vue'
import BoosterPicker from '@/components/Forms/BoosterPicker.vue'
import ChampionsPicker from '@/components/Forms/ChampionsPicker.vue'
import RolePicker from '@/components/Forms/RolePicker'
import StatusPicker from '@/components/Forms/StatusPicker.vue'
import RolesList from '@/components/Forms/RolesList.vue'
export default {
  layout: 'admin',
  components: {
    StatusPicker,
    ChampionsCard,
    LeaguePicker,
    BoosterPicker,
    ChampionsPicker,
    RolePicker,
    RolesList,
  },
  data: () => ({
    ops: {
      bar: {
        background: 'rgb(24, 144, 255)',
      },
    },
    page: 1,
    itemId: {},
    warning: '',
    pageCount: 0,
    itemsPerPage: 10,
    dialog: false,
    alertDialog: false,
    search: '',
    headers: [
      { text: 'Coach', value: 'bstr' },
      { text: 'Contacto', value: 'contact' },
      { text: 'Inicio', value: 'start' },
      { text: 'Estado', value: 'stat' },
      { text: 'Fecha', value: 'creado' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    coachings: [],
    editedIndex: -1,
    editedItem: {
      coach: {},
      rank: {
        league: '',
        division: '',
      },
      role: [],
      champions: [],
    },
    defaultItem: {
      coach: {},
      rank: {
        league: '',
        division: '',
      },
      role: [],
      champions: [],
    },
    dialogInfo: {
      role: [],
      champions: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo coaching' : `Editar coaching`
    },
    rule() {
      return [(v) => !!v || 'Necesario']
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
    setup(array) {
      array.forEach((e) => {
        e.bstr = e.coach.username
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
        this.$axios.get('/coachings').then((res) => {
          this.coachings = res.data
          this.$axios.get('/unassignedbooster').then((res) => {
            this.editedItem.coach = res.data
            this.defaultItem.coach = res.data
          })
          this.setup(this.coachings)
        })
      }
    },
    alert(item, action) {
      this.warning = action
      this.itemId = item
      this.alertDialog = true
    },
    alertConfirm() {
      if (this.warning == 'eliminar para siempre') {
        this.deleteItem(this.itemId)
      } else if (this.warning == 'dar como finalizado') {
        this.endCoaching(this.itemId)
      }
      this.alertDialog = false
    },
    pickRank(rank) {
      this.editedItem.rank = rank
    },
    pickStatus(status) {
      this.editedItem.status = status
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
      const index = this.coachings.indexOf(item)
      this.deleteCoaching(item._id)
      this.coachings.splice(index, 1)
    },
    async endCoaching(coaching) {
      const path = '/coachings/' + coaching._id
      coaching.status = true
      this.setup(this.coachings)
      try {
        await this.$axios.put(path, coaching)
      } catch (e) {
        this.error = e.response.data.message
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
        this.editedItem.createdAt = Date.now()
        this.coachings.push(this.editedItem)
      }
      this.setup(this.coachings)
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
