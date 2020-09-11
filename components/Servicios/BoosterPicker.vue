<template>
  <v-autocomplete
    v-model="bstrLocal"
    color="accent3"
    item-color="opposite"
    :items="boosters"
    label="Booster"
    item-text="username"
    item-value="_id"
    max-height="auto"
    autocomplete
    return-object
    @change="onChange($event)"
  >
    <template v-slot:selection="data">
      {{ data.item.username }}
    </template>
    <template v-slot:item="data">
      <template>
        {{ data.item.username }}
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    bstr: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      boosters: [],
    }
  },
  computed: {
    bstrLocal: {
      get() {
        return this.bstr
      },
      set(value) {
        this.$emit('bstrchange', true)
      },
    },
  },
  created() {
    this.getBoosters()
  },
  methods: {
    onChange(event) {
      this.$emit('changed', event)
    },
    getBoosters() {
      this.$axios.get('/boosters').then((res) => (this.boosters = res.data))
    },
  },
}
</script>
