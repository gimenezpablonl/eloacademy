<template>
  <v-autocomplete
    v-model="championsLocal"
    color="accent3"
    outlined
    item-color="opposite"
    :items="listOfChampions"
    clearable
    multiple
    prepend-inner-icon="mdi-fencing"
    label="Campeones"
    item-text="name"
    item-value="key"
    autocomplete
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
import listOfChampions from '@/utils/champions'
export default {
  model: {
    prop: 'champions',
    event: 'championsChanged',
  },
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    champions: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      listOfChampions: Object.values(listOfChampions),
    }
  },
  computed: {
    championsLocal: {
      get() {
        return this.champions
      },
      set(value) {
        this.$emit('championsChanged', value)
      },
    },
  },
}
</script>
