<template>
  <v-select
    v-model="queueLocal"
    color="accent3"
    outlined
    item-color="opposite"
    required
    prepend-inner-icon="mdi-controller-classic"
    :items="queues"
    :rules="rules"
    item-text="name"
    item-value="code"
    label="Cola"
  >
    <template v-slot:selection="data">
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template>
        {{ data.item.name }}
      </template>
    </template>
  </v-select>
</template>

<script>
export default {
  model: {
    prop: 'queue',
    event: 'queueChanged',
  },
  props: {
    queue: {
      type: Boolean,
    },
  },
  data() {
    return {
      queues: [
        { code: false, name: 'Cola solo/dúo' },
        { code: true, name: 'Cola flexible' },
      ],
    }
  },
  computed: {
    rules() {
      return [(v) => v == 0 || v == 1 || 'Necesario']
    },
    queueLocal: {
      get() {
        return this.queue
      },
      set(value) {
        this.$emit('queueChanged', value)
      },
    },
  },
}
</script>
