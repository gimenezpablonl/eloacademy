<template>
  <v-data-iterator
    :items="users"
    item-key="_id"
    :items-per-page.sync="itemsPerPage"
    :page="page"
    hide-default-footer
  >
    <template v-slot:default="{ items }">
      <v-row>
        <v-col
          v-for="(item, idx) in items"
          :key="idx"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card color="primary">
            <v-card-title>
              <v-row no-gutters align="center">
                <v-col cols="auto"> {{ item.username }} </v-col>
              </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-list color="primary">
              <v-list-item>
                <v-list-item-content>
                  <span class="text-uppercase">{{ item.password }}</span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  {{ item.admin === true ? 'Con permisos' : 'Sin permisos' }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <span class="text-uppercase">{{ item.id }}</span>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <template v-slot:footer>
      <v-pagination v-model="page" :length="numberOfPages"> </v-pagination>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      itemsPerPage: 12,
      page: 1,
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.users.length / this.itemsPerPage)
    },
  },
  mounted() {
    this.$axios.get('/users').then((res) => {
      this.users = res.data
    })
  },
  methods: {},
}
</script>
