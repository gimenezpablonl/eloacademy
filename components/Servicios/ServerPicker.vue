<template>
  <v-select
    v-model="defLocal"
    color="accent3"
    item-color="opposite"
    :items="servers"
    :rules="[(v) => !!v || 'Necesario']"
    required
    label="Servidor"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img
          max-width="40"
          :src="require(`@/assets/servers/${data.item}.png`)"
        />
      </v-avatar>
      {{ data.item }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-img
          :src="require(`@/assets/servers/${data.item}.png`)"
          max-height="50"
          max-width="50"
          class="mr-5"
        />
        {{ data.item }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  model: {
    prop: 'def',
    event: 'defchange',
  },
  props: {
    def: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      servers: ['LAS', 'BR', 'LAN', 'NA'],
    }
  },
  computed: {
    defLocal: {
      get() {
        return this.def
      },
      set(value) {
        this.$emit('defchange', value)
      },
    },
  },
}
</script>
