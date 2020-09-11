<template>
  <v-select
    v-model="defLocal"
    color="accent3"
    item-color="opposite"
    :rules="[(v) => !!v || 'Necesario']"
    required
    :items="queues"
    item-text="name"
    item-value="code"
    label="Cola"
  >
    <template v-slot:selection="data">
      <v-avatar>
        <v-img
          max-height="30"
          max-width="30"
          :src="require(`@/assets/queue/${data.item.avatar}.svg`)"
        />
      </v-avatar>
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template>
        <v-img
          :src="require(`@/assets/queue/${data.item.avatar}.svg`)"
          class="mr-5"
          max-height="30"
          max-width="30"
        />
        {{ data.item.name }}
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
      queues: [
        { code: 'false', name: 'Cola solo/dúo', avatar: 'Solo' },
        { code: 'true', name: 'Cola flexible', avatar: 'Flex' },
      ],
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
