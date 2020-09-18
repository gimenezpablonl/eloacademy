<template>
  <v-select
    v-model="statusLocal"
    color="accent3"
    item-color="opposite"
    outlined
    prepend-inner-icon="mdi-tag"
    :items="states"
    item-text="name"
    item-value="code"
    label="Estado"
  ></v-select>
</template>

<script>
export default {
  model: {
    prop: 'status',
    event: 'statusChanged',
  },
  props: {
    status: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      states: [
        {
          name: 'Sin finalizar',
          code: false,
        },
        {
          name: 'Finalizado',
          code: true,
        },
      ],
    }
  },
  computed: {
    statusLocal: {
      get() {
        return this.status
      },
      set(value) {
        this.$emit('statusChanged', value)
      },
    },
  },
}
</script>
