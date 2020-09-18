<template>
  <v-list outlined flat subheader>
    <v-subheader>ASPECTOS</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="skin in skins" :key="skin">
        <v-list-item-icon>
          <v-avatar>
            <v-img
              contain
              max-width="50"
              :src="`https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${skin
                .toString()
                .slice(0, -3)}/${skin}.jpg`"
            ></v-img>
          </v-avatar>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="getSkinName(skin)"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
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
