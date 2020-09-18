<template>
  <v-select
    v-model="serverLocal"
    color="accent3"
    outlined
    item-color="opposite"
    prepend-inner-icon="mdi-earth"
    :items="servers"
    :rules="[(v) => !!v || 'Necesario']"
    required
    label="Servidor"
  >
    <template v-slot:selection="data">
      {{ data.item }}
    </template>
    <template v-slot:item="data">
      <template>
        {{ data.item }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  model: {
    prop: 'server',
    event: 'serverChanged',
  },
  props: {
    server: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      servers: ['LAS', 'BR', 'LAN', 'NA'],
    }
  },
  computed: {
    serverLocal: {
      get() {
        return this.server
      },
      set(value) {
        this.$emit('serverChanged', value)
      },
    },
  },
}
</script>
