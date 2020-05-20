<template>
  <v-container>
    <v-data-iterator
      :items="accounts"
      item-key="_id"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
      single-expand
    >
      <template v-slot:default="{ items, isExpanded, expand }">
        <v-row>
          <v-col
            v-for="(item, idx) in items"
            :key="idx"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title>
                <v-row no-gutters align="center">
                  <v-col cols="4">
                    <v-img
                      :src="
                        require(`@/assets/leagues/${item.solo_rank_league}.png`)
                      "
                      max-width="50"
                      contain
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="auto" class="headline text-uppercase">
                    {{ item.solo_rank_league }}
                    {{ item.solo_rank_division }}
                  </v-col>
                </v-row>
              </v-card-title>
              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="require(`@/assets/icons/levelup.png`)"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    Nivel {{ item.level }}
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
                    <v-img
                      :src="require(`@/assets/icons/orange-essence.png`)"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    {{ item.orange_essence }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      :src="require(`@/assets/icons/blue-essence.png`)"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    {{ item.blue_essence }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-switch
                      inset
                      :input-value="isExpanded(item)"
                      label="Ver detalles"
                      class="pl-4 mt-0"
                      @change="(v) => expand(item, v)"
                    ></v-switch>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isExpanded(item)">
                  <v-list-item-avatar>
                    <v-img :src="require(`@/assets/icons/frame.png`)"></v-img>
                  </v-list-item-avatar>
                  <v-list-content>
                    {{ item.champions.length }}
                  </v-list-content>
                </v-list-item>
                <v-list-item v-if="isExpanded(item)">
                  <v-list-item-avatar>
                    <v-img
                      :src="require(`@/assets/icons/champions.png`)"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-content>
                    {{ item.skins.length }}
                  </v-list-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-slot:footer>
        <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import leagues from '@/utils/leagues'
export default {
  props: {
    accounts: {
      type: Array,
    },
  },
  data() {
    return {
      itemsPerPage: 3,
      page: 1,
      leagues: Object.values(leagues),
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.accounts.length / this.itemsPerPage)
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
  },
}
</script>
