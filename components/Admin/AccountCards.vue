<template>
  <v-data-iterator
    :items="accounts"
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
                <v-col cols="4">
                  <v-img
                    :src="
                      require(`@/assets/leagues/${item.solo_rank.league}.png`)
                    "
                    max-width="50"
                    contain
                  >
                  </v-img>
                </v-col>
                <v-col cols="auto" class="title text-uppercase">
                  {{ item.solo_rank.league }}
                  {{ getDivision(item.solo_rank.division) }}
                </v-col>
              </v-row>
            </v-card-title>
            <v-divider></v-divider>

            <v-list color="primary">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :src="require(`@/assets/servers/${item.server}.png`)"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="text-uppercase">
                  {{ item.server }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :src="
                      require(`@/assets/leagues/${item.previous_rank.league}.png`)
                    "
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  TEMPORADA 2019
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :src="
                      require(`@/assets/leagues/${item.flex_rank.league}.png`)
                    "
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  COLA FLEXIBLE
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="require(`@/assets/icons/rp.png`)"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  {{ item.rp }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="require(`@/assets/icons/frame.png`)"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  {{ item.champions.length }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="require(`@/assets/icons/champions.png`)"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  {{ item.skins.length }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Usuario: {{ item.username }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Contraseña: {{ item.password }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  {{ item.email }}
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
import leagues from '@/utils/leagues'
export default {
  data() {
    return {
      accounts: [],
      itemsPerPage: 12,
      page: 1,
      leagues: Object.values(leagues),
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.accounts.length / this.itemsPerPage)
    },
  },
  mounted() {
    this.$axios.get('/accounts').then((res) => {
      this.accounts = res.data
    })
  },
  methods: {
    getDivision(number) {
      if (number === 1) {
        return 'I'
      } else if (number === 2) {
        return 'II'
      } else if (number === 3) {
        return 'III'
      } else if (number === 4) {
        return 'IV'
      } else {
        return ''
      }
    },
  },
}
</script>
