<template>
  <v-data-iterator
    :items="eloboosts"
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
                <v-col cols="auto"> {{ item.boost }} </v-col>
                <v-col cols="auto" class="title text-uppercase"> </v-col>
              </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-list color="primary">
              <v-list-item>
                <v-list-item-content>
                  <span class="text-uppercase">{{ item.server }}</span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <span>{{ item.username }}</span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <span>{{ item.password }}</span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <span>{{ item.email }}</span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="text-uppercase">
                  {{ item.service }} {{ item.queue }} QUEUE
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :src="require(`@/assets/leagues/${item.rank.league}.png`)"
                    max-width="30"
                    contain
                  >
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content v-if="item.service == 'Divisiones'">
                  de
                  <span class="text-uppercase"
                    >{{ item.rank.league }} {{ item.rank.division }}</span
                  >
                </v-list-item-content>
                <v-list-item-content v-if="item.service !== 'Divisiones'">
                  {{ item.wins }} PARTIDAS
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="item.service == 'Divisiones'">
                <v-list-item-avatar>
                  <v-img
                    :src="require(`@/assets/leagues/${item.desiredLeague}.png`)"
                    max-width="30"
                    contain
                  >
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  hasta
                  <span class="text-uppercase"
                    >{{ item.desiredLeague }} {{ item.desiredDivision }}</span
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="text-uppercase">
                  <span v-for="rol in item.options.role" :key="rol"
                    >{{ rol }},
                  </span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="(item.options.champions.length > 0)">
                <v-list-item-content>
                  <ChampionDialog :champs="item.options.champions" />
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
import ChampionDialog from '@/components/Admin/ChampionDialog'
export default {
  components: {
    ChampionDialog,
  },
  data() {
    return {
      eloboosts: [],
      itemsPerPage: 12,
      page: 1,
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.eloboosts.length / this.itemsPerPage)
    },
  },
  mounted() {
    this.$axios.get('/eloboosts').then((res) => {
      this.eloboosts = res.data
    })
  },
  methods: {},
}
</script>
