<template>
  <v-text-field
    v-model="lpLocal"
    color="accent3"
    prepend-inner-icon="mdi-flag-plus"
    outlined
    type="number"
    :required="required"
    :rules="rules"
    :label="label"
  ></v-text-field>
</template>

<script>
export default {
  model: {
    prop: 'lp',
    event: 'lpChanged',
  },
  props: {
    lp: {
      type: Number,
      default() {
        return 0
      },
    },
    required: {
      type: Boolean,
      default() {
        return false
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
        return 'Puntos de liga'
      },
    },
  },
  computed: {
    lpLocal: {
      get() {
        return this.lp
      },
      set(value) {
        this.$emit('lpChanged', value)
      },
    },
    maxLp() {
      if (
        this.league == 'Challenger' ||
        this.league == 'Master' ||
        this.league == 'Grandmaster'
      ) {
        return 2000
      } else {
        return 100
      }
    },
    rules() {
      if (this.required) {
        return [(v) => v <= this.maxLp || 'Inválido']
      }
      return []
    },
  },
}
</script>
