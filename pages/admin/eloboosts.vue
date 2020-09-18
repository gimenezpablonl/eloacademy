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
          <v-dialog v-model="dialog" max-width="700" scrollable>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                <v-icon left>mdi-plus</v-icon>Nuevo eloboost</v-btn
              >
            </template>
            <v-card>
              <vue-scroll :ops="ops">
                <v-container fluid>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-card-title class="justify-center py-0">
                          <span class="display-1"> {{ formTitle }} </span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="12">
                        <v-card-title class="justify-center py-0">
                          <span class="title">Invocador</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.username"
                          prepend-inner-icon="mdi-account"
                          color="accent3"
                          :rules="rule"
                          outlined
                          label="Nombre de usuario"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.password"
                          prepend-inner-icon="mdi-account-lock"
                          color="accent3"
                          :rules="rule"
                          outlined
                          label="Contraseña"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <ServerPicker
                          :server="editedItem.server"
                          @serverChanged="pickServer"
                        />
                      </v-col>
                      <v-col cols="6">
                        <QueuePicker
                          :queue="editedItem.queue"
                          @queueChanged="pickQueue"
                        />
                      </v-col>
                      <v-col cols="6">
                        <LeaguePicker
                          required
                          label="Liga de inicio"
                          :rank="editedItem.rank"
                          @rankChanged="pickRank"
                        />
                      </v-col>
                      <v-col
                        v-if="editedItem.rank.league != 'Unranked'"
                        cols="6"
                      >
                        <LpPicker
                          :lp="parseInt(editedItem.lp)"
                          :league="editedItem.rank.league"
                          label="Puntos de liga"
                          required
                          @lpChanged="pickLp"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-card-title class="justify-center">
                          <span class="title">Eloboost</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="12">
                        <BoosterPicker
                          :booster="editedItem.booster"
                          required
                          @boosterChanged="pickBooster"
                        />
                      </v-col>
                      <v-col
                        v-if="editedItem.rank.league != 'Unranked'"
                        cols="6"
                      >
                        <LeaguePicker
                          :rank="editedItem.desiredRank"
                          clearable
                          label="Liga destino"
                          @rankChanged="pickDesiredRank"
                        />
                      </v-col>
                      <v-col
                        v-if="
                          editedItem.desiredRank.league == 'Master' ||
                          editedItem.desiredRank.league == 'Grandmaster' ||
                          editedItem.desiredRank.league == 'Challenger'
                        "
                        cols="6"
                      >
                        <LpPicker
                          :lp="parseInt(editedItem.desiredLp)"
                          :league="editedItem.desiredRank.league"
                          label="Puntos de liga destino"
                          required
                          @lpChanged="pickDesiredLp"
                        />
                      </v-col>
                      <v-col cols="6">
                        <WinsPicker
                          :wins="parseInt(editedItem.wins)"
                          @winsChanged="pickWins"
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
          <span>Finalizar eloboost</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar eloboost</span>
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
          <span>Eliminar eloboost</span>
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
import ServerPicker from '@/components/Forms/ServerPicker.vue'
import LeaguePicker from '@/components/Forms/LeaguePicker.vue'
import QueuePicker from '@/components/Forms/QueuePicker.vue'
import BoosterPicker from '@/components/Forms/BoosterPicker.vue'
import ChampionsPicker from '@/components/Forms/ChampionsPicker.vue'
import RolePicker from '@/components/Forms/RolePicker'
import StatusPicker from '@/components/Forms/StatusPicker.vue'
import WinsPicker from '@/components/Forms/WinsPicker.vue'
import RolesList from '@/components/Forms/RolesList.vue'
import LpPicker from '@/components/Forms/LpPicker.vue'
export default {
  layout: 'admin',
  components: {
    StatusPicker,
    ChampionsCard,
    ServerPicker,
    LeaguePicker,
    QueuePicker,
    BoosterPicker,
    ChampionsPicker,
    RolePicker,
    WinsPicker,
    RolesList,
    LpPicker,
  },
  data: () => ({
    ops: {
      bar: {
        background: 'rgb(24, 144, 255)',
      },
    },
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
      { text: 'Contraseña', value: 'password' },
      { text: 'Inicio', value: 'start' },
      { text: 'Destino', value: 'dest' },
      { text: 'Estado', value: 'stat' },
      { text: 'Fecha', value: 'creado' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    eloboosts: [],
    editedIndex: -1,
    editedItem: {
      server: 'LAS',
      wins: 0,
      lp: 0,
      desiredLp: 0,
      booster: {},
      rank: {
        league: '',
        division: '',
      },
      desiredRank: {
        league: '',
        division: '',
      },
      role: [],
      champions: [],
    },
    defaultItem: {
      server: 'LAS',
      wins: 0,
      lp: 0,
      desiredLp: 0,
      booster: {},
      rank: {
        league: '',
        division: '',
      },
      desiredRank: {
        league: '',
        division: '',
      },
      role: [],
      champions: [],
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo eloboost' : `Editar eloboost`
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
    alert(item, action) {
      this.warning = action
      this.itemId = item
      this.alertDialog = true
    },
    alertConfirm() {
      if (this.warning == 'eliminar para siempre') {
        this.deleteItem(this.itemId)
      } else if (this.warning == 'dar como finalizado') {
        this.endEloboost(this.itemId)
      }
      this.alertDialog = false
    },
    async editEloboost(id) {
      const path = '/eloboosts/' + id
      try {
        delete this.editedItem.createdAt
        await this.$axios.put(path, this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async addEloboost() {
      try {
        await this.$axios.post('/eloboosts', this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async deleteEloboost(id) {
      try {
        const path = '/eloboosts/' + id
        await this.$axios.delete(path)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    setup(array) {
      array.forEach((e) => {
        e.bstr = e.booster.username
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
        this.$axios.get('/eloboosts').then((res) => {
          this.eloboosts = res.data
          this.$axios.get('/unassignedbooster').then((res) => {
            this.editedItem.booster = res.data
            this.defaultItem.booster = res.data
          })
          this.setup(this.eloboosts)
        })
      }
    },
    pickRank(rank) {
      this.editedItem.rank = rank
    },
    pickDesiredRank(rank) {
      this.editedItem.desiredRank = rank
    },
    pickServer(server) {
      this.editedItem.server = server
    },
    pickStatus(status) {
      this.editedItem.status = status
    },
    pickQueue(queue) {
      this.editedItem.queue = queue
    },
    pickBooster(booster) {
      this.editedItem.booster = booster
    },
    pickChampions(e) {
      this.editedItem.champions = e
    },
    pickRole(role) {
      this.editedItem.role = role
    },
    pickWins(wins) {
      this.editedItem.wins = wins
    },
    pickLp(lp) {
      this.editedItem.lp = lp
    },
    pickDesiredLp(lp) {
      this.editedItem.desiredLp = lp
    },
    editItem(item) {
      this.editedIndex = this.eloboosts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      const index = this.eloboosts.indexOf(item)
      this.deleteEloboost(item._id)
      this.eloboosts.splice(index, 1)
    },
    async endEloboost(eloboost) {
      const path = '/eloboosts/' + eloboost._id
      eloboost.status = true
      this.setup(this.eloboosts)
      try {
        await this.$axios.put(path, eloboost)
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
        this.editEloboost(this.editedItem._id)
        Object.assign(this.eloboosts[this.editedIndex], this.editedItem)
      } else {
        this.addEloboost()
        this.editedItem.createdAt = Date.now()
        this.eloboosts.push(this.editedItem)
      }
      this.setup(this.eloboosts)
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
