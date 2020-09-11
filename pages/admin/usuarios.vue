<template>
  <v-container fluid>
    <v-data-table
      item-key="_id"
      :headers="headers"
      :items="users"
      :search="search"
      sort-by="rol"
      class="elevation-1"
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
          <v-dialog v-model="dialog" max-height="500">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                ><v-icon left>mdi-plus</v-icon>Nuevo usuario
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.username"
                        label="Nombre de usuario"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.password"
                        type="password"
                        label="Contraseña"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.role"
                        :items="rols"
                        item-text="name"
                        item-value="code"
                        label="Rol"
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
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="editItem(item)">
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar este usuario</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" small v-on="on" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <span>Eliminar este usuario</span>
        </v-tooltip>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  components: {},
  data: () => ({
    dialog: false,
    search: '',
    rols: [
      { name: 'Administrador', code: '2' },
      { name: 'Booster', code: '1' },
      { name: 'Usuario', code: '0' },
    ],
    headers: [
      { text: 'Usuario', value: 'username' },
      { text: 'Email', value: 'email' },
      { text: 'Rol', value: 'rol' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    users: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo usuario' : 'Editar usuario'
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
    async editUser(id) {
      const path = '/users/' + id
      try {
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
      this.$axios.get('/users').then((res) => {
        this.users = res.data
        this.users.forEach((e) => {
          switch (e.role) {
            case 0:
              e.rol = 'Usuario'
              break
            case 1:
              e.rol = 'Booster'
              break
            case 2:
              e.rol = 'Administrador'
              break
          }
        })
      })
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
        const index = this.users.indexOf(item)
        this.deleteUser(item._id)
        this.users.splice(index, 1)
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
        this.editUser(this.editedItem._id)
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.addUser()
        this.users.push(this.editedItem)
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
