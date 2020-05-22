<template>
  <v-row align="center" no-gutters>
    <v-col class="d-flex" cols="auto">
      <v-autocomplete
        v-model="e11"
        color="accent3"
        item-color="opposite"
        :items="champions"
        :rules="rules"
        clearable
        multiple
        counter="8"
        label="Campeones"
        item-text="name"
        item-value="name"
        autocomplete
        return-object
        solo
        @change="onChange($event)"
      >
        <template v-slot:selection="data">
          <v-avatar>
            <v-img
              max-height="30"
              max-width="30"
              :src="require(`@/assets/champions/${data.item.image}`)"
            />
          </v-avatar>
          {{ data.item.name }}
        </template>
        <template v-slot:item="data">
          <template>
            <v-avatar>
              <v-img
                :src="require(`@/assets/champions/${data.item.image}`)"
                max-height="40"
                max-width="40"
              />
            </v-avatar>
            {{ data.item.name }}
          </template>
        </template>
      </v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
import champions from '@/utils/champions'
export default {
  props: {
    rules: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      e11: '',
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
