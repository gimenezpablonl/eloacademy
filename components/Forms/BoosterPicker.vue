<template>
  <v-autocomplete
    v-model="boosterLocal"
    color="accent3"
    outlined
    item-color="opposite"
    :items="boosters"
    label="Booster"
    prepend-inner-icon="mdi-account-reactivate"
    item-text="username"
    item-value="_id"
    max-height="auto"
    return-object
    autocomplete
  >
    <template v-slot:selection="data">
      {{ data.item.username }}
    </template>
    <template v-slot:item="data">
      <template> {{ data.item.username }} </template>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  model: {
    prop: 'booster',
    event: 'boosterChanged',
  },
  props: {
    booster: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      boosters: [],
    }
  },
  computed: {
    boosterLocal: {
      get() {
        return this.booster._id
      },
      set(value) {
        this.$emit('boosterChanged', value)
      },
    },
  },
  created() {
    this.getBoosters()
  },
  methods: {
    getBoosters() {
      this.$axios.get('/boosters').then((res) => (this.boosters = res.data))
    },
  },
}
</script>
