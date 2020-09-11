<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <v-btn small v-on="on">Ver aspectos</v-btn>
    </template>
    <v-card>
      <v-row align="center" justify="space-around">
        <v-col v-for="skin in skins" :key="skin" cols="auto">
          <v-img
            contain
            max-width="50"
            :src="`https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${skin.slice(
              0,
              -3
            )}/${skin}.jpg`"
          ></v-img>
          {{ getSkinName(skin) }}
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import skins from '@/utils/skins'
export default {
  props: {
    skins: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      listOfSkins: Object.assign(skins),
      dialog: false,
    }
  },
  methods: {
    getSkinName(id) {
      for (const i in this.listOfSkins) {
        for (const j in this.listOfSkins[i].info) {
          if (this.listOfSkins[i].info[j].id == id) {
            return this.listOfSkins[i].info[j].name
          }
        }
      }
    },
  },
}
</script>
