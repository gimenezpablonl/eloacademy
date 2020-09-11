<template>
  <v-container fluid>
    <v-data-table
      single-expand
      item-key="_id"
      show-expand
      expand-icon="mdi-arrow-expand-down"
      :headers="headers"
      :items="accounts"
      :search="search"
      sort-by="Owner"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-card-title>Cuentas</v-card-title>
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
                ><v-icon left>mdi-plus</v-icon>Nueva cuenta</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <UserPicker
                        :usr="editedItem.owner._id"
                        @changed="pickUser"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.username"
                        label="Nombre de usuario"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.password"
                        type="password"
                        label="Contraseña"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.summoner_name"
                        label="Nombre de invocador"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.level"
                        label="Nivel"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.blue_essence"
                        label="Esencia azul"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.orange_essence"
                        label="Esencia naranja"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <ServerPicker
                        :def="editedItem.server"
                        @defchange="pickServer"
                      />
                    </v-col>
                    Temporada 2019
                    <LeaguePicker
                      :def="editedItem.previous_rank"
                      @changed="pickPreviousLeague"
                      @pickedDivision="pickPreviousDivision"
                    />
                    Cola Solo/Dúo
                    <LeaguePicker
                      :def="editedItem.solo_rank"
                      @changed="pickSoloLeague"
                      @pickedDivision="pickSoloDivision"
                    />
                    Cola Flexible
                    <LeaguePicker
                      :def="editedItem.flex_rank"
                      @changed="pickFlexLeague"
                      @pickedDivision="pickFlexDivision"
                    />
                    Cola TFT
                    <LeaguePicker
                      :def="editedItem.tft_rank"
                      @changed="pickTftLeague"
                      @pickedDivision="pickTftDivision"
                    />
                    <v-col cols="6">
                      <ChampionsPicker @changed="pickChampions" />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.rp"
                        label="Riot Points"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <SkinPicker @changed="pickChampions" />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="editedItem.price"
                        label="Precio"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        v-model="editedItem.verifided"
                        :items="options"
                        item-text="name"
                        item-value="code"
                        label="Verificado"
                      ></v-select>
                    </v-col>
                    <v-col cols="6">
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
        <td>Nombre de usuario: {{ item.username }}</td>
        <td>Contraseña: {{ item.password }}</td>
        <td>Nivel: {{ item.level }}</td>
        <td>Iconos: {{ item.icons }}</td>
        <td>Escencia azul: {{ item.blue_essence }}</td>
        <td>Escencia naranja: {{ item.orange_essence }}</td>
        <td>
          <ChampionDialog
            v-if="item.champions.length > 0"
            :champs="item.champions"
          />
        </td>
        <td>
          <SkinDialog v-if="item.skins.length > 0" :skins="item.skins" />
        </td>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-if="item.status == 2"
              v-bind="attrs"
              small
              v-on="on"
              @click="endItem(item)"
            >
              mdi-check-bold
            </v-icon>
          </template>
          <span>Marcar como vendido</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-if="item.status == 0"
              v-bind="attrs"
              small
              v-on="on"
              @click="verifyItem(item)"
            >
              mdi-check-bold
            </v-icon>
          </template>
          <span>Marcar como verificado</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar esta cuenta</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <span>Eliminar esta cuenta</span>
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
import SkinDialog from '@/components/Admin/SkinDialog'
import ServerPicker from '@/components/Servicios/ServerPicker.vue'
import LeaguePicker from '@/components/Servicios/LeaguePicker.vue'
import ChampionsPicker from '@/components/Servicios/ChampionsPicker.vue'
import SkinPicker from '@/components/Servicios/SkinPicker.vue'
import UserPicker from '@/components/Servicios/UserPicker.vue'
export default {
  layout: 'admin',
  components: {
    ChampionDialog,
    ServerPicker,
    LeaguePicker,
    ChampionsPicker,
    SkinPicker,
    SkinDialog,
    UserPicker,
  },
  data: () => ({
    dialog: false,
    search: '',
    options: [
      { name: 'Comprado', code: true },
      { name: 'En venta', code: false },
    ],
    headers: [
      { text: 'Ver', value: 'data-table-expand' },
      { text: 'ID', value: '_id' },
      { text: 'Dueño', value: 'u' },
      { text: 'Estado', value: 'stat' },
      { text: 'Servidor', value: 'server' },
      { text: 'Precio', value: 'price' },
      { text: 'Temporada anterior', value: 'previous_rank.league' },
      { text: 'Liga solo', value: 'solo_rank.league' },
      { text: 'Liga flex', value: 'flex_rank.league' },
      { text: 'Liga TFT', value: 'tft_rank.league' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    accounts: [],
    editedIndex: -1,
    editedItem: {
      champions: [],
      skins: [],
      owner: {},
      previous_rank: {},
      solo_rank: {},
      flex_rank: {},
      tft_rank: {},
    },
    defaultItem: {
      champions: [],
      skins: [],
      owner: {},
      previous_rank: {},
      solo_rank: {},
      flex_rank: {},
      tft_rank: {},
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva cuenta' : 'Editar cuenta'
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
    async editAccount(id) {
      const path = '/accounts/' + id
      try {
        await this.$axios.put(path, this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async addAccount() {
      try {
        await this.$axios.post('/accounts', this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async deleteAccount(id) {
      try {
        const path = '/accounts/' + id
        await this.$axios.delete(path)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    initialize() {
      this.$axios.get('/accounts').then((res) => {
        this.accounts = res.data
        this.accounts.forEach((e) => {
          e.u = e.owner.username
          e.server = e.server.toUpperCase()
          if (e.status === 0) {
            e.stat = 'Sin verificar'
          } else if (e.status === 2) {
            e.stat = 'En venta'
          } else {
            e.stat = 'Vendido'
          }
        })
      })
    },
    pickUser(user) {
      this.editedItem.owner = user
    },
    pickPreviousLeague(league) {
      this.editedItem.previous_rank.league = league
    },
    pickPreviousDivision(division) {
      this.editedItem.previous_rank.division = division
    },
    pickSoloLeague(league) {
      this.editedItem.solo_rank.league = league
    },
    pickSoloDivision(division) {
      this.editedItem.solo_rank.division = division
    },
    pickFlexLeague(league) {
      this.editedItem.flex_rank.league = league
    },
    pickFlexDivision(division) {
      this.editedItem.flex_rank.division = division
    },
    pickTftLeague(league) {
      this.editedItem.tft_rank.league = league
    },
    pickTftDivision(division) {
      this.editedItem.tft_rank.division = division
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
      this.editedIndex = this.accounts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    async endItem(item) {
      if (
        confirm(
          '¿Estás seguro de que quieres marcar como comprado esta cuenta?'
        )
      ) {
        const path = '/accounts/' + item._id
        item.status = 1
        try {
          await this.$axios.put(path, item)
          this.initialize()
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
    async verifyItem(item) {
      if (confirm('¿Estás seguro de que quieres verificar esta cuenta?')) {
        const path = '/accounts/' + item._id
        item.status = 2
        try {
          await this.$axios.put(path, item)
          this.initialize()
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
    deleteItem(item) {
      if (confirm('¿Estás seguro de que quieres eliminar esta cuenta?')) {
        const index = this.accounts.indexOf(item)
        this.deleteAccount(item._id)
        this.accounts.splice(index, 1)
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
        this.editAccount(this.editedItem._id)
        Object.assign(this.accounts[this.editedIndex], this.editedItem)
      } else {
        this.addAccount()
        this.accounts.push(this.editedItem)
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
