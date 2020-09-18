<template>
  <v-container fluid>
    <v-data-table
      item-key="_id"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="accounts"
      :search="search"
      hide-default-footer
      sort-by="_id"
      class="elevation-1"
      @page-count="pageCount = $event"
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
          <v-dialog v-model="detailsDialog" max-width="500">
            <v-card flat>
              <v-list outlined flat subheader>
                <v-subheader>COLECCIÓN</v-subheader>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-avatar>
                        <v-img
                          :src="require(`@/assets/icons/levelup.png`)"
                        ></v-img>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content
                      v-text="`Nivel ${dialogInfo.level} `"
                    ></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-avatar>
                        <v-img :src="require(`@/assets/icons/rp.png`)"></v-img>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content
                      v-text="`${dialogInfo.rp} RP`"
                    ></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-avatar>
                        <v-img
                          :src="require(`@/assets/icons/blue-essence.png`)"
                        ></v-img>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content
                      v-text="`${dialogInfo.blue_essence}`"
                    ></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-avatar>
                        <v-img
                          :src="require(`@/assets/icons/orange-essence.png`)"
                        ></v-img>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content
                      v-text="`${dialogInfo.orange_essence}`"
                    ></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-avatar>
                        <v-img
                          :src="require(`@/assets/icons/profileicon0.png`)"
                        ></v-img>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content
                      v-text="`${dialogInfo.icons} iconos`"
                    ></v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <ChampionsCard
                v-if="dialogInfo.champions.length > 0"
                :champs="dialogInfo.champions"
              />
              <SkinsCard
                v-if="dialogInfo.skins.length > 0"
                :skins="dialogInfo.skins"
              />
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog" max-width="700" scrollable>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                ><v-icon left>mdi-plus</v-icon>Nuevo account</v-btn
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
                          <span class="title">General</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="6">
                        <UserPicker
                          :user="editedItem.owner._id"
                          label="Dueño"
                          required
                          @userChanged="pickOwner"
                        />
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.level"
                          prepend-inner-icon="mdi-account"
                          color="accent3"
                          :rules="rule"
                          outlined
                          type="Number"
                          label="Nivel"
                        ></v-text-field>
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
                        <v-text-field
                          v-model="editedItem.price"
                          prepend-inner-icon="mdi-account"
                          color="accent3"
                          :rules="rule"
                          type="number"
                          outlined
                          label="Precio"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-select
                          v-model="editedItem.status"
                          color="accent3"
                          item-color="opposite"
                          outlined
                          prepend-inner-icon="mdi-tag"
                          :items="states"
                          item-text="name"
                          item-value="code"
                          label="Estado"
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-card-title class="justify-center">
                          <span class="title">Clasificatorias</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="6">
                        <LeaguePicker
                          required
                          label="Temporada 2019"
                          :rank="editedItem.previous_rank"
                          @rankChanged="pickPreviousRank"
                        />
                      </v-col>
                      <v-col cols="6">
                        <LeaguePicker
                          required
                          label="Liga Solo/Dúo"
                          :rank="editedItem.solo_rank"
                          @rankChanged="pickSoloRank"
                        />
                      </v-col>
                      <v-col cols="6">
                        <LeaguePicker
                          required
                          label="Liga Flexible"
                          :rank="editedItem.flex_rank"
                          @rankChanged="pickFlexRank"
                        />
                      </v-col>
                      <v-col cols="6">
                        <LeaguePicker
                          required
                          label="Liga TFT"
                          :rank="editedItem.tft_rank"
                          @rankChanged="pickTftRank"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-card-title class="justify-center">
                          <span class="title">Colección</span>
                        </v-card-title>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.blue_essence"
                          prepend-inner-icon="$vuetify.icons.values.blueEssence"
                          color="accent3"
                          :rules="rule"
                          outlined
                          type="Number"
                          label="Escencia azul"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.orange_essence"
                          prepend-inner-icon="$vuetify.icons.values.orangeEssence"
                          color="accent3"
                          :rules="rule"
                          outlined
                          type="Number"
                          label="Escencia naranja"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.rp"
                          prepend-inner-icon="$vuetify.icons.values.riotpoints"
                          color="accent3"
                          :rules="rule"
                          outlined
                          type="Number"
                          label="Riot Points"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          v-model="editedItem.icons"
                          prepend-inner-icon="$vuetify.icons.values.icons"
                          color="accent3"
                          :rules="rule"
                          outlined
                          type="Number"
                          label="Cantidad de iconos"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <ChampionsPicker
                          :champions="editedItem.champions"
                          @championsChanged="pickChampions"
                        />
                      </v-col>
                      <v-col cols="12">
                        <SkinsPicker
                          :champions="editedItem.champions"
                          :skns="editedItem.skins"
                          @skinsChanged="pickSkins"
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
      <template v-slot:item.actions="{ item }">
        <v-tooltip
          v-if="item.champions.length > 0 || item.role.length > 0"
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="showDetails(item)">
              mdi-cctv
            </v-icon>
          </template>
          <span>Mostrar detalles</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar account</span>
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
          <span>Eliminar account</span>
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
      Estas a punto de {{ warning }} esta cuenta
      <v-btn text @click="alertDialog = false">Cancelar</v-btn>
      <v-btn @click="alertConfirm">Confirmar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import ChampionsCard from '@/components/Forms/ChampionsCard.vue'
import SkinsCard from '@/components/Forms/SkinsCard.vue'
import ServerPicker from '@/components/Forms/ServerPicker.vue'
import LeaguePicker from '@/components/Forms/LeaguePicker.vue'
import ChampionsPicker from '@/components/Forms/ChampionsPicker.vue'
import SkinsPicker from '@/components/Forms/SkinsPicker.vue'
import UserPicker from '@/components/Forms/UserPicker.vue'
export default {
  layout: 'admin',
  components: {
    UserPicker,
    ServerPicker,
    ChampionsCard,
    SkinsCard,
    LeaguePicker,
    SkinsPicker,
    ChampionsPicker,
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
    detailsDialog: false,
    warning: '',
    alertDialog: false,
    search: '',
    headers: [
      { text: 'Dueño', value: 'user' },
      { text: 'Servidor', value: 'server' },
      { text: 'Temporada 2019', value: 'previous' },
      { text: 'Solo/Dúo', value: 'solo' },
      { text: 'Flexible', value: 'flex' },
      { text: 'TFT', value: 'tft' },
      { text: 'Precio', value: 'price' },
      { text: 'Estado', value: 'stat' },
      { text: 'Fecha', value: 'creado' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    accounts: [],
    editedIndex: -1,
    states: [
      {
        name: 'Sin verificar',
        code: 0,
      },
      {
        name: 'Vendido',
        code: 1,
      },
      {
        name: 'En venta',
        code: 2,
      },
    ],
    editedItem: {
      owner: {},
      status: 2,
      previous_rank: {
        league: '',
        division: '',
      },
      solo_rank: {
        league: '',
        division: '',
      },
      flex_rank: {
        league: '',
        division: '',
      },
      tft_rank: {
        league: '',
        division: '',
      },
      champions: [],
      skins: [],
    },
    defaultItem: {
      owner: {},
      status: 2,
      previous_rank: {
        league: '',
        division: '',
      },
      solo_rank: {
        league: '',
        division: '',
      },
      flex_rank: {
        league: '',
        division: '',
      },
      tft_rank: {
        league: '',
        division: '',
      },
      champions: [],
      skins: [],
    },
    dialogInfo: {
      skins: [],
      champions: [],
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva cuenta' : `Editar cuenta`
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
      }
      this.alertDialog = false
    },
    async editAccount(id) {
      const path = '/accounts/' + id
      try {
        delete this.editedItem.createdAt
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
    setup(array) {
      array.forEach((e) => {
        e.user = e.owner.username
        switch (e.status) {
          case 0:
            e.stat = 'Sin verificar'
            break
          case 1:
            e.stat = 'Vendido'
            break
          case 2:
            e.stat = 'En venta'
            break
        }
        e.previous = e.previous_rank.league.toUpperCase()
        if (e.previous_rank.division != '') {
          e.previous = e.previous.concat(' ', e.previous_rank.division)
        }
        e.solo = e.solo_rank.league.toUpperCase()
        if (e.solo_rank.division != '') {
          e.solo = e.solo.concat(' ', e.solo_rank.division)
        }
        e.flex = e.flex_rank.league.toUpperCase()
        if (e.flex_rank.division != '') {
          e.flex = e.flex.concat(' ', e.flex_rank.division)
        }
        e.tft = e.tft_rank.league.toUpperCase()
        if (e.tft_rank.division != '') {
          e.tft = e.tft.concat(' ', e.tft_rank.division)
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
      if (this.accounts.length === 0) {
        this.$axios.get('/accounts').then((res) => {
          this.accounts = res.data
          this.setup(this.accounts)
        })
      }
    },
    pickOwner(user) {
      this.editedItem.owner = user
    },
    pickPreviousRank(rank) {
      this.editedItem.previous_rank = rank
    },
    pickSoloRank(rank) {
      this.editedItem.solo_rank = rank
    },
    pickFlexRank(rank) {
      this.editedItem.flex_rank = rank
    },
    pickTftRank(rank) {
      this.editedItem.tft_rank = rank
    },
    pickServer(server) {
      this.editedItem.server = server
    },
    pickStatus(status) {
      this.editedItem.status = status
    },
    pickBooster(booster) {
      this.editedItem.booster = booster
    },
    pickChampions(e) {
      this.editedItem.champions = e
    },
    pickSkins(e) {
      this.editedItem.skins = e
    },
    showDetails(item) {
      this.dialogInfo = item
      this.detailsDialog = true
    },
    editItem(item) {
      this.editedIndex = this.accounts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      const index = this.accounts.indexOf(item)
      this.deleteAccount(item._id)
      this.accounts.splice(index, 1)
    },
    async endAccount(account) {
      if (confirm('¿Estás seguro de que quieres finalizar este account?')) {
        const path = '/accounts/' + account._id
        account.status = true
        this.setup(this.accounts)
        try {
          await this.$axios.put(path, account)
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
        this.editAccount(this.editedItem._id)
        Object.assign(this.accounts[this.editedIndex], this.editedItem)
      } else {
        this.addAccount()
        this.editedItem.createdAt = Date.now()
        this.accounts.push(this.editedItem)
      }
      this.setup(this.accounts)
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
