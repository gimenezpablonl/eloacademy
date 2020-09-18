<template>
  <v-select
    v-model="divisionLocal"
    :items="divisions"
    :rules="[(v) => !!v || 'Necesario']"
    required
    color="accent3"
    outlined
    item-color="opposite"
    prepend-inner-icon="$vuetify.icons.values.league"
    :label="label"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img
          max-height="40"
          max-width="40"
          :src="require(`@/assets/leagues/${league}.png`)"
        />
      </v-avatar>
      {{ league }} {{ data.item }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-img
          :src="require(`@/assets/leagues/${league}.png`)"
          max-height="50"
          max-width="50"
          class="mr-3"
        />
        {{ league }} {{ data.item }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    division: {
      type: String,
      default() {
        return ''
      },
    },
    league: {
      type: String,
      default() {
        return ''
      },
    },
    label: {
      type: String,
      default() {
        return 'División'
      },
    },
  },
  data() {
    return {
      divisions: ['IV', 'III', 'II', 'I'],
    }
  },
  computed: {
    divisionLocal: {
      get() {
        return this.division
      },
      set(value) {
        this.$emit('divisionChanged', value)
      },
    },
  },
}
</script>
