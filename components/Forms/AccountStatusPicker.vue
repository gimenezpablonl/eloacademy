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
      type: Number,
      default() {
        return 2
      },
    },
  },
  data() {
    return {
      states: [
        {
          name: 'Sin verificar',
          code: 0,
        },
        {
          name: 'Vendido',
          code: 1,
        },
        {
          name: 'En venta',
          code: 2,
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
