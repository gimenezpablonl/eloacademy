<template>
  <v-autocomplete
    color="accent3"
    item-color="opposite"
    :items="champions"
    clearable
    multiple
    label="Campeones"
    item-text="name"
    item-value="name"
    autocomplete
    return-object
    @change="onChange($event)"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img max-height="30" max-width="30" :src="data.item.icon" />
      </v-avatar>
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-avatar>
          <v-img :src="data.item.icon" max-height="30" max-width="30" />
        </v-avatar>
        {{ data.item.name }}
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
import champions from '@/utils/champions'
export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      champions: Object.values(champions),
      pickedChampions: [],
    }
  },
  methods: {
    onChange(events) {
      this.pickedChampions = []
      for (let i = 0; i < events.length; i++) {
        this.pickedChampions.push(events[i].key)
      }
      this.$emit('changed', this.pickedChampions)
    },
  },
}
</script>
