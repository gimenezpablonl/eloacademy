<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <v-btn small v-on="on"> Ver campeones </v-btn>
    </template>
    <v-card>
      <v-row align="center">
        <v-col v-for="champ in champs" :key="champ" cols="auto">
          <v-img
            contain
            max-width="50"
            :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ}.png`"
          ></v-img>
          {{ getChampionName(champ) }}
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import champions from '@/utils/champions'
export default {
  props: {
    champs: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      dialog: false,
      champions: Object.values(champions),
    }
  },
  methods: {
    getChampionName(key) {
      for (const i in this.champions) {
        if (this.champions[i].key == key) {
          return this.champions[i].name
        }
      }
    },
  },
}
</script>
