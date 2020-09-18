<template>
  <v-select
    v-model="rankLocal"
    color="accent3"
    outlined
    item-color="opposite"
    :items="ranks"
    :rules="rules"
    :required="required"
    prepend-inner-icon="$vuetify.icons.values.league"
    :label="label"
    :clearable="clearable"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img
          max-height="40"
          max-width="40"
          :src="require(`@/assets/leagues/${data.item.league}.png`)"
        />
      </v-avatar>
      {{ data.item.league }} {{ data.item.division }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-avatar>
          <v-img
            max-height="40"
            max-width="40"
            :src="require(`@/assets/leagues/${data.item.league}.png`)"
          />
        </v-avatar>
        {{ data.item.league }} {{ data.item.division }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    rank: {
      type: Object,
      default() {
        return {}
      },
    },
    label: {
      type: String,
      default() {
        return 'Liga'
      },
    },
    required: {
      type: Boolean,
      default() {
        return false
      },
    },
    clearable: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      ranks: [
        { header: 'Sin clasificar' },
        { league: 'Unranked', division: '' },
        { header: 'Hierro' },
        { league: 'Iron', division: 'IV' },
        { league: 'Iron', division: 'III' },
        { league: 'Iron', division: 'II' },
        { league: 'Iron', division: 'I' },
        { header: 'Bronce' },
        { league: 'Bronze', division: 'IV' },
        { league: 'Bronze', division: 'III' },
        { league: 'Bronze', division: 'II' },
        { league: 'Bronze', division: 'I' },
        { header: 'Plata' },
        { league: 'Silver', division: 'IV' },
        { league: 'Silver', division: 'III' },
        { league: 'Silver', division: 'II' },
        { league: 'Silver', division: 'I' },
        { header: 'Oro' },
        { league: 'Gold', division: 'IV' },
        { league: 'Gold', division: 'III' },
        { league: 'Gold', division: 'II' },
        { league: 'Gold', division: 'I' },
        { header: 'Platino' },
        { league: 'Platinum', division: 'IV' },
        { league: 'Platinum', division: 'III' },
        { league: 'Platinum', division: 'II' },
        { league: 'Platinum', division: 'I' },
        { header: 'Diamante' },
        { league: 'Diamond', division: 'IV' },
        { league: 'Diamond', division: 'III' },
        { league: 'Diamond', division: 'II' },
        { league: 'Diamond', division: 'I' },
        { header: 'Maestro' },
        { league: 'Master', division: '' },
        { header: 'Gran Maestro' },
        { league: 'Grandmaster', division: '' },
        { header: 'Challenger' },
        { league: 'Challenger', division: '' },
      ],
    }
  },
  computed: {
    rules() {
      if (this.required) {
        return [(v) => v.league !== undefined || 'Necesario']
      }
      return []
    },
    rankLocal: {
      get() {
        return this.rank
      },
      set(value) {
        this.$emit('rankChanged', value)
      },
    },
  },
}
</script>
