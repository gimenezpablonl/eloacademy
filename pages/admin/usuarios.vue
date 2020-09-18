<template>
  <v-container fluid>
    <v-data-table
      item-key="_id"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="users"
      :search="search"
      hide-default-footer
      sort-by="Usuario"
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-card-title>Usuarios</v-card-title>
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
                ><v-icon left>mdi-plus</v-icon>Nuevo usuario</v-btn
              >
            </template>
            <v-card>
              <vue-scroll :ops="ops">
                <v-form>
                  <v-container fluid>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12">
                          <v-card-title class="justify-center py-0">
                            <span class="display-1"> {{ formTitle }} </span>
                          </v-card-title>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.username"
                            label="Nombre de usuario"
                            prepend-inner-icon="mdi-account"
                            autocomplete
                            color="accent3"
                            :rules="rule"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.email"
                            label="Correo electrónico"
                            prepend-inner-icon="mdi-email"
                            autocomplete
                            color="accent3"
                            :rules="rule"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.password"
                            type="password"
                            label="Contraseña"
                            autocomplete
                            prepend-inner-icon="mdi-account-lock"
                            color="accent3"
                            :rules="rule"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-select
                            v-model="editedItem.role"
                            :items="rols"
                            item-text="name"
                            item-value="code"
                            prepend-inner-icon="mdi-notebook"
                            color="accent3"
                            outlined
                            label="Rol"
                          ></v-select>
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
                </v-form>
              </vue-scroll>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar usuario</span>
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
          <span>Eliminar usuario</span>
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
      Estas a punto de {{ warning }} este usuario
      <v-btn text @click="alertDialog = false">Cancelar</v-btn>
      <v-btn @click="alertConfirm">Confirmar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
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
    alertDialog: false,
    warning: '',
    itemId: {},
    search: '',
    rols: [
      { name: 'Administrador', code: 2 },
      { name: 'Booster', code: 1 },
      { name: 'Usuario', code: 0 },
    ],
    headers: [
      { text: 'Usuario', value: 'username' },
      { text: 'Email', value: 'email' },
      { text: 'Rol', value: 'rol' },
      { text: 'Cuentas', value: 'accounts.length' },
      { text: 'Eloboosts', value: 'boosts' },
      { text: 'Coachings', value: 'coaches' },
      { text: 'Creado', value: 'creado' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      role: 0,
      eloboosts: [],
      coachings: [],
      accounts: [],
      eloboostsDone: 0,
      coachingsDone: 0,
    },
    defaultItem: {
      role: 0,
      eloboosts: [],
      coachings: [],
      accounts: [],
      eloboostsDone: 0,
      coachingsDone: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo usuario' : `Editar usuario`
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
    async editUser(id) {
      const path = '/users/' + id
      try {
        delete this.editedItem.createdAt
        await this.$axios.put(path, this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async addUser() {
      try {
        await this.$axios.post('/users', this.editedItem)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async deleteUser(id) {
      try {
        const path = '/users/' + id
        await this.$axios.delete(path)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    initialize() {
      if (this.users.length === 0) {
        this.$axios.get('/usersdata').then((res) => {
          this.users = res.data
          this.setup(this.users)
        })
      }
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      const index = this.users.indexOf(item)
      this.deleteUser(item._id)
      this.users.splice(index, 1)
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    setup(array) {
      array.forEach((e) => {
        e.eloboostsDone = 0
        for (let i = 0; i < e.eloboosts.length; i++) {
          if (e.eloboosts[i].status === true) {
            e.eloboostsDone++
          }
        }
        e.boosts = e.eloboostsDone.toString().concat('/', e.eloboosts.length)
        e.coachingsDone = 0
        for (let i = 0; i < e.coachings.length; i++) {
          if (e.coachings[i].status === true) {
            e.coachingsDone++
          }
        }
        e.coaches = e.coachingsDone.toString().concat('/', e.coachings.length)
        switch (e.role) {
          case 1:
            e.rol = 'Booster'
            break
          case 2:
            e.rol = 'Administrador'
            break
          default:
            e.rol = 'Usuario'
            break
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
    save() {
      if (this.editedIndex > -1) {
        this.editUser(this.editedItem._id)
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.addUser()
        this.editedItem.createdAt = Date.now()
        this.users.push(this.editedItem)
      }
      this.setup(this.users)
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
