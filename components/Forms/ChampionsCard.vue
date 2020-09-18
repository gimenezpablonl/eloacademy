<template>
  <v-list outlined flat subheader>
    <v-subheader>CAMPEONES</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="champ in champs" :key="champ">
        <v-list-item-icon>
          <v-avatar>
            <v-img
              contain
              :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ}.png`"
            ></v-img>
          </v-avatar>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            v-text="getChampionName(champ)"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
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

<style>
.card {
  overflow: hidden;

  -ms-overflow-style: none;
}

.card::-webkit-scrollbar {
  width: 0 !important;
}
.card {
  overflow: -moz-scrollbars-none;
}
</style>
