<template>
  <v-text-field
    v-model="winsLocal"
    prepend-inner-icon="mdi-fast-forward"
    color="accent3"
    outlined
    type="number"
    label="Victorias"
  ></v-text-field>
</template>

<script>
export default {
  model: {
    prop: 'wins',
    event: 'winsChanged',
  },
  props: {
    wins: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  computed: {
    winsLocal: {
      get() {
        return this.wins
      },
      set(value) {
        this.$emit('winsChanged', value)
      },
    },
  },
}
</script>
