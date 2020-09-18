<template>
  <v-autocomplete
    v-model="skinsLocal"
    color="accent3"
    outlined
    item-color="opposite"
    :items="skins"
    clearable
    multiple
    prepend-inner-icon="mdi-fencing"
    label="Aspectos"
    item-text="name"
    item-value="code"
    autocomplete
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img max-height="30" max-width="30" :src="data.item.avatar" />
      </v-avatar>
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-avatar>
          <v-img :src="data.item.avatar" max-height="100" max-width="100" />
        </v-avatar>
        {{ data.item.name }}
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
/* eslint-disable no-unused-vars */
import champions from '@/utils/champions'
import skins from '@/utils/skins'
export default {
  props: {
    champions: {
      type: Array,
      default() {
        return []
      },
    },
    skns: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      listOfSkins: Object.assign(skins),
      listOfChampions: Object.assign(champions),
      skins: [],
      pickedSkins: [],
    }
  },
  computed: {
    skinsLocal: {
      get() {
        this.getSkins()
        return this.skns
      },
      set(value) {
        this.$emit('skinsChanged', value)
      },
    },
  },
  watch: {
    champions() {
      this.getSkins()
    },
  },
  methods: {
    getSkins() {
      this.skins = []
      let url = ''
      this.champions.forEach((champ) => {
        for (let i = 0; i < this.listOfChampions.length; i++) {
          if (this.listOfChampions[i].key == champ) {
            this.skins.push({ header: this.listOfChampions[i].name })
            this.listOfSkins.forEach((char) => {
              if (char.id == champ) {
                char.info.forEach((skin) => {
                  if (!skin.isBase) {
                    url =
                      'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'
                    url = url.concat(skin.tilePath.slice(40))
                    this.skins.push({
                      name: skin.name,
                      group: this.listOfChampions[i].name,
                      code: skin.id,
                      avatar: url,
                    })
                  }
                })
              }
            })
          }
        }
        /* eslint-disable no-eval */
        /* eslint-disable prefer-const */
        /* eslint-disable no-undef */
      })
    },
    onChange(events) {
      this.pickedSkins = []
      for (let i = 0; i < events.length; i++) {
        this.pickedSkins.push(events[i].code)
      }
      this.$emit('skinsChanged', this.pickedSkins)
    },
  },
}
</script>
