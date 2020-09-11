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
      class="elevation-1"
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
          <v-dialog v-model="dialog" max-height="500">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                ><v-icon left>mdi-plus</v-icon>Nuevo eloboost</v-btn
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
                        :bstr="editedItem.booster._id"
                        @changed="pickBooster"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.username"
                        label="Nombre de usuario"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.password"
                        label="Contraseña"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <ServerPicker
                        :def="editedItem.server"
                        @defchange="pickServer"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <queuePicker :def="editedItem.q" @defchange="pickQueue" />
                    </v-col>
                    <LeaguePicker
                      :def="editedItem.rank"
                      @changed="pickRankLeague"
                      @pickedDivision="pickRankDivision"
                    />
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-if="editedItem.rank.league != 'Unranked'"
                        v-model="editedItem.lp"
                        label="LP"
                      ></v-text-field>
                    </v-col>
                    <LeaguePicker
                      v-if="editedItem.rank.league != 'Unranked'"
                      :def="editedItem.desiredRank"
                      @changed="pickDesiredLeague"
                      @pickedDivision="pickDesiredDivision"
                    />
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-if="
                          editedItem.desiredRank.league == 'Master' ||
                          editedItem.desiredRank.league == 'Grandmaster' ||
                          editedItem.desiredRank.league == 'Challenger'
                        "
                        v-model="editedItem.desiredLp"
                        label="LP destino"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.wins"
                        label="Victorias"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <RolePicker @changed="pickRole" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <ChampionsPicker @changed="pickChampions" />
                    </v-col>
                    <v-col>
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
              @click="endEloboost(item)"
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
          <span>Editar este eloboost</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <span>Eliminar este eloboost</span>
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
import ServerPicker from '@/components/Servicios/ServerPicker.vue'
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
import QueuePicker from '@/components/Servicios/QueuePicker.vue'
import BoosterPicker from '@/components/Servicios/BoosterPicker.vue'
import ChampionsPicker from '@/components/Servicios/ChampionsPicker.vue'
import RolePicker from '@/components/Servicios/RolePicker'
export default {
  layout: 'admin',
  components: {
    ChampionDialog,
    ServerPicker,
    LeaguePicker,
    QueuePicker,
    BoosterPicker,
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
      { text: 'Booster', value: 'bstr' },
      { text: 'Fecha', value: 'createdAt' },
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
    editedIndex: -1,
    editedItem: {
      status: false,
      booster: {},
      rank: {},
      desiredRank: {},
      role: [],
      champions: [],
    },
    defaultItem: {
      status: false,
      booster: {},
      rank: {},
      desiredRank: {},
      role: [],
      champions: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo eloboost' : 'Editar eloboost'
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
    initialize() {
      this.$axios.get('/eloboosts').then((res) => {
        this.eloboosts = res.data
        this.eloboosts.forEach((e) => {
          e.bstr = e.booster.username
          e.server = e.server.toUpperCase()
          e.stat = e.status == true ? 'Finalizado' : 'En proceso'
          e.q = e.queue == true ? 'Flex' : 'Solo'
          e.start = e.rank.league.toUpperCase()
          if (e.rank.division != undefined) {
            e.start = e.start.concat(' ', e.rank.division, ' ', e.lp, 'LP')
          }
          if (e.wins != 0) {
            e.dest = e.wins.toString().concat(' WINS')
          } else {
            e.dest = e.desiredRank.league.toUpperCase()
            if (e.desiredRank.division != undefined) {
              e.dest.concat(' ', e.desiredRank.division)
            }
            e.dest = e.dest.concat(' ', e.desiredLp, 'LP')
          }
          if (e.createdAt != undefined) {
            const options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }
            e.createdAt = new Date(e.createdAt)
            e.createdAt = e.createdAt.toLocaleString('es-AR', options)
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
    pickDesiredLeague(league) {
      this.editedItem.desiredRank.league = league
    },
    pickDesiredDivision(division) {
      this.editedItem.desiredRank.division = division
    },
    pickServer(server) {
      this.editedItem.server = server
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
    editItem(item) {
      this.editedIndex = this.eloboosts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      if (confirm('¿Estás seguro de que quieres eliminar este eloboost?')) {
        const index = this.eloboosts.indexOf(item)
        this.deleteEloboost(item._id)
        this.eloboosts.splice(index, 1)
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
        this.eloboosts.push(this.editedItem)
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
